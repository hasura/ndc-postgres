//! The interpretation of the commands that the CLI can handle.
//!
//! The CLI can do a few things. This provides a central point where those things are routed and
//! then done, making it easier to test this crate deterministically.

mod metadata;

use std::path::PathBuf;

use clap::Subcommand;
use tokio::fs;

use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

/// The various contextual bits and bobs we need to run.
pub struct Context<Env: Environment> {
    pub context_path: PathBuf,
    pub environment: Env,
    pub release_version: Option<&'static str>,
}

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
pub async fn run(command: Command, context: Context<impl Environment>) -> anyhow::Result<()> {
    match command {
        Command::Initialize { with_metadata } => initialize(with_metadata, context).await?,
        Command::Update => update(context).await?,
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
async fn initialize(with_metadata: bool, context: Context<impl Environment>) -> anyhow::Result<()> {
    let configuration_file = context
        .context_path
        .join(configuration::CONFIGURATION_FILENAME);
    fs::create_dir_all(&context.context_path).await?;

    // refuse to initialize the directory unless it is empty
    let mut items_in_dir = fs::read_dir(&context.context_path).await?;
    if items_in_dir.next_entry().await?.is_some() {
        Err(Error::DirectoryIsNotEmpty)?;
    }

    // create the configuration file
    fs::write(
        configuration_file,
        serde_json::to_string_pretty(&configuration::RawConfiguration::empty())?,
    )
    .await?;

    // if requested, create the metadata
    if with_metadata {
        let metadata_dir = context.context_path.join(".hasura-connector");
        fs::create_dir(&metadata_dir).await?;
        let metadata_file = metadata_dir.join("connector-metadata.yaml");
        let metadata = metadata::ConnectorMetadataDefinition {
            packaging_definition: metadata::PackagingDefinition::PrebuiltDockerImage(
                metadata::PrebuiltDockerImagePackaging {
                    docker_image: format!(
                        "ghcr.io/hasura/ndc-postgres:{}",
                        context.release_version.unwrap_or("latest")
                    ),
                },
            ),
            supported_environment_variables: vec![metadata::EnvironmentVariableDefinition {
                name: "CONNECTION_URI".to_string(),
                description: "The PostgreSQL connection URI".to_string(),
                default_value: None,
            }],
            commands: metadata::Commands {
                update: Some("hasura-ndc-postgres update".to_string()),
                watch: None,
            },
            cli_plugin: Some(metadata::CliPluginDefinition {
                name: "ndc-postgres".to_string(),
                version: context.release_version.unwrap_or("latest").to_string(),
            }),
            docker_compose_watch: vec![],
        };

        fs::write(metadata_file, serde_yaml::to_string(&metadata)?).await?;
    }

    Ok(())
}

/// Update the configuration in the current directory by introspecting the database.
///
/// This expects a configuration with a valid connection URI.
async fn update(context: Context<impl Environment>) -> anyhow::Result<()> {
    let configuration_file_path = context
        .context_path
        .join(configuration::CONFIGURATION_FILENAME);
    let input: configuration::RawConfiguration = {
        let configuration_file_contents = fs::read_to_string(&configuration_file_path).await?;
        serde_json::from_str(&configuration_file_contents)?
    };
    let output = configuration::introspect(input, &context.environment).await?;
    fs::write(
        &configuration_file_path,
        serde_json::to_string_pretty(&output)?,
    )
    .await?;
    Ok(())
}
