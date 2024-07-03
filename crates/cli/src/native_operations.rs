//! Handle the creation of Native Operations.

use std::path::PathBuf;

use super::{update, Context};
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;

/// Query or Mutation.
#[derive(Debug, Clone, clap::ValueEnum)]
pub enum Kind {
    Query,
    Mutation,
}

/// Override Native Operation definition if exists?
#[derive(Debug, Clone, clap::ValueEnum)]
pub enum Override {
    Yes,
    No,
}

/// Take a SQL file containing a Native Operation, check against the database that it is valid,
/// and add it to the configuration if it is.
pub async fn create(
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
                convert_kind_v4(kind),
            )
            .await?;

            // Add the new native operation to the configuration.
            match override_entry {
                Override::Yes => {
                    configuration
                        .metadata
                        .native_queries
                        .0
                        .insert(name.to_string(), new_native_operation);
                }
                Override::No => {
                    if configuration.metadata.native_queries.0.contains_key(&name) {
                        anyhow::bail!("A Native Operation with the name '{name}' already exists. To override, use the --override flag.");
                    } else {
                        configuration
                            .metadata
                            .native_queries
                            .0
                            .insert(name.to_string(), new_native_operation);
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

fn convert_kind_v4(kind: Kind) -> configuration::version4::native_operations::Kind {
    match kind {
        Kind::Query => configuration::version4::native_operations::Kind::Query,
        Kind::Mutation => configuration::version4::native_operations::Kind::Mutation,
    }
}
