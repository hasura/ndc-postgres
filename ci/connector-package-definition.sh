#!/usr/bin/env bash
set -e -u -o pipefail
trap 'echo "Error occurred at line $LINENO: $BASH_COMMAND";' ERR

# Default values
RELEASE_VERSION="${1:-}"
RELEASE_DIR="${2:-release}"

if [ -z "$RELEASE_VERSION" ]; then
  echo "Usage: $0 <version> [work_dir]"
  echo "  version: The release version (e.g., v1.2.3)"
  echo "  work_dir: Working directory (default: release)"
  exit 1
fi

# create a director for the connector package definition
mkdir -p ${RELEASE_DIR}/package

# enable execution of the plugin binary
chmod +x ./${RELEASE_DIR}/artifacts/ndc-postgres-cli-*

# initialize the package definition with empty configuration
./${RELEASE_DIR}/artifacts/ndc-postgres-cli-x86_64-unknown-linux-gnu --context=${RELEASE_DIR}/package initialize

# export env vars for templating
export RELEASE_VERSION="$RELEASE_VERSION"

# add the connector metadata from template
mkdir -p ${RELEASE_DIR}/package/.hasura-connector
# Use a limited set of variables to substitute with envsubst
envsubst '${RELEASE_VERSION}' < ci/templates/connector-metadata.yaml > ${RELEASE_DIR}/package/.hasura-connector/connector-metadata.yaml

# create a tarball of the package definition
tar vczf ${RELEASE_DIR}/artifacts/package.tar.gz -C ${RELEASE_DIR}/package .
