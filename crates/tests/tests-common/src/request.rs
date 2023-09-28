//! Request functions used across test cases.

use std::fs;

use axum::http::StatusCode;
use serde_derive::Deserialize;

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn run_query(router: axum::Router, testname: &str) -> serde_json::Value {
    run_against_server(router, "query", testname).await
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
    run_against_server(router, "explain", testname).await
}

/// Run a query against the server, get the result, and compare against the snapshot.
pub async fn get_schema(router: axum::Router) -> ndc_sdk::models::SchemaResponse {
    make_request(router, |client| client.get("/schema")).await
}

/// Run an action against the server, and get the response.
async fn run_against_server<Response: for<'a> serde::Deserialize<'a>>(
    router: axum::Router,
    action: &str,
    testname: &str,
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
    make_request(router, |client| {
        client
            .post(&path)
            .header("Content-Type", "application/json")
            .body(body)
    })
    .await
}

/// Make a single request against a new server, and get the response.
async fn make_request<Response: for<'a> serde::Deserialize<'a>>(
    router: axum::Router,
    request: impl FnOnce(axum_test_helper::TestClient) -> axum_test_helper::RequestBuilder,
) -> Response {
    let client = axum_test_helper::TestClient::new(router);

    // make the request
    let response = request(client).send().await;

    // ensure we get a successful response
    assert_eq!(
        response.status(),
        StatusCode::OK,
        "Expected a successful response but got status {}.\nBody:\n{}",
        response.status(),
        response.text().await
    );

    // deserialize the response
    response.json().await
}
