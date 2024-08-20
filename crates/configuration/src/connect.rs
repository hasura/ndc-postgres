//! Connection settings.

use std::borrow::Cow;

use sqlx::postgres::PgConnectOptions;
use sqlx::ConnectOptions;

use crate::environment::{Environment, Variable};
use crate::values::{ConnectionUri, Secret};

/// Get the connect options from the connection string and environment.
pub fn get_connect_options(
    connection_uri: &ConnectionUri,
    environment: impl Environment,
) -> anyhow::Result<PgConnectOptions> {
    let uri = match &connection_uri {
        ConnectionUri(Secret::Plain(value)) => Cow::Borrowed(value),
        ConnectionUri(Secret::FromEnvironment { variable }) => {
            Cow::Owned(environment.read(variable)?)
        }
    };

    let connect_options = PgConnectOptions::from_url(&uri.parse()?)?;

    let ssl = read_ssl_info(environment);

    // Add ssl info if present.
    Ok(match ssl {
        None => connect_options,
        Some(secret) => connect_options
            .ssl_client_cert_from_pem(secret.certificate)
            .ssl_client_key_from_pem(secret.key)
            .ssl_root_cert_from_pem(secret.root_certificate),
    })
}

/// SSL client certificate information.
struct SslClientInfo {
    certificate: String,
    key: String,
    root_certificate: Vec<u8>,
}

/// Read ssl certificate and key from the environment.
fn read_ssl_info(environment: impl Environment) -> Option<SslClientInfo> {
    // read ssl info
    let certificate = environment.read(&Variable::from("CLIENT_CERT")).ok();
    let key = environment.read(&Variable::from("CLIENT_KEY")).ok();
    let root_certificate = environment
        .read(&Variable::from("ROOT_CERT"))
        .ok()
        .map(|text| text.as_bytes().to_vec());

    match (certificate, key, root_certificate) {
        (Some(certificate), Some(key), Some(root_certificate))
            if !certificate.is_empty() && !key.is_empty() && !root_certificate.is_empty() =>
        {
            Some(SslClientInfo {
                certificate,
                key,
                root_certificate,
            })
        }
        _ => None,
    }
}
