use std::fs;
use std::path::Path;

use clap::{Parser, Subcommand};

use ndc_postgres_configuration as configuration;

#[derive(Debug, Parser)]
pub struct Args {
    #[command(subcommand)]
    pub subcommand: Command,
}

#[derive(Debug, Clone, Subcommand)]
pub enum Command {
    /// Initialize a configuration in the current (empty) directory.
    Initialize,
}

#[derive(Debug, PartialEq, thiserror::Error)]
pub enum Error {
    #[error("directory is not empty")]
    DirectoryIsNotEmpty,
}

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
