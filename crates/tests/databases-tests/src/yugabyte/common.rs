//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/yugabyte/v3-chinook-ndc-metadata";

pub const CONNECTION_URI: &str = "postgresql://yugabyte@localhost:64005";

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH, CONNECTION_URI).await
}
