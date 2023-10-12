//! Metadata information regarding the database and tracked information.

pub mod database;
pub mod native_queries;

// re-export without modules
pub use database::*;
pub use native_queries::*;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Metadata information.
#[derive(Debug, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Metadata {
    #[serde(default)]
    pub tables: TablesInfo,
    #[serde(default)]
    pub native_queries: NativeQueries,
    #[serde(default)]
    pub aggregate_functions: AggregateFunctions,
    #[serde(default)]
    pub comparison_operators: ComparisonOperators,
}
