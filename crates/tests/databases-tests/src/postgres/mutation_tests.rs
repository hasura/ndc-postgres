#[cfg(test)]
/// create a fresh db then run a query against it
mod basic {
    use super::super::common;
    use tests_common::ndc_metadata::FreshDeployment;
    use tests_common::request::{run_mutation, run_query};

    #[tokio::test(flavor = "multi_thread")]
    async fn delete_playlist_track() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router(
                &ndc_metadata.ndc_metadata_path,
                &ndc_metadata.connection_uri,
            )
            .await,
            "delete_playlist_track",
        )
        .await;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn insert_artist_album() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "insert_artist_album").await;

        // expect the artist to be returned, because we inserted it successfully.
        let selection_result = run_query(router, "mutations/select_specific_artist").await;

        let result = (mutation_result, selection_result);

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn delete_invoice_line() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router(
                &ndc_metadata.ndc_metadata_path,
                &ndc_metadata.connection_uri,
            )
            .await,
            "delete_invoice_line",
        )
        .await;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_delete_and_update_playlist_track() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router(
                &ndc_metadata.ndc_metadata_path,
                &ndc_metadata.connection_uri,
            )
            .await,
            "v2_delete_and_update_playlist_track",
        )
        .await;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_custom_dog() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_insert_custom_dog").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_defaults() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_insert_defaults").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_enum() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_insert_enum").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_update_custom_dog() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_insert_update_custom_dog").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_update_defaults() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_update_defaults").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_update_no_checks() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation(router.clone(), "v2_update_no_checks").await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn native_opration_insert_genre() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let result = run_mutation(
            tests_common::router::create_router(
                &ndc_metadata.ndc_metadata_path,
                &ndc_metadata.connection_uri,
            )
            .await,
            "native_operation_insert_genre",
        )
        .await;

        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod negative {
    use super::super::common;
    use tests_common::ndc_metadata::FreshDeployment;
    use tests_common::request::{run_mutation_fail, run_query, StatusCode};

    #[tokio::test(flavor = "multi_thread")]
    /// Check that the second statement fails on duplicate key constraint,
    /// and that it rolls back the first statement.
    async fn insert_artist_album_bad() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
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

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    /// Check that insert fails due to missing column.
    async fn v2_insert_custom_dog_missing_column() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "v2_insert_custom_dog_missing_column",
            StatusCode::BAD_REQUEST,
        )
        .await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    /// Check that insert fails due to predicate returning false.
    async fn v2_insert_custom_dog_predicate_fail() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "v2_insert_custom_dog_predicate_fail",
            StatusCode::FORBIDDEN,
        )
        .await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_enum_invalid_label() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "v2_insert_enum_invalid_label",
            StatusCode::UNPROCESSABLE_ENTITY,
        )
        .await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }

    #[tokio::test(flavor = "multi_thread")]
    async fn v2_insert_artist_missing_column() {
        let ndc_metadata =
            FreshDeployment::create(common::CONNECTION_URI, common::CHINOOK_NDC_METADATA_PATH)
                .await
                .unwrap();

        let router = tests_common::router::create_router(
            &ndc_metadata.ndc_metadata_path,
            &ndc_metadata.connection_uri,
        )
        .await;

        let mutation_result = run_mutation_fail(
            router.clone(),
            "v2_insert_Artist_missing_column",
            StatusCode::BAD_REQUEST,
        )
        .await;

        let result = mutation_result;

        insta::assert_json_snapshot!(result);
    }
}
