#[cfg(test)]
mod basic {
    use crate::aurora::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_by_pk() {
        let result = run_query(create_router().await, "select_by_pk").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_5() {
        let result = run_query(create_router().await, "select_5").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_int_and_string() {
        let result = run_query(create_router().await, "select_int_and_string").await;
        insta::assert_json_snapshot!(result);
    }
}

#[cfg(test)]
mod predicates {
    use crate::aurora::common::create_router;
    use tests_common::request::run_query;

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
    async fn select_where_name_in() {
        let result = run_query(create_router().await, "select_where_name_in").await;
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
    async fn select_where_name_similar() {
        let result = run_query(create_router().await, "select_where_name_similar").await;
        insta::assert_json_snapshot!(result);
    }

    #[tokio::test]
    async fn select_where_name_nsimilar() {
        let result = run_query(create_router().await, "select_where_name_nsimilar").await;
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
}

#[cfg(test)]
mod sorting {
    use crate::aurora::common::create_router;
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
}

#[cfg(test)]
mod aggregation {
    use crate::aurora::common::create_router;
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
}

#[cfg(test)]
mod relationships {
    use crate::aurora::common::create_router;
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
}

#[cfg(test)]
mod native_queries {
    use crate::aurora::common::create_router;
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
}

#[cfg(test)]
mod types {
    use crate::aurora::common::create_router;
    use tests_common::request::run_query;

    #[tokio::test]
    async fn select_value_types() {
        let result = run_query(create_router().await, "value_types").await;
        insta::assert_json_snapshot!(result);
    }
}
