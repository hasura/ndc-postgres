//! Given introspection data, generate a set of standard mutation procedures

use super::delete::DeleteMutation;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql::ast;
use std::collections::BTreeMap;

#[derive(Debug)]
pub enum Mutation {
    DeleteMutation(DeleteMutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(tables_info: &database::TablesInfo) -> BTreeMap<String, Mutation> {
    let mut mutations = BTreeMap::new();

    for (_, table_info) in tables_info.0.iter() {
        let delete_mutations = generate_delete_by_unique(table_info);

        for (name, delete_mutation) in delete_mutations {
            mutations.insert(name, Mutation::DeleteMutation(delete_mutation));
        }
    }
    mutations
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
    table_info: &database::TableInfo,
) -> Vec<(String, DeleteMutation)> {
    get_non_compound_uniqueness_constraints(table_info)
        .iter()
        .filter_map(|key| table_info.columns.get(key))
        .map(|unique_column| {
            let name = format!(
                "delete_{}_{}_by_{}",
                table_info.schema_name, table_info.table_name, unique_column.name
            );

            let description = format!(
                "Delete any value on the {}.{} table using the {} key",
                table_info.schema_name, table_info.table_name, unique_column.name
            );

            let delete_mutation = DeleteMutation::DeleteByKey {
                schema_name: ast::SchemaName(table_info.schema_name.clone()),
                table_name: ast::TableName(table_info.table_name.clone()),
                by_column: unique_column.clone(),
                description,
            };

            (name, delete_mutation)
        })
        .collect()
}
