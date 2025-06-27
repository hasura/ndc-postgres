//! Transient state used by the connector.
//!
//! This is initialized on startup.

use core::error;
use std::collections::BTreeMap;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex, RwLock};

use ndc_postgres_configuration::{get_connect_options, ConnectionSettings, Redacted, SslInfo};
use ndc_sdk::connector::ErrorResponse;
use ndc_sdk::models::ArgumentName;
use percent_encoding::percent_decode_str;
use sqlx::postgres::{PgPool, PgPoolOptions, PgRow};
use sqlx::{pool, Connection, Row};
use thiserror::Error;
use tracing::{info_span, Instrument};
use url::Url;

use ndc_postgres_configuration::environment::Environment;
use ndc_postgres_configuration::ConnectionUri;
use ndc_postgres_configuration::PoolSettings;
use query_engine_execution::database_info::{self, DatabaseInfo, DatabaseVersion};
use query_engine_execution::metrics;

const CONNECTION_NAME_ARGUMENT: &str = "connection_name";
const CONNECTION_STRING_ARGUMENT: &str = "connection_string";

/// State for our connector.
#[derive(Debug)]
pub struct State {
    pub pool: Pool,
    pub query_metrics: metrics::Metrics,
    pub configuration_metrics: ndc_postgres_configuration::Metrics,
}

type DatabaseConnectionName = String;
type DatabaseConnectionString = String;

#[derive(Debug)]
pub struct PoolInstance {
    pub pool: PgPool,
    pub database_info: DatabaseInfo,
    pub index: usize,
}

impl PoolInstance {
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

#[derive(Debug)]
pub enum Pool {
    Static {
        pool: Arc<PoolInstance>,
    },
    Named {
        fallback_pool: Option<Arc<PoolInstance>>,
        pools: Arc<RwLock<BTreeMap<DatabaseConnectionName, Arc<PoolInstance>>>>,
        connection_uris: BTreeMap<DatabaseConnectionName, Redacted<DatabaseConnectionString>>,
        ssl: Redacted<SslInfo>,
        pool_settings: PoolSettings,
        next_pool_index: AtomicUsize,
    },
    Dynamic {
        fallback_pool: Option<Arc<PoolInstance>>,
        pools: Arc<RwLock<BTreeMap<Redacted<DatabaseConnectionString>, Arc<PoolInstance>>>>,
        ssl: Redacted<SslInfo>,
        pool_settings: PoolSettings,
        next_pool_index: AtomicUsize,
    },
}

impl Pool {
    async fn new(
        connection_settings: &ConnectionSettings,
        pool_settings: &PoolSettings,
    ) -> Result<Self, InitializationError> {
        match connection_settings {
            ConnectionSettings::Static {
                connection_uri,
                ssl,
            } => Ok(Pool::Static {
                pool: Arc::new(PoolInstance::new(&connection_uri, &ssl, pool_settings, 0).await?),
            }),
            ConnectionSettings::Named {
                fallback_connection_uri,
                fallback_to_static,
                ssl,
                connection_uris,
                eager_connections,
            } => {
                let next_pool_index = AtomicUsize::new(0);

                let fallback_pool = if *fallback_to_static {
                    let index = next_pool_index.fetch_add(1, Ordering::SeqCst);

                    Some(Arc::new(
                        PoolInstance::new(&fallback_connection_uri, &ssl, pool_settings, index)
                            .await?,
                    ))
                } else {
                    None
                };

                let mut pools = BTreeMap::new();
                if *eager_connections {
                    for (connection_name, connection_uri) in connection_uris {
                        let index = next_pool_index.fetch_add(1, Ordering::SeqCst);

                        pools.insert(
                            connection_name.clone(),
                            Arc::new(
                                PoolInstance::new(&connection_uri, &ssl, pool_settings, index)
                                    .await?,
                            ),
                        );
                    }
                }

                Ok(Pool::Named {
                    fallback_pool,
                    pools: Arc::new(RwLock::new(pools)),
                    connection_uris: connection_uris.clone(),
                    ssl: ssl.clone(),
                    pool_settings: pool_settings.clone(),
                    next_pool_index,
                })
            }
            ConnectionSettings::Dynamic {
                fallback_connection_uri,
                fallback_to_static,
                ssl,
            } => {
                let next_pool_index = AtomicUsize::new(0);

                let fallback_pool = if *fallback_to_static {
                    let index = next_pool_index.fetch_add(1, Ordering::SeqCst);

                    Some(Arc::new(
                        PoolInstance::new(&fallback_connection_uri, &ssl, pool_settings, index)
                            .await?,
                    ))
                } else {
                    None
                };

                Ok(Pool::Dynamic {
                    fallback_pool,
                    pools: Arc::new(RwLock::new(BTreeMap::new())),
                    ssl: ssl.clone(),
                    pool_settings: pool_settings.clone(),
                    next_pool_index,
                })
            }
        }
    }

