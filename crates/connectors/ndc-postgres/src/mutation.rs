//! Implement the `/mutation` endpoint to run a mutation statement against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
//! for further details.

mod explain;
pub use explain::explain;

use query_engine_execution::database_info::DatabaseInfo;
use query_engine_execution::metrics::Metrics;
use tracing::{info_span, Instrument};

use ndc_postgres_configuration as configuration;
use ndc_sdk::connector;
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;
use query_engine_execution;
use query_engine_sql::sql;
use query_engine_translation::translation;

use crate::configuration_mapping;
use crate::error::convert;
use crate::error::record;
use crate::state;

/// Execute a mutation
///
/// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
/// from the NDC specification.
pub async fn mutation(
    configuration: &configuration::Configuration,
    state: &state::State,
    request: models::MutationRequest,
) -> Result<JsonResponse<models::MutationResponse>, connector::ErrorResponse> {
    let timer = state.query_metrics.time_mutation_total();

    // See https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html#in-asynchronous-code
    let result = async move {
        tracing::debug!(
            request_json = serde_json::to_string(&request).unwrap(),
            request = ?request
        );

        let request_arguments = request.request_arguments.clone();

        let plan = async {
            plan_mutation(configuration, state, request).map_err(|err| {
                record::translation_error(&err, &state.query_metrics);
                convert::translation_error_to_response(&err)
            })
        }
        .instrument(info_span!("Plan mutation"))
        .await?;

        let pool = state
            .pool_manager
            .acquire(&request_arguments, &state.query_metrics)
            .await
            .map_err(|err| {
                record::pool_acquisition_error(&err, &state.query_metrics);
                convert::pool_acquisition_error_to_response(&err)
            })?;

        let result = async {
            execute_mutation(&pool.pool, &pool.database_info, &state.query_metrics, plan)
                .await
                .map_err(|err| {
                    record::execution_error(&err, &state.query_metrics);
                    convert::execution_error_to_response(err)
                })
        }
        .instrument(info_span!("Execute mutation"))
        .await?;

        state.query_metrics.record_successful_mutation();
        Ok(result)
    }
    .instrument(info_span!("/mutation"))
    .await;

    timer.complete_with(result)
}

/// Create a mutation execution plan from a request.
fn plan_mutation(
    configuration: &configuration::Configuration,
    state: &state::State,
    request: models::MutationRequest,
) -> Result<
    sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
    translation::error::Error,
> {
    let timer = state.query_metrics.time_mutation_plan();
    let mutations = request
        .operations
        .into_iter()
        .map(|operation| {
            translation::mutation::translate(
                &configuration.metadata,
                operation,
                request.collection_relationships.clone(),
                configuration.mutations_version,
                configuration.mutations_prefix.clone(),
            )
        })
        .collect::<Result<Vec<_>, _>>()?;
    timer.complete_with(Ok(sql::execution_plan::simple_mutations_execution_plan(
        configuration_mapping::convert_isolation_level(configuration.isolation_level),
        mutations,
    )))
}

async fn execute_mutation(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    query_metrics: &Metrics,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
) -> Result<JsonResponse<models::MutationResponse>, query_engine_execution::error::Error> {
    query_engine_execution::mutation::execute(pool, database_info, query_metrics, plan)
        .await
        .map(JsonResponse::Serialized)
}
