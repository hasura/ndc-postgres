//! Errors for translation.

use ndc_models as models;
use query_engine_metadata::metadata::{database, Type};

/// A type for translation errors.
#[derive(Debug, Clone, thiserror::Error)]
pub enum Error {
    CollectionNotFound(models::CollectionName),
    ScalarTypeNotFound(models::ScalarTypeName),
    ProcedureNotFound(models::ProcedureName),
    ColumnNotFoundInCollection(models::FieldName, models::CollectionName),
    RelationshipNotFound(models::RelationshipName),
    ArgumentNotFound(models::ArgumentName),
    UnexpectedArgumentValue {
        expected: String,
        got: String,
    },
    OperatorNotFound {
        operator_name: models::ComparisonOperatorName,
        type_name: models::ScalarTypeName,
    },
    NonScalarTypeUsedInOperator {
        r#type: database::Type,
    },
    RelationshipArgumentWasOverriden(models::ArgumentName),
    EmptyPathForOrderByAggregate,
    MissingAggregateForArrayRelationOrdering,
    TypeMismatch(serde_json::Value, models::ScalarTypeName),
    UnexpectedVariable,
    CapabilityNotSupported(UnsupportedCapabilities),
    UnableToDeserializeNumberAsF64(serde_json::Number),
    ColumnIsGenerated(models::FieldName),
    ColumnIsIdentityAlways(models::FieldName),
    MissingColumnInMutation {
        collection: models::CollectionName,
        column_name: models::FieldName,
        operation: String,
    },
    NotImplementedYet(String),
    NoProcedureResultFieldsRequested,
    UnexpectedStructure(String),
    UnexpectedOperation {
        column_name: models::FieldName,
        operation: String,
        available_operations: Vec<String>,
    },
    InternalError(String),
    NestedArrayTypesNotSupported,
    NestedArraysNotSupported {
        field_name: models::FieldName,
    },
    NestedFieldNotOfCompositeType {
        field_name: models::FieldName,
        actual_type: Type,
    },
    NestedFieldNotOfArrayType {
        field_name: models::FieldName,
        actual_type: Type,
    },
    MutationVersionNotSet,
    MissingAggregateFunctionForScalar {
        scalar: models::ScalarTypeName,
        function: models::AggregateFunctionName,
    },
    ScopeOutOfBounds {
        current_collection_name: String,
        tables_in_scope_names: Vec<String>,
        scope: usize,
    },
}

/// Capabilities we don't currently support.
#[derive(Debug, Clone)]
pub enum UnsupportedCapabilities {
    FieldArguments,
    NestedRelationships,
    NestedCollectionFields,
    NestedArrays,
    ArrayComparison,
    NestedScalarCollection,
    FilterByAggregate,
}

impl std::fmt::Display for UnsupportedCapabilities {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            UnsupportedCapabilities::FieldArguments => write!(f, "Field arguments"),
            UnsupportedCapabilities::NestedRelationships => write!(f, "Nested relationships"),
            UnsupportedCapabilities::NestedCollectionFields => {
                write!(f, "Nested collection fields")
            }
            UnsupportedCapabilities::NestedArrays => {
                write!(f, "Nested arrays")
            }
            UnsupportedCapabilities::ArrayComparison => write!(f, "Array Comparison"),
            UnsupportedCapabilities::NestedScalarCollection => {
                write!(f, "Nested Scalar Collection")
            }
            UnsupportedCapabilities::FilterByAggregate => write!(f, "Filter By Aggregate"),
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
            Error::UnexpectedArgumentValue { expected, got } => {
                write!(
                    f,
                    "Unexpected argument value, expected {expected}, got {got}"
                )
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
            Error::UnexpectedOperation {
                column_name,
                operation,
                available_operations,
            } => {
                let mut string = format!(
                    "Unexpected operation '{operation}' on column {column_name}. Expected one of: "
                );
                for (index, op) in available_operations.iter().enumerate() {
                    string.push_str(op);
                    if index < available_operations.len() - 1 {
                        string.push_str(", ");
                    }
                }
                write!(f, "{string}")
            }
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
            Error::MutationVersionNotSet => write!(f, "Mutation version not set"),
            Error::MissingAggregateFunctionForScalar { scalar, function } => write!(
                f,
                "Missing single column aggregate function {function:?} for scalar type {scalar:?}"
            ),
            Error::ScopeOutOfBounds {
                current_collection_name,
                tables_in_scope_names,
                scope,
            } => {
                write!(
                    f,
                    "Scope {scope} out of bounds. Current collection is {current_collection_name}. Collections in scope: ["
                )?;
                let mut first = true;
                for collection in tables_in_scope_names {
                    if first {
                        first = false;
                    } else {
                        write!(f, ", ")?;
                    }
                    write!(f, "{collection}")?;
                }
                write!(f, "].")
            }
        }
    }
}

/// A type for translation warnings.
#[derive(Debug, Clone)]
pub enum Warning {
    GeneratingMutationSkippedBecauseColumnNotFoundInCollection {
        mutation_type: String,
        column: models::FieldName,
        collection: models::CollectionName,
        db_constraint_name: String,
    },
    GeneratingMutationSkippedBecauseNoColumnsInConstraint {
        mutation_type: String,
        db_constraint_name: String,
        collection: models::CollectionName,
    },
}

/// Display warnings.
impl std::fmt::Display for Warning {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Warning::GeneratingMutationSkippedBecauseColumnNotFoundInCollection {
                mutation_type,
                column,
                collection,
                db_constraint_name,
            } => write!(
                f,
                "Could not generate {mutation_type} procedure for collection '{collection}':
Column '{column}' is specified in a uniqueness constraint '{db_constraint_name}' but is missing from the collection."
            ),
            Warning::GeneratingMutationSkippedBecauseNoColumnsInConstraint {
                mutation_type,
                db_constraint_name,
                collection,
            } => write!(
                f,
                "Could not generate {mutation_type} procedure for collection '{collection}':
Uniqueness constraint '{db_constraint_name}' has no columns."
            ),
        }
    }
}
