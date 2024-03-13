set shell := ["bash", "-c"]

# Allow scripts to read the arguments as shell arguments.
# This allows us to handle quoted arguments.
set positional-arguments

HGE_V3_DIR := env_var_or_default('HGE_V3_DIRECTORY', '../v3-engine')

CONNECTOR_IMAGE_NAME := "ghcr.io/hasura/ndc-postgres"
CONNECTOR_IMAGE_TAG := "dev"
CONNECTOR_IMAGE := CONNECTOR_IMAGE_NAME + ":" + CONNECTOR_IMAGE_TAG

POSTGRESQL_CONNECTION_URI := "postgresql://postgres:password@localhost:64002"
POSTGRESQL_EMPTY_CONNECTION_URI := "postgresql://postgres:password@localhost:64002/empty"
POSTGRES_V3_CHINOOK_NDC_METADATA := "static/postgres/v3-chinook-ndc-metadata"
POSTGRES_BROKEN_QUERIES_NDC_METADATA := "static/postgres/broken-queries-ndc-metadata"

COCKROACH_CONNECTION_URI := "postgresql://postgres:password@localhost:64003/defaultdb"
COCKROACH_V3_CHINOOK_NDC_METADATA := "static/cockroach/v3-chinook-ndc-metadata"

CITUS_CONNECTION_URI := "postgresql://postgres:password@localhost:64004?sslmode=disable"
CITUS_V3_CHINOOK_NDC_METADATA := "static/citus/v3-chinook-ndc-metadata"

YUGABYTE_CONNECTION_URI := "postgresql://yugabyte@localhost:64005"
YUGABYTE_V3_CHINOOK_NDC_METADATA := "static/yugabyte/v3-chinook-ndc-metadata"

AURORA_CONNECTION_URI := env_var_or_default('AURORA_CONNECTION_URI', '')
AURORA_V3_CHINOOK_NDC_METADATA := "static/aurora/v3-chinook-ndc-metadata"

# Notes:
# * Building Docker images will not work on macOS.
#   You can use `main` instead, by running:
#     just --set CONNECTOR_IMAGE_TAG dev-main <targets>

# check everything
check: format-check find-unused-dependencies build lint test

# run the connector
run: start-dependencies
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    cargo run --bin ndc-postgres --release -- serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# watch the code, then test and re-run on changes
dev: start-dependencies
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-sql -p query-engine-translation -p databases-tests --features postgres' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}}'

# watch the code, then test and re-run on changes
dev-cockroach: start-dependencies
  CONNECTION_URI='{{ COCKROACH_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=cockroach-ndc \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-translation -p databases-tests --features cockroach' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{COCKROACH_V3_CHINOOK_NDC_METADATA}}'

# watch the code, then test and re-run on changes
dev-citus: start-dependencies
  CONNECTION_URI='{{ CITUS_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=citus-ndc \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-translation -p databases-tests --features citus' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{CITUS_V3_CHINOOK_NDC_METADATA}}'

# Generate the OpenAPI Schema document for the configuration.
document-openapi:
  RUST_LOG=INFO cargo run --bin openapi-generator

# Run postgres, testing against external DBs like Aurora
test-other-dbs: start-dependencies
  CONNECTION_URI='{{ AURORA_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p databases-tests --all-features' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{AURORA_V3_CHINOOK_NDC_METADATA}}'

# watch the code, and re-run on changes
watch-run: start-dependencies
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=DEBUG \
    cargo watch -i "tests/snapshots/*" \
    -c \
    -x 'run --bin ndc-postgres -- serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}}'

# Run ndc-postgres with rust-gdb.
debug: start-dependencies
  cargo build
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=DEBUG \
    rust-gdb --args target/debug/ndc-postgres serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}}

# Run the server and produce a flamegraph profile
flamegraph: start-dependencies
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  CARGO_PROFILE_RELEASE_DEBUG=true \
  RUST_LOG=DEBUG \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=postgres-ndc \
    cargo flamegraph --bin ndc-postgres -- \
    serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# build everything
build:
  cargo build --all-targets --all-features

# build and open docs
doc:
  cargo doc --lib --no-deps --open

