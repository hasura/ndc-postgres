//! Request functions used across test cases.

pub use axum::http::StatusCode;
pub use axum_test_helper::TestClient;
pub use ndc_sdk::models;
use tokio::fs;

/// Create a test client from a router.
pub fn create_client(router: axum::Router) -> TestClient {
    TestClient::new(router)
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn run_query(router: axum::Router, testname: &str) -> ndc_sdk::models::QueryResponse {
    let client = create_client(router);
    run_against_server(&client, "query", testname, StatusCode::OK).await
}

/// Run a query that is expected to respond with the given status code,
/// get the result, and compare against the snapshot.
pub async fn run_query_expecting<T: for<'de> serde::Deserialize<'de>>(
    client: &TestClient,
    testname: &str,
    status_code: StatusCode,
) -> T {
    run_against_server(client, "query", testname, status_code).await
}

#[derive(Clone, Debug, PartialEq, serde::Deserialize)]
pub struct ExactExplainResponse {
    pub details: ExplainDetails,
}

#[derive(Clone, Debug, PartialEq, serde::Deserialize)]
pub struct ExplainDetails {
    #[serde(rename = "SQL Query")]
    pub query: String,
    #[serde(rename = "Execution Plan")]
    pub plan: String,
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn run_query_explain(router: axum::Router, testname: &str) -> ExactExplainResponse {
    let client = create_client(router);
    run_against_server(&client, "query/explain", testname, StatusCode::OK).await
}

/// Run a mutation against the server, get the result, and compare against the snapshot.
pub async fn run_mutation_explain(router: axum::Router, testname: &str) -> models::ExplainResponse {
    let client = create_client(router);
    run_against_server(
        &client,
        "mutation/explain",
        &format!("mutations/{testname}"),
        StatusCode::OK,
    )
    .await
}

/// Run a mutation against the server, get the result, and compare against the snapshot.
pub async fn run_mutation(
    router: axum::Router,
    testname: &str,
) -> ndc_sdk::models::MutationResponse {
    let client = create_client(router);
    run_against_server(
        &client,
        "mutation",
        &format!("mutations/{testname}"),
        StatusCode::OK,
    )
    .await
}

/// Run a mutation that is expected to fail against the server,
/// get the result, and compare against the snapshot.
pub async fn run_mutation_fail(
    router: axum::Router,
    testname: &str,
    status_code: StatusCode,
) -> ndc_sdk::models::ErrorResponse {
    let client = create_client(router);
    run_against_server(
        &client,
        "mutation",
        &format!("mutations/{testname}"),
        status_code,
    )
    .await
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn get_schema(router: axum::Router) -> ndc_sdk::models::SchemaResponse {
    let client = create_client(router);
    make_request(&client, |client| client.get("/schema"), StatusCode::OK).await
}

/// Run an action against the server, and get the response.
async fn run_against_server<Response: for<'a> serde::Deserialize<'a>>(
    client: &TestClient,
    action: &str,
    testname: &str,
    expected_status: StatusCode,
) -> Response {
    let path = format!("/{action}");
    let goldenfile_path = format!("../../../crates/tests/tests-common/goldenfiles/{testname}.json");
    let body = match fs::read_to_string(&goldenfile_path).await {
        Ok(body) => body,
        Err(err) => {
            panic!("Error reading {} : {}", &goldenfile_path, err);
        }
    };
    make_request(
        client,
        |client| {
            client
                .post(&path)
                .header("Content-Type", "application/json")
                .body(body)
        },
        expected_status,
    )
    .await
}

/// Make a single request against a new server, and get the response.
async fn make_request<Response: for<'a> serde::Deserialize<'a>>(
    client: &TestClient,
    request: impl FnOnce(&TestClient) -> axum_test_helper::RequestBuilder,
    expected_status: StatusCode,
) -> Response {
    // make the request
    let response = request(client).send().await;
    let status = response.status();
    let body = response.bytes().await;

    // ensure we get a successful response
    assert_eq!(
        status,
        expected_status,
        "Expected status code {} but got status {}.\nBody:\n{}",
        expected_status,
        status,
        std::str::from_utf8(&body).unwrap()
    );

    // deserialize the response
    serde_json::from_slice(&body).unwrap_or_else(|err| {
        panic!(
            "Invalid JSON in response body.\nError: {}\nBody:\n{:?}\n",
            err,
            std::str::from_utf8(&body).unwrap()
        )
    })
}

/// Generate/Update static/query.schema.json
/// this test should be ignored unless explicitly invoked
#[ignore]
#[test]
fn generate_query_request_schema() {
    let query_schema =
        serde_json::to_string_pretty(&schemars::schema_for!(ndc_sdk::models::QueryRequest))
            .expect("Should serialize query schema to json");
    std::fs::write("../../../static/query.schema.json", query_schema)
        .expect("Should be able to write out schema file");
}
/// Generate/Update static/mutation.schema.json
/// this test should be ignored unless explicitly invoked
#[ignore]
#[test]
fn generate_mutation_request_schema() {
    let mutation_schema =
        serde_json::to_string_pretty(&schemars::schema_for!(ndc_sdk::models::MutationRequest))
            .expect("Should serialize mutation schema to json");
    std::fs::write("../../../static/mutation.schema.json", mutation_schema)
        .expect("Should be able to write out schema file");
}

/// Generate/Update static/configuration.schema.json
/// this test should be ignored unless explicitly invoked
#[ignore]
#[test]
fn generate_configuration_schema() {
    let configuration_schema = serde_json::to_string_pretty(&schemars::schema_for!(
        ndc_postgres_configuration::version5::ParsedConfiguration
    ))
    .expect("Should serialize configuration schema to json");
    std::fs::write(
        "../../../static/configuration.schema.json",
        configuration_schema,
    )
    .expect("Should be able to write out schema file");
}
