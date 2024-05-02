use schemars::{gen::SchemaSettings, schema::RootSchema};

pub fn generate_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        // TODO: Make this part of the public interface of the configuration crate?
        .into_root_schema_for::<ndc_postgres_configuration::version4::ParsedConfiguration>()
}
