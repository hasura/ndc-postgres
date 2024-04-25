//! Metadata information regarding the database and tracked information.

pub mod database;
pub mod mutations;
pub mod native_queries;

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
    pub scalar_types: ScalarTypes,
    #[serde(default)]
    pub composite_types: CompositeTypes,
    #[serde(default)]
    pub native_queries: NativeQueries,
}
