//! Deployment configuration functions used across test cases.
//! Use via helpers in `mod.rs` rather than directly.

use std::path::Path;

use tokio::fs;

use ndc_postgres_configuration::ParsedConfiguration;

use super::helpers::get_path_from_project_root;

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
    let temp_deploys_path = get_path_from_project_root(temp_deploys_path);
    let ndc_metadata_path = ndc_metadata_dir_path.join("configuration.json");

    let configuration = ndc_postgres_configuration::parse_configuration(ndc_metadata_dir_path)
        .await
        .map_err(|err| anyhow::anyhow!("{}: {}", &ndc_metadata_path.display(), err))?;

    let new_ndc_metadata = set_connection_uri(configuration, new_connection_uri.into());

    // make sure the directory where all temp deploys are copied to exists
    fs::create_dir_all(&temp_deploys_path)
        .await
        .map_err(|err| anyhow::anyhow!("{}: {}", &temp_deploys_path.display(), err))?;

    let new_ndc_metadata_dir = temp_deploys_path.join(db_name);

    ndc_postgres_configuration::write_parsed_configuration(new_ndc_metadata, &new_ndc_metadata_dir)
        .await
        .map_err(|err| anyhow::anyhow!("{}: {}", &new_ndc_metadata_dir.display(), err))?;

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

fn set_connection_uri(input: ParsedConfiguration, connection_uri: String) -> ParsedConfiguration {
    match input {
        ParsedConfiguration::Version3(mut config) => {
            config.connection_settings.connection_uri = connection_uri.into();
            ParsedConfiguration::Version3(config)
        }
        ParsedConfiguration::Version4(mut config) => {
            config.connection_settings.connection_uri = connection_uri.into();
            ParsedConfiguration::Version4(config)
        }
        ParsedConfiguration::Version5(mut config) => {
            config.connection_settings.connection_uri = connection_uri.into();
            ParsedConfiguration::Version5(config)
        }
    }
}
