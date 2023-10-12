use super::{error::Error, helpers::Env};
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Maps a binary comparison operator to their appropriate PostgreSQL name and arguments type.
pub fn translate_comparison_operator(
    env: &Env,
    left_type: &metadata::ScalarType,
    operator: &models::BinaryComparisonOperator,
) -> Result<(sql::ast::BinaryOperator, metadata::ScalarType), Error> {
    match operator {
        models::BinaryComparisonOperator::Equal => {
            Ok((sql::ast::BinaryOperator("=".to_string()), left_type.clone()))
        }
        models::BinaryComparisonOperator::Other { name } => {
            let op = env.lookup_comparison_operator(left_type, name)?;

            Ok((
                sql::ast::BinaryOperator(op.operator_name.clone()),
                op.argument_type.clone(),
            ))
        }
    }
}
