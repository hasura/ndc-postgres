#![allow(clippy::needless_pass_by_value)]

use ndc_models as models;
use std::collections::BTreeMap;
use std::collections::BTreeSet;

use crate::version3;
use crate::version4;
use crate::version4::comparison;
use crate::version4::connection_settings;
use crate::version4::metadata;
use crate::version4::options;
use crate::version4::ParsedConfiguration;

pub fn upgrade_from_v3(v: version3::RawConfiguration) -> version4::ParsedConfiguration {
    let version3::RawConfiguration {
        version: _,
        schema,
        connection_settings,
        metadata,
        introspection_options,
        mutations_version,
    } = v;

    ParsedConfiguration {
        version: version4::Version::This,
        schema,
        connection_settings: upgrade_connection_settings(connection_settings),
        introspection_options: ugrade_introspection_options(
            introspection_options,
            &metadata.type_representations,
        ),
        metadata: upgrade_metadata(metadata),
        mutations_version: mutations_version.map(upgrade_mutations_version),
    }
}

const PG_CATALOG_TYPES: &[&str] = &[
    "bit",
    "bool",
    "box",
    "bpchar",
    "bytea",
    "char",
    "cidr",
    "circle",
    "date",
    "datemultirange",
    "daterange",
    "float4",
    "float8",
    "gtsvector",
    "inet",
    "int2",
    "int4",
    "int4multirange",
    "int4range",
    "int8",
    "int8multirange",
    "int8range",
    "interval",
    "json",
    "jsonb",
    "jsonpath",
    "line",
    "lseg",
    "macaddr",
    "macaddr8",
    "money",
    "numeric",
    "nummultirange",
    "numrange",
    "path",
    "pg_brin_bloom_summary",
    "pg_brin_minmax_multi_summary",
    "pg_snapshot",
    "point",
    "polygon",
    "refcursor",
    "text",
    "time",
    "timestamp",
    "timestamptz",
    "timetz",
    "tsmultirange",
    "tsquery",
    "tsrange",
    "tstzmultirange",
    "tstzrange",
    "tsvector",
    "txid_snapshot",
    "uuid",
    "varbit",
    "varchar",
    "xml",
];

/// The main difference between V3 and V4 is that we record the schema of types.
/// Obviously we cannot magically determine what the schema would have been for some type in a V3
/// configuration, but at least we can recognize the builtin ones that live in 'pg_catalog', and
/// default to 'public' for the rest.
///
/// Types living in other schemas that this will need to be corrected by re-running introspection.
fn divine_type_schema(typname: &str) -> String {
    if PG_CATALOG_TYPES.contains(&typname) {
        "pg_catalog".to_string()
    } else {
        "public".to_string()
    }
}

fn ugrade_introspection_options(
    introspection_options: version3::options::IntrospectionOptions,
    type_representations: &version3::metadata::TypeRepresentations,
) -> options::IntrospectionOptions {
    let version3::options::IntrospectionOptions {
        excluded_schemas,
        unqualified_schemas_for_tables,
        unqualified_schemas_for_types_and_procedures,
        comparison_operator_mapping,
        introspect_prefix_function_comparison_operators,
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
        type_representations: upgrade_type_representations(type_representations),
    }
}

