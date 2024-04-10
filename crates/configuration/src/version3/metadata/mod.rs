//! Metadata information regarding the database and tracked information.

pub mod database;
pub mod mutations;
pub mod native_queries;

use std::collections::BTreeSet;

// re-export without modules
pub use database::*;
pub use native_queries::*;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Metadata information.
#[derive(Clone, PartialEq, Eq, Debug, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Metadata {
    #[serde(default)]
    pub tables: TablesInfo,
    #[serde(default)]
    pub composite_types: CompositeTypes,
    #[serde(default)]
    pub native_queries: NativeQueries,
    #[serde(default)]
    pub aggregate_functions: AggregateFunctions,
    #[serde(default)]
    pub comparison_operators: ComparisonOperators,
    #[serde(default)]
    pub type_representations: TypeRepresentations,
    #[serde(skip)]
    pub occurring_scalar_types: BTreeSet<ScalarType>,
}
