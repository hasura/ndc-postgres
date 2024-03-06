//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-configuration`.

#![cfg(test)]

use super::common;
use tests_common::common_tests;

#[tokio::test]
async fn test_configure_is_idempotent() {
    common_tests::configuration_v3_tests::configure_is_idempotent(
        common::CONNECTION_URI,
        common::CHINOOK_NDC_METADATA_PATH,
    )
    .await
    .unwrap()
}

#[tokio::test]
async fn configuration_conforms_to_the_schema() {
    common_tests::configuration_v3_tests::configuration_conforms_to_the_schema(
        common::CHINOOK_NDC_METADATA_PATH,
    )
    .await
}
