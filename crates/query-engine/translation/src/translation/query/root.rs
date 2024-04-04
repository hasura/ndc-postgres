//! Handle 'rows' and 'aggregates' translation.

use std::collections::BTreeMap;

use indexmap::IndexMap;

use ndc_sdk::models;

use super::aggregates;
use super::filtering;
use super::relationships;
use super::sorting;
use crate::translation::error::Error;
use crate::translation::helpers::{
    CollectionInfo, ColumnInfo, Env, RootAndCurrentTables, State, TableNameAndReference,
};
use query_engine_metadata::metadata::Type;
use query_engine_sql::sql;

/// Translate aggregates query to sql ast.
pub fn translate_aggregate_query(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    from_clause: &sql::ast::From,
    query: &models::Query,
) -> Result<Option<sql::ast::Select>, Error> {
    // fail if no aggregates defined at all
    match &query.aggregates {
        None => Ok(None),
        Some(aggregate_fields) => {
            // create all aggregate columns
            let aggregate_columns =
                aggregates::translate(&current_table.reference, aggregate_fields)?;

            // create the select clause and the joins, order by, where clauses.
            // We don't add the limit afterwards.
            let mut select = translate_query_part(
                env,
                state,
                current_table,
                query,
                aggregate_columns,
                vec![],
                vec![],
            )?;
            // we remove the order by part though because it is only relevant for group by clauses,
            // which we don't support at the moment.
            select.order_by = sql::helpers::empty_order_by();

            select.from = Some(from_clause.clone());

            Ok(Some(select))
        }
    }
}

/// Whether this rows query returns fields or not.
pub enum ReturnsFields {
    FieldsWereRequested,
    NoFieldsWereRequested,
}

/// This type collects the salient parts of joined-on subqueries that compute the result of a
/// nested field selection.
struct JoinNestedFieldInfo {
    select: sql::ast::Select,
    alias: sql::ast::TableAlias,
}

/// Translate a list of nested field joins into lateral joins.
fn transalate_nested_field_joins(joins: Vec<JoinNestedFieldInfo>) -> Vec<sql::ast::Join> {
    joins
        .into_iter()
        .map(|JoinNestedFieldInfo { select, alias }| {
            sql::ast::Join::LeftOuterJoinLateral(sql::ast::LeftOuterJoinLateral {
                select: Box::new(select),
                alias,
            })
        })
        .collect()
}

/// Translate the field-selection of a query to SQL.
/// Because field selection may be nested this function is mutually recursive with
/// 'translate_nested_field'.
fn translate_fields(
    env: &Env,
    state: &mut State,
    fields: IndexMap<String, models::Field>,
    current_table: &TableNameAndReference,
    join_nested_fields: &mut Vec<JoinNestedFieldInfo>,
    join_relationship_fields: &mut Vec<relationships::JoinFieldInfo>,
) -> Result<Vec<(sql::ast::ColumnAlias, sql::ast::Expression)>, Error> {
    // find the table according to the metadata.
    let type_info = env.lookup_composite_type(&current_table.name)?;

    let columns: Vec<(sql::ast::ColumnAlias, sql::ast::Expression)> = fields
        .into_iter()
        .map(|(alias, field)| match field {
            models::Field::Column {
                column,
                fields: None,
            } => {
                let column_info = type_info.lookup_column(&column)?;
                Ok(sql::helpers::make_column(
                    current_table.reference.clone(),
                    column_info.name.clone(),
                    sql::helpers::make_column_alias(alias),
                ))
            }
            models::Field::Column {
                column,
                fields: Some(nested_field),
            } => {
                let column_info = type_info.lookup_column(&column)?;
                let nested_column_reference = translate_nested_field(
                    env,
                    state,
                    current_table,
                    &column_info,
                    nested_field,
                    join_nested_fields,
                    join_relationship_fields,
                )?;
                Ok((
                    sql::helpers::make_column_alias(alias),
                    sql::ast::Expression::ColumnReference(nested_column_reference),
                ))
            }
            models::Field::Relationship {
                query,
                relationship,
                arguments,
            } => {
                let table_alias = state.make_relationship_table_alias(&alias);
                let column_alias = sql::helpers::make_column_alias(alias);
                let column_name = sql::ast::ColumnReference::AliasedColumn {
                    table: sql::ast::TableReference::AliasedTable(table_alias.clone()),
                    column: column_alias.clone(),
                };
                join_relationship_fields.push(relationships::JoinFieldInfo {
                    table_alias,
                    column_alias: column_alias.clone(),
                    relationship_name: relationship,
                    arguments,
                    query: *query,
                });
                Ok((
                    column_alias,
                    sql::ast::Expression::ColumnReference(column_name),
                ))
            }
        })
        .collect::<Result<Vec<_>, Error>>()?;
    Ok(columns)
}

