//! miscellaneous helpers
use std::path::PathBuf;

/// Find the project root via the crate root provided by `cargo test`,
/// and get our single static configuration file.
/// This depends on the convention that all our crates live in `/crates/<name>`
/// and will break in the unlikely case that we change this
pub fn get_path_from_project_root(deployment_path: &str) -> PathBuf {
    let mut d = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    d.push("../../../");
    d.push(deployment_path);
    d
}
