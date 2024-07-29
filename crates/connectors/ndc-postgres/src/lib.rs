//! A Hasura v3 PostgreSQL Native Data Connector.

pub mod capabilities;
pub mod configuration_mapping;
pub mod connector;
pub mod error;
pub mod health;
pub mod mutation;
pub mod query;
pub mod schema;
pub mod state;

// we expose the sdk used for this connector so that we are able to use it in multitenant
pub use ndc_sdk as sdk;
