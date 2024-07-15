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
use crate::translation::helpers::{
    CollectionInfo, Env, RootAndCurrentTables, State, TableNameAndReference,
};
use query_engine_sql::sql;

/// Translate a query to sql ast.
/// We return a select set with a SQL query for the two components - the rows and the aggregates.
pub fn translate_query(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: &Option<JoinPredicate<'_, '_>>,
    query_request: &models::Query,
) -> Result<sql::helpers::SelectSet, Error> {
    // translate rows selection.
    let row_select = translate_rows_select(env, state, make_from, join_predicate, query_request)?;

    // translate aggregate selection.
    let aggregate_select =
        translate_aggregate_select(env, state, make_from, join_predicate, query_request)?;

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
fn translate_aggregate_select(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: &Option<JoinPredicate<'_, '_>>,
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
            let from_alias = state.make_table_alias(table.name.to_string());
            let from = sql::ast::From::Select {
                select: Box::new(inner_query),
                alias: from_alias.clone(),
            };
            let current_table = TableNameAndReference {
                name: table.name,
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
fn translate_rows_select(
    env: &Env,
    state: &mut State,
    make_from: &MakeFrom,
    join_predicate: &Option<JoinPredicate<'_, '_>>,
    query: &models::Query,
) -> Result<(ReturnsFields, sql::ast::Select), Error> {
    let (current_table, from_clause) = make_reference_and_from_clause(env, state, make_from)?;

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
    let mut fields_select = fields::translate_fields(
        env,
        state,
        fields,
        &current_table,
        from_clause,
        &mut join_relationship_fields,
    )?;

    // Translate the common part of the query - where, order by, limit, etc.
    translate_query_part(
        env,
        state,
        &current_table,
        join_predicate,
        query,
        &mut fields_select,
    )?;

    // collect any joins for relationships from fields selection.
    let relationship_joins =
        relationships::translate_joins(env, state, &current_table, join_relationship_fields)?;

    fields_select.joins.extend(relationship_joins);

    Ok((returns_fields, fields_select))
}

/// Translate the lion (or common) part of 'rows' or 'aggregates' part of a query.
/// Specifically, from, joins, order bys, where, limit and offset clauses.
///
/// This expects to get the relevant information about tables, relationships, the root table,
/// and the query, as well as the columns and join fields after processing.
pub fn translate_query_part(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    join_predicate: &Option<JoinPredicate<'_, '_>>,
    query: &models::Query,
    select: &mut sql::ast::Select,
) -> Result<(), Error> {
    // the root table and the current table are the same at this point
    let root_and_current_tables = RootAndCurrentTables {
        root_table: current_table.clone(),
        current_table: current_table.clone(),
    };

    // translate order_by
    let (order_by, order_by_joins) =
        sorting::translate_order_by(env, state, &root_and_current_tables, &query.order_by)?;

    select.joins.extend(order_by_joins);

    // translate where
    let filter = match &query.predicate {
        None => Ok(sql::helpers::true_expr()),
        Some(predicate) => {
            filtering::translate_expression(env, state, &root_and_current_tables, predicate)
        }
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
) -> Result<(TableNameAndReference, sql::ast::From), Error> {
    let collection_alias = match collection_alias {
        None => state.make_table_alias(collection_name.to_string()),
        Some(alias) => alias,
    };
    // find the table according to the metadata.
    let collection_info = env.lookup_collection(collection_name)?;
    let from_clause = make_from_clause(state, &collection_alias, &collection_info, arguments);

    let collection_alias_name = sql::ast::TableReference::AliasedTable(collection_alias);
    let current_table = TableNameAndReference {
        name: collection_name.clone(),
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
    pub join_with: &'a TableNameAndReference,
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
) -> Result<(TableNameAndReference, sql::ast::From), Error> {
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
                TableNameAndReference {
                    name: name.clone(),
                    reference,
                },
                from_clause,
            ))
        }
    }
}
