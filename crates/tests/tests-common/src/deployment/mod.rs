//! Helpers for creating fresh ndc_metadatas for testing . Use `create_fresh_ndc_metadata` to set up a new database and
//! ndc_metadata file, and `clean_up_ndc_metadata` to remove it again afterwards.
//! It would be great to find a way of implementing these in a more Bracket-esq pattern that
//! automatically takes care of clean up in future.

mod configuration;
mod database;
pub mod helpers;

use std::io;
use std::path::{Path, PathBuf};

pub struct FreshDeployment {
    pub db_name: String,
    pub ndc_metadata_path: PathBuf,
    pub admin_connection_string: String, // for dropping after
}

/// Create a new ndc_metadata, pointing to a fresh copy of the database
pub async fn create_fresh_ndc_metadata(
    connection_uri: &str,
    ndc_metadata_path: impl AsRef<Path>,
) -> io::Result<FreshDeployment> {
    let (db_name, new_connection_uri) = database::create_fresh_database(connection_uri).await;

    let new_ndc_metadata_path =
        PathBuf::from("static/temp-deploys").join(format!("{}.json", db_name));

    configuration::copy_ndc_metadata_with_new_postgres_url(
        ndc_metadata_path,
        &new_connection_uri,
        &new_ndc_metadata_path,
    )?;
    Ok(FreshDeployment {
        db_name,
        ndc_metadata_path: new_ndc_metadata_path,
        admin_connection_string: connection_uri.to_string(),
    })
}

/// Remove database created for fresh ndc_metadata
pub async fn clean_up_ndc_metadata(ndc_metadata: FreshDeployment) -> io::Result<()> {
    database::drop_database(&ndc_metadata.admin_connection_string, &ndc_metadata.db_name).await;
    configuration::delete_ndc_metadata(&ndc_metadata.ndc_metadata_path)
}
