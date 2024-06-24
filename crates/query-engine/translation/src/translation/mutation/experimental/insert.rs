//! Auto-generate insert mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::helpers::{self, TableNameAndReference};
use crate::translation::mutation::check_columns;
use crate::translation::query::filtering;
use crate::translation::query::values::translate_json_value;
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::{BTreeMap, BTreeSet};

use super::common::CheckArgument;

/// A representation of an auto-generated insert mutation.
///
/// This can get us `INSERT INTO <table>(<columns>) VALUES (<values>)`.
#[derive(Debug, Clone)]
pub struct InsertMutation {
    pub collection_name: String,
    pub description: String,
    pub schema_name: sql::ast::SchemaName,
    pub table_name: sql::ast::TableName,
    pub objects_argument_name: String,
    pub columns: BTreeMap<String, metadata::database::ColumnInfo>,
    pub post_check: CheckArgument,
}

/// generate an insert mutation.
pub fn generate(
    collection_name: &str,
    table_info: &database::TableInfo,
) -> (String, InsertMutation) {
    let name = format!("experimental_insert_{collection_name}");

    let description = format!("Insert into the {collection_name} table");

    let insert_mutation = InsertMutation {
        collection_name: collection_name.to_string(),
        description,
        schema_name: sql::ast::SchemaName(table_info.schema_name.clone()),
        table_name: sql::ast::TableName(table_info.table_name.clone()),
        columns: table_info.columns.clone(),
        objects_argument_name: "objects".to_string(),
        post_check: CheckArgument {
            argument_name: "post_check".to_string(),
            description: format!(
                "Insert permission predicate over the '{collection_name}' collection"
            ),
        },
    };

    (name, insert_mutation)
}

/// Translate a single insert object into a mapping from column names to values.
fn translate_object_into_columns_and_values(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &InsertMutation,
    object: &serde_json::Value,
) -> Result<BTreeMap<sql::ast::ColumnName, sql::ast::MutationValueExpression>, Error> {
    let mut columns_to_values = BTreeMap::new();
    match object {
        serde_json::Value::Object(object) => {
            // For each field, look up the column name in the table and insert it and the value into the map.
            for (name, value) in object {
                let column_info =
                    mutation
                        .columns
                        .get(name)
                        .ok_or(Error::ColumnNotFoundInCollection(
                            name.clone(),
                            mutation.collection_name.clone(),
                        ))?;

                columns_to_values.insert(
                    sql::ast::ColumnName(column_info.name.clone()),
                    sql::ast::MutationValueExpression::Expression(translate_json_value(
                        env,
                        state,
                        value,
                        &column_info.r#type,
                    )?),
                );
            }
            Ok(())
        }
        serde_json::Value::Array(_) => Err(Error::UnexpectedStructure(format!(
            "array of arrays structure in insert {} argument. Expecting an array of objects.",
            mutation.objects_argument_name
        ))),
        _ => Err(Error::UnexpectedStructure(format!(
            "array of values structure in insert {} argument. Expecting an array of objects.",
            mutation.objects_argument_name
        ))),
    }?;
    Ok(columns_to_values)
}

