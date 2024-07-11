//! Metadata information regarding native queries.

// This code was copied from a different place that predated the introduction of clippy to the
// project. Therefore we disregard certain clippy lints:
#![allow(clippy::wrong_self_convention)]
use super::database::*;

use ndc_sdk::models;
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::fs;

// Types

/// Metadata information of native queries.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueries(pub BTreeMap<models::CollectionName, NativeQueryInfo>);

/// Information about a Native Query
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueryInfo {
    /// SQL expression to use for the Native Query.
    /// We can interpolate values using `{{variable_name}}` syntax,
    /// such as `SELECT * FROM authors WHERE name = {{author_name}}`
    pub sql: NativeQuerySqlEither,
    /// Columns returned by the Native Query
    pub columns: BTreeMap<models::FieldName, ReadOnlyColumnInfo>,
    #[serde(default)]
    /// Names and types of arguments that can be passed to this Native Query
    pub arguments: BTreeMap<models::ArgumentName, ReadOnlyColumnInfo>,
    #[serde(default)]
    pub description: Option<String>,
    /// True if this native query mutates the database
    #[serde(skip_serializing_if = "std::ops::Not::not")]
    #[serde(default)]
    pub is_procedure: bool,
}

/// Information about a native query column.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ReadOnlyColumnInfo {
    pub name: String,
    pub r#type: Type,
    #[serde(default)]
    pub nullable: Nullable,
    #[serde(default)]
    pub description: Option<String>,
}

/// This type contains information that still needs to be resolved.
/// After deserializing, we expect the value to be "external",
/// and after a subsequent step where we read from files,
/// they should all be converted to NativeQuerySql.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
#[serde(from = "NativeQuerySqlExternal")]
#[serde(into = "NativeQuerySqlExternal")]
pub enum NativeQuerySqlEither {
    NativeQuerySql(NativeQuerySql),
    NativeQuerySqlExternal(NativeQuerySqlExternal),
}

impl NativeQuerySqlEither {
    /// Extract the actual native query sql from this type.
    /// If this happens before reading a file, it will fail with an error.
    pub fn sql(self) -> Result<NativeQueryParts, String> {
        match self {
            NativeQuerySqlEither::NativeQuerySql(
                NativeQuerySql::Inline { sql } | NativeQuerySql::FromFile { sql, .. },
            ) => Ok(sql),
            NativeQuerySqlEither::NativeQuerySqlExternal(
                NativeQuerySqlExternal::Inline { inline }
                | NativeQuerySqlExternal::InlineUntagged(inline),
            ) => Ok(inline),
            NativeQuerySqlEither::NativeQuerySqlExternal(NativeQuerySqlExternal::File {
                ..
            }) => Err("not all native query sql files were read during parsing".to_string()),
        }
    }
}

impl From<NativeQuerySqlExternal> for NativeQuerySqlEither {
    /// We use this to deserialize.
    fn from(value: NativeQuerySqlExternal) -> Self {
        NativeQuerySqlEither::NativeQuerySqlExternal(value)
    }
}

impl From<NativeQuerySqlEither> for NativeQuerySqlExternal {
    /// We use this to serialize.
    fn from(value: NativeQuerySqlEither) -> Self {
        match value {
            NativeQuerySqlEither::NativeQuerySqlExternal(value) => value,
            NativeQuerySqlEither::NativeQuerySql(value) => value.into(),
        }
    }
}

/// A Native Query SQL after file resolution.
/// This is the underlying type of the `NativeQuerySqlEither` variant with the same name
/// that is expected in the metadata when translating requests. A subsequent phase after de-serializing
/// Should convert NativeQuerySqlExternal values to values of this type.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum NativeQuerySql {
    FromFile {
        file: std::path::PathBuf,
        sql: NativeQueryParts,
    },
    Inline {
        sql: NativeQueryParts,
    },
}

impl NativeQuerySql {
    /// Extract the native query sql expression.
    pub fn sql(self) -> NativeQueryParts {
        match self {
            NativeQuerySql::Inline { sql } | NativeQuerySql::FromFile { sql, .. } => sql,
        }
    }
}

// We use this type as an intermediate representation for serialization/deserialization
// of native query sql location/expression.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
#[serde(untagged)]
/// Native Query SQL location.
pub enum NativeQuerySqlExternal {
    /// Refer to an external Native Query SQL file.
    File {
        /// Relative path to a sql file.
        file: std::path::PathBuf,
    },
    /// Inline Native Query SQL string.
    Inline {
        /// An inline Native Query SQL string.
        inline: NativeQueryParts,
    },
    InlineUntagged(
        /// An inline Native Query SQL string.
        NativeQueryParts,
    ),
}

impl NativeQuerySqlEither {
    /// Convert an external native query sql type to NativeQuerySql,
    /// including reading files from disk.
    pub fn from_external(
        &self,
        absolute_configuration_directory: &std::path::Path,
    ) -> Result<NativeQuerySql, String> {
        match self {
            // unexpected we get this, but ok.
            NativeQuerySqlEither::NativeQuerySql(value) => Ok(value.clone()),
            NativeQuerySqlEither::NativeQuerySqlExternal(external) => match external {
                NativeQuerySqlExternal::File { file } => {
                    parse_native_query_from_file(absolute_configuration_directory, file)
                }
                NativeQuerySqlExternal::Inline { inline }
                | NativeQuerySqlExternal::InlineUntagged(inline) => Ok(NativeQuerySql::Inline {
                    sql: inline.clone(),
                }),
            },
        }
    }
}

