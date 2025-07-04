//! Database connection settings.

use crate::{
    environment::Variable,
    values::{ConnectionUri, IsolationLevel, PoolSettings, Secret},
};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;

pub const DEFAULT_CONNECTION_URI_VARIABLE: &str = "CONNECTION_URI";

/// Database connection settings.
#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
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
    #[serde(default, skip_serializing_if = "Option::is_none")]
    pub dynamic_settings: Option<DynamicConnectionSettings>,
}

impl DatabaseConnectionSettings {
    pub fn empty() -> Self {
        Self {
            connection_uri: ConnectionUri(Secret::FromEnvironment {
                variable: DEFAULT_CONNECTION_URI_VARIABLE.into(),
            }),
            pool_settings: PoolSettings::default(),
            isolation_level: IsolationLevel::default(),
            dynamic_settings: None,
        }
    }
}

#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(
    rename_all = "camelCase",
    rename_all_fields = "camelCase",
    tag = "mode"
)]
pub enum DynamicConnectionSettings {
    Named {
        connection_uris: ConnectionUris,
        /// When set to true, fallback to using the connectionUri if the connection_name request argument is missing
        /// If this is not set, the connectionUri is not used at runtime, but will still be used by cli utilities
        #[serde(default)]
        fallback_to_static: bool,
        /// When set to true, eagerly create connection pools for all connection names at startup
        /// If this is not set, connection pools are created lazily when a request is made for a connection name
        #[serde(default)]
        eager_connections: bool,
    },
    Dynamic {
        /// When set to true, fallback to using the connectionUri if the connection_string request argument is missing
        /// If this is not set, the connectionUri is not used at runtime, but will still be used by cli utilities
        #[serde(default)]
        fallback_to_static: bool,
    },
}

type ConnectionName = String;

#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUris {
    /// The value of the variable is a JSON object mapping connection names to connection uris
    Variable(Variable),
    /// A map of connection names to connection uris or the environment variables these are stored in
    Map(BTreeMap<ConnectionName, ConnectionUri>),
}
