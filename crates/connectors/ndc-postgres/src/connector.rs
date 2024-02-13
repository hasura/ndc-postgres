//! This defines a `Connector` implementation for PostgreSQL.
//!
//! The routes are defined here.
//!
//! The relevant types for configuration and state are defined in
//! `super::configuration`.

use std::sync::Arc;

use async_trait::async_trait;
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;

use ndc_postgres_configuration as configuration;

use super::capabilities;
use super::explain;
use super::health;
use super::mutation;
use super::query;
use super::schema;
use super::state;

#[derive(Clone, Default)]
pub struct Postgres {}

#[async_trait]
impl connector::Connector for Postgres {
    /// RawConfiguration is what the user specifies as JSON
    type RawConfiguration = configuration::RawConfiguration;
    /// The type of validated configuration
    type Configuration = Arc<configuration::Configuration>;
    /// The type of unserializable state
    type State = Arc<state::State>;

    fn make_empty_configuration() -> Self::RawConfiguration {
        configuration::RawConfiguration::empty()
    }

    /// Use the information inside a raw configuration to access the database and query
    /// the metadata. Return this information.
    async fn update_configuration(
        args: Self::RawConfiguration,
    ) -> Result<Self::RawConfiguration, connector::UpdateConfigurationError> {
        configuration::configure(args)
            .instrument(info_span!("Update configuration"))
            .await
            .map_err(|err| {
                tracing::error!(
                    meta.signal_type = "log",
                    event.domain = "ndc",
                    event.name = "Update configuration error",
                    name = "Update configuration error",
                    body = %err,
                    error = true,
                );
                err
            })
    }

    /// Validate the raw configuration provided by the user,
    /// returning a configuration error or a validated `Connector::Configuration`.
    async fn validate_raw_configuration(
        configuration: Self::RawConfiguration,
    ) -> Result<Self::Configuration, connector::ValidateError> {
        configuration::validate_raw_configuration(configuration)
            .instrument(info_span!("Validate raw configuration"))
            .await
            .map(Arc::new)

        // Note that we don't log validation errors, because they are part of the normal business
        // operation of configuration validation, i.e. they don't represent an error condition that
        // signifies that anything has gone wrong with the ndc process or infrastructure.
    }

    /// Initialize the connector's in-memory state.
    ///
    /// For example, any connection pools, prepared queries,
    /// or other managed resources would be allocated here.
    ///
    /// In addition, this function should register any
    /// connector-specific metrics with the metrics registry.
    async fn try_init_state(
        configuration: &Self::Configuration,
        metrics: &mut prometheus::Registry,
    ) -> Result<Self::State, connector::InitializationError> {
        let runtime_configuration = configuration::as_runtime_configuration(configuration);

        state::create_state(
            runtime_configuration.connection_uri,
            runtime_configuration.pool_settings,
            metrics,
        )
        .instrument(info_span!("Initialise state"))
        .await
        .map(Arc::new)
        .map_err(|err| connector::InitializationError::Other(err.into()))
        .map_err(|err| {
            tracing::error!(
                meta.signal_type = "log",
                event.domain = "ndc",
                event.name = "Initialization error",
                name = "Initialization error",
                body = %err,
                error = true,
            );
            err
        })
    }

    /// Update any metrics from the state
    ///
    /// Note: some metrics can be updated directly, and do not
    /// need to be updated here. This function can be useful to
    /// query metrics which cannot be updated directly, e.g.
    /// the number of idle connections in a connection pool
    /// can be polled but not updated directly.
    fn fetch_metrics(
        _configuration: &Self::Configuration,
        state: &Self::State,
    ) -> Result<(), connector::FetchMetricsError> {
        state.metrics.update_pool_metrics(&state.pool);
        Ok(())
    }

    /// Check the health of the connector.
    ///
    /// For example, this function should check that the connector
    /// is able to reach its data source over the network.
    async fn health_check(
        _configuration: &Self::Configuration,
        state: &Self::State,
    ) -> Result<(), connector::HealthError> {
        health::health_check(&state.pool).await.map_err(|err| {
            tracing::error!(
                meta.signal_type = "log",
                event.domain = "ndc",
                event.name = "Health check error",
                name = "Health check error",
                body = %err,
                error = true,
            );
            err
        })
    }

    /// Get the connector's capabilities.
    ///
    /// This function implements the [capabilities endpoint](https://hasura.github.io/ndc-spec/specification/capabilities.html)
    /// from the NDC specification.
    async fn get_capabilities() -> JsonResponse<models::CapabilitiesResponse> {
        capabilities::get_capabilities().into()
    }

    /// Get the connector's schema.
    ///
    /// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
    /// from the NDC specification.
    async fn get_schema(
        configuration: &Self::Configuration,
    ) -> Result<JsonResponse<models::SchemaResponse>, connector::SchemaError> {
        let runtime_configuration = configuration::as_runtime_configuration(configuration);
        schema::get_schema(runtime_configuration)
            .await
            .map_err(|err| {
                tracing::error!(
                    meta.signal_type = "log",
                    event.domain = "ndc",
                    event.name = "Schema error",
                    name = "Schema error",
                    body = %err,
                    error = true,
                );
                err
            })
            .map(Into::into)
    }

    /// Explain a query by creating an execution plan
    ///
    /// This function implements the [explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
    /// from the NDC specification.
    async fn explain(
        configuration: &Self::Configuration,
        state: &Self::State,
        query_request: models::QueryRequest,
    ) -> Result<JsonResponse<models::ExplainResponse>, connector::ExplainError> {
        let runtime_configuration = configuration::as_runtime_configuration(configuration);
        explain::explain(runtime_configuration, state, query_request)
            .await
            .map_err(|err| {
                tracing::error!(
                    meta.signal_type = "log",
                    event.domain = "ndc",
                    event.name = "Explain error",
                    name = "Explain error",
                    body = %err,
                    error = true,
                );
                err
            })
            .map(Into::into)
    }

    /// Execute a mutation
    ///
    /// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
    /// from the NDC specification.
    async fn mutation(
        configuration: &Self::Configuration,
        state: &Self::State,
        request: models::MutationRequest,
    ) -> Result<JsonResponse<models::MutationResponse>, connector::MutationError> {
        let runtime_configuration = configuration::as_runtime_configuration(configuration);
        mutation::mutation(runtime_configuration, state, request)
            .await
            .map_err(|err| {
                tracing::error!(
                    meta.signal_type = "log",
                    event.domain = "ndc",
                    event.name = "Mutation error",
                    name = "Mutation error",
                    body = %err,
                    error = true,
                );
                err
            })
    }

    /// Execute a query
    ///
    /// This function implements the [query endpoint](https://hasura.github.io/ndc-spec/specification/queries/index.html)
    /// from the NDC specification.
    async fn query(
        configuration: &Self::Configuration,
        state: &Self::State,
        query_request: models::QueryRequest,
    ) -> Result<JsonResponse<models::QueryResponse>, connector::QueryError> {
        let runtime_configuration = configuration::as_runtime_configuration(configuration);
        query::query(runtime_configuration, state, query_request)
            .await
            .map_err(|err| {
                tracing::error!(
                    meta.signal_type = "log",
                    event.domain = "ndc",
                    event.name = "Query error",
                    name = "Query error",
                    body = %err,
                    error = true,
                );
                err
            })
    }
}
