//! Exposing v2 auto-generated mutations in the ndc-spec Schema.

use std::collections::BTreeMap;

use ndc_sdk::models;

use query_engine_translation::translation::mutation;

use super::super::helpers::*;
use super::helpers::*;

/// given an v2 `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
pub fn delete_to_procedure(
    name: &models::ProcedureName,
    delete: &mutation::v2::delete::DeleteMutation,
    object_types: &mut BTreeMap<models::ObjectTypeName, models::ObjectType>,
    scalar_types: &mut BTreeMap<models::ScalarTypeName, models::ScalarType>,
) -> models::ProcedureInfo {
    let mutation::v2::delete::DeleteMutation::DeleteByKey(delete_by_key) = delete;

    let mut arguments = BTreeMap::new();

    for column in &delete_by_key.by_columns {
        arguments.insert(
            format!("{}{}", delete_by_key.columns_prefix, column.name).into(),
            models::ArgumentInfo {
                argument_type: column_to_type(column),
                description: column.description.clone(),
            },
        );
    }

    arguments.insert(
        delete_by_key.pre_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Nullable {
                underlying_type: Box::new(models::Type::Predicate {
                    object_type_name: delete_by_key.collection_name.as_str().into(),
                }),
            },
            description: Some(delete_by_key.pre_check.description.clone()),
        },
    );

    make_procedure_type(
        name.clone(),
        Some(delete_by_key.description.to_string()),
        arguments,
        models::Type::Named {
            name: delete_by_key.collection_name.as_str().into(),
        },
        object_types,
        scalar_types,
    )
}

/// Given an v2 `UpdateMutation`, turn it into a `ProcedureInfo` to be output in the schema.
pub fn update_to_procedure(
    procedure_name: &models::ProcedureName,
    update: &mutation::v2::update::UpdateMutation,
    object_types: &mut BTreeMap<models::ObjectTypeName, models::ObjectType>,
    scalar_types: &mut BTreeMap<models::ScalarTypeName, models::ScalarType>,
) -> models::ProcedureInfo {
    let mutation::v2::update::UpdateMutation::UpdateByKey(update_by_key) = update;

    let mut arguments = BTreeMap::new();

    // by columns arguments.
    for by_column in &update_by_key.by_columns {
        arguments.insert(
            format!("{}{}", update_by_key.columns_prefix, by_column.name).into(),
            models::ArgumentInfo {
                argument_type: column_to_type(by_column),
                description: by_column.description.clone(),
            },
        );
    }

    // pre check argument.
    arguments.insert(
        update_by_key.pre_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Nullable {
                underlying_type: Box::new(models::Type::Predicate {
                    object_type_name: update_by_key.collection_name.as_str().into(),
                }),
            },
            description: Some(update_by_key.pre_check.description.clone()),
        },
    );

    // post check argument.
    arguments.insert(
        update_by_key.post_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Nullable {
                underlying_type: Box::new(models::Type::Predicate {
                    object_type_name: update_by_key.collection_name.as_str().into(),
                }),
            },
            description: Some(update_by_key.post_check.description.clone()),
        },
    );

    // update columns argument.
    // Is of the form update_columns: { <column_name>: { <operation>: <value> }, ... }.
    //
    // 1. We need to create an object type for each `{ <operation>: <value> }` object
    // 2. We need to create an object type for the mapping of column to column update object
    // 3. We need to add the argument to match the name of the object in (2)

    // Keep track of the fields.
    let mut fields = BTreeMap::new();

    // Make an object type for each column's update object.
    for (column_name, column_info) in &update_by_key.table_columns {
        // Add the column if it is not generated.
        if let Some((object_name, object_type)) =
            make_update_column_type(&update_by_key.collection_name, column_name, column_info)
        {
            // add to object types
            object_types.insert(object_name.clone(), object_type.clone());
            // Remember for the update_columns type
            fields.insert(
                column_name.clone(),
                models::ObjectField {
                    description: Some(format!(
                        "Update the '{column_name}' column in the '{}' collection.",
                        update_by_key.collection_name
                    )),
                    // We can not specify these.
                    r#type: models::Type::Nullable {
                        underlying_type: Box::new(models::Type::Named {
                            name: object_name.as_str().into(),
                        }),
                    },
                    arguments: BTreeMap::new(),
                },
            );
        }
    }

    // Create the update columns object type.
    let update_columns_object_type_name: models::ObjectTypeName = format!(
        "{procedure_name}_{}",
        update_by_key.update_columns_argument_name
    )
    .into();

    object_types.insert(
        update_columns_object_type_name.clone(),
        models::ObjectType {
            description: Some(format!(
                "Update the columns of the '{}' collection",
                update_by_key.collection_name
            )),
            fields,
            foreign_keys: BTreeMap::new(),
        },
    );

    // Insert the update columns argument.
    arguments.insert(
        update_by_key.update_columns_argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Named {
                name: update_columns_object_type_name.as_str().into(),
            },
            description: None,
        },
    );

    // Make a type for the procedure.
    make_procedure_type(
        procedure_name.clone(),
        Some(update_by_key.description.to_string()),
        arguments,
        models::Type::Named {
            name: update_by_key.collection_name.as_str().into(),
        },
        object_types,
        scalar_types,
    )
}

/// Given an v2 `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
pub fn insert_to_procedure(
    name: &models::ProcedureName,
    insert: &mutation::v2::insert::InsertMutation,
    object_types: &mut BTreeMap<models::ObjectTypeName, models::ObjectType>,
    scalar_types: &mut BTreeMap<models::ScalarTypeName, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_insert_objects_type(&insert.columns);
    let object_name: models::ObjectTypeName = format!("{name}_object").into();
    object_types.insert(object_name.clone(), object_type);

    arguments.insert(
        insert.objects_argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Array {
                element_type: Box::new(models::Type::Named {
                    name: object_name.as_str().into(),
                }),
            },
            description: None,
        },
    );

    arguments.insert(
        insert.post_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Nullable {
                underlying_type: Box::new(models::Type::Predicate {
                    object_type_name: insert.collection_name.as_str().into(),
                }),
            },
            description: Some(insert.post_check.description.clone()),
        },
    );

    make_procedure_type(
        name.clone(),
        Some(insert.description.to_string()),
        arguments,
        models::Type::Named {
            name: insert.collection_name.as_str().into(),
        },
        object_types,
        scalar_types,
    )
}
