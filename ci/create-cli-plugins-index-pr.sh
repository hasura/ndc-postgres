#!/usr/bin/env bash
set -evo pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

# Parse command line arguments
RELEASE_VERSION="${1:-}"
NDC_POSTGRES_DIR="${2:-ndc-postgres}"
CLI_PLUGINS_INDEX_DIR="${3:-cli-plugins-index}"

# Check if required parameters are provided
if [ -z "$RELEASE_VERSION" ]; then
  echo "Usage: $0 <release_version> [ndc_postgres_dir] [cli_plugins_index_dir]"
  echo "  release_version: The version number (e.g., v1.2.3)"
  echo "  ndc_postgres_dir: Path to ndc-postgres directory (default: ndc-postgres)"
  echo "  cli_plugins_index_dir: Path to cli-plugins-index directory (default: cli-plugins-index)"
  exit 1
fi

ROOT="$(pwd)"

# Branch name for the PR
BRANCH_NAME="ndc-postgres/release-$RELEASE_VERSION"

# Get the commit hash from the ndc-postgres repository
RELEASE_HASH="$(cd $NDC_POSTGRES_DIR && git rev-parse HEAD)"

# Calculate SHA256 hashes from the artifacts
export RELEASE_VERSION="$RELEASE_VERSION"
export LINUX_AMD64_SHA256=$(sha256sum ${ROOT}/release/artifacts/ndc-postgres-cli-x86_64-unknown-linux-gnu      | cut -f1 -d' ')
export MACOS_AMD64_SHA256=$(sha256sum ${ROOT}/release/artifacts/ndc-postgres-cli-x86_64-apple-darwin           | cut -f1 -d' ')
export WINDOWS_AMD64_SHA256=$(sha256sum ${ROOT}/release/artifacts/ndc-postgres-cli-x86_64-pc-windows-msvc.exe  | cut -f1 -d' ')
export LINUX_ARM64_SHA256=$(sha256sum ${ROOT}/release/artifacts/ndc-postgres-cli-aarch64-unknown-linux-gnu     | cut -f1 -d' ')
export MACOS_ARM64_SHA256=$(sha256sum ${ROOT}/release/artifacts/ndc-postgres-cli-aarch64-apple-darwin          | cut -f1 -d' ')

# Change working directory to the target folder
cd $CLI_PLUGINS_INDEX_DIR

git config --global user.name "hasura-bot"
git config --global user.email "accounts@hasura.io"

# Create a new feature branch for the changes.
git checkout -b $BRANCH_NAME

# Create directory for the new version
mkdir -p "plugins/ndc-postgres/$RELEASE_VERSION"

# Generate the manifest file using the template and envsubst
envsubst '${RELEASE_VERSION}${LINUX_AMD64_SHA256}${MACOS_AMD64_SHA256}${WINDOWS_AMD64_SHA256}${LINUX_ARM64_SHA256}${MACOS_ARM64_SHA256}' < "${ROOT}/${NDC_POSTGRES_DIR}/ci/templates/manifest.yaml" > "${ROOT}/${CLI_PLUGINS_INDEX_DIR}/plugins/ndc-postgres/$RELEASE_VERSION/manifest.yaml"

git add .
git commit -m "Release Postgres $RELEASE_VERSION"
git push origin $BRANCH_NAME --force

# create a pull-requests containing the updates.
gh pr create \
  --body "Commit in ndc-postgres: https://github.com/hasura/ndc-postgres/commit/$RELEASE_HASH" \
  --title "Release Postgres $RELEASE_VERSION" \
  --head "$BRANCH_NAME" \
  --base "master"
