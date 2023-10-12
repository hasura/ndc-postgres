use ndc_postgres::capabilities;

#[tokio::test]
async fn get_capabilities() {
    insta::assert_json_snapshot!(capabilities::get_capabilities());
}
