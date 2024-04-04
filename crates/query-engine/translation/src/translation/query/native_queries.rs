//! Handle native queries translation after building the query.

use ndc_sdk::models;

use super::values;
use crate::translation::error::Error;
use crate::translation::helpers::{Env, State};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate native queries collected in State by the translation proccess into CTEs.
pub fn translate(env: &Env, state: State) -> Result<Vec<sql::ast::CommonTableExpression>, Error> {
    let mut ctes = vec![];
    let variables_table = env.get_variables_table();
    let native_queries = state.get_native_queries();

    // We need a 'State' value when translating variables in order
    // to be able to generate fresh names for bound relational
    // expressions.
    // However, we cannot readily re-use the 'state' argument we're
    // given, since that is an "owned" value which is "moved" in
    // the course of iterating over the native queries accumulated
    // within.
    // Ideally we should resolve this by tracking native queries
    // separately from the fresh table name counter.
    let mut translation_state = State::new();

    // for each found table expression
    for native_query in native_queries {
        // convert metadata representation to sql::ast representation
        let sql: Vec<sql::ast::RawSql> = native_query
            .info
            .sql
            .sql()
            .map_err(Error::InternalError)?
            .0
            .into_iter()
            .map(|part| match part {
                metadata::NativeQueryPart::Text(text) => Ok(sql::ast::RawSql::RawText(text)),
                metadata::NativeQueryPart::Parameter(param) => {
                    let typ = match native_query.info.arguments.get(&param) {
                        None => Err(Error::ArgumentNotFound(param.clone())),
                        Some(argument) => Ok(argument.r#type.clone()),
                    }?;
                    let exp = match native_query.arguments.get(&param) {
                        None => Err(Error::ArgumentNotFound(param.clone())),
                        Some(argument) => match argument {
                            models::Argument::Literal { value } => {
                                values::translate_json_value(&mut translation_state, value, &typ)
                            }
                            models::Argument::Variable { name } => match &variables_table {
                                Err(err) => Err(err.clone()),
                                Ok(variables_table) => Ok(values::translate_variable(
                                    &mut translation_state,
                                    variables_table.clone(),
                                    name,
                                    &typ,
                                )),
                            },
                        },
                    }?;
                    Ok(sql::ast::RawSql::Expression(exp))
                }
            })
            .collect::<Result<Vec<sql::ast::RawSql>, Error>>()?;

        // add a cte
        ctes.push(sql::ast::CommonTableExpression {
            alias: native_query.alias,
            column_names: None,
            select: sql::ast::CTExpr::RawSql(sql),
        });
    }

    Ok(ctes)
}
