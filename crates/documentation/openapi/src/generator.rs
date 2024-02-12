use schemars::{gen::SchemaSettings, schema::RootSchema};

use ndc_postgres_configuration::RawConfiguration;

pub fn generate_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<RawConfiguration>()
}