# run all tests
test *args: start-dependencies
  #!/usr/bin/env bash

  # choose a test runner
  if command -v cargo-nextest > /dev/null; then
    TEST_COMMAND=(cargo nextest run --no-fail-fast)
  else
    TEST_COMMAND=(cargo test --no-fail-fast)
  fi

  # enable the "aurora" feature if the connection string is set
  if [[ -n '{{AURORA_CONNECTION_URI}}' ]]; then
    TEST_COMMAND+=(--features aurora)
  else
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Skipping the Aurora tests because the connection string is unset."
  fi

  # enable the "yugabyte" feature if running Linux
  if [[ "$(uname -m)" == 'x86_64' ]]; then
    TEST_COMMAND+=(--features yugabyte)
  else
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Skipping the Yugabyte tests because we are running on a non-x86_64 architecture."
  fi

  # run citus tests
  TEST_COMMAND+=(--features citus)

  # run cockroach tests
  TEST_COMMAND+=(--features cockroach)

  # run postgres tests
  TEST_COMMAND+=(--features postgres)

  TEST_COMMAND+=($@)

  echo "$(tput bold)${TEST_COMMAND[*]}$(tput sgr0)"
  RUST_LOG=DEBUG "${TEST_COMMAND[@]}"

# re-generate the NDC metadata configuration file
generate-configuration: build start-dependencies
  # Generate the schema.json by initializing and then removing the configuration.
  mkdir ./static/myschema
  CONNECTION_URI='{{POSTGRESQL_EMPTY_CONNECTION_URI}}' HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH='./static/myschema' \
    cargo run --bin ndc-postgres-cli -- initialize
  mv ./static/myschema/schema.json ./static/schema.json
  rm ./static/myschema/configuration.json
  rmdir ./static/myschema

  CONNECTION_URI='{{POSTGRESQL_EMPTY_CONNECTION_URI}}' HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH='{{POSTGRES_BROKEN_QUERIES_NDC_METADATA}}' \
    cargo run --bin ndc-postgres-cli -- update

  # right now, we are breaking things, so archiving old configuration is meaningless
  # ./scripts/archive-old-ndc-metadata.sh '{{POSTGRES_V3_CHINOOK_NDC_METADATA}}'

  CONNECTION_URI='{{POSTGRESQL_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{POSTGRES_V3_CHINOOK_NDC_METADATA}}' update
  CONNECTION_URI='{{CITUS_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{CITUS_V3_CHINOOK_NDC_METADATA}}' update
  CONNECTION_URI='{{COCKROACH_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{COCKROACH_V3_CHINOOK_NDC_METADATA}}' update

  @ if [[ "$(uname -m)" == 'x86_64' ]]; then \
    echo "$(tput bold)CONNECTION_URI='{{YUGABYTE_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{YUGABYTE_V3_CHINOOK_NDC_METADATA}}' update$(tput sgr0)"; \
    CONNECTION_URI='{{YUGABYTE_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{YUGABYTE_V3_CHINOOK_NDC_METADATA}}' update; \
  else \
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Not updating the Yugabyte configuration because we are running on a non-x86_64 architecture."; \
  fi
  @ if [[ -n '{{AURORA_CONNECTION_URI}}' ]]; then \
    echo "$(tput bold)CONNECTION_URI='{{AURORA_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{AURORA_V3_CHINOOK_NDC_METADATA}}' update$(tput sgr0)"; \
    CONNECTION_URI='{{AURORA_CONNECTION_URI}}' cargo run --bin ndc-postgres-cli -- --context='{{AURORA_V3_CHINOOK_NDC_METADATA}}' update; \
  else \
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Not updating the Aurora configuration because the connection string is unset."; \
  fi
  prettier --log-level=warn --write static

# start all the databases and Jaeger
start-dependencies:
  #!/usr/bin/env bash

  COMMAND=(docker compose up --wait)
  COMMAND+=(jaeger)
  COMMAND+=(postgres)
  COMMAND+=(citus)
  COMMAND+=(cockroach)
  # only start "yugabyte" if running Linux
  if [[ "$(uname -m)" == 'x86_64' ]]; then
    COMMAND+=(yugabyte)
  fi

  echo "$(tput bold)${COMMAND[*]}$(tput sgr0)"
  "${COMMAND[@]}"

# run prometheus + grafana
start-metrics:
  @echo "http://localhost:3001/ for grafana console"
  docker compose up --wait prometheus grafana

