//! Internal Configuration and state for our connector.

pub(crate) mod comparison;
pub mod connection_settings;
pub mod metadata;
pub(crate) mod options;

use ndc_models::{self as models, CollectionName, TypeName};
use std::borrow::Cow;
use std::collections::{BTreeMap, BTreeSet, HashSet};
use std::path::Path;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use tokio::fs;
use tracing::{info_span, Instrument};

use metadata::database;

use crate::environment::Environment;
use crate::error::{
    MakeRuntimeConfigurationError, ParseConfigurationError, WriteParsedConfigurationError,
};
use crate::values::{ConnectionUri, Secret};
use crate::VersionTag;

const CONFIGURATION_FILENAME: &str = "configuration.json";
const CONFIGURATION_JSONSCHEMA_FILENAME: &str = "schema.json";
const CONFIGURATION_QUERY: &str = include_str!("version3.sql");

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct RawConfiguration {
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
    #[serde(rename = "3")]
    This,
}

impl RawConfiguration {
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

/// Construct the NDC metadata configuration by introspecting the database.
pub async fn introspect(
    args: RawConfiguration,
    environment: impl Environment,
) -> anyhow::Result<RawConfiguration> {
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
            base_type_representations(args.metadata.type_representations).0,
        )?);

    let row = connection
        .fetch_one(query)
        .instrument(info_span!("Run introspection query"))
        .await?;

    let (tables, aggregate_functions, comparison_operators, composite_types, type_representations) = async {
        let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))?;

        let aggregate_functions: metadata::AggregateFunctions = serde_json::from_value(row.get(1))?;

        let metadata::ComparisonOperators(mut comparison_operators): metadata::ComparisonOperators =
            serde_json::from_value(row.get(2))?;

        let composite_types: metadata::CompositeTypes = serde_json::from_value(row.get(3))?;

        let type_representations: metadata::TypeRepresentations =
            serde_json::from_value(row.get(4))?;

        // We need to include `in` as a comparison operator in the schema, and since it is syntax, it is not introspectable.
        // Instead, we will check if the scalar type defines an equals operator and if yes, we will insert the `_in` operator
        // as well.
        for (scalar_type, operators) in &mut comparison_operators {
            if operators
                .values()
                .any(|op| op.operator_kind == metadata::OperatorKind::Equal)
            {
                operators.insert(
                    "_in".into(),
                    metadata::ComparisonOperator {
                        operator_name: "IN".to_string(),
                        operator_kind: metadata::OperatorKind::In,
                        argument_type: scalar_type.clone(),
                        is_infix: true,
                    },
                );
            }
        }

        // We need to specify the concrete return type explicitly so that rustc knows that it can
        // be sent across an async boundary.
        // (last verified with rustc 1.72.1)
        Ok::<_, anyhow::Error>((
            tables,
            aggregate_functions,
            metadata::ComparisonOperators(comparison_operators),
            composite_types,
            type_representations,
        ))
    }
    .instrument(info_span!("Decode introspection result"))
    .await?;

    let (scalar_types, composite_types) = transitively_occurring_types(
        occurring_scalar_types(
            &tables,
            &args.metadata.native_queries,
            &args.metadata.aggregate_functions,
        ),
        &occurring_composite_types(&tables, &args.metadata.native_queries),
        composite_types,
    );

    // We filter our comparison operators and aggregate functions to only include those relevant to
    // types that may actually occur in the schema.
    let relevant_comparison_operators =
        filter_comparison_operators(&scalar_types, comparison_operators);
    let relevant_aggregate_functions =
        filter_aggregate_functions(&scalar_types, aggregate_functions);
    let relevant_type_representations =
        filter_type_representations(&scalar_types, type_representations);

    // build a list of names to ensure they are unique. We assume scalar type names + composite types are already a unique set.
    let mut type_names: HashSet<TypeName> = scalar_types
        .into_iter()
        .map(ndc_models::ScalarTypeName::into_inner)
        .collect();

    type_names.extend(composite_types.0.keys().cloned());

    let tables = get_aliased_tables(type_names, tables, &args.metadata.tables);

    Ok(RawConfiguration {
        version: Version::This,
        schema: args.schema,
        connection_settings: args.connection_settings,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
            composite_types,
            type_representations: relevant_type_representations,
        },
        introspection_options: args.introspection_options,
        mutations_version: args.mutations_version,
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

/// Merge the type representations currenting defined in the user's configuration with
/// our base defaults. User configuration takes precedence.
fn base_type_representations(
    database::TypeRepresentations(existing_type_representations): database::TypeRepresentations,
) -> database::TypeRepresentations {
    // Start with the default type representations
    let mut type_representations: database::TypeRepresentations = database::TypeRepresentations(
        [
            // Bit strings:
            //   https://www.postgresql.org/docs/current/datatype-bit.html
            //   https://www.postgresql.org/docs/current/sql-syntax-lexical.html#SQL-SYNTAX-BIT-STRINGS
            //
            // We hint these to String, meaning a sequence of '0' and '1' chars, but more choices are
            // possible.
            ("bit".into(), database::TypeRepresentation::String),
            ("bool".into(), database::TypeRepresentation::Boolean),
            ("bpchar".into(), database::TypeRepresentation::String),
            ("char".into(), database::TypeRepresentation::String),
            ("date".into(), database::TypeRepresentation::Date),
            ("float4".into(), database::TypeRepresentation::Float32),
            ("float8".into(), database::TypeRepresentation::Float64),
            ("int2".into(), database::TypeRepresentation::Int16),
            ("int4".into(), database::TypeRepresentation::Int32),
            (
                "int8".into(),
                // ndc-spec defines that Int64 has the json representation of a string.
                // This is not what we do now and is a breaking change.
                // This will need to be changed in the future. In the meantime, we report
                // The type representation to be json.
                database::TypeRepresentation::Int64AsString,
            ),
            (
                "numeric".into(),
                database::TypeRepresentation::BigDecimalAsString,
            ),
            ("text".into(), database::TypeRepresentation::String),
            ("time".into(), database::TypeRepresentation::Time),
            ("timestamp".into(), database::TypeRepresentation::Timestamp),
            (
                "timestamptz".into(),
                database::TypeRepresentation::Timestamptz,
            ),
            ("timetz".into(), database::TypeRepresentation::Timetz),
            ("uuid".into(), database::TypeRepresentation::UUID),
            ("varchar".into(), database::TypeRepresentation::String),
        ]
        .into(),
    );
    // If the user already has existing type representations defined,
    // override the default ones using `insert`.
    // We do this to not change the behaviour for the user on update.
    for (typ, type_rep) in existing_type_representations {
        match type_rep {
            // we don't want to do this for enums as they should be overwritten according to the database.
            database::TypeRepresentation::Enum(_) => {}
            _ => {
                type_representations.0.insert(typ, type_rep);
            }
        }
    }
    type_representations
}

/// Collect all the composite types that can occur in the metadata.
pub fn occurring_composite_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
) -> BTreeSet<models::TypeName> {
    let tables_column_types = tables
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| &c.r#type));
    let native_queries_column_types = native_queries
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| &c.r#type));
    let native_queries_arguments_types = native_queries
        .0
        .values()
        .flat_map(|v| v.arguments.values().map(|c| &c.r#type));

    tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .filter_map(|t| match t {
            metadata::Type::CompositeType(ref t) => Some(t.clone()),
            metadata::Type::ArrayType(t) => match **t {
                metadata::Type::CompositeType(ref t) => Some(t.clone()),
                metadata::Type::ArrayType(_) | metadata::Type::ScalarType(_) => None,
            },
            metadata::Type::ScalarType(_) => None,
        })
        .collect::<BTreeSet<models::TypeName>>()
}

// Since array types and composite types may refer to other types we have to transitively discover
// the full set of types that are relevant to the schema.
pub fn transitively_occurring_types(
    mut occurring_scalar_types: BTreeSet<models::ScalarTypeName>,
    occurring_composite_type_names: &BTreeSet<models::TypeName>,
    mut composite_types: metadata::CompositeTypes,
) -> (BTreeSet<models::ScalarTypeName>, metadata::CompositeTypes) {
    let mut discovered_composite_type_names = occurring_composite_type_names.clone();

    for t in occurring_composite_type_names {
        match composite_types.0.get(t) {
            None => (),
            Some(ct) => {
                for f in ct.fields.values() {
                    match &f.r#type {
                        metadata::Type::CompositeType(ct2) => {
                            discovered_composite_type_names.insert(ct2.clone());
                        }
                        metadata::Type::ScalarType(t) => {
                            occurring_scalar_types.insert(t.clone());
                        }
                        metadata::Type::ArrayType(arr_ty) => match **arr_ty {
                            metadata::Type::CompositeType(ref ct2) => {
                                discovered_composite_type_names.insert(ct2.clone());
                            }
                            metadata::Type::ScalarType(ref t) => {
                                occurring_scalar_types.insert(t.clone());
                            }
                            metadata::Type::ArrayType(_) => {
                                // This case is impossible, because we do not support nested arrays
                            }
                        },
                    }
                }
            }
        }
    }

    // Since 'discovered_type_names' only grows monotonically starting from 'occurring_type_names'
    // we just have to compare the number of elements to know if new types have been discovered.
    if discovered_composite_type_names.len() == occurring_composite_type_names.len() {
        // Iterating over occurring types discovered no new types
        composite_types
            .0
            .retain(|t, _| occurring_composite_type_names.contains(t));
        (occurring_scalar_types, composite_types)
    } else {
        // Iterating over occurring types did discover new types,
        // so we keep on going.
        transitively_occurring_types(
            occurring_scalar_types,
            &discovered_composite_type_names,
            composite_types,
        )
    }
}

/// Collect all the scalar types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via version2.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
    aggregate_functions: &metadata::AggregateFunctions,
) -> BTreeSet<models::ScalarTypeName> {
    let tables_column_types = tables
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| &c.r#type));
    let native_queries_column_types = native_queries
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| &c.r#type));
    let native_queries_arguments_types = native_queries
        .0
        .values()
        .flat_map(|v| v.arguments.values().map(|c| &c.r#type));

    let mut aggregate_functions_scalar_types: BTreeSet<models::ScalarTypeName> =
        aggregate_functions.0.keys().cloned().collect();

    let aggregate_functions_result_types = aggregate_functions
        .0
        .values()
        .flat_map(|x| x.values().map(|agg_fn| agg_fn.return_type.clone().into()));

    let mut scalar_types = tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .filter_map(|t| match t {
            metadata::Type::ScalarType(ref t) => Some(t.clone()), // only keep scalar types
            metadata::Type::ArrayType(t) => match t.as_ref() {
                metadata::Type::ScalarType(ref t) => Some(t.clone()),
                metadata::Type::ArrayType(_) | metadata::Type::CompositeType(_) => None,
            },
            metadata::Type::CompositeType(_) => None,
        })
        .chain(aggregate_functions_result_types)
        .collect::<BTreeSet<models::ScalarTypeName>>();
    scalar_types.append(&mut aggregate_functions_scalar_types);
    scalar_types
}

/// Filter predicate for comparison operators. Preserves only comparison operators that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
fn filter_comparison_operators(
    scalar_types: &BTreeSet<models::ScalarTypeName>,
    comparison_operators: metadata::ComparisonOperators,
) -> metadata::ComparisonOperators {
    metadata::ComparisonOperators(
        comparison_operators
            .0
            .into_iter()
            .filter(|(typ, _)| scalar_types.contains(typ))
            .map(|(typ, ops)| {
                (
                    typ,
                    ops.into_iter()
                        .filter(|(_, op)| scalar_types.contains(&op.argument_type))
                        .collect(),
                )
            })
            .collect(),
    )
}

/// Filter predicate for aggregation functions. Preserves only aggregation functions that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
fn filter_aggregate_functions(
    scalar_types: &BTreeSet<models::ScalarTypeName>,
    aggregate_functions: metadata::AggregateFunctions,
) -> metadata::AggregateFunctions {
    metadata::AggregateFunctions(
        aggregate_functions
            .0
            .into_iter()
            .filter(|(typ, _)| scalar_types.contains(typ))
            .collect(),
    )
}

/// Filter predicate for type representations. Preserves only type representations that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
fn filter_type_representations(
    scalar_types: &BTreeSet<models::ScalarTypeName>,
    type_representations: metadata::TypeRepresentations,
) -> metadata::TypeRepresentations {
    metadata::TypeRepresentations(
        type_representations
            .0
            .into_iter()
            .filter(|(typ, _)| scalar_types.contains(typ))
            .collect(),
    )
}

pub async fn parse_configuration(
    configuration_dir: impl AsRef<Path>,
) -> Result<RawConfiguration, ParseConfigurationError> {
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
    let mut configuration: RawConfiguration = serde_json::from_str(&configuration_file_contents)
        .map_err(|error| ParseConfigurationError::ParseError {
            file_path: configuration_file.clone(),
            line: error.line(),
            column: error.column(),
            message: error.to_string(),
        })?;
    // look for native query sql file references and read from disk.
    for native_query_sql in configuration.metadata.native_queries.0.values_mut() {
        native_query_sql.sql = metadata::NativeQuerySqlEither::NativeQuerySql(
            native_query_sql
                .sql
                .from_external(configuration_dir.as_ref())
                .map_err(ParseConfigurationError::IoErrorButStringified)?,
        );
    }

    Ok(configuration)
}

pub fn make_runtime_configuration(
    configuration: RawConfiguration,
    environment: impl Environment,
) -> Result<crate::Configuration, MakeRuntimeConfigurationError> {
    let connection_uri = match configuration.connection_settings.connection_uri {
        ConnectionUri(Secret::Plain(uri)) => Ok(uri),
        ConnectionUri(Secret::FromEnvironment { variable }) => {
            environment.read(&variable).map_err(|error| {
                MakeRuntimeConfigurationError::MissingEnvironmentVariable {
                    file_path: "configuration.json".into(),
                    message: error.to_string(),
                }
            })
        }
    }?;
    Ok(crate::Configuration {
        metadata: convert_metadata(configuration.metadata),
        pool_settings: configuration.connection_settings.pool_settings,
        connection_uri,
        isolation_level: configuration.connection_settings.isolation_level,
        mutations_version: convert_mutations_version(configuration.mutations_version),
        configuration_version_tag: VersionTag::Version3,
        mutations_prefix: None,
    })
}

pub async fn write_parsed_configuration(
    parsed_config: RawConfiguration,
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

    let output = schemars::schema_for!(RawConfiguration);
    fs::write(
        &configuration_jsonschema_file_path,
        serde_json::to_string_pretty(&output)
            .map_err(|e| WriteParsedConfigurationError::IoError(e.into()))?
            + "\n",
    )
    .await?;

    Ok(())
}

// This function is used by tests as well
pub fn convert_metadata(metadata: metadata::Metadata) -> query_engine_metadata::metadata::Metadata {
    let (scalar_types, composite_types) = transitively_occurring_types(
        occurring_scalar_types(
            &metadata.tables,
            &metadata.native_queries,
            &metadata.aggregate_functions,
        ),
        &occurring_composite_types(&metadata.tables, &metadata.native_queries),
        metadata.composite_types,
    );

    query_engine_metadata::metadata::Metadata {
        tables: convert_tables(metadata.tables),
        composite_types: convert_composite_types(composite_types),
        native_operations: convert_native_queries(metadata.native_queries),
        scalar_types: convert_scalar_types(
            scalar_types,
            metadata.aggregate_functions,
            metadata.comparison_operators,
            metadata.type_representations,
        ),
    }
}

fn convert_scalar_types(
    scalar_types: BTreeSet<models::ScalarTypeName>,
    aggregate_functions: metadata::AggregateFunctions,
    comparison_operators: metadata::ComparisonOperators,
    type_representations: metadata::TypeRepresentations,
) -> query_engine_metadata::metadata::ScalarTypes {
    let aggregates = convert_aggregate_functions(aggregate_functions);
    let comparisons = convert_comparison_operators(comparison_operators);
    let representations = convert_type_representations(type_representations);

    query_engine_metadata::metadata::ScalarTypes(
        scalar_types
            .into_iter()
            .map(|t| {
                (
                    t.clone(),
                    query_engine_metadata::metadata::ScalarType {
                        type_name: t.clone().into(),
                        schema_name: None, // Version 3 does not capture the schema of scalar
                        // types.
                        description: None,
                        aggregate_functions: aggregates.get(&t).cloned().unwrap_or(BTreeMap::new()),
                        comparison_operators: comparisons
                            .get(&t)
                            .cloned()
                            .unwrap_or(BTreeMap::new()),

                        type_representation: representations
                            .0
                            .get(&t)
                            .cloned()
                            .unwrap_or(query_engine_metadata::metadata::TypeRepresentation::Json),
                    },
                )
            })
            .collect(),
    )
}

fn convert_aggregate_functions(
    aggregate_functions: metadata::AggregateFunctions,
) -> BTreeMap<
    models::ScalarTypeName,
    BTreeMap<models::AggregateFunctionName, query_engine_metadata::metadata::AggregateFunction>,
> {
    aggregate_functions
        .0
        .into_iter()
        .map(|(k, v)| {
            (
                k,
                v.into_iter()
                    .map(|(k, v)| (k, convert_aggregate_function(v)))
                    .collect(),
            )
        })
        .collect()
}

fn convert_aggregate_function(
    aggregate_function: metadata::AggregateFunction,
) -> query_engine_metadata::metadata::AggregateFunction {
    query_engine_metadata::metadata::AggregateFunction {
        return_type: aggregate_function.return_type,
    }
}

fn convert_native_queries(
    native_queries: metadata::NativeQueries,
) -> query_engine_metadata::metadata::NativeOperations {
    let mut queries = BTreeMap::new();
    let mut mutations = BTreeMap::new();

    for (name, operation) in native_queries.0 {
        let is_procedure = operation.is_procedure;
        let info = convert_native_query_info(operation);
        if is_procedure {
            mutations.insert(name.as_str().into(), info);
        } else {
            queries.insert(name, info);
        }
    }

    query_engine_metadata::metadata::NativeOperations {
        queries: query_engine_metadata::metadata::NativeQueries(queries),
        mutations: query_engine_metadata::metadata::NativeMutations(mutations),
    }
}

fn convert_native_query_info(
    native_query_info: metadata::NativeQueryInfo,
) -> query_engine_metadata::metadata::NativeQueryInfo {
    query_engine_metadata::metadata::NativeQueryInfo {
        sql: convert_native_query_sql_either(native_query_info.sql),
        columns: native_query_info
            .columns
            .into_iter()
            .map(|(k, v)| (k, convert_read_only_column_info(v)))
            .collect(),
        arguments: native_query_info
            .arguments
            .into_iter()
            .map(|(k, v)| (k, convert_read_only_column_info(v)))
            .collect(),
        description: native_query_info.description,
    }
}

fn convert_read_only_column_info(
    read_only_column_info: metadata::ReadOnlyColumnInfo,
) -> query_engine_metadata::metadata::ReadOnlyColumnInfo {
    query_engine_metadata::metadata::ReadOnlyColumnInfo {
        name: read_only_column_info.name,
        r#type: convert_type(read_only_column_info.r#type),
        nullable: convert_nullable(&read_only_column_info.nullable),
        description: read_only_column_info.description,
    }
}

fn convert_nullable(nullable: &metadata::Nullable) -> query_engine_metadata::metadata::Nullable {
    match nullable {
        metadata::Nullable::Nullable => query_engine_metadata::metadata::Nullable::Nullable,
        metadata::Nullable::NonNullable => query_engine_metadata::metadata::Nullable::NonNullable,
    }
}

fn convert_type(r#type: metadata::Type) -> query_engine_metadata::metadata::Type {
    match r#type {
        metadata::Type::ScalarType(t) => query_engine_metadata::metadata::Type::ScalarType(t),
        metadata::Type::CompositeType(t) => query_engine_metadata::metadata::Type::CompositeType(t),
        metadata::Type::ArrayType(t) => {
            query_engine_metadata::metadata::Type::ArrayType(Box::new(convert_type(*t)))
        }
    }
}

fn convert_native_query_sql_either(
    sql: metadata::NativeQuerySqlEither,
) -> query_engine_metadata::metadata::NativeQuerySqlEither {
    match sql {
        metadata::NativeQuerySqlEither::NativeQuerySql(internal_sql) => {
            query_engine_metadata::metadata::NativeQuerySqlEither::NativeQuerySql(
                convert_native_query_sql_internal(internal_sql),
            )
        }
        metadata::NativeQuerySqlEither::NativeQuerySqlExternal(external_sql) => {
            query_engine_metadata::metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
                convert_native_query_sql_external(external_sql),
            )
        }
    }
}