impl From<NativeQuerySql> for NativeQuerySqlExternal {
    /// used for deserialization.
    fn from(value: NativeQuerySql) -> Self {
        match value {
            NativeQuerySql::Inline { sql } => NativeQuerySqlExternal::Inline { inline: sql },
            NativeQuerySql::FromFile { file, .. } => NativeQuerySqlExternal::File { file },
        }
    }
}

impl JsonSchema for NativeQuerySqlEither {
    fn schema_name() -> String {
        "NativeQuerySql".to_string()
    }

    fn json_schema(gen: &mut schemars::gen::SchemaGenerator) -> schemars::schema::Schema {
        NativeQuerySqlExternal::json_schema(gen)
    }
}

/// A part of a Native Query text, either raw text or a parameter.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum NativeQueryPart {
    /// A raw text part
    Text(String),
    /// A parameter
    Parameter(smol_str::SmolStr),
}

/// A Native Query SQL parts after parsing.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(from = "String")]
#[serde(into = "String")]
pub struct NativeQueryParts(pub Vec<NativeQueryPart>);

impl From<String> for NativeQueryParts {
    /// Used for de-serialization.
    fn from(value: String) -> Self {
        parse_native_query(&value)
    }
}

impl From<NativeQueryParts> for String {
    /// Used for serialization.
    fn from(value: NativeQueryParts) -> Self {
        let mut sql: String = String::new();
        for part in &value.0 {
            match part {
                NativeQueryPart::Text(text) => {
                    sql.push_str(text);
                }
                NativeQueryPart::Parameter(param) => {
                    sql.push_str("{{");
                    sql.push_str(param);
                    sql.push_str("}}");
                }
            }
        }
        sql
    }
}

impl JsonSchema for NativeQueryParts {
    fn schema_name() -> String {
        "InlineNativeQuerySql".to_string()
    }

    fn json_schema(gen: &mut schemars::gen::SchemaGenerator) -> schemars::schema::Schema {
        String::json_schema(gen)
    }
}

// Parsing

/// Read a file a parse it into native query parts.
pub fn parse_native_query_from_file(
    absolute_configuration_directory: &std::path::Path,
    file: &std::path::Path,
) -> Result<NativeQuerySql, String> {
    let contents: String = match fs::read_to_string(absolute_configuration_directory.join(file)) {
        Ok(ok) => Ok(ok),
        Err(err) => Err(format!("{}: {}", file.display(), err)),
    }?;
    let sql = parse_native_query(&contents);
    Ok(NativeQuerySql::FromFile {
        file: file.to_path_buf(),
        sql,
    })
}

/// Parse a native query into parts where variables have the syntax `{{<variable>}}`.
fn parse_native_query(string: &str) -> NativeQueryParts {
    let vec: Vec<Vec<NativeQueryPart>> = string
        .split("{{")
        .map(|part| match part.split_once("}}") {
            None => vec![NativeQueryPart::Text(part.to_string())],
            Some((var, text)) => {
                if text.is_empty() {
                    vec![NativeQueryPart::Parameter(var.into())]
                } else {
                    vec![
                        NativeQueryPart::Parameter(var.into()),
                        NativeQueryPart::Text(text.to_string()),
                    ]
                }
            }
        })
        .collect();
    NativeQueryParts(vec.concat())
}

// tests

#[cfg(test)]
mod tests {
    use super::{parse_native_query, NativeQueryPart, NativeQueryParts, NativeQuerySqlExternal};

    #[test]
    fn no_parameters() {
        assert_eq!(
            parse_native_query("select 1"),
            NativeQueryParts(vec![NativeQueryPart::Text("select 1".to_string())])
        );
    }

    #[test]
    fn one_parameter() {
        assert_eq!(
            parse_native_query("select * from t where {{name}} = name"),
            NativeQueryParts(vec![
                NativeQueryPart::Text("select * from t where ".to_string()),
                NativeQueryPart::Parameter("name".into()),
                NativeQueryPart::Text(" = name".to_string()),
            ])
        );
    }

    #[test]
    fn multiple_parameters() {
        assert_eq!(
            parse_native_query("select * from t where id = {{id}} and {{name}} = {{other_name}}"),
            NativeQueryParts(vec![
                NativeQueryPart::Text("select * from t where id = ".to_string()),
                NativeQueryPart::Parameter("id".into()),
                NativeQueryPart::Text(" and ".to_string()),
                NativeQueryPart::Parameter("name".into()),
                NativeQueryPart::Text(" = ".to_string()),
                NativeQueryPart::Parameter("other_name".into()),
            ])
        );
    }

    #[test]
    fn one_parameter_and_curly_text() {
        assert_eq!(
            parse_native_query("select * from t where {{name}} = '{name}'"),
            NativeQueryParts(vec![
                NativeQueryPart::Text("select * from t where ".to_string()),
                NativeQueryPart::Parameter("name".into()),
                NativeQueryPart::Text(" = '{name}'".to_string()),
            ])
        );
    }

    #[test]
    fn parse_inline_untagged() {
        assert_eq!(
            serde_json::from_str::<NativeQuerySqlExternal>(r#""select 1""#).unwrap(),
            NativeQuerySqlExternal::InlineUntagged(NativeQueryParts(vec![NativeQueryPart::Text(
                "select 1".to_string()
            )]))
        );
    }

    #[test]
    fn parse_inline_tagged() {
        assert_eq!(
            serde_json::from_str::<NativeQuerySqlExternal>(r#"{ "inline": "select 1" }"#).unwrap(),
            NativeQuerySqlExternal::Inline {
                inline: NativeQueryParts(vec![NativeQueryPart::Text("select 1".to_string())])
            }
        );
    }
}
