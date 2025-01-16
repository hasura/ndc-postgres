#![allow(clippy::needless_pass_by_value)]

use std::collections::BTreeMap;

use super::comparison;
use super::connection_settings;
use super::metadata;
use super::options;
use super::ParsedConfiguration;
use crate::version4;

pub fn upgrade_from_v4(v: version4::ParsedConfiguration) -> super::ParsedConfiguration {
    let version4::ParsedConfiguration {
        version: _,
        schema,
        connection_settings,
        metadata,
        introspection_options,
        mutations_version,
    } = v;

    ParsedConfiguration {
        version: super::Version::This,
        schema,
        connection_settings: upgrade_connection_settings(connection_settings),
        introspection_options: ugrade_introspection_options(introspection_options),
        metadata: upgrade_metadata(metadata),
        mutations_version: mutations_version.map(upgrade_mutations_version),
        mutations_prefix: Some(String::new()), // default to no prefixes
    }
}

fn ugrade_introspection_options(
    introspection_options: version4::options::IntrospectionOptions,
) -> options::IntrospectionOptions {
    let version4::options::IntrospectionOptions {
        excluded_schemas,
        unqualified_schemas_for_tables,
        unqualified_schemas_for_types_and_procedures,
        comparison_operator_mapping,
        introspect_prefix_function_comparison_operators,
        type_representations,
    } = introspection_options;

    options::IntrospectionOptions {
        excluded_schemas,
        unqualified_schemas_for_tables,
        unqualified_schemas_for_types_and_procedures,
        comparison_operator_mapping: comparison_operator_mapping
            .into_iter()
            .map(upgrade_comparison_operator_mapping)
            .collect(),
        introspect_prefix_function_comparison_operators,
        type_representations: upgrade_type_representations(&type_representations),
    }
}

fn upgrade_comparison_operator_mapping(
    comparison_operator_mapping: version4::comparison::ComparisonOperatorMapping,
) -> comparison::ComparisonOperatorMapping {
    let version4::comparison::ComparisonOperatorMapping {
        operator_name,
        exposed_name,
        operator_kind,
    } = comparison_operator_mapping;

    comparison::ComparisonOperatorMapping {
        operator_name,
        exposed_name,
        operator_kind: upgrade_operator_kind(operator_kind),
    }
}

fn upgrade_operator_kind(
    operator_kind: version4::metadata::OperatorKind,
) -> metadata::OperatorKind {
    match operator_kind {
        version4::metadata::OperatorKind::Equal => metadata::OperatorKind::Equal,
        version4::metadata::OperatorKind::In => metadata::OperatorKind::In,
        version4::metadata::OperatorKind::LessThan => metadata::OperatorKind::LessThan,
        version4::metadata::OperatorKind::LessThanOrEqual => {
            metadata::OperatorKind::LessThanOrEqual
        }
        version4::metadata::OperatorKind::GreaterThan => metadata::OperatorKind::GreaterThan,
        version4::metadata::OperatorKind::GreaterThanOrEqual => {
            metadata::OperatorKind::GreaterThanOrEqual
        }
        version4::metadata::OperatorKind::Custom => metadata::OperatorKind::Custom,
    }
}

fn upgrade_mutations_version(
    mutations_version: version4::metadata::mutations::MutationsVersion,
) -> metadata::mutations::MutationsVersion {
    match mutations_version {
        version4::metadata::mutations::MutationsVersion::V1 => {
            metadata::mutations::MutationsVersion::V1
        }
        version4::metadata::mutations::MutationsVersion::V2 => {
            metadata::mutations::MutationsVersion::V2
        }
    }
}

fn upgrade_connection_settings(
    connection_settings: version4::connection_settings::DatabaseConnectionSettings,
) -> connection_settings::DatabaseConnectionSettings {
    let version4::connection_settings::DatabaseConnectionSettings {
        connection_uri,
        pool_settings,
        isolation_level,
    } = connection_settings;

    connection_settings::DatabaseConnectionSettings {
        connection_uri,
        pool_settings,
        isolation_level,
    }
}

