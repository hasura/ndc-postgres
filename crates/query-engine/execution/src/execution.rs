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
    let mut connection = acquisition_timer
        .complete_with(connection_result)
        .map_err(|err| {
            metrics.error_metrics.record_connection_acquisition_error();
            err
        })?;

    let query_timer = metrics.time_query_execution();
    let rows_result = execute_query(&mut connection, database_info, query, plan.variables).await;
    query_timer.complete_with(rows_result)
}

/// Convert a query to an EXPLAIN query and execute it against postgres.
pub async fn explain(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<(String, String), Error> {
    let query = plan.explain_query();

    tracing::info!(
        generated_sql = query.sql,
        params = ?&query.params,
        variables = ?&plan.variables,
    );

    let sqlx_query = build_query_with_params(&query, plan.variables)
        .instrument(info_span!("Build query with params"))
        .await?;

    let rows: Vec<sqlx::postgres::PgRow> = {
        let acquisition_timer = metrics.time_connection_acquisition_wait();
        let connection_result = pool
            .acquire()
            .instrument(info_span!("Acquire connection"))
            .await;
        let mut connection = acquisition_timer
            .complete_with(connection_result)
            .map_err(|err| {
                metrics.error_metrics.record_connection_acquisition_error();
                err
            })?;

        // run and fetch from the database
        sqlx_query
            .fetch_all(connection.as_mut())
            .instrument(info_span!(
                "Database request",
                internal.visibility = "user",
                db.system = database_info.system_name,
                db.version_string = database_info.system_version.string,
                db.version_number = database_info.system_version.number,
                db.user = database_info.server_username,
                db.name = database_info.server_database,
                server.address = database_info.server_host,
                server.port = database_info.server_port,
            ))
            .await?
    };

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

/// Execute the query and return the result as bytes.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    query: sql::string::SQL,
    variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
) -> Result<Bytes, Error> {
    let mut buffer = BytesMut::new();

    // build query
    let sqlx_query = build_query_with_params(&query, variables)
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
            "Database request",
            internal.visibility = "user",
            db.system = database_info.system_name,
            db.version_string = database_info.system_version.string,
            db.version_number = database_info.system_version.number,
            db.user = database_info.server_username,
            db.name = database_info.server_database,
            server.address = database_info.server_host,
            server.port = database_info.server_port,
        ))
        .await?;
    Ok(buffer.freeze())
}

/// Create a SQLx query based on our SQL query and bind our parameters and variables to it.
async fn build_query_with_params(
    query: &sql::string::SQL,
    variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
) -> Result<sqlx::query::Query<'_, sqlx::Postgres, sqlx::postgres::PgArguments>, Error> {
    let sqlx_query = sqlx::query(query.sql.as_str());

    let sqlx_query = query
        .params
        .iter()
        .try_fold(sqlx_query, |sqlx_query, param| match param {
            sql::string::Param::String(s) => Ok(sqlx_query.bind(s)),
            sql::string::Param::Variable(var)
                if var == sql::helpers::VARIABLES_OBJECT_PLACEHOLDER =>
            {
                match &variables {
                    None => Err(Error::Query(QueryError::VariableNotFound(var.to_string()))),
                    Some(variables) => {
                        let vars = variables_to_json(variables)?;
                        Ok(sqlx_query.bind(vars))
                    }
                }
            }
            sql::string::Param::Variable(var) => {
                Err(Error::Query(QueryError::VariableNotFound(var.to_string())))
            }
        })?;

    Ok(sqlx_query)
}

/// build an array of variable set objects that will be passed as parameters to postgres.
fn variables_to_json(
    variables: &[BTreeMap<String, serde_json::Value>],
) -> Result<serde_json::Value, Error> {
    Ok(serde_json::Value::Array(
        variables
            .iter()
            .enumerate()
            .map(|(i, varset)| {
                let mut varset = varset
                    .clone()
                    .into_iter()
                    .collect::<serde_json::Map<String, serde_json::Value>>();
                match varset.insert(
                    sql::helpers::VARIABLE_ORDER_FIELD.to_string(),
                    serde_json::Value::Number(i.into()),
                ) {
                    None => Ok(()),
                    Some(_) => Err(Error::Query(QueryError::ReservedVariableName(
                        sql::helpers::VARIABLE_ORDER_FIELD.to_string(),
                    ))),
                }?;
                Ok(serde_json::Value::Object(varset))
            })
            .collect::<Result<Vec<serde_json::Value>, Error>>()?,
    ))
}

pub enum Error {
    Query(QueryError),
    DB(sqlx::Error),
}

pub enum QueryError {
    ReservedVariableName(String),
    VariableNotFound(String),
    NotSupported(String),
}

impl std::fmt::Display for QueryError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            QueryError::ReservedVariableName(thing) => {
                write!(
                    f,
                    "Variable name '{}' is reserved for internal usage.",
                    thing
                )
            }
            QueryError::VariableNotFound(thing) => {
                write!(f, "Variable '{}' not found.", thing)
            }
            QueryError::NotSupported(thing) => {
                write!(f, "{} are not supported.", thing)
            }
        }
    }
}

impl From<sqlx::Error> for Error {
    fn from(err: sqlx::Error) -> Error {
        Error::DB(err)
    }
}
