//! A minimal in-process HTTP client for testing an `axum::Router`.
//!
//! Requests are dispatched directly to the router via `tower::ServiceExt::oneshot`,
//! so no network listener is needed.

use axum::body::{Body, Bytes};
use axum::http::{self, Method, StatusCode};
use tower::ServiceExt;

/// A client that sends requests to an in-process router.
#[derive(Clone)]
pub struct TestClient {
    router: axum::Router,
}

impl TestClient {
    pub fn new(router: axum::Router) -> Self {
        Self { router }
    }

    pub fn get(&self, path: &str) -> RequestBuilder {
        self.request(Method::GET, path)
    }

    pub fn post(&self, path: &str) -> RequestBuilder {
        self.request(Method::POST, path)
    }

    fn request(&self, method: Method, path: &str) -> RequestBuilder {
        RequestBuilder {
            router: self.router.clone(),
            builder: http::Request::builder().method(method).uri(path),
            body: Body::empty(),
        }
    }
}

/// A request under construction.
pub struct RequestBuilder {
    router: axum::Router,
    builder: http::request::Builder,
    body: Body,
}

impl RequestBuilder {
    #[must_use]
    pub fn header(mut self, key: &str, value: &str) -> Self {
        self.builder = self.builder.header(key, value);
        self
    }

    #[must_use]
    pub fn body(mut self, body: impl Into<Body>) -> Self {
        self.body = body.into();
        self
    }

    pub async fn send(self) -> TestResponse {
        let request = self.builder.body(self.body).expect("invalid test request");
        let response = self
            .router
            .oneshot(request)
            .await
            .expect("router service is infallible");
        let status = response.status();
        let body = axum::body::to_bytes(response.into_body(), usize::MAX)
            .await
            .expect("failed to read response body");
        TestResponse { status, body }
    }
}

/// A fully-buffered response.
pub struct TestResponse {
    status: StatusCode,
    body: Bytes,
}

impl TestResponse {
    pub fn status(&self) -> StatusCode {
        self.status
    }

    #[allow(clippy::unused_async)]
    pub async fn bytes(self) -> Bytes {
        self.body
    }
}
