//! Implement the `/explain` endpoint to return a query execution plan.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/explain.html)
//! for further details.

use std::collections::BTreeMap;

use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models;
use query_engine_execution::execution;
use query_engine_translation::translation;

use super::configuration;

/// Explain a query by creating an execution plan
///
/// This function implements the [explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
/// from the NDC specification.
pub async fn explain<'a>(
    configuration: &configuration::RuntimeConfiguration<'a>,
    state: &configuration::State,
    query_request: models::QueryRequest,
) -> Result<models::ExplainResponse, connector::ExplainError> {
    async move {
        tracing::info!(
            query_request_json = serde_json::to_string(&query_request).unwrap(),
            query_request = ?query_request
        );

        // Compile the query.
        let plan = match translation::query::translate(configuration.metadata, query_request) {
            Ok(plan) => Ok(plan),
            Err(err) => {
                tracing::error!("{}", err);
                Err(connector::ExplainError::Other(err.to_string().into()))
            }
        }?;

        // Execute an explain query.
        let (query, plan) =
            execution::explain(&state.pool, plan)
                .await
                .map_err(|err| match err {
                    execution::Error::Query(err) => {
                        tracing::error!("{}", err);
                        connector::ExplainError::Other(err.into())
                    }
                    execution::Error::DB(err) => {
                        tracing::error!("{}", err);
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
