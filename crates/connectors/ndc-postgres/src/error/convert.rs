//! Functions to convert between internal error types and the error types exposed by ndc-sdk.

use ndc_sdk::connector::{self, ErrorResponse};

/// Convert an error from [query_engine_execution] to [ErrorResponse].
pub fn execution_error_to_response(error: query_engine_execution::error::Error) -> ErrorResponse {
    use query_engine_execution::error::*;
    match error {
        Error::Query(query_error) => match &query_error {
            QueryError::VariableNotFound(_) => {
                connector::QueryError::new_invalid_request(&query_error.to_string()).into()
            }
            QueryError::NotSupported(_) => {
                connector::QueryError::new_unsupported_operation(&query_error.to_string()).into()
            }
            QueryError::DBError(_) => {
                connector::QueryError::new_unprocessable_content(&query_error.to_string()).into()
            }
            QueryError::DBConstraintError(_) | QueryError::MutationConstraintFailed => {
                connector::MutationError::new_constraint_not_met(&query_error.to_string()).into()
            }
        },
        Error::DB(_) => {
            ErrorResponse::new_internal_with_details(serde_json::Value::String(error.to_string()))
        }
    }
}

/// Convert an error from [query_engine_translation] to [connector::QueryError].
pub fn translation_error_to_response(
    error: &query_engine_translation::translation::error::Error,
) -> ErrorResponse {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) | Error::NotImplementedYet(_) => {
            connector::QueryError::new_unsupported_operation(&error.to_string()).into()
        }
        _ => connector::QueryError::new_invalid_request(&error.to_string()).into(),
    }
}
