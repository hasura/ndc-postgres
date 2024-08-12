window.BENCHMARK_DATA = {
  "lastUpdate": 1723474432420,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
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
          "id": "93fec4b25770defd925d56a86e2ce1e2e13c57de",
          "message": "chore(deps): Bump serde_json from 1.0.117 to 1.0.119 (#517)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.117 to\n1.0.119.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.119</h2>\n<ul>\n<li>Add <code>serde_json::Map::shift_insert</code> (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1149\">#1149</a>,\nthanks <a\nhref=\"https://github.com/joshka\"><code>@​joshka</code></a>)</li>\n</ul>\n<h2>v1.0.118</h2>\n<ul>\n<li>Implement Hash for serde_json::Value (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1127\">#1127</a>,\nthanks <a\nhref=\"https://github.com/edwardycl\"><code>@​edwardycl</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b48b9a3a0c09952579e98c8940fe0d1ee4aae588\"><code>b48b9a3</code></a>\nRelease 1.0.119</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8878cd7c042a5f94ae4ee9889cbcbd12cc5ce334\"><code>8878cd7</code></a>\nMake shift_insert available for inlining like other Map methods</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/352b7abf007cf3b9b063b01e0b1e8f6af62a4e39\"><code>352b7ab</code></a>\nDocument the cfg required for Map::shift_insert to exist</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c17e63f6eff6cb40594beb1bddd4562c4cc81442\"><code>c17e63f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1149\">#1149</a>\nfrom joshka/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/309ef6b8870e47622a283061cbda3f5514bfaf0d\"><code>309ef6b</code></a>\nAdd Map::shift_insert()</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a9e089a2ce245bc223b56fbb6c525e2fe7b1f0ef\"><code>a9e089a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1146\">#1146</a>\nfrom haouvw/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a83fe96ae2a202925f1caa7abc51991f321d7c22\"><code>a83fe96</code></a>\nchore: remove repeat words</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c4f24f3be29a3d096d3ac7b1d5594777a613ec0d\"><code>c4f24f3</code></a>\nRelease 1.0.118</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/51d94ebdc07127de22fb655bdcf6a01d119492d5\"><code>51d94eb</code></a>\nCombine Map's Hash into one impl</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5e7bedc0a0e19ecda1c15a412ab7c69569f4aa84\"><code>5e7bedc</code></a>\nTouch up PR 1127</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.117...v1.0.119\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.117&new-version=1.0.119)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-01T13:38:23Z",
          "tree_id": "110ce3462a952e96e7e34b181f3ba5dfc8a7cebe",
          "url": "https://github.com/hasura/ndc-postgres/commit/93fec4b25770defd925d56a86e2ce1e2e13c57de"
        },
        "date": 1719841804317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.340837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.738071500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.30719648309397,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.722186289418506,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2703666938476879,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.108223,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.360142,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.50518755083148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3034679424338407,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24898696869576645,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.855302,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.35487959999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.482427506344568,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.495205372288428,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3607721448015483,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.847152,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.42427829999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.778600518121007,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.9842140420907555,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30937436951388764,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.934689500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.88535135,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.863068360552813,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.109993539328883,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29104782790775346,
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
          "id": "797bc3ca039d9360b9d82204ac2a7ea92d9a216e",
          "message": "Fix schema generation for insert and update input objects (#514)\n\n### What\n\nFor the input objects of mutations (`objects`, `update_columns`),\ncolumns that have defaults should be marked as nullable, and columns\nthat are generated should not be listed (this one worked for insert but\nnot update).\n\n### How\n\n1. Moved the schema gen helpers that are only relevant for mutations\ninto the mutation directory\n2. Moved the part that handles adding or not adding generated columns\nout side of insert handling, and use it in both insert and update\n3. Pattern match on the column info and specify the type according to\nthe rules in `What`.",
          "timestamp": "2024-07-02T07:45:33Z",
          "tree_id": "73dcd80227476b1f8f89b884c5f03e4b17fa5a66",
          "url": "https://github.com/hasura/ndc-postgres/commit/797bc3ca039d9360b9d82204ac2a7ea92d9a216e"
        },
        "date": 1719906975029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.612591,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.58060209999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.985484807623028,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.805505869938514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30934432406778334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.337437,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.25717099999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.22448154072937,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9539879966284275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2975690753422109,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.129138,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.91250079999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.250920905958193,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.334701805099339,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.30139944669902846,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.504067,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.4892702,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.005567812167584,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.003629434356029,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3258816145288642,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.574466,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.59798839999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.047106149789375,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.211441263776695,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2898119501184043,
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
          "id": "295b68cdc6f1dccc7363e6dfd2ed9ed42e89b1fd",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.0.0 to 2.0.1 (#507)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.0.0 to 2.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/70\">hoverkraft-tech/compose-action#70</a></li>\n<li>chore(deps): bump docker-compose from 0.24.7 to 0.24.8 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/69\">hoverkraft-tech/compose-action#69</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.15.0 to 2.15.1 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/71\">hoverkraft-tech/compose-action#71</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.15.1 to 2.16.0 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/72\">hoverkraft-tech/compose-action#72</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 4.10.2 to 5.0.1 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/73\">hoverkraft-tech/compose-action#73</a></li>\n<li>fix: remove console log by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/76\">hoverkraft-tech/compose-action#76</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1\">https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/e5813a5909aca4ae36058edae58f6e52b9c971f8\"><code>e5813a5</code></a>\nfix: remove console.log</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ca9b62241b0f045dab8b4af196315a52b5c72f8e\"><code>ca9b622</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/bb5c53776ebfed5ccbf5def9a9498693d7c99b98\"><code>bb5c537</code></a>\nchore(deps-dev): bump eslint-plugin-jsonc</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/e040f967047ff1bd58154fbcc1c5bb3d8386d811\"><code>e040f96</code></a>\nchore(deps-dev): bump eslint-plugin-jsonc</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/5f3dfc411782207692ea983b5212264d7e188462\"><code>5f3dfc4</code></a>\nchore(deps): bump docker-compose from 0.24.7 to 0.24.8</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/c64d9d66265941a229eb01d8b8fea3e5f4740cd0\"><code>c64d9d6</code></a>\nchore(deps): bump the github-actions-dependencies group with 2\nupdates</li>\n<li>See full diff in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.0.0&new-version=2.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-04T06:14:00Z",
          "tree_id": "a21a08ac874e812e55085f760832c34532c2701f",
          "url": "https://github.com/hasura/ndc-postgres/commit/295b68cdc6f1dccc7363e6dfd2ed9ed42e89b1fd"
        },
        "date": 1720074021015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.675114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.179024399999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.82215963531448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6650800485738575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2955405341045736,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.8766555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.75630894999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.68021793791731,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4709512406912069,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21940270597809375,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6444185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.507265,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.085754986151834,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.200846989740327,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3866857698372956,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.206436499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.30120685,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.72097503318555,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.472224194538075,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29597669246706,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.706868,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.643973,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.23733321264251,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.045333209556468,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32093236443267914,
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
          "id": "aa0100d66ec2f72e887a5c0378aa3e60f840ea61",
          "message": "Implement native query builder in the CLI plugin (#511)\n\n### What\n\nTo improve the DX of native queries, we want a CLI interface with which\nwe can point the CLI at a SQL(ish - a native query) file and generate\nthe stanzas for V3 metadata. This PR sort of does it.\n\n### Design\n\nIntroduce the following subcommands:\n\n```\nCommands on Native Operations\n\nUsage: ndc-postgres-cli native-operation <COMMAND>\n\nCommands:\n  list    List the existing Native Operations\n  create  Create a new Native Operation from a SQL file\n  delete  Delete an existing Native Operation from the configuration\n  help    Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help  Print help\n```\n\n#### Create\n\n```\nCreate a new Native Operation from a SQL file\n\nUsage: ndc-postgres-cli native-operation create [OPTIONS] --operation-path <OPERATION_PATH> --kind <KIND>\n\nOptions:\n      --operation-path <OPERATION_PATH>\n          Relative path to the SQL file inside the connector configuration directory\n      --kind <KIND>\n          Operation kind [possible values: query, mutation]\n      --override\n          Override the Native Operation definition if it exists\n  -h, --help\n          Print help\n```\n\n#### Delete\n\n```\nDelete an existing Native Operation from the configuration\n\nUsage: ndc-postgres-cli native-operation delete --name <NAME> --kind <KIND>\n\nOptions:\n      --name <NAME>  The name of the Native Operation\n      --kind <KIND>  Operation kind [possible values: query, mutation]\n  -h, --help         Print help\n```\n\n#### List\n\n```\nList the existing Native Operations\n\nUsage: ndc-postgres-cli native-operation list\n\nOptions:\n  -h, --help  Print help\n```\n\n### How\n\nThe user supplies a file containing SQL(ish - a native operation) code,\nand specifies the operation kind, and we use the sqlx `describe` method\nto fetch information about the operation. Specifically, whether it\ncompiles or not, and what is the error if not, and what are the oids of\nthe types of the arguments and returning columns.\n\nFrom this information, we construct a NativeQueryInfo and add it to the\nconfiguration, then update it to fetch information about types we might\nnot have tracked in the configuration yet.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>\nCo-authored-by: Philip Lykke Carlsen <plcplc@gmail.com>",
          "timestamp": "2024-07-04T09:10:08Z",
          "tree_id": "3a57cb519ac2eff7fb38e15757b97068e7f14052",
          "url": "https://github.com/hasura/ndc-postgres/commit/aa0100d66ec2f72e887a5c0378aa3e60f840ea61"
        },
        "date": 1720084604235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.075505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.41764739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.956056336288553,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.731800982834356,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2911712447193134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.212992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.26305514085494,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3516826153198949,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25219362501852555,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.048905,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.9369548,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.337382437658437,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.03322930635034,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37856984688031475,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.650742,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.9177929,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.65683192643714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.96294141321626,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2773275332495409,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.903547,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.07115789999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.488736646786958,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.763645582387191,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3292174406810326,
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
          "distinct": false,
          "id": "d051424734667ca37fd7578e8a5b74c8e2631104",
          "message": "native operation cli delete command should write to file (#519)\n\n### What\n\nThe delete command did not write the change to file, this fixes it.\n\n### How\n\nWrite the configuration file after deleting.",
          "timestamp": "2024-07-04T10:57:29Z",
          "tree_id": "16046b7099b8298e1c62c10015ceff7710174164",
          "url": "https://github.com/hasura/ndc-postgres/commit/d051424734667ca37fd7578e8a5b74c8e2631104"
        },
        "date": 1720091019533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.511252,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.79451219999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.465972678884945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7556385152525635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2955149041399462,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.713668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.512098,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.20629121258718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6172079175602718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24351045075397945,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.1733995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.54029604999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.386516841037547,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.458327589416498,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3220972928259831,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.341508,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.12950509999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.876523053496847,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9633293586884335,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30438787215554935,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.256401,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.81985839999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.58012445422541,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.639697914850096,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3592678055670894,
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
          "id": "45131122d3f153cfee3df1e1b8077dd21a37e386",
          "message": "release `v0.8.0` (#518)\n\nUpdate changelog and cargo package version.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-07-04T11:09:37Z",
          "tree_id": "579a72af1b6a66c5a20cc6b53f13b66f8deeba64",
          "url": "https://github.com/hasura/ndc-postgres/commit/45131122d3f153cfee3df1e1b8077dd21a37e386"
        },
        "date": 1720091835586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.860696,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.035456,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.569053816282208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.899100708013689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2882251431426209,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.140199,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.8525515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.80582991197664,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3422407076797995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.260776332317389,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.608417,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.42257979999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.856129023575143,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.670832656065549,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3907681421576455,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.738346,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.74348969999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.88517514924338,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.849635829456886,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29834315771490966,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.322970999999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.59738179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.23930404446353,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.977369471639367,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3082882823864465,
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
          "id": "eb5563fe5c7a34fe98615324098cc36fe79199b9",
          "message": "Delete v3 and v4 configuration tests in favor of ndc-snapshot-metadata tests (#527)\n\n### What\n\nThe v3 and v4 configuration tests are a bit redundant because we have\nthe ndc-snapshot-metadata tests. This PR removes them, introduces a\nsnapshot for the current v4-config, and deletes the schema.json in each\ndir because they are also not used in favor of `static/schema.json`.",
          "timestamp": "2024-07-09T10:54:53Z",
          "tree_id": "68614b2299cdad4a52cb78660fecaf3a029aef2f",
          "url": "https://github.com/hasura/ndc-postgres/commit/eb5563fe5c7a34fe98615324098cc36fe79199b9"
        },
        "date": 1720523116639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.000170500000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.76135324999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.143640639990618,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.489060086222995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2707937854642184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.058936,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.36302015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.28193770877637,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4642104792568063,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23715719065403626,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.869497,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.71881374999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.63546457332716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.35040004348716,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4186345509217232,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.016065,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 77.61015,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.735434199596114,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.037411313629605,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2794322436329772,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.912565,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.13006,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.371613258298908,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.61285625194132,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24823132623413377,
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
          "id": "3941422714f274b6364446b229241b0724003627",
          "message": "config v5 with native operations rename (#522)\n\n### What\n\nWe introduce ndc-postgres configuration version \"v5\".\n\nThis version changes two things:\n\n1. Renames the field `nativeQueries` to `nativeOperations`, and instead\nof containing native queries and native mutations together with a flag\non each marking if it is mutation or not (`isProcedure`), we nest the in\ndifferent objects, so we have:\n\n   ```\n   nativeOperations:\n     queries:\n     mutations:\n   ```\n\n2. We nest `scalarTypes` and `compositeTypes` under one field, `types`:\n\n   ```\n   types:\n     scalar:\n     composite:\n   ```\n\n\n### How\n\nMight be useful to read as commits.\n\nWe first copy paste v4 to v5, then create types for `Types` and\n`NativeOperations` which nest the other information, then we fix all the\nrelevant things: ndc-spec schema, cli handling, upgrading from older\nconfigs, conversion to runtime config, etc.\n\nThen we fix the tests, including introducing new configs and changing\nthe paths the the configs.\n\nThen we get rid of the older configurations in the `static/<db>`\ndirectories, as they are not longer used for anything.",
          "timestamp": "2024-07-10T08:30:52Z",
          "tree_id": "366f01e2bdfa31c212b133ee29a3cb414f080989",
          "url": "https://github.com/hasura/ndc-postgres/commit/3941422714f274b6364446b229241b0724003627"
        },
        "date": 1720600886531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.179267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.06499999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.015952678352672,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.963504999513955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27903286835349866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.659002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.9789591,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.972237002557456,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9241261274999388,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28158471748541314,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.862283,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.08874719999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.1576773487591,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.445712737761646,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.370626659583315,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.601896499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.38843384999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.983082429898662,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.048783650393322,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.350670536686084,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.8765635,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.62912075,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.01640121662157,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9904455212430925,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2936444959472766,
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
          "id": "df317cf38256b086b6471ff293c3ef7f40874b10",
          "message": "Release `0.8.1` (#528)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate changelogs and versions for `0.8.1`.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-07-10T09:58:33Z",
          "tree_id": "d14075d90f42b02ba1cfddeceaae6591bccdd52c",
          "url": "https://github.com/hasura/ndc-postgres/commit/df317cf38256b086b6471ff293c3ef7f40874b10"
        },
        "date": 1720605895429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.5132075,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.14568009999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.11758701991895,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.359025888898312,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28860848185350835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.78486000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.0642886,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.116940953761436,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.456279561385351,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24802693332390927,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.259228,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.3934987,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.031717804990112,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.905505274163868,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35388145717329866,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.6605345,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.47733354999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.26333498933717,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9459338708458525,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28344971561186555,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.3816205,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.38915214999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.170580351338184,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.407199547542316,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2923976476996414,
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
          "id": "70420943bfc35f712fb894c07604d4883503da27",
          "message": "Revert \"Release `0.8.1`\" (#530)\n\nReverts hasura/ndc-postgres#528\n\nGoing to wait for `0.9.0` for these changes.",
          "timestamp": "2024-07-10T10:32:02Z",
          "tree_id": "366f01e2bdfa31c212b133ee29a3cb414f080989",
          "url": "https://github.com/hasura/ndc-postgres/commit/70420943bfc35f712fb894c07604d4883503da27"
        },
        "date": 1720607898958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.927439,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.726653649999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.211609890398226,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.444029881537464,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2707484054029719,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.0260085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.78310805,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.445908845468225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3857191589148243,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24168611381854085,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.005195,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.56646379999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.81341724176103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.594680832072221,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3955253434218758,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.3681825,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.40438499999992,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.32736824156591,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.73968815079936,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32251629665384046,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.605684,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.17850514999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.833626679517558,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.177619859216183,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27353041777037373,
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
          "id": "cf475ec2d449fd8acc4fa8eda420a8b4338dde7e",
          "message": "chore(deps): Bump serde_json from 1.0.119 to 1.0.120 (#524)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.119 to\n1.0.120.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.120</h2>\n<ul>\n<li>Correctly specify required version of <code>indexmap</code>\ndependency (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1152\">#1152</a>,\nthanks <a\nhref=\"https://github.com/cforycki\"><code>@​cforycki</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/bcedc3d96bcc33184f16d63eab397295e2193350\"><code>bcedc3d</code></a>\nRelease 1.0.120</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/962c0fbbecc7dc8559cfeb019c2611737512f937\"><code>962c0fb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1152\">#1152</a>\nfrom cforycki/fix/index-map-minimal-version</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/3480feda7b572d33992544061a8e0fbf8610a803\"><code>3480fed</code></a>\nfix: indexmap minimal version with Map::shift_insert()</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.119...v1.0.120\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.119&new-version=1.0.120)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-10T13:57:10Z",
          "tree_id": "38eb09614376284ffe0cce23b1c815753433c41d",
          "url": "https://github.com/hasura/ndc-postgres/commit/cf475ec2d449fd8acc4fa8eda420a8b4338dde7e"
        },
        "date": 1720620279773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.366627,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.1928744,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.154872255388657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.785622328679342,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29535922931644026,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.416625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.33881275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.20351341144769,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4651452198668125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2108541109304328,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.657386,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.1088365,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.682473883889134,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.803003239923992,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32534991126812884,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.604635,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.2413854,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.69766009923265,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.370564213671528,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33600944268837946,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.745821,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.83129389999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.54013495238554,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.268992860729391,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30670141549096436,
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
          "id": "2e9b0ee27d449121cb7144e36ceaf4ff189457ef",
          "message": "chore(deps): Bump serde from 1.0.203 to 1.0.204 (#526)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.203 to\n1.0.204.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.204</h2>\n<ul>\n<li>Apply #[diagnostic::on_unimplemented] attribute on Rust 1.78+ to\nsuggest adding serde derive or enabling a &quot;serde&quot; feature flag\nin dependencies (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2767\">#2767</a>,\nthanks <a\nhref=\"https://github.com/weiznich\"><code>@​weiznich</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/18dcae0a77632fb4767a420c550cb41991f750b8\"><code>18dcae0</code></a>\nRelease 1.0.204</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/58c307f9cc28a19d73a0e2869f6addf9a8a329f9\"><code>58c307f</code></a>\nAlphabetize list of rustc-check-cfg</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8cc4809414a83de0d41eac38ecfa1040e088b61e\"><code>8cc4809</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2769\">#2769</a>\nfrom dtolnay/onunimpl</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1179158defc5351467cbd2c340b7e1498391bce4\"><code>1179158</code></a>\nUpdate ui test with diagnostic::on_unimplemented from PR 2767</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/91aa40e749620f31bf7db01c772e672f023136b5\"><code>91aa40e</code></a>\nAdd ui test of unsatisfied serde trait bound</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/595019e979ebed5452b550bf901abcab2cf4e945\"><code>595019e</code></a>\nCut test_suite from workspace members in old toolchain CI jobs</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b0d7917f88978eda264f8fbac13b46ece35f5348\"><code>b0d7917</code></a>\nPull in trybuild 'following types implement trait' fix</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8e6637a1e44c30dffd37322a7107d434cd751722\"><code>8e6637a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2767\">#2767</a>\nfrom weiznich/feature/diagnostic_on_unimplemented</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/694fe0595358aa0857120a99041d99975b1a8a70\"><code>694fe05</code></a>\nUse the <code>#[diagnostic::on_unimplemented]</code> attribute when\npossible</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/f3dfd2a2375d9caf15a18ec657dde51a32caf6ed\"><code>f3dfd2a</code></a>\nSuppress dead code warning in test of unit struct remote derive</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.203...v1.0.204\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.203&new-version=1.0.204)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-10T13:57:26Z",
          "tree_id": "0fb92be38e7aed67aec8a0da69031f89cd31c755",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e9b0ee27d449121cb7144e36ceaf4ff189457ef"
        },
        "date": 1720620563108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.2078215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.47758524999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.230275120562723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.777192370172703,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2746512885708226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.8538905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.388928,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.87080439532478,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5234439687546057,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2449087008087172,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.134853,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.09942854999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.508288740070356,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.642911120513169,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35031875867233786,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.148894999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.81531895000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.778477559715018,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.838187481330319,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3129905212684939,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.76093,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.65537850000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.544969385923565,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.908812219627251,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37191659104814195,
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
          "id": "b6ede41ea68202063d4594a319a1befeec561d9b",
          "message": "Use short SHA in multitenant PR names (#529)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nSmall quality of life change.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-07-10T16:46:20Z",
          "tree_id": "1b0aa8ca82542c15e10bcfc52aa5353b6acdd31f",
          "url": "https://github.com/hasura/ndc-postgres/commit/b6ede41ea68202063d4594a319a1befeec561d9b"
        },
        "date": 1720630384351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.9662375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.4141534,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.823495811667437,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.860810833756512,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2619919939587273,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.71287849999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.93065309999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.852006758899286,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.439326476144025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2320864015854816,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.7734215,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.56675714999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.730402164996317,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.082766244171385,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40218599862874405,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.904913,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.9423185,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.254914800147215,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.138577425480978,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3145351524902863,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.756462,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.0628763,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.442430741240134,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6657808125365285,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29239549136420473,
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
          "id": "58ec61fd49299d32f73d90b468772ee94ced389e",
          "message": "cli readme update (#521)\n\n### What\n\nUpdate the ndc-postgres-cli readme with the new commands.",
          "timestamp": "2024-07-15T07:44:27Z",
          "tree_id": "76cf39cd8657a4f0adebd9ea1df74f0182b54bf9",
          "url": "https://github.com/hasura/ndc-postgres/commit/58ec61fd49299d32f73d90b468772ee94ced389e"
        },
        "date": 1721029967102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.060235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.734131000000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.687076292406005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.885509907320042,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.316952977414657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.707936,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.29356819999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.216572760349,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4719333435609272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27837064641531106,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.807398,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.99342234999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.64499589475623,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.800817235028656,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37398221913971164,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.993415999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.92502545,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.076366849203865,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.631313260474883,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30603724357870155,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.759686,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.8787555,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.555021871754192,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.990379796979461,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31246097645816046,
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
          "id": "fe0adbe144bd46084e69c78637bcf023cc320041",
          "message": "update to ndc-sdk-rs-0.2.1 (#520)\n\n### What\n\nWe want to update ndc-sdk-rs to 0.2.1, and it introduces several\nchanges:\n\n1. Error messages https://github.com/hasura/ndc-sdk-rs/pull/15\n2. Update ndc-spec to 0.1.5, which introduces breaking changes by adding\nnewtype wrappers around string types\n\n### How\n\n1. For errors, follow\nhttps://github.com/hasura/ndc-sdk-rs/pull/15#issuecomment-2206231760\n2. For newtypes, go into type hell and fix the bugs by trying to put the\nndc-models newtypes in the data structures, as they are more\ndescriptive.",
          "timestamp": "2024-07-15T10:42:43Z",
          "tree_id": "51c261daaed3717d842426f89c64761157b33580",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe0adbe144bd46084e69c78637bcf023cc320041"
        },
        "date": 1721040673172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.037688,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.189015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.97628084233065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.5940908495881825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3005373160526903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.2172285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.9564707,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.572443347845635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6767924662957512,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26515858895063427,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.957277000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.4141405,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.04169019709504,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.952243512715764,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41339542603133983,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.033808,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 79.41515249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.261667593358244,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.63483608857484,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.339109124510511,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.761967,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.41284839999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.350328998736725,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.279541302666249,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30954239620058654,
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
          "id": "46959d7d2c59e83bc439b5e231ba35042f2bd83c",
          "message": "chore(deps): Bump hyper from 0.14.29 to 0.14.30 (#531)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.29 to\n0.14.30.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.30</h2>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> reject final chunked if missing 0 (<a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\">4a51b2af</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.30/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.30 (2024-07-09)</h3>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> reject final chunked if missing 0 (<a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\">4a51b2af</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/618a18580ae14776c05ab6789a82b5c43281fe8b\"><code>618a185</code></a>\nv0.14.30</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\"><code>4a51b2a</code></a>\nfix(http1): reject final chunked if missing 0</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/c38437d377426e01100e07dc1e735f9c382fc6f5\"><code>c38437d</code></a>\nchore(dependencies): bump minimum tokio (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3664\">#3664</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.29...v0.14.30\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.29&new-version=0.14.30)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:18Z",
          "tree_id": "3baf6cebce77951a0647aa868ab3775bb606d9e9",
          "url": "https://github.com/hasura/ndc-postgres/commit/46959d7d2c59e83bc439b5e231ba35042f2bd83c"
        },
        "date": 1721059763853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.213353,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.50055529999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.053790783701903,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7919993974049575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2895641089861544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.8072885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.24868155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.02031731344993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5951794915650908,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2595595084346505,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.973884,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.10414739999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.69928031525711,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.056910043904363,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35070531030369173,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.531378,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.55439139999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.8739000391156,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.380664267092261,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.358840651674763,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.075877,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.43710150000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.667101557063862,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.702937614708656,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.324745855050762,
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
          "id": "9530cb15615957960b5353d29dec72bd71b08c48",
          "message": "chore(deps): Bump bytes from 1.6.0 to 1.6.1 (#533)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.6.0 to 1.6.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes 1.6.1</h2>\n<p>This release fixes a bug where <code>Bytes::is_unique</code> returns\nincorrect values when the <code>Bytes</code> originates from a shared\n<code>BytesMut</code>. (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.6.1 (July 13, 2024)</h1>\n<p>This release fixes a bug where <code>Bytes::is_unique</code> returns\nincorrect values when\nthe <code>Bytes</code> originates from a shared <code>BytesMut</code>.\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/fd13c7dcdb840653bf81294d141da77d3f1f9e1f\"><code>fd13c7d</code></a>\nchore: prepare bytes v1.6.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/720\">#720</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/6b4b0eda2980f09df18380c80f8ae6109ae70d83\"><code>6b4b0ed</code></a>\nFix <code>Bytes::is_unique</code> when created from shared\n<code>BytesMut</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.6.0...v1.6.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.6.0&new-version=1.6.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:23Z",
          "tree_id": "f3822959ae190c6d588287d76304d2aab879168a",
          "url": "https://github.com/hasura/ndc-postgres/commit/9530cb15615957960b5353d29dec72bd71b08c48"
        },
        "date": 1721059947174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.117079,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.95330779999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.71155172804533,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.2713781339312415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2988516162329511,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.707656,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.7246515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.56686392897082,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5046544734763359,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2608023110500261,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.620958,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.1118884,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.57724984999726,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.283751853743134,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38506761541741996,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.606171,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.24787419999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.94216440130455,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.94022778448327,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31676894529402333,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.865981000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.48131995000003,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.297631613820474,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.805977642844418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3060292687651533,
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
          "id": "f59640cf1541fe0e19ec145301bdd04bc204e199",
          "message": "chore(deps): Bump uuid from 1.9.1 to 1.10.0 (#535)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.9.1 to 1.10.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.10.0</h2>\n<h2>Deprecations</h2>\n<p>This release deprecates and renames the following functions:</p>\n<ul>\n<li><code>Builder::from_rfc4122_timestamp</code> -&gt;\n<code>Builder::from_gregorian_timestamp</code></li>\n<li><code>Builder::from_sorted_rfc4122_timestamp</code> -&gt;\n<code>Builder::from_sorted_gregorian_timestamp</code></li>\n<li><code>Timestamp::from_rfc4122</code> -&gt;\n<code>Timestamp::from_gregorian</code></li>\n<li><code>Timestamp::to_rfc4122</code> -&gt;\n<code>Timestamp::to_gregorian</code></li>\n</ul>\n<h2>What's Changed</h2>\n<ul>\n<li>Use const identifier in uuid macro by <a\nhref=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/764\">uuid-rs/uuid#764</a></li>\n<li>Rename most methods referring to RFC4122 by <a\nhref=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> / <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/765\">uuid-rs/uuid#765</a></li>\n<li>prepare for 1.10.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/766\">uuid-rs/uuid#766</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/764\">uuid-rs/uuid#764</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0\">https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4b4c590ae323b683a7ba80f05c83d3002ddc2fc5\"><code>4b4c590</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/766\">#766</a> from\nuuid-rs/cargo/1.10.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/68eff326408ea269253aa0ba8f6cb3ac4099f894\"><code>68eff32</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/765\">#765</a> from\nuuid-rs/chore/time-fn-deprecations</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/3d5384da4bfb2f35ad4426440d285e4a13c8c011\"><code>3d5384d</code></a>\nupdate docs and deprecation messages for timestamp fns</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/de50f2091f05a973b4e8ca2f7eddd03459b1b680\"><code>de50f20</code></a>\nrenaming rfc4122 functions</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4a8841792a8bb7007d23a54fa866adc5cec79425\"><code>4a88417</code></a>\nprepare for 1.10.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/66b4fcef14862bc5d8d45acb9f6683a37fa5ecb4\"><code>66b4fce</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/764\">#764</a> from\nVrajs16/main</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/8896e26c421a8b9a7a935acf83d291df40256de9\"><code>8896e26</code></a>\nUse expr instead of ident</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/09973d6aff62b61ec35f577a757148007deb5f05\"><code>09973d6</code></a>\nAdded changes</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6edf3e8cd59351589622daf1f2634870d90896e3\"><code>6edf3e8</code></a>\nUse const identifer in uuid macro</li>\n<li>See full diff in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.9.1&new-version=1.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:26Z",
          "tree_id": "7c294ca63cc43a1da3f7a97c51d618d155699eec",
          "url": "https://github.com/hasura/ndc-postgres/commit/f59640cf1541fe0e19ec145301bdd04bc204e199"
        },
        "date": 1721060608260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.337473000000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.18675259999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.666190384532925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.92823895493806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31392484449284697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.809951,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.0819796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.64853655188121,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4383660656725255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24924106312288496,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.969763,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.22158799999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.534295762925822,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.559770375389419,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35865337280147347,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.313250499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.58239830000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.998562746934457,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.664008907328441,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3061221142479441,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.605191000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.87900855000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.406357592931162,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.909507517012319,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3866644110744411,
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
          "id": "0ec6f62de4b74d263a4b6d2e4d9f2b28ba283247",
          "message": "Update readme (#536)\n\n### What\n\nThere's a new template in town. Let's update the readme.",
          "timestamp": "2024-07-16T06:57:25Z",
          "tree_id": "5f8f050db201d308b7a3ff11538381dff0f8e6cf",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ec6f62de4b74d263a4b6d2e4d9f2b28ba283247"
        },
        "date": 1721113510455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.6899615,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.77301875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.480783941545113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.203265689556424,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3025842014892987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.265135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.18845859999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.597756301507545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5771361451285912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25435488704718595,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.139206,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.59976110000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.048048143724007,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.027669017277521,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3625223797499872,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.985313,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.87907885,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.282605049332968,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9780418204369496,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28085732272072444,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.2274625,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.82758549999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.89640979018794,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6401177303889085,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3054829051574113,
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
          "id": "effd73c41b9be821d5e6681392873e9fe9231bb3",
          "message": "Warn when the configuration is deprecated (#537)\n\n### What\n\nWe'd like to mark configuration version 3 and 4 as deprecated.\nWe'll mention this in the docs, and also trace a warning when starting\nthe connector with an older configuration version.\n\n```\n{\"timestamp\":\"2024-07-16T13:02:04.857565Z\",\"level\":\"WARN\",\"fields\":{\"message\":\"Warning: ndc-postgres configuration version '3' is deprecated.\\nConsider upgrading to the latest version:\\nhttps://hasura.io/docs/3.0/connectors/postgresql/configuration-reference/#upgrading-the-configuration-format-version\"},\"target\":\"ndc_postgres::connector\"}\n```\n\n### How\n\ntrace a warning pointing at how to upgrade the configuration.",
          "timestamp": "2024-07-17T08:31:56Z",
          "tree_id": "7af6bdf9d635f6eea242a3cb1382673f611305be",
          "url": "https://github.com/hasura/ndc-postgres/commit/effd73c41b9be821d5e6681392873e9fe9231bb3"
        },
        "date": 1721205545208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.629592,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.000472800000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.230473974873053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.95634512011085,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30940622844772153,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.712335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.2299704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.39259164463493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5605557426668781,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2698388208623367,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.787822500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.68264445,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.73377360210357,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.859310974128977,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35536080131760256,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.646004000000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.08823059999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.514549868465462,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5661501706484025,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3414261185591184,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.0626685,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.38486754999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.063692273431815,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.16284136702107,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2728523844455337,
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
          "id": "36e913672c5913a95ee54af52150d952bdcb256d",
          "message": "chore(deps): Bump thiserror from 1.0.61 to 1.0.62 (#534)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.61 to\n1.0.62.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.62</h2>\n<ul>\n<li>Support referring to nested tuple struct fields inside\n<code>#[error(&quot;…&quot;, …)]</code> attribute (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/309\">#309</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0bf6e3dd781409b62cbcf0816ffa1bb970d24833\"><code>0bf6e3d</code></a>\nRelease 1.0.62</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/497793283934d9e514d903a14278af6babbfbb65\"><code>4977932</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/310\">#310</a>\nfrom dtolnay/nestedtuple</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/40a7779b1793f2dce5f85abe8c03486cdb5eb640\"><code>40a7779</code></a>\nSupport .0.0 nested tuple index</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f1ca210cc4772f198af91886e3849dac68114f97\"><code>f1ca210</code></a>\nAdd regression test for issue 309</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/479744ec288f9183b8849f013dcee226ac6588ee\"><code>479744e</code></a>\nNo need for dead code if struct fields are public</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/4db08b10a39cfd189a36a88dee0fad578ac11cbe\"><code>4db08b1</code></a>\nIgnore warning on unused struct in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f2824ae379ac2edee1fd687b9e56f18c048086cd\"><code>f2824ae</code></a>\nFill in ignore reasons in all #[ignore] attributes</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.61...1.0.62\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.61&new-version=1.0.62)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-17T08:32:04Z",
          "tree_id": "8261d26918db9dccec1b373fa4799ba46b4110f4",
          "url": "https://github.com/hasura/ndc-postgres/commit/36e913672c5913a95ee54af52150d952bdcb256d"
        },
        "date": 1721205639586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.588128,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.521395,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.047682480052533,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.441148486157022,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2612573111627685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.444968,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.2646322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.484181062666686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4594587475557645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2333935188144185,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.987032,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.00503814999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.904957835085966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.811037078362105,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38792573286147625,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.854181,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.17975,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.781865175444977,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.119552057166491,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3090187538082006,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.785082,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.72718209999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.307796636355505,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.520372546232487,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32415140228782324,
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
          "id": "4af168d5638545f0e5c9e864ad4b4b28b7e860eb",
          "message": "Release ndc-postgres v1.0.0 (#538)\n\n### What\n\nbump the version.",
          "timestamp": "2024-07-17T12:40:46Z",
          "tree_id": "b4354a45aed29922c9f4e1a54376d26e64d41132",
          "url": "https://github.com/hasura/ndc-postgres/commit/4af168d5638545f0e5c9e864ad4b4b28b7e860eb"
        },
        "date": 1721220466231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.300324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.693215749999965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.79495271018394,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.9684055526111806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31721128822283506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.133322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.1573418,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.61398821086206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7885486999626181,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27667773376387617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.511628,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.865799,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.292432816787258,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.336671646349604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37137836391128726,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.7904165,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.76878665000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.669020657632363,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.814290729740666,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3393437202634603,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.682998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.6157972,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.06824340822103,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.078975018592573,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28769051080004554,
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
          "id": "95eebcb38f28f21f67706d17f01787758351955a",
          "message": "Remove the aurora tests (#545)\n\n### What\n\nWe've come to the conclusion that this works absolutely fine and it's\nbasically postgres, just far away, so we don't need to invest resources\nin testing it anymore.\n\n### How\n\nRemove it all.",
          "timestamp": "2024-07-23T09:03:28Z",
          "tree_id": "57d0063087c9305cea560785bc5199bbe829c2c5",
          "url": "https://github.com/hasura/ndc-postgres/commit/95eebcb38f28f21f67706d17f01787758351955a"
        },
        "date": 1721726072782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.02094,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.24160214999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.61292906660032,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.121056717925729,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.281335904878789,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.363596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.80225564999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.29516367304248,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5496660683318737,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27631976035129313,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.729894,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.60431910000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.466381023868966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.944772058346533,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36489199479797163,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.8047675,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.7051652,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.60290172811467,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.797634796849497,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3216277030548592,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.65415,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.71295219999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.757510804507014,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.415428258853218,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.342884885783635,
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
          "id": "095ecbf5563bf617fb40a865a56cee340afa8cfe",
          "message": "bugfix: add neq to comparison operators map (#540)\n\n### What\n\nSome databases do not include `!=` in their catalog's operators list. We\ninclude `<>` as well so that `_neq` can be generated for these cases.\n\n### How\n\n1. Add it to the list",
          "timestamp": "2024-07-23T09:32:08Z",
          "tree_id": "00599f18644336f66eedc90bd3f4ae446c58921c",
          "url": "https://github.com/hasura/ndc-postgres/commit/095ecbf5563bf617fb40a865a56cee340afa8cfe"
        },
        "date": 1721727717032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.364788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.97843954999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.731615770877838,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.975151598939,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30586389032280387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.424252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.98056999999987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.007498606320496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6599987038026853,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27382842076671515,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.239307,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.64143719999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.498091473530227,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.13346714136377,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36194257481035796,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.86392,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.2151954,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.407184610506505,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.521109231613622,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3416741762542068,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.429532,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.5632116,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.1106455459023,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.075489710378271,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32166885702297193,
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
          "id": "2908c1cf65d89b3a5385b7f1cf07edfeebf97e91",
          "message": "chore(deps): Bump thiserror from 1.0.62 to 1.0.63 (#542)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.62 to\n1.0.63.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.63</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/915c75e8a3b679588e6eac03dccbba5d38c764a8\"><code>915c75e</code></a>\nRelease 1.0.63</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/3d5ec25464d2d71f09f480666e240d3446a44a19\"><code>3d5ec25</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/312\">#312</a>\nfrom dtolnay/backtracedoc</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/de8a1e54d420514250d9d4081d41723192cf0dfa\"><code>de8a1e5</code></a>\nUpdate documentation of #[from] and #[backtrace] attributes</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.62...1.0.63\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.62&new-version=1.0.63)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-07-23T09:41:43Z",
          "tree_id": "b21769ff8558363b63de0df4b911948ccb907072",
          "url": "https://github.com/hasura/ndc-postgres/commit/2908c1cf65d89b3a5385b7f1cf07edfeebf97e91"
        },
        "date": 1721728221208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.784643,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.83151619999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.176784814715372,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.249453949979113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29562278575783585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.29176899999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.96624714999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.802319503845716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5073294645605415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24872526903920525,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.458861999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.56485769999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.728029283269283,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.253344343731055,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32296626134310613,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.2387585,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.28348225,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.50751719622025,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.419731545881838,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3381599955814122,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.99092,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.389929,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.848493171236303,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.204730789661806,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29895322655078915,
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
          "id": "60c5d20aa87759fc1694945d0f68591c9a8bff74",
          "message": "chore(deps): Bump tokio from 1.38.0 to 1.38.1 (#544)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.38.0 to 1.38.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.38.1</h2>\n<h1>1.38.1 (July 16th, 2024)</h1>\n<p>This release fixes the bug identified as (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6682\">#6682</a>),\nwhich caused timers not\nto fire when they should.</p>\n<h3>Fixed</h3>\n<ul>\n<li>time: update <code>wake_up</code> while holding all the locks of\nsharded time wheels (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6682\">#6682</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6682\">tokio-rs/tokio#6682</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6683\">tokio-rs/tokio#6683</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/14b9f7115728b77c82db8d21b6d768d16dc472a6\"><code>14b9f71</code></a>\nchore: release Tokio v1.38.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6688\">#6688</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/24344dfe4b69931bfe9fe686d2424c9f626dc75b\"><code>24344df</code></a>\ntime: fix race condition leading to lost timers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.38.0...tokio-1.38.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.38.0&new-version=1.38.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-07-23T09:41:51Z",
          "tree_id": "bed4a2b2c11c88f1aa501f756a25b774a1870d36",
          "url": "https://github.com/hasura/ndc-postgres/commit/60c5d20aa87759fc1694945d0f68591c9a8bff74"
        },
        "date": 1721728391139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.993597,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.162509899999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.967944879786863,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.56444734865504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28565724005675774,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.74068199999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.42598645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.235086580170396,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7337434175878954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2872976523457038,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.465481499999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.84913014999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.000014108068818,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.449132014986347,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4102654309790635,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.2756835,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.81103194999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.31067828090607,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.99981784203008,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39959251316037964,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.709732,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.454762,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.1262912027064,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.483707599520287,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.33289408186977737,
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
          "id": "50cf42702aa60a97729dc23783e62d1b700d17b6",
          "message": "Support network_supeq and network_subeq by default (#541)\n\n### What\n\nThis PR lists network_supeq and network_subeq in the default allowed\nprefix functions, to complete support for types such as CIDR.\n\n### How\n\nAdd them to the default list, add tests, and regenerate configs.",
          "timestamp": "2024-07-23T11:34:12Z",
          "tree_id": "b0c2c5466ffcd8d06520b570d56b13263bce7f59",
          "url": "https://github.com/hasura/ndc-postgres/commit/50cf42702aa60a97729dc23783e62d1b700d17b6"
        },
        "date": 1721734912231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.741255,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.7938555,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.538197281621478,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.844621087894652,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2851355153285468,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.4125005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.07022995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.5167615282747,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6468550400242634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27156956973937235,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.155564999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.55549649999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.555824603756186,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.446935758121882,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38341607228420305,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.349742,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.09169870000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.76196649135353,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.267709426777994,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31715699578340123,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.889548000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.51341649999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.35019187177281,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.785367180133786,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31512875219672976,
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
          "distinct": false,
          "id": "24bff79759676c796f44166a9ac095dbbf2023e7",
          "message": "Remove tokio-postgres. (#546)\n\n### What\n\nWe just used it for parsing URLs. \n\n### How\n\nWe can use `Url` instead.",
          "timestamp": "2024-07-23T11:54:08Z",
          "tree_id": "c7c595cff5dd51ffa796e1f30cde24e62af22642",
          "url": "https://github.com/hasura/ndc-postgres/commit/24bff79759676c796f44166a9ac095dbbf2023e7"
        },
        "date": 1721736459342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.713986,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.363565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.19488087324476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.5260647682476645,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26169727344820837,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.252926,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.4279754,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.75669845206707,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3672742444687813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24850424201138174,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.749405,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.21493435,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.253421791780152,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.700258528219965,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38690266445020943,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.049424,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.19798960000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.272678332123146,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.4778036871805895,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.27596218711218456,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.039149,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.19061300000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.053519376747126,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.201828617984383,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34962062378890923,
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
          "id": "8388cf9d43db3a07867164ee562b24f2487f9827",
          "message": "Avoid using references for number types. (#547)\n\n### What\n\nNumbers implement `Copy`, so we don't need to use a reference.\n\n### How\n\nThis removes the `&` from the functions accepting numbers and modifies\ncalling code accordingly.",
          "timestamp": "2024-07-23T12:33:32Z",
          "tree_id": "77eb2b459efe4731dfae3f0f20f7a723a0d9d89e",
          "url": "https://github.com/hasura/ndc-postgres/commit/8388cf9d43db3a07867164ee562b24f2487f9827"
        },
        "date": 1721738602255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.87971,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.434045999999974,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.372177502844025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.150237101015769,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29200691542319723,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.010593,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.6811718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.84613676675677,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3981334568144064,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25957453531190583,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.509617,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.40689354999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.552937342313584,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.599145133219672,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45875788635341763,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.67276,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.01571790000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.532971099160488,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9478227650126065,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3383282731300157,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.128284,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.8035448,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.22746774570803,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.111996284439208,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2887461346145362,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12475069+rakeshkky@users.noreply.github.com",
            "name": "Rakesh Emmadi",
            "username": "rakeshkky"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e2fd65143411400ec612a20100e7ed3a7ed8f298",
          "message": "Release ndc-postgres v1.0.1 (#548)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nBump the ndc-postgres `v1.0.0` -> `v1.0.1`\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->",
          "timestamp": "2024-07-24T12:44:03Z",
          "tree_id": "3b5096de44cb7c6f4fe64cf7e21b2f7c9b0e8305",
          "url": "https://github.com/hasura/ndc-postgres/commit/e2fd65143411400ec612a20100e7ed3a7ed8f298"
        },
        "date": 1721825590082,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 32.833895,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.73338395,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.80142145920391,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.101998708265338,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3179387152063259,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 80.33377999999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 117.713493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.16490564403508,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7678423064949484,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29262460196834933,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.017803,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.06656575,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.89265090549749,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.89673321337952,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4477395196168683,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.667859500000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.19564319999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.3964034462008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.034568716108858,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3757201736065689,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.060603,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 78.24157259999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.131427903901496,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.391115984454601,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35113240271499013,
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
          "id": "aff8ec59f75dbf2d2c74cec18e8453814327a942",
          "message": "Expose `ndc_sdk` (#554)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nAllows us to talk about the right underlying models when importing\n`ndc-postgres` as a library.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\nExport `ndc_sdk as sdk` in `lib.rs` for `ndc-postgres` connector.\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-07-29T13:54:10Z",
          "tree_id": "55e79cba850db9fef66a593c66b0f747669510ca",
          "url": "https://github.com/hasura/ndc-postgres/commit/aff8ec59f75dbf2d2c74cec18e8453814327a942"
        },
        "date": 1722261765050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.745542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.280454,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.964384005018209,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.402868565404949,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2828249434532848,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.85387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.9950361,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.18688234648494,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4646097738800066,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22316351853990657,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.402045,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.95104464999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.667312594897837,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.772130038724526,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4063238822449362,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.26487,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.484985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.307796600765467,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.530616108114106,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3031843444074145,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.028922,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.0799637,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.890467509408182,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.7956043732038225,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28558118159155477,
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
          "id": "2273f155acc68241dc05ff8bc2a8fa0d6332ac53",
          "message": "chore(deps): Bump tokio from 1.38.1 to 1.39.2 (#550)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.38.1 to 1.39.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.39.2</h2>\n<h1>1.39.2 (July 27th, 2024)</h1>\n<p>This release fixes a regression where the <code>select!</code> macro\nstopped accepting expressions that make use of temporary lifetime\nextension. (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6722\">#6722</a>)</p>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6722\">#6722</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6722\">tokio-rs/tokio#6722</a></p>\n<h2>Tokio v1.39.1</h2>\n<h1>1.39.1 (July 23rd, 2024)</h1>\n<p>This release reverts &quot;time: avoid traversing entries in the time\nwheel twice&quot; because it contains a bug. (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6715\">#6715</a>)</p>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6715\">#6715</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6715\">tokio-rs/tokio#6715</a></p>\n<h2>Tokio v1.39.0</h2>\n<h1>1.39.0 (July 23rd, 2024)</h1>\n<ul>\n<li>This release bumps the MSRV to 1.70. (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6645\">#6645</a>)</li>\n<li>This release upgrades to mio v1. (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6635\">#6635</a>)</li>\n<li>This release upgrades to windows-sys v0.52 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6154\">#6154</a>)</li>\n</ul>\n<h3>Added</h3>\n<ul>\n<li>io: implement <code>AsyncSeek</code> for <code>Empty</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6663\">#6663</a>)</li>\n<li>metrics: stabilize <code>num_alive_tasks</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6619\">#6619</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6667\">#6667</a>)</li>\n<li>process: add <code>Command::as_std_mut</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6608\">#6608</a>)</li>\n<li>sync: add <code>watch::Sender::same_channel</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6637\">#6637</a>)</li>\n<li>sync: add\n<code>{Receiver,UnboundedReceiver}::{sender_strong_count,sender_weak_count}</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6661\">#6661</a>)</li>\n<li>sync: implement <code>Default</code> for <code>watch::Sender</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6626\">#6626</a>)</li>\n<li>task: implement <code>Clone</code> for <code>AbortHandle</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6621\">#6621</a>)</li>\n<li>task: stabilize <code>consume_budget</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6622\">#6622</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>io: improve panic message of <code>ReadBuf::put_slice()</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6629\">#6629</a>)</li>\n<li>io: read during write in <code>copy_bidirectional</code> and\n<code>copy</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6532\">#6532</a>)</li>\n<li>runtime: replace <code>num_cpus</code> with\n<code>available_parallelism</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6709\">#6709</a>)</li>\n<li>task: avoid stack overflow when passing large future to\n<code>block_on</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6692\">#6692</a>)</li>\n<li>time: avoid traversing entries in the time wheel twice (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6584\">#6584</a>)</li>\n<li>time: support <code>IntoFuture</code> with <code>timeout</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6666\">#6666</a>)</li>\n<li>macros: support <code>IntoFuture</code> with <code>join!</code> and\n<code>select!</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6710\">#6710</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>docs: fix docsrs builds with the fs feature enabled (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6585\">#6585</a>)</li>\n<li>io: only use short-read optimization on known-to-be-compatible\nplatforms (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6668\">#6668</a>)</li>\n<li>time: fix overflow panic when using large durations with\n<code>Interval</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6612\">#6612</a>)</li>\n</ul>\n<h3>Added (unstable)</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/f602eae49988dbad2a11fd83e6b3fbd4f094713c\"><code>f602eae</code></a>\nchore: prepare Tokio v1.39.2 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6730\">#6730</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/438def79579a7e285beb5f0d93b1eb6a9f8062b3\"><code>438def7</code></a>\nmacros: allow temporary lifetime extension in select (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6722\">#6722</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ee8d4d1b0546c67198af3cd053d6b7b8b4fd26c3\"><code>ee8d4d1</code></a>\nchore: fix ci failures (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6725\">#6725</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/32970527633bb72fc4f01d02523484a9376ac26a\"><code>3297052</code></a>\nci: test Quinn in CI (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6719\">#6719</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/f8fe0ffb23c2279708cb5dada7c88defdae60845\"><code>f8fe0ff</code></a>\nchore: prepare Tokio v1.39.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6716\">#6716</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/47210a8e6eeb82b51aa778074fdc4d757b953b8c\"><code>47210a8</code></a>\ntime: revert &quot;avoid traversing entries in the time wheel\ntwice&quot; (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6715\">#6715</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/29545d90370d925a7264ff8636013ee6bf1760e6\"><code>29545d9</code></a>\nruntime: ignore many_oneshot_futures test for alt scheduler (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6712\">#6712</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/48e35c11d924ffa3a009b89fbb6d36e57b835da4\"><code>48e35c1</code></a>\nchore: release Tokio v1.39.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6711\">#6711</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/dd1d37167d1f4008ca5d3df500e86826112a8cad\"><code>dd1d371</code></a>\nmacros: accept <code>IntoFuture</code> args for macros (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6710\">#6710</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/6a1a7b15912d1a86ab4c0d09e1a8f0a221dbfeee\"><code>6a1a7b1</code></a>\nchore: prepare tokio-macros v2.4.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6707\">#6707</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.38.1...tokio-1.39.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.38.1&new-version=1.39.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-30T07:21:49Z",
          "tree_id": "3078268e2c34c0e7b33d5f8d270127da5121c8ae",
          "url": "https://github.com/hasura/ndc-postgres/commit/2273f155acc68241dc05ff8bc2a8fa0d6332ac53"
        },
        "date": 1722324596870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.163514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.90038579999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.634367743557371,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.19278504065071,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29030311055127234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.07701850000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.39691414999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.31411259190602,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4328844854009404,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2567304142968532,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.900876,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.43094179999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.439614549705155,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.630835719251543,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36901686726447064,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.982844,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.25192240000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.683377915212073,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.393435745683444,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33445717511259854,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.436647,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.49955725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.04771113180338,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.108738239731391,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32091187362054246,
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
          "id": "04b7553f2439e55daa62cd55192b40ed41a8ffc4",
          "message": "chore(deps): Bump serde_json from 1.0.120 to 1.0.121 (#553)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.120 to\n1.0.121.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.121</h2>\n<ul>\n<li>Optimize position search in error path (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1160\">#1160</a>,\nthanks <a\nhref=\"https://github.com/purplesyringa\"><code>@​purplesyringa</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/eca2658a22cb39952783cb6914eb18242659f66a\"><code>eca2658</code></a>\nRelease 1.0.121</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b0d678cfb473386830d559b6ab255d9e21ba39c5\"><code>b0d678c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1160\">#1160</a>\nfrom iex-rs/efficient-position</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b1edc7d13f72880fd0ac569403a409e5f7961d5f\"><code>b1edc7d</code></a>\nOptimize position search in error path</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/40dd7f5e862436f02471fe076f3486c55e472bc2\"><code>40dd7f5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1159\">#1159</a>\nfrom iex-rs/fix-recursion</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6a306e6ee9f47f3b37088217ffe3ebe9bbb54e5a\"><code>6a306e6</code></a>\nMove call to tri! out of check_recursion!</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/3f1c6de4af28b1f6c5100da323f2bffaf7c2083f\"><code>3f1c6de</code></a>\nIgnore byte_char_slices clippy lint in test</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/3fd6f5f49dc1c732d9b1d7dfece4f02c0d440d39\"><code>3fd6f5f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1153\">#1153</a>\nfrom dpathakj/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/fcb5e83e44abe0f9c27c755a240a6ad56312c090\"><code>fcb5e83</code></a>\nCorrect documentation URL for Value's Index impl.</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.120...v1.0.121\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.120&new-version=1.0.121)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-30T07:22:46Z",
          "tree_id": "e1c9ad9b30743f35400207d6106cc42da2bd2362",
          "url": "https://github.com/hasura/ndc-postgres/commit/04b7553f2439e55daa62cd55192b40ed41a8ffc4"
        },
        "date": 1722324821390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.593826999999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.05617829999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.715771676742119,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.521021456051201,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29146946897915343,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.926313,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.77753069999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.65885843063979,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.667132494523294,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24833539862094217,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.131235,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.93329579999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.28919391426779,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.70279452841639,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3716271686143533,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.50058,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.56809179999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.552607126572173,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.1331636458149,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2933160440905177,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.75842299999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.6365126,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.834335761585685,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.519249104224912,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30133482453931043,
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
          "id": "fe6d8c160893cb15ca2b36c16b60df37a723c953",
          "message": "Upgrade ndc-sdk-rs to v0.2.2 (#555)\n\n### What\n\nhttps://github.com/hasura/ndc-sdk-rs/releases/tag/v0.2.2\n\n> What's Changed\n>   - listen on all ipv4 and ipv6 interfaces by default",
          "timestamp": "2024-07-30T07:56:26Z",
          "tree_id": "d6b5d281df24737096d2f9d43222c23a554ce876",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe6d8c160893cb15ca2b36c16b60df37a723c953"
        },
        "date": 1722326865377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.493448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.77690074999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.161630782527965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.958984187165186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3077238778590133,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.53114550000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.21238214999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.7526390664237,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6297231450463627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2691836434839185,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.244452,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.64925199999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.215262347044195,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.067513862909188,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3602182483263809,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.2173645,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.68385855,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.826559000368068,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.228718583755381,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3301421057065578,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.885736,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.27006179999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.409250691155876,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.053093328191757,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2794770514140847,
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
          "id": "4d7bb0888560c5aa2c54e2f5376b56531253268b",
          "message": "(refactor): rename translate functions and split variables from values (#549)\n\n### What\n\nWanted to streamline the naming of the translate functions which we can\ndo because we use qualified module names.\n\n1. Instead of something like `sorting::translate_order_by`, just use\n`sorting::translate`.\n2. Variables selection get their own module instead of living in\n`values`",
          "timestamp": "2024-07-30T15:06:35Z",
          "tree_id": "c53ef573ea41b88450df84a462f02bf74ab5db0d",
          "url": "https://github.com/hasura/ndc-postgres/commit/4d7bb0888560c5aa2c54e2f5376b56531253268b"
        },
        "date": 1722352499549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.287941,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.99467379999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.92912900554701,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.940954801115497,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27088465533354267,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.2774005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.63344249999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.08030561216138,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5411879886553095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26349753827016037,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.875368,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.6842054,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.62860989172763,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.272874647522681,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.34848122983443236,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.655784,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.40779259999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.133538729895,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.38359462716442,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3187715104317386,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.237391,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.8434091,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.06411357272971,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.667577052824683,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2801679024072915,
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
          "id": "57d37ba2e9bdc8bda8fa25167624a3b3fcabe383",
          "message": "new-version.sh script for new version PRs (#556)\n\n### What\n\nWe want to automate some of the release process for ndc-postgres by\nintroducing a new `scripts/new-version.sh` script that updates the cargo\npackage version and updates the changelog.\n\nRun with: `scripts/new-version.sh 1.0.2`, for example.\n\n### How\n\n1. A bash script to run everything\n2. A sed script to change the package version\n3. A Haskell script to manipulate the changelog to:\n   - Change the unreleased header to the version\n   - Insert a new unreleased template\n   - Fix the references at the bottom of the changelog",
          "timestamp": "2024-07-31T06:36:08Z",
          "tree_id": "69ff3b6ce2229a5c09ffd198bf3ce90858f322e7",
          "url": "https://github.com/hasura/ndc-postgres/commit/57d37ba2e9bdc8bda8fa25167624a3b3fcabe383"
        },
        "date": 1722408176246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.769205499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.332951599999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.74191891262569,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6307543563701685,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2915469572038765,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.472985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.18504055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.49575919075758,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.587336967954343,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27790934022747726,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.711012,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.05619075,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.844361957736766,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.68013084633472,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3343032112631844,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.5975815,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.14775105,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.730263565887917,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.254947116822812,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32499123392539253,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.6582225,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.44453975,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.28243970460056,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.190722088703282,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32417391525391276,
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
          "id": "55b19d4a7eef326552d94fa7a0e8d346a2b54c2f",
          "message": "Set event titles properly (#557)\n\nError events wouldn't always show up properly in e.g. jaeger. Now they\ndo, because we set the idiomatic event name instead of just event\nattributes.",
          "timestamp": "2024-08-05T08:10:45Z",
          "tree_id": "055b8c4291eb5895283af3daba36ee07387d6e9b",
          "url": "https://github.com/hasura/ndc-postgres/commit/55b19d4a7eef326552d94fa7a0e8d346a2b54c2f"
        },
        "date": 1722846095956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.960771,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.570283999999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.7369229677399,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.808574304565418,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28198855896204067,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.77148249999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.56658924999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.39144896780915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5212695437705221,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.240091762776036,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.414824,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.754573,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.61322589705787,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.456215361459922,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3791163822451528,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.467054,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.82951800000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.331804962978623,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7254188673562325,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31549898980030694,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.619981,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.3309588,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.604468044667033,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.686030208324073,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2698762351614393,
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
          "id": "1b1cdc23a32fa59e0ea89a3c0f2e342f7869de11",
          "message": "chore(deps): Bump bytes from 1.6.1 to 1.7.1 (#562)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.6.1 to 1.7.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes 1.7.1</h2>\n<h1>1.7.1 (August 1, 2024)</h1>\n<p>This release reverts the following change due to a regression:</p>\n<ul>\n<li>Reuse capacity when possible in <code>&lt;BytesMut as\nBuf&gt;::advance</code> impl (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/698\">#698</a>)</li>\n</ul>\n<p>The revert can be found at <a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/726\">#726</a>.</p>\n<h2>Bytes 1.7.0</h2>\n<h1>1.7.0 (July 31, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>Add conversion from <code>Bytes</code> to <code>BytesMut</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/695\">#695</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/710\">#710</a>)</li>\n<li>Add reclaim method without additional allocation (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/686\">#686</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Clarify how <code>BytesMut::zeroed</code> works (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/714\">#714</a>)</li>\n<li>Clarify the behavior of <code>Buf::chunk</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/717\">#717</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>Change length condition of <code>BytesMut::truncate</code></li>\n<li>Reuse capacity when possible in <code>&lt;BytesMut as\nBuf&gt;::advance</code> impl (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/698\">#698</a>)</li>\n<li>Improve <code>must_use</code> suggestion of\n<code>BytesMut::split</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/699\">#699</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/678\">#678</a>)</li>\n<li>Don't set <code>len</code> in <code>BytesMut::reserve</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/682\">#682</a>)</li>\n<li>Optimize <code>Bytes::copy_to_bytes</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/688\">#688</a>)</li>\n<li>Refactor <code>BytesMut::truncate</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/694\">#694</a>)</li>\n<li>Refactor <code>BytesMut::resize</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/696\">#696</a>)</li>\n<li>Reorder assertion in <code>Bytes::split_to</code>,\n<code>Bytes::split_off</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/689\">#689</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/693\">#693</a>)</li>\n<li>Use <code>offset_from</code> in more places (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/705\">#705</a>)</li>\n<li>Correct the wrong usage of <code>IntoIter</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/707\">#707</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.7.1 (August 1, 2024)</h1>\n<p>This release reverts the following change due to a regression:</p>\n<ul>\n<li>Reuse capacity when possible in <code>&lt;BytesMut as\nBuf&gt;::advance</code> impl (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/698\">#698</a>)</li>\n</ul>\n<p>The revert can be found at <a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/726\">#726</a>.</p>\n<h1>1.7.0 (July 31, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>Add conversion from <code>Bytes</code> to <code>BytesMut</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/695\">#695</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/710\">#710</a>)</li>\n<li>Add reclaim method without additional allocation (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/686\">#686</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Clarify how <code>BytesMut::zeroed</code> works (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/714\">#714</a>)</li>\n<li>Clarify the behavior of <code>Buf::chunk</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/717\">#717</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>Change length condition of <code>BytesMut::truncate</code></li>\n<li>Reuse capacity when possible in <code>&lt;BytesMut as\nBuf&gt;::advance</code> impl (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/698\">#698</a>)</li>\n<li>Improve <code>must_use</code> suggestion of\n<code>BytesMut::split</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/699\">#699</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/678\">#678</a>)</li>\n<li>Don't set <code>len</code> in <code>BytesMut::reserve</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/682\">#682</a>)</li>\n<li>Optimize <code>Bytes::copy_to_bytes</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/688\">#688</a>)</li>\n<li>Refactor <code>BytesMut::truncate</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/694\">#694</a>)</li>\n<li>Refactor <code>BytesMut::resize</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/696\">#696</a>)</li>\n<li>Reorder assertion in <code>Bytes::split_to</code>,\n<code>Bytes::split_off</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/689\">#689</a>,\n<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/693\">#693</a>)</li>\n<li>Use <code>offset_from</code> in more places (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/705\">#705</a>)</li>\n<li>Correct the wrong usage of <code>IntoIter</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/707\">#707</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/dc4fb3e8f45650500187f8cdbad5ac8ffdb7df0a\"><code>dc4fb3e</code></a>\nchore: prepare bytes v1.7.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/727\">#727</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/f488be48d07d899dc428c5cd7f5c11a95bf7716c\"><code>f488be4</code></a>\nRevert &quot;Reuse capacity when possible in &lt;BytesMut as\nBuf&gt;::advance impl&quot; (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/726\">#726</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/03fdde9dcfe69caf681ecaa1d97f8105a9c9a6c1\"><code>03fdde9</code></a>\nchore: prepare v1.7.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/724\">#724</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/f8c7b574c0ef0c3cb097d29a08e53b15b4e4a522\"><code>f8c7b57</code></a>\nMerge 'v1.6.1' into 'master' (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/721\">#721</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/9965a04b5684079bb614addd750340ffc165a9f5\"><code>9965a04</code></a>\nRemove unnecessary file (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/719\">#719</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/3443ca5a0be21cdb2424bd20d49746bd622ed195\"><code>3443ca5</code></a>\ndocs: clarify the behavior of <code>Buf::chunk</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/717\">#717</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/8cc940779fd6a489a2d7ca53fbbc44f84210083e\"><code>8cc9407</code></a>\nAllow reclaiming the current allocation (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/686\">#686</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/7a5154ba8b54970b7bb07c4902bc8a7981f4e57c\"><code>7a5154b</code></a>\nClarify how <code>BytesMut::zeroed</code> works and advantages to manual\nimpl (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/714\">#714</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/fa1daac3ae1dcb07dffe3a41a041dffd6edf177b\"><code>fa1daac</code></a>\nChange Bytes::make_mut to impl From&lt;Bytes&gt; for BytesMut (closes <a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/709\">#709</a>)\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/710\">#710</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/caf520ac7f2c466d26bd88eca33ddc53c408e17e\"><code>caf520a</code></a>\nFix iter tests to use the actual bytes IntoIter instead of std (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/707\">#707</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.6.1...v1.7.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.6.1&new-version=1.7.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-05T14:30:52Z",
          "tree_id": "96d99ce1d5587e7b90788030862e9365992e3049",
          "url": "https://github.com/hasura/ndc-postgres/commit/1b1cdc23a32fa59e0ea89a3c0f2e342f7869de11"
        },
        "date": 1722868711482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.057529,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.88190499999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.768301249123173,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.725664522347824,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29187668291666186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.106838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.4058291,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.859765320186426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5739761333026934,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26014479958750514,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.979855,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.46294669999993,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.143644939231663,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.833138715363532,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4039727674654595,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.862392,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.36806779999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.166541861001356,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.500688073786485,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.36339709112579766,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.392303,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.96268479999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.286781280927766,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.884061520680486,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32013775604248346,
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
          "id": "b2022b903ca329638d8b12b7caa38f404690f235",
          "message": "chore(deps): Bump serde_json from 1.0.121 to 1.0.122 (#559)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.121 to\n1.0.122.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.122</h2>\n<ul>\n<li>Support using <code>json!</code> in no-std crates (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1166\">#1166</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/54381d6fee21cb05439937a0f5f286177c21d3f6\"><code>54381d6</code></a>\nRelease 1.0.122</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/16fb6e0b853590ed065f2a1ce4450a71a433717b\"><code>16fb6e0</code></a>\nWork around buggy rust-analyzer behavior</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/49d7d6626f34d38f3bac5ccedffeaec169e02db1\"><code>49d7d66</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1166\">#1166</a>\nfrom dtolnay/allocvec</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6827c7b3c582a8fe30beb8ddb9e2446bfc391ea7\"><code>6827c7b</code></a>\nFix json! invocations when std prelude is not in scope</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/611b2a4fb671b19c3ef45fc5b6455f906888c89f\"><code>611b2a4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1165\">#1165</a>\nfrom serde-rs/jsonmac</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/7633cb7f0511d7e4962f5a378171cc1ea0a0820d\"><code>7633cb7</code></a>\nEliminate local_inner_macros in favor of non-ident macro paths</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.121...v1.0.122\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.121&new-version=1.0.122)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-05T14:31:51Z",
          "tree_id": "01f164662fbb90c9dded83c34db18ab4d5e9b991",
          "url": "https://github.com/hasura/ndc-postgres/commit/b2022b903ca329638d8b12b7caa38f404690f235"
        },
        "date": 1722868969451,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.008481,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.83629019999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.662525316825853,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.2308358400472805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3011590289605991,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.81522,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.0374132,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.80350546994384,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5393984999631272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26190769251394413,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.030983,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.177679,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.1674137659404,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.603421835768241,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42740533463438113,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.2802835,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.6677442,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.86614729486003,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.942385853675571,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3306914306832259,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.418906,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.8049094,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.90951698643235,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.336471522446203,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3028401937719177,
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
          "id": "f0b8df331e8ae402bf97de6d8bbacd2c1d41c598",
          "message": "chore(deps): Bump indexmap from 2.2.6 to 2.3.0 (#558)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.6 to\n2.3.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.3.0</h2>\n<ul>\n<li>Added trait <code>MutableEntryKey</code> for opt-in mutable access\nto map entry keys.</li>\n<li>Added method <code>MutableKeys::iter_mut2</code> for opt-in mutable\niteration of map\nkeys and values.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/22c0b4e0f324f398bb9c4a4f7c9ea9f41fb7eb56\"><code>22c0b4e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/335\">#335</a>\nfrom epage/mut</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/39f7cc097ac49ef4b47e99440644f11bc3d2b24c\"><code>39f7cc0</code></a>\nRelease 2.3.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/6049d518a04f92fb3e29392f929600de7b41f47f\"><code>6049d51</code></a>\nfeat(map): Add MutableKeys::iter_mut2</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/65c3c46e37f0f82893285d94b52347c7c64ca4ef\"><code>65c3c46</code></a>\nfeat(map): Add MutableEntryKey</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7f7d39f734af3e142653973e2887200319f81236\"><code>7f7d39f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/332\">#332</a>\nfrom waywardmonkeys/missing-indentation-in-doc-comment</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8222a59a857ee57d5f3cc616d9ba287d766d5661\"><code>8222a59</code></a>\nFix missing indentation in doc comment.</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/1a71dde63d6e83b796fad0212da8f94c66c8ace7\"><code>1a71dde</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/327\">#327</a>\nfrom waywardmonkeys/dep-update-dev-dep-itertools</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/ac2a8a5a403b8e0956ff765bac1fb0b2a1a70f2b\"><code>ac2a8a5</code></a>\ndeps(dev): Update <code>itertools</code></li>\n<li>See full diff in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.6...2.3.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.6&new-version=2.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-05T14:33:55Z",
          "tree_id": "b6d762b0e5804822aa1c733017f97fbc09922ae5",
          "url": "https://github.com/hasura/ndc-postgres/commit/f0b8df331e8ae402bf97de6d8bbacd2c1d41c598"
        },
        "date": 1722869145477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 32.579694,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 51.820077699999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 18.206205625750766,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.342582836671713,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3183625563577349,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.211398,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.0238279,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.33419298518786,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.613157135736735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28534507037632445,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.056401,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.885047,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.015695409029377,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.164086121890492,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3973564381872852,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.4683555,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.36630914999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.429108024758786,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.814803658446788,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3767457112958054,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.093678,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.11139800000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.780845233567433,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.2390315532373535,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34055653708698397,
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
          "id": "7e34812810944cdd942f7733c54ad6a511182914",
          "message": "Upgrade ndc-sdk to v0.3.0. (#563)\n\n### What\n\nThis upgrades the ndc-sdk dependency and fixes breaking changes.\n\n### How\n\n1. There's now just one error type.\n2. The health check is now a built-in readiness check.",
          "timestamp": "2024-08-08T12:21:04Z",
          "tree_id": "180f2aed9717d2929c5c37a15d3f3a2d246a35bc",
          "url": "https://github.com/hasura/ndc-postgres/commit/7e34812810944cdd942f7733c54ad6a511182914"
        },
        "date": 1723120080758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.5506705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.75899404999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.553601565587185,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.004511996786578,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25249629264868606,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.848115,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.154571,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.02344571225901,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4031086567825284,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2485420658361985,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.817957,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.8785948,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.24384373935757,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.18582119480941,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3304980983275872,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.719201,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.566331,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.4177723253996,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.004323732194511,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2928418031395074,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.590537,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.928118,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.950768916624813,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.72141767133909,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30281851810392085,
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
          "id": "853f2a75df9fd98d1d9f1bb3af1012a3cf8ca5fe",
          "message": "[Native Operations]: trim semicolon suffix (#566)\n\n### What\n\nThere are simple cases where we can handle native queries that end with\nsemicolon. This might help some users.\nhttps://hasurahq.slack.com/archives/C0329ERCSA1/p1723212643398509\n\n### How\n\nWhen parsing a native query,\n\n1. trim end\n2. strip_suffix(';'), or keep the trimmed version.",
          "timestamp": "2024-08-12T10:33:04Z",
          "tree_id": "29f01ae1c760ef605a6b9d0d47d93b7ab13ab6b5",
          "url": "https://github.com/hasura/ndc-postgres/commit/853f2a75df9fd98d1d9f1bb3af1012a3cf8ca5fe"
        },
        "date": 1723459361310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.811518,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.95541589999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.882575620903824,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.640153016772851,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29233628572759435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.62896,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.93326209999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.982025088144866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1910428860271907,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2175472132293768,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.986323,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.12236569999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.96057375816995,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.932089364312496,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4366909865562623,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.499559500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.67551624999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.52518133262267,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.683255102576982,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33882313326229074,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.908966,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.50166599999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.59062732463186,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.959456383343635,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3119881585768266,
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
          "id": "f5563d769c5e9e22aca0d5664c1a29cfc3dc0572",
          "message": "chore(deps): Bump serde from 1.0.204 to 1.0.206 (#567)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.204 to\n1.0.206.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.206</h2>\n<ul>\n<li>Improve support for <code>flatten</code> attribute inside of enums\n(<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2567\">#2567</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n</ul>\n<h2>v1.0.205</h2>\n<ul>\n<li>Use serialize_entry instead of serialize_key + serialize_value when\nserialize flattened newtype enum variants (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2785\">#2785</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n<li>Avoid triggering a collection_is_never_read lint in the\ndeserialization of enums containing flattened fields (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2791\">#2791</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/85c73ef8dea8966d88a03876e6f0dc9359e68cc9\"><code>85c73ef</code></a>\nRelease 1.0.206</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/5ba1796a7e639839d4e18c3ae23b9bb32b0700b5\"><code>5ba1796</code></a>\nResolve doc_markdown pedantic lint on regression test function</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/e52b7b380f88e0112c9f84e6258bdd34ad132352\"><code>e52b7b3</code></a>\nTouch up PR 2567</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/84c7419652161bf88f88eb26302b26debfff8a8c\"><code>84c7419</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2794\">#2794</a>\nfrom dtolnay/neverread</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/536221b1f93a5dcf97352c7d1e3b93a5a56bf747\"><code>536221b</code></a>\nTemporarily ignore collection_is_never_read on\nFlattenSkipDeserializing</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/fc55ac70d34221b38672b1583e496011fbae92aa\"><code>fc55ac7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2567\">#2567</a>\nfrom Mingun/fix-2565</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/2afe5b4ef9d0e89587ec564eadbc7583fd1f0673\"><code>2afe5b4</code></a>\nAdd regression test for issue <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2792\">#2792</a></li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b4ec2595c9dd8e380227043eba42ff85beb780c2\"><code>b4ec259</code></a>\nCorrectly process flatten fields in enum variants</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/c3ac7b675a38a73170879992976acb0009834ac0\"><code>c3ac7b6</code></a>\nAdd regression test for issue <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/1904\">#1904</a></li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/24614e44bff5466057e46c55394bac3ae20142c4\"><code>24614e4</code></a>\nAdd regression test for issue <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2565\">#2565</a></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.204...v1.0.206\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.204&new-version=1.0.206)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T13:59:48Z",
          "tree_id": "5bbd59f7fd06214184454cb77fb28dd8340b2de9",
          "url": "https://github.com/hasura/ndc-postgres/commit/f5563d769c5e9e22aca0d5664c1a29cfc3dc0572"
        },
        "date": 1723471901296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.194809,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.53237759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.08754101749949,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.88856178629343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27497125853143367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.536157,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.4864432,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.53499750801798,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4183022444686628,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2326515266509651,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.51796,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.1078902,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.29781687693597,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.203489924055596,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35033930198766133,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.574875,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.59412279999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.044397035574384,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.457127162357018,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3075799627337474,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.748002,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.19107239999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.537249712658795,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1126434445407405,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30438175447538834,
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
          "id": "8e759c0c6ed1951d6b2c3c4b2ec43d5d7acdbf01",
          "message": "chore(deps): Bump serde_json from 1.0.122 to 1.0.124 (#568)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.122 to\n1.0.124.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.124</h2>\n<ul>\n<li>Fix a bug in processing string escapes in big-endian architectures\n(<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1173\">#1173</a>,\nthanks <a\nhref=\"https://github.com/purplesyringa\"><code>@​purplesyringa</code></a>)</li>\n</ul>\n<h2>v1.0.123</h2>\n<ul>\n<li>Optimize string parsing by applying SIMD-within-a-register: 30.3%\nimprovement on <a\nhref=\"https://github.com/miloyip/nativejson-benchmark/blob/v1.0.0/data/twitter.json\">twitter.json</a>\nfrom 613 MB/s to 799 MB/s (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1161\">#1161</a>,\nthanks <a\nhref=\"https://github.com/purplesyringa\"><code>@​purplesyringa</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/cf771a0471dd797b6fead77e767f2f7943740c98\"><code>cf771a0</code></a>\nRelease 1.0.124</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8b314a77bf57ad8d6089536fea1b3c3b303cba92\"><code>8b314a7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1173\">#1173</a>\nfrom iex-rs/fix-big-endian</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8eba7863b126584f4b9a5b1d3cc4cbc0d0f59976\"><code>8eba786</code></a>\nFix skip_to_escape on BE architectures</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2cab07e68607ab0e11c3a8b0461a472c37886210\"><code>2cab07e</code></a>\nRelease 1.0.123</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/346189a524694b98b92ccccb07775868d34b144c\"><code>346189a</code></a>\nFix needless_borrow clippy lint in new control character test</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/859ead8e6d60f4eaed97f7ac2b18f879bec5afe5\"><code>859ead8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1161\">#1161</a>\nfrom iex-rs/vectorized-string-parsing</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/e43da5ee0e64819972f08254e8ce799796238791\"><code>e43da5e</code></a>\nImmediately bail-out on empty strings</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8389d8a11293616ce5a4358651aede271871248d\"><code>8389d8a</code></a>\nDon't run the slow algorithm from the beginning</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/1f0dcf791ab1756d7ad07c20889e50bd9a7887fb\"><code>1f0dcf7</code></a>\nAllow clippy::items_after_statements</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a95d6df9d08611c9a11ac6524903d693921b8eae\"><code>a95d6df</code></a>\nBig endian support</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.122...v1.0.124\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.122&new-version=1.0.124)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-12T13:59:52Z",
          "tree_id": "856e701d366e9f130a827ad5fec1fa8423488fc1",
          "url": "https://github.com/hasura/ndc-postgres/commit/8e759c0c6ed1951d6b2c3c4b2ec43d5d7acdbf01"
        },
        "date": 1723471970622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.927704,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.74616389999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.886357858645813,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.008000205585336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26209057525569085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.178033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.93280049999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.67706041954394,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.229120237823274,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21737331465844653,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.077833,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.26543120000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.317043553625503,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.652342457636195,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38210520881825016,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.6214625,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.67928459999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.082499416843145,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.646725715775329,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3475425532107744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.177344,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.4056195,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.910134953457735,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.640672883644132,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3488364235344836,
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
          "id": "91a6a39b100f94d7f35700b0c2d21037d0399fdf",
          "message": "Add a changelog for v1.0.2. (#569)",
          "timestamp": "2024-08-12T14:23:38Z",
          "tree_id": "fe6d338a3e1a56938b4f07253aeff54e6b80d1ce",
          "url": "https://github.com/hasura/ndc-postgres/commit/91a6a39b100f94d7f35700b0c2d21037d0399fdf"
        },
        "date": 1723473143994,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.817616,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.8761582,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.751550148921915,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.629021221178629,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28572470701155217,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.458735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.6246187,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.50994865766904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4111558674440658,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23172433067657366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.252644,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.34295139999993,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.374849717602302,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.698434056406782,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3541166910095814,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.618913,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.26954599999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.821260511775552,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.070976908070119,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3393371477514287,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.451512,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.61101625,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.415987502825764,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.15504006986032,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29512813156695683,
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
          "id": "346d2db9ad3b4ff37615637f7bbda29f95ad7760",
          "message": "fix nested fields relationships (#564)\n\n### What\n\nSelecting nested field relationships had a bug where it would try to\nlook up a composite type field column in the parent collection. For\nexample:\n\nI have a collection `institution` with a field `staff` that is a\ncomposite type that contains the field `favorite_artist_id`. Trying to\nhave a relationship from this field to the `Artist` table would attempt\nto look-up this field in `institution`, instead of in `staff`.\n\nThis PR fixes this.\n\n### How\n\nBefore, we had a type called `TableNameAndReference` that describe the\nmetadata name of a table and held a (relationship alias) reference to\nit.\n\n- We modify this type to contain a `Source` instead of a `Name`, which\ncan be a collection name or a nested field name. This is done so it is\nclearer whether we are tracking a collection or a type.\n- Instead of looking up a `Collection` everywhere, we lookup /anything/\nthat can have fields by replacing `lookup_collection` with\n`lookup_fields_info`.\n- When translating nested fields, instead of passing the `joins`\naccumulator for the parent table, we create another on the fly, and\ntranslate the joins using the table created for the nested field instead\nof the parent table.\n\nWe also:\n\n- Create nicer aliases for nested fields so they are easier to track\n- Add a test that is based on sql tables from the `v3-engine`, so we add\na new `sql` file and update the configurations accordingly.",
          "timestamp": "2024-08-12T14:47:03Z",
          "tree_id": "89feec7358704c6c7f6758c8fd72d8a03a438996",
          "url": "https://github.com/hasura/ndc-postgres/commit/346d2db9ad3b4ff37615637f7bbda29f95ad7760"
        },
        "date": 1723474431211,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.261256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.64054455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.282287003155417,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7177546069617335,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27442744632397525,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.119664,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.563027,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.43330346428874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4838865310255471,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2533588149796916,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.4006075,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.13352515000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.167996107961752,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.209420638546927,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37139440970186377,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.975155,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.520499,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.09156309440832,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.230966439988787,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3026257351452644,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.541437,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.173652,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.970840295372145,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.914756502142044,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.328793536509855,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}