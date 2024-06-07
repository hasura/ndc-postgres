//! Before inserting or updating, check the specified columns against the db schema.

use crate::translation::error::Error;
use query_engine_metadata::metadata::database;
use query_engine_sql::sql;
use std::collections::BTreeMap;

/// Check that no columns are missing, and that columns cannot be inserted to
/// are not inserted.
pub fn check_columns(
    columns: &BTreeMap<String, database::ColumnInfo>,
    inserted_columns: &BTreeMap<sql::ast::ColumnName, sql::ast::InsertExpression>,
    insert_name: &str,
    check_missing: &CheckMissingColumns,
) -> Result<(), Error> {
    for (name, column) in columns {
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
                let value = inserted_columns.get(&sql::ast::ColumnName(column.name.clone()));
                match value {
                    Some(expr) if *expr != sql::ast::InsertExpression::Default => {
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
                let value = inserted_columns.get(&sql::ast::ColumnName(column.name.clone()));
                match value {
                    Some(expr) if *expr != sql::ast::InsertExpression::Default => {
                        Err(Error::ColumnIsIdentityAlways(name.clone()))
                    }
                    _ => Ok(()),
                }
            }
            // regular columns must be inserted into.
            _ => {
                let value = inserted_columns.get(&sql::ast::ColumnName(column.name.clone()));

                match (check_missing, value) {
                    (CheckMissingColumns::No, _)
                    | (CheckMissingColumns::Yes, Some(sql::ast::InsertExpression::Expression(_))) => {
                        Ok(())
                    }
                    (
                        CheckMissingColumns::Yes,
                        Some(sql::ast::InsertExpression::Default) | None,
                    ) => Err(Error::MissingColumnInMutation(
                        name.clone(),
                        insert_name.to_owned(),
                    )),
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
