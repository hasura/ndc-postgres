//! Database connection settings.

use crate::values::{ConnectionUri, IsolationLevel, PoolSettings, Secret};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

pub const DEFAULT_CONNECTION_URI_VARIABLE: &str = "CONNECTION_URI";

/// Database connection settings.
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct DatabaseConnectionSettings {
    /// Connection string for a Postgres-compatible database.
    pub connection_uri: ConnectionUri,
    /// Connection pool settings.
    #[serde(default)]
    pub pool_settings: PoolSettings,
    /// Query isolation level.
    #[serde(default)]
    pub isolation_level: IsolationLevel,
}

impl DatabaseConnectionSettings {
    pub fn empty() -> Self {
        Self {
            connection_uri: ConnectionUri(Secret::FromEnvironment {
                variable: DEFAULT_CONNECTION_URI_VARIABLE.into(),
            }),
            pool_settings: PoolSettings::default(),
            isolation_level: IsolationLevel::default(),
        }
    }
}
