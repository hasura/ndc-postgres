//! Execute an execution plan against the database.

use std::collections::BTreeMap;

use serde_json;
use sqlformat;
use sqlx;
use sqlx::pool::PoolConnection;
use sqlx::{Postgres, Row};
use tracing::{info_span, Instrument};

use ndc_sdk::models;

use crate::metrics;
use query_engine_sql::sql;

/// Execute a query against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<models::QueryResponse, Error> {
    let query = plan.query();

    tracing::info!(
        generated_sql = query.sql,
        params = ?&query.params,
        variables = ?&plan.variables,
    );

    let acquisition_timer = metrics.time_connection_acquisition_wait();

    let connection_result = pool
        .acquire()
        .instrument(info_span!("Acquire connection"))
        .await;

    let mut connection = acquisition_timer.complete_with(connection_result)?;

    let query_timer = metrics.time_query_execution();

    let rows_result = execute_queries(&mut connection, query, plan.variables).await;

    let rows = query_timer.complete_with(rows_result)?;

    // tracing::info!(rows_result = ?rows);

    // Make a response from rows.
    let response = async { rows_to_response(rows) }
        .instrument(info_span!("Create response"))
        .await;

    // tracing::info!(query_response = serde_json::to_string(&response).unwrap());

    Ok(response)
}

// run the query on each set of variables. The result is a vector of rows each
// element in the vector is the result of running the query on one set of variables.
async fn execute_queries(
    connection: &mut PoolConnection<Postgres>,
    query: query_engine_sql::sql::string::SQL,
    variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
) -> Result<Vec<serde_json::Value>, Error> {
    match variables {
        None => {
            let empty_map = BTreeMap::new();
            let rows = execute_query(connection, &query, &empty_map).await?;
            Ok(vec![rows])
        }
        Some(variable_sets) => {
            let mut sets_of_rows = vec![];
            for vars in &variable_sets {
                let rows = execute_query(connection, &query, vars).await?;
                sets_of_rows.push(rows);
            }
            Ok(sets_of_rows)
        }
    }
}

/// Take the postgres results and return them as a QueryResponse.
fn rows_to_response(results: Vec<serde_json::Value>) -> models::QueryResponse {
    let rowsets = results
        .into_iter()
        .map(|raw_rowset| serde_json::from_value(raw_rowset).unwrap())
        .collect();

    models::QueryResponse(rowsets)
}

/// Convert a query to an EXPLAIN query and execute it against postgres.
pub async fn explain(
    pool: &sqlx::PgPool,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<(String, String), Error> {
    let query = plan.explain_query();

    tracing::info!(
        generated_sql = query.sql,
        params = ?&query.params,
        variables = ?&plan.variables,
    );

    let empty_map = BTreeMap::new();
    let sqlx_query = match &plan.variables {
        None => build_query_with_params(&query, &empty_map).await?,
        // When we get an explain with multiple variable sets,
        // we choose the first one and return the plan for it,
        // as returning multiple plans isn't really supported.
        Some(variable_sets) => match variable_sets.get(0) {
            None => build_query_with_params(&query, &empty_map).await?,
            Some(vars) => build_query_with_params(&query, vars).await?,
        },
    };

    // run and fetch from the database
    let rows: Vec<sqlx::postgres::PgRow> = sqlx_query.fetch_all(pool).await?;

    let mut results: Vec<String> = vec![];
    for row in rows.into_iter() {
        match row.get(0) {
            None => {}
            Some(col) => {
                results.push(col);
            }
        }
    }

    let pretty = sqlformat::format(
        &query.sql,
        &sqlformat::QueryParams::None,
        sqlformat::FormatOptions::default(),
    );

    Ok((pretty, results.join("\n")))
}

/// Execute the query on one set of variables.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    query: &sql::string::SQL,
    variables: &BTreeMap<String, serde_json::Value>,
) -> Result<serde_json::Value, Error> {
    // build query
    let sqlx_query = build_query_with_params(query, variables)
        .instrument(info_span!("Build query with params"))
        .await?;

    // run and fetch from the database
    let rows = sqlx_query
        .map(|row: sqlx::postgres::PgRow| row.get(0))
        .fetch_one(connection.as_mut())
        .instrument(info_span!("Execute query"))
        .await?;

    Ok(rows)
}

/// Create a SQLx query based on our SQL query and bind our parameters and variables to it.
async fn build_query_with_params<'a>(
    query: &'a sql::string::SQL,
    variables: &'a BTreeMap<String, serde_json::Value>,
) -> Result<sqlx::query::Query<'a, sqlx::Postgres, sqlx::postgres::PgArguments>, Error> {
    let sqlx_query = sqlx::query(query.sql.as_str());

    let sqlx_query = query
        .params
        .iter()
        .try_fold(sqlx_query, |sqlx_query, param| match param {
            sql::string::Param::String(s) => Ok(sqlx_query.bind(s)),
            sql::string::Param::Variable(var) => match variables.get(var) {
                Some(value) => match value {
                    serde_json::Value::String(s) => Ok(sqlx_query.bind(s)),
                    serde_json::Value::Number(n) => Ok(sqlx_query.bind(n.as_f64())),
                    serde_json::Value::Bool(b) => Ok(sqlx_query.bind(b)),
                    // this is a problem - we don't know the type of the value!
                    serde_json::Value::Null => Err(Error::Query(
                        "null variable not currently supported".to_string(),
                    )),
                    serde_json::Value::Array(_array) => Err(Error::Query(
                        "array variable not currently supported".to_string(),
                    )),
                    serde_json::Value::Object(_object) => Err(Error::Query(
                        "object variable not currently supported".to_string(),
                    )),
                },
                None => Err(Error::Query(format!("Variable not found '{}'", var))),
            },
        })?;

    Ok(sqlx_query)
}

pub enum Error {
    Query(String),
    DB(sqlx::Error),
}

impl From<sqlx::Error> for Error {
    fn from(err: sqlx::Error) -> Error {
        Error::DB(err)
    }
}
