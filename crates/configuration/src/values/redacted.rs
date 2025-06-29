use serde::Deserialize;

/// A struct use to store sensitive information in configuration
/// If printed out for any reason, will redact the inner value
/// While we should not intentionally print out this information anyways, this is more of a safety measure that cannot hurt
/// This also helps us mark the sensitive nature of the value.
#[derive(Clone, PartialEq, Eq, PartialOrd, Ord, Deserialize)]
pub struct Redacted<T>(T);

impl<T> Redacted<T> {
    pub fn new(value: T) -> Self {
        Self(value)
    }

    pub fn into_inner(self) -> T {
        self.0
    }

    pub fn inner(&self) -> &T {
        &self.0
    }
}

impl<T> std::fmt::Debug for Redacted<T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.write_str("[REDACTED]")
    }
}
