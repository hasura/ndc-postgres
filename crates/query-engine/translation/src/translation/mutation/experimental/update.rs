//! Auto-generate update mutations and translate them into sql ast.

use super::unique_constraints::get_non_compound_uniqueness_constraints;
use crate::translation::error::Error;
use crate::translation::helpers::{self, TableNameAndReference};
use crate::translation::mutation::check_columns;
use crate::translation::query::filtering;
use crate::translation::query::values::translate_json_value;
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

/// A representation of an auto-generated update mutation.
///
/// This can get us `UPDATE <table> [ SET <column> = <value> ] WHERE <filter>`.
#[derive(Debug, Clone)]
pub enum UpdateMutation {
    UpdateByKey(UpdateByKey),
}

/// A representation of an auto-generated update mutation by a unique key.
#[derive(Debug, Clone)]
pub struct UpdateByKey {
    pub collection_name: String,
    pub description: String,
    pub schema_name: sql::ast::SchemaName,
    pub table_name: sql::ast::TableName,
    pub by_column: metadata::database::ColumnInfo,
    pub update_columns_argument_name: String,
    pub pre_check: Constraint,
    pub post_check: Constraint,
    pub table_columns: BTreeMap<String, metadata::database::ColumnInfo>,
}

/// The name and description of the constraint input argument.
#[derive(Debug, Clone)]
pub struct Constraint {
    pub argument_name: String,
    pub description: String,
}

/// Generate a update for each simple unique constraint on this table.
pub fn generate_update_by_unique(
    collection_name: &String,
    table_info: &database::TableInfo,
) -> Vec<(String, UpdateMutation)> {
    get_non_compound_uniqueness_constraints(table_info)
        .iter()
        .filter_map(|key| table_info.columns.get(key))
        .map(|unique_column| {
            let name = format!(
                "experimental_update_{}_by_{}",
                collection_name, unique_column.name
            );

            let description = format!(
                "Update any row on the '{}' collection using the '{}' key",
                collection_name, unique_column.name
            );

            let update_mutation = UpdateMutation::UpdateByKey(UpdateByKey {
                schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
                table_name: sql::ast::TableName(table_info.table_name.clone()),
                collection_name: collection_name.clone(),
                by_column: unique_column.clone(),
                update_columns_argument_name: "update_columns".to_string(),
                pre_check: Constraint {
                    argument_name: "pre_check".to_string(),
                    description: format!(
                "Update permission pre-condition predicate over the '{collection_name}' collection"
            ),
                },
                post_check: Constraint {
                    argument_name: "post_check".to_string(),
                    description: format!(
                "Update permission post-condition predicate over the '{collection_name}' collection"
            ),
                },
                table_columns: table_info.columns.clone(),

                description,
            });

            (name, update_mutation)
        })
        .collect()
}

/// Given the description of an update mutation (ie, `UpdateMutation`),
/// and the arguments, output the SQL AST.
pub fn translate(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &UpdateMutation,
    arguments: &BTreeMap<String, serde_json::Value>,
) -> Result<(sql::ast::Update, sql::ast::ColumnAlias), Error> {
    match mutation {
        UpdateMutation::UpdateByKey(mutation) => {
            let object = arguments
                .get(&mutation.update_columns_argument_name)
                .ok_or(Error::ArgumentNotFound(
                    mutation.update_columns_argument_name.clone(),
                ))?;

            let set = parse_update_columns(env, state, mutation, object)?;

            let table_name_and_reference = TableNameAndReference {
                name: mutation.collection_name.clone(),
                reference: sql::ast::TableReference::DBTable {
                    schema: mutation.schema_name.clone(),
                    table: mutation.table_name.clone(),
                },
            };

            // Build the `UNIQUE_KEY = <value>` boolean expression.
            let unique_key = arguments
                .get(&mutation.by_column.name)
                .ok_or(Error::ArgumentNotFound(mutation.by_column.name.clone()))?;

            let key_value =
                translate_json_value(env, state, unique_key, &mutation.by_column.r#type).unwrap();

            let unique_expression = sql::ast::Expression::BinaryOperation {
                left: Box::new(sql::ast::Expression::ColumnReference(
                    sql::ast::ColumnReference::TableColumn {
                        table: table_name_and_reference.reference.clone(),
                        name: sql::ast::ColumnName(mutation.by_column.name.clone()),
                    },
                )),
                right: Box::new(key_value),
                operator: sql::ast::BinaryOperator("=".to_string()),
            };

            // Build the `pre_constraint` argument boolean expression.
            let pre_predicate_json =
                arguments
                    .get(&mutation.pre_check.argument_name)
                    .ok_or(Error::ArgumentNotFound(
                        mutation.pre_check.argument_name.clone(),
                    ))?;

            let pre_predicate: models::Expression =
                serde_json::from_value(pre_predicate_json.clone()).map_err(|_| {
                    Error::ArgumentNotFound(mutation.pre_check.argument_name.clone())
                })?;

            let pre_predicate_expression = filtering::translate_expression(
                env,
                state,
                &helpers::RootAndCurrentTables {
                    root_table: table_name_and_reference.clone(),
                    current_table: table_name_and_reference.clone(),
                },
                &pre_predicate,
            )?;

            // Build the `post_constraint` argument boolean expression.
            let post_predicate_json = arguments.get(&mutation.post_check.argument_name).ok_or(
                Error::ArgumentNotFound(mutation.post_check.argument_name.clone()),
            )?;

            let post_predicate: models::Expression =
                serde_json::from_value(post_predicate_json.clone()).map_err(|_| {
                    Error::ArgumentNotFound(mutation.post_check.argument_name.clone())
                })?;

            let post_predicate_expression = filtering::translate_expression(
                env,
                state,
                &helpers::RootAndCurrentTables {
                    root_table: table_name_and_reference.clone(),
                    current_table: table_name_and_reference.clone(),
                },
                &post_predicate,
            )?;

            let check_constraint_alias =
                sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string());

            // Create a WHERE clause by combining the unique key expression and the pre condition.
            let where_ = sql::ast::Where(sql::ast::Expression::And {
                left: Box::new(unique_expression),
                right: Box::new(pre_predicate_expression),
            });

            // Create a SQL UPDATE statement.
            let update = sql::ast::Update {
                schema: mutation.schema_name.clone(),
                table: mutation.table_name.clone(),
                set,
                where_,
                returning: sql::ast::Returning(sql::ast::SelectList::SelectListComposite(
                    Box::new(sql::ast::SelectList::SelectStar),
                    Box::new(sql::ast::SelectList::SelectList(vec![(
                        check_constraint_alias.clone(),
                        post_predicate_expression,
                    )])),
                )),
            };

            Ok((update, check_constraint_alias))
        }
    }
}

