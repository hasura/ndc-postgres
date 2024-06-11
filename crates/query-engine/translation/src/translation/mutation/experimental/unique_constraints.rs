//! Utility functions for generating unique constraints

use query_engine_metadata::metadata::database;

/// Get all columns that have a uniqueness constraints by themselves in a particular table.
/// For now, we can delete/update using any uniqueness constraint with one column in it.
pub fn get_non_compound_uniqueness_constraints(table_info: &database::TableInfo) -> Vec<String> {
    table_info
        .uniqueness_constraints
        .0
        .iter()
        .filter_map(|(_constraint_name, constraint_set)| {
            if constraint_set.0.len() == 1 {
                constraint_set.0.first().cloned()
            } else {
                None
            }
        })
        .collect()
}
