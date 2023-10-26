# Multi-Region Routing with the Native Data Connector for PostgreSQL

Multi-Region Routing is easy with Hasura DDN using our 
[Native Data Connector for PostgreSQL](/connectors/postgresql/index.mdx). With Multi-Region Routing, you can ensure 
that the data is always fetched from the database closest to the user, thus minimizing the latency for the request.

For Multi-Region Routing, you only need postgres databases deployed in (or near) more than one of the [supported
regions](#supported-regions).

> :information_source: You must ensure that the schema for the different PostgresSQL databases are exactly same. If 
> there is any ambiguity between the schemas, then the metadata build would fail.

## Configuration

For Multi-Region Routing, you would have to add configuration for each of the PostgresSQL databases in the metadata
object for 
[`HasuraHubDataConnector`](https://hasura.io/docs/3.0/data-domain-modeling/introduction/#hasura-hub-data-connector).

An example configuration is provided below:

```yaml {7-8,26-27}
kind: HasuraHubDataConnector
version: v1
definition:
  name: db  
  connectorId: hasura/postgres
  connectorConfiguration:
  - region: gcp-europe-west1
    mode: ReadOnly
    configuration:
      version: 1
      metadata: &db-metadata
        tables:
          Album:
            schemaName: public
            tableName: Album
            columns:
              AlbumId:
                name: AlbumId
                type: integer
      aggregateFunctions:
        integer: {}
        text: {}
      connectionUri:
        uri:
          stringValueFromSecret: PG_EUROPE_URL
  - region: gcp-us-east4
    mode: ReadWrite
    configuration:
      version: 1
      metadata: *db-metadata
      aggregateFunctions:
        integer: {}
        text: {}
      connectionUri:
        uri:
          stringValueFromSecret: PG_US_URL
```

For the above configuration, Hasura DDN will route all the write queries (mutations) to the database in the
`gcp-us-east4` region and the read queries (query and subscriptions) to either `gcp-us-east4` or `gcp-europe-west1`
based on the geolocation of the client.

## Supported regions
Currently, Hasura DDN supports the following regions:
- `gcp-asia-south1`
- `gcp-asia-southeast1`
- `gcp-australia-southeast1`
- `gcp-europe-west1`
- `gcp-southamerica-east1`
- `gcp-us-east4`
- `gcp-us-west2`