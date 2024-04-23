window.BENCHMARK_DATA = {
  "lastUpdate": 1713862419786,
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
          "id": "d8b6689bb33058afe794f85f6c94c907fe53e402",
          "message": "chore(deps): Bump clap from 4.5.2 to 4.5.3 (#386)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.2 to 4.5.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.3</h2>\n<h2>[4.5.3] - 2024-03-15</h2>\n<h3>Internal</h3>\n<ul>\n<li><em>(derive)</em> Update <code>heck</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.3] - 2024-03-15</h2>\n<h3>Internal</h3>\n<ul>\n<li><em>(derive)</em> Update <code>heck</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/4e07b438584bb8a19e37599d4c5b11797bec5579\"><code>4e07b43</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8247c7ddf05d8023729ac180d8e8df260f1da5ff\"><code>8247c7d</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/677c52ce0870115845a4c42e204f6c049b81a1e7\"><code>677c52c</code></a>\nchore: Update <code>heck</code> requirement (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5396\">#5396</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/v4.5.2...v4.5.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.2&new-version=4.5.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:04:26Z",
          "tree_id": "ebbc41b4a4cbb114512740f08283d7bab0fb2f1a",
          "url": "https://github.com/hasura/ndc-postgres/commit/d8b6689bb33058afe794f85f6c94c907fe53e402"
        },
        "date": 1711444961210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.717352,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.12876759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.91082784860322,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.920106786872715,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27560807990262,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.567125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.63460859999992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.4371743851744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.6862070277861534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6359414788410702,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.6405175,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.06171794999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.43916261932235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.044483046005546,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4397577749381072,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.4440055,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.57599594999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.206739477237754,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.490030612975929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3936437660109118,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.5521765,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.09563074999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.42883783014187,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.7140847456885595,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39941643881581285,
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
          "id": "81ec8a888f0bca5bba6ba6d1aef0cffb8f2f7d48",
          "message": "chore(deps): Bump indexmap from 2.2.5 to 2.2.6 (#385)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.5 to\n2.2.6.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.2.6</h2>\n<ul>\n<li>Added trait <code>MutableValues</code> for opt-in mutable access to\nset values.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3f0fffb85b99a2a37bbee363703f8509dd03e2d7\"><code>3f0fffb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/323\">#323</a>\nfrom cuviper/mutable</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/33c1a7c771b255dc9376a36b7f2bfd39c5fefbcb\"><code>33c1a7c</code></a>\nFix <code>unused_imports</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b76ff73d54745fbf4126008b043ea22b1755736b\"><code>b76ff73</code></a>\nFix <code>clippy::multiple_bound_locations</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0060546c3040e11b4f34e2e0214d640059731d21\"><code>0060546</code></a>\nRelease 2.2.6</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/210b027a67e42cd196f07cf8b2f0ee498a4b1a80\"><code>210b027</code></a>\nOpt-in mutable access on IndexSet</li>\n<li>See full diff in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.5...2.2.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.5&new-version=2.2.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:33:14Z",
          "tree_id": "5553aa8e2c940dc068b9e16fec788553999fbb23",
          "url": "https://github.com/hasura/ndc-postgres/commit/81ec8a888f0bca5bba6ba6d1aef0cffb8f2f7d48"
        },
        "date": 1711449956931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.648298,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.86114495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.455568957522736,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.231667949470427,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27486200583679204,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.996253,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.20039469999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.502034563989994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5477363127206587,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6467611241496162,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.104272,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.49867119999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.7533204191775,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.647986602572338,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45279763928046823,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.0437095,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.39769434999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.60943733147147,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.819069789132499,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39599388001681834,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.840221,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.931165,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.50496095210605,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.98437692786802,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41208228353879456,
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
          "id": "d9f9a4275ffd1cdf4a82214bc8677b82a6643ed5",
          "message": "chore(deps): Bump bytes from 1.5.0 to 1.6.0 (#384)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.5.0 to 1.6.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes 1.6.0 (March 22, 2024)</h2>\n<h3>Added</h3>\n<ul>\n<li>Add <code>Bytes::is_unique</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/643\">#643</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Fix changelog typo (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/628\">#628</a>)</li>\n<li>Fix some spelling mistakes (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/633\">#633</a>)</li>\n<li>Typo fix (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/637\">#637</a>)</li>\n<li>Fix broken links (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/639\">#639</a>)</li>\n<li>Add security policy (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/649\">#649</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Move comment to correct constant (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/629\">#629</a>)</li>\n<li>Various cleanup (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/635\">#635</a>)</li>\n<li>Simplify <code>UninitSlice::as_uninit_slice_mut()</code> logic (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/644\">#644</a>)</li>\n<li>Use <code>self.</code> instead of <code>Self::</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/642\">#642</a>)</li>\n<li><code>BytesMut</code>: Assert alignment of <code>Shared</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/652\">#652</a>)</li>\n<li>Remove unnecessary namespace qualifier (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/660\">#660</a>)</li>\n<li>Remove an unnecessary else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/662\">#662</a>)</li>\n<li>Remove unreachable else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/661\">#661</a>)</li>\n<li>make parameter mut in <code>From&lt;Vec&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/667\">#667</a>)</li>\n<li>Restore commented tests (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/665\">#665</a>)</li>\n<li>Use <code>sub</code> instead of <code>offset</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/668\">#668</a>)</li>\n<li>Calculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li><code>set_vec_pos</code> does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><code>get_vec_pos</code>: use <code>&amp;self</code> instead of\n<code>&amp;mut self</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li>Refactor <code>split_at</code>/<code>split_to</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li>Use <code>Iterator</code> from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><code>copy_to_bytes</code>: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li>Remove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.6.0 (March 22, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>Add <code>Bytes::is_unique</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/643\">#643</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Fix changelog typo (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/628\">#628</a>)</li>\n<li>Fix some spelling mistakes (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/633\">#633</a>)</li>\n<li>Typo fix (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/637\">#637</a>)</li>\n<li>Fix broken links (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/639\">#639</a>)</li>\n<li>Add security policy (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/649\">#649</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Move comment to correct constant (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/629\">#629</a>)</li>\n<li>Various cleanup (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/635\">#635</a>)</li>\n<li>Simplify <code>UninitSlice::as_uninit_slice_mut()</code> logic (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/644\">#644</a>)</li>\n<li>Use <code>self.</code> instead of <code>Self::</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/642\">#642</a>)</li>\n<li><code>BytesMut</code>: Assert alignment of <code>Shared</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/652\">#652</a>)</li>\n<li>Remove unnecessary namespace qualifier (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/660\">#660</a>)</li>\n<li>Remove an unnecessary else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/662\">#662</a>)</li>\n<li>Remove unreachable else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/661\">#661</a>)</li>\n<li>make parameter mut in <code>From&lt;Vec&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/667\">#667</a>)</li>\n<li>Restore commented tests (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/665\">#665</a>)</li>\n<li>Use <code>sub</code> instead of <code>offset</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/668\">#668</a>)</li>\n<li>Calculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li><code>set_vec_pos</code> does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><code>get_vec_pos</code>: use <code>&amp;self</code> instead of\n<code>&amp;mut self</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li>Refactor <code>split_at</code>/<code>split_to</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li>Use <code>Iterator</code> from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><code>copy_to_bytes</code>: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li>Remove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/ce8d8a0a029c0d296ade752ecc8c3e1ce9eee47f\"><code>ce8d8a0</code></a>\nchore: prepare bytes v1.6.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/681\">#681</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/536db06f168bdef967afbeac0561bf774e9a1315\"><code>536db06</code></a>\nUse ManuallyDrop instead of mem::forget (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/ca004117f86afccd36148dee7c8413cfaf9de6a4\"><code>ca00411</code></a>\nRemove commented tests for Bytes::unsplit (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/677\">#677</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/7968f6f83d17175683e04ce56aa48e44ed7d0d98\"><code>7968f6f</code></a>\nRemove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/c5fae00c76dbd1af7ea7b6cde7a9281d82ee7cd2\"><code>c5fae00</code></a>\ncopy_to_bytes: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/99584cc10d66cb6880a20c5ac9b9a960f9c17823\"><code>99584cc</code></a>\nUse Iterator from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/46289278f52a26c12298779f4aaebad1dcb26d35\"><code>4628927</code></a>\nRefactor split_at/split_to (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/1bcd2129d195a0722d8b5b1a16c7d33698701f2e\"><code>1bcd212</code></a>\nget_vec_pos: use &amp;self instead of &amp;mut self (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/f586ffc52589f01be1b4a44d6544b3d0226773d6\"><code>f586ffc</code></a>\nset_vec_pos does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/c6972d61328be113ec8e80c207815a4b84fe616c\"><code>c6972d6</code></a>\nCalculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.5.0...v1.6.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.5.0&new-version=1.6.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T10:54:06Z",
          "tree_id": "4bf0da33e6bbaa288c1930053af67d65d762abe7",
          "url": "https://github.com/hasura/ndc-postgres/commit/d9f9a4275ffd1cdf4a82214bc8677b82a6643ed5"
        },
        "date": 1711450910231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.268857,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.6313514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.286573707188637,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.272731665797934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25731583355090965,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.296869,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.2177365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.06504538314838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3091543711922995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.570233889078366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.504281,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.72105939999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.61527480499553,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5011615066631165,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44783005553577476,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.637831500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.10590915,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.38332211387443,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.009958468926321,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39566953682898726,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.302075,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.235226,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.658979292331885,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.72292786513102,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39949446254308296,
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
          "id": "8f4ab4c74ee87a2808832812c02b2aff3b9c931e",
          "message": "Nix: Switch to nixpkgs-unstable, rather than nixos-unstable. (#389)\n\n### What\n\nIf we're going to be unstable, let's go all the way.\n\nThis change was motivated by needing to upgrade cargo-machete to make it\nwork with Rust v1.77, and not having the upgrade in nixos-unstable.\n\n### How\n\nI switched `nixpkgs` to the default branch.",
          "timestamp": "2024-03-26T15:13:28Z",
          "tree_id": "b3a37e0993c243a2068a27b02f3155d04c23357a",
          "url": "https://github.com/hasura/ndc-postgres/commit/8f4ab4c74ee87a2808832812c02b2aff3b9c931e"
        },
        "date": 1711466358001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.553754,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.30600675000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.518671664018377,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.51844663827805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2721975374402645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.770299,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.9783585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.22598558842312,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.538211984996842,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6335994888200174,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.8078445,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.43035175,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.68884979628817,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.072369324265608,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4460123613105019,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.6895735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.42558774999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.34095227070501,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.994252815263785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42297726655046497,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.325182,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.6342552,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.1421790641774,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.635137757267358,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3996999040620021,
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
          "id": "7fbfa1718ad5729e7070e3ccba03598fba3e8b90",
          "message": "Upgrade ndc-spec to v0.1.1. (#390)\n\n### What\n\nThis includes:\n\n- type representations in the models\n- upgrading the OpenTelemetry SDK\n- adding a feature switch to support `rustls` instead of `native-tls`\n- a lot of enhancements to ndc-test\n\nndc-sdk was upgraded in https://github.com/hasura/ndc-sdk-rs/pull/1.\n\nWe do not actually specify type representations in this changeset. We\nwill add these in a follow-up change.\n\n### How\n\nI discovered we can specify workspace dependencies, which means the\nversions only need to go in one place. I am experimenting with this\nCargo feature in this changeset. If we like it, we may want to use it\nfor all dependencies.",
          "timestamp": "2024-03-27T11:12:17Z",
          "tree_id": "e1d06867fa357b854f4a503cd8b38803e189338a",
          "url": "https://github.com/hasura/ndc-postgres/commit/7fbfa1718ad5729e7070e3ccba03598fba3e8b90"
        },
        "date": 1711538460858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.122977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.86818149999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.215269604420815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.550462884867866,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25377588654359645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.069839,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.8145038,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.25453105354432,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.797214638409862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5539322683796559,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.171794,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.2658433,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.901432195400545,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.124450960186778,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44558390197609776,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.3941875,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.500514,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.86000126901347,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7291227224485155,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3878367127938132,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.4026675,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.1266169,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.600401158258165,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.275631453547774,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38361759645150967,
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
          "id": "cfd0d295ecff3b9f67c6bae8ffc7c8bf3a649794",
          "message": "Support introspecting composite types (#391)\n\n### What\n\nThis PR adds the ability of the introspection query to detect composite\ntypes, meaning user-defined record types that do not arise from a table\nbut exist as standalone definitions.\n\nThis even discovered a typo in the previous, manually crafted composite\ntype metadata.\n\nSupport for cockroachdb is limited here until\nhttps://github.com/cockroachdb/cockroach/issues/109675 is released.\n\n### How\n\n**Introspection Query** now captures composite types, filtering out the\ntables. Making metadata json out of these is quite similar to how we\nalready did tables, so no huge surprises here.\n\n**Occurring types logic** now becomes somewhat more complex because we\ncan no longer simply look at which type names are used in the\ncollections we track. A composite type occurring in say, a table column,\nmay refer to scalar types that don't occur anywhere else, and even other\ncomposite types. Occurring type discovery thus becomes an iterative\nprocedure rather than a single pass.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-28T13:01:26Z",
          "tree_id": "c686a674228ec8611166637cdba79a1aa1f4c97c",
          "url": "https://github.com/hasura/ndc-postgres/commit/cfd0d295ecff3b9f67c6bae8ffc7c8bf3a649794"
        },
        "date": 1711631256571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.150489,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.11206495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.91740664618708,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.818604719333404,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.261726100622139,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.82815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 144.42176294999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.553598572732895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.142937906167319,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5805992061269294,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.336603,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.9903346,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.20975258307339,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.5111463690110725,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4358497858628646,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 67.605176,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.23833400000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.31602430243152,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.785932920537938,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4184631518465419,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.867638,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 94.51360779999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.90250649347793,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.110196390015936,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4117607122858909,
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
          "id": "1f6193186ecd7a909b07d68c784cf8686d38f9a7",
          "message": "Use AURORA_CONNECTION_URI instead of inconsistent  variables (#394)\n\n### What\n\nInternally we use two variable names for the same purpose:\n`AURORA_CONNECTION_URI` and `AURORA_CONNECTION_STRING`. This PR renames\nall uses of `AURORA_CONNECTION_STRING` to `AURORA_CONNECTION_URI`.\n\n### How\n\nRename everything, and create a new action env variable in the repo.",
          "timestamp": "2024-03-28T14:12:49Z",
          "tree_id": "4adb4cd427d0629e94c808763b7d3294aa9c20a3",
          "url": "https://github.com/hasura/ndc-postgres/commit/1f6193186ecd7a909b07d68c784cf8686d38f9a7"
        },
        "date": 1711635522800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.322305,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.9372504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.697970737685214,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.079917640515067,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2554456748516744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.745784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.5804576,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.73140303816224,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9048771453352913,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5461786935772396,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.534227,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.34278599999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.562614775293014,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.60110373870053,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4056118487497052,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.273703999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.301262,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.74262533881452,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.3885158796684465,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3938610811343722,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.6338175,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.42140045,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.985071377192924,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9865390916112773,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39105180825290026,
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
          "id": "fe986fb4dad97a98fa2dc5ffb2d73067268d8ce9",
          "message": "Iteratively apply implicit casts (#392)\n\n### What\n\nThis PR improves the handling of implicit casts during introspection by\ncomputing the transitive closure of implicit casts.\n\nThis is necessary to e.g. support any domain types defined over\n`varchar`.\nFrom `domain-types.sql`:\n\n```\n-- This type tests that we consider implicit casts iteratively. If we didn't\n-- \"Phone\" wouldn't have any comparison operators defined. with iterative\n-- implicit casting, Phone gets to inherit the oprators of \"text\" via the\n-- successive casts \"Phone -> varchar -> text\".\nCREATE DOMAIN \"Phone\" varchar(20);\n```\n\nThis type is used in the AdventureWorks sample database. Without this\nchange we don't generate any comparison operators for `Phone`, which\nmeans e.g. it cannot participate in relationships.\n\n### How\n\nIn order to compute the transitive closure we use a recursive CTE\nstatement, where we combinatorically collect cast-arrows, taking care to\nstop whenever we encounter a cycle, which may occur (e.g., `varchar` and\n`text` values are completely interchangeable).\n\nIn addition we record the path of types each transitive cast takes,\nwhich we can now use for debugging as well as preferring \"less casted\"\nvariants over \"more casted\" variants (of comparison functions for\nexample) rather than simply \"casted or not\" variants.\n\nIn making this I discovered that both cast paths `varchar -> text` and\n`varchar -> bpchar` exist, and many of the same functions are defined\nfor both `text` and `bpchar`. Because we use lexicographic sorting as a\ntie-breaker we would sometimes wind up functions taking `bpchar`\narguments. Since `text` seems like a much more conventional choice most\ntimes I simply elected to censor the `varchar -> bpchar` and `text ->\nbpchar` casts.\n\nAnother side-effect of this is that, because a few functions on\ngeography/geometry types such as `st_covers` etc. are also defined for\n`text` _directly_ they now become available on all types that are\niteratively implicitly castable to text. This is an issue to address\nlater however.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-29T08:45:08Z",
          "tree_id": "eb872a0ea900d1693d0a57d51054f10dbf8be35e",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe986fb4dad97a98fa2dc5ffb2d73067268d8ce9"
        },
        "date": 1711702315700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 45.740107,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 68.26641090000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.560301952665412,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.113010769302598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23641772714967138,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 84.808824,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 121.16581299999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.16315007766059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4968693348731676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47542907783506233,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 61.816849500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.143674,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.6534380832268,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.171946621423274,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3783525495660386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 57.5795565,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 82.02267235,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 35.576302065669836,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9910183181221015,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3557308433609312,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 56.392954,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 79.7584439,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.61516361598398,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8142678429717947,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34754596859433406,
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
          "id": "805bc53209b9c8f7ca184b5a76bf86da5f47a1a3",
          "message": "prepare v0.5.2 (#396)\n\n### What\n\nPrepare for v0.5.2 release.\n\n### How\n\nUpdate the changelog and bump the version.",
          "timestamp": "2024-03-29T13:35:37Z",
          "tree_id": "e9c0b0daaa98a65c97b640d04af9c78eec380360",
          "url": "https://github.com/hasura/ndc-postgres/commit/805bc53209b9c8f7ca184b5a76bf86da5f47a1a3"
        },
        "date": 1711719672955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.028807,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.7908962,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.396681730916026,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.32891098507903,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24961090655394408,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.734045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.06250125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.3399536455529,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2900916389148733,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5922179556227765,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.243386,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.606424,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.91802752264868,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.770362993145028,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42363803879551976,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.960581000000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.566728,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.89262371581422,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.640839695524349,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40596143097554344,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.576914,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.455421,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.15624736781095,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.771770771479311,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3905246517416216,
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
          "id": "9b606a1ee8386c9f19e7838908ed22bfcfb1368d",
          "message": "bring back archived configs (#395)\n\n### What\n\nWe no longer break compatibility, so it's time to bring back the test\nthat checks that we can still read older configurations.\n\n### How\n\nThe script now has to keep a directory rather than a file.",
          "timestamp": "2024-04-01T06:36:28Z",
          "tree_id": "dc223e948505631ab6c92cad1005c6cc105943fc",
          "url": "https://github.com/hasura/ndc-postgres/commit/9b606a1ee8386c9f19e7838908ed22bfcfb1368d"
        },
        "date": 1711953810382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.959799,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.67073869999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.626965012782723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.663248926357088,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24805612679157998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.550532,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.9477878,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.21137524181729,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0717593000575576,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5958536079134193,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.08887,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.3814335,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.02266497841793,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.490492969378103,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41873838939096775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.378248,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.03644279999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.42330213855072,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.918164301257093,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3953059903904272,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.493289,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.9896838,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.68844622253475,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.143046330350558,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38648340550878124,
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
          "id": "5ec39c09b81754bc55f3d5480082c2065902efa7",
          "message": "Add enum type representations (#397)\n\n### What\n\nndc-spec 0.1.1 introduce an [optional type representation\nhint](https://hasura.github.io/ndc-spec/specification/schema/scalar-types.html#type-representations).\nIn this PR we provide type representation for enum values.\n\n### How\n\n1. We add a new `TypeRepresentations` field to our metadata, similar to\naggregate functions and comparison operators\n2. We already query for the enum types and variants, now we also return\nthose from sql to rust and into the metadata.\n3. For each scalar type, we try to look for their name in type reps, and\nreturn it if we find it.",
          "timestamp": "2024-04-01T10:01:04Z",
          "tree_id": "31ecb1ecb9eef9525f5d4ccced4b88da49fa2043",
          "url": "https://github.com/hasura/ndc-postgres/commit/5ec39c09b81754bc55f3d5480082c2065902efa7"
        },
        "date": 1711966019874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.422862,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.13563219999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.04490759097836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.778425093893041,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2573341590613401,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.693216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.678538,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.90244183798379,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2070172392886747,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6093492151704625,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.070257,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.37076695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.762899612960666,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.82423676682339,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4237451054203116,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.203752,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.3483009,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.73106970782951,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.339902714747872,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.408211135579466,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.313469,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.60537549999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.53500188196903,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.333684382856056,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3801765335778548,
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
          "id": "8ee6d48cb89bd265137bcaba814dc50ed2594692",
          "message": "experimental mutations version with boolean expressions (#393)\n\n### What\n\nWe introduce a new experimental mutations version. This version is\nintended to be used as a WIP version not for public consumption.\nIt also introduces an update delete mutation that contains a `filter`\npredicate field.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n1. Introduce a new mutations version: `VeryExperimentalWip`.\n2. Take the existing `insert`, `delete`, `translate` and `generate`\nmodules, duplicate them, and place them in `v1/` and `experimental/`\ndirectories.\n3. Add and modify existing code to dispatch on operations from the right\nmodule according to the mutations version in the config.\n4. Add a new `filter` field for the delete operation which will be\ninterpreted as a boolean expression and added as a `WHERE` clause in the\ndelete sql.\n5. Expose this new field as part of the schema as a boolean expression\nover the collection.",
          "timestamp": "2024-04-01T11:15:23Z",
          "tree_id": "2ed04c690af2d2f5d4873ae4bfa4f1899f3bb505",
          "url": "https://github.com/hasura/ndc-postgres/commit/8ee6d48cb89bd265137bcaba814dc50ed2594692"
        },
        "date": 1711970556816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.599962,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 71.4641697,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.995279912081834,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.991432910978354,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25052409273283716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.06995850000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.74605595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.49905862820502,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1971814121423776,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6046555877643532,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.454666,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.90929219999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.40527922411886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.534391376226623,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42841659225972356,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.203136,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.0887162,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.777766419062964,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.647525184168224,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37441975922465914,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.6382605,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.868973,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.200961966037575,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.314626287493731,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4053774147405919,
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
          "id": "e6e547b673de7cc939a0a625c07ab062b355ed54",
          "message": "Support type representations in general (#398)\n\n### What\n\nThis PR adds support for type representations for base types and domain\ntypes, building on top of the existing support for type representation\nhinting of enum types.\n\nNote that the wide numeric types default to numeric representation, see\nthe comment in the code. This will be relayed in the user docs in a\nfollow-up PR.\n\n### How\n\nThe introspection query is seeded with a list of type representations\nfor base types, which it will use to build the final list of\nrepresenations for base types, domain types, and enum types.",
          "timestamp": "2024-04-01T13:49:41Z",
          "tree_id": "2f7cb48217c96ed198c7da96154c2f9348ba8e0b",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6e547b673de7cc939a0a625c07ab062b355ed54"
        },
        "date": 1711979809956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.021865000000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.7647408,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.468922147861203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.76404029259108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25603244904995753,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.708857,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.20776775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.29945287631306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5306275028737133,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5616010102084836,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.606907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.05102004999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.70903133544671,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.609647939658572,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4475100180734186,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.290445,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.68979039999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.64932017557108,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.783553419660485,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3992526148657045,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.339738,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.2022954,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.241803380673545,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.252465017711458,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.384611089600575,
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
          "id": "146261ee0c61db3b0f3be791395db3a1d064d7f5",
          "message": "chore(deps): Bump tokio from 1.36.0 to 1.37.0 (#400)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.36.0 to 1.37.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.37.0</h2>\n<h1>1.37.0 (March 28th, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>fs: add <code>set_max_buf_size</code> to\n<code>tokio::fs::File</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6411\">#6411</a>)</li>\n<li>io: add <code>try_new</code> and <code>try_with_interest</code> to\n<code>AsyncFd</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6345\">#6345</a>)</li>\n<li>sync: add <code>forget_permits</code> method to semaphore (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6331\">#6331</a>)</li>\n<li>sync: add <code>is_closed</code>, <code>is_empty</code>, and\n<code>len</code> to mpsc receivers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6348\">#6348</a>)</li>\n<li>sync: add a <code>rwlock()</code> method to owned\n<code>RwLock</code> guards (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6418\">#6418</a>)</li>\n<li>sync: expose strong and weak counts of mpsc sender handles (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6405\">#6405</a>)</li>\n<li>sync: implement <code>Clone</code> for <code>watch::Sender</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6388\">#6388</a>)</li>\n<li>task: add <code>TaskLocalFuture::take_value</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6340\">#6340</a>)</li>\n<li>task: implement <code>FromIterator</code> for <code>JoinSet</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6300\">#6300</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>io: make <code>io::split</code> use a mutex instead of a spinlock\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6403\">#6403</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>docs: fix docsrs build without net feature (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6360\">#6360</a>)</li>\n<li>macros: allow select with only else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6339\">#6339</a>)</li>\n<li>runtime: fix leaking registration entries when os registration fails\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6329\">#6329</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>io: document cancel safety of <code>AsyncBufReadExt::fill_buf</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6431\">#6431</a>)</li>\n<li>io: document cancel safety of <code>AsyncReadExt</code>'s primitive\nread functions (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6337\">#6337</a>)</li>\n<li>runtime: add doc link from <code>Runtime</code> to\n<code>#[tokio::main]</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6366\">#6366</a>)</li>\n<li>runtime: make the <code>enter</code> example deterministic (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6351\">#6351</a>)</li>\n<li>sync: add Semaphore example for limiting the number of outgoing\nrequests (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6419\">#6419</a>)</li>\n<li>sync: fix missing period in broadcast docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6377\">#6377</a>)</li>\n<li>sync: mark <code>mpsc::Sender::downgrade</code> with\n<code>#[must_use]</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6326\">#6326</a>)</li>\n<li>sync: reorder <code>const_new</code> before <code>new_with</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6392\">#6392</a>)</li>\n<li>sync: update watch channel docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6395\">#6395</a>)</li>\n<li>task: fix documentation links (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6336\">#6336</a>)</li>\n</ul>\n<h3>Changed (unstable)</h3>\n<ul>\n<li>runtime: include task <code>Id</code> in taskdumps (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6328\">#6328</a>)</li>\n<li>runtime: panic if <code>unhandled_panic</code> is enabled when not\nsupported (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6410\">#6410</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6300\">#6300</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6300\">tokio-rs/tokio#6300</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6326\">#6326</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6326\">tokio-rs/tokio#6326</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6328\">#6328</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6328\">tokio-rs/tokio#6328</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6329\">#6329</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6329\">tokio-rs/tokio#6329</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6331\">#6331</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6331\">tokio-rs/tokio#6331</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6336\">#6336</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6336\">tokio-rs/tokio#6336</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6337\">#6337</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6337\">tokio-rs/tokio#6337</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/9c337ca1a306be38e3474082be14bdef4bcb45b5\"><code>9c337ca</code></a>\nchore: prepare Tokio v1.37.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6435\">#6435</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e5425014392de0a44c27fac054472b4c3926ef26\"><code>e542501</code></a>\nio: document cancel safety of <code>AsyncBufReadExt::fill_buf</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6431\">#6431</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4601c84718aafa9e46fed1c16f31dd500052b368\"><code>4601c84</code></a>\nstream: add <code>next_many</code> and <code>poll_next_many</code> to\n<code>StreamMap</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6409\">#6409</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/deff2524c354d3d3038e1c3813032701946a5c68\"><code>deff252</code></a>\nutil: document cancel safety of <code>SinkExt::send</code> and\n<code>StreamExt::next</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6417\">#6417</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4565b81097e8938761431592c0ad36df3bd20cd2\"><code>4565b81</code></a>\nsync: add a <code>rwlock()</code> method to owned <code>RwLock</code>\nguards (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6418\">#6418</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3ce4720a4532e40c78f7d851b1cfb8ea26542177\"><code>3ce4720</code></a>\nsync: add <code>is_closed</code>, <code>is_empty</code>, and\n<code>len</code> to mpsc receivers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6348\">#6348</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/8342e4b524984d5e80168da89760799aa1a2bfba\"><code>8342e4b</code></a>\nutil: assert compatibility between <code>LengthDelimitedCodec</code>\noptions (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6414\">#6414</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4c453e9790d1cc5a2fd5c13fc2f63a145a3fd8da\"><code>4c453e9</code></a>\nreadme: add description about benchmarks (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6425\">#6425</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/1846483f1953f6ac4dd89f434e78ff99eb0c92f9\"><code>1846483</code></a>\nsync: expose strong and weak counts of mpsc sender handles (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6405\">#6405</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/baad270b98acbc735f9e8baddc93ae8a18a652ce\"><code>baad270</code></a>\nsync: add Semaphore example for limiting the number of outgoing requests\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6419\">#6419</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.36.0...tokio-1.37.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.36.0&new-version=1.37.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-04-02T09:57:08Z",
          "tree_id": "175b92670dbf6920300d62097533854024da949d",
          "url": "https://github.com/hasura/ndc-postgres/commit/146261ee0c61db3b0f3be791395db3a1d064d7f5"
        },
        "date": 1712052236989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.660432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.949161,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.966656859663246,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.479650002730196,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24667085238359032,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.487441,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.52614075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.37707845382924,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.975057100593304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5658263233821528,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.142812,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.66991029999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.486035325846494,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.0104430684114405,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4171083483757098,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.2118215,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.09910454999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.503839594151884,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.314804487897021,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37463971747984076,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.738028,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.673677,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.89068210545932,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.092110038569189,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.365911475374368,
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
          "id": "5df027b22c83d81450a1191356133e5e4e8a397e",
          "message": "chore(deps): Bump insta from 1.37.0 to 1.38.0 (#399)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.37.0 to 1.38.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/releases\">insta's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.38.0</h2>\n<h2>Release Notes</h2>\n<ul>\n<li>\n<p><code>Filters</code> is now constructible from\n<code>IntoIterator</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/400\">#400</a></p>\n</li>\n<li>\n<p>Change <code>std</code> macro calls to be fully qualified. This fixes\nissues where\nthe prelude was not used or the macros were overridden. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a></p>\n</li>\n</ul>\n<h2>Install cargo-insta 1.38.0</h2>\n<h3>Install prebuilt binaries via shell script</h3>\n<pre lang=\"sh\"><code>curl --proto '=https' --tlsv1.2 -LsSf\nhttps://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-installer.sh\n| sh\n</code></pre>\n<h3>Install prebuilt binaries via powershell script</h3>\n<pre lang=\"sh\"><code>powershell -c &quot;irm\nhttps://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-installer.ps1\n| iex&quot;\n</code></pre>\n<h2>Download cargo-insta 1.38.0</h2>\n<table>\n<thead>\n<tr>\n<th>File</th>\n<th>Platform</th>\n<th>Checksum</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-aarch64-apple-darwin.tar.xz\">cargo-insta-aarch64-apple-darwin.tar.xz</a></td>\n<td>Apple Silicon macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-aarch64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-apple-darwin.tar.xz\">cargo-insta-x86_64-apple-darwin.tar.xz</a></td>\n<td>Intel macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-pc-windows-msvc.zip\">cargo-insta-x86_64-pc-windows-msvc.zip</a></td>\n<td>x64 Windows</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-pc-windows-msvc.zip.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz\">cargo-insta-x86_64-unknown-linux-gnu.tar.xz</a></td>\n<td>x64 Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz\">cargo-insta-x86_64-unknown-linux-musl.tar.xz</a></td>\n<td>x64 MUSL Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz.sha256\">checksum</a></td>\n</tr>\n</tbody>\n</table>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.38.0</h2>\n<ul>\n<li>\n<p><code>Filters</code> is now constructible from\n<code>IntoIterator</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/400\">#400</a></p>\n</li>\n<li>\n<p>Change <code>std</code> macro calls to be fully qualified. This fixes\nissues where\nthe prelude was not used or the macros were overridden. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a></p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ff83624376ee54e558481eec9f1e64af003c64d4\"><code>ff83624</code></a>\n1.38.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/2e79e3d70ee006f4f9b1995bd7ba516f78712419\"><code>2e79e3d</code></a>\nAdd changelog entry</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/9afc3c8538316c9660d5362dde51fe818447c6c8\"><code>9afc3c8</code></a>\nMerge branch 'master' of github.com:mitsuhiko/insta</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/1d702385e13cdfc2bf81616c7b4b349501856c12\"><code>1d70238</code></a>\nMake Filters constructible from IntoIterator</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/e90e71de2af1e00ebeda45fd134b22ac92a289dd\"><code>e90e71d</code></a>\nChange std macro calls to be fully qualified (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/4dcccca2c7e25d205351f7215a9a9f9e7a79e98d\"><code>4dcccca</code></a>\nMove insta to folder (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ca2faf9a1296f6bb4af743c2aff239be6b16669d\"><code>ca2faf9</code></a>\nConfigure cargo-dist</li>\n<li>See full diff in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.37.0...1.38.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.37.0&new-version=1.38.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-04-02T10:01:29Z",
          "tree_id": "03c0764bc143f9f1166215de9a3c71fe6efe0d72",
          "url": "https://github.com/hasura/ndc-postgres/commit/5df027b22c83d81450a1191356133e5e4e8a397e"
        },
        "date": 1712052773874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.097206,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.07852375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.845707999055836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.8445066110004085,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2554647083373199,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.908604,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.109597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.06233987496495,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.929904352969068,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5317468120250352,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.241585,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.0045561,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.172856930850365,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.399688804657551,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4170922677683806,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.345518,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.9496516,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.0428395563244,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.182533142031652,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38346250853575553,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.965523,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.34893539999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.676969610215956,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.550617366951521,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3766674837234947,
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
          "id": "c87f6352742a9e15683b045aabbcfa9378946b18",
          "message": "Enable pedantic Clippy warnings, and disable anything that fails. (#402)\n\n### What\n\nTwo reasons:\n\n1. so we don't add more unknowingly, and\n2. so we can eradicate them over time, if we feel like it.\n\n### How\n\nI added the lints to `Cargo.toml`.",
          "timestamp": "2024-04-03T13:55:43Z",
          "tree_id": "b2e714fd32d9bae4a4542d5fa847d2ddcfb16d6c",
          "url": "https://github.com/hasura/ndc-postgres/commit/c87f6352742a9e15683b045aabbcfa9378946b18"
        },
        "date": 1712152882408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.27486,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 71.0126355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.936268827975233,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.04366123182897,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2448936382785493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.546756,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.2111796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.36495892272761,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1465688870712185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5743786874110688,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.37042,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.86372779999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.89325851465429,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.129042936234626,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42409538430946186,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.959939500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.6267882,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.8349075228476,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.569534556602633,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39375165134909257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.932859,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.94695275,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.16019376761642,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.531378245871643,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37865273534572985,
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
          "id": "db09d203e9d2351b6a5e3056c5465f4b87396a5d",
          "message": "Use references more often to avoid cloning. (#403)\n\n### What\n\nOften, we accept parameters by value when a reference would do. This\nmeans the caller might have to unnecessarily clone the value.\n\nClippy helped me figure out where this was unnecessary.\n\nThis changeset was brought to you by waiting for a meeting to start.\n\n### How\n\nI enabled some pedantic Clippy warnings and followed the trail.",
          "timestamp": "2024-04-03T17:11:14Z",
          "tree_id": "e17e751cf9749e926d2aade3606585d6315a5939",
          "url": "https://github.com/hasura/ndc-postgres/commit/db09d203e9d2351b6a5e3056c5465f4b87396a5d"
        },
        "date": 1712164793482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.289491,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.29574095,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.455183411739913,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.490398335007779,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24344425224717348,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.59751800000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.47929735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.653116183846954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5994959420278363,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4885996564217004,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.35037650000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.81085889999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.49388903623109,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.69387178800315,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41508503077076714,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.310306,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 92.7582337,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.09569670827008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.501909714758355,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3718899606038602,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.771263000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.91006499999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.77269286152636,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.347739777272359,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36689114959041735,
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
          "id": "87eb8b65e3151b807f3e27357568a0ca96e79135",
          "message": "bugfix: The schema for native query procedures should return _response object (#405)\n\n### What\n\nThe schema for native queries procedure should specify the result type\nto be a _response object (which contains affected_rows / returning\nfields) instead of just the returning fields.\n\n### How\n\nUse the dedicated method for creating procedure info like we do for\nother procedure schema.",
          "timestamp": "2024-04-04T13:02:38Z",
          "tree_id": "70f2268589803610d7ccf1492a1448f80e7f812a",
          "url": "https://github.com/hasura/ndc-postgres/commit/87eb8b65e3151b807f3e27357568a0ca96e79135"
        },
        "date": 1712236140178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.974722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.79171294999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.06094465683156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.466422928289767,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2447319772280545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.807271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.052107,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.08625436861598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1280018575001094,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5362106474062327,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.16536,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.341381,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.92532237029912,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.622024042800909,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42482408968175206,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.75921199999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 94.48883665,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.88433243130626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.034229447227851,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37826958550685563,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.113897,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.44843900000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.3958306290594,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.479826043548734,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37431907406678144,
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
          "id": "9c811bbbb6235687b7a42b620269d080c9d9e279",
          "message": "Support nested fields of object type (#404)\n\n### What\n\nThis PR adds support for selecting nested fields that arise from\ncomposite objects.\n\nThe case for nested fields which are arrays will be treated in a\nfollowup PR.\n\n### How\n\n* Handling of field selection is now recursive and lives in its own\nfunction.\n* A dedicated case handling nested fields has been added. Each field at\neach layer of nesting adds another lateral join\n\nThe SQL generated is of the form\n```\n///   SELECT\n///     coalesce(json_agg(row_to_json(\"%6_rows\")), '[]') AS \"rows\"\n///   FROM\n///     (\n///       SELECT\n///         \"%3_nested_fields_collect\".\"collected\" AS \"result\"\n///       FROM\n///         <current table> AS \"%0_<current table>\"\n///         LEFT OUTER JOIN LATERAL (\n///           SELECT\n///             (\"%0_<current table>\".\"<composite column>\").*\n///         ) AS \"%2_nested_field_bound\" ON ('true')\n///         LEFT OUTER JOIN LATERAL (\n///           SELECT\n///             row_to_json(\"%4_nested_fields\") AS \"collected\"\n///           FROM\n///             (\n///               SELECT\n///                 \"%2_nested_field_bound\".\"<nested column>\" AS \"<nested field alias>\"\n///             ) AS \"%4_nested_fields\"\n///         ) AS \"%3_nested_fields_collect\" ON ('true')\n///     ) AS \"%6_rows\"\n```",
          "timestamp": "2024-04-04T18:28:08Z",
          "tree_id": "7ad1ce93c70f247bec5167f9f1cfc7be8d0b49a3",
          "url": "https://github.com/hasura/ndc-postgres/commit/9c811bbbb6235687b7a42b620269d080c9d9e279"
        },
        "date": 1712255618544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.1430235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.08914779999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.631739698845347,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.701237361628689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24462533817853527,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.377912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.21463579999985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.533713665233705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8015578143691684,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5295245983568797,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.6022035,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.98750399999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.89271996664311,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.08196629950843,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4070475613063083,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.8007165,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.52671925,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.30742020528945,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.629624376669163,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3816384728986842,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.294828,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.617943,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.163856201115564,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.301347386322014,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3628345272231096,
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
          "id": "936654e0d3266660bf7fc816825372360446d6ca",
          "message": "Fix the name of experimental generated inserts. (#406)\n\n### What\n\nThe name for generated inserts with the experimental flag should be\nprefixed with `experimental_` instead of `v1`.",
          "timestamp": "2024-04-05T09:19:07Z",
          "tree_id": "b5040bd88e8a11d76a4db63e5d889e460cf2d81a",
          "url": "https://github.com/hasura/ndc-postgres/commit/936654e0d3266660bf7fc816825372360446d6ca"
        },
        "date": 1712309159281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.05776,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.8805738,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.204548002500943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.457727368090751,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24061652901510744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.00915649999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.02512275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.75199065632657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.045750809541694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.52895577229868,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.589597,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.77870759999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.99998118858037,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4541799751112805,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40936784014736327,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.2013395,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.42777115,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.36940029452879,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.95316557996027,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38494853506882004,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.467945,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.202937,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.70773380226769,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.350489536950583,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38555346852680494,
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
          "id": "e709c186ea143fe6da7085d7dd7e7b0e027e62e4",
          "message": "Use different PAT for running e2e tests (#410)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUse a token that does not expire for running e2e tests.",
          "timestamp": "2024-04-08T09:35:06Z",
          "tree_id": "bb07c88d1692b67fd67ded9beaba4169e347bd7b",
          "url": "https://github.com/hasura/ndc-postgres/commit/e709c186ea143fe6da7085d7dd7e7b0e027e62e4"
        },
        "date": 1712569275567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.6494685,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.8802348,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.390348105572592,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.696857047161835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.230824208668903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.224016,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.7719057,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.56549736281116,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.7607686277276784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5215596138257028,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.046439,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.3676145,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.07990548515874,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.445680834397855,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39668968921510067,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.187870000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.22337575,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.905621412271564,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.486566665731168,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37065245058725393,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.369087,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.771422,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.909464525716295,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.543027199209796,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3892593125452644,
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
          "id": "8df830b6124bcda4ff769aa0f182a6619ca71df8",
          "message": "ndc-spec 0.1.2 (#408)\n\n### What\n\nSupport ndc-spec v0.1.2.\nThis includes changing the type representations of some types.\n\n### How\n\nThe type representation has changed. We try to keep this change\nbackwards compatible by mapping deprecated variants (Number, Integer) to\nnew variants, and update types to more specific reps that didn't exist\nbefore.\n\nWe also have a problem with representing int8 now. ndc-spec v0.1.2\ndefines Int64 to be represented as a json string, which is not what we\ndo. So we either have to lie (say it's an Int32 when it isn't) or break\ncompatibility and cast int8 to string.\nIn this PR I did the former, and I'll introduce the latter change next.",
          "timestamp": "2024-04-08T13:12:58Z",
          "tree_id": "501be2e4c997360dc05c9b052f82373837b3834c",
          "url": "https://github.com/hasura/ndc-postgres/commit/8df830b6124bcda4ff769aa0f182a6619ca71df8"
        },
        "date": 1712582375921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.8136045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.03278875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.206059493019545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.715278020941433,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2377886444956472,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.029376,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.1465658,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.15101384656366,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4957102505844304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.466974825713209,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.881225,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.172464,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.619009142974214,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4068418441890245,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3989382237470886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.985429499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.9731548,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.79479072917984,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.165066827037791,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.34580792685999684,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.535084,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.42180779999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.263225288803724,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.538230458230608,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3551523171037815,
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
          "id": "87c2ef3a2e651984847b0ed91fc5bb1f9b472c6d",
          "message": " Support nested fields of array type (#409)\n\n### What\n\nThis PR adds support for selecting nested fields that arise from\ncomposite arrays.\n\n### How\n\nThis builds on the earlier work for nested field selection support for\nobjects.\n\nThe main change is that the lateral joins that project the nested field\nhave to be nested rather than adjacent as well, since there are multiple\nrows in the case of arrays.\n\nThe generated SQL is now of the form:\n```\nLEFT OUTER JOIN LATERAL (\n  SELECT\n    <collect_expression> AS \"collected\"\n  FROM\n    (\n      < select of translate_fields(fields, nested_field_binding_alias, ... )\n        which includes joins from recursive calls>\n       FROM\n         (\n            SELECT\n             (<field_binding_expression>).*\n         ) AS <nested_field_binding> ON ('true')\n     ) AS <nested_fields>\n) AS <nested_fields_collect> ON ('true')\n```\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2024-04-08T13:31:58Z",
          "tree_id": "313386c07f949ce47110e80f38ef492345bbbf32",
          "url": "https://github.com/hasura/ndc-postgres/commit/87c2ef3a2e651984847b0ed91fc5bb1f9b472c6d"
        },
        "date": 1712583551234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.999967,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.74898549999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.21501181301148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.45261192157566,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22599125357074815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.369945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 126.129033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.699961026571685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5762072288673252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.46140168725083786,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.8305,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.07285609999992,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.978718956161366,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.83564305301735,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38032767888225905,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.2394015,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.2126747,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.70256258736924,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.523199186145746,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37254135890919576,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.9801,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.20376879999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.68533516149339,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.985299484858153,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3752394362527042,
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
          "id": "d695f98246a0737fa8b25b24d749a9bd6cbfe9c5",
          "message": "bugfix: allow aliasing returning and affected_rows fields (#407)\n\n### What\n\nIt should be possible to alias the returning and affected_rows fields\nwhen running a mutation.\nThis is doubly important because this is what the cli/lsp/engine do by\ndefault for `affected_rows` :)\n\n### How\n\nInstead of having the alias satisfy the field name, we ask the Field to\ndo that.\nWe traverse the result fields, find the ones named \"returning\" and\n\"affected_rows\", and use that, instead of trying to fetch by the alias\nname in the fields map.",
          "timestamp": "2024-04-08T13:59:02Z",
          "tree_id": "c68d101598dc58a811fe77866614e0582b2c4ec8",
          "url": "https://github.com/hasura/ndc-postgres/commit/d695f98246a0737fa8b25b24d749a9bd6cbfe9c5"
        },
        "date": 1712585120962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.554441999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.71546465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.348221209725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.710958664270766,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23941757235734143,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.690564,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.83006749999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.60192103506096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9510573004116694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5151465921064373,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.7062895,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.9144045,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.33074968342117,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.465134309540481,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4157684849281743,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.22938,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.79391879999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.09107912849571,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.791459366100895,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3915770392295979,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.8177125,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.55710629999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.10739010428148,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.65740805992818,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37154824862206126,
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
          "id": "216840b16cb798b8c63238dbcbadfd8af5947ac0",
          "message": "Don't tell people to use the CLI's `initialize` command. (#414)\n\n### What\n\nThe CLI is typically intended to be used as a plugin to `ddn`, which\nonly exposes `update`, not `initialize`. Telling people to use this\ndoesn't really help them.\n\n### How\n\nI used my big `Delete` button.",
          "timestamp": "2024-04-08T15:34:46Z",
          "tree_id": "70e8c6747daf15ab98180eeed8e2171313c9f60b",
          "url": "https://github.com/hasura/ndc-postgres/commit/216840b16cb798b8c63238dbcbadfd8af5947ac0"
        },
        "date": 1712590947413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.081845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.50103840000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.240749776263183,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.97595251323148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23612166574774357,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.3618125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.5309161,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.89629299444975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.555978014545488,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4830297255502871,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.0749715,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.9279111,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.481085855575756,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.335990631064803,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40748364751817395,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.115054,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.89180449999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.075543018707066,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.448413480997274,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3806086769279291,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.766765500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.64138595,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.56055387042789,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.514374764055894,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36841338994426776,
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
          "id": "4f845f8c950c1cacc8af62b6ef15701e844ed651",
          "message": "add full sha for ndc-sdk-rs (#415)\n\n### What\n\nSee comment\nhttps://github.com/hasura/ndc-postgres/pull/408#discussion_r1555849323",
          "timestamp": "2024-04-09T16:04:37Z",
          "tree_id": "18972e454513bc840da7fc82fbc79afd1e63bd19",
          "url": "https://github.com/hasura/ndc-postgres/commit/4f845f8c950c1cacc8af62b6ef15701e844ed651"
        },
        "date": 1712679081533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.4610375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 72.27461529999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.11669281842671,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.333917955839336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24439872659805367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.14118300000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.65781704999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.84993240200994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.117589375917902,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5605574230763433,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.392311,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.45696449999991,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.58481484862753,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.93003819453881,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.428842702542167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.1246265,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.91058249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.36497169205596,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.796247639853227,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39397495654235315,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.197361,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 89.31618939999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.65878589293873,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.324940429550892,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37013573747469464,
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
          "id": "8faf87e99800520585e237142a709b39bc4fadfe",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 1.5.1 to 2.0.0 (#413)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 1.5.1 to 2.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.0</h2>\n<h2>BREAKING CHANGES</h2>\n<ul>\n<li>Migrate action to Node.js 20</li>\n<li><code>compose-file</code> validation: at least one compose file MUST\nexist (default one is <code>docker-compose.yml</code>), every given\ncompose files MUST exist</li>\n</ul>\n<h2>Changelog</h2>\n<h3>Features</h3>\n<ul>\n<li>Migrate to Node.js 20 and TypeScript. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/56\">#56</a>)</li>\n<li>Make docker-compose cwd aware. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/61\">#61</a>)</li>\n<li>Add logs debug on post. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/63\">#63</a>)</li>\n<li>Log docker-compose version. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/66\">#66</a>)</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Ensure given docker-compose file(s) are valid and at least one is\nprovided. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/65\">#65</a>)</li>\n</ul>\n<h3>Documentation Updates</h3>\n<ul>\n<li>Multiple updates to actions and workflows documentation. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/51\">#51</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/52\">#52</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/53\">#53</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/59\">#59</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/62\">#62</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/64\">#64</a>)</li>\n</ul>\n<h3>Dependency Updates</h3>\n<ul>\n<li>Bumped the <code>github-actions-dependencies</code> group with 3\nupdates. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/46\">#46</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/57\">#57</a>)</li>\n<li>Bumped <code>docker-compose</code> from 0.24.1 to 0.24.7. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/48\">#48</a>)</li>\n<li>Bumped the <code>actions-dependencies</code> group with 1 update.\n(<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/58\">#58</a>)</li>\n<li>Bumped the <code>npm-dev-dependencies</code> group with 1 update.\n(<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/67\">#67</a>)</li>\n</ul>\n<h3>Continuous Integration</h3>\n<ul>\n<li>Upgrade GitHub Actions. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/60\">#60</a>)</li>\n<li>Added <code>--abort-on-container-exit</code> option in tests. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/18\">#18</a>)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/46\">hoverkraft-tech/compose-action#46</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0\">https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/802a148945af6399a338c7906c267331b39a71af\"><code>802a148</code></a>\nchore(deps-dev): bump the npm-dev-dependencies group with 1 update</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/78f44f26f9eaf089ebb0671bb6c8216dc8235c11\"><code>78f44f2</code></a>\ntest: --abort-on-container-exit option</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/2bd57c29bd08e15357e29ad91b1d1b4dd2381be1\"><code>2bd57c2</code></a>\nfix: ensure given docker-compose file(s) are valid and at least one is\nprovided</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8d12e916efa9c7beacddd68048917ec225c170bf\"><code>8d12e91</code></a>\nfeat: log docker-compose version</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/99447ae4bd1c49fbfd4b67185aa1356b6d5235a9\"><code>99447ae</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/bc90ff6758fb86e4e67164e57bc87873f786cf44\"><code>bc90ff6</code></a>\nfeat: add logs debug on post</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/a48c80beab6523b082f33307a278dff9aa34b042\"><code>a48c80b</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/9e48869ba4fd2fff83a91163d2a6991dd6975dd4\"><code>9e48869</code></a>\nfeat: make docker-compose cwd aware</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/43a233a413bd302477c5f3eb8cc77c84eb5b38f8\"><code>43a233a</code></a>\nci: fix workflow permissions</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/43ee4ae89731d81feda2fb508ba6f6d282d385db\"><code>43ee4ae</code></a>\nci: upgrade github actions</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=1.5.1&new-version=2.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-04-09T16:28:36Z",
          "tree_id": "78e860c19f6781b343807c014e712e280f025234",
          "url": "https://github.com/hasura/ndc-postgres/commit/8faf87e99800520585e237142a709b39bc4fadfe"
        },
        "date": 1712680618739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.4752145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.30362855,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.225727440516845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.717342534648299,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24528083772303727,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 89.489911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.53284720000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.33930105606435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.63617327310633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4518302542322787,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.803823,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.9153745,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.789334273785514,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.522185349525188,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3992261823157626,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.632351,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.105543,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.15175486410626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.384513322651209,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37168087528117655,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.030955,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.5104807,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.67601512351828,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.314698127553541,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3717731321562484,
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
          "id": "faba39da07707c9a259392fa4c68071199baa8cb",
          "message": "Build Windows binaries statically. (#417)\n\n### What\n\nWe don't want users to have to install the Visual C++ Redistributable to\nuse the ndc-postgres CLI plugin.\n\n### How\n\nWe can instruct `rustc` to link statically with the C runtime with the\n`-C target-feature=+crt-static` flag. See [RFC\n1721](https://github.com/rust-lang/rfcs/blob/master/text/1721-crt-static.md)\nfor details.",
          "timestamp": "2024-04-10T09:46:50Z",
          "tree_id": "ec796fc369de076c1f7ebd7f9dc46fe2c02174d1",
          "url": "https://github.com/hasura/ndc-postgres/commit/faba39da07707c9a259392fa4c68071199baa8cb"
        },
        "date": 1712742763715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.82575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.033332,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.61548922381256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.296583123818031,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22514187684694031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.893344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.26545229999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.541323257062615,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3843146077640824,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42052126145933205,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.946027,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.0050818,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.69410157836316,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.027234116644152,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41475495610284324,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.291999000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.86072139999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.52151514073467,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.757364444912973,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3675749851415819,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.948458,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.63941274999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.24182681286786,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.1596219320800785,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35508106836771935,
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
          "id": "9225966d3d8fdb2e492f5760fad5ceb1176b3ce8",
          "message": "Upgrade to Rust v1.77.2. (#418)\n\n### What\n\nRust v1.77.2 fixes a security flaw ([CVE-2024-24576]) in binaries built\nfor Windows.\n\nThe ndc-postgres CLI is not vulnerable to this as it does not invoke\nother programs, but it seemed prudent to upgrade anyway.\n\n### How\n\nI edited `rust-toolchain.toml` and ran `nix flake update`.\n\n[CVE-2024-24576]: https://nvd.nist.gov/vuln/detail/CVE-2024-24576",
          "timestamp": "2024-04-10T12:39:04Z",
          "tree_id": "995eff3819d0318d7fdb383659d7564ee88328e8",
          "url": "https://github.com/hasura/ndc-postgres/commit/9225966d3d8fdb2e492f5760fad5ceb1176b3ce8"
        },
        "date": 1712753275308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.519342,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.0871916,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.358978949584902,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.117603581434203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22863032191186922,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.322537,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.838957,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.5549704071447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8195466556295514,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.48233988424625496,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.960777,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.02004989999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.464147247087745,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.483934149601346,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3941933646021119,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.798024,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.79768619999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 36.986489309380865,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.462518791321209,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37878022923642857,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.621145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.307342,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.72458321847768,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.062671815038904,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3467183877932249,
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
          "id": "eef1cf7870d5ab4f3a89a330afeddefa6907220e",
          "message": "Separate business and exchange types (#419)\n\n### What\n\nWe want to be able to confidently evolve the configuration format\nwithout risk of accidentally changing the behavior of previous versions.\n\nThis PR has no user-observable change in behavior.\n\nIntroducing a new major version of the configuration format is now a\nmuch more well-defined task, which should consist most of just\nduplicating the entire `version3` module hierarchy and then introducing\nthe new changes in the duplicated copy.\n\n### How\n\nIn order to achieve this we duplicate the complete metadata type\nhierarchy into configuration crate and introduce functions that convert\nbetween the now separate exchange types and business types, and ensure\nthat all logic that has to do with serialization only lives with the\nexchange types (the version types)",
          "timestamp": "2024-04-11T09:33:06Z",
          "tree_id": "df554a5f40a8c48c019e1c6fd53b6169c95db769",
          "url": "https://github.com/hasura/ndc-postgres/commit/eef1cf7870d5ab4f3a89a330afeddefa6907220e"
        },
        "date": 1712828628132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.9375905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.35596824999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.769928310324353,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.852691790489068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22612165268276305,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.206359,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.5102121499999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.03955847948281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.7817208550829804,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5336749350274584,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.7514305,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.85186384999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.61074626996204,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.177306380771121,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3835945629411529,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.067278,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.05963799999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.70838353299649,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.007863200378921,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3768357473948437,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.487333,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 81.936769,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.792838901186926,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.00629967773456,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36705522197614215,
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
          "id": "843be781d9f3c5516f8074a1d7c2469c4cf3ded4",
          "message": "include additional schemas for types by default (#420)\n\n### What\n\nInclude a couple more unqualified schemas for types and procedures\ndefaults.\nSee follow-up ticket for next task:\nhttps://hasurahq.atlassian.net/browse/PG-82\n\n### How\n\nWe expose the new fields in the defaults. These are exposed in the\ninitialize phase so if a user already has a list, this won't change it.\n\n---------\n\nCo-authored-by: Philip Lykke Carlsen <plcplc@gmail.com>",
          "timestamp": "2024-04-11T19:13:08Z",
          "tree_id": "32112c1e43ce31dd54090a506adf1f8eda94fe89",
          "url": "https://github.com/hasura/ndc-postgres/commit/843be781d9f3c5516f8074a1d7c2469c4cf3ded4"
        },
        "date": 1712863142461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.805585,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.98671,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.89926647530083,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.103950479446883,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23255880235749463,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.0642005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.56098784999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.25158743386138,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.6892065369346625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47649910774934146,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.681585,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.09929619999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.0761201821333,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.717039439662962,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4004348670202162,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.72954,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.98536814999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 36.728438625395995,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.501500174122484,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3504705633002408,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.63556,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.06503439999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.434747000988445,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.270247994563043,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36088102230445845,
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
          "id": "c12f5699cb598fb24ab8c696235e287005afa4f8",
          "message": "remove transactions in queries (#421)\n\n### What\n\nRunning queries in transactions require that we run 3 statements: begin,\nthe query, commit.\nWe use transactions to enforce a `READ ONLY` setting so that native\nqueries which run mutations will be rejected.\nHowever, each roundtrip takes time. If we can avoid it, it would improve\nthe performance of queries.\n\nIn the PR we use the fact the mutating sql statements can only occur in\na CTE at the top-level, and wrap native queries in another layer of CTE,\nthereby enforce the read only requirement without using transactions.\n\n### How\n\n1. We remove the `begin` and `commit` statements before/after a query.\n2. We wrap each query in another CTE of the form `WITH\n<native_query_name> as (WITH <alias> as (<native_query>) SELECT * FROM\nCTE as <alias>) SELECT ...`\n3. We extract the global table alias index from the state and use it in\nwrapping the CTEs.\n4. We wrap ctes in the caller side because this code is used for\nmutations as well, for which we don't want to apply this hack.",
          "timestamp": "2024-04-15T11:52:46Z",
          "tree_id": "4ad5364b93282453628d58907882c5e12c6dbf5b",
          "url": "https://github.com/hasura/ndc-postgres/commit/c12f5699cb598fb24ab8c696235e287005afa4f8"
        },
        "date": 1713182350769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.023722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.51080509999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.78054056279373,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.0315989110439,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2933666472440345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.436865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.29685119999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.205108359028024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.171249708369807,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.417330111227476,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.61397,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.03215229999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.48341473100051,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.208895667905942,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39347305418241557,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.660227,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.31358764999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.86940609937194,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.808249762965929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3865907940638118,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.0026825,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.10280865,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.92581065860827,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.108258300418953,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3689571578104805,
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
          "id": "923fc239a60e52bfed7048bd0015545c4c88fb9d",
          "message": "chore(deps): Bump anyhow from 1.0.81 to 1.0.82 (#423)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.81 to 1.0.82.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.82</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/074bdea1c7b419e4f1267ebb9eac4d6068870122\"><code>074bdea</code></a>\nRelease 1.0.82</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/47a4fbfa365050b293d9e3898aadb42a47a571e6\"><code>47a4fbf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/360\">#360</a>\nfrom dtolnay/docensure</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/c5af1db020696716ab0de65b663d2370ac4de4d4\"><code>c5af1db</code></a>\nMake ensure's doc comment apply to the cfg(not(doc)) macro too</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/bebc7a2fe4ced785da951332fc3b259a5a52d24f\"><code>bebc7a2</code></a>\nRevert &quot;Temporarily disable miri on doctests&quot;</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/f2c4db9b47e37fdeef8dc0e1560b3d15f1208fbe\"><code>f2c4db9</code></a>\nUpdate ui test suite to nightly-2024-03-31</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/028cbeedf5e94970c088eb14e325744086a7b768\"><code>028cbee</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/7a4cac5192686ca47c40ba9a8dd81f201686375e\"><code>7a4cac5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/358\">#358</a>\nfrom dtolnay/workspacewrapper</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/939db012c2294403db6a1be21b15c0f2750b8b15\"><code>939db01</code></a>\nApply RUSTC_WORKSPACE_WRAPPER</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/9f84a37551de7e7d67dc27a6e1c8518aa21f1d93\"><code>9f84a37</code></a>\nTemporarily disable miri on doctests</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/45e5a589e9548d1045ce7518e78f890a83c33580\"><code>45e5a58</code></a>\nIgnore dead code lint in test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.81...1.0.82\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.81&new-version=1.0.82)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T14:14:50Z",
          "tree_id": "4b376a9eca2a5e6481f6c0f2130e75f44f90db48",
          "url": "https://github.com/hasura/ndc-postgres/commit/923fc239a60e52bfed7048bd0015545c4c88fb9d"
        },
        "date": 1713190883344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.828038,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.535537,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.07166158228716,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.839357595282966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29738244370430106,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.94421,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.161827,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.42653938946749,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.002184245099272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4368861655323517,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.706997,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.12906509999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.94379878038107,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.410212231838933,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.467593109529435,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.260436,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.78831629999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.41745732837094,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.874136518978773,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37632092930252914,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.055255,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.7894388,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.27649580132891,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.795909008204312,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3851946201745105,
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
          "id": "f070d9e79f9d34c9c2ad5f6daeb0f7b4985bb393",
          "message": "chore(deps): Bump async-trait from 0.1.79 to 0.1.80 (#422)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.79\nto 0.1.80.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.80</h2>\n<ul>\n<li>Fix unreachable code warning for async functions that return\n<code>!</code> (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/265\">#265</a>,\nthanks <a\nhref=\"https://github.com/de-vri-es\"><code>@​de-vri-es</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/d528b5a816c891c3b5ab90dc4bcc5cc8d384e177\"><code>d528b5a</code></a>\nRelease 0.1.80</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/10b5c9951af4cc787905ca26f95509e059931067\"><code>10b5c99</code></a>\nDrop support for compilers older than 1.47</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/83a542268d907f503793e64b5764c30b301a06d1\"><code>83a5422</code></a>\nDrop support for compilers older than 1.45</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/22d017e9415fccf237372a3c5003c5cb44bcef6e\"><code>22d017e</code></a>\nBuild script no longer looks at $DOCS_RS</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b64d041c6543f5ce48ff356cc5aaf712224b70e4\"><code>b64d041</code></a>\nMove never_type test under issue266</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b683da826e34ce1d7d3ac55c6de1d247a21757c8\"><code>b683da8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/265\">#265</a>\nfrom de-vri-es/fix-unreachable-code-warning</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/c8d958dfde2c36a5c483c9255729d30361cbd0bf\"><code>c8d958d</code></a>\nFix unreachable code warning for functions that return\n<code>!</code></li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/4f0b72eb8455834b1b52bdadb411aaf40bdf1b81\"><code>4f0b72e</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.79...0.1.80\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.79&new-version=0.1.80)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T14:15:04Z",
          "tree_id": "8c7b8340c3a74b25b8aa70e07a69561c25aded37",
          "url": "https://github.com/hasura/ndc-postgres/commit/f070d9e79f9d34c9c2ad5f6daeb0f7b4985bb393"
        },
        "date": 1713191163376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.623380499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.10311155,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.965855335543484,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.18328054644945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2837395114552711,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.706975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.58937459999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.151749448222866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.037230059405722,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.44646540845655497,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.7088635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.75272204999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.80701372033716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.254338853791708,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4303068387611518,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.356188,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.01875519999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.11409735653099,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.1760228045810805,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41516288856816963,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.8570685,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.48938035,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.73038451978659,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.5854371578893875,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37840850654512537,
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
          "id": "f64d683530aff2148aeb9ae6680f3487efe080dc",
          "message": "cli: remove the 'Caused by' section in the error message (#424)\n\n### What\n\nhttps://hasurahq.atlassian.net/browse/V3DX-1053\n\nBefore:\n\n```\n$ CONNECTION_URI=\"postgresql://re\" cargo run --bin ndc-postgres-cli -- --context='/tmp/baba' update\nError: error communicating with database: failed to lookup address information: Name or service not known\n\nCaused by:\n    failed to lookup address information: Name or service not known\n```\n\nAfter:\n\n```\n$ CONNECTION_URI=\"postgresql://re\" cargo run --bin ndc-postgres-cli -- --context='/tmp/baba' update\nERROR: error communicating with database: failed to lookup address information: Name or service not known\n```\n\n### How\n\nInstead of having a `main() -> anyhow::Result<()>`, we explicitly handle\nprinting the error.\n\nhttps://docs.rs/anyhow/1.0.69/anyhow/struct.Error.html#display-representations",
          "timestamp": "2024-04-16T08:16:57Z",
          "tree_id": "b6bc0ea5c5254ad5eaf7db608ea4ca8ddd01f95f",
          "url": "https://github.com/hasura/ndc-postgres/commit/f64d683530aff2148aeb9ae6680f3487efe080dc"
        },
        "date": 1713255785563,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.9069825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 58.5313487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.130030859999927,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.706028329144239,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28354424976667586,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.3484795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.02022359999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.9899340152976,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1155376885674784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4536766465384976,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.000122000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.99045939999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.46350395728189,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.765792194151864,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4803643040138039,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.237649,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.82421475000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.25012218606396,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.439344511028956,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38236332526951006,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.454201999999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.04381999999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.621068128709325,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.360967289484428,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41003706597294565,
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
          "id": "819e19dcf80d918dd8b994278ad5eb190bb676b5",
          "message": "cast int64 and numeric to string by default (#416)\n\n### What\n\nWe want to be able to stringify fields of types `int8` and `numeric` in\nthe query response so that we have better interoperability with\njavascript clients.\n\nThis PR changes the default type representation of `int8` and `numeric`\ntypes (maintaining the existing type representation if one exists) and\nstringify numbers.\n\nThis option can be change via the configuration by editing the mapping\nin the `metadata.typeRepresentations`:\n\n```diff\n  { ...\n    \"metadata\": {\n      ...\n      \"typeRepresentations\": {\n        \"Phone\": \"string\",\n        \"CardSuit\": {\n          \"enum\": [\"hearts\", \"clubs\", \"diamonds\", \"spades\"]\n        },\n        ...\n-       \"int8\": \"int64\",\n+       \"int8\": \"int64AsString\",\n-       \"numeric\": \"bigDecimal\",\n+       \"numeric\": \"bigDecimalAsString\",\n        ...\n      }\n      ...\n    }\n  }\n```\n\n### How\n\n1. We introduce new type representations: `Int64AsString`,\n`BigDecimalAsString`.\n2. Make sure we use the existing type representation configuration and\noverride the default if it exists.\n3. In field selection after getting an expression, we cast it if the\ntype representation requires it. (For arrays, we cast to `cast_type[]`)\n4. For composite types we unpack them if the don't specify fields, and\ncast required fields recursively.",
          "timestamp": "2024-04-16T09:30:47Z",
          "tree_id": "de3c285b17abfad90e657e6101a1043fea9152a5",
          "url": "https://github.com/hasura/ndc-postgres/commit/819e19dcf80d918dd8b994278ad5eb190bb676b5"
        },
        "date": 1713260217280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.624348499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.85612449999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.534010424584416,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.5942110271247,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2912959749139072,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.168619,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.68953920000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.991928653614515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.149929051448879,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4664291231678606,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.407148,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.78268974999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.1286928318515,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.57397425075991,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4373387814855926,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.619363,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.7635846,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.65360714879575,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.06304875759443,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40981956155534066,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.323098,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.7553452,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.92174851883737,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.164892414672131,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38547147399581644,
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
          "id": "a5cf07df73797fb759ea15ad5f609608bfedd468",
          "message": "Display more spans to the user. (#426)\n\n### What\n\nJust so they're more aware of what's going on. This will help users\ndiagnose issues with latency.\n\n### How\n\nWe add the `internal.visibility = \"user\"` property to the span, which\ntells the Console to display it.",
          "timestamp": "2024-04-16T10:06:41Z",
          "tree_id": "663902404d2713aef4e5a61fba5c6e3b1e6a01eb",
          "url": "https://github.com/hasura/ndc-postgres/commit/a5cf07df73797fb759ea15ad5f609608bfedd468"
        },
        "date": 1713262360435,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.9104035,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.581930099999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.987546235846235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.692973254344317,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2786614769056322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.475154,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.46706729999988,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.22865245839776,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9151291994480317,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42731050604760124,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.809554,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.0633637,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.94401263201552,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.835412686946256,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4571538932629942,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.836629,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.0862528,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.94228520398035,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.443860977161208,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37074703418215726,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.186712,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.38573719999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 32.662736132346005,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.917131831841658,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3991007344574801,
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
          "id": "582c771c06b0ee5b4a5541ebc75dd483a6376c48",
          "message": "Prepare for v0.6.0 (#425)",
          "timestamp": "2024-04-16T10:14:33Z",
          "tree_id": "c77710815eae5901468fb951dc8fb075bfad82d2",
          "url": "https://github.com/hasura/ndc-postgres/commit/582c771c06b0ee5b4a5541ebc75dd483a6376c48"
        },
        "date": 1713262860608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.369345,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.371532399999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.948761313736647,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.999524562880033,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28339895249224323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.7715895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.26535395000003,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.95634310564908,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3215453115939226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4715551632902174,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.899869499999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.25714504999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.34134505834961,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.865066935821126,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4851671657332324,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.548987,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.55969035000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 35.217537282836055,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.4701513827731745,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4514744219542846,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.27123,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.421628,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.526911993731325,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.586437566958367,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41827464192894087,
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
          "id": "8477efb0c9ea90eeb37512f8e9db7fb8d434e45f",
          "message": "Bump the NDC SDK to accept B3 trace headers in addition to W3C. (#428)\n\n### What\n\nWe'd like to accept B3 trace headers because Google Cloud sometimes\nmesses with W3C headers.\n\n### How\n\nThe change has already been made in\nhttps://github.com/hasura/ndc-sdk-rs/pull/5.",
          "timestamp": "2024-04-17T10:40:47Z",
          "tree_id": "8740e5f5f7f5703059fc363b6cda68128444fee0",
          "url": "https://github.com/hasura/ndc-postgres/commit/8477efb0c9ea90eeb37512f8e9db7fb8d434e45f"
        },
        "date": 1713350919280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 39.5733175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.67924034999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.138570124865673,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.711567450772066,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2897476989769291,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 81.954657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 126.56811200000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.19594990318967,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5331499269598368,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5122726128442735,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 56.4560285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.26059519999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 38.15701830302838,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.861278894360332,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4862560914511303,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 50.925878499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 80.45789339999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.92305348474709,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.794120505300448,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41827203775393446,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 50.564722,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 76.61715305,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.1034889082416,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.008592356944995,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.416164084071983,
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
          "id": "5768739442ef29172a7d3818f7d75fd6cd96efe2",
          "message": "Use idiomatic iterator patterns. (#429)\n\n### What\n\nJust fixing a few lints for fun.\n\n### How\n\nMostly, deleting the exclusions and following the guidance. `clippy\n--fix` did most of the work.",
          "timestamp": "2024-04-17T15:16:06Z",
          "tree_id": "1e7a1549722f437f435878dd715e35fcfe46a00a",
          "url": "https://github.com/hasura/ndc-postgres/commit/5768739442ef29172a7d3818f7d75fd6cd96efe2"
        },
        "date": 1713367356917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.7059475,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 61.592864049999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.324164416986793,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.253829131955069,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2786428587711284,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 80.271579,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 114.48253564999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.156750057215994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.206616130366548,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43445380952748514,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.081838000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.46402025,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.60880568003679,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.286745934024488,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45913233027573497,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.4738575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.9567307,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.42192700370356,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.670121417232735,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3919753013375386,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.0248565,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.5109735,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.24127091394337,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.836725239856037,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4195657968226182,
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
          "id": "59b0bfeb06c670a3115a5f3c85cb6826909a2e02",
          "message": "Update broken metadata, and test that it is kept up to date (#430)\n\n### What\n\nThe `just generate-metadata` command updated the \"broken\" test metadata\non `main`. This PR introduces a test that ensures this is kept up to\ndate, such that updates to this metadata doesn't lag behind the changes\nthat actually introduced them.",
          "timestamp": "2024-04-18T11:44:01Z",
          "tree_id": "664e196f68925c809ccf25aa6727a98216dd7aa3",
          "url": "https://github.com/hasura/ndc-postgres/commit/59b0bfeb06c670a3115a5f3c85cb6826909a2e02"
        },
        "date": 1713441024255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.0938455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.618507749999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.17127608104168,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.709486874980836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27888489965196084,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.885699,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.02803229999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.66107496786873,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1061988548363786,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47097900541000326,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.320907500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.73912065,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.982274580454416,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.531881610852388,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4594038381251557,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 51.404659499999994,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 83.8338265,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.83932214285737,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.570559130319964,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4093232662486473,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 49.277024499999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.11375085,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 35.272971055400255,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.272676631957488,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3920359588765187,
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
          "id": "4babd93e0e76929a915804694a368392ff81be30",
          "message": "Add Schema support for Scalar types in SQL AST (#431)\n\n### What\n\nThis PR is one step on the way to supporting scalar types living in\nnon-search-path schemas.\n\nIt adds fields to the representation of a scalar type name at the SQL\nAST level, indicating the schema the type is defined in and whether the\ntype is an array type.",
          "timestamp": "2024-04-18T17:14:32Z",
          "tree_id": "a389370fdec51fd8cc4955566e386c2a5ee87b1a",
          "url": "https://github.com/hasura/ndc-postgres/commit/4babd93e0e76929a915804694a368392ff81be30"
        },
        "date": 1713460826543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.8567715,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 52.196186649999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.237247694194284,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.5235004107806525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29278656376123563,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.630541,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.3838791,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.528950055646675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9866055383287744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3873826492126888,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.327624,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.3574259,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.874132657765124,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.144958872951328,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45765666618915984,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.036772,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 79.76860659999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.682799609570615,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.836399300487365,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4006194194666387,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.6210535,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 76.61235825,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.893088171174874,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.219815677834141,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38227875020649393,
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
          "id": "c8413216d90889528fb5d98c5236ae3fe72b16e6",
          "message": "Add schema names to composite types. (#432)\n\n### What\n\nThis PR adds schema names to composite types in metadata. Schema names\nare not introspected yet, but this will happen in a subsequent PR.\n\nAlso translate composite types into sql::ast::ScalarTypeName using their\nname and schema rather than the ndc-schema object type name, which had\nincidentally been the same as the (unqualified) type name.\n\nThis means we need access to the `Env` when translating values/variables\nof\ncomposite type. Most of the files changed in this PR is a result from\nknock-on effects of this.\n\nThis PR is a follow-up to\nhttps://github.com/hasura/ndc-postgres/pull/431.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-04-19T07:09:07Z",
          "tree_id": "392112e44a8dd4d86e6373a8e0202cc15dd0f808",
          "url": "https://github.com/hasura/ndc-postgres/commit/c8413216d90889528fb5d98c5236ae3fe72b16e6"
        },
        "date": 1713510896750,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.7487965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 61.675912,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.24550937735842,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.28410943567756,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2975382316837458,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.750741,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.10874495000003,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.90019447912232,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.141593342803162,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4457596576879073,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.757872,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.125638,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 38.07337879552168,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.119068861838244,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4348344121806966,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.717907,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.965989,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.905531155071074,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.97253683392389,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4283367965188947,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.557809,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.42345179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.70655168045447,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.16695574239813,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38213157591921676,
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
          "id": "aa0357c0ef3ca5c5ccd6b46449bbd36e1f822e0e",
          "message": "Fix lints about non-idiomatic use of `if` and `match`. (#433)\n\n### What\n\nI enabled lint warnings related to `if` and `match` and fixed them:\n\n- removing an `else` block when it could be unnested due to an early\nreturn,\n- using `if let … else` and `let … else` instead of `match` with\nwildcards,\n- merging `match` arms as much as possible,\n- and a few other bits.\n\n### How\n\n`cargo clippy`, and applying fixes.",
          "timestamp": "2024-04-19T15:05:38Z",
          "tree_id": "fb0e2f34c4bb339a1fb29c4f9b6be9cfcd357cdc",
          "url": "https://github.com/hasura/ndc-postgres/commit/aa0357c0ef3ca5c5ccd6b46449bbd36e1f822e0e"
        },
        "date": 1713539538325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.532742,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.313937,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.67990032387235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.3147908613068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2888186646370802,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 80.566627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 122.09417319999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.31140331905163,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9874980439455427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.37992755579997883,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.859523,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.8989572,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.46369927417618,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.809683886561636,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4564965023050447,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.55364,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.59558259999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.19640717881714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.306513632588718,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4000072768990418,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.748405500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.1102057,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.15461265848712,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.263011309998824,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3675910249970848,
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
          "id": "b7b59484ff0fb5808d8a74ece50486d96c1795bd",
          "message": "chore(deps): Bump serde_json from 1.0.115 to 1.0.116 (#434)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.115 to\n1.0.116.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.116</h2>\n<ul>\n<li>Make module structure comprehensible to static analysis (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1124\">#1124</a>,\nthanks <a\nhref=\"https://github.com/mleonhard\"><code>@​mleonhard</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a3f62bb10ea870dafe3b49a77dc6c1713ca4b7e4\"><code>a3f62bb</code></a>\nRelease 1.0.116</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/12c8ee0ce6eaca3a809e83d9df768b67322a7f2a\"><code>12c8ee0</code></a>\nHide &quot;non-exhaustive patterns&quot; errors when crate fails to\ncompile</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/051ce970fe3fab097c618b237aa7ec4a628f85d4\"><code>051ce97</code></a>\nMerge pull request 1124 from mleonhard/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/25dc75050aee18ff42342bdb64c1e97542d17267\"><code>25dc750</code></a>\nReplace <code>features_check</code> mod with a call to\n<code>std::compile_error!</code>. Fixes htt...</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2e15e3d7d53a68f78ff559709c57e4fa70584bb7\"><code>2e15e3d</code></a>\nRevert &quot;Temporarily disable miri on doctests&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0baba2877595e31d57adafd5db2f94074f4a4c2e\"><code>0baba28</code></a>\nResolve legacy_numeric_constants clippy lints</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.115...v1.0.116\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.115&new-version=1.0.116)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-22T15:00:12Z",
          "tree_id": "b5ea8268ef677950f21819a5b1fa511f5aea2225",
          "url": "https://github.com/hasura/ndc-postgres/commit/b7b59484ff0fb5808d8a74ece50486d96c1795bd"
        },
        "date": 1713798479637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.170476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.627886,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.155583429978375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.613320565174835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2771536637714423,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.155685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.28697279999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.35439958632659,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9477564981833737,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.40020472661220435,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.533949,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.1691608,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.457828485164214,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.75220666102895,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44630773540677715,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.366771,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.8626104,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.622238094398476,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.096645767334287,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41788392164206684,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.3918575,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.9898018,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.91259891272385,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8988765642695355,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3792035546663929,
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
          "id": "998e532fe46af42d70bdaa353a77f3829cb4c0b5",
          "message": "chore(deps): Bump thiserror from 1.0.58 to 1.0.59 (#436)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.58 to\n1.0.59.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.59</h2>\n<ul>\n<li>Unblock testing of rustc <code>debug-fmt-detail</code> option (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/297\">#297</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/e7ad85ee6b135c5748d37ed1e8edda950336af77\"><code>e7ad85e</code></a>\nRelease 1.0.59</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/af477ecbe5ed355cc1d5da17dc1f2a1b03a696a4\"><code>af477ec</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/297\">#297</a>\nfrom dtolnay/traitident</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f3fbd990483f43153a631604373bb9dc7e071982\"><code>f3fbd99</code></a>\nImplement ToTokens without reliance on {:?}</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/508ece867dce8443efec9d3ff2ace0af659a4755\"><code>508ece8</code></a>\nRevert &quot;Temporarily disable miri on doctests&quot;</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/c8c804ce80c119f5f7a5c20413c2759a4de79246\"><code>c8c804c</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/6969595f5f279cf909ebac7e99b64d17d4c8b08d\"><code>6969595</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/293\">#293</a>\nfrom dtolnay/workspacewrapper</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/488d52f111e48103c5bb76cde7e17aafb1dbdcde\"><code>488d52f</code></a>\nApply RUSTC_WORKSPACE_WRAPPER</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/ba33438c888a04e962c2b9c3439a7312144d386b\"><code>ba33438</code></a>\nTemporarily disable miri on doctests</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.58...1.0.59\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.58&new-version=1.0.59)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-22T15:00:17Z",
          "tree_id": "560cd6abf7e0b88ec616f9a0c74f9b329ed8a6eb",
          "url": "https://github.com/hasura/ndc-postgres/commit/998e532fe46af42d70bdaa353a77f3829cb4c0b5"
        },
        "date": 1713798690521,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 39.0807515,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.88194944999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.603437719072595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.428815129394955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30074456959648954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.747574,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 119.64166075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.60065361417303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3181634463059595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42720200695260513,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.4939095,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.59137369999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 38.624949993844886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.534462376898318,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4392852150830436,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 50.075939,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.81125970000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 35.72164239363073,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.78475327383218,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41747394309987157,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 49.166509,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.7189914,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 35.09437850214856,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.969054633614547,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38517454719620564,
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
          "id": "9681eced93a5717f1b469f1b2af63bc0f259f221",
          "message": "chore(deps): Bump build-data from 0.1.5 to 0.2.1 (#437)\n\nBumps [build-data](https://gitlab.com/leonhard-llc/ops) from 0.1.5 to\n0.2.1.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/6f99a63717effa72a9bfc2d950c8614cafab9b5d\"><code>6f99a63</code></a>\nbuild-data: Rename set_TARGET to set_TARGET_PLATFORM and add docs.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/72244d59407c47bd2b03bffa135c20f588d23f21\"><code>72244d5</code></a>\nbuild-data: Update readme and dev deps.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/9e4cfb952db9b17c225bd1a84281c4772cc34be5\"><code>9e4cfb9</code></a>\nbuild-data: Add <code>set_TARGET</code>. Resolves <a\nhref=\"https://gitlab.com/leonhard-llc/ops/-\">https://gitlab.com/leonhard-llc/ops/-</a>...</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/a70ef2ca62bfaaf01465e907ed80fff3f56f2b7a\"><code>a70ef2c</code></a>\nbuild-data: Simplify caching code and tests. Lint.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/04fcae0baff2e769d986b6a2aa3744cd8dab449e\"><code>04fcae0</code></a>\nbuild-data: Simplify expressions.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/d804b3d2c368b81bd519310f33e693d4ad373aa3\"><code>d804b3d</code></a>\ndns-server: Remove dependency on multimap to clean up geiger\nreport.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/5ab11d1c44bc26dc4eea1b32b4e80ac0cda7dcd7\"><code>5ab11d1</code></a>\ndns-server: Support case randomization <a\nhref=\"https://datatracker.ietf.org/doc/html/\">https://datatracker.ietf.org/doc/html/</a>...</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/d8514c5df9949582b06eb458f614402f738da649\"><code>d8514c5</code></a>\ndns-server: Remove unused dep features.</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/c7b5649b68aeca8017f3393b33087b1b00584b95\"><code>c7b5649</code></a>\ndns-server: Try to fix CI failure:</li>\n<li><a\nhref=\"https://gitlab.com/leonhard-llc/ops/commit/3dc4afd1a3220fc24b94689e21b4411be885e2da\"><code>3dc4afd</code></a>\nbuild-data: Lint.</li>\n<li>Additional commits viewable in <a\nhref=\"https://gitlab.com/leonhard-llc/ops/compare/build-data-v0.1.5...build-data-v0.2.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=build-data&package-manager=cargo&previous-version=0.1.5&new-version=0.2.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-22T15:08:50Z",
          "tree_id": "799d711c96e5428e4eac913069239f19458065dd",
          "url": "https://github.com/hasura/ndc-postgres/commit/9681eced93a5717f1b469f1b2af63bc0f259f221"
        },
        "date": 1713799213360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.890359,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.030391,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.157122932031243,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.630248044710157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27931864705856535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.4599185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 114.50893604999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.238964824292964,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.2304887583011634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47322166239340074,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.59604950000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.19943759999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.2981916167039,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.8651520655306655,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43031083022336425,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.417022,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.7246517,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.547939333178356,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.676842663827969,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3768795421185202,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.472590999999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.9701235,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.39085609721408,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.473267051563283,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3862561600019067,
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
          "id": "ff95d2ff4358d8a7c22f1e512ad8a2e13dd3872b",
          "message": "chore(deps): Bump serde from 1.0.197 to 1.0.198 (#435)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.197 to\n1.0.198.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.198</h2>\n<ul>\n<li>Support serializing and deserializing\n<code>Saturating&lt;T&gt;</code> (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2709\">#2709</a>,\nthanks <a\nhref=\"https://github.com/jbethune\"><code>@​jbethune</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/c4fb92333593ac875ca7b615398f9de9d703ba8f\"><code>c4fb923</code></a>\nRelease 1.0.198</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/65b7eea775fe8aa1faa1fb786811955236854867\"><code>65b7eea</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2729\">#2729</a>\nfrom dtolnay/saturating</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/01cd696fd17f586aab428b1bbd11d533124a3425\"><code>01cd696</code></a>\nIntegrate Saturating&lt;T&gt; deserialization into impl_deserialize_num\nmacro</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/c13b3f7e68d4c71bbe1ea825b36148eadf7de603\"><code>c13b3f7</code></a>\nFormat PR 2709</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/a6571ee0da2564c13b4351805fa216d233719258\"><code>a6571ee</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2709\">#2709</a>\nfrom jbethune/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/6e38afff498d592af4ccac4cb669a86fc789207f\"><code>6e38aff</code></a>\nRevert &quot;Temporarily disable miri on doctests&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/3d1b19ed906cb1c8cf4e2b4a45eea8f810115db1\"><code>3d1b19e</code></a>\nImplement Ser+De for <code>Saturating\\&lt;T&gt;</code></li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/5b24f88e73caa9c607527b5b4696fc34263cd238\"><code>5b24f88</code></a>\nResolve legacy_numeric_constants clippy lints</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/74d06708ddff495161187ea490c4616291216346\"><code>74d0670</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/3bfab6ef7fc80ad73eb598687c836609c14f6f8b\"><code>3bfab6e</code></a>\nTemporarily disable miri on doctests</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.197...v1.0.198\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.197&new-version=1.0.198)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-22T16:25:58Z",
          "tree_id": "21e73efe4154b0d88690195475af945903f168d6",
          "url": "https://github.com/hasura/ndc-postgres/commit/ff95d2ff4358d8a7c22f1e512ad8a2e13dd3872b"
        },
        "date": 1713803816400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.604967,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.38906225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.45367917153461,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.889919948531698,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29184661169880877,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.927141,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.41731899999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.83179392153008,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8029770956450477,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3661156275138909,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.559318,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.76795319999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.962272024317976,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.087817511183452,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4509425281386469,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.166906,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 77.7246525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.61856801636281,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.1299228788631765,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3840358845254293,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.465443,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.79030125,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.89014119645402,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.817549150645782,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.369657448862313,
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
          "id": "d40e152510cf35c703c7d3001477bee5efcccda4",
          "message": "More lint fixes. (#439)\n\n### What\n\nI'm very tired. I thought I'd do something mechanical.\n\n### How\n\nRemoving warning suppressions and fixing whatever warnings show up.",
          "timestamp": "2024-04-23T08:46:45Z",
          "tree_id": "138765d87cc684ef391a5021e97b3a1309b01192",
          "url": "https://github.com/hasura/ndc-postgres/commit/d40e152510cf35c703c7d3001477bee5efcccda4"
        },
        "date": 1713862418012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.1658855,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.76711295,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.841641706546795,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.446719225038123,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2859029575036983,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.94922199999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.72069984999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.04997410809447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.2636679900068444,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4516192330117505,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.093796,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.448967,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.45156169486872,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.062597104056017,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4551419784337807,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 50.363361,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 82.1075781999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.84239384964439,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.6976472678394785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4152481871298322,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.825161,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 77.08432900000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.493549310449616,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.33424558114023,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39686675536869237,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}