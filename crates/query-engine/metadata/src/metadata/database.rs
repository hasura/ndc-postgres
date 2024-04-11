//! Metadata information regarding the database and tracked information.

use std::collections::{BTreeMap, BTreeSet};

/// Map of all known composite types.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct CompositeTypes(pub BTreeMap<String, CompositeType>);

/// A Scalar Type.
#[derive(Debug, Clone, PartialEq, Eq, PartialOrd, Ord)]

pub struct ScalarType(pub String);

/// The type of values that a column, field, or argument may take.
#[derive(Debug, Clone, PartialEq, Eq)]

pub enum Type {
    ScalarType(ScalarType),
    CompositeType(String),
    ArrayType(Box<Type>),
}

impl Type {
    /// If a type is a scalar type, fetch it. If not, return None.
    pub fn scalar_type(&self) -> Option<&ScalarType> {
        match self {
            Type::ScalarType(scalar_type) => Some(scalar_type),
            Type::CompositeType(_) => None,
            Type::ArrayType(_) => None,
        }
    }
}

/// Information about a composite type. These are very similar to tables, but with the crucial
/// difference that composite types do not support constraints (such as NOT NULL).
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct CompositeType {
    pub name: String,
    pub fields: BTreeMap<String, FieldInfo>,

    pub description: Option<String>,
}

/// Information about a composite type field.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct FieldInfo {
    pub name: String,
    pub r#type: Type,

    pub description: Option<String>,
}

/// The complete list of supported binary operators for scalar types.
/// Not all of these are supported for every type.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct ComparisonOperators(pub BTreeMap<ScalarType, BTreeMap<String, ComparisonOperator>>);

/// Represents a postgres binary comparison operator
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ComparisonOperator {
    pub operator_name: String,
    pub operator_kind: OperatorKind,
    pub argument_type: ScalarType,

    pub is_infix: bool,
}

/// Is it a built-in operator, or a custom operator.
#[derive(Debug, Clone, PartialEq, Eq)]

pub enum OperatorKind {
    Equal,
    In,
    Custom,
}

/// Mapping from a "table" name to its information.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct TablesInfo(pub BTreeMap<String, TableInfo>);

/// Information about a database table (or any other kind of relation).
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct TableInfo {
    pub schema_name: String,
    pub table_name: String,
    pub columns: BTreeMap<String, ColumnInfo>,

    pub uniqueness_constraints: UniquenessConstraints,

    pub foreign_relations: ForeignRelations,

    pub description: Option<String>,
}

/// Can this column contain null values
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub enum Nullable {
    #[default]
    Nullable,
    NonNullable,
}

/// Does this column have a default value.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub enum HasDefault {
    #[default]
    NoDefault,
    HasDefault,
}

/// Is this column an identity column.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub enum IsIdentity {
    #[default]
    NotIdentity,
    IdentityByDefault,
    IdentityAlways,
}

/// Is this column a generated column.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub enum IsGenerated {
    #[default]
    NotGenerated,
    Stored,
}

/// Information about a database column.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ColumnInfo {
    pub name: String,
    pub r#type: Type,

    pub nullable: Nullable,

    pub has_default: HasDefault,

    pub is_identity: IsIdentity,

    pub is_generated: IsGenerated,

    pub description: Option<String>,
}

/// A mapping from the name of a unique constraint to its value.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct UniquenessConstraints(pub BTreeMap<String, UniquenessConstraint>);

/// The set of columns that make up a uniqueness constraint.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct UniquenessConstraint(pub BTreeSet<String>);

/// A mapping from the name of a foreign key constraint to its value.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct ForeignRelations(pub BTreeMap<String, ForeignRelation>);

/// A foreign key constraint.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ForeignRelation {
    pub foreign_schema: Option<String>,
    pub foreign_table: String,
    pub column_mapping: BTreeMap<String, String>,
}

/// All supported aggregate functions, grouped by type.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct AggregateFunctions(pub BTreeMap<ScalarType, BTreeMap<String, AggregateFunction>>);

#[derive(Debug, Clone, PartialEq, Eq)]

pub struct AggregateFunction {
    pub return_type: ScalarType,
}

/// Type representation of scalar types, grouped by type.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct TypeRepresentations(pub BTreeMap<ScalarType, TypeRepresentation>);

/// Type representation of a scalar type.
#[derive(Debug, Clone, PartialEq, Eq)]

pub enum TypeRepresentation {
    /// JSON booleans
    Boolean,
    /// Any JSON string
    String,
    /// float4
    Float32,
    /// float8
    Float64,
    /// int2
    Int16,
    /// int4
    Int32,
    /// int8 as integer
    Int64,
    /// int8 as string
    Int64AsString,
    /// numeric
    BigDecimal,
    /// numeric as string
    BigDecimalAsString,
    /// timestamp
    Timestamp,
    /// timestamp with timezone
    Timestamptz,
    /// time
    Time,
    /// time with timezone
    Timetz,
    /// date
    Date,
    /// uuid
    UUID,
    /// geography
    Geography,
    /// geometry
    Geometry,
    /// An arbitrary json.
    Json,
    /// One of the specified string values
    Enum(Vec<String>),
}
