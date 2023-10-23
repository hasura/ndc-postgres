//! Database information, which gets propagated to traces.

/// The standard database name. We assume that we are talking to a PostgreSQL database because
/// that's what this connector does.
pub const DATABASE_POSTGRESQL: &str = "postgresql";

/// A collection of information about the database and our connection to it, for logging and
/// traces.
///
/// No sensitive data should be stored in this structure.
#[derive(Debug, PartialEq, Eq)]
pub struct DatabaseInfo {
    /// The database system name. Always "postgresql" in practice.
    pub system_name: &'static str,
    /// The database system version, in the libpq format.
    /// e.g. v16.2 will be "162000".
    pub system_version: Option<u32>,
    /// The server hostname.
    pub server_host: Option<String>,
    /// The server port, if available.
    pub server_port: Option<u16>,
    /// The username with which we connect to the server.
    pub server_username: Option<String>,
    /// The database we connect to.
    pub server_database: Option<String>,
}
