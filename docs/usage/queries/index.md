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
- [Multiple Arguments](./multiple-arguments.md)
- [Multiple Queries](./multiple-queries.md)
- [Pagination](./pagination.md)
- [Sorting](./sorting.md)
- [Variables, Aliases, Fragments & Directives](./variables-aliases-fragments-directives.md)
- [Filters](./filters/index.md)
  - [Boolean Operators](./filters/boolean-operators.md)
  - [Comparison Operators](./filters/comparison-operators.md)
  - [Computed Fields](./filters/computed-fields.md)
  - [Nested Objects](./filters/nested-objects.md)
  - [Text Search Operators](./filters/text-search-operators.md)
