use query_engine_metadata::metadata;
use query_engine_sql::sql::ast;

// this can get us `DELETE FROM <table> WHERE column = <column_name_arg>`
// TODO: think about how RETURNING should work - ideally we'd not bake the columns in,
// and allow them to be specified when we call the procedure
#[derive(Debug)]
pub enum DeleteMutation {
    DeleteByKey {
        description: String,
        schema_name: ast::SchemaName,
        table_name: ast::TableName,
        by_column: metadata::database::ColumnInfo,
    },
}

pub fn translate_delete(delete: DeleteMutation) -> ast::Delete {
    match delete {
        DeleteMutation::DeleteByKey {
            schema_name,
            table_name,
            by_column,
            ..
        } => {
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

            ast::Delete {
                from,
                where_: ast::Where(where_expr),
            }
        }
    }
}

#[cfg(test)]
mod test {
    use super::ast;
    use super::DeleteMutation;
    use crate::translation::mutation::delete::translate_delete;
    use query_engine_metadata::metadata;
    use query_engine_sql::sql::string;

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

        let result = translate_delete(delete);

        let mut sql = string::SQL::new();
        result.to_sql(&mut sql);
        insta::assert_json_snapshot!(sql.sql);
    }
}
