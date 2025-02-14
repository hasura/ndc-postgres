//! Convert the parsed configuration metadata to internal engine metadata
//! That can be used by the connector at runtime.

use std::collections::BTreeMap;

use super::metadata;
use super::ParsedConfiguration;
use crate::environment::Environment;
use crate::error::MakeRuntimeConfigurationError;
use crate::values::{ConnectionUri, Secret};
use crate::VersionTag;

/// Convert the parsed configuration metadata to internal engine metadata
/// That can be used by the connector at runtime.
pub fn make_runtime_configuration(
    parsed_config: ParsedConfiguration,
    environment: impl Environment,
) -> Result<crate::Configuration, MakeRuntimeConfigurationError> {
    let connection_uri = match parsed_config.connection_settings.connection_uri {
        ConnectionUri(Secret::Plain(uri)) => Ok(uri),
        ConnectionUri(Secret::FromEnvironment { variable }) => {
            environment.read(&variable).map_err(|error| {
                MakeRuntimeConfigurationError::MissingEnvironmentVariable {
                    file_path: "configuration.json".into(),
                    message: error.to_string(),
                }
            })
        }
    }?;
    Ok(crate::Configuration {
        metadata: convert_metadata(parsed_config.metadata),
        pool_settings: parsed_config.connection_settings.pool_settings,
        connection_uri,
        isolation_level: parsed_config.connection_settings.isolation_level,
        mutations_version: convert_mutations_version(parsed_config.mutations_version),
        configuration_version_tag: VersionTag::Version4,
        mutations_prefix: None,
    })
}

/// Convert the metadata specified in the parsed configuration to an engine metadata.
/// This function is used by tests as well
pub fn convert_metadata(metadata: metadata::Metadata) -> query_engine_metadata::metadata::Metadata {
    query_engine_metadata::metadata::Metadata {
        tables: convert_tables(metadata.tables),
        composite_types: convert_composite_types(metadata.composite_types),
        native_operations: convert_native_queries(metadata.native_queries),
        scalar_types: convert_scalar_types(metadata.scalar_types),
    }
}

fn convert_scalar_types(
    scalar_types: metadata::ScalarTypes,
) -> query_engine_metadata::metadata::ScalarTypes {
    query_engine_metadata::metadata::ScalarTypes(
        scalar_types
            .0
            .into_iter()
            .map(|(scalar_type_name, scalar_type)| {
                (
                    scalar_type_name,
                    query_engine_metadata::metadata::ScalarType {
                        type_name: scalar_type.type_name,
                        schema_name: Some(scalar_type.schema_name),
                        description: scalar_type.description,
                        aggregate_functions: scalar_type
                            .aggregate_functions
                            .into_iter()
                            .map(|(k, v)| (k, convert_aggregate_function(v)))
                            .collect(),
                        comparison_operators: scalar_type
                            .comparison_operators
                            .into_iter()
                            .map(|(k, v)| (k, convert_comparison_operator(v)))
                            .collect(),
                        type_representation: scalar_type.type_representation.map_or(
                            query_engine_metadata::metadata::TypeRepresentation::Json,
                            convert_type_representation,
                        ),
                    },
                )
            })
            .collect(),
    )
}

fn convert_aggregate_function(
    aggregate_function: metadata::AggregateFunction,
) -> query_engine_metadata::metadata::AggregateFunction {
    query_engine_metadata::metadata::AggregateFunction {
        return_type: aggregate_function.return_type,
    }
}

fn convert_native_queries(
    native_queries: metadata::NativeQueries,
) -> query_engine_metadata::metadata::NativeOperations {
    let mut queries = BTreeMap::new();
    let mut mutations = BTreeMap::new();

    for (name, operation) in native_queries.0 {
        let is_procedure = operation.is_procedure;
        let info = convert_native_query_info(operation);
        if is_procedure {
            mutations.insert(name.as_str().into(), info);
        } else {
            queries.insert(name, info);
        }
    }

    query_engine_metadata::metadata::NativeOperations {
        queries: query_engine_metadata::metadata::NativeQueries(queries),
        mutations: query_engine_metadata::metadata::NativeMutations(mutations),
    }
}

fn convert_native_query_info(
    native_query_info: metadata::NativeQueryInfo,
) -> query_engine_metadata::metadata::NativeQueryInfo {
    query_engine_metadata::metadata::NativeQueryInfo {
        sql: convert_native_query_sql_either(native_query_info.sql),
        columns: native_query_info
            .columns
            .into_iter()
            .map(|(k, v)| (k, convert_read_only_column_info(v)))
            .collect(),
        arguments: native_query_info
            .arguments
            .into_iter()
            .map(|(k, v)| (k, convert_read_only_column_info(v)))
            .collect(),
        description: native_query_info.description,
    }
}

