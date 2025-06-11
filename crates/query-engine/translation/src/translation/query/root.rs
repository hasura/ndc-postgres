//! Handle 'rows' and 'aggregates' translation.

use std::collections::BTreeMap;

use indexmap::IndexMap;

use ndc_models as models;

use super::aggregates;
use super::fields;
use super::filtering;
use super::relationships;
use super::sorting;
use crate::translation::error::Error;
use crate::translation::helpers::TableSource;
use crate::translation::helpers::{
    CollectionInfo, Env, State, TableScope, TableSourceAndReference,
};
use query_engine_sql::sql;

/// Translate a query to sql ast.
/// We return a select set with a SQL query for the two components - the rows and the aggregates.
pub fn translate_query(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query_request: &models::Query,
) -> Result<sql::helpers::SelectSet, Error> {
    // translate rows selection.
    let row_select = translate_rows(env, state, make_from, join_predicate, query_request)?;

    // translate aggregate selection.
    let aggregate_select =
        translate_aggregates(env, state, make_from, join_predicate, query_request)?;

    // Create a structure describing the selection set - only rows, only aggregates, or both.
    let select_set = match (row_select, aggregate_select) {
        // Both.
        ((ReturnsFields::FieldsWereRequested, rows), Some(aggregates)) => {
            sql::helpers::SelectSet::RowsAndAggregates(rows, aggregates)
        }
        // Only aggregates.
        ((ReturnsFields::NoFieldsWereRequested, _), Some(aggregates)) => {
            sql::helpers::SelectSet::Aggregates(aggregates)
        }
        // Only rows or Neither (This is valid. Returns empty objects).
        (
            (ReturnsFields::FieldsWereRequested | ReturnsFields::NoFieldsWereRequested, rows),
            None,
        ) => sql::helpers::SelectSet::Rows(rows),
    };

    Ok(select_set)
}

/// Translate aggregates query to sql ast.
fn translate_aggregates(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query: &models::Query,
) -> Result<Option<sql::ast::Select>, Error> {
    // fail if no aggregates defined at all
    match &query.aggregates {
        None => Ok(None),
        Some(aggregate_fields) => {
            let (table, from_clause) = make_reference_and_from_clause(env, state, make_from)?;
            let mut inner_query =
                sql::helpers::star_from_select(table.reference.clone(), from_clause);

            // Translate the common part of the query - where, order by, limit, etc.
            translate_query_part(env, state, &table, join_predicate, query, &mut inner_query)?;

            // Aggregate queries can't contain where, order by, and limit stuff on the same level.
            // So we wrap this query part in another query that performs the aggregation.

            // Create a from clause selecting from the inner query.
            let from_alias = state.make_table_alias(table.source.name_for_alias());
            let from = sql::ast::From::Select {
                select: Box::new(inner_query),
                alias: from_alias.clone(),
            };
            let current_table = TableSourceAndReference {
                source: table.source,
                reference: sql::ast::TableReference::AliasedTable(from_alias),
            };

            // create all aggregate columns
            let aggregate_columns =
                aggregates::translate(&current_table.reference, aggregate_fields)?;

            // construct a simple select with the table name, alias, and selected columns.
            let mut columns_select = sql::helpers::simple_select(aggregate_columns);
            columns_select.from = Some(from);

            Ok(Some(columns_select))
        }
    }
}

/// Whether this rows query returns fields or not.
pub enum ReturnsFields {
    FieldsWereRequested,
    NoFieldsWereRequested,
}

