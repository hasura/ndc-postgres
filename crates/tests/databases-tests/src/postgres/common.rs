//! Common functions used across test cases.

pub const CHINOOK_DEPLOYMENT_PATH_V2: &str = "static/postgres/v2-chinook-deployment.json";
pub const CHINOOK_DEPLOYMENT_PATH_V1: &str = "static/postgres/v1-chinook-deployment.json";

pub const CONNECTION_STRING: &str = "postgresql://postgres:password@localhost:64002";

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    tests_common::router::create_router(CHINOOK_DEPLOYMENT_PATH_V2).await
}
