//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-chinook-configuration`.

pub mod common;

use std::fs;

use similar_asserts::assert_eq;

// this only makes sense because we use the `ndc-postgres` config implementation for now
// it should be switched the to the Citus one later
use ndc_postgres::configuration;

use tests_common::deployment::helpers::get_path_from_project_root;

const CONFIGURATION_QUERY: &str = include_str!("../../ndc-postgres/src/configuration.sql");

#[tokio::test]
async fn test_configure() {
    let args = configuration::RawConfiguration {
        connection_uris: ndc_postgres::configuration::single_connection_uri(
            common::POSTGRESQL_CONNECTION_STRING.to_string(),
        ),
        ..configuration::RawConfiguration::empty()
    };

    let expected_value: serde_json::Value = {
        let file = fs::File::open(get_path_from_project_root(common::CHINOOK_DEPLOYMENT_PATH))
            .expect("fs::File::open");
        let mut result: serde_json::Value =
            serde_json::from_reader(file).expect("serde_json::from_reader");

        // native queries cannot be configured from the database alone,
        // so we ignore the native queries in the configuration file
        // for the purpose of comparing the checked in file with the comparison.
        result["metadata"]["native_queries"]
            .as_object_mut()
            .unwrap()
            .clear();
        result
    };

    let actual = configuration::configure(&args, CONFIGURATION_QUERY)
        .await
        .expect("configuration::configure");

    let actual_value = serde_json::to_value(actual).expect("serde_json::to_value");

    assert_eq!(expected_value, actual_value);
}