fn convert_read_only_column_info(
    read_only_column_info: metadata::ReadOnlyColumnInfo,
) -> query_engine_metadata::metadata::ReadOnlyColumnInfo {
    query_engine_metadata::metadata::ReadOnlyColumnInfo {
        name: read_only_column_info.name,
        r#type: convert_type(read_only_column_info.r#type),
        nullable: convert_nullable(&read_only_column_info.nullable),
        description: read_only_column_info.description,
    }
}

fn convert_nullable(nullable: &metadata::Nullable) -> query_engine_metadata::metadata::Nullable {
    match nullable {
        metadata::Nullable::Nullable => query_engine_metadata::metadata::Nullable::Nullable,
        metadata::Nullable::NonNullable => query_engine_metadata::metadata::Nullable::NonNullable,
    }
}

fn convert_type(r#type: metadata::Type) -> query_engine_metadata::metadata::Type {
    match r#type {
        metadata::Type::ScalarType(t) => query_engine_metadata::metadata::Type::ScalarType(t),
        metadata::Type::CompositeType(t) => query_engine_metadata::metadata::Type::CompositeType(t),
        metadata::Type::ArrayType(t) => {
            query_engine_metadata::metadata::Type::ArrayType(Box::new(convert_type(*t)))
        }
    }
}

fn convert_native_query_sql_either(
    sql: metadata::NativeQuerySqlEither,
) -> query_engine_metadata::metadata::NativeQuerySqlEither {
    match sql {
        metadata::NativeQuerySqlEither::NativeQuerySql(internal_sql) => {
            query_engine_metadata::metadata::NativeQuerySqlEither::NativeQuerySql(
                convert_native_query_sql_internal(internal_sql),
            )
        }
        metadata::NativeQuerySqlEither::NativeQuerySqlExternal(external_sql) => {
            query_engine_metadata::metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
                convert_native_query_sql_external(external_sql),
            )
        }
    }
}

fn convert_native_query_sql_internal(
    internal_sql: metadata::NativeQuerySql,
) -> query_engine_metadata::metadata::NativeQuerySql {
    match internal_sql {
        metadata::NativeQuerySql::FromFile { file, sql } => {
            query_engine_metadata::metadata::NativeQuerySql::FromFile {
                file,
                sql: convert_native_query_parts(sql),
            }
        }
        metadata::NativeQuerySql::Inline { sql } => {
            query_engine_metadata::metadata::NativeQuerySql::Inline {
                sql: convert_native_query_parts(sql),
            }
        }
    }
}

fn convert_native_query_sql_external(
    external_sql: metadata::NativeQuerySqlExternal,
) -> query_engine_metadata::metadata::NativeQuerySqlExternal {
    match external_sql {
        metadata::NativeQuerySqlExternal::File { file } => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::File { file }
        }
        metadata::NativeQuerySqlExternal::Inline { inline } => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::Inline {
                inline: convert_native_query_parts(inline),
            }
        }
        metadata::NativeQuerySqlExternal::InlineUntagged(parts) => {
            query_engine_metadata::metadata::NativeQuerySqlExternal::InlineUntagged(
                convert_native_query_parts(parts),
            )
        }
    }
}

fn convert_native_query_parts(
    inline: metadata::NativeQueryParts,
) -> query_engine_metadata::metadata::NativeQueryParts {
    query_engine_metadata::metadata::NativeQueryParts(
        inline
            .0
            .into_iter()
            .map(convert_native_query_part)
            .collect(),
    )
}

fn convert_native_query_part(
    native_query_part: metadata::NativeQueryPart,
) -> query_engine_metadata::metadata::NativeQueryPart {
    match native_query_part {
        metadata::NativeQueryPart::Text(t) => {
            query_engine_metadata::metadata::NativeQueryPart::Text(t)
        }
        metadata::NativeQueryPart::Parameter(p) => {
            query_engine_metadata::metadata::NativeQueryPart::Parameter(p)
        }
    }
}

