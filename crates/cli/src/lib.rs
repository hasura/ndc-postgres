use std::fs;
use std::io;
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
    /// Initialize a configuration in the current directory.
    Initialize,
}

pub fn run(command: Command, configuration_dir: &Path) -> anyhow::Result<()> {
    match command {
        Command::Initialize => initialize(configuration_dir)?,
    };
    Ok(())
}

/// Initialize an empty directory with the connector configuration.
fn initialize(configuration_dir: &Path) -> io::Result<()> {
    let configuration_file = configuration_dir.join(configuration::CONFIGURATION_FILENAME);
    fs::create_dir_all(configuration_dir)?;
    let configuration_writer = fs::File::create(configuration_file)?;
    serde_json::to_writer_pretty(
        configuration_writer,
        &configuration::RawConfiguration::empty(),
    )?;
    Ok(())
}
