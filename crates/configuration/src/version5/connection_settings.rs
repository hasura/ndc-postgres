//! Database connection settings.

use std::collections::BTreeMap;

use crate::{
    environment::Variable,
    values::{ConnectionUri, IsolationLevel, PoolSettings, Secret},
};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

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
#[serde(rename_all = "camelCase", tag = "mode")]
pub enum DynamicConnectionSettings {
    Named {
        connection_uris: ConnectionUris,
        fallback_to_static: bool,
        eager_connections: bool,
    },
    Dynamic {
        fallback_to_static: bool,
    },
}

#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUris {
    Variable(Variable),
    Map(BTreeMap<String, ConnectionUri>),
}
