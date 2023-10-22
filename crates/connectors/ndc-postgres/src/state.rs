//! Transient state used by the connector.
//!
//! This is initialized on startup.

use sqlx::postgres::{PgConnectOptions, PgPool, PgPoolOptions};
use sqlx::ConnectOptions;
use thiserror::Error;
use tracing::{info_span, Instrument};
use url::Url;

use crate::configuration::{Configuration, ConnectionUri, PoolSettings, ResolvedSecret};
use query_engine_execution::metrics;

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
    let ConnectionUri::Uri(ResolvedSecret(connection_uri)) = &configuration.config.connection_uri;
    let connection_url: Url = connection_uri
        .parse()
        .map_err(InitializationError::InvalidConnectionUri)?;
    let pool_settings = &configuration.config.pool_settings;
    let pool = create_pool(&connection_url, pool_settings)
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
async fn create_pool(
    connection_url: &Url,
    pool_settings: &PoolSettings,
) -> Result<PgPool, InitializationError> {
    let connect_options = PgConnectOptions::from_url(connection_url)
        .map_err(InitializationError::UnableToCreatePool)?;
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
        .connect_with(connect_options)
        .await
        .map_err(InitializationError::UnableToCreatePool)
}

/// State initialization error.
#[derive(Debug, Error)]
pub enum InitializationError {
    #[error("invalid connection URI: {0}")]
    InvalidConnectionUri(url::ParseError),
    #[error("unable to initialize connection pool: {0}")]
    UnableToCreatePool(sqlx::Error),
    #[error("error initializing metrics: {0}")]
    MetricsError(metrics::Error),
}