# run the v3 engine binary, pointing it at our connector
run-engine: start-dependencies
  docker compose up --wait auth-hook
  @echo "http://localhost:3000/ for graphiql console"
  @echo "http://localhost:4002/ for jaeger console"
  # Run graphql-engine using static Chinook metadata
  # Set `HGE_V3_DIRECTORY` to the location of your cloned v3 engine
  RUST_LOG=DEBUG \
  OTLP_ENDPOINT=http://localhost:4317 \
    cargo run \
    --manifest-path {{ HGE_V3_DIR }}/Cargo.toml \
    --bin engine -- \
    --metadata-path ./static/postgres/chinook-metadata.json \
    --authn-config-path ./static/auth_config.json

# run a standard request to check the service correctly integrates with the engine.
# run `just dev` and `just run-engine` each in a new terminal, then run this command.
test-integrated:
  curl -X POST \
    -H 'Host: example.hasura.app' \
    -H 'Content-Type: application/json' \
    -H 'x-hasura-role: admin' \
    http://localhost:3000/graphql \
    -d '{ "query": "query { Album(limit: 3) { Title } } " }' | jq

# Navigate to the jaeger console
open-jaeger:
  open http://localhost:4002/search?service=ndc-postgres

# Navigate to the grafana console
open-grafana: start-metrics
  @echo "The login and password are admin:grafana"
  open http://localhost:3001

# Navigate to the prometheus console
open-prometheus: start-metrics
  open http://localhost:9090

# start a postgres docker image and connect to it using psql
repl-postgres:
  @docker compose up --wait postgres
  psql {{POSTGRESQL_CONNECTION_URI}}

# start a cockroach docker image and connect to it using psql
repl-cockroach:
  @docker compose up --wait cockroach
  psql {{COCKROACH_CONNECTION_URI}}

# start a citus docker image and connect to it using psql
repl-citus:
  @docker compose up --wait citus
  psql {{CITUS_CONNECTION_URI}}

# start a yugabyte docker image and connect to it using psql
repl-yugabyte:
  @docker compose up --wait yugabyte
  psql {{YUGABYTE_CONNECTION_URI}}

# run `clippy` linter
lint *FLAGS:
  cargo clippy --all-targets --all-features {{FLAGS}}

lint-apply *FLAGS:
  cargo clippy --all-targets --all-features --fix {{FLAGS}}

# reformat everything
format:
  cargo fmt --all
  ! command -v nixpkgs-fmt > /dev/null || nixpkgs-fmt .
  prettier --write .

# is everything formatted?
format-check:
  cargo fmt --all --check
  ! command -v nixpkgs-fmt > /dev/null || nixpkgs-fmt --check .
  prettier --check .

# run `cargo machete`
find-unused-dependencies:
  # note: you can install cargo-machete with `cargo install cargo-machete`, or use the Nix shell
  cargo machete --with-metadata

# check the nix builds work
build-with-nix:
  nix build --no-warn-dirty --print-build-logs

# run ndc-postgres-multitenant whilst outputting profile data for massif
massif-postgres: start-dependencies
  cargo build --bin ndc-postgres --release
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    valgrind --tool=massif \
    target/release/ndc-postgres \
    serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# run ndc-postgres-multitenant whilst outputting profile data for heaptrack
heaptrack-postgres: start-dependencies
  cargo build --bin ndc-postgres --release
  CONNECTION_URI='{{ POSTGRESQL_CONNECTION_URI }}' \
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    heaptrack \
    target/release/ndc-postgres \
    serve --configuration {{POSTGRES_V3_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# check the docker build works
build-docker-with-nix:
  #!/usr/bin/env bash
  if [[ '{{CONNECTOR_IMAGE_TAG}}' == 'dev' ]]; then
    echo "$(tput bold)nix build .#docker | gunzip | docker load$(tput sgr0)"
    gunzip < "$(nix build --no-warn-dirty --no-link --print-out-paths '.#docker')" | docker load
  fi

# check the Postgres arm64 docker build works
build-aarch64-docker-with-nix:
  #!/usr/bin/env bash
  if [[ '{{CONNECTOR_IMAGE_TAG}}' == 'dev' ]]; then
    echo "$(tput bold)nix build .#docker-aarch64-linux | gunzip | docker load$(tput sgr0)"
    gunzip < "$(nix build --no-warn-dirty --no-link --print-out-paths --system aarch64-linux '.#docker-aarch64-linux')" | docker load
  fi
