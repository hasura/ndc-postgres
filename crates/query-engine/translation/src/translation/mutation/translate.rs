//! Translate an incoming `MutationRequest`.

use indexmap::{indexmap, IndexMap};
use std::collections::BTreeMap;

use ndc_models as models;

use crate::translation::error::Error;
use crate::translation::helpers::{Env, State};
use query_engine_metadata::metadata;
use query_engine_sql::sql;

use super::v1;
use super::v2;

/// Translate the incoming MutationOperation to an ExecutionPlan (SQL) to be run against the database.
pub fn translate(
    metadata: &metadata::Metadata,
    operation: models::MutationOperation,
    collection_relationships: BTreeMap<models::RelationshipName, models::Relationship>,
    mutations_version: Option<metadata::mutations::MutationsVersion>,
    mutations_prefix: Option<String>,
) -> Result<sql::execution_plan::Mutation, Error> {
    let env = Env::new(
        metadata,
        collection_relationships,
        mutations_version,
        mutations_prefix,
        None,
    );

    match operation {
        models::MutationOperation::Procedure {
            name,
            arguments,
            fields,
        } => {
            // lookup native query first
            match env.lookup_native_mutation(&name) {
                Ok(native_query) => {
                    translate_native_query(&env, &name, fields, arguments, native_query)
                }
                Err(_) =>
                // and failing that, try a generated mutation
                {
                    translate_mutation(&env, &name, fields, &arguments)
                }
            }
        }
    }
}

/// Translate a built-in mutation into an ExecutionPlan (SQL) to be run against the database.
/// Most of this is probably reusable for `insert`, `update` etc in future.
fn translate_mutation(
    env: &Env,
    procedure_name: &models::ProcedureName,
    fields: Option<models::NestedField>,
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<sql::execution_plan::Mutation, Error> {
    let mut state = State::new();

    // insert the procedure as a CTE and get a reference to it.
    let cte_table_alias = state.make_table_alias("generated_mutation".to_string());

    let (aggregates, (returning_alias, fields)) = parse_procedure_fields(fields)?;

    // define the query selecting from the CTE,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates,
        fields,
        limit: None,
        offset: None,
        order_by: None,
        predicate: None,
        groups: None,
    };

    let (return_collection, cte_expr, check_constraint_alias) =
        translate_mutation_expr(env, &mut state, procedure_name, arguments)?;

    let select_set = crate::translation::query::root::translate_query(
        env,
        &mut state,
        &crate::translation::query::root::MakeFrom::TableReference {
            name: return_collection,
            reference: sql::ast::TableReference::AliasedTable(cte_table_alias.clone()),
        },
        None,
        &query,
    )?;

    // make this a nice returning structure
    let query_select = sql::helpers::select_mutation_rowset(
        (
            state.make_table_alias("universe".to_string()),
            sql::helpers::make_column_alias("universe".to_string()),
        ),
        (
            state.make_table_alias(returning_alias.to_string()),
            sql::helpers::make_column_alias(returning_alias.to_string()),
        ),
        &state.make_table_alias("aggregates".to_string()),
        select_set,
    );

    // Make a subselect for the constraint checking of the form:
    //
    // > SELECT coalesce(bool_and(<alias>.<check constraint>), true)
    // > FROM <generated_mutation> AS <alias>
    //
    // bool_and is an aggregate function that does `and` between all values of the column,
    // and coalesce makes sure that if this returns null (in the case of no rows), we get `true`
    // instead.
    let constraint_select = {
        let select_from_cte_table_alias_2 = state.make_table_alias(procedure_name.to_string());
        let check_constraint_reference = sql::ast::ColumnReference::AliasedColumn {
            table: sql::ast::TableReference::AliasedTable(select_from_cte_table_alias_2.clone()),
            column: check_constraint_alias,
        };

        let mut query = sql::helpers::simple_select(vec![(
            sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string()),
            sql::ast::Expression::FunctionCall {
                function: sql::ast::Function::Coalesce,
                args: vec![
                    sql::ast::Expression::FunctionCall {
                        function: sql::ast::Function::BoolAnd,
                        args: vec![sql::ast::Expression::ColumnReference(
                            check_constraint_reference,
                        )],
                    },
                    sql::helpers::true_expr(),
                ],
            },
        )]);

        // create a from clause for the query selecting from the CTE.
        query.from = Some(sql::ast::From::Table {
            reference: sql::ast::TableReference::AliasedTable(cte_table_alias.clone()),
            alias: select_from_cte_table_alias_2,
        });
        query
    };

    // We return a select with two subselects that each return one row.
    // - The first column returns the results of the mutation.
    // - The second column returns whether all constraints passed or failed.
    //
    // > SELECT (<query subselect>), (<constraint check subselect>)
    //
    // In the execution stage, we will use the constraint check to determine whether to
    // rollback the transaction or not.
    let mut select = sql::helpers::simple_select(vec![
        (
            sql::helpers::make_column_alias(sql::helpers::RESULTS_FIELD.to_string()),
            sql::ast::Expression::CorrelatedSubSelect(Box::new(query_select)),
        ),
        (
            sql::helpers::make_column_alias(sql::helpers::CHECK_CONSTRAINT_FIELD.to_string()),
            sql::ast::Expression::CorrelatedSubSelect(Box::new(constraint_select)),
        ),
    ]);

    let common_table_expression = sql::ast::CommonTableExpression {
        alias: cte_table_alias,
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
        root_field: procedure_name.to_string(),
        query: select,
    })
}

