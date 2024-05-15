//! Auto-generate delete mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::helpers::{self, TableNameAndReference};
use crate::translation::query::filtering;
use crate::translation::query::values::translate_json_value;
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql::ast;
use std::collections::BTreeMap;

/// A representation of an auto-generated delete mutation.
///
/// This can get us `DELETE FROM <table> WHERE column = <column_name_arg>`.
#[derive(Debug, Clone)]
pub enum DeleteMutation {
    DeleteByKey {
        description: String,
        collection_name: String,
        schema_name: ast::SchemaName,
        table_name: ast::TableName,
        by_column: metadata::database::ColumnInfo,
        filter: Filter,
    },
}

/// The name and description of the filter input argument.
#[derive(Debug, Clone)]
pub struct Filter {
    pub argument_name: String,
    pub description: String,
}

/// Get all columns that have a uniqueness constraints by themselves in a particular table.
/// For now, we can delete using any uniqueness constraint with one column in it.
fn get_non_compound_uniqueness_constraints(table_info: &database::TableInfo) -> Vec<String> {
    table_info
        .uniqueness_constraints
        .0
        .iter()
        .filter_map(|(_constraint_name, constraint_set)| {
            if constraint_set.0.len() == 1 {
                constraint_set.0.first().cloned()
            } else {
                None
            }
        })
        .collect()
}

/// generate a delete for each simple unique constraint on this table
pub fn generate_delete_by_unique(
    collection_name: &String,
    table_info: &database::TableInfo,
) -> Vec<(String, DeleteMutation)> {
    get_non_compound_uniqueness_constraints(table_info)
        .iter()
        .filter_map(|key| table_info.columns.get(key))
        .map(|unique_column| {
            let name = format!(
                "experimental_delete_{}_by_{}",
                collection_name, unique_column.name
            );

            let description = format!(
                "Delete any value on the '{}' collection using the '{}' key",
                collection_name, unique_column.name
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: ast::SchemaName(table_info.schema_name.clone()),
                table_name: ast::TableName(table_info.table_name.clone()),
                collection_name: collection_name.clone(),
                by_column: unique_column.clone(),
                filter: Filter {
                    argument_name: "filter".to_string(),
                    description: format!(
                        "Delete permission predicate over the '{collection_name}' collection"
                    ),
                },
                description,
            };

            (name, delete_mutation)
        })
        .collect()
}

/// Given the description of a delete mutation (ie, `DeleteMutation`), and the arguments, output the SQL AST.
pub fn translate_delete(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    delete: &DeleteMutation,
    arguments: &BTreeMap<String, serde_json::Value>,
) -> Result<ast::Delete, Error> {
    match delete {
        DeleteMutation::DeleteByKey {
            collection_name,
            schema_name,
            table_name,
            by_column,
            filter,
            description: _,
        } => {
            // The root table we are going to be deleting from.
            let table = ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

            let table_name_and_reference = TableNameAndReference {
                name: collection_name.clone(),
                reference: ast::TableReference::AliasedTable(table_alias.clone()),
            };

            let from = ast::From::Table {
                reference: table,
                alias: table_alias.clone(),
            };

            // Build the `UNIQUE_KEY = <value>` boolean expression.
            let unique_key = arguments
                .get(&by_column.name)
                .ok_or(Error::ArgumentNotFound(by_column.name.clone()))?;

            let key_value =
                translate_json_value(env, state, unique_key, &by_column.r#type).unwrap();

            let unique_expression = ast::Expression::BinaryOperation {
                left: Box::new(ast::Expression::ColumnReference(
                    ast::ColumnReference::TableColumn {
                        table: ast::TableReference::AliasedTable(table_alias),
                        name: ast::ColumnName(by_column.name.clone()),
                    },
                )),
                right: Box::new(key_value),
                operator: ast::BinaryOperator("=".to_string()),
            };

            // Build the `filter` argument boolean expression.
            let predicate_json = arguments
                .get(&filter.argument_name)
                .ok_or(Error::ArgumentNotFound(filter.argument_name.clone()))?;

            let predicate: models::Expression = serde_json::from_value(predicate_json.clone())
                .map_err(|_| Error::ArgumentNotFound(filter.argument_name.clone()))?;

            let predicate_expression = filtering::translate_expression(
                env,
                state,
                &helpers::RootAndCurrentTables {
                    root_table: table_name_and_reference.clone(),
                    current_table: table_name_and_reference.clone(),
                },
                &predicate,
            )?;

            let where_ = ast::Expression::And {
                left: Box::new(unique_expression),
                right: Box::new(predicate_expression),
            };

            Ok(ast::Delete {
                from,
                where_: ast::Where(where_),
                returning: ast::Returning::ReturningStar,
            })
        }
    }
}
