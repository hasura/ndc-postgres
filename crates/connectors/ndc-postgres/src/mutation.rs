//! Implement the `/mutation` endpoint to run a mutation statement against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
//! for further details.

mod explain;
pub use explain::explain;

use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;
use query_engine_execution;
use query_engine_sql::sql;
use query_engine_translation::translation;

use super::configuration;
use super::state;

/// Execute a mutation
///
/// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
/// from the NDC specification.
pub async fn mutation<'a>(
    configuration: &configuration::RuntimeConfiguration,
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
    configuration: &configuration::RuntimeConfiguration,
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
                &configuration.mutations_version,
            )
            .map_err(|err| {
                tracing::error!("{}", err);
                // log metrics
                match err {
                    translation::error::Error::CapabilityNotSupported(_) => {
                        state.metrics.error_metrics.record_unsupported_capability();
                        connector::MutationError::UnsupportedOperation(err.to_string())
                    }
                    translation::error::Error::NotImplementedYet(_) => {
                        state.metrics.error_metrics.record_unsupported_feature();
                        connector::MutationError::UnsupportedOperation(err.to_string())
                    }
                    _ => {
                        state.metrics.error_metrics.record_invalid_request();
                        connector::MutationError::InvalidRequest(err.to_string())
                    }
                }
            })
        })
        .collect::<Result<Vec<_>, connector::MutationError>>()?;
    timer.complete_with(Ok(sql::execution_plan::simple_mutations_execution_plan(
        configuration.isolation_level,
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
        tracing::error!("{}", err);
        log_err_metrics_and_convert_error(state, &err)
    })
}

fn log_err_metrics_and_convert_error(
    state: &state::State,
    err: &query_engine_execution::mutation::Error,
) -> connector::MutationError {
    match err {
        query_engine_execution::mutation::Error::Query(err) => match &err {
            query_engine_execution::mutation::QueryError::NotSupported(_) => {
                state.metrics.error_metrics.record_unsupported_feature();
                connector::MutationError::UnsupportedOperation(err.to_string())
            }
            query_engine_execution::mutation::QueryError::DBError(_) => {
                state.metrics.error_metrics.record_invalid_request();
                connector::MutationError::UnprocessableContent(err.to_string())
            }
            query_engine_execution::mutation::QueryError::DBConstraintError(_) => {
                state.metrics.error_metrics.record_invalid_request();
                connector::MutationError::ConstraintNotMet(err.to_string())
            }
        },
        query_engine_execution::mutation::Error::DB(_) => {
            state.metrics.error_metrics.record_database_error();
            connector::MutationError::Other(err.to_string().into())
        }
        query_engine_execution::mutation::Error::Multiple(err1, err2) => {
            log_err_metrics_and_convert_error(state, err1);
            log_err_metrics_and_convert_error(state, err2);
            connector::MutationError::Other(err.to_string().into())
        }
    }
}
