//! Helper functions for generating ndc-spec schema objects.

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
            name: scalar_type.as_str().into(),
        },
        metadata::Type::CompositeType(t) => models::Type::Named { name: t.clone() },
    }
}
