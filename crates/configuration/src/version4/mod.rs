//! Internal Configuration and state for our connector.

mod comparison;
mod connection_settings;
mod metadata;
mod options;
mod to_runtime_configuration;
mod upgrade_from_v3;

use std::borrow::Cow;
use std::collections::HashSet;
use std::path::Path;
pub use to_runtime_configuration::make_runtime_configuration;
pub use upgrade_from_v3::upgrade_from_v3;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use tokio::fs;
use tracing::{info_span, Instrument};

use metadata::database;

use crate::environment::Environment;
use crate::error::{ParseConfigurationError, WriteParsedConfigurationError};
use crate::values::{ConnectionUri, Secret};

#[cfg(test)]
mod tests;

const CONFIGURATION_FILENAME: &str = "configuration.json";
const CONFIGURATION_JSONSCHEMA_FILENAME: &str = "schema.json";
const CONFIGURATION_QUERY: &str = include_str!("introspection.sql");

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ParsedConfiguration {
    pub version: Version,
    /// Jsonschema of the configuration format.
    #[serde(rename = "$schema")]
    #[serde(default)]
    pub schema: Option<String>,
    /// Database connection settings.
    #[serde(default = "connection_settings::DatabaseConnectionSettings::empty")]
    pub connection_settings: connection_settings::DatabaseConnectionSettings,
    /// Connector metadata.
    #[serde(default)]
    pub metadata: metadata::Metadata,
    /// Database introspection options.
    #[serde(default)]
    pub introspection_options: options::IntrospectionOptions,
    /// Which version of the generated mutation procedures to include in the schema response
    #[serde(default)]
    pub mutations_version: Option<metadata::mutations::MutationsVersion>,
}

#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
pub enum Version {
    #[serde(rename = "4")]
    This,
}

impl ParsedConfiguration {
    pub fn empty() -> Self {
        Self {
            version: Version::This,
            schema: Some(CONFIGURATION_JSONSCHEMA_FILENAME.to_string()),
            connection_settings: connection_settings::DatabaseConnectionSettings::empty(),
            metadata: metadata::Metadata::default(),
            introspection_options: options::IntrospectionOptions::default(),
            // we'll change this to `Some(MutationsVersions::V1)` when we
            // want to "release" this behaviour
            mutations_version: None,
        }
    }
}

fn get_type_ndc_name(r#type: &metadata::Type) -> &str {
    match r#type {
        metadata::Type::CompositeType(ct) => ct.0.as_str(),
        metadata::Type::ScalarType(t) => t.0.as_str(),
        metadata::Type::ArrayType(arr_ty) => get_type_ndc_name(arr_ty),
    }
}

