# Query translation

Query translation is composed of three important components:

1. Metadata - this includes information about the database, native queries, columns, etc. It comes from the ndc-postgres configuration which in turn is generated using database introspection.
2. SQL AST - this includes the structure of SQL queries that we generate as part of the translation process.
3. Translation step - which we will talk about here.

The translation step essentially takes the metadata (ndc-postgres configuration) and an ndc-spec query request and generates an SQL execution plan to run against the database.

The best way to gain some intuition regarding the process is to look at the finished product, which we can do by looking at translation tests.

Let's look at an example request. In `request.json` we'll find the query request, and in `configuration.json` we'll find the configuration.

This query requests a fetching the name of tracks for each album for each artist.
Notice how relationship definitions is a field of the request and not part of the metadata.

Looking at the metadata, we'll find a table, `Album`, as well as the relevant types defined in the metadata. Remember - the ndc-postgres configuration is the source of knowledge of everything, including types and functions.

Looking at the generated SQL we can see the following information:

```sql
SELECT
  -- An ndc-spec QueryResult returns a row for each variable set.
  -- If there are no variables, only a single row in the array will be returned.
  --
  -- This row contains up-to 3 fields: `rows`, `aggregates` and `groups`.
  -- This part converts each row returned from the query and converts it to json.
  coalesce(json_agg(row_to_json("%3_universe")), '[]') AS "universe"
FROM
  (
    SELECT
      *
    FROM
      -- Everything here is the "rows" part of the query.
      (
        -- We convert each row to json and aggregate them into a json array.
        -- We name it `rows` because we return the fields selection.
        SELECT
          coalesce(json_agg(row_to_json("%4_rows")), '[]') AS "rows"
        FROM
          -- We select the relevant fields and include the filtering, sorting, etc.
          (
            SELECT
              "%0_Album"."Title" AS "Title"  -- Field selection
            FROM
              "public"."Album" AS "%0_Album" -- Collection
            LIMIT
              5    -- Limit
            OFFSET
              3    -- Offset
          ) AS "%4_rows"
      ) AS "%4_rows"
      CROSS JOIN (
        -- Everything here is the "aggregates" part of the query.
        SELECT
          coalesce(row_to_json("%5_aggregates"), '[]') AS "aggregates"
        FROM
          (
            SELECT
              COUNT(*) AS "how_many_albums" -- Aggregation
            FROM
              -- The query
              (
                SELECT
                  "%1_Album".*
                FROM
                  "public"."Album" AS "%1_Album"
                LIMIT
                  5     -- Same limit
                OFFSET
                  3     -- Same offset
              ) AS "%2_Album"
          ) AS "%5_aggregates"
      ) AS "%5_aggregates"
  ) AS "%3_universe";
```

From looking at this generated SQL, we already see the general structure of the SQL:

1. We have subqueries for each one of the `rows`, `aggregates` and `groups` fields.
2. We join these subqueries and then convert them to json.
3. we write a fairly straightforward query, then convert the rows to json, and aggregate them in a json array.

(We'll later see that much of the complexity arises from relationship)

When looking at the entry code in the `mod.rs` function `translate`, we can recognize this structure if we squint:

1. We set up some environment and state.
2. We `root::translate_query` the `rows` and `aggregates` part.
3. We wrap the result in the universe/rows/aggregates json parts
4. We normalize the SQL AST.
5. We wrap those in an execution plan.

```sh
crates/query-engine/translation/src/translation
├── error.rs
├── helpers.rs
├── mod.rs
├── mutation
│       └── ...
└── query
    ├── aggregates.rs
    ├── fields.rs
    ├── filtering.rs
    ├── mod.rs
    ├── native_queries.rs
    ├── relationships.rs
    ├── root.rs
    ├── sorting.rs
    └── values.rs
```
