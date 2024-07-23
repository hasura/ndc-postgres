//! Functions used to create and teardown test databases. Use via helpers in `mod.rs` rather
//! than directly.

use std::fmt::Write;
use std::str::FromStr;

use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor};

/// create a fresh db with a random name, return it's name and connection string
pub async fn create_fresh_database(connection_uri: &str) -> (String, String) {
    let id = uuid::Uuid::new_v4();
    let db_name = format!("temp-{id}");
    let new_connection_string = create_database_copy(connection_uri, &db_name).await;
    (db_name, new_connection_string)
}

/// connect to database with `connection_uri` then create a new DB called `new_db_name`
/// which is a copy of the `chinook_template` database.
async fn create_database_copy(connection_uri: &str, new_db_name: &str) -> String {
    let mut connection = PgConnection::connect(connection_uri).await.unwrap();

    let create_db_sql =
        format!("CREATE DATABASE \"{new_db_name}\" WITH TEMPLATE chinook_template;");

    connection.execute(create_db_sql.as_str()).await.unwrap();

    replace_database_name(connection_uri, new_db_name)
}

/// given a connection string, drop a database `db_name`
pub async fn drop_database(connection_uri: &str, db_name: &str) -> sqlx::Result<()> {
    let mut connection = PgConnection::connect(connection_uri).await?;

    let drop_db_sql = format!("DROP DATABASE IF EXISTS \"{db_name}\" WITH (FORCE)");

    // we don't mind if this fails
    connection.execute(drop_db_sql.as_str()).await?;
    Ok(())
}

// given a connection string, we need to make a new database and return a new connection string
fn replace_database_name(connection_uri: &str, new_db_name: &str) -> String {
    const DEFAULT_PORT: u16 = 5432;

    let config = url::Url::from_str(connection_uri).unwrap();

    let mut output = "postgresql://".to_owned();
    write!(output, "{}", config.username()).unwrap();
    if let Some(password) = config.password() {
        write!(output, ":{password}").unwrap();
    }

    let host = config.host().unwrap().to_string();
    write!(output, "@{host}").unwrap();

    match config.port() {
        None | Some(DEFAULT_PORT) => {}
        Some(port) => {
            write!(output, ":{port:?}").unwrap();
        }
    };

    write!(output, "/{new_db_name}").unwrap();

    output
}

#[test]
fn test_same_db_name() {
    let connection_uri = "postgresql://user:password@internet.com:100/database";
    assert_eq!(
        replace_database_name(connection_uri, "database"),
        connection_uri.to_string()
    );
}

#[test]
fn test_different_db_name() {
    let connection_uri = "postgresql://user:password@internet.com:100/database";
    let expected = "postgresql://user:password@internet.com:100/new-database";

    assert_eq!(
        replace_database_name(connection_uri, "new-database"),
        expected.to_string()
    );
}

#[test]
fn test_different_db_name_no_port() {
    let connection_uri = "postgresql://user:password@internet.com/database";
    let expected = "postgresql://user:password@internet.com/new-database";

    assert_eq!(
        replace_database_name(connection_uri, "new-database"),
        expected.to_string()
    );
}
