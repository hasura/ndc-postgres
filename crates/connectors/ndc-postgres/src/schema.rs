//! Implement the `/schema` endpoint to return the connector's schema.
//! See the Hasura
//! [Native Data Connector Specification](https://hasura.github.io/ndc-spec/specification/schema/index.html)
//! for further details.

use std::collections::BTreeMap;

use ndc_sdk::connector;
use ndc_sdk::models;

use ndc_postgres_configuration as configuration;
use query_engine_metadata::metadata;
use query_engine_translation::translation::helpers::Env;
use query_engine_translation::translation::mutation;

/// Get the connector's schema.
///
/// This function implements the [schema endpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)
/// from the NDC specification.
pub fn get_schema(
    config: &configuration::Configuration,
) -> Result<models::SchemaResponse, connector::SchemaError> {
    let metadata = &config.metadata;
    let mut scalar_types: BTreeMap<String, models::ScalarType> = metadata
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
                                        name: function_definition.return_type.0.clone(),
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
                                            name: op_def.argument_type.0.clone(),
                                        },
                                    }
                                }
                            },
                        )
                    })
                    .collect(),
            };
            (scalar_type_name.0.clone(), result)
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
            collection_type: name.clone(),
            uniqueness_constraints: BTreeMap::new(),
            foreign_keys: BTreeMap::new(),
        })
        .collect();

    let mut collections = tables;
    collections.extend(native_queries);

    let table_types = metadata
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
            (collection_name.clone(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let native_queries_types = metadata
        .native_queries
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
            (nq_name.clone(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let composite_types = metadata
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
            (ctype_name.0.clone(), object_type)
        })
        .collect::<BTreeMap<_, _>>();

    let mut object_types = table_types;
    object_types.extend(native_queries_types);
    object_types.extend(composite_types);

    let mut procedures: Vec<models::ProcedureInfo> = metadata
        .native_queries
        .0
        .iter()
        .filter(|(_, nq_info)| nq_info.is_procedure)
        .map(|(nq_name, nq_info)| {
            make_procedure_type(
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
                    name: nq_name.clone(),
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

/// Extract the models::Type representation of a column.
fn column_to_type(column: &metadata::ColumnInfo) -> models::Type {
    match &column.nullable {
        metadata::Nullable::NonNullable => type_to_type(&column.r#type),
        metadata::Nullable::Nullable => models::Type::Nullable {
            underlying_type: Box::new(type_to_type(&column.r#type)),
        },
    }
}

/// Extract the models::Type representation of a readonly column.
fn readonly_column_to_type(column: &metadata::ReadOnlyColumnInfo) -> models::Type {
    match &column.nullable {
        metadata::Nullable::NonNullable => type_to_type(&column.r#type),
        metadata::Nullable::Nullable => models::Type::Nullable {
            underlying_type: Box::new(type_to_type(&column.r#type)),
        },
    }
}

fn type_to_type(typ: &metadata::Type) -> models::Type {
    match typ {
        metadata::Type::ArrayType(typ) => models::Type::Array {
            element_type: Box::new(type_to_type(typ)),
        },
        metadata::Type::ScalarType(scalar_type) => models::Type::Named {
            name: scalar_type.0.clone(),
        },
        metadata::Type::CompositeType(t) => models::Type::Named { name: t.0.clone() },
    }
}

/// Turn our different `Mutation` items into `ProcedureInfo`s to be output in the schema
fn mutation_to_procedure(
    name: &String,
    mutation: &mutation::generate::Mutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match mutation {
        mutation::generate::Mutation::V1(mutation::v1::Mutation::DeleteMutation(delete)) => {
            v1_delete_to_procedure(name, delete, object_types, scalar_types)
        }
        mutation::generate::Mutation::V1(mutation::v1::Mutation::InsertMutation(insert)) => {
            v1_insert_to_procedure(name, insert, object_types, scalar_types)
        }
        mutation::generate::Mutation::Experimental(
            mutation::experimental::Mutation::DeleteMutation(delete),
        ) => experimental_delete_to_procedure(name, delete, object_types, scalar_types),
        mutation::generate::Mutation::Experimental(
            mutation::experimental::Mutation::InsertMutation(insert),
        ) => experimental_insert_to_procedure(name, insert, object_types, scalar_types),
        mutation::generate::Mutation::Experimental(
            mutation::experimental::Mutation::UpdateMutation(update),
        ) => experimental_update_to_procedure(name, update, object_types, scalar_types),
    }
}

/// given a v1 `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
fn v1_delete_to_procedure(
    name: &String,
    delete: &mutation::v1::delete::DeleteMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match delete {
        mutation::v1::delete::DeleteMutation::DeleteByKey {
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

/// given an experimental `DeleteMutation`, turn it into a `ProcedureInfo` to be output in the schema
fn experimental_delete_to_procedure(
    name: &String,
    delete: &mutation::experimental::delete::DeleteMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    match delete {
        mutation::experimental::delete::DeleteMutation::DeleteByKey {
            by_columns,
            filter,
            description,
            collection_name,
            table_name: _,
            schema_name: _,
        } => {
            let mut arguments = BTreeMap::new();

            for column in by_columns {
                arguments.insert(
                    column.name.clone(),
                    models::ArgumentInfo {
                        argument_type: column_to_type(column),
                        description: column.description.clone(),
                    },
                );
            }

            arguments.insert(
                filter.argument_name.clone(),
                models::ArgumentInfo {
                    argument_type: models::Type::Predicate {
                        object_type_name: collection_name.clone(),
                    },
                    description: Some(filter.description.clone()),
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
                        arguments: BTreeMap::new(),
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

/// Given a v1 `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
fn v1_insert_to_procedure(
    name: &String,
    insert: &mutation::v1::insert::InsertMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_object_type(&insert.columns);
    let object_name = format!("{name}_object");
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

/// Given an experimental `InsertMutation`, turn it into a `ProcedureInfo` to be output in the schema.
fn experimental_insert_to_procedure(
    name: &String,
    insert: &mutation::experimental::insert::InsertMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mut arguments = BTreeMap::new();
    let object_type = make_object_type(&insert.columns);
    let object_name = format!("{name}_object");
    object_types.insert(object_name.clone(), object_type);

    arguments.insert(
        "_objects".to_string(),
        models::ArgumentInfo {
            argument_type: models::Type::Array {
                element_type: Box::new(models::Type::Named { name: object_name }),
            },
            description: None,
        },
    );
    arguments.insert(
        insert.constraint.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Predicate {
                object_type_name: insert.collection_name.clone(),
            },
            description: Some(insert.constraint.description.clone()),
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

/// Given an experimental `UpdateMutation`, turn it into a `ProcedureInfo` to be output in the schema.
fn experimental_update_to_procedure(
    procedure_name: &str,
    update: &mutation::experimental::update::UpdateMutation,
    object_types: &mut BTreeMap<String, models::ObjectType>,
    scalar_types: &mut BTreeMap<String, models::ScalarType>,
) -> models::ProcedureInfo {
    let mutation::experimental::update::UpdateMutation::UpdateByKey(update_by_key) = update;

    let mut arguments = BTreeMap::new();

    // by columns arguments.
    for by_column in &update_by_key.by_columns {
        arguments.insert(
            by_column.name.clone(),
            models::ArgumentInfo {
                argument_type: column_to_type(by_column),
                description: by_column.description.clone(),
            },
        );
    }

    // pre check argument.
    arguments.insert(
        update_by_key.pre_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Predicate {
                object_type_name: update_by_key.collection_name.clone(),
            },
            description: Some(update_by_key.pre_check.description.clone()),
        },
    );

    // post check argument.
    arguments.insert(
        update_by_key.post_check.argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Predicate {
                object_type_name: update_by_key.collection_name.clone(),
            },
            description: Some(update_by_key.post_check.description.clone()),
        },
    );

    // update columns argument.
    // Is of the form update_columns: { <column_name>: { <operation>: <value> }, ... }.
    //
    // 1. We need to create an object type for each `{ <operation>: <value> }` object
    // 2. We need to create an object type for the mapping of column to column update object
    // 3. We need to add the argument to match the name of the object in (2)

    // Keep track of the fields.
    let mut fields = BTreeMap::new();

    // Make an object type for each column's update object.
    for (column_name, column_info) in &update_by_key.table_columns {
        let (object_name, object_type) = make_update_column_type(
            &update_by_key.collection_name,
            column_name,
            column_to_type(column_info),
        );
        // add to object types
        object_types.insert(object_name.clone(), object_type.clone());
        // Remember for the update_columns type
        fields.insert(
            column_name.clone(),
            models::ObjectField {
                description: Some(format!(
                    "Update the '{column_name}' column in the '{}' collection.",
                    update_by_key.collection_name
                )),
                r#type: models::Type::Named { name: object_name },
                arguments: BTreeMap::new(),
            },
        );
    }

    // Create the update columns object type.
    let update_columns_object_type_name = format!(
        "{procedure_name}_{}",
        update_by_key.update_columns_argument_name
    );

    object_types.insert(
        update_columns_object_type_name.clone(),
        models::ObjectType {
            description: Some(format!(
                "Update the columns of the '{}' collection",
                update_by_key.collection_name
            )),
            fields,
        },
    );

    // Insert the update columns argument.
    arguments.insert(
        update_by_key.update_columns_argument_name.clone(),
        models::ArgumentInfo {
            argument_type: models::Type::Named {
                name: update_columns_object_type_name,
            },
            description: None,
        },
    );

    // Make a type for the procedure.
    make_procedure_type(
        procedure_name.to_string(),
        Some(update_by_key.description.to_string()),
        arguments,
        models::Type::Named {
            name: update_by_key.collection_name.to_string(),
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
            representation: Some(models::TypeRepresentation::Int32),
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
            arguments: BTreeMap::new(),
        },
    );

    fields.insert(
        "returning".to_string(),
        models::ObjectField {
            description: Some("Data from rows affected by the mutation".to_string()),
            r#type: models::Type::Array {
                element_type: Box::from(result_type),
            },
            arguments: BTreeMap::new(),
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

/// Build an `ObjectType` for an update column.
fn make_update_column_type(
    collection_name: &str,
    column_name: &str,
    column_type: models::Type,
) -> (String, models::ObjectType) {
    let mut fields = BTreeMap::new();
    let object_type_name = format!("update_column_{collection_name}_{column_name}");

    // Right now we only support set
    fields.insert(
        "_set".to_string(),
        models::ObjectField {
            description: Some("Set the column to this value".to_string()),
            r#type: column_type,
            arguments: BTreeMap::new(),
        },
    );

    (
        object_type_name.clone(),
        models::ObjectType {
            description: Some(format!(
                "Update the '{column_name}' column in the '{collection_name}' collection"
            )),
            fields,
        },
    )
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
