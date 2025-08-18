window.BENCHMARK_DATA = {
  "lastUpdate": 1755546802123,
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
          "id": "f14a8e1a990651d2def53a92ca07763ac8310313",
          "message": "Make logs of incoming requests debug level (#778)\n\nThis PR changes trace events that include the incoming requests to debug\nlevel (from info) to avoid potentially leaking request content we do not\nwant leaked.",
          "timestamp": "2025-06-23T13:37:45Z",
          "tree_id": "eb3fc018c6283a99c15ccd520b7323b33f5e848c",
          "url": "https://github.com/hasura/ndc-postgres/commit/f14a8e1a990651d2def53a92ca07763ac8310313"
        },
        "date": 1750686264287,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.393996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.506758,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.189296631720556,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.980445157555057,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03678134749880808,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.39088050000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.50297984999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.82065039010838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5419691918470022,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.06541342445830245,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.851153,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.56428659999989,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.84899520420942,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.142095459546827,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.047487940695109275,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.8449855,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.92866994999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.950946097974374,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5151307203584565,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.04121885536350631,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.677276500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 61.18638539999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.630395917020348,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.772422950644415,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.04300576306926427,
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
          "id": "7fd4a37c7679f0fe7643f05f35f370489f3dad98",
          "message": "add vulnerability scanning for docker images (#766)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis PR adds vulnerability scanning for the Docker images of the\nndc-postgres using Gokakashi.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2025-06-24T01:45:33Z",
          "tree_id": "550dd40b34fa8ed375686a11f026da214af08dde",
          "url": "https://github.com/hasura/ndc-postgres/commit/7fd4a37c7679f0fe7643f05f35f370489f3dad98"
        },
        "date": 1750729916549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.6101905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.56638825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.932901108570702,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.45086987974865,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03018491321811711,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.814395,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.025308,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.32277372834813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1009537245624372,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04971342803071463,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.572213500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.3846378,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.43826496734607,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.55738029211334,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03608617607457377,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.274912,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.9622554,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.072943121526226,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.054122650568555,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03654948683748892,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.190035,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.4932162,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.96858417917042,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.0458279074577206,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03287447372162916,
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
          "id": "f56afe000d06467742dcc9c004ef9d072894faec",
          "message": "chore(deps): Bump mimalloc from 0.1.46 to 0.1.47 (#773)\n\nBumps [mimalloc](https://github.com/purpleprotocol/mimalloc_rust) from\n0.1.46 to 0.1.47.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/releases\">mimalloc's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Version 0.1.47</h2>\n<h3>Changes</h3>\n<ul>\n<li>Mimalloc <code>v2.2.4</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/000709797d05324e449739ab428180cbe1199712\"><code>0007097</code></a>\nv0.1.47</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/db904584a96e00b514b7942d58098d72c1a04bbb\"><code>db90458</code></a>\nUpdated mimalloc from upstream</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/eff21096d5ee5337ec89e2b7174f1bbb11026c70\"><code>eff2109</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/purpleprotocol/mimalloc_rust/issues/139\">#139</a>\nfrom reigadegr/master</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/7b4505695100f267152d05fe6ed7834dc97759f2\"><code>7b45056</code></a>\nfix: Windows build failure caused by -Wno-error=date-time</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/9c47102827a69a7148234d22faf1f19b3a8bc811\"><code>9c47102</code></a>\nFix mimalloc build failure with musl and release mode</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/44c72c73b3fc40d1804b1a38ac02baebfb27266f\"><code>44c72c7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/purpleprotocol/mimalloc_rust/issues/136\">#136</a>\nfrom nathaniel-daniel/add-windows-libs</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/c0ad27d87363b90dd97198cd4355030246cd9c72\"><code>c0ad27d</code></a>\nLink with required libs on Windows</li>\n<li>See full diff in <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/compare/v0.1.46...v0.1.47\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=mimalloc&package-manager=cargo&previous-version=0.1.46&new-version=0.1.47)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-24T08:32:15Z",
          "tree_id": "0ebff48625163673380966bb529ccdee6036efde",
          "url": "https://github.com/hasura/ndc-postgres/commit/f56afe000d06467742dcc9c004ef9d072894faec"
        },
        "date": 1750754928300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.548934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.67829429999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.388128162379655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.856088363729235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03602867045985956,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.1911005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.44004104999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.13615039735002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2271165471930061,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.052266180713457185,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.9640885,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.03165349999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 25.886565878442106,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.581895819696037,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04256146953404931,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.61952,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.68273959999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.17334041209272,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.20634099128511,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.034715471356207145,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.342485499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.96061804999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.730740259946376,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6295857919087418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03614715306957346,
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
          "id": "0925861b671f7e5dce1d077c1753a93e1d7c48c1",
          "message": "chore(deps): Bump clap from 4.5.39 to 4.5.40 (#774)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.39 to 4.5.40.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.40] - 2025-06-09</h2>\n<h3>Features</h3>\n<ul>\n<li>Support quoted ids in <code>arg!()</code> macro (e.g.\n<code>arg!(&quot;check-config&quot;: ...)</code>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cff27dbf5749777b380abb0f3627ef3d3147844a\"><code>cff27db</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/4ef41249f1ca5aeacabd1ef373581b17d96075b3\"><code>4ef4124</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/ca896175c11d03150291be4bb36c8a5b016cea73\"><code>ca89617</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5848\">#5848</a>\nfrom jennings/jennings/push-xolwzyoornps</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/99b6391ee92bfd3356fc8085ee206df97f284e19\"><code>99b6391</code></a>\nfix(complete): Fix PowerShell dynamic completion</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.39...clap_complete-v4.5.40\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.39&new-version=4.5.40)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-06-24T08:32:24Z",
          "tree_id": "1a77fcc77da2c7ca429b169ed0683aa2b4eb1b5e",
          "url": "https://github.com/hasura/ndc-postgres/commit/0925861b671f7e5dce1d077c1753a93e1d7c48c1"
        },
        "date": 1750754934199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.108503,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.96269519999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.042316757751601,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.791519859082806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.034700012358567185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.788616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.2038747,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.65779230525777,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2514099239020027,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05115734317290398,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.183907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.617336,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.451871113051954,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.1601237996999565,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04215522786814609,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.0959175,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.58975044999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.82218430498013,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.147142013620236,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03516797275944099,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.7344885,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.01543654999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.35867355314048,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.529085627684644,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03640085065304709,
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
          "id": "9e271a6bbb1ba9b1099aad29082ab113b579b163",
          "message": "Bump Nix Flake, fix darwin problems (#779)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nA recent [nixpkgs\nchange](https://github.com/NixOS/nixpkgs/issues/401364) means we cannot\nbuild or use the development shells on `darwin`, this fixes that.",
          "timestamp": "2025-06-25T09:05:14Z",
          "tree_id": "c62b8ee9f2507ed8f3871e9f3ef07ff64c451fc8",
          "url": "https://github.com/hasura/ndc-postgres/commit/9e271a6bbb1ba9b1099aad29082ab113b579b163"
        },
        "date": 1750842693206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.079063,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.8491198,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.828944398997871,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.666418705768313,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03250521917547247,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.449675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.2869156,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.274001354671306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1679854632040971,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04898172512630017,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.485579,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.1957217,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.00762983894738,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.08744725881094,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.037219688906194995,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.175549000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.831513399999984,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.250517422540035,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.822812906434507,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.032906712784845464,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.727636,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.940088,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.54154460843398,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.300464095122109,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.0341953377276009,
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
          "id": "2a20af4f7ecb3732686729cef702b67127804a55",
          "message": "refactor state to prepare for dynamic conection pools (#782)\n\nThis PR refactors state in preparation for dynamic connection pools. A\nbrief list of changes follows:\n\n- update ndc-models dependency to 0.2.4\n- update ndc-sdk depndency to 0.7.0\n- configuration.rs: update runtime Configuration struct: replace\nconnection_uri string with a ConnectionSettings enum, which will have a\nvariant per connection pooling mode. For now it only has static, which\nis default and is the same as the existing behavior.\n- normalize accessing the environment during startup:\n  - previous behavior had us accessing the environment in two places:\n- when creating runtime configuration from parsed configuration, we\nwould potentially read the env to get a connection string to store in\nconfiguration\n- when creating a connection pool while creating state, we would\npotentially read the env to get ssl information for pool creation\n- this becomes an issue for the upcoming feature allowing creating\nconnection pools after startup.\n- therefore, we change the runtime configuration to include all\ninformation we may read from the env. Specifically ssl information is\nadded there\n- as a result we change how pools are created, they now expect the ssl\ninformation instead of the environment (connect.rs)\"\n- we introduce the Redacted struct. This manually implements Display and\nDebug to show `[REDACTED]` for both. This is a safety feature in case\nour state gets printed somewhere. In theory this should never be\nrelevant but no harm implemeting this.\n- introduce PoolManager enum and PoolContext struct.\n- PoolManager is an abstraction that will handle the various connection\nmodes. For now it onlys has the Static mode which is identical to\ncurrent behavior. It is stored in the State.\n- a PoolContext can be aquired from the PoolManager. This contains a\nconnection pool, and DatabaseInfo for the connection pool. (host, port,\nusername to be put in traces)\n- the pool manager also has abstractions for updating metrics for\n(potentially multiple) connection pools\n- refactor pool metrics to be labeled\n- given we can now have multiple connection pools, pools metrics are now\nlabeled so we can track metrics for each individual connection pool",
          "timestamp": "2025-07-01T15:20:47Z",
          "tree_id": "45322ade7d07844df96686bbdeee5cae09d3b7c4",
          "url": "https://github.com/hasura/ndc-postgres/commit/2a20af4f7ecb3732686729cef702b67127804a55"
        },
        "date": 1751383703729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.082233,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.9974965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.321054542603147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.3674862398401935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0378592147864566,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.58308,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.97671799999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.920157344068954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2544634698828219,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05560124121215309,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.8715105,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.2079902,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.806707882738642,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.180081904358708,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03794994686120692,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.139467499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.05013414999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.419080891022638,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.1872292649103358,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03499068270861124,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.665329,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.315176399999984,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.88296760365345,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9651144966668888,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03433678573277833,
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
          "id": "e5a0ffe50a9192eb7ecdf78c9cf607696e7b0202",
          "message": "Implement dynamic connection strings (#783)\n\nThis PR builds uppon #782 to implement the dynamic connection strings\nfeature.\n\n## Named Connections\n- Configure multiple connection URIs in your configuration\n- Select a specific connection at request time using the\n`connection_name` argument\n- Connection pools are created on-demand by default, but can be eagerly\npre-created at startup\n- Optional fallback to the static connection when no connection name is\nprovided\n\n## Dynamic Connections\n- Accept arbitrary connection strings at request time using the\n`connection_string` argument\n- Connection pools are created on-demand and cached for reuse\n- Optional fallback to the static connection when no connection string\nis provided\n\n## Sample configurations:\n\n### Sample 1\n```json\n{\n  \"connectionSettings\": {\n    \"connectionUri\": { \"variable\": \"CONNECTION_URI\" },\n    \"dynamicSettings\": {\n      \"mode\": \"Named\",\n      \"connectionUris\": {\n        \"variable\": \"CONNECTION_URIS_JSON\"\n      },\n      \"fallbackToStatic\": true,\n      \"eagerConnections\": false\n    }\n  }\n}\n```\nBehavior: Loads connection URIs from CONNECTION_URIS_JSON environment\nvariable. Creates connections on-demand. Falls back to CONNECTION_URI\nwhen no name specified.\n### Sample 2\n```json\n{\n  \"connectionSettings\": {\n    \"connectionUri\": { \"variable\": \"CONNECTION_URI\" },\n    \"dynamicSettings\": {\n      \"mode\": \"Named\",\n      \"connectionUris\": {\n        \"map\": {\n          \"tenant1\": \"postgresql://user:pass@tenant1-db:5432/db\",\n          \"tenant2\": \"postgresql://user:pass@tenant2-db:5432/db\",\n          \"reporting\": { \"variable\": \"REPORTING_DB_URI\" }\n        }\n      },\n      \"fallbackToStatic\": false,\n      \"eagerConnections\": true\n    }\n  }\n}\n```\nBehavior: Defines three named connections. Creates all pools at startup.\nRequires valid `connection_name` argument (no fallback).\n### Sample 3\n```json\n{\n  \"connectionSettings\": {\n    \"connectionUri\": { \"variable\": \"CONNECTION_URI\" },\n    \"dynamicSettings\": {\n      \"mode\": \"Dynamic\",\n      \"fallbackToStatic\": true\n    }\n  }\n}\n```\nBehavior: Accepts arbitrary connection strings via `connection_string`\nargument. Falls back to CONNECTION_URI when no string provided.",
          "timestamp": "2025-07-01T20:42:35Z",
          "tree_id": "5b17242f423230bdfd8fb1702a44c6d239b49e60",
          "url": "https://github.com/hasura/ndc-postgres/commit/e5a0ffe50a9192eb7ecdf78c9cf607696e7b0202"
        },
        "date": 1751402939955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.879069,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.1333581,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.69414901093445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.858044714025699,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03680733199055607,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.042429,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.99205099999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.57314728861461,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.494702509232198,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05827903352190093,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.668172,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.6776415,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.78072335511164,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.920514842620612,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.042249925540467755,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.0838095,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.66038224999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.05464602926885,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6521423026016784,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036510451727829324,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.843067,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.925527599999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.981996657294555,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6988434194652093,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03811382185549459,
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
          "id": "45daadc0a541fb17771f0fd826a9cdb8b1b4ecf2",
          "message": "Update CI to automate release process (#784)\n\nAutomate CI\n\nThis PR adds workflows to automate CI.\nOnce merged, we can trigger the \"create release\" workflow to create a\nrelease PR. When that is merged, the new version is tagged and released\nautomatically.\n\nWe also inline the cli plugin definitions. To do this, we deprecate\nusing the postgres cli to generate the metadata for ci, and instead we\nuse templates in ci.",
          "timestamp": "2025-07-01T23:22:20Z",
          "tree_id": "a71c9387aed4b7de892ce22e6e1c4696d75e20d2",
          "url": "https://github.com/hasura/ndc-postgres/commit/45daadc0a541fb17771f0fd826a9cdb8b1b4ecf2"
        },
        "date": 1751412550446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.679714,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.368428400000006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.027256285185148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.286332646118874,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0371529107400691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.155374,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.031342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.45304277461075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0682434011183233,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05210783842090829,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.0176115,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.63002279999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.9936528969285,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.539637298689993,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0463235719510018,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.325571499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.80472334999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.990009878323747,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6606915913379154,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03664504701864867,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.5991755,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.41040674999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.561881783963024,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.7610097359671784,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03654341511183539,
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
          "id": "9dc3c9bfab6f05078790e13b609ab996ab038f45",
          "message": "add exec permissions to ci scripts (#785)\n\nadd execution permissions to ci scripts",
          "timestamp": "2025-07-01T23:35:39Z",
          "tree_id": "b0da443c276ddd52d86ef67aad2c3139e83ce110",
          "url": "https://github.com/hasura/ndc-postgres/commit/9dc3c9bfab6f05078790e13b609ab996ab038f45"
        },
        "date": 1751413329632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.386721,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.743818,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.705854840301644,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.617459782184252,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03472910760766704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.52925,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.7122189999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.16721026881786,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.188469883639776,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05390372325181513,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.909304000000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.50760445,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.501163401755196,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.642161392017979,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.038783845122769195,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.300505,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.029197599999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.998721110245842,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.142285003202868,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03653804729295346,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.556324,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.3442708,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.518349709570312,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.01264042849612,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03551365140135803,
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
          "id": "7386e747f0a2da6446e2eec91274b110e0b3c6b7",
          "message": "add missing script line (#786)\n\nadd a missing script line to release script",
          "timestamp": "2025-07-01T23:48:02Z",
          "tree_id": "7a6259b4a3151efcffe56cb0a95cd58dc50ff9a1",
          "url": "https://github.com/hasura/ndc-postgres/commit/7386e747f0a2da6446e2eec91274b110e0b3c6b7"
        },
        "date": 1751414089639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.235156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.675328949999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.52932276144969,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.477701401706591,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.034780308062500584,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.8206705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.18174504999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.13997186447221,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.125484554008274,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05028717669307827,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.584108,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.2663465,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 25.63983283598368,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.490238413277719,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0382910697775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.981251,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.75127979999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.137541325369483,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.788464070727667,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03669782381239306,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.157064,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.37745889999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.209234133023354,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.89964652302017,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03443890096689699,
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
          "id": "9e11c4579103b7e577b4056cfbd35eb6d90cecec",
          "message": "don't use just test to update cargo lock (#787)\n\ndon't use just test to update cargo lock\n\nCo-authored-by: hasura-bot <accounts@hasura.io>",
          "timestamp": "2025-07-02T00:10:43Z",
          "tree_id": "51a369354af8d983db28f3ea35f7cb26ff92db2e",
          "url": "https://github.com/hasura/ndc-postgres/commit/9e11c4579103b7e577b4056cfbd35eb6d90cecec"
        },
        "date": 1751415439695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.1045725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.70791049999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.398274213366564,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.346392375429419,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03564407631482367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.632034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.48151559999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.55256330602591,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0962731103720458,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.0518155497362446,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.2729695,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.6028872,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.675279619399067,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.6487912486383,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04160967119128449,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.102624,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.30612289999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.58943909540958,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.703102376355737,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.04056336062781246,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.153947,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.2700516,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.540028418865965,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.5028700471259633,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03697908459021004,
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
          "id": "4df19801368f9eeb4b30677465c735f5190aefb3",
          "message": "update release pr body to preserve newlines and include more info (#789)\n\nupdate the body of release PRs created by ci. Previous was functionally\ncorect, but pr body and title were botched.\n\n---------\n\nCo-authored-by: hasura-bot <accounts@hasura.io>",
          "timestamp": "2025-07-02T01:12:44Z",
          "tree_id": "81d5258a789a36c2b4b56df953463003f1febfc9",
          "url": "https://github.com/hasura/ndc-postgres/commit/4df19801368f9eeb4b30677465c735f5190aefb3"
        },
        "date": 1751419158263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.296721,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.06910219999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.520799303749182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.459478617074769,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03281884574875993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.952606,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.895718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.148159170728164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1481502181310148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05330557545516203,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.58656,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.7699367,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.74086254638401,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.178173528857396,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04021616522081615,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.423644,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.04310199999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.042287072169632,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7903233802497986,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03629261521459163,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.243094,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.1151362,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.716515318129332,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4490974169671063,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03381985978557367,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "accounts@hasura.io",
            "name": "hasura-bot",
            "username": "hasura-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5d5d11da1a4ad03efe5276983956f4ad1251030",
          "message": "Release version 2.2.0 (#790)\n\nThis bumps the version in `Cargo.toml` to 2.2.0 and updates\n`changelog.md`.\n\nMerging this branch will trigger the tag-release workflow, which will\nship a new release.",
          "timestamp": "2025-07-02T02:08:35Z",
          "tree_id": "9edcc78679fed4aba71bd0a332a60c2955d62203",
          "url": "https://github.com/hasura/ndc-postgres/commit/d5d5d11da1a4ad03efe5276983956f4ad1251030"
        },
        "date": 1751422505817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.8483315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.21302625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.219990092070905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.5297905033955495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03232606511268917,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.9664975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.36282795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.784424976668326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.144848357667982,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.0510571478804653,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.701215,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.44213345,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.13945355074632,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.884496384482961,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04123444148634677,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.010648,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.30573639999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.328520789689076,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6608476349869044,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.033639073928134394,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.820894,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.445122199999986,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.139382960771293,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6206174753349956,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03500038842974105,
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
          "id": "8a0cf1cb2285fc7adccf1c2cd2049b0907f082f7",
          "message": "Update ship.yaml (#791)\n\nThe new automated CI workflows should tag automatically when merging,\nbut failed to do so because workflow dispatch is not available for the\nship workflow. This is now fixed",
          "timestamp": "2025-07-02T02:28:19Z",
          "tree_id": "344f3eb06d659194554a9f212e552fcce02b09a9",
          "url": "https://github.com/hasura/ndc-postgres/commit/8a0cf1cb2285fc7adccf1c2cd2049b0907f082f7"
        },
        "date": 1751423698799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.034036,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.52900960000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.537476188860392,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.369707039391084,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03341477533372285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.0094835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.00857784999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.88700835154277,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2203122287299024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04952595245109523,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.410172,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.71941639999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.396811035948254,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.545265893792973,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039221535301606034,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.097784000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.364468649999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.189209856136202,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.721683657766306,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03367787186715091,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.840919,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.075530499999985,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.0600539898611,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8314118820558356,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03509674895830034,
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
          "id": "3aa17f3477d62cb1b6093a075cf48d11344dd0ae",
          "message": "Fix workflow script path (#792)\n\nPath to workflow script was incorrect, this fixes that issue",
          "timestamp": "2025-07-02T10:00:19Z",
          "tree_id": "1a6e318cbff8dc6d05111722b4802356244afa35",
          "url": "https://github.com/hasura/ndc-postgres/commit/3aa17f3477d62cb1b6093a075cf48d11344dd0ae"
        },
        "date": 1751450798212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.798595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.10811259999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.779784282961943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.811841240347542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03268064170744667,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.120329,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.939134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.86028143777611,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1327878234976865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05138789863497792,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.298326,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.24052879999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.694527845838035,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.112475464064833,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03612430074448906,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.2689455,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.863386799999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.290898938241895,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.733504589019173,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035484355846408605,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.391414,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.1882388,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.729532051903426,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4080284707859008,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035319795816448785,
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
          "id": "0e6d1e5e1bdc82b1c8e333f058b068397a5ca7fb",
          "message": "Revert release 2.2.0, add changelog note about requiring introspection after update (#793)\n\nRevert the release of v2.2.0, as we've decided we want to do a major\nversion bump instead.",
          "timestamp": "2025-07-02T10:13:17Z",
          "tree_id": "32734da5dcc3c25d7dc5d82dd7dfe517addb3a87",
          "url": "https://github.com/hasura/ndc-postgres/commit/0e6d1e5e1bdc82b1c8e333f058b068397a5ca7fb"
        },
        "date": 1751451607005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.852327,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.20915109999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.45120728120575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.02530204670391,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03737973024200302,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.411791,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.7918244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.42974209265052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2543862492886717,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05574078374635783,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.834253,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.71375379999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.240682164807954,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.464045522328366,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04080465487686292,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.989534000000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.260626849999966,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.77419862875072,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7189120279543317,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038575699541511944,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.767045499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.9213622,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.431336871003257,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.315164123680315,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03609275039874307,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "accounts@hasura.io",
            "name": "hasura-bot",
            "username": "hasura-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "72b08042beade83cf3d520357ff28e311b7ccb87",
          "message": "Release version 3.0.0 (#794)\n\nThis bumps the version in `Cargo.toml` to 3.0.0 and updates\n`changelog.md`.\n\nMerging this branch will trigger the tag-release workflow, which will\nship a new release.\n\nNote there is currently an issue: the required workflows won't trigger\nfor this PR as it was created by another workflow.\nTo work around this, check out this branch, then create and push an\nempty commit:\n\n```bash\ngit checkout release-3.0.0\ngit commit --allow-empty -m \"Trigger workflows\"\ngit push origin release-3.0.0\n```\n\n---------\n\nCo-authored-by: Benoit <benoit@hasura.io>",
          "timestamp": "2025-07-02T10:37:30Z",
          "tree_id": "78bb5d0a8fce67d8f96363e29d07d6d464a3e3bd",
          "url": "https://github.com/hasura/ndc-postgres/commit/72b08042beade83cf3d520357ff28e311b7ccb87"
        },
        "date": 1751453043382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.399008000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.55113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.99006945647781,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.190665071055799,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.036499092664038564,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.35207,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.918795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.74690856908697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4193653331734524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05298797991912028,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.7713135,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.60831039999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.680925133912496,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.871965288816519,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.046069218919581975,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.765116500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.85538825,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.521494709055336,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.91343851469275,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03929958380582049,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.271657000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.80891134999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.364775452992113,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.5574173995092586,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038808691287708225,
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
          "id": "82e257cda9215bc8771fb192a89d8d429494fae2",
          "message": "Upload ci artifact so it can be used in next step (#795)\n\nWe had a bug where the reate-ndc-hub-pr: job would failt to find the\nconnector-definition.tgz artifact, because we never uploaded it.\n\nThis PR adds that step.\n\nThis PR also prevents envsubst from substituting env vars we don't want\nto replace.\nThis was an issue with some of the scripts that are in the metadata file",
          "timestamp": "2025-07-02T13:01:20Z",
          "tree_id": "1f77855d9eeffd0ebe1ee5d939cc9a9f15498382",
          "url": "https://github.com/hasura/ndc-postgres/commit/82e257cda9215bc8771fb192a89d8d429494fae2"
        },
        "date": 1751461687757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.486441,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.79714160000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.07629785774476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.903890110449142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.04018997086551063,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.14905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.2201596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.65823561949048,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.298164741713208,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.060546453616177866,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.951221,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.50465519999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.58133673371326,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.066442754775249,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0412605176204331,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.228416,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.5599625,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.88698054983213,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7392868087794007,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03947783790514335,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.424908,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.16523,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.196176026006867,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9574241256075418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038924512469738354,
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
          "id": "bb702d0aea308e41030c0e769b20fbc7c3fa597c",
          "message": "for some reason envsubst uses longform options with a single dash. Why? (#796)\n\nI introduced a bug when adding the `--no-unset` and `--no-empty`\nenvsubst options. Turns out, they are called `-no-unset` and `-no-empty`",
          "timestamp": "2025-07-02T13:19:28Z",
          "tree_id": "ad0d99f8dac3a0609dc22d77e7642e159224047a",
          "url": "https://github.com/hasura/ndc-postgres/commit/bb702d0aea308e41030c0e769b20fbc7c3fa597c"
        },
        "date": 1751462760004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.847773500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.804136899999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.65714440626487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.738114652670639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0357855411311411,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.162371,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.6133515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.06456228054627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0743802136370704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.051283087149246856,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.7004115,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.25574774999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.605527617501018,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.3723160107224,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03966194802859016,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.751478500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.26914619999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.37182651619439,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9971201033579966,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038376420774646744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.8256225,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.923890899999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.065972728990797,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.743355567039007,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03588786052166933,
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
          "id": "e40fc70c039f6ae79d85d87439a6cb81147d48ed",
          "message": "seems envsubst options differ depending on platform? (#797)\n\nI give up. Removing `-no-unset` and `-no-empty`",
          "timestamp": "2025-07-02T14:38:49Z",
          "tree_id": "8781e8cac47d0af4ac68332bc0635e71c36011c4",
          "url": "https://github.com/hasura/ndc-postgres/commit/e40fc70c039f6ae79d85d87439a6cb81147d48ed"
        },
        "date": 1751467531429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.167797,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.046097899999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.070546216434447,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.921879606081625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.032376926183811515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.2682435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.67657874999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.60509180419595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.114113473843375,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05292436820860409,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.689799,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.22699379999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.994281619931716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.845512069799366,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03840601908323857,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 35.853846,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.18136899999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.108386438671758,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7697754788349727,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03428289282321682,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.759057999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 53.77611125,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.87757404770999,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.0067136281703206,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.033313160589621776,
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
          "id": "0e4091024cc91edd25f50df4bbb0ca97adc8079a",
          "message": "fix extension of cli plugin url: we use gnu! Not musl! (#798)\n\nFix two bugs in ci:\n- was missing reference to connector tests in connector packaging\n- url for linux distributions was wrong! We use gnu not musl\n- that bug also affected ability to get sha sum",
          "timestamp": "2025-07-02T17:19:23Z",
          "tree_id": "c08ef8372166a5d236074887d52e8eaedcbf8f92",
          "url": "https://github.com/hasura/ndc-postgres/commit/0e4091024cc91edd25f50df4bbb0ca97adc8079a"
        },
        "date": 1751477162372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.8205315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.72797979999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.85879825764814,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.5583299745457495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03888101316926864,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.08639,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.862234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.86858543036586,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.206389455286235,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05577670992072656,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.884004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.332477,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.32890098042588,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.718606177981734,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04165110358296665,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.4476635,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.039895,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.25653584215562,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.874351998208951,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03671909348856443,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.6397595,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.77775164999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.891926887035748,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.661552212609731,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03616038292354248,
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
          "id": "e8212a0928990f62cb8cac451fe26e0d0afe51a3",
          "message": "Revert CI product to match previous behavior (#799)\n\nwe've overhauled CI to automate the release process.\n\nAlong the way, I decided to inline the manifest to the connector\ndefinition, because using cli-plugins-index for that purpose is now\ndeprecated.\n\nThis PR changes the overhauled CI to produce the exact same output as we\ndid before, specifically:\n- the cli plugin information is no longer in the connector metadata\n- the connector definition archive name reverts to `package.tar.gz`\n- we add another script to generate a PR on the cli plugins index repo",
          "timestamp": "2025-07-02T22:46:03Z",
          "tree_id": "d5a4ba915bc1d8faf6d93ec7183e4c3884505ad2",
          "url": "https://github.com/hasura/ndc-postgres/commit/e8212a0928990f62cb8cac451fe26e0d0afe51a3"
        },
        "date": 1751496750689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.132591,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.04923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.243061810388635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.020336332784691,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03964504203935071,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.76609,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.07308049999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.90369111566517,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2874080659019427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.06007940631376018,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 44.364064,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.032569,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.02143187975907,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.212582292968605,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04440393912088284,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.390091,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.36783535,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.24514144026135,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7631931032748582,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03702239711197138,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.680603500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.56625189999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.86425164789339,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.7884191087921337,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03993304629226057,
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
          "id": "b99d41f9b7548c8fbf79bbc153fc880ce17bab11",
          "message": "fix artifact file name (#800)\n\nfix the name of the artifact to upload",
          "timestamp": "2025-07-02T23:31:21Z",
          "tree_id": "ea05527c9d60f27f8cb8f8987083f5b4ebe9840c",
          "url": "https://github.com/hasura/ndc-postgres/commit/b99d41f9b7548c8fbf79bbc153fc880ce17bab11"
        },
        "date": 1751499472084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.6896215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.69429654999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.664765109175283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.747667322700162,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03328432849994058,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.347984,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.99619100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.842045213978544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4434460729644556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05763729233478398,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.365669999999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.04079695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.295665931826257,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.259299185797808,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04145581751917903,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.000755,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.111255999999976,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.748838612109687,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.973644889946712,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03650919907597031,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.220999500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 60.22559639999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.62136406761866,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.797667201119065,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.037429714781749515,
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
          "id": "f2c2a5295770e6039fd0a4e6efc91ea5883fd3e6",
          "message": "add exec permissions to new script (#801)\n\nadd exec permissions to new script",
          "timestamp": "2025-07-02T23:57:44Z",
          "tree_id": "52a84651ff8a9ea3875becee75924e5ee50f515b",
          "url": "https://github.com/hasura/ndc-postgres/commit/f2c2a5295770e6039fd0a4e6efc91ea5883fd3e6"
        },
        "date": 1751501055775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.287723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.979209549999986,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.289038053831762,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.803314505483817,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03402526587779001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.144293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.06924569999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.94996828609679,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.049691005154159,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05108224753974162,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.0930435,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.43913404999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.301817506218846,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.878975341002011,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03964331251638775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.668545,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.8812884,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.892786900398693,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.39575527999056,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03491331529443193,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.9924585,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.350280149999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.52058547585969,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4905298768573587,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03559468624758522,
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
          "id": "e654dd3dc823afb8fff4bd4a2add8e8bf9a3b45e",
          "message": "we cannot use cli-plugins-index with v2 (#802)\n\nWe tried reverting to using cli-plugins index, which was the previous\nbehavior, in case that fixed our CI issues.\n\nTurns out that is not allowed. This PR reverts that change.",
          "timestamp": "2025-07-03T01:33:06Z",
          "tree_id": "1558e647408faefa9e113d8ef9b5e77c58030a46",
          "url": "https://github.com/hasura/ndc-postgres/commit/e654dd3dc823afb8fff4bd4a2add8e8bf9a3b45e"
        },
        "date": 1751506758350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.3199355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.92783599999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.117456510571621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.789956726287198,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03757435906903387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.238036,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.34420409999993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.15057276386614,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.324801457855017,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.059970404849595635,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.097155,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 65.9297201,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.4474761783643,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.323871685958462,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04338850564574414,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.373459499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.41628575,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.582273524486403,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6253688449594605,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038510690954032485,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.241723,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.7998884,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.88919995683334,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.003706632355886,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03773218182862948,
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
          "id": "f1d364c7e9d5ce0223094a5e5b3a6b5893049f29",
          "message": "update aliased connectors in hub PR (#803)\n\nWhen creating the hub pr, we update the metadata.json file for postgres.\n\nTurns out, postgres is aliased to a bunch of other names, and these all\nhave their own metadata file.\n\nThis PR updates the script that creates the hub PR, to also update these\nadditional metadata files",
          "timestamp": "2025-07-03T09:28:33Z",
          "tree_id": "14c943c54f7d0a49a56b83c5850e063b325b2751",
          "url": "https://github.com/hasura/ndc-postgres/commit/f1d364c7e9d5ce0223094a5e5b3a6b5893049f29"
        },
        "date": 1751535281575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.257375500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.21792904999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.738679810529053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.31262851954645,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03290914858175732,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.007052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.57458989999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.43050627578125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.028455397108921,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05343184139740547,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.53031,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.77317244999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.057444268181435,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.190487143626818,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04134509970472934,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.664898,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.82590654999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.49868386969642,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.765693911892221,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03473310874120161,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.650212,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.585730199999986,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.994122600426124,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8109570110216637,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03566926709279988,
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
          "id": "476b5ea5d70b907eb400e0ec4156ea2b170250f0",
          "message": "Fix auto update multitenant script (#804)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\nCo-authored-by: Benoit Ranque <benoit@hasura.io>",
          "timestamp": "2025-07-04T15:32:57Z",
          "tree_id": "c9f7dcc3aace5fa42faeb9769d050b782c056bf2",
          "url": "https://github.com/hasura/ndc-postgres/commit/476b5ea5d70b907eb400e0ec4156ea2b170250f0"
        },
        "date": 1751643583685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.221893,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.4040165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.659008500691098,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.492639865756324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03391068267297838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.473587,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.7751996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.149999012509134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2895200138081648,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.052465075535183536,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.469410499999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.77256015,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.103921998853195,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.612911458009982,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03853695377570572,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.837914,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.85067139999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.536984394156633,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.299844885834194,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03434538428705714,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.290492,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.38181964999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.950407464447547,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.171214940080194,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038632986509614116,
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
          "id": "17f063a35829b49ae8b13fe90f67dece3bcec27e",
          "message": "Fix jsonschema (#805)\n\nUsing `#[serde(rename=\"camelCase\")] on an enum renames the enum tag, not\nthe enum fields.\nFor that, we have `rename_all_fields`.\n\nTurns out, that is not supported by schemars 0.8, which is the version\nused by ndc models.\n\nSo, this PR users `#[serde(rename)]` on the individual fields.",
          "timestamp": "2025-07-07T13:03:54Z",
          "tree_id": "b4beaeba6a544a463c93f7e1958de421360c7f26",
          "url": "https://github.com/hasura/ndc-postgres/commit/17f063a35829b49ae8b13fe90f67dece3bcec27e"
        },
        "date": 1751893821000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.765376500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.946479499999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.112101489561876,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.578661428924793,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03493854424759877,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.3979885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.80559524999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.00753878956569,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.224731974115592,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.053964307045971494,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.624879,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.1136437,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.76714289875447,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.1758199614768685,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03934691570261121,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.230714,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.64267659999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.768345724918312,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9175659129376186,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03533286606035423,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.111684999999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.39063499999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.82456999900121,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.285170437466256,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03734338365216179,
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
          "id": "acd0838c41b56e46b4d426c61523cb857487f261",
          "message": "chore(deps): Bump indexmap from 2.9.0 to 2.10.0 (#781)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.9.0 to\n2.10.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.10.0 (2025-06-26)</h2>\n<ul>\n<li>Added <code>extract_if</code> methods to <code>IndexMap</code> and\n<code>IndexSet</code>, similar to the\nmethods for <code>HashMap</code> and <code>HashSet</code> with ranges\nlike <code>Vec::extract_if</code>.</li>\n<li>Added more <code>#[track_caller]</code> annotations to functions\nthat may panic.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/91dbcc55d2b6be52b7f99929aebb7204a6576189\"><code>91dbcc5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/399\">#399</a>\nfrom cuviper/release-2.10.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/67a5a712fcb667aa7b11e9b19a33fad764ae712c\"><code>67a5a71</code></a>\nRelease 2.10.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/37e519a3be8666e251d96156baeb230a80f9ad1f\"><code>37e519a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/308\">#308</a>\nfrom cuviper/extract_if</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4d7618fbc919be41dd0307075ae7fc2df58ea746\"><code>4d7618f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/398\">#398</a>\nfrom cuviper/bench-deps</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/68201eb0a389f6f96cafd7b3f887e013557be041\"><code>68201eb</code></a>\nDrop lazy_static for LazyLock</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/eaaaa56e717e19d6904645927a771abbeb9ae257\"><code>eaaaa56</code></a>\nSwitch to fastrand for bench shuffling</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b19d84edafdb50a7207e2ce237f39f11092409fb\"><code>b19d84e</code></a>\nFix <code>clippy::needless_lifetimes</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4f62778c866ac27c7e460fec78163188c8fb8e5f\"><code>4f62778</code></a>\n<code>impl FusedIterator for ExtractIf</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e09eaaf8e547ec56e564980b20f62b7c4d459fdd\"><code>e09eaaf</code></a>\nDocument and track <code>extract_if</code> panics</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/a8d7dc50a250971fe2203bdf23c2b5a307db7c86\"><code>a8d7dc5</code></a>\nAdd range support to <code>extract_if</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.9.0...2.10.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.9.0&new-version=2.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-08T07:40:04Z",
          "tree_id": "415c03d744d88055eebcc297f18ef6bd707cf1ec",
          "url": "https://github.com/hasura/ndc-postgres/commit/acd0838c41b56e46b4d426c61523cb857487f261"
        },
        "date": 1751960914751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.674676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.88405400000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.865744714015953,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.383215442215299,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.034361482476899914,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.84637950000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.093345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.54733011621909,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2257769368732028,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.050848192365084074,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.928568999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.6420279,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.94736458695659,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.810657265950788,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03982152956014713,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.694898,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.053881199999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.925038167662926,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.787585738561372,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035978099792981284,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.9024735,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.48865419999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.779763854505482,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.92356643092225,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03488117462396762,
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
          "id": "c1cd0c1043b21dd3ae0b329467e2907a897dd129",
          "message": "Update SDK (#813)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate to `ndc-sdk-rs` `0.8.0` so we output connector name and version\nin traces.",
          "timestamp": "2025-07-17T14:14:43Z",
          "tree_id": "297c47ceac2d21fbfec45df70ce851d70d244648",
          "url": "https://github.com/hasura/ndc-postgres/commit/c1cd0c1043b21dd3ae0b329467e2907a897dd129"
        },
        "date": 1752762170853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.5743105,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.99582874999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.520637295399487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.685350998336636,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03513481994680077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.306699,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.59231719999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.86885448269695,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1138494073355503,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05401357484285764,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.196467999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.21654645,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.857752476847235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.557232126914808,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039535609091120916,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.96928,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.542699799999966,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.970251620693627,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6076462336449175,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03623923798540257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.957973,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.570745,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.894715764235155,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.826329111376385,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03780039493921968,
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
          "id": "0c6fab3b117bd10af11e81af0344f2a8ad8ac801",
          "message": "Upgrade Rustc to 1.88.0 (#818)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nNew version comes with a bunch of useful lints for detecting enums with\nlarge size discrepencies, upgrade and fix the suggestions.",
          "timestamp": "2025-08-01T12:00:16Z",
          "tree_id": "058a5aaa57768427c2befdb46d3c96bfd679278d",
          "url": "https://github.com/hasura/ndc-postgres/commit/0c6fab3b117bd10af11e81af0344f2a8ad8ac801"
        },
        "date": 1754050298240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.468087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.885472249999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.43060165897531,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.773457818821832,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03476215991722311,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.6887585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.86341904999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.233984044612484,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3694631161958597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05111291902122617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.073654,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.03298740000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.022365564033805,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.540471249550222,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04160183975066076,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.7266525,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.23288319999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.708518538533312,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6854671370196534,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03414776790798836,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.939274,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.600456799999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.341957040818617,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.2582947963596283,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03391204508550504,
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
          "id": "f105844af281f647f11545e8b88c3220493a93f5",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.2.0 to 2.3.0 (#808)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.2.0 to 2.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.3.0</h2>\n<h2>Release Summary</h2>\n<p><strong>Features</strong> – configurable service log level and\nstreamlined dependency-upgrade helpers.\n<strong>CI</strong> – new <em>Release new action version</em> workflow\nplus Docker Compose added to the update matrix.\n<strong>Dependencies</strong> – major refresh: Docker Compose 1.2.0,\n<code>@​octokit/action</code> 8.0.2, <code>@​actions/github</code>\n6.0.1, multiple Hoverkraft CI templates, and\nactions/create-github-app-token 2.x for improved GitHub API support.\n<strong>Docs</strong> – action and workflow guides updated to reflect\nthe new processes.</p>\n<p>No breaking changes were detected.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>ci: add Release new action version workflow by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/124\">hoverkraft-tech/compose-action#124</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.16.1 to\n0.17.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/126\">hoverkraft-tech/compose-action#126</a></li>\n<li>chore(deps): bump docker-compose from 1.1.0 to 1.1.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/127\">hoverkraft-tech/compose-action#127</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.0 to 7.0.1\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/128\">hoverkraft-tech/compose-action#128</a></li>\n<li>ci: add docker-compose to dependencies update by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/129\">hoverkraft-tech/compose-action#129</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.8.0 to\n0.8.1 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/130\">hoverkraft-tech/compose-action#130</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/132\">hoverkraft-tech/compose-action#132</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/133\">hoverkraft-tech/compose-action#133</a></li>\n<li>chore(deps): bump docker-compose from 1.1.1 to 1.2.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/131\">hoverkraft-tech/compose-action#131</a></li>\n<li>feat: upgrade dependencies by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/135\">hoverkraft-tech/compose-action#135</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/137\">hoverkraft-tech/compose-action#137</a></li>\n<li>chore(deps): bump actions/create-github-app-token from 1.12.0 to\n2.0.2 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/140\">hoverkraft-tech/compose-action#140</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.1 to 7.0.2\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/142\">hoverkraft-tech/compose-action#142</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.22.0 to\n0.22.2 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/143\">hoverkraft-tech/compose-action#143</a></li>\n<li>chore(deps): bump the github-actions-dependencies group across 1\ndirectory with 3 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/145\">hoverkraft-tech/compose-action#145</a></li>\n<li>chore(deps): bump actions/create-github-app-token from 2.0.3 to\n2.0.6 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/148\">hoverkraft-tech/compose-action#148</a></li>\n<li>chore(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin the actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/147\">hoverkraft-tech/compose-action#147</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.2 to 8.0.1\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/152\">hoverkraft-tech/compose-action#152</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.11.0 to\n0.12.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/155\">hoverkraft-tech/compose-action#155</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 8.0.1 to 8.0.2\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/154\">hoverkraft-tech/compose-action#154</a></li>\n<li>feat: upgrade dependencies by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/157\">hoverkraft-tech/compose-action#157</a></li>\n<li>feat: make service log level configurable by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/159\">hoverkraft-tech/compose-action#159</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/161\">hoverkraft-tech/compose-action#161</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/162\">hoverkraft-tech/compose-action#162</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.22.3 to\n0.23.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/163\">hoverkraft-tech/compose-action#163</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.3.0\">https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.3.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/40041ff1b97dbf152cd2361138c2b03fa29139df\"><code>40041ff</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/59a51a1b9c95890b0e28dbfed9a4c62842b0cd77\"><code>59a51a1</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/2daef55cd7e9fa27142cbed182ef685004c591a8\"><code>2daef55</code></a>\nchore: branding cleaning</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/4e1d048b27aa3ce52ac091c9005932c184221477\"><code>4e1d048</code></a>\ndocs: add example for multiple compose files in README</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/d885714cc10edb1a2f77b9f9d437903a5c5cbfae\"><code>d885714</code></a>\ndocs: add example for multiple compose files</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/329c851e918cb13ac750af7c414ff1d9acb0f4e1\"><code>329c851</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/213193f269844e56af378ee2cf0924283a5d47d2\"><code>213193f</code></a>\nfix: add missing input in action manifest</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/7098fdc4f5207838e697c6710308c28c3086fb86\"><code>7098fdc</code></a>\nfeat: make service log level configurable</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/a035f13e41dfd4947207a6d0c4c4a84605df69c1\"><code>a035f13</code></a>\nfeat: upgrade dependencies</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ad8e0e414a8244c238d7071359bbf04d1e50cd79\"><code>ad8e0e4</code></a>\nchore(deps): bump <code>@​octokit/action</code> from 8.0.1 to 8.0.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.2.0...v2.3.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.2.0&new-version=2.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T12:18:14Z",
          "tree_id": "917115113f9c299cf2d0ce0a6d6e2003c3139166",
          "url": "https://github.com/hasura/ndc-postgres/commit/f105844af281f647f11545e8b88c3220493a93f5"
        },
        "date": 1754051370284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.490551500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.205522599999966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.561626961111621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.81105853386142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03496983802034193,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.202264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.80541049999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.173015749714196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0921405330826275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.053624016188911806,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.455481,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.9847908,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.234095821250296,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.08754216855387,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0407978851145156,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.512615,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.635200499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.83446621916201,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.506367162368285,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036041098066630486,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.342557,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.444389199999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.02985209957005,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.254169067314617,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03557077809801831,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brandon@codedmart.com",
            "name": "Brandon Martin",
            "username": "codedmart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6992078f7f4987320955a724497b20cf54d29969",
          "message": "Fix stack overflow in OR expression processing and add OR-to-IN optimization (#817)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\nThis PR addresses a critical stack overflow issue that occurs when\nprocessing large OR expressions in query predicates. The current\nimplementation creates deeply nested left-heavy expression trees that\ncan exhaust the thread stack, causing runtime crashes with errors like:\n```\nthread 'tokio-runtime-worker' has overflowed its stack\nfatal runtime error: stack overflow\n```\nAdditionally, this PR introduces an optimization that converts multiple\nOR expressions with equality comparisons on the same column into more\nefficient IN operations.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n#### Stack Overflow Fix:\n\n* Replaced the try_fold approach in OR/AND expression processing with\nbalanced binary tree construction\n* Added fold_or_balanced() and fold_and_balanced() helper functions that\ncreate balanced trees instead of left-heavy chains\n* This prevents deep recursion during SQL generation and evaluation\n\n#### OR-to-IN Optimization:\n\n* Added try_optimize_or_to_in() function that detects patterns like:\n```\n-- Before: \ncolumn = 'value1' OR column = 'value2' OR column = 'value3'\n\n-- After:\ncolumn IN ('value1', 'value2', 'value3')\n```\n* The optimization runs before standard OR processing and only applies\nwhen:\n  * All expressions are binary equality comparisons (_eq)\n  * All comparisons target the same column\n  * All values are scalar (not column references)\n  * There are at least 2 values to optimize\n\n#### Implementation Details:\n\n* Modified translate_expression_with_joins() in filtering.rs to use\nbalanced tree construction\n* Added optimization check at the beginning of OR expression processing\n* Leveraged existing IN operator infrastructure for the optimized\nexpressions\n* Maintained backward compatibility - non-optimizable OR expressions\nfall back to the improved balanced tree approach\n\nThis change significantly improves performance for queries with large OR\npredicates while preventing stack overflow crashes entirely.\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-08-01T13:12:08Z",
          "tree_id": "9b35148d0a06240a4779812a246c89b980d862c3",
          "url": "https://github.com/hasura/ndc-postgres/commit/6992078f7f4987320955a724497b20cf54d29969"
        },
        "date": 1754054588673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.298129,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.703197,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.32474993518586,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.737657802609274,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0359422989605022,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.6234015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.7452842,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.498504606924705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3280281760285462,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05753215329490128,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.450424,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.35785224999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.713719850593886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.920033814546269,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03798342119351138,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.0074735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.31463479999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.36532421898099,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.053256783510083,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.0369593369493744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.627241,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.1915852,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.11548150652799,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.23546928207201,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.0360367119971219,
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
          "id": "dedc6c241a302e82d883439a2762e3190bec98d8",
          "message": "chore(deps): Bump serde_json from 1.0.140 to 1.0.141 (#816)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.140 to\n1.0.141.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.141</h2>\n<ul>\n<li>Optimize string escaping during serialization (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1273\">#1273</a>,\nthanks <a\nhref=\"https://github.com/conradludgate\"><code>@​conradludgate</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6843c3660ec3394b15da016902e001f8381dfe92\"><code>6843c36</code></a>\nRelease 1.0.141</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6e2c21063a477122dd5dd4a55a6d8494e6bc7921\"><code>6e2c210</code></a>\nTouch up PR 1273</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/623d9b47cfc1f3e1a596f31ef9e56c6aa249b1b6\"><code>623d9b4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1273\">#1273</a>\nfrom conradludgate/optimise-string-escaping</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/de70b7db1fe8783a6e18fe997470a550c376abb0\"><code>de70b7d</code></a>\nuse unreachable_unchecked for escape table. use a second match to\nroundtrip E...</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f2d940dd54d82235eb6f5b276f03eaeba058f06c\"><code>f2d940d</code></a>\nreplace start index with bytes slice reference</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/cd55b5a0ff5f88f1aeb7a77c1befc9ddb3205201\"><code>cd55b5a</code></a>\nIgnore mismatched_lifetime_syntaxes lint</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c1826ebcccb1a520389c6b78ad3da15db279220d\"><code>c1826eb</code></a>\nPin nightly toolchain used for miri job</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8a56cfa6d0a93c39ee4ef07d431de0748eed9028\"><code>8a56cfa</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1248\">#1248</a>\nfrom jimmycathy/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/af3d80de56bc9bb06def76badbd0ef1abd43ca7c\"><code>af3d80d</code></a>\nchore: fix typo</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.140...v1.0.141\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.140&new-version=1.0.141)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T13:15:48Z",
          "tree_id": "d2debf20dc52c713583b9ffc95830709d985b655",
          "url": "https://github.com/hasura/ndc-postgres/commit/dedc6c241a302e82d883439a2762e3190bec98d8"
        },
        "date": 1754055206554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.134956,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.486038400000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.90520521131951,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.6810788893546675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03763202898028173,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.082297,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.320271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.23858538026784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.321639725475059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05944922340638806,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.1539885,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.25354300000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.178345168497245,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.7139392638657895,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04323470108002929,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.914512,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.08652399999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.15182786644967,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.414673892054477,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.04277753976798581,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.895403,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.2780804,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.564337194347537,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9782201093606844,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.04131016560456003,
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
          "id": "d0cd20db82d0a8990d1a9cd26e5736de13ebfcf3",
          "message": "chore(deps): Bump tokio from 1.45.1 to 1.46.1 (#807)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.45.1 to 1.46.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.46.1</h2>\n<h1>1.46.1 (July 4th, 2025)</h1>\n<p>This release fixes incorrect spawn locations in runtime task hooks\nfor tasks spawned using <code>tokio::spawn</code> rather than\n<code>Runtime::spawn</code>. This issue only effected the spawn location\nin <code>TaskMeta::spawned_at</code>, and did not effect task locations\nin Tracing events.</p>\n<h2>Unstable</h2>\n<ul>\n<li>runtime: add <code>TaskMeta::spawn_location</code> tracking where a\ntask was spawned (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7440\">tokio-rs/tokio#7440</a></p>\n<h2>Tokio v1.46.0</h2>\n<h1>1.46.0 (July 2nd, 2025)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>net: fixed <code>TcpStream::shutdown</code> incorrectly returning an\nerror on macOS (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7290\">#7290</a>)</li>\n</ul>\n<h2>Added</h2>\n<ul>\n<li>sync: <code>mpsc::OwnedPermit::{same_channel,\nsame_channel_as_sender}</code> methods (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7389\">#7389</a>)</li>\n<li>macros: <code>biased</code> option for <code>join!</code> and\n<code>try_join!</code>, similar to <code>select!</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7307\">#7307</a>)</li>\n<li>net: support for cygwin (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7393\">#7393</a>)</li>\n<li>net: support <code>pope::OpenOptions::read_write</code> on Android\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7426\">#7426</a>)</li>\n<li>net: add <code>Clone</code> implementation for\n<code>net::unix::SocketAddr</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7422\">#7422</a>)</li>\n</ul>\n<h2>Changed</h2>\n<ul>\n<li>runtime: eliminate unnecessary lfence while operating on\n<code>queue::Local&lt;T&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7340\">#7340</a>)</li>\n<li>task: disallow blocking in <code>LocalSet::{poll,drop}</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7372\">#7372</a>)</li>\n</ul>\n<h2>Unstable</h2>\n<ul>\n<li>runtime: add <code>TaskMeta::spawn_location</code> tracking where a\ntask was spawned (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7417\">#7417</a>)</li>\n<li>runtime: removed borrow from <code>LocalOptions</code> parameter to\n<code>runtime::Builder::build_local</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7346\">#7346</a>)</li>\n</ul>\n<h2>Documented</h2>\n<ul>\n<li>io: clarify behavior of seeking when <code>start_seek</code> is not\nused (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7366\">#7366</a>)</li>\n<li>io: document cancellation safety of\n<code>AsyncWriteExt::flush</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7364\">#7364</a>)</li>\n<li>net: fix docs for <code>recv_buffer_size</code> method (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7336\">#7336</a>)</li>\n<li>net: fix broken link of <code>RawFd</code> in <code>TcpSocket</code>\ndocs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7416\">#7416</a>)</li>\n<li>net: update <code>AsRawFd</code> doc link to current Rust stdlib\nlocation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7429\">#7429</a>)</li>\n<li>readme: fix double period in reactor description (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7363\">#7363</a>)</li>\n<li>runtime: add doc note that <code>on_*_task_poll</code> is unstable\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7311\">#7311</a>)</li>\n<li>sync: update broadcast docs on allocation failure (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7352\">#7352</a>)</li>\n<li>time: add a missing panic scenario of <code>time::advance</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7394\">#7394</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7290\">#7290</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7290\">tokio-rs/tokio#7290</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7307\">#7307</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7307\">tokio-rs/tokio#7307</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ab3ff69cf2258a8c696b2dca89a2cef4ff114c1c\"><code>ab3ff69</code></a>\nchore: prepare to release v1.46.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7444\">#7444</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a0d5b8ab308bbeaa8090d411550d6c887d699096\"><code>a0d5b8a</code></a>\nruntime(unstable): fix task hook spawn locations for\n<code>tokio::spawn</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a1ee3ef218894f2441b5719812ab218ae0539c8d\"><code>a1ee3ef</code></a>\nchore: fix some minor typos in the comments (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7442\">#7442</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/171cd148a37da40dcbb8b06bf2c67634b2ba1f87\"><code>171cd14</code></a>\nchangelog: fix typo in <code>pipe::OpenOptions</code> for 1.46.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7439\">#7439</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3f1f268583a16c11560f8e310d5a35e9aa55b547\"><code>3f1f268</code></a>\nchore: prepare Tokio v1.46.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7437\">#7437</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3e890cc0171ddb210acdcfec831b7c7bcbb0d2d9\"><code>3e890cc</code></a>\nrt(unstable): add spawn <code>Location</code> to <code>TaskMeta</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7417\">#7417</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/69290a64327a017fd9a0cedefaac60c4993c3b54\"><code>69290a6</code></a>\nnet: derive <code>Clone</code> for <code>net::unix::SocketAddr</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7422\">#7422</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e2b175848b2cb25e99cd3a0486e506f889379db5\"><code>e2b1758</code></a>\nfuzz: cfg fuzz tests under cfg(test) (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7428\">#7428</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/b7a75b5be349aab2cee9b224c0610d7cf4fea73e\"><code>b7a75b5</code></a>\nnet: update <code>AsRawFd</code> doc link to current Rust stdlib\nlocation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7429\">#7429</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/6b705b3053d2c777e05cb60c758202ff9d4b2e7d\"><code>6b705b3</code></a>\nnet: allow <code>pipe::OpenOptions::read_write</code> on Android (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7426\">#7426</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.45.1...tokio-1.46.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.45.1&new-version=1.46.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T13:16:07Z",
          "tree_id": "2e7dbbd8e74166e36e0bc1201a4dc71f2cdf0da4",
          "url": "https://github.com/hasura/ndc-postgres/commit/d0cd20db82d0a8990d1a9cd26e5736de13ebfcf3"
        },
        "date": 1754055326667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.536143,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.112096,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.596319865666791,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.498779481956499,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03346773942433043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.998911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.502888,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.22409434801735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3097319383962613,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05905549961568072,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.937205,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.0532492,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.154579184752816,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.890956897563381,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04234660165430449,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.7836725,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.421990749999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.730477786970074,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.8319992485549115,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036471521676250805,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.587864,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.7526786,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.825951201554485,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.448376931667713,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038780482733436324,
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
          "id": "5ea4370a7ed4bb68a0136bf73447b0c92c0db5cc",
          "message": "Changelog for v3.1.0 (#819)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate version and changelog",
          "timestamp": "2025-08-01T13:43:03Z",
          "tree_id": "e4aab10a5dfa9e3fb06fac2e5875973a80d594de",
          "url": "https://github.com/hasura/ndc-postgres/commit/5ea4370a7ed4bb68a0136bf73447b0c92c0db5cc"
        },
        "date": 1754056865534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.858121,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.14420679999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.397756299485213,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.26890134971978,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03312196099752373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.379751,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.35097259999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.335038336499366,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2082496811027141,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04942049923623182,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.374712,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.0883379,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.60118828885508,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.26011675313686,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03848920901079543,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.4076515,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.198013,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.938200413202228,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.086130564013001,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03388254775990548,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.086981,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 52.93776379999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.94951142662097,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 2.949417174766406,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03509315731211115,
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
          "id": "3233c41d5e3aab7602f966f9a4c5dea320065527",
          "message": "chore(deps): Bump actions/checkout from 4 to 5 (#823)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-12T08:31:43Z",
          "tree_id": "22ead74f0791ea666fbf6eac75fc806546552cab",
          "url": "https://github.com/hasura/ndc-postgres/commit/3233c41d5e3aab7602f966f9a4c5dea320065527"
        },
        "date": 1754988187690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.936211999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.36907759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.505718457954218,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.290971222314317,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03404820852868717,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.088507,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.9519445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.50609790823696,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.091687451604649,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.049402147270691366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.619689,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.52781240000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.283870291343963,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.553462716053229,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.041628793961212524,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.687028,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.090846199999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.902563521437106,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.314081425057445,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03617715139869243,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.586663,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.5246314,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.43822612464679,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.3514299724717205,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03432094369618939,
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
          "id": "241d89f9e922408f917e69edc0f17bd1d1f9d315",
          "message": "chore(deps): Bump clap from 4.5.41 to 4.5.43 (#825)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.41 to 4.5.43.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.43</h2>\n<h2>[4.5.43] - 2025-08-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> In long help, list Possible Values before defaults,\nrather than after, for a more consistent look</li>\n</ul>\n<h2>v4.5.42</h2>\n<h2>[4.5.42] - 2025-07-30</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Include subcommand visible long aliases in <code>--help</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.43] - 2025-08-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> In long help, list Possible Values before defaults,\nrather than after, for a more consistent look</li>\n</ul>\n<h2>[4.5.42] - 2025-07-30</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Include subcommand visible long aliases in <code>--help</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c4105bd90c314ac21dd9e008de8b88ab0175fdf7\"><code>c4105bd</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a029b20be631aab1d3a963872df2158b97f61427\"><code>a029b20</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cf15d48b59cf39cafc3e3797dec293edaf9cf533\"><code>cf15d48</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5893\">#5893</a>\nfrom 8LWXpg/patch-2</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7e54542de972c4af98d3035377dcde83c5a5734e\"><code>7e54542</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5892\">#5892</a>\nfrom 8LWXpg/patch-1</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6ffc88f8c97be82e71d5d6101c98e1042708ab69\"><code>6ffc88f</code></a>\nfix(complete): Check if help string is empty</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7d8470ed9cf1d5503482938cea62f8f363579f12\"><code>7d8470e</code></a>\nfix(complete): Fix single quote escaping in PowerShell</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/eadcc8f66c128272ea309fed3d53d45b9c700b6f\"><code>eadcc8f</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7ce0f7bea34011ca888a762bdd95d2371006c97a\"><code>7ce0f7b</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fea7c5487bb602a9b7151c40069afc6f34bda442\"><code>fea7c54</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5888\">#5888</a>\nfrom epage/tut</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c297ddd56e2601d9d1b0a0ba13a9086e8f3ac43c\"><code>c297ddd</code></a>\ndocs(tutorial): Experiment with a flat layout</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.41...clap_complete-v4.5.43\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.41&new-version=4.5.43)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-12T08:31:53Z",
          "tree_id": "686382e56c0e69cdb96768dd7eae6d7645d533cd",
          "url": "https://github.com/hasura/ndc-postgres/commit/241d89f9e922408f917e69edc0f17bd1d1f9d315"
        },
        "date": 1754988607863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.9875705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.98459035,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.429085404442453,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.028781983039014,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03778138157709684,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.15016349999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.81187915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.19156731141875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3203872664357448,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.056315414256004157,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.650682,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.398917,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.375253443412866,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.15011602006242,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04878385806801912,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.676274,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.6337104,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.783811574462117,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9350863705642496,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03918501282959318,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.315405999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.81470775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.69833973304189,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.27605025321035,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.04103551398411723,
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
          "id": "563fc25cb47c4c66bcbf0d767f2a63a4e12997f2",
          "message": "chore(deps): Bump actions/download-artifact from 4 to 5 (#826)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/407\">actions/download-artifact#407</a></li>\n<li>BREAKING fix: inconsistent path behavior for single artifact\ndownloads by ID by <a\nhref=\"https://github.com/GrantBirki\"><code>@​GrantBirki</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/416\">actions/download-artifact#416</a></li>\n</ul>\n<h2>v5.0.0</h2>\n<h3>🚨 Breaking Change</h3>\n<p>This release fixes an inconsistency in path behavior for single\nartifact downloads by ID. <strong>If you're downloading single artifacts\nby ID, the output path may change.</strong></p>\n<h4>What Changed</h4>\n<p>Previously, <strong>single artifact downloads</strong> behaved\ndifferently depending on how you specified the artifact:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (direct)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/my-artifact/</code> (nested)</li>\n</ul>\n<p>Now both methods are consistent:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (unchanged)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/</code> (fixed - now direct)</li>\n</ul>\n<h4>Migration Guide</h4>\n<h5>✅ No Action Needed If:</h5>\n<ul>\n<li>You download artifacts by <strong>name</strong></li>\n<li>You download <strong>multiple</strong> artifacts by ID</li>\n<li>You already use <code>merge-multiple: true</code> as a\nworkaround</li>\n</ul>\n<h5>⚠️ Action Required If:</h5>\n<p>You download <strong>single artifacts by ID</strong> and your\nworkflows expect the nested directory structure.</p>\n<p><strong>Before v5 (nested structure):</strong></p>\n<pre lang=\"yaml\"><code>- uses: actions/download-artifact@v4\n  with:\n    artifact-ids: 12345\n    path: dist\n# Files were in: dist/my-artifact/\n</code></pre>\n<blockquote>\n<p>Where <code>my-artifact</code> is the name of the artifact you\npreviously uploaded</p>\n</blockquote>\n<p><strong>To maintain old behavior (if needed):</strong></p>\n<pre lang=\"yaml\"><code>&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/634f93cb2916e3fdff6788551b99b062d0335ce0\"><code>634f93c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/416\">#416</a>\nfrom actions/single-artifact-id-download-path</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b19ff4302770b82aa4694b63703b547756dacce6\"><code>b19ff43</code></a>\nrefactor: resolve download path correctly in artifact download tests\n(mainly ...</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e262cbee4ab8c473c61c59a81ad8e9dc760e90db\"><code>e262cbe</code></a>\nbundle dist</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bff23f9308ceb2f06d673043ea6311519be6a87b\"><code>bff23f9</code></a>\nupdate docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fff8c148a8fdd56aa81fcb019f0b5f6c65700c4d\"><code>fff8c14</code></a>\nfix download path logic when downloading a single artifact by id</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/448e3f862ab3ef47aa50ff917776823c9946035b\"><code>448e3f8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/407\">#407</a>\nfrom actions/nebuk89-patch-1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/47225c44b359a5155efdbbbc352041b3e249fb1b\"><code>47225c4</code></a>\nUpdate README.md</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-18T19:41:11Z",
          "tree_id": "b31e3831bacea1486f46f3f513f3f61f47a696de",
          "url": "https://github.com/hasura/ndc-postgres/commit/563fc25cb47c4c66bcbf0d767f2a63a4e12997f2"
        },
        "date": 1755546801105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.37145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.23601829999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.810377576446514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.106016122549997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03912011681017122,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.815478,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.38691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.51299630616037,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.204509675778091,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05285409855103839,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.351546,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.00229889999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.551352495516475,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.132550691594297,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04194738049408101,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.582959,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.16879139999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.67871627647453,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.4164692450912675,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03608382034331674,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.6228555,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.147199949999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.619050460310188,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.052916162164191,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.036468405902521754,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}