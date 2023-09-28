//! Errors for query translation.

use query_engine_metadata::metadata::database;

/// A type for translation errors.
#[derive(Debug)]
pub enum Error {
    CollectionNotFound(String),
    ColumnNotFoundInCollection(String, String),
    RelationshipNotFound(String),
    ArgumentNotFound(String),
    OperatorNotFound(String),
    RelationshipArgumentWasOverriden(String),
    EmptyPathForStarCountAggregate,
    NoFields,
    TypeMismatch(serde_json::Value, database::ScalarType),
    NotSupported(String),
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
            Error::OperatorNotFound(operator) => {
                write!(f, "Operator '{}' not found.", operator)
            }
            Error::RelationshipArgumentWasOverriden(key) => {
                write!(f, "The relationship argument '{}' was defined as part of the relationship, but was overriden.", key)
            }
            Error::EmptyPathForStarCountAggregate => {
                write!(f, "No path elements supplied for Star Count Aggregate")
            }
            Error::NoFields => {
                write!(f, "No fields in request.")
            }
            Error::TypeMismatch(value, typ) => {
                write!(f, "Value '{:?}' is not of type '{:?}'.", value, typ)
            }
            Error::NotSupported(thing) => {
                write!(f, "Queries containing {} are not supported.", thing)
            }
        }
    }
}
