//! Transient state used by the connector.
//!
//! This is initialized on startup.

use ndc_postgres_configuration::PoolSettings;
use ndc_postgres_configuration::{get_connect_options, ConnectionSettings, Redacted, SslInfo};
use percent_encoding::percent_decode_str;
use query_engine_execution::database_info::{self, DatabaseInfo, DatabaseVersion};
use query_engine_execution::metrics;
use sqlx::postgres::{PgPool, PgPoolOptions, PgRow};
use sqlx::{Connection, Row};
use std::sync::Arc;
use thiserror::Error;
use tracing::{info_span, Instrument};
use url::Url;

/// State for our connector.
#[derive(Debug)]
pub struct State {
    pub pool_manager: PoolManager,
    pub query_metrics: metrics::Metrics,
    pub configuration_metrics: ndc_postgres_configuration::Metrics,
}

/// A connection pool bundled with database info and a unique index
#[derive(Debug)]
pub struct PoolContext {
    pub pool: PgPool,
    pub database_info: DatabaseInfo,
    pub index: usize,
}

impl PoolContext {
    /// Create a connection pool with default settings.
    /// - <https://docs.rs/sqlx/latest/sqlx/pool/struct.PoolOptions.html>
    async fn new(
        connection_uri: &Redacted<String>,
        ssl: &Redacted<SslInfo>,
        pool_settings: &PoolSettings,
        index: usize,
    ) -> Result<Self, InitializationError> {
        let connection_url: Url = connection_uri
            .inner()
            .parse()
            .map_err(InitializationError::InvalidConnectionUri)?;

        let pool = create_pool(connection_uri.inner(), ssl.inner(), pool_settings)
            .instrument(info_span!(
                "Create connection pool",
                internal.visibility = "user",
            ))
            .await?;

        let database_version = {
            let mut connection = pool
                .acquire()
                .await
                .map_err(InitializationError::UnableToConnect)?;
            // Extract the database version string.
            // If the query fails, just return `None` and don't worry about it.
            let string = sqlx::query("SELECT version()")
                .map(|row: PgRow| row.get::<String, _>(0))
                .fetch_one(connection.as_mut())
                .await
                .ok();
            // Extract the database version number.
            let number = connection.server_version_num();
            DatabaseVersion { string, number }
        };
        let database_info = parse_database_info(&connection_url, database_version);

        Ok(Self {
            pool,
            database_info,
            index,
        })
    }
}

/// A pool manager that possibly handles multiple connection pools
#[derive(Debug)]
pub enum PoolManager {
    Static { pool: Arc<PoolContext> },
}

impl PoolManager {
    /// Create our PoolManager
    async fn new(
        connection_settings: &ConnectionSettings,
        pool_settings: &PoolSettings,
    ) -> Result<Self, InitializationError> {
        match connection_settings {
            ConnectionSettings::Static {
                connection_uri,
                ssl,
            } => Ok(Self::Static {
                pool: Arc::new(PoolContext::new(connection_uri, ssl, pool_settings, 0).await?),
            }),
        }
    }

    /// Aquire a connection pool from the connection manager
    /// The behavior depends on the configuration of dynamic connections
    ///
    /// Static mode:
    /// The default, non-dynamic mode. This is active when the dynamic connection options are not set
    /// In this mode, always return our one connection pool.
    ///
    /// Named mode:
    /// When the named mode is configured, attempt to extract the connection name from the request arguments.
    /// If we have a connection pool for the requested connection name, return it.
    /// Else, check if the configuration includes a connection string for that name.
    /// If so, create a connection pool using the connection string in configuration, and return it.
    ///
    /// If we don't have a connection string for the requested connection name, return an error.
    ///
    /// If the request does not include a connection name, check if we have a fallback pool, which we will if fallbackToStatic is set.
    /// If we do, return the fallback pool. Else, error.
    ///
    /// Dynamic mode:
    /// When dynamic connections are configured, attempt to extract the connection string from the request arguments.
    /// If we have a connection pool for the requested connection string, return it.
    /// Else, create a connection pool using the connection string provided in the request, and return it.
    ///
    /// If the request does not include a connection string, check if we have a fallback pool, which we will if fallbackToStatic is set.
    /// If we do, return the fallback pool. Else, error.
    pub fn acquire(&self) -> Arc<PoolContext> {
        match self {
            Self::Static { pool } => pool.clone(),
        }
    }

    /// Update the pool options metrics for all pools
    pub fn set_pool_options_metrics_all(&self, metrics: &metrics::Metrics) {
        match self {
            Self::Static { pool } => {
                metrics.set_pool_options_metrics(pool.pool.options(), pool.index, "default");
            }
        }
    }

    /// Update the pool metrics for all pools
    pub fn update_pool_metrics_all(&self, metrics: &metrics::Metrics) {
        match self {
            Self::Static { pool } => {
                metrics.update_pool_metrics(&pool.pool, pool.index, "default");
            }
        }
    }
}

#[derive(Debug, thiserror::Error)]
pub enum PoolAquisitionError {}

#[derive(Debug, thiserror::Error)]
pub enum LockError {
    #[error("Lock poisoned")]
    Poisoned,
}

impl<T> From<std::sync::PoisonError<T>> for LockError {
    fn from(_: std::sync::PoisonError<T>) -> Self {
        LockError::Poisoned
    }
}

