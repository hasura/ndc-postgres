window.BENCHMARK_DATA = {
  "lastUpdate": 1719841738529,
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
          "id": "b261a51107db7b913ce01ae3edd044692eab531e",
          "message": "chore(deps): Bump serde_json from 1.0.116 to 1.0.117 (#460)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.116 to\n1.0.117.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.117</h2>\n<ul>\n<li>Resolve unexpected_cfgs warning (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1130\">#1130</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0ae247ca63be75e6c7e6e0e9cd8916e618cf8f24\"><code>0ae247c</code></a>\nRelease 1.0.117</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4517c7a2d983a56aa403c651cabe2caf41136570\"><code>4517c7a</code></a>\nPartialEq is not implemented between Value and 128-bit ints</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/fdf99c7c38c1ee48554eaea66b701f470544d037\"><code>fdf99c7</code></a>\nCombine number PartialEq tests</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b4fc2451d726303091586758676de7ec189a315a\"><code>b4fc245</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1130\">#1130</a>\nfrom serde-rs/checkcfg</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/98f1a247de77176f605c39e225f81c6e80d93727\"><code>98f1a24</code></a>\nResolve unexpected_cfgs warning</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.116...v1.0.117\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.116&new-version=1.0.117)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-05-14T08:38:24Z",
          "tree_id": "22f813b7f1ba69f4e5f820bb455f8edfca1dd0d2",
          "url": "https://github.com/hasura/ndc-postgres/commit/b261a51107db7b913ce01ae3edd044692eab531e"
        },
        "date": 1715676362945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.585922,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.304876199999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.94329343470802,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.315093059588834,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2962919059626094,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.256211,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.6045356,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.85396918641547,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5147177945820403,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4226188980763565,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.551173500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.04059304999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.08491398968739,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.82502911289603,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4924909902298708,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.167381,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.9646585,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.664601388407533,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.746870751945984,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4379949443383463,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.871514,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.7502662,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.777444346215226,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.984179934587736,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39234271478471805,
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
          "id": "c3c1a244e7b5f547e323db63a078bb5d96828329",
          "message": "Migrate tests to configuration version 4 (#462)\n\n### What\n\nThis PR completes the implementation of configuration format version 4.\n\n### How\n\n* Deriving the set of occurring types happens in SQL now, which is\nremarkably easier to achieve than in rust.\n* The v4 chinook deployments are also tested for stability similar to v3\n* All translation tests and db tests now use the V4 configuration\nformat. This was migrated automatically using the cli upgrade command,\nhelping to make it more robust.\n* The default type representations are now recorded in\n`introspectionOptions` so user preferences can be persisted across\nupdates.",
          "timestamp": "2024-05-14T12:43:35Z",
          "tree_id": "43a1e806326756abe6baea765a46db2e885b7229",
          "url": "https://github.com/hasura/ndc-postgres/commit/c3c1a244e7b5f547e323db63a078bb5d96828329"
        },
        "date": 1715691082907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.255896,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.92006719999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.043255647547102,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.713815695598306,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2836958893928082,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.1956155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 121.06422415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.747611459493285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.333266403483705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43780898733086016,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.799458,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.1006063,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.47498131928266,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.471403455315166,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48565445436844645,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 49.288599,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.1038758,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.61244984369971,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.163804837371028,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4557078811538258,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.4508215,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.98313995000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.543737697082058,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.022710748067972,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41348836712103854,
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
          "id": "b995f7873f5b2c10f57604356bb8a0b8fc26dedf",
          "message": "bugfix: duplicate results when filtering, over-filtering on lack of rows (#463)\n\n### What\n\nWe are fixing two bugs:\n\n1. Fix returning duplicate results when filtering\nhttps://github.com/hasura/graphql-engine/issues/10238\n2. Fix over-filtering when a related table contains no results (due to\nthe use of inner join)\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\nIn order to filter by a nested relationship column, we first query that\nnesting to fetch the relevant column, and then build our filter.\n\nBefore, we fetched the tables at the top-level using an inner join, then\nadded a where clause.\n\nIn this PR we change this generation scheme to use `WHERE EXISTS (SELECT\n1 ...)` instead.\nThe fetching of columns will appear inside the `WHERE` clause, each path\nelement will have it's own select (where the nesting are combined using\ninner joins) and separate path elements are combined with a FULL OUTER\nJOIN instead of inner join.\n\nThe `EXISTS` part helps us avoid duplicates - while inner joins at the\ntop-level can create additional rows, an EXISTS cannot. It will just\ninform if a particular row matches the predicate.\n\nThe `FULL OUTER JOIN` part helps us avoid over-eager filtering. See the\n[note\nhere](https://github.com/hasura/ndc-postgres/pull/463#discussion_r1601884534).",
          "timestamp": "2024-05-16T15:03:27Z",
          "tree_id": "089c4d4b7ec095dd12e64b83eb93aa51adfa83cb",
          "url": "https://github.com/hasura/ndc-postgres/commit/b995f7873f5b2c10f57604356bb8a0b8fc26dedf"
        },
        "date": 1715872339693,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.6239815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 53.531367599999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.275488037400741,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.986215502132865,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27989034513809724,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.57489,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.55915039999992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.31683184287375,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4555976827021198,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42348954947297146,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.29247,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.02251120000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.138979663519553,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.096418915613082,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4740483025547629,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.509907,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.64043174999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.415044776840357,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.556891999366503,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3855702893711458,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.415278,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.188532,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.108794158922592,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.746975616446193,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3681076846853398,
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
          "id": "48470b529915597be3cabae5561bf74eab855555",
          "message": "Enable configuration v4 by default. (#471)\n\n### What\n\nThis PR makes the CLI plugin produce version-4 configuration metadata\nwhen initializing a project.\n\n### How\n\nSimply changing the `initial()` trait function on `ParsedConfiguration`\nto produce the `Version4` case instead of the `Version3` case.",
          "timestamp": "2024-05-22T12:40:39Z",
          "tree_id": "1f647b64633fdc137e7a5856afe8adac6f84eeca",
          "url": "https://github.com/hasura/ndc-postgres/commit/48470b529915597be3cabae5561bf74eab855555"
        },
        "date": 1716382240254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.3934875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.0275101,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.928319729243965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.712398281226717,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28702418015752007,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.2148755,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.55074024999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.76093210837244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.003055244573339,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4037636716273644,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.3553615,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.41417355000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.59261898841489,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.881130749025495,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4604860645299929,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.790141,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.82483239999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.347913351056146,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.420943682398505,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4011314851179218,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.567871,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.49429729999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.541246964955157,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.961928844671384,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42209359528277,
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
          "id": "8572fbffd8f083c9ee17b65908a140d8ec2ae31b",
          "message": "Test that the version produced by `ndc-postgres-cli initialize` is stable (#472)\n\n### What\n\nThis PR adds a test that asserts that the configuration version produced\nby the cli `initialize` command hasn't changed.\n\n### How\n\nThe test runs the initialize command and asserts on the value of the\n`version` key in `configuration.json`. This is a somewhat simplified\nmodel of version checking, but it holds for the ones we have currently.",
          "timestamp": "2024-05-22T14:35:15Z",
          "tree_id": "0973f2d4925f38020ad506b6d99b30de87d427b9",
          "url": "https://github.com/hasura/ndc-postgres/commit/8572fbffd8f083c9ee17b65908a140d8ec2ae31b"
        },
        "date": 1716388909094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.205836500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.3257966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.979872399418205,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.615835248489617,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27522536797923886,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.455096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.49216025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.18534557892637,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.275114381768063,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4287493333864088,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.392111,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.25662739999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.49401196315289,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.341589261162756,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5014821729751882,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.749631,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.76420639999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.524873950926942,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.3507092226131086,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4016177277683801,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.12707,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.7255158,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.59294307190473,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.629151540744314,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40559372926295545,
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
          "id": "401ef876afba008196833184b55ee63683ed8cc9",
          "message": "Bump release version v0.7.0 (#473)\n\n### What\n\nThis PR marks the release of ndc-postgres v0.7.0",
          "timestamp": "2024-05-23T07:12:10Z",
          "tree_id": "053821d1650257050d9d9c27d9732013724171f8",
          "url": "https://github.com/hasura/ndc-postgres/commit/401ef876afba008196833184b55ee63683ed8cc9"
        },
        "date": 1716448750919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.490402,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.9067617,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.028712943263425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.81845961787366,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29449125763234035,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 80.855657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 118.57736039999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.6108494122813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.6025931969384857,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42686416740560273,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.714625999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.2810938,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.943869342370792,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.424082980828675,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5157178279637856,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.61559,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.9928598,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.164100899875248,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.931975455103522,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41511212732706565,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.1641255,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.19782675,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.056322855915006,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.361812968919807,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.434606401126571,
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
          "id": "acc4502d56d556951d8551a4cfff54d7f67b2574",
          "message": "fix tests snapshot (#474)\n\n### What\n\nRunning `just test` fails for me on these snapshot changes, I've\ncommitted them.",
          "timestamp": "2024-05-23T08:46:13Z",
          "tree_id": "60a0a4d7e38680222b1d0ef505fea9786fb86a10",
          "url": "https://github.com/hasura/ndc-postgres/commit/acc4502d56d556951d8551a4cfff54d7f67b2574"
        },
        "date": 1716454332393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.2494535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.10561114999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.739231389838077,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.173794286458444,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2738499219125682,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0711255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.09975714999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.75072873388826,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.208535871029973,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3848692685012434,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.47022,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.18746669999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.449898009460778,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.78284619846244,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4478196875771623,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.016552,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.30585320000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.681260188694793,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.686365439217575,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3984617260789901,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.56778,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.82357249999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.928312312266257,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.069520761341778,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39699121065360704,
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
          "id": "a1b713db80b4171b9542d4154a5b1b976940c3b0",
          "message": "Debugging github workflows (#475)\n\n* Echo the right env var for the git ref name\n* Create the `release/package` directory before trying to run the cli\nplugin",
          "timestamp": "2024-05-23T10:30:32Z",
          "tree_id": "246b39b133bbfb978c7bd8d9183cf3ea07bdde81",
          "url": "https://github.com/hasura/ndc-postgres/commit/a1b713db80b4171b9542d4154a5b1b976940c3b0"
        },
        "date": 1716460600754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.975603,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.560296,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.102211023214831,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.538822171442906,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27636604552838184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.960566,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.1541676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.95871640025054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.990258428817242,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.37073291609889253,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.299998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.2062102,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.569346366096802,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.232285672829427,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4683643115774796,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.400797,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.758702,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.25854962997465,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.905568138523822,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.43003557074887544,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.246348,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.91268749999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.076914758289682,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.318692651375024,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4008887181249964,
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
          "id": "4d887534f3cf9d42d275d7440e09ff6937034e70",
          "message": "rename ast:: to sql::ast:: (#476)\n\n### What\n\nThe module hierarchy is built so that the `sql::ast::` module is\nimported qualified in this fashion so there's no ambiguity when one runs\ninto a type representing part of the SQL AST.\n\nFor example, `ast::Expression` does not describe whether this ast is\nfrom ndc-spec, an internal ndc-postgres IR, or SQL, while\n`sql::ast::Expression` makes it perfectly clear.\n\nThis PR replaces the usage of `ast::` with `sql::ast::`.\n\n### How\n\nThis is just a rename.",
          "timestamp": "2024-05-23T11:20:08Z",
          "tree_id": "2ae2582226b10aa151bfa1797be32a823b80b14b",
          "url": "https://github.com/hasura/ndc-postgres/commit/4d887534f3cf9d42d275d7440e09ff6937034e70"
        },
        "date": 1716463573850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.7771045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.52145175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.264697507204254,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.272479020502008,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.281410036917743,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.968342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.88082739999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.70589926447424,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.477068635237501,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4504320904699798,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.847716,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.09231559999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.576323105497767,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.16255349934762,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44587596908946114,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.603613,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.03416589999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.440939249122206,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.442837798496743,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41672942407189684,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.260658,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.80848399999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.565517562431484,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.300060120146771,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35993653051313423,
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
          "id": "0c6fbadcaceb08791fe98f3e68294c739decfbec",
          "message": "chore(deps): Bump cachix/install-nix-action from 26 to 27 (#464)\n\nBumps\n[cachix/install-nix-action](https://github.com/cachix/install-nix-action)\nfrom 26 to 27.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/install-nix-action/releases\">cachix/install-nix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v27</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Enable <code>always-allow-substitutes</code> by default by <a\nhref=\"https://github.com/sandydoo\"><code>@​sandydoo</code></a> in <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/pull/207\">cachix/install-nix-action#207</a></li>\n<li>nix: 2.20.5 -&gt; 2.22.1 by <a\nhref=\"https://github.com/kashw2\"><code>@​kashw2</code></a> in <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/pull/206\">cachix/install-nix-action#206</a></li>\n<li>ci: fix tests by <a\nhref=\"https://github.com/sandydoo\"><code>@​sandydoo</code></a> in <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/pull/208\">cachix/install-nix-action#208</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/kashw2\"><code>@​kashw2</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/pull/206\">cachix/install-nix-action#206</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/cachix/install-nix-action/compare/v26...V27\">https://github.com/cachix/install-nix-action/compare/v26...V27</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/ba0dd844c9180cbf77aa72a116d6fbc515d0e87b\"><code>ba0dd84</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/208\">#208</a>\nfrom cachix/fix-macos-tests</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/d9660bf088514a2ede4707708ba35de0a1b69a3d\"><code>d9660bf</code></a>\nci: updated pinned installer</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/1e14eb01bfd97127cae3cc76eddb538ed44af120\"><code>1e14eb0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/206\">#206</a>\nfrom kashw2/nix-update</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/6060e02b1f9cb669240905a2db3fa1d327692d44\"><code>6060e02</code></a>\n2.22.1</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/262815eb715530d99d468e099f9c53a1d7557fda\"><code>262815e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/207\">#207</a>\nfrom cachix/always-allow-substitutes</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/5dce380a8bcabd02812ffac2471c6a4f5a470c7c\"><code>5dce380</code></a>\nUpdate README with more installer differences</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/2f469017fc567f1b7fe6d1d7c21021c02ad55105\"><code>2f46901</code></a>\nci: update nixpkgs channel</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/529d65921746c2b43d8a8a0458544a4a51f6ddc3\"><code>529d659</code></a>\nci: add aarch64-darwin tests where possible</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/d6c2f5b78803207e177e2f3d3d2d2899df69c6f2\"><code>d6c2f5b</code></a>\nci: switch to macos-13</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/01dba9f77095b5f03102533169760a81c51f2205\"><code>01dba9f</code></a>\nUpdate README</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/cachix/install-nix-action/compare/v26...V27\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=cachix/install-nix-action&package-manager=github_actions&previous-version=26&new-version=27)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T11:27:42Z",
          "tree_id": "9e0fa8339b61c86f0fabfe087f685cde8e50828d",
          "url": "https://github.com/hasura/ndc-postgres/commit/0c6fbadcaceb08791fe98f3e68294c739decfbec"
        },
        "date": 1716464019385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.574923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 58.826523099999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.00639426067148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.610135894564369,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2990393721022922,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.539271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.060886,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.562909619116326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4634272942829227,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5176889448317696,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.813032,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.32612409999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.16980598927539,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.453143621851297,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4993450563034072,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.8254505,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.6226487,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.669118923417518,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.1837674059573295,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4265033022541613,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.460298,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.27492019999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.36893195083935,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.816188856978162,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4216187556003157,
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
          "id": "91591ca694fb2eaf8dc0ffe85463ffd2295dc622",
          "message": "chore(deps): Bump anyhow from 1.0.83 to 1.0.86 (#466)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.83 to 1.0.86.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.86</h2>\n<ul>\n<li>Fix parse error in <code>ensure!</code> with non-literal after minus\nsign (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/373\">#373</a>)</li>\n</ul>\n<h2>1.0.85</h2>\n<ul>\n<li>Improve <code>ensure!</code> macro's rules to unblock some rustc\npretty-printer improvements (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/368\">#368</a>,\n<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/371\">#371</a>)</li>\n</ul>\n<h2>1.0.84</h2>\n<ul>\n<li>Disallow calling <code>ensure!</code> through a <code>Not</code>\nimpl for a type that is not <code>bool</code> (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/367\">#367</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/8ea1819c4c7829d0eb09e54a52806f382b8d445b\"><code>8ea1819</code></a>\nRelease 1.0.86</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/0a1b405631348f38b780255ac78c86a87536feb6\"><code>0a1b405</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/373\">#373</a>\nfrom dtolnay/minusneg</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/e0c74f26517944f4758da61079a16d88600d37c4\"><code>e0c74f2</code></a>\nEnsure $:literal never matches negative literal</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/013c66e92b4ec59d2c6fa224661a85e63b28f782\"><code>013c66e</code></a>\nFix parse error with non-literal after minus sign</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/ca7aff727bfd95422dfed63d12a9b499684b6d7b\"><code>ca7aff7</code></a>\nAdd binary operator ensure tests</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/2737bbeb59f50651ff54ca3d879a3f5d659a98ab\"><code>2737bbe</code></a>\nRelease 1.0.85</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/82b8b343893387fdb56c2816bf156139adbaed03\"><code>82b8b34</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/371\">#371</a>\nfrom dtolnay/split</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/ad78d70db3da4923f4d37a4a40f7b5850ec6e52e\"><code>ad78d70</code></a>\nPreserve more token spans in expression parser</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/5cce406efa91fc60adb5367cdda8ddd169a41709\"><code>5cce406</code></a>\nParse comparison operators before other binary operators</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/72053946780a4abad68057ec2ec426a6fd7829f3\"><code>7205394</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/369\">#369</a>\nfrom dtolnay/tokensplit</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.83...1.0.86\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.83&new-version=1.0.86)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T11:28:18Z",
          "tree_id": "344050aff33b3f2c361c57b34be8cd682c7080c9",
          "url": "https://github.com/hasura/ndc-postgres/commit/91591ca694fb2eaf8dc0ffe85463ffd2295dc622"
        },
        "date": 1716467877189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.80475,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 53.86807759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.660686122260508,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.772028755441752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2900892937664898,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.226193,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.871079,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.59531168075878,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9742896881144958,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3922152140148819,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.76636,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.56037949999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.426401940795813,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.180652361856545,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4466897345357751,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.415573,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.64622239999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.576734873108016,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.543465193049052,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3973087813656791,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.095902,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.97251709999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.36470238495847,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.872695550695745,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4275708109878001,
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
          "id": "c12e314f05d4a27c2dcf14280219ee2fb602932c",
          "message": "chore(deps): Bump serde from 1.0.201 to 1.0.202 (#469)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.201 to\n1.0.202.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.202</h2>\n<ul>\n<li>Provide public access to RenameAllRules in serde_derive_internals\n(<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2743\">#2743</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/9e32a40b1c745d1d67d451cc983fab5751d394a5\"><code>9e32a40</code></a>\nRelease 1.0.202</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/87f635e54d5359fa0eb94b1ef0a684ee3d24cb85\"><code>87f635e</code></a>\nRelease serde_derive_internals 0.29.1</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d4b2dfbde288e0ba5d4dc7852e1b8029208cf9b6\"><code>d4b2dfb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2743\">#2743</a>\nfrom dtolnay/renameallrules</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/f6ab0bc56f3df6d03974d233ffce352b0725ae09\"><code>f6ab0bc</code></a>\nProvide public access to RenameAllRules in serde_derive_internals</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/48cc2a63279d4ea44a88d566b0667f65c9ea79f4\"><code>48cc2a6</code></a>\nReplace use of a syn From impl</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/3202a6858a2802b5aba2fa5cf3ec8f203408db74\"><code>3202a68</code></a>\nSkip rerunning build script on library code changes</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.201...v1.0.202\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.201&new-version=1.0.202)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T11:29:03Z",
          "tree_id": "98d3c9e4494d2a29a843dab53caa9ec104871bec",
          "url": "https://github.com/hasura/ndc-postgres/commit/c12e314f05d4a27c2dcf14280219ee2fb602932c"
        },
        "date": 1716468148361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.5275235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.02585979999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.574255688273112,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.535867436523535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2820898274898558,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.0845475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.14599075000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.578765800093755,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.0601834031799555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.41441418173266803,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.462501,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.6144937,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.780644663337643,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.133791269973567,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45670637382668083,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.10383349999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.98385029999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.51853145942249,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.062795864319035,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.422863938841309,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.165929,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.73606365,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.127726333171154,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.095612952730988,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4094714088207672,
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
          "id": "966d3fa15f1278748a79b4ec8a3cbca4df2bcb1e",
          "message": "add post-insert check constraint to experimental insert mutations (#470)\n\n### What\n\nhttps://hasurahq.atlassian.net/browse/PG-99\n\nWe currently have experimental delete and insert implementations.\nThe delete implementation supports permissions, the insert one does not.\n\nWe would like to support a check permission for inserts.\nThe check permission should verify that the values we insert match a\ngiven Boolean Expression predicate.\n\n\n### How\n\nIn V2, we create a SQL query that not only returns the results as part\nof the CTE, but also the boolean expression. It looks similar to this:\n\n```sql\nWITH \"_mra__album\" AS (\n  INSERT INTO\n    \"public\".\"album\" (\"id\", \"artist_id\", \"title\")\n  VALUES\n    (('10') :: integer, ('1') :: integer, ('Best Album') :: text)\n  RETURNING\n    *, -- below this part is the constraint check\n    (((\"public\".\"album\".\"artist_id\") = (('10') :: integer))\n      OR (((\"public\".\"album\".\"artist_id\") IS NULL) AND ((('1') :: integer) IS NULL))\n    ) :: boolean AS \"check__constraint\"\n),\n\"_aca__album\" AS (\n  SELECT\n    \"id\",\n    \"title\",\n    \"artist_id\"\n  FROM\n    \"_mra__album\"\n)\nSELECT\n  json_build_object(\n    'affected_rows', (SELECT COUNT(*) FROM \"_aca__album\"),\n    'returning',\n    (SELECT coalesce(json_agg(\"root\"), '[]') AS \"root\"\n      FROM\n        (\n          SELECT\n            row_to_json(\n              (SELECT \"_e\" FROM (SELECT \"_root.base\".\"title\" AS \"title\", \"_root.base\".\"id\" AS \"id\") AS \"_e\")\n            ) AS \"root\"\n          FROM\n            (SELECT * FROM \"_aca__album\" WHERE ('true')) AS \"_root.base\"\n        ) AS \"_root\"\n    )\n  ), -- two columns are returned, the second one contains the constraint check\n  (\n    SELECT\n      coalesce(bool_and(\"check__constraint\"), 'true')\n    FROM\n      \"_mra__album\"\n  )\n```\n\nWe want to take a similar approach:\n\n- The returning clause will include the boolean expression predicate\n- Instead of returning just a single column with the output, we return\nan additional column which is the result of the predicate\n- In Rust code, we check that the predicate, if it is false, we cancel\nthe transaction and return an error\n\nTo do this, we do a few things:\n\n1. Each generated mutation translation step returns a CTE. We now make\nthe CTE also return an additional constraint check expression, if it is\nnot required by the mutation, we simply set it to be a constant `true`,\nand return the name of this column.\n2. When we translate a generated mutation into a SELECT query, we build\na query that returns 2 columns instead of one - one column for the\nresults and one for the constraint check\n3. In the execution step, if the result contains 2 columns, we check the\nsecond one and see if it is false. If it is, we abort the transaction.",
          "timestamp": "2024-05-23T11:32:45Z",
          "tree_id": "533f96f84afe6aff7c45b3b2af2fa5eb53267473",
          "url": "https://github.com/hasura/ndc-postgres/commit/966d3fa15f1278748a79b4ec8a3cbca4df2bcb1e"
        },
        "date": 1716468398870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.6103715,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.86445329999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.885353839432298,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.967567966343232,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2827896632782332,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.760529,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.71591229999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.88840241510207,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1019934770171957,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.393956852439208,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.0968185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.98744199999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.02629929553713,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.201789841212197,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4959732262811918,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.704207,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.0589291,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.97441652491794,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.574613017264284,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4240922566147088,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.021063,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.9657786,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.20354324584339,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.41590044407716,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.415398629285986,
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
          "id": "24221001943d0fdadc3c36bde7e3d20060bc9dce",
          "message": "chore(deps): Bump schemars from 0.8.19 to 0.8.20 (#468)\n\nBumps [schemars](https://github.com/GREsau/schemars) from 0.8.19 to\n0.8.20.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/releases\">schemars's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.8.20</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Revert unintentional change in behaviour when combining\n<code>default</code> and <code>required</code> attributes (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/292\">GREsau/schemars#292</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/blob/master/CHANGELOG.md\">schemars's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.8.20] - 2024-05-18</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Revert unintentional change in behaviour when combining\n<code>default</code> and <code>required</code> attributes (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/292\">GREsau/schemars#292</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/7ecaa7feabc2d7061bd61af78de3b64fdea00280\"><code>7ecaa7f</code></a>\nRevert unintentional change in behaviour when combining\n<code>default</code> and `requir...</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/cf5be1b266add95212bdcec8fecd8c330a119558\"><code>cf5be1b</code></a>\nIgnore failing test</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/449bb1a0ca64ddb549c95d8ebb5d210bebd187e8\"><code>449bb1a</code></a>\nAdd more tests for different schema settings</li>\n<li>See full diff in <a\nhref=\"https://github.com/GREsau/schemars/compare/v0.8.19...v0.8.20\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=schemars&package-manager=cargo&previous-version=0.8.19&new-version=0.8.20)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T13:29:50Z",
          "tree_id": "3d3e8a91d13fc4fac2c43b8ec656944a5470e70a",
          "url": "https://github.com/hasura/ndc-postgres/commit/24221001943d0fdadc3c36bde7e3d20060bc9dce"
        },
        "date": 1716472239347,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.078046,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 58.30767709999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.862756056659292,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.97006644559175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28786026571708556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.716702,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.465264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.26823088985127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1237280588928087,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.38950896693187465,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.517994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.25423400000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.122806028213986,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.162898017909505,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4858277697692401,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.0985115,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.25261354999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.183691589534266,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.971536045618617,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39404042714068804,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.8241575,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.29370219999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.367706814763935,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.895634257098131,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41984650230080284,
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
          "id": "0ee1d59b5c7c6b14caba5e819e899af349b4ffaf",
          "message": "chore(deps): Bump insta from 1.38.0 to 1.39.0 (#465)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.38.0 to 1.39.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/releases\">insta's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.39.0</h2>\n<h2>Release Notes</h2>\n<ul>\n<li>\n<p>Fixed a bug in <code>require_full_match</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/485\">#485</a></p>\n</li>\n<li>\n<p>Fixed a bug that caused snapshot and module names to sometimes be\ninaccurate. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/483\">#483</a></p>\n</li>\n<li>\n<p>Insta will no longer error when removing snapshots that were already\nremoved. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/484\">#484</a></p>\n</li>\n<li>\n<p>Added support for trailing commas in inline snapshots. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/472\">#472</a></p>\n</li>\n<li>\n<p>Don't pass <code>--color</code> in all cases to <code>libtest</code>\nany more to work around limitations\nwith custom test harnesses. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/491\">#491</a></p>\n</li>\n</ul>\n<h2>Install cargo-insta 1.39.0</h2>\n<h3>Install prebuilt binaries via shell script</h3>\n<pre lang=\"sh\"><code>curl --proto '=https' --tlsv1.2 -LsSf\nhttps://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-installer.sh\n| sh\n</code></pre>\n<h3>Install prebuilt binaries via powershell script</h3>\n<pre lang=\"sh\"><code>powershell -c &quot;irm\nhttps://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-installer.ps1\n| iex&quot;\n</code></pre>\n<h2>Download cargo-insta 1.39.0</h2>\n<table>\n<thead>\n<tr>\n<th>File</th>\n<th>Platform</th>\n<th>Checksum</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-aarch64-apple-darwin.tar.xz\">cargo-insta-aarch64-apple-darwin.tar.xz</a></td>\n<td>Apple Silicon macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-aarch64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-apple-darwin.tar.xz\">cargo-insta-x86_64-apple-darwin.tar.xz</a></td>\n<td>Intel macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-pc-windows-msvc.zip\">cargo-insta-x86_64-pc-windows-msvc.zip</a></td>\n<td>x64 Windows</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-pc-windows-msvc.zip.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz\">cargo-insta-x86_64-unknown-linux-gnu.tar.xz</a></td>\n<td>x64 Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz\">cargo-insta-x86_64-unknown-linux-musl.tar.xz</a></td>\n<td>x64 MUSL Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.39.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz.sha256\">checksum</a></td>\n</tr>\n</tbody>\n</table>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.39.0</h2>\n<ul>\n<li>\n<p>Fixed a bug in <code>require_full_match</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/485\">#485</a></p>\n</li>\n<li>\n<p>Fixed a bug that caused snapshot and module names to sometimes be\ninaccurate. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/483\">#483</a></p>\n</li>\n<li>\n<p>Insta will no longer error when removing snapshots that were already\nremoved. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/484\">#484</a></p>\n</li>\n<li>\n<p>Added support for trailing commas in inline snapshots. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/472\">#472</a></p>\n</li>\n<li>\n<p>Don't pass <code>--color</code> in all cases to <code>libtest</code>\nany more to work around limitations\nwith custom test harnesses. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/491\">#491</a></p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/922c68f71a90c1541d29e62f5bb2cd2151fce300\"><code>922c68f</code></a>\n1.39.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/f291ca825f6e9e1351c8d3a5ae410ee7f377a677\"><code>f291ca8</code></a>\nImprove the docs on the snapshot macro</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/65947be37ba1ce97964f0a6e7439075bb9684b5f\"><code>65947be</code></a>\nOnly pass --color if not always to work around custom runners (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/491\">#491</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/58daea1a4e565b2d2ae8700e7e54bd63ab8daf58\"><code>58daea1</code></a>\nFix bad doctest</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/f146f472eb1317c0d6dc13a369da11aa9ddca1d9\"><code>f146f47</code></a>\nMention disabling of features in compile time docs</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/23d0e4d149de0516ca2849435f23fe99df0db4b3\"><code>23d0e4d</code></a>\nDocument use without cargo-insta</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/be224940d878b6e8d094fd534063fab4b26ac23e\"><code>be22494</code></a>\nMerge branch 'master' of github.com:mitsuhiko/insta</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/1d2dd4a92f5a68beaf65274d46087b9ee0ed438e\"><code>1d2dd4a</code></a>\nAdded changelog entry</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/acb1ce59cb1ddab7c7f240eb352694ff5df1b8ba\"><code>acb1ce5</code></a>\nImprove docs for snapshot updates (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/479\">#479</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/a4f96da50581ffd729cd296180b899c992a3b1c9\"><code>a4f96da</code></a>\nAllow trailing commas in inline snapshots (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/472\">#472</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.38.0...1.39.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.38.0&new-version=1.39.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-23T14:35:13Z",
          "tree_id": "ed5f9cf20a9eec9ad04099a2eb1155a0bf98efe0",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ee1d59b5c7c6b14caba5e819e899af349b4ffaf"
        },
        "date": 1716475306910,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.335114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.75924939999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.466624193039674,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.686311197403814,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27243440071150904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.000378,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.69023519999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.78230043779652,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.153984900069304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.41930876050955784,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.107816,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.4219702,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.548361208181166,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.723711111207958,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48893157834761114,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.7396525,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.4885293,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.256577811407737,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.694715975679813,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4278745163107039,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.286093,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.53872749999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.430240366868205,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.4699926040130435,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38026735976755466,
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
          "id": "a7da8d8c8f7deae39b78f5bd2aa0f0631b58c40f",
          "message": "Insert multiple objects instead of a single object (#477)\n\n### What\n\nThe currently generated insert implementation only provides a mechanism\nto insert a single object / row via the `_object` parameter.\nIn this PR we replace the `_object` parameter with an `_objects`\nparameter that accepts a list of objects, so we can insert multiple\nobjects / rows (bulk insert).\n\n### How\n\n1. Change the schema to an array of objects\n2. Make the sql::ast::Insert have a vector of vector of values, instead\nof just a vector of values, that might be Default as well as Expression\n3. match user input as array of objects\n4. Get a union of the columns from all objects, and traverse each object\nand insert a Default when a column is missing",
          "timestamp": "2024-05-24T09:05:57Z",
          "tree_id": "18fa1aecd42fc61548851b0765d50d457e57a16d",
          "url": "https://github.com/hasura/ndc-postgres/commit/a7da8d8c8f7deae39b78f5bd2aa0f0631b58c40f"
        },
        "date": 1716541964054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.396786,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.5680577,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.804909771516849,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.841785468598752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2799529792076313,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.04629299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.28962334999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.82552249043328,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.6177122804395268,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.44674741073710467,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.45474,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.2767065,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.69006010278818,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.732266158221151,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48265003601491696,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.092637999999994,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.15008055,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.70096524930389,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.093773947245268,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40632422006759794,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.605523,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.90673539999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.307661043040728,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.801024939469524,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.453444522057738,
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
          "id": "ffa6c250a98edc590b47f1ed8d2c55970bf1e49a",
          "message": "run just generate-configuration (#479)\n\n### What\n\nWe haven't run `just generate-configuration` since moving to v4. This\nupdates the configurations.",
          "timestamp": "2024-05-27T10:22:29Z",
          "tree_id": "f393c9b15b2a1fc0156662b2cfa8694c079564db",
          "url": "https://github.com/hasura/ndc-postgres/commit/ffa6c250a98edc590b47f1ed8d2c55970bf1e49a"
        },
        "date": 1716805767180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.394227,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 57.05898175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.153832032372641,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.490304339102476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2853633982848721,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.216144,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.6840518,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.88283257567372,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.2258220907296504,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.397583035880878,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.098854,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.59496999999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.362361476040828,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.749934498704082,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4987379799835456,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.747652,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.01984759999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.262534316108173,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.850684271878919,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37631484075462696,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.37861,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.30487445,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.775604240588105,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.015278967120164,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4011267583193454,
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
          "id": "2a7f82213887a7f095d424435a84a93348eca3fd",
          "message": "configuration code cleanup (#481)\n\n### What\n\nRemove some leftover code comments, annotate some functions, make\ngenerate-configuration idempotent.\n\n### How\n\nWe remove the mention of the `<>` operator in favor of `!=` in\nconfiguration. That way `_neq` is always defined once, as `!=`.",
          "timestamp": "2024-05-27T10:54:03Z",
          "tree_id": "142613b2516ecf25b5b407198c36ad1d87c15f03",
          "url": "https://github.com/hasura/ndc-postgres/commit/2a7f82213887a7f095d424435a84a93348eca3fd"
        },
        "date": 1716807627679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.870865,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 58.90071199999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.566241831651302,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.566443795405208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2894981166305105,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.06150099999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.2484493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.06427545035292,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3928684144208603,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.46060136220725295,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.116944000000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.77296735,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.96803969858093,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.55368906697585,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44580994162685006,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.375608,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.42763705000003,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.348700552591037,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.3218362517479,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4590894145589862,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.542074,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.44157289999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.12384767539337,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.7475256051966,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42072297481887383,
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
          "id": "338b471702da80bf7bc8c47a2ddda96e9f853099",
          "message": "Bump Rust to v1.78.0. (#480)\n\nNothing noteworthy, just seems sensible to keep up to date.",
          "timestamp": "2024-05-27T13:12:32Z",
          "tree_id": "816ab5a8de56c272b6b172d53fdedbf0a0d5e140",
          "url": "https://github.com/hasura/ndc-postgres/commit/338b471702da80bf7bc8c47a2ddda96e9f853099"
        },
        "date": 1716816148220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.588678,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.281168299999976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.769151496395926,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.644596542713545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27862473515576686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.3290075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.64948000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.868153216577106,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.129900083834052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4230757103348294,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.1528635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.63492689999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.94621158655008,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.366690403663082,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42031492788398034,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.30643,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.52366875,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.384005702686725,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.100647096734843,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40534608075144635,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.769567,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.8920522,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.670718248338225,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.701464292493306,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3795631028187685,
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
          "id": "de3e54ef157d7939346317f1d6776fa56d9e5934",
          "message": "chore(deps): Bump serde from 1.0.202 to 1.0.203 (#483)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.202 to\n1.0.203.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.203</h2>\n<ul>\n<li>Documentation improvements (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2747\">#2747</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d5bc546ca53be0b31984a06a8ad587cbea4ca5ce\"><code>d5bc546</code></a>\nRelease 1.0.203</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/45ae217728e9163103c47f9bd04502368caaf446\"><code>45ae217</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2747\">#2747</a>\nfrom dtolnay/variadic</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b7b97dda7333baf6474517e3646754be54e3796b\"><code>b7b97dd</code></a>\nUnindent implementation inside tuple_impl_body macro</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/5d3c563d469ef36ce5a01f1612f53883fee20db5\"><code>5d3c563</code></a>\nDocument tuple impls as fake variadic</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/376185458b48aeb2774ecc26422cc9499e564117\"><code>3761854</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2745\">#2745</a>\nfrom dtolnay/docsrs</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/a8f14840ab3ff58f533cd27d0f91955d57f12a65\"><code>a8f1484</code></a>\nRely on docs.rs to define --cfg=docsrs by default</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.202...v1.0.203\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.202&new-version=1.0.203)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-28T08:18:56Z",
          "tree_id": "32501d48b88838afbbf84e64535b9c4c8739ae8f",
          "url": "https://github.com/hasura/ndc-postgres/commit/de3e54ef157d7939346317f1d6776fa56d9e5934"
        },
        "date": 1716884867532,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 39.460773,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 60.02882925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.509377556133147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 14.62113409493904,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30496487725666344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.489095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.21224279999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.96219868840077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8684936520984365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43900286621011103,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 55.624026,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.1795085,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 34.19741473869636,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.698825141286925,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5136274644407979,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.389879,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.83131135,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.075647181626405,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.634005395029785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40060471651633534,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.700535,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.05828,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.85518831799001,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.096557470561915,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4130692679925649,
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
          "id": "de22c52457026a129a1b5037391051f55f2f4eba",
          "message": "chore(deps): Bump schemars from 0.8.20 to 0.8.21 (#484)\n\nBumps [schemars](https://github.com/GREsau/schemars) from 0.8.20 to\n0.8.21.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/releases\">schemars's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.8.21</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Fix <code>null</code> default not being set on generated schemas (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/295\">GREsau/schemars#295</a>\n/ <a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/296\">GREsau/schemars#296</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/blob/master/CHANGELOG.md\">schemars's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.8.21] - 2024-05-23</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Fix <code>null</code> default not being set on generated schemas (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/295\">GREsau/schemars#295</a>\n/ <a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/296\">GREsau/schemars#296</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/5e20a37a1aca1cac04bb3afcbef13ddcbaff7218\"><code>5e20a37</code></a>\nv0.8.21</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/a9a9c7e8ed3c637b0e52b82e4cc572eccd81fd96\"><code>a9a9c7e</code></a>\nFix &quot;null&quot; default not being set on schema (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/296\">#296</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/GREsau/schemars/compare/v0.8.20...v0.8.21\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=schemars&package-manager=cargo&previous-version=0.8.20&new-version=0.8.21)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-28T08:34:18Z",
          "tree_id": "f414c196528ffa21b463f5857a6ef8c390c8ff57",
          "url": "https://github.com/hasura/ndc-postgres/commit/de22c52457026a129a1b5037391051f55f2f4eba"
        },
        "date": 1716885650742,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.882868,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.2504346,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.761881733895848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.52492832444927,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2784900727788247,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.9110535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.51397674999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.18670416536591,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.182188665834417,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.428359512486585,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.907399,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.1348121999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.45486228633231,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.495472587039341,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4403832640108091,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.6290575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.90858704999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.659933700714102,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.645564915955749,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4245796283717196,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.5342535,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.45621775000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.296422638959548,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.456393775568394,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3884025569158258,
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
          "id": "244fb25bd8eaaa7e7313e076d221560f928679f0",
          "message": "Support inserting an empty object (#478)\n\n### What\n\nWe should support the scenario of inserting an empty object `{}`, which\nmeans use the default for all columns.\n\n### How\n\nTo support a table that has only generated columns such as this one:\n\n```sql\ncreate table t(x int generated always as (1) stored);\n```\n\nWe need to generate the following SQL to insert N empty objects:\n\n```sql\ninsert into t select from generate_series(1,N);\n```\n\nSo in case all of the objects are empty, we translate to the query plan\nabove.",
          "timestamp": "2024-05-28T09:29:21Z",
          "tree_id": "5f500ecadc12a7318f34416e69d750aabe990df2",
          "url": "https://github.com/hasura/ndc-postgres/commit/244fb25bd8eaaa7e7313e076d221560f928679f0"
        },
        "date": 1716889007628,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.885186000000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.68410675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.881527846518862,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.45935296279765,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2748908636396005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.337077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.2386941,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.36824032300652,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4085820379691114,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3923108439322696,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.477862,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.843424,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.122794828890235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.243306619389585,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48558341131251426,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.087519,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.70758099999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.1889126470177,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.786500300004814,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4147799206583396,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.2416815,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.14432179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.8913879327208,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.86944465685723,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4134872201645755,
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
          "id": "bc9526203ddf4d5b71a7b7722508d092c4cb7eaa",
          "message": "some sql phase fixes (#485)\n\n### What\n\nA few small refactorings of the sql stage:\n\n1. Introduce `sql::string::append_<number-type>` functions for literal\nnumbers instead of using `append_syntax`.\n2. Remove a couple of unnecessary to_string()s\n3. Remove box from a BTreeMap\n4. Rename `Int8(i32)` to `Int4(i32)`.\n5. Exhaustive list for `sql::ast::Expression` in the constant folding\nrewrite.\n6. Use a newtype instead of a struct for column alias.",
          "timestamp": "2024-05-28T13:25:59Z",
          "tree_id": "1be03a734fce8771e49a0675341576025fb3384b",
          "url": "https://github.com/hasura/ndc-postgres/commit/bc9526203ddf4d5b71a7b7722508d092c4cb7eaa"
        },
        "date": 1716903205034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.313354000000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 52.76187575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.855812616435845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.301955222943096,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2875318074303085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.811334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.58394279999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.30629395493096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9488856619444945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.37860848595016733,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.968713,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.223515,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.426869646909054,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.326472674324137,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4570114708238338,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.7458225,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.12389300000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.31471742212602,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.65855195522234,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4295019717704565,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.152507,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.68679639999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.880574143822287,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.793394734920753,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3470998145931471,
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
          "id": "0bdaa057b8c4fbc6500c71762a628bb0491f3f09",
          "message": "ndc-spec 0.1.3 with filter/order by nested fields (#486)\n\n### What\n\n1. Update ndc-spec to version\n[0.1.3](https://github.com/hasura/ndc-spec/releases/tag/v0.1.3).\n2. Implemented the new capabilities: filter and order by nested fields.\n\n### How\n\n#### Nested fields selection\n\nWe add SQL syntax for accessing an expression's field. The syntax is\n`(<expression>).<field>`\n\n#### Order by nested fields\n\nWe add the field selection to the sort expression in the `ORDER BY`\nclause so it looks like this: `ORDER BY (column).field ASC`.\nImplementation wise, we thread the field path like we do for the sort\ndirection, and wrap the expressions in a NestedFieldSelect clause.\n\n#### Filter by nested fields\n\n- We directly wrap columns that contain field paths when they are used\ninside the predicate.\n- We extract the type of a nested field by recursively looking it up in\nthe environment.",
          "timestamp": "2024-05-30T14:46:58Z",
          "tree_id": "b7ecca35edc2bba329e48b38cf92615d94df75b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/0bdaa057b8c4fbc6500c71762a628bb0491f3f09"
        },
        "date": 1717080829131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.664574,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.001325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.254614487640318,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.1474662913880564,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29192799398960906,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.919402,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.767517,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.737233617891164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.38994314408464,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24424408519511248,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.7183795,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.15508119999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.642498772584318,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.329677575732688,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36884147062978284,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.1403155,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.93168460000004,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.833403558221992,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.203069999408758,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.27972738691939825,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.458741,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.9404466,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.216363905746956,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.3747802121705455,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3085969099839157,
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
          "id": "6ffd9bc1bcf5174bc0d281d96b4941bb61656e63",
          "message": "Move all dependencies to the workspace level. (#487)\n\n### What\n\nRather than specifying dependency versions in many places, we can\nspecify them once, at the top-level workspace, and then refer to the\nversions in the individual crates. This will make sure we never\n(unintentionally) directly depend on multiple versions of the same\ncrate.\n\n### How\n\nWe make use of Cargo's \"workspace dependencies\" feature to specify the\nversions, and then use `workspace = true` in the individual crates.\n\nI have also truncated the versions we depend upon to the\nsemver-compatible range, so that upgrades within semver only need to\nchange the Cargo lockfile.",
          "timestamp": "2024-05-31T10:47:25Z",
          "tree_id": "164ece78d95c11b47789818674f47fd9fcde6c26",
          "url": "https://github.com/hasura/ndc-postgres/commit/6ffd9bc1bcf5174bc0d281d96b4941bb61656e63"
        },
        "date": 1717152897373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.3729905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.92342385,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.479128207949621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.653349369001699,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2762356278477145,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.420598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.1488154,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.26736815719331,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4108572955889116,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27154140193200027,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.949047500000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.21288874999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.843473091634817,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.310674244443195,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39909203323867953,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.5422755,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.4324772,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.608072171088665,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.793530332062922,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3326577832813623,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.96638,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.95388925,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.404273176927116,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.687672649421689,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3305594191872189,
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
          "id": "7e5dd130b40c3d4055b593b3c9b1750a06898d02",
          "message": "chore(deps): Bump tokio from 1.37.0 to 1.38.0 (#489)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.37.0 to 1.38.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.38.0</h2>\n<p>This release marks the beginning of stabilization for runtime\nmetrics. It\nstabilizes <code>RuntimeMetrics::worker_count</code>. Future releases\nwill continue to\nstabilize more metrics.</p>\n<h3>Added</h3>\n<ul>\n<li>fs: add <code>File::create_new</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6573\">#6573</a>)</li>\n<li>io: add <code>copy_bidirectional_with_sizes</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6500\">#6500</a>)</li>\n<li>io: implement <code>AsyncBufRead</code> for <code>Join</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6449\">#6449</a>)</li>\n<li>net: add Apple visionOS support (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6465\">#6465</a>)</li>\n<li>net: implement <code>Clone</code> for <code>NamedPipeInfo</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6586\">#6586</a>)</li>\n<li>net: support QNX OS (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6421\">#6421</a>)</li>\n<li>sync: add <code>Notify::notify_last</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6520\">#6520</a>)</li>\n<li>sync: add <code>mpsc::Receiver::{capacity,max_capacity}</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6511\">#6511</a>)</li>\n<li>sync: add <code>split</code> method to the semaphore permit (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6472\">#6472</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6478\">#6478</a>)</li>\n<li>task: add\n<code>tokio::task::join_set::Builder::spawn_blocking</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6578\">#6578</a>)</li>\n<li>wasm: support rt-multi-thread with wasm32-wasi-preview1-threads (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6510\">#6510</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>macros: make <code>#[tokio::test]</code> append <code>#[test]</code>\nat the end of the attribute list (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6497\">#6497</a>)</li>\n<li>metrics: fix <code>blocking_threads</code> count (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6551\">#6551</a>)</li>\n<li>metrics: stabilize <code>RuntimeMetrics::worker_count</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6556\">#6556</a>)</li>\n<li>runtime: move task out of the <code>lifo_slot</code> in\n<code>block_in_place</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6596\">#6596</a>)</li>\n<li>runtime: panic if <code>global_queue_interval</code> is zero (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6445\">#6445</a>)</li>\n<li>sync: always drop message in destructor for oneshot receiver (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6558\">#6558</a>)</li>\n<li>sync: instrument <code>Semaphore</code> for task dumps (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6499\">#6499</a>)</li>\n<li>sync: use FIFO ordering when waking batches of wakers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6521\">#6521</a>)</li>\n<li>task: make <code>LocalKey::get</code> work with Clone types (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6433\">#6433</a>)</li>\n<li>tests: update nix and mio-aio dev-dependencies (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6552\">#6552</a>)</li>\n<li>time: clean up implementation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6517\">#6517</a>)</li>\n<li>time: lazily init timers on first poll (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6512\">#6512</a>)</li>\n<li>time: remove the <code>true_when</code> field in\n<code>TimerShared</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6563\">#6563</a>)</li>\n<li>time: use sharding for timer implementation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6534\">#6534</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>taskdump: allow building taskdump docs on non-unix machines (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6564\">#6564</a>)</li>\n<li>time: check for overflow in <code>Interval::poll_tick</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6487\">#6487</a>)</li>\n<li>sync: fix incorrect <code>is_empty</code> on mpsc block boundaries\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6603\">#6603</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>fs: rewrite file system docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6467\">#6467</a>)</li>\n<li>io: fix <code>stdin</code> documentation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6581\">#6581</a>)</li>\n<li>io: fix obsolete reference in <code>ReadHalf::unsplit()</code>\ndocumentation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6498\">#6498</a>)</li>\n<li>macros: render more comprehensible documentation for\n<code>select!</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6468\">#6468</a>)</li>\n<li>net: add missing types to module docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6482\">#6482</a>)</li>\n<li>net: fix misleading <code>NamedPipeServer</code> example (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6590\">#6590</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/14c17fc09656a30230177b600bacceb9db33e942\"><code>14c17fc</code></a>\nchore: prepare Tokio v1.38.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6601\">#6601</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/65cbf730de48ef9d3c84959d26ab717a85a5de62\"><code>65cbf73</code></a>\nchore: prepare tokio-macros v2.3.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6600\">#6600</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/dbf93c71844a01574a10f9dee0d4d9655a569f0a\"><code>dbf93c7</code></a>\nsync: fix incorrect is_empty on mpsc block boundaries (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6603\">#6603</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/873cb8ae2fc291eaffbd71e3c83d17b2f0ed7abf\"><code>873cb8a</code></a>\nruntime: move task out of the <code>lifo_slot</code> in\n<code>block_in_place</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6596\">#6596</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/97bb47b480c66083397c21d54e7ae33cab6c1b20\"><code>97bb47b</code></a>\ntask: fix a typo in doc of <code>LocalSet::run_until</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6599\">#6599</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/86658bd87dc470f8e36eb6b893cc403820cfb7ee\"><code>86658bd</code></a>\nmetrics: stabilize <code>RuntimeMetrics::worker_count</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6556\">#6556</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/9e00b266e08d263c497dc9de57d9acbc049ae69b\"><code>9e00b26</code></a>\nsync: add <code>Notify::notify_last</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6520\">#6520</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/6c42d286b343f498ce29de2aab9358a0aedb081c\"><code>6c42d28</code></a>\nnet: fix misleading <code>NamedPipeServer</code> example (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6590\">#6590</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3a6fdc05681841c30fe4e27b63924c7908ea4634\"><code>3a6fdc0</code></a>\nlicense: fix formatting and remove year in licenses (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6451\">#6451</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/2890d0c3db4f595330d8d223bfbfeb81e205b048\"><code>2890d0c</code></a>\nmetrics: fix blocking_threads count (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6551\">#6551</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.37.0...tokio-1.38.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.37.0&new-version=1.38.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-03T14:30:28Z",
          "tree_id": "2ed72001755ca314962216d685d98040d7ac275c",
          "url": "https://github.com/hasura/ndc-postgres/commit/7e5dd130b40c3d4055b593b3c9b1750a06898d02"
        },
        "date": 1717425504923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.4477475,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.236368049999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.409276745807995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.740287623541848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29283844890662486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.24124900000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.18180129999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.0401935195756,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.601729041168177,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23912114278217497,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.983343,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.6779629,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.692932693981366,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.82415901515996,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.33543068995247793,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.136606,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.63234419999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.582257158636814,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.164046034175797,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.34480183482478094,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.705217,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.056736,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.74425700726578,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.573724290632107,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3270715498846919,
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
          "id": "80a9b5180a83a9277d9b613a3f6f83927649b593",
          "message": "Refactor: Use functions for identifier names instead of unwrapping (#488)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nSmall refactor: in sql::convert, instead of using unwrapping newtypes\nand using sql.append_identifier for table names, column names, and\nschema names, just implement a dedicated function (`impl` of `to_sql`)\nfor each and use that.",
          "timestamp": "2024-06-03T14:44:27Z",
          "tree_id": "200d0b0f59894048e5143c869236bbf2a0876dd2",
          "url": "https://github.com/hasura/ndc-postgres/commit/80a9b5180a83a9277d9b613a3f6f83927649b593"
        },
        "date": 1717426323617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.133265,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.135599799999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.235163007977803,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.4127661320391525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30437452460355574,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.648691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.3642101,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.97239531782049,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5004773922063137,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2706924696176769,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.167683,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.5487164,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.031889421475615,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.6125522050606484,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3721635942345777,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.740311500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.21672874999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.261973650813914,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.525882420737048,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3319381007806341,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.396316999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.36174030000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.696810167706545,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.856249331329639,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26164149972483897,
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
          "id": "fc7b5b11b83e141e128e5efd21753ab9af8a094c",
          "message": "introduce unique_constraints module (#490)\n\n### What\n\nFor Delete by key we have a function that returns the unique constraints\nof a table.\nThis can be useful for Update by key, which we will introduce soon, as\nwell.\n\nIn this PR we move this function to its own module.\n\nWe also change a word in the schema description of delete.",
          "timestamp": "2024-06-04T08:47:11Z",
          "tree_id": "c19e7dc3eed59a593084fbe2e3e27d16f20c0d70",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc7b5b11b83e141e128e5efd21753ab9af8a094c"
        },
        "date": 1717491229108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.9450495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.6360761,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.179004526739046,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.084531804199681,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30677665629032175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0514955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.95620484999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.570583069427336,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5512387999543549,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26834825454129463,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.9497,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.30156325,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.66986071337863,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.095466438286774,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4276645464518748,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.069015,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.768043,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.339875858088448,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.678650503476945,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3333074920624239,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.296691,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.9530091,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.438102955211974,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.126576012896535,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3131375993298105,
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
          "id": "fecd55c0a6dd0660d15dd177e39e007c6fcb6083",
          "message": "add UPDATE ast (#491)\n\n### What\n\nWe will soon add an auto generated Update by key procedure. This\nprocedure will be translate to a SQL UPDATE statement.\n\nIn this PR we introduce this AST representation of Update statements.\nOf course, this might change once we actually implement the feature.\n\n### How\n\nAdd AST definition, conversion to string, and constant folding handling.\n\nhttps://www.postgresql.org/docs/current/sql-update.html",
          "timestamp": "2024-06-04T08:47:18Z",
          "tree_id": "76b2dcfdbd7f3f824cf2d269f0d82dceed6c098e",
          "url": "https://github.com/hasura/ndc-postgres/commit/fecd55c0a6dd0660d15dd177e39e007c6fcb6083"
        },
        "date": 1717491289528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.498108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.45295239999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.015758928528157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.403989587289068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2730546918258999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.127825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.5556938,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.326492622190486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5755865476423452,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2746173292963324,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.192748,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.488552,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.508645592064028,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.623186815307335,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37797944545963247,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.925936,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.55133850000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.219648260381984,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.485868027684976,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.353919429543257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.854802,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.73589425,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.163723119674458,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.679400305037362,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2716811373197202,
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
          "id": "7ee9fbb3e9440d0424d29fb8f04476a291b70710",
          "message": "Unify query part handling for rows and aggregates (#492)\n\n### What\n\nfixes https://hasurahq.atlassian.net/browse/PG-112\n\nPreviously, order by and limit clauses were not applied for the\naggregates part of the query as the spec said it was not needed,\nhowever, that is a mistake which we now fix.\n\n### How\n\nTo fix this, we unify the way we handle rows and aggregates.\nCallers will no longer need to call `translate_rows_query` and\n`translate_aggregates_query` separately and then try to stitch them\ntogether, but rather call one part, `translate_query`, which will call\nboth.\n\nEach translate part will call the same function, `translate_query_part`\nwhich translates the common elements (where, order by, limit, etc.), but\nwill different in the way it handles fields or aggregates.\n\nThis way, we make sure that an ndc-spec query is translated consistently\nbetween the two parts - rows and aggregates.",
          "timestamp": "2024-06-06T15:26:31Z",
          "tree_id": "99b682890d215b29972cf578ece4abb3f12e4cfb",
          "url": "https://github.com/hasura/ndc-postgres/commit/7ee9fbb3e9440d0424d29fb8f04476a291b70710"
        },
        "date": 1717688014873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.009326,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.68034599999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.736195949796542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.713224830851875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29033159373123296,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.295523,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.380539,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.51536014769875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4846395270592794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26703671528902373,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.6117355,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.8996485,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.859995816167103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0542505551659325,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3841028840350234,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.911101,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.31189975,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.284287628890326,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.74456862017248,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3333762287682274,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.719758999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.2147635,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.1259683596009,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.041669781311111,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22305614030590787,
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
          "id": "7cf477ae3dab1e7cf944594d9aa1ad16824833b4",
          "message": "experimental update mutations (#493)\n\n### What\n\nWe want to support update point mutation. This PR introduces a new\n(experimental) auto-generated procedure with 4 arguments:\n\n- the unique key\n- `_set` - which columns to set, to which values\n- pre check - Which rows am I allowed to edit\n- post check - What output am I allowed to produce\n\nExample schema:\n\n```json\n{\n  \"name\": \"experimental_update_Artist_by_ArtistId\",\n  \"description\": \"Update any row on the 'Artist' collection using the 'ArtistId' key\",\n  \"arguments\": {\n    \"ArtistId\": {\n      \"description\": \"The identifier of an artist\",\n      \"type\": {\n        \"type\": \"named\",\n        \"name\": \"int4\"\n      }\n    },\n    \"_set\": {\n      \"type\": {\n        \"type\": \"named\",\n        \"name\": \"experimental_update_Artist_by_ArtistId_object\"\n      }\n    },\n    \"post_check\": {\n      \"description\": \"Update permission post-condition predicate over the 'Artist' collection\",\n      \"type\": {\n        \"type\": \"predicate\",\n        \"object_type_name\": \"Artist\"\n      }\n    },\n    \"pre_check\": {\n      \"description\": \"Update permission pre-condition predicate over the 'Artist' collection\",\n      \"type\": {\n        \"type\": \"predicate\",\n        \"object_type_name\": \"Artist\"\n      }\n    }\n  },\n  \"result_type\": {\n    \"type\": \"named\",\n    \"name\": \"experimental_update_Artist_by_ArtistId_response\"\n  }\n}\n```\n\n### How\n\nWe use the tricks we already learned from delete and insert:\n\n- We generate update by unique key mutations like we do in delete\n- We generate the same pre condition as in delete\n- We parse and check the _set object similarly to how we do it for\ninsert, though simplified because we only need to read one object.\n- We generate the same post condition as in insert, and return it as an\nadditional column.",
          "timestamp": "2024-06-07T11:42:56Z",
          "tree_id": "4434d51ce21735c4a80da77896da97500a8cbc25",
          "url": "https://github.com/hasura/ndc-postgres/commit/7cf477ae3dab1e7cf944594d9aa1ad16824833b4"
        },
        "date": 1717760967617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.260431,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.1023065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.331503207417319,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.224773475639205,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2902792381337281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.5097715,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.18130969999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.293804704351054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3531909536388085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24807814516110277,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.1592285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.06974419999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.52951182166103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.680561138436634,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39275097557034905,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.908202,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.96724139999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.796872861778848,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.5956360721092615,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29200013836039335,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.2155505,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.19495319999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.168839434651677,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.483817530368025,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26313943296188463,
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
          "id": "c5780279243b8eb52884236c24e4384406b9a85a",
          "message": "chore(deps): Bump url from 2.5.0 to 2.5.1 (#497)\n\nBumps [url](https://github.com/servo/rust-url) from 2.5.0 to 2.5.1.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/3d6dbbb1dfc64c597745d5d6b97f2a8dd543c42b\"><code>3d6dbbb</code></a>\nReimplement idna on top of ICU4X (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/923\">#923</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/de947abf896f44efc5f0fe382064fd95363dff37\"><code>de947ab</code></a>\nDocument possible replacements of the base URL (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/926\">#926</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/8b8431bbe10d0f06c53885d5ba2602d69f61888f\"><code>8b8431b</code></a>\ndocs: document SyntaxViolation variants, remove bare URLs (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/924\">#924</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/fd042e003fe583426454001554542ef95538d794\"><code>fd042e0</code></a>\nNon-special URLs can have their paths erased (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/921\">#921</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/49eea1c2eb3bb7259e3f8e15ace5f86990adb0bd\"><code>49eea1c</code></a>\nFix multiple issues on wasm32: (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/886\">#886</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/a4dd58be5989afedddec023174b2cdcd81912239\"><code>a4dd58b</code></a>\nFix lint (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/920\">#920</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/73803fa780c8890e0b40cd01fbbd5362fbe4c9e0\"><code>73803fa</code></a>\nUpdate URLs (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/916\">#916</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/8e4331d26018d3c46a42f81b5613fcc7ab16b850\"><code>8e4331d</code></a>\nAdd bench for to_ascii on an already-Punycode name (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/915\">#915</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/9c51937adba5f5f54117999a6a7983b00a049995\"><code>9c51937</code></a>\nRename <code>master</code> branch to <code>main</code> (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/914\">#914</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/e654efb9c19732f680f14db43a673a726b834f42\"><code>e654efb</code></a>\nFix non-base64 data URLs with % character not followed by hex digits (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/797\">#797</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.0...v2.5.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=url&package-manager=cargo&previous-version=2.5.0&new-version=2.5.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:33:38Z",
          "tree_id": "b4815af612acfe8a11cd458c0590a320dbe03f2d",
          "url": "https://github.com/hasura/ndc-postgres/commit/c5780279243b8eb52884236c24e4384406b9a85a"
        },
        "date": 1718041350595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.288722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.514311,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.34984429150566,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.0441793034582165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2899882315624181,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.553668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.341426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.70587022947768,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6675347830027931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23908339328448108,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.618303999999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.97212235000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.807495225814876,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.048243011499281,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.332368109220395,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.728424,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.51998084999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.70337800096048,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.121179308086116,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2955429799672384,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.179145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.38939,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.56612860707718,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.512644486578797,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3193292763814262,
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
          "id": "7573a4eb961f1f9b422e1ab94de46747428e2fe2",
          "message": "chore(deps): Bump hyper from 0.14.28 to 0.14.29 (#495)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.28 to\n0.14.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.29</h2>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\">b5c2592f</a>)</li>\n</ul>\n<h2>Features</h2>\n<ul>\n<li><strong>http2:</strong> add config for\n<code>max_local_error_reset_streams</code> in server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\">dedcb674</a>)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/jeromegn\"><code>@​jeromegn</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/hyperium/hyper/pull/3305\">hyperium/hyper#3305</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29\">https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.29/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.29 (2024-06-03)</h3>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\">b5c2592f</a>)</li>\n</ul>\n<h4>Features</h4>\n<ul>\n<li><strong>http2:</strong> add config for\n<code>max_local_error_reset_streams</code> in server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\">dedcb674</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/4e61351c1c07f59f8d7b79dcb37c1384acb9f3cb\"><code>4e61351</code></a>\nv0.14.29</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\"><code>b5c2592</code></a>\nfix(http1): start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/093665e3c318b1360df5a7338facc2b47ac5b54a\"><code>093665e</code></a>\nrefactor(lib): allow warnings in 0.14.x (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3677\">#3677</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\"><code>dedcb67</code></a>\nfeat(http2): add config for <code>max_local_error_reset_streams</code>\nin server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.28&new-version=0.14.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:33:46Z",
          "tree_id": "5dd7f6eeb4c44447c3bf02d7ebc56bb2be9f6071",
          "url": "https://github.com/hasura/ndc-postgres/commit/7573a4eb961f1f9b422e1ab94de46747428e2fe2"
        },
        "date": 1718041574989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.428379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.41843575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.516178361705343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.516369346424177,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2937208322127323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.246051,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.0922875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.03739933869618,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6467385932569485,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26414241898239244,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.229617000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.87894449999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.445862237532666,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.194141022265512,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4065075702034096,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.526833,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.262227,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.174938864424753,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.00147995758357,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3344222585461374,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.996506,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.452131,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.07507494593969,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.808028761572494,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27445535913886543,
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
          "id": "d7e054a7a7f916b05ae456ceaef8073a84d10f88",
          "message": "chore(deps): Bump clap from 4.5.4 to 4.5.6 (#496)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.4 to 4.5.6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.6</h2>\n<h2>[4.5.6] - 2024-06-06</h2>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.6] - 2024-06-06</h2>\n<h2>[4.5.5] - 2024-06-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Allow <code>exclusive</code> to override\n<code>required_unless_present</code>,\n<code>required_unless_present_any</code>,\n<code>required_unless_present_all</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/51de731521efb05c5503e05c33036d8fa439bc5a\"><code>51de731</code></a>\nchore(ci): Lint clippy::items_after_statements seems too strict</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/181a2cf5e673d0f6f42133a5b30ccafd86b0106d\"><code>181a2cf</code></a>\nchore(ci): Allow prelude wildcard imports</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/82cf9a62b027c10c6fafdcaaee24c4e92d7da61d\"><code>82cf9a6</code></a>\nchore(ci): Reduce noisy lints</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.4...v4.5.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.4&new-version=4.5.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:34:43Z",
          "tree_id": "4c9fa1a6ce543b28aa25394008bf5808130fe714",
          "url": "https://github.com/hasura/ndc-postgres/commit/d7e054a7a7f916b05ae456ceaef8073a84d10f88"
        },
        "date": 1718041607263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.069289,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.62048079999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.959822350818614,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.615695881788282,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.287355292040611,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.146767,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.85219,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.48622815670093,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5251648121554098,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2603869566106055,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.051703,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.65859405,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.200336633736267,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.165350617636921,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3364448369232231,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.8515795,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.24795529999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.99027008020569,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.240084876228984,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3197812036972017,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.569329,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.6574964,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.283766991809657,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1283372294671175,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28368976757502207,
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
          "id": "188322e93ac39561c4832f715fb37497217f1725",
          "message": "Mark Postgres aggregate return types as nullable (#498)\n\n### What\n\nAs discussed internally, a particular quirk of SQL (or Postgres, at the\nvery least) is that, with the exception of `COUNT`, an aggregate of an\nempty row set returns `NULL`[^1] (rather than, for example, returning\n`0` for `SUM`). This means that all aggregate functions over scalar\ntypes exposed by the Postgres connector should be labelled as nullable.\n\nThis PR addresses\n[APG-131](https://hasurahq.atlassian.net/browse/APG-131).\n\nNB: this will be a breaking change for anyone generating (for example)\ntypes from our /schema output.\n\n### How\n\nThis PR updates the `/schema` endpoint to mark these types as nullable.\n\n[^1]: The entire work effort of this PR was trying to verify this\nstatement.\n\n\n[APG-131]:\nhttps://hasurahq.atlassian.net/browse/APG-131?atlOrigin=eyJpIjoiNWRkNTljNzYxNjVmNDY3MDlhMDU5Y2ZhYzA5YTRkZjUiLCJwIjoiZ2l0aHViLWNvbS1KU1cifQ",
          "timestamp": "2024-06-11T14:18:04Z",
          "tree_id": "fde54cb5783c7003275d0de2d659b70accc52fcf",
          "url": "https://github.com/hasura/ndc-postgres/commit/188322e93ac39561c4832f715fb37497217f1725"
        },
        "date": 1718115922077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.279725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.7644914,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.59128752048402,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.345790335592923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3104407995716202,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0087875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.5425223,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.46368809217899,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8584442394474578,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29127518373697237,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.8342465,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.9708578,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.847024271040414,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.485576628221867,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3722545844832189,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.623734,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.24381509999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.514706107169005,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.236872064135646,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3102462408009406,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.794547,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.0546484,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.81500083655002,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.552872792756816,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3116968320707806,
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
          "id": "81cfa517fedbbba818d805c17868b9e62f83d2c9",
          "message": "Invert the update columns syntax for update procedures (#494)\n\n### What\n\nSlack thread for more context:\nhttps://hasurahq.slack.com/archives/C04NS5JCD8A/p1717760957475579\n\nWe want to introduce a different syntax for column update. Instead of\nbucketing by operations, we bucket by column names.\n\n#### Old API\n\n```json\n{ \n  \"_set\": { \"name\": \"Al\", \"address\": \"street\"},\n  \"_inc\": { \"age\": 1}, \n  \"_concat\": { \"...\" }\n}\n```\n\n#### New API\n\n```json\n{ \n  \"update_columns\": { \n    \"name\": { \"_set\": \"Al\" },\n    \"address\": { \"_set\": \"street\" },\n    \"age\": { \"_inc\": 1 }\n  }\n}\n```\n\nThis syntax is more consistent with other operations in other places,\nand makes it easy to augment the existing update procedure with new\noperations without adding arguments.\n\n### How\n\nWarning: this code was written at night, extra care is advised.\n\n1. We change the name of the `_set` argument in the schema to\n`update_columns`\n2. We introduce a new object type for each column update with the\nstructure `{ _set: value }`\n3. The type for `update_columns` is all the columns in the table mapped\nto their object type.\n4. We parse the `update_columns` object by parsing each column and its\noperation, and generate a `MutationValueExpression`.\n\n## Versioning and changelog\n\nNo need to worry about versioning. This is all in the\n`veryExperimentalWIP` mutationVersion.",
          "timestamp": "2024-06-12T22:52:55Z",
          "tree_id": "b15c02f9fd8b58695673dd20b80cb4e309fa0b5f",
          "url": "https://github.com/hasura/ndc-postgres/commit/81cfa517fedbbba818d805c17868b9e62f83d2c9"
        },
        "date": 1718233200891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.6755375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.991509549999975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.581354603510595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.813561694972458,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27578872857909303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.469347,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.76901369999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.64940923094206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.446278799281835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2473172763522518,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.73729,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.47551330000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.054972495834726,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.96921791009622,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4084254187669775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.147411500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.52864925,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.070830578648454,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5625219258749325,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2819238631958183,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.0872155,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.73833725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.40750398893732,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.401105601292798,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31063390180279704,
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
          "id": "21d63c830ca4ac9d28725db94c45f617bf304c07",
          "message": "Bump ndc-spec to v0.1.4. (#499)",
          "timestamp": "2024-06-17T07:43:16Z",
          "tree_id": "49fb68e9f4e4aeb9b1056d839b28e76805abbed2",
          "url": "https://github.com/hasura/ndc-postgres/commit/21d63c830ca4ac9d28725db94c45f617bf304c07"
        },
        "date": 1718610798904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.430551,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.71258025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.244728969016386,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.623966327865972,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3034427493653616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.10374999999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.4475841,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.6438219250267,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6091576354729327,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28110695098794913,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.6708685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.71332764999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.822789746166016,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.428374915598859,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41945879957978466,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.612495499999994,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.33708075000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.545078933402674,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.47582153202146,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38003769369047063,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.546588,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.687332,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.602023942906325,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.911963934975031,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34387754153336114,
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
          "id": "315fc4fab9af3f0859e151090f5170cea9af5e5c",
          "message": "generate mutations for multi-column unique constraints (#500)\n\n### What\n\nA unique constraint on a table could be defined using multiple column.\nFor example in `PlaylistTrack` the pair `(PlaylistId, TrackId)` is a\nunique constraint, and we will generate a procedure with the following\nstructure:\n\n```js\nexperimental_delete_PlaylistTrack_by_PlaylistId_and_TrackId(\n    PlaylistId: int,\n    TrackId: int,\n    filter: boolexpr\n)\n```\n\nand a similar one for updates.\n\n### How\n\n- We change the mutation type to include multiple keys instead of a\nsingle one.\n- Instead of using `get_non_compound_uniqueness_constraints()`, we just\ntraverse the constraints list a generate add an argument per unique\nconstraint key.\n- We generate cute names and descriptions by chaining the key names.\n- We change the schema by iterating over the keys.\n- We do the same for update and delete.\n- We emit a warning and skip generating a procedure if something\nunexpected happens.",
          "timestamp": "2024-06-19T09:28:46Z",
          "tree_id": "3228bdd8c37e4332ada4a3211d0ccd94e8cca6cf",
          "url": "https://github.com/hasura/ndc-postgres/commit/315fc4fab9af3f0859e151090f5170cea9af5e5c"
        },
        "date": 1718789901168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.74727,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.8199844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.560170799117724,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.887827569400191,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28613022285192496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.0809305,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.98502279999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.84468289306033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5316725467393226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24683466235386328,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.258686,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.42476299999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.84809238106683,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.967423910886769,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4355350886861925,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.923748,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.97267979999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.673066477572632,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.342318889336937,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3593071171479432,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.217511,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.3693094,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.25975651499971,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.426657060356764,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31252089430888363,
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
          "id": "afb1c2a52c27963b3da022c7f85adc1e79abdc70",
          "message": "Refactor: use NonEmpty and unify fetching of key columns (#502)\n\n### What\n\nQuick refactor as a followup to\nhttps://github.com/hasura/ndc-postgres/pull/500#discussion_r1645749480:\n\n1. We use NonEmpty key columns instead of a simple Vec and trace a\nwarning when there are no keys.\n2. We move the common code of key_columns fetching into the `common`\nmodule and use it for both delete and update.",
          "timestamp": "2024-06-19T14:24:20Z",
          "tree_id": "b28057e14926365f0d4c01d80bcbe80f920c73c2",
          "url": "https://github.com/hasura/ndc-postgres/commit/afb1c2a52c27963b3da022c7f85adc1e79abdc70"
        },
        "date": 1718807619853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.847755,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.802940199999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.544462128191974,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.92991040905752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27326754980983414,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.421876,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.2728778,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.90435953367204,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5104831315318492,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2490742181175125,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.724484000000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.10721050000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.5954657534817,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.256719300282551,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4321380313052036,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.764836,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.24509555,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.636900391339122,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.975335827953547,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31665232185413345,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.334077,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.2564805,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.616383111524183,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.238985746459068,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31674617241559927,
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
          "id": "53565d6b4d342f98eed5cb2a91bebac745aa1d13",
          "message": "Set the default CONNECTION_URI in package manifest, release v0.7.1 (#503)\n\n### What\n\nIt's nice to have a default value for the `CONNECTION_URI` environment\nvariable when initializing a new connector, since that reduces the\nnumber of steps to try it out.",
          "timestamp": "2024-06-20T11:56:47Z",
          "tree_id": "621d24bf791ac15656a80821861ccffe90320fc7",
          "url": "https://github.com/hasura/ndc-postgres/commit/53565d6b4d342f98eed5cb2a91bebac745aa1d13"
        },
        "date": 1718884962201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.1342935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.10329825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.285027382378665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.548014466765693,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28861990727281683,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.738304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.91294059999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.021298164328556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.428077061312493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27035297202179487,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.756152,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.99987,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.38916838423907,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.66384411936788,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35233256308957167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.179336,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.28434475,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.245361521984652,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.602326334304994,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.26281774997689067,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.749298499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.42293175,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.872517764832036,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.206789857650552,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3162908021961419,
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
          "id": "7fa6c56d4c4669feada379c5dd771f5f14afc645",
          "message": "Add configuration version metrics (#504)\n\n### What\n\nThis PR adds a metric representing the configuration version that a\nrunning ndc-postgres instance uses.\n\nThis will help us track adoption of new versions and inform deprecation\ntimelines and documentation.\n\n### How\n\nRather than extending the existing metrics in the query_engine crate we\nmake a new Metrics struct in the ndc_postgres_configuration crate. This\nis to prevent the query_engine metrics from accumulating unrelated cruft\nand reduce the complexity of the module graph.",
          "timestamp": "2024-06-21T12:50:45Z",
          "tree_id": "84347590fdd62cbc5072959d85798b834454b90e",
          "url": "https://github.com/hasura/ndc-postgres/commit/7fa6c56d4c4669feada379c5dd771f5f14afc645"
        },
        "date": 1718974680357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.485926499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.170809500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.20451924054201,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.961985032873951,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28957847211487303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.020524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.93870825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.65386352448185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4665179168671827,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27287164246005935,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6973,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.5685561,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.60349679039243,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.827396947573224,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3892701634374745,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.763588,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.62148525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.865358364549337,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.072314892448826,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33621265293443087,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.556151,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.17953614999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.369850035399764,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.549046415260744,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31706352150574835,
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
          "id": "097a4e91723b009042a09e340106152dc954fdb5",
          "message": "Revise the mutations API (#501)\n\n### What\n\nWe want to make the api for mutations pretty. We make the following\nchanges:\n1. Rename arguments\n2. prefix the argument names of unique constraint columns with `key_`\n\n### How\n\n#### General design\n\n* We generate delete, insert and update procedures for each table.\n* A single insert procedure is generated per _table_ of the form:\n  ```graphql\n  <mutation-version>_insert_<table>(\n      objects: [<object>],\n      post_check: <boolexpr>\n  )\n  ```\nIt lets us insert multiple objects and include a post check for\npermissions.\n* A delete procedure is generated per _table X unique constraint_ of the\nform:\n  ```graphql\n  <mutation-version>_delete_<table>_by_<column_and_column_and...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      pre_check: <boolexpr>\n  )\n  ```\nIt lets us delete a single row using the uniqueness constraint, and\ncontains a pre check for permissions.\n* An update procedure is generated per _table X unique constraint_ of\nthe form:\n  ```graphql\n  <mutation-version>_update_<table>_by_<column_and_column_and...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      update_columns: { <column>: { _set: <value> }, ... },\n      pre_check: <boolexpr>,\n      post_check: <boolexpr>\n  )\n  ```\nIt lets us update a single row using the uniqueness constraint by\nupdating the relevant columns, and contains a pre check and post check\nfor permissions.\nNote that the `update_columns` structure is different than the v2\nversion where we had `_set`, `_inc`, and other fields.\n* Mutations using uniqueness constraints use the naming schema\n`by_column_and_column_and_column` instead of the db constraint name,\nbecause the former is far more helpful.\n* If generating a mutation encounters an internal error, we skip that\nparticular mutation instead of throwing an error so the connector can\nstart at any situation.\n* Naming collisions between the unique constraints and the\nupdate_columns / pre_check / post_check is avoided by prefixing argument\nnames of the columns of a unique constraint with `key_`.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-06-24T06:04:33Z",
          "tree_id": "460704a2635cb3db52d09043edc0debf558412c8",
          "url": "https://github.com/hasura/ndc-postgres/commit/097a4e91723b009042a09e340106152dc954fdb5"
        },
        "date": 1719209483250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.244208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.1652127,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.624119899668365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.274745638012789,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.292785840561885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.19979,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.694341,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.362097065766314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5090258776764998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2585698925639352,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.430351,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.34310339999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.277279520671932,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.527616835768939,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37177352524832286,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.414623,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.70003990000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.027546199052296,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.765536546390614,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31454951356152877,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.025966,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.18231679999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.993127145949586,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1843170857424,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31851474160127674,
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
          "id": "09cf76c1421078d80920b61ddb9e2022dafe3d6c",
          "message": "Remove redundant clones. (#506)\n\n### What\n\nI noticed a few extra calls to `.clone()` while working on an unrelated\nrefactor. I want to remove them for brevity and simplicity; I don't\nexpect a performance improvement.\n\nThis turns on the Clippy warning `redundant_clone`, which detects\nunnecessary calls to `.clone()` (and `.to_string()`).\n\nIt is an unstable warning and so might reports some false positives. If\nwe find any, we can suppress the warning there.\n\n### How\n\nI turned the warning on and applied fixes everywhere.\n\nI also saw a few that the lint didn't catch, which I fixed myself.",
          "timestamp": "2024-06-24T08:12:49Z",
          "tree_id": "e95ea1269e445fbaf4f1b3675a314a10bc648cf6",
          "url": "https://github.com/hasura/ndc-postgres/commit/09cf76c1421078d80920b61ddb9e2022dafe3d6c"
        },
        "date": 1719217209623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.333859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.905846549999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.462320742784557,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.576734122708087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2878939060019976,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.365146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.10059199999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.88107161255312,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4437161859894445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27244612590141665,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.023831,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.22674595,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.34271948331933,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.226447425823807,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3321836315680619,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.240832999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.96336949999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.41686416613171,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.684840225696853,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30140212091870233,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.051568,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.4760156,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.837180917007935,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.554121861679775,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30254706283543087,
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
          "id": "6bcdef5a81367182eae4a68618c48c7a4bad6803",
          "message": "Run all unit tests on CI. (#505)\n\n### What\n\nWe were only running a subset of unit tests on CI. Let's run all of\nthem.\n\n### How\n\nInstead of trying to list the (growing) package names, let's just filter\nout the database tests.\n\nThis also updates the snapshots to include the new connection URI\ndefault value, as these tests were failing.\n\nI had to move some tests into the databases-tests package as they\nweren't really unit tests.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-06-24T12:13:14Z",
          "tree_id": "7e8f6ff937e5f1bab4ba3ecad539bdd448e83fd4",
          "url": "https://github.com/hasura/ndc-postgres/commit/6bcdef5a81367182eae4a68618c48c7a4bad6803"
        },
        "date": 1719231580194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.509789,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.926977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.538044723402933,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.544722001004601,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2744166978495445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.27823649999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.611514,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.37036395955555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5665265083914335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2537113011034775,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.573349,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.26075969999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.73959807568674,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.097690633837988,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38480610829280615,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.406563,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.044533,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.477103862609468,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.656702417783293,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3217781500173557,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.19106,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.20473519999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.47846011460109,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.207156261576998,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3312561478500299,
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
          "id": "a4bf455f53e0a9b6fcad2d9eb0f7d9b3dd7f1b76",
          "message": "chore(deps): Bump url from 2.5.1 to 2.5.2 (#509)\n\nBumps [url](https://github.com/servo/rust-url) from 2.5.1 to 2.5.2.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/54346fa288e16b25b71c45149d7067c752b450e0\"><code>54346fa</code></a>\nRevert &quot;Reimplement idna on top of ICU4X&quot; (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/946\">#946</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/dcfbed3e90b4bbbb70f121f802f1d9b25adb8f89\"><code>dcfbed3</code></a>\nUpdate idna to 1.0.1 (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/945\">#945</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/467ef63969f477ee44b7456bb450fba95af25780\"><code>467ef63</code></a>\nfix panic on <code>xn--55555577</code> (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/940\">#940</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.1...v2.5.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=url&package-manager=cargo&previous-version=2.5.1&new-version=2.5.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-24T16:05:24Z",
          "tree_id": "5c35a9b6c875c5e06fabeffd5769474850f61149",
          "url": "https://github.com/hasura/ndc-postgres/commit/a4bf455f53e0a9b6fcad2d9eb0f7d9b3dd7f1b76"
        },
        "date": 1719245588404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.030135,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.43424225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.526271197975948,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.868963921087552,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2744909205250344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.605837,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.13913559999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.12893140079459,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4020403709986127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27931956543664604,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.059253,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.16381984999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.370205994828915,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.318826854586959,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36049668471406554,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.455998,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.15971644999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.4856279014017,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.18452731510466,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3444174782588853,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.4253545,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.71235509999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.750982684272127,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.701464051410671,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3354906948634717,
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
          "id": "6b1494b3ccdf02f73cbaf61f3d7a91f5ffc1d26f",
          "message": "chore(deps): Bump uuid from 1.8.0 to 1.9.0 (#508)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.8.0 to 1.9.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.9.0</h2>\n<h2><code>Uuid::now_v7()</code> is guaranteed to be monotonic</h2>\n<p>Before this release, <code>Uuid::now_v7()</code> would only use the\nmillisecond-precision timestamp for ordering. It now also uses a global\n42-bit counter that's re-initialized each millisecond so that the\nfollowing will always pass:</p>\n<pre lang=\"rust\"><code>let a = Uuid::now_v7();\nlet b = Uuid::now_v7();\n<p>assert!(a &lt; b);\n</code></pre></p>\n<h2>What's Changed</h2>\n<ul>\n<li>Add a get_node_id method for v1 and v6 UUIDs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/748\">uuid-rs/uuid#748</a></li>\n<li>Update atomic and zerocopy to latest by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/750\">uuid-rs/uuid#750</a></li>\n<li>Add repository field to uuid-macro-internal crate by <a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>\nin <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/752\">uuid-rs/uuid#752</a></li>\n<li>update docs to updated RFC (from 4122 to 9562) by <a\nhref=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/753\">uuid-rs/uuid#753</a></li>\n<li>Support counters in v7 UUIDs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/755\">uuid-rs/uuid#755</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/752\">uuid-rs/uuid#752</a></li>\n<li><a href=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/753\">uuid-rs/uuid#753</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0\">https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4a129e728174a340ac2772f3cc6310ba77d1969f\"><code>4a129e7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/760\">#760</a> from\nuuid-rs/cargo/1.9.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6bfee6ba82ad8e7a0155f3161157dc3ea3a5d552\"><code>6bfee6b</code></a>\nprepare for 1.9.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/62b7145d95913642298d5a954314ea28a199fa78\"><code>62b7145</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/759\">#759</a> from\nuuid-rs/chore/v7-counter-cleanup</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/62e968c92b464c81a73b6002ab66a32c4bdad9ad\"><code>62e968c</code></a>\nclean up new Timestamp APIs</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/49319a7ff766dc7c7638c0226294beebd45f6762\"><code>49319a7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/758\">#758</a> from\nuuid-rs/chore/test-overflow</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/47b9130ada093391db900b03e53f716310ae1ca0\"><code>47b9130</code></a>\nensure v7 methods don't overflow on max values</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/0c561e3443191065b724e8f8eb7b116f08d4e181\"><code>0c561e3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/757\">#757</a> from\nuuid-rs/ci/more-miri</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/252770be2f824e2cb4a2f68cb5980e0b7bd4b6cc\"><code>252770b</code></a>\nexpand miri tests to cover all features</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e62647f7623f8663f806ec69d8264fbfb836a6e3\"><code>e62647f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/755\">#755</a> from\nuuid-rs/feat/v7-counter</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/c270b3d66ae809517663ffeb38d56e004c517f7f\"><code>c270b3d</code></a>\nimprove testing for contexts</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.8.0&new-version=1.9.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-06-24T16:15:33Z",
          "tree_id": "ca355161c11c55a68273cf87c03fe4637bd65dd1",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b1494b3ccdf02f73cbaf61f3d7a91f5ffc1d26f"
        },
        "date": 1719246415069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.652556,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.875157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.660639739183837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.757331271271182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28555384360876634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.432685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.84008199999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.39830484557325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4991789052003597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24227370556290587,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.222776,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.98433600000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.84523551877784,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.727150145010654,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39303796918900413,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.9533735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.85798449999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.557884217815378,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.178456070994859,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33988333477478144,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.00862,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.60449369999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.34064020113681,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.327072845399449,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31331935327537364,
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
          "id": "703bc9311fb8683e9ca75faa00f8075cbd1e6ff8",
          "message": "Mutations: improve the error on wrong structure for checks (#510)\n\n### What\n\nWe improve the error message on receiving an unexpected structure for\nchecks in experimental mutations.\n\n### How\n\nInstead of \"Argument not found\" we say \"Unexpected Structure\".",
          "timestamp": "2024-06-25T12:32:15Z",
          "tree_id": "548c1acc64fe9cc1bb4563ba21871f2f1818f68d",
          "url": "https://github.com/hasura/ndc-postgres/commit/703bc9311fb8683e9ca75faa00f8075cbd1e6ff8"
        },
        "date": 1719319132663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.285550999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.94931269999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.281090585062477,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.637845760663206,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2921351198802931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.583264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.52872115,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 44.13267474574279,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.295362054389166,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21873825756036774,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.883946,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.44812479999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.707795646988085,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0740511468873954,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3517707448792771,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.961864500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.50516474999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.093381573720627,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.40626888810495,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33142439386837713,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.988808500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.5062135,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.522291292988868,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.418089318225981,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27499120230126634,
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
          "id": "c9bf0d43a58ce4746b628273560a8bc633697cec",
          "message": "refactor: split ndc-spec schema generation (#512)\n\n### What\n\nI'm about to add version 2 of the auto-generated mutations, and I'd like\nto split the schema module so that each mutation version is in their own\nmodule. This refactor makes it easier to do so.\n\nNo code was harmed in the process.\n\n### How\n\nWe take `schema.rs`, take the helpers functions and put them in\n`schema/helpers.rs`, take each mutation version and put it in its own\n`schema/mutation/<version>.rs` module, take the mutation to procedure\ncode and put it in `schema/mutation/mod.rs` and the rest put in\n`schema/mod.rs`.",
          "timestamp": "2024-06-27T13:04:59Z",
          "tree_id": "cdfa940816b2b0d25b3ee1b3d3efb48e155c9993",
          "url": "https://github.com/hasura/ndc-postgres/commit/c9bf0d43a58ce4746b628273560a8bc633697cec"
        },
        "date": 1719494045853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.505653000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.32031234999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.713832564591534,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.353648341272944,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3027314922818789,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.3078455,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.2554803,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.276022975730456,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6492979734891406,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28211043538424796,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.469074500000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.92103335,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.375302150874344,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.763320824887348,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38578222243714266,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.037716,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.4235287,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.391558710182817,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.611317012328836,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31348625961725807,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.880816499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.11812194999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.07348707942027,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.949380183152659,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29700606103552835,
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
          "id": "4bfdad02239a418949ae3b16d0313880c3e48f46",
          "message": "Introduce v2 of auto-generated mutations (#513)\n\n### What\n\nv2 of auto-generated mutations introduces point delete, insert and\nupdate point mutations that include permission arguments.\n\n### Interface and Design\n\n* We generate delete, insert and update procedures for each table.\n\n* A single insert procedure is generated per table of the form:\n  ```graphql\n  v2_insert_<table>(\n      objects: [<object>],\n      post_check: <boolexpr>\n  )\n  ```\nIt allows us to insert multiple objects and include a post check for\npermissions.\n\n* A delete procedure is generated per table X unique constraint of the\nform:\n  ```graphql\n  v2_delete_<table>_by_<column_and_...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      pre_check: <boolexpr>\n  )\n  ```\nIt allows us to delete a single row using the uniqueness constraint, and\ncontains a boolexpr for permissions.\n\n* An update procedure is generated per table X unique constraint of the\nform:\n  ```graphql\n  v2_update_<table>_by_<column_and_...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      update_columns: { <column>: { _set: <value> }, ... },\n      pre_check: <boolexpr>,\n      post_check: <boolexpr>\n  )\n  ```\nIt allows us to update a single row using the uniqueness constraint by\nupdating the relevant columns,\n  and contains a pre check and post check for permissions.\n\n* Mutations using uniqueness constraints use the naming schema\n`by_column_and_column_and_column` instead of the db constraint name,\n  because the former is far more helpful.\n* If generating a mutation encounters an internal error, we skip that\nparticular mutation and trace a warning instead of throwing\n  an error so the connector can start at any situation.\n* Naming collisions between the unique constraints and the\nupdate_columns / pre_check / post_check is avoided by prefixing argument\n  names of the columns of a unique constraint with `key_`.\n\n\n### How\n\n- We replace the current `experimental` version of mutations almost word\nfor word (the only different is the names of the procedures, prefixing\n`v2` instead of `experimental`) to a new directory `v2`.\n- We add a new mutations version: `v2`.\n- We replace the `experimental` version of ndc-spec schema generation as\nwell.\n- We fix the tests to use v2 instead.\n- experimental version is also removed from configuration version3\ncompletely.",
          "timestamp": "2024-06-28T11:35:45Z",
          "tree_id": "889b5492040593c27e624a54116bb78435d4a2fa",
          "url": "https://github.com/hasura/ndc-postgres/commit/4bfdad02239a418949ae3b16d0313880c3e48f46"
        },
        "date": 1719575144395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.0745415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.27416669999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.28684109997587,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6184672902254,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29180801283611396,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.7491485,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.07770304999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.35149728946969,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4903331584682888,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23813381075187776,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6485825,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.35116494999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.19953318211069,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.44688062199468,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3686338415837987,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.364162500000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.9908252,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.633213172432885,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.943368952913783,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.356771895143543,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.1589075,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.19998195000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.484721103166734,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.530724603665547,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3288730214590146,
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
          "id": "931efdd7f18d773d34788efb77a7210ffca16e97",
          "message": "chore(deps): Bump clap from 4.5.7 to 4.5.8 (#515)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.7 to 4.5.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.8</h2>\n<h2>[4.5.8] - 2024-06-28</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Reduce extra flushes</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.8] - 2024-06-28</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Reduce extra flushes</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.7...v4.5.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.7&new-version=4.5.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-01T13:38:19Z",
          "tree_id": "86ef91269bba027c0937be041d4f1aeaf9600bcb",
          "url": "https://github.com/hasura/ndc-postgres/commit/931efdd7f18d773d34788efb77a7210ffca16e97"
        },
        "date": 1719841736307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.0344525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.08223439999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.486868157744146,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.465871394029877,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28691076170092794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.140268,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.27387219999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.85227604422905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7480232188182043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2956290026286476,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.307791,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.85089979999985,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.310974464844445,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.333465987999435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35384893897126823,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.427756,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.82988740000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.058756216957637,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.129832027095976,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3230468519884272,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.9543195,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.37817100000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.74967121797554,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.062700058810513,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31584229860609514,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}