/// In order to ensure that our schema ends up including exactly the relevant types we need to
/// inform the introspection query of the types that may appear in native queries, such that they
/// may be included.
fn native_query_field_types(native_queries: &metadata::NativeQueries) -> Vec<String> {
    let mut result: HashSet<&str> = HashSet::new();

    for native_query in native_queries.0.values() {
        for argument in native_query.arguments.values() {
            result.insert(get_type_ndc_name(&argument.r#type));
        }

        for column in native_query.columns.values() {
            result.insert(get_type_ndc_name(&column.r#type));
        }
    }

    result
        .iter()
        .map(|t| (*t).to_string())
        .collect::<Vec<String>>()
}

/// Construct the NDC metadata configuration by introspecting the database.
pub async fn introspect(
    args: ParsedConfiguration,
    environment: impl Environment,
) -> anyhow::Result<ParsedConfiguration> {
    let uri = match &args.connection_settings.connection_uri {
        ConnectionUri(Secret::Plain(value)) => Cow::Borrowed(value),
        ConnectionUri(Secret::FromEnvironment { variable }) => {
            Cow::Owned(environment.read(variable)?)
        }
    };

    let mut connection = PgConnection::connect(&uri)
        .instrument(info_span!("Connect to database"))
        .await?;

    let query = sqlx::query(CONFIGURATION_QUERY)
        .bind(&args.introspection_options.excluded_schemas)
        .bind(&args.introspection_options.unqualified_schemas_for_tables)
        .bind(
            &args
                .introspection_options
                .unqualified_schemas_for_types_and_procedures,
        )
        .bind(serde_json::to_value(
            &args.introspection_options.comparison_operator_mapping,
        )?)
        .bind(
            &args
                .introspection_options
                .introspect_prefix_function_comparison_operators,
        )
        .bind(serde_json::to_value(
            &args.introspection_options.type_representations,
        )?)
        .bind(native_query_field_types(&args.metadata.native_queries));

    let row = connection
        .fetch_one(query)
        .instrument(info_span!("Run introspection query"))
        .await?;

    let (tables, scalar_types, composite_types) = async {
        let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))?;
        let scalar_types: metadata::ScalarTypes = serde_json::from_value(row.get(1))?;
        let composite_types: metadata::CompositeTypes = serde_json::from_value(row.get(2))?;

        // We need to specify the concrete return type explicitly so that rustc knows that it can
        // be sent across an async boundary.
        // (last verified with rustc 1.72.1)
        Ok::<_, anyhow::Error>((tables, scalar_types, composite_types))
    }
    .instrument(info_span!("Decode introspection result"))
    .await?;

    Ok(ParsedConfiguration {
        version: Version::This,
        schema: args.schema,
        connection_settings: args.connection_settings,
        metadata: metadata::Metadata {
            tables,
            scalar_types,
            composite_types,
            native_queries: args.metadata.native_queries,
        },
        introspection_options: args.introspection_options,
        mutations_version: args.mutations_version,
    })
}

/// Parse the configuration format from a directory.
pub async fn parse_configuration(
    configuration_dir: impl AsRef<Path>,
) -> Result<ParsedConfiguration, ParseConfigurationError> {
    let configuration_file = configuration_dir.as_ref().join(CONFIGURATION_FILENAME);

    let configuration_file_contents =
        fs::read_to_string(&configuration_file)
            .await
            .map_err(|err| {
                ParseConfigurationError::IoErrorButStringified(format!(
                    "{}: {}",
                    &configuration_file.display(),
                    err
                ))
            })?;

    let mut parsed_config: ParsedConfiguration = serde_json::from_str(&configuration_file_contents)
        .map_err(|error| ParseConfigurationError::ParseError {
            file_path: configuration_file.clone(),
            line: error.line(),
            column: error.column(),
            message: error.to_string(),
        })?;
    // look for native query sql file references and read from disk.
    for native_query_sql in parsed_config.metadata.native_queries.0.values_mut() {
        native_query_sql.sql = metadata::NativeQuerySqlEither::NativeQuerySql(
            native_query_sql
                .sql
                .from_external(configuration_dir.as_ref())
                .map_err(ParseConfigurationError::IoErrorButStringified)?,
        );
    }

    Ok(parsed_config)
}

/// Write the parsed configuration into a directory on disk.
pub async fn write_parsed_configuration(
    parsed_config: ParsedConfiguration,
    out_dir: impl AsRef<Path>,
) -> Result<(), WriteParsedConfigurationError> {
    let configuration_file = out_dir.as_ref().to_owned().join(CONFIGURATION_FILENAME);
    fs::create_dir_all(out_dir.as_ref()).await?;

    // create the configuration file
    fs::write(
        configuration_file,
        serde_json::to_string_pretty(&parsed_config)
            .map_err(|e| WriteParsedConfigurationError::IoError(e.into()))?
            + "\n",
    )
    .await?;

    // look for native query sql file references and write them to disk.
    for native_query_sql in parsed_config.metadata.native_queries.0.values() {
        if let metadata::NativeQuerySqlEither::NativeQuerySql(
            metadata::NativeQuerySql::FromFile { file, sql },
        ) = &native_query_sql.sql
        {
            if file.is_absolute() || file.starts_with("..") {
                Err(
                    WriteParsedConfigurationError::WritingOutsideDestinationDir {
                        dir: out_dir.as_ref().to_owned(),
                        file: file.clone(),
                    },
                )?;
            };

            let native_query_file = out_dir.as_ref().to_owned().join(file);
            if let Some(native_query_sql_dir) = native_query_file.parent() {
                fs::create_dir_all(native_query_sql_dir).await?;
            };
            fs::write(native_query_file, String::from(sql.clone())).await?;
        };
    }

    // create the jsonschema file
    let configuration_jsonschema_file_path = out_dir
        .as_ref()
        .to_owned()
        .join(CONFIGURATION_JSONSCHEMA_FILENAME);

    let output = schemars::schema_for!(ParsedConfiguration);
    fs::write(
        &configuration_jsonschema_file_path,
        serde_json::to_string_pretty(&output)
            .map_err(|e| WriteParsedConfigurationError::IoError(e.into()))?
            + "\n",
    )
    .await?;

    Ok(())
}
