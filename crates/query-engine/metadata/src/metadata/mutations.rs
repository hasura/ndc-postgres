//! Generated mutations-related metadata information.

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// Which version of the generated mutations will be included in the schema
#[derive(Debug, PartialEq, Eq, Clone, Copy, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum MutationsVersion {
    V1,
    VeryExperimentalWip,
}
