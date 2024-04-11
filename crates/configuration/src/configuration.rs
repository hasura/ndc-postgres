//! Configuration for the connector.

use std::path::Path;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use query_engine_metadata::metadata;

use crate::environment::Environment;
use crate::error::Error;
use crate::values::{IsolationLevel, PoolSettings};
use crate::version3;

pub const CONFIGURATION_FILENAME: &str = "configuration.json";
pub const CONFIGURATION_JSONSCHEMA_FILENAME: &str = "schema.json";

/// The parsed connector configuration.
#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(tag = "version")]
pub enum RawConfiguration {
    #[serde(rename = "3")]
    Version3(version3::RawConfiguration),
}

impl RawConfiguration {
    pub fn empty() -> Self {
        RawConfiguration::Version3(version3::RawConfiguration::empty())
    }
}

/// A configuration type, tailored to the needs of the query/mutation/explain methods (i.e., those
/// not to do with configuration management).
///
/// This separation also decouples the implementation from things like API versioning concerns
/// somewhat.
#[derive(Debug)]
pub struct Configuration {
    pub metadata: metadata::Metadata,
    pub pool_settings: PoolSettings,
    pub connection_uri: String,
    pub isolation_level: IsolationLevel,
    pub mutations_version: Option<metadata::mutations::MutationsVersion>,
}

pub async fn introspect(
    input: RawConfiguration,
    environment: impl Environment,
) -> anyhow::Result<RawConfiguration> {
    match input {
        RawConfiguration::Version3(config) => Ok(RawConfiguration::Version3(
            version3::introspect(config, environment).await?,
        )),
    }
}

pub async fn parse_configuration(
    configuration_dir: impl AsRef<Path>,
    environment: impl Environment,
) -> Result<Configuration, Error> {
    // Try parsing each supported version in turn
    version3::parse_configuration(configuration_dir, environment).await
}
