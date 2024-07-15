//! Functions to convert between internal error types and the error types exposed by ndc-sdk.

use ndc_sdk::connector;

/// Convert an error from [query_engine_execution] to [connector::QueryError].
pub fn execution_error_to_query_error(
    error: query_engine_execution::error::Error,
) -> connector::QueryError {
    use query_engine_execution::error::*;
    match error {
        Error::Query(query_error) => match &query_error {
            QueryError::VariableNotFound(_) => {
                connector::QueryError::new_invalid_request(&query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::QueryError::new_unsupported_operation(&query_error.to_string())
            }
            QueryError::DBError(_) | QueryError::DBConstraintError(_) => {
                connector::QueryError::new_unprocessable_content(&query_error.to_string())
            }
            QueryError::MutationConstraintFailed => connector::QueryError::new("Internal error")
                .with_details(serde_json::Value::String(query_error.to_string())),
        },
        Error::DB(_) => connector::QueryError::new("Internal error")
            .with_details(serde_json::Value::String(error.to_string())),
    }
}

/// Convert an error from [query_engine_execution] to [connector::MutationError].
pub fn execution_error_to_mutation_error(
    error: query_engine_execution::error::Error,
) -> connector::MutationError {
    use query_engine_execution::error::*;
    match error {
        Error::Query(query_error) => match &query_error {
            QueryError::VariableNotFound(_) => {
                connector::MutationError::new_invalid_request(&query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::MutationError::new_unsupported_operation(&query_error.to_string())
            }
            QueryError::DBError(_) => {
                connector::MutationError::new_unprocessable_content(&query_error.to_string())
            }
            QueryError::DBConstraintError(_) | QueryError::MutationConstraintFailed => {
                connector::MutationError::new_constraint_not_met(&query_error.to_string())
            }
        },
        Error::DB(_) => connector::MutationError::new("Internal error")
            .with_details(serde_json::Value::String(error.to_string())),
    }
}

/// Convert an error from [query_engine_execution] to [connector::ExplainError].
pub fn execution_error_to_explain_error(
    error: query_engine_execution::error::Error,
) -> connector::ExplainError {
    use query_engine_execution::error::*;
    match error {
        Error::Query(query_error) => match &query_error {
            QueryError::VariableNotFound(_) => {
                connector::ExplainError::new_invalid_request(&query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::ExplainError::new_unsupported_operation(&query_error.to_string())
            }
            QueryError::DBError(_) | QueryError::DBConstraintError(_) => {
                connector::ExplainError::new_unprocessable_content(&query_error.to_string())
            }
            QueryError::MutationConstraintFailed => connector::ExplainError::new("Internal error")
                .with_details(serde_json::Value::String(query_error.to_string())),
        },
        Error::DB(_) => connector::ExplainError::new("Internal error")
            .with_details(serde_json::Value::String(error.to_string())),
    }
}

/// Convert an error from [query_engine_translation] to [connector::QueryError].
pub fn translation_error_to_query_error(
    error: &query_engine_translation::translation::error::Error,
) -> connector::QueryError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) | Error::NotImplementedYet(_) => {
            connector::QueryError::new_unsupported_operation(&error.to_string())
        }
        _ => connector::QueryError::new_invalid_request(&error.to_string()),
    }
}

/// Convert an error from [query_engine_translation] to [connector::MutationError].
pub fn translation_error_to_mutation_error(
    error: &query_engine_translation::translation::error::Error,
) -> connector::MutationError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) | Error::NotImplementedYet(_) => {
            connector::MutationError::new_unsupported_operation(&error.to_string())
        }
        _ => connector::MutationError::new_invalid_request(&error.to_string()),
    }
}

/// Convert an error from [query_engine_translation] to [connector::ExplainError].
pub fn translation_error_to_explain_error(
    error: &query_engine_translation::translation::error::Error,
) -> connector::ExplainError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) | Error::NotImplementedYet(_) => {
            connector::ExplainError::new_unsupported_operation(&error.to_string())
        }
        _ => connector::ExplainError::new_invalid_request(&error.to_string()),
    }
}
