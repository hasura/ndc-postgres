//! Translate an incoming `MutationRequest`.

use indexmap::indexmap;
use std::collections::BTreeMap;

use ndc_sdk::models;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State, TableNameAndReference};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate the incoming MutationOperation to an ExecutionPlan (SQL) to be run against the database.
pub fn translate(
    metadata: &metadata::Metadata,
    operation: models::MutationOperation,
    collection_relationships: BTreeMap<String, models::Relationship>,
) -> Result<sql::execution_plan::ExecutionPlan, Error> {
    // @todo: it would actually be nice to run all of the statements as one big query of the format:
    // ```
    // WITH
    //   stmt1 as ( delete ... returning *),
    //   stmt2 as ( insert into ... returning *)
    // SELECT affected_rows, returning FROM (SELECT 1 as "%mutation order", ... FROM stmt1 ...)
    // UNION ALL ... (SELECT 2 as "%mutation order", ... FROM stmt2 ...) ...
    // ...
    // ORDER BY "%mutation order" ASC
    // ```
    //
    // Or something like that.

    let env = Env::new(metadata, collection_relationships);
    let mut state = State::new();

    match operation {
        models::MutationOperation::Procedure {
            name,
            arguments,
            fields,
        } => {
            let procedure = env.lookup_procedure(&name)?;
            let arguments = arguments
                .into_iter()
                .map(|(key, value)| (key, models::Argument::Literal { value }))
                .collect();

            let table_alias = state.make_table_alias(name.to_string());
            let table_reference =
                state.insert_native_query(name.clone(), procedure.clone(), arguments);
            let current_table = TableNameAndReference {
                name: name.to_string(),
                reference: table_reference.clone(),
            };

            let from_clause = sql::ast::From::Table {
                reference: current_table.reference.clone(),
                alias: table_alias,
            };

            let query = models::Query {
                aggregates: Some(
                    indexmap!("affected_rows".to_string() => models::Aggregate::StarCount{}),
                ),
                fields,
                limit: None,
                offset: None,
                order_by: None,
                predicate: None,
            };

            let returning_select = crate::translation::query::root::translate_rows_query(
                &env,
                &mut state,
                &current_table,
                &from_clause,
                &query,
            )?;

            // translate aggregate select. if there are no fields, make this a None
            let aggregate_select = crate::translation::query::root::translate_aggregate_query(
                &env,
                &mut state,
                &current_table,
                &from_clause,
                &query,
            )?;

            let select_set =
                sql::helpers::SelectSet::RowsAndAggregates(returning_select, aggregate_select);

            // @todo: the result should actually be `affected_rows, returning`,
            // but we'll make a custom helper function and fix the format later.
            let mut select = sql::helpers::select_rowset(
                (
                    state.make_table_alias("universe".to_string()),
                    sql::helpers::make_column_alias("universe".to_string()),
                ),
                (
                    state.make_table_alias("returning".to_string()),
                    sql::helpers::make_column_alias("returning".to_string()),
                ),
                (
                    state.make_table_alias("aggregates".to_string()),
                    sql::helpers::make_column_alias("aggregates".to_string()),
                ),
                None,
                select_set,
            );

            // add native queries if there are any
            select.with = sql::ast::With {
                common_table_expressions: crate::translation::query::native_queries::translate(
                    state,
                )?,
            };

            // normalize ast
            let select = sql::rewrites::constant_folding::normalize_select(select);

            Ok(sql::execution_plan::simple_exec_plan(None, name, select))
        }
    }
}
