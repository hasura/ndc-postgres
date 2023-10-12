# PostgreSQL Connector Development

## Prequisites

1. Install [rustup](https://www.rust-lang.org/tools/install)
2. Install additional tools:
   - `cargo install cargo-watch cargo-insta`
3. Install [just](https://github.com/casey/just)
4. Install [Prettier](https://prettier.io/)
5. Install [Docker](https://www.docker.com/)
6. Install protoc. Here are a few options:
   - `brew install protobuf`
   - `apt-get install protobuf-compiler`
   - `dnf install protobuf-compiler`
7. Clone [v3-engine](https://github.com/hasura/v3-engine) in a directory near this one:
   ```
   (cd .. && git clone git@github.com:hasura/v3-engine.git)
   ```

## Code structure and architecture

See [architecture.md](./architecture.md) for an idea of the general structure.

## Compile

```
cargo build
```

## Run

Run the PostgreSQL connector with:

```
just run
```

## Development workflow

1. Start the sample chinook postgres db, compile, run tests, and rerun server on file changes: `just dev`
2. Query the connector via curl:
   ```
   curl -H "Content-Type: application/json" \
     --data "@crates/tests/tests-common/goldenfiles/select_where_variable.json" \
     http://localhost:8100/query \
     | jq
   ```

Among the docker containers is a Jaeger instance for tracing/debugging, accessible at http://127.0.0.1:4002.

### Example

1. Run `just dev` (or `just run`)
2. Run `just run-engine`
3. Connect to GraphiQL at http://localhost:3000 and run a query:
   ```graphql
   query {
     AlbumByID(AlbumId: 35) {
       Title
     }
   }
   ```
   (or `just test-integrated`)

## Test

To test all supported databases, run `just test`.

### Write a database execution test

1. Create a new file under `crates/tests/tests-common/goldenfiles/<your-test-name>.json`
2. Create a new test in `crates/connectors/ndc-postgres/tests/query_tests.rs` that looks like this:
   ```rs
   #[tokio::test]
   async fn select_5() {
       let result = common::test_query("select_5").await;
       insta::assert_json_snapshot!(result);
   }
   ```
3. Run the tests using `just dev`
4. Review the results using `cargo insta review`

### Write a SQL translation snapshot test

1. Create a new folder under `crates/query-engine/translation/tests/goldenfiles/<your-test-name>/`
2. Create `request.json` and `tables.json` files in that folder to specify your
   request
3. Create a new test in `crates/query-engine/translation/tests/tests.rs` that looks like this:
   ```rs
   #[tokio::test]
   async fn select_5() {
       let result = common::test_translation("select_5").await;
       insta::assert_snapshot!(result);
   }
   ```
4. Run the tests using `just dev` for postgres or `just test` for other variants
5. Review the results using `cargo insta review` and accept them

## Debug

See [debugging.md](./debugging.md).

## Other PostgreSQL flavours

You can also run `just dev-citus`, `just dev-cockroach` or `just dev-aurora`.

Aurora runs against a static AWS instance, so you'll need to set the `AURORA_CONNECTION_STRING` environment variable
to a valid connection string.

## Profile

We can produce a flamegraph using `just flamegraph` using [flamegraph-rs](https://github.com/flamegraph-rs/flamegraph).
Follow the installation instructions.

## Benchmark

See [../benchmarks/component/README.md](../benchmarks/component/README.md).

A benchmark history can be viewed [here](https://hasura.github.io/ndc-postgres/dev/bench).

## Testing metrics

We have a Prometheus / Grafana set up in Docker. Run `just start-metrics` to
start them, you can then navigation to `localhost:3001` for Grafana, or
`localhost:9090` for Prometheus.

### Editing Grafana dashboard

The Grafana dashboard is exported and saved in
`metrics/grafana/dashboards/*.json`. To make changes, update the graphs in the
UI, export the JSON file and save it in this folder.

## Linting

Run `just lint` to run clippy linter

run `just lint-apply` to attempt to autofix all linter suggestions

## Formatting

Check your formatting is great with `just format-check`.

Format all Rust code with `just format`.

## Schema Definitions

To see OpenAPI definitions for V1 configuration, `just document-openapi`.
