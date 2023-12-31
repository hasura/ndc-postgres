//! Handle native queries translation after building the query.

use ndc_sdk::models;

use super::values;
use crate::translation::error::Error;
use crate::translation::helpers::State;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate native queries collected in State by the translation proccess into CTEs.
pub fn translate(state: State) -> Result<Vec<sql::ast::CommonTableExpression>, Error> {
    let mut ctes = vec![];
    let variables_table = state.get_variables_table();
    let native_queries = state.get_native_queries();

    // for each found table expression
    for native_query in native_queries {
        // convert metadata representation to sql::ast representation
        let sql: Vec<sql::ast::RawSql> = native_query
            .info
            .sql
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
                                values::translate_json_value(value, &typ)
                            }
                            models::Argument::Variable { name } => match &variables_table {
                                Err(err) => Err(err.clone()),
                                Ok(variables_table) => Ok(values::translate_variable(
                                    variables_table.clone(),
                                    name.clone(),
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
