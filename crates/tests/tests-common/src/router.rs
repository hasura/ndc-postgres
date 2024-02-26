use std::collections::HashMap;
use std::error::Error;
use std::path::Path;
use std::sync::Arc;

use tracing::{info_span, Instrument};

use ndc_sdk::connector::Connector;
use ndc_sdk::default_main::ServerState;

use ndc_postgres::connector::Postgres;
use ndc_postgres_configuration as configuration;

/// Creates a router with a fresh state from the test NDC metadata.
pub async fn create_router(
    configuration_directory: impl AsRef<Path>,
    connection_uri: &str,
) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let absolute_configuration_directory =
        super::ndc_metadata::helpers::get_path_from_project_root(configuration_directory);

    // initialise server state with the static configuration.
    let state = init_server_state(absolute_configuration_directory, connection_uri)
        .await
        .unwrap();

    ndc_sdk::default_main::create_router(state, None)
}

/// Creates a router with a fresh state from a NDC metadata file path
pub async fn create_router_from_ndc_metadata(
    configuration_directory: impl AsRef<Path>,
    connection_uri: &str,
) -> axum::Router {
    let _ = env_logger::builder().is_test(true).try_init();

    // work out where the NDC metadata configs live
    let absolute_configuration_directory =
        super::ndc_metadata::helpers::get_path_from_project_root(configuration_directory);

    // initialise server state with the static configuration.
    let state = init_server_state(absolute_configuration_directory, connection_uri)
        .await
        .unwrap();

    ndc_sdk::default_main::create_router(state, None)
}

/// Initialize the server state just like `default_main`, but injecting a custom environment.
async fn init_server_state(
    configuration_directory: impl AsRef<Path>,
    connection_uri: &str,
) -> Result<ServerState<Postgres>, Box<dyn Error + Send + Sync>> {
    let mut metrics = Default::default();
    let environment = HashMap::from([(
        ndc_postgres_configuration::version3::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_uri.to_string(),
    )]);
    let configuration = configuration::parse_configuration(configuration_directory, environment)
        .instrument(info_span!("parse configuration"))
        .await
        .map(Arc::new)?;
    let state = Postgres::try_init_state(&configuration, &mut metrics).await?;
    Ok(ServerState::new(configuration, state, metrics))
}