/// Translate a single update object into a mapping from column names to values.
fn parse_update_columns(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &UpdateByKey,
    object: &serde_json::Value,
) -> Result<BTreeMap<sql::ast::ColumnName, sql::ast::MutationValueExpression>, Error> {
    let mut columns_to_values = BTreeMap::new();

    match object {
        serde_json::Value::Object(object) => {
            // For each field, look up the column name in the table
            // and update it and the value into the map.
            for (name, value) in object {
                let column_info =
                    mutation
                        .table_columns
                        .get(name)
                        .ok_or(Error::ColumnNotFoundInCollection(
                            name.clone(),
                            mutation.collection_name.clone(),
                        ))?;

                columns_to_values.insert(
                    sql::ast::ColumnName(column_info.name.clone()),
                    parse_update_column(env, state, name, column_info, value)?,
                );
            }
            Ok(())
        }
        serde_json::Value::Array(_) => Err(Error::UnexpectedStructure(format!(
            "array structure in update '{}' argument. Expecting an object.",
            mutation.update_columns_argument_name
        ))),
        _ => Err(Error::UnexpectedStructure(format!(
            "value structure in update '{}' argument. Expecting an object.",
            mutation.update_columns_argument_name
        ))),
    }?;

    check_columns::check_columns(
        &mutation.table_columns,
        &columns_to_values,
        &mutation.collection_name,
        &check_columns::CheckMissingColumns::No,
    )?;

    Ok(columns_to_values)
}

/// Translate the operation object of a column to a mutation value expression.
fn parse_update_column(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    column_name: &str,
    column_info: &metadata::database::ColumnInfo,
    object: &serde_json::Value,
) -> Result<sql::ast::MutationValueExpression, Error> {
    match object {
        serde_json::Value::Object(object) => {
            let vec = object.into_iter().collect::<Vec<_>>();

            // We expect exactly one operation.
            match vec.first() {
                None => Err(unexpected_operation_error(column_name, vec.len())),
                Some((operation, value)) => {
                    if vec.len() != 1 {
                        Err(unexpected_operation_error(column_name, vec.len()))?;
                    }
                    // _set operation.
                    if *operation == "_set" {
                        Ok(sql::ast::MutationValueExpression::Expression(
                            translate_json_value(env, state, value, &column_info.r#type)?,
                        ))
                    }
                    // Operation is not supported.
                    else {
                        Err(Error::UnexpectedOperation {
                            column_name: column_name.to_string(),
                            operation: (*operation).clone(),
                            available_operations: vec!["_set".to_string()],
                        })
                    }
                }
            }
        }
        // Unexpected structures.
        serde_json::Value::Array(_) => Err(Error::UnexpectedStructure(format!(
            "array structure in update column '{column_name}' argument. Expecting an object.",
        ))),
        _ => Err(Error::UnexpectedStructure(format!(
            "value structure in update '{column_name}' argument. Expecting an object.",
        ))),
    }
}

fn unexpected_operation_error(column_name: &str, len: usize) -> Error {
    Error::UnexpectedStructure(
        format!("Column mapping in update for column '{column_name}' should contain exactly 1 operation, but got {len}.")
    )
}
