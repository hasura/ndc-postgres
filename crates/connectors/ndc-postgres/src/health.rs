//! Health check endpoint for the connector.

use sqlx::Executor;

use ndc_sdk::connector;

use query_engine_execution::database::Database;

/// Check the health of the connector.
///
/// For example, this function should check that the connector
/// is able to reach its data source over the network.
pub async fn health_check(database: &Database) -> Result<(), connector::HealthError> {
    let sqlx_query = sqlx::query("SELECT 1");

    database
        .acquire()
        .await
        .map_err(|err| connector::HealthError::Other(Box::new(err)))?
        .fetch_one(sqlx_query)
        .await
        .map_err(|err| connector::HealthError::Other(Box::new(err)))?;

    Ok(())
}
