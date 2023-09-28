#!/usr/bin/env bash

# Summarizes the stored benchmark results.
# Intended for use with the "continuous benchmark" GitHub action, but might also
# be useful elsewhere.

set -e
set -u
set -o pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# prints its arguments to STDERR in green
function info {
  echo >&2 "> $(tput setaf 2)$*$(tput sgr0)"
}

directory="$(mktemp)"
rm -f "$directory"
mkdir "$directory"
trap 'rm -rf "$directory"' EXIT

docker run \
  --rm \
  --mount 'type=volume,source=ndc-postgres-component-benchmarks_benchmark_output,target=/output' \
  busybox \
  tar c -C /output . \
  | tar x -C "$directory"

for summary_file in "$directory/summaries/"*; do
  name="$(basename "$summary_file" | sed 's/__.*//')"
  jq -c --arg name "$name" \
    '.metrics.http_req_duration.values | [
      {"name": ($name + " - median"), "unit": "ms", "value": .med},
      {"name": ($name + " - p(95)"), "unit": "ms", "value": ."p(95)"}
    ]' \
    "$summary_file"
done | jq -s 'flatten(1)'
