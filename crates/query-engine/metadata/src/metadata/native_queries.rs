//! Metadata information regarding native queries.

use super::database::*;

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::fs;

// Types

/// Metadata information of native queries.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueries(pub BTreeMap<String, NativeQueryInfo>);

/// Information about a Native Query
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct NativeQueryInfo {
    /// SQL expression to use for the Native Query.
    /// We can interpolate values using `{{variable_name}}` syntax,
    /// such as `SELECT * FROM authors WHERE name = {{author_name}}`
    pub sql: NativeQuerySql,
    /// Columns returned by the Native Query
    pub columns: BTreeMap<String, ReadOnlyColumnInfo>,
    #[serde(default)]
    /// Names and types of arguments that can be passed to this Native Query
    pub arguments: BTreeMap<String, ReadOnlyColumnInfo>,
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

/// A Native Query SQL after parsing.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(try_from = "NativeQuerySqlExternal")]
#[serde(into = "NativeQuerySqlExternal")]
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
    pub fn sql(self) -> NativeQueryParts {
        match self {
            NativeQuerySql::Inline { sql } => sql,
            NativeQuerySql::FromFile { sql, .. } => sql,
        }
    }
}

// We use this type as an intermediate representation for serialization/deserialization
// of a NativeQuerySql.
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
    InlineNaked(
        /// An inline Native Query SQL string.
        NativeQueryParts,
    ),
}

impl TryFrom<NativeQuerySqlExternal> for NativeQuerySql {
    type Error = String;

    fn try_from(value: NativeQuerySqlExternal) -> Result<Self, Self::Error> {
        match value {
            NativeQuerySqlExternal::File { file } => parse_native_query_from_file(file),
            NativeQuerySqlExternal::Inline { inline } => Ok(NativeQuerySql::Inline { sql: inline }),
            NativeQuerySqlExternal::InlineNaked(inline) => {
                Ok(NativeQuerySql::Inline { sql: inline })
            }
        }
    }
}

impl Into<NativeQuerySqlExternal> for NativeQuerySql {
    fn into(self) -> NativeQuerySqlExternal {
        match self {
            NativeQuerySql::Inline { sql } => NativeQuerySqlExternal::Inline { inline: sql },
            NativeQuerySql::FromFile { file, .. } => NativeQuerySqlExternal::File { file },
        }
    }
}

impl JsonSchema for NativeQuerySql {
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
    Parameter(String),
}

/// A Native Query SQL parts after parsing.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
#[serde(from = "String")]
#[serde(into = "String")]
pub struct NativeQueryParts(pub Vec<NativeQueryPart>);

impl From<String> for NativeQueryParts {
    fn from(value: String) -> Self {
        parse_native_query(&value)
    }
}

impl Into<String> for NativeQueryParts {
    fn into(self) -> String {
        let mut sql: String = String::new();
        for part in self.0.iter() {
            match part {
                NativeQueryPart::Text(text) => sql.push_str(text.as_str()),
                NativeQueryPart::Parameter(param) => {
                    sql.push_str(format!("{{{{{}}}}}", param).as_str())
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
fn parse_native_query_from_file(file: std::path::PathBuf) -> Result<NativeQuerySql, String> {
    let contents: String = match fs::read_to_string(&file) {
        Ok(ok) => Ok(ok),
        Err(err) => Err(format!("{}: {}", &file.display(), err)),
    }?;
    let sql = parse_native_query(&contents);
    Ok(NativeQuerySql::FromFile { file, sql })
}

/// Parse a native query into parts where variables have the syntax `{{<variable>}}`.
fn parse_native_query(string: &str) -> NativeQueryParts {
    let vec: Vec<Vec<NativeQueryPart>> = string
        .split("{{")
        .map(|part| match part.split_once("}}") {
            None => vec![NativeQueryPart::Text(part.to_string())],
            Some((var, text)) => {
                if text.is_empty() {
                    vec![NativeQueryPart::Parameter(var.to_string())]
                } else {
                    vec![
                        NativeQueryPart::Parameter(var.to_string()),
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
    use super::{parse_native_query, NativeQueryPart, NativeQueryParts, NativeQuerySql};

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
                NativeQueryPart::Parameter("name".to_string()),
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
                NativeQueryPart::Parameter("id".to_string()),
                NativeQueryPart::Text(" and ".to_string()),
                NativeQueryPart::Parameter("name".to_string()),
                NativeQueryPart::Text(" = ".to_string()),
                NativeQueryPart::Parameter("other_name".to_string()),
            ])
        );
    }

    #[test]
    fn one_parameter_and_curly_text() {
        assert_eq!(
            parse_native_query("select * from t where {{name}} = '{name}'"),
            NativeQueryParts(vec![
                NativeQueryPart::Text("select * from t where ".to_string()),
                NativeQueryPart::Parameter("name".to_string()),
                NativeQueryPart::Text(" = '{name}'".to_string()),
            ])
        );
    }

    #[test]
    fn parse_inline_untagged() {
        assert_eq!(
            serde_json::from_str::<NativeQuerySql>(
                r#""select * from t where {{name}} = '{name}'""#
            )
            .unwrap(),
            NativeQuerySql::Inline {
                sql: NativeQueryParts(vec![
                    NativeQueryPart::Text("select * from t where ".to_string()),
                    NativeQueryPart::Parameter("name".to_string()),
                    NativeQueryPart::Text(" = '{name}'".to_string()),
                ])
            }
        );
    }

    #[test]
    fn parse_inline_tagged() {
        assert_eq!(
            serde_json::from_str::<NativeQuerySql>(
                r#"{"inline": "select * from t where {{name}} = '{name}'"}"#
            )
            .unwrap(),
            NativeQuerySql::Inline {
                sql: NativeQueryParts(vec![
                    NativeQueryPart::Text("select * from t where ".to_string()),
                    NativeQueryPart::Parameter("name".to_string()),
                    NativeQueryPart::Text(" = '{name}'".to_string()),
                ])
            }
        );
    }
}
