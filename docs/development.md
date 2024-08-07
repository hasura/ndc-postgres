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
7. Clone [graphql-engine v3](https://github.com/hasura/graphql-engine#git-checkout-with-only-hasura-v3-engine-code) in a directory near this one,
   and set the `HGE_V3_DIRECTORY` environment variable to the location of the `v3` directory.
   (e.g. `export HGE_V3_DIRECTORY="../graphql-engine/v3"`)

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
     http://localhost:8080/query \
     | jq
   ```

Among the docker containers is a Jaeger instance for tracing/debugging, accessible at http://127.0.0.1:4002.

### Example

1. Run `just dev` (or `just run`)
2. Run `just run-engine`
3. Run `just test-integrated`

## Create a configuration

See [../crates/cli/readme.md](../crates/cli/readme.md).

## Test

To test all supported databases, run `just test`.

### Write a database execution test

1. Create a new file under `crates/tests/tests-common/goldenfiles/<your-test-name>.json`
2. Create a new test in `crates/tests/database-tests/src/<database>/tests/query_tests.rs` that looks like this:
   ```rs
   #[tokio::test]
   async fn select_5() {
       let result = common::test_query("select_5").await;
       insta::assert_json_snapshot!(result);
   }
   ```
3. Run the tests using `just dev` or `just test`
4. Review the results using `cargo insta review`

### Write a SQL translation snapshot test

1. Create a new folder under `crates/query-engine/translation/tests/goldenfiles/<your-test-name>/`
2. Create `request.json` and `tables.json` files in that folder to specify your request
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

You can also run `just dev-citus` and `just dev-cockroach`.

## Profile

### flamegraph

We can produce a flamegraph using `just flamegraph` using [flamegraph-rs](https://github.com/flamegraph-rs/flamegraph).
Follow the installation instructions.

### heaptrack (Linux only)

`just heaptrack-postgres` builds and run `ndc-postgres` using
[heaptrack](https://github.com/KDE/heaptrack). Once the server has started you
can make requests to it, and a `heaptrack....` file will be written in the
root.

This can be opened in the `heaptrack_gui` tool which can be run on Linux or
MacOS.

### valgrind / massif (Linux only)

`just massif-postgres` builds and run `ndc-postgres` using
[valgrind](https://valgrind.org/), storing data in it's `massif` format. You
can investigate these using [massif
visualiser](https://github.com/KDE/massif-visualizer) or (in a much more
limited fashion) using the [online visualiser](http://boutglay.com/massifjs/).

## Benchmark

See [../benchmarks/component/README.md](../benchmarks/component/README.md).

A benchmark history can be viewed [here](https://hasura.github.io/ndc-postgres/dev/bench).

## Testing metrics

We have a Prometheus / Grafana set up in Docker. Run `just open-prometheus` or
`just open-grafana` to start them and navigate to the prometheus or grafana
dashboards respectively.

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
