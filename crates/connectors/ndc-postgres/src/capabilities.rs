//! `/capabilities` endpoint for the connector.

use ndc_sdk::models;

/// Get the connector's capabilities.
///
/// This function implements the [capabilities endpoint](https://hasura.github.io/ndc-spec/specification/capabilities.html)
/// from the NDC specification.
pub fn get_capabilities() -> models::CapabilitiesResponse {
    models::CapabilitiesResponse {
        versions: "^0.1.0".into(),
        capabilities: models::Capabilities {
            explain: Some(models::LeafCapability {}),
            query: models::QueryCapabilities {
                aggregates: Some(models::LeafCapability {}),
                variables: Some(models::LeafCapability {}),
            },
            relationships: Some(models::RelationshipCapabilities {
                relation_comparisons: Some(models::LeafCapability {}),
                order_by_aggregate: Some(models::LeafCapability {}),
            }),
        },
    }
}
