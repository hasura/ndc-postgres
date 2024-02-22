//! Implement the `/mutation/explain` endpoint to return a mutation execution plan.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/explain.html)
//! for further details.

use std::collections::BTreeMap;

use tracing::{info_span, Instrument};

use ndc_postgres_configuration as configuration;

use crate::mutation;
use ndc_sdk::connector;
use ndc_sdk::models;

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
            .map_err(|err| convert_mutation_error(&err))?;

        // Execute an explain query.
        let results = query_engine_execution::mutation::explain(
            &state.pool,
            &state.database_info,
            &state.metrics,
            plan,
        )
        .instrument(info_span!("Explain mutation"))
        .await
        .map_err(|err| {
            tracing::error!("{}", err);
            log_err_metrics_and_convert_error(state, &err)
        })?;

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

        let response = models::ExplainResponse { details };

        Ok(response)
    }
    .instrument(info_span!("/explain"))
    .await
}

fn log_err_metrics_and_convert_error(
    state: &state::State,
    err: &query_engine_execution::error::Error,
) -> connector::ExplainError {
    match err {
        query_engine_execution::error::Error::Query(err) => {
            tracing::error!("{}", err);
            // log error metric
            match &err {
                query_engine_execution::error::QueryError::VariableNotFound(_) => todo!(),
                query_engine_execution::error::QueryError::NotSupported(_) => {
                    state.metrics.error_metrics.record_unsupported_feature();
                    connector::ExplainError::UnsupportedOperation(err.to_string())
                }
                query_engine_execution::error::QueryError::DBError(_) => {
                    state.metrics.error_metrics.record_invalid_request();
                    connector::ExplainError::UnprocessableContent(err.to_string())
                }
                query_engine_execution::error::QueryError::DBConstraintError(_) => {
                    state.metrics.error_metrics.record_invalid_request();
                    connector::ExplainError::UnprocessableContent(err.to_string())
                }
            }
        }
        query_engine_execution::error::Error::DB(err) => {
            tracing::error!("{}", err);
            state.metrics.error_metrics.record_database_error();
            connector::ExplainError::Other(err.to_string().into())
        }
    }
}

fn convert_mutation_error(err: &connector::MutationError) -> connector::ExplainError {
    match err {
        connector::MutationError::InvalidRequest(_) => {
            connector::ExplainError::InvalidRequest(err.to_string())
        }
        connector::MutationError::UnprocessableContent(_) => {
            connector::ExplainError::UnprocessableContent(err.to_string())
        }
        connector::MutationError::UnsupportedOperation(_) => {
            connector::ExplainError::UnsupportedOperation(err.to_string())
        }
        connector::MutationError::Conflict(_) => {
            connector::ExplainError::Other(err.to_string().into())
        }
        connector::MutationError::ConstraintNotMet(_) => {
            connector::ExplainError::Other(err.to_string().into())
        }
        connector::MutationError::Other(_) => {
            connector::ExplainError::Other(err.to_string().into())
        }
    }
}
