#!/usr/bin/env bash
set -e -u -o pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

# This script, triggered when a branch named `create-release-*` is merged, creates a tag based on that version, then explicitly invokes the deploy workflow.
# We need to explicitly run the workflow because changes from workflows don't trigger other workflows.

CARGO_VERSION="$(cargo metadata --format-version=1 | jq -r '.packages | .[] | select(.name == "ndc-postgres") | .version')"
VERSION_TAG="v$CARGO_VERSION"
if git rev-parse "$VERSION_TAG" >/dev/null 2>&1; then
    echo >&2 "Error: Tag '$VERSION_TAG' already exists."
    exit 1
fi
echo "Tagging $VERSION_TAG"
git tag $VERSION_TAG
git push --tags
# Explicitly run our release workflow for this new tag
gh workflow run ship.yaml --ref $VERSION_TAG