fn convert_native_query_sql_internal(
    internal_sql: metadata::NativeQuerySql,
) -> query_engine_metadata::metadata::NativeQuerySql {
    match internal_sql {
        metadata::NativeQuerySql::FromFile { file, sql } => {
            query_engine_metadata::metadata::NativeQuerySql::FromFile {
                file,
                sql: convert_native_query_parts(sql),
            }
        }
        metadata::NativeQuerySql::Inline { sql } => {
            query_engine_metadata::metadata::NativeQuerySql::Inline {
                sql: convert_native_query_parts(sql),
            }
        }
    }
}

fn convert_native_query_sql_external(
    external_sql: metadata::NativeQuerySqlExternal,
) -> query_engine_metadata::metadata::NativeQuerySqlExternal {
    match external_sql {
        metadata::NativeQuerySqlExternal::File { file } => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::File { file }
        }
        metadata::NativeQuerySqlExternal::Inline { inline } => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::Inline {
                inline: convert_native_query_parts(inline),
            }
        }
        metadata::NativeQuerySqlExternal::InlineUntagged(parts) => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::InlineUntagged(
                convert_native_query_parts(parts),
            )
        }
    }
}

fn convert_native_query_parts(
    inline: metadata::NativeQueryParts,
) -> query_engine_metadata::metadata::NativeQueryParts {
    query_engine_metadata::metadata::NativeQueryParts(
        inline
            .0
            .into_iter()
            .map(convert_native_query_part)
            .collect(),
    )
}

