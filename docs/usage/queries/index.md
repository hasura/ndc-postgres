# PostgreSQL GraphQL Queries

PostgreSQL is a powerful relational database system that has been around for over 30 years. It is the database of choice
for many developers and companies around the world.

Hasura has a special relationship with this database and provides the official Hasura PostgreSQL data connector to
interact with it.

Currently in Hasura we support only queries, with mutations and subscriptions coming soon. You can read more about how
to use queries with PostgreSQL and the official data connector in the following sections.

Documentation for other data connectors can be found on the [Connector Hub](https://hasura.io/connector) and in the
repo of each specific connector itself.

The pages below detail how to use queries for PostgreSQL with the default generated GraphQL API fields and values:

- [Simple Queries](./simple-queries.md)
- [Nested Queries](./nested-queries.md)
- [Sort Query Results](./sorting.md)
- [Paginate Query Results](./pagination.md)
- [Multiple Arguments](./multiple-arguments.md)
- [Multiple Queries](./multiple-queries.md)
- [Variables, Aliases, Fragments, Directives](./variables-aliases-fragments-directives.md)
- [Filtering Queries](./filters/index.mdx)
  - [Comparing values](./filters/comparison-operators.mdx)
  - [Boolean expressions](./filters/boolean-operators.mdx)
  - [Text](./filters/text-search-operators.mdx)
  - [Nested objects](./filters/nested-objects.mdx)
