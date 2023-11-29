use std::io;

use ndc_postgres::configuration::RawConfiguration;
use schemars::{gen::SchemaSettings, schema::RootSchema};

fn main() -> io::Result<()> {
    let schema = generate_schema();
    serde_json::to_writer_pretty(io::stdout(), &schema)?;
    Ok(())
}

fn generate_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<RawConfiguration>()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn main() -> io::Result<()> {
        let generated_schema = generate_schema();
        let generated_schema_json = serde_json::to_string_pretty(&generated_schema)?;

        insta::assert_snapshot!(generated_schema_json);
        Ok(())
    }
}
