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

use super::common;
use tests_common::common_tests;

#[tokio::test]
async fn get_configuration_schema() {
    let schema = schemars::schema_for!(ndc_postgres_configuration::RawConfiguration);
    insta::assert_json_snapshot!(schema);
}

// version 3 tests

#[tokio::test]
async fn postgres_current_only_broken_metadata_is_up_to_date() {
    common_tests::configuration_v3_tests::configure_is_idempotent(
        common::EMPTY_CONNECTION_URI,
        common::BROKEN_QUERIES_NDC_METADATA_PATH,
    )
    .await
    .unwrap()
}

#[tokio::test]
async fn postgres_current_only_configure_v3_is_idempotent() {
    common_tests::configuration_v3_tests::configure_is_idempotent(
        common::CONNECTION_URI,
        common::CHINOOK_NDC_METADATA_PATH,
    )
    .await
    .unwrap()
}

#[tokio::test]
async fn configuration_v3_conforms_to_the_schema() {
    common_tests::configuration_v3_tests::configuration_conforms_to_the_schema(
        common::CHINOOK_NDC_METADATA_PATH,
    )
    .await
    .unwrap()
}

#[tokio::test]
async fn postgres_current_only_configure_v3_initial_configuration_is_unchanged() {
    let default_configuration =
        common_tests::configuration_v3_tests::configure_initial_configuration_is_unchanged(
            common::CONNECTION_URI,
        )
        .await;

    insta::assert_json_snapshot!(default_configuration);
}

#[tokio::test]
async fn get_rawconfiguration_v3_schema() {
    let schema = schemars::schema_for!(ndc_postgres_configuration::version3::RawConfiguration);
    insta::assert_json_snapshot!(schema);
}
