#![cfg(test)]

use std::path::PathBuf;

// each time we run `just generate-configuration` we save the old Postgres NDC configuration
// directory in `static/ndc-metadata-snapshots`. This test parses each snapshot to ensure we are
// still able to understand old versions
#[test_each::path(glob = "static/ndc-metadata-snapshots/*", name(segments = 2))]
fn test_snapshot(ndc_metadata_path: PathBuf) {
    tokio::runtime::Builder::new_multi_thread()
        .build()
        .unwrap()
        .block_on(async {
            let ndc_metadata =
                ndc_postgres_configuration::parse_configuration(ndc_metadata_path).await;

            ndc_metadata.expect("Unable to deserialize as RawConfiguration");
        });
}
