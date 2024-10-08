#[cfg(test)]
mod basic {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn no_fields() {
        let result = run_query(create_router().await, "no_fields").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_by_pk() {
        let result = run_query(create_router().await, "select_by_pk").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_enum() {
        let result = run_query(create_router().await, "select_enum").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_5() {
        let result = run_query(create_router().await, "select_5").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_column() {
        let result = run_query(create_router().await, "select_array_column").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_column_nested_types() {
        let result = run_query(create_router().await, "select_array_column_nested_types").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_column_reverse() {
        let result = run_query(create_router().await, "select_array_column_reverse").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_variable() {
        let result = run_query(create_router().await, "select_array_variable").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_variable_nested_types() {
        let result = run_query(create_router().await, "select_array_variable_nested_types").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_int_and_string() {
        let result = run_query(create_router().await, "select_int_and_string").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_composite_column_simple() {
        let result = run_query(create_router().await, "select_composite_column_simple").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_discoverable_composite_column() {
        let result = run_query(
            create_router().await,
            "select_discoverable_composite_column",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_composite_column_complex() {
        let result = run_query(create_router().await, "select_composite_column_complex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_composite_variable_simple() {
        let result = run_query(create_router().await, "select_composite_variable_simple").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_composite_variable_complex() {
        let result = run_query(create_router().await, "select_composite_variable_complex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_nested_column_simple() {
        let result = run_query(create_router().await, "select_nested_column_simple").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_nested_column_complex() {
        let result = run_query(create_router().await, "select_nested_column_complex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_array_composite_field() {
        let result = run_query(create_router().await, "select_array_composite_field").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod predicates {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_where_name_eq() {
        let result = run_query(create_router().await, "select_where_name_eq").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_neq() {
        let result = run_query(create_router().await, "select_where_name_neq").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_like() {
        let result = run_query(create_router().await, "select_where_name_like").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_not_like() {
        let result = run_query(create_router().await, "select_where_name_not_like").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_less_than() {
        let result = run_query(create_router().await, "select_where_album_id_less_than").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_less_than_or_equal_to() {
        let result = run_query(
            create_router().await,
            "select_where_album_id_less_than_or_equal_to",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_greater_than() {
        let result = run_query(create_router().await, "select_where_album_id_greater_than").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_greater_than_or_equal_to() {
        let result = run_query(
            create_router().await,
            "select_where_album_id_greater_than_or_equal_to",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_is_not_null() {
        let result = run_query(create_router().await, "select_where_album_id_is_not_null").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_album_id_equals_self() {
        let result = run_query(create_router().await, "select_where_album_id_equals_self").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_in_column() {
        let result = run_query(create_router().await, "select_where_in_column").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_in_variable() {
        let result = run_query(create_router().await, "select_where_in_variable").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_in() {
        let result = run_query(create_router().await, "select_where_name_in").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_in_empty() {
        let result = run_query(create_router().await, "select_where_name_in_empty").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_not_in() {
        let result = run_query(create_router().await, "select_where_name_not_in").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_ilike() {
        let result = run_query(create_router().await, "select_where_name_ilike").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_nilike() {
        let result = run_query(create_router().await, "select_where_name_nilike").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_regex() {
        let result = run_query(create_router().await, "select_where_name_regex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_nregex() {
        let result = run_query(create_router().await, "select_where_name_nregex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_iregex() {
        let result = run_query(create_router().await, "select_where_name_iregex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_niregex() {
        let result = run_query(create_router().await, "select_where_name_niregex").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn where_cidr_network_supeq() {
        let result = run_query(create_router().await, "where_cidr_network_supeq").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_or() {
        let result = run_query(create_router().await, "select_where_or").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_and() {
        let result = run_query(create_router().await, "select_where_and").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_variable() {
        let result = run_query(create_router().await, "select_where_variable").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_variable_int() {
        let result = run_query(create_router().await, "select_where_variable_int").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_unrelated_exists() {
        let result = run_query(create_router().await, "select_where_unrelated_exists").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_related_exists() {
        let result = run_query(create_router().await, "select_where_related_exists").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn filter_by_nested_field_collection() {
        let result = run_query(create_router().await, "filter_by_nested_field_collection").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn filter_institution_by_nested_field_collection() {
        let result = run_query(
            create_router().await,
            "filter_institution_by_nested_field_collection",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_array_relationship() {
        let result = run_query(create_router().await, "select_where_array_relationship").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn duplicate_filter_results() {
        let result = run_query(create_router().await, "duplicate_filter_results").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn duplicate_filter_results_nested() {
        let result = run_query(create_router().await, "duplicate_filter_results_nested").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn filter_by_nested_field() {
        let result = run_query(create_router().await, "filter_by_nested_field").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod sorting {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_order_by_name() {
        let result = run_query(create_router().await, "select_order_by_name").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_artist_name() {
        let result = run_query(create_router().await, "select_order_by_artist_name").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_album_artist_name() {
        let result = run_query(create_router().await, "select_order_by_album_artist_name").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_track_order_by_artist_id_and_album_title() {
        let result = run_query(
            create_router().await,
            "select_track_order_by_artist_id_and_album_title",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_artist_name_with_name() {
        let result = run_query(
            create_router().await,
            "select_order_by_artist_name_with_name",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_artist_album_count() {
        let result = run_query(create_router().await, "select_order_by_artist_album_count").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_artist_album_count_agg() {
        let result = run_query(
            create_router().await,
            "select_order_by_artist_album_count_agg",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn sorting_by_nested_relationship_column_with_predicate() {
        let result = run_query(
            create_router().await,
            "sorting_by_nested_relationship_column_with_predicate",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn sorting_by_nested_relationship_column_with_predicate_exists() {
        let result = run_query(
            create_router().await,
            "sorting_by_nested_relationship_column_with_predicate_exists",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn sorting_by_relationship_count_with_predicate() {
        let result = run_query(
            create_router().await,
            "sorting_by_relationship_count_with_predicate",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn sorting_by_nested_relationship_count() {
        let result = run_query(
            create_router().await,
            "sorting_by_nested_relationship_count",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn order_by_nested_field() {
        let result = run_query(create_router().await, "order_by_nested_field").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod aggregation {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn aggregate_count_albums() {
        let result = run_query(create_router().await, "aggregate_count_albums").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn aggregate_count_albums_plus_field() {
        let result = run_query(create_router().await, "aggregate_count_albums_plus_field").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn aggregate_count_artist_albums() {
        let result = run_query(create_router().await, "aggregate_count_artist_albums").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn aggregate_count_artist_albums_plus_field() {
        let result = run_query(
            create_router().await,
            "aggregate_count_artist_albums_plus_field",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn aggregate_max_enum() {
        let result = run_query(create_router().await, "aggregate_max_enum").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod relationships {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_album_object_relationship_to_artist() {
        let result = run_query(
            create_router().await,
            "select_album_object_relationship_to_artist",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_array_relationship_to_album() {
        let result = run_query(
            create_router().await,
            "select_artist_array_relationship_to_album",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn nested_array_relationships() {
        let result = run_query(create_router().await, "nested_array_relationships").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn nested_object_relationships() {
        let result = run_query(create_router().await, "nested_object_relationships").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn dup_array_relationship() {
        let result = run_query(create_router().await, "dup_array_relationship").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn very_nested_recursive_relationship() {
        let result = run_query(create_router().await, "very_nested_recursive_relationship").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn nested_field_relationship() {
        let result = run_query(create_router().await, "nested_field_relationship").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod native_queries {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_artist() {
        let result = run_query(create_router().await, "native_queries/select_artist").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artists_below_id() {
        let result = run_query(
            create_router().await,
            "native_queries/select_artists_below_id",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_with_album_by_title_relationship_arguments() {
        let result = run_query(
            create_router().await,
            "native_queries/select_artist_with_album_by_title_relationship_arguments",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_relationship() {
        let result = run_query(
            create_router().await,
            "native_queries/select_where_relationship",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_sort_relationship() {
        let result = run_query(
            create_router().await,
            "native_queries/select_sort_relationship",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_order_by_artist_album_count() {
        let result = run_query(
            create_router().await,
            "native_queries/select_order_by_artist_album_count",
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn embedded_variable() {
        let result = run_query(create_router().await, "native_queries/embedded_variable").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod types {
    use super::super::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_value_types() {
        let result = run_query(create_router().await, "value_types").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod negative {
    use super::super::common;
    use tests_common::request::{create_client, models, run_query_expecting, StatusCode};

    /// Ensure that a value of the wrong datatype is rejected.
    #[tokio::test]
    async fn select_by_pk() {
        let client = create_client(common::create_router().await);
        let result: models::ErrorResponse = run_query_expecting(
            &client,
            "select_by_pk_bad",
            StatusCode::UNPROCESSABLE_ENTITY,
        )
        .await;
        insta::assert_json_snapshot!(result);
    }

    /// Check that a very broken native query doesn't impact subsequent queries.
    #[tokio::test(flavor = "multi_thread")]
    async fn broken_query() {
        let router = tests_common::router::create_router(
            common::BROKEN_QUERIES_NDC_METADATA_PATH,
            &format!("{}/empty", common::CONNECTION_URI),
        )
        .await;
        let client = create_client(router);

        let broken_result: models::ErrorResponse = run_query_expecting(
            &client,
            "broken_queries/broken",
            StatusCode::INTERNAL_SERVER_ERROR,
        )
        .await;

        // This should succeed.
        let working_result: models::QueryResponse =
            run_query_expecting(&client, "broken_queries/working", StatusCode::OK).await;

        let result = (broken_result, working_result);

        insta::assert_json_snapshot!(result);
    }

    /// Check that a mutation native query doesn't fails in query.
    #[tokio::test(flavor = "multi_thread")]
    async fn mutation_native_query_in_query() {
        let router = tests_common::router::create_router(
            common::BROKEN_QUERIES_NDC_METADATA_PATH,
            common::CONNECTION_URI,
        )
        .await;
        let client = create_client(router);

        let result: models::ErrorResponse = run_query_expecting(
            &client,
            "negative/select_artist_in_disguise",
            StatusCode::INTERNAL_SERVER_ERROR,
        )
        .await;

        insta::assert_json_snapshot!(result);
    }
}
