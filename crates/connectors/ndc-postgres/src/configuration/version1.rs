//! Internal Configuration and state for our connector.
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use ndc_sdk::models::secret_or_literal_reference;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use std::collections::BTreeMap;
use thiserror::Error;

use query_engine_metadata::metadata;

const CURRENT_VERSION: u32 = 1;

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
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
    #[serde(default)]
    pub aggregate_functions: metadata::AggregateFunctions,
}

/// User configuration, elaborated from a 'RawConfiguration'.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
pub struct Configuration {
    pub config: RawConfiguration,
    #[serde(default)]
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub write_regions: Vec<RegionName>,
    #[serde(default)]
    #[serde(skip_serializing_if = "Vec::is_empty")]
    pub read_regions: Vec<RegionName>,
    #[serde(default)]
    #[serde(skip_serializing_if = "BTreeMap::is_empty")]
    /// Routing table which relates the regions the NDC may be deployed in with the regions that
    /// the database is deployed, in order of preference.
    pub region_routing: BTreeMap<HasuraRegionName, Vec<RegionName>>,
}

/// Type that accept both a single value and a list of values. Allows for a simpler format when a
/// single value is the common case.
#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
#[serde(untagged)]
pub enum SingleOrList<T> {
    Single(T),
    List(Vec<T>),
}

impl<T: Clone> SingleOrList<T> {
    fn is_empty(&self) -> bool {
        match self {
            SingleOrList::Single(_) => false,
            SingleOrList::List(l) => l.is_empty(),
        }
    }

    fn to_vec(&self) -> Vec<T> {
        match self {
            SingleOrList::Single(s) => vec![s.clone()],
            SingleOrList::List(l) => l.clone(),
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

#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
#[serde(untagged)]
pub enum ConnectionUris {
    SingleRegion(SingleOrList<ConnectionUri>),
    MultiRegion(MultipleRegionsConnectionUris),
}

pub fn single_connection_uri(connection_uri: String) -> ConnectionUris {
    ConnectionUris::SingleRegion(SingleOrList::Single(ConnectionUri(connection_uri)))
}

#[derive(Debug, Clone, PartialEq, Deserialize, Serialize, JsonSchema)]
pub struct MultipleRegionsConnectionUris {
    pub writes: BTreeMap<RegionName, SingleOrList<ConnectionUri>>,
    pub reads: BTreeMap<RegionName, SingleOrList<ConnectionUri>>,
}

/// Name of a region that the ndc may be deployed into.
#[derive(Debug, Clone, PartialOrd, PartialEq, Eq, Ord, Deserialize, Serialize, JsonSchema)]
pub struct HasuraRegionName(pub String);

impl std::fmt::Display for HasuraRegionName {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let HasuraRegionName(region) = self;
        write!(f, "{}", region)
    }
}

/// Name of a region that database servers may live in. These regions are distinct from the regions
/// the ndc can live in, and they need not be related a priori.
#[derive(Debug, Clone, PartialOrd, PartialEq, Eq, Ord, Deserialize, Serialize, JsonSchema)]
pub struct RegionName(pub String);

impl std::fmt::Display for RegionName {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        let RegionName(region) = self;
        write!(f, "{}", region)
    }
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            version: CURRENT_VERSION,
            connection_uris: ConnectionUris::SingleRegion(SingleOrList::List(vec![])),
            pool_settings: PoolSettings::default(),
            metadata: metadata::Metadata::default(),
            aggregate_functions: metadata::AggregateFunctions::default(),
        }
    }
}

/// Settings for the PostgreSQL connection pool
#[derive(Debug, Clone, PartialEq, Serialize, Deserialize, JsonSchema)]
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
        *self == PoolSettings::default()
    }
}

