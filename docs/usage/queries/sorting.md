# PostgreSQL: Sort Query Results

## The **order_by** argument

Results from your query can be sorted by using the `order_by` argument. The argument can be used to sort nested objects
too.

The sort order (ascending vs. descending) is set by specifying the `Asc` or `Desc` enum value for the column name in the
`order_by` input object, e.g. `{name: Desc}`.

By default, for ascending ordering `null` values are returned at the end of the results and for descending ordering
`null` values are returned at the start of the results. 

The `order_by` argument takes an array of objects to allow sorting by multiple columns.

You can also use nested objects' fields to sort the results. Only columns from object relationships** and **aggregates
from array relationships** can be used for sorting.

The following are example queries for different sorting use cases:

## Sorting objects

**Example:** Fetch a list of authors sorted by their names in an ascending order:

#### Request

```graphql
query {
  authors (
    order_by: {name: Asc}
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
        "id": 5,
        "name": "Amii"
      },
      {
        "id": 4,
        "name": "Anjela"
      },
      {
        "id": 8,
        "name": "April"
      },
      {
        "id": 2,
        "name": "Beltran"
      },
      {
        "id": 7,
        "name": "Berti"
      },
      {
        "id": 6,
        "name": "Corny"
      }
    ]
  }
}
```

## Sorting nested objects

**Example:** Fetch a list of authors sorted by their names with a list of their articles that is sorted by their rating:

#### Request

```graphql
query {
  authors (order_by: {name: Asc}) {
    id
    name
    articles(order_by: {rating: Desc}) {
      id
      title
      rating
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
        "id": 5,
        "name": "Amii",
        "articles": [
          {
            "rating": 5,
            "id": 17,
            "title": "montes nascetur ridiculus"
          },
          {
            "rating": 3,
            "id": 12,
            "title": "volutpat quam pede"
          },
          {
            "rating": 2,
            "id": 4,
            "title": "vestibulum ac est"
          }
        ]
      },
      {
        "id": 4,
        "name": "Anjela",
        "articles": [
          {
            "rating": 4,
            "id": 3,
            "title": "amet justo morbi"
          },
          {
            "rating": 1,
            "id": 1,
            "title": "sit amet"
          }
        ]
      },
      {
        "id": 8,
        "name": "April",
        "articles": [
          {
            "rating": 4,
            "id": 13,
            "title": "vulputate elementum"
          },
          {
            "rating": 2,
            "id": 20,
            "title": "eu nibh"
          }
        ]
      }
    ]
  }
}
```

## Sorting based on nested object's fields

Only **columns from object relationships** and **aggregates from array relationships** can be used for sorting.

### For object relationships

For object relationships only columns can be used for sorting.

**Example:** Fetch a list of articles that are sorted by their author's ids in descending order:

#### Request

```graphql
query {
  articles (
    order_by: {author: {id: Desc}}
  ) {
    id
    rating
    published_on
    author {
      id
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
        "id": 3,
        "title": "Article 3",
        "content": "Sample article content 3",
        "author": {
          "id": 2,
          "name": "Author 2"
        }
      },
      {
        "id": 1,
        "title": "Article 1",
        "content": "Sample article content 1",
        "author": {
          "id": 1,
          "name": "Author 1"
        }
      },
      {
        "id": 2,
        "title": "Article 2",
        "content": "Sample article content 2",
        "author": {
          "id": 1,
          "name": "Author 1"
        }
      }
    ]
  }
}
```

### For array relationships

For array relationships only aggregates can be used for sorting.

**Example:** Fetch a list of authors sorted in descending order of their article count:

#### Request

```graphql
query {
  authors (
    order_by: {
      articles_aggregate: {count: Desc}
    }
  ) {
    id
    name
    articles_aggregate {
      aggregate{
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
        "id": 5,
        "name": "Amii",
        "articles_aggregate":{
          "aggregate": {
            "count": 3
          }
        }
      },
      {
        "id": 4,
        "name": "Anjela",
        "articles_aggregate":{
          "aggregate": {
            "count": 2
          }
        }
      },
      {
        "id": 8,
        "name": "April",
        "articles_aggregate":{
          "aggregate": {
            "count": 2
          }
        }
      }
    ]
  }
}
```

**Example:** Fetch a list of authors sorted in increasing order of their highest article rating:

#### Request

```graphql
query {
  authors(
    order_by: {
      articles_aggregate: {
        max: {rating: Asc}
      }
    }
  ) {
    id
    name
    articles_aggregate {
      aggregate{
        max {rating}
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
        "id": 7,
        "name": "Berti",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": 2
            }
          }
        }
      },
      {
        "id": 2,
        "name": "Beltran",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": 3
            }
          }
        }
      },
      {
        "id": 8,
        "name": "April",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": 4
            }
          }
        }
      },
      {
        "id": 3,
        "name": "Sidney",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": 4
            }
          }
        }
      },
      {
        "id": 5,
        "name": "Amii",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": 5
            }
          }
        }
      },
      {
        "id": 9,
        "name": "Ninnetta",
        "articles_aggregate": {
          "aggregate": {
            "max": {
              "rating": null
            }
          }
        }
      }
    ]
  }
}
```

## Sorting by multiple fields

**Example:** Fetch a list of articles that is sorted by their rating (descending) and then on their published date
(ascending):

#### Request

```graphql
query {
  articles (
    order_by: [
      {rating: Desc},
      {published_on: Asc}
    ]
  ) {
    id
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
        "id": 17,
        "rating": 5,
        "published_on": null
      },
      {
        "id": 7,
        "rating": 4,
        "published_on": "2016-07-09"
      },
      {
        "id": 14,
        "rating": 4,
        "published_on": null
      },
      {
        "id": 3,
        "rating": 4,
        "published_on": "2017-05-26"
      }
    ]
  }
}
```

> :warning: Key order in input object for order_by is not preserved. This means you should only have a single
> key per object, or you may see unexpected behavior.

