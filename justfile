set shell := ["bash", "-c"]

HGE_V3_DIR := env_var_or_default('HGE_V3_DIRECTORY', '../v3-engine')

CONNECTOR_IMAGE_NAME := "ghcr.io/hasura/ndc-postgres"
CONNECTOR_IMAGE_TAG := "dev"
CONNECTOR_IMAGE := CONNECTOR_IMAGE_NAME + ":" + CONNECTOR_IMAGE_TAG

POSTGRESQL_CONNECTION_STRING := "postgresql://postgres:password@localhost:64002"
POSTGRES_V1_CHINOOK_NDC_METADATA := "static/postgres/v1-chinook-ndc-metadata.json"
POSTGRES_V2_CHINOOK_NDC_METADATA := "static/postgres/v2-chinook-ndc-metadata.json"

COCKROACH_CONNECTION_STRING := "postgresql://postgres:password@localhost:64003/defaultdb"
COCKROACH_V1_CHINOOK_NDC_METADATA := "static/cockroach/v1-chinook-ndc-metadata.json"
COCKROACH_V2_CHINOOK_NDC_METADATA := "static/cockroach/v2-chinook-ndc-metadata.json"

CITUS_CONNECTION_STRING := "postgresql://postgres:password@localhost:64004?sslmode=disable"
CITUS_V1_CHINOOK_NDC_METADATA := "static/citus/v1-chinook-ndc-metadata.json"
CITUS_V2_CHINOOK_NDC_METADATA := "static/citus/v2-chinook-ndc-metadata.json"

YUGABYTE_CONNECTION_STRING := "postgresql://yugabyte@localhost:64005"
YUGABYTE_V1_CHINOOK_NDC_METADATA := "static/yugabyte/v1-chinook-ndc-metadata.json"
YUGABYTE_V2_CHINOOK_NDC_METADATA := "static/yugabyte/v2-chinook-ndc-metadata.json"

AURORA_CONNECTION_STRING := env_var_or_default('AURORA_CONNECTION_STRING', '')

AURORA_V1_CHINOOK_NDC_METADATA := "static/aurora/v1-chinook-ndc-metadata.json"
AURORA_V1_CHINOOK_NDC_METADATA_TEMPLATE := "static/aurora/v1-chinook-ndc-metadata-template.json"

AURORA_V2_CHINOOK_NDC_METADATA := "static/aurora/v2-chinook-ndc-metadata.json"
AURORA_V2_CHINOOK_NDC_METADATA_TEMPLATE := "static/aurora/v2-chinook-ndc-metadata-template.json"

# Notes:
# * Building Docker images will not work on macOS.
#   You can use `main` instead, by running:
#     just --set CONNECTOR_IMAGE_TAG dev-main <targets>

# check everything
check: format-check find-unused-dependencies build lint test

# run the connector
run: start-dependencies
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    cargo run --bin ndc-postgres --release -- serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# run the connector
run-config: start-dependencies
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres-config-server \
    cargo run --bin ndc-postgres --release -- configuration serve > /tmp/ndc-postgres.log

# run the connector inside a Docker image
run-in-docker: build-docker-with-nix start-dependencies
  #!/usr/bin/env bash
  set -e -u -o pipefail

  configuration_file="$(mktemp)"
  trap 'rm -f "$configuration_file"' EXIT

  echo '> Generating the configuration...'
  docker run \
    --name=ndc-postgres-configuration \
    --rm \
    --detach \
    --platform=linux/amd64 \
    --net='ndc-postgres_default' \
    --publish='9100:9100' \
    {{CONNECTOR_IMAGE}} \
    configuration serve
  trap 'docker stop ndc-postgres-configuration' EXIT
  CONFIGURATION_SERVER='localhost:9100'
  ./scripts/new-configuration.sh "$CONFIGURATION_SERVER" 'postgresql://postgres:password@postgres' \
    > "$configuration_file"

  echo '> Starting the server...'
  docker run \
    --name=ndc-postgres \
    --rm \
    --interactive \
    --tty \
    --platform=linux/amd64 \
    --net='ndc-postgres_default' \
    --publish='8100:8100' \
    --env=RUST_LOG='INFO' \
    --mount="type=bind,source=${configuration_file},target=/ndc-metadata.json,readonly=true" \
    {{CONNECTOR_IMAGE}} \
    serve \
    --configuration='/ndc-metadata.json'

