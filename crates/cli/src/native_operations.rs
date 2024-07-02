//! Handle the creation of Native Operations.

use std::any::Any;
use std::collections::{BTreeMap, BTreeSet};
use std::path::PathBuf;

use super::{update, Context};
use anyhow::anyhow;
use configuration::version4::{metadata as metadata_v4, oids_to_typenames};
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;
use query_engine_sql::sql;

use sqlx::Column;
use sqlx::Connection;
use sqlx::Executor;

/// Query or Mutation.
#[derive(Debug, Clone, clap::ValueEnum)]
pub enum Kind {
    Query,
    Mutation,
}

/// Take a SQL file containing a Native Operation, check against the database that it is valid,
/// and add it to the configuration if it is.
pub async fn create(
    operation_path: PathBuf,
    context: Context<impl Environment>,
    kind: Kind,
) -> anyhow::Result<()> {
    // Read the configuration.
    let mut configuration =
        configuration::parse_configuration(context.context_path.clone()).await?;

    // Connect to the db.
    let connection_string = configuration.get_connection_uri()?;
    let mut connection = sqlx::PgConnection::connect(&connection_string).await?;

    // Create an entry for a Native Operation and insert it into the configuration.
    match configuration {
        configuration::ParsedConfiguration::Version3(_) => Err(anyhow::anyhow!(
            "To use the create native operations command, please upgrade to the latest version."
        ))?,
        configuration::ParsedConfiguration::Version4(ref mut configuration) => {
            // Read the SQL file.
            let parsed_file = configuration::version4::metadata::parse_native_query_from_file(
                &context.context_path,
                &operation_path,
            )
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

            let result_parameters = match result.parameters {
                Some(sqlx::Either::Left(parameters)) => parameters,
                _ => anyhow::bail!("Impossible: sqlx params should always be a vector"),
            };

            if result_parameters.len() != sql.params.len() {
                anyhow::bail!("Unexpected error: Parameters of native query and sql statement are not aligned")
            }

            for (result_param, sql_param) in result_parameters.into_iter().zip(sql.params.iter()) {
                let param_name = match sql_param {
                    sql::string::Param::Variable(v) => v,
                    _ => anyhow::bail!("Impossible: Native query parameter was not a variable"),
                };

                let the_oid = result_param
                    .oid()
                    .ok_or_else(|| {
                        anyhow::anyhow!("Impossible: All sqlx TypeInfos should have an oid")
                    })?
                    .0;

                arguments_to_oids.insert(param_name, i64::from(the_oid));
            }

            for column in result.columns {
                let the_oid = column
                    .type_info()
                    .oid()
                    .ok_or_else(|| {
                        anyhow::anyhow!("Impossible: All sqlx TypeInfos should have an oid")
                    })?
                    .0;

                columns_to_oids.insert(column.name().to_string(), i64::from(the_oid));
            }

            let mut oids: BTreeSet<i64> = arguments_to_oids.values().copied().collect();
            oids.extend::<BTreeSet<i64>>(columns_to_oids.values().copied().collect());
            let oids_vec: Vec<_> = oids.into_iter().collect();
            let oids_map = oids_to_typenames(configuration, &connection_string, &oids_vec).await?;

            let mut arguments = BTreeMap::new();
            for (name, oid) in arguments_to_oids {
                arguments.insert(
                    name.clone(),
                    metadata_v4::ReadOnlyColumnInfo {
                        name: name.clone(),
                        r#type: metadata_v4::Type::ScalarType(metadata_v4::ScalarTypeName(
                            oids_map.get(&oid).unwrap().0.clone(),
                        )),
                        description: None,
                        nullable: metadata_v4::Nullable::NonNullable,
                    },
                );
            }
            let mut columns = BTreeMap::new();
            for (name, oid) in columns_to_oids {
                columns.insert(
                    name.clone(),
                    metadata_v4::ReadOnlyColumnInfo {
                        name: name.clone(),
                        r#type: metadata_v4::Type::ScalarType(metadata_v4::ScalarTypeName(
                            oids_map.get(&oid).unwrap().0.clone(),
                        )),
                        description: None,
                        nullable: metadata_v4::Nullable::NonNullable,
                    },
                );
            }

            let new_native_operation = metadata_v4::NativeQueryInfo {
                sql: metadata_v4::NativeQuerySqlEither::NativeQuerySqlExternal(
                    metadata_v4::NativeQuerySqlExternal::File {
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

            // TODO: should we overwrite or not
            configuration
                .metadata
                .native_queries
                .0
                .insert(identifier.to_string(), new_native_operation);
        }
    };

    // We write the configuration including the new Native Operation to file.
    configuration::write_parsed_configuration(configuration, context.context_path.clone()).await?;

    // We update the configuration as well so that the introspection will add missing scalar type entries
    // if necessary.
    update(context).await
}
