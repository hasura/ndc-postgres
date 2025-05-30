//! Handle the translation of literal values.

use crate::translation::{error::Error, helpers::Env, helpers::State};
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use query_engine_sql::sql::ast::{ColumnReference, Expression, Value};

/// Convert a JSON value into a SQL value.
pub fn translate(
    env: &Env,
    state: &mut State,
    value: &serde_json::Value,
    r#type: &database::Type,
) -> Result<sql::ast::Expression, Error> {
    match (value, r#type) {
        (serde_json::Value::Null, _) => Ok(Expression::Cast {
            expression: Box::new(Expression::Value(Value::Null)),
            r#type: type_to_ast_scalar_type(env, r#type)?,
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
            r#type: type_to_ast_scalar_type(env, r#type)?,
        }),
        (serde_json::Value::Array(_), database::Type::ArrayType(_)) => {
            let value_expression =
                sql::ast::Expression::Value(sql::ast::Value::JsonValue(value.clone()));
            translate_projected(env, state, r#type, value_expression)
        }
        (serde_json::Value::Object(_obj), database::Type::CompositeType(_type_name)) => {
            let value_expression =
                sql::ast::Expression::Value(sql::ast::Value::JsonValue(value.clone()));
            translate_projected(env, state, r#type, value_expression)
        }
        // If the type is not congruent with the value constructor we simply pass the json value
        // raw and cast to the specified type. This allows users to consume any json values,
        // treating them either as actual json or as any type that has a cast from json defined.
        _ => Ok(sql::ast::Expression::Cast {
            expression: Box::new(sql::ast::Expression::Cast {
                expression: Box::new(Expression::Value(Value::JsonValue(value.clone()))),
                r#type: sql::helpers::jsonb_type(),
            }),
            r#type: type_to_ast_scalar_type(env, r#type)?,
        }),
    }
}

/// Translate a NDC 'Type' to an SQL scalar type.
pub(crate) fn type_to_ast_scalar_type(
    env: &Env,
    typ: &database::Type,
) -> Result<sql::ast::ScalarType, Error> {
    match typ {
        query_engine_metadata::metadata::Type::ArrayType(t) => {
            let scalar_type_name = type_to_ast_scalar_type_name(env, t)?;
            Ok(sql::ast::ScalarType::ArrayType(scalar_type_name))
        }
        _ => Ok(sql::ast::ScalarType::BaseType(
            type_to_ast_scalar_type_name(env, typ)?,
        )),
    }
}

/// Translate a NDC 'Type' to an SQL type name.
pub(crate) fn type_to_ast_scalar_type_name(
    env: &Env,
    typ: &database::Type,
) -> Result<sql::ast::ScalarTypeName, Error> {
    match typ {
        query_engine_metadata::metadata::Type::ArrayType(_) => {
            Err(Error::NestedArrayTypesNotSupported)
        }
        query_engine_metadata::metadata::Type::ScalarType(t) => {
            let scalar_type: &query_engine_metadata::metadata::ScalarType =
                env.lookup_scalar_type(t)?;
            match scalar_type.schema_name.clone() {
                None => Ok(sql::ast::ScalarTypeName::Unqualified(
                    scalar_type.type_name.clone(),
                )),
                Some(schema_name) => Ok(sql::ast::ScalarTypeName::Qualified {
                    schema_name: sql::ast::SchemaName(schema_name),
                    type_name: scalar_type.type_name.clone(),
                }),
            }
        }
        query_engine_metadata::metadata::Type::CompositeType(t) => {
            let type_info = env.lookup_composite_type(t)?;
            let type_name = type_info.type_name().to_string();
            Ok(if let Some(schema_name) = type_info.schema_name() {
                sql::ast::ScalarTypeName::Qualified {
                    type_name,
                    schema_name: sql::ast::SchemaName(schema_name.to_string()),
                }
            } else {
                sql::ast::ScalarTypeName::Unqualified(type_name)
            })
        }
    }
}

/// Produce a SQL expression that translates an expression of Postgres type 'jsonb' into a given type.
///
/// For scalar types and object types this is a simple operation, since we can rely on builtin functions.
///
/// Arrays are more complex since there isn't a builtin function that handles array types.
pub(crate) fn translate_projected(
    env: &Env,
    state: &mut State,
    r#type: &database::Type,
    expression: sql::ast::Expression,
) -> Result<sql::ast::Expression, Error> {
    let result = match r#type {
        database::Type::CompositeType(_type_name) => sql::ast::Expression::FunctionCall {
            function: sql::ast::Function::JsonbPopulateRecord,
            args: vec![
                sql::ast::Expression::Cast {
                    expression: Box::new(sql::ast::Expression::Value(sql::ast::Value::Null)),
                    r#type: type_to_ast_scalar_type(env, r#type)?,
                },
                expression,
            ],
        },
        // We translate projection of array types into the following sql:
        // ```
        // ( SELECT
        //     array_agg(
        //       jsonb_populate_record(cast(null as <type>), "array"."element")
        //     ) AS "element"
        //   FROM
        //    jsonb_array_elements((<variable_table> -> <label>)) AS "array"("element")
        // )
        // ```
        database::Type::ArrayType(type_name) => {
            let array_table = state.make_table_alias("array".to_string());
            let element_column = sql::helpers::make_column_alias("element".to_string());

            let from_arr = sql::ast::From::JsonbArrayElements {
                expression,
                alias: array_table.clone(),
                column: element_column.clone(),
            };

            let element_expression =
                sql::ast::Expression::ColumnReference(ColumnReference::AliasedColumn {
                    table: sql::ast::TableReference::AliasedTable(array_table),
                    column: element_column.clone(),
                });

            let converted_element_exp =
                translate_projected(env, state, type_name, element_expression)?;

            // Create an empty array of the correct type to use as the default value
            let empty_array = sql::ast::Expression::Cast {
                expression: Box::new(sql::ast::Expression::Value(sql::ast::Value::Array(vec![]))),
                r#type: sql::ast::ScalarType::ArrayType(type_to_ast_scalar_type_name(
                    env, type_name,
                )?),
            };

            let mut result_select = sql::helpers::simple_select(vec![(
                element_column,
                // Use COALESCE to return an empty array instead of NULL when array_agg returns NULL
                sql::ast::Expression::FunctionCall {
                    function: sql::ast::Function::Coalesce,
                    args: vec![
                        sql::ast::Expression::FunctionCall {
                            function: sql::ast::Function::Unknown("array_agg".to_string()),
                            args: vec![converted_element_exp],
                        },
                        empty_array,
                    ],
                },
            )]);

            result_select.from = Some(from_arr);

            sql::ast::Expression::CorrelatedSubSelect(Box::new(result_select))
        }
        database::Type::ScalarType(_) => sql::ast::Expression::Cast {
            expression: Box::new(sql::ast::Expression::BinaryOperation {
                left: Box::new(expression),
                operator: sql::ast::BinaryOperator("#>>".to_string()),
                right: Box::new(sql::ast::Expression::Cast {
                    expression: Box::new(sql::ast::Expression::Value(sql::ast::Value::Array(
                        vec![],
                    ))),
                    r#type: sql::ast::ScalarType::ArrayType(sql::helpers::text_type_name()),
                }),
            }),
            r#type: type_to_ast_scalar_type(env, r#type)?,
        },
    };

    Ok(result)
}
