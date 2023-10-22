//! Execute an execution plan against the database.

use std::collections::BTreeMap;

use bytes::{BufMut, Bytes, BytesMut};
use serde_json;
use sqlformat;
use sqlx;
use sqlx::pool::PoolConnection;
use sqlx::{Postgres, Row};
use tracing::{info_span, Instrument};

use crate::database_info::DatabaseInfo;
use crate::metrics;
use query_engine_sql::sql;

/// Execute a query against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<Bytes, Error> {
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
    let rows_result = execute_queries(&mut connection, database_info, query, plan.variables).await;
    query_timer.complete_with(rows_result)
}

// Run the query on each set of variables, returning a result for each.
//
// If `variables` is `None`, the query is run once. If it is an empty vector, the query is not run,
// and an empty array (`[]`) is returned.
//
// The query is assumed to generate valid JSON. The response is a bytestring containing JSON, of
// the form `[/* result 0 */, /* result 1 */, ...]`.
async fn execute_queries(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    query: query_engine_sql::sql::string::SQL,
    variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
) -> Result<Bytes, Error> {
    // this buffer represents the JSON response
    let mut buffer = BytesMut::new();
    buffer.put(&[b'['][..]); // we start by opening the array
    match variables {
        None => {
            let empty_map = BTreeMap::new();
            execute_query(connection, database_info, &query, &empty_map, &mut buffer).await?;
        }
        Some(variable_sets) => {
            let mut i = variable_sets.iter();
            if let Some(first) = i.next() {
                execute_query(connection, database_info, &query, first, &mut buffer).await?;
                for vars in i {
                    buffer.put(&[b','][..]); // each result, except the first, is prefixed by a ','
                    execute_query(connection, database_info, &query, vars, &mut buffer).await?;
                }
            }
        }
    }
    buffer.put(&[b']'][..]); // we end by closing the array
    Ok(buffer.freeze())
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

/// Execute the query on one set of variables, and append the result to the given buffer.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    query: &sql::string::SQL,
    variables: &BTreeMap<String, serde_json::Value>,
    buffer: &mut (impl BufMut + Send),
) -> Result<(), Error> {
    // build query
    let sqlx_query = build_query_with_params(query, variables)
        .instrument(info_span!("Build query with params"))
        .await?;

    // run and fetch from the database
    sqlx_query
        .try_map(|row: sqlx::postgres::PgRow| {
            let mut bytes = row.try_get_raw(0)?.as_bytes().unwrap();
            // If the result is JSONB, PostgreSQL adds a 0x01 at the start of
            // the buffer, which we need to explicitly discard.
            // This will never be valid JSON, so we can discard it safely.
            if bytes.first() == Some(&1) {
                bytes = &bytes[1..];
            }
            buffer.put(bytes);
            Ok(())
        })
        .fetch_one(connection.as_mut())
        .instrument(info_span!(
            "Execute query",
            internal.visibility = "user",
            db.system = database_info.system_name,
            db.version = database_info.system_version,
            db.user = database_info.server_username,
            db.name = database_info.server_database,
            server.address = database_info.server_host,
            server.port = database_info.server_port,
        ))
        .await?;
    Ok(())
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
