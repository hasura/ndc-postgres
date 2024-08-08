#[cfg(test)]
mod query {
    use super::super::common::create_router;
    use tests_common::assert::is_contained_in_lines;
    use tests_common::request::run_query_explain;

    #[tokio::test]
    async fn select_by_pk() {
        let result = run_query_explain(create_router().await, "select_by_pk").await;
        is_contained_in_lines(&["Aggregate", "Scan", "35"], &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn select_where_variable() {
        let result = run_query_explain(create_router().await, "select_where_variable").await;
        is_contained_in_lines(&["Aggregate", "Seq Scan", "Filter"], &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn select_where_name_nilike() {
        let result = run_query_explain(create_router().await, "select_where_name_nilike").await;
        let keywords = &[
            "Aggregate",
            "Subquery Scan",
            "Limit",
            "Index Scan",
            "Filter",
        ];
        is_contained_in_lines(keywords, &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn duplicate_filter_results() {
        let result = run_query_explain(create_router().await, "duplicate_filter_results").await;
        let keywords = &[
            "Aggregate",
            "Subquery Scan",
            "Limit",
            "Index Scan",
            "Filter",
        ];
        is_contained_in_lines(keywords, &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn duplicate_filter_results_nested() {
        let result =
            run_query_explain(create_router().await, "duplicate_filter_results_nested").await;
        let keywords = &[
            "Aggregate",
            "Subquery Scan",
            "Limit",
            "Index Scan",
            "Filter",
        ];
        is_contained_in_lines(keywords, &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn order_by_nested_field() {
        let result = run_query_explain(create_router().await, "order_by_nested_field").await;
        let keywords = &[
            "Sort Key",
            "ProjectSet",
            "group_leader\".characters).name) DESC",
        ];
        is_contained_in_lines(keywords, &result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    mod native_queries {
        use super::super::super::common::create_router;
        use tests_common::assert::is_contained_in_lines;
        use tests_common::request::run_query_explain;

        #[tokio::test]
        async fn embedded_variable() {
            let result =
                run_query_explain(create_router().await, "native_queries/embedded_variable").await;
            is_contained_in_lines(&["Aggregate", "Seq Scan", "Filter"], &result.details.plan);
            insta::assert_snapshot!(result.details.query);
        }
    }

    #[tokio::test]
    async fn select_where_no_variable() {
        let result = run_query_explain(create_router().await, "select_where_no_variables").await;
        assert!(result.details.plan.is_empty());
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn nested_field_relationship() {
        let result = run_query_explain(create_router().await, "nested_field_relationship").await;
        insta::assert_snapshot!(result.details.query);
    }
}

#[cfg(test)]
mod mutation {
    use super::super::common::create_router;
    use tests_common::assert::is_contained_in_lines;
    use tests_common::request::run_mutation_explain;

    #[tokio::test]
    async fn delete_playlist_track() {
        let result = run_mutation_explain(create_router().await, "delete_playlist_track").await;
        is_contained_in_lines(
            &["Delete", "Index Cond", "CTE Scan"],
            result
                .details
                .get("0 delete_playlist_track Execution Plan")
                .unwrap(),
        );
        insta::assert_snapshot!(result
            .details
            .get("0 delete_playlist_track SQL Mutation")
            .unwrap());
    }

    #[tokio::test]
    async fn insert_artist_album() {
        let result = run_mutation_explain(create_router().await, "insert_artist_album").await;
        is_contained_in_lines(
            &["Insert", "CTE Scan"],
            result
                .details
                .get("0 insert_artist Execution Plan")
                .unwrap(),
        );
        is_contained_in_lines(
            &["Insert", "CTE Scan"],
            result.details.get("1 insert_album Execution Plan").unwrap(),
        );
        let queries = [
            result.details.get("0 insert_artist SQL Mutation").unwrap(),
            "\n\n\n",
            result.details.get("1 insert_album SQL Mutation").unwrap(),
        ]
        .concat();
        insta::assert_snapshot!(queries);
    }

    #[tokio::test]
    async fn v2_insert_custom_dog() {
        let result = run_mutation_explain(create_router().await, "v2_insert_custom_dog").await;
        is_contained_in_lines(
            &["Insert", "Aggregate"],
            result
                .details
                .get("0 v2_insert_custom_dog Execution Plan")
                .unwrap(),
        );
        insta::assert_snapshot!(result
            .details
            .get("0 v2_insert_custom_dog SQL Mutation")
            .unwrap());
    }

    #[tokio::test]
    async fn delete_invoice_line() {
        let result = run_mutation_explain(create_router().await, "delete_invoice_line").await;
        is_contained_in_lines(
            &[
                "Delete",
                "Filter",
                "Index Cond",
                "Nested Loop",
                "Index Scan",
            ],
            result
                .details
                .get("0 v2_delete_InvoiceLine_by_InvoiceLineId Execution Plan")
                .unwrap(),
        );
        insta::assert_snapshot!(result
            .details
            .get("0 v2_delete_InvoiceLine_by_InvoiceLineId SQL Mutation")
            .unwrap());
    }

    #[tokio::test]
    async fn v2_insert_update_custom_dog() {
        let result =
            run_mutation_explain(create_router().await, "v2_insert_update_custom_dog").await;
        is_contained_in_lines(
            &["Update", "Aggregate"],
            result
                .details
                .get("1 v2_update_custom_dog_by_id Execution Plan")
                .unwrap(),
        );
        insta::assert_snapshot!(result
            .details
            .get("1 v2_update_custom_dog_by_id SQL Mutation")
            .unwrap());
    }
}
