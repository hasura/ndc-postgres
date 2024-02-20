use std::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration::RawConfiguration;

#[test]
fn test_initialize_directory() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    run(Command::Initialize, dir.path())?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path)?;
    let _: RawConfiguration = serde_json::from_str(&contents)?;

    Ok(())
}
