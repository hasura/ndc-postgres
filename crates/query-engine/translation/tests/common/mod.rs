use std::fs;

use query_engine_sql::sql;
use query_engine_translation::translation;

/// Run a query against the server, get the result, and compare against the snapshot.
pub fn test_translation(testname: &str) -> Result<String, translation::query::error::Error> {
    let tables = serde_json::from_str(
        fs::read_to_string(format!("tests/goldenfiles/{}/tables.json", testname))
            .unwrap()
            .as_str(),
    )
    .unwrap();
    let request = serde_json::from_str(
        fs::read_to_string(format!("tests/goldenfiles/{}/request.json", testname))
            .unwrap()
            .as_str(),
    )
    .unwrap();

    let plan = translation::query::translate(&tables, request)?;
    let query = plan.query();
    let params: Vec<(usize, &sql::string::Param)> = query
        .params
        .iter()
        .enumerate()
        .map(|(i, p)| (i + 1, p))
        .collect();

    let pretty = sqlformat::format(
        &query.sql,
        &sqlformat::QueryParams::None,
        sqlformat::FormatOptions::default(),
    );

    Ok(format!("{}\n\n{:?}", pretty, params))
}
