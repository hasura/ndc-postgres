use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use super::Secret;

#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUri {
    Uri(Secret),
}

impl From<String> for ConnectionUri {
    fn from(value: String) -> Self {
        Self::Uri(value.into())
    }
}

impl From<&str> for ConnectionUri {
    fn from(value: &str) -> Self {
        Self::from(value.to_string())
    }
}
