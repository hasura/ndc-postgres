//! Auto-generate delete mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::query::values::translate_json_value;
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
    },
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
            let name = format!("v1_delete_{}_by_{}", collection_name, unique_column.name);

            let description = format!(
                "Delete any value on the {} table using the {} key",
                collection_name, unique_column.name
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: ast::SchemaName(table_info.schema_name.clone()),
                table_name: ast::TableName(table_info.table_name.clone()),
                by_column: unique_column.clone(),
                collection_name: collection_name.clone(),
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
            schema_name,
            table_name,
            by_column,
            ..
        } => {
            // The root table we are going to be deleting from.
            let table = ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

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

            Ok(ast::Delete {
                from,
                where_: ast::Where(unique_expression),
                returning: ast::Returning::ReturningStar,
            })
        }
    }
}

#[cfg(test)]
mod tests {
    use super::ast;
    use super::translate_delete;
    use super::DeleteMutation;
    use crate::translation::helpers::Env;
    use crate::translation::helpers::State;
    use query_engine_metadata::metadata;
    use query_engine_sql::sql::string;
    use std::collections::BTreeMap;

    fn sample_delete() -> DeleteMutation {
        DeleteMutation::DeleteByKey {
            schema_name: ast::SchemaName("public".to_string()),
            table_name: ast::TableName("User".to_string()),
            collection_name: "User".to_string(),
            by_column: metadata::ColumnInfo {
                name: "user_id".to_string(),
                description: None,
                r#type: metadata::Type::ScalarType(metadata::ScalarTypeName("int4".to_string())),
                nullable: metadata::Nullable::NonNullable,
                has_default: metadata::HasDefault::NoDefault,
                is_identity: metadata::IsIdentity::NotIdentity,
                is_generated: metadata::IsGenerated::NotGenerated,
            },
            description: String::new(),
        }
    }

    #[test]
    fn delete_to_sql() {
        let delete = sample_delete();

        let mut state = State::new();

        let mut arguments = BTreeMap::new();
        arguments.insert("user_id".to_string(), serde_json::Value::Number(100.into()));

        let result =
            Env::with_empty(|env| translate_delete(&env, &mut state, &delete, &arguments).unwrap());

        let mut sql = string::SQL::new();
        result.to_sql(&mut sql);

        let pretty = sqlformat::format(
            &sql.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );

        insta::with_settings!({snapshot_path => "../../../../tests/snapshots"}, {
              insta::assert_snapshot!(pretty);

        });
    }
}
