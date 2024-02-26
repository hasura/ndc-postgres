//! Infrastructure for parsing configuration which refers to an environment.

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

/// A configuration environment, used to supply variables when loading configuration.
pub trait Environment {
    fn read(&self, variable: &Variable) -> Result<Value, Error>;
}

/// The name of an an environment variable.
#[derive(Clone, PartialEq, Eq, Hash, Deserialize, Serialize, JsonSchema)]
pub struct Variable(String);

impl std::fmt::Debug for Variable {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{:?}", self.0)
    }
}

impl std::fmt::Display for Variable {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", self.0)
    }
}

impl From<String> for Variable {
    fn from(value: String) -> Self {
        Self(value)
    }
}

impl From<&str> for Variable {
    fn from(value: &str) -> Self {
        Self(value.to_string())
    }
}

impl Variable {
    /// Construct a new variable.
    pub fn new(value: String) -> Self {
        Self(value)
    }
}

/// A value stored in the environment.
type Value = String;

/// Errors that can occur on reading from an environment.
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error("variable was not present: {0:?}")]
    VariableNotPresent(Variable),
    #[error("value is not Unicode: {0:?}")]
    NonUnicodeValue(std::ffi::OsString),
}

/// If a value is an environment, so is its reference.
impl<T: Environment> Environment for &T {
    fn read(&self, variable: &Variable) -> Result<Value, Error> {
        <T as Environment>::read(*self, variable)
    }
}

/// HashMaps can be treated as environments for testing.
impl Environment for std::collections::HashMap<Variable, Value> {
    fn read(&self, variable: &Variable) -> Result<Value, Error> {
        self.get(variable)
            .cloned()
            .ok_or_else(|| Error::VariableNotPresent(variable.clone()))
    }
}

/// An empty environment, used when you don't need one.
pub struct EmptyEnvironment;

impl Environment for EmptyEnvironment {
    fn read(&self, variable: &Variable) -> Result<Value, Error> {
        Err(Error::VariableNotPresent(variable.clone()))
    }
}

/// An environment populated from the process' environment variables.
pub struct ProcessEnvironment;

impl Environment for ProcessEnvironment {
    fn read(&self, variable: &Variable) -> Result<Value, Error> {
        std::env::var(&variable.0).map_err(|error| match error {
            std::env::VarError::NotPresent => Error::VariableNotPresent(variable.clone()),
            std::env::VarError::NotUnicode(value) => Error::NonUnicodeValue(value),
        })
    }
}
