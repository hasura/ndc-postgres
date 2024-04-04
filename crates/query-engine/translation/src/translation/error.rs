//! Errors for translation.

use query_engine_metadata::metadata::{database, Type};

/// A type for translation errors.
#[derive(Debug, Clone)]
pub enum Error {
    CollectionNotFound(String),
    ProcedureNotFound(String),
    ColumnNotFoundInCollection(String, String),
    RelationshipNotFound(String),
    ArgumentNotFound(String),
    OperatorNotFound {
        operator_name: String,
        type_name: database::ScalarType,
    },
    NonScalarTypeUsedInOperator {
        r#type: database::Type,
    },
    RelationshipArgumentWasOverriden(String),
    EmptyPathForOrderByAggregate,
    MissingAggregateForArrayRelationOrdering,
    TypeMismatch(serde_json::Value, database::ScalarType),
    UnexpectedVariable,
    CapabilityNotSupported(UnsupportedCapabilities),
    UnableToDeserializeNumberAsF64(serde_json::Number),
    ColumnIsGenerated(String),
    ColumnIsIdentityAlways(String),
    MissingColumnInInsert(String, String),
    NotImplementedYet(String),
    NoProcedureResultFieldsRequested,
    UnexpectedStructure(String),
    InternalError(String),
    NestedFieldNotOfCompositeType {
        field_name: String,
        actual_type: Type,
    },
}

/// Capabilities we don't currently support.
#[derive(Debug, Clone)]
pub enum UnsupportedCapabilities {}

impl std::fmt::Display for UnsupportedCapabilities {
    fn fmt(&self, _f: &mut std::fmt::Formatter) -> std::fmt::Result {
        todo!()
    }
}

/// Display errors.
impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Error::CollectionNotFound(collection_name) => {
                write!(f, "Collection '{}' not found.", collection_name)
            }
            Error::ProcedureNotFound(procedure_name) => {
                write!(f, "Procedure '{}' not found.", procedure_name)
            }
            Error::ColumnNotFoundInCollection(column_name, collection_name) => write!(
                f,
                "Column '{}' not found in collection '{}'.",
                column_name, collection_name
            ),
            Error::RelationshipNotFound(relationship_name) => {
                write!(f, "Relationship '{}' not found.", relationship_name)
            }
            Error::ArgumentNotFound(argument) => {
                write!(f, "Argument '{}' not found.", argument)
            }
            Error::OperatorNotFound {
                operator_name,
                type_name,
            } => {
                write!(
                    f,
                    "Operator '{}' not found in type {:?}.",
                    operator_name, type_name
                )
            }
            Error::RelationshipArgumentWasOverriden(key) => {
                write!(f, "The relationship argument '{}' was defined as part of the relationship, but was overriden.", key)
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
                write!(f, "Value '{:?}' is not of type '{:?}'.", value, typ)
            }
            Error::UnexpectedVariable => {
                write!(
                    f,
                    "Unexpected variable in a query request which does not contain variables."
                )
            }
            Error::UnableToDeserializeNumberAsF64(num) => {
                write!(f, "Unable to deserialize the number '{}' as f64.", num)
            }
            Error::ColumnIsGenerated(column) => {
                write!(
                    f,
                    "Unable to insert into the generated column '{}'.",
                    column
                )
            }
            Error::ColumnIsIdentityAlways(column) => {
                write!(f, "Unable to insert into the identity column '{}'.", column)
            }
            Error::MissingColumnInInsert(column, collection) => {
                write!(
                    f,
                    "Unable to insert into '{}'. Column '{}' is missing.",
                    collection, column
                )
            }
            Error::CapabilityNotSupported(thing) => {
                write!(f, "Queries containing {} are not supported.", thing)
            }
            Error::NotImplementedYet(thing) => {
                write!(f, "Queries containing {} are not supported.", thing)
            }
            Error::NoProcedureResultFieldsRequested => write!(
                f,
                "Procedure requests must ask for 'affected_rows' or use the 'returning' clause."
            ),
            Error::UnexpectedStructure(structure) => write!(f, "Unexpected {}.", structure),
            Error::InternalError(thing) => {
                write!(f, "Internal error: {}.", thing)
            }
            Error::NonScalarTypeUsedInOperator { r#type } => {
                write!(f, "Non-scalar-type used in operator: {:?}", r#type)
            }
            Error::NestedFieldNotOfCompositeType {
                field_name,
                actual_type,
            } => {
                write!(
                    f,
                    "Nested field '{}' not of composite type. Actual type: {:?}",
                    field_name, actual_type
                )
            }
        }
    }
}
