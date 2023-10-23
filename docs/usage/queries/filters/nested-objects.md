# PostgreSQL: Filter Based on Fields of Nested Objects

## Introduction

You can use the fields of nested objects as well to filter your query results.

For example:

```graphql {2}
query {
  articles(where: { author: { name: { _eq: "Sidney" } } }) {
    id
    title
  }
}
```

The behavior of the comparison operators depends on whether the nested objects are a single object related via an object
relationship or an array of objects related via an array relationship.

- In case of an **object relationship**, a row will be returned if the single nested object satisfies the defined
  condition.
- In case of an **array relationship**, a row will be returned if **any of the nested objects** satisfy the defined
  condition.

:::caution Limitations

**This is only supported for local relationships**, such as relationships between two local database tables. **This is
not supported for remote relationships**, such as remote database relationships or Remote Schema relationships.

:::

Let's look at a few use cases based on the above:

## Fetch if the single nested object defined via an object relationship satisfies a condition

**Example:**

Fetch all articles whose author's name starts with "A":

#### Request

```graphql
{
  articles (
    where: {
      author: {
        name: { _similar: "A%"}
      }
    }
  ) {
    id
    title
    author {
      name
    }
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
        "author": {
          "name": "Anjela"
        }
      },
      {
        "id": 3,
        "title": "amet justo morbi",
        "author": {
          "name": "Anjela"
        }
      },
      {
        "id": 4,
        "title": "vestibulum ac est",
        "author": {
          "name": "Amii"
        }
      },
      {
        "id": 12,
        "title": "volutpat quam pede",
        "author": {
          "name": "Amii"
        }
      },
      {
        "id": 13,
        "title": "vulputate elementum",
        "author": {
          "name": "April"
        }
      }
    ]
  }
}
```

## Fetch if nested object(s) exist/do not exist

You can filter results based on if they have nested objects by checking if any nested objects exist. This can be
achieved by using the expression `{}` which evaluates to `true` if any object exists.

**Example where nested object(s) exist:**

Fetch all authors which have at least one article written by them:

#### Request

```graphql
{
  authors (
    where: {
      articles: {}
    }
  ) {
    id
    name
    articles_aggregate {
      aggregate {
        count
      }
    }
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
        "name": "Justin",
        "articles_aggregate": {
          "aggregate": {
            "count": 2
          }
        }
      },
      {
        "id": 4,
        "name": "Anjela",
        "articles_aggregate": {
          "aggregate": {
            "count": 1
          }
        }
      }
    ]
  }
}
```

**Example where nested object(s) do not exist:**

Fetch all authors which have not written any articles:

#### Request

```graphql
{
  authors (
    where: {
      _not: {
        articles: {}
      }
    }
  ) {
    id
    name
    articles_aggregate {
      aggregate {
        count
      }
    }
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
        "name": "Beltran",
        "articles_aggregate": {
          "aggregate": {
            "count": 0
          }
        }
      },
      {
        "id": 3,
        "name": "Sidney",
        "articles_aggregate": {
          "aggregate": {
            "count": 0
          }
        }
      }
    ]
  }
}
```
