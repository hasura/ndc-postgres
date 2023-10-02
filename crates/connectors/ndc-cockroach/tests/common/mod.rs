//! Common functions used across test cases.

use ndc_cockroach::connector;

pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/cockroach/chinook-deployment.json";
pub const POSTGRESQL_CONNECTION_STRING: &str =
    "postgresql://postgres:password@localhost:64003/defaultdb";

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router() -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the deployment configs live
    let test_deployment_file =
        tests_common::deployment::helpers::get_path_from_project_root(CHINOOK_DEPLOYMENT_PATH);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<connector::Cockroach>(
        test_deployment_file.display().to_string(),
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}