fn convert_type_representation(
    type_representation: metadata::TypeRepresentation,
) -> query_engine_metadata::metadata::TypeRepresentation {
    match type_representation {
        metadata::TypeRepresentation::Boolean => {
            query_engine_metadata::metadata::TypeRepresentation::Boolean
        }
        metadata::TypeRepresentation::String => {
            query_engine_metadata::metadata::TypeRepresentation::String
        }
        metadata::TypeRepresentation::Float32 => {
            query_engine_metadata::metadata::TypeRepresentation::Float32
        }
        metadata::TypeRepresentation::Float64 => {
            query_engine_metadata::metadata::TypeRepresentation::Float64
        }
        metadata::TypeRepresentation::Int16 => {
            query_engine_metadata::metadata::TypeRepresentation::Int16
        }
        metadata::TypeRepresentation::Int32 => {
            query_engine_metadata::metadata::TypeRepresentation::Int32
        }
        metadata::TypeRepresentation::Int64 => {
            query_engine_metadata::metadata::TypeRepresentation::Int64
        }
        metadata::TypeRepresentation::Int64AsString => {
            query_engine_metadata::metadata::TypeRepresentation::Int64AsString
        }
        metadata::TypeRepresentation::BigDecimal => {
            query_engine_metadata::metadata::TypeRepresentation::BigDecimal
        }
        metadata::TypeRepresentation::BigDecimalAsString => {
            query_engine_metadata::metadata::TypeRepresentation::BigDecimalAsString
        }
        metadata::TypeRepresentation::Timestamp => {
            query_engine_metadata::metadata::TypeRepresentation::Timestamp
        }
        metadata::TypeRepresentation::Timestamptz => {
            query_engine_metadata::metadata::TypeRepresentation::Timestamptz
        }
        metadata::TypeRepresentation::Time => {
            query_engine_metadata::metadata::TypeRepresentation::Time
        }
        metadata::TypeRepresentation::Timetz => {
            query_engine_metadata::metadata::TypeRepresentation::Timetz
        }
        metadata::TypeRepresentation::Date => {
            query_engine_metadata::metadata::TypeRepresentation::Date
        }
        metadata::TypeRepresentation::UUID => {
            query_engine_metadata::metadata::TypeRepresentation::UUID
        }
        metadata::TypeRepresentation::Geography => {
            query_engine_metadata::metadata::TypeRepresentation::Geography
        }
        metadata::TypeRepresentation::Geometry => {
            query_engine_metadata::metadata::TypeRepresentation::Geometry
        }
        // This is deprecated in ndc-spec
        metadata::TypeRepresentation::Number
        | metadata::TypeRepresentation::Integer
        | metadata::TypeRepresentation::Json => {
            query_engine_metadata::metadata::TypeRepresentation::Json
        }
        metadata::TypeRepresentation::Enum(v) => {
            query_engine_metadata::metadata::TypeRepresentation::Enum(v)
        }
    }
}

fn convert_comparison_operator(
    comparison_operator: metadata::ComparisonOperator,
) -> query_engine_metadata::metadata::ComparisonOperator {
    query_engine_metadata::metadata::ComparisonOperator {
        operator_name: comparison_operator.operator_name,
        operator_kind: convert_operator_kind(&comparison_operator.operator_kind),
        argument_type: comparison_operator.argument_type,
        is_infix: comparison_operator.is_infix,
    }
}

fn convert_operator_kind(
    operator_kind: &metadata::OperatorKind,
) -> query_engine_metadata::metadata::OperatorKind {
    match operator_kind {
        metadata::OperatorKind::Equal => query_engine_metadata::metadata::OperatorKind::Equal,
        metadata::OperatorKind::In => query_engine_metadata::metadata::OperatorKind::In,
        metadata::OperatorKind::LessThan => query_engine_metadata::metadata::OperatorKind::LessThan,
        metadata::OperatorKind::LessThanOrEqual => {
            query_engine_metadata::metadata::OperatorKind::LessThanOrEqual
        }
        metadata::OperatorKind::GreaterThan => {
            query_engine_metadata::metadata::OperatorKind::GreaterThan
        }
        metadata::OperatorKind::GreaterThanOrEqual => {
            query_engine_metadata::metadata::OperatorKind::GreaterThanOrEqual
        }
        metadata::OperatorKind::Custom => query_engine_metadata::metadata::OperatorKind::Custom,
    }
}

fn convert_composite_types(
    composite_types: metadata::CompositeTypes,
) -> query_engine_metadata::metadata::CompositeTypes {
    query_engine_metadata::metadata::CompositeTypes(
        composite_types
            .0
            .into_iter()
            .map(|(k, composite_type)| (k, convert_composite_type(composite_type)))
            .collect(),
    )
}

fn convert_composite_type(
    composite_type: metadata::CompositeType,
) -> query_engine_metadata::metadata::CompositeType {
    query_engine_metadata::metadata::CompositeType {
        type_name: composite_type.type_name,
        schema_name: Some(composite_type.schema_name),
        fields: composite_type
            .fields
            .into_iter()
            .map(|(k, field)| (k, convert_composite_type_field_info(field)))
            .collect(),
        description: composite_type.description,
    }
}

fn convert_composite_type_field_info(
    field: metadata::FieldInfo,
) -> query_engine_metadata::metadata::FieldInfo {
    query_engine_metadata::metadata::FieldInfo {
        field_name: field.field_name,
        r#type: convert_type(field.r#type),
        description: field.description,
    }
}

