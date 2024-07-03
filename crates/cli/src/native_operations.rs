//! Handle the creation of Native Operations.

use std::path::PathBuf;

use super::{update, Context};
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

pub use configuration::version4::native_operations::Kind;

/// Commands on Native Operations.
#[derive(Debug, Clone, clap::Subcommand)]
pub enum Command {
    /// Create a new Native Operation from a SQL file.
    Create {
        /// Relative path to the SQL file inside the connector configuration directory.
        #[arg(long)]
        operation_path: PathBuf,

        /// Operation kind.
        #[arg(long)]
        kind: Kind,

        /// Override the Native Operation definition if it exists.
        #[arg(long)]
        r#override: bool,
    },
    /// Delete an existing Native Operation from the configuration.
    Delete {
        /// The name of the Native Operation.
        #[arg(long)]
        name: String,

        /// Operation kind.
        #[arg(long)]
        kind: Kind,
    },
}

/// Run a command in a given directory.
pub async fn run(command: Command, context: Context<impl Environment>) -> anyhow::Result<()> {
    match command {
        Command::Create {
            operation_path,
            kind,
            r#override,
        } => {
            create(
                operation_path,
                context,
                kind,
                if r#override {
                    Override::Yes
                } else {
                    Override::No
                },
            )
            .await?;
        }
        Command::Delete { name, kind } => {
            delete(context, name, kind).await?;
        }
    };
    Ok(())
}

/// Override Native Operation definition if exists?
#[derive(Debug, Clone, clap::ValueEnum)]
enum Override {
    Yes,
    No,
}

/// Take a SQL file containing a Native Operation, check against the database that it is valid,
/// and add it to the configuration if it is.
async fn create(
    operation_path: PathBuf,
    context: Context<impl Environment>,
    kind: Kind,
    override_entry: Override,
) -> anyhow::Result<()> {
    // Read the configuration.
    let mut configuration =
        configuration::parse_configuration(context.context_path.clone()).await?;

    match configuration {
        configuration::ParsedConfiguration::Version3(_) => Err(anyhow::anyhow!(
            "To use the create native operations command, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            let (name, new_native_operation) = configuration::version4::native_operations::create(
                configuration,
                operation_path,
                &context.context_path,
                kind,
            )
            .await?;

            // Add the new native operation to the configuration.
            match override_entry {
                Override::Yes => {
                    configuration
                        .metadata
                        .native_queries
                        .0
                        .insert(name, new_native_operation);
                }
                Override::No => {
                    // Only insert if vacant.
                    if let std::collections::btree_map::Entry::Vacant(entry) =
                        configuration.metadata.native_queries.0.entry(name.clone())
                    {
                        entry.insert(new_native_operation);
                    } else {
                        anyhow::bail!("A Native Operation with the name '{}' already exists. To override, use the --override flag.", name);
                    }
                }
            }
        }
    };

    // We write the configuration including the new Native Operation to file.
    configuration::write_parsed_configuration(configuration, context.context_path.clone()).await?;

    // We update the configuration as well so that the introspection will add missing scalar type entries if necessary.
    update(context).await
}

/// Delete a Native Operation by name.
async fn delete(
    context: Context<impl Environment>,
    name: String,
    kind: Kind,
) -> anyhow::Result<()> {
    // Read the configuration.
    let mut configuration =
        configuration::parse_configuration(context.context_path.clone()).await?;

    let error_message_not_exist = format!(
        "A Native {} with the name '{}' does not exists.",
        match kind {
            Kind::Mutation => "Mutation",
            Kind::Query => "Query",
        },
        name
    );

    match configuration {
        configuration::ParsedConfiguration::Version3(_) => Err(anyhow::anyhow!(
            "To use the delete Native Operations command, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            // Delete if exists and is of the same type, error if not.
            match configuration.metadata.native_queries.0.entry(name.clone()) {
                std::collections::btree_map::Entry::Occupied(entry) => {
                    let value = entry.get();
                    if value.is_procedure {
                        match kind {
                            Kind::Mutation => {
                                entry.remove_entry();
                            }
                            Kind::Query => {
                                anyhow::bail!(format!("{error_message_not_exist}\n Did you mean the Native Mutation with the same name?"));
                            }
                        }
                    } else {
                        match kind {
                            Kind::Mutation => {
                                anyhow::bail!(format!("{error_message_not_exist}\n Did you mean the Native Query with the same name?"));
                            }
                            Kind::Query => {
                                entry.remove_entry();
                            }
                        }
                    }
                }
                std::collections::btree_map::Entry::Vacant(_) => {
                    anyhow::bail!(error_message_not_exist);
                }
            }
        }
    }
    Ok(())
}
