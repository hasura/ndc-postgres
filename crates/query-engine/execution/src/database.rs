//! A wrapper around database connectivity so we can keep all database logic in one place.

use sqlx::pool::PoolConnection;
use sqlx::{PgPool, Postgres, Transaction};

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

    pub async fn begin(&self) -> Result<Transaction<'static, Postgres>, sqlx::Error> {
        self.pool.begin().await
    }

    pub async fn acquire(&self) -> Result<PoolConnection<Postgres>, sqlx::Error> {
        self.pool.acquire().await
    }
}