/// <https://hasura.io/docs/latest/api-reference/syntax-defs/#pgpoolsettings>
impl Default for PoolSettings {
    fn default() -> PoolSettings {
        PoolSettings {
            max_connections: 50,
            pool_timeout: 600,
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
    rawconfiguration: &RawConfiguration,
) -> Result<Configuration, connector::ValidateError> {
    if rawconfiguration.version != 1 {
        return Err(connector::ValidateError::ValidateError(vec![
            connector::InvalidRange {
                path: vec![connector::KeyOrIndex::Key("version".into())],
                message: format!(
                    "invalid configuration version, expected 1, got {0}",
                    rawconfiguration.version
                ),
            },
        ]));
    }

    match &rawconfiguration.connection_uris {
        ConnectionUris::SingleRegion(urls) if urls.is_empty() => {
            Err(connector::ValidateError::ValidateError(vec![
                connector::InvalidRange {
                    path: vec![connector::KeyOrIndex::Key("connection_uris".into())],
                    message: "At least one database url must be specified".to_string(),
                },
            ]))
        }
        ConnectionUris::MultiRegion(MultipleRegionsConnectionUris { reads, writes }) => {
            let reads_empty_err = if reads.is_empty() {
                vec![connector::InvalidRange {
                    path: vec![
                        connector::KeyOrIndex::Key("connection_uris".into()),
                        connector::KeyOrIndex::Key("reads".into()),
                    ],
                    message: "At least one 'reads' region must be specified".to_string(),
                }]
            } else {
                vec![]
            };
            let reads_errs = reads
                .iter()
                .flat_map(|(RegionName(region), urls)| {
                    if urls.is_empty() {
                        vec![connector::InvalidRange {
                            path: vec![
                                connector::KeyOrIndex::Key("connection_uris".into()),
                                connector::KeyOrIndex::Key("reads".into()),
                                connector::KeyOrIndex::Key(region.into()),
                            ],
                            message: "At least one database url must be specified".to_string(),
                        }]
                    } else {
                        vec![]
                    }
                })
                .collect::<Vec<connector::InvalidRange>>();
            let writes_errs = writes
                .iter()
                .flat_map(|(RegionName(region), urls)| {
                    if urls.is_empty() {
                        vec![connector::InvalidRange {
                            path: vec![
                                connector::KeyOrIndex::Key("connection_uris".into()),
                                connector::KeyOrIndex::Key("writes".into()),
                                connector::KeyOrIndex::Key(region.into()),
                            ],
                            message: "At least one database url must be specified".to_string(),
                        }]
                    } else {
                        vec![]
                    }
                })
                .collect::<Vec<connector::InvalidRange>>();

            let mut errs = vec![];

            errs.extend(reads_empty_err);
            errs.extend(reads_errs);
            errs.extend(writes_errs);

            if !errs.is_empty() {
                Err(connector::ValidateError::ValidateError(errs))
            } else {
                Ok(())
            }
        }
        _ => Ok(()),
    }?;

    // Collect the regions that have been specified, to enable geo-localised deployments.
    let (write_regions, read_regions) = match &rawconfiguration.connection_uris {
        ConnectionUris::MultiRegion(MultipleRegionsConnectionUris { writes, reads }) => (
            writes.keys().cloned().collect::<Vec<_>>(),
            reads.keys().cloned().collect::<Vec<_>>(),
        ),
        ConnectionUris::SingleRegion(_) => (vec![], vec![]),
    };

    // region routing is provided by the metadata build service before the
    // agent is deployed, so we don't need to try and calculate it here.
    let region_routing = BTreeMap::new();

    Ok(Configuration {
        config: rawconfiguration.clone(),
        write_regions,
        read_regions,
        region_routing,
    })
}

/// Select the first available connection uri. Suitable for when hasura regions are not yet mapped
/// to application regions.
pub fn select_first_connection_url(urls: &ConnectionUris) -> String {
    match &urls {
        ConnectionUris::SingleRegion(urls) => urls.to_vec()[0].clone(),
        ConnectionUris::MultiRegion(MultipleRegionsConnectionUris { reads, .. }) => reads
            .first_key_value()
            .expect("No regions are defined (Guarded by validate_raw_configuration)")
            .1
            .to_vec()[0]
            .clone(),
    }
    .0
}

/// Select a single connection uri to use, given an application region.
///
/// Currently we simply select the first specified connection uri, and in the case of multi-region,
/// only the first from the list of read-only servers.
///
/// Eventually we want to support load-balancing between multiple read-replicas within a region,
/// and then we'll be passing the full list of connection uris to the connection pool.
pub fn select_connection_url(
    urls: &ConnectionUris,
    region_routing: &BTreeMap<HasuraRegionName, Vec<RegionName>>,
) -> Result<String, ConfigurationError> {
    Ok(match &urls {
        ConnectionUris::SingleRegion(urls) => urls.to_vec()[0].clone(),
        ConnectionUris::MultiRegion(MultipleRegionsConnectionUris { reads, .. }) => {
            let region = route_region(region_routing)?;
            let urls = reads
                .get(region)
                .ok_or_else(|| ConfigurationError::UnableToMapApplicationRegion(region.clone()))?;
            urls.to_vec()[0].clone()
        }
    }
    .0)
}

/// Select the database region to use, observing the DDN_REGION environment variable.
pub fn route_region(
    region_routing: &BTreeMap<HasuraRegionName, Vec<RegionName>>,
) -> Result<&RegionName, ConfigurationError> {
    let ddn_region = HasuraRegionName(
        std::env::var("DDN_REGION").or(Err(ConfigurationError::DdnRegionIsNotSet))?,
    );
    let connection_uris = &region_routing
        .get(&ddn_region)
        .ok_or_else(|| ConfigurationError::UnableToMapHasuraRegion(ddn_region.clone()))?;

    Ok(&connection_uris[0])
}

/// Construct the deployment configuration by introspecting the database.
pub async fn configure(
    args: &RawConfiguration,
    configuration_query: &str,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    let url = select_first_connection_url(&args.connection_uris);

    let mut connection = PgConnection::connect(url.as_str())
        .instrument(info_span!("Connect to database"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let row = connection
        .fetch_one(configuration_query)
        .instrument(info_span!("Run introspection query"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let tables: metadata::TablesInfo = serde_json::from_value(row.get(0))
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    let aggregate_functions: metadata::AggregateFunctions = serde_json::from_value(row.get(1))
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    Ok(RawConfiguration {
        version: 1,
        connection_uris: args.connection_uris.clone(),
        pool_settings: args.pool_settings.clone(),
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries.clone(),
        },
        aggregate_functions,
    })
}

/// Configuration interpretation errors.
#[derive(Debug, Error)]
pub enum ConfigurationError {
    #[error("error mapping hasura region to application region: {0}")]
    UnableToMapHasuraRegion(HasuraRegionName),
    #[error("error mapping application region to connection uris: {0}")]
    UnableToMapApplicationRegion(RegionName),
    #[error("DDN_REGION is not set, but is required for multi-region configuration")]
    DdnRegionIsNotSet,
}
