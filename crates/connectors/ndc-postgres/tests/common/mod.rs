//! Common functions used across test cases.

use ndc_postgres::connector;

pub const POSTGRESQL_CONNECTION_STRING: &str = "postgresql://postgres:password@localhost:64002";
pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/chinook-deployment.json";
pub const CHINOOK_VANILLA_DEPLOYMENT_PATH: &str = "static/chinook-deployment-vanilla.json";

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    create_router_from_deployment(CHINOOK_DEPLOYMENT_PATH).await
}

/// Creates a router with a fresh state from a deployment file path
pub async fn create_router_from_deployment(deployment_path: &str) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the deployment configs live
    let test_deployment_file =
        tests_common::deployment::helpers::get_path_from_project_root(deployment_path);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<connector::Postgres>(
        test_deployment_file.display().to_string(),
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}
