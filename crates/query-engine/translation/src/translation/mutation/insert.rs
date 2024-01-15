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
    collection_name: &String,
    table_info: &database::TableInfo,
) -> (String, InsertMutation) {
    let name = format!("v1_insert_{collection_name}");

    let description = format!("Insert into the {collection_name} table",);

    let insert_mutation = InsertMutation {
        collection_name: collection_name.clone(),
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
    println!("{:#?}", mutation);
    let insert = ast::Insert {
        schema: mutation.schema_name.clone(),
        table: mutation.table_name.clone(),
        columns: mutation
            .columns
            .values()
            .map(|column_info| ast::ColumnName(column_info.name.clone()))
            .collect(),
        values: {
            let object = arguments.get("_object").unwrap(); // TODO
            match object {
                serde_json::Value::Object(object) => object
                    .iter()
                    .map(|(name, value)| {
                        let column = mutation.columns.get(name).unwrap();
                        translate_json_value(value, &column.r#type).unwrap()
                    })
                    .collect(),
                _ => todo!(),
            }
        },
        returning: ast::Returning::ReturningStar,
    };
    println!("{:#?}", insert);
    Ok(insert)
}
