mod common;

use tokio::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::ParsedConfiguration;

#[tokio::test]
async fn test_initialize_directory() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    let context = Context {
        context_path: dir.path().to_owned(),
        environment: configuration::environment::EmptyEnvironment,
        release_version: None,
    };
    run(Command::Initialize, context).await?;

    let configuration_schema_file_path = dir.path().join("schema.json");
    assert!(configuration_schema_file_path.exists());
    common::assert_file_ends_with_newline(&configuration_schema_file_path).await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path).await?;
    common::assert_ends_with_newline(&contents);
    let _: ParsedConfiguration = configuration::parse_configuration(&dir).await?;

    let metadata_file_path = dir
        .path()
        .join(".hasura-connector")
        .join("connector-metadata.yaml");
    assert!(!metadata_file_path.exists());

    Ok(())
}

#[tokio::test]
async fn test_initialize_version_is_unchanged() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    let context = Context {
        context_path: dir.path().to_owned(),
        environment: configuration::environment::EmptyEnvironment,
        release_version: None,
    };
    run(Command::Initialize, context).await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let configuration_value: serde_json::Value =
        serde_json::from_str(fs::read_to_string(configuration_file_path).await?.as_str())?;

    let version = configuration_value
        .as_object()
        .unwrap()
        .get("version")
        .unwrap();

    insta::assert_snapshot!(version);
    Ok(())
}

#[tokio::test]
async fn test_do_not_initialize_when_files_already_exist() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;
    fs::write(
        dir.path().join("random.file"),
        "this directory is no longer empty",
    )
    .await?;

    let context = Context {
        context_path: dir.path().to_owned(),
        environment: configuration::environment::EmptyEnvironment,
        release_version: None,
    };
    match run(Command::Initialize, context).await {
        Ok(()) => panic!("Expected the command to fail."),
        Err(error) => match error.downcast::<Error>() {
            Err(input) => panic!("Expected a CLI error, but got {input}"),
            Ok(cli_error) => assert_eq!(cli_error, Error::DirectoryIsNotEmpty),
        },
    }

    Ok(())
}
