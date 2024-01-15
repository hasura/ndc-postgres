#!/usr/bin/env bash
set -e -u -o pipefail

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

# start the configuration server
cargo run --bin "$EXECUTABLE" --quiet -- configuration serve &
CONFIGURATION_SERVER_PID=$!
./scripts/wait-until --timeout=30 --report -- cargo run --bin "$EXECUTABLE" --quiet -- check-health --port=9100
if ! kill -0 "$CONFIGURATION_SERVER_PID"; then
  echo >&2 'The server stopped abruptly.'
  exit 1
fi

# We want to preserve the connectionUri unchanged in the NDC metadata file, for secrets templating purposes
PRESERVED_DATA="$(jq '{"connectionUri": .connectionUri}' "$CHINOOK_NDC_METADATA")"

# Native queries should inform the initial configuration call
INITIAL_DATA="$(jq '{"version": .version, "poolSettings": (.poolSettings // {}), "metadata": {"nativeQueries": .metadata.nativeQueries, "compositeTypes": .metadata.compositeTypes}, "configureOptions": {"mutationsVersion": .configureOptions.mutationsVersion}}' "$CHINOOK_NDC_METADATA")"

# create a temporary file for the output so we don't overwrite data by accident
NEW_FILE="$(mktemp)"

# 1. Generate the configuration
# 2. Splice in the preserved data from above
# 3. Format the file
#
# Because we `set -o pipefail` above, this will fail if any of the steps fail,
# and we will abort without overwriting the original file.
"${CURRENT_DIR}/new-configuration.sh" 'localhost:9100' "$CONNECTION_STRING" "$INITIAL_DATA" \
  | jq --argjson preserved_data "$PRESERVED_DATA" '. + $preserved_data' \
  | prettier --parser=json \
  > "$NEW_FILE"

# If the above command succeeded, overwrite the original file.
mv -f "$NEW_FILE" "$CHINOOK_NDC_METADATA"
