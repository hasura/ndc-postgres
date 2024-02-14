//! Connect to an AWS Aurora instance for testing

use std::env;

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/aurora/v3-chinook-ndc-metadata.json";

/// We get our connection string from an env var so that it can be stored in secrets in CI
pub fn get_connection_string() -> String {
    env::var("AURORA_CONNECTION_STRING").unwrap()
}

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_NDC_METADATA_PATH).await
}
