use ndc_postgres::configuration::RawConfiguration;
use schemars::{gen::SchemaSettings, schema::RootSchema};

fn main() {
    let schema: RootSchema = SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<RawConfiguration>();

    println!("{}", serde_json::to_string_pretty(&schema).unwrap());
}

#[cfg(test)]
mod tests {
    use std::process::Command;

    #[test]
    fn main() {
        let command_output = Command::new("cargo")
            .arg("run")
            .arg("--bin")
            .arg("openapi-generator")
            .output()
            .expect("Failed to run schema generation")
            .stdout;

        let generated_schema: String =
            String::from_utf8(command_output).expect("Failed to read snapshot");

        insta::assert_snapshot!(generated_schema);
    }
}
