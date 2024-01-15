//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-chinook-configuration`.
//!
//! The github CI setup runs these tests subject to the filtering logic in
//! '.github/test-configuration.json'. Naming a test with the prefix 'postgres_current_only` will
//! ensure they only run on the latest version of postgres being tested. This is necessary because
//! they rely on supporting data (the chinook ndc_metadata configuration) which we maintain only for
//! the latest version.

#[cfg(test)]
mod configuration_tests {
    use super::super::common;
    use tests_common::common_tests;

    #[tokio::test]
    async fn get_configuration_schema() {
        let schema = schemars::schema_for!(ndc_postgres::configuration::Configuration);
        insta::assert_json_snapshot!(schema);
    }

    // version 2 tests

    #[tokio::test]
    async fn postgres_current_only_configure_v2_is_idempotent() {
        common_tests::configuration_v2_tests::configure_is_idempotent(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V2,
        )
        .await
    }

    #[test]
    fn configuration_v2_conforms_to_the_schema() {
        common_tests::configuration_v2_tests::configuration_conforms_to_the_schema(
            common::CHINOOK_NDC_METADATA_PATH_V2,
        )
    }

    #[tokio::test]
    async fn postgres_current_only_configure_v2_initial_configuration_is_unchanged() {
        let default_configuration =
            common_tests::configuration_v2_tests::configure_initial_configuration_is_unchanged(
                common::CONNECTION_STRING,
            )
            .await;

        insta::assert_json_snapshot!(default_configuration);
    }

    #[tokio::test]
    async fn get_rawconfiguration_v2_schema() {
        let schema = schemars::schema_for!(ndc_postgres::configuration::version2::RawConfiguration);
        insta::assert_json_snapshot!(schema);
    }

    // version 1 tests

    #[tokio::test]
    async fn postgres_current_only_configure_v1_is_idempotent() {
        common_tests::configuration_v1_tests::configure_is_idempotent(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V1,
        )
        .await
    }

    #[test]
    fn configuration_v1_conforms_to_the_schema() {
        common_tests::configuration_v1_tests::configuration_conforms_to_the_schema(
            common::CHINOOK_NDC_METADATA_PATH_V1,
        )
    }

    #[tokio::test]
    async fn postgres_current_only_configure_v1_initial_configuration_is_unchanged() {
        let default_configuration =
            common_tests::configuration_v1_tests::configure_initial_configuration_is_unchanged(
                common::CONNECTION_STRING,
            )
            .await;

        insta::assert_json_snapshot!(default_configuration);
    }

    #[tokio::test]
    async fn get_rawconfiguration_v1_schema() {
        let schema = schemars::schema_for!(ndc_postgres::configuration::version1::RawConfiguration);
        insta::assert_json_snapshot!(schema);
    }
}
