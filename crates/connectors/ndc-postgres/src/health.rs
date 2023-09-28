//! Health check endpoint for the connector.

use ndc_sdk::connector;

/// Check the health of the connector.
///
/// For example, this function should check that the connector
/// is able to reach its data source over the network.
pub async fn health_check(pool: &sqlx::PgPool) -> Result<(), connector::HealthError> {
    let sqlx_query = sqlx::query("SELECT 1");

    sqlx_query
        .fetch_one(pool)
        .await
        .map_err(|err| connector::HealthError::Other(Box::new(err)))?;

    Ok(())
}
