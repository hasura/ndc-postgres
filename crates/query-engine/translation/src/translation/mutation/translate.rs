//! Translate an incoming `MutationRequest`.

use indexmap::indexmap;
use std::collections::BTreeMap;

use indexmap::IndexMap;
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
) -> Result<sql::execution_plan::Mutation, Error> {
    let env = Env::new(metadata, collection_relationships);

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
                        translate_generated_mutation(&env, name, fields, arguments, mutation)
                    })
                }
            }
        }
    }
}

fn translate_generated_mutation(
    env: &Env,
    procedure_name: String,
    fields: Option<IndexMap<String, ndc_sdk::models::Field>>,
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

    // define the query selecting from the native query,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates: Some(indexmap!("affected_rows".to_string() => models::Aggregate::StarCount{})),
        fields: fields.clone(),
        limit: None,
        offset: None,
        order_by: None,
        predicate: None,
    };

    // return type of our mutation, there must be a nicer way to get the relevant collection type
    // name
    let return_collection = match &mutation {
        mutation::generate::Mutation::DeleteMutation(
            mutation::delete::DeleteMutation::DeleteByKey {
                schema_name: sql::ast::SchemaName(schema_name),
                table_name: sql::ast::TableName(table_name),
                ..
            },
        ) => {
            if schema_name == "public" {
                table_name.to_string()
            } else {
                format!("{}_{}", schema_name, table_name)
            }
        }
    };

    let current_table = TableNameAndReference {
        name: return_collection,
        reference: sql::ast::TableReference::AliasedTable(table_alias),
    };

    // fields
    let returning_select = crate::translation::query::root::translate_rows_query(
        &env,
        &mut state,
        &current_table,
        &from_clause,
        &query,
    )?;

    // affected rows
    let aggregate_select = crate::translation::query::root::translate_aggregate_query(
        &env,
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
        returning_select,
        aggregate_select,
    );

    let cte_expr = match mutation {
        mutation::generate::Mutation::DeleteMutation(delete) => sql::ast::CTExpr::Delete(
            mutation::delete::translate_delete(state, &delete, arguments),
        ),
    };

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

fn translate_native_query(
    env: &Env,
    procedure_name: String,
    fields: Option<IndexMap<String, ndc_sdk::models::Field>>,
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

    // define the query selecting from the native query,
    // selecting the affected_rows as aggregate and the fields.
    let query = models::Query {
        aggregates: Some(indexmap!("affected_rows".to_string() => models::Aggregate::StarCount{})),
        fields: fields.clone(),
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
    let returning_select = crate::translation::query::root::translate_rows_query(
        &env,
        &mut state,
        &current_table,
        &from_clause,
        &query,
    )?;

    // affected rows
    let aggregate_select = crate::translation::query::root::translate_aggregate_query(
        &env,
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
        returning_select,
        aggregate_select,
    );

    // add the procedure native query definition is a with clause.
    select.with = sql::ast::With {
        common_table_expressions: crate::translation::query::native_queries::translate(state)?,
    };

    // normalize ast
    let select = sql::rewrites::constant_folding::normalize_select(select);

    Ok(sql::execution_plan::Mutation {
        root_field: procedure_name.clone(),
        query: select,
    })
}
