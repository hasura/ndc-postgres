//! Implement the `/mutation/explain` endpoint to return a mutation execution plan.
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
use crate::mutation;
use crate::state;

/// Explain a mutation by creating an execution plan.
///
/// This function implements the [mutation/explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
/// from the NDC specification.
pub async fn explain(
    configuration: &configuration::Configuration,
    state: &state::State,
    mutation_request: models::MutationRequest,
) -> Result<models::ExplainResponse, connector::ErrorResponse> {
    async move {
        tracing::debug!(
            mutation_request_json = serde_json::to_string(&mutation_request).unwrap(),
            mutation_request = ?mutation_request
        );

        let request_arguments = mutation_request.request_arguments.clone();

        // Compile the mutation.
        let plan = async { mutation::plan_mutation(configuration, state, mutation_request) }
            .instrument(info_span!("Plan mutation"))
            .await
            .map_err(|err| {
                record::translation_error(&err, &state.query_metrics);
                convert::translation_error_to_response(&err)
            })?;
        let pool = state
            .pool
            .aquire(&request_arguments, &state.query_metrics)
            .await
            .map_err(|err| {
                record::pool_aquisition_error(&err, &state.query_metrics);
                convert::pool_aquisition_error_to_response(err)
            })?;

        // Execute an explain query.
        let results = async {
            query_engine_execution::mutation::explain(
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
        .instrument(info_span!("Explain mutation"))
        .await?;

        state.query_metrics.record_successful_explain();

        let details: BTreeMap<String, String> = results
            .into_iter()
            // we enumerate because the procedure may be invoked multiple times
            // in a mutation request.
            .enumerate()
            .flat_map(|(number, (name, sql, plan))| {
                vec![
                    (format!("{number} {name} SQL Mutation"), sql),
                    (format!("{number} {name} Execution Plan"), plan),
                ]
            })
            .collect();

        Ok(models::ExplainResponse { details })
    }
    .instrument(info_span!("/explain"))
    .await
}