fn convert_native_query_part(
    native_query_part: metadata::NativeQueryPart,
) -> query_engine_metadata::metadata::NativeQueryPart {
    match native_query_part {
        metadata::NativeQueryPart::Text(t) => {
            query_engine_metadata::metadata::NativeQueryPart::Text(t)
        }
        metadata::NativeQueryPart::Parameter(p) => {
            query_engine_metadata::metadata::NativeQueryPart::Parameter(p)
        }
    }
}

fn convert_type_representations(
    type_representations: metadata::TypeRepresentations,
) -> query_engine_metadata::metadata::TypeRepresentations {
    query_engine_metadata::metadata::TypeRepresentations(
        type_representations
            .0
            .into_iter()
            .map(|(k, type_representation)| (k, convert_type_representation(type_representation)))
            .collect(),
    )
}

fn convert_type_representation(
    type_representation: metadata::TypeRepresentation,
) -> query_engine_metadata::metadata::TypeRepresentation {
    match type_representation {
        metadata::TypeRepresentation::Boolean => {
            query_engine_metadata::metadata::TypeRepresentation::Boolean
        }
        metadata::TypeRepresentation::String => {
            query_engine_metadata::metadata::TypeRepresentation::String
        }
        metadata::TypeRepresentation::Float32 => {
            query_engine_metadata::metadata::TypeRepresentation::Float32
        }
        metadata::TypeRepresentation::Float64 => {
            query_engine_metadata::metadata::TypeRepresentation::Float64
        }
        metadata::TypeRepresentation::Int16 => {
            query_engine_metadata::metadata::TypeRepresentation::Int16
        }
        metadata::TypeRepresentation::Int32 => {
            query_engine_metadata::metadata::TypeRepresentation::Int32
        }
        metadata::TypeRepresentation::Int64 => {
            query_engine_metadata::metadata::TypeRepresentation::Int64
        }
        metadata::TypeRepresentation::Int64AsString => {
            query_engine_metadata::metadata::TypeRepresentation::Int64AsString
        }
        metadata::TypeRepresentation::BigDecimal => {
            query_engine_metadata::metadata::TypeRepresentation::BigDecimal
        }
        metadata::TypeRepresentation::BigDecimalAsString => {
            query_engine_metadata::metadata::TypeRepresentation::BigDecimalAsString
        }
        metadata::TypeRepresentation::Timestamp => {
            query_engine_metadata::metadata::TypeRepresentation::Timestamp
        }
        metadata::TypeRepresentation::Timestamptz => {
            query_engine_metadata::metadata::TypeRepresentation::Timestamptz
        }
        metadata::TypeRepresentation::Time => {
            query_engine_metadata::metadata::TypeRepresentation::Time
        }
        metadata::TypeRepresentation::Timetz => {
            query_engine_metadata::metadata::TypeRepresentation::Timetz
        }
        metadata::TypeRepresentation::Date => {
            query_engine_metadata::metadata::TypeRepresentation::Date
        }
        metadata::TypeRepresentation::UUID => {
            query_engine_metadata::metadata::TypeRepresentation::UUID
        }
        metadata::TypeRepresentation::Geography => {
            query_engine_metadata::metadata::TypeRepresentation::Geography
        }
        metadata::TypeRepresentation::Geometry => {
            query_engine_metadata::metadata::TypeRepresentation::Geometry
        }
        // This is deprecated in ndc-spec
        metadata::TypeRepresentation::Number
        | metadata::TypeRepresentation::Integer
        | metadata::TypeRepresentation::Json => {
            query_engine_metadata::metadata::TypeRepresentation::Json
        }
        metadata::TypeRepresentation::Enum(v) => {
            query_engine_metadata::metadata::TypeRepresentation::Enum(v)
        }
    }
}

