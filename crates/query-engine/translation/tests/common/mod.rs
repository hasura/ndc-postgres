use std::fs;

use query_engine_sql::sql;
use query_engine_translation::translation;

pub fn test_translation(testname: &str) -> Result<String, translation::error::Error> {
    test_query_translation(None, testname)
}

/// Translate a query to SQL and compare against the snapshot.
pub fn test_query_translation(
    isolation_level: Option<sql::ast::transaction::IsolationLevel>,
    testname: &str,
) -> Result<String, translation::error::Error> {
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

    let plan =
        translation::query::translate(&tables, isolation_level.unwrap_or_default(), request)?;

    let mut sqls: Vec<String> = vec![];

    if isolation_level.is_some() {
        for stmt in plan.pre {
            let pretty = sqlformat::format(
                &stmt.0.sql,
                &sqlformat::QueryParams::None,
                sqlformat::FormatOptions::default(),
            );
            sqls.push(pretty);
        }
    }

    let query = plan.query.query_sql();

    let pretty = sqlformat::format(
        &query.sql,
        &sqlformat::QueryParams::None,
        sqlformat::FormatOptions::default(),
    );
    sqls.push(pretty);

    let param: Vec<(usize, sql::string::Param)> = query
        .params
        .into_iter()
        .enumerate()
        .map(|(i, p)| (i + 1, p))
        .collect();

    if isolation_level.is_some() {
        for stmt in plan.post {
            let pretty = sqlformat::format(
                &stmt.0.sql,
                &sqlformat::QueryParams::None,
                sqlformat::FormatOptions::default(),
            );
            sqls.push(pretty);
        }
    }

    Ok(format!("{}\n\n{:?}", sqls.join(";\n\n"), param))
}

/// Translate a mutation to SQL and compare against the snapshot.
pub fn test_mutation_translation(
    isolation_level: Option<sql::ast::transaction::IsolationLevel>,
    testname: &str,
) -> Result<String, translation::error::Error> {
    let tables = serde_json::from_str(
        fs::read_to_string(format!(
            "tests/goldenfiles/mutations/{}/tables.json",
            testname
        ))
        .unwrap()
        .as_str(),
    )
    .unwrap();
    let request: ndc_sdk::models::MutationRequest = serde_json::from_str(
        fs::read_to_string(format!(
            "tests/goldenfiles/mutations/{}/request.json",
            testname
        ))
        .unwrap()
        .as_str(),
    )
    .unwrap();

    let mutations = request
        .operations
        .into_iter()
        .map(|operation| {
            translation::mutation::translate(
                &tables,
                operation,
                request.collection_relationships.clone(),
                &Some(query_engine_metadata::metadata::mutations::MutationsVersion::V1),
            )
        })
        .collect::<Result<Vec<_>, translation::error::Error>>()?;

    let plan = sql::execution_plan::simple_mutations_execution_plan(
        isolation_level.unwrap_or_default(),
        mutations,
    );
    let mut sqls: Vec<String> = vec![];
    let mut params: Vec<Vec<(usize, sql::string::Param)>> = vec![];

    for stmt in plan.pre {
        let pretty = sqlformat::format(
            &stmt.0.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );
        sqls.push(pretty);
    }

    for query in plan.query.0 {
        let query = query.query_sql();

        let pretty = sqlformat::format(
            &query.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );
        sqls.push(pretty);

        let param: Vec<(usize, sql::string::Param)> = query
            .params
            .into_iter()
            .enumerate()
            .map(|(i, p)| (i + 1, p))
            .collect();

        params.push(param);
    }

    for stmt in plan.post {
        let pretty = sqlformat::format(
            &stmt.0.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        );
        sqls.push(pretty);
    }

    Ok(format!("{};\n\n{:?}", sqls.join(";\n\n"), params))
}
