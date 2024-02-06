#[cfg(test)]
mod explain {
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
        assert!(result.details.plan == "");
        insta::assert_snapshot!(result.details.query);
    }
}
