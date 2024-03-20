//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.

use std::path::Path;

use tokio::fs;

use ndc_postgres_configuration::RawConfiguration;

use super::helpers::get_path_from_project_root;
use crate::currentdir;

/// Load NDC metadata at `main_ndc_metadata_path`
/// replace url with `new_postgres_url`
/// save at `new_ndc_metadata_path`
pub async fn copy_ndc_metadata_with_new_postgres_url(
    main_ndc_metadata_path: impl AsRef<Path>,
    new_connection_uri: &str,
    temp_deploys_path: std::path::PathBuf,
    db_name: &str,
) -> anyhow::Result<()> {
    let ndc_metadata_dir_path = get_path_from_project_root(main_ndc_metadata_path);
    let ndc_metadata_path = ndc_metadata_dir_path.join("configuration.json");

    let new_ndc_metadata = currentdir::lock_not_async(&ndc_metadata_dir_path, || {
        serde_json::from_str::<RawConfiguration>(
            &std::fs::read_to_string(&ndc_metadata_path)
                .map_err(|err| anyhow::anyhow!("{}: {}", &ndc_metadata_path.display(), err))?,
        )
        .map_err(|err| anyhow::anyhow!("{}: {}", &ndc_metadata_path.display(), err))
    });

    let new_ndc_metadata = new_ndc_metadata.await?;

    let new_ndc_metadata = set_connection_uri(new_ndc_metadata, new_connection_uri.into());

    let temp_deploys_path = get_path_from_project_root(temp_deploys_path);

    // make sure the directory where all temp deploys are copied to exists
    fs::create_dir_all(&temp_deploys_path)
        .await
        .map_err(|err| anyhow::anyhow!("{}: {}", &temp_deploys_path.display(), err))?;

    let new_ndc_metadata_dir = temp_deploys_path.join(db_name);

    copy_dir::copy_dir(&ndc_metadata_dir_path, &new_ndc_metadata_dir).map_err(|err| {
        anyhow::anyhow!(
            r#"copy_dir failed.
from: {}
to: {}
error: {}"#,
            &ndc_metadata_dir_path.display(),
            &new_ndc_metadata_dir.display(),
            err
        )
    })?;

    let new_ndc_metadata_path = new_ndc_metadata_dir.join("configuration.json");
    fs::write(
        get_path_from_project_root(&new_ndc_metadata_path),
        serde_json::to_string_pretty(&new_ndc_metadata)?,
    )
    .await
    .map_err(|err| {
        anyhow::anyhow!(
            "{}: {}",
            &get_path_from_project_root(new_ndc_metadata_path).display(),
            err
        )
    })?;
    Ok(())
}

/// Erase test NDC metadata file created at `ndc_metadata_path`
pub async fn delete_ndc_metadata(ndc_metadata_path: impl AsRef<Path>) -> anyhow::Result<()> {
    let absolute_path = get_path_from_project_root(ndc_metadata_path);
    fs::remove_dir_all(&absolute_path).await.map_err(|err| {
        anyhow::anyhow!(
            "{}: {}",
            &get_path_from_project_root(absolute_path).display(),
            err
        )
    })?;

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
