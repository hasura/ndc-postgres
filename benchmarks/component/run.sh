#!/usr/bin/env bash

set -e
set -u
set -o pipefail

cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# prints its arguments to STDERR in green
function info {
  echo >&2 "> $(tput setaf 2)$*$(tput sgr0)"
}

function stop {
  if [[ -e ./agent.pid ]]; then
    info 'Stopping the agent'
    AGENT_PID="$(< ./agent.pid)"
    kill "$AGENT_PID" || :
    rm ./agent.pid
  fi
}

if [[ $# -eq 0 ]]; then
  echo >&2 "Usage: ${BASH_SOURCE[0]} BENCHMARK [k6 args...]"
  echo >&2
  echo >&2 "Benchmarks:"
  ls ./benchmarks | sed 's/^/  - /'
  exit 2
fi

BENCHMARK="$1"
shift
if [[ ! -f "./benchmarks/$BENCHMARK" ]]; then
  echo >&2 "ERROR: Unknown benchmark: $BENCHMARK"
  echo >&2
  echo >&2 "Benchmarks:"
  ls ./benchmarks | sed 's/^/  - /'
  exit 1
fi

trap stop EXIT INT QUIT TERM
./start.sh

info 'Running the benchmarks'
export K6_OUT="experimental-prometheus-rw"
export K6_PROMETHEUS_RW_SERVER_URL="http://$(docker compose port prometheus 9090)/api/v1/write"
export K6_PROMETHEUS_RW_TREND_AS_NATIVE_HISTOGRAM="true"
k6 run "./benchmarks/$BENCHMARK" "$@"
