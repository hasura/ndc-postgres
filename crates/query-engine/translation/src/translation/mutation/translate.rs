//! Translate an incoming `MutationRequest`.

use indexmap::{indexmap, IndexMap};
use std::collections::BTreeMap;

use ndc_sdk::models;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State, TableNameAndReference};
use crate::translation::mutation;
use query_engine_metadata::metadata;
use query_engine_sql::sql;

/// Translate the incoming MutationOperation to an ExecutionPlan (SQL) to be run against the database.
pub fn translate(
    metadata: &metadata::Metadata,
    operation: models::MutationOperation,
    collection_relationships: BTreeMap<String, models::Relationship>,
    mutations_version: Option<metadata::mutations::MutationsVersion>,
) -> Result<sql::execution_plan::Mutation, Error> {
    let env = Env::new(metadata, collection_relationships, mutations_version, None);

    match operation {
        models::MutationOperation::Procedure {
            name,
            arguments,
            fields,
        } => {
            // lookup native query first
            match env.lookup_native_query(&name) {
                Ok(native_query) => {
                    translate_native_query(&env, name, fields, arguments, native_query)
                }
                Err(_) =>
                // and failing that, try a generated mutation,
                {
                    env.lookup_generated_mutation(&name).and_then(|mutation| {
                        translate_mutation(&env, name, fields, arguments, mutation)
                    })
                }
            }
        }
    }
}

/// Translate a built-in delete mutation into an ExecutionPlan (SQL) to be run against the database.
/// Most of this is probably reusable for `insert`, `update` etc in future.
fn translate_mutation(
    env: &Env,
    procedure_name: String,
    fields: Option<models::NestedField>,
    arguments: BTreeMap<String, serde_json::Value>,
    mutation: mutation::generate::Mutation,
) -> Result<sql::execution_plan::Mutation, Error> {
    let mut state = State::new();

    // insert the procedure as a native query and get a reference to it.
    let table_reference = state.make_table_alias("generated_mutation".to_string());

    // create a from clause for the query selecting from the native query.
    let table_alias = state.make_table_alias(procedure_name.to_string());
    let from_clause = sql::ast::From::Table {
        reference: sql::ast::TableReference::AliasedTable(table_reference.clone()),
        alias: table_alias.clone(),
    };

    let (aggregates, fields) = parse_procedure_fields(fields)?;

    // define the query selecting from the native query,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates,
        fields,
        limit: None,
        offset: None,
        order_by: None,
        predicate: None,
    };

    let (return_collection, cte_expr) = match mutation {
        mutation::generate::Mutation::DeleteMutation(delete) => {
            let return_collection = match delete {
                mutation::delete::DeleteMutation::DeleteByKey {
                    ref collection_name,
                    ..
                } => collection_name.clone(),
            };
            (
                return_collection,
                sql::ast::CTExpr::Delete(mutation::delete::translate_delete(
                    &mut state, &delete, arguments,
                )?),
            )
        }
        mutation::generate::Mutation::InsertMutation(insert) => {
            let return_collection = insert.collection_name.clone();
            (
                return_collection,
                sql::ast::CTExpr::Insert(mutation::insert::translate(
                    &mut state, &insert, arguments,
                )?),
            )
        }
    };

    let current_table = TableNameAndReference {
        name: return_collection,
        reference: sql::ast::TableReference::AliasedTable(table_alias),
    };

    // fields
    let returning_select = match &query.fields {
        Some(_) => {
            let (_, returning_select) = crate::translation::query::root::translate_rows_query(
                env,
                &mut state,
                &current_table,
                &from_clause,
                &query,
            )?;

            Some(returning_select)
        }

        None => None,
    };

    // affected rows
    let aggregate_select = crate::translation::query::root::translate_aggregate_query(
        env,
        &mut state,
        &current_table,
        &from_clause,
        &query,
    )?;

    // make this a nice returning structure
    let mut select = sql::helpers::select_mutation_rowset(
        (
            state.make_table_alias("universe".to_string()),
            sql::helpers::make_column_alias("universe".to_string()),
        ),
        (
            state.make_table_alias("returning".to_string()),
            sql::helpers::make_column_alias("returning".to_string()),
        ),
        state.make_table_alias("aggregates".to_string()),
        rows_and_aggregates_to_select_set(returning_select, aggregate_select)?,
    );

    let common_table_expression = sql::ast::CommonTableExpression {
        alias: table_reference,
        column_names: None,
        select: cte_expr,
    };

    // add the procedure native query definition is a with clause.
    select.with = sql::ast::With {
        common_table_expressions: vec![common_table_expression],
    };

    // normalize ast
    let select = sql::rewrites::constant_folding::normalize_select(select);

    Ok(sql::execution_plan::Mutation {
        root_field: procedure_name.clone(),
        query: select,
    })
}

/// Procedures can return a number of affected rows and/or some fields from the rows that are
/// affected, but it must return at least one. A `SelectSet` describes this as a type, so we can
/// convert an optional returning `Select` and an optional aggregate `Select` to a `SelectSet`,
/// failing if neither exists.
fn rows_and_aggregates_to_select_set(
    returning_select: Option<sql::ast::Select>,
    aggregate_select: Option<sql::ast::Select>,
) -> Result<sql::helpers::SelectSet, Error> {
    match (returning_select, aggregate_select) {
        (Some(returning_select), None) => Ok(sql::helpers::SelectSet::Rows(returning_select)),
        (None, Some(aggregate_select)) => Ok(sql::helpers::SelectSet::Aggregates(aggregate_select)),
        (Some(returning_select), Some(aggregate_select)) => Ok(
            sql::helpers::SelectSet::RowsAndAggregates(returning_select, aggregate_select),
        ),
        (None, None) => Err(Error::NoProcedureResultFieldsRequested),
    }
}

