use super::error::Error;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

pub fn translate_operator(
    operator: &metadata::ComparisonOperator,
) -> Result<sql::ast::BinaryOperator, Error> {
    match &operator.operator_name {
        Some(op_name) => Ok(sql::ast::BinaryOperator(op_name.clone())),
        // TODO: Also match on procedure_name and generate prefix-function calls.
        None => Err(Error::NotSupported(
            "Translating binary comparisons that are not infix operators".to_string(),
        )),
    }
}
