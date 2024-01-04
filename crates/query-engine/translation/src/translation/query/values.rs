//! Handle the translation of literal values.

use crate::translation::error::Error;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use sql::ast::{Expression, Value};

/// Convert a JSON value into a SQL value.
pub fn translate_json_value(
    value: &serde_json::Value,
    r#type: &database::Type,
) -> Result<sql::ast::Expression, Error> {
    match (value, r#type) {
        (serde_json::Value::Null, _) => Ok(Expression::Cast {
            expression: Box::new(Expression::Value(Value::Null)),
            r#type: type_to_ast_scalar_type(r#type),
        }),
        (serde_json::Value::Bool(b), _) => Ok(Expression::Value(Value::Bool(*b))),
        (serde_json::Value::Number(n), _) => {
            let lit = n
                .as_f64()
                .ok_or(Error::UnableToDeserializeNumberAsF64(n.clone()))?;
            Ok(Expression::Value(Value::Float8(lit)))
        }
        (serde_json::Value::String(str), _) => Ok(Expression::Cast {
            expression: Box::new(Expression::Value(Value::String(str.clone()))),
            r#type: type_to_ast_scalar_type(r#type),
        }),
        (serde_json::Value::Array(arr), database::Type::ArrayType(element_type)) => {
            let mut x: Vec<sql::ast::Expression> = vec![];

            for element in arr {
                x.push(translate_json_value(element, element_type)?)
            }

            Ok(Expression::Cast {
                expression: Box::new(Expression::ArrayConstructor(x)),
                r#type: type_to_ast_scalar_type(r#type),
            })
        }
        // If the type is not congruent with the value constructor we simply pass the json value
        // raw and cast to the specified type. This allows users to consume any json values,
        // treating them either as actual json or as any type that has a cast from json defined.
        _ => {
            let stringified = serde_json::to_string(value)
                .map_err(|err| Error::UnableToSerializeJsonValueToString(err.to_string()))?;
            Ok(sql::ast::Expression::Cast {
                expression: Box::new(sql::ast::Expression::Cast {
                    expression: Box::new(Expression::Value(Value::String(stringified))),
                    r#type: sql::ast::ScalarType("jsonb".to_string()),
                }),
                r#type: type_to_ast_scalar_type(r#type),
            })
        }
    }
}

/// Translate a NDC 'Type' to an SQL type name.
fn type_to_ast_scalar_type(typ: &database::Type) -> sql::ast::ScalarType {
    match typ {
        query_engine_metadata::metadata::Type::ArrayType(t) => {
            // This will add multiple '[]'-suffixes when the input type represents a nested array.
            // Postgresql does not have a notion of nested arrays at the type level, but accepts
            // the array-of-arrays syntax for type names, simply interpreting it as though there
            // were only a single pair of square brackets (e.g., 'int[][][]' simply becomes
            // 'int[]'), which is what we want.
            let scalar_type = type_to_ast_scalar_type(t).0;
            sql::ast::ScalarType(scalar_type + "[]")
        }
        query_engine_metadata::metadata::Type::ScalarType(t) => sql::ast::ScalarType(t.0.clone()),
        query_engine_metadata::metadata::Type::CompositeType(t) => {
            sql::ast::ScalarType(t.type_name.clone())
        }
    }
}

/// Convert a variable into a SQL value.
pub fn translate_variable(
    variables_table: sql::ast::TableReference,
    variable: String,
    r#type: &database::Type,
) -> sql::ast::Expression {
    let exp = Expression::ColumnReference(sql::ast::ColumnReference::AliasedColumn {
        table: variables_table,
        column: sql::helpers::make_column_alias(variable),
    });

    sql::ast::Expression::Cast {
        expression: Box::new(exp),
        r#type: type_to_ast_scalar_type(r#type),
    }
}
