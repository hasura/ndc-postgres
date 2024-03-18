window.BENCHMARK_DATA = {
  "lastUpdate": 1710778812295,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
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
          "id": "7909b299e9a38cb81b31425cf2d56527b39c7932",
          "message": "chore(deps): Bump serde_json from 1.0.113 to 1.0.114 (#320)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.113 to\n1.0.114.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.114</h2>\n<ul>\n<li>Fix unused_imports warnings when compiled by rustc 1.78</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/e1b3a6d8a161ff5ec4865b487d148c17d0188e3e\"><code>e1b3a6d</code></a>\nRelease 1.0.114</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6fb70262e894168ac631b2232a1b7b3a7781ebe5\"><code>6fb7026</code></a>\nWork around prelude redundant import warnings</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/34a04c5f7febdf80e05743e38d5cb1880a83b6f6\"><code>34a04c5</code></a>\nIgnore incompatible_msrv clippy false positives in test</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ca05f69943e18d70c2219ea41fcb67f2849b7eed\"><code>ca05f69</code></a>\nRemove unused Float::is_sign_negative trait method</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.113...v1.0.114\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.113&new-version=1.0.114)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T14:05:56Z",
          "tree_id": "ceb14cec24022bd9781a22fc2ee3fd213deae773",
          "url": "https://github.com/hasura/ndc-postgres/commit/7909b299e9a38cb81b31425cf2d56527b39c7932"
        },
        "date": 1708956799385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.477790999999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.2377537,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.938113511309968,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.13592985639156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.257524380852354,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.06743,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.68763249999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.263048698677075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0306725002379267,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5680737691060179,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.17174700000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.05341924999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.5039813933066,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.026848631507875,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44556633981727334,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.7670365,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.49818264999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.71148776260554,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.616997913278965,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40507434424532734,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.844801,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.85520839999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.14975040287018,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.616415851057042,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41058101260608315,
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
          "id": "e5220a6695ad6eb60b128e3b1130db70b05e6987",
          "message": "chore(deps): Bump insta from 1.34.0 to 1.35.1 (#322)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.34.0 to 1.35.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.35.1</h2>\n<ul>\n<li>Fixed a bug with diffs showing bogus newlines.</li>\n</ul>\n<h2>1.35.0</h2>\n<ul>\n<li>Fixed a crash when a file named <code>.config</code> was in the\nroot.</li>\n<li>Added new alternative <code>match .. { ... }</code> syntax to\nredactions for better\n<code>rustfmt</code> support. (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/428\">#428</a>)</li>\n<li>The <code>--package</code> parameter can be supplied multiple times\nnow. (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/427\">#427</a>)</li>\n<li>Leading newlines in snapshots are now ignored to resolve issues with\ninline snapshots that were never able to match. (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/444\">#444</a>)</li>\n<li><code>cargo insta test</code> now accepts the <code>--test</code>\nparameter multiple times. (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/437\">#437</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/a75308a722a43749f812367dc4827143b4275233\"><code>a75308a</code></a>\n1.35.1</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ffc3a9bf83502ccea512cc23ea984258f1347fe2\"><code>ffc3a9b</code></a>\nTrim on diff (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/445\">#445</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/0d9c6c227fe7e4fcd000a829e417efb8f637c729\"><code>0d9c6c2</code></a>\n1.35.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/fd86b00544389026b57d5aaa758805391df275ac\"><code>fd86b00</code></a>\nAccept --test multiple times</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/9f9c890b54c1c17725b640b4d30d98538652407b\"><code>9f9c890</code></a>\nClean up error location reporting for yaml parsing errors</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/64d66474474ddf8699b9b8bda2728ea9c0596208\"><code>64d6647</code></a>\nAdd the file reference on a YAML error message (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/443\">#443</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/c23b05746384d3dee41d08bf1f408f730d511cca\"><code>c23b057</code></a>\nAdd deprecation warning for --delete-unreferenced-snapshots (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/441\">#441</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/1f9ee0f8fbfe60e04d79face19a4e7df116faf91\"><code>1f9ee0f</code></a>\nOnly delete unreferenced snapshots after a successful test run (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/440\">#440</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/0974fe8dd579cc43074482982ac6be7573bf21db\"><code>0974fe8</code></a>\nIgnore leading newlines on snapshot comparison (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/444\">#444</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/2a60c07b0fe3e2d0cda68e7a6810407bbce3764b\"><code>2a60c07</code></a>\nClippy be happy</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.34.0...1.35.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.34.0&new-version=1.35.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T14:21:06Z",
          "tree_id": "cdbf202c4f2e67b6797d21271203eb76c604d81f",
          "url": "https://github.com/hasura/ndc-postgres/commit/e5220a6695ad6eb60b128e3b1130db70b05e6987"
        },
        "date": 1708957604156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.226816,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.547655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.47975532941603,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.846358657768242,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2559907252926701,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.995412,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.06605639999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.52628898779005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1144950361569457,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5501589519166682,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.773155,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.323504,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.9704467643958,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.401371199254569,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.442532660971525,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.547346,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.24720099999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.67358831213016,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.728839291079346,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4084109708275291,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.778666,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.06322365,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.38868439112079,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.767669027335302,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42013972263245947,
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
          "id": "48a2a309e656792b0e692a4059d174129a12efae",
          "message": "chore(deps): Bump clap from 4.4.8 to 4.5.1 (#323)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.4.8 to 4.5.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.1</h2>\n<h2>[4.5.1] - 2024-02-16</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> Include suggestion to add <code>--</code> even if\nthere is a &quot;did you mean&quot; so long as <code>last</code> or\n<code>trailing_var_arg</code> is used</li>\n</ul>\n<h2>v4.5.0</h2>\n<p>No release notes provided.</p>\n<h2>v4.4.18</h2>\n<h2>[4.4.18] - 2024-01-16</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> When lacking <code>usage</code> feature, ensure the\nlist of required arguments is unique</li>\n</ul>\n<h2>v4.4.17</h2>\n<h2>[4.4.17] - 2024-01-15</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Fix <code>panic!</code> when mixing\n<code>args_conflicts_with_subcommands</code> with <code>ArgGroup</code>\n(which is implicit with <code>derive</code>) introduced in 4.4.15</li>\n</ul>\n<h2>v4.4.16</h2>\n<h2>[4.4.16] - 2024-01-12</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Ensure invalid escape sequences in user-defined strings are\ncorrectly stripped when terminal doesn't support color</li>\n</ul>\n<h2>v4.4.15</h2>\n<h2>[4.4.15] - 2024-01-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Improve error for <code>args_conflicts_with_subcommands</code></li>\n<li>Ensure we error for <code>args_conflicts_with_subcommands</code>\nwhen using subcommand short and long flags</li>\n</ul>\n<h2>v4.4.14</h2>\n<h2>[4.4.14] - 2024-01-08</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Fix <code>find</code> cookbook entry to allow repeats of\nflags/options</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>Allow <code>num_args(0)</code> on options which allows making them\nemulate being a flag for position-tracking flags</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.1] - 2024-02-16</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> Include suggestion to add <code>--</code> even if\nthere is a &quot;did you mean&quot; so long as <code>last</code> or\n<code>trailing_var_arg</code> is used</li>\n</ul>\n<h2>[4.5.0] - 2024-02-08</h2>\n<h3>Compatibility</h3>\n<ul>\n<li>Update MSRV to 1.74</li>\n</ul>\n<h2>[4.4.18] - 2024-01-16</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> When lacking <code>usage</code> feature, ensure the\nlist of required arguments is unique</li>\n</ul>\n<h2>[4.4.17] - 2024-01-15</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Fix <code>panic!</code> when mixing\n<code>args_conflicts_with_subcommands</code> with <code>ArgGroup</code>\n(which is implicit with <code>derive</code>) introduced in 4.4.15</li>\n</ul>\n<h2>[4.4.16] - 2024-01-12</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Ensure invalid escape sequences in user-defined strings are\ncorrectly stripped when terminal doesn't support color</li>\n</ul>\n<h2>[4.4.15] - 2024-01-11</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Improve error for <code>args_conflicts_with_subcommands</code></li>\n<li>Ensure we error for <code>args_conflicts_with_subcommands</code>\nwhen using subcommand short and long flags</li>\n</ul>\n<h2>[4.4.14] - 2024-01-08</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Fix <code>find</code> cookbook entry to allow repeats of\nflags/options</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>Allow <code>num_args(0)</code> on options which allows making them\nemulate being a flag for position-tracking flags</li>\n</ul>\n<h2>[4.4.13] - 2024-01-04</h2>\n<h3>Documentation</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0c01b5558de0a1a513a2af429981099e550d1a78\"><code>0c01b55</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/08e0b5bde4b45567be98d12e7d394762fa8da6a4\"><code>08e0b5b</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/f2c4e6ec740cce29cea3fd7232e4d2716f089fc2\"><code>f2c4e6e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5359\">#5359</a>\nfrom poliorcetics/ab/push-szymvyzpmnqx</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/e782775229081697e47d340a155d6b087eeb46f8\"><code>e782775</code></a>\nfix(complete): Handle newlines in command/arg descriptions</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fba7c8597bf3028400d6f6a22d83cedb7a2bd5a5\"><code>fba7c85</code></a>\ntest(complete): Show newline issue</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8a7a13a5618cfdc4ff328624a5266e7b4d88649a\"><code>8a7a13a</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7b3a3e1e5eee57fc37110343b980cbe8170d20ad\"><code>7b3a3e1</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7b624ca74336f6f14f01007b9039990d53acda0f\"><code>7b624ca</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5356\">#5356</a>\nfrom epage/escape</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/446328a8d3cdaac28884bf8fdfcc85f35c8b5134\"><code>446328a</code></a>\nfix(error): Include -- in more cases</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7de6df878238ca8e3d9723bb9650f7fe9470d8bd\"><code>7de6df8</code></a>\ntest(error): Show existing last behavior</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.4.8...clap_complete-v4.5.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.4.8&new-version=4.5.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T14:21:08Z",
          "tree_id": "e693daf6d35b268a8f9469dfa0f0ffa252461f82",
          "url": "https://github.com/hasura/ndc-postgres/commit/48a2a309e656792b0e692a4059d174129a12efae"
        },
        "date": 1708957883266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.338981000000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.05089545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.552199173906025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.259799486346964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26675968508167636,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.894875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.73396465000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.674441690290216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.248993442769738,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5900600769736875,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.30483,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.0922889,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.019532575196266,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.551454194159092,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42870900989858585,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.5619385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.85037929999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.06172052880201,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.572875868718029,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4247859939637646,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.179333,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.5233379,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.08090032948149,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.687257870544705,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43104453982948127,
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
          "id": "42ef562eca441e5b980bedb072c1cfa1eeb11da1",
          "message": "chore(deps): Bump serde from 1.0.196 to 1.0.197 (#321)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.196 to\n1.0.197.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.197</h2>\n<ul>\n<li>Fix unused_imports warnings when compiled by rustc 1.78</li>\n<li>Optimize code size of some Display impls (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2697\">#2697</a>,\nthanks <a\nhref=\"https://github.com/nyurik\"><code>@​nyurik</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/5fa711d75d91173aafc6019e03cf8af6ac9ba7b2\"><code>5fa711d</code></a>\nRelease 1.0.197</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/f5d8ae423aa195d3423029ff5a618266cc8ff9a5\"><code>f5d8ae4</code></a>\nResolve prelude redundant import warnings</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1d54973b928bd8708a4ad2d90fca1203367ff580\"><code>1d54973</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2697\">#2697</a>\nfrom nyurik/format-str</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b8fafefd8588f84af54329945fab701ec414281d\"><code>b8fafef</code></a>\nA few minor <code>write_str</code> optimizations and inlining</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/c42ebb8839fbd92dbda6729e8363c8d683f26306\"><code>c42ebb8</code></a>\nUpdate ui test suite to nightly-2024-02-12</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/9e680620b595724a6abfb8e785155d02482f911a\"><code>9e68062</code></a>\nIgnore incompatible_msrv clippy lint for conditionally compiled\ncode</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/846f865de2e94408e0edc6a2c6863c063cd234be\"><code>846f865</code></a>\nIgnore dead_code warnings in test</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.196...v1.0.197\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.196&new-version=1.0.197)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T14:22:17Z",
          "tree_id": "d153adbd1ab720cf317f0f4c9f52ea652b388432",
          "url": "https://github.com/hasura/ndc-postgres/commit/42ef562eca441e5b980bedb072c1cfa1eeb11da1"
        },
        "date": 1708957948470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.297907,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.97226725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.640564750282234,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.274728767423131,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26127748937719547,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 89.770049,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.29483630000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.32695231132511,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.067362475043666,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5966251751088212,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 64.998908,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.81044839999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.688968584350725,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.508881943541176,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4234033262732209,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.721714,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.27712799999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.058412843704325,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.39333209285639,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39669735428744646,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.9633185,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.47623505,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.612160694974975,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.651254964761108,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.398592636746162,
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
          "id": "1c8e203124e5ab250e449da1d7a6827d0eb00929",
          "message": "chore(deps): Bump anyhow from 1.0.79 to 1.0.80 (#324)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.79 to 1.0.80.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.80</h2>\n<ul>\n<li>Fix unused_imports warnings when compiled by rustc 1.78</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/54437197ee79c20678db433d98616fab7ddff1a5\"><code>5443719</code></a>\nRelease 1.0.80</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/dfc7bc07d4c41b61093c3251ed82becb51810bd4\"><code>dfc7bc0</code></a>\nWork around prelude redundant import warnings</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/6e4f86b48b5182ec71dbc8e308db9dc91e2ec8a5\"><code>6e4f86b</code></a>\nImport from alloc not std, where possible</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/f885a133ede579c45e90ab489455126403d05db1\"><code>f885a13</code></a>\nIgnore incompatible_msrv clippy false positives in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/fefbcbcb0b336a2d6c2ce6f0ee6d3fd02ef2cd3b\"><code>fefbcbc</code></a>\nIgnore incompatible_msrv clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/78f2d81cc71b79050a2fda270c45ff267557d853\"><code>78f2d81</code></a>\nUpdate ui test suite to nightly-2024-02-08</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/edd88d3a43f11f1931330d3dd54189353ef00203\"><code>edd88d3</code></a>\nUpdate ui test suite to nightly-2024-01-31</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.79...1.0.80\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.79&new-version=1.0.80)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-26T14:39:30Z",
          "tree_id": "1a4b63c3ce7c1ef14cb7f23e503237c5a060901b",
          "url": "https://github.com/hasura/ndc-postgres/commit/1c8e203124e5ab250e449da1d7a6827d0eb00929"
        },
        "date": 1708958770918,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.882953,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.98447759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.990799208482308,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.39514860202705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26096918575602024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.90486250000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.25043289999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.17461242961115,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.245649195269465,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5988227116454798,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.753846,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.3730385,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.513191757444304,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.362924594911576,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45011905685450926,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.343689,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.32270879999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.79661401438628,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.681043984168824,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42646121198170533,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.047053500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.137361,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.99568511880926,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.876921564409301,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4101374357210451,
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
          "id": "d1c97ea0cfe91db35819b83fd68b9a709a04c6e2",
          "message": "Run the binaries with Nix. (#326)\n\n### What\n\nIt can be pretty useful to run `nix run` and get a binary running which\nhas been built in the exact same way as the production binary shipped in\nthe Docker image.\n\nI also added the CLI so we can run `nix run .#cli`.\n\n### How\n\nBit of typing, really.",
          "timestamp": "2024-02-26T16:49:07Z",
          "tree_id": "2e784d02b1b1e71304f76799cfbcddd4c07b85bc",
          "url": "https://github.com/hasura/ndc-postgres/commit/d1c97ea0cfe91db35819b83fd68b9a709a04c6e2"
        },
        "date": 1708966471899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.70365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.3770688,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.509739899509867,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.523918162248819,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2609944002211909,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.9388415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.4959194,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.79390850316927,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1457313586249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6086043270265424,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.908542,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.62100774999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.392091740611136,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.86188179487317,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4521418511353206,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.7595185,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.40826965,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.12429689480845,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.555417949119956,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4097336116651282,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.467784,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.5440512,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.45489384693913,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.76036767136091,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41488484839885187,
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
          "id": "355aa42cabdae61f0c24ccf718491ee1b3041524",
          "message": "Read the connection URI from the environment. (#325)\n\n### What\n\nThe connection URI can now be provided from the environment, using\n`\"uri\": {\"variable\": \"...\"}`.\n\nThis means that we can use the same configuration in development and\nproduction, and enables the CLI or Cloud build infrastructure to fill it\nin with e.g. a region-specific URL.\n\n### How\n\nWe replace the `ResolvedSecret` from the NDC SDK (which has also been\nremoved from the SDK) with our own `Secret` type, which can be `Plain`\nor `FromEnvironment`. We then handle the case appropriately, whereas\nbefore, we would panic if we ever received a non-resolved secret.\n\nI have introduced the `Environment` trait to supply environment\nvariables. During normal execution, this is a wrapper around\n`sys::env::var`. In tests, however, we can use `EmptyEnvironment`, or a\n`HashMap` containing test data.\n\nThis also simplified a couple of pieces of test infrastructure.\n\n* We no longer need to template the Aurora configuration (we just\nprovide the appropriate value as an environment variable).\n* Generating configuration becomes a single call to `ndc-postgres-cli\nupdate`.\n* The benchmarks no longer need a generated configuration file.",
          "timestamp": "2024-02-26T17:37:08Z",
          "tree_id": "74d583e440de2a49fda077f1056672527985a988",
          "url": "https://github.com/hasura/ndc-postgres/commit/355aa42cabdae61f0c24ccf718491ee1b3041524"
        },
        "date": 1708969451481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.707388,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.4478006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.585773567800764,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.883949434484258,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2502658801347598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.02896000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.92461859999986,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.13182982541008,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8040403496512596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5733510757405584,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.609623,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.9760468,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.59497748723047,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.0234530402699775,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42926317236891026,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.248082,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.71711059999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.913765278289844,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.343130021729465,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4052821829267226,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.067434500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.04743915,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.65507892462212,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.773937776700265,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39260119704026447,
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
          "id": "8c8c84fa167bc887e81e94c5e74db262cb41ab54",
          "message": "Update ndc-sdk to use `ConnectorSetup`. (#327)\n\n### What\n\nThis allows us to inject values into the configuration and state setup,\nwhich means we can remove our copy of `init_server_state`.\n\n### How\n\nMostly moving code around.",
          "timestamp": "2024-02-27T08:15:24Z",
          "tree_id": "3f124955bb9fc1a63e824dea02c28daae63f88e2",
          "url": "https://github.com/hasura/ndc-postgres/commit/8c8c84fa167bc887e81e94c5e74db262cb41ab54"
        },
        "date": 1709022130457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 54.4369415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 88.26409845000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.667800652347726,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.02468176556697,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26946931516728634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.56728100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.4685177499999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.97285716325271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.6066284013385115,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6574417077677195,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.333031,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.21767439999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.76900088408825,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.154846582687632,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4389336869786055,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 66.531652,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.4393555,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.47086945965125,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.170665449452066,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4260232064638302,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.2155655,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.51968064999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.01643694370788,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.254471609441374,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4310556813090996,
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
          "id": "9c8f88676f37994f0a6c2456a3c3b7fceb3bf19c",
          "message": "Run `cargo machete` with metadata. (#328)\n\n### What\n\nThis finds more unused dependencies.\n\nI decided to dig into this when I found out that `ndc-postgres` had an\nentirely-unused `dev-dependencies` section.\n\n### How\n\n`--with-metadata`.",
          "timestamp": "2024-02-27T12:25:06Z",
          "tree_id": "386bcb2a2d5893c2b598d8e0dc5006fd9c2452a7",
          "url": "https://github.com/hasura/ndc-postgres/commit/9c8f88676f37994f0a6c2456a3c3b7fceb3bf19c"
        },
        "date": 1709037074186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.999167,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.24193729999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.866074401108527,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.528388870596324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2728953788841054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.695434,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.44429050000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.492585898945244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.385386700028697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.596161222146617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.729015,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.94116919999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.72667506394475,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.156314941744149,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43678044530878085,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.014273,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.4473941,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.994664548128554,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.719790400927181,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41897245485246104,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.13482,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.2154203,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.46513972428023,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.705531892160025,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4201873319596083,
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
          "id": "82f1a85a9ea7faacdeda26c126fbab44a3789095",
          "message": "Create a `JoinEnvironments` type to make `Environment` a kind of monoid. (#329)\n\nThis is intended to be useful in more complex servers.\n\nI also made the `Value` type public, and added a type alias,\n`FixedEnvironment`, for `HashMap<Variable, Value>`.",
          "timestamp": "2024-02-27T15:07:23Z",
          "tree_id": "e2fd8adfb5241dd6b24cedd5eabaf1a9a04f1b9e",
          "url": "https://github.com/hasura/ndc-postgres/commit/82f1a85a9ea7faacdeda26c126fbab44a3789095"
        },
        "date": 1709046787153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.033985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.37323469999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.005920251638244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.738725536094243,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25870455669725817,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.779569,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 145.72085149999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.488325896463415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5939075808292813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6175441385086592,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.297468,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.4720808,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.45509924912328,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.320341045815461,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4379067284699692,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.347065,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.79026529999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.435978687657546,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.953012813085117,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.413239768843157,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.311982,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.01370819999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.05374358429799,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.399365777693461,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39268181799221863,
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
          "id": "36e4704bc8d5eab098991c1a2a95fe9a7bf635c1",
          "message": "Bump Nix inputs to bring in the latest version of Crane. (#330)\n\n### What\n\nThe latest version of Crane has some bug fixes which should allow us to\nuse workspace values for `version`, `edition`, and `license` again.\n\n### How\n\nI ran `nix flake update`, and then `git revert\n991f25f89f6cdadcc0214a13bc636db223c7cf78`, and manually updated the\ncrates that have been added since.",
          "timestamp": "2024-02-28T09:36:58Z",
          "tree_id": "5ef8f742a74ec4518693a874398ecbd47fddea85",
          "url": "https://github.com/hasura/ndc-postgres/commit/36e4704bc8d5eab098991c1a2a95fe9a7bf635c1"
        },
        "date": 1709113382483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.23734,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.233969,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.46782484553577,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.237436038026846,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25553928868321246,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.02725,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.24248680000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.463227831156104,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.7739785584901355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5390603467441415,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.726259,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.31591915,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.97561663788219,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.713188579770929,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.453287324816308,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.4678915,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.60901645,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.36407061053335,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.651278909150577,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41869761790666626,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.619568,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.01937909999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.86141569753193,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.7088248339457195,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3962551672789265,
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
          "id": "4e487c5dd38fa916ede43b1fb8feaf978e82ef87",
          "message": "Break the dependency on ndc-sdk in the configuration crate. (#331)\n\n### What\n\nBy maintaining our own error type, we can avoid this dependency, which\nmeans the CLI also doesn't need to bring in ndc-sdk.\n\nThis means that the CLI does not need to depend on OpenSSL.\n\n### How\n\nI copied the `ParseError` enum, with a few variations, into the\nconfiguration crate, and used that instead.\n\nThe connector crate now maps from one to the other.",
          "timestamp": "2024-02-28T09:44:28Z",
          "tree_id": "1078a72ca7f3e35253e451f60fa12c6bc7c959fe",
          "url": "https://github.com/hasura/ndc-postgres/commit/4e487c5dd38fa916ede43b1fb8feaf978e82ef87"
        },
        "date": 1709114152099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.2427015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.49410985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.41173564671236,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.854049992531046,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2561639743214917,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.312895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.506254,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.44518305567975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.272899995343323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5948507589482297,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.995903,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.938359,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.48930665937241,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.860028674009321,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4443285049637055,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.16635450000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.56832924999992,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.44575309754112,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.059382636044482,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4290321604296515,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.623143,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.07429625,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.28252697729935,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.76214643510427,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4099438547038493,
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
      }
    ]
  }
}