/// Translate a Native Query mutation into an ExecutionPlan (SQL) to be run against the database.
fn translate_native_query(
    env: &Env,
    procedure_name: String,
    fields: Option<models::NestedField>,
    arguments: BTreeMap<String, serde_json::Value>,
    native_query: &query_engine_metadata::metadata::NativeQueryInfo,
) -> Result<sql::execution_plan::Mutation, Error> {
    let mut state = State::new();

    // wrap the arguments in models::Argument::Literal because
    // this is what our query processing expects
    let arguments = arguments
        .into_iter()
        .map(|(key, value)| {
            (
                key.clone(),
                models::Argument::Literal {
                    value: value.clone(),
                },
            )
        })
        .collect();

    // insert the procedure as a native query and get a reference to it.
    let table_reference =
        state.insert_native_query(procedure_name.clone(), native_query.clone(), arguments);

    // create a from clause for the query selecting from the native query.
    let table_alias = state.make_table_alias(procedure_name.to_string());
    let from_clause = sql::ast::From::Table {
        reference: table_reference.clone(),
        alias: table_alias.clone(),
    };

    let (aggregates, fields) = parse_procedure_fields(fields)?;

    // define the query selecting from the native query,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates,
        fields,
        limit: None,
        offset: None,
        order_by: None,
        predicate: None,
    };

    let current_table = TableNameAndReference {
        name: procedure_name.to_string(),
        reference: sql::ast::TableReference::AliasedTable(table_alias),
    };

    // fields
    let returning_select = match &query.fields {
        Some(_) => {
            let (_, returning_select) = crate::translation::query::root::translate_rows_query(
                env,
                &mut state,
                &current_table,
                &from_clause,
                &query,
            )?;

            Some(returning_select)
        }

        None => None,
    };

    // affected rows
    let aggregate_select = crate::translation::query::root::translate_aggregate_query(
        env,
        &mut state,
        &current_table,
        &from_clause,
        &query,
    )?;

    // make this a nice returning structure
    let mut select = sql::helpers::select_mutation_rowset(
        (
            state.make_table_alias("universe".to_string()),
            sql::helpers::make_column_alias("universe".to_string()),
        ),
        (
            state.make_table_alias("returning".to_string()),
            sql::helpers::make_column_alias("returning".to_string()),
        ),
        state.make_table_alias("aggregates".to_string()),
        rows_and_aggregates_to_select_set(returning_select, aggregate_select)?,
    );

    // add the procedure native query definition is a with clause.
    select.with = sql::ast::With {
        common_table_expressions: crate::translation::query::native_queries::translate(env, state)?,
    };

    // normalize ast
    let select = sql::rewrites::constant_folding::normalize_select(select);

    Ok(sql::execution_plan::Mutation {
        root_field: procedure_name.clone(),
        query: select,
    })
}

/// A procedure expects an object with two fields:
///     * affected_rows, the integer number of rows affected by the operation
///     * returning, the nested array object of rows returned
///
/// The user must supply at least one of these two structures, and otherwise we'll throw an error.
#[allow(clippy::type_complexity)]
pub fn parse_procedure_fields(
    fields: Option<models::NestedField>,
) -> Result<
    (
        Option<IndexMap<String, models::Aggregate>>, // Contains "affected_rows"
        Option<IndexMap<String, models::Field>>,     // Contains "returning"
    ),
    Error,
> {
    match fields {
        Some(models::NestedField::Object(models::NestedObject { fields })) => {
            let affected_rows = fields
                .get("affected_rows")
                .map(|_| indexmap!("affected_rows".to_string() => models::Aggregate::StarCount{}));

            let returning = match fields.get("returning") {
                Some(field) => match field {
                    models::Field::Column { fields, .. } => match fields {
                        Some(nested_fields) => match nested_fields {
                            models::NestedField::Object(models::NestedObject { .. }) => {
                                Err(Error::UnexpectedStructure(
                                    "single object in 'returning' clause".to_string(),
                                ))?
                            }
                            models::NestedField::Array(models::NestedArray { fields }) => {
                                match &**fields {
                                    models::NestedField::Object(models::NestedObject {
                                        fields,
                                    }) => Some(fields.clone()),
                                    models::NestedField::Array(_) => {
                                        Err(Error::UnexpectedStructure(
                                            "multi-dimensional array in 'returning' clause"
                                                .to_string(),
                                        ))?
                                    }
                                }
                            }
                        },
                        None => None,
                    },
                    models::Field::Relationship { .. } => Err(Error::UnexpectedStructure(
                        "relationship variant in procedure fields".to_string(),
                    ))?,
                },
                None => None,
            };

            if affected_rows.is_none() && returning.is_none() {
                Err(Error::NoProcedureResultFieldsRequested)?
            }

            Ok((affected_rows, returning))
        }

        Some(models::NestedField::Array(_)) => {
            Err(Error::NotImplementedYet("nested array fields".to_string()))
        }
        None => Err(Error::NoProcedureResultFieldsRequested)?,
    }
}
