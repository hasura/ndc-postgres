//! Common functions used across test cases.

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v2-chinook-ndc-metadata.json";

pub const CONNECTION_STRING: &str =
    "postgresql://postgres:password@localhost:64004?sslmode=disable";

/// Creates a router with a fresh state from the test ndc_metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH).await
}