fn convert_comparison_operators(
    comparison_operators: metadata::ComparisonOperators,
) -> BTreeMap<
    models::ScalarTypeName,
    BTreeMap<models::ComparisonOperatorName, query_engine_metadata::metadata::ComparisonOperator>,
> {
    comparison_operators
        .0
        .into_iter()
        .map(|(k, v)| {
            (
                k,
                v.into_iter()
                    .map(|(k, comparison_operator)| {
                        (k, convert_comparison_operator(comparison_operator))
                    })
                    .collect(),
            )
        })
        .collect()
}

fn convert_comparison_operator(
    comparison_operator: metadata::ComparisonOperator,
) -> query_engine_metadata::metadata::ComparisonOperator {
    query_engine_metadata::metadata::ComparisonOperator {
        operator_name: comparison_operator.operator_name,
        operator_kind: convert_operator_kind(&comparison_operator.operator_kind),
        argument_type: comparison_operator.argument_type,
        is_infix: comparison_operator.is_infix,
    }
}

fn convert_operator_kind(
    operator_kind: &metadata::OperatorKind,
) -> query_engine_metadata::metadata::OperatorKind {
    match operator_kind {
        metadata::OperatorKind::Equal => query_engine_metadata::metadata::OperatorKind::Equal,
        metadata::OperatorKind::In => query_engine_metadata::metadata::OperatorKind::In,
        metadata::OperatorKind::LessThan => query_engine_metadata::metadata::OperatorKind::LessThan,
        metadata::OperatorKind::LessThanOrEqual => {
            query_engine_metadata::metadata::OperatorKind::LessThanOrEqual
        }
        metadata::OperatorKind::GreaterThan => {
            query_engine_metadata::metadata::OperatorKind::GreaterThan
        }
        metadata::OperatorKind::GreaterThanOrEqual => {
            query_engine_metadata::metadata::OperatorKind::GreaterThanOrEqual
        }
        metadata::OperatorKind::Custom => query_engine_metadata::metadata::OperatorKind::Custom,
    }
}