# watch the code, then test and re-run on changes
dev: start-dependencies
  RUST_LOG=INFO \
    OTLP_ENDPOINT=http://localhost:4317 \
    OTEL_SERVICE_NAME=ndc-postgres \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-sql -p query-engine-translation -p databases-tests --features postgres' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}}'

# watch the code, then run the config server
dev-config: start-dependencies
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres-config-server \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x clippy \
    -x 'run --bin ndc-postgres  -- configuration serve'

# watch the code, then test and re-run on changes
dev-cockroach: start-dependencies
  RUST_LOG=INFO \
    OTLP_ENDPOINT=http://localhost:4317 \
    OTEL_SERVICE_NAME=cockroach-ndc \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-translation -p databases-tests --features cockroach' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{COCKROACH_V2_CHINOOK_NDC_METADATA}}'

# watch the code, then test and re-run on changes
dev-citus: start-dependencies
  RUST_LOG=INFO \
    OTLP_ENDPOINT=http://localhost:4317 \
    OTEL_SERVICE_NAME=citus-ndc \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p query-engine-translation -p databases-tests --features citus' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{CITUS_V2_CHINOOK_NDC_METADATA}}'

# Generate the JSON Schema document for Configuration V1.
document-jsonschema:
  RUST_LOG=INFO cargo run --bin jsonschema-generator

# Generate the OpenAPI Schema document for Configuration V1.
document-openapi:
  RUST_LOG=INFO cargo run --bin openapi-generator

# Run postgres, testing against external DBs like Aurora
test-other-dbs: create-aurora-ndc_metadata start-dependencies
  RUST_LOG=INFO \
    OTLP_ENDPOINT=http://localhost:4317 \
    OTEL_SERVICE_NAME=ndc-postgres \
    cargo watch -i "**/snapshots/*" \
    -c \
    -x 'test -p databases-tests --all-features' \
    -x clippy \
    -x 'run --bin ndc-postgres -- serve --configuration {{AURORA_V2_CHINOOK_NDC_METADATA}}'

# watch the code, and re-run on changes
watch-run: start-dependencies
  RUST_LOG=DEBUG \
    cargo watch -i "tests/snapshots/*" \
    -c \
    -x 'run --bin ndc-postgres -- serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}}'

# Run ndc-postgres with rust-gdb.
debug: start-dependencies
  cargo build
  RUST_LOG=DEBUG \
    rust-gdb --args target/debug/ndc-postgres serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}}

# Run the server and produce a flamegraph profile
flamegraph: start-dependencies
  CARGO_PROFILE_RELEASE_DEBUG=true \
  RUST_LOG=DEBUG \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=postgres-ndc \
    cargo flamegraph --bin ndc-postgres -- \
    serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# build everything
build:
  cargo build --all-targets

# build and open docs
doc:
  cargo doc --lib --no-deps --open

# run all tests
test *args: start-dependencies create-aurora-ndc_metadata
  #!/usr/bin/env bash

  # choose a test runner
  if command -v cargo-nextest > /dev/null; then
    TEST_COMMAND=(cargo nextest run --no-fail-fast)
  else
    TEST_COMMAND=(cargo test --no-fail-fast)
  fi

  # enable the "aurora" feature if the connection string is set
  if [[ -n '{{AURORA_CONNECTION_STRING}}' ]]; then
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

  TEST_COMMAND+=({{ args }})

  echo "$(tput bold)${TEST_COMMAND[*]}$(tput sgr0)"
  RUST_LOG=DEBUG "${TEST_COMMAND[@]}"

