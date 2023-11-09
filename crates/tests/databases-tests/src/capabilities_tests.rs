#[tokio::test]
async fn get_capabilities() {
    insta::assert_json_snapshot!(ndc_postgres::capabilities::get_capabilities());
}
