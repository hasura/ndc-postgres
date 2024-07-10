//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v5-configuration";

pub const BROKEN_QUERIES_NDC_METADATA_PATH: &str = "static/postgres/broken-queries-ndc-metadata";

pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

pub const EMPTY_CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002/empty";

/// Creates a router with a fresh state from the test ndc_metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH, CONNECTION_URI).await
}