# re-generate the ndc_metadata configuration file
generate-chinook-configuration: build start-dependencies
  ./scripts/archive-old-ndc_metadata.sh '{{POSTGRES_V1_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{POSTGRESQL_CONNECTION_STRING}}' '{{POSTGRES_V1_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{CITUS_CONNECTION_STRING}}' '{{CITUS_V1_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{COCKROACH_CONNECTION_STRING}}' '{{COCKROACH_V1_CHINOOK_NDC_METADATA}}'

  ./scripts/archive-old-ndc_metadata.sh '{{POSTGRES_V2_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{POSTGRESQL_CONNECTION_STRING}}' '{{POSTGRES_V2_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{CITUS_CONNECTION_STRING}}' '{{CITUS_V2_CHINOOK_NDC_METADATA}}'
  ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{COCKROACH_CONNECTION_STRING}}' '{{COCKROACH_V2_CHINOOK_NDC_METADATA}}'

  @ if [[ "$(uname -m)" == 'x86_64' ]]; then \
    echo "$(tput bold)./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{YUGABYTE_CONNECTION_STRING}}' '{{YUGABYTE_V1_CHINOOK_NDC_METADATA}}'$(tput sgr0)"; \
    ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{YUGABYTE_CONNECTION_STRING}}' '{{YUGABYTE_V1_CHINOOK_NDC_METADATA}}'; \
    echo "$(tput bold)./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{YUGABYTE_CONNECTION_STRING}}' '{{YUGABYTE_V2_CHINOOK_NDC_METADATA}}'$(tput sgr0)"; \
    ./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{YUGABYTE_CONNECTION_STRING}}' '{{YUGABYTE_V2_CHINOOK_NDC_METADATA}}'; \
  else \
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Not updating the Yugabyte configuration because we are running on a non-x86_64 architecture."; \
  fi
  @ if [[ -n '{{AURORA_CONNECTION_STRING}}' ]]; then \
    echo "$(tput bold)./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{AURORA_CONNECTION_STRING}}' '{{AURORA_V1_CHINOOK_NDC_METADATA_TEMPLATE}}'$(tput sgr0)"; \
    ./scripts/generate-chinook-configuration.sh "ndc-postgres" '{{AURORA_CONNECTION_STRING}}' '{{AURORA_V1_CHINOOK_NDC_METADATA_TEMPLATE}}'; \
    echo "$(tput bold)./scripts/generate-chinook-configuration.sh 'ndc-postgres' '{{AURORA_CONNECTION_STRING}}' '{{AURORA_V2_CHINOOK_NDC_METADATA_TEMPLATE}}'$(tput sgr0)"; \
    ./scripts/generate-chinook-configuration.sh "ndc-postgres" '{{AURORA_CONNECTION_STRING}}' '{{AURORA_V2_CHINOOK_NDC_METADATA_TEMPLATE}}'; \
    just create-aurora-ndc_metadata; \
  else \
    echo "$(tput bold)$(tput setaf 3)WARNING:$(tput sgr0) Not updating the Aurora configuration because the connection string is unset."; \
  fi

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

# injects the Aurora connection string into a ndc_metadata configuration template
create-aurora-ndc_metadata:
  cat {{ AURORA_V2_CHINOOK_NDC_METADATA_TEMPLATE }} \
    | jq '.connectionUri.uri.value = (env | .AURORA_CONNECTION_STRING)' \
    | prettier --parser=json \
    > {{ AURORA_V2_CHINOOK_NDC_METADATA }}

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
  psql {{POSTGRESQL_CONNECTION_STRING}}

# start a cockroach docker image and connect to it using psql
repl-cockroach:
  @docker compose up --wait cockroach
  psql {{COCKROACH_CONNECTION_STRING}}

# start a citus docker image and connect to it using psql
repl-citus:
  @docker compose up --wait citus
  psql {{CITUS_CONNECTION_STRING}}

# start a yugabyte docker image and connect to it using psql
repl-yugabyte:
  @docker compose up --wait yugabyte
  psql {{YUGABYTE_CONNECTION_STRING}}

# run `clippy` linter
lint *FLAGS:
  cargo clippy {{FLAGS}}

lint-apply *FLAGS:
  cargo clippy --fix {{FLAGS}}

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
  cargo machete

# check the nix builds work
build-with-nix:
  nix build --no-warn-dirty --print-build-logs

# run ndc-postgres-multitenant whilst outputting profile data for massif
massif-postgres: start-dependencies
  cargo build --bin ndc-postgres --release
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    valgrind --tool=massif \
    target/release/ndc-postgres \
    serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

# run ndc-postgres-multitenant whilst outputting profile data for heaptrack
heaptrack-postgres: start-dependencies
  cargo build --bin ndc-postgres --release
  RUST_LOG=INFO \
  OTLP_ENDPOINT=http://localhost:4317 \
  OTEL_SERVICE_NAME=ndc-postgres \
    heaptrack \
    target/release/ndc-postgres \
    serve --configuration {{POSTGRES_V2_CHINOOK_NDC_METADATA}} > /tmp/ndc-postgres.log

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
