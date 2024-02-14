use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use ndc_sdk::secret::SecretValue;

use super::ResolvedSecret;

#[derive(Debug, Clone, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum ConnectionUri {
    Uri(#[schemars(with = "SecretValue")] ResolvedSecret),
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
