#[cfg(test)]
/// create a fresh db then run a query against it
mod basic {
    use super::super::common;
    use tests_common::deployment::{clean_up_deployment, create_fresh_deployment};
    use tests_common::request::run_mutation;

    #[tokio::test]
    async fn delete_playlist() {
        let deployment =
            create_fresh_deployment(common::CONNECTION_STRING, common::CHINOOK_DEPLOYMENT_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router_from_deployment(&deployment.deployment_path).await,
            "delete_playlist",
        )
        .await;

        clean_up_deployment(deployment).await.unwrap();
        insta::assert_json_snapshot!(result)
    }

    #[tokio::test]
    async fn insert_artist_album() {
        let deployment =
            create_fresh_deployment(common::CONNECTION_STRING, common::CHINOOK_DEPLOYMENT_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router_from_deployment(&deployment.deployment_path).await,
            "insert_artist_album",
        )
        .await;

        clean_up_deployment(deployment).await.unwrap();
        insta::assert_json_snapshot!(result)
    }
}
