use std::net;

pub async fn test_connector(router: axum::Router) -> Result<(), Vec<ndc_test::FailedTest>> {
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
        headers: reqwest::header::HeaderMap::new(),
    };

    let test_results = ndc_test::test_connector(
        &ndc_test::TestConfiguration {
            seed: None,
            snapshots_dir: None,
        },
        &configuration,
    )
    .await;
    if test_results.failures.is_empty() {
        Ok(())
    } else {
        Err(test_results.failures)
    }
}
