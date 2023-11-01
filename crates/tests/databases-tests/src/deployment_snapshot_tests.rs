#[cfg(test)]
mod deployment_snapshots {
    use ndc_postgres::configuration;
    use std::fs;
    use std::path::PathBuf;

    // each time we run `just generate-chinook-configuration` we save the old
    // Postgres deployment in `static/deployment-snapshots`. This test parses each snapshot to
    // ensure we are still able to understand old versions
    #[test_each::path(glob = "static/deployment-snapshots/**/*.json", name(segments = 2))]
    fn test_snapshot(deployment_path: PathBuf) {
        let file = fs::File::open(deployment_path).expect("fs::File::open");

        let deployment_json_value: serde_json::Value =
            serde_json::from_reader(file).expect("serde_json::from_reader");

        let _decoded_configuration: configuration::RawConfiguration =
            serde_json::from_value(deployment_json_value.clone())
                .expect("Unable to deserialize as RawConfiguration");
    }
}
