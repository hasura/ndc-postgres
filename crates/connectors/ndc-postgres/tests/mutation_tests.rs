pub mod common;
use tests_common::deployment::{clean_up_deployment, create_fresh_deployment};
use tests_common::request::run_query;

pub const POSTGRESQL_CONNECTION_STRING: &str = "postgresql://postgres:password@localhost:64002";
pub const CHINOOK_DEPLOYMENT_PATH: &str = "static/chinook-deployment.json";

/// create a fresh db then run a query against it
mod basic {
    use super::{clean_up_deployment, create_fresh_deployment, run_query};

    #[tokio::test]
    async fn select_by_pk() {
        let deployment = create_fresh_deployment(
            super::POSTGRESQL_CONNECTION_STRING,
            super::CHINOOK_DEPLOYMENT_PATH,
        )
        .await;

        let result = run_query(
            super::common::create_router_from_deployment(&deployment.deployment_path).await,
            "select_by_pk",
        )
        .await;

        clean_up_deployment(deployment).await;
        insta::assert_json_snapshot!(result)
    }
}
