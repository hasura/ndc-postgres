//! Generated mutations-related metadata information.

use serde::{Deserialize, Serialize};

/// Which version of the generated mutations will be included in the schema
#[derive(Debug, Clone, Copy, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub enum MutationsVersion {
    V1,
}
