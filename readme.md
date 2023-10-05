# PostgreSQL Native Data Connector

The PostgreSQL Native Data Connector allows for connecting to a PostgreSQL database giving you an instant GraphQL API on top of your PostgreSQL data.
This uses the [Rust Data Connector SDK](https://github.com/hasura/ndc-hub#rusk-sdk) from the [Data connector Hub](https://github.com/hasura/ndc-hub) and implements the [Data Connector Spec](https://github.com/hasura/ndc-spec).

## Production

See the [production guide](./docs/production.md) for details about production setup.

## Development

See the [development guide](./docs/development.md) for details about development workflows, tooling, and code structure.

## Schema Definitions

To see OpenAPI definitions for V1 configuration, `just document-openapi`.
