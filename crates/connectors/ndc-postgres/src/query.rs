//! Implement the `/query` endpoint to run a query against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/queries/index.html)
//! for further details.

mod explain;
pub use explain::explain;

use ndc_postgres_configuration::version5::DynamicConnectionSettings;
use ndc_postgres_configuration::ConnectionSettings;
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;

use ndc_postgres_configuration as configuration;
use query_engine_sql::sql;
use query_engine_translation::translation;

use crate::error::convert;
use crate::error::record;
use crate::state;

/// Execute a query
///
/// This function implements the [query endpoint](https://hasura.github.io/ndc-spec/specification/queries/index.html)
/// from the NDC specification.
pub async fn query(
    configuration: &configuration::Configuration,
    state: &state::State,
    query_request: models::QueryRequest,
) -> Result<JsonResponse<models::QueryResponse>, connector::ErrorResponse> {
    let timer = state.query_metrics.time_query_total();

    // See https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html#in-asynchronous-code
    let result = async move {
        tracing::info!(
            query_request_json = serde_json::to_string(&query_request).unwrap(),
            query_request = ?query_request
        );

        let connection_details =
            extract_connection_details_from_query(configuration, &query_request).await?;

        let plan = async {
            plan_query(configuration, state, query_request).map_err(|err| {
                record::translation_error(&err, &state.query_metrics);
                convert::translation_error_to_response(&err)
            })
        }
        .instrument(info_span!("Plan query"))
        .await?;

        let result = async {
            execute_query(state, plan, connection_details)
                .await
                .map_err(|err| {
                    record::execution_error(&err, &state.query_metrics);
                    convert::execution_error_to_response(err)
                })
        }
        .instrument(info_span!("Execute query"))
        .await?;

        state.query_metrics.record_successful_query();
        Ok(result)
    }
    .instrument(info_span!("/query"))
    .await;

    timer.complete_with(result)
}

// if this is a dynamic connection situation, which connection string should we be using?
pub struct RequestConnectionDetails {
    pool: PgPool 
}

async fn extract_connection_details_from_query(
    configuration: &configuration::Configuration,
    query_request: &models::QueryRequest,
) -> Result<Option<RequestConnectionDetails>, translation::error::Error> {
    // check in config if we need to look in request arguments
    match &configuration.connection {
        ConnectionSettings::Static { .. } => Ok(None),
        ConnectionSettings::Dynamic {
            dynamic_connection_settings: DynamicConnectionSettings::NamedFromList,
        } => {
            let connection_identifier = &query_request
                .request_arguments
                .as_ref()
                .and_then(|request_arguments| request_arguments.get("connection_identifier"))
                .ok_or_else(|| translation::error::Error::MissingConnectionIdentifier)?;

            // lookup uri
            let connection_uri = "";

            let pool = create_pool(connection_uri, environment, pool_settings)
                .instrument(info_span!(
                    "Create connection pool",
                    internal.visibility = "user",
                ))
                .await?;

            Ok(Some(RequestConnectionDetails {
                pool 
            }))
        }
    }
}

fn plan_query(
    configuration: &configuration::Configuration,
    state: &state::State,
    query_request: models::QueryRequest,
) -> Result<sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>, translation::error::Error>
{
    let timer = state.query_metrics.time_query_plan();
    let result = translation::query::translate(&configuration.metadata, query_request);
    timer.complete_with(result)
}

async fn execute_query(
    state: &state::State,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>,
    connection_details: Option<RequestConnectionDetails>,
) -> Result<JsonResponse<models::QueryResponse>, query_engine_execution::error::Error> {
    match (&state.pool, connection_details) {
        (
            state::Pool::Static {
                pool,
                database_info,
            },
            _,
        ) => (&pool,Some(database_info))
        (state::Pool::Dynamic(_), Some(RequestConnectionDetails { pool })) => (&pool,None),
    }
    query_engine_execution::query::execute(pool, database_info, &state.query_metrics, plan)
        .await
        .map(JsonResponse::Serialized)
}
