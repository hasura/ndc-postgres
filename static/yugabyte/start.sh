#!/usr/bin/env bash

set -e -u

# start in the background, but not in daemon mode, so we still capture logs
# run on all hosts, not just the external one, so `ysqlsh` can connect
./bin/yugabyted start --daemon=false --insecure --advertise_address='0.0.0.0' &
PID=$!

# stop the server when this process terminates
trap './bin/yugabyted stop' EXIT INT TERM

# wait until we can connect
while sleep 5; do
  ./bin/ysqlsh < /dev/null && break
done

# ingest the Chinook data
if [[ ! -f /root/var/chinook.loaded ]]; then
  echo 'Loading data...'
  ./bin/ysqlsh --single-transaction < ./chinook-postgres.sql
  echo 'Loaded data successfully.'
  touch /root/var/chinook.loaded
else
  echo 'Data already loaded.'
fi

# block this script until the server terminates
wait $PID
