//! Handle the translation of literal values.

use crate::translation::error::Error;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use sql::ast::{Expression, Value};

/// Convert a JSON value into a SQL value.
pub fn translate_json_value(
    value: &serde_json::Value,
    scalar_type: &database::ScalarType,
) -> Result<sql::ast::Expression, Error> {
    let (exp, should_cast) = match value {
        serde_json::Value::Null => Ok((Expression::Value(Value::Null), true)),
        serde_json::Value::Bool(b) => Ok((Expression::Value(Value::Bool(*b)), false)),
        serde_json::Value::Number(n) => {
            let lit = n
                .as_f64()
                .ok_or(Error::UnableToDeserializeNumberAsF64(n.clone()))?;
            Ok((Expression::Value(Value::Float8(lit)), false))
        }
        serde_json::Value::String(str) => Ok((Expression::Value(Value::String(str.clone())), true)),
        serde_json::Value::Array(_) => Err(Error::NotImplementedYet("array literals".to_string())),
        serde_json::Value::Object(_) => {
            Err(Error::NotImplementedYet("object literals".to_string()))
        }
    }?;

    if should_cast {
        Ok(sql::ast::Expression::Cast {
            expression: Box::new(exp),
            r#type: sql::ast::ScalarType(scalar_type.0.clone()),
        })
    } else {
        Ok(exp)
    }
}

/// Convert a variable into a SQL value.
pub fn translate_variable(
    variables_table: sql::ast::TableReference,
    variable: String,
    scalar_type: &database::ScalarType,
) -> sql::ast::Expression {
    let exp = Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
        table: variables_table,
        column: sql::helpers::make_column_alias(variable),
    });

    sql::ast::Expression::Cast {
        expression: Box::new(exp),
        r#type: sql::ast::ScalarType(scalar_type.0.clone()),
    }
}