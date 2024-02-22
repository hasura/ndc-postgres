//! Implement the `/mutation` endpoint to run a mutation statement against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
//! for further details.

mod explain;
pub use explain::explain;

use tracing::{info_span, Instrument};

use ndc_postgres_configuration as configuration;
use ndc_sdk::connector;
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;
use query_engine_execution;
use query_engine_sql::sql;
use query_engine_translation::translation;

use crate::configuration_mapping;
use crate::convert;
use crate::record;
use crate::state;

/// Execute a mutation
///
/// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
/// from the NDC specification.
pub async fn mutation(
    configuration: &configuration::Configuration,
    state: &state::State,
    request: models::MutationRequest,
) -> Result<JsonResponse<models::MutationResponse>, connector::MutationError> {
    let timer = state.metrics.time_mutation_total();

    // See https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html#in-asynchronous-code
    let result = async move {
        tracing::info!(
            request_json = serde_json::to_string(&request).unwrap(),
            request = ?request
        );

        let plan = async { plan_mutation(configuration, state, request) }
            .instrument(info_span!("Plan mutation"))
            .await?;

        let result = execute_mutation(state, plan)
            .instrument(info_span!("Execute mutation"))
            .await?;

        state.metrics.record_successful_mutation();
        Ok(result)
    }
    .instrument(info_span!("/mutation"))
    .await;

    timer.complete_with(result)
}

/// Create a mutation execution plan from a request.
pub fn plan_mutation(
    configuration: &configuration::Configuration,
    state: &state::State,
    request: models::MutationRequest,
) -> Result<
    sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
    connector::MutationError,
> {
    let timer = state.metrics.time_mutation_plan();
    let mutations = request
        .operations
        .into_iter()
        .map(|operation| {
            translation::mutation::translate(
                &configuration.metadata,
                operation,
                request.collection_relationships.clone(),
                configuration.mutations_version,
            )
            .map_err(|err| {
                record::translation_error(&err, &state.metrics);
                convert::translation_error_to_mutation_error(err)
            })
        })
        .collect::<Result<Vec<_>, connector::MutationError>>()?;
    timer.complete_with(Ok(sql::execution_plan::simple_mutations_execution_plan(
        configuration_mapping::convert_isolation_level(configuration.isolation_level),
        mutations,
    )))
}

async fn execute_mutation(
    state: &state::State,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
) -> Result<JsonResponse<models::MutationResponse>, connector::MutationError> {
    query_engine_execution::mutation::execute(
        &state.pool,
        &state.database_info,
        &state.metrics,
        plan,
    )
    .await
    .map(JsonResponse::Serialized)
    .map_err(|err| {
        record::execution_error(&err, &state.metrics);
        convert::execution_error_to_mutation_error(err)
    })
}
