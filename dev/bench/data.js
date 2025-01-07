window.BENCHMARK_DATA = {
  "lastUpdate": 1736274459421,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
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
          "id": "449c8f9dc891b186f3c84dfcf8f3ddbb498e614c",
          "message": "chore(deps): Bump sqlx from 0.8.1 to 0.8.2 (#606)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.8.1 to 0.8.2.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.8.2 - 2024-09-02</h2>\n<p>10 pull requests were merged this release cycle.</p>\n<p>This release addresses a few regressions that have occurred, and\nrefines SQLx's MSRV policy (see <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/FAQ.md\">the\nFAQ</a>).</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3447\">#3447</a>]:\nClarify usage of Json/Jsonb in query macros [[<a\nhref=\"https://github.com/Lachstec\"><code>@​Lachstec</code></a>]]</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3424\">#3424</a>]:\nRemove deprecated feature-names from <code>Cargo.toml</code> files in\nexamples [[<a\nhref=\"https://github.com/carschandler\"><code>@​carschandler</code></a>]]</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3403\">#3403</a>]:\nFix (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3395\">#3395</a>)\nsqlx::test macro in 0.8 [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3411\">#3411</a>]:\nfix: Use rfc3339 to decode date from text [[<a\nhref=\"https://github.com/pierre-wehbe\"><code>@​pierre-wehbe</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3453\">#3453</a>]:\nfix(<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3445\">#3445</a>):\nPgHasArrayType [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]\n<ul>\n<li>Fixes <code>#[sqlx(no_pg_array)]</code> being forbidden on\n<code>#[derive(Type)]</code> structs.</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3454\">#3454</a>]:\nfix: non snake case warning [[<a\nhref=\"https://github.com/joeydewaal\"><code>@​joeydewaal</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3459\">#3459</a>]:\nPgsql cube type compile fail [[<a\nhref=\"https://github.com/kdesjard\"><code>@​kdesjard</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3465\">#3465</a>]:\nfix(postgres): max number of binds is 65535, not 32767 (regression) [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3467\">#3467</a>]:\nfix cancellation issues with <code>PgListener</code>,\n<code>PgStream::recv()</code> [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>Fixes cryptic <code>unknown message: &quot;\\\\0&quot;</code>\nerror</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3474\">#3474</a>]:\nFix try_get example in README.md [[<a\nhref=\"https://github.com/luveti\"><code>@​luveti</code></a>]]</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3403\">#3403</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3403\">launchbadge/sqlx#3403</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3411\">#3411</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3411\">launchbadge/sqlx#3411</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3424\">#3424</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3424\">launchbadge/sqlx#3424</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3447\">#3447</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3447\">launchbadge/sqlx#3447</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3453\">#3453</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3453\">launchbadge/sqlx#3453</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3454\">#3454</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3454\">launchbadge/sqlx#3454</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3455\">#3455</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3455\">launchbadge/sqlx#3455</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3459\">#3459</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3459\">launchbadge/sqlx#3459</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3465\">#3465</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3465\">launchbadge/sqlx#3465</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3467\">#3467</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3467\">launchbadge/sqlx#3467</a>\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3474\">#3474</a>:\n<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/pull/3474\">launchbadge/sqlx#3474</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/10bec327703303eca5f8ec5809c4713a4294313d\"><code>10bec32</code></a>\ndoc(FAQ): add example for MSRV</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/c253e65819c407f13c96adeb23085d02b46dbb93\"><code>c253e65</code></a>\nchore: prepare 0.8.2 release</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/998344dcb7375a1481159c53b550c549a06ccdeb\"><code>998344d</code></a>\ndoc(FAQ): refine MSRV policy</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/6cb6fce793fbd12308916bf357529a43cf61a771\"><code>6cb6fce</code></a>\nfix(mysql): &quot;exclusive range pattern is experimental&quot;\nerror</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/fd80f998acb432162911cff12ca7527eff75bae6\"><code>fd80f99</code></a>\nfix: Use rfc3339 to decode date from text (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3411\">#3411</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/ad2936a9c479214f90456102e218189d563f103d\"><code>ad2936a</code></a>\nFix try_get example in README.md (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3474\">#3474</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e10789d9d76cbff2755f977b7a126bd67a1ec5e5\"><code>e10789d</code></a>\nfix cancellation issues with <code>PgListener</code>,\n<code>PgStream::recv()</code> (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3467\">#3467</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/20ba796b0d0b8547d2a6f00720294e2ad46700d7\"><code>20ba796</code></a>\nfix(postgres): max number of binds is 65535, not 32767 (regression)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/371cf4a0cc8e4e3183ce1a276274941c75957490\"><code>371cf4a</code></a>\nPgsql cube type compile fail (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3459\">#3459</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/8a17bef7d76b2e885dc8f8c43d30568b79ac7345\"><code>8a17bef</code></a>\nRemove deprecated feature-names from <code>Cargo.toml</code> files in\nexamples (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3424\">#3424</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.8.1...v0.8.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.8.1&new-version=0.8.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-18T08:21:41Z",
          "tree_id": "c4ebc04d50db825593c7cb2ca7d502657479d6b4",
          "url": "https://github.com/hasura/ndc-postgres/commit/449c8f9dc891b186f3c84dfcf8f3ddbb498e614c"
        },
        "date": 1726648778682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.6838725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.940615099999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.086102487287745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.18370683315369,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30390802482636636,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.542606,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.31771729999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.7630466401527,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5989258153992765,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3886150541751197,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.717565,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.682097,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.116992094152618,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.905047604631282,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4547324395891019,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.850318,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.39846159999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.964546118321785,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.666768469157368,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4017634867358298,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.545178,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.48991220000003,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.503491835454415,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.309968353539336,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36158009147523945,
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
          "id": "5fea61913eb39340d78339f1fded2086aca40836",
          "message": "Update to Rust 1.81.0, fix clippy suggestions (#610)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpgrade to Rust 1.81.0, fix clippy lint suggestions.\n\n### How\n\nUpdate `rust-toolchain.yaml`",
          "timestamp": "2024-09-18T12:10:01Z",
          "tree_id": "9ba2a77ecf50886789c811a9ef7db61f7aa59cb9",
          "url": "https://github.com/hasura/ndc-postgres/commit/5fea61913eb39340d78339f1fded2086aca40836"
        },
        "date": 1726662131189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.78316,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.309500400000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.919968797151652,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.658919262114489,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29643034714743083,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.99868599999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.90231939999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.47700124273186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2295944710772488,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2122193212701869,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.308057500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.11299889999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.070906443781112,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.957020296959712,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3936541136539911,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.2985385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.16064259999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.938709497407316,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.125252007407369,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3648674602780324,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.325943,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.85440069999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.73042976052066,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.158708129007252,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29854909281156233,
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
          "id": "ad37db552236f8dcb9b6f8d506fa40b85fdbff39",
          "message": "chore(deps): Bump serde from 1.0.209 to 1.0.210 (#611)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.209 to\n1.0.210.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.210</h2>\n<ul>\n<li>Support serializing and deserializing <code>IpAddr</code> and\n<code>SocketAddr</code> in no-std mode on Rust 1.77+ (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2816\">#2816</a>,\nthanks <a\nhref=\"https://github.com/MathiasKoch\"><code>@​MathiasKoch</code></a>)</li>\n<li>Make <code>serde::ser::StdError</code> and\n<code>serde::de::StdError</code> equivalent to\n<code>core::error::Error</code> on Rust 1.81+ (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2818\">#2818</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/89c4b02bf32ceae5b17d89f93a452ccc195ca038\"><code>89c4b02</code></a>\nRelease 1.0.210</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/eeb8e44cda15f929796cd72241b0311e0bd04e67\"><code>eeb8e44</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2818\">#2818</a>\nfrom dtolnay/coreerror</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/785c2d9605ee73cc172dfd421228c1dccca984c9\"><code>785c2d9</code></a>\nStabilize no-std StdError trait</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d549f048e10bcb5e677afaf7b99d0ed3604b113b\"><code>d549f04</code></a>\nReformat parse_ip_impl definition and calls</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/4c0dd63011434905265e2710bb9186e09e4f8ec2\"><code>4c0dd63</code></a>\nDelete attr support from core::net deserialization macros</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/26fb1341651c4e0ae4d58c675db3ca2a0d6e12c2\"><code>26fb134</code></a>\nRelocate cfg attrs out of parse_ip_impl and parse_socket_impl</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/07e614b52b5ab3387d86d3198e5f52cd1f5ff3cb\"><code>07e614b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2817\">#2817</a>\nfrom dtolnay/corenet</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b1f899fbe81f070803d9f7ca6e5d1cc3f19c9ea2\"><code>b1f899f</code></a>\nDelete doc(cfg) attribute from impls that are supported in no-std</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b4f860e62767828beb3ef91721b6c56a31f9baad\"><code>b4f860e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2816\">#2816</a>\nfrom MathiasKoch/chore/core-net</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d940fe1b4934f097b0333dcb87bec5ee308d39cd\"><code>d940fe1</code></a>\nReuse existing Buf wrapper as replacement for std::io::Write</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.209...v1.0.210\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.209&new-version=1.0.210)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-24T10:05:28Z",
          "tree_id": "1002b9ca5c529f207039e299394067bec011ee9c",
          "url": "https://github.com/hasura/ndc-postgres/commit/ad37db552236f8dcb9b6f8d506fa40b85fdbff39"
        },
        "date": 1727172817209,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.253426,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.96261039999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.510601249600676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.227106203267475,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3066089082987056,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.799114,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.5562,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.544896601125835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.577383356406635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3653098516918719,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.724156,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 76.63152469999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.48649817067208,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.015792604531676,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.49894720427729633,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.8585615,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 65.56507925000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.804799504139762,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5683537571329715,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38057198960504,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.627044,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 64.91973100000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.447233472598615,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.115984633205198,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3442876457040949,
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
          "id": "99d34edebed1fdf1ad7a48f8b0aa02ed1e9ab7a2",
          "message": "chore(deps): Bump insta from 1.39.0 to 1.40.0 (#615)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.39.0 to 1.40.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/releases\">insta's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.40.0</h2>\n<h2>Release Notes</h2>\n<ul>\n<li>\n<p><code>cargo-insta</code> no longer panics when running <code>cargo\ntest --accept --workspace</code>\non a workspace with a default crate. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/532\">#532</a></p>\n</li>\n<li>\n<p>MSRV for <code>insta</code> has been raised to 1.60, and for\n<code>cargo-insta</code> to 1.64.</p>\n</li>\n<li>\n<p>Added support for compact debug snapshots\n(<code>assert_compact_debug_snapshot</code>). <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/514\">#514</a></p>\n</li>\n<li>\n<p>Deprecate <code>--no-force-pass</code> in <code>cargo-insta</code>.\nThe <code>--check</code> option covers the\nsame functionality and has a clearer name. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/513\">#513</a></p>\n</li>\n<li>\n<p>Inline snapshots now use the required number of <code>#</code>s to\nescape the snapshot\nvalue, rather than always using <code>###</code>. This allows\nsnapshotting values which\nthemselves contain <code>###</code>. If there are no existing\n<code>#</code> characters in the\nsnapshot value, a single <code>#</code> will be used. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/540\">#540</a></p>\n</li>\n<li>\n<p>Inline snapshots can now be updated with\n<code>--force-update-snapshots</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/569\">#569</a></p>\n</li>\n<li>\n<p><code>cargo insta test</code> accepts multiple <code>--exclude</code>\nflags. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/520\">#520</a></p>\n</li>\n<li>\n<p><code>test</code> <code>runner</code> in insta's yaml config works.\n<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/544\">#544</a></p>\n</li>\n<li>\n<p>Print a warning when encountering old snapshot formats. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/503\">#503</a></p>\n</li>\n<li>\n<p>Group the options in <code>cargo insta --help</code>, upgrade to\n<code>clap</code> from <code>structopt</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/518\">#518</a></p>\n</li>\n<li>\n<p>No longer suggest running <code>cargo insta</code> message when\nrunning <code>cargo insta test --check</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/515\">#515</a></p>\n</li>\n<li>\n<p>Print a clearer error message when accepting a snapshot that was\nremoved. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/516\">#516</a></p>\n</li>\n<li>\n<p>Mark <code>require-full-match</code> as experimental, given some\ncorner-cases are currently difficult to manage. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/497\">#497</a></p>\n</li>\n<li>\n<p>Add a new integration test approach for <code>cargo-insta</code> and\na set of integration tests. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/537\">#537</a></p>\n</li>\n<li>\n<p>Enable Filters to be created from <code>IntoIterator</code> types,\nrather than just <code>Vec</code>s. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/570\">#570</a></p>\n</li>\n<li>\n<p>Implemented total sort order for an internal <code>Key</code> type\ncorrectly. This prevents potential\ncrashes introduced by the new sort algorithm in Rust 1.81. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/586\">#586</a></p>\n</li>\n</ul>\n<h2>Install cargo-insta 1.40.0</h2>\n<h3>Install prebuilt binaries via shell script</h3>\n<pre lang=\"sh\"><code>curl --proto '=https' --tlsv1.2 -LsSf\nhttps://github.com/mitsuhiko/insta/releases/download/1.40.0/cargo-insta-installer.sh\n| sh\n</code></pre>\n<h3>Install prebuilt binaries via powershell script</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.40.0</h2>\n<ul>\n<li>\n<p><code>cargo-insta</code> no longer panics when running <code>cargo\ninsta test --accept --workspace</code>\non a workspace with a default crate. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/532\">#532</a></p>\n</li>\n<li>\n<p>MSRV for <code>insta</code> has been raised to 1.60, and for\n<code>cargo-insta</code> to 1.64.</p>\n</li>\n<li>\n<p>Added support for compact debug snapshots\n(<code>assert_compact_debug_snapshot</code>). <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/514\">#514</a></p>\n</li>\n<li>\n<p>Deprecate <code>--no-force-pass</code> in <code>cargo-insta</code>.\nThe <code>--check</code> option covers the\nsame functionality and has a clearer name. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/513\">#513</a></p>\n</li>\n<li>\n<p>Inline snapshots now use the required number of <code>#</code>s to\nescape the snapshot\nvalue, rather than always using <code>###</code>. This allows\nsnapshotting values which\nthemselves contain <code>###</code>. If there are no existing\n<code>#</code> characters in the\nsnapshot value, a single <code>#</code> will be used. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/540\">#540</a></p>\n</li>\n<li>\n<p>Inline snapshots can now be updated with\n<code>--force-update-snapshots</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/569\">#569</a></p>\n</li>\n<li>\n<p><code>cargo insta test</code> accepts multiple <code>--exclude</code>\nflags. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/520\">#520</a></p>\n</li>\n<li>\n<p><code>test</code> <code>runner</code> in insta's yaml config works.\n<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/544\">#544</a></p>\n</li>\n<li>\n<p>Print a warning when encountering old snapshot formats. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/503\">#503</a></p>\n</li>\n<li>\n<p>Group the options in <code>cargo insta --help</code>, upgrade to\n<code>clap</code> from <code>structopt</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/518\">#518</a></p>\n</li>\n<li>\n<p>No longer suggest running <code>cargo insta</code> message when\nrunning <code>cargo insta test --check</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/515\">#515</a></p>\n</li>\n<li>\n<p>Print a clearer error message when accepting a snapshot that was\nremoved. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/516\">#516</a></p>\n</li>\n<li>\n<p>Mark <code>require-full-match</code> as experimental, given some\ncorner-cases are currently difficult to manage. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/497\">#497</a></p>\n</li>\n<li>\n<p>Add a new integration test approach for <code>cargo-insta</code> and\na set of integration tests. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/537\">#537</a></p>\n</li>\n<li>\n<p>Enable Filters to be created from <code>IntoIterator</code> types,\nrather than just <code>Vec</code>s. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/570\">#570</a></p>\n</li>\n<li>\n<p>Implemented total sort order for an internal <code>Key</code> type\ncorrectly. This prevents potential\ncrashes introduced by the new sort algorithm in Rust 1.81. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/586\">#586</a></p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/83f33653b687c84823fe6af00806107e1dd4f4b8\"><code>83f3365</code></a>\n1.40.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/8893db7600b9d0a4066ed8766dc1df4b0c191a1b\"><code>8893db7</code></a>\nImplement total ord for Key (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/586\">#586</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/a4231cc826400e7df3a7847532407bc7663d6970\"><code>a4231cc</code></a>\nAdd test for <code>find_snapshot_macro</code> (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/582\">#582</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/d609d7d3a86339ce695d942aed6a1c98b83c1066\"><code>d609d7d</code></a>\nAdd integration test for force updating (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/580\">#580</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/02665eafb291a04ae7460176dfe91284a17afa2a\"><code>02665ea</code></a>\nMask insta env vars in integration tests (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/579\">#579</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ef7abb839e08932fdd32ce9a90e4593e138416c2\"><code>ef7abb8</code></a>\nUse different tests for redactions (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/578\">#578</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/597199d9dcfbb0b5c20f785e8ed7a80993bc743e\"><code>597199d</code></a>\nMake <code>test_normalize_inline_snapshot</code> easier to read (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/577\">#577</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ca87b84da2878ecab644baf6f3ba11dde53f7668\"><code>ca87b84</code></a>\nFix latest clippy (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/574\">#574</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/4bea0fb821ee056c24579b5fc8a9b10b08eb6a75\"><code>4bea0fb</code></a>\nUnify handling of file &amp; inline snapshots (compat) (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/528\">#528</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/c29db016065c78658eeda8b683b44ecc91520e62\"><code>c29db01</code></a>\nEnable inline snapshots to be force-updated (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/569\">#569</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.39.0...1.40.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.39.0&new-version=1.40.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-24T10:10:02Z",
          "tree_id": "c04f37126ba04b0059040fca719885c649eb70de",
          "url": "https://github.com/hasura/ndc-postgres/commit/99d34edebed1fdf1ad7a48f8b0aa02ed1e9ab7a2"
        },
        "date": 1727173288535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.672642,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.12619374999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.941526920379877,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.196696966388325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3021409077165862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.8044605,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.82760894999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.845092606672765,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7375890212588416,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.432389328642778,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.874199,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.01918719999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 34.170913696135436,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.932831645585374,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5215666855851904,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.305361500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.91593780000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.221362517122714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.100943557975064,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3725627746601405,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.547581,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.54991949999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.141072803779533,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.500590202956037,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42170443963683524,
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
          "id": "014c4140dd33b5f31f8751f61da72edf6cc9bf19",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.0.1 to 2.0.2 (#616)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.0.1 to 2.0.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.2</h2>\n<h2>Release Summary</h2>\n<p>This release introduces new tests for the\n<code>attach-dependencies</code> feature, along with support for\nabsolute paths in the <code>compose-file</code> input. Documentation for\nactions and workflows has been updated, and several dependencies related\nto GitHub actions and npm development have been bumped to ensure better\nperformance and stability.</p>\n<p>No breaking changes have been introduced.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>ci: add test for attach-dependencies by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/75\">hoverkraft-tech/compose-action#75</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.13.2 to\n0.13.3 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/77\">hoverkraft-tech/compose-action#77</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/78\">hoverkraft-tech/compose-action#78</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.13.3 to\n0.14.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/79\">hoverkraft-tech/compose-action#79</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.5.1 to\n0.6.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/80\">hoverkraft-tech/compose-action#80</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 5.0.1 to 5.0.2 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/84\">hoverkraft-tech/compose-action#84</a></li>\n<li>fix: support absolute path for compose-file input by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/85\">hoverkraft-tech/compose-action#85</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/86\">hoverkraft-tech/compose-action#86</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.14.0 to\n0.15.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/87\">hoverkraft-tech/compose-action#87</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.1...v2.0.2\">https://github.com/hoverkraft-tech/compose-action/compare/v2.0.1...v2.0.2</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/f1ca7fefe3627c2dab0ae1db43a106d82740245e\"><code>f1ca7fe</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/89f869f5fd19c482b5fd20c8acedbd47d1d6dafe\"><code>89f869f</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/4d0ceccdad31ed8b8a079ffe1d5fe41d45512fd4\"><code>4d0cecc</code></a>\nfix: support absolute path for compose-file input</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ce6f83d4fb99a986d21180b60a220a7164b3fd49\"><code>ce6f83d</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/7e2bd7605dcd0e279b5a35a8e7e5f60996bcf899\"><code>7e2bd76</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-nodejs</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/31f7d2cddad626c3b92bbef2e54221dde560b1ff\"><code>31f7d2c</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8391f9b39c58e898a17f33ec19477fb91f60f959\"><code>8391f9b</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/0fce44d5264bf18aca1dc7383d0f908552449ae4\"><code>0fce44d</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/89eb95b9281b4eefa245963887412c93b3670fbe\"><code>89eb95b</code></a>\ndocs: add basic usage exemple</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/f7ac24c0d192c0730612600959e874e63e9b0488\"><code>f7ac24c</code></a>\nci: add test for attach-dependencies</li>\n<li>See full diff in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.1...v2.0.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.0.1&new-version=2.0.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-09-24T10:10:15Z",
          "tree_id": "a136134d0156030f5372fe2c40159b90d98ff336",
          "url": "https://github.com/hasura/ndc-postgres/commit/014c4140dd33b5f31f8751f61da72edf6cc9bf19"
        },
        "date": 1727173335158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.120934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.571312,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.637781707757753,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.939843463058843,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.32432439578448746,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.81689,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.82981259999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.386294377545255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9707537067549055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.46971202804923845,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.5035745,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.5515278,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 32.78872404836574,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.545797501274137,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5103698887534914,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.243862,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.51718299999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.81607303593306,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.179142489960398,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4339340965966474,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.099281000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.54502935,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.879218517620284,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.028797722791669,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4134712180777437,
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
          "id": "7b969a3eb28be8fddf2c6efd9589e0eb0832c185",
          "message": "Ignore build data with dash as well (#625)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`cargo machete` has started freaking out about this in CI, this is the\n10x way to stop it being upset. I am sorry.",
          "timestamp": "2024-10-04T09:29:32Z",
          "tree_id": "3cd8871245643eaf273cdd292a1e7e53a7cf0f6c",
          "url": "https://github.com/hasura/ndc-postgres/commit/7b969a3eb28be8fddf2c6efd9589e0eb0832c185"
        },
        "date": 1728034768467,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.257023,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.7438567,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.818958921173815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.029743977311393,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31622034629226975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.288047,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.01242350000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.84778662688574,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.652062302052066,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.39371707679557705,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.4945495,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.8805813,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.34473682841552,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.342384041365868,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48264909764986014,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.625828,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.152747,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.38697534677341,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.236213030181467,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40004976945945325,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.026520500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.58495644999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.639368152106545,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.014798829147249,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36620852120305125,
            "unit": "ms"
          }
        ]
      },
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
          "id": "2579844b0b7d6c6018bc5e69024c348af58013f5",
          "message": "Make introspection FK column order deterministic (#624)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n\n[ENG-1081](https://linear.app/hasura/issue/ENG-1081/postgres-foreign-key-constaints-are-wrong)\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\nOrder of foreign key columns is currently not deterministic.\nThis is a problem for composite foreign keys, where we independently\nbuild two lists: the local columns and the foreign colums they map to.\n\nThe relevant introspection code follows:\n\nConstrained (left-hand side) columns:\n```sql\n        SELECT\n          c_unnest.constraint_id,\n          array_agg(col.column_name) as key_columns\n        FROM\n          (\n            SELECT\n              c.oid as constraint_id,\n              c.conrelid as relation_id,\n              unnest(c.conkey) as column_number\n            FROM\n              pg_catalog.pg_constraint as c\n          ) AS c_unnest\n        INNER JOIN\n          columns col\n          USING (relation_id, column_number)\n        GROUP BY c_unnest.constraint_id\n```\nForeign (right-hand side) columns\n\n```sql\n        SELECT\n          c_unnest.constraint_id,\n          array_agg(col.column_name) as referenced_columns\n        FROM\n          (\n            SELECT\n              c.oid as constraint_id,\n              c.confrelid as relation_id,\n              unnest(c.confkey) as column_number\n            FROM\n              pg_catalog.pg_constraint as c\n          ) AS c_unnest\n        INNER JOIN\n          columns col\n          USING (relation_id, column_number)\n        GROUP BY c_unnest.constraint_id\n```\n\nThe above code attempts to fetch a list of columns names for both\nleft-hand and right-hand sides. Given a foreign key like so:\n\n```sql\nFOREIGN KEY (a, b) REFERENCES public.table(af, bf),\n```\nWe want an array of the constrained columns:\n\n| constraint_id | key_columns |\n|--------------|----------------|\n| 1                  | ['a','b']           |\n\nAnd an array of the foreign columns:\n\n| constraint_id | referenced_columns |\n|--------------|----------------|\n| 1                  | ['af','bf']           |\n\n### The problem\n\n`pg_catalog.pg_constraint.conkey` is an array of integers referencing\nconstrained columns\n`pg_catalog.pg_constraint.conkey` is an array of integers referencing\nforeign columns\n\nThe item at each index in each array correspond to the item in the same\nindex in the other array\n\nWe try to map the arrays of integers, to arrays of string column names\n\nWe need this behavior to be deterministic, so that after the mapping the\nindices in each array still correspond to the same index in the other\narray.\n\nHowever, `unnest` is not guaranteed to preserve order. And neither is\n`array_agg`\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\nWe use `UNNEST` as a table function, so we can use it `WITH ORDINALITY`.\nThis gives us an index we can use to make sure the ordering is\ndeterministic.\n\nTo ensure we keep that order, we add an `ORDER BY` clause inside\n`array_agg`.\n\nNote that using a subquery with an ordered result (via a normal `ORDER\nBY` clause) before `array_agg` would not work!\n\n```sql\n        SELECT c.oid as constraint_id,\n            array_agg(\n                col.column_name\n                ORDER BY k.index\n            ) as key_columns\n        FROM pg_catalog.pg_constraint as c\n            CROSS JOIN UNNEST(c.conkey) WITH ORDINALITY k(column_number, index)\n            INNER JOIN columns col ON c.conrelid = col.relation_id\n            AND k.column_number = col.column_number\n        GROUP BY c.oid\n```",
          "timestamp": "2024-10-04T14:40:12Z",
          "tree_id": "43e0b83691b368bf198c21c2497a3982c3b3bb6f",
          "url": "https://github.com/hasura/ndc-postgres/commit/2579844b0b7d6c6018bc5e69024c348af58013f5"
        },
        "date": 1728053181539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.144323,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.06791399999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.277175094747657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.39666370819092,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.32758193400934793,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.891136,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.69765844999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.2732023023203,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7867364407183146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3907660047901422,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.546341,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.43787459999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.380946666557787,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.285644393127622,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45764755895024883,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.962708500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.92684439999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.825969265008798,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.446540167439789,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3668593377564025,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.435046,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.86171150000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.46245319123925,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.284616404972205,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3765536459335776,
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
          "id": "3ecf2bec20b5f4e70c006efc5d00ed2a59f4a282",
          "message": "Bump version to 1.1.2 (#628)\n\nThis bumps the version in `Cargo.toml` and updates `changelog.md`.\n\nCo-authored-by: BenoitRanque <25712958+BenoitRanque@users.noreply.github.com>",
          "timestamp": "2024-10-14T23:57:45Z",
          "tree_id": "0fe1eabc011a3d9a118562ab5a84276e19e20a9b",
          "url": "https://github.com/hasura/ndc-postgres/commit/3ecf2bec20b5f4e70c006efc5d00ed2a59f4a282"
        },
        "date": 1728950631080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.799838,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.99157259999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.0337536474117,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.274887457194886,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.306946272715336,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.292845,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.10304529999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.5951929100264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4823686529700097,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2154478662121854,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.622185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.86183579999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.663710699040106,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.237969846404507,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4115008651543985,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.508201,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.76258549999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.096554662527225,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.4528656128056525,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3118317191424639,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.043264,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.4596905,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.98825493198204,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.765712035663725,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32519193685382414,
            "unit": "ms"
          }
        ]
      },
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
      }
    ]
  }
}