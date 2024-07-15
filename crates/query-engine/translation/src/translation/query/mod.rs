//! Translate an incoming `QueryRequest`.

mod aggregates;
pub mod fields;
pub mod filtering;
pub mod native_queries;
pub mod relationships;
pub mod root;
mod sorting;
pub mod values;

use ndc_models as models;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate the incoming QueryRequest to an ExecutionPlan (SQL) to be run against the database.
pub fn translate(
    metadata: &metadata::Metadata,
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

    let select_set = root::translate_query(
        &env,
        &mut state,
        &root::MakeFrom::Collection {
            name: query_request.collection.clone(),
            arguments: query_request.arguments.clone(),
        },
        &None,
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
            common_table_expressions: {
                let (ctes, mut global_table_index) = native_queries::translate(&env, state)?;
                // wrap ctes in another cte to guard against mutations in queries
                ctes.into_iter()
                    .map(|cte| native_queries::wrap_cte_in_cte(&mut global_table_index, cte))
                    .collect()
            },
        },
        select_set,
    );

    // normalize ast
    let json_select = sql::rewrites::constant_folding::normalize_select(json_select);

    Ok(sql::execution_plan::simple_query_execution_plan(
        query_request.variables,
        query_request.collection,
        json_select,
    ))
}
