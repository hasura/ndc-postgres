//! The part of the configuration that dictates how the rest is generated.

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use super::comparison::ComparisonOperatorMapping;

/// Options which only influence how the configuration is updated.
#[derive(Clone, PartialEq, Eq, Debug, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct IntrospectionOptions {
    /// Schemas which are excluded from introspection. The default setting will exclude the
    /// internal schemas of Postgres, Citus, Cockroach, and the PostGIS extension.
    #[serde(default = "default_excluded_schemas")]
    pub excluded_schemas: Vec<String>,
    /// The names of Tables and Views in these schemas will be returned unqualified.
    /// The default setting will set the `public` schema as unqualified.
    #[serde(default = "default_unqualified_schemas_for_tables")]
    pub unqualified_schemas_for_tables: Vec<String>,
    /// The types and procedures in these schemas will be returned unqualified.
    #[serde(default = "default_unqualified_schemas_for_types_and_procedures")]
    pub unqualified_schemas_for_types_and_procedures: Vec<String>,
    /// The mapping of comparison operator names to apply when updating the configuration
    #[serde(default = "ComparisonOperatorMapping::default_mappings")]
    pub comparison_operator_mapping: Vec<ComparisonOperatorMapping>,
    /// Which prefix functions (i.e., non-infix operators) to generate introspection metadata for.
    ///
    /// This list will accept any boolean-returning function taking two concrete scalar types as
    /// arguments.
    ///
    /// The default includes comparisons for various build-in types as well as those of PostGIS.
    #[serde(default = "default_introspect_prefix_function_comparison_operators")]
    pub introspect_prefix_function_comparison_operators: Vec<String>,
}

impl Default for IntrospectionOptions {
    fn default() -> IntrospectionOptions {
        IntrospectionOptions {
            excluded_schemas: default_excluded_schemas(),
            unqualified_schemas_for_tables: default_unqualified_schemas_for_tables(),
            unqualified_schemas_for_types_and_procedures:
                default_unqualified_schemas_for_types_and_procedures(),
            comparison_operator_mapping: ComparisonOperatorMapping::default_mappings(),
            introspect_prefix_function_comparison_operators:
                default_introspect_prefix_function_comparison_operators(),
        }
    }
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

/// Collection names of tables in these schemas will be appear as unqualified.
fn default_unqualified_schemas_for_tables() -> Vec<String> {
    vec!["public".to_string()]
}

/// Types, operators and procedures from these schemas will appear unqualified in the configuration.
fn default_unqualified_schemas_for_types_and_procedures() -> Vec<String> {
    vec![
        "public".to_string(),
        "pg_catalog".to_string(),
        "tiger".to_string(),
    ]
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
