//! Handle aggregates translation.

use indexmap::IndexMap;

use ndc_models as models;

use crate::translation::{error::Error, helpers::wrap_in_field_path};
use query_engine_sql::sql;

/// Translate any aggregates we should include in the query into our SQL AST.
pub fn translate(
    table: &sql::ast::TableReference,
    aggregates: &IndexMap<models::FieldName, models::Aggregate>,
) -> Result<Vec<(sql::ast::ColumnAlias, sql::ast::Expression)>, Error> {
    aggregates
        .into_iter()
        .map(|(alias, aggregation)| {
            let expression = match aggregation {
                models::Aggregate::ColumnCount {
                    column,
                    distinct,
                    field_path,
                    arguments: _,
                } => {
                    let count_column_alias = sql::helpers::make_column_alias(column.to_string());

                    let column = wrap_in_field_path(
                        &field_path.into(),
                        sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: table.clone(),
                                column: count_column_alias,
                            },
                        ),
                    );

                    if *distinct {
                        sql::ast::Expression::Count(sql::ast::CountType::Distinct(Box::new(column)))
                    } else {
                        sql::ast::Expression::Count(sql::ast::CountType::Simple(Box::new(column)))
                    }
                }
                models::Aggregate::SingleColumn {
                    column,
                    function,
                    field_path,
                    arguments: _,
                } => {
                    let column = wrap_in_field_path(
                        &field_path.into(),
                        sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::AliasedColumn {
                                table: table.clone(),
                                column: sql::helpers::make_column_alias(column.to_string()),
                            },
                        ),
                    );
                    let aggregate_function_call_expression = sql::ast::Expression::FunctionCall {
                        function: sql::ast::Function::Unknown(function.to_string()),
                        args: vec![column],
                    };
                    // postgres SUM aggregate returns null if no input rows are provided
                    // however, the ndc spec requires that SUM aggregates over no input rows return 0
                    // we achieve this with COALESCE, falling back to 0 if the aggregate expression returns null
                    if function.as_str() == "sum" {
                        sql::ast::Expression::FunctionCall {
                            function: sql::ast::Function::Coalesce,
                            args: vec![
                                aggregate_function_call_expression,
                                sql::ast::Expression::Value(sql::ast::Value::Int4(0)),
                            ],
                        }
                    } else {
                        aggregate_function_call_expression
                    }
                }
                models::Aggregate::StarCount {} => {
                    sql::ast::Expression::Count(sql::ast::CountType::Star)
                }
            };
            Ok((
                sql::helpers::make_column_alias(alias.to_string()),
                expression,
            ))
        })
        .collect::<Result<Vec<_>, Error>>()
}
