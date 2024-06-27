//! Given introspection data, generate a set of standard mutation procedures

use query_engine_metadata::metadata::mutations;
use std::collections::BTreeMap;

use crate::translation::helpers::Env;

use super::experimental;
use super::v1;
use super::v2;

#[derive(Debug, Clone)]
pub enum Mutation {
    V1(v1::Mutation),
    V2(v2::Mutation),
    Experimental(experimental::Mutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(env: &Env) -> BTreeMap<String, Mutation> {
    match env.mutations_version {
        Some(mutations::MutationsVersion::V1) => v1::generate(env)
            .into_iter()
            .map(|(name, mutation)| (name, Mutation::V1(mutation)))
            .collect(),
        Some(mutations::MutationsVersion::V2) => v2::generate(&env.metadata.tables)
            .into_iter()
            .map(|(name, mutation)| (name, Mutation::V2(mutation)))
            .collect(),
        Some(mutations::MutationsVersion::VeryExperimentalWip) => {
            experimental::generate(&env.metadata.tables)
                .into_iter()
                .map(|(name, mutation)| (name, Mutation::Experimental(mutation)))
                .collect()
        }
        None => BTreeMap::new(),
    }
}
