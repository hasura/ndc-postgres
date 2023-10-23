//! Transient state used by the connector.
//!
//! This is initialized on startup.

use query_engine_execution::metrics;
use sqlx::postgres::{PgPool, PgPoolOptions};
use thiserror::Error;
use tracing::{info_span, Instrument};

use crate::configuration::{Configuration, ConnectionUri, ResolvedSecret};

/// State for our connector.
#[derive(Debug)]
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
    let ConnectionUri::Uri(ResolvedSecret(uri)) = &configuration.config.connection_uri;

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
        .connect(uri)
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
}
