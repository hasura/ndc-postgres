//! Auto-generate delete mutations and translate them into sql ast.

use super::unique_constraints::get_non_compound_uniqueness_constraints;
use crate::translation::error::Error;
use crate::translation::helpers::{self, TableNameAndReference};
use crate::translation::query::filtering;
use crate::translation::query::values::translate_json_value;
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

/// A representation of an auto-generated delete mutation.
///
/// This can get us `DELETE FROM <table> WHERE column = <column_name_arg>`.
#[derive(Debug, Clone)]
pub enum DeleteMutation {
    DeleteByKey {
        description: String,
        collection_name: String,
        schema_name: sql::ast::SchemaName,
        table_name: sql::ast::TableName,
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
                "Delete any row on the '{}' collection using the '{}' key",
                collection_name, unique_column.name
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
                table_name: sql::ast::TableName(table_info.table_name.clone()),
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
) -> Result<(sql::ast::Delete, sql::ast::ColumnAlias), Error> {
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
            let table = sql::ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

            let table_name_and_reference = TableNameAndReference {
                name: collection_name.clone(),
                reference: sql::ast::TableReference::AliasedTable(table_alias.clone()),
            };

            let from = sql::ast::From::Table {
                reference: table,
                alias: table_alias.clone(),
            };

            // Build the `UNIQUE_KEY = <value>` boolean expression.
            let unique_key = arguments
                .get(&by_column.name)
                .ok_or(Error::ArgumentNotFound(by_column.name.clone()))?;

            let key_value =
                translate_json_value(env, state, unique_key, &by_column.r#type).unwrap();

            let unique_expression = sql::ast::Expression::BinaryOperation {
                left: Box::new(sql::ast::Expression::ColumnReference(
                    sql::ast::ColumnReference::TableColumn {
                        table: sql::ast::TableReference::AliasedTable(table_alias),
                        name: sql::ast::ColumnName(by_column.name.clone()),
                    },
                )),
                right: Box::new(key_value),
                operator: sql::ast::BinaryOperator("=".to_string()),
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

            let where_ = sql::ast::Expression::And {
                left: Box::new(unique_expression),
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
