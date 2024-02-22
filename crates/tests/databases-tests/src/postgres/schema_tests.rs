#[cfg(test)]
mod schema_test {
    use super::super::common;
    #[tokio::test(flavor = "multi_thread")]
    async fn get_schema() {
        let result = tests_common::request::get_schema(common::create_router().await).await;
        insta::assert_json_snapshot!(result);
    }
}