/// We parse the objects that the user sent to us and we translate them to a list of columns
/// to insert and a vector of vector of values, each vector of values represents an object/row.
fn translate_objects_to_columns_and_values(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &InsertMutation,
    value: &serde_json::Value,
) -> Result<(Option<Vec<sql::ast::ColumnName>>, sql::ast::InsertFrom), Error> {
    match value {
        serde_json::Value::Array(array) => {
            let mut all_columns_and_values: Vec<
                BTreeMap<sql::ast::ColumnName, sql::ast::MutationValueExpression>,
            > = vec![];
            // We fetch the column names and values for each user specified object in the objects array.
            for object in array {
                all_columns_and_values.push(translate_object_into_columns_and_values(
                    env, state, mutation, object,
                )?);
            }

            // Some objects might have missing columns, which indicate that they want the default value to be inserted.
            // To handle this, we take the union of column names in all objects, and then traverse each object
            // to check if it is missing a column. If it does, we add the column to its mapping with a DEFAULT expression.

            // Here we get the union of the column names.
            let union_of_columns: BTreeSet<sql::ast::ColumnName> = all_columns_and_values
                .iter()
                .map(|cols_and_vals| cols_and_vals.keys().cloned().collect::<BTreeSet<_>>())
                .fold(BTreeSet::new(), |acc, cols| {
                    acc.union(&cols).cloned().collect()
                });

            // If all objects are empty, we generate an insert query that looks like:
            //
            // > INSERT INTO t SELECT FROM generate_series(1,N)
            //
            // Where N is the amount of objects.
            // We don't use `DEFAULT` because of this:
            // https://postgrespro.com/list/thread-id/2504780
            if union_of_columns.is_empty() {
                let insert_from = sql::ast::InsertFrom::Select({
                    let mut select = sql::helpers::simple_select(vec![]);
                    select.from = Some(sql::ast::From::GenerateSeries {
                        from: 1,
                        to: all_columns_and_values.len(),
                    });
                    select
                });
                // Check that there aren't columns that must receive a value.
                check_columns::check_columns(
                    &mutation.columns,
                    &BTreeMap::new(),
                    &mutation.collection_name,
                    &check_columns::CheckMissingColumns::Yes,
                )?;

                Ok((None, insert_from))
            } else {
                // Here we add missing column names with DEFAULT.
                for columns_and_values in &mut all_columns_and_values {
                    for column_name in &union_of_columns {
                        if !columns_and_values.contains_key(column_name) {
                            columns_and_values.insert(
                                column_name.clone(),
                                sql::ast::MutationValueExpression::Default,
                            );
                        }
                    }

                    // Finally, check that the final form of the object is fine according to the schema.
                    check_columns::check_columns(
                        &mutation.columns,
                        columns_and_values,
                        &mutation.collection_name,
                        &check_columns::CheckMissingColumns::Yes,
                    )?;
                }

                Ok((
                    // We return an ordered vector of column names
                    Some(union_of_columns.into_iter().collect()),
                    // and a vector of rows
                    sql::ast::InsertFrom::Values(
                        all_columns_and_values
                            .into_iter()
                            .map(|columns_and_values| columns_and_values.into_values().collect())
                            .collect(),
                    ),
                ))
            }
        }
        serde_json::Value::Object(_) => Err(Error::UnexpectedStructure(format!(
            "object structure in insert {} argument. Expecting an array of objects.",
            mutation.objects_argument_name
        ))),
        _ => Err(Error::UnexpectedStructure(format!(
            "value structure in insert {} argument. Expecting an array of objects.",
            mutation.objects_argument_name
        ))),
    }
}

/// Given the description of an insert mutation (ie, `InsertMutation`),
/// and the arguments, output the SQL AST.
pub fn translate(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    mutation: &InsertMutation,
    arguments: &BTreeMap<String, serde_json::Value>,
) -> Result<(sql::ast::Insert, sql::ast::ColumnAlias), Error> {
    let object = arguments
        .get(&mutation.objects_argument_name)
        .ok_or(Error::ArgumentNotFound(
            mutation.objects_argument_name.clone(),
        ))?;

    let (columns, from) = translate_objects_to_columns_and_values(env, state, mutation, object)?;

    let table_name_and_reference = TableNameAndReference {
        name: mutation.collection_name.clone(),
        reference: sql::ast::TableReference::DBTable {
            schema: mutation.schema_name.clone(),
            table: mutation.table_name.clone(),
        },
    };

    // Build the `post_check` argument boolean expression.
    let predicate_json =
        arguments
            .get(&mutation.post_check.argument_name)
            .ok_or(Error::ArgumentNotFound(
                mutation.post_check.argument_name.clone(),
            ))?;

    let predicate: models::Expression = serde_json::from_value(predicate_json.clone())
        .map_err(|_| Error::ArgumentNotFound(mutation.post_check.argument_name.clone()))?;

    let predicate_expression = filtering::translate_expression(
        env,
        state,
        &helpers::RootAndCurrentTables {
            root_table: table_name_and_reference.clone(),
            current_table: table_name_and_reference.clone(),
        },
        &predicate,
    )?;

    let post_check_alias =
        sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string());

    let insert = sql::ast::Insert {
        schema: mutation.schema_name.clone(),
        table: mutation.table_name.clone(),
        columns,
        from,
        returning: sql::ast::Returning(sql::ast::SelectList::SelectListComposite(
            Box::new(sql::ast::SelectList::SelectStar),
            Box::new(sql::ast::SelectList::SelectList(vec![(
                post_check_alias.clone(),
                predicate_expression,
            )])),
        )),
    };

    Ok((insert, post_check_alias))
}
