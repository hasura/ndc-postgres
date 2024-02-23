use serde::{Deserialize, Serialize};

use super::ResolvedSecret;

#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUri {
    Uri(ResolvedSecret),
}

impl From<String> for ConnectionUri {
    fn from(value: String) -> Self {
        Self::Uri(ResolvedSecret(value))
    }
}

impl From<&str> for ConnectionUri {
    fn from(value: &str) -> Self {
        Self::from(value.to_string())
    }
}
