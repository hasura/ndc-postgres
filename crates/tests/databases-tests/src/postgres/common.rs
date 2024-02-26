//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v3-chinook-ndc-metadata";

pub const BROKEN_QUERIES_NDC_METADATA_PATH: &str = "static/postgres/broken-queries-ndc-metadata";

pub const CONNECTION_STRING: &str = "postgresql://postgres:password@localhost:64002";

/// Creates a router with a fresh state from the test ndc_metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH, CONNECTION_STRING).await
}
