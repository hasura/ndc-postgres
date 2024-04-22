//! Execute a mutation execution plan against the database.

use bytes::{BufMut, Bytes, BytesMut};
use sqlx::pool::PoolConnection;
use sqlx::postgres::Postgres;
use sqlx::Row;
use tracing::{info_span, Instrument};

use query_engine_sql::sql;

use crate::database_info::DatabaseInfo;
use crate::error::{Error, QueryError};
use crate::helpers::{execute_statement, rollback_on_exception};
use crate::metrics;

/// Execute mutations against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
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
        .map_err(|err| {
            metrics.error_metrics.record_connection_acquisition_error();
            err
        })?;

    let query_timer = metrics.time_query_execution();
    let rows_result = rollback_on_exception(
        execute_mutations(&mut connection, database_info, plan).await,
        connection,
    )
    .await;
    query_timer.complete_with(rows_result)
}

/// Run mutations, returning a result for each.
///
/// The mutation is assumed to generate valid JSON. The response is a bytestring containing JSON, of
/// the form `[/* result 0 */, /* result 1 */, ...]`.
async fn execute_mutations(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
) -> Result<Bytes, Error> {
    for statement in plan.pre {
        execute_statement(connection, &statement).await?;
    }

    // this buffer represents the JSON response
    let mut buffer = BytesMut::new();
    buffer.put(&[b'{'][..]); // we start by opening an object
    buffer.put(&b"\"operation_results\":"[..]); // specify the key for MutationResponse
    buffer.put(&[b'['][..]); // open the responses array

    // iterate over mutations
    let mut i = plan.query.0.iter();
    if let Some(mutation) = i.next() {
        let mutation_sql = mutation.query_sql();

        tracing::info!(
            generated_sql = mutation_sql.sql,
            params = ?&mutation_sql.params,
        );

        execute_query(connection, database_info, &mutation_sql, &mut buffer).await?;
        for mutation in i {
            buffer.put(&[b','][..]); // each result, except the first, is prefixed by a ','

            let mutation_sql = mutation.query_sql();

            tracing::info!(
                generated_sql = mutation_sql.sql,
                params = ?&mutation_sql.params,
            );

            execute_query(connection, database_info, &mutation_sql, &mut buffer).await?;
        }
    }

    buffer.put(&[b']'][..]); // we end by closing the array
    buffer.put(&[b'}'][..]); // and then the object

    for statement in plan.post {
        execute_statement(connection, &statement).await?
    }

    Ok(buffer.freeze())
}

/// Execute the query, and append the result to the given buffer.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    query: &sql::string::SQL,
    buffer: &mut (impl BufMut + Send),
) -> Result<(), Error> {
    // build query
    let sqlx_query = async { build_query_with_params(query) }
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
    Ok(())
}

/// Create a SQLx query based on our SQL query and bind our parameters to it.
fn build_query_with_params(
    query: &sql::string::SQL,
) -> Result<sqlx::query::Query<'_, sqlx::Postgres, sqlx::postgres::PgArguments>, Error> {
    let initial_query = sqlx::query(query.sql.as_str());
    query
        .params
        .iter()
        .try_fold(initial_query, |sqlx_query, param| match param {
            sql::string::Param::String(s) => Ok(sqlx_query.bind(s)),
            sql::string::Param::Value(v) => Ok(sqlx_query.bind(v)),
            sql::string::Param::Variable(_) => Err(Error::Query(QueryError::NotSupported(
                "Variables in mutations".to_string(),
            ))),
        })
}

/// Convert a mutation to an EXPLAIN query and execute it against postgres.
pub async fn explain(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan<sql::execution_plan::Mutations>,
) -> Result<Vec<(String, String, String)>, Error> {
    let sql::execution_plan::Mutations(mutations) = plan.query;

    let mut results = vec![];

    // run each query against the database and add result and sql to the results vector.
    for mutation in mutations {
        let query_sql = mutation.explain_query_sql();
        let plan = {
            let acquisition_timer = metrics.time_connection_acquisition_wait();
            let connection_result = pool
                .acquire()
                .instrument(info_span!(
                    "Acquire connection",
                    internal.visibility = "user",
                ))
                .await;
            let mut connection =
                acquisition_timer
                    .complete_with(connection_result)
                    .map_err(|err| {
                        metrics.error_metrics.record_connection_acquisition_error();
                        err
                    })?;

            tracing::info!(
                generated_sql = query_sql.sql,
                params = ?&query_sql.params,
            );

            let sqlx_query = async { build_query_with_params(&query_sql) }
                .instrument(info_span!(
                    "Build mutation with params",
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

            Ok::<String, Error>(results.join("\n"))
        }?;

        let pretty = sqlformat::format(
            &mutation.explain_query_sql().sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );

        results.push((mutation.root_field, pretty, plan));
    }

    Ok(results)
}
