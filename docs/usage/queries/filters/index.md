# PostgreSQL: Filter Query Results / Search Queries

## Introduction

Hasura provides a powerful yet simple syntax to filter query results on PostgreSQL. This is useful for building search
queries or filtering data based on some criteria. You can utilize arguments and operators to filter results based on
equality, comparison, pattern matching, etc.

## The **where** argument

You can use the `where` argument in your queries to filter results based on some field’s values (even nested objects'
fields). You can even use multiple filters in the same `where` clause using the `_and` or the `_or` operators.

For example, to fetch data for an author whose name is "Sidney":

```graphql {3}
query {
  authors(where: { name: { _eq: "Sidney" } }) {
    id
    name
  }
}
```

You can also use nested objects' fields to filter rows from a table and also filter the nested objects as well.

For example, to fetch a list of authors who have articles with a rating greater than 4 along with those articles:

```graphql {2,5}
query {
  authors(where: { articles: { rating: { _gt: 4 } } }) {
    id
    name
    articles(where: { rating: { _gt: 4 } }) {
      id
      title
      rating
    }
  }
}
```

Here `_eq` and `_gt` are examples of comparison operators that can be used in the `where` argument to filter on
equality.

## Other Filters:

- [Boolean Operators](./boolean-operators.md)
- [Comparison Operators](./comparison-operators.md)
- [Computed Fields](./computed-fields.md)
- [Nested Objects](./nested-objects.md)
- [Text Search Operators](./text-search-operators.md)

[//]: # ([//]: # "You can see the complete specification of the `where` argument in the")

[//]: # ([//]: # "[API reference]&#40;/api-reference/graphql-api/query.mdx#whereexp&#41;.")

[//]: # (## Supported operators)

[//]: # ()
[//]: # (| Operator                                                                                        | Use case                                                                                                   |)

[//]: # (| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |)

[//]: # (| [Simple Comparison Operators]&#40;/graphql-api/postgresql-queries/filters/comparison-operators.mdx&#41; | Utilize comparison operators to selectively filter results by evaluating a field against a specific value. |)

[//]: # (| [Boolean Operators]&#40;/graphql-api/postgresql-queries/filters/boolean-operators.mdx&#41;              | Employ boolean operators to refine result filters based on logical expressions.                            |)

[//]: # (| [Text Search Operators]&#40;/graphql-api/postgresql-queries/filters/text-search-operators.mdx&#41;      | Apply text search operators to narrow down results according to the presence of text in a field.           |)

[//]: # (| [Nested Objects]&#40;/graphql-api/postgresql-queries/filters/nested-objects.mdx&#41;                    | Navigate and filter results using nested object structures for advanced filtering.                         |)
