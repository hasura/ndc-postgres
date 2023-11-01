# Multiple Queries in a Request

## Execution

If multiple queries are part of the same request, they are executed \*sequentially\*\*, the individual responses are
collated and returned together. You can fetch objects of different unrelated types in the same query.

## Run multiple top level queries in the same request

**For example**, fetch a list of `authors` and a list of `articles`:

<GraphiQLIDE
  query={`query {
  authors(limit: 2) {
    id
    name
  }
  articles(limit: 2) {
    id
    title
  }
}`}
  response={`{
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
}`}
/>
