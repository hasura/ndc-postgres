#![cfg(test)]

use std::fs;
use std::path::PathBuf;

#[allow(dead_code)]
// we don't have any snapshots right now
// each time we run `just generate-chinook-configuration` we save the old Postgres NDC metadata
// file in `static/ndc-metadata-snapshots`. This test parses each snapshot to ensure we are
// still able to understand old versions
#[test_each::path(glob = "static/ndc-metadata-snapshots/*.json", name(segments = 2))]
fn test_snapshot(ndc_metadata_path: PathBuf) {
    let file = fs::File::open(ndc_metadata_path).expect("fs::File::open");

    let ndc_metadata_json_value: serde_json::Value =
        serde_json::from_reader(file).expect("serde_json::from_reader");

    serde_json::from_value::<ndc_postgres_configuration::RawConfiguration>(
        ndc_metadata_json_value.clone(),
    )
    .expect("Unable to deserialize as RawConfiguration");
}