    pub async fn acquire(
        &self,
        request_arguments: &Option<BTreeMap<ArgumentName, serde_json::Value>>,
        metrics: &metrics::Metrics,
    ) -> Result<Arc<PoolInstance>, PoolAquisitionError> {
        match self {
            Pool::Static { pool } => Ok(pool.clone()),
            Pool::Named {
                fallback_pool,
                connection_uris,
                pools,
                ssl,
                pool_settings,
                next_pool_index,
            } => {
                // Extract the connection name from the request arguments
                if let Some(connection_name) = request_arguments
                    .as_ref()
                    .and_then(|request_arguments| request_arguments.get(CONNECTION_NAME_ARGUMENT))
                    .and_then(|connection_name| connection_name.as_str())
                {
                    {
                        let read_guard = pools.read()?;
                        if let Some(pool) = read_guard.get(connection_name) {
                            return Ok(pool.clone());
                        }
                    }

                    if let Some(connection_uri) = connection_uris.get(connection_name) {
                        // Get a new pool index. If the pool creation fails, we may not use that index ever, but that's fine, we only care that indexes are unique.
                        let index = next_pool_index.fetch_add(1, Ordering::SeqCst);

                        // Create a new pool for this connection
                        let pool_instance = Arc::new(
                            PoolInstance::new(connection_uri, ssl, pool_settings, index).await?,
                        );

                        {
                            // Get a write lock
                            let mut write_guard = pools.write()?;

                            // Check again to make sure someone else didn't create it
                            if let Some(pool) = write_guard.get(connection_name) {
                                return Ok(pool.clone());
                            }

                            // Insert it into the map
                            write_guard.insert(connection_name.to_string(), pool_instance.clone());
                        }

                        // update pool options metrics as we've added a new pool
                        self.set_pool_options_metrics(metrics)?;

                        // Return it
                        Ok(pool_instance)
                    } else {
                        // No connection URI found for this name
                        Err(PoolAquisitionError::UnknownConnectionName(
                            connection_name.to_string(),
                        ))
                    }
                } else if let Some(fallback_pool) = fallback_pool {
                    Ok(fallback_pool.clone())
                } else {
                    Err(PoolAquisitionError::MissingRequiredRequestArgument(
                        CONNECTION_NAME_ARGUMENT.to_string(),
                    ))
                }
            }
            Pool::Dynamic {
                fallback_pool,
                pools,
                ssl,
                pool_settings,
                next_pool_index,
            } => {
                // Extract the connection string from the request arguments
                if let Some(connection_string) = request_arguments
                    .as_ref()
                    .and_then(|request_arguments| request_arguments.get(CONNECTION_STRING_ARGUMENT))
                    .and_then(|connection_string| connection_string.as_str())
                {
                    // Create a redacted version of the connection string for use as a key
                    let redacted_connection_string = Redacted::new(connection_string.to_string());

                    // Check if we already have a pool for this connection string
                    {
                        let read_guard = pools.read()?;
                        if let Some(pool) = read_guard.get(&redacted_connection_string) {
                            return Ok(pool.clone());
                        }
                    }

                    // Get a new pool index. If the pool creation fails, we may not use that index ever, but that's fine, we only care that indexes are unique.
                    let index = next_pool_index.fetch_add(1, Ordering::SeqCst);

                    // Create a new pool for this connection
                    let pool_instance = Arc::new(
                        PoolInstance::new(&redacted_connection_string, ssl, pool_settings, index)
                            .await?,
                    );

                    {
                        // Get a write lock
                        let mut write_guard = pools.write()?;

                        // Check again to make sure someone else didn't create it
                        if let Some(pool) = write_guard.get(&redacted_connection_string) {
                            return Ok(pool.clone());
                        }

                        // Insert it into the map
                        write_guard.insert(redacted_connection_string, pool_instance.clone());
                    }

                    // update pool options metrics as we've added a new pool
                    self.set_pool_options_metrics(metrics)?;

                    // Return it
                    Ok(pool_instance)
                } else if let Some(fallback_pool) = fallback_pool {
                    Ok(fallback_pool.clone())
                } else {
                    Err(PoolAquisitionError::MissingRequiredRequestArgument(
                        CONNECTION_STRING_ARGUMENT.to_string(),
                    ))
                }
            }
        }
    }

