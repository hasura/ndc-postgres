//! Record information about errors in traces and metrics.

use query_engine_execution::metrics;

use crate::state::PoolAquisitionError;

/// Record an execution error in the current trace, and increment a counter.
pub fn execution_error(error: &query_engine_execution::error::Error, metrics: &metrics::Metrics) {
    use query_engine_execution::error::*;
    tracing::error!("{}", error);
    match error {
        Error::Query(err) => match &err {
            QueryError::VariableNotFound(_)
            | QueryError::DBError(_)
            | QueryError::MutationConstraintFailed
            | QueryError::DBConstraintError(_) => {
                metrics.error_metrics.record_invalid_request();
            }
            QueryError::NotSupported(_) => {
                metrics.error_metrics.record_unsupported_feature();
            }
        },
        Error::DB(_) => {
            metrics.error_metrics.record_database_error();
        }
    }
}

/// Record a translation error in the current trace, and increment a counter.
pub fn translation_error(
    error: &query_engine_translation::translation::error::Error,
    metrics: &metrics::Metrics,
) {
    use query_engine_translation::translation::error::*;
    tracing::error!("{}", error);
    match error {
        Error::CapabilityNotSupported(_) => {
            metrics.error_metrics.record_unsupported_capability();
        }
        Error::NotImplementedYet(_) => {
            metrics.error_metrics.record_unsupported_feature();
        }
        _ => {
            metrics.error_metrics.record_invalid_request();
        }
    }
}

pub fn pool_aquisition_error(error: &PoolAquisitionError, metrics: &metrics::Metrics) {
    tracing::error!("{}", error);
    match error {
        PoolAquisitionError::MissingRequiredRequestArgument(_)
        | PoolAquisitionError::InvalidRequestArgument(_)
        | PoolAquisitionError::UnknownConnectionName(_) => {
            metrics.error_metrics.record_invalid_request();
        }
        PoolAquisitionError::LockError(_) => {
            metrics.error_metrics.record_connector_error();
        }
    }
}
