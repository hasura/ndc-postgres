#!/usr/bin/env bash
#
# To get the skopeo dependency automatically, run with:
#
#     $ nix run .#publish-docker-image <github-ref>
#
set -euo pipefail

if [ -z "${1+x}" ]; then
    echo "Expected argument of the form refs/heads/<branch name> or refs/tags/<tag name>."
    echo "(In a Github workflow the variable github.ref has this format)"
    exit 1
fi

github_ref="$1"
binary_image_name="$2" # ie, 'ndc-postgres'

image_path="ghcr.io/hasura/${binary_image_name}"

# Assumes that the given ref is a branch name. Sets a tag for a docker image of
# the form:
#
#                dev-main-20230601T1933-bffd555
#                --- ---- ------------- -------
#                ↑   ↑         ↑           ↑
#     prefix "dev"   branch    |        commit hash
#                              |
#                    commit date & time (UTC)
#
# Additionally sets a branch tag assuming this is the latest tag for the given
# branch. The branch tag has the form: dev-main
function set_dev_tags {
    local branch="$1"
    # replace '/' in branch name with '-'
    local tidy_branch
    tidy_branch="$(echo "${branch}" | tr "//" -)"
    local branch_prefix="dev-$tidy_branch"
    local version
    version=$(
        TZ=UTC0 git show \
            --quiet \
            --date='format-local:%Y%m%dT%H%M' \
            --format="$branch_prefix-%cd-%h"
    )
    export docker_tags=("$version" "$branch_prefix")
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
    local input="$1"
    if [[ $input =~ ^refs/tags/(v.*)$ ]]; then
        local tag="${BASH_REMATCH[1]}"
        export docker_tags=("$tag")
    elif [[ $input =~ ^refs/heads/(.*)$ ]]; then
        local branch="${BASH_REMATCH[1]}"
        set_dev_tags "$branch"
    else
        export docker_tags=()
    fi
}

function publish_multi_arch {
    local input="$1"
    
    set_docker_tags "$input"
  
    architectures=("aarch64" "x86_64")

    # do nothing if no tags found
    if [[ ${#docker_tags[@]} == 0 ]]; then
        echo "The given ref, $input, was not a release tag or a branch - will not publish a docker image"
        exit
    fi

    # build and push the individual images for each architecture
    for arch in "${architectures[@]}"; do
      # build the docker image
      nix build .#"${binary_image_name}"-docker-"${arch}"-linux
      echo "Will publish docker image with tags: ${docker_tags[*]}"

      # grab result from ./result
      ls -lh result
      local image_archive
      image_archive=docker-archive://"$(readlink -f result)"
      skopeo inspect "$image_archive"

      local image_path_for_arch
      image_path_for_arch="${image_path}-${arch}" 

      for tag in "${docker_tags[@]}"; do
          echo
          echo "Pushing docker://$image_path_for_arch:$tag"
          skopeo copy "$image_archive" docker://"$image_path_for_arch:$tag"
      done
    done

    # now create and push the manifest
    for tag in "${docker_tags[@]}"; do
      echo "Creating manifest for $image_path:$tag"
      # create a manifest referencing both architectures
      # i did not use a loop here, forgive me
      docker manifest create \
          "$image_path:$tag" \
           --amend "${image_path}-aarch64:$tag" \
           --amend "${image_path}-x86_64:$tag"
      
      # push manifest as the main image
      docker manifest push "$image_path:$tag"
    done
}

publish_multi_arch "$github_ref"
