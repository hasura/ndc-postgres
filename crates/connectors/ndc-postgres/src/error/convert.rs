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
                connector::QueryError::InvalidRequest(query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::QueryError::UnsupportedOperation(query_error.to_string())
            }
            QueryError::DBError(_) => {
                connector::QueryError::UnprocessableContent(query_error.to_string())
            }
            QueryError::DBConstraintError(_) => {
                connector::QueryError::UnprocessableContent(query_error.to_string())
            }
        },
        Error::DB(_) => connector::QueryError::Other(Box::new(error)),
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
                connector::MutationError::InvalidRequest(query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::MutationError::UnsupportedOperation(query_error.to_string())
            }
            QueryError::DBError(_) => {
                connector::MutationError::UnprocessableContent(query_error.to_string())
            }
            QueryError::DBConstraintError(_) => {
                connector::MutationError::ConstraintNotMet(query_error.to_string())
            }
        },
        Error::DB(_) => connector::MutationError::Other(Box::new(error)),
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
                connector::ExplainError::InvalidRequest(query_error.to_string())
            }
            QueryError::NotSupported(_) => {
                connector::ExplainError::UnsupportedOperation(query_error.to_string())
            }
            QueryError::DBError(_) => {
                connector::ExplainError::UnprocessableContent(query_error.to_string())
            }
            QueryError::DBConstraintError(_) => {
                connector::ExplainError::UnprocessableContent(query_error.to_string())
            }
        },
        Error::DB(_) => connector::ExplainError::Other(Box::new(error)),
    }
}

/// Convert an error from [query_engine_translation] to [connector::QueryError].
pub fn translation_error_to_query_error(
    error: query_engine_translation::translation::error::Error,
) -> connector::QueryError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) => {
            connector::QueryError::UnsupportedOperation(error.to_string())
        }
        Error::NotImplementedYet(_) => {
            connector::QueryError::UnsupportedOperation(error.to_string())
        }
        _ => connector::QueryError::InvalidRequest(error.to_string()),
    }
}

/// Convert an error from [query_engine_translation] to [connector::MutationError].
pub fn translation_error_to_mutation_error(
    error: query_engine_translation::translation::error::Error,
) -> connector::MutationError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) => {
            connector::MutationError::UnsupportedOperation(error.to_string())
        }
        Error::NotImplementedYet(_) => {
            connector::MutationError::UnsupportedOperation(error.to_string())
        }
        _ => connector::MutationError::InvalidRequest(error.to_string()),
    }
}

/// Convert an error from [query_engine_translation] to [connector::ExplainError].
pub fn translation_error_to_explain_error(
    error: query_engine_translation::translation::error::Error,
) -> connector::ExplainError {
    use query_engine_translation::translation::error::*;
    match error {
        Error::CapabilityNotSupported(_) => {
            connector::ExplainError::UnsupportedOperation(error.to_string())
        }
        Error::NotImplementedYet(_) => {
            connector::ExplainError::UnsupportedOperation(error.to_string())
        }
        _ => connector::ExplainError::InvalidRequest(error.to_string()),
    }
}
