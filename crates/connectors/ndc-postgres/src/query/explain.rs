//! Implement the `/query/explain` endpoint to return a query execution plan.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/explain.html)
//! for further details.

use std::collections::BTreeMap;

use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models;
use query_engine_sql::sql;
use query_engine_translation::translation;

use ndc_postgres_configuration as configuration;

use super::state;

/// Explain a query by creating an execution plan
///
/// This function implements the [query/explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
/// from the NDC specification.
pub async fn explain<'a>(
    configuration: &configuration::RuntimeConfiguration,
    state: &state::State,
    query_request: models::QueryRequest,
) -> Result<models::ExplainResponse, connector::ExplainError> {
    async move {
        tracing::info!(
            query_request_json = serde_json::to_string(&query_request).unwrap(),
            query_request = ?query_request
        );

        // Compile the query.
        let plan = async { plan_query(configuration, state, query_request) }
            .instrument(info_span!("Plan query"))
            .await?;

        // Execute an explain query.
        let (query, plan) = query_engine_execution::query::explain(
            &state.pool,
            &state.database_info,
            &state.metrics,
            plan,
        )
        .instrument(info_span!("Explain query"))
        .await
        .map_err(|err| match err {
            query_engine_execution::query::Error::Query(err) => {
                tracing::error!("{}", err);
                // log error metric
                match &err {
                    query_engine_execution::query::QueryError::VariableNotFound(_) => {
                        state.metrics.error_metrics.record_invalid_request();
                        connector::ExplainError::InvalidRequest(err.to_string())
                    }
                    query_engine_execution::query::QueryError::NotSupported(_) => {
                        state.metrics.error_metrics.record_unsupported_feature();
                        connector::ExplainError::UnsupportedOperation(err.to_string())
                    }
                    query_engine_execution::query::QueryError::DBError(_) => {
                        state.metrics.error_metrics.record_invalid_request();
                        connector::ExplainError::UnprocessableContent(err.to_string())
                    }
                }
            }
            query_engine_execution::query::Error::DB(err) => {
                tracing::error!("{}", err);
                state.metrics.error_metrics.record_database_error();
                connector::ExplainError::Other(err.to_string().into())
            }
        })?;

        state.metrics.record_successful_explain();

        let details =
            BTreeMap::from_iter([("SQL Query".into(), query), ("Execution Plan".into(), plan)]);

        let response = models::ExplainResponse { details };

        Ok(response)
    }
    .instrument(info_span!("/explain"))
    .await
}

fn plan_query(
    configuration: &configuration::RuntimeConfiguration,
    state: &state::State,
    query_request: models::QueryRequest,
) -> Result<sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>, connector::ExplainError>
{
    let timer = state.metrics.time_query_plan();
    let result = translation::query::translate(
        &configuration.metadata,
        configuration.isolation_level,
        query_request,
    )
    .map_err(|err| {
        tracing::error!("{}", err);
        match err {
            translation::error::Error::CapabilityNotSupported(_) => {
                state.metrics.error_metrics.record_unsupported_capability();
                connector::ExplainError::UnsupportedOperation(err.to_string())
            }
            translation::error::Error::NotImplementedYet(_) => {
                state.metrics.error_metrics.record_unsupported_feature();
                connector::ExplainError::UnsupportedOperation(err.to_string())
            }
            _ => {
                state.metrics.error_metrics.record_invalid_request();
                connector::ExplainError::InvalidRequest(err.to_string())
            }
        }
    });
    timer.complete_with(result)
}
