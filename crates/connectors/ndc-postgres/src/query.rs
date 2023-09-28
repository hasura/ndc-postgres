//! Implement the `/query` endpoint to run a query against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/queries/index.html)
//! for further details.

use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models;
use query_engine_execution::execution;
use query_engine_sql::sql;
use query_engine_translation::translation;

use super::configuration;

/// Execute a query
///
/// This function implements the [query endpoint](https://hasura.github.io/ndc-spec/specification/queries/index.html)
/// from the NDC specification.
pub async fn query<'a>(
    configuration: &configuration::RuntimeConfiguration<'a>,
    state: &configuration::State,
    query_request: models::QueryRequest,
) -> Result<models::QueryResponse, connector::QueryError> {
    let timer = state.metrics.time_query_total();

    // See https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html#in-asynchronous-code
    let result = async move {
        tracing::info!(
            query_request_json = serde_json::to_string(&query_request).unwrap(),
            query_request = ?query_request
        );

        let plan = async { plan_query(configuration, state, query_request) }
            .instrument(info_span!("Plan query"))
            .await?;

        let result = execute_query(state, plan)
            .instrument(info_span!("Execute query"))
            .await?;

        state.metrics.record_successful_query();
        Ok(result)
    }
    .instrument(info_span!("/query"))
    .await;

    timer.complete_with(result)
}

fn plan_query(
    configuration: &configuration::RuntimeConfiguration,
    state: &configuration::State,
    query_request: models::QueryRequest,
) -> Result<sql::execution_plan::ExecutionPlan, connector::QueryError> {
    let timer = state.metrics.time_query_plan();
    let result =
        translation::query::translate(configuration.metadata, query_request).map_err(|err| {
            tracing::error!("{}", err);
            match err {
                translation::query::error::Error::NotSupported(_) => {
                    connector::QueryError::UnsupportedOperation(err.to_string())
                }
                _ => connector::QueryError::InvalidRequest(err.to_string()),
            }
        });
    timer.complete_with(result)
}

async fn execute_query(
    state: &configuration::State,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<models::QueryResponse, connector::QueryError> {
    execution::execute(&state.pool, &state.metrics, plan)
        .await
        .map_err(|err| match err {
            execution::Error::Query(err) => {
                tracing::error!("{}", err);
                connector::QueryError::Other(err.into())
            }
            execution::Error::DB(err) => {
                tracing::error!("{}", err);
                connector::QueryError::Other(err.to_string().into())
            }
        })
}
