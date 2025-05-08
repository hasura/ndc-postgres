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

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v5-configuration";

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

const MY_NATIVE_QUERY: &str = r#"
SELECT "ArtistId" as artist_id,
       "Name",
       coalesce("Name", 'David') as "name_with_coalesce",
       "group_leader".*
FROM "Artist"
CROSS JOIN "group_leader"
WHERE "Name" LIKE '%' || {{name}} || '%'
  AND "ArtistId" > {{lower_bound}}
  AND "ArtistId" < {{upper_bound}}
"#;

#[tokio::test]
async fn create_native_operation() -> anyhow::Result<()> {
    let result = test_native_operation_create_v5(
        CONNECTION_URI,
        CHINOOK_NDC_METADATA_PATH,
        MY_NATIVE_QUERY.to_string(),
    )
    .await?;

    insta::assert_json_snapshot!(result);

    Ok(())
}

const ARRAY_NATIVE_QUERY: &str = r#"
SELECT process_simple_array({{array_param}}) as result
"#;

#[tokio::test]
async fn create_native_operation_with_array_parameter() -> anyhow::Result<()> {
    let result = test_native_operation_create_v5(
        CONNECTION_URI,
        CHINOOK_NDC_METADATA_PATH,
        ARRAY_NATIVE_QUERY.to_string(),
    )
    .await?;

    insta::assert_json_snapshot!(result);

    Ok(())
}

const NESTED_ARRAY_NATIVE_QUERY: &str = r#"
SELECT process_nested_array({{nested_array_param}}) as result
"#;

/// Tests that we can create a native operation with a nested array parameter.
///
/// Note on PostgreSQL multi-dimensional arrays:
/// PostgreSQL doesn't distinguish between arrays of different dimensions at the type level.
/// From the [PostgreSQL documentation](https://www.postgresql.org/docs/current/arrays.html#ARRAYS-DECLARATION):
/// "The current implementation does not enforce the declared number of dimensions either.
/// Arrays of a particular element type are all considered to be of the same type,
/// regardless of size or number of dimensions."
///
/// This means that at the type level, int[][] and int[] are the same type (_int4).
/// The dimensionality is a property of the value, not the type.
///
/// Therefore the plugin behavior for int[] and int[][] is identical,
/// and users who want the multi dimensionality of their arrays reflected in their configuration will need to make that change manually.
#[tokio::test]
async fn create_native_operation_with_nested_array_parameter() -> anyhow::Result<()> {
    let result = test_native_operation_create_v5(
        CONNECTION_URI,
        CHINOOK_NDC_METADATA_PATH,
        NESTED_ARRAY_NATIVE_QUERY.to_string(),
    )
    .await?;

    insta::assert_json_snapshot!(result);

    Ok(())
}
