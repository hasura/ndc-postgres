//! This defines a `Connector` implementation for PostgreSQL.
//!
//! The routes are defined here.
//!
//! The relevant types for configuration and state are defined in
//! `super::configuration`.

use async_trait::async_trait;
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models;

use super::{capabilities, configuration, explain, health, query, schema};

const CONFIGURATION_QUERY: &str = include_str!("configuration.sql");

#[derive(Clone, Default)]
pub struct Postgres {}

#[async_trait]
impl connector::Connector for Postgres {
    /// RawConfiguration is what the user specifies as JSON
    type RawConfiguration = configuration::RawConfiguration;
    /// The type of validated configuration
    type Configuration = configuration::Configuration;
    /// The type of unserializable state
    type State = configuration::State;

    fn make_empty_configuration() -> Self::RawConfiguration {
        configuration::RawConfiguration::empty()
    }

    fn get_read_regions(config: &Self::Configuration) -> Vec<String> {
        config.read_regions.iter().map(|r| r.to_string()).collect()
    }

    fn get_write_regions(config: &Self::Configuration) -> Vec<String> {
        config.write_regions.iter().map(|r| r.to_string()).collect()
    }

    /// Configure a configuration maybe?
    async fn update_configuration(
        args: &Self::RawConfiguration,
    ) -> Result<configuration::RawConfiguration, connector::UpdateConfigurationError> {
        configuration::configure(args, CONFIGURATION_QUERY)
            .instrument(info_span!("Update configuration"))
            .await
    }

    /// Validate the raw configuration provided by the user,
    /// returning a configuration error or a validated `Connector::Configuration`.
    async fn validate_raw_configuration(
        configuration: &Self::RawConfiguration,
    ) -> Result<Self::Configuration, connector::ValidateError> {
        configuration::validate_raw_configuration(configuration)
            .instrument(info_span!("Validate raw configuration"))
            .await
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
        configuration::create_state(configuration, metrics)
            .instrument(info_span!("Initialise state"))
            .await
            .map_err(|err| connector::InitializationError::Other(err.into()))
    }

    /// Update any metrics from the state
    ///
    /// Note: some metrics can be updated directly, and do not
    /// need to be updated here. This function can be useful to
    /// query metrics which cannot be updated directly, e.g.
    /// the number of idle connections in a connection pool
    /// can be polled but not updated directly.
    fn fetch_metrics(
        _configuration: &configuration::Configuration,
        state: &configuration::State,
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
        health::health_check(&state.pool).await
    }

    /// Get the connector's capabilities.
    ///
    /// This function implements the [capabilities endpoint](https://hasura.github.io/ndc-spec/specification/capabilities.html)
    /// from the NDC specification.
    async fn get_capabilities() -> models::CapabilitiesResponse {
        capabilities::get_capabilities()
    }

    /// Get the connector's schema.
    ///
    /// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
    /// from the NDC specification.
    async fn get_schema(
        configuration: &Self::Configuration,
    ) -> Result<models::SchemaResponse, connector::SchemaError> {
        schema::get_schema(configuration).await
    }

    /// Explain a query by creating an execution plan
    ///
    /// This function implements the [explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
    /// from the NDC specification.
    async fn explain(
        configuration: &Self::Configuration,
        state: &Self::State,
        query_request: models::QueryRequest,
    ) -> Result<models::ExplainResponse, connector::ExplainError> {
        let conf = &configuration
            .as_runtime_configuration()
            .map_err(|err| connector::ExplainError::Other(err.into()))?;
        explain::explain(conf, state, query_request).await
    }

    /// Execute a mutation
    ///
    /// This function implements the [mutation endpoint](https://hasura.github.io/ndc-spec/specification/mutations/index.html)
    /// from the NDC specification.
    async fn mutation(
        _configuration: &Self::Configuration,
        _state: &Self::State,
        _request: models::MutationRequest,
    ) -> Result<models::MutationResponse, connector::MutationError> {
        todo!("mutations are currently not implemented")
    }

    /// Execute a query
    ///
    /// This function implements the [query endpoint](https://hasura.github.io/ndc-spec/specification/queries/index.html)
    /// from the NDC specification.
    async fn query(
        configuration: &Self::Configuration,
        state: &Self::State,
        query_request: models::QueryRequest,
    ) -> Result<models::QueryResponse, connector::QueryError> {
        let conf = &configuration
            .as_runtime_configuration()
            .map_err(|err| connector::QueryError::Other(err.into()))?;
        query::query(conf, state, query_request).await
    }
}