/// Translate rows part of query to sql ast.
///
/// To improve performance, we want to reduce the rows in scope as much as possible before performing any joins for relationships
/// To do this, we add a subquery with the where clause, any required joins, and possibly an order by and limit clause
/// If ordering by columns in another table, we instead add the order by, required joins, and limit to the parent query
/// If ordering in the subquery, we must also apply the order by in the parent, as ordering is not guaranteed after joins
///
/// Example: Order by a column on the target table
/// ```sql
/// SELECT
/// "%1_Album"."Title" AS "Title"
/// FROM
///   (
///     SELECT
///       "%0_Album".*
///     FROM
///       "public"."Album" AS "%0_Album"
///     ORDER BY
///       "%0_Album"."AlbumId" ASC
///     LIMIT
///       5
///   ) AS "%1_Album"
/// ORDER BY
///   "%1_Album"."AlbumId" ASC
/// ```
///
/// Example: Order by a related column
/// ```sql
/// SELECT
///   "%1_Album"."Title" AS "Name"
/// FROM
///   (
///     SELECT
///       "%0_Album".*
///     FROM
///       "public"."Album" AS "%0_Album"
///   ) AS "%1_Album"
///   LEFT OUTER JOIN LATERAL (
///     SELECT
///       "%2_ORDER_PART_Artist"."Name" AS "Name"
///     FROM
///       (
///         SELECT
///           "%2_ORDER_PART_Artist"."Name" AS "Name"
///         FROM
///           "public"."Artist" AS "%2_ORDER_PART_Artist"
///         WHERE
///           (
///             "%1_Album"."ArtistId" = "%2_ORDER_PART_Artist"."ArtistId"
///           )
///       ) AS "%2_ORDER_PART_Artist"
///   ) AS "%3_ORDER_FOR_Album" ON ('true')
/// ORDER BY
///   "%3_ORDER_FOR_Album"."Name" ASC
/// LIMIT
///   5 OFFSET 3
/// ```
fn translate_rows(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query: &models::Query,
) -> Result<(ReturnsFields, sql::ast::Select), Error> {
    // we want to put the where clause, including any required joins, in a subquery that is applied before any joins used to navigate relationships
    let (subquery_select, source) = rows_subquery(env, state, make_from, join_predicate, query)?;
    // create the parent query
    let alias = state.make_table_alias(source.name_for_alias());

    let current_table = TableSourceAndReference {
        source,
        reference: sql::ast::TableReference::AliasedTable(alias.clone()),
    };

    let current_table_scope = TableScope::new(current_table.clone());

    let from_clause = sql::ast::From::Select {
        select: Box::new(subquery_select),
        alias,
    };

    // join aliases
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
    let mut fields_select = fields::translate(
        env,
        state,
        fields,
        &current_table,
        from_clause,
        &mut join_relationship_fields,
    )?;

    // collect any joins for relationships from fields selection.
    let relationship_joins =
        relationships::translate(env, state, &current_table, join_relationship_fields)?;

    fields_select.joins.extend(relationship_joins);

    if order_by_crosses_relationships(query) {
        // if order by crosses a relationship, the order by clause and resulting joins are created at this level
        // the limit clause is also applied here
        let (order_by, order_by_joins) =
            sorting::translate(env, state, &current_table_scope, query.order_by.as_ref())?;

        fields_select.order_by = order_by;
        fields_select.joins.extend(order_by_joins);

        // Add the limit.
        fields_select.limit = sql::ast::Limit {
            limit: query.limit,
            offset: query.offset,
        };
    } else {
        // if we aren't ordering across a relationship, we expect joins to be empty, and the order by and limit to be applied in the subquery
        // however, we must repeat the order by clause, else ordering may not be guaranteed after joins
        let (order_by, _order_by_joins) =
            sorting::translate(env, state, &current_table_scope, query.order_by.as_ref())?;
        fields_select.order_by = order_by;
    }

    Ok((returns_fields, fields_select))
}

/// Create a subquery for rows
fn rows_subquery(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query: &models::Query,
) -> Result<(sql::ast::Select, TableSource), Error> {
    let (current_table, from_clause) = make_reference_and_from_clause(env, state, make_from)?;

    // the root table and the current table are the same at this point
    let subquery_table_scope = TableScope::new(current_table.clone());

    // we want to put the where clause, including any required joins, in a subquery that is applied before any joins used to navigate relationships
    // this improves performance on cockroachdb
    let mut subquery_select = sql::helpers::star_from_select(current_table.reference, from_clause);

    // Apply a join predicate if we want one.
    subquery_select.where_ = translate_where_with_join_predicate(
        env,
        state,
        join_predicate,
        query,
        &subquery_table_scope,
    )?;

    // unless there is an order by clause that traverses relationships, we can put the order by clause and limit in the subquery
    if !order_by_crosses_relationships(query) {
        // translate order_by
        // we expect order_by_joins to be empty, because we're not traversing any relationship
        let (order_by, _order_by_joins) =
            sorting::translate(env, state, &subquery_table_scope, query.order_by.as_ref())?;
        subquery_select.order_by = order_by;
        // Add the limit.
        subquery_select.limit = sql::ast::Limit {
            limit: query.limit,
            offset: query.offset,
        };
    };

    Ok((subquery_select, current_table.source))
}

fn translate_where_with_join_predicate(
    env: &Env,
    state: &mut State,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query: &models::Query,
    current_table_scope: &TableScope,
) -> Result<sql::ast::Where, Error> {
    // translate where
    let filter = match &query.predicate {
        None => Ok(sql::helpers::true_expr()),
        Some(predicate) => filtering::translate(env, state, current_table_scope, predicate),
    }?;

    // Apply a join predicate if we want one.
    Ok(match join_predicate {
        // Only apply the existing filter.
        None => sql::ast::Where(filter),
        Some(join_predicate) => {
            // Apply the join predicate.
            sql::ast::Where(relationships::translate_column_mapping(
                env,
                join_predicate.join_with,
                &current_table_scope.current_table().reference,
                filter, // AND with the existing filter.
                join_predicate.relationship,
            )?)
        }
    })
}

/// if any order by element contain a path that isn't empty, this query orders by fields in other tables
/// and will thus produce joins when generating the order by clause
fn order_by_crosses_relationships(query: &models::Query) -> bool {
    query.order_by.as_ref().is_some_and(|order_by| {
        order_by
            .elements
            .iter()
            .any(|element| match &element.target {
                ndc_models::OrderByTarget::Column { path, .. }
                | ndc_models::OrderByTarget::Aggregate { path, .. } => !path.is_empty(),
            })
    })
}

