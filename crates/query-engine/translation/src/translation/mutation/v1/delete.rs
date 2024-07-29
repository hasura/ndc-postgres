//! Auto-generate delete mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::query::values::translate;
use ndc_models as models;
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
        collection_name: models::CollectionName,
        schema_name: sql::ast::SchemaName,
        table_name: sql::ast::TableName,
        by_column: metadata::database::ColumnInfo,
    },
}

/// Get all columns that have a uniqueness constraints by themselves in a particular table.
/// For now, we can delete using any uniqueness constraint with one column in it.
fn get_non_compound_uniqueness_constraints(
    table_info: &database::TableInfo,
) -> Vec<models::FieldName> {
    table_info
        .uniqueness_constraints
        .0
        .iter()
        .filter_map(|(_constraint_name, constraint_set)| {
            if constraint_set.0.len() == 1 {
                constraint_set.0.first_key_value().map(|c| c.1).cloned()
            } else {
                None
            }
        })
        .collect()
}

/// generate a delete for each simple unique constraint on this table
pub fn generate_delete_by_unique(
    collection_name: &models::CollectionName,
    table_info: &database::TableInfo,
) -> Vec<(models::ProcedureName, DeleteMutation)> {
    get_non_compound_uniqueness_constraints(table_info)
        .iter()
        .filter_map(|key| table_info.columns.get(key))
        .map(|unique_column| {
            let name = format!("v1_delete_{}_by_{}", collection_name, unique_column.name).into();

            let description = format!(
                "Delete any value on the {} table using the {} key",
                collection_name, unique_column.name
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
                table_name: sql::ast::TableName(table_info.table_name.clone()),
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
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<(sql::ast::Delete, sql::ast::ColumnAlias), Error> {
    match delete {
        DeleteMutation::DeleteByKey {
            schema_name,
            table_name,
            by_column,
            ..
        } => {
            // The root table we are going to be deleting from.
            let table = sql::ast::TableReference::DBTable {
                schema: schema_name.clone(),
                table: table_name.clone(),
            };

            let table_alias = state.make_table_alias(table_name.0.clone());

            let from = sql::ast::From::Table {
                reference: table,
                alias: table_alias.clone(),
            };

            // Build the `UNIQUE_KEY = <value>` boolean expression.
            let unique_key = arguments
                .get(by_column.name.as_str())
                .ok_or(Error::ArgumentNotFound(by_column.name.clone().into()))?;

            let key_value = translate(env, state, unique_key, &by_column.r#type).unwrap();

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

            // We add an always true constraint check to unify the mutations interface.
            let check_constraint_alias =
                sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string());
            let check_constraint_value = sql::helpers::true_expr();

            Ok((
                sql::ast::Delete {
                    from,
                    where_: sql::ast::Where(unique_expression),
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

#[cfg(test)]
mod tests {
    use super::sql;
    use super::translate_delete;
    use super::DeleteMutation;
    use crate::translation::helpers::Env;
    use crate::translation::helpers::State;
    use query_engine_metadata::metadata;
    use query_engine_sql::sql::string;
    use std::collections::BTreeMap;

    fn sample_delete() -> DeleteMutation {
        DeleteMutation::DeleteByKey {
            schema_name: sql::ast::SchemaName("public".to_string()),
            table_name: sql::ast::TableName("User".to_string()),
            collection_name: "User".into(),
            by_column: metadata::ColumnInfo {
                name: "user_id".to_string(),
                description: None,
                r#type: metadata::Type::ScalarType("int4".into()),
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
        arguments.insert("user_id".into(), serde_json::Value::Number(100.into()));

        let (result, _) =
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
