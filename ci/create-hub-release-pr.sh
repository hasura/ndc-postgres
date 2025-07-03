#!/usr/bin/env bash
set -evo pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

# Parse command line arguments
RELEASE_VERSION="${1:-}"
NDC_POSTGRES_DIR="${2:-ndc-postgres}"
NDC_HUB_DIR="${3:-ndc-hub}"

# Check if required parameters are provided
if [ -z "$RELEASE_VERSION" ]; then
  echo "Usage: $0 <release_version> [ndc_postgres_dir] [ndc_hub_dir]"
  echo "  release_version: The version number (e.g., v1.2.3)"
  echo "  ndc_postgres_dir: Path to ndc-postgres directory (default: ndc-postgres)"
  echo "  ndc_hub_dir: Path to ndc-hub directory (default: ndc-hub)"
  exit 1
fi

ROOT="$(pwd)"

# Branch name for the PR
BRANCH_NAME="ndc-postgres/release-$RELEASE_VERSION"

# These exported env vars are used for templating
export RELEASE_VERSION="${RELEASE_VERSION}"
export RELEASE_HASH="$(cd $NDC_POSTGRES_DIR && git rev-parse HEAD)"
export CONNECTOR_DEFINITION_HASH=$(sha256sum ${ROOT}/release/artifacts/package.tar.gz | cut -f1 -d' ')

# Change working directory to the target folder
cd $NDC_HUB_DIR

git config --global user.name "hasura-bot"
git config --global user.email "accounts@hasura.io"

# Create a new feature branch for the changes.
git checkout -b $BRANCH_NAME

# create new connector definition
mkdir -p "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/releases/$RELEASE_VERSION"
envsubst '${RELEASE_VERSION}${RELEASE_HASH}${CONNECTOR_DEFINITION_HASH}' < "${ROOT}/${NDC_POSTGRES_DIR}/ci/templates/connector-packaging.json" > "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/releases/$RELEASE_VERSION/connector-packaging.json"

# modify metadata file to add new entry
jq --arg RELEASE_VERSION "$RELEASE_VERSION" '.overview.latest_version = $RELEASE_VERSION' "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/metadata.json" |
jq --arg RELEASE_VERSION "$RELEASE_VERSION" --arg RELEASE_HASH "$RELEASE_HASH" '.source_code.version |= [{tag: $RELEASE_VERSION, hash: $RELEASE_HASH, is_verified: true}] + .' > metadata.tmp.json

mv metadata.tmp.json "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/metadata.json"

# Update each ndc-postgres aliased connector variant
for variant in \
    'aurora' \
    'citus' \
    'cockroach' \
    'neon' \
    'postgres-alloydb' \
    'postgres-azure' \
    'postgres-cosmos' \
    'postgres-gcp' \
    'postgres-timescaledb' ; do

jq --arg RELEASE_VERSION "$RELEASE_VERSION" '.overview.latest_version = $RELEASE_VERSION' "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/aliased_connectors/${variant}/metadata.json" |
jq --arg RELEASE_VERSION "$RELEASE_VERSION" --arg RELEASE_HASH "$RELEASE_HASH" '.source_code.version |= [{tag: $RELEASE_VERSION, hash: $RELEASE_HASH, is_verified: true}] + .' > metadata.tmp.json

mv metadata.tmp.json "${ROOT}/${NDC_HUB_DIR}/registry/hasura/postgres/aliased_connectors/${variant}/metadata.json"

done

git add .
git commit -m "Release Postgres $RELEASE_VERSION"
git push origin $BRANCH_NAME --force

# create a pull-requests containing the updates.
gh pr create \
  --body "Commit in ndc-postgres: https://github.com/hasura/ndc-postgres/commit/$RELEASE_HASH" \
  --title "Release Postgres $RELEASE_VERSION" \
  --head "$BRANCH_NAME" \
  --base "main"
