//! Generate ndc-spec schema metadata for mutations.

mod v1;
mod v2;

use std::collections::BTreeMap;

use ndc_sdk::models;

use query_engine_translation::translation::mutation;

/// Turn our different `Mutation` items into `ProcedureInfo`s to be output in the schema
pub fn to_procedure(
    name: &String,
    mutation: &mutation::generate::Mutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match mutation {
        // v1
        mutation::generate::Mutation::V1(mutation::v1::Mutation::DeleteMutation(delete)) => {
            v1::delete_to_procedure(name, delete, object_types, scalar_types)
        }
        mutation::generate::Mutation::V1(mutation::v1::Mutation::InsertMutation(insert)) => {
            v1::insert_to_procedure(name, insert, object_types, scalar_types)
        }
        // v2
        mutation::generate::Mutation::V2(mutation::v2::Mutation::DeleteMutation(delete)) => {
            v2::delete_to_procedure(name, delete, object_types, scalar_types)
        }
        mutation::generate::Mutation::V2(mutation::v2::Mutation::InsertMutation(insert)) => {
            v2::insert_to_procedure(name, insert, object_types, scalar_types)
        }
        mutation::generate::Mutation::V2(mutation::v2::Mutation::UpdateMutation(update)) => {
            v2::update_to_procedure(name, update, object_types, scalar_types)
        }
    }
}
