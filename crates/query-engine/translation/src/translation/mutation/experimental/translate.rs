//! Translate an incoming `MutationRequest`.

use std::collections::BTreeMap;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State};
use query_engine_sql::sql;

/// Translate a built-in delete mutation into an ExecutionPlan (SQL) to be run against the database.
/// This part is specialized for this mutations versions.
/// To be invoke from the main mutations translate function.
pub fn translate(
    env: &Env,
    state: &mut State,
    procedure_name: &str,
    arguments: &BTreeMap<String, serde_json::Value>,
) -> Result<(String, sql::ast::CTExpr), Error> {
    let mutation = lookup_generated_mutation(env, procedure_name)?;

    Ok(match mutation {
        super::generate::Mutation::DeleteMutation(delete) => {
            let return_collection = match delete {
                super::delete::DeleteMutation::DeleteByKey {
                    ref collection_name,
                    ..
                } => collection_name.clone(),
            };
            (
                return_collection,
                sql::ast::CTExpr::Delete(super::delete::translate_delete(
                    env, state, &delete, arguments,
                )?),
            )
        }
        super::generate::Mutation::InsertMutation(insert) => {
            let return_collection = insert.collection_name.clone();
            (
                return_collection,
                sql::ast::CTExpr::Insert(super::insert::translate(state, &insert, arguments)?),
            )
        }
    })
}

/// Auto-generate mutation procedures return the generated procedure
/// that matches the procedure name.
fn lookup_generated_mutation(
    env: &Env<'_>,
    procedure_name: &str,
) -> Result<super::generate::Mutation, Error> {
    // this means we generate them on every mutation request
    // i don't think this is optimal but I'd like to get this working before working out
    // where best to store these
    let generated = super::generate::generate(&env.metadata.tables);

    generated
        .get(procedure_name)
        .cloned()
        .ok_or(Error::ProcedureNotFound(procedure_name.to_string()))
}
