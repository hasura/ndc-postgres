//! Internal Configuration and state for our connector.

use std::collections::BTreeSet;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor, Row};
use tracing::{info_span, Instrument};

use ndc_sdk::connector;

use query_engine_metadata::metadata;

use crate::version1;
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
    pub configure_options: ConfigureOptions,
}

impl RawConfiguration {
    pub fn empty() -> Self {
        Self {
            connection_uri: version1::ConnectionUri::Uri(version1::ResolvedSecret("".to_string())),
            pool_settings: version1::PoolSettings::default(),
            isolation_level: IsolationLevel::default(),
            metadata: metadata::Metadata::default(),
            configure_options: ConfigureOptions::default(),
        }
    }
}

/// Collection names of tables in these schemas will be appear as unqualified.
pub fn default_unqualified_schemas_for_tables() -> Vec<String> {
    vec!["public".to_string()]
}

/// Types, operators and procedures from these schemas will appear unqualified in the configuration.
pub fn default_unqualified_schemas_for_types_and_procedures() -> Vec<String> {
    vec![
        "public".to_string(),
        "pg_catalog".to_string(),
        "tiger".to_string(),
    ]
}

/// The isolation level of the transaction in which a query is executed.
#[derive(
    Debug, Clone, Copy, Default, serde::Deserialize, serde::Serialize, schemars::JsonSchema,
)]
pub enum IsolationLevel {
    /// Prevents reading data from another uncommitted transaction.
    #[default]
    ReadCommitted,
    /// Reading the same data twice is guaranteed to return the same result.
    RepeatableRead,
    /// Concurrent transactions behave identically to serializing them one at a time.
    Serializable,
}

/// Options which only influence how the configuration server updates the configuration
#[derive(Clone, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ConfigureOptions {
    /// Schemas which are excluded from introspection. The default setting will exclude the
    /// internal schemas of Postgres, Citus, Cockroach, and the PostGIS extension.
    #[serde(default = "version1::default_excluded_schemas")]
    pub excluded_schemas: Vec<String>,
    /// Deprecated alias for 'unqualifiedSchemasForTables'.
    #[serde(default)]
    // weirdly, we have to use 'skip_serializing_if' rather than 'skip_serializing', since the
    // latter causes schemars to consider the field required, in spite of the 'default' attribute.
    // If both 'unqualified_schemas' and 'unqualified_schemas_for_tables' are specified,
    // 'configure()' will merge them and check for duplicates, returning unly a
    // `unqualified_schemas_for_tables' field.
    #[serde(skip_serializing_if = "always_skip_unqualified_schemas")]
    pub unqualified_schemas: Vec<String>,
    /// The names of Tables and Views in these schemas will be returned unqualified.
    /// The default setting will set the `public` schema as unqualified.
    #[serde(default = "default_unqualified_schemas_for_tables")]
    pub unqualified_schemas_for_tables: Vec<String>,
    /// The types and procedures in these schemas will be returned unqualified.
    #[serde(default = "default_unqualified_schemas_for_types_and_procedures")]
    pub unqualified_schemas_for_types_and_procedures: Vec<String>,
    /// The mapping of comparison operator names to apply when updating the configuration
    #[serde(default = "version1::default_comparison_operator_mapping")]
    pub comparison_operator_mapping: Vec<version1::ComparisonOperatorMapping>,
    /// Which version of the generated mutation procedures to include in the schema response
    #[serde(default)]
    pub mutations_version: Option<metadata::mutations::MutationsVersion>,
    /// Which prefix functions (i.e., non-infix operators) to generate introspection metadata for.
    ///
    /// This list will accept any boolean-returning function taking two concrete scalar types as
    /// arguments.
    ///
    /// The default includes comparisons for various build-in types as well as those of PostGIS.
    #[serde(default = "default_introspect_prefix_function_comparison_operators")]
    pub introspect_prefix_function_comparison_operators: Vec<String>,
}