/// Translate a nested field selection.
///
/// Nested fields are different from relationships in that the value of a nested field is already
/// avaliable on the current table as a column of composite type.
///
/// A nested field selection translates to SQL in the form of:
///
///   SELECT
///     coalesce(json_agg(row_to_json("%6_rows")), '[]') AS "rows"
///   FROM
///     (
///       SELECT
///         "%3_nested_fields_collect"."collected" AS "result"
///       FROM
///         <current table> AS "%0_<current table>"
///         LEFT OUTER JOIN LATERAL (
///           SELECT
///             ("%0_<current table>"."<composite column>").*
///         ) AS "%2_nested_field_bound" ON ('true')
///         LEFT OUTER JOIN LATERAL (
///           SELECT
///             row_to_json("%4_nested_fields") AS "collected"
///           FROM
///             (
///               SELECT
///                 "%2_nested_field_bound"."<nested column>" AS "<nested field alias>"
///             ) AS "%4_nested_fields"
///         ) AS "%3_nested_fields_collect" ON ('true')
///     ) AS "%6_rows"
///
/// # Arguments
///
/// * `current_table` - the table reference the column lives on
/// * `current_column` - the column to extract nested fields from
fn translate_nested_field(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    current_column: &ColumnInfo,
    field: models::NestedField,
    join_nested_fields: &mut Vec<JoinNestedFieldInfo>,
    join_relationship_fields: &mut Vec<relationships::JoinFieldInfo>,
) -> Result<sql::ast::ColumnReference, Error> {
    match field {
        models::NestedField::Object(models::NestedObject { fields }) => {
            // In order to bring the nested fields into scope for sub selections
            // we need to unpack them as selected columns of a bound relation.
            //
            // This becomes the SQL
            // ```
            // LEFT OUTER JOIN LATERAL (
            //   SELECT
            //     ("%0_<current table>"."<composite column>").*
            // ) AS "%2_nested_field_bound" ON ('true')
            // ```
            let nested_field_select = sql::helpers::select_composite(
                sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
                    table: current_table.reference.clone(),
                    column: sql::ast::ColumnAlias {
                        name: current_column.name.0.clone(),
                    },
                }),
            );
            let nested_field_select_alias =
                state.make_table_alias("nested_field_bound".to_string());

            // We add this unpacking select statement to the stack of joins so that it is in scope
            // for field-selection translation at the next level of nesting.
            join_nested_fields.push(JoinNestedFieldInfo {
                select: nested_field_select,
                alias: nested_field_select_alias.clone(),
            });

            // Now each field of the composite field is in scope, bound just like columns of a
            // table collection at the top level.
            // We are now ready to make the recursive call to translate the field selection one
            // more level down.selection one more level down.

            let nested_field_type_name = match &current_column.r#type {
                Type::CompositeType(type_name) => Ok(type_name.clone()),
                t => Err(Error::NestedFieldNotOfCompositeType {
                    field_name: current_column.name.0.clone(),
                    actual_type: t.clone(),
                }),
            }?;
            let nested_field_table_reference = TableNameAndReference {
                name: nested_field_type_name,
                reference: sql::ast::TableReference::AliasedTable(nested_field_select_alias),
            };

            let field_expressions = translate_fields(
                env,
                state,
                fields,
                &nested_field_table_reference,
                join_nested_fields,
                join_relationship_fields,
            )?;

            // With the select-list of field expressions at this level of nesting in hand from the
            // recursive call we can now collect these into a single json value for the composite
            // field which we are currently processing.

            let fields_select = sql::helpers::simple_select(field_expressions);
            let nested_field_table_collect_alias =
                state.make_table_alias("nested_fields_collect".to_string());
            let nested_field_column_collect_alias = sql::ast::ColumnAlias {
                name: "collected".to_string(),
            };
            let nested_field_join = JoinNestedFieldInfo {
                select: sql::helpers::select_row_as_json(
                    fields_select,
                    nested_field_column_collect_alias.clone(),
                    state.make_table_alias("nested_fields".to_string()),
                ),
                alias: nested_field_table_collect_alias.clone(),
            };

            join_nested_fields.push(nested_field_join);
            Ok(sql::ast::ColumnReference::AliasedColumn {
                table: sql::ast::TableReference::AliasedTable(nested_field_table_collect_alias),
                column: nested_field_column_collect_alias,
            })
        }
        models::NestedField::Array(_) => todo!(),
    }
}

