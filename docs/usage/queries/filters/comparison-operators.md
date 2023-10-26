# PostgreSQL: Filter by Comparing Values

## Introduction

Comparison operators are used to compare values of the same type. For example, to compare two numbers, two strings, two
dates, etc.

## Equality operators (_eq, _neq)

The `_eq` (equal to) or the `_neq` (not equal to) operators are compatible with any PostgreSQL type other than `json` or
`jsonB` (like `Integer`, `Float`, `Double`, `Text`, `Boolean`, `Date`/`Time`/`Timestamp`, etc.).

[//]: # ([//]: # "For more details on equality operators and PostgreSQL equivalents, refer to the")
[//]: # ([//]: # "[API reference]&#40;/api-reference/graphql-api/query.mdx#generic-operators&#41;.")

The following are examples of using the equality operators on different types.

**Example: Integer (works with Double, Float, Numeric, etc.)**

Fetch data about an author whose `id` _(an integer field)_ is equal to 3:

#### Request

```graphql
query {
  authors(
    where: {id: {_eq: 3}}
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
        "id": 3,
        "name": "Sidney"
      }
    ]
  }
}
```

**Example: String or Text**

Fetch a list of authors with `name` _(a text field)_ as "Sidney":

#### Request

```graphql
query {
  authors(
    where: {name: {_eq: "Sidney"}}
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
        "id": 3,
        "name": "Sidney"
      }
    ]
  }
}
```

**Example: Boolean**

Fetch a list of articles that have not been published (`is_published` is a boolean field):

#### Request

```graphql
query {
  articles(
    where: {is_published: {_eq: false}}
  ) {
    id
    title
    is_published
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 5,
        "title": "ut blandit",
        "is_published": false
      },
      {
        "id": 8,
        "title": "donec semper sapien",
        "is_published": false
      },
      {
        "id": 10,
        "title": "dui proin leo",
        "is_published": false
      },
      {
        "id": 14,
        "title": "congue etiam justo",
        "is_published": false
      }
    ]
  }
}
```

**Example: Date (works with Time, Timezone, etc.)**

Fetch a list of articles that were published on a certain date (`published_on` is a Date field):

#### Request

```graphql
query {
  articles(
    where: {published_on: {_eq: "2017-05-26"}}
  ) {
    id
    title
    published_on
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 3,
        "title": "amet justo morbi",
        "published_on": "2017-05-26"
      }
    ]
  }
}
```

**Example: Integer (works with Integer, Float, Double, etc.)**

Fetch a list of users whose age is _not_ 30 (`age` is an Integer field):

#### Request

```graphql
query {
  users(where: { age: { _neq: 30 } }) {
    id
    name
    age
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
        "name": "John",
        "age": 20
      },
      {
        "id": 2,
        "name": "Jane",
        "age": 25
      },
      {
        "id": 4,
        "name": "Bob",
        "age": 40
      }
    ]
  }
```

### info Caveat for "null" values

By design, the `_eq` or `_neq` operators will not return rows with `null` values.

To also return rows with `null` values, the `_is_null` operator needs to be used along with these joined by the `_or`
operator.

For example, to fetch a list of articles where the `is_published` column is either `false` or `null`:

#### Request

```graphql
query {
  articles (
    where: {
      _or: [
        {is_published: {_eq: false}},
        {is_published: {_is_null: true}}
      ]
    }
  )
  {
    id
    title
    is_published
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
        "title": "Robben Island",
        "is_published": false
      },
      {
        "id": 2,
        "title": "The Life of Matthias",
        "is_published": false
      },
      {
        "id": 3,
        "title": "All about Hasura",
        "is_published": null
      }
    ]
  }
}
```

## Greater than or less than operators (_gt, _lt, _gte, _lte)

The `_gt` (greater than), `_lt` (less than), `_gte` (greater than or equal to), `_lte` (less than or equal to) operators
are compatible with any PostgreSQL type other than `json` or `jsonB` (like `Integer`, `Float`, `Double`, `Text`,
`Boolean`, `Date`/`Time`/`Timestamp`, etc.).

[//]: # ([//]: # "For more details on greater than or less than operators and PostgreSQL equivalents, refer to the")

[//]: # ([//]: # "[API reference]&#40;/api-reference/graphql-api/query.mdx#generic-operators&#41;.")

The following are examples of using these operators on different types:

**Example: Integer (works with Double, Float, Numeric, etc.)**

This query retrieves all users whose age is less than 30. The `_lt` operator is a comparison operator that means "less
than". It is used to filter records based on a specified value.

#### Request

```graphql
query {
  users(where: { age: { _lt: 30 }}) {
    id
    name
    age
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
        "name": "John",
        "age": 25
      },
      {
        "id": 2,
        "name": "Jane",
        "age": 28
      }
    ]
  }
}
```

**Example: String or Text**

Fetch a list of authors whose names begin with M or any letter that follows M _(essentially, a filter based on a
dictionary sort)_:

#### Request

```graphql
query {
  authors(
    where: {name: {_gt: "M"}}
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
        "id": 3,
        "name": "Sidney"
      },
      {
        "id": 9,
        "name": "Ninnetta"
      }
    ]
  }
}
```

**Example: Integer (works with Double, Float, etc.)**

Fetch a list of all products with a price less than or equal to 10.

#### Request

```graphql
query {
  products(where: { price: { _lte: 10 } }) {
    name
    price
  }
}
```

#### Response

```JSON
{
  "data": {
    "products": [
      {
        "name": "Bread",
        "price": 2.5
      },
      {
        "name": "Milk",
        "price": 3.5
      },
      {
        "name": "Eggs",
        "price": 4.5
      }
    ]
  }
}
```

**Example: Integer (works with Double, Float, etc.)**

Fetch a list of articles rated 4 or more (`rating` is an integer field):

#### Request

```graphql
query {
  articles(
    where: {rating: {_gte: 4}}
  ) {
    id
    title
    rating
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 3,
        "title": "amet justo morbi",
        "rating": 4
      },
      {
        "id": 7,
        "title": "nisl duis ac",
        "rating": 4
      },
      {
        "id": 17,
        "title": "montes nascetur ridiculus",
        "rating": 5
      }
    ]
  }
}
```

**Example: Date (works with Time, Timezone, etc.)**

Fetch a list of articles that were published on or after date "01/01/2018":

#### Request

```graphql
query {
  articles(
    where: {published_on: {_gte: "2018-01-01"}}
  ) {
    id
    title
    published_on
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "id": 2,
        "title": "a nibh",
        "published_on": "2018-06-10"
      },
      {
        "id": 6,
        "title": "sapien ut",
        "published_on": "2018-01-08"
      },
      {
        "id": 13,
        "title": "vulputate elementum",
        "published_on": "2018-03-10"
      },
      {
        "id": 15,
        "title": "vel dapibus at",
        "published_on": "2018-01-02"
      }
    ]
  }
}
```

## List based search operators (_in, _nin)

The `_in` (in a list) operator is used to compare field values to a list of values. They are
compatible with any PostgreSQL type other than `json` or `jsonB` (like `Integer`, `Float`, `Double`, `Text`, `Boolean`,
`Date`/`Time`/`Timestamp`, etc.).

The following are examples of using these operators on different types:

**Example: Integer (works with Double, Float, etc.)**

Fetch a list of articles rated 1, 3 or 5:

#### Request

```graphql
query {
  articles(
    where: {rating: {_in: [1,3,5]}}
  ) {
    id
    title
    rating
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
        "title": "sit amet",
        "rating": 1
      },
      {
        "id": 2,
        "title": "a nibh",
        "rating": 3
      },
      {
        "id": 6,
        "title": "sapien ut",
        "rating": 1
      },
      {
        "id": 17,
        "title": "montes nascetur ridiculus",
        "rating": 5
      }
    ]
  }
}
```

**Example: String or Text**

Using an additional `_not` to fetch a list of those authors whose names are NOT part of a list:

#### Request

```graphql
query {
  authors(
    where: {name: {_not: {_in: ["Justin","Sidney","April"]}}}
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
        "id": 2,
        "name": "Beltran"
      },
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
      }
    ]
  }
}
```

## Filter or check for null values (_is_null)

Checking for null values can be achieved using the `_is_null` operator.

**Example: Filter null values in a field**

Fetch a list of articles that have a value in the `published_on` field:

#### Request

```graphql
query {
  articles(
    where: {published_on: {_is_null: false}}
  ) {
    id
    title
    published_on
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
        "title": "sit amet",
        "published_on": "2017-08-09"
      },
      {
        "id": 2,
        "title": "a nibh",
        "published_on": "2018-06-10"
      },
      {
        "id": 3,
        "title": "amet justo morbi",
        "published_on": "2017-05-26"
      },
      {
        "id": 4,
        "title": "vestibulum ac est",
        "published_on": "2017-03-05"
      }
    ]
  }
}
```
