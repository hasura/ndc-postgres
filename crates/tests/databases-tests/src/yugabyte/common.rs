//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/yugabyte/v2-chinook-ndc-metadata.json";

/// Creates a router with a fresh state from the test ndc_metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH).await
}
