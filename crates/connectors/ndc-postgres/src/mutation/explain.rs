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
) -> Result<models::ExplainResponse, connector::ExplainError> {
    async move {
        tracing::info!(
            mutation_request_json = serde_json::to_string(&mutation_request).unwrap(),
            mutation_request = ?mutation_request
        );

        // Compile the mutation.
        let plan = async { mutation::plan_mutation(configuration, state, mutation_request) }
            .instrument(info_span!("Plan mutation"))
            .await
            .map_err(|err| {
                record::translation_error(&err, &state.metrics);
                convert::translation_error_to_explain_error(&err)
            })?;

        // Execute an explain query.
        let results = async {
            query_engine_execution::mutation::explain(
                &state.pool,
                &state.database_info,
                &state.metrics,
                plan,
            )
            .await
            .map_err(|err| {
                record::execution_error(&err, &state.metrics);
                convert::execution_error_to_explain_error(err)
            })
        }
        .instrument(info_span!("Explain mutation"))
        .await?;

        state.metrics.record_successful_explain();

        let details: BTreeMap<String, String> = results
            .into_iter()
            .flat_map(|(name, sql, plan)| {
                vec![
                    (format!("{name} SQL Mutation"), sql),
                    (format!("{name} Execution Plan"), plan),
                ]
            })
            .collect();

        Ok(models::ExplainResponse { details })
    }
    .instrument(info_span!("/explain"))
    .await
}
