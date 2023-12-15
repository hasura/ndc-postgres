//! This module exists solely to support indicating version 1 with an integer literal. Once version
//! 1 is phased out completely, this file is to be deleted and trait implementations for
//! Serialize/Deserialize/JsonSchema reverted to their derived versions.

use crate::configuration::version1;
use crate::configuration::version2;
use std::boxed::Box;
use std::fmt;

use serde::{Deserialize, Serialize};

pub use crate::configuration::{Configuration, RawConfiguration};

#[derive(Clone, Deserialize, Serialize)]
pub struct RawConfigurationCompat(serde_json::Value);

impl From<RawConfiguration> for RawConfigurationCompat {
    fn from(value: RawConfiguration) -> Self {
        let val = match value {
            RawConfiguration::Version1(v1) => {
                let mut val = serde_json::to_value(v1).unwrap();
                let obj = val.as_object_mut().unwrap();

                let mut res = serde_json::map::Map::new();
                res.insert("version".to_string(), serde_json::json!(1));
                res.append(obj);
                serde_json::value::to_value(res).unwrap()
            }
            RawConfiguration::Version2(v2) => {
                let mut val = serde_json::to_value(v2).unwrap();
                let obj = val.as_object_mut().unwrap();

                let mut res = serde_json::map::Map::new();
                res.insert("version".to_string(), serde_json::json!("2"));
                res.append(obj);
                serde_json::value::to_value(res).unwrap()
            }
        };

        RawConfigurationCompat(val)
    }
}

// Dump of derivied JsonSchema trait implementation, tweaked to put version as an integer for
// version 1.
//
// Generated with 'cargo expand --theme=gruvbox-light -p ndc-postgres --lib configuration'. This
// should be re-run whenever a new version is added (or removed entirely once version 1 is
// deprecated).

impl schemars::JsonSchema for RawConfiguration {
    fn schema_name() -> std::string::String {
        "RawConfiguration".to_owned()
    }
    fn schema_id() -> std::borrow::Cow<'static, str> {
        std::borrow::Cow::Borrowed("ndc_postgres::configuration::RawConfiguration")
    }
    fn json_schema(gen: &mut schemars::gen::SchemaGenerator) -> schemars::schema::Schema {
        {
            let schema = schemars::schema::Schema::Object(schemars::schema::SchemaObject {
                subschemas: Some(Box::new(schemars::schema::SubschemaValidation {
                    one_of: Some(<[_]>::into_vec(Box::new([
                        schemars::schema::Schema::Object(schemars::schema::SchemaObject {
                            instance_type: Some(schemars::schema::InstanceType::Object.into()),
                            object: Some(Box::new(schemars::schema::ObjectValidation {
                                properties: {
                                    let mut props = schemars::Map::new();
                                    props.insert(
                                        "version".to_owned(),
                                        schemars::schema::Schema::Object(
                                            schemars::schema::SchemaObject {
                                                instance_type: Some(
                                                    schemars::schema::InstanceType::Number.into(),
                                                ),
                                                enum_values: Some(<[_]>::into_vec(Box::new([
                                                    1.into()
                                                ]))),
                                                ..Default::default()
                                            },
                                        ),
                                    );
                                    props
                                },
                                required: {
                                    let mut required = schemars::Set::new();
                                    required.insert("version".to_owned());
                                    required
                                },
                                ..Default::default()
                            })),
                            ..Default::default()
                        })
                        .flatten(
                            <version1::RawConfiguration as schemars::JsonSchema>::json_schema(gen),
                        ),
                        schemars::schema::Schema::Object(schemars::schema::SchemaObject {
                            instance_type: Some(schemars::schema::InstanceType::Object.into()),
                            object: Some(Box::new(schemars::schema::ObjectValidation {
                                properties: {
                                    let mut props = schemars::Map::new();
                                    props.insert(
                                        "version".to_owned(),
                                        schemars::schema::Schema::Object(
                                            schemars::schema::SchemaObject {
                                                instance_type: Some(
                                                    schemars::schema::InstanceType::String.into(),
                                                ),
                                                enum_values: Some(<[_]>::into_vec(Box::new([
                                                    "2".into()
                                                ]))),
                                                ..Default::default()
                                            },
                                        ),
                                    );
                                    props
                                },
                                required: {
                                    let mut required = schemars::Set::new();
                                    required.insert("version".to_owned());
                                    required
                                },
                                ..Default::default()
                            })),
                            ..Default::default()
                        })
                        .flatten(
                            <version2::RawConfiguration as schemars::JsonSchema>::json_schema(gen),
                        ),
                    ]))),
                    ..Default::default()
                })),
                ..Default::default()
            });
            schemars::_private::apply_metadata(
                        schema,
                        schemars::schema::Metadata {
                            description: Some(
                                "Initial configuration, just enough to connect to a database and elaborate a full 'Configuration'."
                                    .to_owned(),
                            ),
                            ..Default::default()
                        },
                    )
        }
    }
}

#[derive(Debug)]
pub enum RawConfigurationCompatError {
    JsonError(serde_json::Error),
    RawConfigurationCompatError { error_message: String },
}

impl fmt::Display for RawConfigurationCompatError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            RawConfigurationCompatError::JsonError(e) => write!(f, "{e}"),
            RawConfigurationCompatError::RawConfigurationCompatError { error_message } => {
                write!(f, "RawConfiguration serialization error: {error_message}")
            }
        }
    }
}

impl From<serde_json::Error> for RawConfigurationCompatError {
    fn from(value: serde_json::Error) -> Self {
        RawConfigurationCompatError::JsonError(value)
    }
}

impl TryFrom<RawConfigurationCompat> for RawConfiguration {
    type Error = RawConfigurationCompatError;

    fn try_from(value: RawConfigurationCompat) -> Result<Self, Self::Error> {
        let version = value.0.get("version").ok_or(
            RawConfigurationCompatError::RawConfigurationCompatError {
                error_message: "Configuration data did not contain a \"version\" field."
                    .to_string(),
            },
        )?;
        match version.as_u64() {
            Some(1) => Ok(RawConfiguration::Version1(serde_json::from_value(value.0)?)),
            Some(n) => Err(RawConfigurationCompatError::RawConfigurationCompatError {
                error_message: format!(
                    "Configuration data version key was an integer literal: {n}. The only supported integer version is 1."
                ),
            }),
            None => match version.as_str() {
                Some("1") => Ok(RawConfiguration::Version1(serde_json::from_value(value.0)?)),
                Some("2") => Ok(RawConfiguration::Version2(serde_json::from_value(value.0)?)),
                Some(v) => Err(RawConfigurationCompatError::RawConfigurationCompatError{error_message:
                     format!("Configuration data version unsupported: \"{v}\". Supported versions are: 1, and \"2\".")}),
                None => Err(RawConfigurationCompatError::RawConfigurationCompatError{error_message:
                     "Configuration data version unsupported. Supported versions are: 1, and \"2\".".to_string()}),
            },
        }
    }
}
