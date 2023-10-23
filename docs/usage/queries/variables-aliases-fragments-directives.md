# Use Variables / Aliases / Fragments / Directives in Queries

## Using variables

In order to make a query re-usable, it can be made dynamic by using variables.

**Example:** Fetch an author by their `author_id`:

#### Request

```graphql
query getArticles($author_id: Int!) {
  articles(
    where: { author_id: { _eq: $author_id } }
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
        "id": 15,
        "title": "How to climb Mount Everest"
      },
      {
        "id": 6,
        "title": "How to be successful on broadway"
      }
    ]
  }
}
```

## Using aliases

Aliases can be used to return objects with a different name than their field name. This is especially useful while
fetching the same type of objects with different arguments in the same query.

**Example:** First, fetch all articles. Second, fetch the two top-rated articles. Third, fetch the worst-rated article:

#### Request

```graphql
query getArticles {
  articles {
    title
    rating
  }
  topTwoArticles: articles(
    order_by: {rating: desc},
    limit: 2
  ) {
    title
    rating
  }
  worstArticle: articles(
    order_by: {rating: asc},
    limit: 1
  ) {
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
        "title": "How to climb Mount Everest",
        "rating": 4
      },
      {
        "title": "How to be successful on broadway",
        "rating": 20
      },
      {
        "title": "How to make fajitas",
        "rating": 6
      }
    ],
    "topTwoArticles": [
      {
        "title": "How to be successful on broadway",
        "rating": 20
      },
      {
        "title": "How to make fajitas",
        "rating": 6
      }
    ],
    "worstArticle": [
      {
        "title": "How to climb Mount Everest",
        "rating": 4
      }
    ]
  }
}
```

## Using fragments

Sometimes, queries can get long and confusing. A fragment is a set of fields with any chosen name. This fragment can
then be used to represent the defined set.

**Example:** Creating a fragment for a set of `article` fields (`id` and `title`) and using it in a query:

#### Request

```graphql
fragment articleFields on articles {
  id
  title
}
query getArticles {
  articles {
    ...articleFields
  }
  topTwoArticles: articles(
    order_by: {rating: desc},
    limit: 2
  ) {
    ...articleFields
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
        "title": "How to make fajitas"
      },
      {
        "id": 15,
        "title": "How to climb Mount Everest"
      },
      {
        "id": 6,
        "title": "How to be successful on broadway"
      }
    ],
    "topTwoArticles": [
      {
        "id": 6,
        "title": "How to be successful on broadway"
      },
      {
        "id": 3,
        "title": "How to make fajitas"
      }
    ]
  }
}
```

## Using directives

Directives make it possible to include or skip a field based on a boolean expression passed as a query variable.

### @include(if: Boolean)

With `@include(if: Boolean)`, it is possible to include a field in the query result based on a Boolean expression.

**Example:** The query result includes the field `publisher`, as `$with_publisher` is set to `true`:

#### Request

```graphql
query getArticles($with_publisher: Boolean!) {
  articles {
    title
    publisher @include(if: $with_publisher)
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "title": "How to climb Mount Everest",
        "publisher": "Mountain World"
      },
      {
        "title": "How to be successful on broadway",
        "publisher": "Broadway World"
      },
      {
        "title": "How to make fajitas",
        "publisher": "Fajita World"
      }
    ]
  }
}
```

**Example:** The query result doesn't include the field `publisher`, as `$with_publisher` is set to `false`:

#### Request

```graphql
query getArticles($with_publisher: Boolean!) {
  articles {
    title
    publisher @include(if: $with_publisher)
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "title": "How to climb Mount Everest"
      },
      {
        "title": "How to be successful on broadway"
      },
      {
        "title": "How to make fajitas"
      }
    ]
  }
}
```

### @skip(if: Boolean)

With `@skip(if: Boolean)`, it is possible to exclude (skip) a field in the query result based on a Boolean expression.

**Example:** The query result doesn't include the field `publisher`, as `$with_publisher` is set to `true`:

#### Request

```graphql
query getArticles($with_publisher: Boolean!) {
  articles {
    title
    publisher @skip(if: $with_publisher)
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "title": "How to climb Mount Everest"
      },
      {
        "title": "How to be successful on broadway"
      },
      {
        "title": "How to make fajitas"
      }
    ]
  }
}
```

**Example:** The query result includes the field `publisher`, as `$with_publisher` is set to `false`:

#### Request

```graphql
query getArticles($with_publisher: Boolean!) {
  articles {
    title
    publisher @skip(if: $with_publisher)
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles": [
      {
        "title": "How to climb Mount Everest",
        "publisher": "Mountain World"
      },
      {
        "title": "How to be successful on broadway",
        "publisher": "Broadway World"
      },
      {
        "title": "How to make fajitas",
        "publisher": "Fajita World"
      }
    ]
  }
}
```
