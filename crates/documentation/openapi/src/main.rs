use ndc_postgres_configuration::generate_latest_schema;

use std::io;

fn main() -> io::Result<()> {
    let schema = generate_latest_schema();
    serde_json::to_writer_pretty(io::stdout(), &schema)?;
    Ok(())
}
