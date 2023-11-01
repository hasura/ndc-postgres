#!/usr/bin/env bash
set -e -u -o pipefail

# before we generate a new deployment, save the current one in
# `/static/deployment-snapshots` so we can ensure they can all be read over
# time

CHINOOK_DEPLOYMENT="$1"

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

SNAPSHOT_DIR="$(realpath ${CURRENT_DIR}/../static/deployment-snapshots)"

mkdir -p "$SNAPSHOT_DIR"

NEW_FILENAME="$(sha256sum "${CHINOOK_DEPLOYMENT}" | cut -f1 -d' ').json"

echo "$SNAPSHOT_DIR"

echo "${CHINOOK_DEPLOYMENT}"

cp "${CHINOOK_DEPLOYMENT}" "${SNAPSHOT_DIR}/${NEW_FILENAME}"
