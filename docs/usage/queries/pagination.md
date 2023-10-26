# PostgreSQL: Paginate Query Results

## The **limit** & **offset** arguments

The operators `limit` and `offset` are used for pagination.

`limit` specifies the number of rows to retain from the result set and `offset` determines which slice to retain from
the results.

[//]: # ([//]: # "You can see the complete specification of the `limit` and `offset` arguments in the")

[//]: # ([//]: # "[API reference]&#40;/api-reference/graphql-api/query.mdx#paginationexp&#41;.")

The following are examples of different pagination scenarios:

## Limit results

**Example:** Fetch the first 5 authors from the list of all authors:

#### Request

```graphql
query {
  authors(
    limit: 5
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
        "id": 4,
        "name": "Anjela"
      },
      {
        "id": 5,
        "name": "Amii"
      }
    ]
  }
}
```

## Limit results from an offset

**Example:** Fetch 5 authors from the list of all authors, starting with the 6th one:

#### Request

```graphql
query {
  authors(
    limit: 5,
    offset:5
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
        "id": 6,
        "name": "Corny"
      },
      {
        "id": 7,
        "name": "Berti"
      },
      {
        "id": 8,
        "name": "April"
      },
      {
        "id": 9,
        "name": "Ninnetta"
      },
      {
        "id": 10,
        "name": "Lyndsay"
      }
    ]
  }
}
```

## Limit results in a nested object

**Example:** Fetch a list of authors and a list of their first 2 articles:

#### Request

```graphql
query {
  authors {
    id
    name
    articles (
      limit: 2
      offset: 0
    ) {
      id
      title
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
        "articles": [
          {
            "id": 15,
            "title": "vel dapibus at"
          },
          {
            "id": 16,
            "title": "sem duis aliquam"
          }
        ]
      },
      {
        "id": 2,
        "name": "Beltran",
        "articles": [
          {
            "id": 2,
            "title": "a nibh"
          },
          {
            "id": 9,
            "title": "sit amet"
          }
        ]
      },
      {
        "id": 3,
        "name": "Sidney",
        "articles": [
          {
            "id": 6,
            "title": "sapien ut"
          },
          {
            "id": 11,
            "title": "turpis eget"
          }
        ]
      },
      {
        "id": 4,
        "name": "Anjela",
        "articles": [
          {
            "id": 1,
            "title": "sit amet"
          },
          {
            "id": 3,
            "title": "amet justo morbi"
          }
        ]
      }
    ]
  }
}
```

## Keyset cursor based pagination

Cursors are used to traverse across rows of a dataset. They work by returning a pointer to a specific row which can then
be used to fetch the next batch of data.

Keyset cursors are a column (or a set of columns) of the data that are used as the cursor. The column(s) used as the
cursor must be unique and sequential. This ensures that data is read after a specific row rather than relying on the
position of the row in the dataset as done by `offset`, and that duplicate records are not fetched again.

**For example**, consider the following query to fetch a list of authors with a `where` clause used in place of
`offset`:

#### Request

```graphql
query {
  authors(
    limit: 5,
    where: { id: {_gt: 5} }
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
        "id": 6,
        "name": "Corny"
      },
      {
        "id": 7,
        "name": "Berti"
      },
      {
        "id": 8,
        "name": "April"
      },
      {
        "id": 9,
        "name": "Ninnetta"
      },
      {
        "id": 10,
        "name": "Lyndsay"
      }
    ]
  }
}
```

> :information_source: Because we ran the above example without an `order_by` clause, it is accidental that we 
> received those results. Running a query without an `order_by` clause will return results in an arbitrary order.

Here we are fetching authors where the value of `id` is greater than 5. This will always skip the previously fetched
results which would have been ids 1 to 5, ensuring no duplicate results. Column `id` is acting as the cursor here,
unique and sequential.

The choice of cursor columns depends on the order of the expected results i.e. if the query has an `order_by` clause,
the column(s) used in the `order_by` need to be used as the cursor.

Columns such as `id` (auto-incrementing integer/big integer) or `created_at` (timestamp) are commonly used as cursors
when an order is not explicit, as they should be unique and sequential.

> :information_source: Keyset cursor based pagination using `where` is more performant than using `offset` because we 
> can leverage database indexes on the columns that are being used as cursors.
