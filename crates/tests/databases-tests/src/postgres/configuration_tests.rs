//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-configuration`.
//!
//! The github CI setup runs these tests subject to the filtering logic in
//! '.github/test-configuration.json'. Naming a test with the prefix 'postgres_current_only` will
//! ensure they only run on the latest version of postgres being tested. This is necessary because
//! they rely on supporting data (the chinook NDC metadata configuration) which we maintain only for
//! the latest version.

use tests_common::common_tests::configuration_tests::*;

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v4-chinook-ndc-metadata";

pub const BROKEN_QUERIES_NDC_METADATA_PATH: &str = "static/postgres/broken-queries-ndc-metadata";

pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

pub const EMPTY_CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002/empty";

#[tokio::test]
async fn postgres_current_only_broken_metadata_is_up_to_date() -> anyhow::Result<()> {
    introspection_is_idempotent(EMPTY_CONNECTION_URI, BROKEN_QUERIES_NDC_METADATA_PATH).await
}

#[tokio::test]
async fn postgres_current_only_configure_is_idempotent() -> anyhow::Result<()> {
    introspection_is_idempotent(CONNECTION_URI, CHINOOK_NDC_METADATA_PATH).await
}

#[tokio::test]
async fn create_native_operation() -> anyhow::Result<()> {
    let my_native_query = r#"
SELECT "ArtistId" as artist_id,
       "Name",
       coalesce("Name", 'David') as "name_with_coalesce",
       "group_leader".*
FROM "Artist"
CROSS JOIN "group_leader"
WHERE "Name" LIKE '%' || {{name}} || '%'
  AND "ArtistId" > {{lower_bound}}
  AND "ArtistId" < {{upper_bound}}
"#
    .to_string();

    let result = test_native_operation_create(
        CONNECTION_URI,
        CHINOOK_NDC_METADATA_PATH,
        my_native_query,
        ndc_postgres_configuration::version4::native_operations::Kind::Query,
    )
    .await?;

    insta::assert_json_snapshot!(result);

    Ok(())
}
