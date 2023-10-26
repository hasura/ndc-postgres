# PostgreSQL Simple Object Queries

## Introduction

You can fetch a single node or multiple nodes of the same type using a simple object query.

## Fetch a list of objects

**Example:** Fetch a list of authors:

#### Request:
```graphql
query {
  authors {
    id
    name
  }
}
```

#### Response:
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
        "id": 4,
        "name": "Anjela"
      }
    ]
  }
}
```



## Fetch an object using its primary key

**Example:** Fetch an author using their primary key:

#### Request

```graphql
query {
  authors_by_pk(id: 1) {
    id
    name
  }
}
```

#### Response

```JSON
{
  "data": {
    "authors_by_pk": {
      "id": 1,
      "name": "Justin"
    }
  }
}
```

## Fetch list of objects with pagination

**Example:** Fetch 2 articles after removing the 1st article from the result set.

#### Request

```graphql
query {
  ArticleMany(limit: 2, offset: 1) {
    title
    article_id
  }
}
```

#### Response

```JSON
{
  "data": {
    "ArticleMany": [
      {
        "article_id": 2,
        "title": "Why Functional Programming Matters"
      },
      {
        "article_id": 3,
        "title": "The Design And Implementation Of Programming Languages"
      }
    ]
  }
}
```

> :warning: Without an `order_by` in `limit` queries, the results may be unpredictable.

## Fetch list of objects with filtering

**Example:** Fetch a list of articles whose title contains the word "The":

#### Request

```graphql
query {
  ArticleMany(where: {title: {_like: "The"}}) {
    title
    article_id
  }
}
```

#### Response

```JSON
{
  "data": {
    "ArticleMany": [
      {
        "article_id": 1,
        "title": "The Next 700 Programming Languages"
      },
      {
        "article_id": 3,
        "title": "The Design And Implementation Of Programming Languages"
      }
    ]
  }
}
```

## Fetch list of objects with sorting

**Example:** Fetch a list of articles with `article_id` in descending order:

#### Request

```graphql
query {
  ArticleMany(order_by: {article_id: Desc}) {
    title
    article_id
  }
}
```

#### Response

```JSON
{
  "data": {
    "ArticleMany": [
      {
        "article_id": 3,
        "title": "The Design And Implementation Of Programming Languages"
      },
      {
        "article_id": 2,
        "title": "Why Functional Programming Matters"
      },
      {
        "article_id": 1,
        "title": "The Next 700 Programming Languages"
      }
    ]
  }
}
```

## Fetch objects using model arguments

> :information_source: Fetching objects using model arguments is only supported for native queries.

**Example:** Fetch the articles for the given `author_id`:

#### Request

```graphql
query {
  ArticlesByAuthorMany(args: {author_id: 2}) {
      article_id
      title
    }
}
```

#### Response

```JSON
{
  "data": [
    {
      "article_id": 2,
      "title": "Why Functional Programming Matters"
    },
    {
      "article_id": 3,
      "title": "The Design And Implementation Of Programming Languages"
    }
  ]
}
```
