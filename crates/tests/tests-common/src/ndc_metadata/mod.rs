//! Helpers for creating fresh NDC metadata files for testing.

mod configuration;
mod database;
pub mod helpers;

use std::io;
use std::path::{Path, PathBuf};

#[derive(Debug)]
pub struct FreshDeployment {
    pub db_name: String,
    pub ndc_metadata_path: PathBuf,
    admin_connection_uri: String, // for dropping after
}

impl FreshDeployment {
    /// Create a fresh copy of the database and its associated NDC metadata.
    pub async fn create(
        connection_uri: &str,
        ndc_metadata_path: impl AsRef<Path>,
    ) -> io::Result<FreshDeployment> {
        let (db_name, new_connection_uri) = database::create_fresh_database(connection_uri).await;

        let new_ndc_metadata_path = PathBuf::from("static/temp-deploys").join(&db_name);

        configuration::copy_ndc_metadata_with_new_postgres_url(
            ndc_metadata_path,
            &new_connection_uri,
            &new_ndc_metadata_path,
        )?;
        Ok(FreshDeployment {
            db_name,
            ndc_metadata_path: new_ndc_metadata_path,
            admin_connection_uri: connection_uri.to_string(),
        })
    }
}

impl Drop for FreshDeployment {
    fn drop(&mut self) {
        // To take ownership of the data so that we can move it into a future, we must replace it
        // with something else.
        //
        // We use empty strings, which isn't ideal, but if the compiler has done its job, there
        // should be no dangling references to these anyway.
        //
        // We then swap them in so that we take ownership of the properties we need.
        let mut db_name = "".to_string();
        let mut ndc_metadata_path = PathBuf::from("");
        let mut admin_connection_uri = "".to_string();
        std::mem::swap(&mut self.db_name, &mut db_name);
        std::mem::swap(&mut self.ndc_metadata_path, &mut ndc_metadata_path);
        std::mem::swap(&mut self.admin_connection_uri, &mut admin_connection_uri);

        // In order to call async behavior from a synchronous `Drop`, we must block on it.
        // This magic incantation seems to do the trick. Others did not.
        let result: anyhow::Result<()> = tokio::task::block_in_place(|| {
            tokio::runtime::Handle::current().block_on(async move {
                database::drop_database(&admin_connection_uri, &db_name).await?;
                configuration::delete_ndc_metadata(&ndc_metadata_path)?;
                Ok(())
            })
        });
        match result {
            Ok(()) => (),
            // We must not panic during a `drop`, so we just print the error in a feeble attempt to
            // do the right thing.
            Err(error) => eprintln!("Error while dropping FreshDeployment: {error}"),
        }
    }
}
