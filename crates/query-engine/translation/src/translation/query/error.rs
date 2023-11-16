//! Errors for query translation.

use query_engine_metadata::metadata::database;

/// A type for translation errors.
#[derive(Debug, Clone)]
pub enum Error {
    CollectionNotFound(String),
    ColumnNotFoundInCollection(String, String),
    RelationshipNotFound(String),
    ArgumentNotFound(String),
    OperatorNotFound {
        operator_name: String,
        type_name: database::ScalarType,
    },
    RelationshipArgumentWasOverriden(String),
    EmptyPathForStarCountAggregate,
    EmptyPathForSingleColumnAggregate,
    MissingAggregateForArrayRelationOrdering,
    NoFields,
    TypeMismatch(serde_json::Value, database::ScalarType),
    UnexpectedVariable,
    CapabilityNotSupported(UnsupportedCapabilities),
    UnableToDeserializeNumberAsF64(serde_json::Number),
    NotImplementedYet(String),
    InternalError(String),
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
            Error::EmptyPathForStarCountAggregate => {
                write!(f, "No path elements supplied for Star Count Aggregate")
            }
            Error::EmptyPathForSingleColumnAggregate => {
                write!(f, "No path elements supplied for Single Column Aggregate")
            }
            Error::MissingAggregateForArrayRelationOrdering => {
                write!(
                    f,
                    "No aggregation function was suppilied for ordering on an array relationship"
                )
            }
            Error::NoFields => {
                write!(f, "No fields in request.")
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
            Error::CapabilityNotSupported(thing) => {
                write!(f, "Queries containing {} are not supported.", thing)
            }
            Error::NotImplementedYet(thing) => {
                write!(f, "Queries containing {} are not supported.", thing)
            }
            Error::InternalError(thing) => {
                write!(f, "Internal error: {}.", thing)
            }
        }
    }
}