fn upgrade_metadata(metadata: version4::metadata::Metadata) -> metadata::Metadata {
    let version4::metadata::Metadata {
        tables,
        scalar_types,
        composite_types,
        native_queries,
    } = metadata;

    let upgraded_scalar_types = upgrade_scalar_types(scalar_types);

    let upgraded_composite_types = upgrade_composite_types(composite_types);

    let upgraded_tables = upgrade_tables(tables);

    let upgraded_native_operations = upgrade_native_queries(native_queries);

    metadata::Metadata {
        tables: upgraded_tables,
        types: metadata::Types {
            scalar: upgraded_scalar_types,
            composite: upgraded_composite_types,
        },
        native_operations: upgraded_native_operations,
    }
}

fn upgrade_native_queries(
    native_queries: version4::metadata::NativeQueries,
) -> metadata::NativeOperations {
    let version4::metadata::NativeQueries(native_queries_map) = native_queries;

    let mut queries = BTreeMap::new();
    let mut mutations = BTreeMap::new();

    for (name, native_query_info) in native_queries_map {
        let is_procedure = native_query_info.is_procedure;
        let operation = upgrade_native_query_info(native_query_info);
        if is_procedure {
            mutations.insert(name.as_str().into(), operation);
        } else {
            queries.insert(name, operation);
        }
    }

    metadata::NativeOperations {
        queries: metadata::NativeQueries(queries),
        mutations: metadata::NativeMutations(mutations),
    }
}

fn upgrade_native_query_info(
    native_query_info: version4::metadata::NativeQueryInfo,
) -> metadata::NativeQueryInfo {
    let version4::metadata::NativeQueryInfo {
        sql,
        columns,
        arguments,
        description,
        is_procedure: _,
    } = native_query_info;

    metadata::NativeQueryInfo {
        sql: upgrade_native_query_sql_either(sql),
        columns: columns
            .into_iter()
            .map(|(name, read_only_column_info)| {
                (name, upgrade_read_only_column_info(read_only_column_info))
            })
            .collect(),
        arguments: arguments
            .into_iter()
            .map(|(name, read_only_column_info)| {
                (name, upgrade_read_only_column_info(read_only_column_info))
            })
            .collect(),
        description,
    }
}

fn upgrade_read_only_column_info(
    read_only_column_info: version4::metadata::ReadOnlyColumnInfo,
) -> metadata::ReadOnlyColumnInfo {
    let version4::metadata::ReadOnlyColumnInfo {
        name,
        r#type,
        nullable,
        description,
    } = read_only_column_info;

    let upgraded_type = upgrade_type(r#type);

    metadata::ReadOnlyColumnInfo {
        name,
        r#type: upgraded_type,
        nullable: upgrade_nullable(nullable),
        description,
    }
}

fn upgrade_nullable(nullable: version4::metadata::Nullable) -> metadata::Nullable {
    match nullable {
        version4::metadata::Nullable::Nullable => metadata::Nullable::Nullable,
        version4::metadata::Nullable::NonNullable => metadata::Nullable::NonNullable,
    }
}

fn upgrade_type(r#type: version4::metadata::Type) -> metadata::Type {
    match r#type {
        version4::metadata::Type::ScalarType(scalar_type) => {
            metadata::Type::ScalarType(scalar_type)
        }
        version4::metadata::Type::CompositeType(composite_type) => {
            metadata::Type::CompositeType(composite_type)
        }
        version4::metadata::Type::ArrayType(array_type) => {
            metadata::Type::ArrayType(Box::new(upgrade_type(*array_type)))
        }
    }
}

fn upgrade_native_query_sql_either(
    sql: version4::metadata::NativeQuerySqlEither,
) -> metadata::NativeQuerySqlEither {
    match sql {
        version4::metadata::NativeQuerySqlEither::NativeQuerySql(native_query_sql) => {
            metadata::NativeQuerySqlEither::NativeQuerySql(upgrade_native_query_sql(
                native_query_sql,
            ))
        }
        version4::metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            native_query_sql_external,
        ) => metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            upgrade_native_query_sql_external(native_query_sql_external),
        ),
    }
}

