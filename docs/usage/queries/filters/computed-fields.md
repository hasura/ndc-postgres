# PostgreSQL: Filter based on computed fields

## Introduction

You can use computed fields to filter your query results.

For example:

```graphql {2}
query {
  author(where: { full_name: { _ilike: "%bob%" } }) {
    id
    first_name
    last_name
  }
}
```

The behavior of the comparison operators depends on whether the computed fields return scalar type values or set of
table rows.

- In case of scalar type, a row will be returned if the computed field returned scalar value satisfied the defined
  condition.
- In case of table row type, a row will be returned if **any of the returned rows** sastisfy the defined condition.

Let's look at a few use cases based on the above:

## Fetch if the scalar value returned by the computed field satisfies a condition

**Example:**

A computed field `total_marks` defined to a `student` table which computes the total sum of marks obtained from each
subject. Fetch all students whose total marks is above "80":

#### Request

```graphql
query {
  student(where: {total_marks: {_gte: 80}}){
    roll_no
    name
  }
}
```

#### Response

```JSON
{
   "data": {
     "student": [
       {
         "roll_no": 34,
         "name": "Alice"
       },
       {
         "roll_no": 31,
         "name": "Bob"
       }
     ]
   }
}
```

## Fetch if **any** of the returned table rows by the computed field satisfy a condition

**Example:**

A computed field `get_published_articles` defined to a `author` table which returns set of `article` rows published.
Fetch all authors who have atleast a published article in medicine field:

#### Request

```graphql
query {
  author(where: {get_published_articles: {type: {_eq: "medicine"}}}){
    id
    name
  }
}
```

#### Response

```JSON
{
 "data": {
   "author": [
     {
       "id": 3,
       "name": "Alice"
     },
     {
       "id": 5,
       "name": "Bob"
     }
   ]
 }
}
```

## Fetch if aggregate value of the returned table rows by the computed field satisfies a condition

**Example:**

A computed field `get_published_articles` defined to a `author` table which returns set of `article` rows published.
Fetch all authors whose count of published articles is more than 10:

#### Request

```graphql
query {
  author(where: {get_published_articles_aggregate: {count: {_gte: 10}}}){
    id
    name
  }
}
```

#### Response

```JSON
{
 "data": {
   "author": [
     {
       "id": 5,
       "name": "Bob"
     },
     {
       "id": 7,
       "name": "Clarke"
     }
   ]
 }
}
```
