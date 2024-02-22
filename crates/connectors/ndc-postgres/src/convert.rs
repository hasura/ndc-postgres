//! Functions to convert between internal error types and the error types exposed by ndc-sdk.

use ndc_sdk::connector;

pub(crate) fn execution_error_to_query_error(
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

pub(crate) fn execution_error_to_mutation_error(
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

pub(crate) fn execution_error_to_explain_error(
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

pub(crate) fn translation_error_to_query_error(
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

pub(crate) fn translation_error_to_mutation_error(
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

pub(crate) fn translation_error_to_explain_error(
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
