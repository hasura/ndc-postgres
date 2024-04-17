//! Given introspection data, generate a set of standard mutation procedures

use super::delete::{generate_delete_by_unique, DeleteMutation};
use super::insert;
use super::insert::InsertMutation;
use query_engine_metadata::metadata::database;
use std::collections::BTreeMap;

#[derive(Debug, Clone)]
pub enum Mutation {
    DeleteMutation(DeleteMutation),
    InsertMutation(InsertMutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(tables_info: &database::TablesInfo) -> BTreeMap<String, Mutation> {
    let mut mutations = BTreeMap::new();
    for (collection_name, table_info) in &tables_info.0 {
        let delete_mutations = generate_delete_by_unique(collection_name, table_info);

        for (name, delete_mutation) in delete_mutations {
            mutations.insert(name, Mutation::DeleteMutation(delete_mutation));
        }
        let (name, insert_mutation) = insert::generate(collection_name, table_info);
        mutations.insert(name, Mutation::InsertMutation(insert_mutation));
    }
    mutations
}
