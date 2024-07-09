//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/cockroach/v5-configuration";

pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64003/defaultdb";

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH, CONNECTION_URI).await
}
