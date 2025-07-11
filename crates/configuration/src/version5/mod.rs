//! Internal Configuration and state for our connector.

mod comparison;
pub mod connection_settings;
pub mod metadata;
pub mod native_operations;
mod options;
mod to_runtime_configuration;
mod upgrade_from_v4;

use ndc_models::{CollectionName, TypeName};
use std::borrow::Cow;
use std::collections::{BTreeMap, HashSet};
use std::path::Path;
pub use to_runtime_configuration::make_runtime_configuration;
pub use upgrade_from_v4::upgrade_from_v4;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use tokio::fs;
use tracing::{info_span, Instrument};

use metadata::database;

use crate::connect::read_ssl_info;
use crate::environment::Environment;
use crate::error::{ParseConfigurationError, WriteParsedConfigurationError};
use crate::{ConnectionUri, Secret};

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
    /// Provide a custom prefix for generated mutation names. Defaults to mutations version.
    #[serde(default)]
    pub mutations_prefix: Option<String>,
}

#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
pub enum Version {
    #[serde(rename = "5")]
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
            mutations_version: Some(metadata::mutations::MutationsVersion::V2),
            mutations_prefix: Some(String::new()),
        }
    }

    /// Extract the connection uri from the configuration + ENV if needed.
    pub fn get_connection_uri(&self) -> Result<String, anyhow::Error> {
        let connection_uri = self.connection_settings.connection_uri.clone();

        match connection_uri.0 {
            super::values::Secret::Plain(connection_string) => Ok(connection_string),
            super::values::Secret::FromEnvironment { variable } => {
                Ok(std::env::var(variable.to_string())?)
            }
        }
    }
}

fn get_type_ndc_name(r#type: &metadata::Type) -> &str {
    match r#type {
        metadata::Type::CompositeType(ct) => ct.as_str(),
        metadata::Type::ScalarType(t) => t.as_str(),
        metadata::Type::ArrayType(arr_ty) => get_type_ndc_name(arr_ty),
    }
}

/// In order to ensure that our schema ends up including exactly the relevant types we need to
/// inform the introspection query of the types that may appear in native queries, such that they
/// may be included.
fn native_operations_field_types(native_operations: &metadata::NativeOperations) -> Vec<String> {
    let mut result: HashSet<&str> = HashSet::new();

    // queries
    for native_query in native_operations.queries.0.values() {
        for argument in native_query.arguments.values() {
            result.insert(get_type_ndc_name(&argument.r#type));
        }

        for column in native_query.columns.values() {
            result.insert(get_type_ndc_name(&column.r#type));
        }
    }
    // mutations
    for native_query in native_operations.mutations.0.values() {
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
    let connection_uri = match &args.connection_settings.connection_uri {
        ConnectionUri(Secret::Plain(value)) => Cow::Borrowed(value),
        ConnectionUri(Secret::FromEnvironment { variable }) => {
            Cow::Owned(environment.read(variable)?)
        }
    };
    let connect_options = crate::get_connect_options(&connection_uri, &read_ssl_info(environment))?;

    let mut connection = PgConnection::connect_with(&connect_options)
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
        .bind(native_operations_field_types(
            &args.metadata.native_operations,
        ));

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

    // build a list of names to ensure they are unique. We assume scalar type names + composite types are already a unique set.
    let mut type_names: HashSet<TypeName> = scalar_types
        .0
        .keys()
        .map(|t| t.clone().into_inner())
        .collect();

    type_names.extend(composite_types.0.keys().cloned());

    let tables = get_aliased_tables(type_names, tables, &args.metadata.tables);

    Ok(ParsedConfiguration {
        version: Version::This,
        schema: args.schema,
        connection_settings: args.connection_settings,
        metadata: metadata::Metadata {
            tables,
            types: metadata::Types {
                scalar: scalar_types,
                composite: composite_types,
            },
            native_operations: args.metadata.native_operations,
        },
        introspection_options: args.introspection_options,
        mutations_version: args.mutations_version,
        mutations_prefix: args.mutations_prefix,
    })
}

/// given scalar type names already in use, introspected tables, and optionally any existing table configuration:
/// get collections with names guaranteed unique, preserving customized collection and field names if any
fn get_aliased_tables(
    type_names: HashSet<TypeName>,
    tables: metadata::TablesInfo,
    old_tables: &metadata::TablesInfo,
) -> metadata::TablesInfo {
    let mut type_names = type_names;
    let mut mapped_tables = BTreeMap::new();

    for (collection_name, table_info) in tables.0 {
        let old_config = old_tables.0.iter().find(|(_, old_table_info)| {
            old_table_info.table_name == table_info.table_name
                && old_table_info.schema_name == table_info.schema_name
        });

        // use the old collection alias if one exists
        let collection_name = old_config
            .map_or(&collection_name, |(collection_name, _)| collection_name)
            .to_owned();

        // add a suffix to the collection name if needed
        let collection_name = get_unique_collection_name(collection_name, &type_names);

        type_names.insert(collection_name.clone().into_inner().into());

        // if a column has a customized field name, keep it
        let table_info = metadata::TableInfo {
            columns: table_info
                .columns
                .into_iter()
                .map(|(field_name, column_info)| {
                    let field_name = old_config
                        .and_then(|(_, table_info)| {
                            table_info
                                .columns
                                .iter()
                                .find(|(_, old_column_info)| {
                                    old_column_info.name == column_info.name
                                })
                                .map(|(field_name, _)| field_name.to_owned())
                        })
                        .unwrap_or(field_name);

                    (field_name, column_info)
                })
                .collect(),
            ..table_info
        };

        mapped_tables.insert(collection_name, table_info);
    }

    metadata::TablesInfo(mapped_tables)
}

/// given a collection name and a list of already used type names, get a unique name by adding a suffix if needed
fn get_unique_collection_name(
    collection_name: CollectionName,
    type_names: &HashSet<TypeName>,
) -> CollectionName {
    let mut collection_name = collection_name;

    if type_names.contains(collection_name.as_ref()) {
        let mut aliased_collection_name: CollectionName = format!("{collection_name}_table").into();

        for counter in 1.. {
            if !type_names.contains(aliased_collection_name.as_ref()) {
                collection_name = aliased_collection_name;
                break;
            }

            aliased_collection_name = format!("{collection_name}_table_{counter}").into();
        }
    }

    collection_name
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
    for native_query_sql in parsed_config
        .metadata
        .native_operations
        .queries
        .0
        .values_mut()
    {
        native_query_sql.sql = metadata::NativeQuerySqlEither::NativeQuerySql(
            native_query_sql
                .sql
                .from_external(configuration_dir.as_ref())
                .map_err(ParseConfigurationError::IoErrorButStringified)?,
        );
    }
    for native_query_sql in parsed_config
        .metadata
        .native_operations
        .mutations
        .0
        .values_mut()
    {
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
    for native_query_sql in parsed_config.metadata.native_operations.queries.0.values() {
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
    for native_query_sql in parsed_config
        .metadata
        .native_operations
        .mutations
        .0
        .values()
    {
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
