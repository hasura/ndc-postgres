use schemars::{ gen::SchemaSettings, schema::RootSchema };
use ndc_postgres::configuration::RawConfiguration;

fn main() {
    let schema: RootSchema =
            SchemaSettings::openapi3()
                .into_generator()
                .into_root_schema_for::<RawConfiguration>();

    println!("{}", serde_json::to_string_pretty(&schema).unwrap());
}
