window.BENCHMARK_DATA = {
  "lastUpdate": 1711444231647,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9513a15bdbaed49f44b91ad4cde09b8db213cb6a",
          "message": "Publish CLI binaries for all target platforms. (#332)\n\n### What\n\nIn order for the Hasura CLI to work with ndc-postgres, it needs to know\nabout our CLI.\n\nWhich means we need to build it.\n\nFor now, we just store it in GitHub artifacts. Later, we will make this\npart of the release process, and releases will have binaries attached to\nthem.\n\n### How\n\nI have added a GitHub Actions job to build the CLI and publish an\nartifact.\n\nIt does this for 5 platforms:\n\n- Linux on x86_64 (`x86_64-unknown-linux-gnu`)\n- Linux on aarch64 (`aarch64-unknown-linux-gnu`)\n- macOS on x86_64 (`x86_64-apple-darwin`)\n- macOS on aarch64 (`aarch64-apple-darwin`)\n- Windows on x86_64 (`x86_64-pc-windows-msvc`)",
          "timestamp": "2024-02-28T20:20:59Z",
          "tree_id": "3c529bb01c526358dd0a77dbcaf0de1f89101348",
          "url": "https://github.com/hasura/ndc-postgres/commit/9513a15bdbaed49f44b91ad4cde09b8db213cb6a"
        },
        "date": 1709152038917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.130249,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.3547366,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.462708417640027,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.251886155397205,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25619838710508563,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.858491,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.28375139999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.1158533002742,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.281410041694528,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5927105660396379,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.078613,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.8432024,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.489087936013114,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.473291127284185,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42613545238958145,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.016301,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.697269,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.21825419711509,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.577705790614139,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41312876835712226,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.2629525,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.93802,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.88914269920309,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.438690705908115,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39467111544815914,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35974ab126ce840bddca12e22a6f2db942e2ade0",
          "message": "Optionally initialize the configuration directory with metadata. (#333)\n\n### What\n\nTo publish the connector to the NDC Hub, we need to give it some\nmetadata, containing information such as the Docker image + tag, the CLI\nplugin name, etc.\n\nThis information is specified in the [Packaging\nRFC](https://github.com/hasura/ndc-hub/blob/main/rfcs/0001-packaging.md#connector-definition).\n\nI've added a `--with-metadata` flag to the CLI `initialize` command\nwhich creates this metadata. It's unlikely a user will need this, but it\nfeels like the best place for it, and there is no harm in allowing a\nuser to do this themselves.\n\n### How\n\nI've converted the metadata schema into Rust types. We construct the\nappropriate metadata, serialize it to YAML, and write it to disk in the\ncorrect location.\n\nWe capture the `RELEASE_VERSION` environment variable at build time, and\nif it's set, use that for versions. Otherwise we use `latest`. (I've\ntold `clap` about this too so you can run `ndc-postgres-cli --version`.)\n\nIn release builds, we capture Git information if `RELEASE_VERSION` is\nnot set; in debug builds, we don't bother.",
          "timestamp": "2024-02-29T16:07:41Z",
          "tree_id": "e6b410e160a28e9fd4f52799b3adcaf46580c13a",
          "url": "https://github.com/hasura/ndc-postgres/commit/35974ab126ce840bddca12e22a6f2db942e2ade0"
        },
        "date": 1709223250932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.403535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.92986100000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.91194795045302,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.160708083030393,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25981896635353774,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.1510955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.92630300000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.19372732253771,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.357335265330768,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5868264671326303,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.331451,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.1831072,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.16319142971957,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.965857067709571,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.46153737526312183,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.197596,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.71805814999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.759881634403214,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.897349178586367,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41094471215392064,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.1288895,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.47189364999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.36400335197037,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.475220254044864,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41438943378103865,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "136eae0efe14548099b6fe52ca249c6b3dfbf202",
          "message": "CI: Publish releases automatically from tags. (#334)\n\n### What\n\nWhen we tag a commit with a version number (e.g. `v1.2.34`), a new job\nwill now:\n\n1. Create a GitHub release (in draft).\n2. Populate the release notes automatically from `changelog.md`.\n3. Build CLI binaries with the version baked in.\n4. Generate the connector metadata using the CLI.\n5. Upload the metadata and CLI binaries as assets.\n\n### How\n\nScripting shenanigans.\n\nThere's a new job to make the release, and a script that pulls out the\nrelevant section from the changelog to build the release notes.",
          "timestamp": "2024-03-01T14:03:58Z",
          "tree_id": "9d8c634fcaa8dd2acadce32123cc9e1c88db856e",
          "url": "https://github.com/hasura/ndc-postgres/commit/136eae0efe14548099b6fe52ca249c6b3dfbf202"
        },
        "date": 1709302182811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.485556,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 96.43273560000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.67362547895121,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.009226245932652,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2911872907704814,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.198559,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.73595440000005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.768384430258536,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5430978017523245,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6185605463136775,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 75.219774,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 105.849759,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 45.24556281209814,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.724366964991582,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.47038108403720547,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 67.175506,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.97443225,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.84727584616425,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.4392484428116745,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4499959975169357,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.51504349999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 92.60533099999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.469427142181814,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.563051454296229,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43781125736614085,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "paf31@cantab.net",
            "name": "Phil Freeman",
            "username": "paf31"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a16ace08f183d6aebf499b93e17fc64837a42ef",
          "message": "Update to spec-rc.19 (#335)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate to ndc-spec rc.19 in anticipation of tagging 0.1.0 today.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-04T12:15:14Z",
          "tree_id": "72a4a9d7441d6c2d7de7f84ed5c5bf5504bd2415",
          "url": "https://github.com/hasura/ndc-postgres/commit/8a16ace08f183d6aebf499b93e17fc64837a42ef"
        },
        "date": 1709554919354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.889594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.2023666,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.554105593513434,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.769416835984522,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2563007639643346,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.6114545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.65173249999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.254812598104955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.183580794888414,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5893738858153943,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.46363149999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.82433765,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.05976465354297,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.729275826665322,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44863061297314416,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.061734,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.4728832,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.84227545863477,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.651877228828333,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41279809994134886,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.731256,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.2104295,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.9086502273915,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.462089816073153,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4070947384486808,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "935fb0bcf2cfe88d03d1e896df33b64feb2daa69",
          "message": "chore(deps): Bump insta from 1.35.1 to 1.36.1 (#336)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.35.1 to 1.36.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.36.1</h2>\n<ul>\n<li>Fix an ownership issue introduced in 1.36 with snapshot assertions.\n<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/453\">#453</a></li>\n</ul>\n<h2>1.36.0</h2>\n<ul>\n<li>\n<p>Deprecate <code>INSTA_FORCE_UPDATE_SNAPSHOTS</code> env-var for\n<code>INSTA_FORCE_UPDATE</code>.\nThe latter was documented, the former was implemented. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/449\">#449</a></p>\n</li>\n<li>\n<p>Add <code>require_full_match</code> option. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/448\">#448</a></p>\n</li>\n<li>\n<p>Deprecate <code>assert_display_snapshot!</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/385\">#385</a></p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/3cb9934aa30d16ba0dc9355413a01d299e340015\"><code>3cb9934</code></a>\n1.36.1</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/28bc0d57aa03494e49f91b089520ef0f161cbbbb\"><code>28bc0d5</code></a>\nFix ownership issue (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/453\">#453</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/23c045d277665d0fa03cb8953ef3c30799d7ae65\"><code>23c045d</code></a>\n1.36.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/1fc3983fbcf400c018bd633149d1615ae0fbe5e4\"><code>1fc3983</code></a>\nBetter missing file errors (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/451\">#451</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/efa031cf307c26c5293c2a0e712429d899140e58\"><code>efa031c</code></a>\nEnsure cargo insta sets old envvar</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/780c343f5e8a0891ac75d01307b7ca55f7988b8c\"><code>780c343</code></a>\nRestore cargo-insta compat with older insta (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/452\">#452</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/0d4bab1fcd1d17890ee43f825c0280506f4b8d4b\"><code>0d4bab1</code></a>\nUpdate changelog</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/8221931101fcade23feb6033c0955c6d26103992\"><code>8221931</code></a>\nDeprecate <code>assert_display_snapshot</code>, refactor macros (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/385\">#385</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/686de754aa613ccc820541ce1d7f95ab1a0095ee\"><code>686de75</code></a>\nAdd <code>require_full_match</code> option (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/448\">#448</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/189290fbb15d6898cdc502d7505b158ed093eeef\"><code>189290f</code></a>\nAlign env var with docs (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/449\">#449</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.35.1...1.36.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.35.1&new-version=1.36.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T13:54:40Z",
          "tree_id": "11cc77ccd439e0ee7fcdd0a92174c994b73c1c1c",
          "url": "https://github.com/hasura/ndc-postgres/commit/935fb0bcf2cfe88d03d1e896df33b64feb2daa69"
        },
        "date": 1709560849861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.408216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.1435166,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.508850410704262,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.72205700441669,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2675084258769005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.671907,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.95754759999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.016173102908986,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.426736073817736,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6069823788500208,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.9428145,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.99950489999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.14630572865166,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.650739951193728,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44386734150269175,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.405702,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.78668049999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.94420188741863,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7082585911171435,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4304341249107714,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.283985,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.03509425,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.52620009229709,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.616278948371644,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.411410076269644,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "38868d08b0dbf656052346b274db5c2c2ad297a7",
          "message": "chore(deps): Bump indexmap from 2.2.3 to 2.2.5 (#337)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.3 to\n2.2.5.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.2.5</h2>\n<ul>\n<li>Added optional <code>borsh</code> serialization support.</li>\n</ul>\n<h2>2.2.4</h2>\n<ul>\n<li>Added an <code>insert_sorted</code> method on <code>IndexMap</code>,\n<code>IndexSet</code>, and <code>VacantEntry</code>.</li>\n<li>Avoid hashing for lookups in single-entry maps.</li>\n<li>Limit preallocated memory in <code>serde</code> deserializers.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/184fe4bfcba20e21242c924220170b98be157d45\"><code>184fe4b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/320\">#320</a>\nfrom cuviper/release-2.2.5</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5d7bd5e6e3946678375ead7e72714162f3ad9a5e\"><code>5d7bd5e</code></a>\nRelease 2.2.5</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/c934ace47e4eb8a9cbd2f09a9d70e4e123b5cf0f\"><code>c934ace</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/313\">#313</a>\nfrom heliaxdev/heliax/borsh-support</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b81a4d25e1703dfd574aee4551460ba571e1c870\"><code>b81a4d2</code></a>\nUse S for the BuildHasher parameter</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/32793f1211fdf88b475e909259470011edfba152\"><code>32793f1</code></a>\nDon't require BuildHasher in BorshSerialize</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b8b1f52599d7fee3458bad36110d8a495ddee443\"><code>b8b1f52</code></a>\nci: reduce features on MSRV</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/6ad3e42dc34a0f902090aa69e0aa0ce82508a4db\"><code>6ad3e42</code></a>\nInclude <code>borsh</code> in CI workflow</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/c610e14ea059dc8e99359edf5fa4a1f53274a73b\"><code>c610e14</code></a>\nAdd <code>borsh</code> serialization roundtrip tests</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0804a16e24d2c8e0ed5e466df195fc358bb91b48\"><code>0804a16</code></a>\nImplement <code>borsh</code> serialization routines</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/ae38b913022251230c6b5fbe3df3706e300449ad\"><code>ae38b91</code></a>\nAdd <code>borsh</code> dep to Cargo manifest</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.3...2.2.5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.3&new-version=2.2.5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T13:54:43Z",
          "tree_id": "64bb56e37080c20102b6f31e1360890675699782",
          "url": "https://github.com/hasura/ndc-postgres/commit/38868d08b0dbf656052346b274db5c2c2ad297a7"
        },
        "date": 1709561144555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.663461,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.51061440000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.23232436059313,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.006910092421183,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2493978673346283,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.0490935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.370528,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.75646238243536,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.413672129684386,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6113513590340891,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.046418,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.62706234999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.32669396279897,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.499821924699361,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4470990051861223,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.827385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.0260405,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.66722121951059,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.738190072237387,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41828322120300016,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.582261,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.41967859999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.1213987713467,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.3912821788599175,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4005532484559656,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9a0f3bb55ec9a53c568cc68da16a9fda7cd4581",
          "message": "chore(deps): Bump env_logger from 0.10.2 to 0.11.1 (#339)\n\nBumps [env_logger](https://github.com/rust-cli/env_logger) from 0.10.2\nto 0.11.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/releases\">env_logger's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.11.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>fix(fmt): Fix passing of WriteStyle when using Target::Pipe by <a\nhref=\"https://github.com/Bobo1239\"><code>@​Bobo1239</code></a> in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/302\">rust-cli/env_logger#302</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Bobo1239\"><code>@​Bobo1239</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/302\">rust-cli/env_logger#302</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.11.0...v0.11.1\">https://github.com/rust-cli/env_logger/compare/v0.11.0...v0.11.1</a></p>\n<h2>v0.11.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>refactor(fmt): More anstream prep by <a\nhref=\"https://github.com/epage\"><code>@​epage</code></a> in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/297\">rust-cli/env_logger#297</a></li>\n<li>fix(fmt): Improve terminal styling support by <a\nhref=\"https://github.com/epage\"><code>@​epage</code></a> in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/298\">rust-cli/env_logger#298</a></li>\n<li>refactor: Split out env_filter package by <a\nhref=\"https://github.com/epage\"><code>@​epage</code></a> in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/299\">rust-cli/env_logger#299</a></li>\n<li>feat(filter): Add a Logger decorator by <a\nhref=\"https://github.com/epage\"><code>@​epage</code></a> in <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/pull/300\">rust-cli/env_logger#300</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.10.2...v0.11.0\">https://github.com/rust-cli/env_logger/compare/v0.10.2...v0.11.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/blob/main/CHANGELOG.md\">env_logger's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.11.1] - 2024-01-27</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Allow styling with <code>Target::Pipe</code></li>\n</ul>\n<h2>[0.11.0] - 2024-01-19</h2>\n<h3>Migration Guide</h3>\n<p><strong>env_logger::fmt::Style:</strong>\nThe bespoke styling API, behind <code>color</code>, was removed, in\nfavor of accepting any\nANSI styled string and adapting it to the target stream's\ncapabilities.</p>\n<p>Possible styling libraries include:</p>\n<ul>\n<li><a href=\"https://docs.rs/anstyle\">anstyle</a> is a minimal, runtime\nstring styling API and is re-exported as\n<code>env_logger::fmt::style</code></li>\n<li><a href=\"https://docs.rs/owo-colors\">owo-colors</a> is a feature\nrich runtime string styling API</li>\n<li><a href=\"https://docs.rs/color-print\">color-print</a> for\nfeature-rich compile-time styling API</li>\n</ul>\n<p><a\nhref=\"https://docs.rs/env_logger/latest/src/custom_format/custom_format.rs.html\">custom_format.rs</a>\nuses <code>anstyle</code> via\n<a\nhref=\"https://docs.rs/env_logger/latest/env_logger/fmt/struct.Formatter.html#method.default_level_style\"><code>Formatter::default_level_style</code></a></p>\n<h3>Breaking Change</h3>\n<ul>\n<li>Removed bespoke styling API\n<ul>\n<li><code>env_logger::fmt::Formatter::style</code></li>\n<li><code>env_logger::fmt::Formatter::default_styled_level</code></li>\n<li><code>env_logger::fmt::Style</code></li>\n<li><code>env_logger::fmt::Color</code></li>\n<li><code>env_logger::fmt::StyledValue</code></li>\n</ul>\n</li>\n<li>Removed <code>env_logger::filter</code> in favor of\n<code>env_filter</code></li>\n</ul>\n<h3>Compatibility</h3>\n<p>MSRV changed to 1.71</p>\n<h3>Features</h3>\n<ul>\n<li>Automatically adapt ANSI escape codes in logged messages to the\ncurrent terminal's capabilities</li>\n<li>Add support for <code>NO_COLOR</code> and\n<code>CLICOLOR_FORCE</code>, see <a\nhref=\"https://bixense.com/clicolors/\">https://bixense.com/clicolors/</a></li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Print colors when <code>is_test(true)</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/7113ad4bd937a56b260a799f8952f3e61d0eaea7\"><code>7113ad4</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/9f73bde4ba4d14085e0248af8eef87b506290443\"><code>9f73bde</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/489ba1886aab76760ab4fce702d9fdd6f77f1bdf\"><code>489ba18</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/302\">#302</a>\nfrom Bobo1239/main</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/6f31706a184ebe6332c1a4d083702a06b56cfb87\"><code>6f31706</code></a>\nfix(fmt): Fix passing of WriteStyle when using Target::Pipe</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/8f4361ba4439acb69068be0e181d2d1300b7218d\"><code>8f4361b</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/ba41ebb6d2d726403560cd987b1c5b3c6797f817\"><code>ba41ebb</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/5e226cb2b73d6c9f1b21886a4b504afdea1ebfcf\"><code>5e226cb</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/23441be565bcc4c65604a5e04d3990967e596ff4\"><code>23441be</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/300\">#300</a>\nfrom epage/other</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/6c2ea8028236fe80c1da0a354b19808bf440858d\"><code>6c2ea80</code></a>\nstyle(filter): Clean up</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/2d3526001061bacbf4a4c47767a318986c2c61b0\"><code>2d35260</code></a>\nfeat(filter): Add a Logger decorator</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.10.2...v0.11.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=env_logger&package-manager=cargo&previous-version=0.10.2&new-version=0.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T13:55:48Z",
          "tree_id": "a75ea42017e184e08d1adfa4755e0ca646888e65",
          "url": "https://github.com/hasura/ndc-postgres/commit/d9a0f3bb55ec9a53c568cc68da16a9fda7cd4581"
        },
        "date": 1709561183738,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 54.259056,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 85.54159499999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.99250962161416,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.772272583947071,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26856362028446024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.926709,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.87880039999993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.361808408213975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3976831278572277,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6082977135081643,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 74.316846,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.9508219,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 46.530809227581386,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.089696416545991,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.46726872845959166,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 66.9238915,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.03350125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.870891038313246,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.189442027356435,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4325430208790759,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.848439,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.77385179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.964481553791245,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.247707954904662,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43400974503347084,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb892aff071120dd7ea1a1bd732b05101d3ab69c",
          "message": "chore(deps): Bump tempfile from 3.10.0 to 3.10.1 (#338)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.10.0 to\n3.10.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.10.1</h2>\n<ul>\n<li>Handle potential integer overflows in 32-bit systems when\nseeking/truncating &quot;spooled&quot; temporary files past 4GiB\n(2³²).</li>\n<li>Handle a theoretical 32-bit overflow when generating a temporary\nfile name larger than 4GiB. Now it'll panic (on allocation failure)\nrather than silently succeeding due to wraparound.</li>\n</ul>\n<p>Thanks to <a\nhref=\"https://github.com/stoeckmann\"><code>@​stoeckmann</code></a> for\nfinding and fixing both of these issues.</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/094c1151105ae4641f367d3ab50da7bbfad62eb4\"><code>094c115</code></a>\nchore: release 3.10.1</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/56c593477f84e6effd906c81fbc22b68b734c2ac\"><code>56c5934</code></a>\nFix integer overflows and truncation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/278\">#278</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/5a949d6e75e5c559e09b5a865f534096199626b4\"><code>5a949d6</code></a>\nchore: 2021 edition (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/276\">#276</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.10.0...v3.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.10.0&new-version=3.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-04T14:15:39Z",
          "tree_id": "10e8ff501d2e5aeade7c6b04edf78e5e7612dd7a",
          "url": "https://github.com/hasura/ndc-postgres/commit/fb892aff071120dd7ea1a1bd732b05101d3ab69c"
        },
        "date": 1709562119444,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.8024815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.16312445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.171560849267237,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.305589397827134,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24971237377467911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 87.7855285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 126.90712454999989,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.01020294688745,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0875144306914137,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5518188778500271,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.29210549999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.959195,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.951133590921636,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.359464371080186,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44215463734077776,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.1708755,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 84.4940223,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.16658737632669,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.754732620114758,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3976169386314833,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.707295,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 81.93724379999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.824650758331806,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.577213502618314,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39753611716893367,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfcabb96a8b9531e0fbce9f89ec8dfc0ac35e270",
          "message": "Release: Publish SHA-256 checksums alongside CLI binaries. (#341)\n\n### What\n\nIn order to publish this CLI plugin in the index, we need SHA-256\nchecksums. We currently update the index manually, but let's generate\nthe list while we're publishing so the poor soul updating the index\ndoesn't have to download all the binaries to hash them.\n\n### How\n\nI have added a step to the release job that generates the checksums for\nall artifacts and stores them in the same directory, so they will be\nincluded.",
          "timestamp": "2024-03-04T15:37:40Z",
          "tree_id": "37f15047d70a0359bf94f0cb06600143b7b8da4a",
          "url": "https://github.com/hasura/ndc-postgres/commit/bfcabb96a8b9531e0fbce9f89ec8dfc0ac35e270"
        },
        "date": 1709567011857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.307186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.62171065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.9556754606529,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.857202039974943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2620313426645772,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.8827065,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.8392866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.81911019567287,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0933599223760524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5568435473520782,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.80947549999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.8138715,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.97975501434961,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.717328036049224,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4398476344674388,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.557704,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.0648398,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.17181443606044,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.966961652890596,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.412557002465594,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.531344000000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.99377809999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.798923918124174,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.862758272750511,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39521023979736375,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d304a83c5d41135d992132b77763d26f27803be",
          "message": "Prepare for releasing v0.4.0. (#340)\n\nThis updates the changelog and Cargo version in preparation for\nreleasing v0.4.0.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-04T15:42:45Z",
          "tree_id": "f70ce47da6f3d158d3b5bbcea3990b0dee1afb15",
          "url": "https://github.com/hasura/ndc-postgres/commit/8d304a83c5d41135d992132b77763d26f27803be"
        },
        "date": 1709567314974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.113965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.63287879999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.315817419944487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.56930260291405,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2638299315281816,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.981609,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.5108375999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.86758691529556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9940618663162653,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5724570745514741,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.585387,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.78194599999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.14259735161747,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5785603732541205,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4377061569573942,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.641225,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.484567,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.899498415543455,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6513887309897655,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40838685475647857,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.053858500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.75721019999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.841715712375,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.648596102498338,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4110256033181216,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69fce2c7a25c22a2cb870b86bde42d54202f8145",
          "message": "Read and write asynchronously from the file system. (#343)\n\n### What\n\nBlocking a Tokio thread with `std::fs` is probably not wise in a server,\nso I have replaced it with `tokio::fs`, thanks to a kind suggestion from\n@hallettj. In the CLI and tests it's less of a big deal, but I have\nchanged it regardless.\n\nThis has, conveniently, sped up a full test run from 15s to 10s on my\nMacBook. (On my Linux machine, the tests run very quickly even without\nthis change.)\n\n### How\n\n[`tokio::fs`](https://docs.rs/tokio/latest/tokio/fs/index.html) is\nTokio's asynchronous replacement for `std::fs`. It's mostly a drop-in\nreplacement when using the utility functions such as\n`read_to_string`—just add `await`.\n\nHowever, `fs::File::open` and `fs::File::create` now return an\n`AsyncRead` and `AsyncWrite` implementation respectively, which is not\ncompatible with `serde_json::from_reader` and `serde_json::to_writer`.\nTo work around this, I have replaced these operations with\n`fs::read_to_string` and `fs::write`, and converting to/from strings\nseparately.",
          "timestamp": "2024-03-06T09:01:17Z",
          "tree_id": "5b524ec6ce2a0762a04029412e82a2a580dc1ab1",
          "url": "https://github.com/hasura/ndc-postgres/commit/69fce2c7a25c22a2cb870b86bde42d54202f8145"
        },
        "date": 1709716465702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.411327,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.34848360000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.63885279566462,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.024273329015557,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2603112654479969,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.749579,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.9228091,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.57015806546655,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2689558056561623,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5946670033269595,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.511107,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.178033,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.54460561438147,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.635407325273135,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45167645971086007,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.480831,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.80717399999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.230487916737864,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.903701981205295,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4242099753568115,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.800375,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.40386715,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.47595318050771,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.393471112004427,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3926263893353253,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc2cd6b769f6326729963ffe26473cd1d814e893",
          "message": "Add the CLI binary name to the connector manifest. (#344)\n\n### What\n\nThis is required for the CLI to work. The binary name chosen is the one\nin the [CLI plugins index][CLI plugin manifest].\n\nThis couples the connector manifest to the CLI plugin manifest, which\nisn't ideal. We may re-negotiate this at a future time, e.g. by adding\nsyntax to this file to instruct the CLI to prefix the binary.\n\n[CLI plugin manifest]:\nhttps://github.com/hasura/cli-plugins-index/blob/master/plugins/ndc-postgres/v0.4.0/manifest.yaml\n\n### How\n\nTyping.",
          "timestamp": "2024-03-06T10:06:29Z",
          "tree_id": "6a7dec8166aaec44582661fd115a542636e2e791",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc2cd6b769f6326729963ffe26473cd1d814e893"
        },
        "date": 1709719941424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.969868500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 88.26714424999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.951423216769147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.185856754503359,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26355539392417293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.098016,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.1087015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.90997628966086,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.8126830859775254,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6592561694525323,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.233376,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.77047900000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.308985597392905,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.137756699441454,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4652137139665549,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.14641900000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 92.39679805,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 43.03699465019186,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.4069551789220895,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.45409010069670747,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.454859,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.77633309999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.00098118827316,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.2110111153948395,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4504957324574059,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "075f44a299c1f30e069b6aafc49d91af9a1024a1",
          "message": "Update documentation and add configuration cli docs (#342)\n\n### What\n\n1. We want the docs in this repo to be up to date.\n2. We want a more descriptive error message when ndc-postgres-cli update\nfails\n\n### How\n\n1. Add configuration docs\n2. Update the readme links to the release and remove out-of-date\nversions\n3. Update limitations\n4. in ndc-postgres-cli update, catch a (file) NotFound error and attach\nadditional information.",
          "timestamp": "2024-03-06T10:14:25Z",
          "tree_id": "c60bfeea96946c6f68bde66cb3b389e230a05b9b",
          "url": "https://github.com/hasura/ndc-postgres/commit/075f44a299c1f30e069b6aafc49d91af9a1024a1"
        },
        "date": 1709720478552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.241844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.66552939999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.107445829419525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.522992956291112,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2661005223009877,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.2157935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 146.5402355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.007100728023254,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2778814310856887,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5949127120122275,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.323842,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.222877,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.44552230518773,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.9796809356774006,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4508667139859178,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.675686,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.17361919999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.58553130778614,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.044061425492785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42717224164799755,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.874138,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.11166099999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.726095381040345,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.76695847478414,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4165693520996836,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e71e13d6347ff68637bd866aec5978bedc3ecca6",
          "message": "Set docker image Cmd to `serve` (#345)\n\n### What\n\nAs per the [NDC deployment\nspecification](https://github.com/hasura/ndc-hub/blob/main/rfcs/0000-deployment.md),\nthe `ENTRYPOINT` and `CMD` of the image of a connector should be set\nsuch that running the image starts the connector such that it may serve\nrequests.\n\nThis PR makes it so.\n\n### How\n\n* Add the `serve` command line argument to the `CMD` attribute.",
          "timestamp": "2024-03-06T13:19:16Z",
          "tree_id": "1b574187ad2637ff491448326d9ee2dbafb08ed4",
          "url": "https://github.com/hasura/ndc-postgres/commit/e71e13d6347ff68637bd866aec5978bedc3ecca6"
        },
        "date": 1709731492132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.425223,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.53679165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.63031948433713,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.373098792215998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2576023536023236,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.254946,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.43976869999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.93008463136834,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.104118060294134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5937830526614635,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.427253,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.42418,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.59675268159351,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.492738099019611,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44366471427624643,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.951859,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.956188,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.36288256176438,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.609448476625218,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4138066784131953,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.689916999999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.26557,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.10411165896395,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.539508755904059,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3969507627603288,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fee38b2bd498d922d38755d8a34ebaa0b3f178b6",
          "message": "Prepare for release v0.4.1. (#346)\n\nThere's a couple of fixes we'd like to publish.",
          "timestamp": "2024-03-06T23:46:22Z",
          "tree_id": "738406d6f5350563cc34fa7a6df2706199634cfb",
          "url": "https://github.com/hasura/ndc-postgres/commit/fee38b2bd498d922d38755d8a34ebaa0b3f178b6"
        },
        "date": 1709769124920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.680639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 72.99262539999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.869113591732248,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.074106274570081,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26437590568434904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.0694345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.85963149999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.32100883938215,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.199862687418822,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5785527933185465,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.978185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.85211989999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.21837316206584,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.96334820583575,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.425041578395536,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.342428,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 83.1311163,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.14102166650058,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.762465040174341,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3976426694945571,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.402188,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.75646619999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.25353079102471,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6182473708022584,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3935320061390632,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "87c39997702ec3db16a6ce7a18ff8bffa0c164d8",
          "message": "Fix changelog references for 0.4.1 (#347)\n\n### What\n\nFix the references in the links at the bottom of the changelog after\n0.4.1.",
          "timestamp": "2024-03-07T08:57:59Z",
          "tree_id": "c02959bdee35f63ee0265e9a425e8b73419b6e92",
          "url": "https://github.com/hasura/ndc-postgres/commit/87c39997702ec3db16a6ce7a18ff8bffa0c164d8"
        },
        "date": 1709802245132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.531385,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.5500255,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.630277304239627,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.803563512946596,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2522400319131249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.0028915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.5882306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.567985836918076,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.435868862259028,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.58284426201634,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.1389635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.928831,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.30691013956715,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.711214296545698,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4403810216425382,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.850473,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.92560950000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.11597547569011,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.516839478252777,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4126450944847031,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.2649015,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.97409124999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.73810562868159,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.2588402608393,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39102986082696245,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5c33424101e96cf432f615362326c0726207cd0",
          "message": "Print errors at the top level using `Display`. (#349)\n\n### What\n\nBy default, errors are printed using their `Debug` implementation, which\nis unpleasant to read.\n\nThe errors have a `Display` implementation, which we can opt to use by\ncapturing it and printing it explicitly.\n\n### How\n\nWe capture the error, print it to STDERR with `eprintln!`, then return\n`ExitCode::FAILURE` (mapped to `EXIT_FAILURE` from libc, which is exit\ncode 1 on POSIX systems).",
          "timestamp": "2024-03-07T11:25:45Z",
          "tree_id": "0dc6b1d6c4d4c581a2bad3da3272c50b02890ad4",
          "url": "https://github.com/hasura/ndc-postgres/commit/f5c33424101e96cf432f615362326c0726207cd0"
        },
        "date": 1709811079098,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.971413,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.0990197,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.14739382325631,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.34388204919955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2617314774747901,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.004413,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.20127245,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.65009421816634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3565128394641093,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5986558039994341,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.438422,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.61634519999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.86431417367802,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.908980732364974,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44586887223261157,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.445871,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 82.5594242,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.17472212380346,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.686589551141708,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39995326362198125,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.017326,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.277476,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.725643858775506,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.138012026997394,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3933510633221938,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "i.am.tom.harding@gmail.com",
            "name": "Tom Harding",
            "username": "i-am-tom"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe51af312dc7b4c8182592425b441155befd51ab",
          "message": "Compile-time E2E checks (#350)\n\n### What\n\nThis PR updates the E2E test job to run at PR-time, rather than after\nmerge. We can do this now that we don't use the published Docker image.\n\n### How\n\nWe check out the engine and the E2E tests, build everything, and then\n`cargo run` the tests. This means that we can block PRs from merging if\nthey break the E2Es, and it should also allow us, at last, to add\nmutation E2E tests.",
          "timestamp": "2024-03-07T13:33:45Z",
          "tree_id": "30dcdf6277446e96a94c45ea9b027554eed0e528",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe51af312dc7b4c8182592425b441155befd51ab"
        },
        "date": 1709818760078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.666609,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.02901705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.07925307948025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.711455821060998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26592779263663996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.921192,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 138.30426025000006,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.728980147921845,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.8122808698049653,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6163793455785898,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.229609,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.01634655,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.29187508262558,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.806010013857488,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45609452808805695,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.227832,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.76433259999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 43.68259347082236,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.180902402993347,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.44429000708633304,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.68623500000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.88084545,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.34671661232084,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.0161090432787105,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4276667497972573,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78ce366ce1897502801b5dc387e423c2c2302d31",
          "message": "Add a healthcheck to the Docker image. (#348)\n\n### What\n\nThis allows users to wait until it's started.\n\n### How\n\nWe add a healthcheck to the Docker image, following the [spec][Docker\nimage spec]. This uses the `check-health` subcommand, which will adopt\nthe container's `HASURA_CONNECTOR_PORT` if it is overridden.\n\n[Docker image spec]:\nhttps://github.com/moby/docker-image-spec/blob/main/spec.md",
          "timestamp": "2024-03-07T13:50:11Z",
          "tree_id": "ba12c2b03e94ed1277cbd0392b3c75fcd5221a62",
          "url": "https://github.com/hasura/ndc-postgres/commit/78ce366ce1897502801b5dc387e423c2c2302d31"
        },
        "date": 1709819741854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.628924,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.94963189999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.993142328374443,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.789656605766215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27468260934954936,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.88134299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.1810447999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.18876834777497,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5179804801996255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6316588688492453,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.555931,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.1511043,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.42098792376091,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.322541596083987,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45409211443345765,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 68.7795385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 101.49794014999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 43.232828242375916,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.203689161367478,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.439863271065469,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.381124,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 89.578073,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.417372753462644,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.93118697310976,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40861696966399297,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "distinct": true,
          "id": "b635139ce1f1456b11f8e3dec20f60378575b637",
          "message": "Revert \"Make `poolSettings` an explicit default\"\n\nThis reverts commit 5f9de8324790b98c6cf06db301c334f1595e0321.",
          "timestamp": "2024-03-11T14:00:31+01:00",
          "tree_id": "ba12c2b03e94ed1277cbd0392b3c75fcd5221a62",
          "url": "https://github.com/hasura/ndc-postgres/commit/b635139ce1f1456b11f8e3dec20f60378575b637"
        },
        "date": 1710162172078,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.409848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.5020594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.98308163749016,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.960255646084867,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2619019321907482,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.214293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.968588,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.55811042297102,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.40229773496862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.56982342751599,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.67825,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.05550199999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.620517201343915,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.682110608914456,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44034820863090623,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.907037,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.15650969999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.569797755724416,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.671293413493437,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41456087728306146,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.252267,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.6794391,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.34545612036368,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.289038570544591,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.389711934669202,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "distinct": true,
          "id": "5f9de8324790b98c6cf06db301c334f1595e0321",
          "message": "Make `poolSettings` an explicit default",
          "timestamp": "2024-03-11T13:58:50+01:00",
          "tree_id": "6b95952bccb4e051932868ef4750e82fb904b402",
          "url": "https://github.com/hasura/ndc-postgres/commit/5f9de8324790b98c6cf06db301c334f1595e0321"
        },
        "date": 1710162173155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.2885815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.658059,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.26690774666663,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.948359538811285,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25008819984506464,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.67283,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.90718245000005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.25390458037975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.279871268748977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6166413252402526,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.776109,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.45558519999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.892623119632994,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.694638583105821,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44615240631778386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.744139000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.37867075,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.0565686594466,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.688493191128529,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41574763739813336,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.629985500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.98801644999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.81252655641304,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.63679522324788,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3895555819630375,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee942fcaf3851734e0e5d4c05a6048b246074c3a",
          "message": "Make `poolSettings` an explicit default (#351)\n\n### What\n\nWe change the serialization policy of the `poolSettings` field such that\nthe field is always serialized, regardless of its value.\n\nThis ensures that:\n\n* It is possible for a user to pin the value, even the the pinned value\nis the default one.\n* The defaults of the field are captured at project initialization time\n(and optionally when introspecting anew)",
          "timestamp": "2024-03-11T13:47:37Z",
          "tree_id": "43c776e3f315810d011f1f2126a8aa5bb143c905",
          "url": "https://github.com/hasura/ndc-postgres/commit/ee942fcaf3851734e0e5d4c05a6048b246074c3a"
        },
        "date": 1710165383042,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.681984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.3888354,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.360169304316575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.784043323455027,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25145579477301694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.573293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.06631275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.303237398734375,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.484970632144176,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5982153855001765,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.74493799999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.87409654999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.753891836714565,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.810608584651057,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44472915055231566,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.074148,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.1909144,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.36444022314732,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.634143319285265,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4135194633321034,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.305829,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.8280394,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.60062511982234,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.674784606025682,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40565655934076117,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "b82fa0c327e3b19d8aece67acfec39988946d5de",
          "message": "chore(deps): Bump docker/login-action from 2 to 3 (#352)\n\nBumps [docker/login-action](https://github.com/docker/login-action) from\n2 to 3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/login-action/releases\">docker/login-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v3.0.0</h2>\n<ul>\n<li>Node 20 as default runtime (requires <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.308.0\">Actions\nRunner v2.308.0</a> or later) by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/593\">docker/login-action#593</a></li>\n<li>Bump <code>@​actions/core</code> from 1.10.0 to 1.10.1 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/598\">docker/login-action#598</a></li>\n<li>Bump <code>@​aws-sdk/client-ecr</code> and\n<code>@​aws-sdk/client-ecr-public</code> to 3.410.0 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/555\">docker/login-action#555</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/560\">docker/login-action#560</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/582\">docker/login-action#582</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/599\">docker/login-action#599</a></li>\n<li>Bump semver from 6.3.0 to 6.3.1 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/556\">docker/login-action#556</a></li>\n<li>Bump https-proxy-agent to 7.0.2 <a\nhref=\"https://redirect.github.com/docker/login-action/pull/561\">docker/login-action#561</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/588\">docker/login-action#588</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/login-action/compare/v2.2.0...v3.0.0\">https://github.com/docker/login-action/compare/v2.2.0...v3.0.0</a></p>\n<h2>v2.2.0</h2>\n<ul>\n<li>Switch to actions-toolkit implementation by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/409\">docker/login-action#409</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/470\">docker/login-action#470</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/476\">docker/login-action#476</a></li>\n<li>Bump <code>@​aws-sdk/client-ecr</code> and\n<code>@​aws-sdk/client-ecr-public</code> to 3.347.1 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/524\">docker/login-action#524</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/364\">docker/login-action#364</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/pull/363\">docker/login-action#363</a></li>\n<li>Bump minimatch from 3.0.4 to 3.1.2 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/354\">docker/login-action#354</a></li>\n<li>Bump json5 from 2.2.0 to 2.2.3 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/378\">docker/login-action#378</a></li>\n<li>Bump http-proxy-agent from 5.0.0 to 7.0.0 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/509\">docker/login-action#509</a></li>\n<li>Bump https-proxy-agent from 5.0.1 to 7.0.0 in <a\nhref=\"https://redirect.github.com/docker/login-action/pull/508\">docker/login-action#508</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/login-action/compare/v2.1.0...v2.2.0\">https://github.com/docker/login-action/compare/v2.1.0...v2.2.0</a></p>\n<h2>v2.1.0</h2>\n<ul>\n<li>Ensure AWS temp credentials are redacted in workflow logs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> (<a\nhref=\"https://redirect.github.com/docker/login-action/issues/275\">#275</a>)</li>\n<li>Bump <code>@​actions/core</code> from 1.6.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/docker/login-action/issues/252\">#252</a>\n<a\nhref=\"https://redirect.github.com/docker/login-action/issues/292\">#292</a>)</li>\n<li>Bump <code>@​aws-sdk/client-ecr</code> from 3.53.0 to 3.186.0 (<a\nhref=\"https://redirect.github.com/docker/login-action/issues/298\">#298</a>)</li>\n<li>Bump <code>@​aws-sdk/client-ecr-public</code> from 3.53.0 to 3.186.0\n(<a\nhref=\"https://redirect.github.com/docker/login-action/issues/299\">#299</a>)</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/login-action/compare/v2.0.0...v2.1.0\">https://github.com/docker/login-action/compare/v2.0.0...v2.1.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/343f7c4344506bcbf9b4de18042ae17996df046d\"><code>343f7c4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/login-action/issues/599\">#599</a>\nfrom docker/dependabot/npm_and_yarn/aws-sdk-dependenc...</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/aad0f974f21dc644b324e9fa84c4e364f62acbe6\"><code>aad0f97</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/2e0cd391447ec1a654ce199502a5d596fad131a2\"><code>2e0cd39</code></a>\nbuild(deps): bump the aws-sdk-dependencies group with 2 updates</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/203bc9c4eff55a7fac1552bc4811dc0ea4814f2e\"><code>203bc9c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/login-action/issues/588\">#588</a>\nfrom docker/dependabot/npm_and_yarn/proxy-agent-depen...</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/2199648fc889a2592472959743a8e7d4423bcb29\"><code>2199648</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/b489376173c4ff2c6e783dcb597ba8eff69245fe\"><code>b489376</code></a>\nbuild(deps): bump the proxy-agent-dependencies group with 1 update</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/7c309e74e68d0a0055fd02607b10b3d96510544c\"><code>7c309e7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/login-action/issues/598\">#598</a>\nfrom docker/dependabot/npm_and_yarn/actions/core-1.10.1</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/0ccf222961de35820c1704a0293ca7483b07d065\"><code>0ccf222</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/56d703e106032867ad04c1e54d781c209f451e26\"><code>56d703e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/login-action/issues/597\">#597</a>\nfrom docker/dependabot/github_actions/aws-actions/con...</li>\n<li><a\nhref=\"https://github.com/docker/login-action/commit/24d3b3519e6e369d4d0a307a02881c2f81318560\"><code>24d3b35</code></a>\nbuild(deps): bump <code>@​actions/core</code> from 1.10.0 to 1.10.1</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/login-action/compare/v2...v3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/login-action&package-manager=github_actions&previous-version=2&new-version=3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-11T18:01:19Z",
          "tree_id": "bc9f267f8477a982a0c1444f29fc5d272b29e742",
          "url": "https://github.com/hasura/ndc-postgres/commit/b82fa0c327e3b19d8aece67acfec39988946d5de"
        },
        "date": 1710180614767,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.120308,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.9625889,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.64812080666691,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.588905480045469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25961591831884157,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.030294,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.96275344999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.72604769967384,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.008328211571623,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5748959052966514,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.8700925,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.34224495,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.711420776902905,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.645379091656565,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4234507612241076,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.677825,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.66892,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.72168077711472,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.59728394674358,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4039202185392125,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.358587,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.15997709999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.28458151747453,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.426147113189479,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4143178773936675,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "159f90d03d881dc5e7b120c22136e898be573c25",
          "message": "chore(deps): Bump actions/upload-artifact from 3 to 4 (#355)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 3 to 4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.0.0</h2>\n<h2>What's Changed</h2>\n<p>The release of upload-artifact@v4 and download-artifact@v4 are major\nchanges to the backend architecture of Artifacts. They have numerous\nperformance and behavioral improvements.</p>\n<p>ℹ️ However, this is a major update that includes breaking changes.\nArtifacts created with versions v3 and below are not compatible with the\nv4 actions. Uploads and downloads <em>must</em> use the same major\nactions versions. There are also key differences from previous versions\nthat may require updates to your workflows.</p>\n<p>For more information, please see:</p>\n<ol>\n<li>The <a\nhref=\"https://github.blog/changelog/2023-12-14-github-actions-artifacts-v4-is-now-generally-available/\">changelog</a>\npost.</li>\n<li>The <a\nhref=\"https://github.com/actions/upload-artifact/blob/main/README.md\">README</a>.</li>\n<li>The <a\nhref=\"https://github.com/actions/upload-artifact/blob/main/docs/MIGRATION.md\">migration\ndocumentation</a>.</li>\n<li>As well as the underlying npm package, <a\nhref=\"https://github.com/actions/toolkit/tree/main/packages/artifact\"><code>@​actions/artifact</code></a>\ndocumentation.</li>\n</ol>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/vmjoseph\"><code>@​vmjoseph</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/464\">actions/upload-artifact#464</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v4.0.0\">https://github.com/actions/upload-artifact/compare/v3...v4.0.0</a></p>\n<h2>v3.1.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(github): remove trailing whitespaces by <a\nhref=\"https://github.com/ljmf00\"><code>@​ljmf00</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/313\">actions/upload-artifact#313</a></li>\n<li>Bump <code>@​actions/artifact</code> version to v1.1.2 by <a\nhref=\"https://github.com/bethanyj28\"><code>@​bethanyj28</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/436\">actions/upload-artifact#436</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v3.1.3\">https://github.com/actions/upload-artifact/compare/v3...v3.1.3</a></p>\n<h2>v3.1.2</h2>\n<ul>\n<li>Update all <code>@actions/*</code> NPM packages to their latest\nversions- <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/374\">#374</a></li>\n<li>Update all dev dependencies to their most recent versions - <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/375\">#375</a></li>\n</ul>\n<h2>v3.1.1</h2>\n<ul>\n<li>Update actions/core package to latest version to remove\n<code>set-output</code> deprecation warning <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/351\">#351</a></li>\n</ul>\n<h2>v3.1.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump <code>@​actions/artifact</code> to v1.1.0 (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/327\">actions/upload-artifact#327</a>)\n<ul>\n<li>Adds checksum headers on artifact upload (<a\nhref=\"https://redirect.github.com/actions/toolkit/pull/1095\">actions/toolkit#1095</a>)\n(<a\nhref=\"https://redirect.github.com/actions/toolkit/pull/1063\">actions/toolkit#1063</a>)</li>\n</ul>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5d5d22a31266ced268874388b861e4b58bb5c2f3\"><code>5d5d22a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/515\">#515</a>\nfrom actions/eggyhead/update-artifact-v2.1.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/f1e993d9663a03508e7fc0370c744c4b963f0044\"><code>f1e993d</code></a>\nupdate artifact license</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/4881bfd3f27855c63733d8cfff17721cc0ad611f\"><code>4881bfd</code></a>\nupdating dist:</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/a30777e2653648a0a7bbd3efb5c96ef9131b96cc\"><code>a30777e</code></a>\n<a href=\"https://github.com/eggyhead\"><code>@​eggyhead</code></a></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/3a8048248f2f288c271830f8ecf2a1c5d8eb0e9a\"><code>3a80482</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/511\">#511</a>\nfrom actions/robherley/migration-docs-typo</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9d63e3f2f81d9dc4e13d83fc330408f8a94b79d1\"><code>9d63e3f</code></a>\nMerge branch 'main' into robherley/migration-docs-typo</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/dfa1ab292d2fdd78d056187f11c568c16ab53de9\"><code>dfa1ab2</code></a>\nfix typo with v3 artifact downloads in migration guide</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/d00351bf698398c17253d21cf8f90e57a344e14b\"><code>d00351b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/509\">#509</a>\nfrom markmssd/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/707f5a7b71e0fb01c5df1e16e9679a3292606ef2\"><code>707f5a7</code></a>\nUpdate limitation of <code>10</code> artifacts upload to\n<code>500</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/26f96dfa697d77e81fd5907df203aa23a56210a8\"><code>26f96df</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/505\">#505</a>\nfrom actions/robherley/merge-artifacts</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v3...v4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=3&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-11T18:05:23Z",
          "tree_id": "e4eb269558511cf2a33e37e8e3b08c042ebcd81f",
          "url": "https://github.com/hasura/ndc-postgres/commit/159f90d03d881dc5e7b120c22136e898be573c25"
        },
        "date": 1710180810340,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.166101,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.8572336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.30185407953304,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.954832620881728,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26346330034905086,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.966095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.7306555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.26123878285886,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.008904602626558,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.549608444156961,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.00298649999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.4591816,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.976674827811095,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.352970018502646,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4458991460841509,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.245371,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.32458639999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.753401232843906,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.690422533581547,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42456472158365505,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.327031,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.8863558,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.467901861956115,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.724274593647245,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4040671406796181,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b6ee1562d99bbac714c0b28b02a72c84741ea64",
          "message": "chore(deps): Bump extractions/setup-just from 1 to 2 (#353)\n\nBumps\n[extractions/setup-just](https://github.com/extractions/setup-just) from\n1 to 2.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/dd310ad5a97d8e7b41793f8ef055398d51ad4de6\"><code>dd310ad</code></a>\nThis is 2.0.0</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/b88c09d1cb550e9284df14b6382c3558f51a1d96\"><code>b88c09d</code></a>\nUpgrade GitHub Actions</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/dcec242065842e17e377d78f22614914acf4e530\"><code>dcec242</code></a>\nUpgrade dependencies</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/fbd91a81bd6f8bbd62cc6c9e2e8540bac23b83c9\"><code>fbd91a8</code></a>\nUse Node v20</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/502448742b9d90bbe0aec1ec3430857358327408\"><code>5024487</code></a>\nBuild: just v1.23.0 (<a\nhref=\"https://redirect.github.com/extractions/setup-just/issues/15\">#15</a>)</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/1b96160c16a7194488f07accd85a6b4c917b031b\"><code>1b96160</code></a>\ndoc: Fix invalid GHA syntax in github-token example (<a\nhref=\"https://redirect.github.com/extractions/setup-just/issues/12\">#12</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/extractions/setup-just/compare/v1...v2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=extractions/setup-just&package-manager=github_actions&previous-version=1&new-version=2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-11T18:05:49Z",
          "tree_id": "962e3357bd6fdc64d43b1d4cb12d502725d66df2",
          "url": "https://github.com/hasura/ndc-postgres/commit/7b6ee1562d99bbac714c0b28b02a72c84741ea64"
        },
        "date": 1710180857233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 56.3316115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.54459739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.896481561741673,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.888857879464844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26870293105790904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.58854500000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.696732,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.82593869290546,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.7144298165605534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5906885125549521,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.636793,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.8800725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.4193727562709,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.248640392083061,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44477064380297004,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.103553,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.209965,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.777008054621035,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.151321798136664,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41209844561384623,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.87062900000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.96310249999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.09662865370261,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.976896107618508,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41147740243724024,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "15b35357280687ecddfa6281622b7837620e821c",
          "message": "chore(deps): Bump env_logger from 0.11.1 to 0.11.3 (#357)\n\nBumps [env_logger](https://github.com/rust-cli/env_logger) from 0.11.1\nto 0.11.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/releases\">env_logger's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.11.3</h2>\n<h2>[0.11.3] - 2024-03-05</h2>\n<h3>Features</h3>\n<ul>\n<li>Experimental support for key-value logging behind\n<code>unstable-kv</code></li>\n</ul>\n<h2>v0.11.2</h2>\n<h2>[0.11.2] - 2024-02-13</h2>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/blob/main/CHANGELOG.md\">env_logger's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.11.3] - 2024-03-05</h2>\n<h3>Features</h3>\n<ul>\n<li>Experimental support for key-value logging behind\n<code>unstable-kv</code></li>\n</ul>\n<h2>[0.11.2] - 2024-02-13</h2>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/98ce8038803d048bf415a5ab13f7cc1aa61d242e\"><code>98ce803</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/7a161300c26d1a2b1f71c99e75e36d02ee11d094\"><code>7a16130</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/e55af6f7c3be0731c902025a76b42a97a97ead8e\"><code>e55af6f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/137\">#137</a>\nfrom tmccombs/structured</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/f6e2d45615057917b11dfc140b0be325b7ffd1b0\"><code>f6e2d45</code></a>\nfeat(kv): Use now-stable kv feature of log crate</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/9f4a33aac0745fd4d5ad0256b747ed44652cf6eb\"><code>9f4a33a</code></a>\nfeat(kv): Add styling for key in default format</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/9d26ad586ef5d6b4f77b0b3752dc7b624e82d29b\"><code>9d26ad5</code></a>\nfeat: Add support for Key-Value data in log records</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/8962096976b0fa9c05b8b5ba5251861d60abf943\"><code>8962096</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/314\">#314</a>\nfrom rust-cli/renovate/pre-commit-action-3.x</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/41272282713fd4ffa593133204a458fe24e3265d\"><code>4127228</code></a>\nchore(deps): update pre-commit/action action to v3.0.1</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/b0e3ea938427fa9a4350f816e579a7dab3d75041\"><code>b0e3ea9</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/522ce17fff0f9b46fb0741bea32aaacb1ff77cff\"><code>522ce17</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/310\">#310</a>\nfrom epage/docs</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.11.1...v0.11.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=env_logger&package-manager=cargo&previous-version=0.11.1&new-version=0.11.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-11T20:21:08Z",
          "tree_id": "26396f264fe8ce04eced345bbe3a634daf3e6d24",
          "url": "https://github.com/hasura/ndc-postgres/commit/15b35357280687ecddfa6281622b7837620e821c"
        },
        "date": 1710188955836,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.139358,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.64349979999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.234287345226146,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.109920137305838,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25642979833534113,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.969004,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.30159725,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.45875119270447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.036930687171207,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.58500208064518,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.4648415,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.16298315,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.93115146874125,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.24393413673981,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4365889888558943,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.290983,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.56236150000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.20350400385818,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.808686703491979,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40951289499069515,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.2814645,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.3375525999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.20774637246923,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.4364254120220465,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3839256213448544,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e4026bda65c4042c11191480d0115a52d875c31",
          "message": "chore(deps): Bump clap from 4.5.1 to 4.5.2 (#359)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.1 to 4.5.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.2</h2>\n<h2>[4.5.2] - 2024-03-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(macros)</em> Silence a warning</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.2] - 2024-03-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(macros)</em> Silence a warning</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f65d421607ba16c3175ffe76a20820f123b6c4cb\"><code>f65d421</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/886b2729e419114bf42f1a92c66d346c81aa8f33\"><code>886b272</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/3ba429752fdb19b7a1c2e151c41d5141ad5b9295\"><code>3ba4297</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5386\">#5386</a>\nfrom amaanq/static-var-name</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/2aea9504c4894b3bddf9cd4d2d6cba889307c157\"><code>2aea950</code></a>\nfix: Use SCREAMING_SNAKE_CASE for static variable\n<code>authors</code></li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/690f5557d7f25904c31ec9f2a3c3657cbb68c98e\"><code>690f555</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5382\">#5382</a>\nfrom clap-rs/renovate/pre-commit-action-3.x</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a2aa644368ec19026b16b870ec32dc57b325ba9b\"><code>a2aa644</code></a>\nchore(deps): update compatible (dev) (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5381\">#5381</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c233de53c0cca4281f444cf16d16d161bc9c3cab\"><code>c233de5</code></a>\nchore(deps): update pre-commit/action action to v3.0.1</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/d0028d74b507c6ce0a05cafd1f4c34bf7ec85c63\"><code>d0028d7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5371\">#5371</a>\nfrom BenWiederhake/dev-fix-link-command-trailing_var...</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0076cac7cb0b1ad4cc6f2b6c721d71f9e4d6947e\"><code>0076cac</code></a>\nfix(builder): Don't doc-link to undocumented item</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.1...v4.5.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.1&new-version=4.5.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-11T20:21:38Z",
          "tree_id": "6e7ae842fa939c2c8f39190418bec509273a992b",
          "url": "https://github.com/hasura/ndc-postgres/commit/5e4026bda65c4042c11191480d0115a52d875c31"
        },
        "date": 1710189140852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.2004375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.74984704999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.06898470319273,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.019104652341394,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2573871212604504,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.63973849999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.4834107,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.72645130711536,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0187097361538164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5741524991348366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.74192249999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.16505585,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.56232949906711,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.9835731779817465,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4450840163632482,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 66.38004000000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.98841639999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.05511563700211,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.860336152687047,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4187797950762725,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.537543,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.78911639999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.45728297638288,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.395860738608043,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41763377069845886,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebb7b535ef8869c01efe3587a80b966260417b59",
          "message": "Rename schema fields and add a jsonschema generation and ref on init (#361)\n\n### What\n\nThis PR does the following:\n\n1. It renames a few fields in the configuration:\n   - `configureOptions` -> `introspectionOptions`\n   - `mutationsVersion` moved from `configureOptions` to the top-level\n- connection uri, pool settings and isolation level are now nested under\n\"connectionSettings\"\n- Native queries use a new `ReadonlyColumnInfo` type instead of\n`ColumnInfo` type for arguments and column. ReadonlyColumnInfo does not\ncontain default, identity and generated information which we don't want\nto appear in autocomplete for native queries.\n2. It generates a `schema.jsonschema` file on cli `initialize` command\nnext to the `configuration.json` file\n3. It adds the `$schema` field to the configuration, referencing the\ngenerated `schema.jsonschema` file.\n\nThe purpose of (2) and (3) is to provide auto-complete features when\nediting the configuration in vscode (demo soon).\n\n![Screenshot from 2024-03-12\n16-56-07](https://github.com/hasura/ndc-postgres/assets/8547573/f4149d91-041a-4571-b387-0f873cc9ad21)",
          "timestamp": "2024-03-13T12:39:47Z",
          "tree_id": "a2521556590540f02ccc3dbab37ea9d95bb311c6",
          "url": "https://github.com/hasura/ndc-postgres/commit/ebb7b535ef8869c01efe3587a80b966260417b59"
        },
        "date": 1710334005805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.967186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.31702820000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.126936473933092,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.993495512077367,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26253000090613676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.030799,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.68932435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.890003233504565,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9448700714013185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5864052486221392,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.25024099999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.45246515000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.47919336810283,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.516728249131134,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4430814175820118,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.324796,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.72382879999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.74329624123956,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.527717421204912,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.405578353758075,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.758013500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.3461068,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.14531427666328,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.727975282757917,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4038738570972702,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7369212f37f0b751feae5b3c6765e99dc6bb2e54",
          "message": "Upgrade ndc-sdk. (#363)\n\n### What\n\nThis adds the `--host` switch and removes the v2 compatibility layer.\n\n### How\n\nCargo.",
          "timestamp": "2024-03-14T10:13:54Z",
          "tree_id": "e2ad466cc76a8e79fef754e1dee0df8174164131",
          "url": "https://github.com/hasura/ndc-postgres/commit/7369212f37f0b751feae5b3c6765e99dc6bb2e54"
        },
        "date": 1710411738775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.1136195,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.82855324999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.984230330479196,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.251089598794554,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2676933376229811,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.232439,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.00879719999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.918362566149625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.086826119887455,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6186944557592046,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.597645,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.3189982,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.21739903634345,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5378222838926945,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4371057948295344,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.466503,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 84.15212305,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.38102066609492,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.441398765916851,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.400729211208543,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.182347,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.09970519999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.86011534717305,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.437202182105004,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4028291774985645,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "591ef966b7d5cad8a3e174f4b665d80048f77d66",
          "message": "Add a Docker Compose watch item to the connector metadata. (#360)\n\n### What\n\nThis teaches the DDN CLI that the configuration should be synced, and\nthe connector container restarted, whenever the configuration changes.\n\n### How\n\nWhen emitting connector metadata, we include a `dockerComposeWatch`\nitem.",
          "timestamp": "2024-03-14T10:26:34Z",
          "tree_id": "79a3d378838f6e8b7420c9129637903f29f4251b",
          "url": "https://github.com/hasura/ndc-postgres/commit/591ef966b7d5cad8a3e174f4b665d80048f77d66"
        },
        "date": 1710412539029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.516379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.31055799999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.92784671725668,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.634260886705267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24625299807630427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.6915075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.65760899999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.11420172806529,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1045292410009964,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.587958072459655,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.548595,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.5203042,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.82880526489427,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.55387476506624,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43070037144435913,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.4361185,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.53924525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.56400910531748,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.586227172883099,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41503450696939853,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.966378,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.22277259999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.524410886426274,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.591895790839779,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4017222358196762,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "182708861f842fe94dc8b363753abcc821bb60bd",
          "message": "update command should not override the config file in some cases (#362)\n\n### What\n\nWe want the update command in ndc-postgres-cli to not override changed\nmade after we started introspecting but before we wrote the changes to\nfile, and not to write to the filesystem when the file does not need\nchanging.\n\n### How\n\n1. We loop the update operation 3 times\n2. We read the input file after the introspection took place as well\n3. If the input from before the introspection and the input from after\nthe introspection are the same we continue, otherwise we try again\n4. Before writing to file, we check that if the output is going to be\nthe same as the input, if it is the same, we skip writing, if not, we\nwrite.\n5. We add the `Eq` trait everywhere so we can compare the config.",
          "timestamp": "2024-03-14T11:19:00Z",
          "tree_id": "c025fb8a225d584e1219818967a09d37d6ed209a",
          "url": "https://github.com/hasura/ndc-postgres/commit/182708861f842fe94dc8b363753abcc821bb60bd"
        },
        "date": 1710415643917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.48943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.2094788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.16498027694941,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.018749737232977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2715221900882623,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.1012275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.31890739999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.56830789382401,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.7456186378189216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6156189995236914,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.151598,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.392855,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.06455896379936,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.02969453292674,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4463486286515157,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.420974,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.8701215,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.37040360077242,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.953683539848015,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40461627839543235,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.680428,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.101542,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.04799802740417,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.755474835704696,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4047500711992723,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3fa214a5735b936725ac52373213fb6fd24a4bb0",
          "message": "prepare to release v0.5.0 (#364)\n\n### What\n\nUpdate the release version and changelog to prepare for a new release.",
          "timestamp": "2024-03-14T13:21:03Z",
          "tree_id": "5375a46109a0ada3d9878679284ef5bca7d4af83",
          "url": "https://github.com/hasura/ndc-postgres/commit/3fa214a5735b936725ac52373213fb6fd24a4bb0"
        },
        "date": 1710422980373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.6349805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.61071175000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.220194338597548,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.656902925757183,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26589349734074136,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.159538,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.8059426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.702500893270035,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.165758410021162,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6352650950686728,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.5762605,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.97896250000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.6872316884661,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.378158679789799,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45767090696935697,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.390286,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.6343194,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.30049238802481,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.873044869266494,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4282048553915303,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.841998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.920729,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.01146306706215,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.962012775748377,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4149029919339444,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2377b0bfb6e80c368850b6a6df8d6101a29d71b",
          "message": "removing the prints from the config cli (#365)\n\n### What\n\nThe info prints that the config cli is doing something special are\nprinted as part of the cli. We don't like this so we remove them.\n\nhttps://hasurahq.slack.com/archives/C01RZPEPF0W/p1710504668667279",
          "timestamp": "2024-03-15T14:35:07Z",
          "tree_id": "36931de24bacb302a67de6ff76df52816cdd85f5",
          "url": "https://github.com/hasura/ndc-postgres/commit/d2377b0bfb6e80c368850b6a6df8d6101a29d71b"
        },
        "date": 1710513807629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.504445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.5879251,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.6679328749934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.26448184000655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25524982543262326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.425565,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.61796939999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.79412639505095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2349877013471726,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5797108814367727,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.502907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.40793379999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.35959881237175,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.545484864050998,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45076071643716226,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.515723,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.1828149,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.5119869051798,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.87853175778848,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39499388924721474,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.162337,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.1674756,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.22552696664316,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6523793636600175,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4150263454767335,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67dae07e729e8313a2134d71131a2c67e64871a8",
          "message": "fix names of fields in schema generation (#366)\n\n### What\n\nThe `/schema` endpoint was exposing the wrong column names in object\ntypes. This PR fixes this.\n\n### How\n\ncolumns, referenced by tables, native queries, etc. Have a type that\nlooks somewhat like this: `BTreeMap<String, ColumnInfo>`.\n\n`ColumnInfo` looks somewhat like this: `ColumnInfo { name: String, ...\n}`.\n\nThe `String` in the map refers to the external name that ndc-spec\nqueries should reference, while the `ColumnInfo` name refers to the\ndatabase column name.\n\nBy mistake, were reporting the `ColumnInfo` name in the schema, instead\nof the String from the map.\n\nWe fix this by referring to the right name, and use `iter()` on the\nBTreeMap instead of `values()`.",
          "timestamp": "2024-03-15T15:33:14Z",
          "tree_id": "7b990abb7d88b4071c7f7b691f7946e422f21a90",
          "url": "https://github.com/hasura/ndc-postgres/commit/67dae07e729e8313a2134d71131a2c67e64871a8"
        },
        "date": 1710517303714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.580339,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.80146959999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.536594634380336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.390225863705375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26018906565652633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.169846,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.0371585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.86555823048599,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.939824907031671,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6079549882022747,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.071273,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.49311279999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.053867891853926,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.651782710554258,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44531987939139195,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.8659255,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.44313605,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.05973223752612,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.697833725961736,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40646176721639166,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.418413,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.67793844999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.631750189351024,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.84478523042732,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41080915290990216,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "277b9049c97f00454f66d967a79f1e24042750d3",
          "message": "chore(deps): Bump sqlx from 0.7.3 to 0.7.4 (#367)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.7.3 to 0.7.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.7.4 - 2024-03-11</h2>\n<p>38 pull requests were merged this release cycle.</p>\n<p>This is officially the <strong>last</strong> release of the 0.7.x\nrelease cycle.</p>\n<p>As of this release, development of 0.8.0 has begun on\n<code>main</code> and only high-priority bugfixes may be backported.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2891\">#2891</a>]:\nfeat: expose getters for connect options fields [[<a\nhref=\"https://github.com/saiintbrisson\"><code>@​saiintbrisson</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2902\">#2902</a>]:\nfeat: add <code>to_url_lossy</code> to connect options [[<a\nhref=\"https://github.com/lily-mosquitoes\"><code>@​lily-mosquitoes</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2927\">#2927</a>]:\nSupport <code>query!</code> for cargo-free systems [[<a\nhref=\"https://github.com/kshramt\"><code>@​kshramt</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2997\">#2997</a>]:\ndoc(FAQ): add entry explaining prepared statements [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3001\">#3001</a>]:\nUpdate README to clarify MariaDB support [[<a\nhref=\"https://github.com/iangilfillan\"><code>@​iangilfillan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3004\">#3004</a>]:\nfeat(logging): Add numeric elapsed time field elapsed_secs [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3007\">#3007</a>]:\nfeat: add <code>raw_sql</code> API [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>This hopefully makes it easier to find how to execute statements\nwhich are not supported by the default\nprepared statement interfaces <code>query*()</code> and\n<code>query!()</code>.</li>\n<li>Improved documentation across the board for the\n<code>query*()</code> functions.</li>\n<li>Deprecated: <code>execute_many()</code> and\n<code>fetch_many()</code> on interfaces that use prepared statements.\n<ul>\n<li>Multiple SQL statements in one query string were only supported by\nSQLite because its prepared statement\ninterface is the <em>only</em> way to execute SQL. All other database\nflavors forbid multiple statements in\none prepared statement string as an extra defense against SQL\ninjection.</li>\n<li>The new <code>raw_sql</code> API retains this functionality because\nit explicitly does <em>not</em> use prepared statements.\nRaw or text-mode query interfaces generally allow multiple statements in\none query string, and this is\nsupported by all current databases. Due to their nature, however, one\ncannot use bind parameters with them.</li>\n<li>If this change affects you, an issue is open for discussion: <a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3108\">launchbadge/sqlx#3108</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3011\">#3011</a>]:\nAdded support to IpAddr with MySQL/MariaDB. [[<a\nhref=\"https://github.com/Icerath\"><code>@​Icerath</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3013\">#3013</a>]:\nAdd default implementation for PgInterval [[<a\nhref=\"https://github.com/pawurb\"><code>@​pawurb</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3018\">#3018</a>]:\nAdd default implementation for PgMoney [[<a\nhref=\"https://github.com/pawurb\"><code>@​pawurb</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3026\">#3026</a>]:\nUpdate docs to reflect support for MariaDB data types [[<a\nhref=\"https://github.com/iangilfillan\"><code>@​iangilfillan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3037\">#3037</a>]:\nfeat(mysql): allow to connect with mysql driver without default behavor\n[[<a\nhref=\"https://github.com/darkecho731\"><code>@​darkecho731</code></a>]]</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2900\">#2900</a>]:\nShow latest url to docs for macro.migrate [[<a\nhref=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2914\">#2914</a>]:\nUse <code>create_new</code> instead of <code>atomic-file-write</code>\n[[<a\nhref=\"https://github.com/mattfbacon\"><code>@​mattfbacon</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2926\">#2926</a>]:\ndocs: update example for <code>PgConnectOptions</code> [[<a\nhref=\"https://github.com/Fyko\"><code>@​Fyko</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2989\">#2989</a>]:\nsqlx-core: Remove dotenvy dependency [[<a\nhref=\"https://github.com/joshtriplett\"><code>@​joshtriplett</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2996\">#2996</a>]:\nchore: Update ahash to 0.8.7 [[<a\nhref=\"https://github.com/takenoko-gohan\"><code>@​takenoko-gohan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3006\">#3006</a>]:\nchore(deps): Replace unmaintained tempdir crate with tempfile [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3008\">#3008</a>]:\nchore: Ignore .sqlx folder created by running ci steps locally [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3009\">#3009</a>]:\nchore(dev-deps): Upgrade env_logger from 0.9 to 0.11 [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3010\">#3010</a>]:\nchore(deps): Upgrade criterion to 0.5.1 [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3050\">#3050</a>]:\nOptimize SASL auth in sqlx-postgres [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3055\">#3055</a>]:\nSet TCP_NODELAY option on TCP sockets [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3065\">#3065</a>]:\nImprove max_lifetime handling [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3072\">#3072</a>]:\nChange the name of &quot;inner&quot; function generated by\n<code>#[sqlx::test]</code> [[<a\nhref=\"https://github.com/ciffelia\"><code>@​ciffelia</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3083\">#3083</a>]:\nRemove sha1 because it's not being used in postgres [[<a\nhref=\"https://github.com/rafaelGuerreiro\"><code>@​rafaelGuerreiro</code></a>]]</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/635dba5b2682033101a1271e9fb4bf2516c0b840\"><code>635dba5</code></a>\nfix: deprecation in <code>postgres::types::chrono</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/a2b89d70a7d0b6401f8d830c9e7ab1dff63e103f\"><code>a2b89d7</code></a>\nfix: deprecation warnings in <code>sqlite::types::chrono</code>,\ndocument <code>DATETIME</code> beh...</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/248d6170a72a8a1c38cc5578888a669f79fdb673\"><code>248d617</code></a>\nchore: prepare 0.7.4 release</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/d005111494a5202d64d5c0442a542f94a2c1983c\"><code>d005111</code></a>\nfix: better I/O errors when <code>migrate!()</code> cannot read a\nfile</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/24be26216509fa0c9fa9febbbbc04597fbe669f8\"><code>24be262</code></a>\nfix: restore <code>Migrator</code> to the public API</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/bbfd0d711aa3bfa4123b08b03d60ff08cadbc7dc\"><code>bbfd0d7</code></a>\nfix: AnyRow not support PgType::Varchar (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2976\">#2976</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/b29eab0439b9914fdae20aa6e2ca6af0e5dc4969\"><code>b29eab0</code></a>\nfeat: add <code>to_url_lossy</code> to connect options (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2902\">#2902</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/34860b7f99d72f22cfa4c4e68364ff39108a7f2a\"><code>34860b7</code></a>\nfix(ci): just cfg-out the whole\n<code>tests/sqlite/sqlcipher.rs</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/791a7f5417ca46859ababd97ee0d52c0356f4024\"><code>791a7f5</code></a>\ndoc(pg): document behavior of <code>bigdecimal</code> and\n<code>rust_decimal</code> with out-of-ran...</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e5c18b354e50249a426cb83071fd713be90c83ed\"><code>e5c18b3</code></a>\nfix: gate <code>sqlcipher</code> testing behind <code>cfg</code> to make\ndevelopment less annoying</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.7.3...v0.7.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.7.3&new-version=0.7.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:02Z",
          "tree_id": "d69f378f15e1c36f18a060dc1bd65731aad4d330",
          "url": "https://github.com/hasura/ndc-postgres/commit/277b9049c97f00454f66d967a79f1e24042750d3"
        },
        "date": 1710776087730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.0692625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.37937530000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.74349280269598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.333203503231221,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2719686495099989,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.98970299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.85763365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.48254537014797,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.4090308433495196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6195622602951784,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.337427,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.2786502,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.736268029780376,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.104101334042298,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4572491857993692,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.60286,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.215893,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.472074300738754,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.088803819068929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4195482350749048,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.48721,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.7853525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.78521911655916,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.074168409154623,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39748079668683384,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cc870ecb5dc4117ab4b3b4277f33c96f87fbe32e",
          "message": "chore(deps): Bump anyhow from 1.0.80 to 1.0.81 (#368)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.80 to 1.0.81.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.81</h2>\n<ul>\n<li>Make backtrace support available when using -Dwarnings (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/354\">#354</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/4aad4edebd9f09247d6c6b6784419a74bb116829\"><code>4aad4ed</code></a>\nRelease 1.0.81</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/8be90917c603199c5d1fdd73984237f023768e22\"><code>8be9091</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/354\">#354</a>\nfrom dtolnay/deadcode</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/a2eb7dd5e13add83f254b6dac0f68e043effc521\"><code>a2eb7dd</code></a>\nMake compatible with -Dwarnings</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.80...1.0.81\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.80&new-version=1.0.81)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:16Z",
          "tree_id": "ef4febd31aba6ff373cafe7eff3862f9ffd86581",
          "url": "https://github.com/hasura/ndc-postgres/commit/cc870ecb5dc4117ab4b3b4277f33c96f87fbe32e"
        },
        "date": 1710776343410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.7018665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.30779634999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.827853370492647,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.850945925419396,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2644720139936373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.612314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.49424559999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.69503384587506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.181176399618053,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5827027377202003,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.486508,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.30237684999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.15811482771987,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.420999313768029,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4544023461810457,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.012707,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.65883299999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.552313444713626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.244168439803637,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4204541072993715,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.267414,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.9311232,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.88823138667356,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.457710065088726,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39622120742245304,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "120abb421edb1e7bdafd24e3b55a154f1e697de6",
          "message": "chore(deps): Bump serde_yaml from 0.9.32 to 0.9.33 (#370)\n\nBumps [serde_yaml](https://github.com/dtolnay/serde-yaml) from 0.9.32 to\n0.9.33.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/serde-yaml/releases\">serde_yaml's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.9.33</h2>\n<ul>\n<li>Fix quadratic parse time for YAML containing deeply nested flow\ncollections (<a\nhref=\"https://redirect.github.com/dtolnay/unsafe-libyaml/issues/26\">dtolnay/unsafe-libyaml#26</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/f4c9ed92385c827a677dae60c2b5a894e24709f0\"><code>f4c9ed9</code></a>\nRelease 0.9.33</li>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/b4edaee907373ee69c6389687a35fced63d8addf\"><code>b4edaee</code></a>\nPull in yaml_parser_fetch_more_tokens fix from libyaml</li>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/8a5542ced61ae21d0772e504fac01bd1dbfaaa6b\"><code>8a5542c</code></a>\nResolve non_local_definitions warning in test</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/serde-yaml/compare/0.9.32...0.9.33\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_yaml&package-manager=cargo&previous-version=0.9.32&new-version=0.9.33)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:54Z",
          "tree_id": "d607f852ae8cf6e5d601ba4196f6b17a6727783a",
          "url": "https://github.com/hasura/ndc-postgres/commit/120abb421edb1e7bdafd24e3b55a154f1e697de6"
        },
        "date": 1710776413125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.698156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.99102199999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.6738261966864,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.959751183191862,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25691605007020635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.460423,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.744342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.692284505923666,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.044314600986013,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6095262277508956,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.580285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.37444575,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.67104103298094,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.575718916156113,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42087587593891596,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.813719,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.14118134999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.91773740569453,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7488043509405955,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38808453388294256,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.999409,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.46736745,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.85203541206567,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6641871955777745,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3957251586859924,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6487cb61c0fc624ad4af15670057786b44cac68",
          "message": "chore(deps): Bump thiserror from 1.0.57 to 1.0.58 (#371)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.57 to\n1.0.58.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.58</h2>\n<ul>\n<li>Make backtrace support available when using -Dwarnings (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/292\">#292</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/df8bffad18e408e9b88d3360797506fc1282babe\"><code>df8bffa</code></a>\nRelease 1.0.58</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/14be209a74e075861fc754d41c376d2d5c6da06b\"><code>14be209</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/292\">#292</a>\nfrom dtolnay/deadcode</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/15a1d647cf5e98835e800e5b6d17ec260dcb89cc\"><code>15a1d64</code></a>\nMake compatible with -Dwarnings</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f55a5d28da7114b44e967451f697d8d0fedb20be\"><code>f55a5d2</code></a>\nIgnore mixed_attributes_style clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f770921a4fc7fc972b9fe00a841831b886e83f10\"><code>f770921</code></a>\nResolve assigning_clones clippy lint</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.57...1.0.58\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.57&new-version=1.0.58)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T16:12:23Z",
          "tree_id": "2fdbe9142da9f6ec8933b18285fc8f579a623d00",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6487cb61c0fc624ad4af15670057786b44cac68"
        },
        "date": 1710778810977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.770503,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.9310663,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.04436865609749,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.010270603731179,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2574146947427175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.081852,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.10408869999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.05285450072483,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0583058784187855,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5627436000775925,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.082887,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.793428,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.964126997673254,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.836336300260633,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4332471583805726,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.878996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.23702125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.581522256427014,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.030183373156497,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4223971986168733,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.4341725,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.8067111,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.789099592272926,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.469081925820909,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39583969439747585,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "690dfe9bbd30299284a83086523ab51576c0f48a",
          "message": "Build the CLI on Ubuntu 20.04. (#373)\n\n### What\n\nDowngrading Ubuntu from \"latest\" (22.04) to 20.04 means that it will\nalso be supported on that version and all subsequent versions. Currently\nit fails to start on Ubuntu 20.04 because the version of glibc linked\nagainst is too new.\n\n### How\n\nI have downgraded the Ubuntu runner we use for building the CLI from\n22.04 to 20.04.\n\nI have also fixed the Rust build cache to take the runner into account.",
          "timestamp": "2024-03-21T10:39:35Z",
          "tree_id": "0156a90ac426733a0f5e443fdffc64b41a0f8d31",
          "url": "https://github.com/hasura/ndc-postgres/commit/690dfe9bbd30299284a83086523ab51576c0f48a"
        },
        "date": 1711018063739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.573603,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.133852,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.38754708952792,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.567439243553117,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2673179390713034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.621043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.19600675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.43423990857008,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.258741360565388,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5930911014511738,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.4386495,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.26699089999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.71515423982217,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.755597475559085,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43399095756869266,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.045641,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.38716439999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.219469591601126,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.070330109499878,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4401268353881449,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.484764,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.2239755,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.61272690544531,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.833699056321024,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4153305171863157,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b94fd3aaa6eef625a1a444c194a56c2201b44b94",
          "message": "Read Native Query SQL from files (#372)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nCurrently we can specify native queries by inlining their SQL as a\nstring in the `sql` field.\nWe'd like to be able to reference a `.sql` file instead, so we can avoid\nescaping characters and can use newlines.\n\nThe new config format will accept the following structures:\n\n```json\n\"sql\": \"<inline sql>\" (as before, but also:)\n\n\"sql\": { \"inline\": \"<inline sql>\" }\n\n\"sql\": { \"file\": \"<relative file path>\" }\n```\n\n### How\n\n- We parse the `NativeQuerySql` which represents the SQL field using an\nintermediate new type `NativeQuerySqlExternal`.\n- as part of the parse_configuration step and after serde\ndeserialization, we traverse the metadata and convert\n`NativeQuerySqlExternal` to `NativeQuerySql` by reading from file\n(performing IO) if needed, and parsing to `NativeQueryParts`. We use the\nconfiguration directory that the user supplied to locate the relative\npath.\n\nWe replace the existing `sql` field in nativequeryinfo with an Either\nexternal or internal representation. This is not ideal because it breaks\nthe parse don't validate principle.\nWe would like to mitigate this in the future by separating the\n`RawConfiguration` types and the (execution time) `Configuration` types\ncompletely.\nWe will do that as part of a larger ticket of redesigning the\nconfiguration format so it can be split across multiple files.",
          "timestamp": "2024-03-21T13:22:28Z",
          "tree_id": "22ca6c1de56a3f1bd6214d874da57f10d15d861f",
          "url": "https://github.com/hasura/ndc-postgres/commit/b94fd3aaa6eef625a1a444c194a56c2201b44b94"
        },
        "date": 1711027958803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.661201,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.4284708,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.440338984683248,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.201138597731887,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2701008019561778,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.3682225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.57072875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.79748985399351,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.339868249406244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5789860359829082,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.985116,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.95983159999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.054338719689895,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.0603094089427145,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4493360707298036,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.870964,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.92572544999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.05999272309128,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.120630117194786,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42655811472134647,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.7194755,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.180395,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.665558591734616,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.60666677303238,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42705699723616475,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d095a3c2e33cae6e5d229d8505198e7d54d50db",
          "message": "When writing configuration files, always end them in a newline. (#374)\n\n### What\n\nThis is a personal pet peeve, mostly brought on by Git highlighting this\nin diffs.\n\n### How\n\nI have scattered `+ \"\\n\"` throughout the code, and added some test\nassertions to match.",
          "timestamp": "2024-03-21T14:33:35Z",
          "tree_id": "f83bdb1b7f607102448c51ca534376bc082b6211",
          "url": "https://github.com/hasura/ndc-postgres/commit/3d095a3c2e33cae6e5d229d8505198e7d54d50db"
        },
        "date": 1711032094412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.774277999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.04893745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.472536394549564,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.856745014801689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26446817871444633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.08479299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.02157549999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.924680013518866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.570146275585955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.624065710794947,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.81959950000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.44240274999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.95019619164794,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.233904568773575,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4636718416099398,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 67.6426115,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 94.83971374999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.450614643268736,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.999811575393423,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4406906989180537,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.05205,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.76367849999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.19886425384899,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.827478573315041,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4260828507693466,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ffa82f8457a777ae83f727d8a53549ea4447652",
          "message": "Prepare for releasing v0.5.1. (#375)",
          "timestamp": "2024-03-21T15:26:50Z",
          "tree_id": "3c314bccc42b373df55a37832267cd942f61c39b",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ffa82f8457a777ae83f727d8a53549ea4447652"
        },
        "date": 1711035285002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.682114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.14386859999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.607948370640976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.391457550886244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2528581963394851,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.73186749999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.38177315,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.65545567990809,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.804632461898642,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5527117145724503,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.578011,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.63638929999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.1113879877855,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.248387818105108,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4276221118166538,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.4779235,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.9191876,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.026461927453845,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.076534548342082,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4088086831091706,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.577814000000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.23095055,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.66063682538137,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.764757625549741,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41459375665903797,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bdb270288188d0e32e564ea369e27da6d73833c5",
          "message": "CI: Update the Docker Compose action owner. (#376)\n\nThe Docker Compose action we rely on has changed ownership and GitHub\nActions doesn't seem to want to automatically resolve the redirect.\n\nWe need to update this ourselves to fix our builds.",
          "timestamp": "2024-03-21T15:46:54Z",
          "tree_id": "b9989f2b19472fd85e777f470986ff2fcb42100b",
          "url": "https://github.com/hasura/ndc-postgres/commit/bdb270288188d0e32e564ea369e27da6d73833c5"
        },
        "date": 1711036506326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.0703915,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.17888589999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.001314405840464,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.714928650466664,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2696932686377561,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.141031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.94934139999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.741990223023784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3217415325992974,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5841493826513334,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.719348,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.96552659999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.540507832801616,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.758626997519322,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45804231752768443,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.66295,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.94249879999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.18365528199027,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.947598832640857,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42593283099043094,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.243006,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.51604649999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.3059923825393,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.602484865622117,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4217000354329965,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "samir.talwar@hasura.io",
            "name": "Samir Talwar",
            "username": "SamirTalwar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e4b625a5aead1c9ebe299b2823b7539a0bf9548",
          "message": "CI: Cache Rust dependencies when running the E2E tests. (#377)\n\n### What\n\nThe E2E tests are currently our CI bottleneck. This speeds up the\nrunning time from ~5.5 minutes to ~2 minutes.\n\n### How\n\nWe introduce the `Swatinem/rust-cache` action to cache all dependencies\nacross the 3 repositories after building.",
          "timestamp": "2024-03-21T16:28:49Z",
          "tree_id": "c7c12a94e38ac743561dfa7703228731aa2b0743",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e4b625a5aead1c9ebe299b2823b7539a0bf9548"
        },
        "date": 1711038897265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.755147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.976283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.04778727465636,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.44915323106694,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26375006522771965,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.9977185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.19936875000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.278878040283814,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.358298536831164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6496515201424707,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.613108,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.4933725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.693416277447504,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.711144846379604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45617627658840076,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.6025535,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.41434955,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.68692901422796,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.092671695471026,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40682512668093596,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.786612,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.923205,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.04017221290375,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.717891504109296,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41252020792105093,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danieljamesharvey@gmail.com",
            "name": "Daniel Harvey",
            "username": "danieljharvey"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f79f1c1c0293890973d33bb7acc957e552b9b341",
          "message": "Use Rust 1.77.0 (#378)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpgrade to use Rust 1.77.0\n\nhttps://github.com/rust-lang/rust/releases/tag/1.77.0",
          "timestamp": "2024-03-25T09:18:37Z",
          "tree_id": "7686c732b554b55038ff2dde6a5da7af1fc3e26b",
          "url": "https://github.com/hasura/ndc-postgres/commit/f79f1c1c0293890973d33bb7acc957e552b9b341"
        },
        "date": 1711358947161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.901214,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.245274,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.25886904391319,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.93984353796078,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2633332554362383,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.00971150000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.91721249999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.81858118895874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.4540803530639437,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6143793649213433,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.780544,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.4332072,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.60001699796689,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.8355113008765755,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43792668923985983,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.706622,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.258976,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.805598470970686,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.745468312008562,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4261527305120519,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.2253455,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.7744603,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.30288744240911,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.533760281527023,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4087733375111936,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01ee8731cab11e65c149599f1b29d19093b876e4",
          "message": "NativeQuery refac leftovers (#379)\n\n### What\n\nTidy up a few leftovers from the recent change to have native queries\nable to live in files.\n\n### How\n\n`just generate-configuration`",
          "timestamp": "2024-03-25T09:46:46Z",
          "tree_id": "b672421249104ba811b07987c604b5db0a2201e2",
          "url": "https://github.com/hasura/ndc-postgres/commit/01ee8731cab11e65c149599f1b29d19093b876e4"
        },
        "date": 1711360412028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.764684,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.0144562,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.070906686201006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.18888509811169,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25815032406007454,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.609013,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.82652775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.60178641575676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.106085138648062,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.562898036050913,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.335282,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.41941479999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.66464380016684,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.546988969882435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4408947946719413,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.7430795,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.401477,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.46543740282637,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.544597416634247,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42650794165671596,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.139097,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.82746304999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.43153141651672,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.53110631979424,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3974232433163284,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b60788d2a2cdb925d57330c33ad03634f874b48",
          "message": "Add support for introspecting domain types (#380)\n\n### What\n\nThis PR adds support for introspecting domain types.\n\n### How\n\nPrior to this PR domain types were already recognised as scalar types.\nHowever, the ability to view a domain type transparently as its base\ntype was not, so you couldn't _do_ anything with values of domain type.\n\nThis PR adds cases to the set of implicit casts for domain types in the\nintrospection query, which enables support for comparison operators.",
          "timestamp": "2024-03-25T10:16:44Z",
          "tree_id": "3a9a0f7c809f4bd1a11cc9ef64c7dc63adc9798c",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b60788d2a2cdb925d57330c33ad03634f874b48"
        },
        "date": 1711362147086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.543670500000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.11179025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.637666906152713,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.781041171145436,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25378197649900186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.56738,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.3879885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.620921492382415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2782652652583977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5766284905129545,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.772532,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.0036149,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.49024143502696,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.204994371940003,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44406264876936846,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.0846385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.88830805,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.3064178613797,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.667728964797163,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3947190029658994,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.308596,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.44946284999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.61662104825221,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.666580307560935,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40812616039781535,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73ab9219ada28235a92ffcf4cf6dbcfe60fc964f",
          "message": "Cast-extend aggregation functions (#381)\n\n### What\n\nThis PR makes the introspection of aggregation functions take implicit\ncasts into account.\n\nThis enables aggregation functions on domain types, which would\ntypically only be defined on the base type.\n\nIt also enables certain other aggregations for scalar types that weren't\ndefined before, most notably aggregation functions for `float4` on\nCockroachDB, which becomes accessible through implicit casts to\n`float8`.\n\n### How\n\nThe cast-extension for aggregation functions introspection code is based\non the same for comparison operators.\n\nWe also change our notion of \"occurring scalar types\" to include the\nreturn types aggregation functions. Previously, aggregation functions\ncould be filtered out if their return type didn't feature in the set of\noccurring scalar types, which was unnecessarily strict.",
          "timestamp": "2024-03-25T11:10:55Z",
          "tree_id": "e7db13ced5197288f47a10a9dd9a1a906d15b05a",
          "url": "https://github.com/hasura/ndc-postgres/commit/73ab9219ada28235a92ffcf4cf6dbcfe60fc964f"
        },
        "date": 1711365395393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.209702,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.085368,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.18986506757101,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.090602574581258,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2612099813234226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.493668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.73284464999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.18244709353861,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1842484010145995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.595234185950742,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.9213685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.33648414999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.392034193199045,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4436211152577485,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4480256855430011,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.522973,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 83.9925356,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.980233151906766,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.596277460049421,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39780504469359523,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.970141,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.4148675,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.37174255741412,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.631865950447633,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4029200217376728,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "plcplc@gmail.com",
            "name": "Philip Lykke Carlsen",
            "username": "plcplc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eae20afaca7d426fe78403646888927b60a9430f",
          "message": "Support enum types (#387)\n\n### What\n\nThis PR improves introspection support for enum types.\n\nComparison operators and aggregation functions on enum types are\nimplicitly defined in PostgreSQL and thus were not detected prior to\nthis PR.\n\n### How\n\nWe simply collect which enum types are defined and make up the\nconventional comparison operators and the min/max aggregation functions\nfor all enum types.\n\nWe test that we can select and aggregate enum types, and that we can\ninsert enum values which PostgreSQL validates.\n\nWe also collect the enum value labels, which we will be using once\nndc-spec v0.1.1 is released.",
          "timestamp": "2024-03-26T08:37:02Z",
          "tree_id": "ae2403a8cb91d9fc7280ea15daaa8b9356ae934d",
          "url": "https://github.com/hasura/ndc-postgres/commit/eae20afaca7d426fe78403646888927b60a9430f"
        },
        "date": 1711442543377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.950968,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.7960212,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.734089127046904,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.75362949919403,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25473315308992045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.944184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.9132333,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.22068499680031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2750415154155306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6198437614898002,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.176957,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.2975429,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.68236223931838,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.8008736011829285,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4390272831702428,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.606517,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.86124149999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.8171826208082,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.719896368573814,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42342533063583454,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.1352335,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.32335259999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.205490969081914,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.614440909486497,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40121364172298235,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1fccbb75adacde1f8a24219810358979093e8324",
          "message": "chore(deps): Bump uuid from 1.7.0 to 1.8.0 (#383)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.7.0 to 1.8.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.8.0</h2>\n<h2>⚠️ Potential Breakage ⚠️</h2>\n<p>A new <code>impl AsRef&lt;Uuid&gt; for Uuid</code> bound has been\nadded, which can break inference on code like:</p>\n<pre lang=\"rust\"><code>let b = uuid.as_ref();\n</code></pre>\n<p>You can fix these by explicitly typing the result of the\nconversion:</p>\n<pre lang=\"rust\"><code>let b: &amp;[u8] = uuid.as_ref();\n</code></pre>\n<p>or by calling <code>as_bytes</code> instead:</p>\n<pre lang=\"rust\"><code>let b = uuid.as_bytes();\n</code></pre>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: fix small spelling mistake by <a\nhref=\"https://github.com/bengsparks\"><code>@​bengsparks</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/737\">uuid-rs/uuid#737</a></li>\n<li>serde serialize_with support by <a\nhref=\"https://github.com/dakaizou\"><code>@​dakaizou</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/735\">uuid-rs/uuid#735</a></li>\n<li>Fix up CI builds by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/744\">uuid-rs/uuid#744</a></li>\n<li>Only add <code>wasm-bindgen</code> as a dependency on\n<code>wasm32-unknown-unknown</code> by <a\nhref=\"https://github.com/emilk\"><code>@​emilk</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/738\">uuid-rs/uuid#738</a></li>\n<li>impl AsRef<!-- raw HTML omitted --> for Uuid by <a\nhref=\"https://github.com/koshell\"><code>@​koshell</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/743\">uuid-rs/uuid#743</a></li>\n<li>Add v6 to v8 draft link to README by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/746\">uuid-rs/uuid#746</a></li>\n<li>Add a workflow for running cargo outdated by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/745\">uuid-rs/uuid#745</a></li>\n<li>Prepare for 1.8.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/747\">uuid-rs/uuid#747</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/bengsparks\"><code>@​bengsparks</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/737\">uuid-rs/uuid#737</a></li>\n<li><a href=\"https://github.com/dakaizou\"><code>@​dakaizou</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/735\">uuid-rs/uuid#735</a></li>\n<li><a href=\"https://github.com/emilk\"><code>@​emilk</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/738\">uuid-rs/uuid#738</a></li>\n<li><a href=\"https://github.com/koshell\"><code>@​koshell</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/743\">uuid-rs/uuid#743</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0\">https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/0f2aaaeab9d20ce1f724e6b31b5b47639c2afa95\"><code>0f2aaae</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/747\">#747</a> from\nuuid-rs/cargo/1.8.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/01d16c32baa7a3cf2543561e324f9dd00e93c82d\"><code>01d16c3</code></a>\nprepare for 1.8.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e4746bcbd5404004ccdee11cd8580365172b34df\"><code>e4746bc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/745\">#745</a> from\nuuid-rs/ci/outdated</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/d0396ad254a8a6ed6721bfeabe17892b85e1a9a7\"><code>d0396ad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/746\">#746</a> from\nuuid-rs/chore/draft-link</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/9415ed40171e9d404d563b0dbb4834fe8f890da5\"><code>9415ed4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/743\">#743</a> from\nkoshell/main</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/951e8e325e6bd886f42126d86ee48029404a4cd4\"><code>951e8e3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/738\">#738</a> from\nrerun-io/emilk/wasm-bindgen-only-on-web</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/101aa84c43b1ae51488f0c81be35cdaf0270f52f\"><code>101aa84</code></a>\nadd v6 to v8 draft link to README</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/84dcbba1bd928b482216bac847a772c37803461b\"><code>84dcbba</code></a>\nrun outdated on a schedule</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/ca952b14a8dcdab9b19dab519f84c123b0a6f4e6\"><code>ca952b1</code></a>\nadd a workflow for running cargo outdated</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/abe995a25888199de42b6163acd5f46a61d4c224\"><code>abe995a</code></a>\nMake the toml longer, more complicated, and functional</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.7.0&new-version=1.8.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:03:45Z",
          "tree_id": "2b8b57b1ead1561669653c0bc554b94208a29aa5",
          "url": "https://github.com/hasura/ndc-postgres/commit/1fccbb75adacde1f8a24219810358979093e8324"
        },
        "date": 1711444229808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.386754,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.286107,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.697301995243404,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.251349075947584,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26095342481902434,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.357326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.1170192,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.34878805121076,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.231176120800562,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5773915746148521,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.452708,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.2494805,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.40314553650708,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.18719374577114,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4380812888443651,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.215271,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.99125615,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.040563639348626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.783315219595259,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4239866924085855,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.092084,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.73001799999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.36726238726854,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6430285324459675,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4085510518353271,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}