# General Architecture of the PostgreSQL Connector

## Query Engine

The query engine's job is to take a `QueryRequest`, which contains information about the query a user would like to run,
translate it to PostgreSQL SQL, execute it against the database, and return the results as a `QueryResponse`.

One place in particular that uses the Query Engine is the `/query` endpoint (defined in the `ndc-hub` repository).

`/query` endpoints receives a `QueryRequest`, and calls the `translate` function from the Query Engine
with it and with the information about the tables tracked in the metadata to receive and `ExecutionPlan`.
It then calls the `execute` function from the Query Engine with the same `ExecutionPlan`
(which then runs it against postgres) and gets back a `QueryResponse` which it can then return to the caller.

API:

```rs
pub fn translate(
    metadata: &metadata::Metadata,
    query_request: models::QueryRequest,
) -> Result<ExecutionPlan, Error>
```

```rs
pub async fn execute(
    pool: &sqlx::PgPool,
    database_info: &DatabaseInfo,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<Bytes, Error> {
```

Note that the `Bytes` returned from this function should be in the format of an ndc-spec
[QueryResponse](https://hasura.github.io/ndc-spec/reference/types.html#queryresponse) represented as JSON.

### Translation

The translation step is essentially side-effect free - we use information from the request, as well as the information
about the metadata to translate the query request into steps to run against the database.

This process is currently found in the [translation/query/](/crates/query-engine/translation/src/translation/query/) directory
and are split to several modules roughly mimicing the query parts as they are specified in the spec. The API
is the following function in the [mod.rs](/crates/query-engine/translation/src/translation/query/mod.rs) file:

```rs
pub fn translate(
    metadata: &metadata::Metadata,
    query_request: models::QueryRequest,
) -> Result<ExecutionPlan, Error>
```

The `translate` function returns a `ExecutionPlan`.

```rs
/// Definition of an execution plan to be run against the database.
pub struct ExecutionPlan<Query> {
    /// Run before the query. Should be a sql::ast in the future.
    pub pre: Vec<sql::string::Statement>,
    /// The query.
    pub query: Query,
    /// Run after the query. Should be a sql::ast in the future.
    pub post: Vec<sql::string::Statement>,
}

/// The query we want to run with some additional information.
pub struct Query {
    /// The root field name of the top-most collection.
    pub root_field: String,
    /// foreach variables.
    pub variables: Option<Vec<BTreeMap<String, serde_json::Value>>>,
    /// The query.
    pub query: sql::ast::Select,
}
```

### SQL AST

We maintain a SQL AST represented as Rust data types in [sql/ast.rs](/crates/query-engine/sql/src/sql/ast.rs).
We implement our own representation because we want more control over this core component of our application,
and we want to implement exactly what we want and not more or less. Other external libraries such as `sqlparser`
do not have the same goals as us, and we'll have to make compromises that will affect our codebase's complexity
and development velocity.

We have a few guidelines for the SQL AST:

#### The SQL AST should mimic PostgreSQL directly

The SQL AST should look like a **subset** of PostgreSQL SQL, and not contain any high-level abstractions, or try to abstract
multiple SQL ASTs. We should implement exactly what we need, and be precise about it.

Should we need a higher-level of abstraction, and additional IR should be constructed that will sit before the SQL AST.

#### Implement what you need and not more

The SQL AST should contain structures we actively use, and not contain structures we don't use.

One such example is window functions - we don't need to include them in the AST currently because we don't have features
that use them from GraphQL.

#### Use sql::helpers to build the AST

Sometimes we'd like a shorthand to build specific repeating patterns,
such as `SELECT coalesce(json_agg(row_to_json(<table_alias>)), '[]') AS <column_alias> FROM <query> as <table_alias>`.
The [sql/helpers.rs](/crates/query-engine/sql/src/sql/helpers.rs) module can come in handy to help
codify certain SQL AST generation patterns. If you end up meeting a repeating long pattern that is used in multiple places,
it might be a good candidate to codify it as a `helpers` function.

### SQL string

The SQL string is a stringify representation of the SQL AST. It can be found in [sql/string.rs](/crates/query-engine/sql/src/sql/string.rs).

We separate the SQL to AST and string representation so we can write transformations and optimizations on the SQL AST.

The SQL string representation should be generated from the SQL AST by pretty printing the result.
The result of converting ([sql/convert.rs](/crates/query-engine/sql/src/sql/convert.rs)) a sql ast to string should produce
a query string that can be run against postgres as a parameterized query, as well as the parameters that are supplied by the user.

Please use the API provided by the `SQL` type. It provides functions for constructing SQL strings in an easy way,
such as appending syntax (like keywords and punctuation), identifiers, and params.
Don't use `append_syntax` for things that are not syntax.

### Query Execution

The query execution receives a pool and a plan, and executes it against postgres.
It then returns the results from the query part back to the caller of the function.
The code can be found in [query.rs](/crates/query-engine/execution/src/query.rs)

```rs
/// Execute a query against postgres.
pub async fn execute(
    pool: &sqlx::PgPool,
    metrics: &metrics::Metrics,
    plan: sql::execution_plan::ExecutionPlan,
) -> Result<Bytes, Error> {
```

Reminder that the `Bytes` returned from this function should be in the format of an ndc-spec
[QueryResponse](https://hasura.github.io/ndc-spec/reference/types.html#queryresponse) represented as JSON.

Since the SQL query we build for PostgreSQL already returns a JSON representing a `QueryResponse`,
We are returning raw bytes as an optimization technique to avoid needlessly serializing the JSON as a `QueryResponse`
and then deserializing again to JSON before sending it back over the wire.

## Patterns and guiding principles

Here are a few ideas we want to maintain and why:

### Optimize for inspectability

One of the most important tools we have to figure out how a program behaves is run it and examine
the way data changes throughout the program. To do so we want to make sure the flow of the program
is easy to follow, and we can examine the relevant data in any given point. Here are a few suggestions:

1. Prefer functions over abstract trait methods - makes jump to definition easier.
2. Annotate data types with `Debug` so that they can be traced, and prefer data shapes that can be `Debug`ged over those that can't.
3. Prefer to encode information in a way that is inspectable at runtime.

### Prefer flexibility over rigidness until knowing better

Abstractions should come up from usage pain points rather than theoretical ideas.
Often we don't know exactly what a good solution looks like in terms of code, and it is better to do a simple thing first and even
duplicate code when in doubt.
Abstracting or extracting duplicate code to a single place too early may lead to rigidness to a codebase before we understand the trade-offs,
so if there's no real necessity (that arises from usage) it might not be worth to "fix" it.

A possible rule of thumb is that creating an abstraction to build a new thing might raise an alarm bell,
and building an abstraction in the middle of building yet another thing using the same pattern might be more appropriate.
Though still, You Might Not Need It.

### Simplify testing and avoid infrastructure code

At this point in time we've settled on a fairly sweet spot for testing, where infrastructure code is very limited and contained in one place.
Since testing can very easily become complex and "another project to maintain", we want to deliberately put limitations to how wildly it can grow,
and contain all infrastructure code to a single module - `tests/common/mod.rs` (in each relevant crate), without infra code in tests.

We do this so that we will notice when it grows too large and requires some explicit and calculated attention.

We would also like, in general, to keep infrastructure code to the required minimum, and not add things we'll need to maintain before using them.

Additionally, making changes or refactors to the codebase should have a clear motivation - it should either enables the development
of something new (that we actually need to do right now/soon), fixes a bug, improves performance, improves documentation,
makes bugs less likely, etc.

### Consider the generated SQL

When working on a feature or fixing a bug, consider the generated SQL first.
What does it currently look like? What would you like it to look like?

Compose a simplified yet runnable example and run it against the database (`just repl-postgres` can be helpful here),
find a query that returns the results you expect, examine edge cases, and then consider the rust implementation of this idea.

### General coding style ideas

- Use meaningful names (not shorthands). No need to skimp on vowels.
- Comment code with intention and reasons when those are not trivial. Comment modules, functions and types with a summary of what they are supposed to do.
  Often writing summary comments helps us understand our code better and where it can be improved.
- Avoid using dummy values. Prefer throwing an error when in doubt.
- Prefer to avoid generics, traits and macros if possible. The majority of functions and types have a single usecase, and the ones that have multiple
  use-cases probably don't have more than a handful of them. Duplicating code is often cheaper than the wrong abstraction, and we can always refactor.
  Simple functions can go a long way.