/// Translate a Native Query mutation into an ExecutionPlan (SQL) to be run against the database.
fn translate_native_query(
    env: &Env,
    procedure_name: &models::ProcedureName,
    fields: Option<models::NestedField>,
    arguments: BTreeMap<models::ArgumentName, serde_json::Value>,
    native_query: &query_engine_metadata::metadata::NativeQueryInfo,
) -> Result<sql::execution_plan::Mutation, Error> {
    let mut state = State::new();

    // wrap the arguments in models::Argument::Literal because
    // this is what our query processing expects
    let arguments = arguments
        .into_iter()
        .map(|(key, value)| (key, models::Argument::Literal { value }))
        .collect();

    // insert the procedure as a native query and get a reference to it.
    let table_reference = state.insert_native_query(
        &procedure_name.as_str().into(),
        native_query.clone(),
        arguments,
    );

    let (aggregates, (returning_alias, fields)) = parse_procedure_fields(fields)?;

    // define the query selecting from the native query,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates,
        fields,
        limit: None,
        offset: None,
        order_by: None,
        predicate: None,
        groups: None,
    };

    // process inner query and get the SELECTs for the 'rows' and 'aggregates' fields.
    let select_set = crate::translation::query::root::translate_query(
        env,
        &mut state,
        &crate::translation::query::root::MakeFrom::TableReference {
            name: procedure_name.to_string().into(),
            reference: table_reference,
        },
        None,
        &query,
    )?;

    // make this a nice returning structure
    let mut select = sql::helpers::select_mutation_rowset(
        (
            state.make_table_alias("universe".to_string()),
            sql::helpers::make_column_alias("universe".to_string()),
        ),
        (
            state.make_table_alias(returning_alias.to_string()),
            sql::helpers::make_column_alias(returning_alias.to_string()),
        ),
        &state.make_table_alias("aggregates".to_string()),
        select_set,
    );

    // add the procedure native query definition is a with clause.
    let common_table_expressions =
        crate::translation::query::native_queries::translate(env, state)?.0;
    select.with = sql::ast::With {
        common_table_expressions,
    };

    // normalize ast
    let select = sql::rewrites::constant_folding::normalize_select(select);

    Ok(sql::execution_plan::Mutation {
        root_field: procedure_name.to_string(),
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
        Option<IndexMap<models::FieldName, models::Aggregate>>, // Contains "affected_rows"
        (
            models::FieldName,
            Option<IndexMap<models::FieldName, models::Field>>,
        ), // Contains "returning"
    ),
    Error,
> {
    match fields {
        Some(models::NestedField::Object(models::NestedObject { fields })) => {
            let mut affected_rows = None;
            let mut returning = ("returning".into(), None);

            for (alias, field) in fields {
                match field {
                    models::Field::Column {
                        column,
                        fields: _,
                        arguments,
                    } if column == "affected_rows".into() && arguments.is_empty() => {
                        affected_rows = Some(indexmap!(alias => models::Aggregate::StarCount {}));
                    }
                    models::Field::Column {
                        column,
                        fields,
                        arguments,
                    } if column == "returning".into() && arguments.is_empty() => {
                        returning = match fields {
                            Some(nested_fields) => match nested_fields {
                                models::NestedField::Object(models::NestedObject { .. }) => {
                                    Err(Error::UnexpectedStructure(
                                        "single object in 'returning' clause".to_string(),
                                    ))?
                                }
                                models::NestedField::Array(models::NestedArray { fields }) => {
                                    match &*fields {
                                        models::NestedField::Object(models::NestedObject {
                                            fields,
                                        }) => (alias, Some(fields.clone())),
                                        models::NestedField::Array(_) => {
                                            Err(Error::UnexpectedStructure(
                                                "multi-dimensional array in 'returning' clause"
                                                    .to_string(),
                                            ))?
                                        }
                                        ndc_models::NestedField::Collection(_) => {
                                            Err(Error::UnexpectedStructure(
                                                "nested field collection in array in 'returning' clause"
                                                    .to_string(),
                                            ))?
                                        }
                                    }
                                }
                                ndc_models::NestedField::Collection(_) => {
                                    Err(Error::UnexpectedStructure(
                                        "nested field collection array in 'returning' clause"
                                            .to_string(),
                                    ))?
                                }
                            },
                            None => returning,
                        };
                    }
                    _ => Err(Error::UnexpectedStructure(
                        "single object in 'returning' clause".to_string(),
                    ))?,
                }
            }

            if affected_rows.is_none() && returning.1.is_none() {
                Err(Error::NoProcedureResultFieldsRequested)?;
            }

            Ok((affected_rows, returning))
        }

        Some(models::NestedField::Array(_)) => {
            Err(Error::NotImplementedYet("nested array fields".to_string()))
        }
        Some(models::NestedField::Collection(_)) => Err(Error::NotImplementedYet(
            "nested field collection".to_string(),
        )),
        None => Err(Error::NoProcedureResultFieldsRequested)?,
    }
}

/// Dispatch by mutations version and translate to a SQL expression.
fn translate_mutation_expr(
    env: &crate::translation::helpers::Env,
    state: &mut crate::translation::helpers::State,
    procedure_name: &models::ProcedureName,
    arguments: &BTreeMap<models::ArgumentName, serde_json::Value>,
) -> Result<
    (
        models::CollectionName,
        sql::ast::CTExpr,
        sql::ast::ColumnAlias,
    ),
    Error,
> {
    match env.mutations_version {
        None => Err(Error::MutationVersionNotSet),
        Some(metadata::mutations::MutationsVersion::V1) => {
            v1::translate(env, state, procedure_name, arguments)
        }
        Some(metadata::mutations::MutationsVersion::V2) => {
            v2::translate(env, state, procedure_name, arguments)
        }
    }
}
