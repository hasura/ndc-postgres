//! Auto-generate delete mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::helpers::{self, TableSourceAndReference};
use crate::translation::query::filtering;
use crate::translation::query::values;
use ndc_models as models;
use nonempty::NonEmpty;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

use super::common::{self, CheckArgument};

/// A representation of an auto-generated delete mutation.
///
/// This can get us `DELETE FROM <table> WHERE column = <column_name_arg>, ...`.
#[derive(Debug, Clone)]
pub enum DeleteMutation {
    DeleteByKey {
        description: String,
        collection_name: models::CollectionName,
        schema_name: sql::ast::SchemaName,
        table_name: sql::ast::TableName,
        by_columns: NonEmpty<metadata::database::ColumnInfo>,
        columns_prefix: String,
        pre_check: CheckArgument,
    },
}

/// generate a delete for each simple unique constraint on this table
pub fn generate_delete_by_unique(
    collection_name: &models::CollectionName,
    table_info: &database::TableInfo,
) -> Vec<(models::ProcedureName, DeleteMutation)> {
    table_info
        .uniqueness_constraints
        .0
        .iter()
        .filter_map(|(db_constraint_name, keys)| {
            let (constraint_name, key_columns) =
                common::get_unique_constraint_name_and_key_columns(
                    "delete",
                    collection_name,
                    db_constraint_name,
                    table_info,
                    keys,
                )?;

            let name = format!(
                "{}_delete_{collection_name}_by_{constraint_name}",
                super::VERSION
            )
            .into();

            let description = format!(
                "Delete any row on the '{collection_name}' collection using the {}",
                common::description_keys(&keys.0.values().collect())
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
                table_name: sql::ast::TableName(table_info.table_name.clone()),
                collection_name: collection_name.clone(),
                by_columns: key_columns,
                columns_prefix: "key_".to_string(),
                pre_check: CheckArgument {
                    argument_name: "pre_check".into(),
                    description: format!(
                        "Delete permission predicate over the '{collection_name}' collection"
                    ),
                },
                description,
            };

            Some((name, delete_mutation))
        })
        .collect()
}

/// Given the description of a delete mutation (ie, `DeleteMutation`), and the arguments, output the SQL AST.
pub fn translate(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    delete: &DeleteMutation,
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<(sql::ast::Delete, sql::ast::ColumnAlias), Error> {
    match delete {
        DeleteMutation::DeleteByKey {
            collection_name,
            schema_name,
            table_name,
            by_columns,
            columns_prefix,
            pre_check,
            description: _,
        } => {
            // The root table we are going to be deleting from.
            let table = sql::ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

            let table_name_and_reference = TableSourceAndReference {
                source: helpers::TableSource::Collection(collection_name.clone()),
                reference: sql::ast::TableReference::AliasedTable(table_alias.clone()),
            };

            let from = sql::ast::From::Table {
                reference: table,
                alias: table_alias.clone(),
            };

            // Build the `UNIQUE_KEY = <value>, ...` boolean expression.
            let unique_expressions = by_columns
                .iter()
                .map(|by_column| {
                    let argument_name = format!("{}{}", columns_prefix, by_column.name).into();
                    let unique_key = arguments
                        .get(&argument_name)
                        .ok_or(Error::ArgumentNotFound(argument_name))?;

                    let key_value =
                        values::translate(env, state, unique_key, &by_column.r#type).unwrap();

                    let unique_expression = sql::ast::Expression::BinaryOperation {
                        left: Box::new(sql::ast::Expression::ColumnReference(
                            sql::ast::ColumnReference::TableColumn {
                                table: sql::ast::TableReference::AliasedTable(table_alias.clone()),
                                name: sql::ast::ColumnName(by_column.name.clone()),
                            },
                        )),
                        right: Box::new(key_value),
                        operator: sql::ast::BinaryOperator("=".to_string()),
                    };
                    Ok::<sql::ast::Expression, Error>(unique_expression)
                })
                .collect::<Result<Vec<sql::ast::Expression>, Error>>()?;

            // Build the `pre_check` argument boolean expression.
            let predicate_json = arguments
                .get(&pre_check.argument_name)
                .ok_or(Error::ArgumentNotFound(pre_check.argument_name.clone()))?;

            let predicate: models::Expression = serde_json::from_value(predicate_json.clone())
                .map_err(|_| {
                    Error::UnexpectedStructure(format!(
                        "Argument '{}' should have an ndc-spec Expression structure",
                        pre_check.argument_name.clone()
                    ))
                })?;

            let predicate_expression = filtering::translate(
                env,
                state,
                &helpers::RootAndCurrentTables {
                    root_table: table_name_and_reference.clone(),
                    current_table: table_name_and_reference,
                },
                &predicate,
            )?;

            let where_ = sql::ast::Expression::And {
                left: Box::new(sql::helpers::fold_and(unique_expressions)),
                right: Box::new(predicate_expression),
            };

            // We add an always true constraint check to unify the mutations interface.
            let check_constraint_alias =
                sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string());
            let check_constraint_value = sql::helpers::true_expr();

            Ok((
                sql::ast::Delete {
                    from,
                    where_: sql::ast::Where(where_),
                    // RETURNING *, true
                    returning: sql::ast::Returning(sql::ast::SelectList::SelectListComposite(
                        Box::new(sql::ast::SelectList::SelectStar),
                        Box::new(sql::ast::SelectList::SelectList(vec![(
                            check_constraint_alias.clone(),
                            check_constraint_value,
                        )])),
                    )),
                },
                check_constraint_alias,
            ))
        }
    }
}
