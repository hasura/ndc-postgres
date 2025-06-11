mod common;

#[tokio::test]
async fn no_fields() {
    let result = common::test_translation("no_fields").await.unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_array_column() {
    let result = common::test_translation("select_array_column")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_array_column_nested_types() {
    let result = common::test_translation("select_array_column_nested_types")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_array_variable() {
    let result = common::test_translation("select_array_variable")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_array_variable_nested_types() {
    let result = common::test_translation("select_array_variable_nested_types")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_composite_column_simple() {
    let result = common::test_translation("select_composite_column_simple")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_composite_column_complex() {
    let result = common::test_translation("select_composite_column_complex")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_composite_column_nested_field_count() {
    let result = common::test_translation("select_composite_column_nested_field_count")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_composite_variable_simple() {
    let result = common::test_translation("select_composite_variable_simple")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_composite_variable_complex() {
    let result = common::test_translation("select_composite_variable_complex")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_nested_column_simple() {
    let result = common::test_translation("select_nested_column_simple")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_nested_column_complex() {
    let result = common::test_translation("select_nested_column_complex")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_array_column_reverse() {
    let result = common::test_translation("select_array_column_reverse")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_where_album_id_equals_self_nested_object_relationship() {
    let result =
        common::test_translation("select_where_album_id_equals_self_nested_object_relationship")
            .await
            .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_converts_select_with_limit() {
    let result = common::test_translation("select_with_limit").await.unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_string() {
    let result = common::test_translation("select_where_string")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_not_null() {
    let result = common::test_translation("select_where_not_null")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_prefix_function() {
    let result = common::test_translation("select_where_prefix_function")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_in_variable() {
    let result = common::test_translation("select_where_in_variable")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_unrelated_exists() {
    let result = common::test_translation("select_where_unrelated_exists")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_select_where_related_exists() {
    let result = common::test_translation("select_where_related_exists")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_where_array_relationship() {
    let result = common::test_translation("select_where_array_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_aggregate_count_albums() {
    let result = common::test_translation("aggregate_count_albums")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_aggregate_distinct_albums() {
    let result = common::test_translation("aggregate_distinct_albums")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_aggregate_function_albums() {
    let result = common::test_translation("aggregate_function_albums")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn aggregate_limit_offset_order_by() {
    let result = common::test_translation("aggregate_limit_offset_order_by")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_simple_array_relationship() {
    let result = common::test_translation("simple_array_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn it_simple_object_relationship() {
    let result = common::test_translation("simple_object_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn nested_array_relationships() {
    let result = common::test_translation("nested_array_relationships")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn nested_aggregates() {
    let result = common::test_translation("nested_aggregates").await.unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn dup_array_relationship() {
    let result = common::test_translation("dup_array_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn nested_recursive_relationship() {
    let result = common::test_translation("nested_recursive_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn very_nested_recursive_relationship() {
    let result = common::test_translation("very_nested_recursive_relationship")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_relationship_column() {
    let result = common::test_translation("sorting_by_relationship_column")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_relationship_column_with_true_predicate() {
    let result = common::test_translation("sorting_by_relationship_column_with_true_predicate")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_nested_relationship_column() {
    let result = common::test_translation("sorting_by_nested_relationship_column")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_nested_relationship_column_with_predicate() {
    let result = common::test_translation("sorting_by_nested_relationship_column_with_predicate")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_recursive_relationship_column() {
    let result = common::test_translation("sorting_by_recursive_relationship_column")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_relationship_count() {
    let result = common::test_translation("sorting_by_relationship_count")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_nested_relationship_count() {
    let result = common::test_translation("sorting_by_nested_relationship_count")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn sorting_by_relationship_count_with_predicate() {
    let result = common::test_translation("sorting_by_relationship_count_with_predicate")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

#[tokio::test]
async fn select_track_order_by_artist_id_and_album_title() {
    let result = common::test_translation("select_track_order_by_artist_id_and_album_title")
        .await
        .unwrap();
    insta::assert_snapshot!(result);
}

mod negative_tests {
    use crate::common;

    #[tokio::test]
    async fn sorting_by_no_relationship_aggregate() {
        let result = common::test_translation("sorting_by_no_relationship_aggregate")
            .await
            .expect_err("Expected error");
        insta::assert_snapshot!(result.to_string());
    }
}

mod native_queries {
    use crate::common;

    #[tokio::test]
    async fn select_artist() {
        let result = common::test_translation("native_queries/select_artist")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_by_id() {
        let result = common::test_translation("native_queries/select_artist_by_id")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_by_name() {
        let result = common::test_translation("native_queries/select_artist_by_name")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_with_album_by_title() {
        let result = common::test_translation("native_queries/select_artist_with_album_by_title")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn select_artist_with_album_by_title_relationship_arguments() {
        let result = common::test_translation(
            "native_queries/select_artist_with_album_by_title_relationship_arguments",
        )
        .await
        .unwrap();
        insta::assert_snapshot!(result);
    }
}

mod types {
    use crate::common;

    #[tokio::test]
    async fn select_types_on_comparisons() {
        let result = common::test_translation("values/select_types_on_comparisons")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn select_types_on_native_queries() {
        let result = common::test_translation("values/select_types_on_native_queries")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }
}

mod mutations {
    use query_engine_sql::sql::ast::transaction::IsolationLevel;

    use crate::common;

    #[tokio::test]
    async fn simple() {
        let result = common::test_mutation_translation(IsolationLevel::default(), "simple")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn v2_insert() {
        let result = common::test_mutation_translation(IsolationLevel::default(), "v2_insert")
            .await
            .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn v2_insert_empty_objects() {
        let result =
            common::test_mutation_translation(IsolationLevel::default(), "v2_insert_empty_objects")
                .await
                .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn v2_update_by_id() {
        let result =
            common::test_mutation_translation(IsolationLevel::default(), "v2_update_by_id")
                .await
                .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn v2_insert_return_object_relationship() {
        let result = common::test_mutation_translation(
            IsolationLevel::default(),
            "v2_insert_return_object_relationship",
        )
        .await
        .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn update_array_column_empty() {
        let result = common::test_mutation_translation(
            IsolationLevel::default(),
            "v2_update_array_column_empty",
        )
        .await
        .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn update_array_column_null() {
        let result = common::test_mutation_translation(
            IsolationLevel::default(),
            "v2_update_array_column_null",
        )
        .await
        .unwrap();
        insta::assert_snapshot!(result);
    }

    #[tokio::test]
    async fn update_array_column_with_values() {
        let result = common::test_mutation_translation(
            IsolationLevel::default(),
            "v2_update_array_column_with_values",
        )
        .await
        .unwrap();
        insta::assert_snapshot!(result);
    }
}
