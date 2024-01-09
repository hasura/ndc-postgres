//! Implement the `/schema` endpoint to return the connector's schema.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/schema/index.html)
//! for further details.

use std::collections::BTreeMap;

use super::configuration;
use ndc_sdk::connector;
use ndc_sdk::models;
use query_engine_metadata::metadata;
use query_engine_translation::translation::mutation::{delete, generate};

/// Get the connector's schema.
///
/// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
/// from the NDC specification.
pub async fn get_schema(
    config: &configuration::RuntimeConfiguration,
) -> Result<models::SchemaResponse, connector::SchemaError> {
    let configuration::RuntimeConfiguration { metadata, .. } = config;

    let scalar_types: BTreeMap<String, models::ScalarType> =
        configuration::occurring_scalar_types(&metadata.tables, &metadata.native_queries)
            .iter()
            .map(|scalar_type| {
                (
                    scalar_type.0.clone(),
                    models::ScalarType {
                        aggregate_functions: metadata
                            .aggregate_functions
                            .0
                            .get(scalar_type)
                            .unwrap_or(&BTreeMap::new())
                            .iter()
                            .map(|(function_name, function_definition)| {
                                (
                                    function_name.clone(),
                                    models::AggregateFunctionDefinition {
                                        result_type: models::Type::Named {
                                            name: function_definition.return_type.0.clone(),
                                        },
                                    },
                                )
                            })
                            .collect(),
                        comparison_operators: metadata
                            .comparison_operators
                            .0
                            .get(scalar_type)
                            .unwrap_or(&BTreeMap::new())
                            .iter()
                            .map(|(op_name, op_def)| {
                                (
                                    op_name.clone(),
                                    models::ComparisonOperatorDefinition {
                                        argument_type: models::Type::Named {
                                            name: op_def.argument_type.0.clone(),
                                        },
                                    },
                                )
                            })
                            .collect(),
                    },
                )
            })
            .collect();

    let collections_by_identifier: BTreeMap<(&str, &str), &str> = metadata
        .tables
        .0
        .iter()
        .map(|(collection_name, table)| {
            (
                (table.schema_name.as_ref(), table.table_name.as_ref()),
                collection_name.as_ref(),
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
            collection_type: collection_name.clone(),
            uniqueness_constraints: table
                .uniqueness_constraints
                .0
                .iter()
                .map(
                    |(constraint_name, metadata::UniquenessConstraint(constraint_columns))| {
                        (
                            constraint_name.clone(),
                            models::UniquenessConstraint {
                                unique_columns: constraint_columns.iter().cloned().collect(),
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
                                foreign_collection: collections_by_identifier
                                    .get(&(
                                        // the foreign schema used to be implied, so if it is not
                                        // provided, we need to default back to the originating
                                        // table's schema
                                        foreign_schema.as_ref().unwrap_or(&table.schema_name),
                                        &foreign_table,
                                    ))
                                    .unwrap_or_else(|| {
                                        panic!(
                                            "Unknown foreign table: {:?}.{:?}",
                                            foreign_schema, foreign_table
                                        )
                                    })
                                    .to_string(),
                                column_mapping: column_mapping.clone(),
                            },
                        )
                    },
                )
                .collect(),
        })
        .collect();

    let native_queries: Vec<models::CollectionInfo> = metadata
        .native_queries
        .0
        .iter()
        .filter(|(_, info)| !info.is_procedure)
        .map(|(name, info)| models::CollectionInfo {
            name: name.clone(),
            description: info.description.clone(),
            arguments: info
                .arguments
                .iter()
                .map(|(name, column_info)| {
                    (
                        name.clone(),
                        models::ArgumentInfo {
                            description: column_info.description.clone(),
                            argument_type: column_to_type(column_info),
                        },
                    )
                })
                .collect(),
            collection_type: name.clone(),
            uniqueness_constraints: BTreeMap::new(),
            foreign_keys: BTreeMap::new(),
        })
        .collect();

    let mut collections = tables;
    collections.extend(native_queries);

    let table_types =
        BTreeMap::from_iter(metadata.tables.0.iter().map(|(collection_name, table)| {
            let object_type = models::ObjectType {
                description: table.description.clone(),
                fields: BTreeMap::from_iter(table.columns.values().map(|column| {
                    (
                        column.name.clone(),
                        models::ObjectField {
                            description: column.description.clone(),
                            r#type: column_to_type(column),
                        },
                    )
                })),
            };
            (collection_name.clone(), object_type)
        }));

    let native_queries_types =
        BTreeMap::from_iter(metadata.native_queries.0.iter().map(|(name, info)| {
            let object_type = models::ObjectType {
                description: info.description.clone(),
                fields: BTreeMap::from_iter(info.columns.values().map(|column| {
                    (
                        column.name.clone(),
                        models::ObjectField {
                            description: column.description.clone(),
                            r#type: column_to_type(column),
                        },
                    )
                })),
            };
            (name.clone(), object_type)
        }));

    let composite_types =
        BTreeMap::from_iter(metadata.composite_types.0.iter().map(|(name, info)| {
            let object_type = models::ObjectType {
                description: info.description.clone(),
                fields: BTreeMap::from_iter(info.fields.values().map(|field| {
                    (
                        field.name.clone(),
                        models::ObjectField {
                            description: field.description.clone(),
                            r#type: type_to_type(&field.r#type),
                        },
                    )
                })),
            };
            (name.clone(), object_type)
        }));

    let mut object_types = table_types;
    object_types.extend(native_queries_types);
    object_types.extend(composite_types);

    let mut procedures: Vec<models::ProcedureInfo> = metadata
        .native_queries
        .0
        .iter()
        .filter(|(_, info)| info.is_procedure)
        .map(|(name, info)| models::ProcedureInfo {
            name: name.clone(),
            description: info.description.clone(),
            arguments: info
                .arguments
                .iter()
                .map(|(name, column_info)| {
                    (
                        name.clone(),
                        models::ArgumentInfo {
                            description: column_info.description.clone(),
                            argument_type: column_to_type(column_info),
                        },
                    )
                })
                .collect(),
            result_type: models::Type::Named { name: name.clone() },
        })
        .collect();

    let generated_procedures: Vec<models::ProcedureInfo> =
        query_engine_translation::translation::mutation::generate::generate(
            &metadata.tables,
            &config.mutations_version,
        )
        .iter()
        .map(|(name, mutation)| mutation_to_procedure(name, mutation))
        .collect();

    procedures.extend(generated_procedures);

    Ok(models::SchemaResponse {
        collections,
        procedures,
        functions: vec![],
        object_types,
        scalar_types,
    })
}

fn column_to_type(column: &metadata::ColumnInfo) -> models::Type {
    match &column.nullable {
        metadata::Nullable::NonNullable => type_to_type(&column.r#type),
        metadata::Nullable::Nullable => models::Type::Nullable {
            underlying_type: Box::new(type_to_type(&column.r#type)),
        },
    }
}

fn type_to_type(typ: &metadata::Type) -> models::Type {
    match &typ {
        metadata::Type::ArrayType(typ) => models::Type::Array {
            element_type: Box::new(type_to_type(typ)),
        },
        metadata::Type::ScalarType(scalar_type) => models::Type::Named {
            name: scalar_type.0.clone(),
        },
        metadata::Type::CompositeType(t) => models::Type::Named { name: t.clone() },
    }
}

/// Turn our different `Mutation` items into `ProcedureInfo`s to be output in the schema
fn mutation_to_procedure(name: &String, mutation: &generate::Mutation) -> models::ProcedureInfo {
    match mutation {
        generate::Mutation::DeleteMutation(delete) => delete_to_procedure(name, delete),
    }
}

/// given a `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
fn delete_to_procedure(name: &String, delete: &delete::DeleteMutation) -> models::ProcedureInfo {
    match delete {
        delete::DeleteMutation::DeleteByKey {
            by_column,
            description,
            collection_name,
            ..
        } => {
            let mut arguments = BTreeMap::new();

            arguments.insert(
                by_column.name.clone(),
                models::ArgumentInfo {
                    argument_type: column_to_type(by_column),
                    description: by_column.description.clone(),
                },
            );

            models::ProcedureInfo {
                name: name.to_string(),
                description: Some(description.to_string()),
                arguments,
                result_type: models::Type::Named {
                    name: collection_name.to_string(),
                },
            }
        }
    }
}
