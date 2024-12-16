//! Infer information about a Native Operation from a Native Operation SQL string.

use ndc_models as models;
use std::collections::{BTreeMap, BTreeSet};
use std::path::Path;

use query_engine_sql::sql;

use sqlx::Column;
use sqlx::Connection;
use sqlx::Executor;

use crate::environment::Environment;

use super::metadata;
use tracing::{info_span, Instrument};

/// Query or Mutation.
#[derive(Clone, Debug, clap::ValueEnum)]
pub enum Kind {
    Query,
    Mutation,
}

/// Take a SQL file containing a Native Operation, check against the database that it is valid,
/// and add it to the configuration if it is.
pub async fn create(
    configuration: &super::ParsedConfiguration,
    environment: &impl Environment,
    connection_string: &str,
    operation_path: &Path,
    operation_file_contents: &str,
) -> anyhow::Result<metadata::NativeQueryInfo> {
    let connect_options =
        crate::get_connect_options(&crate::ConnectionUri::from(connection_string), environment)?;
    // Connect to the db.
    let mut connection = sqlx::PgConnection::connect_with(&connect_options).await?;

    // Create an entry for a Native Operation and insert it into the configuration.

    // Read the SQL file and parse it.
    let sql = super::metadata::parse_native_query(operation_file_contents).to_sql();

    // Prepare the SQL against the DB.
    let result = connection.describe(&sql.sql).await?;

    // Extract the arguments and columns information into data structures.
    let mut arguments_to_oids = std::collections::BTreeMap::new();
    let mut columns_to_oids = std::collections::BTreeMap::new();

    let Some(sqlx::Either::Left(ref result_parameters)) = result.parameters else {
        anyhow::bail!("Internal error: sqlx params should always be a vector.")
    };

    if result_parameters.len() != sql.params.len() {
        anyhow::bail!(
            "Internal error: Parameters of native query and sql statement are not aligned."
        )
    }

    // Fill the arguments list.
    for (result_param, sql_param) in result_parameters.iter().zip(sql.params.iter()) {
        let sql::string::Param::Variable(param_name) = sql_param else {
            anyhow::bail!("Internal error: Native operation parameter was not a variable.")
        };

        let the_oid = result_param
            .oid()
            .ok_or(anyhow::anyhow!(
                "Internal error: All sqlx TypeInfos should have an oid."
            ))?
            .0;

        arguments_to_oids.insert(param_name, i64::from(the_oid));
    }

    // Fill the columns list.
    for (index, column) in result.columns.iter().enumerate() {
        let the_oid = column
            .type_info()
            .oid()
            .ok_or(anyhow::anyhow!(
                "Internal error: All sqlx TypeInfos should have an oid."
            ))?
            .0;
        let is_nullable = result.nullable(index).unwrap_or(
            // If we don't know, we assume it is nullable.
            true,
        );

        columns_to_oids.insert(column.name().to_string(), (i64::from(the_oid), is_nullable));
    }

    let mut oids: BTreeSet<i64> = arguments_to_oids.values().copied().collect();
    oids.extend::<BTreeSet<i64>>(columns_to_oids.values().copied().map(|x| x.0).collect());
    let oids_vec: Vec<_> = oids.into_iter().collect();
    let oids_map =
        oids_to_typenames(configuration, connection_string, environment, &oids_vec).await?;

    let mut arguments = BTreeMap::new();
    for (name, oid) in arguments_to_oids {
        arguments.insert(
            name.clone().into(),
            metadata::ReadOnlyColumnInfo {
                name: name.clone(),
                r#type: metadata::Type::ScalarType(
                    oids_map
                        .get(&oid)
                        .ok_or_else(|| anyhow::anyhow!("Internal error: oid not found in map."))?
                        .clone(),
                ),
                description: None,
                // we don't have this information, so we assume not nullable.
                nullable: metadata::Nullable::NonNullable,
            },
        );
    }
    let mut columns = BTreeMap::new();
    for (name, (oid, is_nullable)) in columns_to_oids {
        columns.insert(
            name.clone().into(),
            metadata::ReadOnlyColumnInfo {
                name: name.clone(),
                r#type: metadata::Type::ScalarType(
                    oids_map
                        .get(&oid)
                        .ok_or_else(|| anyhow::anyhow!("Internal error: oid not found in map."))?
                        .clone(),
                ),
                description: None,
                nullable: if is_nullable {
                    metadata::Nullable::Nullable
                } else {
                    metadata::Nullable::NonNullable
                },
            },
        );
    }

    let new_native_operation = metadata::NativeQueryInfo {
        sql: metadata::NativeQuerySqlEither::NativeQuerySqlExternal(
            metadata::NativeQuerySqlExternal::File {
                file: operation_path.to_path_buf(),
            },
        ),
        arguments,
        columns,
        description: None,
    };

    Ok(new_native_operation)
}

/// Given a vector of OIDs, ask postgres to provide the equivalent type names.
pub async fn oids_to_typenames(
    configuration: &super::ParsedConfiguration,
    connection_string: &str,
    environment: &impl Environment,
    oids: &Vec<i64>,
) -> anyhow::Result<BTreeMap<i64, models::ScalarTypeName>> {
    let connect_options =
        crate::get_connect_options(&crate::ConnectionUri::from(connection_string), environment)?;
    // Connect to the db.
    let mut connection = sqlx::PgConnection::connect_with(&connect_options)
        .instrument(info_span!("Connect to database"))
        .await?;

    let rows: Vec<OidQueryRow> = sqlx::query_as(OID_QUERY)
        .bind(oids)
        .fetch_all(&mut connection)
        .instrument(info_span!("Run oid lookup query"))
        .await?;

    let mut oids_map: BTreeMap<i64, models::ScalarTypeName> = BTreeMap::new();

    // Reverse lookup the schema.typename and find the ndc type name,
    // if we find all we can just add the nq and call it a day.
    for row in rows {
        let schema_name: String = row.schema_name;
        let type_name: String = row.type_name;
        let oid: i64 = row.oid;

        let mut found = false;
        for (scalar_type_name, info) in &configuration.metadata.types.scalar.0 {
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
                oids_map.insert(oid, type_name.into());
            } else {
                oids_map.insert(oid, format!("{schema_name}_{type_name}").into());
            }
        }
    }

    Ok(oids_map)
}

const OID_QUERY: &str = "
SELECT
  typnamespace::regnamespace::text as schema_name,
  typname as type_name,
  oid::INT8
FROM pg_type
WHERE oid::INT8 in (SELECT unnest($1::INT8[]))
";

/// Representation of a result row returned from the oid lookup query.
#[derive(Debug, sqlx::FromRow)]
struct OidQueryRow {
    schema_name: String,
    type_name: String,
    oid: i64,
}
