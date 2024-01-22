use std::path::Path;

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router(chinook_ndc_metadata_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let test_ndc_metadata_file =
        super::ndc_metadata::helpers::get_path_from_project_root(chinook_ndc_metadata_path);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<ndc_postgres::connector::Postgres>(
        test_ndc_metadata_file,
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}

/// Creates a router with a fresh state from a NDC metadata file path
pub async fn create_router_from_ndc_metadata(ndc_metadata_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let test_ndc_metadata_file =
        super::ndc_metadata::helpers::get_path_from_project_root(ndc_metadata_path);

    // initialise server state with the static configuration.
    let state = ndc_sdk::default_main::init_server_state::<ndc_postgres::connector::Postgres>(
        test_ndc_metadata_file,
    )
    .await;

    ndc_sdk::default_main::create_router(state, None)
}
