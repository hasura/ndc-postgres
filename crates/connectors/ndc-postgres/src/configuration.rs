//! Configuration for the connector.

mod version1;

use query_engine_metadata::metadata;

pub use version1::{
    configure, occurring_scalar_types, validate_raw_configuration, Configuration, ConnectionUri,
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
pub struct RuntimeConfiguration<'a> {
    pub metadata: &'a metadata::Metadata,
}

impl<'a> version1::Configuration {
    /// Apply the common interpretations on the Configuration API type into an RuntimeConfiguration.
    pub fn as_runtime_configuration(self: &'a Configuration) -> RuntimeConfiguration<'a> {
        RuntimeConfiguration {
            metadata: &self.config.metadata,
        }
    }
}
