#!/usr/bin/env bash

set -e
set -u
set -o pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# prints its arguments to STDERR in green
function info {
  echo >&2 "> $(tput setaf 2)$*$(tput sgr0)"
}

if [[ -e ./agent.pid ]]; then
  info 'Stopping the agent from a previous run'
  AGENT_PID="$(< ./agent.pid)"
  kill "$AGENT_PID" && wait "$AGENT_PID" || :
  rm ./agent.pid
fi

info 'Building the agent'
cargo build --release -p ndc-postgres

info 'Starting the dependencies'
(cd ../.. && docker compose up --wait jaeger) # avoid port clobbering by re-using Jaeger
docker compose up --wait postgres grafana
POSTGRESQL_SOCKET="$(docker compose port postgres 5432)"

info 'Generating the NDC metadata configuration'
mkdir -p generated/ndc-metadata
jq --arg uri "postgresql://postgres:password@${POSTGRESQL_SOCKET}" \
  '.connectionUri.uri.value = $uri' \
  ../../static/postgres/v3-chinook-ndc-metadata.json \
  > ./generated/ndc-metadata/configuration.json

info 'Starting the agent'
if nc -z localhost 8100; then
  echo >&2 'ERROR: There is already an agent running on port 8100.'
  exit 1
fi

OTEL_EXPORTER_OTLP_TRACES_ENDPOINT='http://localhost:4317' \
  OTEL_SERVICE_NAME='ndc-postgres' \
  cargo run -p ndc-postgres --quiet --release -- \
    serve --configuration=./generated/ndc-metadata.json \
  >& agent.log &
AGENT_PID=$!
echo "$AGENT_PID" > ./agent.pid
echo >&2 "The agent is running with PID ${AGENT_PID}"
../../scripts/wait-until --timeout=30 --report -- cargo run -p ndc-postgres --quiet -- check-health
if ! kill -0 "$AGENT_PID"; then
  echo >&2 'The agent stopped abruptly. Take a look at agent.log for details.'
  exit 1
fi
