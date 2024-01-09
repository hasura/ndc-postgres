use ndc_postgres::configuration::RawConfiguration;
use schemars::{gen::SchemaSettings, schema::RootSchema};

pub fn generate_schema() -> RootSchema {
    SchemaSettings::openapi3()
        .into_generator()
        .into_root_schema_for::<RawConfiguration>()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn up_to_date_generated_schema() {
        let generated_schema = generate_schema();
        let generated_schema_json = serde_json::to_value(&generated_schema).unwrap();

        insta::assert_json_snapshot!(generated_schema_json);
    }
}
