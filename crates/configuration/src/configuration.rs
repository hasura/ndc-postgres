//! Configuration for the connector.

use std::path::Path;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use tokio::fs;

use query_engine_metadata::metadata;

use crate::environment::Environment;
use crate::error::Error;
use crate::values::{ConnectionUri, IsolationLevel, PoolSettings, Secret};
use crate::version3;

pub const CONFIGURATION_FILENAME: &str = "configuration.json";
pub const CONFIGURATION_JSONSCHEMA_FILENAME: &str = "schema.json";

/// The parsed connector configuration.
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
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
    let configuration_file = configuration_dir.as_ref().join(CONFIGURATION_FILENAME);
    let configuration_file_contents = fs::read_to_string(&configuration_file).await?;
    let configuration: version3::RawConfiguration =
        serde_json::from_str(&configuration_file_contents).map_err(|error| Error::ParseError {
            file_path: configuration_file.clone(),
            line: error.line(),
            column: error.column(),
            message: error.to_string(),
        })?;
    let connection_uri =
        match configuration.connection_settings.connection_uri {
            ConnectionUri(Secret::Plain(uri)) => Ok(uri),
            ConnectionUri(Secret::FromEnvironment { variable }) => environment
                .read(&variable)
                .map_err(|error| Error::MissingEnvironmentVariable {
                    file_path: configuration_file,
                    message: error.to_string(),
                }),
        }?;
    Ok(Configuration {
        metadata: configuration.metadata,
        pool_settings: configuration.connection_settings.pool_settings,
        connection_uri,
        isolation_level: configuration.connection_settings.isolation_level,
        mutations_version: configuration.mutations_version,
    })
}