fn upgrade_comparison_operator_mapping(
    comparison_operator_mapping: version3::comparison::ComparisonOperatorMapping,
) -> comparison::ComparisonOperatorMapping {
    let version3::comparison::ComparisonOperatorMapping {
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
    operator_kind: version3::metadata::OperatorKind,
) -> metadata::OperatorKind {
    match operator_kind {
        version3::metadata::OperatorKind::Equal => metadata::OperatorKind::Equal,
        version3::metadata::OperatorKind::In => metadata::OperatorKind::In,
        version3::metadata::OperatorKind::LessThan => metadata::OperatorKind::LessThan,
        version3::metadata::OperatorKind::LessThanOrEqual => {
            metadata::OperatorKind::LessThanOrEqual
        }
        version3::metadata::OperatorKind::GreaterThan => metadata::OperatorKind::GreaterThan,
        version3::metadata::OperatorKind::GreaterThanOrEqual => {
            metadata::OperatorKind::GreaterThanOrEqual
        }
        version3::metadata::OperatorKind::Custom => metadata::OperatorKind::Custom,
    }
}

fn upgrade_mutations_version(
    mutations_version: version3::metadata::mutations::MutationsVersion,
) -> metadata::mutations::MutationsVersion {
    match mutations_version {
        version3::metadata::mutations::MutationsVersion::V1 => {
            metadata::mutations::MutationsVersion::V1
        }
    }
}

fn upgrade_connection_settings(
    connection_settings: version3::connection_settings::DatabaseConnectionSettings,
) -> connection_settings::DatabaseConnectionSettings {
    let version3::connection_settings::DatabaseConnectionSettings {
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

fn upgrade_metadata(metadata: version3::metadata::Metadata) -> metadata::Metadata {
    let version3::metadata::Metadata {
        tables,
        composite_types,
        native_queries,
        aggregate_functions,
        comparison_operators,
        type_representations,
    } = metadata;

    let mut occurring_scalar_types: BTreeSet<models::ScalarTypeName> = BTreeSet::new();

    let upgraded_scalar_types = upgrade_scalar_types(
        aggregate_functions,
        comparison_operators,
        type_representations,
    );

    let upgraded_tables = upgrade_tables(tables, &mut occurring_scalar_types);
    let upgraded_native_queries =
        upgrade_native_queries(native_queries, &mut occurring_scalar_types);

    let upgraded_scalar_types =
        backfill_scalar_types(upgraded_scalar_types, occurring_scalar_types);

    metadata::Metadata {
        tables: upgraded_tables,
        scalar_types: upgraded_scalar_types,
        composite_types: upgrade_composite_types(composite_types),
        native_queries: upgraded_native_queries,
    }
}

/// In V3 types needn't be declared to be used in tables. In V4 they do, so we collect all the
/// occurring types and backfill those that are not declared explicitly.
fn backfill_scalar_types(
    metadata::ScalarTypes(mut upgraded_scalar_types): metadata::ScalarTypes,
    occurring_scalar_types: BTreeSet<models::ScalarTypeName>,
) -> metadata::ScalarTypes {
    for scalar_type in occurring_scalar_types {
        if !upgraded_scalar_types.contains_key(&scalar_type) {
            upgraded_scalar_types.insert(
                scalar_type.clone(),
                metadata::ScalarType {
                    type_name: scalar_type.to_string(),
                    schema_name: divine_type_schema(scalar_type.as_str()),
                    description: None,
                    aggregate_functions: BTreeMap::new(),
                    comparison_operators: BTreeMap::new(),
                    type_representation: None,
                },
            );
        }
    }
    metadata::ScalarTypes(upgraded_scalar_types)
}

fn upgrade_native_queries(
    native_queries: version3::metadata::NativeQueries,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::NativeQueries {
    let version3::metadata::NativeQueries(native_queries_map) = native_queries;

    metadata::NativeQueries(
        native_queries_map
            .into_iter()
            .map(|(name, native_query_info)| {
                (
                    name,
                    upgrade_native_query_info(native_query_info, occurring_scalar_types),
                )
            })
            .collect(),
    )
}

fn upgrade_native_query_info(
    native_query_info: version3::metadata::NativeQueryInfo,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::NativeQueryInfo {
    let version3::metadata::NativeQueryInfo {
        sql,
        columns,
        arguments,
        description,
        is_procedure,
    } = native_query_info;

    metadata::NativeQueryInfo {
        sql: upgrade_native_query_sql_either(sql),
        columns: columns
            .into_iter()
            .map(|(name, read_only_column_info)| {
                (
                    name,
                    upgrade_read_only_column_info(read_only_column_info, occurring_scalar_types),
                )
            })
            .collect(),
        arguments: arguments
            .into_iter()
            .map(|(name, read_only_column_info)| {
                (
                    name,
                    upgrade_read_only_column_info(read_only_column_info, occurring_scalar_types),
                )
            })
            .collect(),
        description,
        is_procedure,
    }
}

fn upgrade_read_only_column_info(
    read_only_column_info: version3::metadata::ReadOnlyColumnInfo,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::ReadOnlyColumnInfo {
    let version3::metadata::ReadOnlyColumnInfo {
        name,
        r#type,
        nullable,
        description,
    } = read_only_column_info;

    let upgraded_type = upgrade_type(r#type);

    record_occurring_scalar_type(&upgraded_type, occurring_scalar_types);

    metadata::ReadOnlyColumnInfo {
        name,
        r#type: upgraded_type,
        nullable: upgrade_nullable(nullable),
        description,
    }
}

fn upgrade_nullable(nullable: version3::metadata::Nullable) -> metadata::Nullable {
    match nullable {
        version3::metadata::Nullable::Nullable => metadata::Nullable::Nullable,
        version3::metadata::Nullable::NonNullable => metadata::Nullable::NonNullable,
    }
}

fn upgrade_type(r#type: version3::metadata::Type) -> metadata::Type {
    match r#type {
        version3::metadata::Type::ScalarType(scalar_type) => {
            metadata::Type::ScalarType(scalar_type)
        }
        version3::metadata::Type::CompositeType(composite_type) => {
            metadata::Type::CompositeType(composite_type)
        }
        version3::metadata::Type::ArrayType(array_type) => {
            metadata::Type::ArrayType(Box::new(upgrade_type(*array_type)))
        }
    }
}

fn upgrade_native_query_sql_either(
    sql: version3::metadata::NativeQuerySqlEither,
) -> metadata::NativeQuerySqlEither {
    match sql {
        version3::metadata::NativeQuerySqlEither::NativeQuerySql(native_query_sql) => {
            metadata::NativeQuerySqlEither::NativeQuerySql(upgrade_native_query_sql(
                native_query_sql,
            ))
        }
        version3::metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            native_query_sql_external,
        ) => metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            upgrade_native_query_sql_external(native_query_sql_external),
        ),
    }
}

fn upgrade_native_query_sql_external(
    native_query_sql_external: version3::metadata::NativeQuerySqlExternal,
) -> metadata::NativeQuerySqlExternal {
    match native_query_sql_external {
        version3::metadata::NativeQuerySqlExternal::File { file } => {
            metadata::NativeQuerySqlExternal::File { file }
        }
        version3::metadata::NativeQuerySqlExternal::Inline { inline } => {
            metadata::NativeQuerySqlExternal::Inline {
                inline: upgrade_native_query_parts(inline),
            }
        }
        version3::metadata::NativeQuerySqlExternal::InlineUntagged(native_query_parts) => {
            metadata::NativeQuerySqlExternal::InlineUntagged(upgrade_native_query_parts(
                native_query_parts,
            ))
        }
    }
}

fn upgrade_native_query_parts(
    native_query_parts: version3::metadata::NativeQueryParts,
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
    native_query_part: version3::metadata::NativeQueryPart,
) -> metadata::NativeQueryPart {
    match native_query_part {
        version3::metadata::NativeQueryPart::Text(text) => metadata::NativeQueryPart::Text(text),
        version3::metadata::NativeQueryPart::Parameter(parameter) => {
            metadata::NativeQueryPart::Parameter(parameter)
        }
    }
}

fn upgrade_native_query_sql(
    native_query_sql: version3::metadata::NativeQuerySql,
) -> metadata::NativeQuerySql {
    match native_query_sql {
        version3::metadata::NativeQuerySql::FromFile { file, sql } => {
            metadata::NativeQuerySql::FromFile {
                file,
                sql: upgrade_native_query_parts(sql),
            }
        }
        version3::metadata::NativeQuerySql::Inline { sql } => metadata::NativeQuerySql::Inline {
            sql: upgrade_native_query_parts(sql),
        },
    }
}

fn upgrade_composite_types(
    composite_types: version3::metadata::CompositeTypes,
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
    composite_type: version3::metadata::CompositeType,
) -> metadata::CompositeType {
    let version3::metadata::CompositeType {
        name,
        fields,
        description,
    } = composite_type;

    metadata::CompositeType {
        schema_name: divine_type_schema(name.as_str()),
        type_name: name,
        fields: fields
            .into_iter()
            .map(|(name, field_info)| (name, upgrade_field_info(field_info)))
            .collect(),
        description,
    }
}

fn upgrade_field_info(field_info: version3::metadata::FieldInfo) -> metadata::FieldInfo {
    let version3::metadata::FieldInfo {
        name,
        r#type,
        description,
    } = field_info;

    metadata::FieldInfo {
        field_name: name,
        r#type: upgrade_type(r#type),
        description,
    }
}

fn upgrade_scalar_types(
    aggregate_functions: version3::metadata::AggregateFunctions,
    comparison_operators: version3::metadata::ComparisonOperators,
    type_representations: version3::metadata::TypeRepresentations,
) -> metadata::ScalarTypes {
    let scalar_type_names: BTreeSet<&models::ScalarTypeName> = aggregate_functions
        .0
        .keys()
        .chain(comparison_operators.0.keys())
        .chain(type_representations.0.keys())
        .collect();

    metadata::ScalarTypes(
        scalar_type_names
            .into_iter()
            .map(|scalar_type_name| {
                (
                    scalar_type_name.clone(),
                    metadata::ScalarType {
                        schema_name: divine_type_schema(scalar_type_name.as_str()),
                        type_name: scalar_type_name.to_string(),
                        description: None,
                        aggregate_functions: aggregate_functions
                            .0
                            .get(scalar_type_name)
                            .cloned()
                            .unwrap_or(BTreeMap::new())
                            .into_iter()
                            .map(|(name, aggregate_function)| {
                                (name, upgrade_aggregate_function(aggregate_function))
                            })
                            .collect(),
                        comparison_operators: comparison_operators
                            .0
                            .get(scalar_type_name)
                            .cloned()
                            .unwrap_or(BTreeMap::new())
                            .into_iter()
                            .map(|(name, comparison_operator)| {
                                (name, upgrade_comparison_operator(comparison_operator))
                            })
                            .collect(),
                        type_representation: type_representations
                            .0
                            .get(scalar_type_name)
                            .cloned()
                            .map(upgrade_type_representation),
                    },
                )
            })
            .collect(),
    )
}

fn upgrade_type_representations(
    type_representations: &version3::metadata::TypeRepresentations,
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
    type_representation: version3::metadata::TypeRepresentation,
) -> metadata::TypeRepresentation {
    match type_representation {
        version3::metadata::TypeRepresentation::Boolean => metadata::TypeRepresentation::Boolean,
        version3::metadata::TypeRepresentation::String => metadata::TypeRepresentation::String,
        version3::metadata::TypeRepresentation::Float32 => metadata::TypeRepresentation::Float32,
        version3::metadata::TypeRepresentation::Float64 => metadata::TypeRepresentation::Float64,
        version3::metadata::TypeRepresentation::Int16 => metadata::TypeRepresentation::Int16,
        version3::metadata::TypeRepresentation::Int32 => metadata::TypeRepresentation::Int32,
        version3::metadata::TypeRepresentation::Int64 => metadata::TypeRepresentation::Int64,
        version3::metadata::TypeRepresentation::Int64AsString => {
            metadata::TypeRepresentation::Int64AsString
        }
        version3::metadata::TypeRepresentation::BigDecimal => {
            metadata::TypeRepresentation::BigDecimal
        }
        version3::metadata::TypeRepresentation::BigDecimalAsString => {
            metadata::TypeRepresentation::BigDecimalAsString
        }
        version3::metadata::TypeRepresentation::Timestamp => {
            metadata::TypeRepresentation::Timestamp
        }
        version3::metadata::TypeRepresentation::Timestamptz => {
            metadata::TypeRepresentation::Timestamptz
        }
        version3::metadata::TypeRepresentation::Time => metadata::TypeRepresentation::Time,
        version3::metadata::TypeRepresentation::Timetz => metadata::TypeRepresentation::Timetz,
        version3::metadata::TypeRepresentation::Date => metadata::TypeRepresentation::Date,
        version3::metadata::TypeRepresentation::UUID => metadata::TypeRepresentation::UUID,
        version3::metadata::TypeRepresentation::Geography => {
            metadata::TypeRepresentation::Geography
        }
        version3::metadata::TypeRepresentation::Geometry => metadata::TypeRepresentation::Geometry,
        version3::metadata::TypeRepresentation::Number => metadata::TypeRepresentation::Number,
        version3::metadata::TypeRepresentation::Integer => metadata::TypeRepresentation::Integer,
        version3::metadata::TypeRepresentation::Json => metadata::TypeRepresentation::Json,
        version3::metadata::TypeRepresentation::Enum(enum_alternatives) => {
            metadata::TypeRepresentation::Enum(enum_alternatives)
        }
    }
}

fn upgrade_comparison_operator(
    comparison_operator: version3::metadata::ComparisonOperator,
) -> metadata::ComparisonOperator {
    let version3::metadata::ComparisonOperator {
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
    aggregate_function: version3::metadata::AggregateFunction,
) -> metadata::AggregateFunction {
    let version3::metadata::AggregateFunction { return_type } = aggregate_function;

    metadata::AggregateFunction { return_type }
}

fn upgrade_tables(
    tables: version3::metadata::TablesInfo,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::TablesInfo {
    metadata::TablesInfo(
        tables
            .0
            .into_iter()
            .map(|(name, table_info)| {
                (name, upgrade_table_info(table_info, occurring_scalar_types))
            })
            .collect(),
    )
}

fn upgrade_table_info(
    table_info: version3::metadata::TableInfo,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::TableInfo {
    let version3::metadata::TableInfo {
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
            .map(|(name, column_info)| {
                (
                    name,
                    upgrade_column_info(column_info, occurring_scalar_types),
                )
            })
            .collect(),
        uniqueness_constraints: upgrade_uniqueness_constraints(uniqueness_constraints),
        foreign_relations: upgrade_foreign_relations(foreign_relations),
        description,
    }
}

fn upgrade_foreign_relations(
    foreign_relations: version3::metadata::ForeignRelations,
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
    foreign_relation: version3::metadata::ForeignRelation,
) -> metadata::ForeignRelation {
    let version3::metadata::ForeignRelation {
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
    uniqueness_constraints: version3::metadata::UniquenessConstraints,
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
    uniqueness_constraint: version3::metadata::UniquenessConstraint,
) -> metadata::UniquenessConstraint {
    metadata::UniquenessConstraint(uniqueness_constraint.0)
}

fn upgrade_column_info(
    column_info: version3::metadata::ColumnInfo,

    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) -> metadata::ColumnInfo {
    let version3::metadata::ColumnInfo {
        name,
        r#type,
        nullable,
        has_default,
        is_identity,
        is_generated,
        description,
    } = column_info;

    let upgraded_type = upgrade_type(r#type);

    record_occurring_scalar_type(&upgraded_type, occurring_scalar_types);

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

fn record_occurring_scalar_type(
    upgraded_type: &metadata::Type,
    occurring_scalar_types: &mut BTreeSet<models::ScalarTypeName>,
) {
    match upgraded_type {
        metadata::Type::ArrayType(ref array_type) => {
            record_occurring_scalar_type(array_type, occurring_scalar_types);
        }
        metadata::Type::ScalarType(scalar_type_name) => {
            occurring_scalar_types.insert(scalar_type_name.clone());
        }
        metadata::Type::CompositeType(_) => {}
    }
}

fn upgrade_is_generated(is_generated: version3::metadata::IsGenerated) -> metadata::IsGenerated {
    match is_generated {
        version3::metadata::IsGenerated::NotGenerated => metadata::IsGenerated::NotGenerated,
        version3::metadata::IsGenerated::Stored => metadata::IsGenerated::Stored,
    }
}

fn upgrade_is_identity(is_identity: version3::metadata::IsIdentity) -> metadata::IsIdentity {
    match is_identity {
        version3::metadata::IsIdentity::NotIdentity => metadata::IsIdentity::NotIdentity,
        version3::metadata::IsIdentity::IdentityByDefault => {
            metadata::IsIdentity::IdentityByDefault
        }
        version3::metadata::IsIdentity::IdentityAlways => metadata::IsIdentity::IdentityAlways,
    }
}

fn upgrade_has_default(has_default: version3::metadata::HasDefault) -> metadata::HasDefault {
    match has_default {
        version3::metadata::HasDefault::NoDefault => metadata::HasDefault::NoDefault,
        version3::metadata::HasDefault::HasDefault => metadata::HasDefault::HasDefault,
    }
}
