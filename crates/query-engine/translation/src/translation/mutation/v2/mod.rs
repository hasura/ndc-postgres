//! V2 mutations version.
//! This version in particular introduced permission predicates via boolean expressions and update mutations.
//!
//! Design and decisions:
//!
//! * We generate delete, insert and update procedures for each table.
//!
//! * A single insert procedure is generated per table of the form:
//!
//!   > v2_insert_<table>(
//!   >     objects: [<object>],
//!   >     post_check: <boolexpr>
//!   > )
//!
//!   It allows us to insert multiple objects and include a post check for permissions.
//!
//! * A delete procedure is generated per table X unique constraint of the form:
//!
//!   > v2_delete_<table>_by_<column_and_...>(
//!   >     key_<column1>: <value>,
//!   >     key_<column2>: <value>,
//!   >     ...,
//!   >     pre_check: <boolexpr>
//!   > )
//!
//!   It allows us to delete a single row using the uniqueness constraint, and contains a boolexpr for permissions.
//!
//! * An update procedure is generated per table X unique constraint of the form:
//!
//!   > v2_update_<table>_by_<column_and_...>(
//!   >     key_<column1>: <value>,
//!   >     key_<column2>: <value>,
//!   >     ...,
//!   >     update_columns: { <column>: { _set: <value> }, ... },
//!   >     pre_check: <boolexpr>,
//!   >     post_check: <boolexpr>
//!   > )
//!
//!   It allows us to update a single row using the uniqueness constraint by updating the relevant columns,
//!   and contains a pre check and post check for permissions.
//!
//! * Mutations using uniqueness constraints use the naming schema `by_column_and_column_and_column` instead of the db constraint name,
//!   because the former is far more helpful.
//! * If generating a mutation encounters an internal error, we skip that particular mutation and trace a warning instead of throwing
//!   an error so the connector can start at any situation.
//! * Naming collisions between the unique constraints and the update_columns / pre_check / post_check is avoided by prefixing argument
//!   names of the columns of a unique constraint with `key_`.

pub mod common;
pub mod delete;
pub mod generate;
pub mod insert;
pub mod translate;
pub mod update;

pub use generate::{generate, Mutation};
pub use translate::translate;

pub static VERSION: &str = "v2";
