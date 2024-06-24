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
) -> Result<(String, sql::ast::CTExpr, sql::ast::ColumnAlias), Error> {
    let mutation = lookup_generated_mutation(env, procedure_name)?;

    Ok(match mutation {
        super::generate::Mutation::DeleteMutation(delete) => {
            let return_collection = match delete {
                super::delete::DeleteMutation::DeleteByKey {
                    ref collection_name,
                    ..
                } => collection_name.clone(),
            };

            let (delete_cte, check_constraint_alias) =
                super::delete::translate(env, state, &delete, arguments)?;

            (
                return_collection,
                sql::ast::CTExpr::Delete(delete_cte),
                check_constraint_alias,
            )
        }
        super::generate::Mutation::InsertMutation(insert) => {
            let (insert_cte, check_constraint_alias) =
                super::insert::translate(env, state, &insert, arguments)?;

            let return_collection = insert.collection_name.clone();

            (
                return_collection,
                sql::ast::CTExpr::Insert(insert_cte),
                check_constraint_alias,
            )
        }
        super::generate::Mutation::UpdateMutation(update) => {
            let (update_cte, check_constraint_alias) =
                super::update::translate(env, state, &update, arguments)?;

            let super::update::UpdateMutation::UpdateByKey(update_by_key) = update;

            let return_collection = update_by_key.collection_name;

            (
                return_collection,
                sql::ast::CTExpr::Update(update_cte),
                check_constraint_alias,
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
