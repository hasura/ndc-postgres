//! Infer information about a Native Operation from a Native Operation SQL string.

use std::collections::{BTreeMap, BTreeSet};
use std::path::{Path, PathBuf};

use query_engine_sql::sql;

use sqlx::Connection;
use sqlx::Executor;
use sqlx::{Column, PgConnection};

use super::metadata;
use tracing::{info_span, Instrument};

/// Query or Mutation.
#[derive(Debug, Clone)]
pub enum Kind {
    Query,
    Mutation,
}

/// Take a SQL file containing a Native Operation, check against the database that it is valid,
/// and add it to the configuration if it is.
pub async fn create(
    configuration: &super::ParsedConfiguration,
    operation_path: PathBuf,
    context_path: &Path,
    kind: Kind,
) -> anyhow::Result<(String, metadata::NativeQueryInfo)> {
    // Connect to the db.
    let connection_string = configuration.get_connection_uri()?;
    let mut connection = sqlx::PgConnection::connect(&connection_string).await?;

    // Create an entry for a Native Operation and insert it into the configuration.

    // Read the SQL file.
    let parsed_file = super::metadata::parse_native_query_from_file(context_path, &operation_path)
        .map_err(|err| anyhow::anyhow!("{}", err))?;

    // Prepare the Native Operation SQL so it can be checked against the db.
    let identifier = operation_path
        .file_stem()
        .ok_or(anyhow::anyhow!("SQL file not found"))?
        .to_str()
        .ok_or(anyhow::anyhow!("Could not convert SQL file name to string"))?;

    let sql = parsed_file.sql().to_sql();

    // Prepare the SQL against the DB.
    let result = connection.describe(&sql.sql).await?;

    // Extract the arguments and columns information into data structures.
    let mut arguments_to_oids = std::collections::BTreeMap::new();
    let mut columns_to_oids = std::collections::BTreeMap::new();

    let Some(sqlx::Either::Left(result_parameters)) = result.parameters else {
        anyhow::bail!("Internal error: sqlx params should always be a vector.")
    };

    if result_parameters.len() != sql.params.len() {
        anyhow::bail!(
            "Internal error: Parameters of native query and sql statement are not aligned."
        )
    }

    for (result_param, sql_param) in result_parameters.into_iter().zip(sql.params.iter()) {
        let sql::string::Param::Variable(param_name) = sql_param else {
            anyhow::bail!("Internal error: Native operation parameter was not a variable.")
        };

        let the_oid = result_param
            .oid()
            .ok_or_else(|| {
                anyhow::anyhow!("Internal error: All sqlx TypeInfos should have an oid.")
            })?
            .0;

        arguments_to_oids.insert(param_name, i64::from(the_oid));
    }

    for column in result.columns {
        let the_oid = column
            .type_info()
            .oid()
            .ok_or_else(|| {
                anyhow::anyhow!("Internal error: All sqlx TypeInfos should have an oid.")
            })?
            .0;

        columns_to_oids.insert(column.name().to_string(), i64::from(the_oid));
    }

    let mut oids: BTreeSet<i64> = arguments_to_oids.values().copied().collect();
    oids.extend::<BTreeSet<i64>>(columns_to_oids.values().copied().collect());
    let oids_vec: Vec<_> = oids.into_iter().collect();
    let oids_map = oids_to_typenames(&configuration, &connection_string, &oids_vec).await?;

    let mut arguments = BTreeMap::new();
    for (name, oid) in arguments_to_oids {
        arguments.insert(
            name.clone(),
            metadata::ReadOnlyColumnInfo {
                name: name.clone(),
                r#type: metadata::Type::ScalarType(metadata::ScalarTypeName(
                    oids_map.get(&oid).unwrap().0.clone(),
                )),
                description: None,
                nullable: metadata::Nullable::NonNullable,
            },
        );
    }
    let mut columns = BTreeMap::new();
    for (name, oid) in columns_to_oids {
        columns.insert(
            name.clone(),
            metadata::ReadOnlyColumnInfo {
                name: name.clone(),
                r#type: metadata::Type::ScalarType(metadata::ScalarTypeName(
                    oids_map.get(&oid).unwrap().0.clone(),
                )),
                description: None,
                nullable: metadata::Nullable::NonNullable,
            },
        );
    }

    let new_native_operation = metadata::NativeQueryInfo {
        sql: metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            metadata::NativeQuerySqlExternal::File {
                file: operation_path.clone(),
            },
        ),
        arguments,
        columns,
        is_procedure: match kind {
            Kind::Query => false,
            Kind::Mutation => true,
        },
        description: None,
    };

    Ok((identifier.to_string(), new_native_operation))
}

/// Given a vector of OIDs, ask postgres to provide the equivalent type names.
pub async fn oids_to_typenames(
    configuration: &super::ParsedConfiguration,
    connection_string: &str,
    oids: &Vec<i64>,
) -> Result<BTreeMap<i64, metadata::ScalarTypeName>, sqlx::Error> {
    let mut connection = PgConnection::connect(connection_string)
        .instrument(info_span!("Connect to database"))
        .await?;

    let rows: Vec<OidQueryRow> = sqlx::query_as(OID_QUERY)
        .bind(oids)
        .fetch_all(&mut connection)
        .instrument(info_span!("Run oid lookup query"))
        .await?;

    let mut oids_map: BTreeMap<i64, metadata::ScalarTypeName> = BTreeMap::new();

    // Reverse lookup the schema.typename and find the ndc type name,
    // if we find all we can just add the nq and call it a day.
    for row in rows {
        let schema_name: String = row.schema_name;
        let type_name: String = row.type_name;
        let oid: i64 = row.oid.into();

        let mut found = false;
        for (scalar_type_name, info) in &configuration.metadata.scalar_types.0 {
            if info.schema_name == schema_name && info.type_name == type_name {
                oids_map.insert(oid, scalar_type_name.clone());
                found = true;
                continue;
            }
        }

        // If we don't find it we generate a name which is either schema_typename
        // or just typename depending if the schema is in the unqualified list or not,
        // then add the nq and run the introspection.
        if !found {
            if configuration
                .introspection_options
                .unqualified_schemas_for_types_and_procedures
                .contains(&schema_name)
            {
                oids_map.insert(oid, metadata::ScalarTypeName(type_name));
            } else {
                oids_map.insert(
                    oid,
                    metadata::ScalarTypeName(format!("{schema_name}_{type_name}")),
                );
            }
        }
    }

    Ok(oids_map)
}

const OID_QUERY: &str = "
SELECT
  typnamespace::regnamespace::text as schema_name,
  typname as type_name,
  oid::integer
FROM pg_type
WHERE oid in (SELECT unnest($1))
";

/// Representation of a result row returned from the oid lookup query.
#[derive(Debug, sqlx::FromRow)]
struct OidQueryRow {
    schema_name: String,
    type_name: String,
    oid: i32,
}
