use crate::sql::ast;
use query_engine_metadata::metadata;
use std::collections::BTreeMap;

// this can get us `DELETE FROM <table> WHERE column = <column_name_arg>`
// TODO: think about how RETURNING should work - ideally we'd not bake the columns in,
// and allow them to be specified when we call the procedure
pub enum DeleteMutation {
    DeleteByKey {
        schema_name: ast::SchemaName,
        table_name: ast::TableName,
        by_column: metadata::database::ColumnInfo,
    },
}

pub struct GeneratedDelete {
    /// The generated AST for the action
    sql: ast::Delete,
    /// Any named procedure arguments
    arguments: BTreeMap<String, metadata::Type>,
}

pub fn translate_delete(delete: DeleteMutation) -> GeneratedDelete {
    match delete {
        DeleteMutation::DeleteByKey {
            schema_name,
            table_name,
            by_column,
        } => {
            let mut arguments = BTreeMap::new();

            arguments.insert(by_column.name.clone(), by_column.r#type);

            let unique_index = 0; // this would need to become cleverer
            let table = ast::TableReference::DBTable {
                schema: schema_name,
                table: table_name.clone(),
            };

            let where_expr = ast::Expression::BinaryOperation {
                left: Box::new(ast::Expression::ColumnReference(
                    ast::ColumnReference::TableColumn {
                        table: table.clone(),
                        name: ast::ColumnName(by_column.name.clone()),
                    },
                )),
                right: Box::new(ast::Expression::Value(ast::Value::Variable(by_column.name))),
                operator: ast::BinaryOperator("=".to_string()),
            };

            let from = ast::From::Table {
                reference: table,
                alias: ast::TableAlias {
                    unique_index,
                    name: table_name.0,
                },
            };

            GeneratedDelete {
                sql: ast::Delete {
                    from,
                    where_: ast::Where(where_expr),
                },
                arguments,
            }
        }
    }
}

#[cfg(test)]
mod test {
    use super::ast;
    use super::DeleteMutation;
    use crate::sql::mutations::delete::translate_delete;
    use query_engine_metadata::metadata;
    use std::collections::BTreeMap;

    #[test]
    fn delete_to_sql() {
        let delete = DeleteMutation::DeleteByKey {
            schema_name: ast::SchemaName("public".to_string()),
            table_name: ast::TableName("User".to_string()),
            by_column: metadata::ColumnInfo {
                name: "user_id".to_string(),
                description: None,
                r#type: metadata::Type::ScalarType(metadata::ScalarType("int".to_string())),
                nullable: metadata::Nullable::NonNullable,
            },
        };

        let mut expected_arguments = BTreeMap::new();
        expected_arguments.insert(
            "user_id".to_string(),
            metadata::Type::ScalarType(metadata::ScalarType("int".to_string())),
        );

        let result = translate_delete(delete);

        let mut sql = crate::sql::string::SQL::new();
        result.sql.to_sql(&mut sql);
        insta::assert_json_snapshot!(sql.sql);

        assert_eq!(expected_arguments, result.arguments)
    }
}
