//! Helpers for creating fresh deployments for testing . Use `create_fresh_deployment` to set up a new database and
//! deployment file, and `clean_up_deployment` to remove it again afterwards.
//! It would be great to find a way of implementing these in a more Bracket-esq pattern that
//! automatically takes care of clean up in future.

mod configuration;
mod database;
pub mod helpers;

pub struct FreshDeployment {
    pub db_name: String,
    pub deployment_path: String,
    pub admin_connection_string: String, // for dropping after
}

/// Create a new deployment, pointing to a fresh copy of the database
pub async fn create_fresh_deployment(
    connection_string: &str,
    deployment_path: &str,
) -> FreshDeployment {
    let (db_name, new_connection_string) = database::create_fresh_database(connection_string).await;

    let new_deployment_path = format!("static/temp-deploys/{}.json", db_name);

    configuration::copy_deployment_with_new_postgres_url(
        deployment_path,
        &new_connection_string,
        &new_deployment_path,
    );
    FreshDeployment {
        db_name,
        deployment_path: new_deployment_path,
        admin_connection_string: connection_string.to_string(),
    }
}

/// Remove database created for fresh deployment
pub async fn clean_up_deployment(deployment: FreshDeployment) {
    database::drop_database(&deployment.admin_connection_string, &deployment.db_name).await;
    configuration::delete_deployment(&deployment.deployment_path)
}
