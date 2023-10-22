pub const DATABASE_POSTGRESQL: &str = "postgresql";

#[derive(Debug, PartialEq, Eq)]
pub struct DatabaseInfo {
    pub system_name: &'static str,
    pub system_version: Option<u32>,
    pub server_host: Option<String>,
    pub server_port: Option<u16>,
    pub server_username: Option<String>,
    pub server_database: Option<String>,
}
