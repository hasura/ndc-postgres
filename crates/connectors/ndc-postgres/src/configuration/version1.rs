//! Internal Configuration and state for our connector.
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::secret::{SecretValue, SecretValueImpl};
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use std::collections::{BTreeMap, BTreeSet};

use query_engine_metadata::metadata;

const CONFIGURATION_QUERY: &str = include_str!("version1.sql");

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
    pub metadata: Metadata,
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
    /// The names of Tables and Views in these schemas will be returned unqualified.
    /// The default setting will set the `public` schema as unqualified.
    #[serde(default = "default_unqualified_schemas")]
    pub unqualified_schemas: Vec<String>,
    /// The mapping of comparison operator names to apply when updating the configuration
    #[serde(default = "default_comparison_operator_mapping")]
    pub comparison_operator_mapping: Vec<ComparisonOperatorMapping>,
}

impl Default for ConfigureOptions {
    fn default() -> ConfigureOptions {
        ConfigureOptions {
            excluded_schemas: default_excluded_schemas(),
            unqualified_schemas: default_unqualified_schemas(),
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

fn default_unqualified_schemas() -> Vec<String> {
    vec!["public".to_string()]
}

// Configuration type for values that can come from secrets. That format includes both literal
// values as well as symbolic references to secrets.
// At this point we should only ever see resolved secrets, which this type captures.
//
// In order to correctly mark fields that can have secret values in the json schema, this type
// intentionally does not implement the JsonSchema trait. Instead, you should
// attach the attribute:
//
//   #[schemars(with = "SecretValue")]
//
// to fields of type 'ResolvedSecret'.
#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(try_from = "SecretValue")]
#[serde(into = "SecretValue")]
pub struct ResolvedSecret(pub String);

impl TryFrom<SecretValue> for ResolvedSecret {
    fn try_from(value: SecretValue) -> Result<Self, Self::Error> {
        match value.0 {
            SecretValueImpl::Value(v) => Ok(ResolvedSecret(v)),
            SecretValueImpl::StringValueFromSecret(secret) => {
                Err(format!("Unresolved secret: {}", secret))
            }
        }
    }

    type Error = String;
}

impl From<ResolvedSecret> for SecretValue {
    fn from(value: ResolvedSecret) -> SecretValue {
        SecretValue(SecretValueImpl::Value(value.0))
    }
}

#[derive(Debug, Clone, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUri {
    Uri(#[schemars(with = "SecretValue")] ResolvedSecret),
}

impl From<String> for ConnectionUri {
    fn from(value: String) -> Self {
        Self::Uri(ResolvedSecret(value))
    }
}

impl From<&str> for ConnectionUri {
    fn from(value: &str) -> Self {
        Self::from(value.to_string())
    }
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            version: 1,
            connection_uri: ConnectionUri::Uri(ResolvedSecret("".to_string())),
            pool_settings: PoolSettings::default(),
            metadata: Metadata::default(),
            configure_options: ConfigureOptions::default(),
        }
    }
}

/// Settings for the PostgreSQL connection pool
#[derive(Clone, Debug, PartialEq, Serialize, Deserialize, JsonSchema)]
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
    pub fn is_default(&self) -> bool {
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
) -> Result<RawConfiguration, connector::ValidateError> {
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

    Ok(config)
}

/// Construct the deployment configuration by introspecting the database.
pub async fn configure(
    args: RawConfiguration,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    let ConnectionUri::Uri(ResolvedSecret(uri)) = &args.connection_uri;

    let mut connection = PgConnection::connect(uri.as_str())
        .instrument(info_span!("Connect to database"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let query = sqlx::query(CONFIGURATION_QUERY)
        .bind(args.configure_options.excluded_schemas.clone())
        .bind(args.configure_options.unqualified_schemas.clone())
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
        let tables: TablesInfo = serde_json::from_value(row.get(0))
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
        metadata: Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
        },
        configure_options: args.configure_options,
    })
}

