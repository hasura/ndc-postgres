use std::collections::HashMap;
use std::path::Path;

use super::ndc_metadata::helpers::get_path_from_project_root;
use ndc_postgres::connector::PostgresSetup;

/// Creates a router with a fresh state from the provided configuration directory.
pub async fn create_router(
    configuration_directory: impl AsRef<Path>,
    connection_uri: &str,
) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let absolute_configuration_directory = get_path_from_project_root(configuration_directory);

    // Initialize server state with the configuration above, injecting the URI.
    let environment = HashMap::from([(
        ndc_postgres_configuration::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_uri.to_string(),
    )]);
    let setup = PostgresSetup::new(environment);

    let state = ndc_sdk::state::init_server_state(setup, &absolute_configuration_directory)
        .await
        .unwrap();

    ndc_sdk::default_main::create_router(state, None, None)
}
