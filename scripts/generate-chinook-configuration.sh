#!/usr/bin/env bash

set -e
set -u
set -o pipefail

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

EXECUTABLE="$1"
CONNECTION_STRING="$2"
CHINOOK_NDC_METADATA="$3"

# ensure we clean up
function stop {
  if [[ "${CONFIGURATION_SERVER_PID+x}" ]]; then
    kill "$CONFIGURATION_SERVER_PID"
  fi
  if [[ "${NEW_FILE+x}" ]]; then
    rm -f "$NEW_FILE"
  fi
}

trap stop EXIT

# build the CLI
cargo build
CLI="${PWD}/target/debug/ndc-postgres-cli"

# We want to preserve the connectionUri unchanged in the NDC metadata file, for secrets templating purposes
PRESERVED_DATA="$(jq '{"connectionUri": .connectionUri}' "$CHINOOK_NDC_METADATA")"

# Native queries should inform the initial configuration call
INITIAL_DATA="$(jq '{"version": .version, "connectionUri": .connectionUri, "poolSettings": (.poolSettings // {}), "metadata": {"nativeQueries": .metadata.nativeQueries, "compositeTypes": .metadata.compositeTypes}, "configureOptions": {"mutationsVersion": .configureOptions.mutationsVersion}}' "$CHINOOK_NDC_METADATA")"

# create a temporary directory for the output so we don't overwrite data by accident
TEMP_DIRECTORY="$(mktemp)"
rm -f "$TEMP_DIRECTORY"
mkdir "$TEMP_DIRECTORY"

(
  cd "$TEMP_DIRECTORY"
  # Initialize an empty configuration.
  "$CLI" initialize
  # Overwrite with the initial data.
  echo "$INITIAL_DATA" \
    | jq --arg uri "$CONNECTION_STRING" '. + {"connectionUri": {"uri": {"value": $uri}}}' \
    > configuration.json
  # Introspect the database.
  "$CLI" update
  # Splice in the preserved data.
  jq --argjson preserved_data "$PRESERVED_DATA" '. + $preserved_data' configuration.json > configuration.new.json
  mv -fv configuration.new.json configuration.json
  # Format the result.
  prettier --write configuration.json
)

# If the above succeeded, overwrite the configuration.
rm -f "$CHINOOK_NDC_METADATA"
mv -nv "$TEMP_DIRECTORY/configuration.json" "$CHINOOK_NDC_METADATA"
