use std::error::Error;
use std::path::Path;
use std::sync::Arc;

use tracing::{info_span, Instrument};

use ndc_sdk::connector::Connector;
use ndc_sdk::default_main::ServerState;

use ndc_postgres::connector::Postgres;
use ndc_postgres_configuration::parse_configuration;

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router(chinook_ndc_metadata_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let test_ndc_metadata_path =
        super::ndc_metadata::helpers::get_path_from_project_root(chinook_ndc_metadata_path);

    // initialise server state with the static configuration.
    let state = init_server_state(test_ndc_metadata_path).await.unwrap();

    ndc_sdk::default_main::create_router(state, None)
}

/// Creates a router with a fresh state from a NDC metadata file path
pub async fn create_router_from_ndc_metadata(ndc_metadata_path: impl AsRef<Path>) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let test_ndc_metadata_file =
        super::ndc_metadata::helpers::get_path_from_project_root(ndc_metadata_path);

    // initialise server state with the static configuration.
    let state = init_server_state(test_ndc_metadata_file).await.unwrap();

    ndc_sdk::default_main::create_router(state, None)
}

/// Initialize the server state just like `default_main`, but injecting a custom environment.
async fn init_server_state(
    config_directory: impl AsRef<Path> + Send,
) -> Result<ServerState<Postgres>, Box<dyn Error + Send + Sync>> {
    let mut metrics = Default::default();
    let configuration = parse_configuration(
        config_directory,
        ndc_postgres_configuration::environment::EmptyEnvironment,
    )
    .instrument(info_span!("parse configuration"))
    .await
    .map(Arc::new)?;
    let state = Postgres::try_init_state(&configuration, &mut metrics).await?;
    Ok(ServerState::new(configuration, state, metrics))
}
