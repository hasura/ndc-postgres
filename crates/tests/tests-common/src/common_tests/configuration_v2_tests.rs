use std::fs;
use std::path::Path;

use similar_asserts::assert_eq;

use ndc_postgres_configuration::version2;

use crate::ndc_metadata::helpers::get_path_from_project_root;
use crate::schemas::check_value_conforms_to_schema;

// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the NDC metadata file that is shared with
// other tests.
//
// If you have changed it intentionally, run `just generate-chinook-configuration`.
pub async fn configure_is_idempotent(
    connection_string: &str,
    chinook_ndc_metadata_path: impl AsRef<Path>,
) {
    let expected_value = read_configuration(chinook_ndc_metadata_path);

    let mut args: version2::RawConfiguration = serde_json::from_value(expected_value.clone())
        .expect("Unable to deserialize as RawConfiguration");

    args.connection_uri =
        version2::ConnectionUri::Uri(version2::ResolvedSecret(connection_string.to_string()));

    let actual = version2::configure(args)
        .await
        .expect("configuration::configure");

    let actual_value = serde_json::to_value(actual).expect("serde_json::to_value");

    assert_eq!(expected_value, actual_value);
}

pub async fn configure_initial_configuration_is_unchanged(
    connection_string: &str,
) -> version2::RawConfiguration {
    let args = version2::RawConfiguration {
        connection_uri: version2::ConnectionUri::Uri(version2::ResolvedSecret(
            connection_string.to_string(),
        )),
        ..version2::RawConfiguration::empty()
    };

    version2::configure(args)
        .await
        .expect("configuration::configure")
}

pub fn configuration_conforms_to_the_schema(chinook_ndc_metadata_path: impl AsRef<Path>) {
    check_value_conforms_to_schema::<version2::RawConfiguration>(read_configuration(
        chinook_ndc_metadata_path,
    ));
}

fn read_configuration(chinook_ndc_metadata_path: impl AsRef<Path>) -> serde_json::Value {
    let file = fs::File::open(get_path_from_project_root(chinook_ndc_metadata_path))
        .expect("fs::File::open");
    let mut multi_version: serde_json::Value =
        serde_json::from_reader(file).expect("serde_json::from_reader");

    // We assume the stored NDC metadata file to be in the newest version, so to be able to make
    // assertions on its serialization behavior we remove the version discriminator field.
    multi_version.as_object_mut().unwrap().remove("version");

    multi_version
}
