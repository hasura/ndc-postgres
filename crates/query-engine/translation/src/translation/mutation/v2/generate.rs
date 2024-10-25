//! Given introspection data, generate a set of standard mutation procedures

use super::delete::{generate_delete_by_unique, DeleteMutation};
use super::insert;
use super::insert::InsertMutation;
use super::update::{generate_update_by_unique, UpdateMutation};
use ndc_models as models;
use query_engine_metadata::metadata::database;
use std::collections::BTreeMap;

#[derive(Debug, Clone)]
pub enum Mutation {
    DeleteMutation(DeleteMutation),
    InsertMutation(InsertMutation),
    UpdateMutation(UpdateMutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(
    tables_info: &database::TablesInfo,
    mutations_prefix: &Option<String>,
) -> BTreeMap<models::ProcedureName, Mutation> {
    let mut mutations = BTreeMap::new();
    for (collection_name, table_info) in &tables_info.0 {
        // Delete mutations.
        let delete_mutations =
            generate_delete_by_unique(collection_name, table_info, mutations_prefix);
        for (name, delete_mutation) in delete_mutations {
            mutations.insert(name, Mutation::DeleteMutation(delete_mutation));
        }

        // Insert mutations.
        let (name, insert_mutation) =
            insert::generate(collection_name, table_info, mutations_prefix);
        mutations.insert(name, Mutation::InsertMutation(insert_mutation));

        // Update mutations.
        let update_mutations =
            generate_update_by_unique(collection_name, table_info, mutations_prefix);
        for (name, update_mutation) in update_mutations {
            mutations.insert(name, Mutation::UpdateMutation(update_mutation));
        }
    }
    mutations
}
