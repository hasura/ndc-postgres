//! Common functions used across test cases.

pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/citus/v2-chinook-deployment.json";

pub const CONNECTION_STRING: &str =
    "postgresql://postgres:password@localhost:64004?sslmode=disable";

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_DEPLOYMENT_PATH).await
}
