window.BENCHMARK_DATA = {
  "lastUpdate": 1726648249852,
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
          "id": "1378805c72a16934788d3ab6a5bc767f8f0b9741",
          "message": "Fields of composite types are always nullable (#565)\n\n### What\n\nWe used to mark fields of composite type as not-nullable in the NDC\nschema.\n\nThis is wrong. Nullability is a property of columns of tables, not of\nfields of record types.\n\nThis is also demonstrated by the following transcript:\n```\npostgres=# create table a_table (nullable_text text, not_nullable_text text not null);\nCREATE TABLE\npostgres=# create table derived_table (a_table a_table, other text);\nCREATE TABLE\n\npostgres=# insert into derived_table values (('nullable', 'not nullable'), 'other text');\nINSERT 0 1\npostgres=# insert into derived_table values ((null, 'not nullable'), 'other text');\nINSERT 0 1\n\npostgres=# select (a_table).* from derived_table;\n nullable_text | not_nullable_text\n---------------+-------------------\n nullable      | not nullable\n               | not nullable\n(2 rows)\n\npostgres=# insert into a_table select (a_table).* from derived_table;\nINSERT 0 2\npostgres=# select * from a_table;\n nullable_text | not_nullable_text\n---------------+-------------------\n nullable      | not nullable\n               | not nullable\n(2 rows)\n\n-- We can easily construct a record with (not_nullable_text=null) when on **the composite type** a_table:\npostgres=# insert into derived_table values (('nullable', null), 'other text');\nINSERT 0 1\npostgres=# select * from derived_table;\n          a_table          |   other\n---------------------------+------------\n (nullable,\"not nullable\") | other text\n (,\"not nullable\")         | other text\n (nullable,)               | other text\n(3 rows)\n\npostgres=# select (a_table).* from derived_table;\n nullable_text | not_nullable_text\n---------------+-------------------\n nullable      | not nullable\n               | not nullable\n nullable      |\n(3 rows)\n\n-- ... But we cannot insert this into **the table** a_table.\npostgres=# insert into a_table select (a_table).* from derived_table;\nERROR:  null value in column \"not_nullable_text\" of relation \"a_table\" violates not-null constraint\nDETAIL:  Failing row contains (nullable, null).\n```\n\n### How\n\nWe simply make the schema endpoint always return nullable fields of\ncomposite types.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-08-12T15:24:34Z",
          "tree_id": "f58b092acfc2fa6c1ead0c4f7532f06a038a1877",
          "url": "https://github.com/hasura/ndc-postgres/commit/1378805c72a16934788d3ab6a5bc767f8f0b9741"
        },
        "date": 1723476687300,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.399848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.343758799999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.446580077942937,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.382390166133735,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30488523342090074,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.883512,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.3136458,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.53514405362156,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.504387859700067,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24710593175453574,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.19881,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.78264239999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.62064744714767,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.572635749115637,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40218524022332053,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.8269935,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.00158675,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.388036611022248,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.601841386673552,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.317461592495166,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.940841,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.4246282,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.18346333646694,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.3530339742530835,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30854491808255013,
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
          "id": "0f7caeafc6fab56d1fb4ddd56fd4c33a47953766",
          "message": "CI: Make the GitHub Actions triggers consistent. (#570)\n\n### What\n\nWe only need the `push` trigger.\n\n### How\n\nI removed other triggers, and made the syntax consistent.\n\nThe merge queue seems to work fine without the `merge_group` trigger.",
          "timestamp": "2024-08-13T05:36:30Z",
          "tree_id": "0dc86558133ac3cbb7fb1ef8dbe588c868ba7adb",
          "url": "https://github.com/hasura/ndc-postgres/commit/0f7caeafc6fab56d1fb4ddd56fd4c33a47953766"
        },
        "date": 1723527945781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.1655985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.68074465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.6452451103774,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.680096389236191,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29494765456742333,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.66399100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.61286999999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.83820051081152,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3141696963605298,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2552431357547891,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.7027875,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.31364379999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.11889926416716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.226382985132641,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3761783375351325,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.591987,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.14254959999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.871150890574135,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.779545780300449,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3285555790664068,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.586196,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.93304599999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.968855207885603,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.01775092003723,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26878020659452617,
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
          "id": "bf4bb448c58f81b8638cf2123efa4d3574621333",
          "message": "Array elements are always nullable (#571)\n\n### What\n\nPR #565 fixed field nullability of composite type fields, but neglected\nto treat the similar issue that exists for arrays.\n\nIn Postgres, any array type (e.g. `int4[]`, `text[]`, etc.) may contain\nelements which are null. The type system does not support declaring\narrays with non-null elements.\n\nThis PR fixes that issue.\n\n### How\n\nWhenever we have to translate an ndc-postgres array type to an ndc-spec\narray type in the schema generation we annotate the element type as\nbeing nullable.",
          "timestamp": "2024-08-13T09:56:50Z",
          "tree_id": "48cc00b52ccf695712d74004a175cf01498813f7",
          "url": "https://github.com/hasura/ndc-postgres/commit/bf4bb448c58f81b8638cf2123efa4d3574621333"
        },
        "date": 1723543565331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 32.189926,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 52.2242934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.281266143142204,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.743717944923905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.34415791485797925,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.13620900000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.49613550000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.74061765306439,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5974180152069977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2905087641751108,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.720350999999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.602219,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.65796860312033,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.013129882880534,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3304387923169609,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.074523,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.49095315000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.559307632912095,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.605703652762131,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3197201624061868,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.637131999999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.5928545,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.641248972225032,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.999077446376422,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40487968765840776,
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
          "id": "df41f115c437b2b79595409535bd6414c87c7ae5",
          "message": "Use Mimalloc (#572)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe've had excellent results with this elsewhere, let's try it here.\n\n### How\n\nImport mimalloc, set global allocator.",
          "timestamp": "2024-08-13T10:17:19Z",
          "tree_id": "5397946bed543395a76e30662d0d43189e57a47e",
          "url": "https://github.com/hasura/ndc-postgres/commit/df41f115c437b2b79595409535bd6414c87c7ae5"
        },
        "date": 1723544763446,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.049376,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.455971899999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.063081008178843,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.297572635324512,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3039525419740792,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.075313,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.72578439999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.25785249071589,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4749116023540765,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2524405847026973,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.304712,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.5467,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.685290284774336,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.641562924846024,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36165419530579757,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.607297,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.82052139999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.182226480872124,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.809691467026951,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32223170466500073,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.073209,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.9230567,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.674867114445338,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.726467385339756,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3311224475557113,
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
          "id": "25666202ebe2a5c3f2edacffa4583dd3959edceb",
          "message": "Support setting ssl client certificate information via environment variables (#574)\n\n### What\n\nWe'd like to support setting ssl certificate information via environment\nvariables.\n\n### How\n\n1. We create a new function, `get_connect_options`, which will read both\nthe uri and the ssl information, and use it and `connect_with`\neverywhere instead of `connect` with just the `uri`. We make sure all\noperations using configuration version 5 including the connector and the\ncli use `get_connect_options` (except tests).\n2. We read the `client_cert`, `client_key` and `root_cert` from the\nenvironment and put them directly into the sqlx connection options.\n\n#### How we tested this\n\nWe used [this\narticle](https://dev.to/danvixent/how-to-setup-postgresql-with-ssl-inside-a-docker-container-5f3)\nas a guide on how to set up postgres+certs with docker.\n\nAfter running all of the commands, we had to do the following as well:\n\n```sh\n$ certstrap request-cert --common-name postgresdb  --domain localhost\n$ cp certs/out/myCA.crt out/\n$ cp certs/out/myCA.key out/\n$ certstrap sign postgresdb --CA myCA\n```\n\nThen, we added the following environment variables:\n\n```sh\n$ export CLIENT_CERT=\"$(cat /tmp/ssl/out/postgresdb.crt)\"\n$ export CLIENT_KEY=\"$(cat /tmp/ssl/out/postgresdb.key)\"\n$ export ROOT_CERT=\"$(cat /tmp/ssl/certs/out/myCA.crt)\"\n```\n\nInitialized and updated the connector:\n\n```sh\n$ mdkir /tmp/ssltest\n$ CONNECTION_URI=\"postgresql://postgres:postgres@localhost:64009/postgres?sslmode=verify-ca\" target/debug/ndc-postgres-cli --context /tmp/ssltest initialize\n$ CONNECTION_URI=\"postgresql://postgres:postgres@localhost:64009/postgres?sslmode=verify-ca\" target/debug/ndc-postgres-cli --context /tmp/ssltest update\n```\n\nAdded a native query:\n\n```sh\n$ echo \"select 'gil' as \"name\", 35 as 'age'\" > /tmp/ssltest/a.sql\n\n$ CONNECTION_URI=\"postgresql://postgres:postgres@localhost:64009/postgres?sslmode=verify-ca\" target/debug/ndc-postgres-cli --context /tmp/ssltest native-operation create --kind query --operation-path a.sql\n```\n\nStarted the connector:\n\n```sh\nCONNECTION_URI=\"postgresql://postgres:postgres@localhost:64009/postgres?sslmode=verify-ca\" target/debug/ndc-postgres serve --configuration /tmp/ssltest\n```\n\nAnd ran a query:\n\n```sh\ncurl -X POST \\\n    -H 'Host: example.hasura.app' \\\n    -H 'Content-Type: application/json' \\\n    -H 'x-hasura-role: admin' \\\n    http://localhost:8080/query \\\n    -d '{ \"collection\": \"a\", \"query\": { \"fields\": { \"name\": { \"type\": \"column\", \"column\": \"name\" } } }, \"arguments\": {}, \"collection_relationships\": {} }' | jq\n```",
          "timestamp": "2024-08-16T14:24:50Z",
          "tree_id": "395197645cb02eb3c2c71f48630b29b8961fbed9",
          "url": "https://github.com/hasura/ndc-postgres/commit/25666202ebe2a5c3f2edacffa4583dd3959edceb"
        },
        "date": 1723818981439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.0318805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.17657859999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.634114499188357,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.388494752058225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27366926411904124,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.875354,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.75825175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.75798296794397,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.291635878988913,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2030413580070086,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.04611250000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.7763467,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.21583538473085,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.725649797128295,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35559139318611666,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.333377999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.92307815,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.8551904310127,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.45058052902354,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2799670608496822,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.093472,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.99173219999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.51485481914936,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.61060394491226,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28315371017568025,
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
          "id": "bf4e8abc31b535157fe8a2b581187b8e3a497a82",
          "message": "Update a specific ndc-postgres dep (#575)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe automatically create PRs in the private multitenant repository. As\nthat repository will contain multiple versions of `ndc-postgres` soon,\nonly replace a specific one, matching on the crate alias.\n\n### How\n\nAwful bash",
          "timestamp": "2024-08-16T15:03:00Z",
          "tree_id": "57954793f150608a32fbd6de968a1fcdf7472d56",
          "url": "https://github.com/hasura/ndc-postgres/commit/bf4e8abc31b535157fe8a2b581187b8e3a497a82"
        },
        "date": 1723820999684,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.334318,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.150446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.412195455164667,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.41807085869846,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29476223903816073,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.42534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.33969845,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.70665923357073,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.300897369752434,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2237656342528905,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.884598,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.62397619999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.78029242370912,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.294592430435408,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36787634026202903,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.627214,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.44100744999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.354154061002426,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.235800700978238,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33945838412274326,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.339659999999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.56057815000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.15195901176091,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.0963872396811425,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30628330848969,
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
          "id": "a57c0b5c76f98ea1da33d5aa649b6e8d071c3d4a",
          "message": "changelog for v1.1.0 (#576)\n\n### What\n\nChangelog for v1.1.0\n\n### How\n\n```\nscripts/new-version.sh 1.1.0\n```",
          "timestamp": "2024-08-16T15:34:06Z",
          "tree_id": "68a8d3f034dac2d73d005b63080b5f12b9fc3662",
          "url": "https://github.com/hasura/ndc-postgres/commit/a57c0b5c76f98ea1da33d5aa649b6e8d071c3d4a"
        },
        "date": 1723822862017,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.317642,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.92969479999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.121958207121505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.990057717188964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2625297984558242,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.973247,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.92466725,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.99114142708794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2568880122384627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2347205989472111,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.917919499999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.37827675,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.31047046864408,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.99462152848206,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36804038135107975,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.890899,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.09421579999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.706436829366407,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.390564035314828,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32406457120003196,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.0686625,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.30040779999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.702328821958158,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.609888921261952,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3246605871904945,
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
          "id": "0b89ef817e004c073cb1d9849e0ef9def9b09ff6",
          "message": "Fix dep update again (#577)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nDid Bash templating wrong. Fixed now.\n\n### How\n\nYou can only interpolate in double quotes.",
          "timestamp": "2024-08-16T16:04:39Z",
          "tree_id": "5f86d3b3a372fabf4fa56544c1f02eb7c0dc51ef",
          "url": "https://github.com/hasura/ndc-postgres/commit/0b89ef817e004c073cb1d9849e0ef9def9b09ff6"
        },
        "date": 1723824799568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.232976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.22220224999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.045639474435475,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.798226495755166,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31781516958075906,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.104338,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.4576,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.844862808059844,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3184337763537854,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22611124083226905,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.0542015,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.58406325,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.105352467616214,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.7712831583315705,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3918874904694594,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.955511,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.11749295,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.602753723081193,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.0733806742133005,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.328715131833048,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.094874,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.10633100000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.455878571995843,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.847037307379782,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3042929054813806,
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
          "id": "1ee2c67992db4c500166f214cbbaf0c35e9d5c6e",
          "message": "Run `cargo audit` (#579)\n\n### What\n\nWe should run `cargo audit` when package lists change to make sure we\ndon't introduce any new vulnerabilities.\n\n### How\n\nTurns out an action already exists for this:\nhttps://github.com/marketplace/actions/rust-audit-check",
          "timestamp": "2024-08-19T08:32:23Z",
          "tree_id": "9167c1211a48103c8232e1ec8fc968e67a823aeb",
          "url": "https://github.com/hasura/ndc-postgres/commit/1ee2c67992db4c500166f214cbbaf0c35e9d5c6e"
        },
        "date": 1724056809001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.841066,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.52116289999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.688114093542053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.199973338176099,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2753874468399319,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.218812,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.70040039999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.95585815123796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4805971551790407,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24038808944904677,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.177096500000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.1880362,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.914909209360587,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.46530533968393,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38666207663583624,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.7458335,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.46758325,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.18502854453192,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.186703983920463,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3191940160796478,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.292571,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.0826546,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.717867379499015,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.2164127130314775,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3147263578949115,
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
          "id": "414d359c763e8a0909397187530255fd7a5ec2b7",
          "message": "Add `just audit`, `just audit-fix`, use these commands in CI (#582)\n\n### What\n\nThe audit check is failing because of a problem in `sqlx` that is said\nto be fixed in the next version. Until then, I guess this check just has\nto be optional.",
          "timestamp": "2024-08-19T13:21:19Z",
          "tree_id": "7ff334c0d95031942c6738c578b8df732010d633",
          "url": "https://github.com/hasura/ndc-postgres/commit/414d359c763e8a0909397187530255fd7a5ec2b7"
        },
        "date": 1724074342159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.243501,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.2439884,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.326666027593971,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.000326679492703,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2787273266261289,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.757681,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.1474683,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.76502345356791,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4256015026696573,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22258924197291524,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.486041,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.21361899999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.44334794755276,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.510397010860217,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40194703432992435,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.4927705,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.96242175,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.04201903270759,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.753065024279277,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3139859530218925,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.137263000000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.1679901,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.12402023709246,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.554075401811264,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3006787113225059,
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
          "id": "2c9a74cd029543555e2599c1fbd0e44952625c7e",
          "message": "Remove minor version from engine version (#580)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nTo match changes in multitenant.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-08-20T09:04:30Z",
          "tree_id": "78355b951aef9ea2fe804ea92085eddcea091279",
          "url": "https://github.com/hasura/ndc-postgres/commit/2c9a74cd029543555e2599c1fbd0e44952625c7e"
        },
        "date": 1724145132489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.381259,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.41346749999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.017968247766975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.94306816792338,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3099933334846913,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 69.928552,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.8614533,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.42903432424174,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.290649198747694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22025288642940977,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.4981865,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.23529209999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.22451191004527,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.446710840192306,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3606888400335971,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.4011405,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.39291759999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.84565612244695,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.742294907800012,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33887035430849055,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.737911,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.91278810000004,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.349301391863726,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.520313477345354,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27882055222845836,
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
          "id": "edce40300842cde9d0743d496acc25c27776a294",
          "message": "Support setting ssl client certificate information and ssl root certificate independently (#578)\n\n### What\n\nWe want to be able to set the ssl root certificate without setting the\nssl client certificate information. We want to be able to set the two\nindependently.\n\n### How\n\n- Split the SslClientInfo to two Optionals and rename to SslInfo. Now\nthey can be set independently.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-08-20T09:20:00Z",
          "tree_id": "6ce6f0ed8d8e4e4e9103d97b3bc159dfc9d247a8",
          "url": "https://github.com/hasura/ndc-postgres/commit/edce40300842cde9d0743d496acc25c27776a294"
        },
        "date": 1724146026813,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.5222585,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.605975649999976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.824991682113973,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.409365422630538,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29228770095743617,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.27723,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.11197655,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.51233507148075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.281194129426659,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21250138045075356,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.240832,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.63175304999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.204614119478197,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.949948773217383,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3893807582186429,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.4700775,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.76151150000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.445094022715047,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.016171898440174,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2752702611079053,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.099669,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.70655119999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.664300362154847,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.930290307609475,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3119383011445814,
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
          "id": "d7873043181cfd1fb2507767e2686f3710d2e89b",
          "message": "implemented filter by nested collection (#573)\n\n### What\n\nImplementing an upcoming feature in ndc-spec:\nhttps://github.com/hasura/ndc-spec/pull/166\n\nWe want to support filtering by a field inside an array column.\n\nFor example: I want to get all institutions that where there exists a\nperson who's last name is \"Hughes\" among their staff.\n\nThis requires an update to ndc-spec and ndc-sdk-rs.\n\n### How\n\nWhen we get a request with an exists over a nested field collection, we\nconstruct a nested field selection expression, unnest the results, and\nuse that as our new \"current table\".",
          "timestamp": "2024-08-20T09:31:43Z",
          "tree_id": "2c6a506c9ade3bd325c89fe4c80464c6155bc573",
          "url": "https://github.com/hasura/ndc-postgres/commit/d7873043181cfd1fb2507767e2686f3710d2e89b"
        },
        "date": 1724146831367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.8098225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.23880889999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.648804090199448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.873811250464744,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2861528364203367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.2608235,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.41201935,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.014451269054256,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.492145178232299,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24278875081551007,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.003469,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.97423799999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.796108423495706,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.476319443039959,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3612392546072495,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.519082,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.05970525000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.579280838367183,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.205668455070683,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3327970651561316,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.676893,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.91414329999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.449553397053613,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.536824682275526,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2960632236171623,
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
          "id": "12dcf3702077e4afcce0f5b5d1ff24c95a43535b",
          "message": "Specify major ndc-postgres version to cargo update (#588)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`cargo update` quite helpfully errors when we do something ambiguous\nlike `cargo update ndc-postgres` when there's two of them, so let's\ndisambiguate the one we want.\n\n\nhttps://github.com/hasura/ndc-postgres/actions/runs/10468915177/job/28990809823#step:5:92\n\n### How\n\nChange job to `cargo update ndc-postgres@1`, essentially.",
          "timestamp": "2024-08-20T09:41:08Z",
          "tree_id": "efbda7ad014b27ab441fc6c32d7f34b006813184",
          "url": "https://github.com/hasura/ndc-postgres/commit/12dcf3702077e4afcce0f5b5d1ff24c95a43535b"
        },
        "date": 1724147389668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.314452,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.769241999999984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.021141975411094,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.760014840486836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3094268628117237,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.740216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.2209349,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.02138660068862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.444499184908146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2503318573142162,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.388012,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.047031,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.97947400426513,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.937288058431292,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4422933133228768,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.7802,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.66179415000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.84394285163118,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.957026135617941,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3158165037501936,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.5725235,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.32573500000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.83992244189636,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.068035567221653,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3052074538980894,
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
          "id": "4eb0b32d011b8907c8b88025d2ac2c12caf8e5c7",
          "message": "Suppress known audit warnings that we mitigate. (#589)\n\n### What\n\nSuppress a couple of audit warnings.\n\n### How\n\nI have added a `.cargo/audit.toml` file.",
          "timestamp": "2024-08-22T06:17:36Z",
          "tree_id": "4d921cbdbc72bfac9068df343c74166c38deacfe",
          "url": "https://github.com/hasura/ndc-postgres/commit/4eb0b32d011b8907c8b88025d2ac2c12caf8e5c7"
        },
        "date": 1724307915905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.998479500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.452254499999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.31724096368852,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.419220905353267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.276552178593686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.181496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.704856,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.38015411426616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.275150570576713,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23969146182298692,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.716037,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.96684324999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.477122664818623,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.248879242545058,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.409548395144402,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.126246,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.9337294,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.06607815219713,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.570593412325785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3059896881513891,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.566595,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.608619,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.468076211462478,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.918606479401621,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28616816083789604,
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
          "id": "eddb685029f121b1acfc553613695ab3cb3ae5fa",
          "message": "Update to Rust v1.80.1. (#590)\n\n### What\n\nUpgrade to the latest version of Rust.\n\n### How\n\nI modified `rust-toolchain.toml`, ran `cargo update`, and fixed some new\nlint warnings around docs.",
          "timestamp": "2024-08-22T07:25:01Z",
          "tree_id": "89b649e397245d5e6dfcf9ad43bf3210695d494b",
          "url": "https://github.com/hasura/ndc-postgres/commit/eddb685029f121b1acfc553613695ab3cb3ae5fa"
        },
        "date": 1724312114001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.369367,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.700668,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.319436035728513,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.732244868009014,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2939839602135866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.6946015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.87720245,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.24195857055944,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2501702024026784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.20353060310246657,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.375961000000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.36591569999989,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.640910546837656,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.074659913594576,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3706892799875428,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.016037999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.6846766,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.00736724725469,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.758597706145572,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3102772033773401,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.809385500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.63926625,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.752082602722485,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.313046259076,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3038488464891392,
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
          "id": "fc6a7a742a0adb3b2923316e678003322fbd821b",
          "message": "Release v1.1.1. (#591)\n\n### What\n\nRelease v1.1.1.\n\n### How\n\n```\n$ nix-shell -p ghc --run './scripts/new-version.sh 1.1.1'\n```",
          "timestamp": "2024-08-22T09:18:08Z",
          "tree_id": "de7495411f37454106249cdad9fe000944ec16b4",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc6a7a742a0adb3b2923316e678003322fbd821b"
        },
        "date": 1724318963682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.294022,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.868745149999974,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.195678253448364,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.636161122442349,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3079745474602729,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.685723,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.420239,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.01254613888697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5238898221418609,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24134640663056428,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.192869,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.69600409999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.019966121890203,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.777448729257646,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3880454940198051,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.240599,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.9737484,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.316099235500445,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.128789697948406,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2980621950275927,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.234594,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.5497732,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.873034420563496,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.357454770313613,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.302919196303194,
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
          "id": "f9b942b3b4529ceba0d536061c7731b07d138463",
          "message": "Build `ndc-postgres` and `v3-engine` binaries using Nix in e2e tests (#592)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nSpeed up e2e tests by building the `v3-engine` and `ndc-postgres`\nbinaries with Nix.\n\n### How\n\nMostly copied from the equivalent `v3-engine` CI job.",
          "timestamp": "2024-08-23T13:15:05Z",
          "tree_id": "af83ce524e9311b1642c86b10edd475ddfe62a6b",
          "url": "https://github.com/hasura/ndc-postgres/commit/f9b942b3b4529ceba0d536061c7731b07d138463"
        },
        "date": 1724419268752,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.729427,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.609950999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.593971073461809,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.90378599179634,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27052781693130173,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.542553,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.9105924,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.45191768494413,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.349973891767469,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2369678516980568,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.675718,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.14982139999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.129347784516483,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.876695366529802,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.444037379146977,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.779357000000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.64241625,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.865373540153243,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.6853331816024095,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2988886296770898,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.976885,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.77779399999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.304328593549727,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.286741864501238,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2650707024302911,
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
          "id": "5eb809c1302fefd2f3849c787d42f5603e006c30",
          "message": "More automatic deployment (#593)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe'd like to start automating the deployment of `ndc-postgres` and\nfriends, which means we need to introduce some scripts to GitHub\nactions. However, it looks like we need to merge at least this\nboilerplate in order to start playing with these actions in branches.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-08-26T10:05:20Z",
          "tree_id": "04cdef510a8a9d9caccc34f69eae0b964e2ddd07",
          "url": "https://github.com/hasura/ndc-postgres/commit/5eb809c1302fefd2f3849c787d42f5603e006c30"
        },
        "date": 1724667096656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.841966499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.70152559999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.185010508226274,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.056979528438294,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3189979317160652,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.6830485,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.6413475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.457846484885096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4621911814576052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.22251662129576474,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.236311,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.24912799999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.40881718561337,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.3203424062777565,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37794175945585295,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.441419,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.695396,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.606452477052727,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.968384043823875,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.36782285697085,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.571761,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.86712899999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.645605113194772,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.240817295985789,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30459927483336374,
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
          "id": "c48ab7717e673149a5824aff0ad8553c7a5dfa9f",
          "message": "Automatically create PRs to bump versions in ndc-postgres (#594)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\nThis PR adds a `bump-version.yaml` workflow that can be manually\ntriggered in the `Actions` tab. When triggered and given a new version\nof `ndc-postgres`, a PR will be generated that bumps `ndc-postgres` to\nthat version. In practice, this means:\n\n* Updating the `Cargo.toml` file and associated lock file.\n* Moving everything in `changelog.md` from `Unreleased` to a section\nwith the appropriate version title, and creating a new, blank\n`Unreleased` section.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\nGitHub actions, including a fancy new action we found to create pull\nrequests against the repo.",
          "timestamp": "2024-08-26T12:17:06Z",
          "tree_id": "65a42240c198d3cacb64d34cec31071ef9f934da",
          "url": "https://github.com/hasura/ndc-postgres/commit/c48ab7717e673149a5824aff0ad8553c7a5dfa9f"
        },
        "date": 1724674985306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.637259,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.76235399999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.012419697534618,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.129596476152621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30937521869157036,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0419425,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.67083785,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.95313706186982,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2758566002908438,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2552137433548381,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.405375,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.6100866,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.981459763607614,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.330593080348908,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36606567188563344,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.873279,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.99819969999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.74701764914126,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.017617275940932,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33750039444081953,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.439826,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.75227375,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.312953354603792,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.4433532214976665,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3261871465304817,
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
          "id": "f14cf2c6d1e67b3013fdcca95dd7424a0ecfafdb",
          "message": "chore(deps): Bump serde from 1.0.208 to 1.0.209 (#598)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.208 to\n1.0.209.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.209</h2>\n<ul>\n<li>Fix deserialization of empty structs and empty tuples inside of\nuntagged enums (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2805\">#2805</a>,\nthanks <a\nhref=\"https://github.com/Mingun\"><code>@​Mingun</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/30752ac4ffdaa284606eda34055ad185e28c5499\"><code>30752ac</code></a>\nRelease 1.0.209</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b84e6ca4f5fef69b3de985c586a07b1246f3eb9a\"><code>b84e6ca</code></a>\nImprove wording of PR 2805 comments</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/87a2fb0f1a2774ea5bb20c0ed988b9ba57fc8166\"><code>87a2fb0</code></a>\nWrap comments from PR 2805 to 80 columns</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/9eaf7b9824f2082c50d17ad22b786322dc283a61\"><code>9eaf7b9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2805\">#2805</a>\nfrom Mingun/untagged-tests</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/7bde100237875d4f435de5ad90074b0479c37486\"><code>7bde100</code></a>\nReplace MapRefDeserializer with value::MapDeserializer</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/da7fc795ee654252effa232a62a5a1e6d4f551ee\"><code>da7fc79</code></a>\nFix deserialization of empty struct variant in untagged enums</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/4c5fec1363d363f995375426f72db11c28f357c1\"><code>4c5fec1</code></a>\nTest special cases that reaches SeqRefDeserializer::deserialize_any\nlen==0 co...</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/6588b0ad3777f7ad930d68ab4b9ec5b9c25398e0\"><code>6588b0a</code></a>\nCover Content::Seq case in VariantRefDeserializer::struct_variant</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/0093f74cfee5ee3239514a7aad5fb44843eddcdd\"><code>0093f74</code></a>\nSplit test newtype_enum into four tests for each variant</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/171c6da57af712cfcf01c6c124b14cabfca364ba\"><code>171c6da</code></a>\nComplete coverage of\nContentRefDeserializer::deserialize_newtype_struct</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.208...v1.0.209\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.208&new-version=1.0.209)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-27T13:11:09Z",
          "tree_id": "348fe9b28f94799b1e3b50dcbcd0c975565b80c4",
          "url": "https://github.com/hasura/ndc-postgres/commit/f14cf2c6d1e67b3013fdcca95dd7424a0ecfafdb"
        },
        "date": 1724764754041,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.0392415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.42039655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.80443265162147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.00667963732376,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2859628507505316,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.487492,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.73725875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.69385540065704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3864368778083858,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24384186978456748,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.50651,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.4291165,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.01194603638942,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.414121053175762,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3751535842857551,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.978558,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.4663808,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.405942845521025,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.363137406996152,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.27911446457125977,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.625691,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.76813120000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.704498852039976,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.901801746739622,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.23129466281625186,
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
          "id": "e3c8ab1865144b84ab391da07cacad422ebbab70",
          "message": "chore(deps): Bump sqlx from 0.8.0 to 0.8.1 (#600)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.8.0 to 0.8.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.8.1 - 2024-08-23</h2>\n<p>16 pull requests were merged this release cycle.</p>\n<p>This release contains a fix for [RUSTSEC-2024-0363].</p>\n<p>Postgres users are advised to upgrade ASAP as a possible exploit has\nbeen demonstrated:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3440#issuecomment-2307956901\">launchbadge/sqlx#3440</a></p>\n<p>MySQL and SQLite do not <em>appear</em> to be exploitable, but\nupgrading is recommended nonetheless.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3421\">#3421</a>]:\ncorrect spelling of\n<code>MySqlConnectOptions::no_engine_substitution()</code> [[<a\nhref=\"https://github.com/kolinfluence\"><code>@​kolinfluence</code></a>]]\n<ul>\n<li>Deprecates <code>MySqlConnectOptions::no_engine_subsitution()</code>\n(oops) in favor of the correctly spelled version.</li>\n</ul>\n</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3376\">#3376</a>]:\ndoc: hide <code>spec_error</code> module [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>This is a helper module for the macros and was not meant to be\nexposed.</li>\n<li>It is not expected to receive any breaking changes for the 0.8.x\nrelease, but is not designed as a public API.\nUse at your own risk.</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3382\">#3382</a>]:\nfeat: bumped to <code>libsqlite3-sys=0.30.1</code> to support sqlite\n3.46 [[<a\nhref=\"https://github.com/CommanderStorm\"><code>@​CommanderStorm</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3385\">#3385</a>]:\nchore(examples):Migrated the pg-chat example to ratatui [[<a\nhref=\"https://github.com/CommanderStorm\"><code>@​CommanderStorm</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3399\">#3399</a>]:\nUpgrade to rustls 0.23 [[<a\nhref=\"https://github.com/djc\"><code>@​djc</code></a>]]\n<ul>\n<li>RusTLS now has pluggable cryptography providers: <code>ring</code>\n(the existing implementation),\nand <code>aws-lc-rs</code> which has optional FIPS certification.</li>\n<li>The existing features activating RusTLS\n(<code>runtime-tokio-rustls</code>,\n<code>runtime-async-std-rustls</code>, <code>tls-rustls</code>)\nenable the <code>ring</code> provider of RusTLS to match the existing\nbehavior so this <em>should not</em> be a breaking change.</li>\n<li>Switch to the <code>tls-rustls-aws-lc-rs</code> feature to use the\n<code>aws-lc-rs</code> provider.\n<ul>\n<li>If using <code>runtime-tokio-rustls</code> or\n<code>runtime-async-std-rustls</code>,\nthis will necessitate switching to the appropriate non-legacy runtime\nfeature:\n<code>runtime-tokio</code> or <code>runtime-async-std</code></li>\n</ul>\n</li>\n<li>See the RusTLS README for more details: <a\nhref=\"https://github.com/rustls/rustls?tab=readme-ov-file#cryptography-providers\">https://github.com/rustls/rustls?tab=readme-ov-file#cryptography-providers</a></li>\n</ul>\n</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2786\">#2786</a>]:\nfix(sqlx-cli): do not clean sqlx during prepare [[<a\nhref=\"https://github.com/cycraig\"><code>@​cycraig</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3354\">#3354</a>]:\nsqlite: fix inconsistent read-after-write [[<a\nhref=\"https://github.com/ckampfe\"><code>@​ckampfe</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3371\">#3371</a>]:\nFix encoding and decoding of MySQL enums in <code>sqlx::Type</code> [[<a\nhref=\"https://github.com/alu\"><code>@​alu</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3374\">#3374</a>]:\nfix: usage of <code>node12</code> in <code>SQLx</code> action [[<a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3380\">#3380</a>]:\nchore: replace structopt with clap in examples [[<a\nhref=\"https://github.com/tottoto\"><code>@​tottoto</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3381\">#3381</a>]:\nFix CI after Rust 1.80, remove dead feature references [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3384\">#3384</a>]:\nchore(tests): fixed deprecation warnings [[<a\nhref=\"https://github.com/CommanderStorm\"><code>@​CommanderStorm</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3386\">#3386</a>]:\nfix(dependencys):bumped cargo_metadata to <code>v0.18.1</code> to avoid\nyanked <code>v0.14.3</code> [[<a\nhref=\"https://github.com/CommanderStorm\"><code>@​CommanderStorm</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3389\">#3389</a>]:\nfix(cli): typo in error for required DB URL [[<a\nhref=\"https://github.com/ods\"><code>@​ods</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3417\">#3417</a>]:\nUpdate version to 0.8 in README [[<a\nhref=\"https://github.com/soucosmo\"><code>@​soucosmo</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3441\">#3441</a>]:\nfix: audit protocol handling [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>This addresses [RUSTSEC-2024-0363] and includes regression tests for\nMySQL, Postgres and SQLite.</li>\n</ul>\n</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2786\">#2786</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/2786\">launchbadge/sqlx#2786</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3354\">#3354</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3354\">launchbadge/sqlx#3354</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3371\">#3371</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3371\">launchbadge/sqlx#3371</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/9c94ce891ae390e1604f495585d14fa6230d42f7\"><code>9c94ce8</code></a>\nchore: prepare release 0.8.1</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/0aa06763e502e0355f6ea14f353e10bdc8338d89\"><code>0aa0676</code></a>\nchore(mysql): create regression test for RUSTSEC-2024-0363</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/791433afbb5ac073d1c3b6c9824c69e984e5d76a\"><code>791433a</code></a>\nchore(sqlite): create regression test for RUSTSEC-2024-0363</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/b1539b60a13d0fb52e9d452ad43f4a4ad50ab3ec\"><code>b1539b6</code></a>\nchore(postgres): create regression test for RUSTSEC-2024-0363</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/9e3ece49d7b1cc8f2b3861c1716b83a9e074a42a\"><code>9e3ece4</code></a>\nfix(postgres): use checked decrement on\n<code>pending_ready_for_query_count</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/823261aefc90832b65d7f27fdb4f17633adc7a59\"><code>823261a</code></a>\nfix(mysql): don't use an arbitrary <code>cfg</code> for one test</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/b5c218eb231083fcada54970e27d0fb8d8a92947\"><code>b5c218e</code></a>\nfix(postgres): fix missing inversion on\n<code>PgNumeric::is_valid_digit()</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/394a7e86a7f82e7bc06553ad5184515867a91ba4\"><code>394a7e8</code></a>\nfix(sqlite): fix unit and doctests</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/27c573083fd0946da99e9956faf5ab87a87a28f4\"><code>27c5730</code></a>\nfix(mysql): fix doctests</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/71f72e2620a7e7b628f8abe0a07978ad155357d9\"><code>71f72e2</code></a>\nfix(mysql): add <code>sqlx</code> as a dev-dependency for doctests</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.8.0...v0.8.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.8.0&new-version=0.8.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-27T13:11:59Z",
          "tree_id": "ba89198ca7807beb1ff0396c1026a9da9765b332",
          "url": "https://github.com/hasura/ndc-postgres/commit/e3c8ab1865144b84ab391da07cacad422ebbab70"
        },
        "date": 1724765004729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.158155,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.01468379999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.250244894434811,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.726620976257795,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2762529633543796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.4631495,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.67735339999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.15313416664204,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6671400675937562,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2693942837594587,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.281681000000006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.52367179999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.41742987201957,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.341527491338898,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3516745495211412,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.859832,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.71162875,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.465553007848122,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.963618374155793,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32535188483334093,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.547601,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.8224279,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.221217117668324,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.301876508394834,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.285748496961463,
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
          "id": "9c6baca78e83c9f70141fd4c51f453facac0eec5",
          "message": "chore(deps): Bump serde_json from 1.0.125 to 1.0.127 (#599)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.125 to\n1.0.127.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.127</h2>\n<ul>\n<li>Add more removal methods to OccupiedEntry (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1179\">#1179</a>,\nthanks <a\nhref=\"https://github.com/GREsau\"><code>@​GREsau</code></a>)</li>\n</ul>\n<h2>1.0.126</h2>\n<ul>\n<li>Improve string parsing on targets that use 32-bit pointers but also\nhave fast 64-bit integer arithmetic, such as\naarch64-unknown-linux-gnu_ilp32 and x86_64-unknown-linux-gnux32 (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1182\">#1182</a>,\nthanks <a href=\"https://github.com/CryZe\"><code>@​CryZe</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5ebf65cc480f90714c94f82099ca9161d80cbb10\"><code>5ebf65c</code></a>\nRelease 1.0.127</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f287a3b1a93ecb1a11cee31cb638bd9523a58add\"><code>f287a3b</code></a>\nMerge pull request 1179 from GREsau/patch-1</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ec980b02774abbff12fd3e26b0a1582eb14dcef7\"><code>ec980b0</code></a>\nRelease 1.0.126</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/e6282b0c479947805a33c7f167b1d19dd4c7ad4f\"><code>e6282b0</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1184\">#1184</a>\nfrom serde-rs/fastarithmetic</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ffc4a43453029cdc5603cfe3ef08414488fd45de\"><code>ffc4a43</code></a>\nImprove cfg names for fast arithmetic</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4b1048d0ecc4d326d6657531689513f182a4f850\"><code>4b1048d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1183\">#1183</a>\nfrom serde-rs/arithmetic</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f268173a9fb1f5f8a80f47af62b564525cf33764\"><code>f268173</code></a>\nUnify chunk size choice between float and string parsing</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/fec03769743c3f0ceb6b5b56d91321fdc856dff2\"><code>fec0376</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1182\">#1182</a>\nfrom CryZe/chunk-64bit</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/3d837e1cc4a0f1df56ba6645c3b6d144768b5d9d\"><code>3d837e1</code></a>\nEnsure the SWAR chunks are 64-bit in more cases</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/11fc61c7af7b59ea80fb2ef7d78db94465dfbd54\"><code>11fc61c</code></a>\nAdd <code>OccupiedEntry::shift_remove()</code> and\n<code>swap_remove()</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/1.0.125...1.0.127\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.125&new-version=1.0.127)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-08-27T13:43:54Z",
          "tree_id": "b7df231944caa32f8969ee420415b4310f9308df",
          "url": "https://github.com/hasura/ndc-postgres/commit/9c6baca78e83c9f70141fd4c51f453facac0eec5"
        },
        "date": 1724766701366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 32.9112325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.34359824999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.39146646688349,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.617427207817745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3540017787514286,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.090626,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.16579059999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.083699631089836,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7204440207682197,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2543184182540209,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.273101,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.59772475,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.762850691209163,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.019009896276568,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4284181374165027,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.157777,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.66534859999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.453161764459278,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.448407275800999,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.380954028750549,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.08815,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.37151800000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.94914885519586,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.745747875328746,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32304418349189423,
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
          "id": "f6e1d9c29439cb8723f3708c34cd75bc0681144a",
          "message": "Enable mutations v2 by default (#601)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nGenerated point mutations have been an opt-in feature for a while. Now\nwe advertise them in the Postgres getting started docs, it's probably\ntime to say they are generally available. This won't affect existing\nconfigurations (a missing value still means \"no generated mutations\nplease\".\n\n### How\n\nChange the default.",
          "timestamp": "2024-08-30T14:12:22Z",
          "tree_id": "9fce2fd6a4d7ab67d062138177e967719f412733",
          "url": "https://github.com/hasura/ndc-postgres/commit/f6e1d9c29439cb8723f3708c34cd75bc0681144a"
        },
        "date": 1725027519099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.356576,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.812360299999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.85151674181178,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.168334922857516,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30107651475938363,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.914263,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.69940969999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.711593710951036,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5330487460034874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2491801466635405,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.119924,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.1689361,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.791935194154902,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.843932184465565,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37850004182732194,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.234314,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.6998138999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.47070504450526,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.544130652907668,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2988938635334271,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.726153,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.0432202,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.15372758826993,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.234389350137803,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3099637665292497,
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
          "id": "acc591be0170cc2c0cf0ce80c43dc22364fc6245",
          "message": "chore(deps): Bump indexmap from 2.4.0 to 2.5.0 (#604)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.4.0 to\n2.5.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.5.0</h2>\n<ul>\n<li>Added an <code>insert_before</code> method to <code>IndexMap</code>\nand <code>IndexSet</code>, as an\nalternative to <code>shift_insert</code> with different behavior on\nexisting entries.</li>\n<li>Added <code>first_entry</code> and <code>last_entry</code> methods\nto <code>IndexMap</code>.</li>\n<li>Added <code>From</code> implementations between\n<code>IndexedEntry</code> and <code>OccupiedEntry</code>.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/48ed49017c9af536bda2916c78e77b619163a2f2\"><code>48ed490</code></a>\nRelease 2.5.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/139d7addfb59a77ebaf52490a19f0f129d49abfa\"><code>139d7ad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/340\">#340</a>\nfrom cuviper/insert-bounds</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/1d9b5e3d0345aacf296eec8515746b3dfb81f97d\"><code>1d9b5e3</code></a>\nAdd doc examples for <code>insert_before</code> and\n<code>shift_insert</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8ca01b0df72a4914b2248a65087ce67e3711f52d\"><code>8ca01b0</code></a>\nUse <code>insert_before</code> for &quot;new&quot; entries in\n<code>insert_sorted</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7224def0106a4a6074a0d4619ce99d4120b859a8\"><code>7224def</code></a>\nAdd <code>insert_before</code> as an alternate to\n<code>shift_insert</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0247a1555de940982260384101946d3f958452e5\"><code>0247a15</code></a>\nDocument and assert index bounds in <code>shift_insert</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/922c6ad1afebfa7c6f5781fdb4fcba88f1cb2e0a\"><code>922c6ad</code></a>\nUpdate the CI badge</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e482e1768a2aa8ef50788e413b3c254a6cf6e776\"><code>e482e17</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/342\">#342</a>\nfrom cuviper/btree-like</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b63e4a15568f8da4403734f35f0b1e2ad908a3db\"><code>b63e4a1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/341\">#341</a>\nfrom cuviper/from-entry</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/264e5b73045b1f28d36f80c7e3d0bac63af5e887\"><code>264e5b7</code></a>\nAdd doc aliases like <code>BTreeMap</code>/<code>BTreeSet</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.4.0...2.5.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.4.0&new-version=2.5.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-18T08:17:40Z",
          "tree_id": "0eb488460d4a7853e2683abc95e2d4b2e2c21466",
          "url": "https://github.com/hasura/ndc-postgres/commit/acc591be0170cc2c0cf0ce80c43dc22364fc6245"
        },
        "date": 1726648177465,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.341115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.3108904,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.514764047505107,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.55777123053679,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26250541577213127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.1791015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.6805915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.99576205023852,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4100583859571856,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2480984490157946,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.8066465,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.24389875000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.367411934074447,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.928684088157318,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36007566560788856,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.580006499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.97935584999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.926402189854162,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.4175736678820385,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29620577091008815,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.2592315,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.00467094999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.72642608643172,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.064098155594895,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3176556416985579,
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
          "id": "173b3bcc3e1fb4ba5d83e585250ce0583b808721",
          "message": "chore(deps): Bump peter-evans/create-pull-request from 6 to 7 (#607)\n\nBumps\n[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/peter-evans/create-pull-request/releases\">peter-evans/create-pull-request's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Create Pull Request v7.0.0</h2>\n<p>:sparkles: Now supports commit signing with bot-generated tokens! See\n&quot;What's new&quot; below. :writing_hand::robot:</p>\n<h3>Behaviour changes</h3>\n<ul>\n<li>Action input <code>git-token</code> has been renamed\n<code>branch-token</code>, to be more clear about its purpose. The\n<code>branch-token</code> is the token that the action will use to\ncreate and update the branch.</li>\n<li>The action now handles requests that have been rate-limited by\nGitHub. Requests hitting a primary rate limit will retry twice, for a\ntotal of three attempts. Requests hitting a secondary rate limit will\nnot be retried.</li>\n<li>The <code>pull-request-operation</code> output now returns\n<code>none</code> when no operation was executed.</li>\n<li>Removed deprecated output environment variable\n<code>PULL_REQUEST_NUMBER</code>. Please use the\n<code>pull-request-number</code> action output instead.</li>\n</ul>\n<h3>What's new</h3>\n<ul>\n<li>The action can now sign commits as <code>github-actions[bot]</code>\nwhen using <code>GITHUB_TOKEN</code>, or your own bot when using <a\nhref=\"https://github.com/peter-evans/create-pull-request/blob/HEAD/docs/concepts-guidelines.md#authenticating-with-github-app-generated-tokens\">GitHub\nApp tokens</a>. See <a\nhref=\"https://github.com/peter-evans/create-pull-request/blob/HEAD/docs/concepts-guidelines.md#commit-signature-verification-for-bots\">commit\nsigning</a> for details.</li>\n<li>Action input <code>draft</code> now accepts a new value\n<code>always-true</code>. This will set the pull request to draft status\nwhen the pull request is updated, as well as on creation.</li>\n<li>A new action input <code>maintainer-can-modify</code> indicates\nwhether <a\nhref=\"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork\">maintainers\ncan modify</a> the pull request. The default is <code>true</code>, which\nretains the existing behaviour of the action.</li>\n<li>A new output <code>pull-request-commits-verified</code> returns\n<code>true</code> or <code>false</code>, indicating whether GitHub\nconsiders the signature of the branch's commits to be verified.</li>\n</ul>\n<h2>What's Changed</h2>\n<ul>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.36 to\n18.19.39 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3000\">peter-evans/create-pull-request#3000</a></li>\n<li>build(deps-dev): bump ts-jest from 29.1.5 to 29.2.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3008\">peter-evans/create-pull-request#3008</a></li>\n<li>build(deps-dev): bump prettier from 3.3.2 to 3.3.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3018\">peter-evans/create-pull-request#3018</a></li>\n<li>build(deps-dev): bump ts-jest from 29.2.0 to 29.2.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3019\">peter-evans/create-pull-request#3019</a></li>\n<li>build(deps-dev): bump eslint-plugin-prettier from 5.1.3 to 5.2.1 by\n<a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in\n<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3035\">peter-evans/create-pull-request#3035</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.39 to\n18.19.41 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3037\">peter-evans/create-pull-request#3037</a></li>\n<li>build(deps): bump undici from 6.19.2 to 6.19.4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3036\">peter-evans/create-pull-request#3036</a></li>\n<li>build(deps-dev): bump ts-jest from 29.2.2 to 29.2.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3038\">peter-evans/create-pull-request#3038</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.41 to\n18.19.42 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3070\">peter-evans/create-pull-request#3070</a></li>\n<li>build(deps): bump undici from 6.19.4 to 6.19.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3086\">peter-evans/create-pull-request#3086</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.42 to\n18.19.43 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3087\">peter-evans/create-pull-request#3087</a></li>\n<li>build(deps-dev): bump ts-jest from 29.2.3 to 29.2.4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3088\">peter-evans/create-pull-request#3088</a></li>\n<li>build(deps): bump undici from 6.19.5 to 6.19.7 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3145\">peter-evans/create-pull-request#3145</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.43 to\n18.19.44 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3144\">peter-evans/create-pull-request#3144</a></li>\n<li>Update distribution by <a\nhref=\"https://github.com/actions-bot\"><code>@​actions-bot</code></a> in\n<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3154\">peter-evans/create-pull-request#3154</a></li>\n<li>build(deps): bump undici from 6.19.7 to 6.19.8 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3213\">peter-evans/create-pull-request#3213</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.44 to\n18.19.45 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3214\">peter-evans/create-pull-request#3214</a></li>\n<li>Update distribution by <a\nhref=\"https://github.com/actions-bot\"><code>@​actions-bot</code></a> in\n<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3221\">peter-evans/create-pull-request#3221</a></li>\n<li>build(deps-dev): bump eslint-import-resolver-typescript from 3.6.1\nto 3.6.3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3255\">peter-evans/create-pull-request#3255</a></li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 18.19.45 to\n18.19.46 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3254\">peter-evans/create-pull-request#3254</a></li>\n<li>build(deps-dev): bump ts-jest from 29.2.4 to 29.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3256\">peter-evans/create-pull-request#3256</a></li>\n<li>v7 - signed commits by <a\nhref=\"https://github.com/peter-evans\"><code>@​peter-evans</code></a> in\n<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3057\">peter-evans/create-pull-request#3057</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/rustycl0ck\"><code>@​rustycl0ck</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/pull/3057\">peter-evans/create-pull-request#3057</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v6.1.0...v7.0.0\">https://github.com/peter-evans/create-pull-request/compare/v6.1.0...v7.0.0</a></p>\n<h2>Create Pull Request v6.1.0</h2>\n<p>✨ Adds <code>pull-request-branch</code> as an action output.</p>\n<h2>What's Changed</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/8867c4aba1b742c39f8d0ba35429c2dfa4b6cb20\"><code>8867c4a</code></a>\nfix: handle ambiguous argument failure on diff stat (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3312\">#3312</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/6073f5434ba635ff2f4390cddac0059ab04d9409\"><code>6073f54</code></a>\nbuild(deps-dev): bump <code>@​typescript-eslint/eslint-plugin</code> (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3291\">#3291</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/6d01b5601c7aca7ad0eb2f8532106269ac38b584\"><code>6d01b56</code></a>\nbuild(deps-dev): bump eslint-plugin-import from 2.29.1 to 2.30.0 (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3290\">#3290</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/25cf8451c34bbbcbb3ef973b252eb91ec1ad8be9\"><code>25cf845</code></a>\nbuild(deps-dev): bump <code>@​typescript-eslint/parser</code> from\n7.17.0 to 7.18.0 (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3289\">#3289</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/d87b980a0ebf44e8ed8ef733b28171c81ca501af\"><code>d87b980</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 18.19.46 to\n18.19.48 (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3288\">#3288</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/119d131ea9fd0db1802246d0098211de13a26406\"><code>119d131</code></a>\nbuild(deps): bump peter-evans/create-pull-request from 6 to 7 (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3283\">#3283</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/73e6230af4af8faaeddac4d3f16e25f8a2bd8e4b\"><code>73e6230</code></a>\ndocs: update readme</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/c0348e860fc89e6cc1f5b623f7b1140d6ee9a2d5\"><code>c0348e8</code></a>\nci: add v7 to workflow</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/4320041ed380b20e97d388d56a7fb4f9b8c20e79\"><code>4320041</code></a>\nfeat: signed commits (v7) (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3057\">#3057</a>)</li>\n<li><a\nhref=\"https://github.com/peter-evans/create-pull-request/commit/0c2a66fe4af462aa0761939bd32efbdd46592737\"><code>0c2a66f</code></a>\nbuild(deps-dev): bump ts-jest from 29.2.4 to 29.2.5 (<a\nhref=\"https://redirect.github.com/peter-evans/create-pull-request/issues/3256\">#3256</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/peter-evans/create-pull-request/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=peter-evans/create-pull-request&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-18T08:18:32Z",
          "tree_id": "cd353686aa49304680ff4a6f407afd59f6aad946",
          "url": "https://github.com/hasura/ndc-postgres/commit/173b3bcc3e1fb4ba5d83e585250ce0583b808721"
        },
        "date": 1726648243877,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.1891695,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.472512799999976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.677625351586656,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.034280741490406,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2660212483163734,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.73082600000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.11869725,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.77684517960893,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6223368595135383,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2323416917603364,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.584533,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.23617499999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.941317086045085,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.6240028059530225,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3942526786670911,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.278529,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.0836241,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.946654499825744,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.856047202666186,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.36319482956234644,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.882848,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.0882395,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.982731503618165,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.731318436939965,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30878588257262485,
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
          "id": "1e7e72ee4a84c54f3ee58f3c7d93d1e6a25c60b7",
          "message": "chore(deps): Bump cachix/install-nix-action from V27 to 28 (#608)\n\nBumps\n[cachix/install-nix-action](https://github.com/cachix/install-nix-action)\nfrom V27 to 28. This release includes the previously tagged commit.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/install-nix-action/releases\">cachix/install-nix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v28</h2>\n<p>Nix 2.24.6 - <a\nhref=\"https://github.com/NixOS/nix/security/advisories/GHSA-h4vv-h3jq-v493\">https://github.com/NixOS/nix/security/advisories/GHSA-h4vv-h3jq-v493</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/3715ab1a11cac9e991980d7b4a28d80c7ebdd8f9\"><code>3715ab1</code></a>\nbump channel</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/1872f1ff9dba0f554710b1ed396fb6b2263ffdfd\"><code>1872f1f</code></a>\nNix: 2.22.1 -&gt; 2.24.6</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/e268b7aa055cc66167f27239fc889bcd1b15683c\"><code>e268b7a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/213\">#213</a>\nfrom phaer/patch-1</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/5b8c65d4d79bb2d232054c72252fa78a29c36b8a\"><code>5b8c65d</code></a>\nUpdate README: hardware accel is available now...</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/ba01fffc512be2cf5d4dce85159f0e40621f84ec\"><code>ba01fff</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/210\">#210</a>\nfrom guoard/patch-1</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/474f0a77aa820d33566f8f2035f8268d4023cc13\"><code>474f0a7</code></a>\ndocs(readme): update checkout action version</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/725982224ce3b974b7abc7df9ca873679eda8939\"><code>7259822</code></a>\nreadme: V27</li>\n<li>See full diff in <a\nhref=\"https://github.com/cachix/install-nix-action/compare/V27...V28\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-18T08:18:45Z",
          "tree_id": "1a43b8bfe7cb1bf971e45442064be367eb1505ca",
          "url": "https://github.com/hasura/ndc-postgres/commit/1e7e72ee4a84c54f3ee58f3c7d93d1e6a25c60b7"
        },
        "date": 1726648248912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.238625499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.66044674999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.311084892978425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.660107478388216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2994899686674563,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.670095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.0653686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.179296964879924,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3438911760442096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2131308845104074,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.925351,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.42407509999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.058714645452998,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.653326862224478,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3278304320943323,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.151086500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.17266285000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.508810499585632,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.484026942730949,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.309219028819036,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.1090185,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.2618045,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.529233207287273,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.000949797516579,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31458249225034446,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}