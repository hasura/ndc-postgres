//! Some common helper functions.

use crate::translation::error::Warning;
use nonempty::NonEmpty;
use query_engine_metadata::metadata;
use std::collections::BTreeSet;

/// Create a description string for keys. For example:
/// > "'TrackId' key", or
/// > "'TrackId', 'PlaylistId' and 'OtherId' keys".
pub fn description_keys(keys: &BTreeSet<String>) -> String {
    let mut string = String::new();

    // Case we have only one key.
    #[allow(clippy::comparison_chain)]
    if keys.len() == 1 {
        for key in keys {
            string.push_str(format!("'{key}'").as_str());
        }
        string.push_str(" key");
    // Otherwise (we don't expect to be called without any keys).
    } else {
        for (index, key) in keys.iter().enumerate() {
            string.push_str(format!("'{key}'").as_str());
            // Push a comma if we haven't reached the key before last.
            if index + 2 < keys.len() {
                string.push_str(", ");
            }
            // Push an "and" if we reached the key before last.
            else if index + 2 == keys.len() {
                string.push_str(" and ");
            }
        }
        string.push_str(" keys");
    }

    string
}

/// Fetch the key columns of a constraint and calculate the constraint name.
pub fn get_unique_constraint_name_and_key_columns(
    mutation_type: &str,
    collection_name: &str,
    db_constraint_name: &str,
    table_info: &metadata::database::TableInfo,
    keys: &metadata::UniquenessConstraint,
) -> Option<(String, NonEmpty<metadata::database::ColumnInfo>)> {
    let mut key_columns: Vec<metadata::database::ColumnInfo> = vec![];
    let mut constraint_name = String::new();

    for (index, key) in keys.0.iter().enumerate() {
        // We don't expect this to happen because the metadata generated should be consistent,
        // but if it does, we skip generating these procedure rather than not start at all.
        let key_column = {
            if let Some(key_column) = table_info.columns.get(key) {
                key_column
            } else {
                let warning = Warning::GeneratingMutationSkippedBecauseColumnNotFoundInCollection {
                    mutation_type: mutation_type.to_string(),
                    collection: collection_name.to_string(),
                    column: key.clone(),
                    db_constraint_name: db_constraint_name.to_string(),
                };
                tracing::warn!(
                    info = ?warning,
                    warning = format!("{warning}"),
                );
                None?
            }
        };

        key_columns.push(key_column.clone());

        constraint_name.push_str(key);
        if index + 1 < keys.0.len() {
            constraint_name.push_str("_and_");
        }
    }
    // There should be at least one key column.
    let key_columns = if let Some(key_columns) = NonEmpty::from_vec(key_columns) {
        key_columns
    } else {
        let warning = Warning::GeneratingMutationSkippedBecauseNoColumnsInConstraint {
            mutation_type: mutation_type.to_string(),
            collection: collection_name.to_string(),
            db_constraint_name: db_constraint_name.to_string(),
        };
        tracing::warn!(
            info = ?warning,
            warning = format!("{warning}"),
        );
        None?
    };

    Some((constraint_name, key_columns))
}

/// The name and description of a check input argument.
#[derive(Debug, Clone)]
pub struct CheckArgument {
    pub argument_name: String,
    pub description: String,
}
