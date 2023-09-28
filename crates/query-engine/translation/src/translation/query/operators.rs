use ndc_sdk::models;

use super::error::Error;
use query_engine_sql::sql;

pub fn translate_operator(
    operator: &models::BinaryComparisonOperator,
) -> Result<sql::ast::BinaryOperator, Error> {
    match operator {
        models::BinaryComparisonOperator::Equal => Ok(sql::ast::BinaryOperator::Equals),
        models::BinaryComparisonOperator::Other { name } => {
            lookup_by_name(name.as_str()).ok_or_else(|| Error::OperatorNotFound(name.clone()))
        }
    }
}

fn lookup_by_name(name: &str) -> Option<sql::ast::BinaryOperator> {
    match name {
        "_eq" => Some(sql::ast::BinaryOperator::Equals),
        "_neq" => Some(sql::ast::BinaryOperator::NotEquals),
        "_lt" => Some(sql::ast::BinaryOperator::LessThan),
        "_lte" => Some(sql::ast::BinaryOperator::LessThanOrEqualTo),
        "_gt" => Some(sql::ast::BinaryOperator::GreaterThan),
        "_gte" => Some(sql::ast::BinaryOperator::GreaterThanOrEqualTo),
        "_like" => Some(sql::ast::BinaryOperator::Like),
        "_nlike" => Some(sql::ast::BinaryOperator::NotLike),
        "_ilike" => Some(sql::ast::BinaryOperator::CaseInsensitiveLike),
        "_nilike" => Some(sql::ast::BinaryOperator::NotCaseInsensitiveLike),
        "_similar" => Some(sql::ast::BinaryOperator::Similar),
        "_nsimilar" => Some(sql::ast::BinaryOperator::NotSimilar),
        "_regex" => Some(sql::ast::BinaryOperator::Regex),
        "_nregex" => Some(sql::ast::BinaryOperator::NotRegex),
        "_iregex" => Some(sql::ast::BinaryOperator::CaseInsensitiveRegex),
        "_niregex" => Some(sql::ast::BinaryOperator::NotCaseInsensitiveRegex),
        _ => None,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // This test ties together the metadata and SQL comparison operators at test
    // time, so we can avoid coupling them at compile time.
    //
    // It is not completely clear that this is necessary; this is more of an
    // extra check. If it starts to become troublesome, we can remove it.
    //
    // This needs to live here because this module is private.
    #[test]
    fn test_metadata_binary_comparison_operators_are_in_sync_with_sql() {
        for metadata_operator in
            enum_iterator::all::<query_engine_metadata::metadata::database::ComparisonOperator>()
        {
            let name = metadata_operator.name();
            let sql_operator = lookup_by_name(name)
                .unwrap_or_else(|| panic!("{}", Error::OperatorNotFound(name.to_string())));
            // For lack of a better way to ensure we get the correct operator,
            // we can use their `Debug` representation. We may have to evolve
            // this if things become more sophisticated.
            assert_eq!(
                format!("{:?}", metadata_operator),
                format!("{:?}", sql_operator)
            );
        }
    }
}