impl Default for ConfigureOptions {
    fn default() -> ConfigureOptions {
        ConfigureOptions {
            excluded_schemas: version1::default_excluded_schemas(),
            unqualified_schemas: vec![],
            unqualified_schemas_for_tables: default_unqualified_schemas_for_tables(),
            unqualified_schemas_for_types_and_procedures:
                default_unqualified_schemas_for_types_and_procedures(),
            comparison_operator_mapping: version1::default_comparison_operator_mapping(),
            // we'll change this to `Some(MutationsVersions::V1)` when we
            // want to "release" this behaviour
            mutations_version: None,
            introspect_prefix_function_comparison_operators:
                default_introspect_prefix_function_comparison_operators(),
        }
    }
}

/// This is a deprecated field subsumed by `unqualified_schemas_for_tables` and
/// `unqualified_schemas_for_types_and_procedures`.
/// We don't want to output it when generating the configuration.
pub fn always_skip_unqualified_schemas(_: &Vec<String>) -> bool {
    true
}

fn default_introspect_prefix_function_comparison_operators() -> Vec<String> {
    vec![
        "box_above".to_string(),
        "box_below".to_string(),
        "box_contain".to_string(),
        "box_contain_pt".to_string(),
        "box_contained".to_string(),
        "box_left".to_string(),
        "box_overabove".to_string(),
        "box_overbelow".to_string(),
        "box_overlap".to_string(),
        "box_overleft".to_string(),
        "box_overright".to_string(),
        "box_right".to_string(),
        "box_same".to_string(),
        "circle_above".to_string(),
        "circle_below".to_string(),
        "circle_contain".to_string(),
        "circle_contain_pt".to_string(),
        "circle_contained".to_string(),
        "circle_left".to_string(),
        "circle_overabove".to_string(),
        "circle_overbelow".to_string(),
        "circle_overlap".to_string(),
        "circle_overleft".to_string(),
        "circle_overright".to_string(),
        "circle_right".to_string(),
        "circle_same".to_string(),
        "contains_2d".to_string(),
        "equals".to_string(),
        "geography_overlaps".to_string(),
        "geometry_above".to_string(),
        "geometry_below".to_string(),
        "geometry_contained_3d".to_string(),
        "geometry_contains".to_string(),
        "geometry_contains_3d".to_string(),
        "geometry_contains_nd".to_string(),
        "geometry_left".to_string(),
        "geometry_overabove".to_string(),
        "geometry_overbelow".to_string(),
        "geometry_overlaps".to_string(),
        "geometry_overlaps_3d".to_string(),
        "geometry_overlaps_nd".to_string(),
        "geometry_overleft".to_string(),
        "geometry_overright".to_string(),
        "geometry_right".to_string(),
        "geometry_same".to_string(),
        "geometry_same_3d".to_string(),
        "geometry_same_nd".to_string(),
        "geometry_within".to_string(),
        "geometry_within_nd".to_string(),
        "inet_same_family".to_string(),
        "inter_lb".to_string(),
        "inter_sb".to_string(),
        "inter_sl".to_string(),
        "is_contained_2d".to_string(),
        "ishorizontal".to_string(),
        "isparallel".to_string(),
        "isperp".to_string(),
        "isvertical".to_string(),
        "jsonb_contained".to_string(),
        "jsonb_contains".to_string(),
        "jsonb_exists".to_string(),
        "jsonb_path_exists_opr".to_string(),
        "jsonb_path_match_opr".to_string(),
        "line_intersect".to_string(),
        "line_parallel".to_string(),
        "line_perp".to_string(),
        "lseg_intersect".to_string(),
        "lseg_parallel".to_string(),
        "lseg_perp".to_string(),
        "network_overlap".to_string(),
        "network_sub".to_string(),
        "network_sup".to_string(),
        "on_pb".to_string(),
        "on_pl".to_string(),
        "on_ppath".to_string(),
        "on_ps".to_string(),
        "on_sb".to_string(),
        "on_sl".to_string(),
        "overlaps_2d".to_string(),
        "path_contain_pt".to_string(),
        "path_inter".to_string(),
        "point_above".to_string(),
        "point_below".to_string(),
        "point_horiz".to_string(),
        "point_left".to_string(),
        "point_right".to_string(),
        "point_vert".to_string(),
        "poly_above".to_string(),
        "poly_below".to_string(),
        "poly_contain".to_string(),
        "poly_contain_pt".to_string(),
        "poly_contained".to_string(),
        "poly_left".to_string(),
        "poly_overabove".to_string(),
        "poly_overbelow".to_string(),
        "poly_overlap".to_string(),
        "poly_overleft".to_string(),
        "poly_overright".to_string(),
        "poly_right".to_string(),
        "poly_same".to_string(),
        "pt_contained_poly".to_string(),
        "st_3dintersects".to_string(),
        "st_contains".to_string(),
        "st_containsproperly".to_string(),
        "st_coveredby".to_string(),
        "st_covers".to_string(),
        "st_crosses".to_string(),
        "st_disjoint".to_string(),
        "st_equals".to_string(),
        "st_intersects".to_string(),
        "st_isvalid".to_string(),
        "st_orderingequals".to_string(),
        "st_overlaps".to_string(),
        "st_relatematch".to_string(),
        "st_touches".to_string(),
        "st_within".to_string(),
        "starts_with".to_string(),
        "ts_match_qv".to_string(),
        "ts_match_tq".to_string(),
        "ts_match_tt".to_string(),
        "ts_match_vq".to_string(),
        "tsq_mcontained".to_string(),
        "tsq_mcontains".to_string(),
        "xmlexists".to_string(),
        "xmlvalidate".to_string(),
        "xpath_exists".to_string(),
    ]
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

/// Construct the NDC metadata configuration by introspecting the database.
pub async fn configure(
    mut args: RawConfiguration,
) -> Result<RawConfiguration, connector::UpdateConfigurationError> {
    let version1::ConnectionUri::Uri(version1::ResolvedSecret(uri)) = &args.connection_uri;

    let mut connection = PgConnection::connect(uri.as_str())
        .instrument(info_span!("Connect to database"))
        .await
        .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?;

    // Use only 'unqualified_schemas_for_tables'.
    let mut unqualified_schemas = args
        .configure_options
        .unqualified_schemas
        .iter()
        .chain(args.configure_options.unqualified_schemas_for_tables.iter())
        .cloned()
        .collect::<Vec<String>>();

    unqualified_schemas.sort();
    unqualified_schemas.dedup();

    args.configure_options.unqualified_schemas = vec![];
    args.configure_options.unqualified_schemas_for_tables = unqualified_schemas;

    let query = sqlx::query(CONFIGURATION_QUERY)
        .bind(args.configure_options.excluded_schemas.clone())
        .bind(
            args.configure_options
                .unqualified_schemas_for_tables
                .clone(),
        )
        .bind(
            args.configure_options
                .unqualified_schemas_for_types_and_procedures
                .clone(),
        )
        .bind(
            serde_json::to_value(args.configure_options.comparison_operator_mapping.clone())
                .map_err(|e| connector::UpdateConfigurationError::Other(e.into()))?,
        )
        .bind(
            args.configure_options
                .introspect_prefix_function_comparison_operators
                .clone(),
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
        connection_uri: args.connection_uri,
        pool_settings: args.pool_settings,
        isolation_level: args.isolation_level,
        metadata: metadata::Metadata {
            tables,
            native_queries: args.metadata.native_queries,
            aggregate_functions: relevant_aggregate_functions,
            comparison_operators: relevant_comparison_operators,
            composite_types: args.metadata.composite_types.clone(),
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
        metadata::Type::ScalarType(t) => Some(t),
        metadata::Type::ArrayType(_) | metadata::Type::CompositeType(_) => None,
    }
}

/// Filter predicate for comarison operators. Preserves only comparison operators that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
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

/// Filter predicate for aggregation functions. Preserves only aggregation functions that are
/// relevant to any of the given scalar types.
///
/// This function is public to enable use in later versions that retain the same metadata types.
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