fn upgrade_native_query_sql_external(
    native_query_sql_external: version4::metadata::NativeQuerySqlExternal,
) -> metadata::NativeQuerySqlExternal {
    match native_query_sql_external {
        version4::metadata::NativeQuerySqlExternal::File { file } => {
            metadata::NativeQuerySqlExternal::File { file }
        }
        version4::metadata::NativeQuerySqlExternal::Inline { inline } => {
            metadata::NativeQuerySqlExternal::Inline {
                inline: upgrade_native_query_parts(inline),
            }
        }
        version4::metadata::NativeQuerySqlExternal::InlineUntagged(native_query_parts) => {
            metadata::NativeQuerySqlExternal::InlineUntagged(upgrade_native_query_parts(
                native_query_parts,
            ))
        }
    }
}

fn upgrade_native_query_parts(
    native_query_parts: version4::metadata::NativeQueryParts,
) -> metadata::NativeQueryParts {
    metadata::NativeQueryParts(
        native_query_parts
            .0
            .into_iter()
            .map(upgrade_native_query_part)
            .collect(),
    )
}

fn upgrade_native_query_part(
    native_query_part: version4::metadata::NativeQueryPart,
) -> metadata::NativeQueryPart {
    match native_query_part {
        version4::metadata::NativeQueryPart::Text(text) => metadata::NativeQueryPart::Text(text),
        version4::metadata::NativeQueryPart::Parameter(parameter) => {
            metadata::NativeQueryPart::Parameter(parameter)
        }
    }
}

fn upgrade_native_query_sql(
    native_query_sql: version4::metadata::NativeQuerySql,
) -> metadata::NativeQuerySql {
    match native_query_sql {
        version4::metadata::NativeQuerySql::FromFile { file, sql } => {
            metadata::NativeQuerySql::FromFile {
                file,
                sql: upgrade_native_query_parts(sql),
            }
        }
        version4::metadata::NativeQuerySql::Inline { sql } => metadata::NativeQuerySql::Inline {
            sql: upgrade_native_query_parts(sql),
        },
    }
}

fn upgrade_composite_types(
    composite_types: version4::metadata::CompositeTypes,
) -> metadata::CompositeTypes {
    metadata::CompositeTypes(
        composite_types
            .0
            .into_iter()
            .map(|(name, composite_type)| (name, upgrade_composite_type(composite_type)))
            .collect(),
    )
}

fn upgrade_composite_type(
    composite_type: version4::metadata::CompositeType,
) -> metadata::CompositeType {
    let version4::metadata::CompositeType {
        type_name,
        schema_name,
        fields,
        description,
    } = composite_type;

    metadata::CompositeType {
        schema_name,
        type_name,
        fields: fields
            .into_iter()
            .map(|(name, field_info)| (name, upgrade_field_info(field_info)))
            .collect(),
        description,
    }
}

fn upgrade_field_info(field_info: version4::metadata::FieldInfo) -> metadata::FieldInfo {
    let version4::metadata::FieldInfo {
        field_name,
        r#type,
        description,
    } = field_info;

    metadata::FieldInfo {
        field_name,
        r#type: upgrade_type(r#type),
        description,
    }
}

fn upgrade_scalar_types(scalar_types: version4::metadata::ScalarTypes) -> metadata::ScalarTypes {
    metadata::ScalarTypes(
        scalar_types
            .0
            .into_iter()
            .map(|(scalar_type_name, scalar_type)| {
                (
                    scalar_type_name,
                    metadata::ScalarType {
                        schema_name: scalar_type.schema_name.clone(),
                        type_name: scalar_type.type_name.clone(),
                        description: scalar_type.description.clone(),
                        aggregate_functions: scalar_type
                            .aggregate_functions
                            .into_iter()
                            .map(|(name, aggregate_function)| {
                                (name, upgrade_aggregate_function(aggregate_function))
                            })
                            .collect(),
                        comparison_operators: scalar_type
                            .comparison_operators
                            .into_iter()
                            .map(|(name, comparison_operator)| {
                                (name, upgrade_comparison_operator(comparison_operator))
                            })
                            .collect(),
                        type_representation: scalar_type
                            .type_representation
                            .map(upgrade_type_representation),
                    },
                )
            })
            .collect(),
    )
}

