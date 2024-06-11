use std::fs;
use std::path::PathBuf;

use query_engine_sql::sql;
use query_engine_translation::translation;

pub async fn test_translation(testname: &str) -> anyhow::Result<String> {
    test_query_translation(testname).await
}

/// Translate a query to SQL and compare against the snapshot.
pub async fn test_query_translation(testname: &str) -> anyhow::Result<String> {
    let directory = PathBuf::from("tests/goldenfiles").join(testname);

    let parsed_configuration = ndc_postgres_configuration::parse_configuration(&directory).await?;
    let configuration = ndc_postgres_configuration::make_runtime_configuration(
        parsed_configuration,
        ndc_postgres_configuration::environment::FixedEnvironment::from([(
            "CONNECTION_URI".into(),
            "the translation tests do not rely on a database connection".into(),
        )]),
    )?;
    let metadata = configuration.metadata;

    let request =
        serde_json::from_str(&fs::read_to_string(directory.join("request.json")).unwrap()).unwrap();

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
pub async fn test_mutation_translation(
    isolation_level: sql::ast::transaction::IsolationLevel,
    testname: &str,
) -> anyhow::Result<String> {
    let directory = PathBuf::from("tests/goldenfiles/mutations").join(testname);

    let parsed_configuration = ndc_postgres_configuration::parse_configuration(&directory).await?;
    let configuration = ndc_postgres_configuration::make_runtime_configuration(
        parsed_configuration,
        ndc_postgres_configuration::environment::FixedEnvironment::from([(
            "CONNECTION_URI".into(),
            "the translation tests do not rely on a database connection".into(),
        )]),
    )?;
    let metadata = configuration.metadata;
    let request: ndc_sdk::models::MutationRequest =
        serde_json::from_str(&fs::read_to_string(directory.join("request.json")).unwrap()).unwrap();

    let mutations = request
        .operations
        .into_iter()
        .map(|operation| {
            translation::mutation::translate(
                &metadata,
                operation,
                request.collection_relationships.clone(),
                Some(query_engine_metadata::metadata::mutations::MutationsVersion::VeryExperimentalWip),
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
