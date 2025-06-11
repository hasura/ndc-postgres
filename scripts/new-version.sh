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

just test

# Multiline template for readability, we'll need to escape newlines before passing to sed
CHANGELOG_TEMPLATE=$(cat <<EOF
## [Unreleased]

### Added

### Changed

### Fixed

## [v$NEW_VERSION] - $DATE_TODAY
EOF
)

# Replace "## [Unreleased]"" with the template in changelog.md. We use parameter expansion to escape newlines
sed -i "s/## \[Unreleased\]/${CHANGELOG_TEMPLATE//$'\n'/\\n}/" changelog.md

# Single line template with escaped newlines
CHANGELOG_REFERENCES="[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v$NEW_VERSION...HEAD\n[v$NEW_VERSION]: https://github.com/hasura/ndc-postgres/releases/tag/v$NEW_VERSION"

# Update reference at bottom of changelog.md. URL has forward slashes so we use | as delimiter
sed -i "s|\[Unreleased\]: .*|$CHANGELOG_REFERENCES|" changelog.md

