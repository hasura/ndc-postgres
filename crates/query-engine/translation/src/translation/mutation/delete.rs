use crate::translation::query::values::translate_json_value;
use query_engine_metadata::metadata;
use query_engine_sql::sql::ast;
use std::collections::BTreeMap;

// this can get us `DELETE FROM <table> WHERE column = <column_name_arg>`
// TODO: think about how RETURNING should work - ideally we'd not bake the columns in,
// and allow them to be specified when we call the procedure
#[derive(Debug, Clone)]
pub enum DeleteMutation {
    DeleteByKey {
        description: String,
        schema_name: ast::SchemaName,
        table_name: ast::TableName,
        by_column: metadata::database::ColumnInfo,
    },
}

pub fn translate_delete(
    mut state: crate::translation::helpers::State,
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
mod test {
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

        let state = State::new();

        let mut arguments = BTreeMap::new();
        arguments.insert("user_id".to_string(), serde_json::Value::Number(100.into()));

        let result = translate_delete(state, &delete, arguments);

        let mut sql = string::SQL::new();
        result.to_sql(&mut sql);
        insta::assert_json_snapshot!(sql.sql);
    }
}
