use std::fs;
use std::path::Path;

use ndc_postgres::configuration;
use similar_asserts::assert_eq;

use crate::deployment::helpers::get_path_from_project_root;
use crate::schemas::check_value_conforms_to_schema;

const CONFIGURATION_QUERY: &str =
    include_str!("../../../../connectors/ndc-postgres/src/configuration.sql");

// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the deployment file that is shared with
// other tests.
//
// If you have changed it intentionally, run `just generate-chinook-configuration`.
pub async fn configure_is_idempotent(
    connection_string: &str,
    chinook_deployment_path: impl AsRef<Path>,
) {
    let expected_value = read_configuration(chinook_deployment_path);

    let mut args: configuration::RawConfiguration = serde_json::from_value(expected_value.clone())
        .expect("Unable to deserialize as RawConfiguration");

    args.connection_uri = configuration::ConnectionUri::Uri(configuration::ResolvedSecret(
        connection_string.to_string(),
    ));

    let actual = configuration::configure(args, CONFIGURATION_QUERY)
        .await
        .expect("configuration::configure");

    let actual_value = serde_json::to_value(actual).expect("serde_json::to_value");

    assert_eq!(expected_value, actual_value);
}

pub async fn configure_initial_configuration_is_unchanged(
    connection_string: &str,
) -> ndc_postgres::configuration::RawConfiguration {
    let args = configuration::RawConfiguration {
        connection_uri: configuration::ConnectionUri::Uri(configuration::ResolvedSecret(
            connection_string.to_string(),
        )),
        ..configuration::RawConfiguration::empty()
    };

    configuration::configure(args, CONFIGURATION_QUERY)
        .await
        .expect("configuration::configure")
}

pub fn configuration_conforms_to_the_schema(chinook_deployment_path: impl AsRef<Path>) {
    check_value_conforms_to_schema::<configuration::RawConfiguration>(read_configuration(
        chinook_deployment_path,
    ));
}

fn read_configuration(chinook_deployment_path: impl AsRef<Path>) -> serde_json::Value {
    let file = fs::File::open(get_path_from_project_root(chinook_deployment_path))
        .expect("fs::File::open");
    serde_json::from_reader(file).expect("serde_json::from_reader")
}
