#!/usr/bin/env python3

# Generates the release notes for a GitHub release automatically.
#
# These notes consist of:
#   1. the Docker image name
#   2. the part of the changelog corresponding to the given version

import argparse
import sys

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("version")
    args = parser.parse_args()

    print_docker_image(args.version)
    print_changelog_for_version(args.version)

def print_docker_image(version):
    print('The connector Docker image is:')
    print('')
    print(f'    ghcr.io/hasura/ndc-postgres:{version}')
    print('')

def print_changelog_for_version(version):
    recording = False
    changelog_lines = []
    with open("changelog.md") as file:
        for line in file:
            line = line.rstrip() # remove trailing spaces and newline
            # start recording lines when we find the entry corresponding to the
            # given version
            if line.startswith(f"## [{version}]"):
                recording = True
                continue
            if recording:
                # stop when we hit the next section or the end
                if line.startswith("## ") or line == "<!-- end -->":
                    break
                changelog_lines.append(line)

        # discard blank lines at the start or end
        try:
            while changelog_lines[0] == "":
                changelog_lines.pop(0)
            while changelog_lines[-1] == "":
                changelog_lines.pop()
        except IndexError:
            pass

    # if it's empty, we have failed
    if not changelog_lines:
        print(f"Could not find a changelog for version {version}.", file=sys.stderr)
        sys.exit(1)

    # print the result
    print('## Changelog')
    print()
    for line in changelog_lines:
        print(line)

if __name__ == '__main__':
    main()