fn convert_composite_types(
    composite_types: metadata::CompositeTypes,
) -> query_engine_metadata::metadata::CompositeTypes {
    query_engine_metadata::metadata::CompositeTypes(
        composite_types
            .0
            .into_iter()
            .map(|(k, composite_type)| (k, convert_composite_type(composite_type)))
            .collect(),
    )
}

fn convert_composite_type(
    composite_type: metadata::CompositeType,
) -> query_engine_metadata::metadata::CompositeType {
    query_engine_metadata::metadata::CompositeType {
        type_name: composite_type.name,
        schema_name: None, // Version3 does not capture the schema of a composite type
        fields: composite_type
            .fields
            .into_iter()
            .map(|(k, field)| (k, convert_composite_type_field_info(field)))
            .collect(),
        description: composite_type.description,
    }
}

fn convert_composite_type_field_info(
    field: metadata::FieldInfo,
) -> query_engine_metadata::metadata::FieldInfo {
    query_engine_metadata::metadata::FieldInfo {
        field_name: field.name,
        r#type: convert_type(field.r#type),
        description: field.description,
    }
}

pub fn convert_tables(tables: metadata::TablesInfo) -> query_engine_metadata::metadata::TablesInfo {
    query_engine_metadata::metadata::TablesInfo(
        tables
            .0
            .into_iter()
            .map(|(k, table_info)| (k, convert_table_info(table_info)))
            .collect(),
    )
}

