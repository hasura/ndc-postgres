//! Internal Configuration and state for our connector.

mod comparison;
pub mod connection_settings;
mod options;

use std::borrow::Cow;
use std::collections::BTreeSet;
use std::path::PathBuf;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use tracing::{info_span, Instrument};

use query_engine_metadata::metadata;

use crate::environment::Environment;
use crate::error::Error;
use crate::values::{ConnectionUri, Secret};

const CONFIGURATION_QUERY: &str = include_str!("version3.sql");

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct RawConfiguration {
    /// Jsonschema of the configuration format.
    #[serde(rename = "$schema")]
    #[serde(default)]
    pub schema: Option<String>,
    /// Database connection settings.
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

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            schema: Some(crate::CONFIGURATION_JSONSCHEMA_FILENAME.to_string()),
            connection_settings: connection_settings::DatabaseConnectionSettings::empty(),
            metadata: metadata::Metadata::default(),
            introspection_options: options::IntrospectionOptions::default(),
            // we'll change this to `Some(MutationsVersions::V1)` when we
            // want to "release" this behaviour
            mutations_version: None,
        }
    }
}

/// Validate the user configuration.
pub async fn validate_raw_configuration(
    file_path: PathBuf,
    config: RawConfiguration,
) -> Result<RawConfiguration, Error> {
    match &config.connection_settings.connection_uri {
        ConnectionUri(Secret::Plain(uri)) if uri.is_empty() => {
            Err(Error::EmptyConnectionUri { file_path })
        }
        _ => Ok(()),
    }?;

    Ok(config)
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
        );

    let row = connection
        .fetch_one(query)
        .instrument(info_span!("Run introspection query"))
        .await?;

    let (tables, aggregate_functions, comparison_operators) = async {
        let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))?;

        let aggregate_functions: metadata::AggregateFunctions = serde_json::from_value(row.get(1))?;

        let metadata::ComparisonOperators(mut comparison_operators): metadata::ComparisonOperators =
            serde_json::from_value(row.get(2))?;

        // We need to include `in` as a comparison operator in the schema, and since it is syntax, it is not introspectable.
        // Instead, we will check if the scalar type defines an equals operator and if yes, we will insert the `_in` operator
        // as well.
        for (scalar_type, operators) in &mut comparison_operators {
            if operators
                .values()
                .any(|op| op.operator_kind == metadata::OperatorKind::Equal)
            {
                operators.insert(
                    "_in".to_string(),
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
        ))
    }
    .instrument(info_span!("Decode introspection result"))
    .await?;

    let scalar_types = occurring_scalar_types(&tables, &args.metadata.native_queries);

    let relevant_comparison_operators =
        filter_comparison_operators(&scalar_types, comparison_operators);
    let relevant_aggregate_functions =
        filter_aggregate_functions(&scalar_types, aggregate_functions);

    Ok(RawConfiguration {
        schema: args.schema,
        connection_settings: args.connection_settings,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
            composite_types: args.metadata.composite_types,
        },
        introspection_options: args.introspection_options,
        mutations_version: args.mutations_version,
    })
}

/// Collect all the types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via version2.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
) -> BTreeSet<metadata::ScalarType> {
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
            metadata::Type::ScalarType(ref t) => Some(t.clone()), // only keep scalar types
            metadata::Type::ArrayType(_) | metadata::Type::CompositeType(_) => None,
        })
        .collect::<BTreeSet<metadata::ScalarType>>()
}

/// Filter predicate for comarison operators. Preserves only comparison operators that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
fn filter_comparison_operators(
    scalar_types: &BTreeSet<metadata::ScalarType>,
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
    scalar_types: &BTreeSet<metadata::ScalarType>,
    aggregate_functions: metadata::AggregateFunctions,
) -> metadata::AggregateFunctions {
    metadata::AggregateFunctions(
        aggregate_functions
            .0
            .into_iter()
            .filter(|(typ, _)| scalar_types.contains(typ))
            .map(|(typ, ops)| {
                (
                    typ,
                    ops.into_iter()
                        .filter(|(_, op)| scalar_types.contains(&op.return_type))
                        .collect(),
                )
            })
            .collect(),
    )
}
