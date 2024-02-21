//! A wrapper around database connectivity so we can keep all database logic in one place.

use sqlx::pool::PoolConnection;
use sqlx::postgres::{PgConnection, PgPool, PgTransactionManager, Postgres};
use sqlx::TransactionManager;

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
        let mut connection = self.acquire().await?;
        PgTransactionManager::begin(&mut connection).await?;
        Ok(Transaction { connection })
    }

    pub async fn acquire(&self) -> Result<PoolConnection<Postgres>, sqlx::Error> {
        self.pool.acquire().await
    }
}

pub struct Transaction {
    connection: sqlx::pool::PoolConnection<Postgres>,
}

impl Transaction {
    /// Commits this transaction or savepoint.
    pub async fn commit(mut self) -> Result<(), sqlx::Error> {
        PgTransactionManager::commit(&mut self.connection).await
    }

    /// Aborts this transaction or savepoint.
    pub async fn rollback(mut self) -> Result<(), sqlx::Error> {
        PgTransactionManager::rollback(&mut self.connection).await
    }
}

impl AsMut<PgConnection> for Transaction {
    fn as_mut(&mut self) -> &mut PgConnection {
        self.connection.as_mut()
    }
}

impl Drop for Transaction {
    fn drop(&mut self) {
        PgTransactionManager::start_rollback(&mut self.connection);
    }
}
