//! Configuration for the connector.

pub mod version1;
pub mod version2;

use std::fmt;

use ndc_sdk::connector;
use query_engine_metadata::metadata;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

pub use version2::{occurring_scalar_types, ConnectionUri, PoolSettings, ResolvedSecret};

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(tag = "version")]
#[serde(try_from = "RawConfigurationCompat")]
#[serde(into = "RawConfigurationCompat")]
pub enum RawConfiguration {
    // Until https://github.com/serde-rs/serde/pull/2525 is merged enum tags have to be strings.
    #[serde(rename = "1")]
    Version1(version1::RawConfiguration),
    #[serde(rename = "2")]
    Version2(version2::RawConfiguration),
}

#[derive(Clone, Deserialize, Serialize)]
pub struct RawConfigurationCompat(serde_json::Value);

impl From<RawConfiguration> for RawConfigurationCompat {
    fn from(value: RawConfiguration) -> Self {
        let val = match value {
            RawConfiguration::Version1(v1) => {
                let mut val = serde_json::to_value(v1).unwrap();
                let obj = val.as_object_mut().unwrap();

                let mut res = serde_json::map::Map::new();
                res.insert("version".to_string(), serde_json::json!(1));
                res.append(obj);
                serde_json::value::to_value(res).unwrap()
            }
            RawConfiguration::Version2(v2) => {
                let mut val = serde_json::to_value(v2).unwrap();
                let obj = val.as_object_mut().unwrap();

                let mut res = serde_json::map::Map::new();
                res.insert("version".to_string(), serde_json::json!("2"));
                res.append(obj);
                serde_json::value::to_value(res).unwrap()
            }
        };

        RawConfigurationCompat(val)
    }
}

#[derive(Debug)]
pub enum RawConfigurationCompatError {
    JsonError(serde_json::Error),
    RawConfigurationCompatError { error_message: String },
}

impl fmt::Display for RawConfigurationCompatError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            RawConfigurationCompatError::JsonError(e) => write!(f, "{e}"),
            RawConfigurationCompatError::RawConfigurationCompatError { error_message } => {
                write!(f, "RawConfiguration serialization error: {error_message}")
            }
        }
    }
}

impl From<serde_json::Error> for RawConfigurationCompatError {
    fn from(value: serde_json::Error) -> Self {
        RawConfigurationCompatError::JsonError(value)
    }
}

impl TryFrom<RawConfigurationCompat> for RawConfiguration {
    type Error = RawConfigurationCompatError;

    fn try_from(value: RawConfigurationCompat) -> Result<Self, Self::Error> {
        let version = value.0.get("version").ok_or(
            RawConfigurationCompatError::RawConfigurationCompatError {
                error_message: "Configuration data did not contain a \"version\" field."
                    .to_string(),
            },
        )?;
        match version.as_u64() {
            Some(1) => Ok(RawConfiguration::Version1(serde_json::from_value(value.0)?)),
            Some(n) => Err(RawConfigurationCompatError::RawConfigurationCompatError {
                error_message: format!(
                    "Configuration data version key was an integer literal: {n}. The only supported integer version is 1."
                ),
            }),
            None => match version.as_str() {
                Some("1") => Ok(RawConfiguration::Version1(serde_json::from_value(value.0)?)),
                Some("2") => Ok(RawConfiguration::Version2(serde_json::from_value(value.0)?)),
                Some(v) => Err(RawConfigurationCompatError::RawConfigurationCompatError{error_message:
                     format!("Configuration data version unsupported: \"{v}\". Supported versions are: 1, and \"2\".")}),
                None => Err(RawConfigurationCompatError::RawConfigurationCompatError{error_message:
                     format!("Configuration data version unsupported. Supported versions are: 1, and \"2\".")}),
            },
        }
    }
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
