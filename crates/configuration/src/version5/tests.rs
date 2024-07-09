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

use super::ParsedConfiguration;
use std::path::Path;

use crate::common;

mod postgres {
    pub(super) const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v5-configuration";
}

mod citus {
    pub(super) const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v5-configuration";
}

mod cockroach {
    pub(super) const CHINOOK_NDC_METADATA_PATH: &str = "static/cockroach/v5-configuration";
}

#[tokio::test]
async fn get_configuration_schema() {
    let schema = schemars::schema_for!(ParsedConfiguration);
    insta::assert_json_snapshot!(schema);
}

// version 3 tests

#[tokio::test]
async fn postgres_configuration_version_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(postgres::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn citus_configuration_version_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(citus::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn cockroach_configuration_version_conforms_to_the_schema() {
    configuration_conforms_to_the_schema(cockroach::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

async fn configuration_conforms_to_the_schema(
    chinook_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<()> {
    common::check_value_conforms_to_schema::<ParsedConfiguration>(
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
