//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.

use std::path::Path;

use tokio::fs;

use ndc_postgres_configuration::RawConfiguration;

use super::helpers::get_path_from_project_root;

/// Load NDC metadata at `main_ndc_metadata_path`
/// replace url with `new_postgres_url`
/// save at `new_ndc_metadata_path`
pub async fn copy_ndc_metadata_with_new_postgres_url(
    main_ndc_metadata_path: impl AsRef<Path>,
    new_connection_uri: &str,
    new_ndc_metadata_path: impl AsRef<Path>,
) -> anyhow::Result<()> {
    let ndc_metadata_path =
        get_path_from_project_root(main_ndc_metadata_path).join("configuration.json");

    let new_ndc_metadata: RawConfiguration =
        serde_json::from_str(&fs::read_to_string(ndc_metadata_path).await?)?;
    let new_ndc_metadata = set_connection_uri(new_ndc_metadata, new_connection_uri.into());

    let new_ndc_metadata_dir = get_path_from_project_root(new_ndc_metadata_path);
    fs::create_dir_all(&new_ndc_metadata_dir).await?;
    let new_ndc_metadata_path = new_ndc_metadata_dir.join("configuration.json");
    fs::write(
        get_path_from_project_root(new_ndc_metadata_path),
        serde_json::to_string_pretty(&new_ndc_metadata)?,
    )
    .await?;
    Ok(())
}

/// Erase test NDC metadata file created at `ndc_metadata_path`
pub async fn delete_ndc_metadata(ndc_metadata_path: impl AsRef<Path>) -> anyhow::Result<()> {
    let absolute_path = get_path_from_project_root(ndc_metadata_path);
    fs::remove_dir_all(absolute_path).await?;
    Ok(())
}

fn set_connection_uri(input: RawConfiguration, connection_uri: String) -> RawConfiguration {
    match input {
        RawConfiguration::Version3(mut config) => {
            config.connection_settings.connection_uri = connection_uri.into();
            RawConfiguration::Version3(config)
        }
    }
}
