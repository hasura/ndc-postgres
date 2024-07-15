//! Metadata information regarding native queries.

use super::database::*;

use ndc_models as models;
use std::collections::BTreeMap;

// Types

/// Metadata information of native queries.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct NativeOperations {
    pub queries: NativeQueries,
    pub mutations: NativeMutations,
}

impl NativeOperations {
    pub fn empty() -> Self {
        NativeOperations {
            queries: NativeQueries::empty(),
            mutations: NativeMutations::empty(),
        }
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct NativeQueries(pub BTreeMap<models::CollectionName, NativeQueryInfo>);

impl NativeQueries {
    pub fn empty() -> Self {
        NativeQueries(BTreeMap::new())
    }
}

#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct NativeMutations(pub BTreeMap<models::ProcedureName, NativeQueryInfo>);

impl NativeMutations {
    pub fn empty() -> Self {
        NativeMutations(BTreeMap::new())
    }
}

/// Information about a Native Query
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct NativeQueryInfo {
    /// SQL expression to use for the Native Query.
    /// We can interpolate values using `{{variable_name}}` syntax,
    /// such as `SELECT * FROM authors WHERE name = {{author_name}}`
    pub sql: NativeQuerySqlEither,
    /// Columns returned by the Native Query
    pub columns: BTreeMap<models::FieldName, ReadOnlyColumnInfo>,

    /// Names and types of arguments that can be passed to this Native Query
    pub arguments: BTreeMap<models::ArgumentName, ReadOnlyColumnInfo>,

    pub description: Option<String>,
}

/// Information about a native query column.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ReadOnlyColumnInfo {
    pub name: String,
    pub r#type: Type,

    pub nullable: Nullable,

    pub description: Option<String>,
}

/// This type contains information that still needs to be resolved.
/// After deserializing, we expect the value to be "external",
/// and after a subsequent step where we read from files,
/// they should all be converted to NativeQuerySql.
#[derive(Debug, Clone, PartialEq, Eq)]

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
#[derive(Debug, Clone, PartialEq, Eq)]

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

impl From<NativeQuerySql> for NativeQuerySqlExternal {
    /// used for deserialization.
    fn from(value: NativeQuerySql) -> Self {
        match value {
            NativeQuerySql::Inline { sql } => NativeQuerySqlExternal::Inline { inline: sql },
            NativeQuerySql::FromFile { file, .. } => NativeQuerySqlExternal::File { file },
        }
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
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct NativeQueryParts(pub Vec<NativeQueryPart>);

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
