pub mod common;

use common::create_router;
use tests_common::assert::is_contained_in_lines;
use tests_common::request::run_explain;

#[tokio::test]
async fn select_by_pk() {
    let result = run_explain(create_router().await, "select_by_pk").await;
    is_contained_in_lines(vec!["group", "scan", "35"], result.details.plan);
    insta::assert_snapshot!(result.details.query);
}

#[tokio::test]
async fn select_where_variable() {
    let result = run_explain(create_router().await, "select_where_variable").await;
    is_contained_in_lines(vec!["group", "scan", "filter"], result.details.plan);
    insta::assert_snapshot!(result.details.query);
}

#[tokio::test]
async fn select_where_name_nilike() {
    let result = run_explain(create_router().await, "select_where_name_nilike").await;
    let keywords = vec!["group", "LIMIT", "scan", "filter"];
    is_contained_in_lines(keywords, result.details.plan);
    insta::assert_snapshot!(result.details.query);
}
