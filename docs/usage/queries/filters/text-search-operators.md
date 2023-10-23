# PostgreSQL: Filter by Text

## Introduction

The `_like`, `_nlike`, `_ilike`, `_nilike`, `_similar`, `_nsimilar`, `_regex`, `_nregex`, `_iregex`, `_niregex`
operators are used for pattern matching on string/text fields.

[//]: # ([//]: # "For more details on text search operators and PostgreSQL equivalents, refer to the")

[//]: # ([//]: # "[API reference]&#40;/api-reference/graphql-api/query.mdx#text-operators&#41;.")

## _like

Fetch a list of articles whose titles contain the word “amet”:

#### Request

```graphql
query {
  articles(
    where: {title: {_like: "%amet%"}}
  ) {
    id
    title
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 1,
        "title": "sit amet"
      },
      {
        "id": 3,
        "title": "amet justo morbi"
      },
      {
        "id": 9,
        "title": "sit amet"
      }
    ]
  }
}
```

## _ilike

This query will return all users whose name contains the string "john", regardless of case.

#### Request

```graphql
query {
  users(where: { name: { _ilike: "%john%" } }) {
    id
    name
  }
}
```

#### Response

```JSON
{
    "data": {
      "users": [
        {
          "id": 1,
          "name": "John Doe"
        },
        {
          "id": 2,
          "name": "John Smith"
        }
      ]
  }
```

## _nilike

This query would return all users whose name does not contain the string "John".

#### Request

```graphql
query {
  users(where: { name: { _nilike: "%John%" } }) {
    name
  }
}
```

#### Response

```JSON
{
    "data": {
      "users": [
        {
          "name": "Jane Doe"
        },
        {
          "name": "Jane Smith"
        }
      ]
  }
```

:::info Note

`_like` is case-sensitive. Use `_ilike` for case-insensitive search.

:::

## _similar

Fetch a list of authors whose names begin with A or C:

#### Request

```graphql
query {
  authors(
    where: {name: {_similar: "(A|C)%"}}
  ) {
    id
    name
  }
}
```

#### Response

```JSON
{
  "data": {
    "authors": [
      {
        "id": 4,
        "name": "Anjela"
      },
      {
        "id": 5,
        "name": "Amii"
      },
      {
        "id": 6,
        "name": "Corny"
      },
      {
        "id": 8,
        "name": "April"
      }
    ]
  }
}
```

## _nsimilar

Fetch a list of authors whose names do not begin with A or C:

#### Request

```graphql
query {
  authors(
    where: {name: {_nsimilar: "(A|C)%"}}
  ) {
    id
    name
  }
}
```

#### Response

```JSON
{
  "data": {
    "authors": [
      {
        "id": 1,
        "name": "Justin"
      },
      {
        "id": 2,
        "name": "Beltran"
      },
      {
        "id": 3,
        "name": "Sidney"
      },
      {
        "id": 7,
        "name": "Dorothy"
      }
    ]
  }
```

:::info Note

`_similar` and `_nsimilar` are case-sensitive.

:::

## _regex

Fetch a list of articles whose titles match the regex `[ae]met`:

#### Request

```graphql
query {
  articles(
    where: {title: {_regex: "[ae]met"}}
  ) {
    id
    title
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 1,
        "title": "sit amet"
      },
      {
        "id": 3,
        "title": "cremet justo morbi"
      },
      {
        "id": 9,
        "title": "sit ametist"
      }
    ]
  }
}
```

## _iregex

This query will return all users whose name matches the regular expression `/^joh?n$/i`, which matches "John" and "Jon".

#### Request

```graphql
query {
  users(where: { name: { _iregex: "/^joh?n$/i" } }) {
    id
    name
  }
}
```

#### Response

```JSON
{
    "data": {
    "users": [
      {
        "id": 1,
        "name": "John Doe"
      },
      {
        "id": 2,
        "name": "Jon Smith"
      }
    ]
  }
```

## _nregex

The _nregex operator in this GraphQL query is a negated regular expression filter that matches all users whose names do
not start with the letter "J".

#### Request

```graphql
query {
  users(where: { name: { _nregex: "/^J/" } }) {
    id
    name
  }
}
```

#### Response

```JSON
{
    "data": {
      "users": [
        {
          "id": 3,
          "name": "Tom Smith"
        },
        {
          "id": 4,
          "name": "Alan Doe"
        }
      ]
  }
```

:::info Note

`_regex` is case-sensitive. Use `_iregex` for case-insensitive search.

:::

:::info Note

`regex` operators are supported in in `v2.0.0` and above

:::
