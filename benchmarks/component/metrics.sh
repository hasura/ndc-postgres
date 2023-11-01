#!/bin/bash

set -e
set -u
set -o pipefail

# given an address like `localhost:8100`, call metrics endpoint and extract
# useful things like the time our agent spends doing work that isn't query execution or
# waiting for connections

server_address="$1"
job_name="$2"

# make a temp folder to put our rubbish in
directory="$(mktemp)"
rm -f "$directory"
mkdir "$directory"
trap 'rm -rf "$directory"' EXIT

entire_address="http://${server_address}/metrics"

# get metrics
curl $entire_address > $directory/metrics.txt

REQUEST_TIME=$(cat $directory/metrics.txt \
  | sed -n -e '/^ndc_postgres_query_total_time_sum/p' \
  | cut -d' ' -f2 )

CONNECTION_ACQUISITION_TIME=$(cat $directory/metrics.txt \
  | sed -n -e '/^ndc_postgres_connection_acquisition_wait_time_sum/p' \
  | cut -d' ' -f2 )

QUERY_TIME=$(cat $directory/metrics.txt \
  | sed -n -e '/^ndc_postgres_query_execution_time_sum/p' \
  | cut -d' ' -f2 )

REQUESTS_COUNT=$(cat $directory/metrics.txt \
  | sed -n -e '/^ndc_postgres_query_total_time_count/p' \
  | cut -d' ' -f2 )

REQUEST_TIME_MS=$(echo "scale=5;$REQUEST_TIME * 1000" | bc)
CONNECT_TIME_MS=$(echo "scale=5;$CONNECTION_ACQUISITION_TIME * 1000" | bc)
QUERY_TIME_MS=$(echo "scale=5;$QUERY_TIME * 1000" | bc)

PROCESSING_TIME_MS=$(echo "scale=5;$REQUEST_TIME_MS - $CONNECT_TIME_MS - $QUERY_TIME_MS" | bc)

OUTPUT_JSON=$(jq -r --null-input \
        --arg request "$REQUEST_TIME_MS" \
        --arg connection "$CONNECT_TIME_MS" \
        --arg query "$QUERY_TIME_MS" \
        --arg processing "$PROCESSING_TIME_MS" \
        '{ "request": $request, "connection_acquisition": $connection, "query_execution": $query, "processing": $processing }')

output_file_name="${directory}/metrics-${job_name}.json"

# save JSON in folder
echo $OUTPUT_JSON > $output_file_name

# copy $directory into Docker volume 'metrics_output'
tar c -C "$directory" . \
  | docker run \
      --rm \
      --interactive \
      --mount 'type=volume,source=postgres-ndc-component-benchmarks_metrics_output,target=/input' \
      busybox \
      tar x -C /input .

