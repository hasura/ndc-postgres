use tokio::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::FixedEnvironment;
use ndc_postgres_configuration::ParsedConfiguration;

const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

#[tokio::test]
async fn test_update_configuration() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;

    configuration::write_parsed_configuration(configuration::ParsedConfiguration::initial(), &dir)
        .await?;

    let environment =
        FixedEnvironment::from([("CONNECTION_URI".into(), CONNECTION_URI.to_string())]);
    let context = Context {
        context_path: dir.path().to_owned(),
        environment: environment.clone(),
        release_version: None,
    };
    run(Command::Update, context).await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path).await?;
    assert_ends_with_newline(&contents);
    let output: ParsedConfiguration = configuration::parse_configuration(&dir).await?;
    let runtime_config = configuration::make_runtime_configuration(output, environment)?;

    let some_table_metadata = runtime_config.metadata.tables.0.get("Artist");
    assert!(some_table_metadata.is_some());

    Ok(())
}

pub fn assert_ends_with_newline(contents: &str) {
    assert_eq!(contents.chars().last(), Some('\n'));
}
