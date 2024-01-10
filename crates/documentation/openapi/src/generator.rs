use ndc_postgres::configuration::RawConfiguration;
use schemars::{gen::SchemaSettings, schema::RootSchema};

pub fn generate_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<RawConfiguration>()
}
