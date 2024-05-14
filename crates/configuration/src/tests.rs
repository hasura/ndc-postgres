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

use std::{collections::HashMap, path::Path};

use crate::common;
use similar_asserts::assert_eq;

mod postgres {

    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v4-chinook-ndc-metadata";

    pub const BROKEN_QUERIES_NDC_METADATA_PATH: &str =
        "static/postgres/broken-queries-ndc-metadata";

    pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

    pub const EMPTY_CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002/empty";
}

mod citus {
    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v4-chinook-ndc-metadata";

    pub const CONNECTION_URI: &str =
        "postgresql://postgres:password@localhost:64004?sslmode=disable";
}

mod cockroach {
    pub const CHINOOK_NDC_METADATA_PATH: &str = "static/cockroach/v4-chinook-ndc-metadata";

    pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64003/defaultdb";
}

#[tokio::test]
async fn postgres_current_only_broken_metadata_is_up_to_date() {
    introspection_is_idempotent(
        postgres::EMPTY_CONNECTION_URI,
        postgres::BROKEN_QUERIES_NDC_METADATA_PATH,
    )
    .await
    .unwrap();
}

#[tokio::test]
async fn postgres_current_only_configure_is_idempotent() {
    introspection_is_idempotent(
        postgres::CONNECTION_URI,
        postgres::CHINOOK_NDC_METADATA_PATH,
    )
    .await
    .unwrap();
}

#[tokio::test]
async fn citus_current_only_configure_is_idempotent() {
    introspection_is_idempotent(citus::CONNECTION_URI, citus::CHINOOK_NDC_METADATA_PATH)
        .await
        .unwrap();
}

#[tokio::test]
async fn cockroach_current_only_configure_is_idempotent() {
    introspection_is_idempotent(
        cockroach::CONNECTION_URI,
        cockroach::CHINOOK_NDC_METADATA_PATH,
    )
    .await
    .unwrap();
}

// Tests that configuration generation has not changed.
//
// This test does not use insta snapshots because it checks the NDC metadata file that is shared with
// other tests.
//
// If you have changed it intentionally, run `just generate-configuration`.
pub async fn introspection_is_idempotent(
    connection_string: &str,
    chinook_ndc_metadata_path: impl AsRef<Path> + Sync,
) -> anyhow::Result<()> {
    let parsed_configuration = crate::parse_configuration(common::get_path_from_project_root(
        &chinook_ndc_metadata_path,
    ))
    .await?;
    let environment = HashMap::from([(
        crate::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    let introspected_configuration =
        crate::introspect(parsed_configuration.clone(), environment).await?;

    assert_eq!(parsed_configuration, introspected_configuration);
    Ok(())
}

pub async fn configure_initial_configuration_is_unchanged(
    connection_string: &str,
) -> crate::ParsedConfiguration {
    let args = crate::ParsedConfiguration::initial();
    let environment = HashMap::from([(
        crate::DEFAULT_CONNECTION_URI_VARIABLE.into(),
        connection_string.into(),
    )]);

    crate::introspect(args, environment)
        .await
        .expect("configuration::introspect")
}
