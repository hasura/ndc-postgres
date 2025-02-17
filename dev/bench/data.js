window.BENCHMARK_DATA = {
  "lastUpdate": 1739812500241,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
      {
        "commit": {
          "author": {
            "email": "ranque.benoit@gmail.com",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a058b72a13cc02f1f5af6d5e7efc0e26de4b999d",
          "message": "In update-multitenant-deb workflow, update reference to the hasura/api-pg group to hasura/engine (#629)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nhasura/api-pg group was renamed to hasura/engine\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\nThis PR updates the update-multitenant-dep workflow to use the new group\nname\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-10-15T00:53:47Z",
          "tree_id": "1704959d63b3636bf01bcec66159da84098a0090",
          "url": "https://github.com/hasura/ndc-postgres/commit/a058b72a13cc02f1f5af6d5e7efc0e26de4b999d"
        },
        "date": 1728953995502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.3862025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.7260138,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.2412079731518,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.357475943593469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30643185870051054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.53509249999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.1291103,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.38993946820501,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5500673042904083,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24873319925933784,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.16158,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.71230279999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.526014649671474,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.70227649871395,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3838238811658931,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.146142,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.1147855,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.654116802137484,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.513861672467694,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28821109609380025,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.304536999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 76.40082925000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.71592935997525,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.781086653795072,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35989513003963325,
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
          "id": "ac0a9d3f604959a6d4df9365cb825fc5cbaf34fc",
          "message": "chore(deps): Bump async-trait from 0.1.82 to 0.1.83 (#618)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.82\nto 0.1.83.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.83</h2>\n<ul>\n<li>Prevent needless_arbitrary_self_type lint being produced in\ngenerated code (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/278\">#278</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/e6b4d471c64156338fb87386b7a7ad8543c3a205\"><code>e6b4d47</code></a>\nRelease 0.1.83</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/bfe8d617660237b27eee620181586a16ff2f6a25\"><code>bfe8d61</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/278\">#278</a>\nfrom dtolnay/arbself</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/7bd974b3a4db2c3ab321de2976d09d3ea2b82348\"><code>7bd974b</code></a>\nIgnore needless_arbitrary_self_type clippy lint in generated code</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b53b4e755402ef91d2104d40b8f303ad0c56d2f9\"><code>b53b4e7</code></a>\nAdd regression test for issue 277</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.82...0.1.83\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.82&new-version=0.1.83)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-16T07:27:09Z",
          "tree_id": "e70a398b3403a0be29af089641c1e303fa2d0e02",
          "url": "https://github.com/hasura/ndc-postgres/commit/ac0a9d3f604959a6d4df9365cb825fc5cbaf34fc"
        },
        "date": 1729064074645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.4802675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.928039,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.245815836309514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.02766132192437,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2788261259299355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.454842,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.7361794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.19364122542249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3561174762972925,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23006403892251992,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.153826,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.82524969999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.461054075705235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.881155388939035,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3850397572118918,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.225888,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.93083974999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.451284142238652,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.196717338876443,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29237702381380193,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.416624,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.64498,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.52404311276752,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.699959108212408,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28885322162404414,
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
          "id": "a433209828e5990e8aaabd47dff72d1abbb6db64",
          "message": "chore(deps): Bump similar-asserts from 1.5.0 to 1.6.0 (#619)\n\nBumps [similar-asserts](https://github.com/mitsuhiko/similar-asserts)\nfrom 1.5.0 to 1.6.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/similar-asserts/blob/main/CHANGELOG.md\">similar-asserts's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.6.0</h2>\n<ul>\n<li>Loosen static lifetime bounds for labels. <a\nhref=\"https://redirect.github.com/mitsuhiko/similar-asserts/issues/9\">#9</a></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/c5110ea8b4e851690f882657c1a148cb01e636fa\"><code>c5110ea</code></a>\nMake clippy happy</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/b7a86e1f7528183d2dcd08bf7a33a8097fb4b574\"><code>b7a86e1</code></a>\nPrepare 1.6.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/similar-asserts/commit/cdadae6d589dd7efe5215164986578cdd1c480c1\"><code>cdadae6</code></a>\nLoosen static lifetime bound for labels (<a\nhref=\"https://redirect.github.com/mitsuhiko/similar-asserts/issues/9\">#9</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/mitsuhiko/similar-asserts/compare/1.5.0...1.6.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=similar-asserts&package-manager=cargo&previous-version=1.5.0&new-version=1.6.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-16T07:27:27Z",
          "tree_id": "d4b27f136029c51052297fb46f49713c2a7f619b",
          "url": "https://github.com/hasura/ndc-postgres/commit/a433209828e5990e8aaabd47dff72d1abbb6db64"
        },
        "date": 1729064400520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.594422,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.7052456,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.110163973725403,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.054502794049366,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.280735376975511,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.081213,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.51033199999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.28281836669892,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5708982247895094,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23865053104265485,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.9540435,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.15004874999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.20800840872079,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.293069703449827,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.438542617045211,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.364082,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.989176,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.898226204426795,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.291735731666588,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2904550415413382,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.0530335,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.54572629999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.666387862162082,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.625242714912211,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3149068733552403,
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
          "id": "fb1e7c290147e3508ffbb02dab9d3dec229be962",
          "message": "chore(deps): Bump cachix/install-nix-action from V28 to 30 (#626)\n\nBumps\n[cachix/install-nix-action](https://github.com/cachix/install-nix-action)\nfrom V28 to 30. This release includes the previously tagged commit.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/install-nix-action/releases\">cachix/install-nix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v30</h2>\n<ul>\n<li>Nix: 2.24.7 -&gt; 2.24.9, fixing <a\nhref=\"https://github.com/NixOS/nix/security/advisories/GHSA-6fjr-mq49-mm2c\">GHSA-6fjr-mq49-mm2c</a></li>\n</ul>\n<h2>v29</h2>\n<p>Bumps Nix to <a\nhref=\"https://nix.dev/manual/nix/2.24/release-notes/rl-2.24\">2.24.7</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/08dcb3a5e62fa31e2da3d490afc4176ef55ecd72\"><code>08dcb3a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/217\">#217</a>\nfrom Enzime/bump</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/4204e15198ce9348dda13b658f2b0b45397cf9e7\"><code>4204e15</code></a>\nnix: 2.24.8 -&gt; 2.24.9</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/6a10e2e9fdd7f91408e9f9f95bdc77cf5232b932\"><code>6a10e2e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/216\">#216</a>\nfrom Mic92/nix-bump</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/2bb614e91ac4d68577f12de9f9844d1e89c80b8d\"><code>2bb614e</code></a>\nNix: 2.24.7 -&gt; 2.24.8</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/9f70348d77d0422624097c4b7a75563948901306\"><code>9f70348</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/215\">#215</a>\nfrom Mic92/nix-bump</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/4f91dc2b65dd81b86830c57b0d3bc75eb0502a25\"><code>4f91dc2</code></a>\nNix: 2.24.6 -&gt; 2.24.7</li>\n<li>See full diff in <a\nhref=\"https://github.com/cachix/install-nix-action/compare/V28...v30\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-16T07:28:48Z",
          "tree_id": "8737703aaab5fb54d09b43ec03b1e92da87ac00f",
          "url": "https://github.com/hasura/ndc-postgres/commit/fb1e7c290147e3508ffbb02dab9d3dec229be962"
        },
        "date": 1729064973413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.518714,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 52.90068039999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.199402600371474,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.997935420853505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3227032719463489,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.5348425,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.16856309999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.834310895655406,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4776653540398286,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2301737516004375,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.864039,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.4569435,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.733833897484065,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.901055523061981,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39090934066215083,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.487175,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.8672468,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.457487997146742,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.718090406819108,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33956466855311523,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.50167,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.51056820000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.579412301714058,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.681935957313733,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.33992523362286925,
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
          "id": "c1c42861886339151c71507a7983bad3d9393480",
          "message": "chore(deps): Bump hyper from 0.14.30 to 0.14.31 (#631)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.30 to\n0.14.31.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.31</h2>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> improve performance of parsing sequentially\npartial messages (<a\nhref=\"https://github.com/hyperium/hyper/commit/97b595e5892c239a195b199f9e7910f582351c44\">97b595e</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.31/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.31 (2024-10-15)</h3>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> improve performance of parsing sequentially\npartial messages (<a\nhref=\"https://github.com/hyperium/hyper/commit/97b595e5892c239a195b199f9e7910f582351c44\">97b595e</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/7829148b7f3c271863c983a18c37adf5da35e726\"><code>7829148</code></a>\nv0.14.31</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/97b595e5892c239a195b199f9e7910f582351c44\"><code>97b595e</code></a>\nperf(http1): improve parsing of sequentially partial messages</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/739d5e634c8f82e7d0578ca979cb6d434bd682c2\"><code>739d5e6</code></a>\nchore(ci): pin some deps for MSRV job</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/b7e5b4a280c2bd485d470886c8b9bc5bbec50588\"><code>b7e5b4a</code></a>\nstyle(capi): update format of hyper.h</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.30...v0.14.31\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.30&new-version=0.14.31)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-25T13:23:04Z",
          "tree_id": "ec200e51e2be77e804e2cf5637ed69c68c0d60aa",
          "url": "https://github.com/hasura/ndc-postgres/commit/c1c42861886339151c71507a7983bad3d9393480"
        },
        "date": 1729863202694,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.972846,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.07835539999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.860757588394058,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.654637721924146,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3113956475718985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.94589,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.22439369999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.18214701685355,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6099343506764825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23202061546172012,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.109117,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.1568754,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.18270074136389,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.877966394528098,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44198073385809333,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.8815525,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 80.54778309999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.415323401774106,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.614364313380417,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31935353066384187,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.967809,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.22032075,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.578457863799095,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.135688010741468,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3115572893150066,
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
          "id": "a9dc23d53984a1d00a8fdb526155bf3ec3876f20",
          "message": "chore(deps): Bump serde_json from 1.0.127 to 1.0.132 (#632)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.127 to\n1.0.132.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.132</h2>\n<ul>\n<li>Improve binary size and compile time for JSON array and JSON object\ndeserialization by about 50% (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1205\">#1205</a>)</li>\n<li>Improve performance of JSON array and JSON object deserialization by\nabout 8% (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1206\">#1206</a>)</li>\n</ul>\n<h2>1.0.131</h2>\n<ul>\n<li>Implement Deserializer and IntoDeserializer for <code>Map&lt;String,\nValue&gt;</code> and <code>&amp;Map&lt;String, Value&gt;</code> (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1135\">#1135</a>,\nthanks <a\nhref=\"https://github.com/swlynch99\"><code>@​swlynch99</code></a>)</li>\n</ul>\n<h2>1.0.130</h2>\n<ul>\n<li>Support converting and deserializing <code>Number</code> from i128\nand u128 (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1141\">#1141</a>,\nthanks <a\nhref=\"https://github.com/druide\"><code>@​druide</code></a>)</li>\n</ul>\n<h2>1.0.129</h2>\n<ul>\n<li>Add <a\nhref=\"https://docs.rs/serde_json/1/serde_json/struct.Map.html#method.sort_keys\"><code>serde_json::Map::sort_keys</code></a>\nand <a\nhref=\"https://docs.rs/serde_json/1/serde_json/enum.Value.html#method.sort_all_objects\"><code>serde_json::Value::sort_all_objects</code></a>\n(<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1199\">#1199</a>)</li>\n</ul>\n<h2>1.0.128</h2>\n<ul>\n<li>Support serializing maps containing 128-bit integer keys to\nserde_json::Value (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1188\">#1188</a>,\nthanks <a\nhref=\"https://github.com/Mrreadiness\"><code>@​Mrreadiness</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/86d933cfd7b5665270e66296694468286794ae44\"><code>86d933c</code></a>\nRelease 1.0.132</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f45b422a3ba435722753a2ad7ad32e2a7e2d0596\"><code>f45b422</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1206\">#1206</a>\nfrom dtolnay/hasnext</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f2082d2a04b3b5d72503ac89e2182a5833bb2a1e\"><code>f2082d2</code></a>\nClearer order of comparisons</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0f54a1a0df5045aee4a2d2f8656c365d835095e5\"><code>0f54a1a</code></a>\nHandle early return sooner on eof in seq or map</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2a4cb44f7cc591a4542cbb1a73ca5bdc8a02c0d7\"><code>2a4cb44</code></a>\nRearrange 'match peek'</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4cb90ce66de2e0b52572d40ab518ad6d634e43d1\"><code>4cb90ce</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1205\">#1205</a>\nfrom dtolnay/hasnext</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b71ccd2d8f6aabaa0ac6cb889f8e18989038d968\"><code>b71ccd2</code></a>\nReduce duplicative instantiation of logic in SeqAccess and\nMapAccess</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a810ba985095ecd5bb3f8741f0e6d71e36975cb6\"><code>a810ba9</code></a>\nRelease 1.0.131</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0d084c50380a91b0b83ee96eb5e8ae04de7baaf5\"><code>0d084c5</code></a>\nTouch up PR 1135</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b4954a95613fcf5b5b9e830582c0ba5f24a0dd60\"><code>b4954a9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1135\">#1135</a>\nfrom swlynch99/map-deserializer</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/1.0.127...1.0.132\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.127&new-version=1.0.132)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-25T13:23:15Z",
          "tree_id": "1730096eda5f17470788932ab2678babf04ccdd8",
          "url": "https://github.com/hasura/ndc-postgres/commit/a9dc23d53984a1d00a8fdb526155bf3ec3876f20"
        },
        "date": 1729863337414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.23874,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.98769875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.129609519233068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.89745821840275,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3021978268104091,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.592602,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.4755378,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.57391418118597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5499012252300304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22608535362313992,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.724061,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.87741924999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.200320695649886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.249762910292034,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3913866958090504,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.273016,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 83.5931973,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.520439325757064,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.940779911555833,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.328651030993504,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.938319,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.9069972,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.392742634419623,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.113110623964186,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29430896288620007,
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
          "id": "25971a8b0c737cba797a7b4bc408f2cd7bbbad22",
          "message": "chore(deps): Bump uuid from 1.10.0 to 1.11.0 (#634)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.10.0 to 1.11.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.11.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Upgrade zerocopy to 0.8 by <a\nhref=\"https://github.com/yotamofek\"><code>@​yotamofek</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/771\">uuid-rs/uuid#771</a></li>\n<li>Prepare for 1.11.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/772\">uuid-rs/uuid#772</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/yotamofek\"><code>@​yotamofek</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/771\">uuid-rs/uuid#771</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.10.0...1.11.0\">https://github.com/uuid-rs/uuid/compare/1.10.0...1.11.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4473398413f7e3f4103374559b8d038b4801329a\"><code>4473398</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/772\">#772</a> from\nuuid-rs/cargo/1.11.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/59fbb1e695f087a9457c6c259fe41c5123f1b595\"><code>59fbb1e</code></a>\nprepare for 1.11.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/d9b34e7c93ce82ee84aa92ff6b8efcc82cd003c2\"><code>d9b34e7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/771\">#771</a> from\nyotamofek/zerocopy_0.8</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/14b24206c6e72a47f442de2f3cc50f9ebace267d\"><code>14b2420</code></a>\nUpgrade zerocopy to 0.8</li>\n<li>See full diff in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.10.0...1.11.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.10.0&new-version=1.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-25T13:23:35Z",
          "tree_id": "5fcff88af039776b21e8fa45e73f39e8d1f55db8",
          "url": "https://github.com/hasura/ndc-postgres/commit/25971a8b0c737cba797a7b4bc408f2cd7bbbad22"
        },
        "date": 1729863459170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.705795,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.52782309999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.939876048077217,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.44203852060711,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3522353819602789,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.380709,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.46346639999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.79709996936452,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4975786714564023,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2428881249114781,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.47808,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.04023159999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.25804558508469,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.227682787506737,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48736495435733534,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.959265,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.94778249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.845009992010336,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.415377689515498,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32081095737132903,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.272749,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.98028439999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.84720809432292,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.90762414917651,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3086997934627378,
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
          "id": "352a5fa0f3df4dbcd4db8b810c020e50fa397fdf",
          "message": "chore(deps): Bump indexmap from 2.5.0 to 2.6.0 (#630)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.5.0 to\n2.6.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.6.0 (2024-10-01)</h2>\n<ul>\n<li>Implemented <code>Clone</code> for <code>map::IntoIter</code> and\n<code>set::IntoIter</code>.</li>\n<li>Updated the <code>hashbrown</code> dependency to version 0.15.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/bf0362ba25ad3cade401e8314c9ab7aafc638db8\"><code>bf0362b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/354\">#354</a>\nfrom cuviper/release-2.6.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/bd0b4f7c8c7fd636c1c8d04c62d3daf944e9f8b4\"><code>bd0b4f7</code></a>\nAdd all release dates</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/53400496f4a6a97ebdca9f9fb374d1d617cf9148\"><code>5340049</code></a>\nRelease 2.6.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7f8022912acccb69ca165f4601e0c1350258a992\"><code>7f80229</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/343\">#343</a>\nfrom cuviper/hash_table</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e577bf2556a40cb85d3befceeead50ee77ae508d\"><code>e577bf2</code></a>\nUse <code>hashbrown::HashTable</code> instead of\n<code>RawTable</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/09b48ec3b33820fb4c41a06c4260441e4d223cb9\"><code>09b48ec</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/353\">#353</a>\nfrom cuviper/move_index</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/267b83d701b4d010e01089aa528e26f31c244293\"><code>267b83d</code></a>\nAdd an explicit bounds check in <code>move_index</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/d74a4daffbfffba72c1e07fcb5c45a449c5b36e1\"><code>d74a4da</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/349\">#349</a>\nfrom waywardmonkeys/improve-doc-formatting</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5b0ed20b872618b0e57fa91f85228a174164fce8\"><code>5b0ed20</code></a>\ndocs: Improve doc formatting with backticks</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/15518f3152bf1eac80d9fd62c4a7010ea68acc00\"><code>15518f3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/348\">#348</a>\nfrom cuviper/clone-intoiter</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.5.0...2.6.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.5.0&new-version=2.6.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-10-25T14:20:23Z",
          "tree_id": "109054e6c0d7257e9fdea28c028c49cd4ee3a463",
          "url": "https://github.com/hasura/ndc-postgres/commit/352a5fa0f3df4dbcd4db8b810c020e50fa397fdf"
        },
        "date": 1729866500574,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.716911500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.788486750000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.457369703914063,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.194742373101677,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2705329158230059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.943663,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.21218825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.19472524939806,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.430280078821042,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22681064327653053,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.052031,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.4858802,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.69226110563203,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.601509352788764,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40564440565862947,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.081671,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.9551395,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.645757593634364,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.60417649227411,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3270939817267408,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.115367,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.35956705,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.760669879509194,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.577535251373316,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31596403080969143,
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
          "distinct": true,
          "id": "dc8ef3ea3ee32d16daf6cd2e3b165acc616fa4e1",
          "message": "Make mutation pre/post checks optional (#635)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n-\n[ENG-1205](https://linear.app/hasura/issue/ENG-1205/make-mutation-precheck-and-postcheck-arguments-optional)\n- 60fc380dd5fde6cf8bf4d85cdb81f4ae36abc46a - Change mutation pre/post\nchecks to be optional\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2024-10-25T14:42:54Z",
          "tree_id": "b4e7030e85bd9b88a201e9835d4bd6683b28955c",
          "url": "https://github.com/hasura/ndc-postgres/commit/dc8ef3ea3ee32d16daf6cd2e3b165acc616fa4e1"
        },
        "date": 1729867742231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.258976500000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.782419849999975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.256514204830594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.621705191398085,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3190742838811547,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.540651,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.0951012,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.345432295495236,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.707367659223543,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27035296685545784,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.270598,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.05395119999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.968962093173356,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.935466449128743,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40009150682660954,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.431587,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.21367284999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.15604502780728,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.722490206554383,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30516270096356,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.257316,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.18420819999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.85018376544167,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.132133332788122,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.314566763661447,
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
          "id": "859e0bfe4ba5f53347daecdb57dbcf7e872a01a9",
          "message": "Make `v2_` mutation prefix configurable (#636)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nPulled from https://github.com/hasura/ndc-postgres/pull/635 into own PR.\n\nWe add `mutations_prefix: Option<String>` to v5 configuration. When left\n`null` (for existing projects), we default to `v2_mutation_name`, but it\ncan be replaced with `horse_mutation_name` etc.\n\nMost people will just want to use it to remove the prefix though, and\nthat is the default for new projects. `mutationsPrefix: \"\"` will get rid\nof the prefix altogether, which I assume most users would want.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n---------\n\nCo-authored-by: Brandon Martin <brandon@codedmart.com>",
          "timestamp": "2024-10-25T16:27:33Z",
          "tree_id": "980af004b4b3befd4322d34dabc69eca0248525e",
          "url": "https://github.com/hasura/ndc-postgres/commit/859e0bfe4ba5f53347daecdb57dbcf7e872a01a9"
        },
        "date": 1729874014685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.161532,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.395680399999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.500459643010664,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.092177182861093,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.279976800521438,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.418049,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.5319852,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.90637674320348,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9204271633467869,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2529836460426278,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.687673000000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.67040374999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.75151975286352,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.577960631668095,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36137696694654575,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.0915775,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.3462979,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.979440080011493,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.337055807367214,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3228091899917107,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.3573795,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.84092325,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.634392045152882,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.0494069480672685,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3096840128391354,
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
          "distinct": false,
          "id": "e3f7a53ea3593ecf84b02ba9f8e8dcc9df38cc7c",
          "message": "Bump version to 1.2.0 (#637)\n\nThis bumps the version in `Cargo.toml` and updates `changelog.md`.\n\n---------\n\nCo-authored-by: codedmart <40686+codedmart@users.noreply.github.com>\nCo-authored-by: Brandon Martin <brandon@codedmart.com>",
          "timestamp": "2024-10-25T19:08:12Z",
          "tree_id": "ee2c72b54a6094d28605572b72fa909d65d5ca22",
          "url": "https://github.com/hasura/ndc-postgres/commit/e3f7a53ea3593ecf84b02ba9f8e8dcc9df38cc7c"
        },
        "date": 1729883660889,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.72584,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.13414179999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.096728008806018,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.59073558399967,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29406676920685815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.212249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.23943249999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.59133247598104,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.300182518126249,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2143500439352976,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.268928,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.77710725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.624188194471724,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.463401104938203,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3813483875231782,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.295804,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.00031479999981,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.24751494458126,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.023601065786092,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2954224333537077,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.4459105,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.44599604999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.386873573302523,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.769380641386107,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3005296586146822,
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
          "id": "1cc9483321b80c9a9f9b951279eb87605eafb0e0",
          "message": "Bump to Rust 1.83, fix clippy suggestions (#649)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpgrade to Rust 1.83, fix new clippy suggestions.",
          "timestamp": "2024-12-02T10:53:47Z",
          "tree_id": "040b0f284870d83852d8203f3fc6ec503f4098ab",
          "url": "https://github.com/hasura/ndc-postgres/commit/1cc9483321b80c9a9f9b951279eb87605eafb0e0"
        },
        "date": 1733137467029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.953859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.97382339999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.397041520059355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.229994934113774,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2995052617711126,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.609993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.3078526,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.54328746358348,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6875209585939643,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24264294690216937,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.374478,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.748616,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.923829700998528,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.880518391599065,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3490925467384512,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.293609,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.77849690000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.593790399963083,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.629860598369383,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.27372124394276187,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.560649,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.86400900000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.95373038547125,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.12948103249747,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36172848801629964,
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
          "id": "57fbb33ac4949a2c70c47542d4170a3204f6b00c",
          "message": "chore(deps): Bump tokio from 1.40.0 to 1.41.1 (#646)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.40.0 to 1.41.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.41.1</h2>\n<h1>1.41.1 (Nov 7th, 2024)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>metrics: fix bug with wrong number of buckets for the histogram (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6957\">#6957</a>)</li>\n<li>net: display <code>net</code> requirement for\n<code>net::UdpSocket</code> in docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6938\">#6938</a>)</li>\n<li>net: fix typo in <code>TcpStream</code> internal comment (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6944\">#6944</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6957\">#6957</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6957\">tokio-rs/tokio#6957</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6938\">#6938</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6938\">tokio-rs/tokio#6938</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6944\">#6944</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6944\">tokio-rs/tokio#6944</a></p>\n<h2>Tokio v1.41.0</h2>\n<h1>1.41.0 (Oct 22th, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>metrics: stabilize <code>global_queue_depth</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6854\">#6854</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6918\">#6918</a>)</li>\n<li>net: add conversions for unix <code>SocketAddr</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6868\">#6868</a>)</li>\n<li>sync: add <code>watch::Sender::sender_count</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6836\">#6836</a>)</li>\n<li>sync: add <code>mpsc::Receiver::blocking_recv_many</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6867\">#6867</a>)</li>\n<li>task: stabilize <code>Id</code> apis (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6793\">#6793</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6891\">#6891</a>)</li>\n</ul>\n<h3>Added (unstable)</h3>\n<ul>\n<li>metrics: add H2 Histogram option to improve histogram granularity\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6897\">#6897</a>)</li>\n<li>metrics: rename some histogram apis (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6924\">#6924</a>)</li>\n<li>runtime: add <code>LocalRuntime</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6808\">#6808</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>runtime: box futures larger than 16k on release mode (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6826\">#6826</a>)</li>\n<li>sync: add <code>#[must_use]</code> to <code>Notified</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6828\">#6828</a>)</li>\n<li>sync: make <code>watch</code> cooperative (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6846\">#6846</a>)</li>\n<li>sync: make <code>broadcast::Receiver</code> cooperative (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6870\">#6870</a>)</li>\n<li>task: add task size to tracing instrumentation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6881\">#6881</a>)</li>\n<li>wasm: enable <code>cfg_fs</code> for <code>wasi</code> target (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6822\">#6822</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>net: fix regression of abstract socket path in unix socket (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6838\">#6838</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>io: recommend <code>OwnedFd</code> with <code>AsyncFd</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6821\">#6821</a>)</li>\n<li>io: document cancel safety of <code>AsyncFd</code> methods (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6890\">#6890</a>)</li>\n<li>macros: render more comprehensible documentation for\n<code>join</code> and <code>try_join</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6814\">#6814</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6841\">#6841</a>)</li>\n<li>net: fix swapped examples for <code>TcpSocket::set_nodelay</code>\nand <code>TcpSocket::nodelay</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6840\">#6840</a>)</li>\n<li>sync: document runtime compatibility (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6833\">#6833</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/bb7ca7507b94d01ffe0e275ddc669734ab3bf783\"><code>bb7ca75</code></a>\nchore: prepare Tokio v1.41.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6959\">#6959</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4a34b77af5b6ae8addb8f60cfbda5dd2686b61d3\"><code>4a34b77</code></a>\nmetrics: fix bug with wrong number of buckets for the histogram (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6957\">#6957</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/8897885425bf3d89053f896319eeb8777cf255fc\"><code>8897885</code></a>\ndocs: fix mismatched backticks in CONTRIBUTING.md (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6951\">#6951</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/0dbdd196b6a9af9a106c654a8613088b81a64655\"><code>0dbdd19</code></a>\nci: update cargo-check-external-types to 0.1.13 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6949\">#6949</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/94e55c092b0d8fb583ee19383485818cb1f5e562\"><code>94e55c0</code></a>\nnet: fix typo in <code>TcpStream</code> internal comment (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6944\">#6944</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4468f27c319bf54ed973128e7257a337fb0c5374\"><code>4468f27</code></a>\nmetrics: fixed flaky <code>worker_steal_count</code> test (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6932\">#6932</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/070a825999d3407f7c00e762fbecf298428e972a\"><code>070a825</code></a>\nmetrics: removed race condition from global_queue_depth_multi_thread\ntest (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6\">#6</a>...</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/946401c345d672d357693740bc51f77bc678c5c4\"><code>946401c</code></a>\nnet: display <code>net</code> requirement for\n<code>net::UdpSocket</code> in docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6938\">#6938</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/0c01fd23b4b8fc228f14ea0a75796ad52b85d675\"><code>0c01fd2</code></a>\nci: use patched version of cargo-check-external-types to fix CI failure\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6937\">#6937</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ebe241647e17e9ce5f8746f7eeefe2a2bb98a467\"><code>ebe2416</code></a>\nci: use cargo deny (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6931\">#6931</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.40.0...tokio-1.41.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.40.0&new-version=1.41.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-02T11:35:13Z",
          "tree_id": "3737f17537309fd0f1518d9df18e3cb55ffe288d",
          "url": "https://github.com/hasura/ndc-postgres/commit/57fbb33ac4949a2c70c47542d4170a3204f6b00c"
        },
        "date": 1733140177864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.308843,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.985347699999934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.604631828908246,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.698144805553174,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2998719778268111,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.058231,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.31403549999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.34837900809861,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6788233625824915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23713921182817443,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.304059,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.8847625,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.198367346094106,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.229922178328092,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3816768760921935,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.319527,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.59237719999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.927559939229393,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.150838715431771,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2948268941733927,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.2175155,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.38745875000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.4942731083959,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.351246198046901,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2702757368320078,
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
          "id": "e396286db5ad1bb78d8e46f2ae0bc2cb89267d97",
          "message": "chore(deps): Bump serde from 1.0.210 to 1.0.215 (#648)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.210 to\n1.0.215.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.215</h2>\n<ul>\n<li>Produce warning when multiple fields or variants have the same\ndeserialization name (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2855\">#2855</a>,\n<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2856\">#2856</a>,\n<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2857\">#2857</a>)</li>\n</ul>\n<h2>v1.0.214</h2>\n<ul>\n<li>Implement IntoDeserializer for all Deserializers in serde::de::value\nmodule (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2568\">#2568</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n</ul>\n<h2>v1.0.213</h2>\n<ul>\n<li>Fix support for macro-generated <code>with</code> attributes inside\na newtype struct (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2847\">#2847</a>)</li>\n</ul>\n<h2>v1.0.212</h2>\n<ul>\n<li>Fix hygiene of macro-generated local variable accesses in\nserde(with) wrappers (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2845\">#2845</a>)</li>\n</ul>\n<h2>v1.0.211</h2>\n<ul>\n<li>Improve error reporting about mismatched signature in\n<code>with</code> and <code>default</code> attributes (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2558\">#2558</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n<li>Show variant aliases in error message when variant deserialization\nfails (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2566\">#2566</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n<li>Improve binary size of untagged enum and internally tagged enum\ndeserialization by about 12% (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2821\">#2821</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8939af48fecb965eb3ff04dc8969146d5af5ca0f\"><code>8939af4</code></a>\nRelease 1.0.215</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/fa5d58cd007812b5990ec5721082bac293a97467\"><code>fa5d58c</code></a>\nUse ui test syntax that does not interfere with rustfmt</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1a3cf4b3c18396a1c5da6999ff7695d822709044\"><code>1a3cf4b</code></a>\nUpdate PR 2562 ui tests</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/7d96352e9638de6662e4660e974ffc7ea232e511\"><code>7d96352</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2857\">#2857</a>\nfrom dtolnay/collide</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/111ecc5d8c01cf7795059f3bc436bfd0e57d1d64\"><code>111ecc5</code></a>\nUpdate ui tests for warning on colliding aliases</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/edd6fe954bc35bbafb454835c6529d0e30148624\"><code>edd6fe9</code></a>\nRevert &quot;Add checks for conflicts for aliases&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/a20e9249c5849b6855ca2d2aa1d0ce563855c3bd\"><code>a20e924</code></a>\nRevert &quot;pacify clippy&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b1353a99cdf7b7ab30b49d5c0cfed0b725b7a8df\"><code>b1353a9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2856\">#2856</a>\nfrom dtolnay/dename</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/c59e876bb37ad690090d83e92a7799b75b1a3f49\"><code>c59e876</code></a>\nProduce a separate warning for every colliding name</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/7f1e697c0d4d737068c8dd3f258e7c4122bf7196\"><code>7f1e697</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2855\">#2855</a>\nfrom dtolnay/namespan</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.210...v1.0.215\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.210&new-version=1.0.215)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-02T11:35:24Z",
          "tree_id": "6dd96bf3852de70ef51387e1480c0cf3cf14513f",
          "url": "https://github.com/hasura/ndc-postgres/commit/e396286db5ad1bb78d8e46f2ae0bc2cb89267d97"
        },
        "date": 1733140188240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.903683,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.62328299999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.720174717439384,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.345920226516462,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2787060920362784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.542281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.8909812,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.60593464769043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.450545150525329,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24610313464848418,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.04935,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.8790741,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.64607214470206,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.202234160738548,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4340390792661804,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.005264,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.1215235,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.802378259869602,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.41817991277868,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3383695718739611,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.011466,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.23706654999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.109156660658677,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.947203103329564,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3515713078333196,
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
          "id": "4ead7f864c2c8d95af6797cfbd557aaac7329125",
          "message": "chore(deps): Bump serde_json from 1.0.132 to 1.0.133 (#650)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.132 to\n1.0.133.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.133</h2>\n<ul>\n<li>Implement From&lt;[T; N]&gt; for serde_json::Value (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1215\">#1215</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0903de449c52c1b4a2271e909b7afb18909dc379\"><code>0903de4</code></a>\nRelease 1.0.133</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2b65ca09498a8a907e3e3cb66794414edfa6fe27\"><code>2b65ca0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1215\">#1215</a>\nfrom dtolnay/fromarray</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4e5f985958bedbc7e75ba6c1931edaf73508c4a7\"><code>4e5f985</code></a>\nImplement From&lt;[T; N]&gt; for Value</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2ccb5b67ca34a5e53b42fa608d756e25e57f91a3\"><code>2ccb5b6</code></a>\nDisable question_mark clippy lint in lexical test</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a11f5f2bc4756035e5a04e01ad486d8a99779527\"><code>a11f5f2</code></a>\nResolve unnecessary_map_or clippy lints</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/07f280a79c07a5e713d519ed6c6a1a71b0cf871a\"><code>07f280a</code></a>\nWrap PR 1213 to 80 columns</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/75ed44722d451143da5621f5ce3edb794965de79\"><code>75ed447</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1213\">#1213</a>\nfrom djmitche/safety-comment</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/73011c0b2bcd21639446728fc50de4131a51e5ca\"><code>73011c0</code></a>\nAdd a safety comment to unsafe block</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/be2198a54d0d9e668f8e2e59ca2e23e3ac10ae60\"><code>be2198a</code></a>\nPrevent upload-artifact step from causing CI failure</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/7cce517f53fd60d40bd6ef87a0e51f88a306e901\"><code>7cce517</code></a>\nRaise minimum version for preserve_order feature to Rust 1.65</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.132...v1.0.133\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.132&new-version=1.0.133)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-03T09:29:37Z",
          "tree_id": "66cdff51b4458343de60df595be4c2caaaca8154",
          "url": "https://github.com/hasura/ndc-postgres/commit/4ead7f864c2c8d95af6797cfbd557aaac7329125"
        },
        "date": 1733218809427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.796848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.91867159999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.69359123572869,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.706061056439832,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2994383270195389,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.0245885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.2684222,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.69084387437931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2097764239509985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21220195840248984,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.7135555,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.52080324999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.5659766105506,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.427847082376424,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3923807695071858,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.566211,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.0698657,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.871223697256653,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.313761003685556,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3203169751795698,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.659041,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.5298589,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.752683441111042,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.321785972589645,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32753685331114324,
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
          "id": "bd2bf6fbb51bc78283038bd3d287ae9be168c0cb",
          "message": "chore(deps): Bump url from 2.5.2 to 2.5.4 (#651)\n\nBumps [url](https://github.com/servo/rust-url) from 2.5.2 to 2.5.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/servo/rust-url/releases\">url's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.5.4</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Revert &quot;Normalize URL paths: convert /.//p, /..//p, and //p to\np (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/943\">#943</a>)&quot;\nby <a href=\"https://github.com/valenting\"><code>@​valenting</code></a>\nin <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/999\">servo/rust-url#999</a></li>\n<li>Updates the MSRV to 1.63 required though the libc v0.2.164\ndependency</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.3...v2.5.4\">https://github.com/servo/rust-url/compare/v2.5.3...v2.5.4</a></p>\n<h2>v2.5.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>fix: enable wasip2 feature for wasm32-wasip2 target by <a\nhref=\"https://github.com/brooksmtownsend\"><code>@​brooksmtownsend</code></a>\nin <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/960\">servo/rust-url#960</a></li>\n<li>Fix idna tests with no_std by <a\nhref=\"https://github.com/cjwatson\"><code>@​cjwatson</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/963\">servo/rust-url#963</a></li>\n<li>Fix debugger_visualizer test failures. by <a\nhref=\"https://github.com/valenting\"><code>@​valenting</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/967\">servo/rust-url#967</a></li>\n<li>Add AsciiSet::EMPTY and boolean operators by <a\nhref=\"https://github.com/joshka\"><code>@​joshka</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/969\">servo/rust-url#969</a></li>\n<li>mention why we pin unicode-width by <a\nhref=\"https://github.com/Manishearth\"><code>@​Manishearth</code></a> in\n<a\nhref=\"https://redirect.github.com/servo/rust-url/pull/972\">servo/rust-url#972</a></li>\n<li>refactor and add tests for percent encoding by <a\nhref=\"https://github.com/joshka\"><code>@​joshka</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/977\">servo/rust-url#977</a></li>\n<li>Add a test for and fix issue <a\nhref=\"https://redirect.github.com/servo/rust-url/issues/974\">#974</a> by\n<a href=\"https://github.com/hansl\"><code>@​hansl</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/975\">servo/rust-url#975</a></li>\n<li><code>no_std</code> support for the <code>url</code> crate by <a\nhref=\"https://github.com/domenukk\"><code>@​domenukk</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/831\">servo/rust-url#831</a></li>\n<li>Normalize URL paths: convert /.//p, /..//p, and //p to p by <a\nhref=\"https://github.com/theskim\"><code>@​theskim</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/943\">servo/rust-url#943</a></li>\n<li>support Hermit by <a\nhref=\"https://github.com/m-mueller678\"><code>@​m-mueller678</code></a>\nin <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/985\">servo/rust-url#985</a></li>\n<li>fix: support <code>wasm32-wasip2</code> on the stable channel by <a\nhref=\"https://github.com/brooksmtownsend\"><code>@​brooksmtownsend</code></a>\nin <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/983\">servo/rust-url#983</a></li>\n<li>Improve serde error output by <a\nhref=\"https://github.com/konstin\"><code>@​konstin</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/982\">servo/rust-url#982</a></li>\n<li>OSS-Fuzz: Add more fuzzer by <a\nhref=\"https://github.com/arthurscchan\"><code>@​arthurscchan</code></a>\nin <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/988\">servo/rust-url#988</a></li>\n<li>Merge idna-v1x to main by <a\nhref=\"https://github.com/hsivonen\"><code>@​hsivonen</code></a> in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/990\">servo/rust-url#990</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/brooksmtownsend\"><code>@​brooksmtownsend</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/960\">servo/rust-url#960</a></li>\n<li><a href=\"https://github.com/cjwatson\"><code>@​cjwatson</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/963\">servo/rust-url#963</a></li>\n<li><a href=\"https://github.com/joshka\"><code>@​joshka</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/969\">servo/rust-url#969</a></li>\n<li><a href=\"https://github.com/hansl\"><code>@​hansl</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/975\">servo/rust-url#975</a></li>\n<li><a href=\"https://github.com/theskim\"><code>@​theskim</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/943\">servo/rust-url#943</a></li>\n<li><a\nhref=\"https://github.com/m-mueller678\"><code>@​m-mueller678</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/985\">servo/rust-url#985</a></li>\n<li><a href=\"https://github.com/konstin\"><code>@​konstin</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/982\">servo/rust-url#982</a></li>\n<li><a\nhref=\"https://github.com/arthurscchan\"><code>@​arthurscchan</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/servo/rust-url/pull/988\">servo/rust-url#988</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.2...v2.5.3\">https://github.com/servo/rust-url/compare/v2.5.2...v2.5.3</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/d77dfb467f8dd0c1fa181b3dfbc46e7cbe252021\"><code>d77dfb4</code></a>\nRevert &quot;Normalize URL paths: convert /.//p, /..//p, and //p to p\n(<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/943\">#943</a>)&quot;\n(<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/999\">#999</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/da649031b93b0713b327fac7daa449017468e943\"><code>da64903</code></a>\nChange no_std to no-std in Cargo.toml (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/991\">#991</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/8a683ff4ab10498d619fd8206b64402de19474be\"><code>8a683ff</code></a>\nMerge idna-v1x to main (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/990\">#990</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/08a326820a4a54d6a9730ecabd590942fc6b66dc\"><code>08a3268</code></a>\nOSS-Fuzz: Add more fuzzers (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/988\">#988</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/5d363cc3cdf6e2f591161cc7152f4d06f8b0a477\"><code>5d363cc</code></a>\nImprove serde error output (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/982\">#982</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/30e62589c78214c344d7844b62c8d9b557475a78\"><code>30e6258</code></a>\nfix: support wasm32-wasip2 on stable channel (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/983\">#983</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/bf089c41a08fef7f4bd761c2a2034a69cc0b41b3\"><code>bf089c4</code></a>\nsupport hermit (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/985\">#985</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/b08a655d07f355dcce110922a9b30c1602236124\"><code>b08a655</code></a>\nNormalize URL paths: convert /.//p, /..//p, and //p to p (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/943\">#943</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/ebd5cfbf6ffa20de67e47b3b4fa1be55081d7ca8\"><code>ebd5cfb</code></a>\n<code>no_std</code>support for the <code>url</code> crate (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/831\">#831</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/7eccac9a0b763145ab1bb67a50576a34cc750567\"><code>7eccac9</code></a>\nAdd a test for and fix issue <a\nhref=\"https://redirect.github.com/servo/rust-url/issues/974\">#974</a>\n(<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/975\">#975</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.2...v2.5.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=url&package-manager=cargo&previous-version=2.5.2&new-version=2.5.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-03T09:29:46Z",
          "tree_id": "540f55d876b13ca47b70df108792efc5cd1ef274",
          "url": "https://github.com/hasura/ndc-postgres/commit/bd2bf6fbb51bc78283038bd3d287ae9be168c0cb"
        },
        "date": 1733219039684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.2837075,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.38929685,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.837592218052325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.4450388742888975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.298845221967045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.998674,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.68149075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.840125718521364,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6215829179235755,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25224430104537715,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.899195,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.46082159999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.776965024878997,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.718661391557653,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.424351516109124,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.4646685,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.80433034999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.22572539346639,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.221536848517154,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3031590697864875,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.431755,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.05017729999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.724320850593006,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.404858099589337,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2766465120439507,
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
          "id": "dc51e4a9ac96ac32d2629c7834fbea13c39f7b18",
          "message": "chore(deps): Bump tempfile from 3.13.0 to 3.14.0 (#654)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.13.0 to\n3.14.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.14.0</h2>\n<ul>\n<li>Make the wasip2 target work (requires tempfile's &quot;nightly&quot;\nfeature to be enabled). <a\nhref=\"https://redirect.github.com/Stebalien/tempfile/pull/305\">#305</a>.</li>\n<li>Allow older windows-sys versions <a\nhref=\"https://redirect.github.com/Stebalien/tempfile/pull/304\">#304</a>.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/b232c584c89de0793361e04945f8acd3c35af879\"><code>b232c58</code></a>\nchore: release 3.14.0 (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/307\">#307</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/a23f396ede61a989ed48c1906c07f20d03d04ff2\"><code>a23f396</code></a>\nfix: enable wasip2 feature for wasm32-wasip2 target (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/305\">#305</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/f162807fdba5c4fa99c9725e8e3ffcb74fe07450\"><code>f162807</code></a>\nci: switch from cargo-wasi to directly using the wasip1 target (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/306\">#306</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/fa8ad0090413475cce8402044a06e724ffc6be0e\"><code>fa8ad00</code></a>\nallow older windows-sys (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/304\">#304</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/335d91d538953bb535f0839f4daced8d008d1dab\"><code>335d91d</code></a>\nfix: expose SpooledData enum (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/301\">#301</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.13.0...v3.14.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.13.0&new-version=3.14.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-03T09:30:09Z",
          "tree_id": "ef64f21c920834cc31e44f1865bb8eb63b561428",
          "url": "https://github.com/hasura/ndc-postgres/commit/dc51e4a9ac96ac32d2629c7834fbea13c39f7b18"
        },
        "date": 1733219061778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.480849999999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.31562604999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.572413124590492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.89452642553473,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2996513162609341,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.346607,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.94200939999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.68451195339545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7124088705336575,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23547023445856938,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.2124825,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.02098094999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.46112150338725,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.945887607712219,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.34103488645097185,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.240387,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.47234120000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.427904389146168,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.204396052569525,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2897088518325949,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.469214,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.2365225,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.711824295612477,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.94682921554206,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3014164835692308,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ratfink88@gmail.com",
            "name": "Daniel Chambers",
            "username": "daniel-chambers"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a5a3726ae2163d438512415cfc77d22b262706c",
          "message": "Fix invalid joins when the order by relationship predicate is null (#655)\n\n### What\nIf a relationship used in an order by specified a null predicate, the\nSQL generator would fail to add the join conditions when joining the\nrelated table into the query. This would result in an incorrect cross\nproduct between the table and the related table.\n\n### How\n\nIf the relationship predicate is null, we now correctly add the table's\njoin conditions.\n\nExisting tests that assumed all predicates would contain an always true\nexpression have been changed to contain a null predicate and an extra\ntest has been added to cover receiving an always true predicate (to make\nsure that still works).\n\nFixes ENG-1386",
          "timestamp": "2024-12-03T09:31:52Z",
          "tree_id": "6a25bac5617f2e3270396343f3990a933f450cda",
          "url": "https://github.com/hasura/ndc-postgres/commit/7a5a3726ae2163d438512415cfc77d22b262706c"
        },
        "date": 1733219163368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.93308,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.64382809999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.093890162646282,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.658845401988735,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2900246381313987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.369487,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.743678,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.21460612383561,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3999761867225118,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.206313967811862,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.241343,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.47352970000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.87993815246549,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.062305976401465,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4082987664974691,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.889419,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.08468859999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.302662654192748,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.257227810256101,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28588235426188496,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.029335,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.37070789999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.055219746006948,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.846881780475421,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30226940090904447,
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
          "id": "cf43ea1ecccbf41f4249e508dd7ff80d33239bd2",
          "message": "guarantee table names are unique (#656)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\nTable names may conflict with scalar type names.\n\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n Prevent conflicts by:\n\n-- assigning unique aliases to tables during introspection, if needed\n-- preserving customized aliases during update operations",
          "timestamp": "2024-12-05T00:17:30Z",
          "tree_id": "7b7f352c9c1d998eebbbb257183976904fba461e",
          "url": "https://github.com/hasura/ndc-postgres/commit/cf43ea1ecccbf41f4249e508dd7ff80d33239bd2"
        },
        "date": 1733358324199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.777372,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.29516539999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.80611526490887,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.989000804471923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25215151926616897,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.976435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.9214543,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 44.79226950142605,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3312125306033238,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22464453082256308,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.671261,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.5161018,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.3690405247457,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.308186985345259,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37968743984374964,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.465723,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.29325389999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.71082855548045,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.717336558320831,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3495696523739046,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.626122,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.8448481,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.964995593754093,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.288570158487698,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3044669206681421,
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
          "id": "ef2545ed00c0604ba851eccf6f339bcf22ee5dc8",
          "message": "Bump `hashbrown` to fix cargo audit (#658)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`cargo audit` found a security issue, this fixes it.",
          "timestamp": "2024-12-06T13:38:55Z",
          "tree_id": "d1b4100ec4c4815d22d56df3a8bdb86adfe5f76a",
          "url": "https://github.com/hasura/ndc-postgres/commit/ef2545ed00c0604ba851eccf6f339bcf22ee5dc8"
        },
        "date": 1733492861755,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.6524445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.20173325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.626074438255415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.253568526471405,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3115068017603169,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.847227,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.67249609999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.09108098797222,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4908573939093799,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2416419599848959,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.2238475,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.86318299999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.04952918065842,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.024381968131681,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3925736666295681,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.355771,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.9774585,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.638845940197744,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.230546543862854,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3600354672293547,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.249781999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.99375015,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.694578186381197,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.319837357041184,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3535282614359201,
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
          "id": "0a31c694323285a2e943f4de79f7e1dac39fd7c2",
          "message": "Fix Cockroach Native Query problem (#664)\n\n### What\n\nNative query tracking fails for CockroachDB because OIDs are 64-bit\n(despite what the documentation says). However, if we just change the\ntype to `i64`, then the vanilla Postgres native query setup fails\nbecause `sqlx` requires each type in Rust to correspond to a specific\nPostgres type, and thus we can't do some sort of dynamic switching.\n\n### How\n\nWe cast absolutely everything to `i64` explicitly in the query. The fact\nthat this works seems to be accidental: because the input type becomes\nirrelevant, Cockroach determines a different type for `oid` than\nPostgres, and both are happy. `sqlx` bases its types on information from\nthe database, so it's also happy.\n\nI have tested this with tracking a native query in both Cockroach and\nPostgres, and both seem to be happy.",
          "timestamp": "2024-12-16T13:57:40Z",
          "tree_id": "9b01812e7d775b0e6a048665ee2ed831fcd1616e",
          "url": "https://github.com/hasura/ndc-postgres/commit/0a31c694323285a2e943f4de79f7e1dac39fd7c2"
        },
        "date": 1734358147016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.935957,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.7747555,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.902525320093256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.8295704711726355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28891782706916935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.23754,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.1857728,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.58421943428992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5100105412387563,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21359184320256042,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.477896,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.70960039999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.612837342602358,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.112986816683947,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4021744480266484,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.383973499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.96158349999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.44166520988842,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.582729023460786,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3065379133300242,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.791107,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.77364675000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.895411221319893,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.502610668728423,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27892408752758474,
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
          "id": "d2804e45a187b954dfd3b6fc76ee91f5b94b6738",
          "message": "chore(deps): Bump anyhow from 1.0.93 to 1.0.95 (#665)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.93 to 1.0.95.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.95</h2>\n<ul>\n<li>Add <a\nhref=\"https://docs.rs/anyhow/1/anyhow/struct.Error.html#method.from_boxed\"><code>Error::from_boxed</code></a>\n(<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/401\">#401</a>,\n<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/402\">#402</a>)</li>\n</ul>\n<h2>1.0.94</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/48be1caa24fa65467aaa8071eb698542e4fa1d43\"><code>48be1ca</code></a>\nRelease 1.0.95</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/a03d6d60f9bcccaa096284534799ced715139f42\"><code>a03d6d6</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/402\">#402</a>\nfrom dtolnay/fromboxed</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/52e4abb1f2167c71c2f99d9a1048d9321baed963\"><code>52e4abb</code></a>\nAdd Error::from_boxed with documentation about bidirectional\n<code>?</code></li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/ffecefcfe0d25efde16c2b049cd84132b28b0f6d\"><code>ffecefc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/401\">#401</a>\nfrom dtolnay/construct</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/671f700dd3decdfb56c8f8b6fdae6ced5acd5ca9\"><code>671f700</code></a>\nAdd construct_ prefix to name of private construct functions</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/8ceb5e988fcae18270745e291efb8bd716c25bf0\"><code>8ceb5e9</code></a>\nRelease 1.0.94</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/b9009abc16b3a8222a70ead8a81291a7aed19f9b\"><code>b9009ab</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/399\">#399</a>\nfrom dtolnay/okvalue</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/863791a66d1b2d3033e111930684214f41ed0220\"><code>863791a</code></a>\nAlign naming between Ok function argument and its documentation</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/2081692170f24eecc10c79288c82b2a300f3bf7d\"><code>2081692</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/398\">#398</a>\nfrom zertosh/ok_doc_format</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/cc2cecb428b4eeb35ffb332d1f878f210a1e3fa3\"><code>cc2cecb</code></a>\nFix anyhow::Ok rustdoc code formatting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.93...1.0.95\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.93&new-version=1.0.95)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-07T18:02:07Z",
          "tree_id": "c565e03089766c6d0d0f51c1b3df6385448df947",
          "url": "https://github.com/hasura/ndc-postgres/commit/d2804e45a187b954dfd3b6fc76ee91f5b94b6738"
        },
        "date": 1736273781048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.37176,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.9782125,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.30174647326957,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.043688956726324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28046612732760334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.969636,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.84079279999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.491499844759566,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4858562384181226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2085132716149668,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.3464185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.89659409999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.09647721324137,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.812655928297396,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32045310026986573,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.496674,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.39856999999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.612090692819674,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.324932302061473,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3377278538788031,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.398628,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.36346685,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.553311474152228,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.097560364955566,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34689089568745396,
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
          "id": "50ebad496dd8dc59e36779ab718542f1e78f7a15",
          "message": "Made `hasura/engine` codeowners for this repo (#667)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nEnsure `hasura/engine` review PRs for this repo.",
          "timestamp": "2025-01-07T18:16:04Z",
          "tree_id": "3ccf60df50f512655fe77715fee31ae735683b40",
          "url": "https://github.com/hasura/ndc-postgres/commit/50ebad496dd8dc59e36779ab718542f1e78f7a15"
        },
        "date": 1736274458299,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.790011,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.295717499999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.990911747180814,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.619545568470539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3053436332147385,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.377771,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.98578319999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.0286874115499,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7962416710796134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26417703324962566,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.90795850000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.69312935000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.073816223449562,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.408383317863091,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35445936076886686,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.063702,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.99108054999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.954441497918108,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.069775782908653,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28893648296573765,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.975476,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.81486079999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.736561899952857,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.514546654583842,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3053116370473531,
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
          "id": "4b62d9a281f092f10c29003b09351807c3e60212",
          "message": "Changelog for `v2.0.0` (#668)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate changelog and version for release `v2.0.0`.",
          "timestamp": "2025-01-09T15:00:38Z",
          "tree_id": "45ea626a31dc32ad0a3936502753697e7f616af7",
          "url": "https://github.com/hasura/ndc-postgres/commit/4b62d9a281f092f10c29003b09351807c3e60212"
        },
        "date": 1736435310893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.198109,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.188452999999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.103442824710594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.590186910098726,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21575024225475636,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.60823250000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.16387275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.11180322826746,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9360642323607706,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.30496329718653176,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.607366999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 78.88468885,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.99698946948268,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.92978052339949,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3002925640042089,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.376752,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.46106675,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.27525016485558,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.40547740470279,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.23822977943561052,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.585789,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.3990944,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.27620090356242,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.401841147532075,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.234288815684685,
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
          "id": "0923cd1ca93343d73412d90b54bcff80959e536b",
          "message": "chore(deps): Bump sqlx from 0.8.2 to 0.8.3 (#671)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.8.2 to 0.8.3.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.8.3 - 2025-01-03</h2>\n<p>41 pull requests were merged this release cycle.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3418\">#3418</a>]:\nparse timezone parameter in mysql connection url [[<a\nhref=\"https://github.com/dojiong\"><code>@​dojiong</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3491\">#3491</a>]:\nchore: Update async-std v1.13 [[<a\nhref=\"https://github.com/jayvdb\"><code>@​jayvdb</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3492\">#3492</a>]:\nexpose relation_id and relation_attribution_no on PgColumn [[<a\nhref=\"https://github.com/kurtbuilds\"><code>@​kurtbuilds</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3493\">#3493</a>]:\ndoc(sqlite): document behavior for zoned date-time types [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3500\">#3500</a>]:\nAdd sqlite commit and rollback hooks [[<a\nhref=\"https://github.com/gridbox\"><code>@​gridbox</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3505\">#3505</a>]:\nchore(mysql): create test for passwordless auth (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3484\">#3484</a>)\n[[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3507\">#3507</a>]:\nAdd a &quot;sqlite-unbundled&quot; feature that dynamically links to\nsystem libsqlite3.so library [[<a\nhref=\"https://github.com/lilydjwg\"><code>@​lilydjwg</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3508\">#3508</a>]:\ndoc(sqlite): show how to turn options into a pool [[<a\nhref=\"https://github.com/M3t0r\"><code>@​M3t0r</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3514\">#3514</a>]:\nSupport PgHstore by default in macros [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3550\">#3550</a>]:\nImplement Acquire for PgListener [[<a\nhref=\"https://github.com/sandhose\"><code>@​sandhose</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3551\">#3551</a>]:\nSupport building with rustls but native certificates [[<a\nhref=\"https://github.com/IlyaBizyaev\"><code>@​IlyaBizyaev</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3553\">#3553</a>]:\nAdd support for Postgres lquery arrays [[<a\nhref=\"https://github.com/philipcristiano\"><code>@​philipcristiano</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3560\">#3560</a>]:\nAdd PgListener::next_buffered(), to support batch processing of\nnotifications [[<a\nhref=\"https://github.com/chanks\"><code>@​chanks</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3577\">#3577</a>]:\nDerive Copy where possible for database-specific types [[<a\nhref=\"https://github.com/veigaribo\"><code>@​veigaribo</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3579\">#3579</a>]:\nReexport AnyTypeInfoKind [[<a\nhref=\"https://github.com/Norlock\"><code>@​Norlock</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3580\">#3580</a>]:\ndoc(mysql): document difference between <code>Uuid</code> and\n<code>uuid::fmt::Hyphenated</code> [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3583\">#3583</a>]:\nfeat: point [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3608\">#3608</a>]:\nImplement AnyQueryResult for Sqlite and MySQL [[<a\nhref=\"https://github.com/pxp9\"><code>@​pxp9</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3623\">#3623</a>]:\nfeat: add geometry line [[<a\nhref=\"https://github.com/jayy-lmao\"><code>@​jayy-lmao</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3658\">#3658</a>]:\nfeat: add Transaction type aliases [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3519\">#3519</a>]:\nRemove unused dependencies from sqlx-core, sqlx-cli and sqlx-postgres\n[[<a\nhref=\"https://github.com/vsuryamurthy\"><code>@​vsuryamurthy</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3529\">#3529</a>]:\nBox Pgconnection fields [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3548\">#3548</a>]:\nDemote <code>.pgpass</code> file warning to a debug message. [[<a\nhref=\"https://github.com/denschub\"><code>@​denschub</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3585\">#3585</a>]:\nEagerly reconnect in <code>PgListener::try_recv</code> [[<a\nhref=\"https://github.com/swlynch99\"><code>@​swlynch99</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3596\">#3596</a>]:\nBump thiserror to v2.0.0 [[<a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3605\">#3605</a>]:\nUse <code>UNION ALL</code> instead of <code>UNION</code> in nullable\ncheck [[<a\nhref=\"https://github.com/Suficio\"><code>@​Suficio</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3629\">#3629</a>]:\nchore: remove BoxFuture's (non-breaking) [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3632\">#3632</a>]:\nBump hashlink to v0.10 [[<a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3643\">#3643</a>]:\nRoll PostgreSQL 11..=15 tests to 13..=17 [[<a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3648\">#3648</a>]:\nclose listener connection on TimedOut and BrokenPipe errors [[<a\nhref=\"https://github.com/DXist\"><code>@​DXist</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3649\">#3649</a>]:\nBump hashbrown to v0.15 [[<a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>]]</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3528\">#3528</a>]:\nfix: obey <code>no-transaction</code> flag in down migrations [[<a\nhref=\"https://github.com/manifest\"><code>@​manifest</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3536\">#3536</a>]:\nfix: using sqlx::test macro inside macro's [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3545\">#3545</a>]:\nfix: remove <code>sqlformat</code> [[<a\nhref=\"https://github.com/tbar4\"><code>@​tbar4</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3558\">#3558</a>]:\nfix: fix example code of <code>query_as</code> [[<a\nhref=\"https://github.com/xuehaonan27\"><code>@​xuehaonan27</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3566\">#3566</a>]:\nFix: Cannot query Postgres <code>INTERVAL[]</code> [[<a\nhref=\"https://github.com/Ddystopia\"><code>@​Ddystopia</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3593\">#3593</a>]:\nfix: URL decode database name when parsing connection url [[<a\nhref=\"https://github.com/BenoitRanque\"><code>@​BenoitRanque</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3601\">#3601</a>]:\nRemove default-features = false from url [[<a\nhref=\"https://github.com/hsivonen\"><code>@​hsivonen</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3604\">#3604</a>]:\nFix mistake in sqlx::test fixtures docs [[<a\nhref=\"https://github.com/andreweggleston\"><code>@​andreweggleston</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3612\">#3612</a>]:\nfix(mysql): percent-decode database name [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3640\">#3640</a>]:\nDont use <code>EXPLAIN</code> in nullability check for QuestDB [[<a\nhref=\"https://github.com/Suficio\"><code>@​Suficio</code></a>]]</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/28cfdbb40c4fe535721c9ee5e1583409e0cac27e\"><code>28cfdbb</code></a>\nRelease/0.8.3 (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3663\">#3663</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/dfd0ac5974a37217c2f43f3b7b6b438e38cbc1e1\"><code>dfd0ac5</code></a>\nfeat: add Transaction type aliases (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3658\">#3658</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/4590b9c3eebbb05643ac5b34ddc9c6cd21b80ad0\"><code>4590b9c</code></a>\nclose listener connection on TimedOut and BrokenPipe errors (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3648\">#3648</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/fdd4663318e2524e87a89cffa03db026d3475790\"><code>fdd4663</code></a>\nAdd <code>PgConnection::is_explain_available</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/20bccf887735ddd33572f23e7b0371b66089d6ff\"><code>20bccf8</code></a>\nDont use <code>EXPLAIN</code> in nullability check for QuestDB</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/7d148bd96b79591664f9953c49648e9bd31b5b30\"><code>7d148bd</code></a>\nBump hashbrown to v0.15</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/9f6ea96e03d814b5394660addaf89fcca947d6f0\"><code>9f6ea96</code></a>\nRoll PostgreSQL 11..=15 tests to 13..=17</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/1678b19a4672fd6a18b4891c53bf0b57638b92a4\"><code>1678b19</code></a>\nfeat: add geometry line (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3623\">#3623</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/2b82ce3faa44fc223c04a1fa869470befcb57690\"><code>2b82ce3</code></a>\nBump hashlink to v0.10</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/1f6ce33df4fafef1d610f7b068da24512ef288f7\"><code>1f6ce33</code></a>\nchore: remove BoxFuture's (non-breaking) (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3629\">#3629</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.8.2...v0.8.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.8.2&new-version=0.8.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-13T13:26:47Z",
          "tree_id": "a3a25c3e2780dd209ff078c946c7eff42189ed1b",
          "url": "https://github.com/hasura/ndc-postgres/commit/0923cd1ca93343d73412d90b54bcff80959e536b"
        },
        "date": 1736775326237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.460657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.099898599999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.087595902764285,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.649985987612752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22278450022178034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.650753,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.020242,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.418624954315426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.749047109188325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28816590863059105,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.254496,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.629162,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.252957241180688,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.006316150130111,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2985771219681133,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.963217,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.75191439999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.264297974914594,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.158449078579981,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2306447962593228,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.684373,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.80883279999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.043563101482572,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.364382407820951,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.25847424066301855,
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
          "id": "e6b139ddc570a4cb0bcae52be4b19312657fc010",
          "message": "chore(deps): Bump async-trait from 0.1.83 to 0.1.85 (#670)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.83\nto 0.1.85.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.85</h2>\n<ul>\n<li>Omit <code>Self: 'async_trait</code> bound in impl when not needed\nby signature (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/284\">#284</a>)</li>\n</ul>\n<h2>0.1.84</h2>\n<ul>\n<li>Support <code>impl Trait</code> in return type (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/282\">#282</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/fee923d4a03609815f334f96f8ad6299b76a6441\"><code>fee923d</code></a>\nRelease 0.1.85</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/0c2e1083f22221daac610d76db3b5bffc767638e\"><code>0c2e108</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/284\">#284</a>\nfrom dtolnay/selfinblock</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/9456e54b598cfe2c965170ff78308f2b6f2d6f73\"><code>9456e54</code></a>\nOmit <code>Self: 'async_trait</code> bound in impl when not needed by\nsignature</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b77d0d504ca3fd0ccee662a559585998f78358a1\"><code>b77d0d5</code></a>\nAdd regression test for issue 283</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/4c8406dd470617e71d75fe93419447750cec5288\"><code>4c8406d</code></a>\nRelease 0.1.84</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/1cab7e43da430785d6c2e55193a4383e45070ba8\"><code>1cab7e4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/282\">#282</a>\nfrom dtolnay/impltrait</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/3af8236a3d7cdee1d89435b27375c219cf265cbe\"><code>3af8236</code></a>\nRequire Rust 1.75+ for RPITIT (return position impl trait in trait)</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/85b572c44236deab9550572183953b9df743939d\"><code>85b572c</code></a>\nSupport impl Trait in return type</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/aff365fb7477e0952d0196ea369ddec9c7ed3c78\"><code>aff365f</code></a>\nAdd regression test for issue 281</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/7d8519d4160c548d28f4ff58165b09b81da6acf6\"><code>7d8519d</code></a>\nUpdate ui test suite to nightly-2024-12-09</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.83...0.1.85\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.83&new-version=0.1.85)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-13T13:26:55Z",
          "tree_id": "1775791881a05690767cfb49ea25804585ce52e8",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6b139ddc570a4cb0bcae52be4b19312657fc010"
        },
        "date": 1736775647368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.751226,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.754857200000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.458361947286926,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.101411766169859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.20585220291161266,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.923067,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.6663223,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.44442759323916,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6444033761227956,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2754498018115481,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.095548,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.63331380000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.475498536699263,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.9907650996785975,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.29042749227651,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.453091,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.05257099999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.862670738537876,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.500551907644553,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2156443211133518,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.117518,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.48578259999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.08246284531817,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.779312523745503,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22839353738232476,
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
          "id": "04cfeeed0690bf3d3a6a0dbcf9cb5a2202bf55cc",
          "message": "chore(deps): Bump clap from 4.5.21 to 4.5.26 (#673)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.21 to 4.5.26.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.26</h2>\n<h2>[4.5.26] - 2025-01-09</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> Reduce binary size with the\n<code>suggestions</code> feature</li>\n</ul>\n<h2>v4.5.25</h2>\n<h2>[4.5.25] - 2025-01-09</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Reduce binary size</li>\n</ul>\n<h2>v4.5.24</h2>\n<h2>[4.5.24] - 2025-01-07</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(parser)</em> Correctly handle defaults with\n<code>ignore_errors(true)</code> and when a suggestion is provided for\nan unknown argument</li>\n</ul>\n<h2>v4.5.23</h2>\n<h2>[4.5.23] - 2024-12-05</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(parser)</em> When check <code>allow_negative_numbers</code>,\nallow <code>E</code> again</li>\n</ul>\n<h2>v4.5.22</h2>\n<h2>[4.5.22] - 2024-12-03</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(assert)</em> Catch bugs with arguments requiring themself</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.26] - 2025-01-09</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(error)</em> Reduce binary size with the\n<code>suggestions</code> feature</li>\n</ul>\n<h2>[4.5.25] - 2025-01-09</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Reduce binary size</li>\n</ul>\n<h2>[4.5.24] - 2025-01-07</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(parser)</em> Correctly handle defaults with\n<code>ignore_errors(true)</code> and when a suggestion is provided for\nan unknown argument</li>\n</ul>\n<h2>[4.5.23] - 2024-12-05</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(parser)</em> When check <code>allow_negative_numbers</code>,\nallow <code>E</code> again</li>\n</ul>\n<h2>[4.5.22] - 2024-12-03</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(assert)</em> Catch bugs with arguments requiring themself</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/df1efca03509f736e26d2f16766b7ea06acc3ecf\"><code>df1efca</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/d48bef65af6930c26386e63d85cbdeb2d21bd359\"><code>d48bef6</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6b7aa3d490258f0acde0dd79166b7587ff68e3c0\"><code>6b7aa3d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5628\">#5628</a>\nfrom mart-mihkel/complete_hyphen</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/57b6cb8e4781216e7c01397d2bd54b97028a5520\"><code>57b6cb8</code></a>\nrefactor(complete): Simplify engine::complete</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fbec05e639f82635bd64fc7bd20d18796cd4b598\"><code>fbec05e</code></a>\nrefactor(complete): Fix typo in hyhpen</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/b7cfbdcf96c96da64f7d91c0bef915ef1a6dc37f\"><code>b7cfbdc</code></a>\nfeat(complete): Native support for hyphen values</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/1d97c293ba7968d7bcd06b624104218cab6fbe3f\"><code>1d97c29</code></a>\ntest(complete): Test cases for allow_hyphen_values</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/64e37904615c3e2df85fd38370beb5961a31d557\"><code>64e3790</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/1cf50c77543cab6e648b967f8edc05115a24fe8b\"><code>1cf50c7</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/085143dc14cb6686c1fe3852ea2aab193cd50a6e\"><code>085143d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5722\">#5722</a>\nfrom epage/sort</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.21...clap_complete-v4.5.26\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.21&new-version=4.5.26)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-13T13:27:04Z",
          "tree_id": "7e777990d23a6413fb6ed77e213b39d4538ae9d0",
          "url": "https://github.com/hasura/ndc-postgres/commit/04cfeeed0690bf3d3a6a0dbcf9cb5a2202bf55cc"
        },
        "date": 1736775668259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.5851565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.32771434999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.577554094953122,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.5375697731894675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22082169925979517,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.9439,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.88612709999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.89120417482838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.646121517024973,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.286299184578152,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.8979635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.74185234999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.199421710194528,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.539855047052107,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.2916274004864761,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.359202,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.322287,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.702649552879667,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.458305515594272,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21308892319172612,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.632391999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.293948,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.869960367915244,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.683046646560694,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24535764704322338,
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
          "id": "233f1c92bb1d2091026361e5c45ab2a0bfe72a65",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.0.2 to 2.1.0 (#675)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.0.2 to 2.1.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.1.0</h2>\n<h2>Release Summary</h2>\n<p>This release introduces a new feature that supports specifying the\nCompose version, enhancing compatibility and usability. Documentation\nfor actions and workflows has been updated, along with multiple\ndependency upgrades across npm and GitHub Actions to improve\nperformance, security, and compatibility. Minor lint issues in\ndocumentation have been fixed to ensure compliance with standards.\nDevelopment dependencies were updated extensively, including updates to\n<code>eslint-plugin-jsonc</code>, <code>eslint-plugin-github</code>, and\nother packages, ensuring a more robust development environment.</p>\n<p>No Breaking changes</p>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(deps-dev): bump <code>@​vercel/ncc</code> from 0.38.1 to\n0.38.2 in the npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/88\">hoverkraft-tech/compose-action#88</a></li>\n<li>chore(deps): bump docker-compose from 0.24.8 to 1.1.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/90\">hoverkraft-tech/compose-action#90</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.6.0 to\n0.7.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/92\">hoverkraft-tech/compose-action#92</a></li>\n<li>feat: support compose version by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/93\">hoverkraft-tech/compose-action#93</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/94\">hoverkraft-tech/compose-action#94</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.16.0 to 2.17.0 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/96\">hoverkraft-tech/compose-action#96</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.17.0 to 2.18.1 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/98\">hoverkraft-tech/compose-action#98</a></li>\n<li>chore(docs): fix lint issues by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/100\">hoverkraft-tech/compose-action#100</a></li>\n<li>chore(deps-dev): bump the npm-dev-dependencies group with 3 updates\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/101\">hoverkraft-tech/compose-action#101</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 5.1.1 to 5.1.3 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/102\">hoverkraft-tech/compose-action#102</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 5.1.3 to 5.1.4 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/103\">hoverkraft-tech/compose-action#103</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.15.0 to\n0.16.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/105\">hoverkraft-tech/compose-action#105</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 5.1.4 to 5.1.5 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/106\">hoverkraft-tech/compose-action#106</a></li>\n<li>chore: move <a\nhref=\"https://github.com/ts-dev-tools\"><code>@​ts-dev-tools</code></a>\nto dev deps by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/108\">hoverkraft-tech/compose-action#108</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.2...v2.1.0\">https://github.com/hoverkraft-tech/compose-action/compare/v2.0.2...v2.1.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/9575d402e7402331b6ac509df860c4da3ab47fc2\"><code>9575d40</code></a>\nchore: set prover version for <code>@​ts-dev-tools/core</code></li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/9d708db1d3be29a55db8d4c0c9ec743261c4776b\"><code>9d708db</code></a>\nchore: set node version according to official javascript action</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/c4adfb9283ff6d0de5d7c30c1b68231866a14d4c\"><code>c4adfb9</code></a>\nchore: move <a\nhref=\"https://github.com/ts-dev-tools\"><code>@​ts-dev-tools</code></a>\nto dev deps</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/e31e0d5fed22fd1773aaeb8a62dd3414f7247181\"><code>e31e0d5</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ecfe7fa732dcd44a0c3355a38242b5aa1ac1f866\"><code>ecfe7fa</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/394b874fd4e33e2a10e3f642935f5a1ce1ac15ef\"><code>394b874</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/6fcee61d3e8100fdf80d0d7ed2dbe2bee5186459\"><code>6fcee61</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/d31b644c8e94964ac74db981bab951a21275f3e6\"><code>d31b644</code></a>\nchore(deps-dev): bump the npm-dev-dependencies group with 3 updates</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/59fb88b48c602bdde4482cc9d32df07b613966e7\"><code>59fb88b</code></a>\nchore(docs): fix lint issues</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/22b27bf49052618fbbccb435e04287afffbaabd6\"><code>22b27bf</code></a>\nchore(deps-dev): bump eslint-plugin-jsonc</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.2...v2.1.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.0.2&new-version=2.1.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-20T13:48:42Z",
          "tree_id": "c4de5a9ca88882ff72c595fcfb02820b2cf457c6",
          "url": "https://github.com/hasura/ndc-postgres/commit/233f1c92bb1d2091026361e5c45ab2a0bfe72a65"
        },
        "date": 1737381385969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 25.9119545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.80255219999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.514015635442707,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.37013134157203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.21995704111812345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.954941,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.3749146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.21607594418938,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4549392699452994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27628187060124954,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.399542499999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.38172474999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.74979092882995,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.657873756031048,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.26824348869131986,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.1931395,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 64.39414735,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.6642313813191,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.016583319511891,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2386036110199935,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.4412435,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 63.56857644999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.08821811296459,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.044819591243801,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2176056765181184,
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
          "id": "b84a6b811b1b61f7739de6912f582f7601425a06",
          "message": "chore(deps): Bump tokio from 1.41.1 to 1.42.0 (#679)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.41.1 to 1.42.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.42.0</h2>\n<h1>1.42.0 (Dec 3rd, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>io: add <code>AsyncFd::{try_io, try_io_mut}</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6967\">#6967</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>io: avoid <code>ptr-&gt;ref-&gt;ptr</code> roundtrip in\nRegistrationSet (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6929\">#6929</a>)</li>\n<li>runtime: do not defer <code>yield_now</code> inside\n<code>block_in_place</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6999\">#6999</a>)</li>\n</ul>\n<h3>Changes</h3>\n<ul>\n<li>io: simplify io readiness logic (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6966\">#6966</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>net: fix docs for <code>tokio::net::unix::{pid_t, gid_t,\nuid_t}</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6791\">#6791</a>)</li>\n<li>time: fix a typo in <code>Instant</code> docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6982\">#6982</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6791\">#6791</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6791\">tokio-rs/tokio#6791</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6929\">#6929</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6929\">tokio-rs/tokio#6929</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6966\">#6966</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6966\">tokio-rs/tokio#6966</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6967\">#6967</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6967\">tokio-rs/tokio#6967</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6982\">#6982</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6982\">tokio-rs/tokio#6982</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6999\">#6999</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6999\">tokio-rs/tokio#6999</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/bb9d57017e100985f86d8ca41ac105ee9140423e\"><code>bb9d570</code></a>\nchore: prepare Tokio v1.42.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7005\">#7005</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/af9c683d52415bf01709197778d49eec1ff78c44\"><code>af9c683</code></a>\ntests: fix typo in build test instructions (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7004\">#7004</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4bc5a1a05862bad71f85a38bf3c56f721a97b43f\"><code>4bc5a1a</code></a>\nci: allow Unicode-3.0 license for unicode-ident (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7006\">#7006</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/f8948ea021bd4b5626bbd8dee89bee51ba766326\"><code>f8948ea</code></a>\nruntime: do not defer <code>yield_now</code> inside\n<code>block_in_place</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6999\">#6999</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/bce9780dd3127cd937923d975e356299226a39aa\"><code>bce9780</code></a>\ntime: use <code>array::from_fn</code> instead of manually creating array\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7000\">#7000</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/38151f30cbfbaddce30961384f5b463b0737a401\"><code>38151f3</code></a>\nreadme: unlist 1.32.x as LTS release (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6997\">#6997</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/5dda72d338516d709a866cee8577048ba1ea062c\"><code>5dda72d</code></a>\nci: pin valgrind to rustc 1.82 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6998\">#6998</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/c07257f99f92c5d6773fc0827bcfd77e43f0fd46\"><code>c07257f</code></a>\nio: simplify io readiness logic (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6966\">#6966</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/d08578fc9a950c8ee0ef242dbce0fcaaed5e853f\"><code>d08578f</code></a>\ntime: fix a typo in <code>Instant</code> docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6982\">#6982</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4047d7962a02722859b0f1c7bbcd85bc1bfc865d\"><code>4047d79</code></a>\nmiri: add annotations for tests with miri ignore (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6981\">#6981</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.41.1...tokio-1.42.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.41.1&new-version=1.42.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-20T13:50:09Z",
          "tree_id": "dfffd835c7de87e3bd9a995eaa178e5046ea5fe2",
          "url": "https://github.com/hasura/ndc-postgres/commit/b84a6b811b1b61f7739de6912f582f7601425a06"
        },
        "date": 1737381535839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.025681,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.339644,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.871403139035051,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.2027568407552796,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.19414003112638262,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.648796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.934197,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.65637108543724,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6527969784419412,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28109329024074153,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.297621,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.6103372,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.12814865059977,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.8539821042923,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32004615371916023,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.853894,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.511737,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.738548276053603,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.675543286728914,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.21909649141225865,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 40.547263,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 62.788264,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.84452403753042,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.524009787030302,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2057710034463427,
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
      }
    ]
  }
}