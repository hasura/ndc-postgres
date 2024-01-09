#[cfg(test)]
mod openapi {
    #[tokio::test]
    async fn up_to_date_generated_schema() {
        let generated_schema = openapi_generator::generator::generate_schema();
        let generated_schema_json = serde_json::to_value(&generated_schema).unwrap();

        insta::assert_json_snapshot!(generated_schema_json);
    }
}
