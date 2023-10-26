# Multiple Queries in a Request

## Execution

If multiple queries are part of the same request, they are executed **sequentially**, the individual responses are
collated and returned together. You can fetch objects of different unrelated types in the same query.

## Run multiple top level queries in the same request

**For example**, fetch a list of `authors` and a list of `articles`:

#### Request

```graphql
query {
  authors(limit: 2) {
    id
    name
  }
  articles(limit: 2) {
    id
    title
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
      }
    ],
    "articles": [
      {
        "id": 1,
        "title": "sit amet"
      },
      {
        "id": 2,
        "title": "a nibh"
      }
    ]
  }
}
```

## Fetch limited results along with data aggregated over all results _(e.g. total count)_ in the same query

Sometimes, some aggregated information on all the data is required along with a subset of data.

E.g. the total count of results can be returned along with a page of results. The count can then be used to calculate
the number of pages based on the limit that is set.

**Example:** Fetch a list of articles where a certain condition is true and get their count. Then limit the number of
articles to return.

#### Request

```graphql
query articles ($where: articles_bool_exp!) {
  articles_aggregate(where: $where) {
    aggregate {
      totalCount: count
    }
  }
  articles (where: $where limit: 4) {
    id
    title
  }
}
```

#### Response

```JSON
{
  "data": {
    "articles_aggregate": {
      "aggregate": {
        "totalCount": 8
      }
    },
    "articles": [
      {
        "id": 33,
        "title": "How to make fajitas"
      },
      {
        "id": 31,
        "title": "How to make fajitas"
      },
      {
        "id": 32,
        "title": "How to make fajitas"
      },
      {
        "id": 2,
        "title": "How to climb mount everest"
      }
    ]
  }
}
```

[//]: # ([//]: # ":::info Caveat")

[//]: # ([//]: #)

[//]: # ([//]:)

[//]: # (  #)

[//]: # (  "If this needs to be done over [subscriptions]&#40;/subscriptions/postgres/index.mdx&#41;, two subscriptions will need to be run")

[//]: # ([//]:)

[//]: # (  #)

[//]: # (  "as Hasura follows the [GraphQL spec]&#40;https://graphql.github.io/graphql-spec/June2018/#sec-Single-root-field&#41; which")

[//]: # ([//]: # "allows for only one root field in a subscription.")

[//]: # ([//]: #)

[//]: # ([//]: # ":::")

