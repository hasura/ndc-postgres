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

# the output of the K6 jobs is sitting in the `benchmark_output` volume,
# so we mount it in an arbitrary container which we use to copy it out.
docker run \
  --rm \
  --mount 'type=volume,source=ndc-postgres-component-benchmarks_benchmark_output,target=/output' \
  busybox \
  tar c -C /output . \
  | tar x -C "$directory"

# the output of the metrics for each job is sitting in the `metrics_output` volume,
# so we mount it in an arbitrary container which we use to copy it out.
docker run \
  --rm \
  --mount 'type=volume,source=postgres-ndc-component-benchmarks_metrics_output,target=/output' \
  busybox \
  tar c -C /output . \
  | tar x -C "$directory"

for summary_file in "$directory/summaries/"*; do
  name="$(basename "$summary_file" | sed 's/__.*//')"
  metrics_file="${directory}/metrics-${name}.js.json"
  query_time=$(jq -c '.query_execution' "$metrics_file")
  connection_time=$(jq -c '.connection_acquisition' "$metrics_file")
  processing_time=$(jq -c '.processing' "$metrics_file")
  jq -c --arg name "$name" \
        --arg query_time "$query_time" \
        --arg connection_time "$connection_time" \
        --arg processing_time "$processing_time" \
    '.metrics | [
      {"name": ($name + " - median"), "unit": "ms", "value": .http_req_duration.values.med},
      {"name": ($name + " - p(95)"), "unit": "ms", "value": .http_req_duration.values."p(95)"},
      {"name": ($name + " - connection acquisition time"), "unit": "ms", "value": (($connection_time | fromjson | tonumber) / .http_reqs.values.count ) },
      {"name": ($name + " - request time - (query + acquisition)"), "unit": "ms", "value": (.http_req_duration.values.avg - (($query_time | fromjson | tonumber) / .http_reqs.values.count) - (($connection_time | fromjson | tonumber) / .http_reqs.values.count)) },
      {"name": ($name + " - processing time"), "unit": "ms", "value": (($processing_time | fromjson | tonumber) / .http_reqs.values.count ) }
    ]' \
    "$summary_file"
done | jq -s 'flatten(1)'
