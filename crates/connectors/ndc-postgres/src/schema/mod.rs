//! Implement the `/schema` endpoint to return the connector's schema.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/schema/index.html)
//! for further details.

mod helpers;
mod mutation;

use std::collections::BTreeMap;

use ndc_sdk::connector;
use ndc_sdk::models;

use helpers::*;
use ndc_postgres_configuration as configuration;
use query_engine_metadata::metadata;
use query_engine_translation::translation::helpers::Env;

/// Get the connector's schema.
///
/// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
/// from the NDC specification.
pub fn get_schema(
    config: &configuration::Configuration,
) -> Result<models::SchemaResponse, connector::ErrorResponse> {
    let metadata = &config.metadata;
    let mut scalar_types: BTreeMap<models::ScalarTypeName, models::ScalarType> = metadata
        .scalar_types
        .0
        .iter()
        .map(|(scalar_type_name, scalar_type_info)| {
            let result = models::ScalarType {
                representation: scalar_type_info
                    .type_representation
                    .as_ref()
                    .map(map_type_representation),
                aggregate_functions: scalar_type_info
                    .aggregate_functions
                    .iter()
                    .map(|(function_name, function_definition)| {
                        (
                            function_name.clone(),
                            models::AggregateFunctionDefinition {
                                result_type: models::Type::Nullable {
                                    // It turns out that all aggregates defined for postgres
                                    // (_except_ `COUNT`) will return `NULL` for an empty row set.
                                    // Thus, we mark all aggregates as having a nullable return
                                    // type.
                                    underlying_type: Box::new(models::Type::Named {
                                        name: function_definition.return_type.clone(),
                                    }),
                                },
                            },
                        )
                    })
                    .collect(),
                comparison_operators: scalar_type_info
                    .comparison_operators
                    .iter()
                    .map(|(op_name, op_def)| {
                        (
                            op_name.clone(),
                            match op_def.operator_kind {
                                metadata::OperatorKind::Equal => {
                                    models::ComparisonOperatorDefinition::Equal
                                }
                                metadata::OperatorKind::In => {
                                    models::ComparisonOperatorDefinition::In
                                }
                                metadata::OperatorKind::Custom => {
                                    models::ComparisonOperatorDefinition::Custom {
                                        argument_type: models::Type::Named {
                                            name: op_def.argument_type.as_str().into(),
                                        },
                                    }
                                }
                            },
                        )
                    })
                    .collect(),
            };
            (scalar_type_name.clone(), result)
        })
        .collect();

    let collections_by_identifier: BTreeMap<(&str, &str), &str> = metadata
        .tables
        .0
        .iter()
        .map(|(collection_name, table)| {
            (
                (table.schema_name.as_ref(), table.table_name.as_ref()),
                collection_name.as_str(),
            )
        })
        .collect();

    let tables: Vec<models::CollectionInfo> = metadata
        .tables
        .0
        .iter()
        .map(|(collection_name, table)| models::CollectionInfo {
            name: collection_name.clone(),
            description: table.description.clone(),
            arguments: BTreeMap::new(),
            collection_type: collection_name.as_str().into(),
            uniqueness_constraints: table
                .uniqueness_constraints
                .0
                .iter()
                .map(
                    |(constraint_name, metadata::UniquenessConstraint(constraint_columns))| {
                        (
                            constraint_name.clone(),
                            models::UniquenessConstraint {
                                unique_columns: constraint_columns.values().cloned().collect(),
                            },
                        )
                    },
                )
                .collect(),
            foreign_keys: table
                .foreign_relations
                .0
                .iter()
                .map(
                    |(
                        constraint_name,
                        metadata::ForeignRelation {
                            foreign_schema,
                            foreign_table,
                            column_mapping,
                        },
                    )| {
                        (
                            constraint_name.clone(),
                            models::ForeignKeyConstraint {
                                foreign_collection: (*collections_by_identifier
                                    .get(&(
                                        // the foreign schema used to be implied, so if it is not
                                        // provided, we need to default back to the originating
                                        // table's schema
                                        foreign_schema.as_ref().unwrap_or(&table.schema_name),
                                        foreign_table,
                                    ))
                                    .unwrap_or_else(|| {
                                        panic!(
                                            "Unknown foreign table: {foreign_schema:?}.{foreign_table:?}"
                                        )
                                    }))
                                .into(),
                                column_mapping: column_mapping.clone(),
                            },
                        )
                    },
                )
                .collect(),
        })
        .collect();

    let native_queries: Vec<models::CollectionInfo> = metadata
        .native_operations
        .queries
        .0
        .iter()
        .map(|(name, info)| models::CollectionInfo {
            name: name.clone(),
            description: info.description.clone(),
            arguments: info
                .arguments
                .iter()
                .map(|(name, readonly_column_info)| {
                    (
                        name.clone(),
                        models::ArgumentInfo {
                            description: readonly_column_info.description.clone(),
                            argument_type: readonly_column_to_type(readonly_column_info),
                        },
                    )
                })
                .collect(),
            collection_type: name.as_str().into(),
            uniqueness_constraints: BTreeMap::new(),
            foreign_keys: BTreeMap::new(),
        })
        .collect();

    let mut collections = tables;
    collections.extend(native_queries);

    let table_types: BTreeMap<models::ObjectTypeName, models::ObjectType> = metadata
        .tables
        .0
        .iter()
        .map(|(collection_name, table)| {
            let object_type = models::ObjectType {
                description: table.description.clone(),
                fields: table
                    .columns
                    .iter()
                    .map(|(column_name, column_info)| {
                        (
                            column_name.clone(),
                            models::ObjectField {
                                description: column_info.description.clone(),
                                r#type: column_to_type(column_info),
                                arguments: BTreeMap::new(),
                            },
                        )
                    })
                    .collect(),
            };
            (collection_name.as_str().into(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let native_queries_types: BTreeMap<models::ObjectTypeName, models::ObjectType> = metadata
        .native_operations
        .queries
        .0
        .iter()
        .map(|(nq_name, nq_info)| {
            let object_type = models::ObjectType {
                description: nq_info.description.clone(),
                fields: nq_info
                    .columns
                    .iter()
                    .map(|(column_name, column_info)| {
                        (
                            column_name.clone(),
                            models::ObjectField {
                                description: column_info.description.clone(),
                                r#type: readonly_column_to_type(column_info),
                                arguments: BTreeMap::new(),
                            },
                        )
                    })
                    .collect(),
            };
            (nq_name.as_str().into(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let native_mutations_types: BTreeMap<models::ObjectTypeName, models::ObjectType> = metadata
        .native_operations
        .mutations
        .0
        .iter()
        .map(|(nq_name, nq_info)| {
            let object_type = models::ObjectType {
                description: nq_info.description.clone(),
                fields: nq_info
                    .columns
                    .iter()
                    .map(|(column_name, column_info)| {
                        (
                            column_name.clone(),
                            models::ObjectField {
                                description: column_info.description.clone(),
                                r#type: readonly_column_to_type(column_info),
                                arguments: BTreeMap::new(),
                            },
                        )
                    })
                    .collect(),
            };
            (nq_name.as_str().into(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let composite_types: BTreeMap<models::ObjectTypeName, models::ObjectType> = metadata
        .composite_types
        .0
        .iter()
        .map(|(ctype_name, ctype_info)| {
            let object_type = models::ObjectType {
                description: ctype_info.description.clone(),
                fields: ctype_info
                    .fields
                    .iter()
                    .map(|(field_name, field_info)| {
                        (
                            field_name.clone(),
                            models::ObjectField {
                                description: field_info.description.clone(),
                                r#type: type_to_type(&field_info.r#type),
                                arguments: BTreeMap::new(),
                            },
                        )
                    })
                    .collect(),
            };
            (ctype_name.as_str().into(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let mut object_types = table_types;
    object_types.extend(native_queries_types);
    object_types.extend(native_mutations_types);
    object_types.extend(composite_types);

    let mut procedures: Vec<models::ProcedureInfo> = metadata
        .native_operations
        .mutations
        .0
        .iter()
        .map(|(nq_name, nq_info)| {
            mutation::helpers::make_procedure_type(
                nq_name.clone(),
                nq_info.description.clone(),
                nq_info
                    .arguments
                    .iter()
                    .map(|(column_name, column_info)| {
                        (
                            column_name.clone(),
                            models::ArgumentInfo {
                                description: column_info.description.clone(),
                                argument_type: readonly_column_to_type(column_info),
                            },
                        )
                    })
                    .collect(),
                models::Type::Named {
                    name: nq_name.as_str().into(),
                },
                &mut object_types,
                &mut scalar_types,
            )
        })
        .collect();

    let mut more_object_types = BTreeMap::new();
    let env = Env::new(metadata, BTreeMap::new(), config.mutations_version, None);
    let generated_procedures: Vec<models::ProcedureInfo> =
        query_engine_translation::translation::mutation::generate::generate(&env)
            .iter()
            .map(|(name, mutation)| {
                mutation::to_procedure(name, mutation, &mut more_object_types, &mut scalar_types)
            })
            .collect();

    procedures.extend(generated_procedures);
    object_types.extend(more_object_types);

    Ok(models::SchemaResponse {
        collections,
        procedures,
        functions: vec![],
        object_types,
        scalar_types,
    })
}

/// Map our local type representation to ndc-spec type representation.
#[allow(clippy::match_same_arms)] // merging arms would require changing the order, making this harder to understand
fn map_type_representation(
    type_representation: &metadata::TypeRepresentation,
) -> models::TypeRepresentation {
    match type_representation {
        metadata::TypeRepresentation::Boolean => models::TypeRepresentation::Boolean,
        metadata::TypeRepresentation::String => models::TypeRepresentation::String,
        metadata::TypeRepresentation::Float32 => models::TypeRepresentation::Float32,
        metadata::TypeRepresentation::Float64 => models::TypeRepresentation::Float64,
        metadata::TypeRepresentation::Int16 => models::TypeRepresentation::Int16,
        metadata::TypeRepresentation::Int32 => models::TypeRepresentation::Int32,
        // Int64 returns a number.
        metadata::TypeRepresentation::Int64 => models::TypeRepresentation::JSON,
        // Int64AsString returns a string.
        metadata::TypeRepresentation::Int64AsString => models::TypeRepresentation::Int64,
        // BigDecimal returns a number.
        metadata::TypeRepresentation::BigDecimal => models::TypeRepresentation::JSON,
        // BigDecimalAsString returns a string.
        metadata::TypeRepresentation::BigDecimalAsString => models::TypeRepresentation::BigDecimal,
        metadata::TypeRepresentation::Timestamp => models::TypeRepresentation::Timestamp,
        metadata::TypeRepresentation::Timestamptz => models::TypeRepresentation::TimestampTZ,
        metadata::TypeRepresentation::Time => models::TypeRepresentation::String,
        metadata::TypeRepresentation::Timetz => models::TypeRepresentation::String,
        metadata::TypeRepresentation::Date => models::TypeRepresentation::Date,
        metadata::TypeRepresentation::Geometry => models::TypeRepresentation::Geometry,
        metadata::TypeRepresentation::Geography => models::TypeRepresentation::Geography,
        metadata::TypeRepresentation::UUID => models::TypeRepresentation::UUID,
        metadata::TypeRepresentation::Json => models::TypeRepresentation::JSON,
        metadata::TypeRepresentation::Enum(variants) => models::TypeRepresentation::Enum {
            one_of: variants.clone(),
        },
    }
}
