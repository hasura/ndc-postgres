mod common;

#[test]
fn select_where_album_id_equals_self_nested_object_relationship() {
    let result =
        common::test_translation("select_where_album_id_equals_self_nested_object_relationship")
            .unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_converts_select_with_limit() {
    let result = common::test_translation("select_with_limit").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_select_where_string() {
    let result = common::test_translation("select_where_string").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_select_where_not_null() {
    let result = common::test_translation("select_where_not_null").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_select_where_unrelated_exists() {
    let result = common::test_translation("select_where_unrelated_exists").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_select_where_related_exists() {
    let result = common::test_translation("select_where_related_exists").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_aggregate_count_albums() {
    let result = common::test_translation("aggregate_count_albums").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_aggregate_distinct_albums() {
    let result = common::test_translation("aggregate_distinct_albums").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_aggregate_function_albums() {
    let result = common::test_translation("aggregate_function_albums").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_simple_array_relationship() {
    let result = common::test_translation("simple_array_relationship").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn it_simple_object_relationship() {
    let result = common::test_translation("simple_object_relationship").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn nested_array_relationships() {
    let result = common::test_translation("nested_array_relationships").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn nested_aggregates() {
    let result = common::test_translation("nested_aggregates").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn dup_array_relationship() {
    let result = common::test_translation("dup_array_relationship").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn nested_recursive_relationship() {
    let result = common::test_translation("nested_recursive_relationship").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn very_nested_recursive_relationship() {
    let result = common::test_translation("very_nested_recursive_relationship").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn sorting_by_relationship_column() {
    let result = common::test_translation("sorting_by_relationship_column").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn sorting_by_nested_relationship_column() {
    let result = common::test_translation("sorting_by_nested_relationship_column").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn sorting_by_recursive_relationship_column() {
    let result = common::test_translation("sorting_by_recursive_relationship_column").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn sorting_by_relationship_count() {
    let result = common::test_translation("sorting_by_relationship_count").unwrap();
    insta::assert_snapshot!(result);
}

#[test]
fn sorting_by_nested_relationship_count() {
    let result = common::test_translation("sorting_by_nested_relationship_count").unwrap();
    insta::assert_snapshot!(result);
}

mod native_queries {
    use crate::common;

    #[test]
    fn select_artist() {
        let result = common::test_translation("native_queries/select_artist").unwrap();
        insta::assert_snapshot!(result);
    }

    #[test]
    fn select_artist_by_id() {
        let result = common::test_translation("native_queries/select_artist_by_id").unwrap();
        insta::assert_snapshot!(result);
    }

    #[test]
    fn select_artist_by_name() {
        let result = common::test_translation("native_queries/select_artist_by_name").unwrap();
        insta::assert_snapshot!(result);
    }

    #[test]
    fn select_artist_with_album_by_title() {
        let result =
            common::test_translation("native_queries/select_artist_with_album_by_title").unwrap();
        insta::assert_snapshot!(result);
    }

    #[test]
    fn select_artist_with_album_by_title_relationship_arguments() {
        let result = common::test_translation(
            "native_queries/select_artist_with_album_by_title_relationship_arguments",
        )
        .unwrap();
        insta::assert_snapshot!(result);
    }
}

mod types {
    use crate::common;

    #[test]
    fn select_types_on_comparisons() {
        let result = common::test_translation("values/select_types_on_comparisons").unwrap();
        insta::assert_snapshot!(result);
    }

    #[test]
    fn select_types_on_native_queries() {
        let result = common::test_translation("values/select_types_on_native_queries").unwrap();
        insta::assert_snapshot!(result);
    }
}
