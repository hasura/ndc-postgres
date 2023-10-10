//! Internal Configuration and state for our connector.
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models::secret_or_literal_reference;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use std::collections::{BTreeMap, BTreeSet};

use query_engine_metadata::metadata;

const CURRENT_VERSION: u32 = 1;

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Debug, Deserialize, Serialize, JsonSchema)]
pub struct RawConfiguration {
    // Which version of the configuration format are we using
    pub version: u32,
    // Connection string for a Postgres-compatible database
    pub connection_uris: ConnectionUris,
    #[serde(skip_serializing_if = "PoolSettings::is_default")]
    #[serde(default)]
    pub pool_settings: PoolSettings,
    #[serde(default)]
    pub metadata: metadata::Metadata,
    /// Schemas which are excluded from introspection. The default setting will exclude the
    /// internal schemas of Postgres, Citus, Cockroach, and the PostGIS extension.
    #[serde(default = "default_excluded_schemas")]
    pub excluded_schemas: Vec<String>,
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
pub struct Configuration {
    pub config: RawConfiguration,
}

/// Type that accept both a single value and a list of values. Allows for a simpler format when a
/// single value is the common case.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
#[serde(untagged)]
pub enum SingleOrList<T> {
    Single(T),
    List(Vec<T>),
}

impl<T> SingleOrList<T> {
    fn is_empty(&self) -> bool {
        match self {
            SingleOrList::Single(_) => false,
            SingleOrList::List(l) => l.is_empty(),
        }
    }

    fn first(&self) -> Option<&T> {
        match self {
            SingleOrList::Single(s) => Some(s),
            SingleOrList::List(l) => l.first(),
        }
    }
}

impl<'a, T> IntoIterator for &'a SingleOrList<T> {
    type Item = &'a T;
    type IntoIter = std::slice::Iter<'a, T>;

    fn into_iter(self) -> Self::IntoIter {
        match self {
            SingleOrList::Single(s) => std::slice::from_ref(s).iter(),
            SingleOrList::List(l) => l.iter(),
        }
    }
}

// In the user facing configuration, the connection string can either be a literal or a reference
// to a secret, so we advertize either in the JSON schema. However, when building the configuration,
// we expect the metadata build service to have resolved the secret reference so we deserialize
// only to a String.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
pub struct ConnectionUri(#[schemars(schema_with = "secret_or_literal_reference")] pub String);

#[derive(Debug, Deserialize, Serialize, JsonSchema)]
pub struct ConnectionUris(pub SingleOrList<ConnectionUri>);

pub fn single_connection_uri(connection_uri: String) -> ConnectionUris {
    ConnectionUris(SingleOrList::Single(ConnectionUri(connection_uri)))
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            version: CURRENT_VERSION,
            connection_uris: ConnectionUris(SingleOrList::List(vec![])),
            pool_settings: PoolSettings::default(),
            metadata: metadata::Metadata::default(),
            excluded_schemas: default_excluded_schemas(),
        }
    }
}

/// Settings for the PostgreSQL connection pool
#[derive(Debug, PartialEq, Serialize, Deserialize, JsonSchema)]
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

    match &config.connection_uris {
        ConnectionUris(urls) if urls.is_empty() => {
            Err(connector::ValidateError::ValidateError(vec![
                connector::InvalidRange {
                    path: vec![connector::KeyOrIndex::Key("connection_uris".into())],
                    message: "At least one database url must be specified".to_string(),
                },
            ]))
        }
        _ => Ok(()),
    }?;

    Ok(Configuration { config })
}

/// Select the first available connection URI.
pub fn select_first_connection_uri(ConnectionUris(urls): &ConnectionUris) -> String {
    urls.first()
        .expect("No connection URIs were provided.")
        .clone()
        .0
}

/// Select a single connection URI to use.
///
/// Currently we simply select the first specified connection URI.
///
/// Eventually we want to support load-balancing between multiple read-replicas,
/// and then we'll be passing the full list of connection URIs to the connection
/// pool.
pub fn select_connection_uri(urls: &ConnectionUris) -> String {
    select_first_connection_uri(urls)
}

