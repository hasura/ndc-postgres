//! Connect to an AWS Aurora instance for testing

use std::env;

pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/aurora/chinook-deployment.json";

/// We get our connection string from an env var so that it can be stored in secrets in CI
pub fn get_connection_string() -> String {
    env::var("AURORA_CONNECTION_STRING").unwrap()
}

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_DEPLOYMENT_PATH).await
}
