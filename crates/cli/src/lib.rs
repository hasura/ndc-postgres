//! The interpretation of the commands that the CLI can handle.
//!
//! The CLI can do a few things. This provides a central point where those things are routed and
//! then done, making it easier to test this crate deterministically.

mod metadata;

use std::fs;
use std::path::Path;

use clap::Subcommand;

use ndc_postgres_configuration as configuration;

/// The command invoked by the user.
#[derive(Debug, Clone, Subcommand)]
pub enum Command {
    /// Initialize a configuration in the current (empty) directory.
    Initialize {
        #[arg(long)]
        with_metadata: bool,
    },
    /// Update the configuration by introspecting the database, using the configuration options.
    Update,
}

/// The set of errors that can go wrong _in addition to_ generic I/O or parsing errors.
#[derive(Debug, PartialEq, thiserror::Error)]
pub enum Error {
    #[error("directory is not empty")]
    DirectoryIsNotEmpty,
}

/// Run a command in a given directory.
pub async fn run(
    command: Command,
    context_path: &Path,
    environment: impl configuration::environment::Environment,
) -> anyhow::Result<()> {
    match command {
        Command::Initialize { with_metadata } => initialize(context_path, with_metadata)?,
        Command::Update => update(context_path, environment).await?,
    };
    Ok(())
}

/// Initialize an empty directory with an empty connector configuration.
///
/// An empty configuration contains default settings and options, and is expected to be filled with
/// information such as the database connection string by the user, and later on metadata
/// information via introspection.
///
/// Optionally, this can also create the connector metadata, which is used by the Hasura CLI to
/// automatically work with this CLI as a plugin.
fn initialize(context_path: &Path, with_metadata: bool) -> anyhow::Result<()> {
    let configuration_file = context_path.join(configuration::CONFIGURATION_FILENAME);
    fs::create_dir_all(context_path)?;

    // refuse to initialize the directory unless it is empty
    let mut items_in_dir = fs::read_dir(context_path)?;
    if items_in_dir.next().is_some() {
        Err(Error::DirectoryIsNotEmpty)?;
    }

    // create the configuration file
    {
        let writer = fs::File::create(configuration_file)?;
        serde_json::to_writer_pretty(writer, &configuration::RawConfiguration::empty())?;
    }

    // if requested, create the metadata
    if with_metadata {
        let metadata_dir = context_path.join(".hasura-connector");
        fs::create_dir(&metadata_dir)?;
        let metadata_file = metadata_dir.join("connector-metadata.yaml");
        let metadata = metadata::ConnectorMetadataDefinition {
            packaging_definition: metadata::PackagingDefinition::PrebuiltDockerImage(
                metadata::PrebuiltDockerImagePackaging {
                    docker_image: "ghcr.io/hasura/ndc-postgres".to_string(),
                },
            ),
            supported_environment_variables: vec![metadata::EnvironmentVariableDefinition {
                name: "CONNECTION_URI".to_string(),
                description: "The PostgreSQL connection URI".to_string(),
                default_value: None,
            }],
            commands: metadata::Commands {
                update: Some("update".to_string()),
                watch: None,
            },
            cli_plugin: Some(metadata::CliPluginDefinition {
                name: "ndc-postgres".to_string(),
                version: "latest".to_string(),
            }),
            docker_compose_watch: vec![],
        };
        let writer = fs::File::create(metadata_file)?;
        serde_yaml::to_writer(writer, &metadata)?;
    }

    Ok(())
}

/// Update the configuration in the current directory by introspecting the database.
///
/// This expects a configuration with a valid connection URI.
async fn update(
    context_path: &Path,
    environment: impl configuration::environment::Environment,
) -> anyhow::Result<()> {
    let configuration_file_path = context_path.join(configuration::CONFIGURATION_FILENAME);
    let input: configuration::RawConfiguration = {
        let reader = fs::File::open(&configuration_file_path)?;
        serde_json::from_reader(reader)?
    };
    let output = configuration::introspect(input, environment).await?;
    let writer = fs::File::create(&configuration_file_path)?;
    serde_json::to_writer_pretty(writer, &output)?;
    Ok(())
}
