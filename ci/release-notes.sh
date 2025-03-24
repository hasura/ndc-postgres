#!/usr/bin/env bash
set -e -u -o pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

if [ "$#" != 3 ];
then
  echo "Invalid number of arguments. Usage: $0 <new-version> <input-file> <output-file>" >&2
  exit 1
fi

# The new semver version tag, with the leading "v"
NEW_VERSION="$1"
INPUT_FILE="$2"
OUTPUT_FILE="$3"

# Match changelog lines between this version's changelog header, and the next header or the end marker
CHANGELOG_LINES=$(sed -n "/^## \[$NEW_VERSION\]/,/^## \|^<!-- end -->/ { # Match a range between the version header and the next header or the end  marker
    /^## \[$NEW_VERSION\]/d  # Skip the version header line
    /^## \|^<!-- end -->/q   # Quit when next section or end marker is found
    s/[[:space:]]\+$//           # Remove trailing spaces before printing
    p                         # Print all other lines in between
}" "$INPUT_FILE")

# Error if we failed to find any changelog lines. There should at least be an empty template
if [ -z "${CHANGELOG_LINES}" ]; then
    echo "Could not find changelog entry for release $NEW_VERSION" >&2
    exit 1
fi

# Remove leading and trailing empty lines
CHANGELOG_LINES=$(echo "$CHANGELOG_LINES" | sed -e '/./,$!d' -e ':a' -e '/^\n*$/{$d;N;ba}')

echo "\
The connector Docker image is:

    ghcr.io/hasura/ndc-postgres:${NEW_VERSION}

## Changelog

$CHANGELOG_LINES" > "$OUTPUT_FILE"

