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

    // Add ssl client info if present.
    let connect_options = match ssl.client {
        None => connect_options,
        Some(client) => connect_options
            .ssl_client_cert_from_pem(client.certificate)
            .ssl_client_key_from_pem(client.key),
    };
    // Add ssl root certificate if present.
    Ok(match ssl.root_certificate {
        None => connect_options,
        Some(root_certificate) => connect_options.ssl_root_cert_from_pem(root_certificate),
    })
}

/// SSL certificate information.
struct SslInfo {
    client: Option<SslClientInfo>,
    root_certificate: Option<Vec<u8>>,
}
/// SSL client certificate information.
struct SslClientInfo {
    certificate: String,
    key: String,
}

/// Read ssl certificate and key from the environment.
fn read_ssl_info(environment: impl Environment) -> SslInfo {
    // read ssl info
    let certificate = environment.read(&Variable::from("CLIENT_CERT")).ok();
    let key = environment.read(&Variable::from("CLIENT_KEY")).ok();
    let root_certificate = environment
        .read(&Variable::from("ROOT_CERT"))
        .ok()
        .map(|text| text.as_bytes().to_vec());

    let client = match (certificate, key) {
        (Some(certificate), Some(key)) if !certificate.is_empty() && !key.is_empty() => {
            Some(SslClientInfo { certificate, key })
        }
        (Some(certificate), None) if !certificate.is_empty() => {
            tracing::warn!("SSL client certificate set without key. Ignoring.");
            None
        }
        (_, Some(key)) if !key.is_empty() => {
            tracing::warn!("SSL client key set without certificate. Ignoring.");
            None
        }
        _ => None,
    };

    let root_certificate = match root_certificate {
        Some(root_certificate) if !root_certificate.is_empty() => Some(root_certificate),
        _ => None,
    };

    SslInfo {
        client,
        root_certificate,
    }
}
