//! Internal Configuration and state for our connector.
use tracing::{info_span, Instrument};

use ndc_sdk::connector;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use std::collections::BTreeSet;

use query_engine_metadata::metadata;

use crate::configuration::version1;
use crate::configuration::IsolationLevel;

pub use version1::{ConnectionUri, PoolSettings, ResolvedSecret};

const CONFIGURATION_QUERY: &str = include_str!("version2.sql");

/// Initial configuration, just enough to connect to a database and elaborate a full
/// 'Configuration'.
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct RawConfiguration {
    // Connection string for a Postgres-compatible database
    pub connection_uri: version1::ConnectionUri,
    #[serde(skip_serializing_if = "version1::PoolSettings::is_default")]
    #[serde(default)]
    pub pool_settings: version1::PoolSettings,
    #[serde(default)]
    pub isolation_level: IsolationLevel,
    #[serde(default)]
    pub metadata: metadata::Metadata,
    #[serde(default)]
    pub configure_options: version1::ConfigureOptions,
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            connection_uri: version1::ConnectionUri::Uri(version1::ResolvedSecret("".to_string())),
            pool_settings: version1::PoolSettings::default(),
            isolation_level: IsolationLevel::default(),
            metadata: metadata::Metadata::default(),
            configure_options: version1::ConfigureOptions::default(),
        }
    }
}

/// Validate the user configuration.
pub async fn validate_raw_configuration(
    config: RawConfiguration,
) -> Result<RawConfiguration, connector::ValidateError> {
    match &config.connection_uri {
        version1::ConnectionUri::Uri(version1::ResolvedSecret(uri)) if uri.is_empty() => {
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
    let version1::ConnectionUri::Uri(version1::ResolvedSecret(uri)) = &args.connection_uri;

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
        version1::filter_comparison_operators(&scalar_types, comparison_operators);
    let relevant_aggregate_functions =
        version1::filter_aggregate_functions(&scalar_types, aggregate_functions);

    Ok(RawConfiguration {
        connection_uri: args.connection_uri,
        pool_settings: args.pool_settings,
        isolation_level: args.isolation_level,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
        },
        configure_options: args.configure_options,
    })
}

/// Collect all the types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via version2.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
) -> BTreeSet<metadata::ScalarType> {
    let tables_column_types = tables.0.values().flat_map(|v| {
        v.columns
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    let native_queries_column_types = native_queries.0.values().flat_map(|v| {
        v.columns
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    let native_queries_arguments_types = native_queries.0.values().flat_map(|v| {
        v.arguments
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .collect::<BTreeSet<metadata::ScalarType>>()
}

/// Filter predicate that only keeps scalar types.
fn some_scalar_type(typ: metadata::Type) -> Option<metadata::ScalarType> {
    match typ {
        metadata::Type::ArrayType(_) => None,
        metadata::Type::ScalarType(t) => Some(t),
    }
}
