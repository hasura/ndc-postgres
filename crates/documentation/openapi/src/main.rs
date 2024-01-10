use openapi_generator::generator;

use std::io;

fn main() -> io::Result<()> {
    let schema = generator::generate_schema();
    serde_json::to_writer_pretty(io::stdout(), &schema)?;
    Ok(())
}
