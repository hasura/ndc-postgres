//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.

use std::fs;
use std::io;
use std::path::Path;

use ndc_postgres::configuration::RawConfiguration;

use super::helpers::get_path_from_project_root;

/// Load deployment at `main_deployment_path`
/// replace url with `new_postgres_url`
/// save at `new_deployment_path`
pub fn copy_deployment_with_new_postgres_url(
    main_deployment_path: impl AsRef<Path>,
    new_postgres_url: &str,
    new_deployment_path: impl AsRef<Path>,
) -> io::Result<()> {
    let full_path = get_path_from_project_root(main_deployment_path);

    let mut new_deployment: RawConfiguration =
        serde_json::from_str(&fs::read_to_string(full_path).unwrap()).unwrap();
    new_deployment.connection_uri = new_postgres_url.into();

    let new_absolute_deployment_file =
        fs::File::create(get_path_from_project_root(new_deployment_path))?;
    serde_json::to_writer_pretty(new_absolute_deployment_file, &new_deployment)?;
    Ok(())
}

/// Erase test deployment file created at `deployment_path`
pub fn delete_deployment(deployment_path: impl AsRef<Path>) -> io::Result<()> {
    let absolute_path = get_path_from_project_root(deployment_path);

    fs::remove_file(absolute_path)
}
