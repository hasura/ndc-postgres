//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-configuration`.
//!
//! The github CI setup runs these tests subject to the filtering logic in
//! '.github/test-configuration.json'. Naming a test with the prefix 'postgres_current_only` will
//! ensure they only run on the latest version of postgres being tested. This is necessary because
//! they rely on supporting data (the chinook NDC metadata configuration) which we maintain only for
//! the latest version.

#![cfg(test)]

use crate::version3::{introspect, RawConfiguration};
use std::collections::HashMap;
use std::path::Path;

use crate::common;

mod postgres {

    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v3-chinook-ndc-metadata";

    pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";
}

mod citus {
    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v3-chinook-ndc-metadata";
}

mod cockroach {
    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/cockroach/v3-chinook-ndc-metadata";
}

#[tokio::test]
async fn get_configuration_schema() {
    let schema = schemars::schema_for!(RawConfiguration);
    insta::assert_json_snapshot!(schema);
}

// version 3 tests

#[tokio::test]
async fn postgres_configuration_v3_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(postgres::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn citus_configuration_v3_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(citus::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn cockroach_configuration_v3_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(cockroach::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn postgres_current_only_configure_initial_configuration_is_unchanged() {
    let args = RawConfiguration::empty();
    let connection_string = postgres::CONNECTION_URI;
    let environment = HashMap::from([(
        crate::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let default_configuration = introspect(args, environment)
        .await
        .expect("configuration::introspect");

    insta::assert_json_snapshot!(default_configuration);
}

pub async fn configuration_conforms_to_the_schema(
    chinook_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<()> {
    common::check_value_conforms_to_schema::<RawConfiguration>(
        &read_configuration(chinook_ndc_metadata_path).await?,
    );
    Ok(())
}

async fn read_configuration(
    chinook_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<serde_json::Value> {
    let absolute_configuration_directory =
        common::get_path_from_project_root(chinook_ndc_metadata_path);

    let contents =
        tokio::fs::read_to_string(absolute_configuration_directory.join("configuration.json"))
            .await?;

    Ok(serde_json::from_str(&contents)?)
}
