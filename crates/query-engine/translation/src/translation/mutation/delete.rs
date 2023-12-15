use crate::translation::query::values::translate_json_value;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql::ast;
use std::collections::BTreeMap;

// this can get us `DELETE FROM <table> WHERE column = <column_name_arg>`
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

/// for now, we can delete using any uniqueness constraint with one column in it
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
pub fn translate_delete(
    state: &mut crate::translation::helpers::State,
    delete: &DeleteMutation,
    arguments: BTreeMap<String, serde_json::Value>,
) -> ast::Delete {
    match delete {
        DeleteMutation::DeleteByKey {
            schema_name,
            table_name,
            by_column,
            ..
        } => {
            let unique_key = arguments.get(&by_column.name).unwrap(); // need to deal with missing
                                                                      // values?

            let key_value = translate_json_value(unique_key, &by_column.r#type).unwrap();

            let table = ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

            let where_expr = ast::Expression::BinaryOperation {
                left: Box::new(ast::Expression::ColumnReference(
                    ast::ColumnReference::TableColumn {
                        table: ast::TableReference::AliasedTable(table_alias.clone()),
                        name: ast::ColumnName(by_column.name.clone()),
                    },
                )),
                right: Box::new(key_value),
                operator: ast::BinaryOperator("=".to_string()),
            };

            let from = ast::From::Table {
                reference: table,
                alias: table_alias,
            };

            ast::Delete {
                from,
                where_: ast::Where(where_expr),
                returning: ast::Returning::ReturningStar,
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::ast;
    use super::DeleteMutation;
    use crate::translation::helpers::State;
    use crate::translation::mutation::delete::translate_delete;
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
                r#type: metadata::Type::ScalarType(metadata::ScalarType("int".to_string())),
                nullable: metadata::Nullable::NonNullable,
            },
            description: "".to_string(),
        }
    }

    #[test]
    fn delete_to_sql() {
        let delete = sample_delete();

        let mut state = State::new();

        let mut arguments = BTreeMap::new();
        arguments.insert("user_id".to_string(), serde_json::Value::Number(100.into()));

        let result = translate_delete(&mut state, &delete, arguments);

        let mut sql = string::SQL::new();
        result.to_sql(&mut sql);

        let pretty = sqlformat::format(
            &sql.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );

        insta::with_settings!({snapshot_path => "../../../tests/snapshots"}, {
              insta::assert_snapshot!(pretty);

        });
    }
}
