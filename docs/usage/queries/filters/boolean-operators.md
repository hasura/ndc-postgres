# PostgreSQL: Filter by Boolean Expressions

## Filter based on failure of some criteria (_not)

The `_not` operator can be used to fetch results for which some condition does not hold true. i.e. to invert the filter
set for a condition.

**Example: _not**

Fetch all authors who don't have any published articles:

#### Request

```graphql
{
  authors(
    where: {
      _not: {
        articles: { is_published: {_eq: true} }
      }
    }) {
    id
    name
    articles {
      title
      is_published
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
        "id": 7,
        "name": "Berti",
        "articles": [
          {
            "title": "ipsum primis in",
            "is_published": false
          }
        ]
      },
      {
        "id": 9,
        "name": "Ninnetta",
        "articles": []
      },
      {
        "id": 10,
        "name": "Lyndsay",
        "articles": [
          {
            "title": "dui proin leo",
            "is_published": false
          }
        ]
      }
    ]
  }
}
```

## Using multiple filters in the same query (_and, _or)

You can group multiple parameters in the same `where` argument using the `_and` or the `_or` operators to filter results
based on more than one criteria.

:::info Note

You can use the `_or` and `_and` operators along with the `_not` operator to create arbitrarily complex boolean
expressions involving multiple filtering criteria.

:::

**Example: _and**

Fetch a list of articles published in a specific time-frame (for example: in year 2017):

#### Request

```graphql
query {
  articles (
    where: {
      _and: [
        { published_on: {_gte: "2017-01-01"}},
        { published_on: {_lte: "2017-12-31"}}
      ]
    }
  )
  {
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
        "id": 3,
        "title": "amet justo morbi",
        "published_on": "2017-05-26"
      },
      {
        "id": 4,
        "title": "vestibulum ac est",
        "published_on": "2017-03-05"
      },
      {
        "id": 9,
        "title": "sit amet",
        "published_on": "2017-05-16"
      }
    ]
  }
}
```

:::info Note

Certain `_and` expressions can be expressed in a simpler format using some syntactic sugar.

[//]: # ([//]: # "See the [API reference]&#40;/api-reference/graphql-api/query.mdx#andexp&#41; for more details.")

:::

**Example: _or**

Fetch a list of articles rated more than 4 or published after "01/01/2018":

#### Request

```graphql
query {
  articles (
    where: {
      _or: [
        {rating: {_gte: 4}},
        {published_on: {_gte: "2018-01-01"}}
      ]
    }
  )
  {
    id
    title
    rating
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
        "rating": 3,
        "published_on": "2018-06-10"
      },
      {
        "id": 3,
        "title": "amet justo morbi",
        "rating": 4,
        "published_on": "2017-05-26"
      },
      {
        "id": 6,
        "title": "sapien ut",
        "rating": 1,
        "published_on": "2018-01-08"
      },
      {
        "id": 7,
        "title": "nisl duis ac",
        "rating": 4,
        "published_on": "2016-07-09"
      }
    ]
  }
}
```

[//]: # ([//]: # ":::info Note")

[//]: # ([//]: #)

[//]: # ([//]:)

[//]: # (  #)

[//]: # (  "The `_or` operator expects an array of expressions as input. If an object is passed as input it will behave like the")

[//]: # ([//]: # "`_and` operator as explained in the [API reference]&#40;/api-reference/graphql-api/query.mdx#orexp&#41;")

[//]: # ([//]: #)

[//]: # ([//]: # ":::")
