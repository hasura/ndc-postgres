#!/usr/bin/env bash
set -e -u -o pipefail

# before we generate a new deployment, save the current one in
# `/static/deployment-snapshots` so we can ensure they can all be read over
# time

CHINOOK_DEPLOYMENT="$1"

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

SNAPSHOT_DIR="$(realpath ${CURRENT_DIR}/../static/deployment-snapshots)"

# create snapshot dir if does not exist
mkdir -p "$SNAPSHOT_DIR"

# create filename from hash of contents
NEW_FILENAME="$(sha256sum "${CHINOOK_DEPLOYMENT}" | cut -f1 -d' ').json"

# copy current deployment to new filename
cp "${CHINOOK_DEPLOYMENT}" "${SNAPSHOT_DIR}/${NEW_FILENAME}"
