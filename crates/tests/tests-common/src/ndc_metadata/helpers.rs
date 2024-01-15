//! miscellaneous helpers
use std::path::{Path, PathBuf};

/// Find the project root via the crate root provided by `cargo test`,
/// and get our single static configuration file.
/// This depends on the convention that all our crates live in `/crates/<name>`
/// and will break in the unlikely case that we change this
pub fn get_path_from_project_root(ndc_metadata_path: impl AsRef<Path>) -> PathBuf {
    let mut d = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    d.push("../../../");
    d.push(ndc_metadata_path);
    d
}
