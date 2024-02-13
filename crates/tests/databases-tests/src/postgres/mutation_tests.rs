#[cfg(test)]
/// create a fresh db then run a query against it
mod basic {
    use super::super::common;
    use tests_common::ndc_metadata::{clean_up_ndc_metadata, create_fresh_ndc_metadata};
    use tests_common::request::{run_mutation, run_query};

    #[tokio::test]
    async fn delete_playlist() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let result = run_mutation(
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await,
            "delete_playlist",
        )
        .await;

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result)
    }

    #[tokio::test]
    async fn insert_artist_album() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await;

        let mutation_result = run_mutation(router.clone(), "insert_artist_album").await;

        // expect the artist to be returned, because we inserted it successfully.
        let selection_result = run_query(router, "mutations/select_specific_artist").await;

        let result = (mutation_result, selection_result);

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result)
    }

    #[tokio::test]
    async fn delete_invoice_line() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let result = run_mutation(
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await,
            "delete_invoice_line",
        )
        .await;

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result)
    }

    #[tokio::test]
    async fn v1_insert_custom_dog() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await;

        let mutation_result = run_mutation(router.clone(), "v1_insert_custom_dog").await;

        let result = mutation_result;

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result)
    }
}

#[cfg(test)]
mod negative {
    use super::super::common;
    use tests_common::ndc_metadata::{clean_up_ndc_metadata, create_fresh_ndc_metadata};
    use tests_common::request::{run_mutation_fail, run_query, StatusCode};

    #[tokio::test]
    /// Check that the second statement fails on duplicate key constraint,
    /// and that it rolls back the first statement.
    async fn insert_artist_album_bad() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "insert_artist_album_bad",
            StatusCode::FORBIDDEN,
        )
        .await;

        // expect no rows returned because first operation was rolled back.
        let selection_result = run_query(router, "mutations/select_specific_artist").await;

        let result = (mutation_result, selection_result);

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    /// Check that insert fails due to missing column.
    async fn v1_insert_custom_dog_missing_column() {
        let ndc_metadata = create_fresh_ndc_metadata(
            common::CONNECTION_STRING,
            common::CHINOOK_NDC_METADATA_PATH_V3,
        )
        .await
        .unwrap();

        let router =
            tests_common::router::create_router_from_ndc_metadata(&ndc_metadata.ndc_metadata_path)
                .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "v1_insert_custom_dog_missing_column",
            StatusCode::BAD_REQUEST,
        )
        .await;

        let result = mutation_result;

        clean_up_ndc_metadata(ndc_metadata).await.unwrap();
        insta::assert_json_snapshot!(result);
    }
}
