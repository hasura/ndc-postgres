pub mod common;

use std::fs;

use similar_asserts::assert_eq;

use ndc_postgres::configuration;

use tests_common::deployment::helpers::get_path_from_project_root;
use tests_common::schemas::check_value_conforms_to_schema;

const CONFIGURATION_QUERY: &str = include_str!("../src/configuration.sql");

#[tokio::test]
// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the deployment file that is shared with
// other tests.
//
// If you have changed it intentionally, run `just generate-chinook-configuration`.
async fn test_configure_is_idempotent() {
    let expected_value = read_configuration();

    let mut args: configuration::RawConfiguration = serde_json::from_value(expected_value.clone())
        .expect("Unable to deserialize as RawConfiguration");
    args.connection_uri = configuration::ConnectionUri::Uri(configuration::ResolvedSecret(
        common::POSTGRESQL_CONNECTION_STRING.to_string(),
    ));

    let actual = configuration::configure(args, CONFIGURATION_QUERY)
        .await
        .expect("configuration::configure");

    let actual_value = serde_json::to_value(actual).expect("serde_json::to_value");

    assert_eq!(expected_value, actual_value);
}

#[tokio::test]
async fn test_configure_initial_configuration_is_unchanged() {
    let args = configuration::RawConfiguration {
        connection_uri: configuration::ConnectionUri::Uri(configuration::ResolvedSecret(
            common::POSTGRESQL_CONNECTION_STRING.to_string(),
        )),
        ..configuration::RawConfiguration::empty()
    };

    let default_configuration = configuration::configure(args, CONFIGURATION_QUERY)
        .await
        .expect("configuration::configure");

    insta::assert_json_snapshot!(default_configuration);
}

#[test]
fn configuration_conforms_to_the_schema() {
    check_value_conforms_to_schema::<configuration::RawConfiguration>(read_configuration());
}

#[tokio::test]
async fn get_rawconfiguration_schema() {
    let schema = schemars::schema_for!(configuration::RawConfiguration);
    insta::assert_json_snapshot!(schema);
}

#[tokio::test]
async fn get_configuration_schema() {
    let schema = schemars::schema_for!(configuration::Configuration);
    insta::assert_json_snapshot!(schema);
}

fn read_configuration() -> serde_json::Value {
    let file = fs::File::open(get_path_from_project_root(common::CHINOOK_DEPLOYMENT_PATH))
        .expect("fs::File::open");
    serde_json::from_reader(file).expect("serde_json::from_reader")
}
