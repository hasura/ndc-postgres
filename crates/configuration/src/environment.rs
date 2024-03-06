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
pub type Value = String;

/// Errors that can occur on reading from an environment.
#[derive(Debug, PartialEq, thiserror::Error)]
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
pub type FixedEnvironment = std::collections::HashMap<Variable, Value>;

impl Environment for FixedEnvironment {
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

pub struct JoinEnvironments<A: Environment, B: Environment> {
    a: A,
    b: B,
}

impl<A: Environment, B: Environment> JoinEnvironments<A, B> {
    pub fn new(a: A, b: B) -> Self {
        Self { a, b }
    }
}

impl<A: Environment, B: Environment> Environment for JoinEnvironments<A, B> {
    fn read(&self, variable: &Variable) -> Result<Value, Error> {
        self.a.read(variable).or_else(|_| self.b.read(variable))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_fixed_environment_reads_a_present_value() {
        let environment = FixedEnvironment::from([("THING".into(), "one".into())]);
        let variable = "THING".into();

        let value = environment.read(&variable);

        assert_eq!(value, Ok("one".to_string()));
    }

    #[test]
    fn test_fixed_environment_does_not_manufacture_values() {
        let environment = FixedEnvironment::from([("WHAT".into(), "yes".into())]);
        let variable = "ANOTHER_THING".into();

        let value = environment.read(&variable);

        assert_eq!(value, Err(Error::VariableNotPresent(variable)));
    }

    #[test]
    fn test_joining_an_environment_looks_in_the_first_one() {
        let environment = JoinEnvironments::new(
            FixedEnvironment::from([("HELLO".into(), "hallo".into())]),
            FixedEnvironment::from([("GOODBYE".into(), "tschuess".into())]),
        );
        let variable = "HELLO".into();

        let value = environment.read(&variable);

        assert_eq!(value, Ok("hallo".to_string()));
    }

    #[test]
    fn test_joining_an_environment_looks_in_the_second_one() {
        let environment = JoinEnvironments::new(
            FixedEnvironment::from([("HELLO".into(), "bon journo".into())]),
            FixedEnvironment::from([("GOODBYE".into(), "ciao".into())]),
        );
        let variable = "GOODBYE".into();

        let value = environment.read(&variable);

        assert_eq!(value, Ok("ciao".to_string()));
    }

    #[test]
    fn test_joining_an_environment_favors_the_first_one() {
        let environment = JoinEnvironments::new(
            FixedEnvironment::from([("HELLO".into(), "bonjour".into())]),
            FixedEnvironment::from([("HELLO".into(), "grueezi".into())]),
        );
        let variable = "HELLO".into();

        let value = environment.read(&variable);

        assert_eq!(value, Ok("bonjour".to_string()));
    }

    #[test]
    fn test_joining_an_environment_eventually_gives_up() {
        let environment = JoinEnvironments::new(
            FixedEnvironment::from([("HELLO".into(), "bonjour".into())]),
            FixedEnvironment::from([("HELLO".into(), "grueezi".into())]),
        );
        let variable = "GOODBYE".into();

        let value = environment.read(&variable);

        assert_eq!(value, Err(Error::VariableNotPresent(variable)));
    }
}
