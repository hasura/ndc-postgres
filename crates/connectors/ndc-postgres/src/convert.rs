//! Functions to convert between internal error types and the error types exposed by ndc-sdk.

use ndc_sdk::connector;

pub(crate) fn execution_error_to_query_error(
    error: query_engine_execution::error::Error,
) -> connector::QueryError {
    match error {
        query_engine_execution::error::Error::Query(query_error) => match &query_error {
            query_engine_execution::error::QueryError::VariableNotFound(_) => {
                connector::QueryError::InvalidRequest(query_error.to_string())
            }
            query_engine_execution::error::QueryError::NotSupported(_) => {
                connector::QueryError::UnsupportedOperation(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBError(_) => {
                connector::QueryError::UnprocessableContent(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBConstraintError(_) => {
                connector::QueryError::UnprocessableContent(query_error.to_string())
            }
        },
        query_engine_execution::error::Error::DB(_) => {
            connector::QueryError::Other(Box::new(error))
        }
    }
}

pub(crate) fn execution_error_to_mutation_error(
    error: query_engine_execution::error::Error,
) -> connector::MutationError {
    match error {
        query_engine_execution::error::Error::Query(query_error) => match &query_error {
            query_engine_execution::error::QueryError::VariableNotFound(_) => {
                connector::MutationError::InvalidRequest(query_error.to_string())
            }
            query_engine_execution::error::QueryError::NotSupported(_) => {
                connector::MutationError::UnsupportedOperation(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBError(_) => {
                connector::MutationError::UnprocessableContent(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBConstraintError(_) => {
                connector::MutationError::ConstraintNotMet(query_error.to_string())
            }
        },
        query_engine_execution::error::Error::DB(_) => {
            connector::MutationError::Other(Box::new(error))
        }
    }
}

pub(crate) fn execution_error_to_explain_error(
    error: query_engine_execution::error::Error,
) -> connector::ExplainError {
    match error {
        query_engine_execution::error::Error::Query(query_error) => match &query_error {
            query_engine_execution::error::QueryError::VariableNotFound(_) => {
                connector::ExplainError::InvalidRequest(query_error.to_string())
            }
            query_engine_execution::error::QueryError::NotSupported(_) => {
                connector::ExplainError::UnsupportedOperation(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBError(_) => {
                connector::ExplainError::UnprocessableContent(query_error.to_string())
            }
            query_engine_execution::error::QueryError::DBConstraintError(_) => {
                connector::ExplainError::UnprocessableContent(query_error.to_string())
            }
        },
        query_engine_execution::error::Error::DB(_) => {
            connector::ExplainError::Other(Box::new(error))
        }
    }
}
