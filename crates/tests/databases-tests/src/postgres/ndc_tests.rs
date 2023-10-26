//! Runs the tests provided by the ndc-spec.

#[cfg(test)]
mod ndc_tests {
    use super::super::common;
    use tests_common::common_tests;

    #[tokio::test]
    async fn test_connector() -> Result<(), Vec<ndc_test::FailedTest>> {
        let router = common::create_router().await;
        common_tests::ndc_tests::test_connector(router).await
    }
}
