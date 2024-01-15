//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.

use std::fs;
use std::io;
use std::path::Path;

use ndc_postgres::configuration;
use ndc_postgres::configuration::RawConfiguration;

use super::helpers::get_path_from_project_root;

/// Load NDC metadata at `main_ndc_metadata_path`
/// replace url with `new_postgres_url`
/// save at `new_ndc_metadata_path`
pub fn copy_ndc_metadata_with_new_postgres_url(
    main_ndc_metadata_path: impl AsRef<Path>,
    new_connection_uri: &str,
    new_ndc_metadata_path: impl AsRef<Path>,
) -> io::Result<()> {
    let full_path = get_path_from_project_root(main_ndc_metadata_path);

    let new_ndc_metadata: RawConfiguration =
        serde_json::from_str(&fs::read_to_string(full_path).unwrap()).unwrap();
    let new_ndc_metadata =
        configuration::set_connection_uri(new_ndc_metadata, new_connection_uri.into());

    let new_absolute_ndc_metadata_file =
        fs::File::create(get_path_from_project_root(new_ndc_metadata_path))?;
    serde_json::to_writer_pretty(new_absolute_ndc_metadata_file, &new_ndc_metadata)?;
    Ok(())
}

/// Erase test NDC metadata file created at `ndc_metadata_path`
pub fn delete_ndc_metadata(ndc_metadata_path: impl AsRef<Path>) -> io::Result<()> {
    let absolute_path = get_path_from_project_root(ndc_metadata_path);

    fs::remove_file(absolute_path)
}
