//! Health check endpoint for the connector.

use ndc_sdk::connector::ErrorResponse;

/// Check the health of the connector.
///
/// For example, this function should check that the connector
/// is able to reach its data source over the network.
pub async fn health_check(pool: &sqlx::PgPool) -> Result<(), ErrorResponse> {
    let sqlx_query = sqlx::query("SELECT 1");

    sqlx_query.fetch_one(pool).await.map_err(|err| {
        ErrorResponse::new_internal_with_details(serde_json::Value::String(err.to_string()))
    })?;

    Ok(())
}
