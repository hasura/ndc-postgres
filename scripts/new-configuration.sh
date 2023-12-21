#!/usr/bin/env bash

set -e
set -u
set -o pipefail

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

if [[ $# -lt 2 ]]; then
  echo >&2 "Usage: $0 CONFIGURATION-SERVER POSTGRESQL-CONNECTION-URI [EXTRA-CONFIG]"
  echo >&2
  echo >&2 '  The configuration server should be in the form "HOST:PORT".'
  exit 2
fi

export CONFIGURATION_SERVER="$1"  # exported to use in the `wait-until` call
POSTGRESQL_CONNECTION_URI="$2"
DEFAULT_EXTRA_CONFIG="{}" # this is needed for mac to work, because EXTRA_CONFIG="${3:-{\}}" will defaults to {/} in mac
EXTRA_CONFIG="${3:-$DEFAULT_EXTRA_CONFIG}" # this defaults to '{}'

# wait until the server is up and running
"${CURRENT_DIR}/wait-until" --timeout=30 --report -- sh -c 'curl -fsS "http://${CONFIGURATION_SERVER}/health" > /dev/null'

function get {
  # write HTTP responses to this file
  OUTPUT_FILE="$(mktemp)"
  trap 'rm -f "$OUTPUT_FILE"' RETURN

  # capture the status in the variable, and the body in $OUTPUT_FILE
  response_status="$(curl --silent --output "$OUTPUT_FILE" --write-out '%{http_code}\n' "$@")"
  if [[ "$response_status" -ge 200 && "$response_status" -lt 300 ]]; then
    cat "$OUTPUT_FILE"
  else
    # on failure, log the response status and body
    echo >&2 "Request to ${1} failed with status ${response_status}."
    echo >&2 "Response body:"
    cat "$OUTPUT_FILE" >&2
    echo >&2
    echo >&2
    return 1
  fi
}

# 1.  Get an empty configuration.
# 2.  Splice in the connection URI and extra config.
# 3.  Send that configuration back to get the real thing.
# 4.  Reformat with `jq`.
# 5.  Print the generated configuration to STDOUT.
get "http://${CONFIGURATION_SERVER}/" \
  | jq --arg uri "$POSTGRESQL_CONNECTION_URI" --argjson extra "$EXTRA_CONFIG" '. * $extra + {"connectionUri": {"uri": {"value": $uri}}}' \
  | get "http://${CONFIGURATION_SERVER}/" -H 'Content-Type: application/json' -d @- \
  | jq .
