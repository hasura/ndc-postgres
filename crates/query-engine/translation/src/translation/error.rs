//! Errors for translation.

use query_engine_metadata::metadata::{database, Type};

/// A type for translation errors.
#[derive(Debug, Clone, thiserror::Error)]
pub enum Error {
    CollectionNotFound(String),
    ScalarTypeNotFound(String),
    ProcedureNotFound(String),
    ColumnNotFoundInCollection(String, String),
    RelationshipNotFound(String),
    ArgumentNotFound(String),
    OperatorNotFound {
        operator_name: String,
        type_name: database::ScalarTypeName,
    },
    NonScalarTypeUsedInOperator {
        r#type: database::Type,
    },
    RelationshipArgumentWasOverriden(String),
    EmptyPathForOrderByAggregate,
    MissingAggregateForArrayRelationOrdering,
    TypeMismatch(serde_json::Value, database::ScalarTypeName),
    UnexpectedVariable,
    CapabilityNotSupported(UnsupportedCapabilities),
    UnableToDeserializeNumberAsF64(serde_json::Number),
    ColumnIsGenerated(String),
    ColumnIsIdentityAlways(String),
    MissingColumnInMutation {
        collection: String,
        column_name: String,
        operation: String,
    },
    NotImplementedYet(String),
    NoProcedureResultFieldsRequested,
    UnexpectedStructure(String),
    InternalError(String),
    NestedArrayTypesNotSupported,
    NestedArraysNotSupported {
        field_name: String,
    },
    NestedFieldNotOfCompositeType {
        field_name: String,
        actual_type: Type,
    },
    NestedFieldNotOfArrayType {
        field_name: String,
        actual_type: Type,
    },
}

/// Capabilities we don't currently support.
#[derive(Debug, Clone)]
pub enum UnsupportedCapabilities {
    FieldArguments,
}

impl std::fmt::Display for UnsupportedCapabilities {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            UnsupportedCapabilities::FieldArguments => write!(f, "Field arguments"),
        }
    }
}

/// Display errors.
impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Error::CollectionNotFound(collection_name) => {
                write!(f, "Collection '{collection_name}' not found.")
            }
            Error::ScalarTypeNotFound(scalar_type) => {
                write!(f, "Scalar Type '{scalar_type}' not found.")
            }
            Error::ProcedureNotFound(procedure_name) => {
                write!(f, "Procedure '{procedure_name}' not found.")
            }
            Error::ColumnNotFoundInCollection(column_name, collection_name) => write!(
                f,
                "Column '{column_name}' not found in collection '{collection_name}'."
            ),
            Error::RelationshipNotFound(relationship_name) => {
                write!(f, "Relationship '{relationship_name}' not found.")
            }
            Error::ArgumentNotFound(argument) => {
                write!(f, "Argument '{argument}' not found.")
            }
            Error::OperatorNotFound {
                operator_name,
                type_name,
            } => {
                write!(
                    f,
                    "Operator '{operator_name}' not found in type {type_name:?}."
                )
            }
            Error::RelationshipArgumentWasOverriden(key) => {
                write!(f, "The relationship argument '{key}' was defined as part of the relationship, but was overriden.")
            }
            Error::EmptyPathForOrderByAggregate => {
                write!(f, "No path elements supplied for order by aggregate.")
            }
            Error::MissingAggregateForArrayRelationOrdering => {
                write!(
                    f,
                    "No aggregation function was suppilied for ordering on an array relationship."
                )
            }
            Error::TypeMismatch(value, typ) => {
                write!(f, "Value '{value:?}' is not of type '{typ:?}'.")
            }
            Error::UnexpectedVariable => {
                write!(
                    f,
                    "Unexpected variable in a query request which does not contain variables."
                )
            }
            Error::UnableToDeserializeNumberAsF64(num) => {
                write!(f, "Unable to deserialize the number '{num}' as f64.")
            }
            Error::ColumnIsGenerated(column) => {
                write!(f, "Unable to insert into the generated column '{column}'.")
            }
            Error::ColumnIsIdentityAlways(column) => {
                write!(f, "Unable to insert into the identity column '{column}'.")
            }
            Error::MissingColumnInMutation {
                column_name,
                collection: procedure_name,
                operation,
            } => {
                write!(
                    f,
                    "Unable to {operation} '{procedure_name}'. Column '{column_name}' is missing."
                )
            }
            Error::CapabilityNotSupported(thing) => {
                write!(f, "Queries containing {thing} are not supported.")
            }
            Error::NotImplementedYet(thing) => {
                write!(f, "Queries containing {thing} are not supported.")
            }
            Error::NoProcedureResultFieldsRequested => write!(
                f,
                "Procedure requests must ask for 'affected_rows' or use the 'returning' clause."
            ),
            Error::UnexpectedStructure(structure) => write!(f, "Unexpected {structure}."),
            Error::InternalError(thing) => {
                write!(f, "Internal error: {thing}.")
            }
            Error::NonScalarTypeUsedInOperator { r#type } => {
                write!(f, "Non-scalar-type used in operator: {type:?}")
            }
            Error::NestedArrayTypesNotSupported => {
                write!(f, "Encountered a nested array type.")
            }
            Error::NestedArraysNotSupported { field_name } => {
                write!(f, "Nested field '{field_name}' requested as nested array.")
            }
            Error::NestedFieldNotOfCompositeType {
                field_name,
                actual_type,
            } => {
                write!(
                    f,
                    "Nested field '{field_name}' not of composite type. Actual type: {actual_type:?}"
                )
            }
            Error::NestedFieldNotOfArrayType {
                field_name,
                actual_type,
            } => {
                write!(
                    f,
                    "Nested field '{field_name}' not of array type. Actual type: {actual_type:?}"
                )
            }
        }
    }
}