/// Translate the lion (or common) part of 'rows' or 'aggregates' part of a query.
/// Specifically, from, joins, order bys, where, limit and offset clauses.
///
/// This expects to get the relevant information about tables, relationships, the root table,
/// and the query, as well as the columns and join fields after processing.
pub fn translate_query_part(
    env: &Env,
    state: &mut State,
    current_table: &TableSourceAndReference,
    join_predicate: Option<&JoinPredicate<'_, '_>>,
    query: &models::Query,
    select: &mut sql::ast::Select,
) -> Result<(), Error> {
    let current_table_scope = TableScope::new(current_table.clone());

    // translate order_by
    let (order_by, order_by_joins) =
        sorting::translate(env, state, &current_table_scope, query.order_by.as_ref())?;

    select.joins.extend(order_by_joins);

    // translate where
    let filter = match &query.predicate {
        None => Ok(sql::helpers::true_expr()),
        Some(predicate) => filtering::translate(env, state, &current_table_scope, predicate),
    }?;

    // Apply a join predicate if we want one.
    match join_predicate {
        // Only apply the existing filter.
        None => {
            select.where_ = sql::ast::Where(filter);
        }
        Some(join_predicate) => {
            // Apply the join predicate.
            select.where_ = sql::ast::Where(relationships::translate_column_mapping(
                env,
                join_predicate.join_with,
                &current_table.reference,
                filter, // AND with the existing filter.
                join_predicate.relationship,
            )?);
        }
    }

    select.order_by = order_by;

    // Add the limit.
    select.limit = sql::ast::Limit {
        limit: query.limit,
        offset: query.offset,
    };

    Ok(())
}

/// Create a from clause from a collection name and its reference.
pub fn make_from_clause_and_reference(
    collection_name: &models::CollectionName,
    arguments: &BTreeMap<models::ArgumentName, models::Argument>,
    env: &Env,
    state: &mut State,
    collection_alias: Option<sql::ast::TableAlias>,
) -> Result<(TableSourceAndReference, sql::ast::From), Error> {
    let collection_alias = match collection_alias {
        None => state.make_table_alias(collection_name.to_string()),
        Some(alias) => alias,
    };
    // find the table according to the metadata.
    let collection_info = env.lookup_collection(collection_name)?;
    let from_clause = make_from_clause(state, &collection_alias, &collection_info, arguments);

    let collection_alias_name = sql::ast::TableReference::AliasedTable(collection_alias);
    let current_table = TableSourceAndReference {
        source: TableSource::Collection(collection_name.clone()),
        reference: collection_alias_name,
    };
    Ok((current_table, from_clause))
}

/// Build a FROM clause from a collection info and an alias.
/// Will add a Native Query to the 'State' if the collection is a native query.
fn make_from_clause(
    state: &mut State,
    current_table_alias: &sql::ast::TableAlias,
    collection_info: &CollectionInfo,
    arguments: &BTreeMap<models::ArgumentName, models::Argument>,
) -> sql::ast::From {
    match collection_info {
        CollectionInfo::Table { info, .. } => {
            let db_table = sql::ast::TableReference::DBTable {
                schema: sql::ast::SchemaName(info.schema_name.clone()),
                table: sql::ast::TableName(info.table_name.clone()),
            };
            sql::ast::From::Table {
                reference: db_table,
                alias: current_table_alias.clone(),
            }
        }
        CollectionInfo::NativeQuery { name, info } => {
            let aliased_table = state.insert_native_query(name, (*info).clone(), arguments.clone());
            sql::ast::From::Table {
                reference: aliased_table,
                alias: current_table_alias.clone(),
            }
        }
    }
}

/// Join predicate.
pub struct JoinPredicate<'a, 'b> {
    /// Join the current table with this table.
    pub join_with: &'a TableSourceAndReference,
    /// This is the description of the relationship.
    pub relationship: &'b models::Relationship,
}

/// Arguments to build a from clause.
pub enum MakeFrom {
    /// From a collection (db table, native query).
    Collection {
        /// Used for generating aliases.
        name: models::CollectionName,
        /// Native query arguments.
        arguments: BTreeMap<models::ArgumentName, models::Argument>,
    },
    /// From an existing relation.
    TableReference {
        /// Used for generating aliases.
        name: models::CollectionName,
        /// The reference name to the existing relation.
        reference: sql::ast::TableReference,
    },
}

/// Build a from clause and return the table name and reference.
fn make_reference_and_from_clause(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
) -> Result<(TableSourceAndReference, sql::ast::From), Error> {
    match make_from {
        MakeFrom::Collection { name, arguments } => {
            make_from_clause_and_reference(name, arguments, env, state, None)
        }
        MakeFrom::TableReference { name, reference } => {
            let table_alias = state.make_table_alias(name.to_string());
            let from_clause = sql::ast::From::Table {
                reference: reference.clone(),
                alias: table_alias.clone(),
            };
            let reference = sql::ast::TableReference::AliasedTable(table_alias);
            Ok((
                TableSourceAndReference {
                    source: TableSource::Collection(name.clone()),
                    reference,
                },
                from_clause,
            ))
        }
    }
}
