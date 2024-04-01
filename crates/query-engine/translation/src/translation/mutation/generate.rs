//! Given introspection data, generate a set of standard mutation procedures

use query_engine_metadata::metadata::{database, mutations};
use std::collections::BTreeMap;

use super::experimental;
use super::v1;

#[derive(Debug, Clone)]
pub enum Mutation {
    V1(v1::Mutation),
    Experimental(experimental::Mutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(
    tables_info: &database::TablesInfo,
    mutations_version: Option<mutations::MutationsVersion>,
) -> BTreeMap<String, Mutation> {
    match mutations_version {
        Some(mutations::MutationsVersion::V1) => v1::generate(tables_info)
            .into_iter()
            .map(|(name, mutation)| (name, Mutation::V1(mutation)))
            .collect(),
        Some(mutations::MutationsVersion::VeryExperimentalWip) => {
            experimental::generate(tables_info)
                .into_iter()
                .map(|(name, mutation)| (name, Mutation::Experimental(mutation)))
                .collect()
        }
        None => BTreeMap::new(),
    }
}
