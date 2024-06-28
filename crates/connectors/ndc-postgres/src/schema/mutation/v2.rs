//! Exposing v2 auto-generated mutations in the ndc-spec Schema.

use std::collections::BTreeMap;

use ndc_sdk::models;

use query_engine_translation::translation::mutation;

use super::super::helpers::*;
use super::helpers::*;

/// given an v2 `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
pub fn delete_to_procedure(
    name: &String,
    delete: &mutation::v2::delete::DeleteMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match delete {
        mutation::v2::delete::DeleteMutation::DeleteByKey {
            by_columns,
            pre_check,
            description,
            collection_name,
            columns_prefix,
            table_name: _,
            schema_name: _,
        } => {
            let mut arguments = BTreeMap::new();

            for column in by_columns {
                arguments.insert(
                    format!("{}{}", columns_prefix, column.name),
                    models::ArgumentInfo {
                        argument_type: column_to_type(column),
                        description: column.description.clone(),
                    },
                );
            }

            arguments.insert(
                pre_check.argument_name.clone(),
                models::ArgumentInfo {
                    argument_type: models::Type::Predicate {
                        object_type_name: collection_name.clone(),
                    },
                    description: Some(pre_check.description.clone()),
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

/// Given an v2 `UpdateMutation`, turn it into a `ProcedureInfo` to be output in the schema.
pub fn update_to_procedure(
    procedure_name: &str,
    update: &mutation::v2::update::UpdateMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mutation::v2::update::UpdateMutation::UpdateByKey(update_by_key) = update;

    let mut arguments = BTreeMap::new();

    // by columns arguments.
    for by_column in &update_by_key.by_columns {
        arguments.insert(
            format!("{}{}", update_by_key.columns_prefix, by_column.name),
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
            argument_type: models::Type::Predicate {
                object_type_name: update_by_key.collection_name.clone(),
            },
            description: Some(update_by_key.pre_check.description.clone()),
        },
    );

    // post check argument.
    arguments.insert(
        update_by_key.post_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Predicate {
                object_type_name: update_by_key.collection_name.clone(),
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
                    r#type: models::Type::Named { name: object_name },
                    arguments: BTreeMap::new(),
                },
            );
        }
    }

    // Create the update columns object type.
    let update_columns_object_type_name = format!(
        "{procedure_name}_{}",
        update_by_key.update_columns_argument_name
    );

    object_types.insert(
        update_columns_object_type_name.clone(),
        models::ObjectType {
            description: Some(format!(
                "Update the columns of the '{}' collection",
                update_by_key.collection_name
            )),
            fields,
        },
    );

    // Insert the update columns argument.
    arguments.insert(
        update_by_key.update_columns_argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Named {
                name: update_columns_object_type_name,
            },
            description: None,
        },
    );

    // Make a type for the procedure.
    make_procedure_type(
        procedure_name.to_string(),
        Some(update_by_key.description.to_string()),
        arguments,
        models::Type::Named {
            name: update_by_key.collection_name.to_string(),
        },
        object_types,
        scalar_types,
    )
}

/// Given an v2 `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
pub fn insert_to_procedure(
    name: &String,
    insert: &mutation::v2::insert::InsertMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_object_type(&insert.columns);
    let object_name = format!("{name}_object");
    object_types.insert(object_name.clone(), object_type);

    arguments.insert(
        insert.objects_argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Array {
                element_type: Box::new(models::Type::Named { name: object_name }),
            },
            description: None,
        },
    );
    arguments.insert(
        insert.post_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Predicate {
                object_type_name: insert.collection_name.clone(),
            },
            description: Some(insert.post_check.description.clone()),
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