fn upgrade_type_representations(
    type_representations: &version4::metadata::TypeRepresentations,
) -> metadata::TypeRepresentations {
    metadata::TypeRepresentations(
        type_representations
            .0
            .iter()
            .map(|(key, type_representation)| {
                (
                    key.clone(),
                    upgrade_type_representation(type_representation.clone()),
                )
            })
            .collect(),
    )
}

fn upgrade_type_representation(
    type_representation: version4::metadata::TypeRepresentation,
) -> metadata::TypeRepresentation {
    match type_representation {
        version4::metadata::TypeRepresentation::Boolean => metadata::TypeRepresentation::Boolean,
        version4::metadata::TypeRepresentation::String => metadata::TypeRepresentation::String,
        version4::metadata::TypeRepresentation::Float32 => metadata::TypeRepresentation::Float32,
        version4::metadata::TypeRepresentation::Float64 => metadata::TypeRepresentation::Float64,
        version4::metadata::TypeRepresentation::Int16 => metadata::TypeRepresentation::Int16,
        version4::metadata::TypeRepresentation::Int32 => metadata::TypeRepresentation::Int32,
        version4::metadata::TypeRepresentation::Int64 => metadata::TypeRepresentation::Int64,
        version4::metadata::TypeRepresentation::Int64AsString => {
            metadata::TypeRepresentation::Int64AsString
        }
        version4::metadata::TypeRepresentation::BigDecimal => {
            metadata::TypeRepresentation::BigDecimal
        }
        version4::metadata::TypeRepresentation::BigDecimalAsString => {
            metadata::TypeRepresentation::BigDecimalAsString
        }
        version4::metadata::TypeRepresentation::Timestamp => {
            metadata::TypeRepresentation::Timestamp
        }
        version4::metadata::TypeRepresentation::Timestamptz => {
            metadata::TypeRepresentation::Timestamptz
        }
        version4::metadata::TypeRepresentation::Time => metadata::TypeRepresentation::Time,
        version4::metadata::TypeRepresentation::Timetz => metadata::TypeRepresentation::Timetz,
        version4::metadata::TypeRepresentation::Date => metadata::TypeRepresentation::Date,
        version4::metadata::TypeRepresentation::UUID => metadata::TypeRepresentation::UUID,
        version4::metadata::TypeRepresentation::Geography => {
            metadata::TypeRepresentation::Geography
        }
        version4::metadata::TypeRepresentation::Geometry => metadata::TypeRepresentation::Geometry,
        version4::metadata::TypeRepresentation::Number => metadata::TypeRepresentation::Number,
        version4::metadata::TypeRepresentation::Integer => metadata::TypeRepresentation::Integer,
        version4::metadata::TypeRepresentation::Json => metadata::TypeRepresentation::Json,
        version4::metadata::TypeRepresentation::Enum(enum_alternatives) => {
            metadata::TypeRepresentation::Enum(enum_alternatives)
        }
    }
}

fn upgrade_comparison_operator(
    comparison_operator: version4::metadata::ComparisonOperator,
) -> metadata::ComparisonOperator {
    let version4::metadata::ComparisonOperator {
        operator_name,
        operator_kind,
        argument_type,
        is_infix,
    } = comparison_operator;
    metadata::ComparisonOperator {
        operator_name,
        operator_kind: upgrade_operator_kind(operator_kind),
        argument_type,
        is_infix,
    }
}

fn upgrade_aggregate_function(
    aggregate_function: version4::metadata::AggregateFunction,
) -> metadata::AggregateFunction {
    let version4::metadata::AggregateFunction { return_type } = aggregate_function;

    metadata::AggregateFunction { return_type }
}

