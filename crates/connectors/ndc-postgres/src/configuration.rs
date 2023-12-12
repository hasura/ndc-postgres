//! Configuration for the connector.

mod custom_trait_implementations;
pub mod version1;
pub mod version2;

use custom_trait_implementations::RawConfigurationCompat;
use ndc_sdk::connector;
use query_engine_metadata::metadata;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

pub use version2::{occurring_scalar_types, ConnectionUri, PoolSettings, ResolvedSecret};

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, Debug, Deserialize, Serialize)]
#[serde(tag = "version")]
#[serde(try_from = "RawConfigurationCompat")]
#[serde(into = "RawConfigurationCompat")]
// NOTE: Any changes to this data type will need follow-up changes to the
// 'custom_trait_implementations' module.
pub enum RawConfiguration {
    // Until https://github.com/serde-rs/serde/pull/2525 is merged enum tags have to be strings.
    #[serde(rename = "1")]
    Version1(version1::RawConfiguration),
    #[serde(rename = "2")]
    Version2(version2::RawConfiguration),
}

impl RawConfiguration {
    pub fn empty() -> Self {
        RawConfiguration::Version2(version2::RawConfiguration::empty())
    }
}

/// User configuration, elaborated from a 'RawConfiguration'.
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Configuration {
    pub config: RawConfiguration,
}

pub async fn configure(
    args: RawConfiguration,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    match args {
        RawConfiguration::Version1(v1) => {
            Ok(RawConfiguration::Version1(version1::configure(v1).await?))
        }
        RawConfiguration::Version2(v2) => {
            Ok(RawConfiguration::Version2(version2::configure(v2).await?))
        }
    }
}
pub async fn validate_raw_configuration(
    config: RawConfiguration,
) -> Result<Configuration, connector::ValidateError> {
    match config {
        RawConfiguration::Version1(v1) => Ok(Configuration {
            config: RawConfiguration::Version1(version1::validate_raw_configuration(v1).await?),
        }),
        RawConfiguration::Version2(v2) => Ok(Configuration {
            config: RawConfiguration::Version2(version2::validate_raw_configuration(v2).await?),
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
pub struct RuntimeConfiguration {
    pub metadata: metadata::Metadata,
    pub pool_settings: version1::PoolSettings,
    pub connection_uri: String,
}

/// Apply the common interpretations on the Configuration API type into an RuntimeConfiguration.
pub fn as_runtime_configuration(config: &Configuration) -> RuntimeConfiguration {
    match &config.config {
        RawConfiguration::Version1(v1_config) => RuntimeConfiguration {
            metadata: version1::metadata_to_current(&v1_config.metadata),
            pool_settings: v1_config.pool_settings.clone(),
            connection_uri: match &v1_config.connection_uri {
                ConnectionUri::Uri(ResolvedSecret(uri)) => uri.clone(),
            },
        },
        RawConfiguration::Version2(v2_config) => RuntimeConfiguration {
            metadata: v2_config.metadata.clone(),
            pool_settings: v2_config.pool_settings.clone(),
            connection_uri: match &v2_config.connection_uri {
                ConnectionUri::Uri(ResolvedSecret(uri)) => uri.clone(),
            },
        },
    }
}

// for tests

pub fn set_connection_uri(config: RawConfiguration, connection_uri: String) -> RawConfiguration {
    match config {
        RawConfiguration::Version1(v1) => RawConfiguration::Version1(version1::RawConfiguration {
            connection_uri: ConnectionUri::Uri(ResolvedSecret(connection_uri)),
            ..v1
        }),
        RawConfiguration::Version2(v2) => RawConfiguration::Version2(version2::RawConfiguration {
            connection_uri: ConnectionUri::Uri(ResolvedSecret(connection_uri)),
            ..v2
        }),
    }
}
