//! Transient state used by the connector.
//!
//! This is initialized on startup.

use ndc_postgres_configuration::get_connect_options;
use percent_encoding::percent_decode_str;
use sqlx::postgres::{PgPool, PgPoolOptions, PgRow};
use sqlx::{Connection, Row};
use thiserror::Error;
use tracing::{info_span, Instrument};
use url::Url;

use ndc_postgres_configuration::environment::Environment;
use ndc_postgres_configuration::ConnectionSettings;
use ndc_postgres_configuration::ConnectionUri;
use ndc_postgres_configuration::PoolSettings;
use query_engine_execution::database_info::{self, DatabaseInfo, DatabaseVersion};
use query_engine_execution::metrics;

#[derive(Debug)]
pub enum Pool {
    // one pool for all connections, beautiful
    Static {
        pool: PgPool,
        database_info: DatabaseInfo,
    },
    // nothing for now, but at some point, many pools
    Dynamic(()),
}

/// State for our connector.
#[derive(Debug)]
pub struct State {
    pub pool: Pool,
    pub query_metrics: metrics::Metrics,
    pub configuration_metrics: ndc_postgres_configuration::Metrics,
}

/// Create a connection pool and wrap it inside a connector State.
pub async fn create_state(
    connection_settings: &ConnectionSettings,
    pool_settings: &PoolSettings,
    environment: &impl Environment,
    metrics_registry: &mut prometheus::Registry,
    version_tag: ndc_postgres_configuration::VersionTag,
) -> Result<State, InitializationError> {
    let pool = match connection_settings {
        ConnectionSettings::Static { connection_uri } => {
            let connection_url: Url = connection_uri
                .parse()
                .map_err(InitializationError::InvalidConnectionUri)?;

            let pool = create_pool(connection_uri, environment, pool_settings)
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

            Pool::Static {
                pool,
                database_info,
            }
        }
        ConnectionSettings::Dynamic { .. } => Pool::Dynamic(()),
    };

    let (query_metrics, configuration_metrics) = async {
        let query_metrics_inner = metrics::Metrics::initialize(metrics_registry)
            .map_err(InitializationError::MetricsError)?;
        let configuration_metrics_inner =
            ndc_postgres_configuration::Metrics::initialize(metrics_registry)
                .map_err(InitializationError::MetricsError)?;

        Ok((query_metrics_inner, configuration_metrics_inner))
    }
    .instrument(info_span!("Setup metrics"))
    .await?;

    // update pool metrics if static pool is available
    if let Pool::Static { ref pool, .. } = pool {
        query_metrics.set_pool_options_metrics(pool.options());
    }

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
    environment: impl Environment,
    pool_settings: &PoolSettings,
) -> Result<PgPool, InitializationError> {
    let connect_options = get_connect_options(&ConnectionUri::from(connection_url), environment)
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
