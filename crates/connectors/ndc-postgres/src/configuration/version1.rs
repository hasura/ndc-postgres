//! Internal Configuration and state for our connector.
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models::secretable_value_reference;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use std::collections::BTreeSet;

use query_engine_metadata::metadata;

const CURRENT_VERSION: u32 = 1;

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct RawConfiguration {
    // Which version of the configuration format are we using
    pub version: u32,
    // Connection string for a Postgres-compatible database
    pub connection_uri: ConnectionUri,
    #[serde(skip_serializing_if = "PoolSettings::is_default")]
    #[serde(default)]
    pub pool_settings: PoolSettings,
    #[serde(default)]
    pub metadata: metadata::Metadata,
    #[serde(default)]
    pub configure_options: ConfigureOptions,
}

/// Options which only influence how the configuration server updates the configuration
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ConfigureOptions {
    /// Schemas which are excluded from introspection. The default setting will exclude the
    /// internal schemas of Postgres, Citus, Cockroach, and the PostGIS extension.
    #[serde(default = "default_excluded_schemas")]
    pub excluded_schemas: Vec<String>,
    /// The mapping of comparison operator names to apply when updating the configuration
    #[serde(default = "default_comparison_operator_mapping")]
    pub comparison_operator_mapping: Vec<ComparisonOperatorMapping>,
}

impl Default for ConfigureOptions {
    fn default() -> ConfigureOptions {
        ConfigureOptions {
            excluded_schemas: default_excluded_schemas(),
            comparison_operator_mapping: default_comparison_operator_mapping(),
        }
    }
}

/// Define the names that comparison operators will be exposed as by the automatic introspection.
#[derive(Debug, Clone, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ComparisonOperatorMapping {
    /// The name of the operator as defined by the database
    pub operator_name: String,
    /// The name the operator will appear under in the exposed API
    pub exposed_name: String,
}

/// The default comparison operator mappings apply the aliases that are used in graphql-engine v2.
fn default_comparison_operator_mapping() -> Vec<ComparisonOperatorMapping> {
    vec![
        // Common mappings
        ComparisonOperatorMapping {
            operator_name: "=".to_string(),
            exposed_name: "_eq".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "<=".to_string(),
            exposed_name: "_lte".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: ">".to_string(),
            exposed_name: "_gt".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: ">=".to_string(),
            exposed_name: "_gte".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "<".to_string(),
            exposed_name: "_lt".to_string(),
        },
        // Preferred by CockroachDB
        ComparisonOperatorMapping {
            operator_name: "!=".to_string(),
            exposed_name: "_neq".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "LIKE".to_string(),
            exposed_name: "_like".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "NOT LIKE".to_string(),
            exposed_name: "_nlike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "ILIKE".to_string(),
            exposed_name: "_ilike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "NOT ILIKE".to_string(),
            exposed_name: "_nilike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "SIMILAR TO".to_string(),
            exposed_name: "_similar".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "NOT SIMILAR TO".to_string(),
            exposed_name: "_nsimilar".to_string(),
        },
        // Preferred by Postgres
        ComparisonOperatorMapping {
            operator_name: "<>".to_string(),
            exposed_name: "_neq".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "~~".to_string(),
            exposed_name: "_like".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "!~~".to_string(),
            exposed_name: "_nlike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "~~*".to_string(),
            exposed_name: "_ilike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "!~~*".to_string(),
            exposed_name: "_nilike".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "~".to_string(),
            exposed_name: "_regex".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "!~".to_string(),
            exposed_name: "_nregex".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "~*".to_string(),
            exposed_name: "_iregex".to_string(),
        },
        ComparisonOperatorMapping {
            operator_name: "!~*".to_string(),
            exposed_name: "_niregex".to_string(),
        },
    ]
}

fn default_excluded_schemas() -> Vec<String> {
    vec![
        // From Postgres itself
        "information_schema".to_string(),
        "pg_catalog".to_string(),
        // From PostGIS
        "tiger".to_string(),
        // From CockroachDB
        "crdb_internal".to_string(),
        // From Citus
        "columnar".to_string(),
        "columnar_internal".to_string(),
    ]
}

/// User configuration, elaborated from a 'RawConfiguration'.
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Configuration {
    pub config: RawConfiguration,
}

/// A wrapper around a value that may have come directly from user-specified
/// configuration, or may have been resolved from a secret provided externally.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize)]
#[serde(
    from = "ResolvedSecretIntermediate",
    into = "ResolvedSecretIntermediate"
)]
pub struct ResolvedSecret(pub String);

/// The intermediate type representing the two formats in which we can parse
/// `ResolvedSecret`:
///
/// 1. `"postgresql://..."`
/// 2. `{"value": "postgresql://..."}`
///
/// We do not store this type, it is only used during deserialization.
#[derive(Debug, Deserialize, Serialize)]
#[serde(untagged)]
enum ResolvedSecretIntermediate {
    Unwrapped(String),
    Wrapped { value: String },
}

impl From<ResolvedSecretIntermediate> for ResolvedSecret {
    fn from(value: ResolvedSecretIntermediate) -> Self {
        match value {
            ResolvedSecretIntermediate::Unwrapped(inner) => ResolvedSecret(inner),
            ResolvedSecretIntermediate::Wrapped { value: inner } => ResolvedSecret(inner),
        }
    }
}

