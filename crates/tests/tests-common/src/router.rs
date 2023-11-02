use std::path::Path;

/// Creates a router with a fresh state from the test deployment.
pub async fn create_router(chinook_deployment_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the deployment configs live
    let test_deployment_file =
        super::deployment::helpers::get_path_from_project_root(chinook_deployment_path);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<ndc_postgres::connector::Postgres>(
        test_deployment_file,
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}

/// Creates a router with a fresh state from a deployment file path
pub async fn create_router_from_deployment(deployment_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the deployment configs live
    let test_deployment_file =
        super::deployment::helpers::get_path_from_project_root(deployment_path);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<ndc_postgres::connector::Postgres>(
        test_deployment_file,
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}
