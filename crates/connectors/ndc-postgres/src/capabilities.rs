//! `/capabilities` endpoint for the connector.

use ndc_sdk::models;

/// Get the connector's capabilities.
///
/// This function implements the [capabilities endpoint](https://hasura.github.io/ndc-spec/specification/capabilities.html)
/// from the NDC specification.
pub fn get_capabilities() -> models::CapabilitiesResponse {
    let empty = serde_json::to_value(()).unwrap();
    models::CapabilitiesResponse {
        versions: "^0.1.0".into(),
        capabilities: models::Capabilities {
            explain: Some(empty.clone()),
            query: Some(models::QueryCapabilities {
                foreach: Some(empty.clone()),
                order_by_aggregate: Some(empty.clone()),
                relation_comparisons: Some(empty.clone()),
            }),
            relationships: Some(empty),
            mutations: None,
        },
    }
}
