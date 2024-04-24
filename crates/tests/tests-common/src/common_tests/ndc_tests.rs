use std::net;

pub type Result = std::result::Result<(), Failures>;

pub struct Failures(Vec<ndc_test::reporter::FailedTest>);

// The `Debug` implementation for `Failures` is a pretty-printed debug output of each failure,
// separated by a newline.
//
// It's not perfect, but it's much easier to read than the standard debug output.
impl std::fmt::Debug for Failures {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        for failure in &self.0 {
            writeln!(f, "{failure:#?}")?;
        }
        Ok(())
    }
}

// The `Display` implementation just delegates to the `Debug` implementation.
impl std::fmt::Display for Failures {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{self:?}")
    }
}

impl std::error::Error for Failures {}

pub async fn test_connector(router: axum::Router) -> Result {
    let server = hyper::Server::bind(&net::SocketAddr::new(
        net::IpAddr::V4(net::Ipv4Addr::LOCALHOST),
        0,
    ))
    .serve(router.into_make_service());

    let base_path = reqwest::Url::parse(&format!("http://{}", server.local_addr())).unwrap();
    eprintln!("Starting the server on {base_path}");

    tokio::task::spawn(async {
        if let Err(err) = server.await {
            eprintln!("Server error: {err}");
        }
    });

    let configuration = ndc_test::client::Configuration {
        base_path,
        client: reqwest::Client::new(),
    };

    let mut test_results = ndc_test::reporter::TestResults::default();

    ndc_test::test_connector(
        &ndc_test::configuration::TestConfiguration {
            seed: None,
            snapshots_dir: None,
            gen_config: ndc_test::configuration::TestGenerationConfiguration::default(),
        },
        &configuration,
        &mut test_results,
    )
    .await;
    if test_results.failures.is_empty() {
        Ok(())
    } else {
        Err(Failures(test_results.failures))
    }
}
