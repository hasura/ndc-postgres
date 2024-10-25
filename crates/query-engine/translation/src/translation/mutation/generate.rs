//! Given introspection data, generate a set of standard mutation procedures

use ndc_models as models;
use query_engine_metadata::metadata::mutations;
use std::collections::BTreeMap;

use crate::translation::helpers::Env;

use super::v1;
use super::v2;

#[derive(Debug, Clone)]
pub enum Mutation {
    V1(v1::Mutation),
    V2(v2::Mutation),
}

/// Given our introspection data, work out all the mutations we can generate
pub fn generate(env: &Env) -> BTreeMap<models::ProcedureName, Mutation> {
    match env.mutations_version {
        Some(mutations::MutationsVersion::V1) => v1::generate(env)
            .into_iter()
            .map(|(name, mutation)| (name, Mutation::V1(mutation)))
            .collect(),
        Some(mutations::MutationsVersion::V2) => {
            v2::generate(&env.metadata.tables, &env.mutations_prefix)
                .into_iter()
                .map(|(name, mutation)| (name, Mutation::V2(mutation)))
                .collect()
        }
        None => BTreeMap::new(),
    }
}