// The wrapped form is the canonical form, so we always serialize to that.
impl From<ResolvedSecret> for ResolvedSecretIntermediate {
    fn from(ResolvedSecret(value): ResolvedSecret) -> Self {
        Self::Wrapped { value }
    }
}

// In the user facing configuration, the connection string can either be a literal or a reference
// to a secret, so we advertize either in the JSON schema. However, when building the configuration,
// we expect the metadata build service to have resolved the secret reference so we deserialize
// only to a String.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUri {
    Uri(#[schemars(schema_with = "secretable_value_reference")] ResolvedSecret),
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            version: CURRENT_VERSION,
            connection_uri: ConnectionUri::Uri(ResolvedSecret("".to_string())),
            pool_settings: PoolSettings::default(),
            metadata: metadata::Metadata::default(),
            configure_options: ConfigureOptions {
                excluded_schemas: default_excluded_schemas(),
                comparison_operator_mapping: default_comparison_operator_mapping(),
            },
        }
    }
}

/// Settings for the PostgreSQL connection pool
#[derive(Debug, PartialEq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct PoolSettings {
    /// maximum number of pool connections
    #[serde(default = "max_connection_default")]
    pub max_connections: u32,
    /// timeout for acquiring a connection from the pool (seconds)
    #[serde(default = "pool_timeout_default")]
    pub pool_timeout: u64,
    /// idle timeout for releasing a connection from the pool (seconds)
    #[serde(default = "idle_timeout_default")]
    pub idle_timeout: Option<u64>,
    /// maximum lifetime for an individual connection (seconds)
    #[serde(default = "connection_lifetime_default")]
    pub connection_lifetime: Option<u64>,
}

impl PoolSettings {
    fn is_default(&self) -> bool {
        self == &PoolSettings::default()
    }
}

/// <https://hasura.io/docs/latest/api-reference/syntax-defs/#pgpoolsettings>
impl Default for PoolSettings {
    fn default() -> PoolSettings {
        PoolSettings {
            max_connections: 50,
            pool_timeout: 30,
            idle_timeout: Some(180),
            connection_lifetime: Some(600),
        }
    }
}

// for serde default //
fn max_connection_default() -> u32 {
    PoolSettings::default().max_connections
}
fn pool_timeout_default() -> u64 {
    PoolSettings::default().pool_timeout
}
fn idle_timeout_default() -> Option<u64> {
    PoolSettings::default().idle_timeout
}
fn connection_lifetime_default() -> Option<u64> {
    PoolSettings::default().connection_lifetime
}

/// Validate the user configuration.
pub async fn validate_raw_configuration(
    config: RawConfiguration,
) -> Result<Configuration, connector::ValidateError> {
    if config.version != 1 {
        return Err(connector::ValidateError::ValidateError(vec![
            connector::InvalidRange {
                path: vec![connector::KeyOrIndex::Key("version".into())],
                message: format!(
                    "invalid configuration version, expected 1, got {0}",
                    config.version
                ),
            },
        ]));
    }

    match &config.connection_uri {
        ConnectionUri::Uri(ResolvedSecret(uri)) if uri.is_empty() => {
            Err(connector::ValidateError::ValidateError(vec![
                connector::InvalidRange {
                    path: vec![connector::KeyOrIndex::Key("connectionUri".into())],
                    message: "database uri must be specified".to_string(),
                },
            ]))
        }
        _ => Ok(()),
    }?;

    Ok(Configuration { config })
}

/// Construct the deployment configuration by introspecting the database.
pub async fn configure(
    args: RawConfiguration,
    configuration_query: &str,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    let ConnectionUri::Uri(ResolvedSecret(uri)) = &args.connection_uri;

    let mut connection = PgConnection::connect(uri.as_str())
        .instrument(info_span!("Connect to database"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let query = sqlx::query(configuration_query)
        .bind(args.configure_options.excluded_schemas.clone())
        .bind(
            serde_json::to_value(args.configure_options.comparison_operator_mapping.clone())
                .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?,
        );

    let row = connection
        .fetch_one(query)
        .instrument(info_span!("Run introspection query"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let (tables, aggregate_functions, comparison_operators) = async {
        let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))
            .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

        let aggregate_functions: metadata::AggregateFunctions = serde_json::from_value(row.get(1))
            .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

        let comparison_operators: metadata::ComparisonOperators =
            serde_json::from_value(row.get(2))
                .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

        // We need to specify the concrete return type explicitly so that rustc knows that it can
        // be sent across an async boundary.
        // (last verified with rustc 1.72.1)
        Ok::<_, connector::UpdateConfigurationError>((
            tables,
            aggregate_functions,
            comparison_operators,
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
        version: 1,
        connection_uri: args.connection_uri,
        pool_settings: args.pool_settings,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
        },
        configure_options: args.configure_options,
    })
}

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

/// Collect all the types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via configuration.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
) -> BTreeSet<metadata::ScalarType> {
    let tables_column_types = tables
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| c.r#type.clone()));

    let native_queries_column_types = native_queries
        .0
        .values()
        .flat_map(|v| v.columns.values().map(|c| c.r#type.clone()));

    let native_queries_arguments_types = native_queries
        .0
        .values()
        .flat_map(|v| v.arguments.values().map(|c| c.r#type.clone()));

    tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .collect::<BTreeSet<metadata::ScalarType>>()
}