/// Translate rows part of query to sql ast.
pub fn translate_rows_query(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    from_clause: &sql::ast::From,
    query: &models::Query,
) -> Result<(ReturnsFields, sql::ast::Select), Error> {
    // join aliases
    let mut join_nested_fields: Vec<JoinNestedFieldInfo> = vec![];
    let mut join_relationship_fields: Vec<relationships::JoinFieldInfo> = vec![];

    // translate fields to select list
    let fields = query.fields.clone().unwrap_or_default();

    // remember whether we fields were requested or not.
    // The case were fields were not requested, and also no aggregates were requested,
    // can be used for `__typename` queries.
    let returns_fields = if IndexMap::is_empty(&fields) {
        ReturnsFields::NoFieldsWereRequested
    } else {
        ReturnsFields::FieldsWereRequested
    };

    // translate fields to columns or relationships.
    let columns = translate_fields(
        env,
        state,
        fields,
        current_table,
        &mut join_nested_fields,
        &mut join_relationship_fields,
    )?;

    // create the select clause and the joins, order by, where clauses.
    // We'll add the limit afterwards.
    let mut select = translate_query_part(
        env,
        state,
        current_table,
        query,
        columns,
        join_nested_fields,
        join_relationship_fields,
    )?;

    select.from = Some(from_clause.clone());

    // Add the limit.
    select.limit = sql::ast::Limit {
        limit: query.limit,
        offset: query.offset,
    };
    Ok((returns_fields, select))
}

/// Translate the lion (or common) part of 'rows' or 'aggregates' part of a query.
/// Specifically, from, joins, order bys, and where clauses.
///
/// This expects to get the relevant information about tables, relationships, the root table,
/// and the query, as well as the columns and join fields after processing.
///
/// One thing that this doesn't do that you want to do for 'rows' and not 'aggregates' is
/// set the limit and offset so you want to do that after calling this function.
fn translate_query_part(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    query: &models::Query,
    columns: Vec<(sql::ast::ColumnAlias, sql::ast::Expression)>,
    join_nested_fields: Vec<JoinNestedFieldInfo>,
    join_relationship_fields: Vec<relationships::JoinFieldInfo>,
) -> Result<sql::ast::Select, Error> {
    let root_table = current_table.clone();

    // the root table and the current table are the same at this point
    let root_and_current_tables = RootAndCurrentTables {
        root_table,
        current_table: current_table.clone(),
    };

    // construct a simple select with the table name, alias, and selected columns.
    let mut select = sql::helpers::simple_select(columns);

    let nested_field_joins = transalate_nested_field_joins(join_nested_fields);

    select.joins.extend(nested_field_joins);

    // collect any joins for relationships
    let relationship_joins = relationships::translate_joins(
        env,
        state,
        &root_and_current_tables,
        join_relationship_fields,
    )?;

    select.joins.extend(relationship_joins);

    // translate order_by
    let (order_by, order_by_joins) =
        sorting::translate_order_by(env, state, &root_and_current_tables, &query.order_by)?;

    select.joins.extend(order_by_joins);

    // translate where
    let (filter, filter_joins) = match &query.predicate {
        None => Ok((sql::helpers::true_expr(), vec![])),
        Some(predicate) => {
            filtering::translate_expression(env, state, &root_and_current_tables, predicate)
        }
    }?;

    select.where_ = sql::ast::Where(filter);

    select.joins.extend(filter_joins);

    select.order_by = order_by;

    Ok(select)
}

/// Create a from clause from a collection name and its reference.
pub fn make_from_clause_and_reference(
    collection_name: &str,
    arguments: &BTreeMap<String, models::Argument>,
    env: &Env,
    state: &mut State,
    collection_alias: Option<sql::ast::TableAlias>,
) -> Result<(TableNameAndReference, sql::ast::From), Error> {
    let collection_alias = match collection_alias {
        None => state.make_table_alias(collection_name.to_string()),
        Some(alias) => alias,
    };
    let collection_alias_name = sql::ast::TableReference::AliasedTable(collection_alias.clone());

    // find the table according to the metadata.
    let collection_info = env.lookup_collection(collection_name)?;
    let from_clause = make_from_clause(state, &collection_alias, &collection_info, arguments)?;

    let current_table = TableNameAndReference {
        name: collection_name.to_string(),
        reference: collection_alias_name.clone(),
    };
    Ok((current_table, from_clause))
}

/// Build a FROM clause from a collection info and an alias.
/// Will add a Native Query to the 'State' if the collection is a native query.
fn make_from_clause(
    state: &mut State,
    current_table_alias: &sql::ast::TableAlias,
    collection_info: &CollectionInfo,
    arguments: &BTreeMap<String, models::Argument>,
) -> Result<sql::ast::From, Error> {
    match collection_info {
        CollectionInfo::Table { info, .. } => {
            let db_table = sql::ast::TableReference::DBTable {
                schema: sql::ast::SchemaName(info.schema_name.clone()),
                table: sql::ast::TableName(info.table_name.clone()),
            };

            Ok(sql::ast::From::Table {
                reference: db_table,
                alias: current_table_alias.clone(),
            })
        }
        CollectionInfo::NativeQuery { name, info } => {
            let aliased_table = state.insert_native_query(name, (*info).clone(), arguments.clone());
            Ok(sql::ast::From::Table {
                reference: aliased_table,
                alias: current_table_alias.clone(),
            })
        }
    }
}