    pub fn set_pool_options_metrics(
        &self,
        metrics: &metrics::Metrics,
    ) -> Result<(), PoolAquisitionError> {
        match self {
            Pool::Static { pool } => Ok(metrics.set_pool_options_metrics(
                pool.pool.options(),
                &pool.database_info,
                pool.index,
            )),
            Pool::Named {
                fallback_pool,
                pools,
                ..
            } => {
                if let Some(fallback_pool) = fallback_pool {
                    metrics.set_pool_options_metrics(
                        fallback_pool.pool.options(),
                        &fallback_pool.database_info,
                        fallback_pool.index,
                    )
                }
                for pool in pools.read()?.values() {
                    metrics.set_pool_options_metrics(
                        pool.pool.options(),
                        &pool.database_info,
                        pool.index,
                    )
                }
                Ok(())
            }
            Pool::Dynamic {
                fallback_pool,
                pools,
                ..
            } => {
                if let Some(fallback_pool) = fallback_pool {
                    metrics.set_pool_options_metrics(
                        fallback_pool.pool.options(),
                        &fallback_pool.database_info,
                        fallback_pool.index,
                    )
                }
                for pool in pools.read()?.values() {
                    metrics.set_pool_options_metrics(
                        pool.pool.options(),
                        &pool.database_info,
                        pool.index,
                    )
                }
                Ok(())
            }
        }
    }

    pub fn update_pool_metrics(
        &self,
        metrics: &metrics::Metrics,
    ) -> Result<(), PoolAquisitionError> {
        match self {
            Pool::Static { pool } => {
                Ok(metrics.update_pool_metrics(&pool.pool, &pool.database_info, 0))
            }
            Pool::Named {
                fallback_pool,
                pools,
                ..
            } => {
                if let Some(fallback_pool) = fallback_pool {
                    metrics.update_pool_metrics(
                        &fallback_pool.pool,
                        &fallback_pool.database_info,
                        0,
                    );
                }
                for pool in pools.read()?.values() {
                    metrics.update_pool_metrics(&pool.pool, &pool.database_info, 0)
                }
                Ok(())
            }
            Pool::Dynamic {
                fallback_pool,
                pools,
                ..
            } => {
                if let Some(fallback_pool) = fallback_pool {
                    metrics.update_pool_metrics(
                        &fallback_pool.pool,
                        &fallback_pool.database_info,
                        0,
                    );
                }
                for pool in pools.read()?.values() {
                    metrics.update_pool_metrics(&pool.pool, &pool.database_info, 0)
                }
                Ok(())
            }
        }
    }
}

#[derive(Debug, thiserror::Error)]
pub enum PoolAquisitionError {
    #[error("Missing required request argument: {0}")]
    MissingRequiredRequestArgument(String),
    #[error("Invalid value for argument: {0}")]
    InvalidRequestArgument(String),
    #[error("Unknown connection name {0}")]
    UnknownConnectionName(String),
    #[error("Failed to acquire lock: {0}")]
    LockError(String),
    #[error("Failed to create pool: {0}")]
    PoolCreationError(#[from] InitializationError),
}

impl<T> From<std::sync::PoisonError<T>> for PoolAquisitionError {
    fn from(err: std::sync::PoisonError<T>) -> Self {
        PoolAquisitionError::LockError(format!("{}", err))
    }
}

/// Create a connection pool and wrap it inside a connector State.
pub async fn create_state(
    connection_settings: &ConnectionSettings,
    environment: &impl Environment,
    pool_settings: &PoolSettings,
    metrics_registry: &mut prometheus::Registry,
    version_tag: ndc_postgres_configuration::VersionTag,
) -> Result<State, InitializationError> {
    let pool = Pool::new(connection_settings, pool_settings).await?;

    let (query_metrics, configuration_metrics) = async {
        let query_metrics_inner = metrics::Metrics::initialize(metrics_registry)
            .map_err(InitializationError::MetricsError)?;
        pool.set_pool_options_metrics(&query_metrics_inner);

        let configuration_metrics_inner =
            ndc_postgres_configuration::Metrics::initialize(metrics_registry)
                .map_err(InitializationError::MetricsError)?;

        Ok((query_metrics_inner, configuration_metrics_inner))
    }
    .instrument(info_span!("Setup metrics"))
    .await?;

    configuration_metrics.set_configuration_version(version_tag);

    Ok(State {
        pool,
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
