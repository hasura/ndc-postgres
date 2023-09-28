//! Internal Configuration and state for our connector.

use sqlx::postgres::{PgPool, PgPoolOptions};

use thiserror::Error;

use query_engine_execution::metrics;
use query_engine_metadata::metadata;

mod version1;

use tracing::{info_span, Instrument};

pub use version1::{
    configure,
    single_connection_uri, // for tests only
    validate_raw_configuration,
    Configuration,
    ConfigurationError,
    PoolSettings,
    RawConfiguration,
};

pub const CURRENT_VERSION: u32 = 1;

/// A configuration type, tailored to the needs of the query/mutation/explain methods (i.e., those
/// not to do with configuration management).
///
/// This separation also decouples the implementation from things like API versioning concerns
/// somewhat.
///
/// Since the RuntimeConfiguration is reconstructed from a Configuration at every method call, and
/// since it consists of a sub-selection of components from the full Configuration, the fields are
/// borrowed rather than owned.
#[derive(Debug, PartialEq)]
pub struct RuntimeConfiguration<'a> {
    pub metadata: &'a metadata::Metadata,
    pub aggregate_functions: &'a metadata::AggregateFunctions,
}

impl<'a> version1::Configuration {
    /// Apply the common interpretations on the Configuration API type into an RuntimeConfiguration.
    /// This means things like specializing the configuration to the particular region the NDC runs in,
    pub fn as_runtime_configuration(
        self: &'a Configuration,
    ) -> Result<RuntimeConfiguration<'a>, ConfigurationError> {
        Ok(RuntimeConfiguration {
            aggregate_functions: &self.config.aggregate_functions,
            metadata: &self.config.metadata,
        })
    }
}

/// State for our connector.
#[derive(Debug, Clone)]
pub struct State {
    pub pool: PgPool,
    pub metrics: metrics::Metrics,
}

/// Create a connection pool and wrap it inside a connector State.
pub async fn create_state(
    configuration: &Configuration,
    metrics_registry: &mut prometheus::Registry,
) -> Result<State, InitializationError> {
    let pool = create_pool(configuration)
        .instrument(info_span!("Create connection pool"))
        .await?;

    let metrics = async {
        let metrics_inner = metrics::Metrics::initialize(metrics_registry)
            .map_err(InitializationError::MetricsError)?;
        metrics_inner.set_pool_options_metrics(pool.options());
        Ok(metrics_inner)
    }
    .instrument(info_span!("Setup metrics"))
    .await?;

    Ok(State { pool, metrics })
}

/// Create a connection pool with default settings.
/// - <https://docs.rs/sqlx/latest/sqlx/pool/struct.PoolOptions.html>
async fn create_pool(configuration: &Configuration) -> Result<PgPool, InitializationError> {
    let url = version1::select_connection_url(
        &configuration.config.connection_uris,
        &configuration.region_routing,
    )
    .map_err(InitializationError::ConfigurationError)?;

    let pool_settings = &configuration.config.pool_settings;

    PgPoolOptions::new()
        .max_connections(pool_settings.max_connections)
        .acquire_timeout(std::time::Duration::from_secs(pool_settings.pool_timeout))
        .idle_timeout(
            pool_settings
                .idle_timeout
                .map(std::time::Duration::from_secs),
        )
        .max_lifetime(
            pool_settings
                .connection_lifetime
                .map(std::time::Duration::from_secs),
        )
        .connect(&url)
        .await
        .map_err(InitializationError::UnableToCreatePool)
}

/// State initialization error.
#[derive(Debug, Error)]
pub enum InitializationError {
    #[error("unable to initialize connection pool: {0}")]
    UnableToCreatePool(sqlx::Error),
    #[error("error initializing metrics: {0}")]
    MetricsError(metrics::Error),
    #[error("{0}")]
    ConfigurationError(ConfigurationError),
}
