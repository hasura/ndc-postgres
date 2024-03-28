#[cfg(test)]
mod query {
    use super::super::common::create_router;
    use tests_common::assert::is_contained_in_lines;
    use tests_common::request::run_query_explain;

    #[tokio::test]
    async fn select_by_pk() {
        let result = run_query_explain(create_router().await, "select_by_pk").await;
        is_contained_in_lines(vec!["Aggregate", "Scan", "35"], result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn select_where_variable() {
        let result = run_query_explain(create_router().await, "select_where_variable").await;
        is_contained_in_lines(vec!["Aggregate", "Seq Scan", "Filter"], result.details.plan);
        insta::assert_snapshot!(result.details.query);
    }

    #[tokio::test]
    async fn select_where_name_nilike() {
        let result = run_query_explain(create_router().await, "select_where_name_nilike").await;
        let keywords = vec![
            "Aggregate",
            "Subquery Scan",
            "Limit",
            "Index Scan",
            "Filter",
        ];
        is_contained_in_lines(keywords, result.details.plan);
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
            is_contained_in_lines(vec!["Aggregate", "Seq Scan", "Filter"], result.details.plan);
            insta::assert_snapshot!(result.details.query);
        }
    }

    #[tokio::test]
    async fn select_where_no_variable() {
        let result = run_query_explain(create_router().await, "select_where_no_variables").await;
        assert!(result.details.plan.is_empty());
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
            vec!["Delete", "Recheck Cond", "Index Cond", "CTE Scan"],
            result
                .details
                .get("delete_playlist_track Execution Plan")
                .unwrap()
                .to_string(),
        );
        insta::assert_snapshot!(result
            .details
            .get("delete_playlist_track SQL Mutation")
            .unwrap());
    }

    #[tokio::test]
    async fn insert_artist_album() {
        let result = run_mutation_explain(create_router().await, "insert_artist_album").await;
        is_contained_in_lines(
            vec!["Insert", "CTE Scan"],
            result
                .details
                .get("insert_artist Execution Plan")
                .unwrap()
                .to_string(),
        );
        is_contained_in_lines(
            vec!["Insert", "CTE Scan"],
            result
                .details
                .get("insert_album Execution Plan")
                .unwrap()
                .to_string(),
        );
        let queries = [
            result.details.get("insert_artist SQL Mutation").unwrap(),
            "\n\n\n",
            result.details.get("insert_album SQL Mutation").unwrap(),
        ]
        .concat();
        insta::assert_snapshot!(queries);
    }

    #[tokio::test]
    async fn delete_invoice_line() {
        let result = run_mutation_explain(create_router().await, "delete_invoice_line").await;
        is_contained_in_lines(
            vec![
                "Delete",
                "Filter",
                "Index Cond",
                "Nested Loop",
                "Index Scan",
            ],
            result
                .details
                .get("experimental_delete_InvoiceLine_by_InvoiceLineId Execution Plan")
                .unwrap()
                .to_string(),
        );
        insta::assert_snapshot!(result
            .details
            .get("experimental_delete_InvoiceLine_by_InvoiceLineId SQL Mutation")
            .unwrap());
    }
}
