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
export LINUX_AMD64_SHA256=$(sha256sum ${RELEASE_DIR}/artifacts/ndc-postgres-cli-x86_64-unknown-linux-gnu      | cut -f1 -d' ')
export MACOS_AMD64_SHA256=$(sha256sum ${RELEASE_DIR}/artifacts/ndc-postgres-cli-x86_64-apple-darwin           | cut -f1 -d' ')
export WINDOWS_AMD64_SHA256=$(sha256sum ${RELEASE_DIR}/artifacts/ndc-postgres-cli-x86_64-pc-windows-msvc.exe  | cut -f1 -d' ')
export LINUX_ARM64_SHA256=$(sha256sum ${RELEASE_DIR}/artifacts/ndc-postgres-cli-aarch64-unknown-linux-gnu     | cut -f1 -d' ')
export MACOS_ARM64_SHA256=$(sha256sum ${RELEASE_DIR}/artifacts/ndc-postgres-cli-aarch64-apple-darwin          | cut -f1 -d' ')

# add the connector metadata from template
mkdir -p ${RELEASE_DIR}/package/.hasura-connector
# Use a limited set of variables to substitute with envsubst
envsubst '${RELEASE_VERSION}${LINUX_AMD64_SHA256}${MACOS_AMD64_SHA256}${WINDOWS_AMD64_SHA256}${LINUX_ARM64_SHA256}${MACOS_ARM64_SHA256}' < ci/templates/connector-metadata.yaml > ${RELEASE_DIR}/package/.hasura-connector/connector-metadata.yaml

# create a tarball of the package definition
tar vczf ${RELEASE_DIR}/artifacts/connector-definition.tgz -C ${RELEASE_DIR}/package .
