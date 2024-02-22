use std::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration::RawConfiguration;

#[tokio::test]
async fn test_initialize_directory() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    run(Command::Initialize, dir.path()).await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path)?;
    let _: RawConfiguration = serde_json::from_str(&contents)?;

    Ok(())
}

#[tokio::test]
async fn test_do_not_initialize_when_files_already_exist() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;
    fs::write(
        dir.path().join("random.file"),
        "this directory is no longer empty",
    )?;

    match run(Command::Initialize, dir.path()).await {
        Ok(()) => panic!("Expected the command to fail."),
        Err(error) => match error.downcast::<Error>() {
            Err(input) => panic!("Expected a CLI error, but got {input}"),
            Ok(cli_error) => assert_eq!(cli_error, Error::DirectoryIsNotEmpty),
        },
    }

    Ok(())
}
