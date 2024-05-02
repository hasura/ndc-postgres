//! This defines a `Connector` implementation for PostgreSQL.
//!
//! The routes are defined here.

use std::path::Path;
use std::sync::Arc;

use async_trait::async_trait;
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::connector::{Connector, ConnectorSetup};
use ndc_sdk::json_response::JsonResponse;
use ndc_sdk::models;

use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

use super::capabilities;
use super::health;
use super::mutation;
use super::query;
use super::schema;
use super::state;

pub struct Postgres;

#[async_trait]
impl Connector for Postgres {
    /// The parsed configuration
    type Configuration = Arc<configuration::Configuration>;
    /// The unserializable, transient state
    type State = Arc<state::State>;

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
        schema::get_schema(configuration)
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
    /// This function implements the [query/explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
    /// from the NDC specification.
    async fn query_explain(
        configuration: &Self::Configuration,
        state: &Self::State,
        request: models::QueryRequest,
    ) -> Result<JsonResponse<models::ExplainResponse>, connector::ExplainError> {
        query::explain(configuration, state, request)
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

    /// Explain a mutation by creating an execution plan
    ///
    /// This function implements the [mutation/explain endpoint](https://hasura.github.io/ndc-spec/specification/explain.html)
    /// from the NDC specification.
    async fn mutation_explain(
        configuration: &Self::Configuration,
        state: &Self::State,
        request: models::MutationRequest,
    ) -> Result<JsonResponse<models::ExplainResponse>, connector::ExplainError> {
        mutation::explain(configuration, state, request)
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
        mutation::mutation(configuration, state, request)
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
        query::query(configuration, state, query_request)
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

pub struct PostgresSetup<Env: Environment> {
    environment: Env,
}

impl<Env: Environment> PostgresSetup<Env> {
    pub fn new(environment: Env) -> Self {
        Self { environment }
    }
}

#[async_trait]
impl<Env: Environment + Send + Sync> ConnectorSetup for PostgresSetup<Env> {
    type Connector = Postgres;

    /// Validate the raw configuration provided by the user,
    /// returning a configuration error or a validated `Connector::Configuration`.
    async fn parse_configuration(
        &self,
        configuration_dir: impl AsRef<Path> + Send,
    ) -> Result<<Self::Connector as Connector>::Configuration, connector::ParseError> {
        // Note that we don't log validation errors, because they are part of the normal business
        // operation of configuration validation, i.e. they don't represent an error condition that
        // signifies that anything has gone wrong with the ndc process or infrastructure.
        let parsed_configuration = configuration::parse_configuration(configuration_dir)
            .instrument(info_span!("parse configuration"))
            .await
            .map_err(|error| match error {
                configuration::error::ParseConfigurationError::ParseError {
                    file_path,
                    line,
                    column,
                    message,
                } => connector::ParseError::ParseError(connector::LocatedError {
                    file_path,
                    line,
                    column,
                    message,
                }),
                configuration::error::ParseConfigurationError::EmptyConnectionUri { file_path } => {
                    connector::ParseError::ValidateError(connector::InvalidNodes(vec![
                        connector::InvalidNode {
                            file_path,
                            node_path: vec![connector::KeyOrIndex::Key("connectionUri".into())],
                            message: "database connection URI must be specified".to_string(),
                        },
                    ]))
                }
                configuration::error::ParseConfigurationError::IoError(inner) => {
                    connector::ParseError::IoError(inner)
                }
                configuration::error::ParseConfigurationError::IoErrorButStringified(inner) => {
                    connector::ParseError::Other(inner.into())
                }
                configuration::error::ParseConfigurationError::DidNotFindExpectedVersionTag(_)
                | configuration::error::ParseConfigurationError::UnableToParseAnyVersions(_) => {
                    connector::ParseError::Other(Box::new(error))
                }
            })?;

        let runtime_configuration =
            configuration::make_runtime_configuration(parsed_configuration, &self.environment)
                .map_err(|error| {
                    match error {
            configuration::error::MakeRuntimeConfigurationError::MissingEnvironmentVariable {
                file_path,
                message,
            } => connector::ParseError::ValidateError(connector::InvalidNodes(vec![
                connector::InvalidNode {
                    file_path,
                    node_path: vec![connector::KeyOrIndex::Key("connectionUri".into())],
                    message,
                },
            ])),
        }
                })?;

        Ok(Arc::new(runtime_configuration))
    }

    /// Initialize the connector's in-memory state.
    ///
    /// For example, any connection pools, prepared queries,
    /// or other managed resources would be allocated here.
    ///
    /// In addition, this function should register any
    /// connector-specific metrics with the metrics registry.
    async fn try_init_state(
        &self,
        configuration: &<Self::Connector as Connector>::Configuration,
        metrics: &mut prometheus::Registry,
    ) -> Result<<Self::Connector as Connector>::State, connector::InitializationError> {
        state::create_state(
            &configuration.connection_uri,
            &configuration.pool_settings,
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
}
