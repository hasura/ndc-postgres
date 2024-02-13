mod configuration;
mod custom_trait_implementations;
pub mod version1;
pub mod version2;

pub use configuration::{
    as_runtime_configuration, configure, set_connection_uri, validate_raw_configuration,
    Configuration, RawConfiguration, RuntimeConfiguration,
};
pub use version2::{
    occurring_scalar_types, ConnectionUri, IsolationLevel, PoolSettings, ResolvedSecret,
};
