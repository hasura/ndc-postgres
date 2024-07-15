//! Handle native queries translation after building the query.

use ndc_models as models;
use ref_cast::RefCast;

use super::values;
use crate::translation::error::Error;
use crate::translation::helpers::{Env, State, TableAliasIndex};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate native queries collected in State by the translation proccess into CTEs.
pub fn translate(
    env: &Env,
    state: State,
) -> Result<(Vec<sql::ast::CommonTableExpression>, TableAliasIndex), Error> {
    let mut ctes = vec![];
    let variables_table = env.get_variables_table();
    let (native_queries, global_table_index) = state.get_native_queries_and_global_index();

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
                    let typ = match native_query
                        .info
                        .arguments
                        .get(models::ArgumentName::ref_cast(&param))
                    {
                        None => Err(Error::ArgumentNotFound(param.to_string().into())),
                        Some(argument) => Ok(argument.r#type.clone()),
                    }?;
                    let exp = match native_query
                        .arguments
                        .get(models::ArgumentName::ref_cast(&param))
                    {
                        None => Err(Error::ArgumentNotFound(param.to_string().into())),
                        Some(argument) => match argument {
                            models::Argument::Literal { value } => values::translate_json_value(
                                env,
                                &mut translation_state,
                                value,
                                &typ,
                            ),
                            models::Argument::Variable { name } => match &variables_table {
                                Err(err) => Err(err.clone()),
                                Ok(variables_table) => values::translate_variable(
                                    env,
                                    &mut translation_state,
                                    variables_table.clone(),
                                    name,
                                    &typ,
                                ),
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

    Ok((ctes, global_table_index))
}

/// Wrap a CTE in another CTE so we can guard against mutations in queries.
pub fn wrap_cte_in_cte(
    table_alias_index: &mut TableAliasIndex,
    mut cte: sql::ast::CommonTableExpression,
) -> sql::ast::CommonTableExpression {
    // This is the name the rest of the query knows, so we keep it on the outer parts.
    let outer_cte_alias = cte.alias;

    // this is going to be internal, so we replace the CTE.
    cte.alias = table_alias_index.make_table_alias(outer_cte_alias.name.clone());

    // build the internal `WITH <CTE> SELECT * FROM CTE as <nested_cte_alias>`.
    let nested_cte_alias = table_alias_index.make_table_alias(outer_cte_alias.name.clone());

    let nested_cte_select = sql::ast::CTExpr::Select({
        let mut select = sql::helpers::star_select(sql::ast::From::Table {
            reference: sql::ast::TableReference::AliasedTable(cte.alias.clone()),
            alias: nested_cte_alias,
        });
        select.with = sql::ast::With {
            common_table_expressions: vec![cte],
        };
        select
    });

    // wrap in another CTE.
    sql::ast::CommonTableExpression {
        alias: outer_cte_alias,
        column_names: None,
        select: nested_cte_select,
    }
}
