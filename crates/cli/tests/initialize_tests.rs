use std::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::RawConfiguration;

#[tokio::test]
async fn test_initialize_directory() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    run(
        Command::Initialize {
            with_metadata: false,
        },
        dir.path(),
        configuration::environment::EmptyEnvironment,
    )
    .await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path)?;
    let _: RawConfiguration = serde_json::from_str(&contents)?;

    let metadata_file_path = dir
        .path()
        .join(".hasura-connector")
        .join("connector-metadata.yaml");
    assert!(!metadata_file_path.exists());

    Ok(())
}

#[tokio::test]
async fn test_do_not_initialize_when_files_already_exist() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;
    fs::write(
        dir.path().join("random.file"),
        "this directory is no longer empty",
    )?;

    match run(
        Command::Initialize {
            with_metadata: false,
        },
        dir.path(),
        configuration::environment::EmptyEnvironment,
    )
    .await
    {
        Ok(()) => panic!("Expected the command to fail."),
        Err(error) => match error.downcast::<Error>() {
            Err(input) => panic!("Expected a CLI error, but got {input}"),
            Ok(cli_error) => assert_eq!(cli_error, Error::DirectoryIsNotEmpty),
        },
    }

    Ok(())
}

#[tokio::test]
async fn test_initialize_directory_with_metadata() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    run(
        Command::Initialize {
            with_metadata: true,
        },
        dir.path(),
        configuration::environment::EmptyEnvironment,
    )
    .await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());

    let metadata_file_path = dir
        .path()
        .join(".hasura-connector")
        .join("connector-metadata.yaml");
    assert!(metadata_file_path.exists());
    let contents = fs::read_to_string(metadata_file_path)?;
    insta::assert_snapshot!(contents);

    Ok(())
}
