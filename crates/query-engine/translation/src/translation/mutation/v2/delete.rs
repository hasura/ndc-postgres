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

use super::common::{self, get_nullable_predicate_argument, CheckArgument};

/// A representation of an auto-generated delete mutation.
///
/// This can get us `DELETE FROM <table> WHERE column = <column_name_arg>, ...`.
#[derive(Debug, Clone)]
pub enum DeleteMutation {
    DeleteByKey(DeleteByKey),
}

/// A representation of an auto-generated delete mutation by a unique key.
#[derive(Debug, Clone)]
pub struct DeleteByKey {
    pub description: String,
    pub collection_name: models::CollectionName,
    pub schema_name: sql::ast::SchemaName,
    pub table_name: sql::ast::TableName,
    pub by_columns: NonEmpty<metadata::database::ColumnInfo>,
    pub columns_prefix: String,
    pub pre_check: CheckArgument,
}

/// generate a delete for each simple unique constraint on this table
pub fn generate_delete_by_unique(
    collection_name: &models::CollectionName,
    table_info: &database::TableInfo,
    mutations_prefix: Option<&String>,
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
                "{}delete_{collection_name}_by_{constraint_name}",
                common::get_version_prefix(mutations_prefix)
            )
            .into();

            let description = format!(
                "Delete any row on the '{collection_name}' collection using the {}",
                common::description_keys(&keys.0.values().collect())
            );

            let delete_mutation = DeleteMutation::DeleteByKey(DeleteByKey {
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
            });

            Some((name, delete_mutation))
        })
        .collect()
}

/// Given the description of a delete mutation (ie, `DeleteMutation`), and the arguments, output the SQL AST.
pub fn translate(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &DeleteMutation,
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<(sql::ast::Delete, sql::ast::ColumnAlias), Error> {
    match mutation {
        DeleteMutation::DeleteByKey(mutation) => {
            // The root table we are going to be deleting from.
            let table = sql::ast::TableReference::DBTable {
                schema: mutation.schema_name.clone(),
                table: mutation.table_name.clone(),
            };

            let table_alias = state.make_table_alias(mutation.table_name.0.clone());

            let table_name_and_reference = TableSourceAndReference {
                source: helpers::TableSource::Collection(mutation.collection_name.clone()),
                reference: sql::ast::TableReference::AliasedTable(table_alias.clone()),
            };

            let from = sql::ast::From::Table {
                reference: table,
                alias: table_alias.clone(),
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
            let predicate =
                get_nullable_predicate_argument(&mutation.pre_check.argument_name, arguments)?;

            let predicate_expression = filtering::translate(
                env,
                state,
                &helpers::TableScope::new(table_name_and_reference),
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
