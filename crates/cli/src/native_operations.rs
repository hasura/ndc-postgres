//! Handle the creation of Native Operations.

use std::path::PathBuf;

use super::{update, Context};
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

pub use configuration::version4::native_operations::Kind;

/// Commands on Native Operations.
#[derive(Debug, Clone, clap::Subcommand)]
pub enum Command {
    /// List the existing Native Operations.
    List,
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
        Command::List => list(context).await?,
        Command::Create {
            operation_path,
            kind,
            r#override,
        } => {
            create(
                context,
                operation_path,
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

/// List all native operations.
async fn list(context: Context<impl Environment>) -> anyhow::Result<()> {
    // Read the configuration.
    let mut configuration =
        configuration::parse_configuration(context.context_path.clone()).await?;

    match configuration {
        configuration::ParsedConfiguration::Version3(_) => Err(anyhow::anyhow!(
            "To use the native operations commands, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            let operations = &configuration.metadata.native_queries.0;
            println!("Native Queries:");
            for native_operation in operations.iter().filter(|op| !op.1.is_procedure) {
                println!("- {}", native_operation.0);
            }
            println!("Native Mutations:");
            for native_operation in operations.iter().filter(|op| op.1.is_procedure) {
                println!("- {}", native_operation.0);
            }
        }
        configuration::ParsedConfiguration::Version5(ref mut configuration) => {
            let operations = &configuration.metadata.native_operations;
            println!("Native Queries:");
            for native_operation in &operations.queries.0 {
                println!("- {}", native_operation.0);
            }
            println!("Native Mutations:");
            for native_operation in &operations.mutations.0 {
                println!("- {}", native_operation.0);
            }
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
    context: Context<impl Environment>,
    operation_path: PathBuf,
    kind: Kind,
    override_entry: Override,
) -> anyhow::Result<()> {
    // Read the configuration.
    let mut configuration =
        configuration::parse_configuration(context.context_path.clone()).await?;

    // Prepare the Native Operation SQL so it can be checked against the db.
    let name = operation_path
        .file_stem()
        .ok_or(anyhow::anyhow!("SQL file not found"))?
        .to_str()
        .ok_or(anyhow::anyhow!("Could not convert SQL file name to string"))?
        .to_string();

    // Read the SQL file.
    let file_contents = match std::fs::read_to_string(context.context_path.join(&operation_path)) {
        Ok(ok) => ok,
        Err(err) => anyhow::bail!("{}: {}", operation_path.display(), err),
    };

    match configuration {
        configuration::ParsedConfiguration::Version3(_) => Err(anyhow::anyhow!(
            "To use the native operations commands, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            let connection_string = configuration.get_connection_uri()?;

            let new_native_operation = configuration::version4::native_operations::create(
                configuration,
                &connection_string,
                &operation_path,
                &file_contents,
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
                        .insert(name.into(), new_native_operation);
                }
                Override::No => {
                    // Only insert if vacant.
                    if let std::collections::btree_map::Entry::Vacant(entry) = configuration
                        .metadata
                        .native_queries
                        .0
                        .entry(name.clone().into())
                    {
                        entry.insert(new_native_operation);
                    } else {
                        anyhow::bail!("A Native Operation with the name '{name}' already exists. To override, use the --override flag.");
                    }
                }
            }
        }
        configuration::ParsedConfiguration::Version5(ref mut configuration) => {
            let connection_string = configuration.get_connection_uri()?;

            let kind = match kind {
                configuration::version4::native_operations::Kind::Query => {
                    configuration::version5::native_operations::Kind::Query
                }
                configuration::version4::native_operations::Kind::Mutation => {
                    configuration::version5::native_operations::Kind::Mutation
                }
            };

            let new_native_operation = configuration::version5::native_operations::create(
                configuration,
                &connection_string,
                &operation_path,
                &file_contents,
            )
            .await?;

            // Add the new native operation to the configuration.
            match override_entry {
                Override::Yes => match kind {
                    configuration::version5::native_operations::Kind::Query => {
                        configuration
                            .metadata
                            .native_operations
                            .queries
                            .0
                            .insert(name.into(), new_native_operation);
                    }
                    configuration::version5::native_operations::Kind::Mutation => {
                        configuration
                            .metadata
                            .native_operations
                            .mutations
                            .0
                            .insert(name.into(), new_native_operation);
                    }
                },
                Override::No => {
                    // Only insert if vacant.
                    match kind {
                        configuration::version5::native_operations::Kind::Query => {
                            if let std::collections::btree_map::Entry::Vacant(entry) = configuration
                                .metadata
                                .native_operations
                                .queries
                                .0
                                .entry(name.clone().into())
                            {
                                entry.insert(new_native_operation);
                            } else {
                                anyhow::bail!("A Native Operation with the name '{name}' already exists. To override, use the --override flag.");
                            }
                        }
                        configuration::version5::native_operations::Kind::Mutation => {
                            if let std::collections::btree_map::Entry::Vacant(entry) = configuration
                                .metadata
                                .native_operations
                                .mutations
                                .0
                                .entry(name.clone().into())
                            {
                                entry.insert(new_native_operation);
                            } else {
                                anyhow::bail!("A Native Operation with the name '{name}' already exists. To override, use the --override flag.");
                            }
                        }
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
            "To use the native operations commands, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            // Delete if exists and is of the same type, error if not.
            match configuration.metadata.native_queries.0.entry(name.into()) {
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
        configuration::ParsedConfiguration::Version5(ref mut configuration) => {
            // Delete if exists and is of the same type, error if not.
            match kind {
                Kind::Mutation => {
                    match configuration
                        .metadata
                        .native_operations
                        .mutations
                        .0
                        .entry(name.into())
                    {
                        std::collections::btree_map::Entry::Occupied(entry) => {
                            entry.remove_entry();
                        }
                        std::collections::btree_map::Entry::Vacant(_) => {
                            anyhow::bail!(error_message_not_exist);
                        }
                    }
                }
                Kind::Query => {
                    match configuration
                        .metadata
                        .native_operations
                        .queries
                        .0
                        .entry(name.into())
                    {
                        std::collections::btree_map::Entry::Occupied(entry) => {
                            entry.remove_entry();
                        }
                        std::collections::btree_map::Entry::Vacant(_) => {
                            anyhow::bail!(error_message_not_exist);
                        }
                    }
                }
            }
        }
    }

    // We write the configuration excluding the deleted Native Operation.
    configuration::write_parsed_configuration(configuration, context.context_path.clone()).await?;

    Ok(())
}
