//! Configuration for the connector.

use std::borrow::Cow;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use ndc_sdk::connector;

use query_engine_metadata::metadata;

use crate::values::{ConnectionUri, IsolationLevel, PoolSettings, ResolvedSecret};
use crate::version3;

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
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

/// User configuration, elaborated from a 'RawConfiguration'.
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Configuration {
    pub config: RawConfiguration,
}

pub async fn configure(
    input: RawConfiguration,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    match input {
        RawConfiguration::Version3(config) => Ok(RawConfiguration::Version3(
            version3::configure(config).await?,
        )),
    }
}
pub async fn validate_raw_configuration(
    input: RawConfiguration,
) -> Result<Configuration, connector::ValidateError> {
    match input {
        RawConfiguration::Version3(config) => Ok(Configuration {
            config: RawConfiguration::Version3(version3::validate_raw_configuration(config).await?),
        }),
    }
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
    match &input.config {
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

// for tests

pub fn set_connection_uri(input: RawConfiguration, connection_uri: String) -> RawConfiguration {
    match input {
        RawConfiguration::Version3(config) => {
            RawConfiguration::Version3(version3::RawConfiguration {
                connection_uri: ConnectionUri::Uri(ResolvedSecret(connection_uri)),
                ..config
            })
        }
    }
}
