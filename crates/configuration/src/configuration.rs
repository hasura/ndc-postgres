//! Configuration for the connector.

use std::path::Path;

use query_engine_metadata::metadata;

use crate::environment::Environment;
use crate::error::{
    MakeRuntimeConfigurationError, ParseConfigurationError, WriteParsedConfigurationError,
};
use crate::values::{IsolationLevel, PoolSettings};
use crate::version3;
use crate::version4;

/// The parsed connector configuration. This data type is an enum with cases for each supported
/// version.
///
/// It supports various uses:
///
/// * It can be turned into a `Configuration`, to be used at runtime.
/// * It retains all information necessary to produce an equivalent serialized representation.
/// * It supports updates between versions which may require more detailed information than is
///   available in a `Configuration` (such as whether a native query was defined inline or in a
///   file)
#[derive(Clone, PartialEq, Eq, Debug)]
pub enum ParsedConfiguration {
    Version3(version3::RawConfiguration),
    Version4(version4::ParsedConfiguration),
}

impl ParsedConfiguration {
    pub fn initial() -> Self {
        ParsedConfiguration::Version3(version3::RawConfiguration::empty())
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
    input: ParsedConfiguration,
    environment: impl Environment,
) -> anyhow::Result<ParsedConfiguration> {
    match input {
        ParsedConfiguration::Version3(config) => Ok(ParsedConfiguration::Version3(
            version3::introspect(config, environment).await?,
        )),
        ParsedConfiguration::Version4(config) => Ok(ParsedConfiguration::Version4(
            version4::introspect(config, environment).await?,
        )),
    }
}

pub async fn parse_configuration(
    configuration_dir: impl AsRef<Path> + Send,
) -> Result<ParsedConfiguration, ParseConfigurationError> {
    // Try parsing each supported version in turn
    match version4::parse_configuration(configuration_dir.as_ref()).await {
        Err(v4_err) => match version3::parse_configuration(configuration_dir.as_ref()).await {
            Err(v3_err) => Err(ParseConfigurationError::UnableToParseAnyVersions(vec![
                v3_err, v4_err,
            ])),
            Ok(config) => Ok(ParsedConfiguration::Version3(config)),
        },
        Ok(config) => Ok(ParsedConfiguration::Version4(config)),
    }
}

pub fn make_runtime_configuration(
    parsed_config: ParsedConfiguration,
    environment: impl Environment,
) -> Result<Configuration, MakeRuntimeConfigurationError> {
    match parsed_config {
        ParsedConfiguration::Version3(c) => version3::make_runtime_configuration(c, environment),
        ParsedConfiguration::Version4(c) => version4::make_runtime_configuration(c, environment),
    }
}

/// Write out a parsed configuration to a directory.
pub async fn write_parsed_configuration(
    parsed_config: ParsedConfiguration,
    out_dir: impl AsRef<Path>,
) -> Result<(), WriteParsedConfigurationError> {
    match parsed_config {
        ParsedConfiguration::Version3(c) => version3::write_parsed_configuration(c, out_dir).await,
        ParsedConfiguration::Version4(c) => version4::write_parsed_configuration(c, out_dir).await,
    }
}

pub fn upgrade_to_latest_version(parsed_config: ParsedConfiguration) -> ParsedConfiguration {
    match parsed_config {
        ParsedConfiguration::Version3(v) => {
            ParsedConfiguration::Version4(version4::upgrade_from_v3(v))
        }
        ParsedConfiguration::Version4(_) => parsed_config,
    }
}
