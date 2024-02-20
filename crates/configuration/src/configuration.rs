//! Configuration for the connector.

use std::fs::File;
use std::path::Path;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use ndc_sdk::connector;

use query_engine_metadata::metadata;

use crate::values::{ConnectionUri, IsolationLevel, PoolSettings, ResolvedSecret};
use crate::version3;

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

pub async fn introspect(input: RawConfiguration) -> anyhow::Result<RawConfiguration> {
    match input {
        RawConfiguration::Version3(config) => Ok(RawConfiguration::Version3(
            version3::introspect(config).await?,
        )),
    }
}

pub async fn parse_configuration(
    configuration_dir: impl AsRef<Path>,
) -> Result<Configuration, connector::ParseError> {
    let configuration_file = configuration_dir.as_ref().join("configuration.json");
    let configuration_reader = File::open(&configuration_file)?;
    let configuration: version3::RawConfiguration = serde_json::from_reader(configuration_reader)
        .map_err(|error| {
        connector::ParseError::ParseError(connector::LocatedError {
            file_path: configuration_file,
            line: error.line(),
            column: error.column(),
            message: error.to_string(),
        })
    })?;
    Ok(Configuration {
        metadata: configuration.metadata,
        pool_settings: configuration.pool_settings,
        connection_uri: match configuration.connection_uri {
            ConnectionUri::Uri(ResolvedSecret(uri)) => uri,
        },
        isolation_level: configuration.isolation_level,
        mutations_version: configuration.configure_options.mutations_version,
    })
}
