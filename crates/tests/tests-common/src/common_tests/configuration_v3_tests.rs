use std::collections::HashMap;
use std::path::Path;

use similar_asserts::assert_eq;
use tokio::fs;

use ndc_postgres_configuration::environment::Variable;
use ndc_postgres_configuration::version3::{connection_settings, introspect, RawConfiguration};
use ndc_postgres_configuration::{ConnectionUri, Secret};

use crate::currentdir;
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
) -> anyhow::Result<()> {
    let expected_value = read_configuration(chinook_ndc_metadata_path).await?;

    let args: RawConfiguration = serde_json::from_value(expected_value.clone())?;
    let environment = HashMap::from([(
        connection_settings::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let actual = introspect(args, environment).await?;

    let actual_value = serde_json::to_value(actual)?;

    assert_eq!(expected_value, actual_value);
    Ok(())
}

pub async fn configure_initial_configuration_is_unchanged(
    connection_string: &str,
) -> RawConfiguration {
    let connection_uri_variable: Variable = "MAGIC_URI".into();
    let connection_settings = connection_settings::DatabaseConnectionSettings {
        connection_uri: ConnectionUri(Secret::FromEnvironment {
            variable: connection_uri_variable.clone(),
        }),
        ..connection_settings::DatabaseConnectionSettings::empty()
    };
    let args = RawConfiguration {
        connection_settings,
        ..RawConfiguration::empty()
    };
    let environment = HashMap::from([(connection_uri_variable, connection_string.into())]);

    introspect(args, environment)
        .await
        .expect("configuration::introspect")
}

pub async fn configuration_conforms_to_the_schema(
    chinook_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<()> {
    check_value_conforms_to_schema::<RawConfiguration>(
        read_configuration(chinook_ndc_metadata_path).await.unwrap(),
    );
    Ok(())
}

async fn read_configuration(
    chinook_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<serde_json::Value> {
    let absolute_configuration_directory = get_path_from_project_root(chinook_ndc_metadata_path);

    let contents = currentdir::lock_async(&absolute_configuration_directory, || {
        fs::read_to_string(absolute_configuration_directory.join("configuration.json"))
    });
    let contents = contents.await?;

    let mut multi_version: serde_json::Value = serde_json::from_str(&contents)?;

    // We assume the stored NDC metadata file to be in the newest version, so to be able to make
    // assertions on its serialization behavior we remove the version discriminator field.
    multi_version.as_object_mut().unwrap().remove("version");

    Ok(multi_version)
}
