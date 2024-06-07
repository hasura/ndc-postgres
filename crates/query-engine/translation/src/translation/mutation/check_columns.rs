//! Before inserting or updating, check the specified columns against the db schema.

use crate::translation::error::Error;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

/// Check that the columns can be inserted or updated according to the database table schema,
/// and if the caller requires, can also check no columns are missing.
pub fn check_columns(
    table_columns: &BTreeMap<String, database::ColumnInfo>,
    user_columns: &BTreeMap<sql::ast::ColumnName, sql::ast::MutationValueExpression>,
    collection: &str,
    check_missing: &CheckMissingColumns,
) -> Result<(), Error> {
    for (name, column) in table_columns {
        match column {
            // nullable, default, and identity by default columns can be inserted into or omitted.
            database::ColumnInfo {
                nullable: database::Nullable::Nullable,
                ..
            }
            | database::ColumnInfo {
                has_default: database::HasDefault::HasDefault,
                ..
            }
            | database::ColumnInfo {
                is_identity: database::IsIdentity::IdentityByDefault,
                ..
            } => Ok(()),
            // generated columns must not be inserted into.
            database::ColumnInfo {
                is_generated: database::IsGenerated::Stored,
                ..
            } => {
                let value = user_columns.get(&sql::ast::ColumnName(column.name.clone()));
                match value {
                    Some(expr) if *expr != sql::ast::MutationValueExpression::Default => {
                        Err(Error::ColumnIsGenerated(name.clone()))
                    }
                    _ => Ok(()),
                }
            }
            // identity always columns must not be inserted into.
            database::ColumnInfo {
                is_identity: database::IsIdentity::IdentityAlways,
                ..
            } => {
                let value = user_columns.get(&sql::ast::ColumnName(column.name.clone()));
                match value {
                    Some(expr) if *expr != sql::ast::MutationValueExpression::Default => {
                        Err(Error::ColumnIsIdentityAlways(name.clone()))
                    }
                    _ => Ok(()),
                }
            }
            // regular columns must be inserted into.
            _ => {
                let value = user_columns.get(&sql::ast::ColumnName(column.name.clone()));

                match (check_missing, value) {
                    (CheckMissingColumns::No, _)
                    | (
                        CheckMissingColumns::Yes,
                        Some(sql::ast::MutationValueExpression::Expression(_)),
                    ) => Ok(()),
                    (
                        CheckMissingColumns::Yes,
                        Some(sql::ast::MutationValueExpression::Default) | None,
                    ) => Err(Error::MissingColumnInMutation {
                        column_name: name.clone(),
                        collection: collection.to_owned(),
                        operation: match check_missing {
                            CheckMissingColumns::No => "update".to_string(),
                            CheckMissingColumns::Yes => "insert into".to_string(),
                        },
                    }),
                }
            }
        }?;
    }
    Ok(())
}

/// Should we check that a column was not inserted? Yes for insert, No for Update.
#[derive(Clone, Debug)]
pub enum CheckMissingColumns {
    Yes,
    No,
}