pub fn filter_comparison_operators(
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

pub fn filter_aggregate_functions(
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
fn occurring_scalar_types(
    tables: &TablesInfo,
    native_queries: &NativeQueries,
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

// Version1 specific transport data types

pub fn metadata_to_current(transport: &Metadata) -> metadata::Metadata {
    let current_tables = tables_to_current(&transport.tables);
    let current_native_queries = native_queries_to_current(&transport.native_queries);

    metadata::Metadata {
        tables: current_tables,
        native_queries: current_native_queries,
        aggregate_functions: transport.aggregate_functions.clone(),
        comparison_operators: transport.comparison_operators.clone(),
    }
}

fn tables_to_current(tables: &TablesInfo) -> metadata::TablesInfo {
    metadata::TablesInfo(
        tables
            .0
            .iter()
            .map(|(key, table)| (key.clone(), table_to_current(table)))
            .collect(),
    )
}

fn table_to_current(table: &TableInfo) -> metadata::TableInfo {
    metadata::TableInfo {
        schema_name: table.schema_name.clone(),
        table_name: table.table_name.clone(),
        columns: columns_to_current(&table.columns),
        uniqueness_constraints: table.uniqueness_constraints.clone(),
        foreign_relations: table.foreign_relations.clone(),
        description: table.description.clone(),
    }
}

fn columns_to_current(
    columns: &BTreeMap<String, ColumnInfo>,
) -> BTreeMap<String, metadata::ColumnInfo> {
    columns
        .iter()
        .map(|(key, column)| (key.clone(), column_to_current(column)))
        .collect()
}

fn column_to_current(column: &ColumnInfo) -> metadata::ColumnInfo {
    metadata::ColumnInfo {
        name: column.name.clone(),
        r#type: metadata::Type::ScalarType(column.r#type.clone()),
        nullable: column.nullable.clone(),
        description: column.description.clone(),
    }
}

fn native_queries_to_current(native_queries: &NativeQueries) -> metadata::NativeQueries {
    metadata::NativeQueries(
        native_queries
            .0
            .iter()
            .map(|(key, nq)| (key.clone(), native_query_to_current(nq)))
            .collect(),
    )
}

fn native_query_to_current(nq: &NativeQueryInfo) -> metadata::NativeQueryInfo {
    metadata::NativeQueryInfo {
        sql: nq.sql.clone(),
        columns: columns_to_current(&nq.columns),
        arguments: columns_to_current(&nq.arguments),
        description: nq.description.clone(),
        is_procedure: nq.is_procedure,
    }
}

/// Metadata information.
#[derive(Debug, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Metadata {
    #[serde(default)]
    pub tables: TablesInfo,
    #[serde(default)]
    pub native_queries: NativeQueries,
    #[serde(default)]
    pub aggregate_functions: metadata::AggregateFunctions,
    #[serde(default)]
    pub comparison_operators: metadata::ComparisonOperators,
}

/// Mapping from a "table" name to its information.
#[derive(Debug, Clone, PartialEq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct TablesInfo(pub BTreeMap<String, TableInfo>);

/// Information about a database table (or any other kind of relation).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct TableInfo {
    pub schema_name: String,
    pub table_name: String,
    pub columns: BTreeMap<String, ColumnInfo>,
    #[serde(default)]
    pub uniqueness_constraints: metadata::UniquenessConstraints,
    #[serde(default)]
    pub foreign_relations: metadata::ForeignRelations,
    #[serde(default)]
    pub description: Option<String>,
}

/// Information about a database column.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ColumnInfo {
    pub name: String,
    pub r#type: metadata::ScalarType,
    #[serde(default)]
    pub nullable: metadata::Nullable,
    #[serde(default)]
    pub description: Option<String>,
}

/// Metadata information of native queries.
#[derive(Debug, Clone, PartialEq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueries(pub BTreeMap<String, NativeQueryInfo>);

/// Information about a Native Query
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueryInfo {
    /// SQL expression to use for the Native Query.
    /// We can interpolate values using `{{variable_name}}` syntax,
    /// such as `SELECT * FROM authors WHERE name = {{author_name}}`
    pub sql: metadata::NativeQuerySql,
    /// Columns returned by the Native Query
    pub columns: BTreeMap<String, ColumnInfo>,
    #[serde(default)]
    /// Names and types of arguments that can be passed to this Native Query
    pub arguments: BTreeMap<String, ColumnInfo>,
    #[serde(default)]
    pub description: Option<String>,
    /// True if this native query mutates the database
    #[serde(skip_serializing_if = "std::ops::Not::not")]
    #[serde(default)]
    pub is_procedure: bool,
}
