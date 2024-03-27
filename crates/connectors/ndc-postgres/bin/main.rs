use std::process::ExitCode;

use ndc_postgres::connector::PostgresSetup;
use ndc_postgres_configuration::environment::ProcessEnvironment;
use ndc_sdk::default_main::default_main_with;

#[tokio::main]
pub async fn main() -> ExitCode {
    let result = default_main_with(PostgresSetup::new(ProcessEnvironment)).await;
    match result {
        Ok(()) => ExitCode::SUCCESS,
        Err(error) => {
            eprintln!("{error}");
            ExitCode::FAILURE
        }
    }
}
