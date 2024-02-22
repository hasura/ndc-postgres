//! Record information about errors in traces and metrics.

use query_engine_execution::metrics;

/// Record an execution error in the current trace, and increment a counter.
pub(crate) fn execution_error(
    error: &query_engine_execution::error::Error,
    metrics: &metrics::Metrics,
) {
    tracing::error!("{}", error);
    match error {
        query_engine_execution::error::Error::Query(err) => match &err {
            query_engine_execution::error::QueryError::VariableNotFound(_)
            | query_engine_execution::error::QueryError::DBError(_)
            | query_engine_execution::error::QueryError::DBConstraintError(_) => {
                metrics.error_metrics.record_invalid_request();
            }
            query_engine_execution::error::QueryError::NotSupported(_) => {
                metrics.error_metrics.record_unsupported_feature();
            }
        },
        query_engine_execution::error::Error::DB(_) => {
            metrics.error_metrics.record_database_error();
        }
    }
}
