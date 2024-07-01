//! Handle the creation of Native Operations.

use std::collections::{BTreeMap, BTreeSet};
use std::path::PathBuf;

use super::{update, Context};
use configuration::version4::{metadata as metadata_v4, oids_to_typenames};
use ndc_postgres_configuration as configuration;
use ndc_postgres_configuration::environment::Environment;
use query_engine_sql::sql;

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
    let connection = libpq::Connection::new(&connection_string)?;

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

            let prepared_statement_name = format!("__hasura_inference_{identifier}");
            let sql = parsed_file.sql().to_sql();

            // Prepare the SQL against the DB.
            let result = connection.prepare(Some(&prepared_statement_name), &sql.sql, &[]);
            match result.error_message()? {
                None => {}
                Some(error_message) => Err(anyhow::anyhow!("{}", error_message))?,
            }

            // Fetch the description which contains the types of arguments and columns.
            let description = connection.describe_prepared(Some(&prepared_statement_name));
            match description.error_message()? {
                None => {}
                Some(error_message) => Err(anyhow::anyhow!("{}", error_message))?,
            }

            // Extract the arguments and columns information into data structures.
            let mut arguments_to_oids = std::collections::BTreeMap::new();
            let mut columns_to_oids = std::collections::BTreeMap::new();

            for param in 0..description.nparams() {
                let parameter = if let sql::string::Param::Variable(param) =
                    sql.params.get(param).ok_or(anyhow::anyhow!(
                        "Internal error: parameter index not found."
                    ))? {
                    param.to_string()
                } else {
                    Err(anyhow::anyhow!(
                        "Internal error: unexpected non-variable parameter."
                    ))?
                };
                arguments_to_oids.insert(
                    parameter.clone(),
                    i64::from(description.param_type(param).ok_or(anyhow::anyhow!(
                        "Invalid OID for parameter '{}'.",
                        parameter.clone()
                    ))?),
                );
            }

            for field in 0..description.nfields() {
                let column_name = description.field_name(field)?.unwrap();
                columns_to_oids.insert(
                    column_name.clone(),
                    i64::from(description.field_type(field)),
                );
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
