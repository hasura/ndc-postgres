//! Database information, which gets propagated to traces.

/// The standard database name. We assume that we are talking to a PostgreSQL database because
/// that's what this connector does.
pub const DATABASE_POSTGRESQL: &str = "postgresql";

/// A collection of information about the database and our connection to it, for logging and
/// traces.
///
/// No sensitive data should be stored in this structure.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DatabaseInfo {
    /// The database system name. Always "postgresql" in practice.
    pub system_name: &'static str,
    /// The database system version, as reported.
    pub system_version: DatabaseVersion,
    /// The server hostname.
    pub server_host: Option<String>,
    /// The server port, if available.
    pub server_port: Option<u16>,
    /// The username with which we connect to the server.
    pub server_username: Option<String>,
    /// The database we connect to.
    pub server_database: Option<String>,
}

/// Version information derived from the database.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DatabaseVersion {
    /// The database system version, as reported by `SELECT version()`.
    /// This is typically a long string of unspecified format, e.g.
    /// > PostgreSQL 16.0 (Debian 16.0-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
    /// or:
    /// > CockroachDB CCL v22.2.14 (aarch64-unknown-linux-gnu, built 2023/09/14 19:23:08, go1.19.6)
    pub string: Option<String>,
    /// The database system version, in the libpq format, as reported by `SHOW server_version_num`.
    /// e.g. v16.2 will be "162000".
    pub number: Option<u32>,
}
