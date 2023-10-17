//! Handle 'rows' and 'aggregates' translation.

use std::collections::BTreeMap;

use indexmap::IndexMap;

use ndc_sdk::models;

use super::aggregates;
use super::error::Error;
use super::filtering;
use super::helpers::{CollectionInfo, Env, RootAndCurrentTables, State, TableNameAndReference};
use super::relationships;
use super::sorting;
use query_engine_sql::sql;

/// Translate aggregates query to sql ast.
pub fn translate_aggregate_query(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    from_clause: &sql::ast::From,
    query: &models::Query,
) -> Result<sql::ast::Select, Error> {
    // translate aggregates to select list
    let aggregate_fields = query.aggregates.clone().ok_or(Error::NoFields)?;

    // fail if no aggregates defined at all
    match IndexMap::is_empty(&aggregate_fields) {
        true => Err(Error::NoFields),
        false => Ok(()),
    }?;

    // create all aggregate columns
    let aggregate_columns = aggregates::translate(&current_table.reference, aggregate_fields)?;

    // create the select clause and the joins, order by, where clauses.
    // We don't add the limit afterwards.
    let mut select =
        translate_query_part(env, state, current_table, query, aggregate_columns, vec![])?;
    // we remove the order by part though because it is only relevant for group by clauses,
    // which we don't support at the moment.
    select.order_by = sql::helpers::empty_order_by();

    select.from = Some(from_clause.clone());

    Ok(select)
}

/// Translate rows part of query to sql ast.
pub fn translate_rows_query(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    from_clause: &sql::ast::From,
    query: &models::Query,
) -> Result<sql::ast::Select, Error> {
    // find the table according to the metadata.
    let collection_info = env.lookup_collection(&current_table.name)?;

    // join aliases
    let mut join_fields: Vec<relationships::JoinFieldInfo> = vec![];

    // translate fields to select list
    let fields = query.fields.clone().ok_or(Error::NoFields)?;

    // fail if no columns defined at all
    match IndexMap::is_empty(&fields) {
        true => Err(Error::NoFields),
        false => Ok(()),
    }?;

    // translate fields to columns or relationships.
    let columns: Vec<(sql::ast::ColumnAlias, sql::ast::Expression)> = fields
        .into_iter()
        .map(|(alias, field)| match field {
            models::Field::Column { column, .. } => {
                let column_info = collection_info.lookup_column(&column)?;
                Ok(sql::helpers::make_column(
                    current_table.reference.clone(),
                    column_info.name.clone(),
                    sql::helpers::make_column_alias(alias),
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
                join_fields.push(relationships::JoinFieldInfo {
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

    // create the select clause and the joins, order by, where clauses.
    // We'll add the limit afterwards.
    let mut select = translate_query_part(env, state, current_table, query, columns, join_fields)?;

    select.from = Some(from_clause.clone());

    // Add the limit.
    select.limit = sql::ast::Limit {
        limit: query.limit,
        offset: query.offset,
    };
    Ok(select)
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
    join_fields: Vec<relationships::JoinFieldInfo>,
) -> Result<sql::ast::Select, Error> {
    let root_table = current_table.clone();

    // the root table and the current table are the same at this point
    let root_and_current_tables = RootAndCurrentTables {
        root_table,
        current_table: current_table.clone(),
    };

    // construct a simple select with the table name, alias, and selected columns.
    let mut select = sql::helpers::simple_select(columns);

    // collect any joins for relationships
    let mut relationship_joins =
        relationships::translate_joins(env, state, &root_and_current_tables, join_fields)?;

    // translate order_by
    let (order_by, order_by_joins) =
        sorting::translate_order_by(env, state, &root_and_current_tables, &query.order_by)?;

    relationship_joins.extend(order_by_joins);

    // translate where
    let (filter, filter_joins) = match query.clone().predicate {
        None => Ok((
            sql::ast::Expression::Value(sql::ast::Value::Bool(true)),
            vec![],
        )),
        Some(predicate) => {
            filtering::translate_expression(env, state, &root_and_current_tables, &predicate)
        }
    }?;

    select.where_ = sql::ast::Where(filter);

    relationship_joins.extend(filter_joins);

    select.joins = relationship_joins;

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
    match &collection_info {
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
            let aliased_table =
                state.insert_native_query(name.clone(), info.clone(), arguments.clone());
            Ok(sql::ast::From::Table {
                reference: aliased_table,
                alias: current_table_alias.clone(),
            })
        }
    }
}
