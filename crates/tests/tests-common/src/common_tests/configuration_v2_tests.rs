use std::fs;
use std::path::Path;

use ndc_postgres::configuration::version2;
use similar_asserts::assert_eq;

use crate::deployment::helpers::get_path_from_project_root;
use crate::schemas::check_value_conforms_to_schema;

// Tests that configuration generation has not changed.
//
// If you have changed it intentionally, run `just generate-chinook-configuration`.
pub async fn expected_deployment_serializes_idempotently(
    chinook_deployment_path: impl AsRef<Path>,
) {
    let expected = read_configuration(chinook_deployment_path);
    let deserialized_deployment: version2::RawConfiguration =
        serde_json::from_value(expected.clone())
            .expect("Unable to deserialize as RawConfiguration");

    let actual = serde_json::to_value(deserialized_deployment)
        .expect("Unable to serialize RawConfiguration");

    assert_eq!(expected, actual);
}

// Tests that the 'configure' operation is idempotent.
//
// If you have changed it intentionally, run `just generate-chinook-configuration`.
pub async fn configure_is_idempotent(
    connection_string: &str,
    chinook_deployment_path: impl AsRef<Path>,
) {
    let expected_value = read_configuration(chinook_deployment_path);
    let expected: version2::RawConfiguration = serde_json::from_value(expected_value.clone())
        .expect("Unable to deserialize as RawConfiguration");

    let mut args: version2::RawConfiguration = expected.clone();

    args.connection_uri =
        version2::ConnectionUri::Uri(version2::ResolvedSecret(connection_string.to_string()));

    let actual = version2::configure(args)
        .await
        .expect("configuration::configure");

    // We assert on the values interpreted by deserialization, in pretty printed form. If the
    // values are meaningfully different we'll get a nicer diff than we would comparing the
    // serde_json::Value's. It is safe to make this slightly weaker assertion because we also have
    // the 'expected_deployment_serializes_idempotently' test.
    assert_eq!(
        serde_json::to_string_pretty(&expected).unwrap(),
        serde_json::to_string_pretty(&actual).unwrap()
    );
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

pub fn configuration_conforms_to_the_schema(chinook_deployment_path: impl AsRef<Path>) {
    check_value_conforms_to_schema::<version2::RawConfiguration>(read_configuration(
        chinook_deployment_path,
    ));
}

fn read_configuration(chinook_deployment_path: impl AsRef<Path>) -> serde_json::Value {
    let file = fs::File::open(get_path_from_project_root(chinook_deployment_path))
        .expect("fs::File::open");
    let mut multi_version: serde_json::Value =
        serde_json::from_reader(file).expect("serde_json::from_reader");

    // We assume the stored deployment file to be in the newest version, so to be able to make
    // assertions on its serialization behavior we remove the version discriminator field.
    multi_version.as_object_mut().unwrap().remove("version");

    multi_version
}
