//! Helpers for the comparison operators configuration.

use super::database::OperatorKind;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Define the names that comparison operators will be exposed as by the automatic introspection.
#[derive(Debug, PartialEq, Eq, Clone, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ComparisonOperatorMapping {
    /// The name of the operator as defined by the database
    pub operator_name: String,
    /// The name the operator will appear under in the exposed API
    pub exposed_name: String,
    /// Equal, In or Custom.
    pub operator_kind: OperatorKind,
}

impl ComparisonOperatorMapping {
    /// The default comparison operator mappings apply the aliases that are used in graphql-engine v2.
    pub fn default_mappings() -> Vec<ComparisonOperatorMapping> {
        vec![
            // Common mappings
            ComparisonOperatorMapping {
                operator_name: "=".to_string(),
                exposed_name: "_eq".to_string(),
                operator_kind: OperatorKind::Equal,
            },
            ComparisonOperatorMapping {
                operator_name: "<=".to_string(),
                exposed_name: "_lte".to_string(),
                operator_kind: OperatorKind::LessThanOrEqual,
            },
            ComparisonOperatorMapping {
                operator_name: ">".to_string(),
                exposed_name: "_gt".to_string(),
                operator_kind: OperatorKind::GreaterThan,
            },
            ComparisonOperatorMapping {
                operator_name: ">=".to_string(),
                exposed_name: "_gte".to_string(),
                operator_kind: OperatorKind::GreaterThanOrEqual,
            },
            ComparisonOperatorMapping {
                operator_name: "<".to_string(),
                exposed_name: "_lt".to_string(),
                operator_kind: OperatorKind::LessThan,
            },
            ComparisonOperatorMapping {
                operator_name: "<>".to_string(),
                exposed_name: "_neq".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            // Preferred by CockroachDB
            ComparisonOperatorMapping {
                operator_name: "!=".to_string(),
                exposed_name: "_neq".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "LIKE".to_string(),
                exposed_name: "_like".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "NOT LIKE".to_string(),
                exposed_name: "_nlike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "ILIKE".to_string(),
                exposed_name: "_ilike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "NOT ILIKE".to_string(),
                exposed_name: "_nilike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "SIMILAR TO".to_string(),
                exposed_name: "_similar".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "NOT SIMILAR TO".to_string(),
                exposed_name: "_nsimilar".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            // Preferred by Postgres
            ComparisonOperatorMapping {
                operator_name: "~~".to_string(),
                exposed_name: "_like".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "!~~".to_string(),
                exposed_name: "_nlike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "~~*".to_string(),
                exposed_name: "_ilike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "!~~*".to_string(),
                exposed_name: "_nilike".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "~".to_string(),
                exposed_name: "_regex".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "!~".to_string(),
                exposed_name: "_nregex".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "~*".to_string(),
                exposed_name: "_iregex".to_string(),
                operator_kind: OperatorKind::Custom,
            },
            ComparisonOperatorMapping {
                operator_name: "!~*".to_string(),
                exposed_name: "_niregex".to_string(),
                operator_kind: OperatorKind::Custom,
            },
        ]
    }
}
