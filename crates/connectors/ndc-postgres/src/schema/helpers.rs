//! Helper functions for generating ndc-spec schema objects.

use std::collections::BTreeMap;

use ndc_sdk::models;

use query_engine_metadata::metadata;

/// Extract the models::Type representation of a column.
pub fn column_to_type(column: &metadata::ColumnInfo) -> models::Type {
    match &column.nullable {
        metadata::Nullable::NonNullable => type_to_type(&column.r#type),
        metadata::Nullable::Nullable => models::Type::Nullable {
            underlying_type: Box::new(type_to_type(&column.r#type)),
        },
    }
}

/// Extract the models::Type representation of a readonly column.
pub fn readonly_column_to_type(column: &metadata::ReadOnlyColumnInfo) -> models::Type {
    match &column.nullable {
        metadata::Nullable::NonNullable => type_to_type(&column.r#type),
        metadata::Nullable::Nullable => models::Type::Nullable {
            underlying_type: Box::new(type_to_type(&column.r#type)),
        },
    }
}

pub fn type_to_type(typ: &metadata::Type) -> models::Type {
    match typ {
        metadata::Type::ArrayType(typ) => models::Type::Array {
            element_type: Box::new(type_to_type(typ)),
        },
        metadata::Type::ScalarType(scalar_type) => models::Type::Named {
            name: scalar_type.0.clone(),
        },
        metadata::Type::CompositeType(t) => models::Type::Named { name: t.0.clone() },
    }
}

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

/// Build an `ObjectType` for an update column.
pub fn make_update_column_type(
    collection_name: &str,
    column_name: &str,
    column_type: models::Type,
) -> (String, models::ObjectType) {
    let mut fields = BTreeMap::new();
    let object_type_name = format!("update_column_{collection_name}_{column_name}");

    // Right now we only support set
    fields.insert(
        "_set".to_string(),
        models::ObjectField {
            description: Some("Set the column to this value".to_string()),
            r#type: column_type,
            arguments: BTreeMap::new(),
        },
    );

    (
        object_type_name,
        models::ObjectType {
            description: Some(format!(
                "Update the '{column_name}' column in the '{collection_name}' collection"
            )),
            fields,
        },
    )
}

/// Create an ObjectType out of columns metadata.
pub fn make_object_type(
    columns: &BTreeMap<String, metadata::database::ColumnInfo>,
) -> models::ObjectType {
    let mut fields = BTreeMap::new();
    for (name, column) in columns {
        match column {
            // columns that are generated or are always identity should not be insertable.
            metadata::database::ColumnInfo {
                is_generated: metadata::database::IsGenerated::Stored,
                ..
            }
            | metadata::database::ColumnInfo {
                is_identity: metadata::database::IsIdentity::IdentityAlways,
                ..
            } => (),
            _ => {
                fields.insert(
                    name.clone(),
                    models::ObjectField {
                        r#type: column_to_type(column),
                        description: None,
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
