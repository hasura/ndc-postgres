use std::collections::HashMap;
use std::fs;
use std::path::Path;

use similar_asserts::assert_eq;

use ndc_postgres_configuration::environment::Variable;
use ndc_postgres_configuration::version3::{
    introspect, RawConfiguration, DEFAULT_CONNECTION_URI_VARIABLE,
};
use ndc_postgres_configuration::{ConnectionUri, Secret};

use crate::ndc_metadata::helpers::get_path_from_project_root;
use crate::schemas::check_value_conforms_to_schema;

// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the NDC metadata file that is shared with
// other tests.
//
// If you have changed it intentionally, run `just generate-configuration`.
pub async fn configure_is_idempotent(
    connection_string: &str,
    chinook_ndc_metadata_path: impl AsRef<Path>,
) {
    let expected_value = read_configuration(chinook_ndc_metadata_path);

    let args: RawConfiguration = serde_json::from_value(expected_value.clone())
        .expect("Unable to deserialize as RawConfiguration");
    let environment = HashMap::from([(
        DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let actual = introspect(args, environment)
        .await
        .expect("configuration::introspect");

    let actual_value = serde_json::to_value(actual).expect("serde_json::to_value");

    assert_eq!(expected_value, actual_value);
}

pub async fn configure_initial_configuration_is_unchanged(
    connection_string: &str,
) -> RawConfiguration {
    let connection_uri_variable: Variable = "MAGIC_URI".into();
    let args = RawConfiguration {
        connection_uri: ConnectionUri::Uri(Secret::FromEnvironment {
            variable: connection_uri_variable.clone(),
        }),
        ..RawConfiguration::empty()
    };
    let environment = HashMap::from([(connection_uri_variable, connection_string.into())]);

    introspect(args, environment)
        .await
        .expect("configuration::introspect")
}

pub fn configuration_conforms_to_the_schema(chinook_ndc_metadata_path: impl AsRef<Path>) {
    check_value_conforms_to_schema::<RawConfiguration>(read_configuration(
        chinook_ndc_metadata_path,
    ));
}

fn read_configuration(chinook_ndc_metadata_path: impl AsRef<Path>) -> serde_json::Value {
    let file = fs::File::open(
        get_path_from_project_root(chinook_ndc_metadata_path).join("configuration.json"),
    )
    .expect("fs::File::open");
    let mut multi_version: serde_json::Value =
        serde_json::from_reader(file).expect("serde_json::from_reader");

    // We assume the stored NDC metadata file to be in the newest version, so to be able to make
    // assertions on its serialization behavior we remove the version discriminator field.
    multi_version.as_object_mut().unwrap().remove("version");

    multi_version
}
