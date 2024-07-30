//! Handle the translation of variables into SQL values.

use super::values;
use crate::translation::{error::Error, helpers::Env, helpers::State};
use ndc_models as models;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;

/// Convert a variable into a SQL value by selecting it from the variables table.
pub fn translate(
    env: &Env,
    state: &mut State,
    variables_table: sql::ast::TableReference,
    variable: &models::VariableName,
    r#type: &database::Type,
) -> Result<sql::ast::Expression, Error> {
    let variables_reference =
        sql::ast::Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
            table: variables_table,
            column: sql::helpers::make_column_alias(sql::helpers::VARIABLES_FIELD.to_string()),
        });

    // We use the binop '->' to project (as jsonb) the value of a variable from the data column of
    // the variable table.
    let projected_variable_exp = sql::ast::Expression::BinaryOperation {
        left: Box::new(variables_reference),
        operator: sql::helpers::json_extract_operator(),
        right: Box::new(sql::ast::Expression::Value(sql::ast::Value::String(
            variable.to_string(),
        ))),
    };

    values::translate_projected(env, state, r#type, projected_variable_exp)
}
