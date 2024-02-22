use sqlx::pool::PoolConnection;
use sqlx::postgres::Postgres;

use query_engine_sql::sql;

use crate::error::Error;

/// Execute a single SQL statement against the database.
pub(crate) async fn execute_statement(
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

/// Match on the result and execute a rollback statement against the database if we run into an
/// error.
pub(crate) async fn rollback_on_exception<T>(
    result: Result<T, Error>,
    connection: &mut PoolConnection<Postgres>,
) -> Result<T, Error> {
    if result.is_err() {
        // If rolling back fails, ignore it.
        let _ = execute_statement(connection, &sql::helpers::transaction_rollback()).await;
    }
    result
}
