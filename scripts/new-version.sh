#!/usr/bin/env bash

# Update cargo packages version and changelog entries for a new version.

set -e -u -o pipefail

if [ "$#" != 1 ];
then
  echo "Usage: $0 <new-version>"
  exit 1
fi

NEW_VERSION="$1"
DATE_TODAY=$(date +"%Y-%m-%d")

echo "Updating version to v$NEW_VERSION"

sed -i "s/package.version = .*/package.version = \"${NEW_VERSION}\"/" Cargo.toml

cargo build # TODO: change this back

runghc scripts/changelog.hs "changelog.md" "${DATE_TODAY}" "${NEW_VERSION}"
