use std::env;

use clap::Parser;

use ndc_postgres_cli::*;

pub fn main() -> anyhow::Result<()> {
    let args = Args::parse();
    let current_directory = env::current_dir()?;
    run(args.subcommand, &current_directory)?;
    Ok(())
}
