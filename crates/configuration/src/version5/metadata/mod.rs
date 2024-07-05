//! Metadata information regarding the database and tracked information.

pub mod database;
pub mod mutations;
pub mod native_operations;

// re-export without modules
pub use database::*;
pub use native_operations::*;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Metadata information.
#[derive(Clone, PartialEq, Eq, Debug, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct Metadata {
    #[serde(default)]
    pub tables: TablesInfo,
    #[serde(default)]
    pub types: Types,
    #[serde(default)]
    pub native_operations: NativeOperations,
}
