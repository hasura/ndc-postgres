#!/usr/bin/env bash

set -e
set -u
set -o pipefail

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

EXECUTABLE="$1"
CONNECTION_STRING="$2"
CONFIGURATION_FILE="$3"

# Ensure we clean up.
function stop {
  if [[ "${HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH+x}" ]]; then
    rm -rf "$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH"
  fi
}

trap stop EXIT

# Build the CLI.
cargo build
CLI="${PWD}/target/debug/ndc-postgres-cli"

# We want to preserve the connectionUri unchanged in the NDC metadata file, for secrets templating purposes.
PRESERVED_DATA="$(jq '{"connectionUri": .connectionUri}' "$CONFIGURATION_FILE")"

# Native queries should inform the initial configuration call.
INITIAL_DATA="$(jq '{"version": .version, "connectionUri": .connectionUri, "poolSettings": (.poolSettings // {}), "metadata": {"nativeQueries": .metadata.nativeQueries, "compositeTypes": .metadata.compositeTypes}, "configureOptions": {"mutationsVersion": .configureOptions.mutationsVersion}}' "$CONFIGURATION_FILE")"

# Create a temporary directory for the output so we don't overwrite data by accident.
# The CLI will read from and write to the directory specified by this environment variable.
HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH="$(mktemp)"
rm -f "$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH"
mkdir "$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH"
export HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH

# Initialize an empty configuration.
"$CLI" initialize
# Overwrite with the initial data.
echo "$INITIAL_DATA" \
  | jq --arg uri "$CONNECTION_STRING" '. + {"connectionUri": {"uri": {"value": $uri}}}' \
  > "${HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH}/configuration.json"
# Introspect the database.
"$CLI" update
# Splice in the preserved data.
jq \
    --argjson preserved_data "$PRESERVED_DATA" \
    '. + $preserved_data' \
    "${HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH}/configuration.json" \
  | prettier --parser=json \
  > "${HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH}/configuration.spliced.json"

# If the above succeeded, overwrite the configuration.
rm -f "$CONFIGURATION_FILE"
mv -nv "${HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH}/configuration.spliced.json" "$CONFIGURATION_FILE"
