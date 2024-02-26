use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

use crate::environment;

// Configuration type for values that can come from secrets. That format includes both literal
// values as well as symbolic references to secrets.
#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize, JsonSchema)]
#[serde(untagged, rename_all = "camelCase")]
pub enum Secret {
    Plain(String),
    FromEnvironment { variable: environment::Variable },
}

// This conversion is useful for testing.
impl From<String> for Secret {
    fn from(value: String) -> Self {
        Self::Plain(value)
    }
}

impl From<&str> for Secret {
    fn from(value: &str) -> Self {
        Self::Plain(value.to_string())
    }
}
