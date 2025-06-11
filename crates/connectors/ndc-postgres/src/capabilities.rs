//! `/capabilities` endpoint for the connector.

use ndc_sdk::models;

/// Get the connector's capabilities.
///
/// This function implements the [capabilities endpoint](https://hasura.github.io/ndc-spec/specification/capabilities.html)
/// from the NDC specification.
pub fn get_capabilities() -> models::Capabilities {
    models::Capabilities {
        query: models::QueryCapabilities {
            aggregates: Some(models::AggregateCapabilities {
                filter_by: None,
                group_by: None,
            }),
            variables: Some(models::LeafCapability {}),
            explain: Some(models::LeafCapability {}),
            exists: models::ExistsCapabilities {
                nested_collections: Some(models::LeafCapability {}),
                named_scopes: None,
                unrelated: None,
                nested_scalar_collections: None,
            },
            nested_fields: models::NestedFieldCapabilities {
                filter_by: Some(models::NestedFieldFilterByCapabilities {
                    nested_arrays: None,
                }),
                order_by: Some(models::LeafCapability {}),
                aggregates: Some(models::LeafCapability {}),
                nested_collections: None,
            },
        },
        mutation: models::MutationCapabilities {
            transactional: Some(models::LeafCapability {}),
            explain: Some(models::LeafCapability {}),
        },
        relationships: Some(models::RelationshipCapabilities {
            relation_comparisons: Some(models::LeafCapability {}),
            order_by_aggregate: Some(models::LeafCapability {}),
            nested: Some(models::NestedRelationshipCapabilities {
                array: Some(models::LeafCapability {}),
                filtering: None,
                ordering: None,
            }),
        }),
        relational_query: None,
        relational_mutation: None,
    }
}
