//! A wrapper around database connectivity so we can keep all database logic in one place.

use sqlx::pool::PoolConnection;
use sqlx::postgres::{PgConnection, PgPool, Postgres};
use sqlx::Executor;

#[derive(Debug)]
pub struct Database {
    pool: PgPool,
}

impl Database {
    pub fn new(pool: PgPool) -> Self {
        Self { pool }
    }

    pub fn pool_size(&self) -> i64 {
        self.pool.size().into()
    }

    pub fn pool_idle(&self) -> i64 {
        self.pool.num_idle().try_into().unwrap()
    }

    pub async fn begin(&self) -> Result<Transaction, sqlx::Error> {
        let connection = self.acquire().await?;
        // Construct the transaction here so we roll back immediately if beginning fails.
        let mut transaction = Transaction {
            connection: Some(connection),
        };
        transaction.as_mut().execute("BEGIN").await?;
        Ok(transaction)
    }

    pub async fn acquire(&self) -> Result<PoolConnection<Postgres>, sqlx::Error> {
        self.pool.acquire().await
    }
}

pub struct Transaction {
    connection: Option<PoolConnection<Postgres>>,
}

impl Transaction {
    /// Commits this transaction or savepoint.
    pub async fn commit(mut self) -> Result<(), sqlx::Error> {
        // This takes ownership of the connection to ensure that this is the last operation.
        if let Some(mut connection) = self.connection.take() {
            let result = connection.execute("COMMIT").await;
            let _ = discard_on_failure(connection, result);
        }
        Ok(())
    }

    /// Aborts this transaction or savepoint.
    pub async fn rollback(mut self) -> Result<(), sqlx::Error> {
        if let Some(mut connection) = self.connection.take() {
            let result = connection.execute("ROLLBACK").await;
            let _ = discard_on_failure(connection, result);
        }
        Ok(())
    }
}

impl AsMut<PgConnection> for Transaction {
    fn as_mut(&mut self) -> &mut PgConnection {
        // The connection should always be present unless we are in the middle of dropping it,
        // committing it, or rolling it back. It should not be possible to call this method during
        // one of those operations,
        self.connection.as_mut().expect("this connection is dead")
    }
}

impl Drop for Transaction {
    fn drop(&mut self) {
        // This takes ownership of the connection so we can move it into the async block.
        if let Some(mut connection) = self.connection.take() {
            // We must not panic during a `drop`, so all error-handling is internal.
            tokio::task::block_in_place(|| {
                tokio::runtime::Handle::current().block_on(async move {
                    let result = connection.execute("ROLLBACK").await;
                    let _ = discard_on_failure(connection, result);
                })
            });
        }
    }
}

/// If something went wrong, discard the connection. We detach it from the pool
/// and let it close itself on drop. The pool will then open a replacement.
fn discard_on_failure<T>(
    connection: PoolConnection<Postgres>,
    result: sqlx::Result<T>,
) -> sqlx::Result<T> {
    if result.is_err() {
        let _ = connection.detach();
    }
    result
}
