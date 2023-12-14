//! Execute a mutation execution plan against the database.

use bytes::{BufMut, Bytes, BytesMut};
use query_engine_sql::sql::helpers::transaction_rollback;
use sqlx;
use sqlx::pool::PoolConnection;
use sqlx::{Postgres, Row};
use tracing::{info_span, Instrument};

use crate::database_info::DatabaseInfo;
use crate::metrics;
use query_engine_sql::sql;
use query_engine_sql::sql::execution_plan::{ExecutionPlan, Mutations};

/// Execute mutations against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: ExecutionPlan<Mutations>,
) -> Result<Bytes, Error> {
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
    let rows_result = rollback_on_exception(
        execute_mutations(&mut connection, database_info, plan).await,
        &mut connection,
    )
    .await;
    query_timer.complete_with(rows_result)
}

/// Execute a sql statement against the database.
async fn execute_statement(
    connection: &mut PoolConnection<Postgres>,
    sql::string::Statement(statement): &sql::string::Statement,
) -> Result<(), Error> {
    tracing::info!(
        statement = statement.sql,
        params = ?&statement.params,
    );
    sqlx::query(&statement.sql)
        .execute(connection.as_mut())
        .await?;
    Ok(())
}

/// Run mutations, returning a result for each.
///
/// The mutation is assumed to generate valid JSON. The response is a bytestring containing JSON, of
/// the form `[/* result 0 */, /* result 1 */, ...]`.
async fn execute_mutations(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    plan: ExecutionPlan<Mutations>,
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

/// Match on the result and execute a rollback statement against the db
/// if we run into an error.
async fn rollback_on_exception<T>(
    result: Result<T, Error>,
    connection: &mut PoolConnection<Postgres>,
) -> Result<T, Error> {
    match result {
        Err(err1) => match execute_statement(connection, &transaction_rollback()).await {
            Err(err2) => Err(Error::Multiple(Box::new(err1), Box::new(err2))),
            Ok(()) => Err(err1),
        },
        Ok(ok) => Ok(ok),
    }
}

/// Execute the query, and append the result to the given buffer.
async fn execute_query(
    connection: &mut PoolConnection<Postgres>,
    database_info: &DatabaseInfo,
    query: &sql::string::SQL,
    buffer: &mut (impl BufMut + Send),
) -> Result<(), Error> {
    // build query
    let sqlx_query = build_query_with_params(query)
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
    Ok(())
}

/// Create a SQLx query based on our SQL query and bind our parameters to it.
async fn build_query_with_params(
    query: &sql::string::SQL,
) -> Result<sqlx::query::Query<'_, sqlx::Postgres, sqlx::postgres::PgArguments>, Error> {
    let sqlx_query = sqlx::query(query.sql.as_str());

    let sqlx_query = query
        .params
        .iter()
        .try_fold(sqlx_query, |sqlx_query, param| match param {
            sql::string::Param::String(s) => Ok(sqlx_query.bind(s)),
            sql::string::Param::Variable(_) => Err(Error::Query(QueryError::NotSupported(
                "Variables in mutations".to_string(),
            ))),
        })?;

    Ok(sqlx_query)
}

pub enum Error {
    Query(QueryError),
    DB(sqlx::Error),
    Multiple(Box<Error>, Box<Error>),
}

pub enum QueryError {
    NotSupported(String),
}

impl std::fmt::Display for QueryError {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            QueryError::NotSupported(thing) => {
                write!(f, "{} are not supported.", thing)
            }
        }
    }
}

impl std::fmt::Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        match self {
            Error::Query(err) => {
                write!(f, "{}", err)
            }
            Error::DB(err) => {
                write!(f, "{}", err)
            }
            Error::Multiple(err1, err2) => {
                write!(f, "1. {}\n2. {}", err1, err2)
            }
        }
    }
}

impl From<sqlx::Error> for Error {
    fn from(err: sqlx::Error) -> Error {
        Error::DB(err)
    }
}
