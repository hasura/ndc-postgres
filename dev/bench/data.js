window.BENCHMARK_DATA = {
  "lastUpdate": 1744043410222,
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
          "distinct": false,
          "id": "a04afe1a0dabdf8efb91485f8eb56c3feada24b7",
          "message": "chore(deps): Bump similar-asserts from 1.6.0 to 1.6.1 (#677)\n\nBumps [similar-asserts](https://github.com/mitsuhiko/similar-asserts)\nfrom 1.6.0 to 1.6.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/similar-asserts/blob/main/CHANGELOG.md\">similar-asserts's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.6.1</h2>\n<ul>\n<li>Maintenance release with some clippy fixes.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/a0d87077c371beb1d08d7860c8412c351f94bcdc\"><code>a0d8707</code></a>\n1.6.1</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/9bdc5cb9fc33367446c64acc389e514f8af3ee7d\"><code>9bdc5cb</code></a>\nFix CI for MSRV (<a\nhref=\"https://redirect.github.com/mitsuhiko/similar-asserts/issues/11\">#11</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/2ac5eadadcfb5c828100d9facced6b8d4d37cbc5\"><code>2ac5ead</code></a>\nRemove test status from readme</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/db55dc1daa2afa35fc58be46d891b92f4ec9cd1f\"><code>db55dc1</code></a>\nMake clippy happy</li>\n<li>See full diff in <a\nhref=\"https://github.com/mitsuhiko/similar-asserts/compare/1.6.0...1.6.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=similar-asserts&package-manager=cargo&previous-version=1.6.0&new-version=1.6.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-20T13:50:22Z",
          "tree_id": "9524faa5a077c231a400c6ac706f32bc324470e1",
          "url": "https://github.com/hasura/ndc-postgres/commit/a04afe1a0dabdf8efb91485f8eb56c3feada24b7"
        },
        "date": 1737382080740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.485164,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.5619994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.499738780567878,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.8066348131018515,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2113337313666161,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.369292,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.69169219999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.61282801716188,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.573017854889379,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27033927021104504,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.356096,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.2655724,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.697194178133017,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.009407453321273,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2697268452431109,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.652731,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.602962,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.637580793292514,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.368831252139714,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23554432878297263,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.843744,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.464598,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.857487013177675,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.648403854487725,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22299591337927632,
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
          "id": "ade5dbd530186e736ffd93a41bc165164bf5c065",
          "message": "chore(deps): Bump hyper from 0.14.31 to 0.14.32 (#678)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.31 to\n0.14.32.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.32</h2>\n<h2>Features</h2>\n<ul>\n<li><strong>server:</strong> add\n<code>Builder::max_pending_accept_reset_streams(num)</code> option (<a\nhref=\"https://github.com/hyperium/hyper/commit/a24f0c0af8e1f4c6b7cc3a47c83eb6e4af88aca6\">a24f0c0</a>)</li>\n</ul>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> fix intermittent panic parsing partial\nheaders (<a\nhref=\"https://github.com/hyperium/hyper/commit/0f274ae653841e0a58b2835fd3edf47a08311e50\">0f274ae</a>)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/cratelyn\"><code>@​cratelyn</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/hyperium/hyper/pull/3796\">hyperium/hyper#3796</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.31...v0.14.32\">https://github.com/hyperium/hyper/compare/v0.14.31...v0.14.32</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.32/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.32 (2024-12-16)</h3>\n<h4>Features</h4>\n<ul>\n<li><strong>server:</strong> add\n<code>Builder::max_pending_accept_reset_streams(num)</code> option (<a\nhref=\"https://github.com/hyperium/hyper/commit/a24f0c0af8e1f4c6b7cc3a47c83eb6e4af88aca6\">a24f0c0</a>)</li>\n</ul>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> fix intermittent panic parsing partial\nheaders (<a\nhref=\"https://github.com/hyperium/hyper/commit/0f274ae653841e0a58b2835fd3edf47a08311e50\">0f274ae</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/d7bab92149e41612bcb4000e86b2734f657f433b\"><code>d7bab92</code></a>\nv0.14.32</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/0f274ae653841e0a58b2835fd3edf47a08311e50\"><code>0f274ae</code></a>\nfix(http1): fix intermitent panic parsing partial headers (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3813\">#3813</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/a24f0c0af8e1f4c6b7cc3a47c83eb6e4af88aca6\"><code>a24f0c0</code></a>\nfeat(server): backport <code>max_pending_accept_reset_streams()</code>\nto builder (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3796\">#3796</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/96550840be2dc3dd4fda23e158d12f89ba82a710\"><code>9655084</code></a>\nchore(ci): pin hashbrown for MSRV job (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3797\">#3797</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.31...v0.14.32\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.31&new-version=0.14.32)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-20T13:50:25Z",
          "tree_id": "a121ef2b17c9c6bb1e8c103d35fd1fb050abedc6",
          "url": "https://github.com/hasura/ndc-postgres/commit/ade5dbd530186e736ffd93a41bc165164bf5c065"
        },
        "date": 1737382136339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.222261,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.567225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.453066840476568,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.575021389550956,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2107002601746466,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.6741175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.5480165,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.763651289931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6220505232589986,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26967868747198953,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.6479255,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.65423870000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.40856989404689,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.085362611556732,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.286661163376167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.360626,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 63.683649899999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.42463770389479,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.788965907117493,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2489670853871178,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.473109,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.93780199999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.296002777336973,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.56046457999566,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.217820940945881,
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
          "id": "7f63a2f722a80030c5b8e9fb5919cf871cf25bfc",
          "message": "Update test related files (#680)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n- add json schema files for configuration, queries and mutations\n- reference these schemas in configuration and request files\n- update configuration files to version 5\n- add manually triggered tests to generate the schema files\n\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-01-24T00:20:35Z",
          "tree_id": "0175416b0e0af2e83f970d14c2b203449ff4713d",
          "url": "https://github.com/hasura/ndc-postgres/commit/7f63a2f722a80030c5b8e9fb5919cf871cf25bfc"
        },
        "date": 1737679071658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.691115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.0687785,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.13821241207457,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.5152376428256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21471763864095197,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.578995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.33996809999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.76168059267401,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6338958798356344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2791448730825956,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.208949,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.93615090000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.68087813284767,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.953093503515593,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.30898352031157583,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.464715999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.6796179,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.439068554166308,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.036965711849216,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.217903135548299,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.156801,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.4446743,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.46008693540078,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.677491469578541,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24402277859812185,
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
          "id": "22134e22d06b2bae4cadfe30c3dcf185e4e0e34d",
          "message": "chore(deps): Bump clap from 4.5.26 to 4.5.27 (#681)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.26 to 4.5.27.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.27</h2>\n<h2>[4.5.27] - 2025-01-20</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Iterate on tutorials and reference based on feedback</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.27] - 2025-01-20</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Iterate on tutorials and reference based on feedback</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/21c9892efec76ea231f67de092472280bbf49cb7\"><code>21c9892</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/0c8bceb3e98316f7365f86fc37d492cadb5680b2\"><code>0c8bceb</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/d8f102a18cac1b6b634a0ebfe774dca7d97e7392\"><code>d8f102a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5732\">#5732</a>\nfrom epage/consistent</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c92fca3a8fbbae0b593cd09800f6281c42e4971b\"><code>c92fca3</code></a>\ndocs(complete): Clarify CompleteEnv's Shell trait</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5ca60e9079e79c44eee4e226fabec943b8138ef8\"><code>5ca60e9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5731\">#5731</a>\nfrom epage/bash</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5d7c16c60e6db5af3051136abd0c57c268e0b050\"><code>5d7c16c</code></a>\nfix(complete): Adjust how IFS is passed to clap</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.26...clap_complete-v4.5.27\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.26&new-version=4.5.27)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T13:45:17Z",
          "tree_id": "e353d4a71b66fcf17e3a7dfbf841b9043b67896a",
          "url": "https://github.com/hasura/ndc-postgres/commit/22134e22d06b2bae4cadfe30c3dcf185e4e0e34d"
        },
        "date": 1737986051972,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.765408,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.4801095,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.337131201352268,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.328486817756865,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2115868874615884,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.407954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.74484299999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.32482245709627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8029641950843,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27418981831668987,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.5512265,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.72093584999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.771726273767985,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.199821734052609,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.26390280157421386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.934191,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.0602495,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.396229936081234,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.730993465033997,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22345817659358633,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.419926,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.99579960000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.59859309096479,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.5936042714951455,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24300195952267167,
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
          "id": "3f1455db8635bc34fc73e11815758c48997b9f2d",
          "message": "chore(deps): Bump indexmap from 2.6.0 to 2.7.1 (#682)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.6.0 to\n2.7.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.7.1 (2025-01-19)</h2>\n<ul>\n<li>Added <code>#[track_caller]</code> to functions that may panic.</li>\n<li>Improved memory reservation for <code>insert_entry</code>.</li>\n</ul>\n<h2>2.7.0 (2024-11-30)</h2>\n<ul>\n<li>Added methods <code>Entry::insert_entry</code> and\n<code>VacantEntry::insert_entry</code>, returning\nan <code>OccupiedEntry</code> after insertion.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/42e57a395b939292c08d32a317bae7bec3b7b5d8\"><code>42e57a3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/369\">#369</a>\nfrom cuviper/release-2.7.1</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/f61b581178260fe2afaf1c0fc0613be319827d19\"><code>f61b581</code></a>\nRelease 2.7.1</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/cb520a7817b509d3a7cc51c8b60edcdbb029e595\"><code>cb520a7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/368\">#368</a>\nfrom cuviper/reserve_entries</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/f0ec9243d93b1788e77902dfef7ef956dbf38b40\"><code>f0ec924</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/367\">#367</a>\nfrom savannstm/better-panics</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/38ef6188a7ece05c2cf5d2e5a930cad0cfb252a3\"><code>38ef618</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/364\">#364</a>\nfrom hkBst/patch-1</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/1f1272171f108c23865d1943b9605b54a19de185\"><code>1f12721</code></a>\nImprove memory reservation for <code>insert_entry</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/2f5575574ca31240ed539b7fdb9938207fe782cc\"><code>2f55755</code></a>\nImprove panic messages</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7b64edc994ec11867479f974f190e302e3e66563\"><code>7b64edc</code></a>\nAdd <code>#[track_caller]</code> attributes to functions that may\npanic</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/f63bb6e016f2f78516441bc42e586828211ed2dc\"><code>f63bb6e</code></a>\nremove fxhash dep</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8eb4de59b03adf2e24284f6ca370d5071c493f9f\"><code>8eb4de5</code></a>\nRemove fxhash example from lib.rs</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.6.0...2.7.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.6.0&new-version=2.7.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T13:45:30Z",
          "tree_id": "45251cc812a16e3a6cf7cda7e68a1be7030dc210",
          "url": "https://github.com/hasura/ndc-postgres/commit/3f1455db8635bc34fc73e11815758c48997b9f2d"
        },
        "date": 1737986377344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.277098,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.680779499999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.201668401622303,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.666180656837909,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.1992592076846307,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.819843,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.9163189,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.71633858891429,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.686152272734212,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2984563204441741,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.80461,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.06841960000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.816880375711364,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.853236162815087,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2826493359230143,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.085527,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.036708,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.99694846467235,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.3927182667137785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23073185272402455,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.822635500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.99008725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.275655519764566,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.112577943198584,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.25190794027703745,
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
          "id": "15049a717be3313babfe6698cb5dfa993fd7f8c7",
          "message": "chore(deps): Bump serde_json from 1.0.133 to 1.0.137 (#683)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.133 to\n1.0.137.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.137</h2>\n<ul>\n<li>Turn on &quot;float_roundtrip&quot; and &quot;unbounded_depth&quot;\nfeatures for serde_json in play.rust-lang.org (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1231\">#1231</a>)</li>\n</ul>\n<h2>v1.0.136</h2>\n<ul>\n<li>Optimize serde_json::value::Serializer::serialize_map by using\nMap::with_capacity (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1230\">#1230</a>,\nthanks <a\nhref=\"https://github.com/goffrie\"><code>@​goffrie</code></a>)</li>\n</ul>\n<h2>v1.0.135</h2>\n<ul>\n<li>Add serde_json::Map::into_values method (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1226\">#1226</a>,\nthanks <a\nhref=\"https://github.com/tisonkun\"><code>@​tisonkun</code></a>)</li>\n</ul>\n<h2>v1.0.134</h2>\n<ul>\n<li>Add <code>RawValue</code> associated constants for literal\n<code>null</code>, <code>true</code>, <code>false</code> (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1221\">#1221</a>,\nthanks <a\nhref=\"https://github.com/bheylin\"><code>@​bheylin</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/eb49e28204c45faa692e0ca5485958b3bdc6f310\"><code>eb49e28</code></a>\nRelease 1.0.137</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/51c48ab3b07979b648643cff70cd430217539481\"><code>51c48ab</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1231\">#1231</a>\nfrom dtolnay/playground</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/7d8f15b96351d9414e17c9ec4c095f51b259872e\"><code>7d8f15b</code></a>\nEnable &quot;float_roundtrip&quot; and &quot;unbounded_depth&quot;\nfeatures in playground</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a46f14cf2e92054bdb2c11dd86f4c1b5069f7f81\"><code>a46f14c</code></a>\nRelease 1.0.136</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/eb9f3f6387e62508854298b10e68aee8250f7f6b\"><code>eb9f3f6</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1230\">#1230</a>\nfrom goffrie/patch-1</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/513e5b2f74eb4697e5b0ed3952b1e3cf60ac6f0b\"><code>513e5b2</code></a>\nUse Map::with_capacity in value::Serializer::serialize_map</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/9802c08d4ef1662cbbf92fabf7d6f4dc6aecfe9e\"><code>9802c08</code></a>\nRelease 1.0.135</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b97935fde2acc364f2ce6de8885c0bedfa5eb29f\"><code>b97935f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1226\">#1226</a>\nfrom tisonkun/map-into-values</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/d48c224d12a18189bdabbfe050bfe8134dbb4bf5\"><code>d48c224</code></a>\nAdd Map::into_values method</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/1e77cac742aaa12d0c8390bd8d40e279e05a3bca\"><code>1e77cac</code></a>\nResolve precedence clippy lint</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.133...v1.0.137\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.133&new-version=1.0.137)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T13:45:39Z",
          "tree_id": "36c9d5d3c725d9751d381e6e2b8c03f366d6d557",
          "url": "https://github.com/hasura/ndc-postgres/commit/15049a717be3313babfe6698cb5dfa993fd7f8c7"
        },
        "date": 1737986377494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.6018325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.51256024999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.261538417901535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.932776305649954,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2118457585757443,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.938169,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.986006,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.68342709992083,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7174964200415772,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2884029010144407,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.4097675,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.933778,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.559098313157538,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.378727597584575,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.24658902785336972,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.9303075,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.50648215,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.872887556202567,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.620291034894752,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2383591787439497,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.3687905,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.13374674999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.804021348363612,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.26320857914218,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2215534037671778,
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
          "id": "19dfb4215c0bd08cdb6d9031dd1fc24ab195b242",
          "message": "chore(deps): Bump uuid from 1.11.0 to 1.12.1 (#684)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.11.0 to 1.12.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.12.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Fix links to namespaces in documentation by <a\nhref=\"https://github.com/cstyles\"><code>@​cstyles</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/789\">uuid-rs/uuid#789</a></li>\n<li>use inherent to_be_bytes and to_le_bytes methods by <a\nhref=\"https://github.com/Vrtgs\"><code>@​Vrtgs</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/788\">uuid-rs/uuid#788</a></li>\n<li>Reduce bitshifts in from_u64_pair by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/790\">uuid-rs/uuid#790</a></li>\n<li>prepare for 1.12.1 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/791\">uuid-rs/uuid#791</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/cstyles\"><code>@​cstyles</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/789\">uuid-rs/uuid#789</a></li>\n<li><a href=\"https://github.com/Vrtgs\"><code>@​Vrtgs</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/788\">uuid-rs/uuid#788</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.12.0...1.12.1\">https://github.com/uuid-rs/uuid/compare/1.12.0...1.12.1</a></p>\n<h2>1.12.0</h2>\n<h2>:warning: Possible Breakage</h2>\n<p>This release includes additional <code>PartialEq</code>\nimplementations on <code>Uuid</code>, which can break inference in some\ncases.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>feat: Add <code>NonZeroUuid</code> type for optimized\n<code>Option&lt;Uuid&gt;</code> representation by <a\nhref=\"https://github.com/ab22593k\"><code>@​ab22593k</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/779\">uuid-rs/uuid#779</a></li>\n<li>Finalize <code>NonNilUuid</code> by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/783\">uuid-rs/uuid#783</a></li>\n<li>Prepare for 1.12.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/784\">uuid-rs/uuid#784</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/ab22593k\"><code>@​ab22593k</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/779\">uuid-rs/uuid#779</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.11.1...1.12.0\">https://github.com/uuid-rs/uuid/compare/1.11.1...1.12.0</a></p>\n<h2>1.11.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Finish cut off docs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/777\">uuid-rs/uuid#777</a></li>\n<li>Fix links in CONTRIBUTING.md by <a\nhref=\"https://github.com/jacobggman\"><code>@​jacobggman</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/778\">uuid-rs/uuid#778</a></li>\n<li>Update rust toolchain before building by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/781\">uuid-rs/uuid#781</a></li>\n<li>Prepare for 1.11.1 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/782\">uuid-rs/uuid#782</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/jacobggman\"><code>@​jacobggman</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/778\">uuid-rs/uuid#778</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.11.0...1.11.1\">https://github.com/uuid-rs/uuid/compare/1.11.0...1.11.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/70831d21b373a06149885e8aec18c9084ac918c3\"><code>70831d2</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/791\">#791</a> from\nuuid-rs/cargo/1.12.1</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/ddb87857e3c2d1a4db9e035f8ca0dfc1219debcd\"><code>ddb8785</code></a>\nprepare for 1.12.1 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/3a0a378304f8eb375eb678ae1c122f36da4e51d0\"><code>3a0a378</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/790\">#790</a> from\nuuid-rs/chore/fewer-shifts</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/62da97bdd53749d0941726f85bc01f7b589a1055\"><code>62da97b</code></a>\nremove sketchy benches</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/7a96ae2c443afaabd3ed48065c2bffc93fd39d37\"><code>7a96ae2</code></a>\nrestore parens</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/cfc627b2e2e0254bf5ad4bc6f7c30aca43f0b00e\"><code>cfc627b</code></a>\nreduce bitshifts in from_u64_pair</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4c785e534ea4f13809c0c5b15f7a5e11f01f7af8\"><code>4c785e5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/788\">#788</a> from\nVrtgs/main</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/70efa1806c9cba0eca44e8424f57ddd472f1b610\"><code>70efa18</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/789\">#789</a> from\ncstyles/fix-links-to-namespaces</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/2a28bc588e5526255e2fd0be26ac9f158ab18c1e\"><code>2a28bc5</code></a>\nFix links to namespaces in documentation</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/5d629ce683ca62d0868f2dbcb657b8da1596821a\"><code>5d629ce</code></a>\nuse inherint to_be_bytes and to_le_bytes methods, rather than\nreimplementing ...</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.11.0...1.12.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.11.0&new-version=1.12.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T13:45:48Z",
          "tree_id": "01174469cdb5ffbead57b8ce73d358b76e6b9db7",
          "url": "https://github.com/hasura/ndc-postgres/commit/19dfb4215c0bd08cdb6d9031dd1fc24ab195b242"
        },
        "date": 1737986401712,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.4233305,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.614756,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.879167886048094,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6354732601347735,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19285195472026875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.130255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.56981079999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.25606140414457,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5352530418892059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27006373932810335,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.273002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.9834871,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.483187498113313,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.719813691233707,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2712817368060175,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.586722,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.91422349999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.319587549997543,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.83028353725561,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23971189869445123,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.473316,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.5421613,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.57331821270323,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.746389736116409,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23397789448077433,
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
          "id": "4160af16bc1720b2777820d8c0075b6ec83c5c78",
          "message": "Update multitenant version in update script (#669)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe automatically open `ndc-postgres-multitenant` PRs, let's make sure we\nupdate the right part of the `Cargo.toml` file",
          "timestamp": "2025-01-28T14:03:38Z",
          "tree_id": "4edcf411221c796ed9c5a3ef2a301b8e1bdeb4c2",
          "url": "https://github.com/hasura/ndc-postgres/commit/4160af16bc1720b2777820d8c0075b6ec83c5c78"
        },
        "date": 1738073478378,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.1525555,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.028193899999984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.174336167562991,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7286290852115584,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22209484659588474,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.158345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.3804625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.27552028440034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5587625228850754,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3002267078620191,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.147422,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.39113910000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.86843390653288,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.061862972630372,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2868103180028393,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.389627,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.63159425,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.526200660543935,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.60199995701052,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2356880640689959,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.131153,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.079567,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.93791947173673,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.968645472864349,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2328287237429322,
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
          "id": "02ba0d558cbcfc6564365ded6412bca500e99b94",
          "message": "Remove redundant suffix for Aggregate enum (#686)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\nTiny PR to remove a redundant enum variant suffix, as prep for upcoming\nv0.2 PR\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-01-31T09:53:51Z",
          "tree_id": "e3952aa163bdebbe4454f3e1ff122dc0ed628300",
          "url": "https://github.com/hasura/ndc-postgres/commit/02ba0d558cbcfc6564365ded6412bca500e99b94"
        },
        "date": 1738317696944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.623133,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.16747839999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.721188720818999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.694686544297182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19018746380706197,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.176214,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.81369899999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.23528334620804,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6402648959152017,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2815715298393024,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.019847,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.91238204999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.794671592798114,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.775616353338766,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2919083259024258,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.98444,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.21300550000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.861019198568446,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.783871982882044,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24855749210787248,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.277468999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.23232275,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.04654431316721,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.661206131761617,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23466573211741545,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "daniel@hasura.io",
            "name": "Daniel Chambers",
            "username": "daniel-chambers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b98c5d27ad8765b303787564e7b5fd4280185f1",
          "message": "Fixed inconsistent handling of missing vs null in mutations and native operations (#685)\n\n### What\nThis PR fixes inconsistent handling of missing arguments/object\nproperties in native operations and v2 mutations. In particular:\n- Native operations will now interpret missing arguments as null values\nfor that argument, instead of causing an error.\n- Pre and post-check arguments in v2 mutations can now either be missing\nor null and both will be interpreted as an always true predicate.\nPreviously a null value would have caused an error.\n- In v2 update mutations update columns explicitly set to null (as\nopposed to being missing or being set with their `_set` value object)\nare now correctly interpreted as \"no update should be made to that\ncolumn\", instead of causing an error.\n\n### How\nWhen reading arguments for native operations in\n`crates/query-engine/translation/src/translation/query/native_queries.rs`,\nwe check if the argument type is nullable and if it is and the argument\nis missing, we assume a null value for the argument. If the argument\ntype is not nullable, then we return an error as before, since we can't\nassume null.\n\nPre and post-check arguments are now deserialized using the new\n`get_nullable_predicate_argument` function in\n`crates/query-engine/translation/src/translation/mutation/v2/common.rs`.\nThis function allows for both missing and null properties and in both\ncases coalesces them into the always true predicate.\n\nFor v2 update mutations update columns, we now handle the case where the\ncolumn property is null and treat it as a no-op (see\n`parse_update_columns`)",
          "timestamp": "2025-02-02T23:02:28Z",
          "tree_id": "cca468dff55a943ad48dc07e5aa63a08a95eecdb",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b98c5d27ad8765b303787564e7b5fd4280185f1"
        },
        "date": 1738537947473,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.394265,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.4841585,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.820405835147408,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.752365740361544,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20732964050885144,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.90457599999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.3208634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.08650171367583,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5622692123738062,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26286459717785093,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.682344,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.57391425,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.392738420102344,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.242053681098174,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.27030753561933973,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.646688,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.51929359999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.549866339238008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.965623419511381,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22237641043940923,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.84272,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.921940899999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.94895008006353,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.584010298359889,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.21559661951591225,
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
          "id": "c4dfbc3eede957a8cbf74eb708171cb0aca03343",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.1.0 to 2.2.0 (#693)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.1.0 to 2.2.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.2.0</h2>\n<h2>Release Summary</h2>\n<p>This release introduces a new feature allowing users to specify\nDocker flags as an input, enhancing flexibility in Docker Compose\noperations. A bug fix ensures that Docker Compose output is now printed\nonly in debug mode, reducing unnecessary log verbosity. Additionally,\ndocumentation has been updated to reflect the latest actions and\nworkflows. Dependencies have been updated for GitHub Actions to maintain\ncompatibility and security.</p>\n<p>No breaking changes were introduced in this release.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(deps): bump the actions-dependencies group across 1 directory\nwith 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/107\">hoverkraft-tech/compose-action#107</a></li>\n<li>fix: print docker compose output to debug only by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/118\">hoverkraft-tech/compose-action#118</a></li>\n<li>feat: add docker flags input by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/115\">hoverkraft-tech/compose-action#115</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/121\">hoverkraft-tech/compose-action#121</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/119\">hoverkraft-tech/compose-action#119</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.1.0...v2.2.0\">https://github.com/hoverkraft-tech/compose-action/compare/v2.1.0...v2.2.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8be2d741e891ac9b8ac20825e6f3904149599925\"><code>8be2d74</code></a>\nchore(deps): bump the github-actions-dependencies group with 2\nupdates</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/d98be6ed723fbd8a8e7c0f47b9285c50ecb6c544\"><code>d98be6e</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/2c587abdb14bd2dafade1579638aa9e2adab47b8\"><code>2c587ab</code></a>\nfeat: add docker flags input</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/5bc973d473e63b8bbb46a8a340d5bb310f4cd313\"><code>5bc973d</code></a>\nfix: npm security issue</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/99765016ef429f024b3346e6909fbd55753d5591\"><code>9976501</code></a>\ndocs; use docker compose wording instead of docker-compose</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/0807b1498774c2bdc127b25ed2c3ece56809976b\"><code>0807b14</code></a>\nfix: print docker compose output to debug only</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/765986dd3e37c58692011629eb8a5f146ad9484c\"><code>765986d</code></a>\ndocs: add ref link to debug mode</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ad6e7b37dc84c2935f0e58723b43b615a01b1b25\"><code>ad6e7b3</code></a>\nchore(deps): bump the actions-dependencies group across 1 directory with\n2 up...</li>\n<li>See full diff in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.1.0...v2.2.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.2.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T14:51:30Z",
          "tree_id": "409e1f1ed32de83fb996f6813330d421b5ffd5b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/c4dfbc3eede957a8cbf74eb708171cb0aca03343"
        },
        "date": 1738594740487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.79129,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.18395325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.894568383956656,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7735182987421005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19820413384424249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.36313,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.34340359999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.02645780186291,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5774964064551327,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2756922179218615,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.278251499999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.14624770000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.4044391531775,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.240660438267447,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2768077155974541,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.826342,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.549868,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.15424568169875,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.343476492563131,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24530907824949602,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.465734,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.2403426,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.402171527434877,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.635022016677215,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2288832504559304,
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
          "id": "da297540a5f1bc29eed0dea0c126c607c6db4647",
          "message": "Bump openssl to fix audit issue (#694)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`cargo audit` is failing, this fixes it.\n\n### How\n\nBump OpenSSL crate.",
          "timestamp": "2025-02-03T14:59:31Z",
          "tree_id": "a329a90fa08c35a4e66e2686d16a6a4eebf0453f",
          "url": "https://github.com/hasura/ndc-postgres/commit/da297540a5f1bc29eed0dea0c126c607c6db4647"
        },
        "date": 1738595329070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.736184,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.47157425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.406183405759263,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.2105876685902945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21330088220673338,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.045268,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.7079775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.126331651294365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5987450804148935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2712934842289392,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.267412500000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.42903530000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.183010368568787,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.783215759391425,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28010004409958605,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.3304795,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.18102675000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.497241198706657,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.646110489574436,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.22369626011777802,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.033976499999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.54930124999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.588058670323743,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.287674631480787,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2397583529734645,
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
          "id": "d961148b935ff82a27a02641e7ddee2a034c6b7a",
          "message": "chore(deps): Bump env_logger from 0.11.5 to 0.11.6 (#690)\n\nBumps [env_logger](https://github.com/rust-cli/env_logger) from 0.11.5\nto 0.11.6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/releases\">env_logger's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.11.6</h2>\n<h2>[0.11.6] - 2024-12-20</h2>\n<h3>Features</h3>\n<ul>\n<li>Opt-in file and line rendering</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/blob/main/CHANGELOG.md\">env_logger's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.11.6] - 2024-12-20</h2>\n<h3>Features</h3>\n<ul>\n<li>Opt-in file and line rendering</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/dc1a01a79729d9a43f9dfaf32080c5e7bdf05090\"><code>dc1a01a</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/65f81b3b6bcac25ce3de08187579ba38d0ea34f5\"><code>65f81b3</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/77425992f658d00d41aafc29b3bc7cb2e93e0f80\"><code>7742599</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/345\">#345</a>\nfrom EriKWDev/main</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/59229bce5331f23b021633a1c991672c93e0ec83\"><code>59229bc</code></a>\nfix: Test result of everything enabled has changed</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/b0d4760955fcfe30a4e4314fe0f1ba9952650855\"><code>b0d4760</code></a>\nspelling + field names</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/1bad1f59d73240de26cd6e632bb4cce4541ba0e1\"><code>1bad1f5</code></a>\nfeature: ability to display source file path and line number with\ndefault for...</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/cc97bf76e37f72993553187434e7fcbeb62c8478\"><code>cc97bf7</code></a>\nchore(deps): Update Rust Stable to v1.83 (<a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/343\">#343</a>)</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/240cd21de5b8b506f34dc8fdfbcaf49a73fb91c9\"><code>240cd21</code></a>\nstyle: Make clippy happy</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/da7ff822598df812102c56e5d0329c79d7bfa60b\"><code>da7ff82</code></a>\nchore: Update from _rust template</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/ab1d8549459a8f38897aa065a300279ead1019e4\"><code>ab1d854</code></a>\nchore(deps): Update Rust crate snapbox to v0.6.20 (<a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/342\">#342</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.11.5...v0.11.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=env_logger&package-manager=cargo&previous-version=0.11.5&new-version=0.11.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T15:16:42Z",
          "tree_id": "487f42b874c8622d7ffe099b6e857a242187c4d3",
          "url": "https://github.com/hasura/ndc-postgres/commit/d961148b935ff82a27a02641e7ddee2a034c6b7a"
        },
        "date": 1738596282835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.367497,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.3476108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.38607790645369,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.373542517593812,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22199225203137568,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.479995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.14529259999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.88311656852887,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.803460215998129,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3051836900094398,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.743477,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.5962908,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.819859064966774,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.355670098122179,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28986127931494127,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.323256,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.639016,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.570504041731713,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.2657800731532625,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2430037524212979,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.688244,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.09000375,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.596673724547397,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.51819441642753,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23820802814151953,
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
          "id": "4142938571d539e39d63b1b5fe108e93cf29817c",
          "message": "chore(deps): Bump thiserror from 1.0.69 to 2.0.11 (#692)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.69 to\n2.0.11.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.0.11</h2>\n<ul>\n<li>Add feature gate to tests that use std (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/409\">#409</a>,\n<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/410\">#410</a>,\nthanks <a\nhref=\"https://github.com/Maytha8\"><code>@​Maytha8</code></a>)</li>\n</ul>\n<h2>2.0.10</h2>\n<ul>\n<li>Support errors containing a generic type parameter's associated type\nin a field (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/408\">#408</a>)</li>\n</ul>\n<h2>2.0.9</h2>\n<ul>\n<li>Work around <code>missing_inline_in_public_items</code> clippy\nrestriction being triggered in macro-generated code (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/404\">#404</a>)</li>\n</ul>\n<h2>2.0.8</h2>\n<ul>\n<li>Improve support for macro-generated <code>derive(Error)</code> call\nsites (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/399\">#399</a>)</li>\n</ul>\n<h2>2.0.7</h2>\n<ul>\n<li>Work around conflict with #[deny(clippy::allow_attributes)] (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/397\">#397</a>,\nthanks <a\nhref=\"https://github.com/zertosh\"><code>@​zertosh</code></a>)</li>\n</ul>\n<h2>2.0.6</h2>\n<ul>\n<li>Suppress deprecation warning on generated From impls (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/396\">#396</a>)</li>\n</ul>\n<h2>2.0.5</h2>\n<ul>\n<li>Prevent deprecation warning on generated impl for deprecated type\n(<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/394\">#394</a>)</li>\n</ul>\n<h2>2.0.4</h2>\n<ul>\n<li>Eliminate needless_lifetimes clippy lint in generated\n<code>From</code> impls (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/391\">#391</a>,\nthanks <a\nhref=\"https://github.com/matt-phylum\"><code>@​matt-phylum</code></a>)</li>\n</ul>\n<h2>2.0.3</h2>\n<ul>\n<li>Support the same Path field being repeated in both Debug and Display\nrepresentation in error message (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/383\">#383</a>)</li>\n<li>Improve error message when a format trait used in error message is\nnot implemented by some field (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/384\">#384</a>)</li>\n</ul>\n<h2>2.0.2</h2>\n<ul>\n<li>Fix hang on invalid input inside #[error(...)] attribute (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/382\">#382</a>)</li>\n</ul>\n<h2>2.0.1</h2>\n<ul>\n<li>Support errors that contain a dynamically sized final field (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/375\">#375</a>)</li>\n<li>Improve inference of trait bounds for fields that are interpolated\nmultiple times in an error message (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/377\">#377</a>)</li>\n</ul>\n<h2>2.0.0</h2>\n<h2>Breaking changes</h2>\n<ul>\n<li>\n<p>Referencing keyword-named fields by a raw identifier like\n<code>{r#type}</code> inside a format string is no longer accepted;\nsimply use the unraw name like <code>{type}</code> (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/347\">#347</a>)</p>\n<p>This aligns thiserror with the standard library's formatting macros,\nwhich gained support for implicit argument capture later than the\nrelease of this feature in thiserror 1.x.</p>\n<pre lang=\"rust\"><code>#[derive(Error, Debug)]\n#[error(&quot;... {type} ...&quot;)]  // Before: {r#type}\npub struct Error {\n    pub r#type: Type,\n}\n</code></pre>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0f532e326e9a4cc6c6e30ee19ab00cb9eeb44362\"><code>0f532e3</code></a>\nRelease 2.0.11</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/3d15543a9117e32050caa6a219da6299b6271576\"><code>3d15543</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/410\">#410</a>\nfrom dtolnay/testnostd</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/1a226ae42c20114f71bd3ed339f9e0351351abce\"><code>1a226ae</code></a>\nDisable two more integration tests in no-std mode</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/8b5f2d78f0576d8a64a96bd0b73c2b4eef45e6c9\"><code>8b5f2d7</code></a>\nFix unused import in test when built without std</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/eecd247cdf7dfa1cee9898dd29d56b0021b5f4d0\"><code>eecd247</code></a>\nAdd CI step to test with &quot;std&quot; disabled</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/8f2a76b4ba520e5615147977531bff394bed6894\"><code>8f2a76b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/409\">#409</a>\nfrom Maytha8/std-tests</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/693a6cddad750d0401942d553969310193ec2614\"><code>693a6cd</code></a>\nAdd feature gate to tests that use std</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/349f6960ff02d64bec38de392850ea9aa07bb766\"><code>349f696</code></a>\nRelease 2.0.10</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/6cd87bc228612a1b8634ddb613059cc11b47f7ae\"><code>6cd87bc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/408\">#408</a>\nfrom dtolnay/assoctype</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/6b3e1e50b27d9f90fd4a4be098d4693e50609784\"><code>6b3e1e5</code></a>\nGenerate trait bounds on associated types</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.69...2.0.11\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.69&new-version=2.0.11)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T15:16:57Z",
          "tree_id": "e6168ffb4655ee713268d89041da3553669a00a9",
          "url": "https://github.com/hasura/ndc-postgres/commit/4142938571d539e39d63b1b5fe108e93cf29817c"
        },
        "date": 1738596656755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.684227,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.21154799999993,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.821607703967905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.239921407764077,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22444720375318034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.483567,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.79065475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.36622208541567,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7039926319598564,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26160569362883235,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.01537,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.58232495000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.6542256604193,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.84289622727718,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28624693917502225,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.954255,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.48526039999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.80708903709523,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.951799866074417,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21903652342384186,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.559851,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.54776679999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.292222707962303,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.347205873130932,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2271546289355779,
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
          "id": "0bb19d78de602cb73de829263339f299ae3a6cd6",
          "message": "chore(deps): Bump tempfile from 3.15.0 to 3.16.0 (#689)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.15.0 to\n3.16.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.16.0</h2>\n<ul>\n<li>Update <code>getrandom</code> to <code>0.3.0</code> (thanks to <a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>).</li>\n<li>Allow <code>windows-sys</code> versions <code>0.59.x</code> in\naddition to <code>0.59.0</code> (thanks <a\nhref=\"https://github.com/ErichDonGubler\"><code>@​ErichDonGubler</code></a>).</li>\n<li>Improved security documentation (thanks to <a\nhref=\"https://github.com/n0toose\"><code>@​n0toose</code></a> for\ncollaborating with me on this).</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/6ecd9f197104c9edc74ba6ad7478a5289526adb1\"><code>6ecd9f1</code></a>\nchore: release 3.16.0</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3693c016b50cb43331966c80a9020e6d5cab709f\"><code>3693c01</code></a>\nbuild: upgrade getrandom to v0.3.0 (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/320\">#320</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/a4596e5d57359e43734407c283788b1d7720bf54\"><code>a4596e5</code></a>\nbuild: allow <code>windows-sys</code> 0.59 (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/319\">#319</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3ac6d4eb04f4d719c4aadfb2328b9d0d80afcddf\"><code>3ac6d4e</code></a>\nchore: fix clippy lifetime warning (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/318\">#318</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3a722e86baad70464e25348379c11f68b011a82a\"><code>3a722e8</code></a>\ndocs: improve &amp; expand security documentation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/317\">#317</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.15.0...v3.16.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.15.0&new-version=3.16.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-03T15:17:34Z",
          "tree_id": "dcf7efda0db7cb9851cf3814d00b84542cd42e65",
          "url": "https://github.com/hasura/ndc-postgres/commit/0bb19d78de602cb73de829263339f299ae3a6cd6"
        },
        "date": 1738596719480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.094539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.5612728,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.22186893422726,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.571449938302926,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.199533013231503,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.000946,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.95443854999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.081934823119255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6501772513486515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2914480197039511,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.480364,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.37252439999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.450141200530624,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.123705293859537,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28442259878563647,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.737978,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.1366865,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.77043111411177,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.22657739656287,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.24167785322845117,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.118967999999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.41479525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.064551968484196,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.720922238930115,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24347354432189483,
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
          "id": "90a6c21b2ac4bf64354e058655a110b3f71a292f",
          "message": "Remove mold suggestion in `.envrc.example` (#688)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nIt's totally reasonable that a user would just copy `.envrc.example` to\n`.envrc` and then get going, however this means we try and use `mold`,\nwhich we do not install in the Nix flake, and does not work on MacOS.\nLet's make the default path as conservative and likely to work as\npossible.\n\n### How\n\nRemove `mold` advice from `.envrc.example`, make `CARGO_INCREMENTAL`\nflag opt in.",
          "timestamp": "2025-02-03T18:42:45Z",
          "tree_id": "5bd0e9bbffe7ba97fcb8c1c4f4eecfd49e2d7017",
          "url": "https://github.com/hasura/ndc-postgres/commit/90a6c21b2ac4bf64354e058655a110b3f71a292f"
        },
        "date": 1738608612135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.7870935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.568323,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.258479394145175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.251963443577745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2012725701225801,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.849125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 99.7370746,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.33568904406303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5820128012070143,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28822207511074455,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.686234,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.63424749999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.273523258749357,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.035256573092845,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2659963181775792,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.041297,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.18742805,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.58530258331823,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.505515706640772,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.231120225121116,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.757373,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.19793899999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.250076856591868,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.647299066342121,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24527919366261555,
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
          "id": "30f5f5ef2448fa1faea98b9b2a40d8cddd571a08",
          "message": "Add internal TimescaleDB schemas to `default_excluded_schemas` (#663)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nIntrospection for TimescaleDB breaks by default because it tries to read\nthese internal schema, let's include them by default.\n\nSource of names:\nhttps://github.com/timescale/timescaledb/blob/main/sql/pre_install/schemas.sql#L7\n\n### How\n\nAdd to `default_excluded_schemas` in configuration versions 3, 4 and 5.",
          "timestamp": "2025-02-03T18:44:19Z",
          "tree_id": "be5f7db84aab71b0f42c0d7383f6e802faef22ca",
          "url": "https://github.com/hasura/ndc-postgres/commit/30f5f5ef2448fa1faea98b9b2a40d8cddd571a08"
        },
        "date": 1738608888099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.5372635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.63623275,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.56903553898596,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.570586172073108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20169959752510483,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.107528,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.85206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.194586882859724,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9013427813787658,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3344865924358328,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.239189,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.52402269999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.405831470554308,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.414531697167885,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2883680038211224,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.104097,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.798639,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.200418671564417,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.147061133966208,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2533115947312185,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.360829,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.785738,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.024858411582343,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.336786216476142,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26370341600222535,
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
          "id": "d4b603bb232b99da2300ab5720e41fd209c38c9c",
          "message": "chore(deps): Bump serde_json from 1.0.137 to 1.0.138 (#695)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.137 to\n1.0.138.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.138</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c916099147f0864c158bfffaf6d74870a64b16ee\"><code>c916099</code></a>\nRelease 1.0.138</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/dc29e4815d8b99d48f43d73638819b25e7cd19c8\"><code>dc29e48</code></a>\nMove BufReader to caller</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/29122f9ed796712c098a1cd614f207bd9d1b2ccc\"><code>29122f9</code></a>\nSort imports from PR 1237</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/d33c1b527e77d29ed9a6c2719d8aaac424e85357\"><code>d33c1b5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1237\">#1237</a>\nfrom JonathanBrouwer/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8c2d8004b2b873772dbeadd5ad3f96a185d329df\"><code>8c2d800</code></a>\nAdd more warnings to apply buffering on docs of affected functions</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/65bbd1aa2d0c9aca8347ba5b963e2f8658ab2d42\"><code>65bbd1a</code></a>\nFix example of from_reader not applying buffering when it should</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/87f78da0f57a5bc6c875e56357bc9761558a3ef9\"><code>87f78da</code></a>\nMore precise gitignore patterns</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4134f119c025afa0f57f6b52b66def5c69db0ae6\"><code>4134f11</code></a>\nRemove *.sw[po] from gitignore</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c7626dbac286ddf54aa120b3f3e7c9ebb4804af7\"><code>c7626db</code></a>\nRemove **/*.rs.bk from project-specific gitignore</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.137...v1.0.138\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.137&new-version=1.0.138)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-10T14:00:31Z",
          "tree_id": "0c9ad5822b0a134246922a39171948a02fcdbdcc",
          "url": "https://github.com/hasura/ndc-postgres/commit/d4b603bb232b99da2300ab5720e41fd209c38c9c"
        },
        "date": 1739196571864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.999879,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.87537699999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.045158760943918,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.730335148537224,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20390738923269466,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.9672825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.6424294,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.592610513413995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.546324557045864,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27007300361102077,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.585472,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.38065159999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.138235954005854,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.887118596071868,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.28751444305836965,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.315002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.4618589,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.04215224393871,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.9652914505929715,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2264653636401513,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.970797,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.409148699999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.259001096767022,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9768838634982515,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23259796989932477,
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
          "id": "e4926d67746bd86e3f9233b830d517f733ce8398",
          "message": "chore(deps): Bump clap from 4.5.27 to 4.5.28 (#698)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.27 to 4.5.28.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.28</h2>\n<h2>[4.5.28] - 2025-02-03</h2>\n<h3>Features</h3>\n<ul>\n<li><em>(derive)</em> Unstable support for full markdown syntax for doc\ncomments, enabled with <code>unstable-markdown</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.28] - 2025-02-03</h2>\n<h3>Features</h3>\n<ul>\n<li><em>(derive)</em> Unstable support for full markdown syntax for doc\ncomments, enabled with <code>unstable-markdown</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/257d7812b9d6e60192c395598c1acfc41fd75a5a\"><code>257d781</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/06c5f5f329d7917981aef4f749df035df359ce57\"><code>06c5f5f</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6ac153557c153e64344e293611459357f98ae4a7\"><code>6ac1535</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5733\">#5733</a>\nfrom epage/bin</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a7a8f93d6b2b5f4af8e2703b69bc41ca85a7e840\"><code>a7a8f93</code></a>\nfix(complete): Strip wrappers for running completer</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/b2c8e445aaade1435a5ec576d4e184b6b3e68cbb\"><code>b2c8e44</code></a>\nfeat(complete): Allow user to override bin/completer</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.27...clap_complete-v4.5.28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.27&new-version=4.5.28)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-02-10T14:01:57Z",
          "tree_id": "19cfc7fbb07be3a9188959a83524bfec8e11f43e",
          "url": "https://github.com/hasura/ndc-postgres/commit/e4926d67746bd86e3f9233b830d517f733ce8398"
        },
        "date": 1739196938377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.297551,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.55763949999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.813579960825868,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.064192337903863,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20720709256640737,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.208848,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.4161596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.81755456757355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8485915826576829,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.30593621276456456,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.485335,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.5685669,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.19705719737056,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.795266810507911,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2969943046503505,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.352688,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.7197485,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.741725210203956,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.484369654759195,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23015957918350052,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.897343,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.65911785,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.204073794279537,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.9796730671840095,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23978065605288382,
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
      }
    ]
  }
}