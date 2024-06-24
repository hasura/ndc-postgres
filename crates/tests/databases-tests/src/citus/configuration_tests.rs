//! Tests that configuration generation has not changed.
//!
//! If you have changed it intentionally, run `just generate-configuration`.
//!
//! The github CI setup runs these tests subject to the filtering logic in
//! '.github/test-configuration.json'. Naming a test with the prefix 'postgres_current_only` will
//! ensure they only run on the latest version of postgres being tested. This is necessary because
//! they rely on supporting data (the chinook NDC metadata configuration) which we maintain only for
//! the latest version.

use std::collections::HashMap;
use std::path::{Path, PathBuf};

use similar_asserts::assert_eq;

pub const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v4-chinook-ndc-metadata";

pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64004?sslmode=disable";

#[tokio::test]
async fn configure_is_idempotent() -> anyhow::Result<()> {
    introspection_is_idempotent(CONNECTION_URI, CHINOOK_NDC_METADATA_PATH).await
}

// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the NDC metadata file that is shared
// with other tests.
//
// If you have changed it intentionally, run `just generate-configuration`.
async fn introspection_is_idempotent(
    connection_string: &str,
    ndc_metadata_path: impl AsRef<Path> + Sync,
) -> anyhow::Result<()> {
    let parsed_configuration = ndc_postgres_configuration::parse_configuration(
        PathBuf::from(env!("CARGO_MANIFEST_DIR"))
            .join("../../..")
            .join(ndc_metadata_path),
    )
    .await?;
    let environment = HashMap::from([(
        ndc_postgres_configuration::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let introspected_configuration =
        ndc_postgres_configuration::introspect(parsed_configuration.clone(), environment).await?;

    assert_eq!(parsed_configuration, introspected_configuration);
    Ok(())
}
