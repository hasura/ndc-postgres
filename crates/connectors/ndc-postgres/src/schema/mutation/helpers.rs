//! Helper functions for generating ndc-spec schema objects.

use std::collections::BTreeMap;

use ndc_sdk::models;

use super::super::helpers::*;
use query_engine_metadata::metadata;

/// Build a `ProcedureInfo` type from the given parameters.
///
/// Because procedures return an `affected_rows` count alongside the result type that it's
/// `returning`, we have to generate a separate object type for its result. As part of that, we may
/// also have to include the `int4` scalar type (if it isn't included for another reason elsewhere
/// in the schema). So, this function creates that object type, optionally adds that scalar type,
/// and then returns a `ProcedureInfo` that points to the correct object type.
pub fn make_procedure_type(
    name: String,
    description: Option<String>,
    arguments: BTreeMap<String, models::ArgumentInfo>,
    result_type: models::Type,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut fields = BTreeMap::new();
    let object_type_name = format!("{name}_response");

    // If int4 doesn't exist anywhere else in the schema, we need to add it here. However, a user
    // can't filter or aggregate based on the affected rows of a procedure, so we don't need to add
    // any aggregate functions or comparison operators. However, if int4 exists elsewhere in the
    // schema and has already been added, it will also already contain these functions and
    // operators.
    scalar_types
        .entry("int4".to_string())
        .or_insert(models::ScalarType {
            representation: Some(models::TypeRepresentation::Int32),
            aggregate_functions: BTreeMap::new(),
            comparison_operators: BTreeMap::new(),
        });

    fields.insert(
        "affected_rows".to_string(),
        models::ObjectField {
            description: Some("The number of rows affected by the mutation".to_string()),
            r#type: models::Type::Named {
                name: "int4".to_string(),
            },
            arguments: BTreeMap::new(),
        },
    );

    fields.insert(
        "returning".to_string(),
        models::ObjectField {
            description: Some("Data from rows affected by the mutation".to_string()),
            r#type: models::Type::Array {
                element_type: Box::from(result_type),
            },
            arguments: BTreeMap::new(),
        },
    );

    object_types.insert(
        object_type_name.clone(),
        models::ObjectType {
            description: Some(format!("Responses from the '{name}' procedure")),
            fields,
        },
    );

    models::ProcedureInfo {
        name,
        description,
        arguments,
        result_type: models::Type::Named {
            name: object_type_name,
        },
    }
}

/// Create an ObjectType out of columns metadata.
pub fn make_object_type(
    columns: &BTreeMap<String, metadata::database::ColumnInfo>,
) -> models::ObjectType {
    let mut fields = BTreeMap::new();
    for (name, column) in columns {
        match column_to_insert_type(column) {
            None => {}
            Some(t) => {
                fields.insert(
                    name.clone(),
                    models::ObjectField {
                        r#type: t,
                        description: column.description.clone(),
                        arguments: BTreeMap::new(),
                    },
                );
            }
        }
    }
    models::ObjectType {
        description: None,
        fields,
    }
}

/// Build an `ObjectType` for an update column.
pub fn make_update_column_type(
    collection_name: &str,
    column_name: &str,
    column_info: &metadata::database::ColumnInfo,
) -> Option<(String, models::ObjectType)> {
    match column_to_insert_type(column_info) {
        None => None,
        Some(t) => {
            let mut fields = BTreeMap::new();
            let object_type_name = format!("update_column_{collection_name}_{column_name}");

            // Right now we only support set
            fields.insert(
                "_set".to_string(),
                models::ObjectField {
                    r#type: t,
                    description: Some("Set the column to this value".to_string()),
                    arguments: BTreeMap::new(),
                },
            );

            Some((
                object_type_name,
                models::ObjectType {
                    description: Some(format!(
                        "Update the '{column_name}' column in the '{collection_name}' collection"
                    )),
                    fields,
                },
            ))
        }
    }
}

fn column_to_insert_type(column: &metadata::database::ColumnInfo) -> Option<models::Type> {
    match column {
        // columns that are generated or are always identity should not be insertable.
        metadata::database::ColumnInfo {
            is_generated: metadata::database::IsGenerated::Stored,
            ..
        }
        | metadata::database::ColumnInfo {
            is_identity: metadata::database::IsIdentity::IdentityAlways,
            ..
        } => None,
        metadata::database::ColumnInfo {
            has_default: metadata::database::HasDefault::HasDefault,
            ..
        } => {
            Some({
                // Columns that have defaults should be allowed to be omitted.
                // We signal that with wrapping them with nullable.
                let typ = column_to_type(column);
                match typ {
                    // Already nullable.
                    models::Type::Nullable { underlying_type: _ } => typ,
                    // Wrap in nullable.
                    _ => models::Type::Nullable {
                        underlying_type: Box::new(typ),
                    },
                }
            })
        }
        _ => Some(column_to_type(column)),
    }
}
