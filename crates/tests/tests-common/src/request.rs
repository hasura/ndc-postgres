//! Request functions used across test cases.

use std::fs;

use axum::http::StatusCode;
use serde_derive::Deserialize;

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn run_query(router: axum::Router, testname: &str) -> ndc_sdk::models::QueryResponse {
    run_against_server(router, "query", testname, StatusCode::OK).await
}

#[derive(Clone, Debug, PartialEq, Deserialize)]
pub struct ExactExplainResponse {
    pub details: ExplainDetails,
}

#[derive(Clone, Debug, PartialEq, Deserialize)]
pub struct ExplainDetails {
    #[serde(rename = "SQL Query")]
    pub query: String,
    #[serde(rename = "Execution Plan")]
    pub plan: String,
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn run_explain(router: axum::Router, testname: &str) -> ExactExplainResponse {
    run_against_server(router, "explain", testname, StatusCode::OK).await
}

/// Run a mutation against the server, get the result, and compare against the snapshot.
pub async fn run_mutation(
    router: axum::Router,
    testname: &str,
) -> ndc_sdk::models::MutationResponse {
    run_against_server(
        router,
        "mutation",
        &format!("mutations/{}", testname),
        StatusCode::OK,
    )
    .await
}

/// Run a mutation that is expected to fail with 403 against the server,
/// get the result, and compare against the snapshot.
pub async fn run_mutation403(
    router: axum::Router,
    testname: &str,
) -> ndc_sdk::models::ErrorResponse {
    run_against_server(
        router,
        "mutation",
        &format!("mutations/{}", testname),
        StatusCode::FORBIDDEN,
    )
    .await
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn get_schema(router: axum::Router) -> ndc_sdk::models::SchemaResponse {
    make_request(router, |client| client.get("/schema"), StatusCode::OK).await
}

/// Run an action against the server, and get the response.
async fn run_against_server<Response: for<'a> serde::Deserialize<'a>>(
    router: axum::Router,
    action: &str,
    testname: &str,
    expected_status: StatusCode,
) -> Response {
    let path = format!("/{}", action);
    let body = match fs::read_to_string(format!(
        "../../../crates/tests/tests-common/goldenfiles/{}.json",
        testname
    )) {
        Ok(body) => body,
        Err(err) => {
            println!("Error: {}", err);
            panic!("error look up");
        }
    };
    make_request(
        router,
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
    router: axum::Router,
    request: impl FnOnce(axum_test_helper::TestClient) -> axum_test_helper::RequestBuilder,
    expected_status: StatusCode,
) -> Response {
    let client = axum_test_helper::TestClient::new(router);

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
