//! Implement the `/query/explain` endpoint to return a query execution plan.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/explain.html)
//! for further details.

use std::collections::BTreeMap;

use tracing::{info_span, Instrument};

use ndc_postgres_configuration as configuration;
use ndc_sdk::connector;
use ndc_sdk::models;

use crate::error::convert;
use crate::error::record;
use crate::state;

/// Explain a query by creating an execution plan
///
/// This function implements the [query/explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
/// from the NDC specification.
pub async fn explain(
    configuration: &configuration::Configuration,
    state: &state::State,
    query_request: models::QueryRequest,
) -> Result<models::ExplainResponse, connector::ErrorResponse> {
    async move {
        tracing::debug!(
            query_request_json = serde_json::to_string(&query_request).unwrap(),
            query_request = ?query_request
        );

        let request_arguments = query_request.request_arguments.clone();

        // Compile the query.
        let plan = async {
            super::plan_query(configuration, state, query_request).map_err(|err| {
                record::translation_error(&err, &state.query_metrics);
                convert::translation_error_to_response(&err)
            })
        }
        .instrument(info_span!("Plan query"))
        .await?;
        let pool = state
            .pool_manager
            .acquire(&request_arguments, &state.query_metrics)
            .await
            .map_err(|err| {
                record::pool_acquisition_error(&err, &state.query_metrics);
                convert::pool_acquisition_error_to_response(&err)
            })?;

        // Execute an explain query.
        let (query, plan) = async {
            query_engine_execution::query::explain(
                &pool.pool,
                &pool.database_info,
                &state.query_metrics,
                plan,
            )
            .await
            .map_err(|err| {
                record::execution_error(&err, &state.query_metrics);
                convert::execution_error_to_response(err)
            })
        }
        .instrument(info_span!("Explain query"))
        .await?;

        state.query_metrics.record_successful_explain();

        let details =
            BTreeMap::from_iter([("SQL Query".into(), query), ("Execution Plan".into(), plan)]);

        Ok(models::ExplainResponse { details })
    }
    .instrument(info_span!("/explain"))
    .await
}
