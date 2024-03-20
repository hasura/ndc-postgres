//! Metadata information regarding native queries.

use super::database::*;

use schemars::JsonSchema;
use serde::de::{self, MapAccess};
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
    pub fn sql(self) -> NativeQueryParts {
        match self {
            NativeQuerySql::Inline { sql } => sql,
            NativeQuerySql::FromFile { sql, .. } => sql,
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
/// Native Query SQL location.
pub enum NativeQuerySqlInternal {
    /// Refer to an external Native Query SQL file.
    File(
        /// Relative path to a sql file.
        std::path::PathBuf,
    ),
    /// Inline Native Query SQL string.
    Inline(
        /// An inline Native Query SQL string.
        NativeQueryParts,
    ),
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
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct NativeQueryParts(pub Vec<NativeQueryPart>);

// Serialization

impl Serialize for NativeQueryParts {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let mut sql: String = String::new();
        for part in self.0.iter() {
            match part {
                NativeQueryPart::Text(text) => sql.push_str(text.as_str()),
                NativeQueryPart::Parameter(param) => {
                    sql.push_str(format!("{{{{{}}}}}", param).as_str())
                }
            }
        }
        serializer.serialize_str(&sql)
    }
}

struct NQVisitor;

impl<'de> serde::de::Visitor<'de> for NQVisitor {
    type Value = NativeQueryParts;

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        formatter.write_str("An inline Native Query SQL")
    }

    fn visit_str<E>(self, value: &str) -> Result<Self::Value, E>
    where
        E: serde::de::Error,
    {
        // todo: write a better parser
        Ok(parse_native_query(value))
    }
}

impl<'de> Deserialize<'de> for NativeQueryParts {
    fn deserialize<D>(deserializer: D) -> Result<NativeQueryParts, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        deserializer.deserialize_str(NQVisitor)
    }
}

impl JsonSchema for NativeQueryParts {
    fn schema_name() -> String {
        "Inline_native_query_sql".to_string()
    }

    fn json_schema(gen: &mut schemars::gen::SchemaGenerator) -> schemars::schema::Schema {
        String::json_schema(gen)
    }
}

impl Serialize for NativeQuerySql {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        match self {
            NativeQuerySql::Inline { sql } => {
                NativeQuerySqlInternal::Inline(sql.clone()).serialize(serializer)
            }
            NativeQuerySql::FromFile { file, .. } => {
                NativeQuerySqlInternal::File(file.clone()).serialize(serializer)
            }
        }
    }
}

impl<'de> Deserialize<'de> for NativeQuerySql {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        let internal = deserializer.deserialize_any(NQVisitor2)?;

        match internal {
            NativeQuerySqlInternal::File(file) => match parse_native_query_from_file(file) {
                Ok(ok) => Ok(ok),
                Err(err) => Err(serde::de::Error::custom(err)),
            },
            NativeQuerySqlInternal::Inline(inline) => Ok(NativeQuerySql::Inline { sql: inline }),
        }
    }
}

struct NQVisitor2;

impl<'de> serde::de::Visitor<'de> for NQVisitor2 {
    type Value = NativeQuerySqlInternal;

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        formatter.write_str("A Native Query SQL")
    }

    fn visit_str<E>(self, value: &str) -> Result<Self::Value, E>
    where
        E: serde::de::Error,
    {
        Ok(NativeQuerySqlInternal::Inline(parse_native_query(value)))
    }

    fn visit_map<M>(self, map: M) -> Result<Self::Value, M::Error>
    where
        M: MapAccess<'de>,
    {
        // `MapAccessDeserializer` is a wrapper that turns a `MapAccess`
        // into a `Deserializer`, allowing it to be used as the input to T's
        // `Deserialize` implementation. T then deserializes itself using
        // the entries from the map visitor.
        Deserialize::deserialize(de::value::MapAccessDeserializer::new(map))
    }
}

impl JsonSchema for NativeQuerySql {
    fn schema_name() -> String {
        "Native_query_sql".to_string()
    }

    fn json_schema(gen: &mut schemars::gen::SchemaGenerator) -> schemars::schema::Schema {
        NativeQuerySqlInternal::json_schema(gen)
    }
}

// Parsing

/// Parse a native query into parts where variables have the
/// syntax `{{<variable>}}`.
fn parse_native_query_from_file(file: std::path::PathBuf) -> Result<NativeQuerySql, String> {
    let contents: String = match fs::read_to_string(&file) {
        Ok(ok) => Ok(ok),
        Err(err) => Err(format!("{}: {}", &file.display(), err)),
    }?;
    let sql = parse_native_query(&contents);
    Ok(NativeQuerySql::FromFile { file, sql })
}

/// Parse a native query into parts where variables have the
/// syntax `{{<variable>}}`.
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
