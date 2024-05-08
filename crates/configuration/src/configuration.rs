//! Configuration for the connector.

use std::path::Path;

use query_engine_metadata::metadata;

use crate::environment::Environment;
use crate::error::{
    MakeRuntimeConfigurationError, MultiError, ParseConfigurationError,
    WriteParsedConfigurationError,
};
use crate::values::{IsolationLevel, PoolSettings};
use crate::version3;
use crate::version4;
use schemars::{gen::SchemaSettings, schema::RootSchema};

pub fn generate_latest_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<version4::ParsedConfiguration>()
}

pub const DEFAULT_CONNECTION_URI_VARIABLE: &str = "CONNECTION_URI";

/// The 'ParsedConfiguration' type models the various concrete configuration formats that are
/// currently supported.
///
/// Introducing a breaking configuration format change involves adding a new case to this type.
///
/// 'ParsedConfiguration' is used to support serialization and deserialization of an NDC
/// configuration. It retains all the salient information that constitues an instance of an NDC
/// deployment, such that 'c = parse_configuration(dir) => { write_parsed_configuration(c, dir2) ;
/// assert(c == parse_configuration(dir2))}'.
///
/// Upgrades between different configuration format versions are version-specific functions on
/// 'ParsedConfiguration' as well.
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

/// The 'Configuration' type collects all the information necessary to serve queries at runtime.
///
/// 'ParsedConfiguration' deals with a multitude of different concrete version formats, and each
/// version is responsible for interpreting its serialized format into the current 'Configuration'.
/// Values of this type are produced from a 'ParsedConfiguration' using
/// 'make_runtime_configuration'.
///
/// Separating 'ParsedConfiguration' and 'Configuration' simplifies the main query translation
/// logic by placing the responsibility of dealing with configuration format evolution in
/// 'ParsedConfiguration.
///
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
            Err(v3_err) => Err(ParseConfigurationError::UnableToParseAnyVersions(
                MultiError(vec![Box::new(v4_err), Box::new(v3_err)]),
            )),
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
