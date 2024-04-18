//! Metadata information regarding the database and tracked information.

pub mod database;
pub mod mutations;
pub mod native_queries;

use std::collections::BTreeSet;

// re-export without modules
pub use database::*;
pub use native_queries::*;

/// Metadata information.
#[derive(Clone, PartialEq, Eq, Debug, Default)]
pub struct Metadata {
    pub tables: TablesInfo,
    pub composite_types: CompositeTypes,
    pub native_queries: NativeQueries,
    pub aggregate_functions: AggregateFunctions,
    pub comparison_operators: ComparisonOperators,
    pub type_representations: TypeRepresentations,
    pub occurring_scalar_types: BTreeSet<ScalarTypeName>,
}
