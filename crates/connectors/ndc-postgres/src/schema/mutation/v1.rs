//! Exposing v1 auto-generated mutations in the ndc-spec Schema.

use std::collections::BTreeMap;

use ndc_sdk::models;

use query_engine_translation::translation::mutation;

use super::super::helpers::*;
use super::helpers::*;

/// given a v1 `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
pub fn delete_to_procedure(
    name: &String,
    delete: &mutation::v1::delete::DeleteMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match delete {
        mutation::v1::delete::DeleteMutation::DeleteByKey {
            by_column,
            description,
            collection_name,
            ..
        } => {
            let mut arguments = BTreeMap::new();

            arguments.insert(
                by_column.name.clone(),
                models::ArgumentInfo {
                    argument_type: column_to_type(by_column),
                    description: by_column.description.clone(),
                },
            );

            make_procedure_type(
                name.to_string(),
                Some(description.to_string()),
                arguments,
                models::Type::Named {
                    name: collection_name.to_string(),
                },
                object_types,
                scalar_types,
            )
        }
    }
}

/// Given a v1 `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
pub fn insert_to_procedure(
    name: &String,
    insert: &mutation::v1::insert::InsertMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_object_type(&insert.columns);
    let object_name = format!("{name}_object");
    object_types.insert(object_name.clone(), object_type);

    arguments.insert(
        "_object".to_string(),
        models::ArgumentInfo {
            argument_type: models::Type::Named { name: object_name },
            description: None,
        },
    );

    make_procedure_type(
        name.to_string(),
        Some(insert.description.to_string()),
        arguments,
        models::Type::Named {
            name: insert.collection_name.to_string(),
        },
        object_types,
        scalar_types,
    )
}
