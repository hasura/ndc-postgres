mod configuration;
mod values;

pub mod environment;
pub mod error;
mod version3;
mod version4;

pub use configuration::{
    generate_latest_schema, introspect, make_runtime_configuration, parse_configuration,
    upgrade_to_latest_version, write_parsed_configuration, Configuration, ParsedConfiguration,
    DEFAULT_CONNECTION_URI_VARIABLE,
};
pub use values::{ConnectionUri, IsolationLevel, PoolSettings, Secret};

#[cfg(test)]
pub mod tests;

#[cfg(test)]
pub mod common {
    use std::path::{Path, PathBuf};

    pub mod postgres {

        pub const CHINOOK_NDC_METADATA_PATH: &str = "static/postgres/v3-chinook-ndc-metadata";

        pub const BROKEN_QUERIES_NDC_METADATA_PATH: &str =
            "static/postgres/broken-queries-ndc-metadata";

        pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64002";

        pub const EMPTY_CONNECTION_URI: &str =
            "postgresql://postgres:password@localhost:64002/empty";
    }

    pub mod citus {
        pub const CHINOOK_NDC_METADATA_PATH: &str = "static/citus/v3-chinook-ndc-metadata";

        pub const CONNECTION_URI: &str =
            "postgresql://postgres:password@localhost:64004?sslmode=disable";
    }

    pub mod cockroach {
        pub const CHINOOK_NDC_METADATA_PATH: &str = "static/cockroach/v3-chinook-ndc-metadata";

        pub const CONNECTION_URI: &str = "postgresql://postgres:password@localhost:64003/defaultdb";
    }

    /// Find the project root via the crate root provided by `cargo test`,
    /// and get our single static configuration file.
    /// This depends on the convention that all our crates live in `/crates/<name>`
    /// and will break in the unlikely case that we change this
    pub fn get_path_from_project_root(ndc_metadata_path: impl AsRef<Path>) -> PathBuf {
        let mut d = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
        d.push("../../");
        d.push(ndc_metadata_path);

        d
    }
}
