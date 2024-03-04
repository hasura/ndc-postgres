window.BENCHMARK_DATA = {
  "lastUpdate": 1709561184759,
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
          "id": "ca3875232b901bc1130e2d6292627799d864ed4f",
          "message": "chore(deps): Bump indexmap from 2.2.1 to 2.2.3 (#288)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.1 to\n2.2.3.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.2.3</h2>\n<ul>\n<li>Added <code>move_index</code> and <code>swap_indices</code> methods\nto <code>IndexedEntry</code>,\n<code>OccupiedEntry</code>, and <code>RawOccupiedEntryMut</code>,\nfunctioning like the existing\nmethods on <code>IndexMap</code>.</li>\n<li>Added <code>shift_insert</code> methods on <code>VacantEntry</code>\nand <code>RawVacantEntryMut</code>, as\nwell as <code>shift_insert_hashed_nocheck</code> on the latter, to\ninsert the new entry\nat a particular index.</li>\n<li>Added <code>shift_insert</code> methods on <code>IndexMap</code> and\n<code>IndexSet</code> to insert a new\nentry at a particular index, or else move an existing entry there.</li>\n</ul>\n<h2>2.2.2</h2>\n<ul>\n<li>Added indexing methods to raw entries:\n<code>RawEntryBuilder::from_hash_full</code>,\n<code>RawEntryBuilder::index_from_hash</code>, and\n<code>RawEntryMut::index</code>.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/406bbdb8ac6239d8e616a814a4db61502333d9c0\"><code>406bbdb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/312\">#312</a>\nfrom cuviper/release-2.2.3</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3b79b87ac1e72a796b6fd63b57f6eaf2fdd383f6\"><code>3b79b87</code></a>\nRelease 2.2.3</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8e6753c9b40b30b94e5b5a5bd79be650abe40b0a\"><code>8e6753c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/310\">#310</a>\nfrom cuviper/shift_insert</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e3ff25b94c27e1035956dacd29a2dd4775339ab5\"><code>e3ff25b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/311\">#311</a>\nfrom cuviper/test_debug</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/2a33977a155826904eaecef251f91ac5c566f359\"><code>2a33977</code></a>\nFully mask the <code>&quot;test_debug&quot;</code> code from normal\nbuilds</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8c206ef7922d8d171fdbb1087c5935e55bb6fb1d\"><code>8c206ef</code></a>\nTest shift_insert that moves</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5debe7378d0289997b2092c9f685c6f64e20b880\"><code>5debe73</code></a>\nIndexSet::swap_indices is O(1) too</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4572493c53ecb74b37d6d3aed53007f3322a9329\"><code>4572493</code></a>\nAdd <code>IndexSet::shift_insert</code> based on map's method</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3b217ca498d037087c86d72203753ac650fddc9f\"><code>3b217ca</code></a>\nAdd <code>IndexMap::shift_insert</code> based on <code>Entry</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/209e3e16cf8f007a8a0e7de871105f4cba50a07d\"><code>209e3e1</code></a>\nDocument equivalence of move_index/swap_indices</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.1...2.2.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.1&new-version=2.2.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T17:47:39Z",
          "tree_id": "2f553198713de59cfaf605b20b01c9cec1e6e26c",
          "url": "https://github.com/hasura/ndc-postgres/commit/ca3875232b901bc1130e2d6292627799d864ed4f"
        },
        "date": 1707760767561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.547235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.52067114999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.056582461925977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.840496071382539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28623945862194977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.549413,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.586389,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.873976481715424,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.929770886584997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7199780470892957,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.496689,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.51605399999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.269182153411215,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.667920303754791,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5315556299559144,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.346769,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.5407305,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.10610469531799,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.614802232452156,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5067248213471414,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.7017845,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.351502,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.48389674524672,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.026584053419448,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41429171935349535,
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
          "id": "4283969222a796fc10fbfc5c512ccd175a08124d",
          "message": "chore(deps): Bump thiserror from 1.0.56 to 1.0.57 (#287)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.56 to\n1.0.57.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.57</h2>\n<ul>\n<li>Generate more efficient <code>Display</code> impl for error message\nwhich do not contain any interpolated value (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/286\">#286</a>,\nthanks <a\nhref=\"https://github.com/nyurik\"><code>@​nyurik</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/1d106b169c1ba328bcd64d70d06687413906d751\"><code>1d106b1</code></a>\nRelease 1.0.57</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/8a5c4d1b76eaa667a71dfaeb1373bca36fda4e78\"><code>8a5c4d1</code></a>\nUse write_str when args only consists of trailing comma</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f790bee2a401d71ac6e5492c7d1f8bb3a18a0e1c\"><code>f790bee</code></a>\nPhrase flag in terms of whether core::fmt machinery is required</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d43b759e3aa02d54dcad59c5eadfc78a8e96536f\"><code>d43b759</code></a>\nIgnore needless_raw_string_hashes pedantic clippy lint in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d09c4182955b459a4699adaf9b045077308a1d1a\"><code>d09c418</code></a>\nTouch up PR 286</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/097251d2f538c123c850e1873cd1e0172bf4c151\"><code>097251d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/286\">#286</a>\nfrom nyurik/litstr</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/cd79876fe8f2eead51a1d9efa0b0f42467b9bef8\"><code>cd79876</code></a>\noptimize by avoiding second fmt.value() call</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d7e738e1d8e339d35a1ea0c4c252b055c66c3526\"><code>d7e738e</code></a>\nOptimize simple literals for Display::fmt</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0717de3f507293f6faa7a32d987febb5c39a7048\"><code>0717de3</code></a>\nUpdate ui test suite to nightly-2024-02-08</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/c7c75470ec80c253a197b365f4571569ab53a8d9\"><code>c7c7547</code></a>\nUpdate ui test suite to nightly-2024-01-31</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.56...1.0.57\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.56&new-version=1.0.57)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T19:05:22Z",
          "tree_id": "2dd06042f7eeaa350bccf2ae35b68ffc4be114b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/4283969222a796fc10fbfc5c512ccd175a08124d"
        },
        "date": 1707765106326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.131455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.38893739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.85774364111598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.358832128927425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2862974635447131,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.731534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.0309016,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.78071913563233,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.11938698170929,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6984006535731334,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.930177,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.7528725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.71160368379552,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.216538377673025,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5453569512151963,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.11606,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.62680519999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.02858265408709,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.512639359301502,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5061031338084435,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.399926,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.0544946,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.27767399209111,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.005521383735598,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4128073382224403,
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
          "id": "e1e0ca4f217524b28d9528ceca226e2bba118b68",
          "message": "Capture more/prettier information in translation snapshot tests. (#290)\n\n### What\n\nTwo things:\n\n1. Always capture the pre- and post-query statements.\n2. Pretty-print the query parameters, to make them more readable when\nthey're large.\n\nI think this makes the test snapshots a lot clearer.\n\n### How\n\n1. Remove a couple of `if` blocks.\n2. Convert a vector of pairs to a `BTreeMap` (so it's sorted), and add a\n`#`.",
          "timestamp": "2024-02-12T22:53:15Z",
          "tree_id": "edeaeeb6a6e14fd7091e68b7cef6416c065a7ff4",
          "url": "https://github.com/hasura/ndc-postgres/commit/e1e0ca4f217524b28d9528ceca226e2bba118b68"
        },
        "date": 1707778835109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.335228,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.27804,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.88180571760768,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.971932545119497,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28315351776984987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.2551335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.41694649999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.30615277373912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.473956872044553,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6667180073880171,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.653843,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.2202558,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.234659819138194,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.690318114511321,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5204670469751886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.29607250000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 101.90648614999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.895292517535424,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.168709301080426,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5162251770006184,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.7573195,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.6677435,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.31364553668175,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.564153121754671,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4144340525534445,
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
          "id": "bb473f300e56e92c8c10a33d1bc6d028e4a3652a",
          "message": "Break dependencies through copying and pasting. (#292)\n\n### What\n\n`ndc-postgres-configuration` had a dependency on `query-engine-sql`\nsimply to use the `IsolationLevel` enum. This dependency is otherwise\nunnecessary and quite large.\n\n### How\n\nI have copied this enum into the configuration so that we can avoid this\nlarge dependency.\n\nOf course, now we have two, so I've added a function inside the\nconnector crate to convert from one to the other.\n\nI have also improved the OpenAPI documentation on the `IsolationLevel`\nenum somewhat.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-02-13T09:50:55Z",
          "tree_id": "62024082e19ef614814d0637c34d28b199c4bc80",
          "url": "https://github.com/hasura/ndc-postgres/commit/bb473f300e56e92c8c10a33d1bc6d028e4a3652a"
        },
        "date": 1707818270367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.0460815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.00141604999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.424423197821472,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.800691646206925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28509378838942323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.358525,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.83336849999986,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.38159074597801,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.526273754171513,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6781451811731288,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.41198399999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 109.9651695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.3299722329675,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.830766548558721,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5385716867017254,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 78.246575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.99767194999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 48.167283632623565,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.127159631823488,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5178852604451577,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 71.361069,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.4178314,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.381577831265986,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.276014805078091,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.412560017192753,
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
          "id": "35b1e854f09b383383c6aa7b15f6839f42c56b0c",
          "message": "Borrow more when constructing `RuntimeConfiguration`. (#293)\n\n### What\n\nThe documentation for `RuntimeConfiguration` states that it borrows\nwhenever possible, which was false. I have made some changes to borrow\n(or copy, if copying is cheap) all fields.\n\n### How\n\nI introduced the `'request` lifetime and annotated fields with it. The\nmetadata might be borrowed, or it might be converted from a v1 metadata,\nso this is wrapped in a `Cow` to abstract over this.\n\nWhen possible, we now pass around a `RuntimeConfiguration` by value\nrather than by reference.\n\nI also added `Copy` to `MutationsVersion` so that we can freely pass it\naround without having to worry about borrowing. `IsolationLevel` already\nimplements `Copy`.",
          "timestamp": "2024-02-13T10:49:44Z",
          "tree_id": "dfa3d4b4cbe024e8d80050370448802c47f1e07b",
          "url": "https://github.com/hasura/ndc-postgres/commit/35b1e854f09b383383c6aa7b15f6839f42c56b0c"
        },
        "date": 1707821718144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 46.6839755,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.38470319999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.24931882310033,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.601156501566777,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2931062555815947,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.265426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.63275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.44417912493973,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.563041682236012,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6004361127549367,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 73.5361035,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 106.15675055,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 45.09511879583094,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.9767397973635212,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5318001801807326,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 70.221442,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.06202899999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 43.07934097990819,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.066054499162746,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.498169150324113,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.5608995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.99846775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.583363964430276,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.050636568072193,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.44785814293170406,
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
          "id": "6ee371e7b9bc92cc4094260d56f6be61c2bc6390",
          "message": "CI: Cap the benchmark history in charts to 50 items. (#294)\n\n### What\n\nEach data point on the benchmark charts is so close to the next one it's\nhard to hover over.\n\nIn addition, a drastic change isn't even really visible until it's been\na few commits.\n\n### How\n\nWe cap the maximum items in each chart to 50.",
          "timestamp": "2024-02-14T08:17:40Z",
          "tree_id": "9dd016d0971de119e120b3febfbf83dca1e43a4b",
          "url": "https://github.com/hasura/ndc-postgres/commit/6ee371e7b9bc92cc4094260d56f6be61c2bc6390"
        },
        "date": 1707898974214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 45.818492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.8904952,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.704663641810047,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.344134207969244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28920326769081384,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.675575,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.2552679,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.583362166841894,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2620380377665654,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6203285216561526,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.504132,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.18545125,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.84791022585978,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.5903018941611506,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4871185146346281,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.97876,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.85374469999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.96110599069936,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.517697631375732,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5033531587700087,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.1308145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.10267985,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.189324928329825,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.133029257713737,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4431779279389012,
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
          "id": "121ec330ea3530a63f2cb3f796414f15df35a534",
          "message": "Replace configuration with a new version, identical to v2. (#295)\n\n### What\n\nThis introduces configuration version 3, and removes versions 1 and 2.\n\nThis is most definitely a breaking change, and we're not done. Future\nchanges will tear this apart and rebuild it, but I wanted to make this\npart easier to review.\n\n### How\n\nI did this in a few steps to make sure I didn't break anything.\n\n1. I pulled out some of the lower-level configuration types to their own\nfiles.\n2. Next, I copied the remaining shared code from v1 to v2 so there were\nno cross-dependencies.\n3. Then I copied v2 to v3, and modified all the tests to use a v3 config\n(identical to v2 except the `\"version\"` field).\n4. Finally, I removed v1 and v2.",
          "timestamp": "2024-02-14T10:21:35Z",
          "tree_id": "f26f2c874002a1985b9b6fdfa6debac54d671ff5",
          "url": "https://github.com/hasura/ndc-postgres/commit/121ec330ea3530a63f2cb3f796414f15df35a534"
        },
        "date": 1707906404732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 44.219173,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.8792189,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.102434325261225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.98101280899596,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28916045270330304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.517033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.25938100000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.71094254718273,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.741555552516445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6322884530113151,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.87046749999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.0064915,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.55667141929267,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.842233031064083,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.49575720303180737,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.324408,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.1585115,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.63560787787496,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.510036987527393,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5134699255277125,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.796324,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.43017959999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.1295919534433,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.911188875525404,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4266464236661836,
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
          "id": "553ad47a9d1b2959c9a93ad6bdae1d1a207e5d23",
          "message": "update ndc-spec to 0.1.0-rc14 (#283)\n\n- depends on: https://github.com/hasura/ndc-hub/pull/93\n- todo: add changelog entry\n\n### What\n\nWe are updating connector to support the latest ndc-connector spec\n(0.1.0-rc14).\nWhile fixing some breaking changes, such as renaming `where` to\n`predicate`, we also support new capabilities:\n\n1. Explaining mutations via the `/mutation/explain` endpoint\n2. Supporting filtering using `in` by columns and variables\n\n### How\n\n1. Since a mutation request may contain multiple mutation operations,\nthe explain response will contain a field named `<operation_name> SQL\nMutation` and a field named `<operation_name> Execution Plan` for each\noperation.\n2. To filter in column or variable, we need to compare against a\nsubquery of the shape `(select value from unnest(<column-or-variable>)\nas table(value))`.",
          "timestamp": "2024-02-14T11:29:13Z",
          "tree_id": "c2129a0c523a8f0cb419939078631d35c0d1367d",
          "url": "https://github.com/hasura/ndc-postgres/commit/553ad47a9d1b2959c9a93ad6bdae1d1a207e5d23"
        },
        "date": 1707910617659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.725432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.14889199999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.23548273048279,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.65738650631749,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2788114231721407,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.2229945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.03568564999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.902219009064325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.131486996142904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5994371604629701,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.611448,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.0619227,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.86369256330364,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.731259011304253,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.446301824431348,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.29465,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.9163296,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.559454242123614,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.937158116913096,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.43630529798293466,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.4409455,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.64732509999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.98858146883291,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.265238984217049,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.44233939807673744,
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
          "id": "636450df882e3f61a1e1243cd1cf4218060a84a4",
          "message": "Reduce the surface area of the configuration crate. (#297)\n\n### What\n\nThis makes a few changes to the configuration (version 3) to reduce the\nsurface area.\n\nAll changes are refactors.\n\n### How\n\n1. `unqualified_schemas` was deprecated and has been removed.\n2. `set_connection_uri` is only used in tests, so I moved it to the\ntests.\n3. `ConfigureOptions` has been moved to its own file to keep things a\nbit more private.\n4. Other functions have been made private.\n5. When configuring, we avoid cloning where possible.",
          "timestamp": "2024-02-14T19:30:42Z",
          "tree_id": "f3ff3d23daf27de57a3cac1a4e2f4137ca717808",
          "url": "https://github.com/hasura/ndc-postgres/commit/636450df882e3f61a1e1243cd1cf4218060a84a4"
        },
        "date": 1707939373506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.364933,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.82528669999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.852585434523967,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.554508983097328,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28114426521775604,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.477046,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.6215348,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.24152330160919,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.321830028691309,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6477602302310157,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.87766500000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.24528304999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.907520411630244,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.2602143120289355,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.46785175107138316,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 66.913496,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.22111039999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.179562655153354,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.363278958910669,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.44687175567018955,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.114781,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.03404629999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.150850644749525,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.186765036747715,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4547710254720011,
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
          "id": "45c4a5072926888671e5e41b757f58da76eecbd6",
          "message": "update rust toolchain (#298)\n\n### What\n\nWe updated the rust toolchain for ndc-hub to 1.76.0, might as well do\nthe same for ndc-postgres.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-02-15T14:39:25Z",
          "tree_id": "aa34266fe7e3f16cb1d7b9ed4b3fdf8fd12d9c0c",
          "url": "https://github.com/hasura/ndc-postgres/commit/45c4a5072926888671e5e41b757f58da76eecbd6"
        },
        "date": 1708008510754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.177191,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.69355355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.876971602323515,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.322879770459217,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2718766524217716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.51942550000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.84649815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.62821596010322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.379014227324703,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.569190521431525,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.4650415,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.1242905,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.23894910799361,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.840704365958608,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4552304941156573,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 66.2241515,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.18293819999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.059338303270735,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.882979842753542,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42734087169855617,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.821151,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.43804679999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.75542544238464,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.927745183300324,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43089140158256645,
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
          "id": "9373d4db7d6de14e24e41df62bf021ba7149db2f",
          "message": "Enable all Clippy warnings in Cargo.toml. (#299)\n\n### What\n\nEnabling the warnings in _Cargo.toml_ means tooling (e.g. `cargo clippy`\nand `rust-analyzer`) will share the same list of warnings.\n\n### How\n\nRust v1.74 added support for [a `[lints]` section in Cargo.toml\nfiles](https://doc.rust-lang.org/stable/cargo/reference/manifest.html#the-lints-section).\n\nI have also added `--deny=clippy::all` to the Justfile so it fails if\nthere are any warnings, just like CI does. This won't scale if we add\nmore warnings though; not sure how to fix that yet.",
          "timestamp": "2024-02-16T09:00:44Z",
          "tree_id": "73d08c07d8e6bbe491a635cb62ca51140ada5a6c",
          "url": "https://github.com/hasura/ndc-postgres/commit/9373d4db7d6de14e24e41df62bf021ba7149db2f"
        },
        "date": 1708074357807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.2880245,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.40498214999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.046044589192004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.8490665305352,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26527983940175076,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.1922395,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.4886381,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.89924872415736,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3720004185915613,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5909595152406125,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.233239,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.57604889999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.89877321409194,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.823107906495508,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4280219509153937,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.814772,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.94448209999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.711936106832084,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.632271863550471,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41705111415483687,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.095093,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.52498129999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.45695141797554,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.47679108769794,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41763499083257904,
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
          "id": "e47a46ea33ddbd5a0856d2309ce226cae1adffee",
          "message": "Bring ndc-postgres in line with ndc-spec RC15 (#296)\n\n## What\n\nThis PR updates `ndc-postgres` to adhere to the RC15 version of\n`ndc-spec`.\n\n## How\n\nThis required a bit more work than we'd originally expected: because the\nformat of procedure results changed, we now need to generate a new\nobject type for each procedure (namely, the result type: a product of\n`affected_rows` (int4) and `returning` (whatever the underlying\ncollection's row type is).",
          "timestamp": "2024-02-16T11:24:54Z",
          "tree_id": "d5456d783797767f22f1624a9f8a2414cdc3f015",
          "url": "https://github.com/hasura/ndc-postgres/commit/e47a46ea33ddbd5a0856d2309ce226cae1adffee"
        },
        "date": 1708083337429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.0962595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.93003015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.49274123878664,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.517908810872182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26944630002059944,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.895921,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 138.05733625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.24604262998598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.280769749751677,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6264095402863663,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.89996099999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.8345285,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.75099697329021,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.70872277607377,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4649505249138261,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.394963,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.0541677,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.77345921786653,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.733804831200175,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42747324326702,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.7860855,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.67576030000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.26592910900708,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.773282967258659,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4481832733073741,
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
          "id": "1ae910d4b2d6ec07e06ececfc2bdbed1a4f120de",
          "message": "Enable Clippy warnings on all targets and features, and fix them. (#300)\n\n### What\n\nThis changes our scripts to run Clippy on all targets and features.\n\nIt catches a few issues, which I have fixed.\n\n1. Removing unnecessarily-nested modules.\n2. Adding a semicolon or two.\n3. Using `is_empty`.\n4. Using an array instead of a vector for a static list.\n\nI also found out that it's enough to set `RUSTFLAGS=\"-D warnings\"` to\nmake Clippy fail on warnings, so I have changed CI to rely on that. This\nmeans we don't need to duplicate the list of warnings.\n\n### How\n\nMost of this was covered by adding `--all-targets --all-features` and\nrunning `just lint-fix`.\n\nThe rest was deleting a bit of code.\n\nI suggest ignoring whitespace when reviewing.",
          "timestamp": "2024-02-16T13:20:13Z",
          "tree_id": "eb4d40c844cf6f88433b3039142fca39467d1695",
          "url": "https://github.com/hasura/ndc-postgres/commit/1ae910d4b2d6ec07e06ececfc2bdbed1a4f120de"
        },
        "date": 1708090036847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.225699,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.50940729999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.197068241054154,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.434506252721398,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25221898406190585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.212512,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.36756165,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.2300212049288,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9975254210425746,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5887846075830142,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.155294,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.62387559999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.19595479533764,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.330213224134781,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42834840342840586,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.1113905,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.2387036,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.387438453753774,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.729106982069183,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41579495897857327,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.450082,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.7976185,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.337877672131164,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.457309070510448,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41643203126768785,
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
          "id": "0452625e74c67bcb85f776a14c90bd65c5ccc3c5",
          "message": "Bring ndc-postgres in line with ndc-spec RC16 (#302)\n\nUpgrading to RC16 is a no-op for us, so this just bumps the versions.",
          "timestamp": "2024-02-16T14:53:17Z",
          "tree_id": "e33aa63e10da43bb8f9cb904216c4d84304c7dae",
          "url": "https://github.com/hasura/ndc-postgres/commit/0452625e74c67bcb85f776a14c90bd65c5ccc3c5"
        },
        "date": 1708095551782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.32697,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.92258629999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.087054727287562,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.761014997189424,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27016333443223045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.244303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.4635234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.671018209249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1127509680274983,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5829195635174137,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.597156,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.6630012,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.939397272772865,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.806829923744502,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44479837497325303,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.785223,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.8283126,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.14979972536039,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.967145533199066,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4322583090782017,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.5276995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.23293754999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.89074144495167,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.620944299784966,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41705905358962453,
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
          "id": "26dea8023597f9c79c305f2808c4469f992444ad",
          "message": "benchmarks: Generate configuration without the configuration server. (#301)\n\n### What\n\nThe configuration server is going away. Eventually we'll have a CLI that\ndoes the same thing, but that doesn't currently exist.\n\nFortunately, specifically for the benchmarks, we can replicate the\nconfiguration server behavior simply by using `jq` to replace the\nconnection URI in the already-generated configuration file.\n\n### How\n\nI've made the changes in both the local benchmark script and in the CI\nYAML file.",
          "timestamp": "2024-02-16T15:01:12Z",
          "tree_id": "fdc16e06e90d8fb035926eb0e64d51eec8875647",
          "url": "https://github.com/hasura/ndc-postgres/commit/26dea8023597f9c79c305f2808c4469f992444ad"
        },
        "date": 1708095990955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.209762,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.23501329999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.065572949729898,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.642737180437656,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26631036697149846,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.3893995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.1669866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.47409389955745,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.320575041754587,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5937554815283818,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.962371,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.03340999999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.07604974944752,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.228494609808308,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4533535417350659,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.246272,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.5234514,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.76852535189531,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.040974358355506,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42943957863184573,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.547261,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.43187155,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.44963039206193,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.881816956968883,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4147559007071352,
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
          "id": "43f032c80129869592c4e75a9b311d2a7eff4876",
          "message": "Expose equal and in operators as part of the schema response (#304)\n\n### What\n\nrc14 requires we expose the `equal` and `in` operators as part of the\nschema response.\nTo do that, we have to specify them as part of the metadata.\n\n### How\n\n- We add a new attribute to operators - OperatorKind, which will say\nwhether an operator is equal, in or custom, similar to\n[ComparisonOperatorDefinition](https://hasura.github.io/ndc-spec/reference/types.html#comparisonoperatordefinition).\n- In the introspection, we map the `_eq` operator to the kind `Equal`,\nand other operators to `Custom`.\n- In the introspection, we check if a scalar type has the `equal`\noperator, and add it the `in` operator as well if yes.\n- We change the filtering code so that it checks the operator kind of an\noperator to distinguish `in` from the rest, instead of looking at the\nname.\n- We regenerate the ndc-metadata and fix the tests\n\nWe also:\n\n- Moved version3.* into the version3/ dir\n- Removed the old `v1` and `v2` config tests.",
          "timestamp": "2024-02-20T09:58:13Z",
          "tree_id": "c381e1653b5a01ed6f6ae1c132cd6dfc40920d78",
          "url": "https://github.com/hasura/ndc-postgres/commit/43f032c80129869592c4e75a9b311d2a7eff4876"
        },
        "date": 1708423413616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.950469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.056972,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.776719636025398,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.84974059708577,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2799475456739505,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.875314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.1450422,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.827059999903234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.017934885496196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.559015579863123,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.101031,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.97213274999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.18726422720033,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.807998485645683,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4577675144264898,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.525876,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 94.3468968,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.00292313148377,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.624122948199187,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.409537801954589,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.7973205,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.98925734999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.97830636265719,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.604114684378352,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4148087974571364,
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
          "id": "212bc02f26e947560e26271795c0ab448c2f4428",
          "message": "fix engine metadata (#303)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis PR fixes the engine metadata\n\n### How\n\nChanges `DataConnector` to `DataConnectorLink`.\n\nTo the reviewer: Please use [hide\nwhitespaces](https://github.com/hasura/ndc-postgres/pull/303/files?diff=unified&w=1)\nif you want to look at the changes.",
          "timestamp": "2024-02-20T12:12:32Z",
          "tree_id": "286982e525d5525b7a0a5e75e5034e31143f0887",
          "url": "https://github.com/hasura/ndc-postgres/commit/212bc02f26e947560e26271795c0ab448c2f4428"
        },
        "date": 1708431538987,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.6077965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.41750935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.146145668474347,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.875113499315539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2575495873431852,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.49637899999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.2340735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.40787482483875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.261782293671814,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5893646550780788,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.563586,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.52220349999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.57579274047528,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.354896751401654,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45295799517589214,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.2333695,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.42249749999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.906102941765994,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6087761653345325,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4220660824048867,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.161451,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.56341069999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.42237498623132,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.723077974831476,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4107132976625591,
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
          "id": "0ad369fb1056cf8e88596232d8acd06a57720928",
          "message": "Switch to a configuration directory. (#305)\n\n### What\n\nThis upgrades ndc-sdk, which includes two major changes:\n\n1. Configuration is now a directory, not a `RawConfiguration`.\n2. The configuration server has gone.\n\n### How\n\nThis means we have to make a lot of changes. I'll try and summarize\nthem.\n\n1. We now expect the configuration file to be a file inside the\nconfiguration directory. Test data and tests have been changed\naccordingly.\n2. The configuration directory is assumed to be `/etc/connector` unless\notherwise specified when run as a Docker image.\n3. The configuration server has been removed. This means that our\nscripts that generate configuration no longer work. We will need to\nreplace that logic with a CLI or similar.\n4. We don't need to deploy the configuration server any more, because it\ndoesn't exist.",
          "timestamp": "2024-02-20T14:43:34Z",
          "tree_id": "1fee46e762b4a85c642c71bf815adc1cbe460096",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ad369fb1056cf8e88596232d8acd06a57720928"
        },
        "date": 1708440633957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.8975885,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.27533505000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.186540737534266,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.486208101514798,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2688250973595519,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.159043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.90745859999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.85678620168395,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1146616958287865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.609865203135707,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.186959,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.93264139999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.62782239445881,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.628619944377412,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4404332281585985,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.590393,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.41477554999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.61980724393134,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.558984816099816,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4174392810000656,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.240033499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.14484159999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.35897877024969,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.708476127329114,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39199008524532897,
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
          "id": "d8dd2b82629d7928a0ac4e93ebe1d3e4a0eb98d1",
          "message": "Use the `RuntimeConfiguration` as the real configuration. (#306)\n\n### What\n\nAs we no longer need to persist this, we don't need to worry about the\nschema changing at all.\n\n### How\n\nI renamed `RuntimeConfiguration` to `Configuration`, removed the\nborrowing (making it a totally owned type), and fixed all compilation\nfailures.\n\nI have upgraded `ndc-sdk` to remove the expectation that `Configuration`\nmust be serializable.",
          "timestamp": "2024-02-21T10:47:21Z",
          "tree_id": "ef21bfe54b6aed0f3d1bebf6877c55c6d945a768",
          "url": "https://github.com/hasura/ndc-postgres/commit/d8dd2b82629d7928a0ac4e93ebe1d3e4a0eb98d1"
        },
        "date": 1708512776051,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.254495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.6133043,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.249672243080216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.701245320560648,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26635888790666473,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.805942,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.96972535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.68052527894721,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.209810740191365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5859677554072918,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.301738,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.97410844999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.28318262116306,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.551684765981349,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44719252689378625,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.7958945,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.45335089999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.80688609300058,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.565517683538637,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4155168692806092,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.3942125,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.84399664999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.52322443886306,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.461276779189397,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4288517129842411,
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
          "distinct": false,
          "id": "2f11dd64329be8e7171bb081bca1218a123fac3d",
          "message": "fix just dev workflow (#308)\n\n### What\n\nFix the `just dev` workflow stuck in an infinite loop.\n\n### How\n\nMutation tests create a new ndc metadata directory for each test.\nBecause the directory were not ignored by git, only the config files,\nthey were picked up as changed to be watched for. We fix the gitignore\nand that fix the test.",
          "timestamp": "2024-02-21T13:36:50Z",
          "tree_id": "a3a49c23121fbc684ca2be0305350f85fcf92413",
          "url": "https://github.com/hasura/ndc-postgres/commit/2f11dd64329be8e7171bb081bca1218a123fac3d"
        },
        "date": 1708522929979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.965931999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.05362004999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.310021127421674,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.103751374228505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26543680157527144,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.4102235,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.19188104999992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.244013405342486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9967329139562935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6041437483544135,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.35288,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.334999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.99822020658057,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.69972397294444,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4577423989996125,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.8664245,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.18931654999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.076693435301856,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.314480107611587,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41083470150919027,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.380187,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.40302825,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.50836040146021,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.770685573274584,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4201843405275588,
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
          "id": "709c402731ca18d837024e86b341713376fa26a6",
          "message": "Create a CLI which will initialize a directory with a config file. (#307)\n\n### What\n\nThis will initialize the current directory with a single file,\n`configuration.json`, with an empty configuration.\n\nIf the directory contains any files, the command will refuse to run, as\na precaution.\n\n### How\n\nIt wraps the `configuration::empty` function.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-02-21T14:37:16Z",
          "tree_id": "71a713a49578fe00a44f76474f8e7c470fc4d5f3",
          "url": "https://github.com/hasura/ndc-postgres/commit/709c402731ca18d837024e86b341713376fa26a6"
        },
        "date": 1708526700925,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.015283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.5931912,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.235785762328668,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.312843373193594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.260154144479453,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.8804985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.60647265,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.489916984501164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3079299017135497,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6069667840784039,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.1203725,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.83032039999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.7555727751573,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.021457435989667,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4587118924856233,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.560187,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.37798369999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.31646887301478,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.177689651276559,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4264148876231254,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.973224,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.147349,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.99969350535028,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.515943442646659,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41015767271329767,
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
          "id": "2367eb5653e80bbd1c48e0ed4c8243dc3a11edee",
          "message": "fix IN empty list (#309)\n\n### What\n\nFix a bug wrt `IN` empty list.\n\n### How\n\npostgres does not support the `<expr> in ()` syntax, so we replace it\nwith `false`.",
          "timestamp": "2024-02-21T15:23:56Z",
          "tree_id": "9c94f69c85254dfcfdf46cb2d77f32979e3fd3a7",
          "url": "https://github.com/hasura/ndc-postgres/commit/2367eb5653e80bbd1c48e0ed4c8243dc3a11edee"
        },
        "date": 1708529446506,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.373884,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 85.54885359999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.275720540793763,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.543639440950024,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26882284904935916,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.215701,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.51017609999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.611947198355146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2516241618772312,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5814594558293624,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.632139,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.662469,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.89461619978717,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.482025696346213,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4459147876551117,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.9242615,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.94409775,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.67314702733392,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.496551085104905,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4364259527265945,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.867722,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.9633532,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.14403663876871,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.617895979415323,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4243207702135446,
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
          "id": "b1f037d6ab9e0d691b97736aaf340847755d96ec",
          "message": "Print useful output when ndc-test fails. (#311)\n\n### What\n\nThe `Debug` output of `Vec<FailedTest>` can be very long and hard to\nread.\n\n### How\n\nBy simply pretty-printing each failure separated by newlines, we can\nmake it readable.",
          "timestamp": "2024-02-21T15:53:32Z",
          "tree_id": "e538386f2352a8ad686bb21dd69b5bf7a4788a8c",
          "url": "https://github.com/hasura/ndc-postgres/commit/b1f037d6ab9e0d691b97736aaf340847755d96ec"
        },
        "date": 1708531218957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.947053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 99.31655299999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.46022410046508,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.89130596496145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2937343745886325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.475777,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 148.2312082,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.419274046598694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3690629085208386,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6347741877082584,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 74.4750655,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.90456655,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 45.042976756562744,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.095122377365868,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4673253031901366,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 68.4041615,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 92.40713289999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.7359476472114,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.937191645389326,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.45572620718870027,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.60346150000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 89.42497574999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.39223469817703,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.980891737947026,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4424148733283491,
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
          "id": "d586c077ce1ea056ad9ca20448af24ef617c2dfb",
          "message": "Always clean up temp databases and deployments. (#310)\n\n### What\n\nYes, even if the tests fail.\n\nPreviously, these would accumulate.\n\n### How\n\nWe implement `Drop` on `FreshDeployment` to ensure that the database and\nfile system are always cleaned up (barring something catastrophic, such\nas power failure).",
          "timestamp": "2024-02-21T16:57:20Z",
          "tree_id": "7c9e4aa4de1d8adaf837428c538c13e5a766e021",
          "url": "https://github.com/hasura/ndc-postgres/commit/d586c077ce1ea056ad9ca20448af24ef617c2dfb"
        },
        "date": 1708535273197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.69055,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.9451379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.617342436022113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.282457496112556,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2639466766548477,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.278281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.96125759999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.87517901983476,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2699235230923307,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5983267546912747,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.218901,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.3597956,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.91683832602995,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.784137285037836,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4499849939218461,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.792655,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.41714839999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.62346366660159,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.730104140155042,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3961842710494554,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.808373,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.38303139999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.48804903600444,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.543256798107166,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41010714305772844,
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
          "id": "74f1aea6309281d3295e54b78cbd9b3dc4157fc7",
          "message": "Add an `update` command to the CLI that introspects the database. (#312)\n\n### What\n\nThis works similarly to the update behavior of the old configuration\nserver.\n\n### How\n\nThere wasn't a lot to do.\n\nThis does not update the scripts; I will follow up with that later.",
          "timestamp": "2024-02-22T14:00:28Z",
          "tree_id": "12abd4254a4a73ee84936fa4d8382c5c7c48b673",
          "url": "https://github.com/hasura/ndc-postgres/commit/74f1aea6309281d3295e54b78cbd9b3dc4157fc7"
        },
        "date": 1708610759845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.890256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.695786,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.44725960918499,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.803879528165687,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26325663551925993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.586647,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.24905075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.15192199829665,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2449147517507058,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6010202218428289,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.6366685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.42232199999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.35304672841978,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.720631677320959,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4426737573349114,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.870020499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.397192,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.159310263267336,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6142205451353675,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4064437306190719,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.132022,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.456178,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.278914763361385,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.610621832385746,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40269976208404573,
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
          "id": "f392dccba8c22115b593948d85e85bcde826c7bf",
          "message": "Generate test configuration using the new CLI. (#313)\n\n### What\n\nThe configuration server is gone!\n\n### How\n\nThe scripts now call the CLI's commands rather than talking to an HTTP\nserver.\n\nFeels nicer, TBH.",
          "timestamp": "2024-02-22T14:30:31Z",
          "tree_id": "d0478e8430ca327deaeda0eefe8224c4ae75c6df",
          "url": "https://github.com/hasura/ndc-postgres/commit/f392dccba8c22115b593948d85e85bcde826c7bf"
        },
        "date": 1708612563013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.028451,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.7610352,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.43323548088675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.458380924573618,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2753967532844444,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.575963,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 144.74317139999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.51084720493186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3920655625930394,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6058567151236492,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.127406,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.9131682,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.370331256426525,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.901819275581914,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4419813516961086,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.07123,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.0088342,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.18112826617298,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.74413837805438,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4181615961629485,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.748785,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.4467186,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.58370149891061,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.960560859227549,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41788027111210957,
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
          "id": "51fd16d82bfe30b7deeefcc6709829b17722329f",
          "message": "Remove duplication in error types and error-handling. (#314)\n\n### What\n\nI started trying to re-use the transaction handling logic we have around\nmutations for queries too, but got stuck because I either needed to\nduplicate a lot of code, which felt suspect and error-prone, or\ndeduplicate a lot of other code first.\n\nI chose the latter.\n\nThis deduplicates the error types between queries and mutations in a new\n`query_engine_execution::error::Error` type.\n\nI have also deduplicated the use of this type and the\n`query_engine_translation::translation::error::Error` type, particularly\nwhen it comes to (a) recording the error for tracing and metrics, and\n(b) converting the error to an ndc-sdk `connector::QueryError`.\n\nI removed the `Multiple` error case, instead deciding to just throw away\nthe second error from rolling back in favor of the first one, which is\nmore likely to contain useful information.\n\nI think the separation of concerns in the resulting code makes it easier\nto read (large `.map_err` blocks can be something of a handful). This\nwill also make it much easier to share transaction code between queries\nand mutations.\n\n### How\n\nFirst, I made the new error type. This meant I had to handle some extra\ncases in certain places, and I didn't like adding the code, so I decided\ninstead to remove it.\n\nI created two new modules:\n\n1. `ndc_postgres::error::record`, which records errors with the tracing\nand metrics services.\n2. `ndc_postgres::error::convert`, which converts errors from internal\nquery engine types to ndc-sdk types.\n\nFrom there it was a fairly mechanical process of using those new\nfunctions instead of the inline recording and conversion from before.\n\nI also removed a bit of code:\n\n* `ndc_postgres::query::plan_query` was duplicated in\n`ndc_postgres::query::explain::plan_query`, with different\nerror-handling. By moving error-handling up a layer, the discrepancy\nwent away and I was able to reuse the first one.\n* `ndc_postgres::mutation::explain` had an additional error conversion\nfunction which converted the ndc-sdk error _back_ to an internal error.\nAgain, by moving error-handling up a layer, this was no longer\nnecessary.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-02-23T11:23:14Z",
          "tree_id": "0e2780d87475e46edc8865ca70051a991c8fd9af",
          "url": "https://github.com/hasura/ndc-postgres/commit/51fd16d82bfe30b7deeefcc6709829b17722329f"
        },
        "date": 1708687761088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.992936,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.43694105,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.904393303249293,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.957959613250189,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27576939814334844,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.3942445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.56742309999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.8983368216277,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.267271231912524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6003363988672711,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.182446,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.21648545,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.58761536653799,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.54647710541559,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.450537170138283,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.908812,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.71493054999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.4507939118193,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.794830296082353,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42795481852581013,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.686542,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.38581019999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.001341678647464,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.5947692685683705,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4261544175645254,
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
          "id": "009e79a0435a1b62a7d843a0fe5e9e0a03058866",
          "message": "Allow the CLI user to specify the context with an environment variable. (#315)\n\n### What\n\nThis follows the specification in\nhttps://github.com/hasura/ndc-hub/blob/cli-guidelines/rfcs/0002-cli-guidelines.md.\n\nTo ensure this works correctly, I have also updated the\n`generate-chinook-configuration.sh` script to use this environment\nvariable.\n\n### How\n\nWe use `clap` to parse either a switch or an environment variable, and\nonly fall back to the current directory if neither is set.",
          "timestamp": "2024-02-23T12:29:29Z",
          "tree_id": "23c27f6e29408b16c71689262575e0f79ffd52d5",
          "url": "https://github.com/hasura/ndc-postgres/commit/009e79a0435a1b62a7d843a0fe5e9e0a03058866"
        },
        "date": 1708691801471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.40226,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.07239324999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.217109972146222,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.546948361257218,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27156503629907885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.996782,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.18102169999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.2142869097166,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.4346457753888657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6375164369923665,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.0155925,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.0792175,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.76587603915707,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.734447649081446,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4525199261710024,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.147358,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.9723875,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.86491827642781,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.007986514445427,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42473586605401836,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.528998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.57539385,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.8084337148957,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6322767640740565,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42043226135631745,
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
          "id": "926c50d948a081a520ae790b12144636796b1f27",
          "message": "Update the default port to 8080 (#317)\n\n### What\n\nAccording to the [deployment\nrfc](https://github.com/hasura/ndc-hub/blob/09edbd53d3d96a6b557c3f6918e272ce7739a6ae/rfcs/0000-deployment.md?plain=1#L26),\nthe default port should be 8080, and indeed that was changed in latest\nndc-sdk. Updating the documentation\n\n### How\n\nReplace 8100 with 8080 everywhere.",
          "timestamp": "2024-02-23T13:31:00Z",
          "tree_id": "f64a77a3753b87c816fa8355e19caf1204c2af0d",
          "url": "https://github.com/hasura/ndc-postgres/commit/926c50d948a081a520ae790b12144636796b1f27"
        },
        "date": 1708695474560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.897708,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.9191142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.39455418138161,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.57835492659233,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2676451317220856,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.982531,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.91095885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.24521025424966,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3467925142618355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6220390697971477,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.24115,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.0500495,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.81063322574173,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.9593646106598825,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4448381113728496,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.707802,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.9012364,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.972378438879154,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.4016699779332455,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4211835681744878,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.101404,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.69637469999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.36088936450284,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.777757611896263,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41141071180040295,
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
          "id": "7e66805f5deb735c17e72dfc4f12f3c3785eba2f",
          "message": "move the ArrayType option lower in the schema (#318)\n\n### What\n\nIn the enum `Type` we place `ArrayType(Type)`, a recursive type, first\nin the list of options.\nSome tooling such as json-editor, don't seem to like that very much, and\nwould prefer a non-recursive option first.\n\n### How\n\nIn the enum definition, we push `ArrayType` down, and that seems to make\nthe tools happy.",
          "timestamp": "2024-02-23T13:41:01Z",
          "tree_id": "bbdce6e20ed6e2e1dff0adba09ad4f2dff629039",
          "url": "https://github.com/hasura/ndc-postgres/commit/7e66805f5deb735c17e72dfc4f12f3c3785eba2f"
        },
        "date": 1708696062373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.822430499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.5108104,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.044525771880416,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.399530125905038,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25666194713620794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.1721585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.6067264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.80364640086055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8082378898664544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5655966447418393,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.988064,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.21599859999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.743275360134604,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.793336861924217,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.435546371781747,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.7781145,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.10926565,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.40830187194962,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7332445129719645,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39684517788338364,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.538216,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.4314598,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.49746108610351,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.730565337378039,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41514526386151807,
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
          "id": "c99ed6515a577dfb4b8bc5b7696062d6f1123549",
          "message": "Roll back queries on failure. (#316)\n\n### What\n\nWe need to end transactions if they fail. This ensures we do in the case\nof queries.\n\nMutations were already handled.\n\n### How\n\nI have moved the `rollback_on_exception` function to its own module and\nensured that it is used in `query_engine_execution::query`.\n\nTo test this, I have constructed new metadata with just a couple of\nnative queries: one broken, one working. The broken one is run first,\nthen the working one afterwards. Before this change, the test failed\nbecause the working query would fail with the error:\n\n```\nerror returned from database: current transaction is aborted, commands ignored until end of transaction block\n```\n\n### Limitations\n\nNote that there are a couple of limitations with this implementation:\n\n1. This behavior is optional. Adding more entrypoints into query\nexecution will require us to remember to correctly handle transactions\nthere too.\n2. On a panic, the transaction will not be rolled back.\n\nIn the future, we may want to consider:\n\n1. Delegating this behavior to `sqlx`. (We tried this but it meant an\nextra query to compensate for the `begin` function not taking\ntransaction options, which degrades performance.)\n2. Wrapping all database access to ensure we handle transactions\ncorrectly.\n3. Handling panics.",
          "timestamp": "2024-02-23T13:45:43Z",
          "tree_id": "3454bf14e85e71cb816187c5b2a65b5227320165",
          "url": "https://github.com/hasura/ndc-postgres/commit/c99ed6515a577dfb4b8bc5b7696062d6f1123549"
        },
        "date": 1708696318898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.671537,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.57967189999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.519816692551174,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.500228639656086,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2533033861587415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.42380800000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 138.07044345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.87145979950218,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.076137142378535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5691512782461509,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.8218755,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.03450169999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.11915839345639,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.6635994818077435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4475574907630165,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.961886,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.71846379999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.99891135182152,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.821571544967085,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41966088285729347,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.639043,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.98218659999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.009918613632074,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.803163843031776,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4124471900447278,
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
      }
    ]
  }
}