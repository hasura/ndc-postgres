#!/usr/bin/env bash
set -e -u -o pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

# This script does 3 things:
# - Update the package version in Cargo.toml based on the chosen bump type (one of major, minor, patch) & run "just test" to cause an update of Cargo.lock
# - Update changelog.md to move all entries under [Unreleased] to the changelog for the new release
# - Create a pull request with those changes
# Update cargo packages version and changelog entries for a new version.

if [ "$#" != 1 ];
then
  echo "Usage: $0 <bump-type>"
  exit 1
fi

# The semver version, without the leading v
BUMP_TYPE="$1"
DATE_TODAY=$(date +"%Y-%m-%d")

CARGO_VERSION="$(cargo metadata --format-version=1 | jq -r '.packages | .[] | select(.name == "ndc-postgres") | .version')"

# Split the version into its components
IFS='.' read -r MAJOR MINOR PATCH <<< "$CARGO_VERSION"

# Update the version based on the bump type
case $BUMP_TYPE in
  major)
    ((++MAJOR))
    MINOR=0
    PATCH=0
    ;;
  minor)
    ((++MINOR))
    PATCH=0
    ;;
  patch)
    ((++PATCH))
    ;;
  *)
    echo "Invalid bump type: $BUMP_TYPE"
    exit 1
    ;;
esac


# Construct the new version string
RELEASE_VERSION="$MAJOR.$MINOR.$PATCH"

BRANCH_NAME="release-$RELEASE_VERSION"

git config --global user.name "hasura-bot"
git config --global user.email "accounts@hasura.io"

# Create a new feature branch for the changes.
git checkout -b $BRANCH_NAME

# Bump the version in Cargo.toml
sed -i "s/package.version = .*/package.version = \"${RELEASE_VERSION}\"/" Cargo.toml

# update Cargo.lock
cargo update --workspace

# Multiline template for readability, we'll need to escape newlines before passing to sed
CHANGELOG_TEMPLATE=$(cat <<EOF
## [Unreleased]

### Added

### Changed

### Fixed

## [v$RELEASE_VERSION] - $DATE_TODAY
EOF
)

# Replace "## [Unreleased]"" with the template in changelog.md. We use parameter expansion to escape newlines
sed -i "s/## \[Unreleased\]/${CHANGELOG_TEMPLATE//$'\n'/\\n}/" changelog.md

# Single line template with escaped newlines
CHANGELOG_REFERENCES="[Unreleased]: https://github.com/hasura/ndc-postgres/compare/v$RELEASE_VERSION...HEAD\n[v$RELEASE_VERSION]: https://github.com/hasura/ndc-postgres/releases/tag/v$RELEASE_VERSION"

# Update reference at bottom of changelog.md. URL has forward slashes so we use | as delimiter
sed -i "s|\[Unreleased\]: .*|$CHANGELOG_REFERENCES|" changelog.md

git add Cargo.toml Cargo.lock changelog.md
git commit -m "Create ndc-postgres release v$RELEASE_VERSION"
# we need --force in case this release branch was already created
git push origin $BRANCH_NAME --force

# Create PR body with proper newlines using a heredoc
PR_BODY=$(cat <<EOF
This bumps the version in \`Cargo.toml\` to $RELEASE_VERSION and updates \`changelog.md\`.

Merging this branch will trigger the tag-release workflow, which will ship a new release.

Note there is currently an issue: the required workflows won't trigger for this PR as it was created by another workflow.
To work around this, check out this branch, then create and push an empty commit:

```bash
git checkout $BRANCH_NAME
git commit --allow-empty -m "Trigger workflows"
git push origin $BRANCH_NAME
```
EOF
)

# create a pull-request containing the updates
gh pr create \
  --title "Release version $RELEASE_VERSION" \
  --body "$PR_BODY" \
  --head "$BRANCH_NAME" \
  --base "main"
