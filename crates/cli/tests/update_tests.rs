use std::fs;

use ndc_postgres_cli::*;
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::RawConfiguration;

const CONNECTION_STRING: &str = "postgresql://postgres:password@localhost:64002";

#[tokio::test]
async fn test_update_configuration() -> anyhow::Result<()> {
    let dir = tempfile::tempdir()?;
    {
        let configuration_file_path = dir.path().join("configuration.json");
        let input = RawConfiguration::Version3(configuration::version3::RawConfiguration {
            connection_uri: CONNECTION_STRING.into(),
            ..configuration::version3::RawConfiguration::empty()
        });
        let writer = fs::File::create(configuration_file_path)?;
        serde_json::to_writer(writer, &input)?;
    }

    run(Command::Update, dir.path()).await?;

    let configuration_file_path = dir.path().join("configuration.json");
    assert!(configuration_file_path.exists());
    let contents = fs::read_to_string(configuration_file_path)?;
    let output: RawConfiguration = serde_json::from_str(&contents)?;
    match output {
        RawConfiguration::Version3(configuration::version3::RawConfiguration {
            connection_uri:
                configuration::ConnectionUri::Uri(configuration::ResolvedSecret(connection_uri)),
            metadata,
            ..
        }) => {
            assert_eq!(connection_uri, CONNECTION_STRING.to_string());
            let some_table_metadata = metadata.tables.0.get("Artist");
            assert!(some_table_metadata.is_some());
        }
    }

    Ok(())
}