/// Construct the deployment configuration by introspecting the database.
pub async fn configure(
    args: RawConfiguration,
    configuration_query: &str,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    let url = select_first_connection_uri(&args.connection_uris);

    let mut connection = PgConnection::connect(url.as_str())
        .instrument(info_span!("Connect to database"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let query = sqlx::query(configuration_query).bind(args.excluded_schemas.clone());

    let row = connection
        .fetch_one(query)
        .instrument(info_span!("Run introspection query"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let (tables, aggregate_functions) = async {
        let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))
            .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

        let aggregate_functions: metadata::AggregateFunctions = serde_json::from_value(row.get(1))
            .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

        Ok((tables, aggregate_functions))
    }
    .instrument(info_span!("Decode introspection result"))
    .await?;

    let scalar_types =
        occurring_scalar_types(&tables, &args.metadata.native_queries, &aggregate_functions);

    Ok(RawConfiguration {
        version: 1,
        connection_uris: args.connection_uris,
        pool_settings: args.pool_settings,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions,
            comparison_operators: dream_up_comparison_operators(scalar_types),
        },
        excluded_schemas: args.excluded_schemas,
    })
}

/// Collect all the types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via configuration.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
    aggregate_functions: &metadata::AggregateFunctions,
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

    let aggregate_types = aggregate_functions.0.keys().cloned();

    tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .chain(aggregate_types)
        .collect::<BTreeSet<metadata::ScalarType>>()
}

// Until we have full introspection of operators we just dream up the same that we used to.
fn dream_up_comparison_operators(
    scalar_types: BTreeSet<metadata::ScalarType>,
) -> metadata::ComparisonOperators {
    let fn_operators_supported_by_all_types =
        |scalar_type: metadata::ScalarType| -> BTreeMap<String, metadata::ComparisonOperator> {
            BTreeMap::from([
                (
                    "_eq".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("=".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_neq".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("!=".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_lt".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("<".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_lte".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("<=".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_gt".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some(">".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_gte".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some(">=".to_string()),
                        procedure_name: None,
                    },
                ),
            ])
        };
    let fn_string_operators =
        |scalar_type: metadata::ScalarType| -> BTreeMap<String, metadata::ComparisonOperator> {
            BTreeMap::from([
                (
                    "_like".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("LIKE".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_nlike".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("NOT LIKE".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_ilike".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("ILIKE".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_nilike".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("NOT ILIKE".to_string()),
                        procedure_name: None,
                    },
                ),
                /*
                 * SIMILAR TO does not seem to have its own defined operator/proc in postgres.
                 * Rather, it looks like 'haystack SIMILAR TO needle ESCAPE esc an alias of
                 * 'haystack ~ similar_to_escape(needle, esc)'.
                 *
                 */
                (
                    "_similar".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("SIMILAR TO".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_nsimilar".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("NOT SIMILAR TO".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_regex".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("~".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_nregex".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("!~".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_iregex".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("~*".to_string()),
                        procedure_name: None,
                    },
                ),
                (
                    "_niregex".to_string(),
                    metadata::ComparisonOperator {
                        argument_type: scalar_type.clone(),
                        operator_name: Some("!~*".to_string()),
                        procedure_name: None,
                    },
                ),
            ])
        };

    let operators = scalar_types
        .iter()
        .map(|scalar_type| {
            let str_ops = match scalar_type.0.as_str() {
                "varchar" | "text" => fn_string_operators(scalar_type.clone()),
                _ => BTreeMap::default(),
            };

            let common_ops = fn_operators_supported_by_all_types(scalar_type.clone());

            let chained = str_ops.into_iter().chain(common_ops);

            (
                scalar_type.clone(),
                chained.collect::<BTreeMap<String, metadata::ComparisonOperator>>(),
            )
        })
        .collect();

    metadata::ComparisonOperators(operators)
}