pub fn convert_tables(tables: metadata::TablesInfo) -> query_engine_metadata::metadata::TablesInfo {
    query_engine_metadata::metadata::TablesInfo(
        tables
            .0
            .into_iter()
            .map(|(k, table_info)| (k, convert_table_info(table_info)))
            .collect(),
    )
}

fn convert_table_info(
    table_info: metadata::TableInfo,
) -> query_engine_metadata::metadata::TableInfo {
    query_engine_metadata::metadata::TableInfo {
        schema_name: table_info.schema_name,
        table_name: table_info.table_name,
        columns: table_info
            .columns
            .into_iter()
            .map(|(k, column_info)| (k, convert_column_info(column_info)))
            .collect(),
        uniqueness_constraints: convert_uniqueness_constraints(table_info.uniqueness_constraints),
        foreign_relations: convert_foreign_relations(table_info.foreign_relations),
        description: table_info.description,
    }
}

fn convert_foreign_relations(
    foreign_relations: metadata::ForeignRelations,
) -> query_engine_metadata::metadata::ForeignRelations {
    query_engine_metadata::metadata::ForeignRelations(
        foreign_relations
            .0
            .into_iter()
            .map(|(k, foreign_relation)| (k, convert_foreign_relation(foreign_relation)))
            .collect(),
    )
}

fn convert_foreign_relation(
    foreign_relation: metadata::ForeignRelation,
) -> query_engine_metadata::metadata::ForeignRelation {
    query_engine_metadata::metadata::ForeignRelation {
        foreign_schema: foreign_relation.foreign_schema,
        foreign_table: foreign_relation.foreign_table,
        column_mapping: foreign_relation.column_mapping,
    }
}

fn convert_uniqueness_constraints(
    uniqueness_constraints: metadata::UniquenessConstraints,
) -> query_engine_metadata::metadata::UniquenessConstraints {
    query_engine_metadata::metadata::UniquenessConstraints(
        uniqueness_constraints
            .0
            .into_iter()
            .map(|(k, uniqueness_constraint)| {
                (k, convert_uniqueness_constraint(uniqueness_constraint))
            })
            .collect(),
    )
}

fn convert_uniqueness_constraint(
    uniqueness_constraint: metadata::UniquenessConstraint,
) -> query_engine_metadata::metadata::UniquenessConstraint {
    query_engine_metadata::metadata::UniquenessConstraint(
        uniqueness_constraint
            .0
            .into_iter()
            .map(|c| (c.to_string(), c))
            .collect(),
    )
}

fn convert_column_info(
    column_info: metadata::ColumnInfo,
) -> query_engine_metadata::metadata::ColumnInfo {
    query_engine_metadata::metadata::ColumnInfo {
        name: column_info.name,
        r#type: convert_type(column_info.r#type),
        nullable: convert_nullable(&column_info.nullable),
        has_default: convert_has_default(&column_info.has_default),
        is_identity: convert_is_identity(&column_info.is_identity),
        is_generated: convert_is_generated(&column_info.is_generated),
        description: column_info.description,
    }
}

fn convert_is_generated(
    is_generated: &metadata::IsGenerated,
) -> query_engine_metadata::metadata::IsGenerated {
    match is_generated {
        metadata::IsGenerated::NotGenerated => {
            query_engine_metadata::metadata::IsGenerated::NotGenerated
        }
        metadata::IsGenerated::Stored => query_engine_metadata::metadata::IsGenerated::Stored,
    }
}

fn convert_is_identity(
    is_identity: &metadata::IsIdentity,
) -> query_engine_metadata::metadata::IsIdentity {
    match is_identity {
        metadata::IsIdentity::NotIdentity => {
            query_engine_metadata::metadata::IsIdentity::NotIdentity
        }
        metadata::IsIdentity::IdentityByDefault => {
            query_engine_metadata::metadata::IsIdentity::IdentityByDefault
        }
        metadata::IsIdentity::IdentityAlways => {
            query_engine_metadata::metadata::IsIdentity::IdentityAlways
        }
    }
}

fn convert_has_default(
    has_default: &metadata::HasDefault,
) -> query_engine_metadata::metadata::HasDefault {
    match has_default {
        metadata::HasDefault::NoDefault => query_engine_metadata::metadata::HasDefault::NoDefault,
        metadata::HasDefault::HasDefault => query_engine_metadata::metadata::HasDefault::HasDefault,
    }
}

fn convert_mutations_version(
    mutations_version_opt: Option<metadata::mutations::MutationsVersion>,
) -> Option<query_engine_metadata::metadata::mutations::MutationsVersion> {
    mutations_version_opt.map(|mutations_version| match mutations_version {
        metadata::mutations::MutationsVersion::V1 => {
            query_engine_metadata::metadata::mutations::MutationsVersion::V1
        }
        metadata::mutations::MutationsVersion::V2 => {
            query_engine_metadata::metadata::mutations::MutationsVersion::V2
        }
    })
}
