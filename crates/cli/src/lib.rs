//! The interpretation of the commands that the CLI cah handle.
//!
//! The CLI can do a few things. This provides a central point where those things are routed and
//! then done, making it easier to test this crate deterministically.

use std::fs;
use std::path::Path;

use clap::{Parser, Subcommand};

use ndc_postgres_configuration as configuration;

/// The command-line arguments.
///
/// By rights this should be in main.rs, but `clap`'s derivations would leak into this file anyway,
/// so it seems reasonable to leave this here too.
#[derive(Debug, Parser)]
pub struct Args {
    #[command(subcommand)]
    pub subcommand: Command,
}

/// The command invoked by the user.
#[derive(Debug, Clone, Subcommand)]
pub enum Command {
    /// Initialize a configuration in the current (empty) directory.
    Initialize,
}

/// The set of errors that can go wrong _in addition to_ generic I/O or parsing errors.
#[derive(Debug, PartialEq, thiserror::Error)]
pub enum Error {
    #[error("directory is not empty")]
    DirectoryIsNotEmpty,
}

/// Run a command in a given directory.
pub fn run(command: Command, configuration_dir: &Path) -> anyhow::Result<()> {
    match command {
        Command::Initialize => initialize(configuration_dir)?,
    };
    Ok(())
}

/// Initialize an empty directory with the connector configuration.
fn initialize(configuration_dir: &Path) -> anyhow::Result<()> {
    let configuration_file = configuration_dir.join(configuration::CONFIGURATION_FILENAME);
    fs::create_dir_all(configuration_dir)?;

    // refuse to initialize the directory unless it is empty
    let mut items_in_dir = fs::read_dir(configuration_dir)?;
    if items_in_dir.next().is_some() {
        Err(Error::DirectoryIsNotEmpty)?;
    }

    let configuration_writer = fs::File::create(configuration_file)?;
    serde_json::to_writer_pretty(
        configuration_writer,
        &configuration::RawConfiguration::empty(),
    )?;
    Ok(())
}
