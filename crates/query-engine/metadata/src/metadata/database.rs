//! Metadata information regarding the database and tracked information.

use schemars::JsonSchema;
use serde::{Deserialize, Serialize};
use std::collections::{BTreeMap, BTreeSet};

/// A Scalar Type.
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ScalarType(pub String);

/// The type of values that a column, field, or argument may take.
#[derive(Debug, Clone, PartialEq, Eq, Deserialize, Serialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum Type {
    ArrayType(Box<Type>),
    ScalarType(ScalarType),
    CompositeType(Box<CompositeType>),
}

/// Information about a composite type. These are very similar to tables, but with the crucial
/// difference that composite types do not support constraints (such as NOT NULL).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct CompositeType {
    pub type_name: String,
    pub fields: BTreeMap<String, FieldInfo>,
    #[serde(default)]
    pub description: Option<String>,
}

/// Information about a composite type field.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct FieldInfo {
    pub name: String,
    pub r#type: Type,
    #[serde(default)]
    pub description: Option<String>,
}

/// The complete list of supported binary operators for scalar types.
/// Not all of these are supported for every type.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ComparisonOperators(pub BTreeMap<ScalarType, BTreeMap<String, ComparisonOperator>>);

/// Represents a postgres binary comparison operator
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ComparisonOperator {
    pub operator_name: String,
    pub argument_type: ScalarType,

    #[serde(default = "default_true")]
    pub is_infix: bool,
}

/// This is quite unfortunate: https://github.com/serde-rs/serde/issues/368
/// TL;DR: we can't set default literals for serde, so if we want 'is_infix' to
/// default to 'true', we have to set its default as a function that returns 'true'.
fn default_true() -> bool {
    true
}

/// Mapping from a "table" name to its information.
#[derive(Debug, Clone, PartialEq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct TablesInfo(pub BTreeMap<String, TableInfo>);

/// Information about a database table (or any other kind of relation).
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct TableInfo {
    pub schema_name: String,
    pub table_name: String,
    pub columns: BTreeMap<String, ColumnInfo>,
    #[serde(default)]
    pub uniqueness_constraints: UniquenessConstraints,
    #[serde(default)]
    pub foreign_relations: ForeignRelations,
    #[serde(default)]
    pub description: Option<String>,
}

/// Can this column contain null values
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub enum Nullable {
    #[default]
    Nullable,
    NonNullable,
}

/// Information about a database column.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ColumnInfo {
    pub name: String,
    pub r#type: Type,
    #[serde(default)]
    pub nullable: Nullable,
    #[serde(default)]
    pub description: Option<String>,
}

/// A mapping from the name of a unique constraint to its value.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct UniquenessConstraints(pub BTreeMap<String, UniquenessConstraint>);

/// The set of columns that make up a uniqueness constraint.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct UniquenessConstraint(pub BTreeSet<String>);

/// A mapping from the name of a foreign key constraint to its value.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ForeignRelations(pub BTreeMap<String, ForeignRelation>);

/// A foreign key constraint.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct ForeignRelation {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub foreign_schema: Option<String>,
    pub foreign_table: String,
    pub column_mapping: BTreeMap<String, String>,
}

/// All supported aggregate functions, grouped by type.
#[derive(Debug, Clone, PartialEq, Eq, Default, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct AggregateFunctions(pub BTreeMap<ScalarType, BTreeMap<String, AggregateFunction>>);

#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize, JsonSchema)]
#[serde(rename_all = "camelCase")]
pub struct AggregateFunction {
    pub return_type: ScalarType,
}
