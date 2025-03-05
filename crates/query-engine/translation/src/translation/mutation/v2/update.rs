//! Auto-generate update mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::helpers::{self, TableSourceAndReference};
use crate::translation::mutation::check_columns;
use crate::translation::query::filtering;
use crate::translation::query::values;
use ndc_models as models;
use nonempty::NonEmpty;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

use super::common::{self, get_nullable_predicate_argument, CheckArgument};

/// A representation of an auto-generated update mutation.
///
/// This can get us `UPDATE <table> [ SET <column> = <value>, ... ] WHERE <filter>`.
#[derive(Debug, Clone)]
pub enum UpdateMutation {
    UpdateByKey(UpdateByKey),
}

/// A representation of an auto-generated update mutation by a unique key.
#[derive(Debug, Clone)]
pub struct UpdateByKey {
    pub collection_name: models::CollectionName,
    pub description: String,
    pub schema_name: sql::ast::SchemaName,
    pub table_name: sql::ast::TableName,
    pub by_columns: NonEmpty<metadata::database::ColumnInfo>,
    pub columns_prefix: String,
    pub update_columns_argument_name: models::ArgumentName,
    pub pre_check: CheckArgument,
    pub post_check: CheckArgument,
    pub table_columns: BTreeMap<models::FieldName, metadata::database::ColumnInfo>,
}

/// Generate a update for each simple unique constraint on this table.
pub fn generate_update_by_unique(
    collection_name: &models::CollectionName,
    table_info: &database::TableInfo,
    mutations_prefix: Option<&String>,
) -> Vec<(models::ProcedureName, UpdateMutation)> {
    table_info
        .uniqueness_constraints
        .0
        .iter()
        .filter_map(|(db_constraint_name, keys)| {
            let (constraint_name, key_columns) =
                common::get_unique_constraint_name_and_key_columns(
                    "update",
                    collection_name,
                    db_constraint_name,
                    table_info,
                    keys,
                )?;

            let name = format!(
                "{}update_{collection_name}_by_{constraint_name}",
                common::get_version_prefix(mutations_prefix)
            )
            .into();

            let description = format!(
                "Update any row on the '{collection_name}' collection using the {}",
                common::description_keys(&keys.0.values().collect())
            );

            let update_mutation = UpdateMutation::UpdateByKey(UpdateByKey {
                schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
                table_name: sql::ast::TableName(table_info.table_name.clone()),
                collection_name: collection_name.clone(),
                by_columns: key_columns,
                columns_prefix: "key_".to_string(),
                update_columns_argument_name: "update_columns".into(),
                pre_check: CheckArgument {
                    argument_name: "pre_check".into(),
                    description: format!(
                        "Update permission pre-condition predicate over the '{collection_name}' collection"
                    ),
                },
                post_check: CheckArgument {
                    argument_name: "post_check".into(),
                    description: format!(
                        "Update permission post-condition predicate over the '{collection_name}' collection"
                    ),
                },
                table_columns: table_info.columns.clone(),

                description,
            });

            Some((name, update_mutation))
        })
        .collect()
}

/// Given the description of an update mutation (ie, `UpdateMutation`),
/// and the arguments, output the SQL AST.
pub fn translate(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &UpdateMutation,
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<(sql::ast::Update, sql::ast::ColumnAlias), Error> {
    match mutation {
        UpdateMutation::UpdateByKey(mutation) => {
            let object = arguments
                .get(&mutation.update_columns_argument_name)
                .ok_or_else(|| {
                    Error::ArgumentNotFound(mutation.update_columns_argument_name.clone())
                })?;

            let set = parse_update_columns(env, state, mutation, object)?;

            let table_name_and_reference = TableSourceAndReference {
                source: helpers::TableSource::Collection(mutation.collection_name.clone()),
                reference: sql::ast::TableReference::DBTable {
                    schema: mutation.schema_name.clone(),
                    table: mutation.table_name.clone(),
                },
            };

            // Build the `UNIQUE_KEY = <value>, ...` boolean expression.
            let unique_expressions = mutation
                .by_columns
                .iter()
                .map(|by_column| {
                    let argument_name =
                        format!("{}{}", mutation.columns_prefix, by_column.name).into();
                    let unique_key = arguments
                        .get(&argument_name)
                        .ok_or(Error::ArgumentNotFound(argument_name))?;

                    let key_value =
                        values::translate(env, state, unique_key, &by_column.r#type).unwrap();

                    let unique_expression = sql::ast::Expression::BinaryOperation {
                        left: Box::new(sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::TableColumn {
                                table: table_name_and_reference.reference.clone(),
                                name: sql::ast::ColumnName(by_column.name.clone()),
                            },
                        )),
                        right: Box::new(key_value),
                        operator: sql::ast::BinaryOperator("=".to_string()),
                    };
                    Ok::<sql::ast::Expression, Error>(unique_expression)
                })
                .collect::<Result<Vec<sql::ast::Expression>, Error>>()?;

            let root_and_current_tables = helpers::TableScope::new(table_name_and_reference);

            // Build the `pre_constraint` argument boolean expression.
            let pre_predicate =
                get_nullable_predicate_argument(&mutation.pre_check.argument_name, arguments)?;

            let pre_predicate_expression =
                filtering::translate(env, state, &root_and_current_tables, &pre_predicate)?;

            // Build the `post_constraint` argument boolean expression.
            let post_predicate =
                get_nullable_predicate_argument(&mutation.post_check.argument_name, arguments)?;

            let post_predicate_expression =
                filtering::translate(env, state, &root_and_current_tables, &post_predicate)?;

            let check_constraint_alias =
                sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string());

            // Create a WHERE clause by combining the unique key expression and the pre condition.
            let where_ = sql::ast::Where(sql::ast::Expression::And {
                left: Box::new(sql::helpers::fold_and(unique_expressions)),
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
                let column_info = mutation.table_columns.get(name.as_str()).ok_or_else(|| {
                    Error::ColumnNotFoundInCollection(
                        name.clone().into(),
                        mutation.collection_name.clone(),
                    )
                })?;

                if let Some(value) =
                    parse_update_column(env, state, &name.as_str().into(), column_info, value)?
                {
                    columns_to_values.insert(sql::ast::ColumnName(column_info.name.clone()), value);
                }
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
    column_name: &models::FieldName,
    column_info: &metadata::database::ColumnInfo,
    object: &serde_json::Value,
) -> Result<Option<sql::ast::MutationValueExpression>, Error> {
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
                        Ok(Some(sql::ast::MutationValueExpression::Expression(
                            values::translate(env, state, value, &column_info.r#type)?,
                        )))
                    }
                    // Operation is not supported.
                    else {
                        Err(Error::UnexpectedOperation {
                            column_name: column_name.clone(),
                            operation: (*operation).clone(),
                            available_operations: vec!["_set".to_string()],
                        })
                    }
                }
            }
        }
        serde_json::Value::Null => Ok(None),
        // Unexpected structures.
        serde_json::Value::Array(_) => Err(Error::UnexpectedStructure(format!(
            "array structure in update column '{column_name}' argument. Expecting an object.",
        ))),
        _ => Err(Error::UnexpectedStructure(format!(
            "value structure in update '{column_name}' argument. Expecting an object.",
        ))),
    }
}

fn unexpected_operation_error(column_name: &models::FieldName, len: usize) -> Error {
    Error::UnexpectedStructure(
        format!("Column mapping in update for column '{column_name}' should contain exactly 1 operation, but got {len}.")
    )
}
