//! Runs the tests provided by the ndc-spec.

pub mod common;

use std::net;

#[tokio::test]
async fn test_connector() -> Result<(), Vec<ndc_test::FailedTest>> {
    let router = common::create_router().await;
    let server = hyper::Server::bind(&net::SocketAddr::new(
        net::IpAddr::V4(net::Ipv4Addr::LOCALHOST),
        0,
    ))
    .serve(router.into_make_service());

    let base_path = format!("http://{}", server.local_addr());
    eprintln!("Starting the server on {}", base_path);

    tokio::task::spawn(async {
        if let Err(err) = server.await {
            eprintln!("Server error: {}", err);
        }
    });

    let configuration = ndc_client::apis::configuration::Configuration {
        base_path,
        user_agent: None,
        client: reqwest::Client::new(),
        basic_auth: None,
        oauth_access_token: None,
        bearer_access_token: None,
        api_key: None,
    };

    let test_results =
        ndc_test::test_connector(&ndc_test::TestConfiguration { seed: None }, &configuration).await;
    if test_results.failures.is_empty() {
        Ok(())
    } else {
        Err(test_results.failures)
    }
}
