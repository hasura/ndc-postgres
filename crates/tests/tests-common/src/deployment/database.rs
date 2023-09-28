//! Functions used to create and teardown test databases. Use via helpers in `mod.rs` rather
//! than directly.
use sqlx::postgres::PgConnection;
use sqlx::{Connection, Executor};
use std::str::FromStr;

/// SQL to run when creating a fresh database
const CHINOOK_SQL: &str = include_str!("../../../../../static/chinook-postgres.sql");

/// create a fresh db with a random name, return it's name and connection string
pub async fn create_fresh_database(connection_string: &str) -> (String, String) {
    let id = uuid::Uuid::new_v4();
    let db_name = format!("temp-{}", id);
    let new_connection_string = populate_database(connection_string, &db_name).await;
    (db_name, new_connection_string)
}

/// connect to database with `connection_string` then create a new empty DB called `new_db_name`
async fn create_empty_database(connection_string: &str, new_db_name: &str) -> String {
    let mut connection = PgConnection::connect(connection_string).await.unwrap();

    let create_db_sql = format!("CREATE DATABASE \"{new_db_name}\"");

    connection.execute(create_db_sql.as_str()).await.unwrap();

    replace_database_name(connection_string, new_db_name)
}

/// given a connection string, drop a database `db_name`
pub async fn drop_database(connection_string: &str, db_name: &str) {
    let mut connection = PgConnection::connect(connection_string).await.unwrap();

    let drop_db_sql = format!("DROP DATABASE IF EXISTS \"{db_name}\" WITH (FORCE)");

    // we don't mind if this fails
    let _ = connection.execute(drop_db_sql.as_str()).await;
    println!("dropped {db_name}")
}

// create and populate new database, returning connection string
async fn populate_database(connection_string: &str, new_db_name: &str) -> String {
    let new_connection_string = create_empty_database(connection_string, new_db_name).await;

    let mut connection = PgConnection::connect(&new_connection_string).await.unwrap();

    connection.execute(CHINOOK_SQL).await.unwrap();

    new_connection_string
}

// given a connection string, we need to make a new database and return a new connection string
fn replace_database_name(connection_string: &str, new_db_name: &str) -> String {
    let config = tokio_postgres::config::Config::from_str(connection_string).unwrap();

    let user = config.get_user().unwrap();
    let password: &str = std::str::from_utf8(config.get_password().unwrap()).unwrap();
    let port = config.get_ports().first().unwrap();
    let default_port: u16 = 5432;

    let port_string = if *port == default_port {
        "".to_string()
    } else {
        format!(":{:?}", port)
    };

    let host = config.get_hosts().first().unwrap();
    let host_string = match host {
        tokio_postgres::config::Host::Tcp(url) => url,
        _ => todo!("pretty print non-tcp addresses"),
    };
    format!("postgresql://{user}:{password}@{host_string}{port_string}/{new_db_name}")
}

#[test]
fn test_same_db_name() {
    let connection_string = "postgresql://user:password@internet.com:100/database";
    assert_eq!(
        replace_database_name(connection_string, "database"),
        connection_string.to_string()
    )
}

#[test]
fn test_different_db_name() {
    let connection_string = "postgresql://user:password@internet.com:100/database";
    let expected = "postgresql://user:password@internet.com:100/new-database";

    assert_eq!(
        replace_database_name(connection_string, "new-database"),
        expected.to_string()
    )
}

#[test]
fn test_different_db_name_no_port() {
    let connection_string = "postgresql://user:password@internet.com/database";
    let expected = "postgresql://user:password@internet.com/new-database";

    assert_eq!(
        replace_database_name(connection_string, "new-database"),
        expected.to_string()
    )
}
