//! Implement the `/mutation` endpoint to run a mutation statement against postgres.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
//! for further details.

// use tracing::{info_span, Instrument};
//
// use ndc_sdk::connector;
// use ndc_sdk::json_response::JsonResponse;
// use ndc_sdk::models;
// use query_engine_execution::execution;
// use query_engine_sql::sql;
// use query_engine_translation::translation;
//
// use super::configuration;
// use super::state;
//
// /// Execute a mutation
// ///
// /// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
// /// from the NDC specification.
// async fn mutation<'a>(
//     configuration: &configuration::RuntimeConfiguration<'a>,
//     state: &state::State,
//     request: models::MutationRequest,
// ) -> Result<JsonResponse<models::MutationResponse>, connector::MutationError> {
//     let timer = state.metrics.time_query_total();
//
//     // See https://docs.rs/tracing/0.1.29/tracing/span/struct.Span.html#in-asynchronous-code
//     let result = async move {
//         tracing::info!(
//             request_json = serde_json::to_string(&request).unwrap(),
//             request = ?request
//         );
//
//         let plan = async { plan_mutation(configuration, state, request) }
//             .instrument(info_span!("Plan mutation"))
//             .await?;
//
//         let result = execute_mutation(state, plan)
//             .instrument(info_span!("Execute mutation"))
//             .await?;
//
//         state.metrics.record_successful_mutation();
//         Ok(result)
//     }
//     .instrument(info_span!("/mutation"))
//     .await;
//
//     timer.complete_with(result)
// }
//
// fn plan_mutation(
//     configuration: &configuration::RuntimeConfiguration,
//     state: &state::State,
//     request: models::MutationRequest,
// ) -> Result<sql::execution_plan::ExecutionPlan, connector::QueryError> {
//     let timer = state.metrics.time_query_plan();
//     let result = translation::mutation::translate(
//         configuration.metadata,
//         request.operations.get(0).unwrap().clone(), // @todo
//         request.collection_relationships,
//     )
//     .map_err(|err| {
//         tracing::error!("{}", err);
//         // log metrics
//         match err {
//             translation::error::Error::CapabilityNotSupported(_) => {
//                 state.metrics.error_metrics.record_unsupported_capability();
//                 connector::MutationError::UnsupportedOperation(err.to_string())
//             }
//             translation::error::Error::NotImplementedYet(_) => {
//                 state.metrics.error_metrics.record_unsupported_feature();
//                 connector::MutationError::UnsupportedOperation(err.to_string())
//             }
//             _ => {
//                 state.metrics.error_metrics.record_invalid_request();
//                 connector::MutationError::InvalidRequest(err.to_string())
//             }
//         }
//     });
//     timer.complete_with(result)
// }
//
// async fn execute_mutation(
//     state: &state::State,
//     plan: sql::execution_plan::ExecutionPlan,
// ) -> Result<JsonResponse<models::QueryResponse>, connector::QueryError> {
//     execution::execute(&state.pool, &state.database_info, &state.metrics, plan)
//         .await
//         .map(JsonResponse::Serialized)
//         .map_err(|err| match err {
//             execution::Error::Query(err) => {
//                 tracing::error!("{}", err);
//                 // log error metric
//                 match &err {
//                     execution::QueryError::ReservedVariableName(_) => {
//                         state.metrics.error_metrics.record_invalid_request()
//                     }
//                     execution::QueryError::VariableNotFound(_) => {
//                         state.metrics.error_metrics.record_invalid_request()
//                     }
//                     execution::QueryError::NotSupported(_) => {
//                         state.metrics.error_metrics.record_unsupported_feature()
//                     }
//                 }
//                 connector::QueryError::Other(err.to_string().into())
//             }
//             execution::Error::DB(err) => {
//                 tracing::error!("{}", err);
//                 state.metrics.error_metrics.record_database_error();
//                 connector::QueryError::Other(err.to_string().into())
//             }
//         })
// }
