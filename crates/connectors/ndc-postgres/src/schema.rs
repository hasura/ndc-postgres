//! Implement the `/schema` endpoint to return the connector's schema.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/schema/index.html)
//! for further details.

use std::collections::BTreeMap;

use ndc_sdk::connector;
use ndc_sdk::models;

use ndc_postgres_configuration as configuration;
use query_engine_metadata::metadata;
use query_engine_translation::translation::mutation::{delete, generate, insert};

/// Get the connector's schema.
///
/// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
/// from the NDC specification.
pub async fn get_schema(
    config: configuration::RuntimeConfiguration<'_>,
) -> Result<models::SchemaResponse, connector::SchemaError> {
    let configuration::RuntimeConfiguration { metadata, .. } = config;

    let mut scalar_types: BTreeMap<String, models::ScalarType> =
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
                                    models::ComparisonOperatorDefinition::Custom {
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

    let mut more_object_types = BTreeMap::new();
    let generated_procedures: Vec<models::ProcedureInfo> =
        query_engine_translation::translation::mutation::generate::generate(
            &metadata.tables,
            config.mutations_version,
        )
        .iter()
        .map(|(name, mutation)| {
            mutation_to_procedure(name, mutation, &mut more_object_types, &mut scalar_types)
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
fn mutation_to_procedure(
    name: &String,
    mutation: &generate::Mutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match mutation {
        generate::Mutation::DeleteMutation(delete) => {
            delete_to_procedure(name, delete, object_types, scalar_types)
        }
        generate::Mutation::InsertMutation(insert) => {
            insert_to_procedure(name, insert, object_types, scalar_types)
        }
    }
}

/// given a `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
fn delete_to_procedure(
    name: &String,
    delete: &delete::DeleteMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
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

            arguments.insert(
                "%predicate".to_string(),
                models::ArgumentInfo {
                    argument_type: models::Type::Predicate {
                        object_type_name: collection_name.clone(),
                    },
                    description: Some("a predicate".to_string()),
                },
            );

            make_procedure_type(
                name.to_string(),
                Some(description.to_string()),
                arguments,
                models::Type::Named {
                    name: collection_name.to_string(),
                },
                object_types,
                scalar_types,
            )
        }
    }
}

/// Create an ObjectType out of columns metadata.
fn make_object_type(
    columns: &BTreeMap<String, metadata::database::ColumnInfo>,
) -> models::ObjectType {
    let mut fields = BTreeMap::new();
    for (name, column) in columns {
        match column {
            // columns that are generated or are always identity should not be insertable.
            metadata::database::ColumnInfo {
                is_generated: metadata::database::IsGenerated::Stored,
                ..
            }
            | metadata::database::ColumnInfo {
                is_identity: metadata::database::IsIdentity::IdentityAlways,
                ..
            } => (),
            _ => {
                fields.insert(
                    name.clone(),
                    models::ObjectField {
                        r#type: column_to_type(column),
                        description: None,
                    },
                );
            }
        }
    }
    models::ObjectType {
        description: None,
        fields,
    }
}

/// Given an `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
fn insert_to_procedure(
    name: &String,
    insert: &insert::InsertMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_object_type(&insert.columns);
    let object_name = format!("{name}_object").to_string();
    object_types.insert(object_name.clone(), object_type);

    arguments.insert(
        "_object".to_string(),
        models::ArgumentInfo {
            argument_type: models::Type::Named { name: object_name },
            description: None,
        },
    );

    make_procedure_type(
        name.to_string(),
        Some(insert.description.to_string()),
        arguments,
        models::Type::Named {
            name: insert.collection_name.to_string(),
        },
        object_types,
        scalar_types,
    )
}

/// Build a `ProcedureInfo` type from the given parameters.
///
/// Because procedures return an `affected_rows` count alongside the result type that it's
/// `returning`, we have to generate a separate object type for its result. As part of that, we may
/// also have to include the `int4` scalar type (if it isn't included for another reason elsewhere
/// in the schema). So, this function creates that object type, optionally adds that scalar type,
/// and then returns a `ProcedureInfo` that points to the correct object type.
fn make_procedure_type(
    name: String,
    description: Option<String>,
    arguments: BTreeMap<String, models::ArgumentInfo>,
    result_type: models::Type,

    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut fields = BTreeMap::new();
    let object_type_name = format!("{name}_response");

    // If int4 doesn't exist anywhere else in the schema, we need to add it here. However, a user
    // can't filter or aggregate based on the affected rows of a procedure, so we don't need to add
    // any aggregate functions or comparison operators. However, if int4 exists elsewhere in the
    // schema and has already been added, it will also already contain these functions and
    // operators.
    scalar_types
        .entry("int4".to_string())
        .or_insert(models::ScalarType {
            aggregate_functions: BTreeMap::new(),
            comparison_operators: BTreeMap::new(),
        });

    fields.insert(
        "affected_rows".to_string(),
        models::ObjectField {
            description: Some("The number of rows affected by the mutation".to_string()),
            r#type: models::Type::Named {
                name: "int4".to_string(),
            },
        },
    );

    fields.insert(
        "returning".to_string(),
        models::ObjectField {
            description: Some("Data from rows affected by the mutation".to_string()),
            r#type: models::Type::Array {
                element_type: Box::from(result_type),
            },
        },
    );

    object_types.insert(
        object_type_name.clone(),
        models::ObjectType {
            description: Some(format!("Responses from the '{name}' procedure")),
            fields,
        },
    );

    models::ProcedureInfo {
        name,
        description,
        arguments,
        result_type: models::Type::Named {
            name: object_type_name,
        },
    }
}
