//! The CLI application.
//!
//! This is intended to be automatically downloaded and invoked via the Hasura CLI, as a plugin.
//! It is unlikely that end-users will use it directly.

use std::env;

use clap::Parser;

use ndc_postgres_cli::*;

/// The application entrypoint. It pulls information from the environment and then calls the [run]
/// function, so all process-level non-determinism is held here.
pub fn main() -> anyhow::Result<()> {
    let args = Args::parse();
    // The library is not aware of the current directory so that we can more easily test it.
    let current_directory = env::current_dir()?;
    run(args.subcommand, &current_directory)?;
    Ok(())
}
