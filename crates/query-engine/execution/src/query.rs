//! Execute an execution plan against the database.

use std::collections::BTreeMap;

use bytes::{BufMut, Bytes, BytesMut};
use sqlx::pool::PoolConnection;
use sqlx::postgres::Postgres;
use sqlx::Row;
use tracing::{info_span, Instrument};

use ndc_models as models;
use query_engine_sql::sql;

use crate::database_info::DatabaseInfo;
use crate::error::{Error, QueryError};
use crate::helpers::{execute_statement, rollback_on_exception};
use crate::metrics;

/// Execute a query against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>,
) -> Result<Bytes, Error> {
    let acquisition_timer = metrics.time_connection_acquisition_wait();
    let connection_result = pool
        .acquire()
        .instrument(info_span!(
            "Acquire connection",
            internal.visibility = "user",
        ))
        .await;
    let mut connection = acquisition_timer
        .complete_with(connection_result)
        .inspect_err(|_err| {
            metrics.error_metrics.record_connection_acquisition_error();
        })?;

    let query_timer = metrics.time_query_execution();
    let rows_result = rollback_on_exception(
        execute_query(&mut connection, database_info, plan).await,
        connection,
    )
    .await;

    query_timer.complete_with(rows_result)
}

/// Convert a query to an EXPLAIN query and execute it against postgres.
pub async fn explain(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>,
) -> Result<(String, String), Error> {
    let query = plan.query;
    let query_sql = query.explain_query_sql();

    let results = {
        // When we get a query that provides the variables field but it is empty,
        // this is an indication that the user wants to see the query plan for this
        // query that uses variables but without supplying the variables.
        // One particular such use-case is explaining remote-joins.
        // In this case, we do not run an EXPLAIN query against postgres -
        // we just return the generated SQL.
        if query.variables.is_some() && query.variables.as_ref().unwrap().is_empty() {
            tracing::info!(
                generated_sql = query_sql.sql,
                params = ?&query_sql.params,
                variables = ?&query.variables,
            );
            Ok(String::new())
        }
        // Otherwise, we proceed as usual.
        else {
            let acquisition_timer = metrics.time_connection_acquisition_wait();
            let connection_result = pool
                .acquire()
                .instrument(info_span!(
                    "Acquire connection",
                    internal.visibility = "user",
                ))
                .await;
            let mut connection = acquisition_timer
                .complete_with(connection_result)
                .inspect_err(|_err| {
                    metrics.error_metrics.record_connection_acquisition_error();
                })?;

            for statement in plan.pre {
                execute_statement(&mut connection, &statement).await?;
            }

            tracing::info!(
                generated_sql = query_sql.sql,
                params = ?&query_sql.params,
                variables = ?&query.variables,
            );

            let sqlx_query =
                async { build_query_with_params(&query_sql, query.variables.as_deref()) }
                    .instrument(info_span!(
                        "Build query with params",
                        internal.visibility = "user",
                    ))
                    .await?;

            let rows: Vec<sqlx::postgres::PgRow> = {
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
            for row in rows {
                match row.get(0) {
                    None => {}
                    Some(col) => {
                        results.push(col);
                    }
                }
            }

            for statement in plan.post {
                execute_statement(&mut connection, &statement).await?;
            }
            Ok::<String, Error>(results.join("\n"))
        }
    }?;

    let pretty = sqlformat::format(
        &query_sql.sql,
        &sqlformat::QueryParams::None,
        sqlformat::FormatOptions::default(),
    );

    Ok((pretty, results))
}

/// Execute the query and return the result as bytes.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Query>,
) -> Result<Bytes, Error> {
    for statement in plan.pre {
        execute_statement(connection, &statement).await?;
    }

    let query = plan.query;
    let query_sql = query.query_sql();

    tracing::info!(
        generated_sql = query_sql.sql,
        params = ?query_sql.params,
        variables = ?query.variables,
    );

    let mut buffer = BytesMut::new();

    // build query
    let sqlx_query = async { build_query_with_params(&query_sql, query.variables.as_deref()) }
        .instrument(info_span!(
            "Build query with params",
            internal.visibility = "user",
        ))
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

    for statement in plan.post {
        execute_statement(connection, &statement).await?;
    }

    Ok(buffer.freeze())
}

/// Create a SQLx query based on our SQL query and bind our parameters and variables to it.
fn build_query_with_params<'a>(
    query: &'a sql::string::SQL,
    variables: Option<&'a [BTreeMap<models::VariableName, serde_json::Value>]>,
) -> Result<sqlx::query::Query<'a, sqlx::Postgres, sqlx::postgres::PgArguments>, Error> {
    let initial_query = sqlx::query(&query.sql);
    query
        .params
        .iter()
        .try_fold(initial_query, |sqlx_query, param| match param {
            sql::string::Param::String(s) => Ok(sqlx_query.bind(s)),
            sql::string::Param::Value(v) => Ok(sqlx_query.bind(v)),
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
        })
}

/// build an array of variable set objects that will be passed as parameters to postgres.
fn variables_to_json(
    variables: &[BTreeMap<models::VariableName, serde_json::Value>],
) -> Result<serde_json::Value, Error> {
    Ok(serde_json::Value::Array(
        variables
            .iter()
            .enumerate()
            .map(|(i, varset)| {
                let mut row = serde_json::Map::new();

                row.insert(
                    sql::helpers::VARIABLE_ORDER_FIELD.to_string(),
                    serde_json::Value::Number(i.into()),
                );

                let variables_field = serde_json::Value::Object(
                    varset
                        .iter()
                        .map(|(argument, value)| (argument.to_string(), value.clone()))
                        .collect::<serde_json::Map<String, serde_json::Value>>(),
                );
                row.insert(sql::helpers::VARIABLES_FIELD.to_string(), variables_field);

                Ok(serde_json::Value::Object(row))
            })
            .collect::<Result<Vec<serde_json::Value>, Error>>()?,
    ))
}
