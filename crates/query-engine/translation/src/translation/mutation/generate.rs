//! Given introspection data, generate a set of standard mutation procedures

use super::delete::{generate_delete_by_unique, DeleteMutation};
use query_engine_metadata::metadata::{database, mutations};
use std::collections::BTreeMap;

#[derive(Debug, Clone)]
pub enum Mutation {
    DeleteMutation(DeleteMutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(
    tables_info: &database::TablesInfo,
    mutations_version: &Option<mutations::MutationsVersion>,
) -> BTreeMap<String, Mutation> {
    let mut mutations = BTreeMap::new();

    match mutations_version {
        Some(mutations::MutationsVersion::V1) => {
            for (collection_name, table_info) in tables_info.0.iter() {
                let delete_mutations = generate_delete_by_unique(collection_name, table_info);

                for (name, delete_mutation) in delete_mutations {
                    mutations.insert(name, Mutation::DeleteMutation(delete_mutation));
                }
            }
        }
        None => {}
    }
    mutations
}
