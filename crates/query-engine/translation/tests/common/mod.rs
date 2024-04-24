use std::fs;

use ndc_postgres_configuration::version3;
use query_engine_sql::sql;
use query_engine_translation::translation;

pub fn test_translation(testname: &str) -> Result<String, translation::error::Error> {
    test_query_translation(testname)
}

/// Translate a query to SQL and compare against the snapshot.
pub fn test_query_translation(testname: &str) -> Result<String, translation::error::Error> {
    let metadata_versioned = serde_json::from_str(
        fs::read_to_string(format!("tests/goldenfiles/{testname}/tables.json"))
            .unwrap()
            .as_str(),
    )
    .unwrap();

    let metadata = version3::convert_metadata(metadata_versioned);

    let request = serde_json::from_str(
        fs::read_to_string(format!("tests/goldenfiles/{testname}/request.json"))
            .unwrap()
            .as_str(),
    )
    .unwrap();

    let plan = translation::query::translate(&metadata, request)?;

    let mut sqls: Vec<String> = vec![];

    for stmt in plan.pre {
        let pretty = sqlformat::format(
            &stmt.0.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        ) + ";\n\n";
        sqls.push(pretty);
    }

    let query = plan.query.query_sql();

    let pretty = sqlformat::format(
        &query.sql,
        &sqlformat::QueryParams::None,
        sqlformat::FormatOptions::default(),
    ) + ";\n\n";
    sqls.push(pretty);

    let param: std::collections::BTreeMap<usize, sql::string::Param> = query
        .params
        .into_iter()
        .enumerate()
        .map(|(i, p)| (i + 1, p))
        .collect();

    for stmt in plan.post {
        let pretty = sqlformat::format(
            &stmt.0.sql,
            &sqlformat::QueryParams::None,
            sqlformat::FormatOptions::default(),
        ) + ";\n\n";
        sqls.push(pretty);
    }

    Ok(format!("{}{:#?}", sqls.join(""), param))
}

/// Translate a mutation to SQL and compare against the snapshot.
pub fn test_mutation_translation(
    isolation_level: sql::ast::transaction::IsolationLevel,
    testname: &str,
) -> Result<String, translation::error::Error> {
    let metadata_versioned = serde_json::from_str(
        fs::read_to_string(format!(
            "tests/goldenfiles/mutations/{testname}/tables.json"
        ))
        .unwrap()
        .as_str(),
    )
    .unwrap();
    let metadata = version3::convert_metadata(metadata_versioned);
    let request: ndc_sdk::models::MutationRequest = serde_json::from_str(
        fs::read_to_string(format!(
            "tests/goldenfiles/mutations/{testname}/request.json"
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
                &metadata,
                operation,
                request.collection_relationships.clone(),
                Some(query_engine_metadata::metadata::mutations::MutationsVersion::V1),
            )
        })
        .collect::<Result<Vec<_>, translation::error::Error>>()?;

    let plan = sql::execution_plan::simple_mutations_execution_plan(isolation_level, mutations);
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
