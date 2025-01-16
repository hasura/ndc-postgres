//! Metadata information regarding the database and tracked information.

use ndc_models as models;
use std::collections::BTreeMap;

/// The type of values that a column, field, or argument may take.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Type {
    ScalarType(models::ScalarTypeName),
    CompositeType(models::TypeName),
    ArrayType(Box<Type>),
}

/// Map of all known/occurring scalar types.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct ScalarTypes(pub BTreeMap<models::ScalarTypeName, ScalarType>);

impl ScalarTypes {
    pub fn empty() -> Self {
        ScalarTypes(BTreeMap::new())
    }
}

/// Information about a scalar type. A scalar type is completely characterized by its name and the
/// operations you can do on it.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ScalarType {
    pub type_name: String,
    pub schema_name: Option<String>,
    pub description: Option<String>,
    pub aggregate_functions: BTreeMap<models::AggregateFunctionName, AggregateFunction>,
    pub comparison_operators: BTreeMap<models::ComparisonOperatorName, ComparisonOperator>,
    pub type_representation: TypeRepresentation,
}

/// Map of all known composite types.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct CompositeTypes(pub BTreeMap<models::TypeName, CompositeType>);

impl CompositeTypes {
    pub fn empty() -> Self {
        CompositeTypes(BTreeMap::new())
    }
}

/// Information about a composite type. These are very similar to tables, but with the crucial
/// difference that composite types do not support constraints (such as NOT NULL).
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct CompositeType {
    pub type_name: String,
    pub schema_name: Option<String>,
    pub fields: BTreeMap<models::FieldName, FieldInfo>,
    pub description: Option<String>,
}

/// Information about a composite type field.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct FieldInfo {
    pub field_name: String,
    pub r#type: Type,
    pub description: Option<String>,
}

/// Represents a postgres binary comparison operator
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ComparisonOperator {
    pub operator_name: String,
    pub operator_kind: OperatorKind,
    pub argument_type: models::ScalarTypeName,
    pub is_infix: bool,
}

/// Is it a built-in operator, or a custom operator.
#[derive(Debug, Clone, PartialEq, Eq)]

pub enum OperatorKind {
    Equal,
    In,
    LessThan,
    LessThanOrEqual,
    GreaterThan,
    GreaterThanOrEqual,
    Custom,
}

/// Mapping from a "table" name to its information.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct TablesInfo(pub BTreeMap<models::CollectionName, TableInfo>);

impl TablesInfo {
    pub fn empty() -> Self {
        TablesInfo(BTreeMap::new())
    }
}

/// Information about a database table (or any other kind of relation).
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct TableInfo {
    pub schema_name: String,
    pub table_name: String,
    pub columns: BTreeMap<models::FieldName, ColumnInfo>,

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
pub struct UniquenessConstraint(pub BTreeMap<String, models::FieldName>);

/// A mapping from the name of a foreign key constraint to its value.
#[derive(Debug, Clone, PartialEq, Eq, Default)]

pub struct ForeignRelations(pub BTreeMap<String, ForeignRelation>);

/// A foreign key constraint.
#[derive(Debug, Clone, PartialEq, Eq)]

pub struct ForeignRelation {
    pub foreign_schema: Option<String>,
    pub foreign_table: String,
    pub column_mapping: BTreeMap<models::FieldName, models::FieldName>,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct AggregateFunction {
    pub return_type: models::TypeName,
}

/// Type representation of scalar types, grouped by type.
#[derive(Debug, Clone, PartialEq, Eq, Default)]
pub struct TypeRepresentations(pub BTreeMap<models::ScalarTypeName, TypeRepresentation>);

impl TypeRepresentations {
    pub fn empty() -> Self {
        TypeRepresentations(BTreeMap::new())
    }
}

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
