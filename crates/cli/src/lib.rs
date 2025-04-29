//! The interpretation of the commands that the CLI can handle.
//!
//! The CLI can do a few things. This provides a central point where those things are routed and
//! then done, making it easier to test this crate deterministically.

mod metadata;
mod native_operations;

use std::path::PathBuf;

use clap::Subcommand;
use metadata::NativeToolchainDefinition;
use tokio::fs;

use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

const UPDATE_ATTEMPTS: u8 = 3;

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
        /// Whether to create the hasura connector metadata.
        with_metadata: bool,
    },
    /// Update the configuration by introspecting the database, using the configuration options.
    Update,
    /// Upgrade the configuration to the latest version. This does not involve the database.
    Upgrade {
        #[arg(long)]
        dir_from: PathBuf,
        #[arg(long)]
        dir_to: PathBuf,
    },
    #[command(subcommand)]
    NativeOperation(native_operations::Command),
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
        Command::Upgrade { dir_from, dir_to } => upgrade(dir_from, dir_to).await?,
        Command::NativeOperation(cmd) => native_operations::run(cmd, context).await?,
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
    // refuse to initialize the directory unless it is empty
    let mut items_in_dir = fs::read_dir(&context.context_path).await?;
    if items_in_dir.next_entry().await?.is_some() {
        Err(Error::DirectoryIsNotEmpty)?;
    }

    configuration::write_parsed_configuration(
        configuration::ParsedConfiguration::initial(),
        &context.context_path,
    )
    .await?;

    // if requested, create the metadata
    if with_metadata {
        let metadata_dir = context.context_path.join(".hasura-connector");
        fs::create_dir(&metadata_dir).await?;
        let metadata_file = metadata_dir.join("connector-metadata.yaml");
        let metadata = metadata::ConnectorMetadataDefinition {
            version: metadata::Version::V2,
            ndc_spec_generation: metadata::NdcSpecGeneration::V0_2,
            packaging_definition: metadata::PackagingDefinition::PrebuiltDockerImage(
                metadata::PrebuiltDockerImagePackaging {
                    docker_image: format!(
                        "ghcr.io/hasura/ndc-postgres:{}",
                        context.release_version.unwrap_or("latest")
                    ),
                },
            ),
            supported_environment_variables: vec![
				metadata::EnvironmentVariableDefinition {
					name: "CONNECTION_URI".to_string(),
					description: "The PostgreSQL connection URI".to_string(),
					default_value: Some("postgresql://read_only_user:readonlyuser@35.236.11.122:5432/v3-docs-sample-app".to_string()),
				},
				metadata::EnvironmentVariableDefinition {
					name: "CLIENT_CERT".to_string(),
					description: "The SSL client certificate (Optional)".to_string(),
					default_value: Some(String::new()),
				},
				metadata::EnvironmentVariableDefinition {
					name: "CLIENT_KEY".to_string(),
					description: "The SSL client key (Optional)".to_string(),
					default_value: Some(String::new()),
				},
				metadata::EnvironmentVariableDefinition {
					name: "ROOT_CERT".to_string(),
					description: "The SSL root certificate (Optional)".to_string(),
					default_value: Some(String::new()),
				},
			],
            commands: metadata::Commands {
                update: Some("hasura-ndc-postgres update".to_string()),
                watch: None,
            },
            cli_plugin: Some(metadata::CliPluginDefinition {
                name: "ndc-postgres".to_string(),
                version: context.release_version.unwrap_or("latest").to_string(),
            }),
            docker_compose_watch: vec![metadata::DockerComposeWatchItem {
                path: "./".to_string(),
                target: Some("/etc/connector".to_string()),
                action: metadata::DockerComposeWatchAction::SyncAndRestart,
                ignore: vec![],
            }],
            native_toolchain_definition: Some(NativeToolchainDefinition {
                commands: vec![
                    ("start".to_string(), metadata::CommandDefinition::ShellScript {
                        bash: "#!/usr/bin/env bash\nset -eu -o pipefail\nHASURA_CONFIGURATION_DIRECTORY=\"$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\" \"$HASURA_DDN_NATIVE_CONNECTOR_DIR/ndc-postgres\" serve".to_string(),
                        powershell: "$ErrorActionPreference = \"Stop\"\n$env:HASURA_CONFIGURATION_DIRECTORY=\"$env:HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\"; & \"$env:HASURA_DDN_NATIVE_CONNECTOR_DIR\\ndc-postgres.exe\" serve".to_string(),
                    }),
                    ("update".to_string(), metadata::CommandDefinition::ShellScript {
                        bash: "#!/usr/bin/env bash\nset -eu -o pipefail\n\"$HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR/hasura-ndc-postgres\" update".to_string(),
                        powershell: "$ErrorActionPreference = \"Stop\"\n& \"$env:HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR\\hasura-ndc-postgres.exe\" update".to_string(),
                    }),
                    ("watch".to_string(), metadata::CommandDefinition::ShellScript {
                        bash: "#!/usr/bin/env bash\necho \"Watch is not supported for this connector\"\nexit 1".to_string(),
                        powershell: "Write-Output \"Watch is not supported for this connector\"\nexit 1".to_string(),
                    }),
                ].into_iter().collect(),
            })
        };

        fs::write(metadata_file, serde_yaml::to_string(&metadata)?).await?;
    }

    Ok(())
}

/// Update the configuration in the current directory by introspecting the database.
///
/// This expects a configuration with a valid connection URI.
async fn update(context: Context<impl Environment>) -> anyhow::Result<()> {
    // It is possible to change the file in the middle of introspection.
    // We want to detect this scenario and retry, or fail if we are unable to.
    // We do that with a few attempts.
    for _attempt in 1..=UPDATE_ATTEMPTS {
        let existing_configuration =
            configuration::parse_configuration(&context.context_path).await?;
        let output =
            configuration::introspect(existing_configuration.clone(), &context.environment).await?;

        // Check that the input file did not change since we started introspecting,
        let input_again_before_write =
            configuration::parse_configuration(&context.context_path).await?;

        // and skip this attempt if it has.
        if input_again_before_write == existing_configuration {
            // In order to be sure to capture default values absent in the initial input we have to
            // always write out the updated configuration.
            configuration::write_parsed_configuration(output, &context.context_path).await?;
            return Ok(());
        }

        // If we have reached here, the input file changed before writing.
    }

    // We ran out of attempts.
    Err(anyhow::anyhow!(
        "Cannot override configuration: input changed before write."
    ))
}

/// Upgrade the configuration in a directory by trying to read it and then write it back
/// out to a different directory.
///
async fn upgrade(dir_from: PathBuf, dir_to: PathBuf) -> anyhow::Result<()> {
    let old_configuration = configuration::parse_configuration(dir_from).await?;
    let upgraded_configuration = configuration::upgrade_to_latest_version(old_configuration);
    configuration::write_parsed_configuration(upgraded_configuration, dir_to).await?;

    eprintln!("Upgrade completed successfully. You may need to also run 'update'.");

    Ok(())
}
