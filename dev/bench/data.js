window.BENCHMARK_DATA = {
  "lastUpdate": 1749655336461,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
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
          "distinct": false,
          "id": "9dfb531ec7df68c76c4ac7c028cdb2461897811b",
          "message": "Save a Docker image if the `upload-engine-docker` is included (#699)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nAdd a Github label `upload-engine-docker` that allows us to create a\nbuild. Previously we added `latest` tag to all commits, we stop this and\nonly add it when creating a Docker image for a version tag.",
          "timestamp": "2025-02-14T18:46:01Z",
          "tree_id": "ea0acc14c7c1ae119056e36a790917be550f8438",
          "url": "https://github.com/hasura/ndc-postgres/commit/9dfb531ec7df68c76c4ac7c028cdb2461897811b"
        },
        "date": 1739559467062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.213585,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.119252899999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.482814265888699,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.4393738240502,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.1959706331291749,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.17993200000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.8136078,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.18091144252678,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5766917901791828,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29183979017950673,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.714297,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.681412,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.603254553047044,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.435295024503738,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28958857541068267,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.3744955,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.11940715,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.795311012476574,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.145961877067975,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.256806023790182,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.776821999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.1329644,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.34760179249538,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.72823409192878,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22836357582923647,
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
          "id": "b05d1976579cdff12caea8c162ffe19824c92505",
          "message": "chore(deps): Bump clap from 4.5.28 to 4.5.29 (#700)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.28 to 4.5.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.29</h2>\n<h2>[4.5.29] - 2025-02-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Change <code>ArgMatches::args_present</code> so not-present flags\nare considered not-present (matching the documentation)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.29] - 2025-02-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Change <code>ArgMatches::args_present</code> so not-present flags\nare considered not-present (matching the documentation)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/1f74b0178d222d393e5ab641e934d196cbde70f4\"><code>1f74b01</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/23feee1c132f4b3501e7218bc6a7e70d753b54ae\"><code>23feee1</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/ae1457b34a06492352da3d1637582991893ba012\"><code>ae1457b</code></a>\nchore(complete): Update require clap</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0d142f6c04a702b791d2dfec8327661ba1b6d16c\"><code>0d142f6</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0facf1f370e7966a4d97bce56d1d10ca4c80d0ae\"><code>0facf1f</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/ee6af99c6c5e239c0f2c92f9d1baf8aa3bb4af90\"><code>ee6af99</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5743\">#5743</a>\nfrom epage/sort</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/232ee106615e997f0841bb3de97eed126b929fe3\"><code>232ee10</code></a>\nfix(complete): Use existing display order for Arg/Command</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c6b5d627a0c17527630e4086a4fe83589365d1f0\"><code>c6b5d62</code></a>\nfeat(builder): Expose get_display_order</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/67d9fef9cee8f1b297aed73e6d95f78744b43a27\"><code>67d9fef</code></a>\nfeat(complete): Give control over display order</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/59a61e188fbb9999db52f567e3951d3720204084\"><code>59a61e1</code></a>\nrefactor(complete): Pull out common candidate code</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.28...clap_complete-v4.5.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.28&new-version=4.5.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-17T17:06:40Z",
          "tree_id": "2c8dc958bf3a37513efde41528039be6f298db9a",
          "url": "https://github.com/hasura/ndc-postgres/commit/b05d1976579cdff12caea8c162ffe19824c92505"
        },
        "date": 1739812499187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.880817,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.57092094999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.292090581221505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.9516735447692675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2174567431538899,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.3879775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.84576825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.75094575172718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.753648417683472,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2855790350581788,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.747858,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.3890807,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.038432696066792,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.000264909104331,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28160602920046024,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.565965500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.3673575,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.053289656994735,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.538580098962456,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23299179873409392,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.938346,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.21183879999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.31981811703827,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.127501167838258,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23846101073784726,
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
          "id": "b5fba9854e7ad64817dbb3ce6200c02872c91d3b",
          "message": "chore(deps): Bump tempfile from 3.16.0 to 3.17.0 (#701)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.16.0 to\n3.17.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.17.0</h2>\n<ul>\n<li>Make sure to use absolute paths in when creating unnamed temporary\nfiles (avoids a small race in the &quot;immediate unlink&quot; logic)\nand in <code>Builder::make_in</code> (when creating temporary files of\narbitrary types).</li>\n<li>Prevent a theoretical crash that could (maybe) happen when a\ntemporary file is created from a drop function run in a TLS destructor.\nNobody has actually reported a case of this happening in practice and I\nhave been unable to create this scenario in a test.</li>\n<li>When reseeding with <code>getrandom</code>, use platform (e.g., CPU)\nspecific randomness sources where possible.</li>\n<li>Clarify some documentation.</li>\n<li>Unlink unnamed temporary files on windows <em>immediately</em> when\npossible instead of waiting for the handle to be closed. We open files\nwith &quot;Unix&quot; semantics, so this is generally possible.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/6e7d167cc10bd46bc2d78c4ce3844b8eea5f41b7\"><code>6e7d167</code></a>\nchore: release 3.17.0</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3718075691418ab4d4656c1f8277e17240036ee8\"><code>3718075</code></a>\ndoc: remove incorrect documentation about windows and open files</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/461369fd358b374040ef99e1cdb260eb5dcd1f85\"><code>461369f</code></a>\nfeat: delete unnamed temporary files on windows immediately</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/78d30a217f08f1b8e282556f3d9bbf84e84e89be\"><code>78d30a2</code></a>\ndoc: clarify &quot;inner file will be deleted&quot; documentation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/329\">#329</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/0fe11c451e692703ad95f46cfdb91c50d60935f7\"><code>0fe11c4</code></a>\ndoc: document how to &quot;keep&quot; temporary files/dirs after\ncreation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/328\">#328</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/35e0629944a5a10a6f02b7960332a6a274b3ce0c\"><code>35e0629</code></a>\nfeat: simplify getrandom call (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/325\">#325</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/1e5059fe9f397f5ba67f2dd84452d8cb3bbc6cc0\"><code>1e5059f</code></a>\nfix: handle TLS deallocation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/324\">#324</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/c7b2e1af28e4d9dde36fda0579aad18ae7918a6c\"><code>c7b2e1a</code></a>\nchore: simplify reborrow</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/8afa07a8c1e36b32bdda914d0ab9adc55c376d6b\"><code>8afa07a</code></a>\nfix: always use absolute paths (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/323\">#323</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.16.0...v3.17.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.16.0&new-version=3.17.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-17T17:06:52Z",
          "tree_id": "8111f14895f8d08badae60c3148da43e32313b3a",
          "url": "https://github.com/hasura/ndc-postgres/commit/b5fba9854e7ad64817dbb3ce6200c02872c91d3b"
        },
        "date": 1739812857542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.757985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.21376479999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.817661471691178,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.873235061262971,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19449434955940398,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.76098049999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.87826749999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.0762709329447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6372049091179903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2964514342731506,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.2457405,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.04158955000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.975123164083406,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.793244984040228,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.292484422394073,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.262175,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.04720959999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.537221978675934,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.344763884946456,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23880866550148216,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.557840999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.97086994999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.75595475705381,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.412083113957859,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23431994150479346,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85472423+paritosh-08@users.noreply.github.com",
            "name": "paritosh-08",
            "username": "paritosh-08"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6434b05a33fe363c11c11142326c3fbb5116e596",
          "message": "add native toolchain definition to connector metadata (#687)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis PR adds the native toolchain definition to the connector metadata.\n\nIt also adds two commands in the initial metadata generated by the CLI:\n```yaml\nnativeToolchainDefinition:\n  commands:\n    start:\n      type: ShellScript\n      bash: |-\n        #!/usr/bin/env bash\n        set -eu -o pipefail\n        HASURA_CONFIGURATION_DIRECTORY=\"$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\" \"$HASURA_DDN_NATIVE_CONNECTOR_DIR/ndc-postgres\" serve\n      powershell: |-\n        $ErrorActionPreference = \"Stop\"\n        $env:HASURA_CONFIGURATION_DIRECTORY=\"$env:HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\"; & \"$env:HASURA_DDN_NATIVE_CONNECTOR_DIR\\ndc-postgres.exe\" serve\n    update:\n      type: ShellScript\n      bash: |-\n        #!/usr/bin/env bash\n        set -eu -o pipefail\n        \"$HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR/hasura-ndc-postgres\" update\n      powershell: |-\n        $ErrorActionPreference = \"Stop\"\n        & \"$env:HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR\\hasura-ndc-postgres.exe\" update\n```\n\n<details>\n<summary>Click here for the CLI command output</summary>\n\n```\n❯ ndc-postgres-cli initialize --with-metadata\n❯ cat .hasura-connector/connector-metadata.yaml\npackagingDefinition:\n  type: PrebuiltDockerImage\n  dockerImage: ghcr.io/hasura/ndc-postgres:343b8b3\nsupportedEnvironmentVariables:\n- name: CONNECTION_URI\n  description: The PostgreSQL connection URI\n  defaultValue: postgresql://read_only_user:readonlyuser@35.236.11.122:5432/v3-docs-sample-app\n- name: CLIENT_CERT\n  description: The SSL client certificate (Optional)\n  defaultValue: ''\n- name: CLIENT_KEY\n  description: The SSL client key (Optional)\n  defaultValue: ''\n- name: ROOT_CERT\n  description: The SSL root certificate (Optional)\n  defaultValue: ''\ncommands:\n  update: hasura-ndc-postgres update\ncliPlugin:\n  name: ndc-postgres\n  version: 343b8b3\ndockerComposeWatch:\n- path: ./\n  target: /etc/connector\n  action: sync+restart\nnativeToolchainDefinition:\n  commands:\n    start:\n      type: ShellScript\n      bash: |-\n        #!/usr/bin/env bash\n        set -eu -o pipefail\n        HASURA_CONFIGURATION_DIRECTORY=\"$HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\" \"$HASURA_DDN_NATIVE_CONNECTOR_DIR/ndc-postgres\" serve\n      powershell: |-\n        $ErrorActionPreference = \"Stop\"\n        $env:HASURA_CONFIGURATION_DIRECTORY=\"$env:HASURA_PLUGIN_CONNECTOR_CONTEXT_PATH\"; & \"$env:HASURA_DDN_NATIVE_CONNECTOR_DIR\\ndc-postgres.exe\" serve\n    update:\n      type: ShellScript\n      bash: |-\n        #!/usr/bin/env bash\n        set -eu -o pipefail\n        \"$HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR/hasura-ndc-postgres\" update\n      powershell: |-\n        $ErrorActionPreference = \"Stop\"\n        & \"$env:HASURA_DDN_NATIVE_CONNECTOR_PLUGIN_DIR\\hasura-ndc-postgres.exe\" update\n```\n\n</details>\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-02-19T06:14:21Z",
          "tree_id": "9e208a74e3a07c77c1109b3f6df2257f57adad46",
          "url": "https://github.com/hasura/ndc-postgres/commit/6434b05a33fe363c11c11142326c3fbb5116e596"
        },
        "date": 1739946095046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.727700499999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.22011739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.853490462579668,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.941956247250662,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.18897442439809373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.53889749999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.6732967,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.20377485624254,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8585497724208722,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29345223607890975,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.9649955,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.35775525000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.761851362362197,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.698075110413807,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3063838020439581,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.382799,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.6151416,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.288455469625777,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.8685553717267815,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2472081788676192,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.2576495,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.12748965,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.347669134780343,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.2984354777747775,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2214054047310792,
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
          "id": "b601f6a9afd38b7405c695e3e5c2bde62b5b63a7",
          "message": "chore(deps): Bump tempfile from 3.17.0 to 3.17.1 (#706)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.17.0 to\n3.17.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.17.1</h2>\n<ul>\n<li>Fix build with <code>windows-sys</code> 0.52. Unfortunately, we have\nno CI for older <code>windows-sys</code> versions at the moment...</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/714a259f923c2671a4a566ff827e4c644991d017\"><code>714a259</code></a>\nchore: release 3.17.1</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/78309ed599042fdbaf9630a579957ba2a710601f\"><code>78309ed</code></a>\nfix: cast handle to the windows crate HANDLE (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/332\">#332</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.17.0...v3.17.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.17.0&new-version=3.17.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-24T15:32:54Z",
          "tree_id": "5ecc584cccf7029b254e00bed2fdfcdcdf2343ab",
          "url": "https://github.com/hasura/ndc-postgres/commit/b601f6a9afd38b7405c695e3e5c2bde62b5b63a7"
        },
        "date": 1740411704164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.859485,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.37756219999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.81556580139299,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.907722432934955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.18683972688828007,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.3038215,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.79768849999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.56403298254189,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6214690458650978,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2656033501255341,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.6100155,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.83340239999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 34.29012319168762,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.737330319315504,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3176681697354559,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.728336999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.821860550000004,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.533725176364463,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.703299622776612,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2378934774345557,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.197321,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.62279699999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.91600505002394,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.878481734699207,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22163361311928748,
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
          "id": "598a3d696713c8756615b96d69797054de62d3fe",
          "message": "chore(deps): Bump uuid from 1.13.1 to 1.14.0 (#702)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.13.1 to 1.14.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.14.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add FromStr impls to the fmt structs by <a\nhref=\"https://github.com/tysen\"><code>@​tysen</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/806\">uuid-rs/uuid#806</a></li>\n<li>Prepare for 1.14.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/807\">uuid-rs/uuid#807</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/tysen\"><code>@​tysen</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/806\">uuid-rs/uuid#806</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.13.2...v1.14.0\">https://github.com/uuid-rs/uuid/compare/v1.13.2...v1.14.0</a></p>\n<h2>v1.13.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add a compile_error when no source of randomness is available on\nwasm32-unknown-unknown by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/804\">uuid-rs/uuid#804</a></li>\n<li>Prepare for 1.13.2 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/805\">uuid-rs/uuid#805</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.13.1...v1.13.2\">https://github.com/uuid-rs/uuid/compare/1.13.1...v1.13.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/bf5b0b84d2614f2558b271d06461557b761f1258\"><code>bf5b0b8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/807\">#807</a> from\nuuid-rs/cargo/v1.14.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/daa07949e9610eb7bae6e3b95248e01c06d30542\"><code>daa0794</code></a>\nprepare for 1.14.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6bd7bc791b544e98092bd36b204918b98e7abbb4\"><code>6bd7bc7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/806\">#806</a> from\ntysen/add-fromstr-impls-to-fmt</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/5b0ca42c8084c053332d153d7aee1cdec2a775ec\"><code>5b0ca42</code></a>\nAdd FromStr impls to the fmt structs</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/d8871b3b03e7c1b61fff1dd81cce3f18051b78cf\"><code>d8871b3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/805\">#805</a> from\nuuid-rs/cargo/v1.13.2</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/704421094aeb006f910133e9567368c588474e61\"><code>7044210</code></a>\nprepare for 1.13.2 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/7893ecce7f6b721a15167613fdb3fe5155fc5425\"><code>7893ecc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/804\">#804</a> from\nuuid-rs/fix/wasm-no-rng</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/bf28001d5309aaa5bb9a705723c51ae7bd15ad75\"><code>bf28001</code></a>\nupdate feature docs</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/920e8b183f41069b0a6515f0bbe0baf3f44fa120\"><code>920e8b1</code></a>\nadd a more descriptive compile error when no rng source is available on\nwasm</li>\n<li>See full diff in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.13.1...v1.14.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.13.1&new-version=1.14.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-24T15:33:46Z",
          "tree_id": "3d00a8f55be1e781d674ceac4556a2f7f1220084",
          "url": "https://github.com/hasura/ndc-postgres/commit/598a3d696713c8756615b96d69797054de62d3fe"
        },
        "date": 1740412160271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.851832,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.97939479999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.977011819309302,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.939597105173471,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19957412350676845,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.76313400000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.49438179999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.298594586161826,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6504072989555283,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26636812220804323,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.7841835,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.35909774999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.450685021793063,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.659836419330965,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.29551012102919477,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.970043,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.27043639999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.479565885747874,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.2459180470014815,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22514170333412825,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.567323,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.2843366,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.044582703566377,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.106802074225769,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22700634684062465,
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
          "id": "7377128caaade684e05d9e892a6117ad27e1d340",
          "message": "Install working cargo machete version in Github Actions (#712)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nNewest Cargo Machete doesn't work on our version of `rustc`, pin to an\nold one.",
          "timestamp": "2025-03-03T17:27:48Z",
          "tree_id": "328eadc8147d8a444c78db43fef336721c64926b",
          "url": "https://github.com/hasura/ndc-postgres/commit/7377128caaade684e05d9e892a6117ad27e1d340"
        },
        "date": 1741023542794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.326572,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.6232795,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.285100769922856,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.461505686467213,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.209205302329166,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.665285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.664995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.007595816506424,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.86805791299156,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2906621341689926,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.275973,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.67193169999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.3622394991333,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.414573694809786,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28639758499033696,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.704504,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.2326216,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.602881622422572,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7043045068367775,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2374201173008679,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.653596,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.5423338,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.95114131829298,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.06089516807889,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22641253594824756,
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
          "id": "0d1e2580c35818f5ee80e4bf20b22b7691876311",
          "message": "chore(deps): Bump async-trait from 0.1.86 to 0.1.87 (#707)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.86\nto 0.1.87.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.87</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/32540aadec088a87eeb88f7688ec5b211a0d5167\"><code>32540aa</code></a>\nRelease 0.1.87</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/137d14caf3fda9b066384e32e883f2c9bddcbf63\"><code>137d14c</code></a>\nResolve mem_replace_with_default clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/45fd82a71eca47ddbd0627546fb1ba7489e51712\"><code>45fd82a</code></a>\nIgnore elidable_lifetime_names pedantic clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/ea2f2a29a29b71f36479ee99d3d51953f80e44d8\"><code>ea2f2a2</code></a>\nPoint standard library links to stable</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/3b78161de94175ffa72c6d3a5451415b70cace51\"><code>3b78161</code></a>\nUpdate ui test suite to nightly-2025-02-12</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.86...0.1.87\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.86&new-version=0.1.87)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-05T16:32:15Z",
          "tree_id": "d7cc1f4f8561bce75c6f0e520b196ae9b2993b46",
          "url": "https://github.com/hasura/ndc-postgres/commit/0d1e2580c35818f5ee80e4bf20b22b7691876311"
        },
        "date": 1741192806621,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.959898,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.612049449999965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.874350829273022,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.844168028751943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21574856931622854,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.433796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.29847975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.91393298533472,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5465075906901333,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2744511358531614,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.553381,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.54955989999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.053244326178486,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.769042416952665,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2963884913302211,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.971591000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.59326549999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.571061448459787,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.151799538264804,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.229174595271154,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.888029,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.92088560000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.813234149933272,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.72526079540873,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22396300112000045,
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
          "id": "d91593a0c94c0d03767fca83479c5f2e4d968caa",
          "message": "chore(deps): Bump serde_json from 1.0.138 to 1.0.140 (#711)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.138 to\n1.0.140.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.140</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n<h2>v1.0.139</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/762783414e6c4f8d670c9d87eb04913efb80d3be\"><code>7627834</code></a>\nRelease 1.0.140</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/d77a498c8061f43cf4515a3e861dccb338d863b9\"><code>d77a498</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1245\">#1245</a>\nfrom serde-rs/powerpc</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b34d317089ef43f6d35306be06018b8d87eeb2b5\"><code>b34d317</code></a>\nDelete unused gcc installation</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f7200c3cf66b0c46e19a911a2b9121e27c101fec\"><code>f7200c3</code></a>\nIgnore unbuffered_bytes clippy lint</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/76cd4fb383eab71c22cc89ce270b08f4f77d788f\"><code>76cd4fb</code></a>\nIgnore elidable_lifetime_names pedantic clippy lint</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/400eaa977f1f0a1c9ad5e35d634ed2226bf1218c\"><code>400eaa9</code></a>\nPoint standard library links to stable</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4d4f53c3b7de3259b6a8a15ef4d5f4edb47af32f\"><code>4d4f53c</code></a>\nRelease 1.0.139</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5d6b32f3786e93e0c73a497bd1a900ae256f7f13\"><code>5d6b32f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1242\">#1242</a>\nfrom dtolnay/writefloat</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/e5bb8bd38fe3b347655429b79d21ed89b366b706\"><code>e5bb8bd</code></a>\nDocument behavior of write_f32/f64 on non-finite floats</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/7a797810d2bedb9255ecef720112623ddb356805\"><code>7a79781</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1241\">#1241</a>\nfrom dtolnay/doclink</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.138...v1.0.140\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.138&new-version=1.0.140)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-05T16:33:51Z",
          "tree_id": "e67dfe016b6f5cf9c2ee019beeef3113f3113696",
          "url": "https://github.com/hasura/ndc-postgres/commit/d91593a0c94c0d03767fca83479c5f2e4d968caa"
        },
        "date": 1741193287017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.047132,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.944106199999965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.009278014052448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.9410163982684026,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20408591579863022,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.52429000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.12988089999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.22315341329567,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.642761506320518,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26795451226978734,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.398356500000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.12411724999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.786189952223513,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.323621521534559,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2811227012720167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.369202,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.22836715000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.66277235304895,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.498101582911296,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23989941556008865,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.983016,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.37758134999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.129255470728328,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.682304072985122,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23339882847596594,
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
          "id": "b3d412593077522e97e64ba131a4bfc2ab168148",
          "message": "chore(deps): Bump clap from 4.5.30 to 4.5.31 (#709)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.30 to 4.5.31.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.31</h2>\n<h2>[4.5.31] - 2025-02-24</h2>\n<h3>Features</h3>\n<ul>\n<li>Add <code>ValueParserFactory</code> for\n<code>Saturating&lt;T&gt;</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.31] - 2025-02-24</h2>\n<h3>Features</h3>\n<ul>\n<li>Add <code>ValueParserFactory</code> for\n<code>Saturating&lt;T&gt;</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/acf9abbc1b564cac24ed45b1b5906c90d688f4f0\"><code>acf9abb</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/9186a1872c64cc912e553adbcc5f693206e4f013\"><code>9186a18</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/233c316d1145be12c95eb05306575d42a44e154c\"><code>233c316</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5926\">#5926</a>\nfrom sorairolake/feature/value-parser-factory-for-sa...</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/13931a25e704fadcaa33cda45e12f6544a023588\"><code>13931a2</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5923\">#5923</a>\nfrom Reverier-Xu/master</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/536e29fb85919f23e8551135ae448fd92326159f\"><code>536e29f</code></a>\nfeat(builder): Add <code>ValueParserFactory</code> for\n<code>Saturating\\&lt;T&gt;</code></li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/45ed71c0f235feb65d23568775e16b1f34c9f8d4\"><code>45ed71c</code></a>\nchore: Avoid using gen for rust 2024 preserved keyword</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5029bb3d11809403cb9c1b37f970a8625aee56cd\"><code>5029bb3</code></a>\nchore: Avoid using <code>gen</code> for rust 2024 preserved keyword</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8a1d59bbb068b82fe9ae55ff613a3a6927d3b964\"><code>8a1d59b</code></a>\nchore(deps): Update Rust Stable to v1.85 (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5921\">#5921</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/9caee534e05a16b223d4d4d7f94e5c1717c0b6dc\"><code>9caee53</code></a>\ndocs(changelog): Clarify 5.0.0</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cb2352f84a7663f32a89e70f01ad24446d5fa1e2\"><code>cb2352f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5918\">#5918</a>\nfrom epage/test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.30...v4.5.31\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.30&new-version=4.5.31)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-05T16:33:21Z",
          "tree_id": "e1fd575375dd3f63795b6ca746e601160af997b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/b3d412593077522e97e64ba131a4bfc2ab168148"
        },
        "date": 1741193293726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.690595000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.1241716,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.9072325475725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.600370834793678,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19111491046324022,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.2902595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.92984100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.13566424090672,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4748987422050703,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27963583812024106,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.09053,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.9687436,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.517559075446556,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0492168396575465,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.26497554351163904,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.061125,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.3781585,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.422640452850374,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.279235561219025,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2413613771958362,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.133071,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.087252,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.835154580634274,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.003656510789181,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2293219020311938,
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
          "id": "210ea0510a8621c32e515d017d0a44272f33de78",
          "message": "chore(deps): Bump uuid from 1.14.0 to 1.15.1 (#710)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.14.0 to 1.15.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.15.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Guarantee v7 timestamp will never overflow by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/811\">uuid-rs/uuid#811</a></li>\n<li>Prepare for 1.15.1 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/812\">uuid-rs/uuid#812</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.15.0...v1.15.1\">https://github.com/uuid-rs/uuid/compare/v1.15.0...v1.15.1</a></p>\n<h2>v1.15.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add a manual <code>Debug</code> implementation for NonNilUUid by <a\nhref=\"https://github.com/rick-de-water\"><code>@​rick-de-water</code></a>\nin <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/808\">uuid-rs/uuid#808</a></li>\n<li>Support higher precision, shiftable timestamps in V7 UUIDs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/809\">uuid-rs/uuid#809</a></li>\n<li>Prepare for 1.15.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/810\">uuid-rs/uuid#810</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/rick-de-water\"><code>@​rick-de-water</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/808\">uuid-rs/uuid#808</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.14.0...v1.15.0\">https://github.com/uuid-rs/uuid/compare/v1.14.0...v1.15.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4e5b88e7af12f06ea526088506752c450dc991e3\"><code>4e5b88e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/812\">#812</a> from\nuuid-rs/cargo/v1.15.1</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/7fb64f78c745fe46e209f0f5a50883b711e25f04\"><code>7fb64f7</code></a>\nprepare for 1.15.1 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/f05b6df98e8d521eecc80dc7923c9b38e2dff634\"><code>f05b6df</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/811\">#811</a> from\nuuid-rs/fix/v7-overflow</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/c2d313fbbb3157c186f0511c9e2a914d174f258f\"><code>c2d313f</code></a>\nguarantee v7 timestamp will never overflow</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/56ba68ff13983f3917263b86e06a81c00ee97a3d\"><code>56ba68f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/810\">#810</a> from\nuuid-rs/cargo/v1.15.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/26c8a9bebcdfe6f47ce6e88fa8da21326ab8ee25\"><code>26c8a9b</code></a>\nprepare for 1.15.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e468f99f936875263f9b78967f81fd431afcc510\"><code>e468f99</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/809\">#809</a> from\nuuid-rs/feat/v7-precision</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/c46f4e089d474b7c5890594d71054cf6771a9cd7\"><code>c46f4e0</code></a>\nadd bench for additional precision v7</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6c4597ca0f21623781df67bb84045b8d0873f777\"><code>6c4597c</code></a>\ndocument extra precision behavior</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/295593ae7758d3b7fd4dd375072e721eeb67971b\"><code>295593a</code></a>\nensure sub-millisecond precision fits into the requested number of\nbits</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.14.0...v1.15.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.14.0&new-version=1.15.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-05T16:34:09Z",
          "tree_id": "47e420ea6ef9aa2f3d4fbe8324565fb1fdee8b4f",
          "url": "https://github.com/hasura/ndc-postgres/commit/210ea0510a8621c32e515d017d0a44272f33de78"
        },
        "date": 1741193306272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.512733,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.97197725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.33018787277573,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.844614580627072,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20911835099365988,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.30391750000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.2300925,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.840792691378496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5285415571390217,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2410835672647693,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.708888,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.70464530000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.97859774368901,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.326541386607598,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28405623645911726,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.442251,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.47959449999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.309005113646265,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.7890432470325095,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2583081830212895,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.253152,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.96216644999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.757099545521665,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.060578146762769,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.21247300299408695,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4cc50ce99b0d80aeaf972ba79ada19bb155ecc4",
          "message": "Add subquery to separate where clause from lateral joins used for relationships (#713)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\nThis PR copies some patterns used in v2, which it turns out yield better\nperformance on cockroachdb.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\nWe add an additional subquery wherever we directly reference a source\ntable, to make sure the where clause for that table is applied before\nany lateral joins.\n\n### Ordering\n\nOrdering and limit are also moved into the subquery.\n\nV2 instead does the following:\n- if ordering across a relationship, put the join and order by clause\noutside the subquery, at the same level as other relationships. also put\nany limit clause there\n- if ordering on a local field, put the order by and limit inside the\nsubquery. additionally, also put a copy of the order by clause outside\nthe subquery, at the same level as relationships\n\nWe do not replicate this behavior, and the last bit worries me.\nWill ordering be preserved without the second order by clause?\n\nCommiting as is for now but will probably add the clause.\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-03-05T22:22:21Z",
          "tree_id": "5621a55ad117b2ba1265086eaed3ab6bfebec2e0",
          "url": "https://github.com/hasura/ndc-postgres/commit/d4cc50ce99b0d80aeaf972ba79ada19bb155ecc4"
        },
        "date": 1741213823746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.693984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.68303449999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.368845148283377,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.911237451693406,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21169012630492198,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 82.3020775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 125.48651174999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 61.17551033272338,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.498840830719928,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26228753249727305,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.48255,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.2698659,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.003766278576656,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.209866892307694,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2648984207467502,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.4020685,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.1534243,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.45378405503665,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.654281273655727,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21209118653956968,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.650452,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.60941840000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.81441902052203,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.824815800476962,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22006042815248145,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "41898282+github-actions[bot]@users.noreply.github.com",
            "name": "github-actions[bot]",
            "username": "github-actions[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e92172398e0d8a51af2dd117bed5f1781e5f07c",
          "message": "Bump version to 2.1.0 (#714)\n\nThis bumps the version in `Cargo.toml` and updates `changelog.md`.\n\nCo-authored-by: benoit <benoit@hasura.io>",
          "timestamp": "2025-03-06T03:00:10Z",
          "tree_id": "2a39c89f5c834dc3c0547fde97db2d124729d923",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e92172398e0d8a51af2dd117bed5f1781e5f07c"
        },
        "date": 1741230466989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.280859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.15477170000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.00335804957182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.113687205126835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20016776415320994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 82.4528095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 121.96894054999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.74229316603373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5215363997241056,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27814586675869346,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.629804,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.7589852,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.593481086896624,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.110040846673371,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2667390266311969,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.9401205,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.01291309999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.665386776643587,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.949127067071586,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2400268962692302,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.738809,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.37668724999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.074658280688325,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.611258154072097,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23372196112533333,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a824019a8478bcb88623f9fbf4c729fa52a3ccf",
          "message": "Improve ordering with subquery (#715)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis is a follow up to #713\n\nThat PR adds a subquery to help query planners apply the where clause of\na table before any lateral joins required for relationships.\n\nThat work introduced correctness issues:\n```sql\nSELECT\n\"%1_Album\".\"Title\" AS \"Title\"\nFROM\n  (\n    SELECT\n      \"%0_Album\".*\n    FROM\n      \"public\".\"Album\" AS \"%0_Album\"\n    ORDER BY\n      \"%0_Album\".\"AlbumId\" ASC\n    LIMIT\n      5\n  ) AS \"%1_Album\"\n```\nThe above looks fine, but because that top level query may be joined to\nother tables for relationships, ordering is actually not guaranteed.\nWe add the order by clause at the top level too:\n```sql\nSELECT\n\"%1_Album\".\"Title\" AS \"Title\"\nFROM\n  (\n    SELECT\n      \"%0_Album\".*\n    FROM\n      \"public\".\"Album\" AS \"%0_Album\"\n    ORDER BY\n      \"%0_Album\".\"AlbumId\" ASC\n    LIMIT\n      5\n  ) AS \"%1_Album\"\nORDER BY\n  \"%1_Album\".\"AlbumId\" ASC\n```\nWe do still want the order by and limit clauses in the subquery so we\nreduce the rows in scope as early as possible.\n\nWhen ordering via related tables, we put the order by and limit clauses\nin the parent query:\n```sql\nSELECT\n  \"%1_Album\".\"Title\" AS \"Name\"\nFROM\n  (\n    SELECT\n      \"%0_Album\".*\n    FROM\n      \"public\".\"Album\" AS \"%0_Album\"\n  ) AS \"%1_Album\"\n  LEFT OUTER JOIN LATERAL (\n    SELECT\n      \"%2_ORDER_PART_Artist\".\"Name\" AS \"Name\"\n    FROM\n      (\n        SELECT\n          \"%2_ORDER_PART_Artist\".\"Name\" AS \"Name\"\n        FROM\n          \"public\".\"Artist\" AS \"%2_ORDER_PART_Artist\"\n        WHERE\n          (\n            \"%1_Album\".\"ArtistId\" = \"%2_ORDER_PART_Artist\".\"ArtistId\"\n          )\n      ) AS \"%2_ORDER_PART_Artist\"\n  ) AS \"%3_ORDER_FOR_Album\" ON ('true')\nORDER BY\n  \"%3_ORDER_FOR_Album\".\"Name\" ASC\nLIMIT\n  5 OFFSET 3\n```\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\nWhen ordering using columns in other tables, \nWhen ordering through a relationship, put the order by clause and limit\nin the parent query.\nWhen ordering from local column, put the order by clause and limit in\nthe subquery.\nAdditionally, add a copy of the order by clause in the parent, to ensure\ncorrectness.\n\nSee code comments for details",
          "timestamp": "2025-03-06T08:12:35Z",
          "tree_id": "06d2ce4387572081ae2b7cf30988ddf93595d53b",
          "url": "https://github.com/hasura/ndc-postgres/commit/0a824019a8478bcb88623f9fbf4c729fa52a3ccf"
        },
        "date": 1741249362282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.882583,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.61782019999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.106837751878885,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.539983165113849,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.208680246291415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.424148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.69599859999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.67155006612825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7976948188892834,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28463237282195863,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.1921635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.69042404999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.198434339883182,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.330973137494869,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2771471702438911,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.938511,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.83974760000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.94122048273563,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.703255890821936,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24543507624723948,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.549971,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.94224924999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.684739581305084,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.803764233025422,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2386231659404847,
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
          "distinct": false,
          "id": "99178d590381ca68a382bc90d688b75056d47abd",
          "message": "Revert \"Bump version to 2.1.0\" (#716)\n\nReverts hasura/ndc-postgres#714\n\nHaven't released this yet, need to include one more commit.",
          "timestamp": "2025-03-06T13:19:44Z",
          "tree_id": "893fd1b7e903334b7b7ac4364e80d831d9e1619e",
          "url": "https://github.com/hasura/ndc-postgres/commit/99178d590381ca68a382bc90d688b75056d47abd"
        },
        "date": 1741267628200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.976053999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.18068175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.640088387606944,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.745344992163403,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2172792228050836,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.93676099999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.48541639999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.9681590307406,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7482239943707256,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3014281734074074,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.9597255,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.44128825,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.96208204301339,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.529766647888323,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2824368139006971,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.587031,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.586095,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.462543200754713,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.247616703112815,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.261146768249598,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.657256,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.17664319999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.295983329893794,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.774782806378816,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2701700119813525,
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
          "id": "39eb2891ab0471bbc8942b9401a30e358350c516",
          "message": "Bump version to 2.1.0 (again) (#717)\n\nReverts hasura/ndc-postgres#716",
          "timestamp": "2025-03-06T14:33:54Z",
          "tree_id": "06d2ce4387572081ae2b7cf30988ddf93595d53b",
          "url": "https://github.com/hasura/ndc-postgres/commit/39eb2891ab0471bbc8942b9401a30e358350c516"
        },
        "date": 1741272078835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.223530500000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.018543749999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.112149578170321,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.844960401453509,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19871569894550528,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.95528200000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.57842675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.00460420513544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5618028687803118,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2780928059624445,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.0482925,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.13538675000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.67793790303082,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.327029908216748,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.29388401978021556,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.8318275,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.73643885,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.82358802936485,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.585908670263812,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.253577105784361,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.612841,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.00140129999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.89762854661468,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.714194828610967,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24208077454567434,
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
          "id": "0f2bcc5a9d296a46aa7b96b5fd6260017ef74634",
          "message": "Bump `ring` version (#718)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`cargo audit` reports it as unsafe, so bumping dep as advised.",
          "timestamp": "2025-03-07T11:37:15Z",
          "tree_id": "09f08034b9e035be306fe600ec6a14babec10e5c",
          "url": "https://github.com/hasura/ndc-postgres/commit/0f2bcc5a9d296a46aa7b96b5fd6260017ef74634"
        },
        "date": 1741347871587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.963272,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.330188799999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.216376001879288,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.587420390358469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21808708471190352,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.0231425,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.9331778,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.97595478236423,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.553052051190818,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28287827193391774,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.771745499999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.42863825,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.379628481258607,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.34185709534706,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2721532156495725,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.577308,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.0556766,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.22563230545254,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.52332325826362,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2439825761057879,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.547229,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.6972925,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.682599362459356,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.124344073051638,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22614018578210593,
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
          "id": "eb1af0f6a943e7a86620a24c8c9d1a54b6daac0e",
          "message": "Add `audit.toml` file to ignore cargo audit (#724)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nGetting some `cargo audit` failures that aren't relevant, this file\nallows us to ignore them.",
          "timestamp": "2025-03-10T20:13:43Z",
          "tree_id": "1cd2ba2d03364c4d81c68656bb77e698922e19a3",
          "url": "https://github.com/hasura/ndc-postgres/commit/eb1af0f6a943e7a86620a24c8c9d1a54b6daac0e"
        },
        "date": 1741638301548,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.121546000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.85262184999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.50007463583921,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.397252757997213,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19517214560714155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.1914275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.0383813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.24694409144534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.826897785406011,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28167646010051045,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.108182,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.195185,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.90805975518648,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.3356464759465965,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2592417384209029,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.8913575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.4911244,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.774403323972884,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.32871130007932,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22481145097883884,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.374593,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.10132489999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.13199524754442,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.074214621412519,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2339703586890021,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "85472423+paritosh-08@users.noreply.github.com",
            "name": "paritosh-08",
            "username": "paritosh-08"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6b5f5b2dbba33d781879406da259c8022b0b76c",
          "message": "add watch command while initializing metadata (#725)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis PR adds the watch command to the initial metadata.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-03-12T10:14:05Z",
          "tree_id": "f55721f2399a34f0ef58e733886a725421c3160c",
          "url": "https://github.com/hasura/ndc-postgres/commit/f6b5f5b2dbba33d781879406da259c8022b0b76c"
        },
        "date": 1741774887452,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.028343999999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.2494305,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.527504117339891,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.32328341195203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20341244110050838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.984603,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.8214261,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.807507784780256,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.698865878684586,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2867174590323406,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.278945500000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.30251289999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.320483587686095,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.552001811110205,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2847199840846409,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.149556,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.865843,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.507214412771496,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.355283071253446,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23943420070373425,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.5011255,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.59151265,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.396869989054245,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.094673819608147,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22584447763795792,
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
          "id": "c86413916521c0823c73193382e4e171a9efcffa",
          "message": "Version 2.1.1 (#726)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nChangelog and version bump.",
          "timestamp": "2025-03-12T14:40:14Z",
          "tree_id": "e60850dd5ee0aafa1e1b0abbdf0d4d379ea094e1",
          "url": "https://github.com/hasura/ndc-postgres/commit/c86413916521c0823c73193382e4e171a9efcffa"
        },
        "date": 1741791273904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.653328,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.7615492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.467711212287458,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.93277073336446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21702962469726597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.283885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.6925484,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.85467261372574,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6252226937669434,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28592027562434597,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.443835,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.27627079999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.88635161068123,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.800420954750628,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2867025025714146,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.476371,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.96423925,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.857484354965955,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.232565068750937,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.25662892415473987,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.2100775,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.00191854999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.865556598531978,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.502068128763195,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2193633653477905,
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
          "id": "a6040ccf6ec38225061cfa0e4fe0be0e34f04eeb",
          "message": "chore(deps): Bump tempfile from 3.17.1 to 3.18.0 (#720)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.17.1 to\n3.18.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.18.0</h2>\n<ul>\n<li>Update <code>rustix</code> to 1.0.0.</li>\n<li>Make <code>NamedTempFile::persist_noclobber</code> atomic on Apple\noperating systems. It's now atomic on MacOS, Windows, and Linux\n(depending on the OS version and filesystem used).</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/b8bddaf0cf6972bc542b5062f51576b6f02c0aac\"><code>b8bddaf</code></a>\nrelease 3.18.0</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/0e178694704dc68739a113c9eac1c108e02c49d2\"><code>0e17869</code></a>\nupdate rustix (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/336\">#336</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/6cf65365a4b785ed12d24e4a60b526e2c600210e\"><code>6cf6536</code></a>\ndoc: fix markdown</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/df39d15e3ffa1274331f98be94defd0732e5de41\"><code>df39d15</code></a>\ndoc: document atomicity of <code>persist_noclobber</code> (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/334\">#334</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.17.1...v3.18.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.17.1&new-version=3.18.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-12T15:02:41Z",
          "tree_id": "42c448780c55f076f38063d7551b7c6603b0274d",
          "url": "https://github.com/hasura/ndc-postgres/commit/a6040ccf6ec38225061cfa0e4fe0be0e34f04eeb"
        },
        "date": 1741792314194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.4303295,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.863776449999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.392580791751522,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.051458594539531,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20208865271544002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.68547849999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.88244099999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.45979241753404,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5286194751502578,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2848588715733155,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.1826655,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.48295,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.488258013618545,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.352286257607748,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.25203500254410555,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.715172,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.0941132,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.37851926189402,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.689104267110551,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23685487359491864,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.2167955,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.21852349999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.441816294592638,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.8230288521088305,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23272677588854873,
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
          "id": "b72c230005de0b73fb4cf9a1789f52cbeb7c98d6",
          "message": "chore(deps): Bump anyhow from 1.0.96 to 1.0.97 (#721)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.96 to 1.0.97.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.97</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/bfb89ef244fa60af17fb844dc3bddf4b62e4ac9f\"><code>bfb89ef</code></a>\nRelease 1.0.97</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/c7fca9b08627fe0c4034a3fd38595ffd7dcc8e0e\"><code>c7fca9b</code></a>\nIgnore elidable_lifetime_names pedantic clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/427c0bb0f34d5da378112f6a19db9efebfd0e40a\"><code>427c0bb</code></a>\nPoint standard library links to stable</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.96...1.0.97\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.96&new-version=1.0.97)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-12T15:03:12Z",
          "tree_id": "2e58f943428607dd183317addbf51cb64b594dc6",
          "url": "https://github.com/hasura/ndc-postgres/commit/b72c230005de0b73fb4cf9a1789f52cbeb7c98d6"
        },
        "date": 1741792645822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.110133,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.65371279999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.619771075513688,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.877711682643037,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20685107982312023,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.18125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.79018659999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.618463032186945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7065283827056064,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2932311739703138,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.798645,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.07352489999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.346463458141535,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.85934827209271,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3203390124102937,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.611135,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.41855600000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.327002722851557,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.270386187365549,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24821564949350508,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.771688,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.9038459,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.639926936807708,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.024003570819545,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2244970314709249,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "07bf9df1e1b162d937a9c761892739fc400e0f49",
          "message": "Remove haskell CI so we can better integrate with rest of CI, which is bash scripts (#734)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\nRemove haskell CI step, so future PRs can better integrate with rest of\nCI which is bash scripts.\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n`changelog.hs` would do the following to changelog.md:\n1. remove the top 4 lines\n```md\n# Changelog\n\n## [Unreleased]\n\n```\n2. Prepend the text with the following changelog template:\n```md\n# Changelog\n\n## [Unreleased]\n\n### Added\n\n### Changed\n\n### Fixed\n\n## [<new-version>] - <date>\n```\n3: Find a line that starts with `[Unreleased]: ` and replace it with a\nreference to the newly created tag, and update the reference to\nunreleased code\n\nWe replace this with a bash script that does much of the same. Instead\nof deleting the top 4 lines, we replace the `## [Unreleased]` header\nwith the new template.\n\nThis change is a no-op, but will facilitate upcoming changes to CI.",
          "timestamp": "2025-03-24T16:39:42Z",
          "tree_id": "657ac41c184ecb736ff12902dc02a945c4761857",
          "url": "https://github.com/hasura/ndc-postgres/commit/07bf9df1e1b162d937a9c761892739fc400e0f49"
        },
        "date": 1742835042875,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.990676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.94890410000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.541607039694119,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.519941683490705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19452691844557127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.231072,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.41059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.47156130350839,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5139192452274486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29731764044400255,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.971325,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.66073760000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 33.65499965701241,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.803627446139281,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.30773792118807036,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.308499,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.1654166,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.818086855873158,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.215822100371685,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2226106591887698,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.075651,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 60.739560899999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.718117550237285,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.577403365339517,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24355431363742605,
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
          "id": "636a01a2b04e71d7399859e22257b052a0f92d67",
          "message": "chore(deps): Bump uuid from 1.15.1 to 1.16.0 (#727)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.15.1 to 1.16.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.16.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Mark <code>Uuid::new_v8</code> const by <a\nhref=\"https://github.com/tguichaoua\"><code>@​tguichaoua</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/815\">uuid-rs/uuid#815</a></li>\n<li>Prepare for 1.16.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/817\">uuid-rs/uuid#817</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/tguichaoua\"><code>@​tguichaoua</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/815\">uuid-rs/uuid#815</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.15.1...v1.16.0\">https://github.com/uuid-rs/uuid/compare/v1.15.1...v1.16.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/c36beb14d50f835c1f1220117ca51aae64860a3e\"><code>c36beb1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/817\">#817</a> from\nuuid-rs/cargo/v1.16.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/5338b246b7a8244cab3cfaa85b14fe1d1bcdcd96\"><code>5338b24</code></a>\nprepare for 1.16.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/420f6279aeff48f0e12b0b39af43a5c149963382\"><code>420f627</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/815\">#815</a> from\ntguichaoua/new_v8_const</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/254258c8c7c7d6c41aaf6f573dc1731549d519b2\"><code>254258c</code></a>\nmark <code>Uuid::new_v8</code> const</li>\n<li>See full diff in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/v1.15.1...v1.16.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.15.1&new-version=1.16.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-24T17:03:56Z",
          "tree_id": "4f7994356f1a12c73b5865377890993d17d4746e",
          "url": "https://github.com/hasura/ndc-postgres/commit/636a01a2b04e71d7399859e22257b052a0f92d67"
        },
        "date": 1742836702596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.788584,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.28667489999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.584690339987644,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.770721648371994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20782361228666066,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.265222,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.98166519999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.15275708071334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.613457609232654,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3008880992082733,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.61183,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.7918211,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.320334175357374,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.052409355757511,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.327491084429386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.7944005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.3555344,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.681566931029955,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.516506890505902,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.25839333520607505,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.4537915,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.47192499999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.141969272079603,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.12553971644326,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23344743156394746,
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
          "id": "93cc788b5d92c79e48aa74899e621f4e1a942c75",
          "message": "chore(deps): Bump extractions/setup-just from 2 to 3 (#731)\n\nBumps\n[extractions/setup-just](https://github.com/extractions/setup-just) from\n2 to 3.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/e33e0265a09d6d736e2ee1e0eb685ef1de4669ff\"><code>e33e026</code></a>\nThis is 3.0.0</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/e8fa8d355d631b0b67a34b2a41355122ee456f31\"><code>e8fa8d3</code></a>\nConvert to composite action (<a\nhref=\"https://redirect.github.com/extractions/setup-just/issues/19\">#19</a>)</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/6e1de3cc407de738551abd6c0923bd5ed5608042\"><code>6e1de3c</code></a>\nKeep GitHub Actions up to date with GitHub's Dependabot (<a\nhref=\"https://redirect.github.com/extractions/setup-just/issues/14\">#14</a>)</li>\n<li><a\nhref=\"https://github.com/extractions/setup-just/commit/d91bfae12fd0bead47c99d6298d48f484e2857ff\"><code>d91bfae</code></a>\ndoc: update example code with the latest gha version (<a\nhref=\"https://redirect.github.com/extractions/setup-just/issues/16\">#16</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/extractions/setup-just/compare/v2...v3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=extractions/setup-just&package-manager=github_actions&previous-version=2&new-version=3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-24T17:04:30Z",
          "tree_id": "0da006ea015104f7f012752b0e427e45bc075e35",
          "url": "https://github.com/hasura/ndc-postgres/commit/93cc788b5d92c79e48aa74899e621f4e1a942c75"
        },
        "date": 1742836733220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.7578335,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.78339375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.191397700617525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.97226044143337,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22096497473954252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.49965750000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.0981905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.57414117116055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.731178060330599,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2985578502162729,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.0715875,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.07747164999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.942648146440124,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.770106132086088,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.29170495113471345,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.688341,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.13196710000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.346256247798763,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.808385944642559,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2601787920711356,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.08861,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.75000185,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.338304155873942,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.481335209679088,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2404080740626145,
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
          "id": "55b495a447ea1cb253a474f01a0d7047bcded797",
          "message": "chore(deps): Bump cachix/cachix-action from 15 to 16 (#733)\n\nBumps [cachix/cachix-action](https://github.com/cachix/cachix-action)\nfrom 15 to 16.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/cachix-action/releases\">cachix/cachix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v16</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add a small delay to allow post-build hooks to flush through by <a\nhref=\"https://github.com/sandydoo\"><code>@​sandydoo</code></a> in <a\nhref=\"https://redirect.github.com/cachix/cachix-action/pull/196\">cachix/cachix-action#196</a></li>\n<li>Upgraded dependencies</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/cachix/cachix-action/compare/v15...v16\">https://github.com/cachix/cachix-action/compare/v15...v16</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/0fc020193b5a1fa3ac4575aa3a7d3aa6a35435ad\"><code>0fc0201</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/cachix-action/issues/201\">#201</a>\nfrom cachix/bump-deps</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/9ff160dfdf7eb86c1a015019ab61735c71f20c1b\"><code>9ff160d</code></a>\ndist: build</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/43208f11653918d2dbfbae2324fed81dbb142c16\"><code>43208f1</code></a>\ndeps: pnpm update</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/177fc8ba87629fdd84cdc46eeb62708a02c91669\"><code>177fc8b</code></a>\nci: run private cache tests when secrets are available</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/9bb3a15fdb8235fe9ad2ceb2eabbf9244f8792cf\"><code>9bb3a15</code></a>\ndeps: devenv update</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/be5295a636153b6ad194d3245f78f8e0b78dc704\"><code>be5295a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/cachix-action/issues/197\">#197</a>\nfrom cachix/dev-restructure</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/dbbedb8579422142411526a74bec592bd3c595e2\"><code>dbbedb8</code></a>\nci: split build and test scripts</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/a3f805d98835c8b30abf35a497bf6fe0c37b4777\"><code>a3f805d</code></a>\nci: build once with devenv</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/c48cfdb2ec02154c9068f4de72b5149b1eb3abff\"><code>c48cfdb</code></a>\nci: switch out yarn</li>\n<li><a\nhref=\"https://github.com/cachix/cachix-action/commit/9af815036c1a51c73e74de739f2a2c7ce39bab3b\"><code>9af8150</code></a>\ndist: rebuild</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/cachix/cachix-action/compare/v15...v16\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=cachix/cachix-action&package-manager=github_actions&previous-version=15&new-version=16)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-24T17:04:53Z",
          "tree_id": "fa2153bd643041b74d7ee4c5bd6d2909d76a661d",
          "url": "https://github.com/hasura/ndc-postgres/commit/55b495a447ea1cb253a474f01a0d7047bcded797"
        },
        "date": 1742836933859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.3076995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.488024449999976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.408510372125631,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.675850284259775,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20405766148940124,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.562961,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.34950425,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.35409190738055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5794195053753555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29176392118275896,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.803856,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.4729601,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.228098767849186,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.256399330708977,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2732420436943281,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.26908,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.38935099999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.153131957302453,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.530082746858444,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24229281368755426,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.260189,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.87507959999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.76023947403619,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.798918467476035,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23007731395067818,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1de6fb434cd448b6938a3c5c364192ece7b018eb",
          "message": "Remove python ci script (#736)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\nWe had a python script used during the shipping workflow to generate\nrelease notes from the changelog.\n\nThis PR removes that script to better integrate with future ci scripts\nthat will also be in bash.\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\nWe create a bash script that takes 3 inputs: the new version tag, the\ninput file (changelog.md), and the output file.\n\nThe script will write directly to the output file, if all goes well.\nThis is different from the python script, which printed to stdout so the\noutput could be captured later.\n\nThe script itself is rather simple:\n- Match changelog lines between the version header and the next header\nor end marker\n- Error if unable to match any lines\n- Trim trailing and leading empty lines\n- Print the changelog lines and some boilerplate to the output file.\nNote this will overwrite the file if present",
          "timestamp": "2025-03-24T17:08:01Z",
          "tree_id": "2efbc93546e4c93ad100ed06522f41657726106f",
          "url": "https://github.com/hasura/ndc-postgres/commit/1de6fb434cd448b6938a3c5c364192ece7b018eb"
        },
        "date": 1742837389079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.5616795,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.87715875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.659826163054952,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.599014540929865,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19821482505683782,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.438861,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.89640094999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.23836794610474,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.786534855411638,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.31877673290163994,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.986757,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.73286325,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.440915627638976,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.638065449682355,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2639466945579694,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.520523,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.3276766,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 31.095124926322857,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.546189771327089,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2680220715624237,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.803584,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.7605541,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.292626057595783,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.140790435339248,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23561032104965682,
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
          "id": "e5dfd7a2c4d4853ac8dae4cbef5c738a50d08f1c",
          "message": "chore(deps): Bump tokio from 1.42.0 to 1.44.1 (#737)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.42.0 to 1.44.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.44.1</h2>\n<h1>1.44.1 (March 13th, 2025)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>rt: skip defer queue in <code>block_in_place</code> context (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7216\">#7216</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7216\">#7216</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7216\">tokio-rs/tokio#7216</a></p>\n<h2>Tokio v1.44.0</h2>\n<h1>1.44.0 (March 7th, 2025)</h1>\n<p>This release changes the <code>from_std</code> method on sockets to\npanic if a blocking socket is provided. We determined this change is not\na breaking change as Tokio is not intended to operate using blocking\nsockets. Doing so results in runtime hangs and should be considered a\nbug. Accidentally passing a blocking socket to Tokio is one of the most\ncommon user mistakes. If this change causes an issue for you, please\ncomment on <a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7172\">#7172</a>.</p>\n<h3>Added</h3>\n<ul>\n<li>coop: add <code>task::coop</code> module (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7116\">#7116</a>)</li>\n<li>process: add <code>Command::get_kill_on_drop()</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7086\">#7086</a>)</li>\n<li>sync: add <code>broadcast::Sender::closed</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6685\">#6685</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7090\">#7090</a>)</li>\n<li>sync: add <code>broadcast::WeakSender</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7100\">#7100</a>)</li>\n<li>sync: add <code>oneshot::Receiver::is_empty()</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7153\">#7153</a>)</li>\n<li>sync: add <code>oneshot::Receiver::is_terminated()</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7152\">#7152</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>fs: empty reads on <code>File</code> should not start a background\nread (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7139\">#7139</a>)</li>\n<li>process: calling <code>start_kill</code> on exited child should not\nfail (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7160\">#7160</a>)</li>\n<li>signal: fix <code>CTRL_CLOSE</code>, <code>CTRL_LOGOFF</code>,\n<code>CTRL_SHUTDOWN</code> on windows (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7122\">#7122</a>)</li>\n<li>sync: properly handle panic during mpsc drop (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7094\">#7094</a>)</li>\n</ul>\n<h3>Changes</h3>\n<ul>\n<li>runtime: clean up magic number in registration set (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7112\">#7112</a>)</li>\n<li>coop: make coop yield using waker defer strategy (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7185\">#7185</a>)</li>\n<li>macros: make <code>select!</code> budget-aware (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7164\">#7164</a>)</li>\n<li>net: panic when passing a blocking socket to <code>from_std</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7166\">#7166</a>)</li>\n<li>io: clean up buffer casts (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7142\">#7142</a>)</li>\n</ul>\n<h3>Changes to unstable APIs</h3>\n<ul>\n<li>rt: add before and after task poll callbacks (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7120\">#7120</a>)</li>\n<li>tracing: make the task tracing API unstable public (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6972\">#6972</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>docs: fix nesting of sections in top-level docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7159\">#7159</a>)</li>\n<li>fs: rename symlink and hardlink parameter names (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7143\">#7143</a>)</li>\n<li>io: swap reader/writer in simplex doc test (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7176\">#7176</a>)</li>\n<li>macros: docs about <code>select!</code> alternatives (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7110\">#7110</a>)</li>\n<li>net: rename the argument for <code>send_to</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7146\">#7146</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/d413c9c02af8f2b4fea14b769b86484b12f46595\"><code>d413c9c</code></a>\nchore: prepare Tokio v1.44.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7217\">#7217</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/addbfb9204be25a8621feb3f20b44a7c1f00edbd\"><code>addbfb9</code></a>\nrt: skip defer queue in <code>block_in_place</code> context (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7216\">#7216</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/8182ecf2628d5e80dac52b8ed1ea466dbb0925b9\"><code>8182ecf</code></a>\nchore: prepare Tokio v1.44.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7202\">#7202</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a258bff7018940b438e5de3fb846588454df4e4d\"><code>a258bff</code></a>\nci: enable printing in multi thread loom tests (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7200\">#7200</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e076d21f679a35ae2697165d46d111285d09e3b4\"><code>e076d21</code></a>\nprocess: clarify <code>Child::kill</code> behavior (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7162\">#7162</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/042433cdccdf0dd33408c1751a80ddd50a077872\"><code>042433c</code></a>\nnet: debug_assert on creating a tokio socket from a blocking one (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7166\">#7166</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/0284d1b5c8ea5aff5b30c254200fb0a46c21d67c\"><code>0284d1b</code></a>\nmacros: make <code>select!</code> budget-aware (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7164\">#7164</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/710bc8071ea030f0ad98817414997beab2420ad2\"><code>710bc80</code></a>\nrt: coop should yield using waker defer strategy (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7185\">#7185</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a2b12bd5799f06e912b32ac05a5ffb5cf1fe31cd\"><code>a2b12bd</code></a>\nreadme: adjust release schedule to once per month (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7191\">#7191</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e7b593cbee9541500cef047f3a0ee70be1c55c6f\"><code>e7b593c</code></a>\nprocess: fix grammar of the <code>ChildStdin</code> struct doc comment\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7192\">#7192</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.42.0...tokio-1.44.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.42.0&new-version=1.44.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T13:53:24Z",
          "tree_id": "132855759b9112bdb1279040a767d7e822b7624a",
          "url": "https://github.com/hasura/ndc-postgres/commit/e5dfd7a2c4d4853ac8dae4cbef5c738a50d08f1c"
        },
        "date": 1743429739377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.360883,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.77824014999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.707057549013813,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.005674422439283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2157640333591739,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.19414,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.01345429999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.146628971125494,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.666793648752808,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2682052788745769,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.831619,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.567678,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.16295965408102,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.45809221376971,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28321986002701227,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.0398105,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.26939795,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.361869650716695,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.398948091224579,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2398136021825162,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.724954,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.7886825,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.969705938932865,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.586521996871564,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22965925403910606,
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
          "id": "cad072272a34e0a7e3c828b16cab274885607a1a",
          "message": "chore(deps): Bump mimalloc from 0.1.43 to 0.1.44 (#738)\n\nBumps [mimalloc](https://github.com/purpleprotocol/mimalloc_rust) from\n0.1.43 to 0.1.44.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/releases\">mimalloc's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Version 0.1.44</h2>\n<h3>Changes</h3>\n<ul>\n<li>Mimalloc v2.2.2</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/bbf61305ad2d9d1c4b417bd277e36caec31d21b7\"><code>bbf6130</code></a>\nv0.1.44</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/3e7e3214ea3397ffc922baaa42933e5091482073\"><code>3e7e321</code></a>\nPatch windows</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/f37c56ad7c3ed13904afd272e59f3ca80f7b02b8\"><code>f37c56a</code></a>\nClippy</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/c00538aa0b553e7eecab40b114fedb56f414ddc7\"><code>c00538a</code></a>\nUpdate to mimalloc v2.2.2</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/cc1c72a62bf3edefe5abf842b60092f088740860\"><code>cc1c72a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/purpleprotocol/mimalloc_rust/issues/126\">#126</a>\nfrom richerfu/master</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/e638bd6055ad4df3aa4edbfddfc1d0a09d073692\"><code>e638bd6</code></a>\nfeat: use env to adapt to more general scenarios for atomic</li>\n<li>See full diff in <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/compare/v0.1.43...v0.1.44\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=mimalloc&package-manager=cargo&previous-version=0.1.43&new-version=0.1.44)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T13:53:26Z",
          "tree_id": "60fed3e8c32ac7876e39622f3271f36828334cdc",
          "url": "https://github.com/hasura/ndc-postgres/commit/cad072272a34e0a7e3c828b16cab274885607a1a"
        },
        "date": 1743430056743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.383339,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.79635429999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.633006378175326,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.525619067015208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20122485999744158,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.110216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.38143489999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.07162106369001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.630262979937008,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28288548508079087,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.309354,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.49021425,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.852191895956782,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.757519865016018,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.25907545487337386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.4151915,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.47648975,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.66953360089206,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.546822560789032,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24066517724987316,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.199659499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.0488095,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.78140313061805,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.79956496194659,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2329995416040142,
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
          "id": "a0ab72dcdfd61dae697cfcd4d5d18ce04a79e84b",
          "message": "chore(deps): Bump clap from 4.5.31 to 4.5.34 (#741)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.31 to 4.5.34.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.34</h2>\n<h2>[4.5.34] - 2025-03-27</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Don't add extra blank lines with\n<code>flatten_help(true)</code> and subcommands without arguments</li>\n</ul>\n<h2>v4.5.33</h2>\n<h2>[4.5.33] - 2025-03-26</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> When showing the usage of a suggestion for an\nunknown argument, don't show the group</li>\n</ul>\n<h2>v4.5.32</h2>\n<h2>[4.5.32] - 2025-03-10</h2>\n<h3>Features</h3>\n<ul>\n<li>Add <code>Error::remove</code></li>\n</ul>\n<h3>Documentation</h3>\n<ul>\n<li><em>(cookbook)</em> Switch from <code>humantime</code> to\n<code>jiff</code></li>\n<li><em>(tutorial)</em> Better cover required vs optional</li>\n</ul>\n<h3>Internal</h3>\n<ul>\n<li>Update <code>pulldown-cmark</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.34] - 2025-03-27</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Don't add extra blank lines with\n<code>flatten_help(true)</code> and subcommands without arguments</li>\n</ul>\n<h2>[4.5.33] - 2025-03-26</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> When showing the usage of a suggestion for an\nunknown argument, don't show the group</li>\n</ul>\n<h2>[4.5.32] - 2025-03-10</h2>\n<h3>Features</h3>\n<ul>\n<li>Add <code>Error::remove</code></li>\n</ul>\n<h3>Documentation</h3>\n<ul>\n<li><em>(cookbook)</em> Switch from <code>humantime</code> to\n<code>jiff</code></li>\n<li><em>(tutorial)</em> Better cover required vs optional</li>\n</ul>\n<h3>Internal</h3>\n<ul>\n<li>Update <code>pulldown-cmark</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5d2cdac3e6a7aa5fc720f911a2a5a7671e610758\"><code>5d2cdac</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f1c10ebe58f888cf96b48aeb8c4b0b6d6cbc6e6f\"><code>f1c10eb</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a4d1a7fe2b9dc4b52fccb15515e2931291217059\"><code>a4d1a7f</code></a>\nchore(ci): Take a break from template updates</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/e95ed396c427febc684f4a0995fcbd3a025e6a37\"><code>e95ed39</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5775\">#5775</a>\nfrom vivienm/master</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/18f8d4c3f5e0e2fd967e2342c4ccb030da241fe8\"><code>18f8d4c</code></a>\nchore(deps): Update Rust Stable to v1.82 (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5788\">#5788</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f35d8e09fbc8f72033518423d7102faa1fd50646\"><code>f35d8e0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5787\">#5787</a>\nfrom epage/template</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/1389d7d689f2730c61222d261401c7331a39ceae\"><code>1389d7d</code></a>\nchore: Update from '_rust/main' template</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/dbc9faa79d67ab86cbe68da68b2cd93a0335661a\"><code>dbc9faa</code></a>\nchore(ci): Initialize git for template update</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/3dac2f36833e08f6cac85b03e5907ca3dec03c4c\"><code>3dac2f3</code></a>\nchore(ci): Get history for template update</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/e1f77dacf108a8cfdbe8bdff3de36bdfa3bcf50d\"><code>e1f77da</code></a>\nchore(ci): Fix branch for template update</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/v4.5.31...clap_complete-v4.5.34\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.31&new-version=4.5.34)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T13:54:22Z",
          "tree_id": "43fb5c9e72252e74b48167ba6f10bb0905374e91",
          "url": "https://github.com/hasura/ndc-postgres/commit/a0ab72dcdfd61dae697cfcd4d5d18ce04a79e84b"
        },
        "date": 1743430319210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.1590805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.69988904999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.22033226609623,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.939470643187343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2023541795892205,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.371506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.8813922,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.32899847549833,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6994355077042869,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2907509190828452,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.06402,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.16782040000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.4346122028122,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.671901130720155,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.27335869458932627,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.711597,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.58235239999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.877832105319012,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.366077494178217,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24520705808376203,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.3995225,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.2947874,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.983297565105016,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.586483192355853,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22065604668248665,
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
          "id": "42c029c3ad9bb6acb119374f0df41acf4977a605",
          "message": "Bump `openssl` to address `cargo audit` (#748)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nBump `openssl` because of `cargo audit` report.",
          "timestamp": "2025-04-07T16:18:53Z",
          "tree_id": "803f01bfc4f6a944d8ec3e8fd81462a45e9a1f4d",
          "url": "https://github.com/hasura/ndc-postgres/commit/42c029c3ad9bb6acb119374f0df41acf4977a605"
        },
        "date": 1744043409275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.933251,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.890874700000026,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.779883369746459,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6516648429683425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21642256267838547,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.7370135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.79640475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.4939533457911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6401455316403428,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27071356538461827,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 45.200802,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.78495119999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.958181612881297,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.94754891391446,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.27113407682239193,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.599519,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.6948678,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.210525527541854,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.027703503904,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24448310637036652,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.515902499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.38880654999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.16831013796821,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1906075747294445,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24131453084943297,
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
          "id": "dd57c64502e2966042364cf7d3b19e173f2f16ff",
          "message": "chore(deps): Bump clap from 4.5.34 to 4.5.35 (#744)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.34 to 4.5.35.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.35</h2>\n<h2>[4.5.35] - 2025-04-01</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Align positionals and flags when put in the same\n<code>help_heading</code></li>\n<li><em>(help)</em> Don't leave space for shorts if there are none</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.35] - 2025-04-01</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Align positionals and flags when put in the same\n<code>help_heading</code></li>\n<li><em>(help)</em> Don't leave space for shorts if there are none</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/55a18f518bc00886a6c1d88ea02df157f013cdd9\"><code>55a18f5</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/3b0563580d1fcb26df7b81b9c0204af730c47bcd\"><code>3b05635</code></a>\nfix(complete): Ensure new enough clap is used</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.34...clap_complete-v4.5.35\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.34&new-version=4.5.35)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T16:38:25Z",
          "tree_id": "d45bcc8c3e03a803480aff47998f8a005b8344cf",
          "url": "https://github.com/hasura/ndc-postgres/commit/dd57c64502e2966042364cf7d3b19e173f2f16ff"
        },
        "date": 1744044382436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.1521805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.14341525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.32670983674053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.671602208268855,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21072244010206637,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.666077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.11694219999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.510218100036326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7038328591784904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29055984601965834,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.5133735,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.4419754,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.307542994062864,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.347473543934306,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.25497314906998564,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.438844,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.94547225,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.023572190321545,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.410246027088633,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23307570364715524,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.26144,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.97444735000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.65934158250258,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.860719173977994,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2220707946160157,
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
          "id": "c1339bf60f55691c43fed165bb5fbd27713c61b4",
          "message": "chore(deps): Bump indexmap from 2.7.1 to 2.9.0 (#746)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.7.1 to\n2.9.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.9.0 (2025-04-04)</h2>\n<ul>\n<li>Added a <code>get_disjoint_mut</code> method to\n<code>IndexMap</code>, matching Rust 1.86's\n<code>HashMap</code> method.</li>\n<li>Added a <code>get_disjoint_indices_mut</code> method to\n<code>IndexMap</code> and <code>map::Slice</code>,\nmatching Rust 1.86's <code>get_disjoint_mut</code> method on\nslices.</li>\n<li>Deprecated the <code>borsh</code> feature in favor of their own\n<code>indexmap</code> feature,\nsolving a cyclic dependency that occured via\n<code>borsh-derive</code>.</li>\n</ul>\n<h2>2.8.0 (2025-03-10)</h2>\n<ul>\n<li>Added <code>indexmap_with_default!</code> and\n<code>indexset_with_default!</code> to be used with\nalternative hashers, especially when using the crate without\n<code>std</code>.</li>\n<li>Implemented <code>PartialEq</code> between each <code>Slice</code>\nand <code>[]</code>/arrays.</li>\n<li>Removed the internal <code>rustc-rayon</code> feature and\ndependency.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/1818d4140d86aeef18c515f1b060a3fa68da2708\"><code>1818d41</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/387\">#387</a>\nfrom cuviper/release-2.9.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/9f4998341b2f7fad5624fdc1d92c2ca51f0dce64\"><code>9f49983</code></a>\nRelease 2.9.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/582a90fda3326cb8e75f702a7251ea46bdd47d34\"><code>582a90f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/386\">#386</a>\nfrom cuviper/de-borsh</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/90117397b693d3794ce960fe1582ed247569d480\"><code>9011739</code></a>\nDeprecate the &quot;borsh&quot; feature</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0a836e8648304ac3c29059aaae2569274530dab1\"><code>0a836e8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/238\">#238</a>\nfrom NiklasJonsson/get_many_mut</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/434d7ac6d122cf27dce979eb3888e362853dfb2d\"><code>434d7ac</code></a>\nAvoid let-else for MSRV's sake</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5be552d557765a8ccc919185838067b3c77eab95\"><code>5be552d</code></a>\nImplement additional suggestions from review</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4e1d8cef470b4d96380ebbb8bae8994db1d79f51\"><code>4e1d8ce</code></a>\nAddress review feedback</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5aec9ec674d40f2c2da74ef6a335353cc41092dc\"><code>5aec9ec</code></a>\nImplement get_disjoint_mut for arrays of keys</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/d10de30e74924c8f71f924a307ebca7678ba58e5\"><code>d10de30</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/385\">#385</a>\nfrom iajoiner/docs/macros</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.7.1...2.9.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.7.1&new-version=2.9.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T16:38:36Z",
          "tree_id": "29e201d1b858bee5b9ae5c92ee36c74f2b8dfdcc",
          "url": "https://github.com/hasura/ndc-postgres/commit/c1339bf60f55691c43fed165bb5fbd27713c61b4"
        },
        "date": 1744044781970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.3454495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.33210835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.09005695386395,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.991526628796628,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2114311538690987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.8994045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.50039584999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.481839581417006,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5538834999999125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28786345871994146,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.289449,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.4767888,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.45963050322879,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.418836707363358,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.30121408479697154,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.6756015,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.12670315000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.284617033435516,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.00438532629277,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21834216323403857,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.4298495,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.179131649999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.003116922174307,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.953736457549692,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2261856699284918,
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
          "id": "362d9640b80c7604e9c1a7bf9fc059643aa897bd",
          "message": "chore(deps): Bump async-trait from 0.1.87 to 0.1.88 (#747)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.87\nto 0.1.88.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.88</h2>\n<ul>\n<li>Fix lifetime bounding on generic parameters that have cfg (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/289\">#289</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b3a59195c29c5b336490cec1bac23cff8d3e4483\"><code>b3a5919</code></a>\nRelease 0.1.88</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/a306be84ec998f46acc700e8b24a3b68b77a873a\"><code>a306be8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/289\">#289</a>\nfrom dtolnay/cfg</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/d3059849a4024425f80f0713bc802d8959290d96\"><code>d305984</code></a>\nFix lifetime bounding on generic parameters that have cfg</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/78506f17149e08594c1a120f1df828411772a0b8\"><code>78506f1</code></a>\nAdd regression test for issue 288</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/a11384eec60634098f66a3d6ac89c23beccdbbc8\"><code>a11384e</code></a>\nAdd issue 283 link in test</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.87...0.1.88\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.87&new-version=0.1.88)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T16:39:07Z",
          "tree_id": "8b755990b61af38e5d759e4cdd8543c1fe2e1c12",
          "url": "https://github.com/hasura/ndc-postgres/commit/362d9640b80c7604e9c1a7bf9fc059643aa897bd"
        },
        "date": 1744044823597,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.883228,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.60891889999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.535651746955438,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.951191557770187,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2209478682218158,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.445379,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.59473209999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.44813599954748,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.0441820980389522,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3336060607092911,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.418501000000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.71186064999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.784665226490457,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.118894937117933,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2978044130639347,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.402955000000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.9320165,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.135324584265454,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.864783919985975,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.25333477624633044,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.059636499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.07766965,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.080387031476526,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.360208398704806,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24412588035436703,
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
          "distinct": false,
          "id": "b646120002939c7ed7696f6095a10cc3355f4f06",
          "message": "Bump `crossbeam-channel` (#756)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nResolve `cargo audit` issue.",
          "timestamp": "2025-04-22T14:25:21Z",
          "tree_id": "32ac147617fd87cd81d3e0e55a2f8b96c1059c07",
          "url": "https://github.com/hasura/ndc-postgres/commit/b646120002939c7ed7696f6095a10cc3355f4f06"
        },
        "date": 1745332606668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.9388965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.12169899999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.224625725258871,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.340152706706871,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2034225268625973,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.0743245,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.30910085000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.03841779503039,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7463973098043724,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2912258694229145,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.004815,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.5982761,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.856507707641224,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.8805724468684595,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2894401250062662,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.336293,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.6332872,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.6180532815878,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.560731630268233,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2500413333189781,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.959374499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.619834350000005,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.06913596961369,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.06581136197272,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2362957348912873,
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
          "id": "bfea652dfb882a1d0f528cce93b77ffd3df46838",
          "message": "chore(deps): Bump tokio from 1.44.1 to 1.44.2 (#749)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.44.1 to 1.44.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.44.2</h2>\n<p>This release fixes a soundness issue in the broadcast channel. The\nchannel\naccepts values that are <code>Send</code> but <code>!Sync</code>.\nPreviously, the channel called\n<code>clone()</code> on these values without synchronizing. This release\nfixes the channel\nby synchronizing calls to <code>.clone()</code> (Thanks Austin Bonander\nfor finding and\nreporting the issue).</p>\n<h3>Fixed</h3>\n<ul>\n<li>sync: synchronize <code>clone()</code> call in broadcast channel (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7232\">#7232</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7232\">#7232</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7232\">tokio-rs/tokio#7232</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ec4b1d7215a3e1e91797ad3fb6ba0f7c7f3d2566\"><code>ec4b1d7</code></a>\nchore: forward port 1.43.x</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e3c3a56718d201fb7bb430567f05fbb64b2ef082\"><code>e3c3a56</code></a>\nMerge branch 'tokio-1.43.x' into forward-port-1.43.x</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a7b658c35bd40f6811e557aeb97cbb361b612c56\"><code>a7b658c</code></a>\nchore: prepare Tokio v1.43.1 release</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/c1c8d1033d637d7027fdc137ec8008c5801cbc0d\"><code>c1c8d10</code></a>\nMerge remote-tracking branch 'origin/tokio-1.38.x' into\nforward-port-1.38.x</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/aa303bc2051f7c21b48bb7bfcafe8fd4f39afd21\"><code>aa303bc</code></a>\nchore: prepare Tokio v1.38.2 release</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/7b6ccb515ff067151ed62db835f735e5653f8784\"><code>7b6ccb5</code></a>\nchore: backport CI fixes</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4b174ce2c95fe1d1a217917db93fcc935e17e0da\"><code>4b174ce</code></a>\nsync: fix cloning value when receiving from broadcast channel</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.44.1...tokio-1.44.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.44.1&new-version=1.44.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-22T14:33:47Z",
          "tree_id": "89aa8d30a34a85bc009ab5b8dec53ff004841133",
          "url": "https://github.com/hasura/ndc-postgres/commit/bfea652dfb882a1d0f528cce93b77ffd3df46838"
        },
        "date": 1745333297440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.152655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.143442100000016,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.15397738650534,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.695569735235386,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20525032141233904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.477167,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.141541,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.19057828447458,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5251432078965692,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2935569436692111,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.859055,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.87522159999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.36591935896908,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.688576476548903,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2842440762600648,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.127558,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.7017835,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.044245489748008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.913300458752225,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24309772278117497,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.01861,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.9876734,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.9945212046214,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.032788842582871,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23453930142357005,
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
          "id": "6c376288d9af31bde8feadb2a9d903077ac29cbd",
          "message": "chore(deps): Bump bytes from 1.10.0 to 1.10.1 (#750)\n\n[//]: # (dependabot-start)\n⚠️  **Dependabot is rebasing this PR** ⚠️ \n\nRebasing might not happen immediately, so don't worry if this takes some\ntime.\n\nNote: if you make any changes to this PR yourself, they will take\nprecedence over the rebase.\n\n---\n\n[//]: # (dependabot-end)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.10.0 to 1.10.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes v1.10.1</h2>\n<h1>1.10.1 (March 5th, 2025)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>Fix memory leak when using <code>to_vec</code> with\n<code>Bytes::from_owner</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/773\">#773</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/773\">#773</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/pull/773\">tokio-rs/bytes#773</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.10.1 (March 5th, 2025)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>Fix memory leak when using <code>to_vec</code> with\n<code>Bytes::from_owner</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/773\">#773</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/19d1427c971f6b619356966163459e43f797de2f\"><code>19d1427</code></a>\nchore: prepare bytes v1.10.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/774\">#774</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/36675436cc343fc0e828033278d668020bd897b9\"><code>3667543</code></a>\nFix memory leak in <code>owned_to_vec</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/773\">#773</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.10.0...v1.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.10.0&new-version=1.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-22T14:45:04Z",
          "tree_id": "5084eedca596c7c485b09675f1a2f81349d88fdc",
          "url": "https://github.com/hasura/ndc-postgres/commit/6c376288d9af31bde8feadb2a9d903077ac29cbd"
        },
        "date": 1745333992825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.990725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.200189999999935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.739059558486565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.659261594922315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21047449978165594,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.837593,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.47269975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.79106808780214,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7816420957570926,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.332290573143518,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.693091499999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.45531239999993,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.44071588776111,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.190566593424872,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3125783296367175,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.8151705,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.810725999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.76132826037075,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.906569803794884,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2345196313498176,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.618442,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.58752999999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.870495530426034,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.962738560116005,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23332338815737416,
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
          "id": "6c190fd34a8b80086fedf1db6abe571c7fb72315",
          "message": "chore(deps): Bump sqlx from 0.8.3 to 0.8.5 (#754)\n\n[//]: # (dependabot-start)\n⚠️  **Dependabot is rebasing this PR** ⚠️ \n\nRebasing might not happen immediately, so don't worry if this takes some\ntime.\n\nNote: if you make any changes to this PR yourself, they will take\nprecedence over the rebase.\n\n---\n\n[//]: # (dependabot-end)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.8.3 to 0.8.5.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.8.5 - 2025-04-14</h2>\n<p>Hotfix release to address two new issues:</p>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3823\">#3823</a>]:\n<code>sqlx-cli@0.8.4</code> broke <code>.env</code> default resolution\nmechanism</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3825\">#3825</a>]:\n<code>sqlx@0.8.4</code> broke test fixture setup</li>\n</ul>\n<p>The <code>0.8.4</code> release will be yanked as of publishing this\none.</p>\n<h3>Added</h3>\n<ul>\n<li>In release PR: <code>sqlx-cli</code> now accepts\n<code>--no-dotenv</code> in subcommand arguments.</li>\n<li>In release PR: added functionality tests for <code>sqlx-cli</code>\nto CI.</li>\n<li>In release PR: test <code>#[sqlx::test]</code> twice in CI to cover\ncleanup.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>In release PR: <code>sqlx-cli</code> correctly reads\n<code>.env</code> files by default again.\n<ul>\n<li>Addresses [<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3823\">#3823</a>].</li>\n</ul>\n</li>\n<li>In release PR: fix bugs in MySQL implementation of\n<code>#[sqlx::test]</code>.\n<ul>\n<li>Addresses [<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3825\">#3825</a>].</li>\n</ul>\n</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3823\">#3823</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3823\">launchbadge/sqlx#3823</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3825\">#3825</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3825\">launchbadge/sqlx#3825</a></p>\n<h2>0.8.4 - 2025-04-13</h2>\n<p>50 pull requests were merged this release cycle.</p>\n<p>As of this release, development of <code>0.9.0</code> has begun on\n<code>main</code>.\nBarring urgent hotfixes, this is expected to be the last release of\n<code>0.8.x</code>.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3603\">#3603</a>]:\nAdded missing special casing for encoding embedded arrays of custom\ntypes [[<a\nhref=\"https://github.com/nico-incubiq\"><code>@​nico-incubiq</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3625\">#3625</a>]:\nfeat(sqlite): add preupdate hook [[<a\nhref=\"https://github.com/aschey\"><code>@​aschey</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3655\">#3655</a>]:\ndocs: add example for postgres enums with type TEXT [[<a\nhref=\"https://github.com/tisonkun\"><code>@​tisonkun</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3677\">#3677</a>]:\nAdd json(nullable) macro attribute [[<a\nhref=\"https://github.com/seanaye\"><code>@​seanaye</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3687\">#3687</a>]:\nDerive clone and debug for postgresql arguments [[<a\nhref=\"https://github.com/remysaissy\"><code>@​remysaissy</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3690\">#3690</a>]:\nfeat: add postres geometry line segment [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3707\">#3707</a>]:\nfeat(Sqlite): add LockedSqliteHandle::last_error [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3710\">#3710</a>]:\nfeat: add ipnet support [[<a\nhref=\"https://github.com/BeauGieskens\"><code>@​BeauGieskens</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3711\">#3711</a>]:\nfeat(postgres): add geometry box [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3714\">#3714</a>]:\nchore: expose bstr feature [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3716\">#3716</a>]:\nfeat(postgres): add geometry path [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3724\">#3724</a>]:\nfeat(sqlx-cli): Add flag to disable automatic loading of .env files [[<a\nhref=\"https://github.com/benwilber\"><code>@​benwilber</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3734\">#3734</a>]:\nQueryBuilder: add debug_assert when <code>push_values</code> is passed\nan empty set of tuples [[<a\nhref=\"https://github.com/chanmaoganda\"><code>@​chanmaoganda</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3745\">#3745</a>]:\nfeat: sqlx sqlite expose de/serialize [[<a\nhref=\"https://github.com/mattrighetti\"><code>@​mattrighetti</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3765\">#3765</a>]:\nMerge of <a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3427\">#3427</a>\n(by <a href=\"https://github.com/mpyw\"><code>@​mpyw</code></a>) and <a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3614\">#3614</a>\n(by <a\nhref=\"https://github.com/bonsairobo\"><code>@​bonsairobo</code></a>) [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3427\">#3427</a>]\nExpose <code>transaction_depth</code> through\n<code>get_transaction_depth()</code> method [[<a\nhref=\"https://github.com/mpyw\"><code>@​mpyw</code></a>]]\n<ul>\n<li>Changed to <code>Connection::is_in_transaction</code> in [<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3765\">#3765</a>]</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3614\">#3614</a>]\nAdd <code>begin_with</code> methods to support database-specific\ntransaction options [[<a\nhref=\"https://github.com/bonsairobo\"><code>@​bonsairobo</code></a>]]</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3769\">#3769</a>]:\nfeat(postgres): add geometry polygon [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3773\">#3773</a>]:\nfeat(postgres): add geometry circle [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e7236881a1d618835d074481e45306a8ddc5a916\"><code>e723688</code></a>\nHotfix 0.8.5 (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3824\">#3824</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/f9084035d763b541c31d8d69f543583c4bc68f0f\"><code>f908403</code></a>\n0.8.4 release (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3819\">#3819</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/154878547e7e78c42bf97a34dccd745edbce2ef3\"><code>1548785</code></a>\nfix: PgConnectOptions docs (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3809\">#3809</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/97bf270cafc6fa6402979125188c838e1572279c\"><code>97bf270</code></a>\nAlways set SQLITE_OPEN_URI (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3289\">#3289</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/42def59973139c7265d4d4ed302a0f701235479c\"><code>42def59</code></a>\nfix(macros): cache macro metadata based on\n<code>CARGO_MANIFEST_DIR</code> (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3815\">#3815</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e283bf9645713985f4a6c37b80b3fb5d9c07e087\"><code>e283bf9</code></a>\nmysql: Fix panic on invalid text row length field</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/082aed5c2b6e68172bf29c377c3f5c87ca17cde4\"><code>082aed5</code></a>\nFix error message typo in PgPoint::from_str (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3811\">#3811</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/f0be19e6404a734d4d56bcc91410419ad6831ce5\"><code>f0be19e</code></a>\nEnable json feature without db enabled (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3801\">#3801</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/1c9cbe939ada22f377e51f3d60d538bcfc567e8f\"><code>1c9cbe9</code></a>\nfeat: add ipnet support (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3710\">#3710</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e474be6d4b4f7b8a1bbeb65363ef53015feebc47\"><code>e474be6</code></a>\ndocs: Fix a copy-paste error on get_username docs (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3786\">#3786</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.8.3...v0.8.5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.8.3&new-version=0.8.5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-22T14:45:33Z",
          "tree_id": "ce8cd6024bc1eaef3c0352ae930ca077a537c31f",
          "url": "https://github.com/hasura/ndc-postgres/commit/6c190fd34a8b80086fedf1db6abe571c7fb72315"
        },
        "date": 1745334001261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.117413,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.6100215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.05531686369448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.8213695169883675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20739923513694292,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.916764,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.5663122,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.27207629199674,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9319064147703386,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3276963918005525,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.158902999999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.22350485000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.210041682126885,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.743634449010152,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.29595391616534933,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.72251,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.69927119999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.187288707430994,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.828688407820756,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2620574739536723,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.940709,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.53231569999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.61533693414133,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.21490666203783,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.278139714850917,
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
          "id": "9f2aff767f6e9578e9d1e0d00c1a8483045df879",
          "message": "chore(deps): Bump clap from 4.5.35 to 4.5.37 (#755)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.35 to 4.5.37.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.37</h2>\n<h2>[4.5.37] - 2025-04-18</h2>\n<h3>Features</h3>\n<ul>\n<li>Added <code>ArgMatches::try_clear_id()</code></li>\n</ul>\n<h2>v4.5.36</h2>\n<h2>[4.5.36] - 2025-04-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Revert 4.5.35's &quot;Don't leave space for shorts\nif there are none&quot; for now</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.37] - 2025-04-18</h2>\n<h3>Features</h3>\n<ul>\n<li>Added <code>ArgMatches::try_clear_id()</code></li>\n</ul>\n<h2>[4.5.36] - 2025-04-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Revert 4.5.35's &quot;Don't leave space for shorts\nif there are none&quot; for now</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c54ffa17f5f42aa805342a97ade74bb224f68d0c\"><code>c54ffa1</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/26eab7b4e5b909f440b5d85321e2ab67c7f3f42f\"><code>26eab7b</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f275804c235a7db42f0b0ce4837ada865bd29fd5\"><code>f275804</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5805\">#5805</a>\nfrom epage/style</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7c7742cae8b88fd11ec1f4cadbb49713cc03063a\"><code>7c7742c</code></a>\nfix(complete): Adjust dynamic for MSRV</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f1ae3c0e4942a82327970dbf4acbfdb41d431808\"><code>f1ae3c0</code></a>\nstyle: Make clippy happy</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5c932b7079f0a7861514c20a4cd2b6c56897bff7\"><code>5c932b7</code></a>\nchore(deps): Update Rust crate divan to v0.1.15 (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5798\">#5798</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/bc0537f58925a0c293f805b692d847141a3db430\"><code>bc0537f</code></a>\nchore(deps): Update compatible (dev) (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5797\">#5797</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7a6475e3c1ac68f810c50c6c1507a85bc9aa82fa\"><code>7a6475e</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0266c4197f6e700376663bf30627acb986b28cf6\"><code>0266c41</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6ec0b43448c9a4f9d744d42a2c96068f3ca66a79\"><code>6ec0b43</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5791\">#5791</a>\nfrom okapia/zsh-default-fallback</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.35...clap_complete-v4.5.37\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.35&new-version=4.5.37)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-22T14:46:05Z",
          "tree_id": "38db21338a37ac100b6821aa7ef0e1964cbf4546",
          "url": "https://github.com/hasura/ndc-postgres/commit/9f2aff767f6e9578e9d1e0d00c1a8483045df879"
        },
        "date": 1745334035018,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.437808,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.70509659999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.823527799308659,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.183056353343103,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2026967259457642,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.154558,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.6615975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.86273045575714,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6487039208360486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.285878737600871,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.343609,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.637435,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.426162639908892,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.877684527494278,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2832691581634643,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.6982355,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.7748432,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.912093074780113,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.919046631123447,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22871476946937916,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.514481,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.920373999999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.416599795575898,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.92811774416014,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24966259281699366,
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
          "id": "b8cdbf993d52b9dfd6ab8fcaee68ef55095bbd07",
          "message": "chore(deps): Bump mimalloc from 0.1.45 to 0.1.46 (#757)\n\nBumps [mimalloc](https://github.com/purpleprotocol/mimalloc_rust) from\n0.1.45 to 0.1.46.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/releases\">mimalloc's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Version 0.1.46</h2>\n<h3>Changes</h3>\n<ul>\n<li>Fixed musl builds.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/59d7ee3ba7aa030b46a7cf721720f63a579b7fdb\"><code>59d7ee3</code></a>\nv0.1.46</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/585ef6acf1c97f44e18b06cc445bd689e42ef739\"><code>585ef6a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/purpleprotocol/mimalloc_rust/issues/134\">#134</a>\nfrom purpleprotocol/patch_alpine</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/65cd7894e7ae1ce035584d669f58b9b4a423782e\"><code>65cd789</code></a>\nPatch Alpine</li>\n<li>See full diff in <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/compare/v0.1.45...v0.1.46\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=mimalloc&package-manager=cargo&previous-version=0.1.45&new-version=0.1.46)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-28T14:54:28Z",
          "tree_id": "cafb72840ee9a379a878a6c4383bc396ff8a5868",
          "url": "https://github.com/hasura/ndc-postgres/commit/b8cdbf993d52b9dfd6ab8fcaee68ef55095bbd07"
        },
        "date": 1745852526182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.782033,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.75528529999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.740671452081495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6699740561542615,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21581191636389535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.4906095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.87871399999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.139883647618895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.748526543956686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.32096519406619195,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.330905,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.851124,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.470324893666803,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.616068724830395,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28176889337440886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.510812,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.36933099999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.76678106215525,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.826636141294433,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2333765140061154,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.527081,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.1885044,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.1755513658599,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.7136555716741775,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2412970768553933,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "32aad6b26a370ee1e351a7dd5e99e88e45fab6a0",
          "message": "Support setting array columns to empty array instead of setting those to null (#762)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\nAttempting to set an array column to `[]` would instead set the column\nto `NULL`.\nThis happened because we process the incoming values using `array_agg`,\nwhich returns null if aggregating over no rows.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\nWe wrap the array aggregation in `COALESCE`, with a default value of an\nempty array cast to the right type.\n\nThe new behavior when updating an array column is now\n- setting to an array with elements works as before\n- setting to null works as before\n- setting to an empty array works as expected, wheras before it would be\nset to null.\n\nThe PR also adds snapshot tests for all 3 cases. The snapshotted SQL has\nbeen tested and verified to behave as intended.\n\nSome other snapshots are also updated due to the change in generated\nSQL.\nIt seems we use the functions in `values.rs` every time we have some\nkind of json input.\n\nThis is not what I set out to fix, and there could be issues if we're\nrelying on the null behavior here, but I don't think we are.",
          "timestamp": "2025-05-12T13:57:02Z",
          "tree_id": "9adafca516040c3605e93fc3d001e298a34b654f",
          "url": "https://github.com/hasura/ndc-postgres/commit/32aad6b26a370ee1e351a7dd5e99e88e45fab6a0"
        },
        "date": 1747058727671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.044092,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.17436684999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.233056087553555,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.410088759277004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20067659485688952,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.28522050000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.4838399,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.04468150818444,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7765860010234178,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28005281701280327,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.426256,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.68800284999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.198049078547534,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.068719829479,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.24497218468255585,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.922197499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.554329499999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.696715059597384,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9010092161954155,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21644866499562254,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 38.795671999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 60.924837100000005,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.138140627359387,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.710003075496427,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2182267408091158,
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
          "id": "b8ca398c72b7de49657b0798e110195465dc34bf",
          "message": "chore(deps): Bump clap from 4.5.37 to 4.5.38 (#764)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.37 to 4.5.38.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.38</h2>\n<h2>[4.5.38] - 2025-05-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> When showing aliases, include leading\n<code>--</code> or <code>-</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.38] - 2025-05-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> When showing aliases, include leading\n<code>--</code> or <code>-</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/2920fb082c987acb72ed1d1f47991c4d157e380d\"><code>2920fb0</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8902627c2b7d9b54fee1588e5f426fe8bd132cd2\"><code>8902627</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/79d696f925c6763b65ea53a75a50bf81ed359632\"><code>79d696f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5813\">#5813</a>\nfrom epage/ignore</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/479df35abd8f1ba6fbfb2a9f1be635c9defcb471\"><code>479df35</code></a>\nfix(parser): Fill in defaults on ignored error</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a1d69ca824f27cb7351a06ec689838e99d2c1be5\"><code>a1d69ca</code></a>\nrefactor(parser): Split up parsing from post-processing</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/682784193017f7b310a2f3e82cced923e8845547\"><code>6827841</code></a>\ntest(parser): Show bad ignore_errors defaulting case</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/76d0049330090f3b2bc46ad4014457bc889c4cc9\"><code>76d0049</code></a>\ntest(parser): Verify defaulting on errors</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/3f5c05ce3877b43489cfd4fba1e96a89a692169d\"><code>3f5c05c</code></a>\ntest(parser): Ensure we are actually testing ignore_errors</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/ba4745dd1112922d5aeea867f01f8b29028289a9\"><code>ba4745d</code></a>\nchore(ci): Fix use of permissions</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/22944b4c3521562f78b6cf32cefc260cbed16798\"><code>22944b4</code></a>\nchore(ci): Use matrix for tracking the runner</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.37...clap_complete-v4.5.38\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.37&new-version=4.5.38)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-13T13:08:06Z",
          "tree_id": "bca84ef8648aaf50db8d991b9b491a0974d66e47",
          "url": "https://github.com/hasura/ndc-postgres/commit/b8ca398c72b7de49657b0798e110195465dc34bf"
        },
        "date": 1747142299434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.55104,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.48147525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.730317028768045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.971763647676216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20318336349279953,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.5526135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.32254549999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.87144639699719,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9088539461044292,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2669711772807101,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.950997,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.87927,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.2414103769055,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.38538954786366,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.25174545518506447,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.181154,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.8842693,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.28662807824521,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.232738844220389,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24674753558903562,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.4011395,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.181914,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.642209148139354,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.569798293872115,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.21511949739307426,
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
          "id": "60371ef4e100a831fdcfc3ac9c57fff91fc91f5c",
          "message": "chore(deps): Bump tokio from 1.44.2 to 1.45.0 (#765)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.44.2 to 1.45.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.45.0</h2>\n<h3>Added</h3>\n<ul>\n<li>metrics: stabilize <code>worker_total_busy_duration</code>,\n<code>worker_park_count</code>, and <code>worker_unpark_count</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6899\">#6899</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7276\">#7276</a>)</li>\n<li>process: add <code>Command::spawn_with</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7249\">#7249</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>io: do not require <code>Unpin</code> for some trait impls (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7204\">#7204</a>)</li>\n<li>rt: mark <code>runtime::Handle</code> as unwind safe (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7230\">#7230</a>)</li>\n<li>time: revert internal sharding implementation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7226\">#7226</a>)</li>\n</ul>\n<h3>Unstable</h3>\n<ul>\n<li>rt: remove alt multi-threaded runtime (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7275\">#7275</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6899\">#6899</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6899\">tokio-rs/tokio#6899</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7276\">#7276</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7276\">tokio-rs/tokio#7276</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7249\">#7249</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7249\">tokio-rs/tokio#7249</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7204\">#7204</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7204\">tokio-rs/tokio#7204</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7230\">#7230</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7230\">tokio-rs/tokio#7230</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7226\">#7226</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7226\">tokio-rs/tokio#7226</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7275\">#7275</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7275\">tokio-rs/tokio#7275</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/00754c8f9c8cd0c10fd54e5304cb9cb95a759d53\"><code>00754c8</code></a>\nchore: prepare Tokio v1.45.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7308\">#7308</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/1ae9434e8e4a419ce25644e6c8d2b2e2e8c34750\"><code>1ae9434</code></a>\ntime: revert &quot;use sharding for timer implementation&quot; related\nchanges (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7226\">#7226</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/8895bba448534a4eb159f18e57fd845c740e1d38\"><code>8895bba</code></a>\nci: Test AArch64 Windows (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7288\">#7288</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/48ca254d92d4408accd7b1c1beab188288fadb00\"><code>48ca254</code></a>\ntime: update <code>sleep</code> documentation to reflect maximum allowed\nduration (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7302\">#7302</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a0af02a396274b30ec1d0a27e18ac9ae6eaa2186\"><code>a0af02a</code></a>\ncompat: add more documentation to <code>tokio_util::compat</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7279\">#7279</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/0ce3a1188a56c4c133d5b789eb366c0752e9b22c\"><code>0ce3a11</code></a>\nmetrics: stabilize <code>worker_park_count</code> and\n<code>worker_unpark_count</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7276\">#7276</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/1ea9ce11d4317d767136d489041548408348be77\"><code>1ea9ce1</code></a>\nci: fix cfg!(miri) declarations in tests (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7286\">#7286</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4d4d12613bb30f6b550421d6ce2c2c54eb5d341d\"><code>4d4d126</code></a>\nchore: prepare tokio-util v0.7.15 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7283\">#7283</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/5490267a79a894c22cc014367e0fcd43f4ad2bb6\"><code>5490267</code></a>\nfs: update the mockall dev dependency to 0.13.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7234\">#7234</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/1434b32b5a0df3b38a0d588485cd9a20a8e92a89\"><code>1434b32</code></a>\nexamples: improve echo example consistency (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7256\">#7256</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.44.2...tokio-1.45.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.44.2&new-version=1.45.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-13T13:08:19Z",
          "tree_id": "369a0087860484cd111f4abe30053b1ee195144c",
          "url": "https://github.com/hasura/ndc-postgres/commit/60371ef4e100a831fdcfc3ac9c57fff91fc91f5c"
        },
        "date": 1747142570188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.6578185,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.13330819999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.809062470718764,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.092903121142609,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.1814991138467342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.245941,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.91225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.928454663098925,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5518747638928758,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27899447476640626,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.226694499999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.59319225,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.589902322527873,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.546935154706379,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2544305881423795,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.121891,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.31221419999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.10117994534448,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.078178574400329,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22890099295585298,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.260082499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.952354,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.845063899470464,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.849553735635993,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2306424013275587,
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
          "id": "28b02c116330fb12d8a51c650ff60ba4fa3b5fd9",
          "message": "chore(deps): Bump tempfile from 3.19.1 to 3.20.0 (#763)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.19.1 to\n3.20.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.20.0</h2>\n<p>This release mostly unifies the behavior/capabilities around\n&quot;keeping&quot; temporary files:</p>\n<ul>\n<li>Rename <code>Builder::keep(bool)</code> (via deprecation) to\n<code>Builder::disable_cleanup(bool)</code> to make it clear that\nbehaves differently from <code>NamedTempFile::keep()</code>. The former\ndisables automatic cleanup while the latter <em>consumes</em> the\n<code>NamedTempFile</code> object entirely and unsets the\n&quot;temporary file&quot; attribute (on Windows).</li>\n<li>Rename <code>TempDir::into_path</code> (via deprecation) to\n<code>TempDir::keep</code> to mirror\n<code>NamedTempFile::keep</code>.</li>\n<li>Add <code>TempDir::disable_cleanup</code>,\n<code>NamedTempFile::disable_cleanup</code>, and\n<code>TempPath::disable_cleanup</code> making it possible to disable\nautomatic cleanup in-place <em>after</em> creating a temporary\nfile/directory (equivalent to calling\n<code>Builder::disable_cleanup</code> before creating the\nfile/directory).</li>\n</ul>\n<p>Additionally, it adds a few spooled temporary file features:</p>\n<ul>\n<li>Add <code>SpooledTempFile::into_file</code> for turning a\n<code>SpooledTempFile</code> into a regular unnamed temporary file,\nwriting it to the backing storage (&quot;rolling&quot; it) if it was\nstill stored in-memory.</li>\n<li>Add <code>spooled_tempfile_in</code> and\n<code>SpooledTempFile::new_in</code> methods for creating spooled\ntemporary files in a specific directory. This makes it possible to\nchoose the backing device for your spooled temporary file which is\nrather important on Linux where the default temporary directory is\nlikely backed by memory (defeating the entire point of having a spooled\ntemporary file).</li>\n</ul>\n<p>Finally, this release improves documentation, especially the\ntop-level documentation explaining which temporary file type to use.</p>\n<p><strong>BREAKING</strong> for those with\n<code>deny(warnings)</code>:</p>\n<ul>\n<li><code>Builder::keep</code> deprecated in favor of\n<code>Builder::disable_cleanup</code>.</li>\n<li><code>TempDir::into_path</code> is deprecated in favor of\n<code>TempDir::keep</code>.</li>\n</ul>\n<p><strong>BREAKING</strong>:</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/99ffea61ade621161db326b6745c7b36a90ddbd0\"><code>99ffea6</code></a>\nchore: release v3.20.0 (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/358\">#358</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/bd2b2674423ae6598070fab30e6627810ac282a9\"><code>bd2b267</code></a>\nfeat: make it possible to disable cleanup in-place after creation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/355\">#355</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3b30099abd7585a9b6600276f6dcdfa557e88f19\"><code>3b30099</code></a>\nci: really check docs for warnings (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/357\">#357</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/f701f5245624b8cfcd782dfd62fcfe86d35c173b\"><code>f701f52</code></a>\nci: check docs (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/356\">#356</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/d34afe99fd93bb13253128cc58dfc4032edfa5a5\"><code>d34afe9</code></a>\ndoc: improve SpooledData documentation</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/6deb42e04ceb2f2c306510b1605d9548e77868e5\"><code>6deb42e</code></a>\ndoc: make it easier to pick the correct tempfile constructor/type</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/e284782c6c1c2f565af2ab9b5c0be9f9c5ed3607\"><code>e284782</code></a>\nfeat: allow creating spooled temporary files in a specific directory (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/353\">#353</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/07edc310a5c8725346cd2bb2a5d065ff298f4fa0\"><code>07edc31</code></a>\nfeat: implement <code>SpooledTempFile::into_file</code> (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/b1223553bb888e35bab7675fbac235e4be6eaf7e\"><code>b122355</code></a>\nfix: add must_use attribute to TempDir::keep (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/351\">#351</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/cbd1e976e106d4a12432e124494f735bf40eafe2\"><code>cbd1e97</code></a>\nfeat: rename <code>TempDir::into_path</code> to\n<code>TempDir::keep</code> (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/349\">#349</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.19.1...v3.20.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.19.1&new-version=3.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-13T13:10:51Z",
          "tree_id": "fa0cfd75086d66d593040a22e5ad87b6a20307f6",
          "url": "https://github.com/hasura/ndc-postgres/commit/28b02c116330fb12d8a51c650ff60ba4fa3b5fd9"
        },
        "date": 1747142729214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.0376095,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.005584449999986,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.08781591026482,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.072635781267445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.18004392242609077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.781579,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.91415224999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.9296167883218,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.73149440190479,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2723209091768979,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.205661,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.18832939999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.979838356410728,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.35527040715024,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.31909218487607277,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.05311,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.55135469999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.232473756523184,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.640863615310106,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21869883867973697,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 38.859399,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.02084209999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.791403625867225,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.23668933210201,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22106110885329391,
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
          "id": "18d4f66ddc169b660b0788bcfe07111d9254995e",
          "message": "chore(deps): Bump sqlx from 0.8.5 to 0.8.6 (#767)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.8.5 to 0.8.6.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.8.6 - 2025-05-19</h2>\n<p>9 pull requests were merged this release cycle.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3849\">#3849</a>]:\nAdd color and wrapping to cli help text [[<a\nhref=\"https://github.com/joshka\"><code>@​joshka</code></a>]]</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3830\">#3830</a>]:\nbuild: drop unused <code>tempfile</code> dependency [[<a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3845\">#3845</a>]:\nchore: clean up no longer used imports [[<a\nhref=\"https://github.com/tisonkun\"><code>@​tisonkun</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3863\">#3863</a>]:\nUse unnamed statement in pg when not persistent [[<a\nhref=\"https://github.com/ThomWright\"><code>@​ThomWright</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3866\">#3866</a>]:\nchore(doc): clarify compile-time verification and case conversion\nbehavior [[<a\nhref=\"https://github.com/duhby\"><code>@​duhby</code></a>]]</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3840\">#3840</a>]:\nFix docs.rs build of sqlx-sqlite [[<a\nhref=\"https://github.com/gferon\"><code>@​gferon</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3848\">#3848</a>]:\nfix(macros): don't mutate environment variables [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3855\">#3855</a>]:\nfix <code>attrubute</code> typo in doc [[<a\nhref=\"https://github.com/kujeger\"><code>@​kujeger</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3856\">#3856</a>]:\nfix(macros): slightly improve unsupported type error message [[<a\nhref=\"https://github.com/dyc3\"><code>@​dyc3</code></a>]]</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3830\">#3830</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3830\">launchbadge/sqlx#3830</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3840\">#3840</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3840\">launchbadge/sqlx#3840</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3845\">#3845</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3845\">launchbadge/sqlx#3845</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3848\">#3848</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3848\">launchbadge/sqlx#3848</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3849\">#3849</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3849\">launchbadge/sqlx#3849</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3855\">#3855</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3855\">launchbadge/sqlx#3855</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3856\">#3856</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3856\">launchbadge/sqlx#3856</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3863\">#3863</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3863\">launchbadge/sqlx#3863</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3866\">#3866</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3866\">launchbadge/sqlx#3866</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/bab1b022bd56a64f9a08b46b36b97c5cff19d77e\"><code>bab1b02</code></a>\n0.8.6 release (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3870\">#3870</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/b27b47ce5350d1110e2a32e54809da1d32ec1d88\"><code>b27b47c</code></a>\nPick default features to fix docs.rs build of sqlx-sqlite (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3840\">#3840</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/d335f782cf4a607fd2667c04ede5e10db694f5fd\"><code>d335f78</code></a>\nUse unnamed statement in pg when not persistent (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3863\">#3863</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/760b3953ba3942f686fdfbb98af5f29a3918045d\"><code>760b395</code></a>\nfix(macros): don't mutate environment variables (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3848\">#3848</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/4259862adf91d42ea50e3651070ada5f45af3689\"><code>4259862</code></a>\nfix(macros): slightly improve unsupported type error message (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3856\">#3856</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/1b94e1d07d7db5bd8b8f48564a17d40c03fff6fe\"><code>1b94e1d</code></a>\nchore(doc): clarify compile-time verification and case conversion\nbehavior (#...</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/92c384595264eae9e57a599079d44e5ce3b9e5c1\"><code>92c3845</code></a>\nfix <code>attrubute</code> typo in doc (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3855\">#3855</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/3edc6199db2793de98623b07ce3345d9564271ff\"><code>3edc619</code></a>\nbuild: drop unused <code>tempfile</code> dependency (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3830\">#3830</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/6b2e0247d47d020d91dc6f7402d42e4e6131af11\"><code>6b2e024</code></a>\nAdd color and wrapping to cli help text (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3849\">#3849</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/5736ab6c212480acf7704534cb212b03fca8a3de\"><code>5736ab6</code></a>\nchore: clean up no longer used imports (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3845\">#3845</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.8.5...v0.8.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.8.5&new-version=0.8.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-27T10:20:26Z",
          "tree_id": "2715f07576caf8eb3a9a8dbe4b8c1ac34b2312a2",
          "url": "https://github.com/hasura/ndc-postgres/commit/18d4f66ddc169b660b0788bcfe07111d9254995e"
        },
        "date": 1748341895208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.179287000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.901592499999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.30209276391512,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.742983996996777,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20268143621647847,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.031173,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.50194915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.46134498994232,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9628916045258933,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2721019714799713,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 45.4746735,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.05209550000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.372410592617626,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.29415572677297,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.25472751956439377,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.720052,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.05539980000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.92850617560834,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.446573021107206,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2387983385780251,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 38.869946,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.088411,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.074646977157887,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.8075580527093,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22369110517254676,
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
          "id": "ed48d0da2a29464ec9051881cacf04a3e94595bf",
          "message": "chore(deps): Bump tokio from 1.45.0 to 1.45.1 (#768)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.45.0 to 1.45.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.45.1</h2>\n<h1>1.45.1 (May 24th, 2025)</h1>\n<p>This fixes a regression on the wasm32-unknown-unknown target, where\ncode that previously did not panic due to calls to\n<code>Instant::now()</code> started failing. This is due to the\nstabilization of the first time-based metric.</p>\n<h3>Fixed</h3>\n<ul>\n<li>Disable time-based metrics on wasm32-unknown-unknown (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7322\">#7322</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7322\">#7322</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7322\">tokio-rs/tokio#7322</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3768696d92d403d98b7d559934617890f882ec02\"><code>3768696</code></a>\nchore: prepare Tokio v1.45.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7359\">#7359</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/421a7b001c762a25c0b009c9ffb86f0661608f90\"><code>421a7b0</code></a>\nrt: do not track time-based metrics on wasm32-unknown-unknown (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7322\">#7322</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/b1bdb3c57b9adfa928644ece1da97860c558efbb\"><code>b1bdb3c</code></a>\nci: update macros_type_mismatch for Rust 1.87.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7339\">#7339</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.45.0...tokio-1.45.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.45.0&new-version=1.45.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-27T10:20:54Z",
          "tree_id": "b8ed386705a1e77868d2b77145797ec5f6449f0b",
          "url": "https://github.com/hasura/ndc-postgres/commit/ed48d0da2a29464ec9051881cacf04a3e94595bf"
        },
        "date": 1748342120399,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.91432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.9817992,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.521948040890246,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.462167772696384,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19031017656502025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.342847,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.7096317,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.628137480837054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5212295644898433,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2691598614220101,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 45.282056,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.4760548,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.789815403150147,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.169989075260535,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.259328663435732,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.664237,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.8239843,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.778046662864593,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.882382841154996,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22106494591524475,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.4873185,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.66936105,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.396425486777684,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.302768514805688,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.19983245799670626,
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
          "id": "b283ae507b12ca07d44b865527f5f120a264abc3",
          "message": "chore(deps): Bump clap from 4.5.38 to 4.5.39 (#769)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.38 to 4.5.39.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.39</h2>\n<h2>[4.5.39] - 2025-05-27</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Show short flag aliases before long</li>\n<li><em>(help)</em> Merge the short and long flag alias lists</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.39] - 2025-05-27</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Show short flag aliases before long</li>\n<li><em>(help)</em> Merge the short and long flag alias lists</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/ed2360f9cdf9bb51477ace5cd79ac47794758086\"><code>ed2360f</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/196a14b8c958bd172365f7b82999a0102301380d\"><code>196a14b</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cd622ab63c43a6c07b25a1e914a6aebd4430b0e3\"><code>cd622ab</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5846\">#5846</a>\nfrom ribru17/alias_fn_dedup</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/48ff72be28a0b563d15fc88cbb0e7e247fa33a02\"><code>48ff72b</code></a>\nfix(complete): Deduplicate bash subcmd cases</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/b1b6f17f610efc51a6ac1d18f471b918492c1ea7\"><code>b1b6f17</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5843\">#5843</a>\nfrom epage/link</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5900216569d0ed0b9967e930c996644e6b86a53b\"><code>5900216</code></a>\nfix(derive): Update link for derive attributes</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fde45f9aea766fb8de46e3d46e6575f393c3b6b9\"><code>fde45f9</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/45d5d7edcb37d07affb9185b2a06a3bce40e6ea0\"><code>45d5d7e</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/4b82b97cd9069dba864185d5c6147232f8ad4942\"><code>4b82b97</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a982adfbbd369e19427fcc7e31be58bb8a9e2dac\"><code>a982adf</code></a>\ndocs: Update changelog</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.38...clap_complete-v4.5.39\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.38&new-version=4.5.39)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-02T15:43:25Z",
          "tree_id": "6b8ce1ec46e0a99aa1e62de6d364188db143985c",
          "url": "https://github.com/hasura/ndc-postgres/commit/b283ae507b12ca07d44b865527f5f120a264abc3"
        },
        "date": 1748879474917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.267331,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.1662857,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.55521666976913,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.88573325299874,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19623732859666002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.819234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.2643005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.03397633566333,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7584847217978918,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28901650076508634,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 44.7260685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.4132356,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.986450679051234,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.992799861484382,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.24946020048566064,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.968091,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.48641639999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.03059463833183,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.864400109019758,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24012694475180726,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 39.148061,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.407649749999976,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.650393035135025,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.602867539728329,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.21462025140683372,
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
          "id": "122d80f6c29378fae54c363bf198db1c247712fc",
          "message": "Bump rustc to 1.85.0 (#770)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-06-11T13:18:52Z",
          "tree_id": "e5c77be2e9d192694a91cf37cedfbfbc923ca1bd",
          "url": "https://github.com/hasura/ndc-postgres/commit/122d80f6c29378fae54c363bf198db1c247712fc"
        },
        "date": 1749648542514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.090027,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.5503718,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.780256061094553,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.505357475094533,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.1851037650556087,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.418998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.13413800000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.96105847361186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7976074703631184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27380059244836114,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.6783215,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.36221939999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.13799399559376,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.064493549441394,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.27795993185791734,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.848524,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.1138095,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.437018299483082,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.467007853852028,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23546317418357154,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 38.640063,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 60.878645299999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.894039810012345,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.78823836169429,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2067688362381621,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8e3560a15270f9cea8386dcab37f1e94f76f1f3",
          "message": "NDC Spec v0.2.0 support (#666)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\nThis PR updates ndc-postgres to ndc spec v0.2.0\nThis includes a lot of changes to tests. These have been justified in\nindividual commits.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-06-11T13:53:49Z",
          "tree_id": "bd709b19e59e2d5373d7390ca3be285113af17f5",
          "url": "https://github.com/hasura/ndc-postgres/commit/e8e3560a15270f9cea8386dcab37f1e94f76f1f3"
        },
        "date": 1749650494251,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.548915,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.04943539999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.23050365018285,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7456915623928815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20640851854085962,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.55052900000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.93661349999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.913007316374454,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.735094716118077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27701167870926324,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 44.004151,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.2503757,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.517654070616732,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.743824316747233,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2637443926950629,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.226223,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.827448,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.09965537900345,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.75103516545073,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2401463697292828,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.434349,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 59.33307899999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.62621687599807,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.235550675695894,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22031406640974183,
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
          "id": "29c6d0272530c5884105ff9db11709d8f7372a2a",
          "message": "Bump to `ndc-models 0.2.3` (#771)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nRoutine stuff really.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-06-11T15:14:42Z",
          "tree_id": "39840b94459a76beed06187a3da551817f4da785",
          "url": "https://github.com/hasura/ndc-postgres/commit/29c6d0272530c5884105ff9db11709d8f7372a2a"
        },
        "date": 1749655334545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.890792,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.270399499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.130006026941134,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.732786712759099,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20709482772312157,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.571501,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.53192479999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.33819691765078,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7809343868496228,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27820405222846817,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.484859,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.13115689999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.91864288829461,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.286274796168126,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2566777197133981,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.7980145,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.860550499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.485793694152132,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.203823792595852,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2323162923855877,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.7924965,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.2093965,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.75212022520723,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.491711913697372,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22739013415885545,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}