fn convert_table_info(
    table_info: metadata::TableInfo,
) -> query_engine_metadata::metadata::TableInfo {
    query_engine_metadata::metadata::TableInfo {
        schema_name: table_info.schema_name,
        table_name: table_info.table_name,
        columns: table_info
            .columns
            .into_iter()
            .map(|(k, column_info)| (k, convert_column_info(column_info)))
            .collect(),
        uniqueness_constraints: convert_uniqueness_constraints(table_info.uniqueness_constraints),
        foreign_relations: convert_foreign_relations(table_info.foreign_relations),
        description: table_info.description,
    }
}

fn convert_foreign_relations(
    foreign_relations: metadata::ForeignRelations,
) -> query_engine_metadata::metadata::ForeignRelations {
    query_engine_metadata::metadata::ForeignRelations(
        foreign_relations
            .0
            .into_iter()
            .map(|(k, foreign_relation)| (k, convert_foreign_relation(foreign_relation)))
            .collect(),
    )
}

fn convert_foreign_relation(
    foreign_relation: metadata::ForeignRelation,
) -> query_engine_metadata::metadata::ForeignRelation {
    query_engine_metadata::metadata::ForeignRelation {
        foreign_schema: foreign_relation.foreign_schema,
        foreign_table: foreign_relation.foreign_table,
        column_mapping: foreign_relation.column_mapping,
    }
}

