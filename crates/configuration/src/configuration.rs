//! Configuration for the connector.

use std::borrow::Cow;
use std::fs;
use std::path::Path;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use ndc_sdk::connector;

use query_engine_metadata::metadata;

use crate::values::{ConnectionUri, IsolationLevel, PoolSettings, ResolvedSecret};
use crate::version3;

pub const CONFIGURATION_FILENAME: &str = "configuration.json";

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

pub type Configuration = RawConfiguration;

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
    let configuration_file = configuration_dir.as_ref().join(CONFIGURATION_FILENAME);
    let configuration_reader = fs::File::open(&configuration_file)?;
    let configuration: version3::RawConfiguration = serde_json::from_reader(configuration_reader)
        .map_err(|error| {
        connector::ParseError::ParseError(connector::LocatedError {
            file_path: configuration_file,
            line: error.line(),
            column: error.column(),
            message: error.to_string(),
        })
    })?;
    Ok(RawConfiguration::Version3(configuration))
}

/// A configuration type, tailored to the needs of the query/mutation/explain methods (i.e., those
/// not to do with configuration management).
///
/// This separation also decouples the implementation from things like API versioning concerns
/// somewhat.
///
/// Since the RuntimeConfiguration is reconstructed from a Configuration at every method call, and
/// since it consists of a sub-selection of components from the full Configuration, the fields are
/// borrowed rather than owned.
#[derive(Debug)]
pub struct RuntimeConfiguration<'request> {
    pub metadata: Cow<'request, metadata::Metadata>,
    pub pool_settings: &'request PoolSettings,
    pub connection_uri: &'request str,
    pub isolation_level: IsolationLevel,
    pub mutations_version: Option<metadata::mutations::MutationsVersion>,
}

/// Apply the common interpretations on the Configuration API type into an RuntimeConfiguration.
pub fn as_runtime_configuration(input: &Configuration) -> RuntimeConfiguration<'_> {
    match &input {
        RawConfiguration::Version3(config) => RuntimeConfiguration {
            metadata: Cow::Borrowed(&config.metadata),
            pool_settings: &config.pool_settings,
            connection_uri: match &config.connection_uri {
                ConnectionUri::Uri(ResolvedSecret(uri)) => uri,
            },
            isolation_level: config.isolation_level,
            mutations_version: config.configure_options.mutations_version,
        },
    }
}
