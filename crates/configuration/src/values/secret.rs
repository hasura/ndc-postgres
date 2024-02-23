use serde::{Deserialize, Serialize};

use ndc_sdk::secret::{SecretValue, SecretValueImpl};

// Configuration type for values that can come from secrets. That format includes both literal
// values as well as symbolic references to secrets.
//
// At this point we should only ever see resolved secrets, which this type captures.
#[derive(Debug, Clone, Deserialize, Serialize)]
#[serde(try_from = "SecretValue")]
#[serde(into = "SecretValue")]
pub struct ResolvedSecret(pub String);

impl TryFrom<SecretValue> for ResolvedSecret {
    fn try_from(value: SecretValue) -> Result<Self, Self::Error> {
        match value.0 {
            SecretValueImpl::Value(v) => Ok(ResolvedSecret(v)),
            SecretValueImpl::StringValueFromSecret(secret) => {
                Err(format!("Unresolved secret: {}", secret))
            }
        }
    }

    type Error = String;
}

impl From<ResolvedSecret> for SecretValue {
    fn from(value: ResolvedSecret) -> SecretValue {
        SecretValue(SecretValueImpl::Value(value.0))
    }
}