fn convert_uniqueness_constraints(
    uniqueness_constraints: metadata::UniquenessConstraints,
) -> query_engine_metadata::metadata::UniquenessConstraints {
    query_engine_metadata::metadata::UniquenessConstraints(
        uniqueness_constraints
            .0
            .into_iter()
            .map(|(k, uniqueness_constraint)| {
                (k, convert_uniqueness_constraint(uniqueness_constraint))
            })
            .collect(),
    )
}

fn convert_uniqueness_constraint(
    uniqueness_constraint: metadata::UniquenessConstraint,
) -> query_engine_metadata::metadata::UniquenessConstraint {
    query_engine_metadata::metadata::UniquenessConstraint(
        uniqueness_constraint
            .0
            .into_iter()
            .map(|c| (c.to_string(), c))
            .collect(),
    )
}

fn convert_column_info(
    column_info: metadata::ColumnInfo,
) -> query_engine_metadata::metadata::ColumnInfo {
    query_engine_metadata::metadata::ColumnInfo {
        name: column_info.name,
        r#type: convert_type(column_info.r#type),
        nullable: convert_nullable(&column_info.nullable),
        has_default: convert_has_default(&column_info.has_default),
        is_identity: convert_is_identity(&column_info.is_identity),
        is_generated: convert_is_generated(&column_info.is_generated),
        description: column_info.description,
    }
}

