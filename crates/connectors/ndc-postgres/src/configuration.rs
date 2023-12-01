//! Configuration for the connector.

mod version1;

use std::collections::BTreeSet;

use query_engine_metadata::metadata;

pub use version1::{
    configure, metadata_to_current, validate_raw_configuration, Configuration, ConnectionUri,
    PoolSettings, RawConfiguration, ResolvedSecret,
};

pub const CURRENT_VERSION: u32 = 1;

/// A configuration type, tailored to the needs of the query/mutation/explain methods (i.e., those
/// not to do with configuration management).
///
/// This separation also decouples the implementation from things like API versioning concerns
/// somewhat.
///
/// Since the RuntimeConfiguration is reconstructed from a Configuration at every method call, and
/// since it consists of a sub-selection of components from the full Configuration, the fields are
/// borrowed rather than owned.
#[derive(Debug)]
pub struct RuntimeConfiguration {
    pub metadata: metadata::Metadata,
}

impl<'a> version1::Configuration {
    /// Apply the common interpretations on the Configuration API type into an RuntimeConfiguration.
    pub fn as_runtime_configuration(self: &'a Configuration) -> RuntimeConfiguration {
        RuntimeConfiguration {
            metadata: metadata_to_current(&self.config.metadata),
        }
    }
}

/// Collect all the types that can occur in the metadata. This is a bit circumstantial. A better
/// approach is likely to record scalar type names directly in the metadata via configuration.sql.
pub fn occurring_scalar_types(
    tables: &metadata::TablesInfo,
    native_queries: &metadata::NativeQueries,
) -> BTreeSet<metadata::ScalarType> {
    let tables_column_types = tables.0.values().flat_map(|v| {
        v.columns
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    let native_queries_column_types = native_queries.0.values().flat_map(|v| {
        v.columns
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    let native_queries_arguments_types = native_queries.0.values().flat_map(|v| {
        v.arguments
            .values()
            .map(|c| c.r#type.clone())
            .filter_map(some_scalar_type)
    });

    tables_column_types
        .chain(native_queries_column_types)
        .chain(native_queries_arguments_types)
        .collect::<BTreeSet<metadata::ScalarType>>()
}

/// Filter predicate that only keeps scalar types.
fn some_scalar_type(typ: metadata::Type) -> Option<metadata::ScalarType> {
    match typ {
        metadata::Type::ArrayType(_) => None,
        metadata::Type::ScalarType(t) => Some(t),
    }
}
