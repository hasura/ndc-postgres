#!/usr/bin/env bash
set -e -u -o pipefail

# before we generate a new NDC metadata, save the current one in
# `/static/ndc-metadata-snapshots` so we can ensure they can all be read over
# time

CHINOOK_NDC_METADATA="$1"

CURRENT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" > /dev/null && echo "$PWD")"

SNAPSHOT_DIR="$(realpath ${CURRENT_DIR}/../static/ndc-metadata-snapshots)"

# create snapshot dir if does not exist
mkdir -p "$SNAPSHOT_DIR"

# create filename from hash of contents
NEW_DIRECTORY="$(sha256sum "${CHINOOK_NDC_METADATA}/configuration.json" | cut -f1 -d' ')"

mkdir -p "${SNAPSHOT_DIR}/${NEW_DIRECTORY}"

# copy current NDC metadata to new path
cp -r "${CHINOOK_NDC_METADATA}"/* "${SNAPSHOT_DIR}/${NEW_DIRECTORY}"
