//! Connect to an AWS Aurora instance for testing

use ndc_postgres::connector;
use std::env;

pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/aurora/chinook-deployment.json";

/// We get our connection string from an env var so that it can be stored in secrets in CI
pub fn get_connection_string() -> String {
    env::var("AURORA_CONNECTION_STRING").unwrap()
}

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the deployment configs live
    let test_deployment_file =
        tests_common::deployment::helpers::get_path_from_project_root(CHINOOK_DEPLOYMENT_PATH);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<connector::Postgres>(
        test_deployment_file.display().to_string(),
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}