fn convert_is_generated(
    is_generated: &metadata::IsGenerated,
) -> query_engine_metadata::metadata::IsGenerated {
    match is_generated {
        metadata::IsGenerated::NotGenerated => {
            query_engine_metadata::metadata::IsGenerated::NotGenerated
        }
        metadata::IsGenerated::Stored => query_engine_metadata::metadata::IsGenerated::Stored,
    }
}

fn convert_is_identity(
    is_identity: &metadata::IsIdentity,
) -> query_engine_metadata::metadata::IsIdentity {
    match is_identity {
        metadata::IsIdentity::NotIdentity => {
            query_engine_metadata::metadata::IsIdentity::NotIdentity
        }
        metadata::IsIdentity::IdentityByDefault => {
            query_engine_metadata::metadata::IsIdentity::IdentityByDefault
        }
        metadata::IsIdentity::IdentityAlways => {
            query_engine_metadata::metadata::IsIdentity::IdentityAlways
        }
    }
}

fn convert_has_default(
    has_default: &metadata::HasDefault,
) -> query_engine_metadata::metadata::HasDefault {
    match has_default {
        metadata::HasDefault::NoDefault => query_engine_metadata::metadata::HasDefault::NoDefault,
        metadata::HasDefault::HasDefault => query_engine_metadata::metadata::HasDefault::HasDefault,
    }
}

fn convert_mutations_version(
    mutations_version_opt: Option<metadata::mutations::MutationsVersion>,
) -> Option<query_engine_metadata::metadata::mutations::MutationsVersion> {
    mutations_version_opt.map(|mutations_version| match mutations_version {
        metadata::mutations::MutationsVersion::V1 => {
            query_engine_metadata::metadata::mutations::MutationsVersion::V1
        }
    })
}
