//! Auto-generate insert mutations and translate them into sql ast.

use crate::translation::error::Error;
use crate::translation::query::values::translate_json_value;
use query_engine_metadata::metadata;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql::ast;
use std::collections::BTreeMap;

/// A representation of an auto-generated insert mutation.
///
/// This can get us `INSERT INTO <table>(<columns>) VALUES (<values>)`.
#[derive(Debug, Clone)]
pub struct InsertMutation {
    pub collection_name: String,
    pub description: String,
    pub schema_name: ast::SchemaName,
    pub table_name: ast::TableName,
    pub columns: BTreeMap<String, metadata::database::ColumnInfo>,
}

/// generate an insert mutation.
pub fn generate(
    collection_name: &str,
    table_info: &database::TableInfo,
) -> (String, InsertMutation) {
    let name = format!("v1_insert_{collection_name}");

    let description = format!("Insert into the {collection_name} table",);

    let insert_mutation = InsertMutation {
        collection_name: collection_name.to_string(),
        description,
        schema_name: ast::SchemaName(table_info.schema_name.clone()),
        table_name: ast::TableName(table_info.table_name.clone()),
        columns: table_info.columns.clone(),
    };

    (name, insert_mutation)
}

/// Given the description of an insert mutation (ie, `InsertMutation`),
/// and the arguments, output the SQL AST.
pub fn translate(
    // state: &mut crate::translation::helpers::State,
    mutation: &InsertMutation,
    arguments: BTreeMap<String, serde_json::Value>,
) -> Result<ast::Insert, Error> {
    let mut columns = vec![];
    let mut values = vec![];
    let object = arguments
        .get("_object")
        .ok_or(Error::ArgumentNotFound("_object".to_string()))?;
    match object {
        serde_json::Value::Object(object) => {
            for (name, value) in object.iter() {
                let column_info =
                    mutation
                        .columns
                        .get(name)
                        .ok_or(Error::ColumnNotFoundInCollection(
                            name.clone(),
                            mutation.collection_name.clone(),
                        ))?;

                columns.push(ast::ColumnName(column_info.name.clone()));
                values.push(translate_json_value(value, &column_info.r#type)?);
            }
        }
        _ => todo!(),
    };

    check_columns(&mutation.columns, &columns, &mutation.collection_name)?;

    let insert = ast::Insert {
        schema: mutation.schema_name.clone(),
        table: mutation.table_name.clone(),
        columns,
        values,
        returning: ast::Returning::ReturningStar,
    };
    Ok(insert)
}

/// Check that no columns are missing, and that columns cannot be inserted to
/// are not insertred.
fn check_columns(
    columns: &BTreeMap<String, database::ColumnInfo>,
    inserted_columns: &[ast::ColumnName],
    insert_name: &str,
) -> Result<(), Error> {
    for (name, column) in columns.iter() {
        match column {
            // nullable and identity by default columns can be inserted into or omitted.
            database::ColumnInfo {
                nullable: database::Nullable::Nullable,
                ..
            }
            | database::ColumnInfo {
                is_identity: database::IsIdentity::IdentityByDefault,
                ..
            } => Ok(()),
            // generated columns must not be inserted into.
            database::ColumnInfo {
                is_generated: database::IsGenerated::IsGenerated,
                ..
            } => {
                if inserted_columns.contains(&ast::ColumnName(column.name.clone())) {
                    Err(Error::ColumnIsGenerated(name.clone()))
                } else {
                    Ok(())
                }
            }
            // identity always columns must not be inserted into.
            database::ColumnInfo {
                is_identity: database::IsIdentity::IdentityAlways,
                ..
            } => {
                if inserted_columns.contains(&ast::ColumnName(column.name.clone())) {
                    {
                        Err(Error::ColumnIsIdentityAlways(name.clone()))
                    }
                } else {
                    Ok(())
                }
            }
            // regular columns must be inserted into.
            _ => {
                if inserted_columns.contains(&ast::ColumnName(column.name.clone())) {
                    Ok(())
                } else {
                    Err(Error::MissingColumnInInsert(
                        name.clone(),
                        insert_name.to_owned(),
                    ))
                }
            }
        }?;
    }
    Ok(())
}