fn upgrade_tables(tables: version4::metadata::TablesInfo) -> metadata::TablesInfo {
    metadata::TablesInfo(
        tables
            .0
            .into_iter()
            .map(|(name, table_info)| (name, upgrade_table_info(table_info)))
            .collect(),
    )
}

fn upgrade_table_info(table_info: version4::metadata::TableInfo) -> metadata::TableInfo {
    let version4::metadata::TableInfo {
        schema_name,
        table_name,
        columns,
        uniqueness_constraints,
        foreign_relations,
        description,
    } = table_info;
    metadata::TableInfo {
        schema_name,
        table_name,
        columns: columns
            .into_iter()
            .map(|(name, column_info)| (name, upgrade_column_info(column_info)))
            .collect(),
        uniqueness_constraints: upgrade_uniqueness_constraints(uniqueness_constraints),
        foreign_relations: upgrade_foreign_relations(foreign_relations),
        description,
    }
}

fn upgrade_foreign_relations(
    foreign_relations: version4::metadata::ForeignRelations,
) -> metadata::ForeignRelations {
    metadata::ForeignRelations(
        foreign_relations
            .0
            .into_iter()
            .map(|(name, foreign_relation)| (name, upgrade_foreign_relation(foreign_relation)))
            .collect(),
    )
}

fn upgrade_foreign_relation(
    foreign_relation: version4::metadata::ForeignRelation,
) -> metadata::ForeignRelation {
    let version4::metadata::ForeignRelation {
        foreign_schema,
        foreign_table,
        column_mapping,
    } = foreign_relation;
    metadata::ForeignRelation {
        foreign_schema,
        foreign_table,
        column_mapping,
    }
}

fn upgrade_uniqueness_constraints(
    uniqueness_constraints: version4::metadata::UniquenessConstraints,
) -> metadata::UniquenessConstraints {
    metadata::UniquenessConstraints(
        uniqueness_constraints
            .0
            .into_iter()
            .map(|(name, uniqueness_constraint)| {
                (name, upgrade_uniqueness_constraint(uniqueness_constraint))
            })
            .collect(),
    )
}

fn upgrade_uniqueness_constraint(
    uniqueness_constraint: version4::metadata::UniquenessConstraint,
) -> metadata::UniquenessConstraint {
    metadata::UniquenessConstraint(uniqueness_constraint.0)
}

fn upgrade_column_info(column_info: version4::metadata::ColumnInfo) -> metadata::ColumnInfo {
    let version4::metadata::ColumnInfo {
        name,
        r#type,
        nullable,
        has_default,
        is_identity,
        is_generated,
        description,
    } = column_info;

    let upgraded_type = upgrade_type(r#type);

    metadata::ColumnInfo {
        name,
        r#type: upgraded_type,
        nullable: upgrade_nullable(nullable),
        has_default: upgrade_has_default(has_default),
        is_identity: upgrade_is_identity(is_identity),
        is_generated: upgrade_is_generated(is_generated),
        description,
    }
}

fn upgrade_is_generated(is_generated: version4::metadata::IsGenerated) -> metadata::IsGenerated {
    match is_generated {
        version4::metadata::IsGenerated::NotGenerated => metadata::IsGenerated::NotGenerated,
        version4::metadata::IsGenerated::Stored => metadata::IsGenerated::Stored,
    }
}

fn upgrade_is_identity(is_identity: version4::metadata::IsIdentity) -> metadata::IsIdentity {
    match is_identity {
        version4::metadata::IsIdentity::NotIdentity => metadata::IsIdentity::NotIdentity,
        version4::metadata::IsIdentity::IdentityByDefault => {
            metadata::IsIdentity::IdentityByDefault
        }
        version4::metadata::IsIdentity::IdentityAlways => metadata::IsIdentity::IdentityAlways,
    }
}

fn upgrade_has_default(has_default: version4::metadata::HasDefault) -> metadata::HasDefault {
    match has_default {
        version4::metadata::HasDefault::NoDefault => metadata::HasDefault::NoDefault,
        version4::metadata::HasDefault::HasDefault => metadata::HasDefault::HasDefault,
    }
}
