#!/usr/bin/env bash
#
# To get the skopeo dependency automatically, run with:
#
#     $ nix run .#publish-docker-image <github-ref> <image>
#
set -euo pipefail

DRY_RUN=false
if [[ "${1:-}" == '-n' || "${1:-}" == '--dry-run' ]]; then
  DRY_RUN=true
  echo "$(tput bold)$(tput setaf 1)DRY RUN; some steps will be skipped$(tput sgr0)"
  shift
fi

if [[ $# -ne 2 ]]; then
    echo >&2 "Usage: ${0} [-n|--dry-run] REF IMAGE"
    echo >&2
    echo >&2 '    REF should be in the form "refs/heads/<branch>" or "refs/tags/<tag>"'
    echo >&2 '      (in a Github workflow the variable "github.ref" has this format)'
    echo >&2
    echo >&2 '    IMAGE is the path of the Docker image, e.g. "ghcr.io/hasura/ndc-postgres"'
    echo >&2
    echo >&2 '    "--dry-run" will not push anything, but it will still build'
    exit 1
fi

github_ref="$1"
image="$2"

# Runs the given command, unless `--dry-run` was set.
function run {
  if "$DRY_RUN"; then
    echo "$(tput bold)$(tput setaf 1)not running:$(tput sgr0) $*"
  else
    echo "$(tput bold)$(tput setaf 2)running:$(tput sgr0) $*"
    "$@"
  fi
}

# Assumes that the given ref is a branch name. Sets a tag for a docker image of
# the form:
#
#                dev-main-bffd555
#                --- ---- -------
#                ↑   ↑       ↑
#     prefix "dev"   |      commit hash
#                  branch
#
# Additionally sets a branch tag assuming this is the latest tag for the given
# branch. The branch tag has the form: dev-main
# Also sets the 'latest' tag
# Also sets a tag with just the branch short hash
function set_dev_tags {
    local branch="$1"
    # replace '.' and '/' in branch name with '-'
    local tidy_branch
    tidy_branch="$(tr './' '-' <<< "$branch")"
    local branch_prefix="dev-${tidy_branch}"
    local version
    local short_hash
    short_hash="$(git rev-parse --short=9 HEAD)"
    version="${branch_prefix}-${short_hash}"
    export docker_tags=("$version" "$branch_prefix" "$short_hash" "latest")
}

# The Github workflow passes a ref of the form refs/heads/<branch name> or
# refs/tags/<tag name>. This function sets an array of docker image tags based
# on either the given branch or tag name.
#
# If a tag name does not start with a "v" it is assumed to not be a release tag
# so the function sets an empty array.
#
# If the input does look like a release tag, set the tag name as the sole docker
# tag.
#
# If the input is a branch, set docker tags via `set_dev_tags`.
function set_docker_tags {
    local input
    input="$1"
    if [[ $input =~ ^refs/tags/(v.*)$ ]]; then
        local tag="${BASH_REMATCH[1]}"
        export docker_tags=("$tag" "latest")
    elif [[ $input =~ ^refs/heads/(.*)$ ]]; then
        local branch="${BASH_REMATCH[1]}"
        set_dev_tags "$branch"
    else
        export docker_tags=("latest")
    fi
}

function publish_multi_arch {
    local input
    local image_archive
    local image_path_for_arch

    architectures=('aarch64' 'x86_64')

    input="$1"
    set_docker_tags "$input"
  
    # do nothing if no tags found
    if [[ ${#docker_tags[@]} == 0 ]]; then
        echo "The given ref, ${input}, was not a release tag or a branch - will not publish a docker image"
        exit
    fi

    # build and push the individual images for each architecture
    for arch in "${architectures[@]}"; do
      # build the docker image
      image_archive="docker-archive://$(nix build --print-out-paths ".#docker-${arch}-linux")"

      echo "Will publish docker image with tags: ${docker_tags[*]}"
      skopeo inspect "$image_archive"

      image_path_for_arch="${image}-${arch}" 
      for tag in "${docker_tags[@]}"; do
          echo
          echo "Pushing docker://${image_path_for_arch}:${tag}"
          run skopeo copy "$image_archive" "docker://${image_path_for_arch}:${tag}"
      done
    done

    # now create and push the manifest
    for tag in "${docker_tags[@]}"; do
      echo "Creating manifest for ${image}:${tag}"
      # create a manifest referencing both architectures
      # i did not use a loop here, forgive me
      run docker manifest create \
          "$image:$tag" \
           --amend "${image}-aarch64:${tag}" \
           --amend "${image}-x86_64:${tag}"
      
      # push manifest as the main image
      run docker manifest push "${image}:${tag}"
    done
}

publish_multi_arch "$github_ref"
