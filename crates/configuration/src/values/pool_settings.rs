use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Settings for the PostgreSQL connection pool
#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct PoolSettings {
    /// maximum number of pool connections
    #[serde(default = "max_connection_default")]
    pub max_connections: u32,
    /// timeout for acquiring a connection from the pool (seconds)
    #[serde(default = "pool_timeout_default")]
    pub pool_timeout: u64,
    /// idle timeout for releasing a connection from the pool (seconds)
    #[serde(default = "idle_timeout_default")]
    pub idle_timeout: Option<u64>,
    /// check the connection is alive after being idle for N seconds. Set to null to always check.
    #[serde(default = "check_connection_after_idle_default")]
    pub check_connection_after_idle: Option<u64>,
    /// maximum lifetime for an individual connection (seconds)
    #[serde(default = "connection_lifetime_default")]
    pub connection_lifetime: Option<u64>,
}

/// <https://hasura.io/docs/latest/api-reference/syntax-defs/#pgpoolsettings>
impl Default for PoolSettings {
    fn default() -> PoolSettings {
        PoolSettings {
            max_connections: 50,
            pool_timeout: 30,
            idle_timeout: Some(180),
            connection_lifetime: Some(600),
            check_connection_after_idle: Some(60),
        }
    }
}

fn max_connection_default() -> u32 {
    PoolSettings::default().max_connections
}

fn pool_timeout_default() -> u64 {
    PoolSettings::default().pool_timeout
}

fn idle_timeout_default() -> Option<u64> {
    PoolSettings::default().idle_timeout
}

fn connection_lifetime_default() -> Option<u64> {
    PoolSettings::default().connection_lifetime
}

fn check_connection_after_idle_default() -> Option<u64> {
    PoolSettings::default().check_connection_after_idle
}
