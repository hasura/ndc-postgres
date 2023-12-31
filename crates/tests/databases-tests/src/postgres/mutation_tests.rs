#[cfg(test)]
/// create a fresh db then run a query against it
mod basic {
    use super::super::common;
    use tests_common::deployment::{clean_up_deployment, create_fresh_deployment};
    use tests_common::request::{run_mutation, run_query};

    #[tokio::test]
    async fn delete_playlist() {
        let deployment = create_fresh_deployment(
            common::CONNECTION_STRING,
            common::CHINOOK_DEPLOYMENT_PATH_V2,
        )
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
        let deployment = create_fresh_deployment(
            common::CONNECTION_STRING,
            common::CHINOOK_DEPLOYMENT_PATH_V2,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_deployment(&deployment.deployment_path).await;

        let mutation_result = run_mutation(router.clone(), "insert_artist_album").await;

        // expect the artist to be returned, because we inserted it successfully.
        let selection_result = run_query(router, "mutations/select_specific_artist").await;

        let result = (mutation_result, selection_result);

        clean_up_deployment(deployment).await.unwrap();
        insta::assert_json_snapshot!(result)
    }

    #[tokio::test]
    async fn delete_invoice_line() {
        let deployment = create_fresh_deployment(
            common::CONNECTION_STRING,
            common::CHINOOK_DEPLOYMENT_PATH_V2,
        )
        .await
        .unwrap();

        let result = run_mutation(
            tests_common::router::create_router_from_deployment(&deployment.deployment_path).await,
            "delete_invoice_line",
        )
        .await;

        clean_up_deployment(deployment).await.unwrap();
        insta::assert_json_snapshot!(result)
    }
}

#[cfg(test)]
mod negative {
    use super::super::common;
    use tests_common::deployment::{clean_up_deployment, create_fresh_deployment};
    use tests_common::request::{run_mutation403, run_query};

    #[tokio::test]
    /// Check that the second statement fails on duplicate key constraint,
    /// and that it rolls back the first statement.
    async fn insert_artist_album_bad() {
        let deployment = create_fresh_deployment(
            common::CONNECTION_STRING,
            common::CHINOOK_DEPLOYMENT_PATH_V2,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_deployment(&deployment.deployment_path).await;

        let mutation_result = run_mutation403(router.clone(), "insert_artist_album_bad").await;

        // expect no rows returned because first operation was rolled back.
        let selection_result = run_query(router, "mutations/select_specific_artist").await;

        let result = (mutation_result, selection_result);

        clean_up_deployment(deployment).await.unwrap();
        insta::assert_json_snapshot!(result);
    }
}
