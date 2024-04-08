//! Translate an incoming `QueryRequest`.

mod aggregates;
pub mod fields;
pub mod filtering;
pub mod native_queries;
pub mod relationships;
pub mod root;
mod sorting;
pub mod values;

use ndc_sdk::models;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State, TableNameAndReference};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate the incoming QueryRequest to an ExecutionPlan (SQL) to be run against the database.
pub fn translate(
    metadata: &metadata::Metadata,
    isolation_level: sql::ast::transaction::IsolationLevel,
    query_request: models::QueryRequest,
) -> Result<sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>, Error> {
    let mut state = State::new();
    let variables_from = state.make_variables_table(&query_request.variables);
    let variables_table_ref = variables_from.clone().map(|(_, table_ref)| table_ref);
    let env = Env::new(
        metadata,
        query_request.collection_relationships,
        None,
        variables_table_ref,
    );
    let (current_table, from_clause) = root::make_from_clause_and_reference(
        &query_request.collection,
        &query_request.arguments,
        &env,
        &mut state,
        None,
    )?;

    let select_set = translate_query(
        &env,
        &mut state,
        &current_table,
        &from_clause,
        &query_request.query,
    )?;

    // form a single JSON item shaped `{ rows: [], aggregates: {} }`
    // that matches the models::RowSet type
    let json_select = sql::helpers::select_rowset(
        (
            state.make_table_alias("universe".to_string()),
            sql::helpers::make_column_alias("universe".to_string()),
        ),
        (
            state.make_table_alias("rows".to_string()),
            sql::helpers::make_column_alias("rows".to_string()),
        ),
        (
            state.make_table_alias("aggregates".to_string()),
            sql::helpers::make_column_alias("aggregates".to_string()),
        ),
        variables_from,
        &state.make_table_alias("universe_agg".to_string()),
        // native queries if there are any
        sql::ast::With {
            common_table_expressions: native_queries::translate(&env, state)?,
        },
        select_set,
    );

    // normalize ast
    let json_select = sql::rewrites::constant_folding::normalize_select(json_select);

    Ok(sql::execution_plan::simple_query_execution_plan(
        isolation_level,
        query_request.variables,
        query_request.collection,
        json_select,
    ))
}

/// Translate a query to sql ast.
/// We return a SELECT for the 'rows' field and a SELECT for the 'aggregates' field.
pub fn translate_query(
    env: &Env,
    state: &mut State,
    current_table: &TableNameAndReference,
    from_clause: &sql::ast::From,
    query: &models::Query,
) -> Result<sql::helpers::SelectSet, Error> {
    // translate rows query.
    let row_select = root::translate_rows_query(env, state, current_table, from_clause, query)?;

    // translate aggregate select.
    let aggregate_select =
        root::translate_aggregate_query(env, state, current_table, from_clause, query)?;

    match (row_select, aggregate_select) {
        ((_, rows), None) => Ok(sql::helpers::SelectSet::Rows(rows)),
        ((root::ReturnsFields::NoFieldsWereRequested, _), Some(aggregates)) => {
            Ok(sql::helpers::SelectSet::Aggregates(aggregates))
        }
        ((root::ReturnsFields::FieldsWereRequested, rows), Some(aggregates)) => {
            Ok(sql::helpers::SelectSet::RowsAndAggregates(rows, aggregates))
        }
    }
}
