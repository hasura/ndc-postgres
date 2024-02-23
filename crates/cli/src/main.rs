//! The CLI application. This is used to configure a deployment of ndc-postgres.
//!
//! This is intended to be automatically downloaded and invoked via the Hasura CLI, as a plugin.
//! It is unlikely that end-users will use it directly.

use std::env;
use std::path::PathBuf;

use clap::Parser;

use ndc_postgres_cli::*;

/// The command-line arguments.
#[derive(Debug, Parser)]
pub struct Args {
    /// The path to the configuration. Defaults to the current directory.
    #[arg(long = "context", env = "HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH")]
    pub context_path: Option<PathBuf>,
    /// The command to invoke.
    #[command(subcommand)]
    pub subcommand: Command,
}

/// The application entrypoint. It pulls information from the environment and then calls the [run]
/// function. The library remains unaware of the environment, so that we can more easily test it.
#[tokio::main]
pub async fn main() -> anyhow::Result<()> {
    let args = Args::parse();
    // Default the context path to the current directory.
    let context_path = match args.context_path {
        Some(path) => path,
        None => env::current_dir()?,
    };
    run(args.subcommand, &context_path).await?;
    Ok(())
}