/// Create a connection pool and wrap it inside a connector State.
pub async fn create_state(
    connection_settings: &ConnectionSettings,
    pool_settings: &PoolSettings,
    metrics_registry: &mut prometheus::Registry,
    version_tag: ndc_postgres_configuration::VersionTag,
) -> Result<State, InitializationError> {
    let pool_manager = PoolManager::new(connection_settings, pool_settings).await?;

    let (query_metrics, configuration_metrics) = async {
        let query_metrics_inner = metrics::Metrics::initialize(metrics_registry)
            .map_err(InitializationError::MetricsError)?;
        pool_manager.set_pool_options_metrics_all(&query_metrics_inner);

        let configuration_metrics_inner =
            ndc_postgres_configuration::Metrics::initialize(metrics_registry)
                .map_err(InitializationError::MetricsError)?;

        Ok::<_, InitializationError>((query_metrics_inner, configuration_metrics_inner))
    }
    .instrument(info_span!("Setup metrics"))
    .await?;

    configuration_metrics.set_configuration_version(version_tag);

    Ok(State {
        pool_manager,
        query_metrics,
        configuration_metrics,
    })
}

/// Create a connection pool with default settings.
/// - <https://docs.rs/sqlx/latest/sqlx/pool/struct.PoolOptions.html>
async fn create_pool(
    connection_url: &str,
    ssl: &SslInfo,
    pool_settings: &PoolSettings,
) -> Result<PgPool, InitializationError> {
    let connect_options = get_connect_options(connection_url, ssl)
        .map_err(InitializationError::InvalidConnectOptions)?;

    let pool_options = match pool_settings.check_connection_after_idle {
        // Unless specified otherwise, sqlx will always ping on acquire.
        None => PgPoolOptions::new(),
        // If the user set a time, only check after being idle for that time.
        Some(check_connection_after_idle) => PgPoolOptions::new()
            .test_before_acquire(false)
            .before_acquire(move |conn, meta| {
                Box::pin(async move {
                    if meta.idle_for.as_secs() > check_connection_after_idle {
                        conn.ping().await?;
                    }

                    Ok(true)
                })
            }),
    };

    pool_options
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

/// Parses the database information from the connection string.
/// The database name is assumed to be "postgresql".
/// The database version must be passed in as we cannot derive it.
///
/// The logic is copied from sqlx (though simplified considerably) to ensure
/// consistency with it.
fn parse_database_info(connection_url: &Url, system_version: DatabaseVersion) -> DatabaseInfo {
    let system_name = database_info::DATABASE_POSTGRESQL;
    let server_host = connection_url.host_str().map(decode_uri_component);
    let server_port = connection_url.port();
    let server_username = Some(connection_url.username())
        .filter(|s| !s.is_empty()) // replace empty strings with `None`
        .map(decode_uri_component);
    let server_database = Some(connection_url.path())
        .map(|s| s.strip_prefix('/').unwrap_or(s)) // remove the "/" prefix from the path
        .filter(|s| !s.is_empty()) // replace empty strings with `None`
        .map(decode_uri_component);
    DatabaseInfo {
        system_name,
        system_version,
        server_host,
        server_port,
        server_username,
        server_database,
    }
}

/// Decodes a percent-encoded URI component.
///
/// In the event that non-Unicode bytes occur, they are replaced.
fn decode_uri_component(component: &str) -> String {
    percent_decode_str(component)
        .decode_utf8_lossy()
        .into_owned()
}

/// State initialization error.
#[derive(Debug, Error)]
pub enum InitializationError {
    #[error("invalid connection URI: {0}")]
    InvalidConnectionUri(url::ParseError),
    #[error("Invalid connect options: {0}")]
    InvalidConnectOptions(anyhow::Error),
    #[error("unable to initialize connection pool: {0}")]
    UnableToCreatePool(sqlx::Error),
    #[error("unable to connect to the database: {0}")]
    UnableToConnect(sqlx::Error),
    #[error("error initializing metrics: {0}")]
    MetricsError(prometheus::Error),
    #[error("Failed to acquire lock: {0}")]
    LockError(#[from] LockError),
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parses_database_information() {
        let database_version = DatabaseVersion {
            string: Some("PostgreSQL 16.0".to_owned()),
            number: Some(16_0000),
        };
        let database_info = parse_database_info(
            &"postgresql://someone:supersecret@theplace:1234/db"
                .parse()
                .unwrap(),
            database_version.clone(),
        );

        assert_eq!(
            database_info,
            DatabaseInfo {
                system_name: "postgresql",
                system_version: database_version,
                server_host: Some("theplace".to_owned()),
                server_port: Some(1234),
                server_username: Some("someone".to_owned()),
                server_database: Some("db".to_owned()),
            }
        );
    }

    #[test]
    fn test_parses_database_information_with_missing_parts() {
        let database_version = DatabaseVersion {
            string: Some("PostgreSQL 15.0".to_owned()),
            number: Some(15_0000),
        };
        let database_info = parse_database_info(
            &"postgresql://example".parse().unwrap(),
            database_version.clone(),
        );

        assert_eq!(
            database_info,
            DatabaseInfo {
                system_name: "postgresql",
                system_version: database_version,
                server_host: Some("example".to_owned()),
                server_port: None,
                server_username: None,
                server_database: None,
            }
        );
    }

    #[test]
    fn test_parses_database_information_with_escaped_data() {
        let database_version = DatabaseVersion {
            string: Some("PostgreSQL 14.0".to_owned()),
            number: Some(14_0000),
        };
        let database_info = parse_database_info(
            &"postgresql://alice%3Aappleton@acacia.avenue:9876/data%2Fbase"
                .parse()
                .unwrap(),
            database_version.clone(),
        );

        assert_eq!(
            database_info,
            DatabaseInfo {
                system_name: "postgresql",
                system_version: database_version,
                server_host: Some("acacia.avenue".to_owned()),
                server_port: Some(9876),
                server_username: Some("alice:appleton".to_owned()),
                server_database: Some("data/base".to_owned()),
            }
        );
    }
}
