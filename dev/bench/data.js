window.BENCHMARK_DATA = {
  "lastUpdate": 1716541964966,
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
          "id": "87aecdd4e0dc0078f456b5256ec8cccf6f62c105",
          "message": "Use the full SHA when updating ndc-postgres-multitenant. (#440)\n\n### What\n\nCargo chokes when using different variations of Git commit refs, even if\nthey eventually point to the same commit. It believes they're different\nversions and won't reconcile them, as there's no semver-based versioning\nto lean on.\n\nIt's safer to always use the full SHA in order to avoid the situation\nwhere different SHA lengths are used.\n\n### How\n\nI removed `--short`.",
          "timestamp": "2024-04-23T16:01:08Z",
          "tree_id": "5a228f6fb51ff5c9b82c02ab0c49aa0a33a12d7d",
          "url": "https://github.com/hasura/ndc-postgres/commit/87aecdd4e0dc0078f456b5256ec8cccf6f62c105"
        },
        "date": 1713888491453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.15096,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 63.638121999999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.9346672935731,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.430689470179985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2801183114364882,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.33323100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.9159512,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.9771018793921,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1036683341230926,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.44669980920102553,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.129238,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.29121010000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.3710202173188,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.669695341288943,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41864797235629464,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.890395,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.17219019999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.12969972839196,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6182279301192395,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3555257601511861,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.565367,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.1155121,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.50864025586281,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.155672293914876,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.374457810940789,
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
          "id": "857c65374c2d022f88661215c14f74a08bd8685d",
          "message": "Add semicolons. (#441)\n\n### What\n\nMake it clear we're returning `()`.\n\n### How\n\n```\n$ cargo clippy --all-targets --all-features --fix\n```",
          "timestamp": "2024-04-24T16:31:15Z",
          "tree_id": "24d6e7706fa70058822d6bd4212fd4d45893c789",
          "url": "https://github.com/hasura/ndc-postgres/commit/857c65374c2d022f88661215c14f74a08bd8685d"
        },
        "date": 1713976701947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.655254,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 60.22364679999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.576198244536656,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.78488664977833,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.288469751719506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 80.988081,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.72884920000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.24755594248288,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.086412900659383,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4858726463810978,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.756029,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.856389,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.0277569938074,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.470092502471218,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45082718254577747,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.837825,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.803478,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.37157089310745,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.621950644364766,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4055668370933271,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.391097,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.56790175,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.47798176975933,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.985999689550219,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3828718884197352,
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
          "id": "076c723aee876d1fc22528091078ceb7e07f1458",
          "message": "Clean up string construction a little. (#442)\n\n### What\n\nThis removes `format!` where possible, inlines `format!` arguments if\npossible, and converts `.as_str()` to `&`.\n\n### How\n\nI ran `cargo clippy --fix` to inline the arguments. When reviewing the\ndiff, I realized that we overcomplicate a few things.\n\n1. Where the result of `format!` has been passed to `push_str`, we can\ncall that multiple times instead, which IMO makes things clearer and\navoids building an intermediate string.\n2. When we use it to stringify a single value, we can call\n`.to_string()` instead.\n3. Paths can be built using `Path::join`.\n4. `.as_ref()` can be replaced with `&` in many places.",
          "timestamp": "2024-04-25T10:34:48Z",
          "tree_id": "c5ef845905deb801d3bf8af70ae989434c5365f6",
          "url": "https://github.com/hasura/ndc-postgres/commit/076c723aee876d1fc22528091078ceb7e07f1458"
        },
        "date": 1714041637414,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 45.383925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 66.08564869999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.689215406554066,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.573807630824351,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.306965006237377,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.797398,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.60704489999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 62.95356077900021,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.062394170160232,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47857052138831446,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 63.139896,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 106.340106,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.73188246520126,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.41899278207633,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4980063856609895,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 55.841057,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 92.97651679999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.67248693528881,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.8926365330741035,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4354030581263975,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 56.523227,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 91.139546,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.4180922216815,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.028425996274223,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4136567506757298,
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
          "id": "9deabe4fa5cab6f81f0b9d5d72e2933fa5d6fa27",
          "message": "Display the connection pool span to the user. (#443)\n\n### What\n\nEstablishing the connection pool can take a little while and it's\nimportant that we convey this to the user, lest they believe that we're\njust sitting around not processing their request.\n\n### How\n\n```rust\ninternal.visibility = \"user\"\n```",
          "timestamp": "2024-04-25T14:26:40Z",
          "tree_id": "5558968a0465c73cff448b2d5c77380e291c4688",
          "url": "https://github.com/hasura/ndc-postgres/commit/9deabe4fa5cab6f81f0b9d5d72e2933fa5d6fa27"
        },
        "date": 1714055560915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.3314985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 60.7263066,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.396430391946545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.823975565277465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29239849575083043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.088865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.529066,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.355965705372135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.034542229398191,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4077888006648246,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.399488,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.52666979999985,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.8860140304881,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.390350123914374,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4659148844363201,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.503014,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.7090695,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.247569928346714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.26527568689739,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.375984213792822,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.840136,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.3797445,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.067907793483286,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.114660760400362,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.33902860066716556,
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
          "id": "af2b6724e89b853986b96859d497379b2086bf2f",
          "message": "chore(deps): Bump schemars from 0.8.16 to 0.8.17 (#446)\n\nBumps [schemars](https://github.com/GREsau/schemars) from 0.8.16 to\n0.8.17.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/releases\">schemars's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.8.17</h2>\n<h3>Changed:</h3>\n<ul>\n<li>Update to syn 2.0, which should improve compile times in many cases\n(<a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/281\">GREsau/schemars#281</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/blob/master/CHANGELOG.md\">schemars's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.8.17] - 2024-04-28</h2>\n<h3>Changed:</h3>\n<ul>\n<li>Update to syn 2.0, which should improve compile times in many cases\n(<a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/281\">GREsau/schemars#281</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/e5ef0f8d7b246ffccb3798fee6950c5e8b5a91df\"><code>e5ef0f8</code></a>\nv0.8.17</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/df00e2fd71ea7139ad8ab713b32a0f6792b6c094\"><code>df00e2f</code></a>\nAdd comment explaining why we double-parse an <code>Expr</code></li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/bbedf130cebe467296e4487edc3d6291a6f44d57\"><code>bbedf13</code></a>\nInclude Cargo.lock file in git</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/9501fe319f4eaab4ac9df13103442d703ee62522\"><code>9501fe3</code></a>\nUpdate to syn 2 and serde_derive_internals 0.29</li>\n<li>See full diff in <a\nhref=\"https://github.com/GREsau/schemars/compare/v0.8.16...v0.8.17\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=schemars&package-manager=cargo&previous-version=0.8.16&new-version=0.8.17)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-29T14:34:17Z",
          "tree_id": "3b052a1eebdeb558223cfb4de2fe3c956f5b4590",
          "url": "https://github.com/hasura/ndc-postgres/commit/af2b6724e89b853986b96859d497379b2086bf2f"
        },
        "date": 1714401694661,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.041819,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.585861399999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.001793710843543,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.805364228675238,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2938757813314654,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 81.484021,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 116.01286825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.04332487910525,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.2572808671242726,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5002614165550796,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.853707,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.09084059999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.72537105444595,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.180273072708978,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4523841241966849,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.415518500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.59768994999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.88735965651734,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.617158487634761,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37372265935065946,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.5655405,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 74.57865929999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.68404945474222,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.229029968737429,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35025736749905606,
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
          "id": "302f723e8539c4d9f39fdf099c849a33549729f8",
          "message": "ScalarTypeName ast: use enums instead of flags (#448)\n\n### What\n\nFollowup to the review suggestion:\nhttps://github.com/hasura/ndc-postgres/pull/431#discussion_r1571231393\n\nMakes the AST for ScalarType a bit more structured.\nUsing enums instead of flags makes things more explicit, so if we make a\nmistake it would not be one of \"I forgot to set the flag\" but rather \"I\nexplicitly chose the wrong variant\".\n\n### How\n\nUse the following representation:\n\n```rust\npub enum ScalarType {\n    BaseType(ScalarTypeName),\n    ArrayType(ScalarTypeName),\n}\n\npub enum ScalarTypeName {\n    Qualified {\n        schema_name: SchemaName,\n        type_name: String,\n    },\n    Unqualified(String),\n}\n```\n\nInstead of the previous:\n\n```rust\npub struct ScalarTypeName {\n    pub type_name: String,\n    pub schema_name: Option<SchemaName>,\n    pub is_array: bool,\n}\n```",
          "timestamp": "2024-04-29T14:47:44Z",
          "tree_id": "b2e20ab9910b77c169a65f01b58c62c4c4d40557",
          "url": "https://github.com/hasura/ndc-postgres/commit/302f723e8539c4d9f39fdf099c849a33549729f8"
        },
        "date": 1714402491077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.969194,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.31491049999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.858193970296007,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.31756155805963,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28637679295826207,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.93379,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.95975589999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.684748507443786,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.008156234650272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.39959231656865696,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.456975,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.74993119999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.76873531375961,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.986351299753196,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.46012637412825874,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.520292,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.30035020000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.09851682721896,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.904129359035551,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.394714601200982,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.9931795,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.15393835,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.25469788642458,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.254598210628188,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35433965952197183,
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
          "id": "9af42e829ffc4408a2756abb89e2ebd870d860ed",
          "message": "chore(deps): Bump serde from 1.0.198 to 1.0.199 (#447)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.198 to\n1.0.199.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.199</h2>\n<ul>\n<li>Fix ambiguous associated item when\n<code>forward_to_deserialize_any!</code> is used on an enum with\n<code>Error</code> variant (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2732\">#2732</a>,\nthanks <a\nhref=\"https://github.com/aatifsyed\"><code>@​aatifsyed</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/147702871760a38d2e97e0cd15d568559876aeda\"><code>1477028</code></a>\nRelease 1.0.199</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/789740be0d2cc1d4e280639039f189cc5d98fb40\"><code>789740b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2732\">#2732</a>\nfrom aatifsyed/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8fe7539bb2b46001f70751f1db60e1a7144f8f3d\"><code>8fe7539</code></a>\nfix: ambiguous associated type in forward_to_deserialize_any!</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/f6623a36548cfce02f880a33c6d2f420934c95c5\"><code>f6623a3</code></a>\nIgnore cast_precision_loss pedantic clippy lint</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.198...v1.0.199\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.198&new-version=1.0.199)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-29T14:47:46Z",
          "tree_id": "8e96910c8f2b3c4b4b29fb371e84d1d44b72479c",
          "url": "https://github.com/hasura/ndc-postgres/commit/9af42e829ffc4408a2756abb89e2ebd870d860ed"
        },
        "date": 1714402535064,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.537244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 57.2105982,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.864822050699676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.45300701032961,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29988537465015175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.510332,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 115.502491,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.25486072518573,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.0660671346295274,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4021764545387387,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 54.158170999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.92912405,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.76920395719688,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.941939560508651,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4419082252463614,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 50.2877,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 79.89583950000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 35.8786079234763,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.268221417135059,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41421501000700806,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 49.389228,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 75.47766849999992,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.64656884016084,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.7519678840994715,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3906984694985305,
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
          "id": "76dff575f47927bc531607f2ebed92d220fd7363",
          "message": "Introduce configuration version 4: Support schema-qualified type (#444)\n\n### What\n\nThis PR introduces the ability to refer to scalar types and complex\ntypes by a separate name in the ndc schema. This name is formed taking\ninto account the schema the type is defined in, in the same manner as we\ntreat tables.\n\nThe implementation is limited so far as it only includes the parsing of\nthis format and not its construction (though doing so for testing is as\nsimple as changing the default empty RawConfiguration value).\n\nThe reason for this is that this is already a sizable PR, so it would be\ngood to review and integrate before it includes CLI support and\nupgrading of tests.\n \n### How\n\nWhile this sounds innocuous it actually introduces an extra level of\nindirection. We used to only refer to scalar types by their unqualified\nname in both SQL generation and NDC schema. Now we record the defined\nname and schema of a type and derive a new name based off these which we\nuse to refer to the type everywhere in the generated schema.\n\nA knock-on effect of this is that it is now more appropriate to produce\na dedicated \"ScalarTypes\" object in introspection that includes both\nname data and aggregation functions and comparison operators for scalar\ntypes in nested objects. This actually simplifies the business logic of\nthe dataconnecter itself somewhat as well, since this new structure has\nthe same shape as the schema-response.",
          "timestamp": "2024-04-29T17:28:48Z",
          "tree_id": "47d73fbec46592b2a032c34c717ef57b4d63adcc",
          "url": "https://github.com/hasura/ndc-postgres/commit/76dff575f47927bc531607f2ebed92d220fd7363"
        },
        "date": 1714412096838,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.421377,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.04651059999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.879126507056647,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.28543709358247,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27689056697226233,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.1819445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.145893,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.99246771764888,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8252172359867416,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3848426411758456,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.816906,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.07330110000008,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.55523047078961,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.499044899674487,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4345770365127025,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.456974,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.9057414,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.15704517926896,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.042319258314784,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.34064984777532187,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.016112,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.3830129,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.86439025909168,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.803287809377778,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3708823116352438,
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
          "id": "619086260e30611bc7f8a27526bd76f024239dbc",
          "message": "use the v3 engine metadata.json instead of maintaining a local one (#445)\n\n### What\n\nThe v3-engine metadata.json we maintain is this repo keeps getting out\nof date.\nThis PR removes it completely, and uses a configuration that is maintain\nin v3 engine instead, which is used in tests, which means it is\nmaintained.",
          "timestamp": "2024-04-30T08:44:54Z",
          "tree_id": "938f49c07b1a7dbe462b8563eb45cf9a1b338a3d",
          "url": "https://github.com/hasura/ndc-postgres/commit/619086260e30611bc7f8a27526bd76f024239dbc"
        },
        "date": 1714467069195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.140392500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 57.779639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.5556256251589,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.015180387432284,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28959672549256954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.8148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 114.14752569999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.94478618465311,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1266358675599264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43602782151841657,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.484971,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.72391079999993,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.89858302921063,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.690272091804545,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4570724684245452,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.2883315,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.71115624999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.985386443129975,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.924293090535166,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41407320193959785,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.657242,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.723231,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 35.309403353724214,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6198939464115583,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37452052624157856,
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
          "id": "96db5981837e65cd578b9e52563db9e6a9acdc03",
          "message": "fix link to v3 repo (#449)",
          "timestamp": "2024-04-30T12:18:55Z",
          "tree_id": "ed4e743c7f6cae7680bf94e5f608638f75f95abd",
          "url": "https://github.com/hasura/ndc-postgres/commit/96db5981837e65cd578b9e52563db9e6a9acdc03"
        },
        "date": 1714479925791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.732944,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.08364339999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.7090186118189,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.151443963207711,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2857817926781399,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.627967,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 112.17420519999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.15494418595636,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9462164362587018,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.39338815450823617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 55.806408,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.85013599999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.46425721220078,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.417754486897707,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.48093483507450246,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.261761,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.24777,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 32.892551264725086,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.264886178813583,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41933883879076655,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.081009,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 73.32740759999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 32.45613462654906,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.615010905323814,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37517460587863094,
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
          "id": "cc0ca543b28220c562357c2b7811ba37158a7570",
          "message": "When acquiring a connection, ping the db only if it has been idle (#450)\n\n### What\n\nWhen we acquire a database connection from the pool, there's a high\nchance that the connection is alive and well. We add a new pool setting\nthat will only ping the database after a certain amount of time the\nconnection has been idle (default 60 seconds). This settings can be\nturned off.\n\n### How\n\nAdding a new pool settings option, and essentially doing this:\nhttps://docs.rs/sqlx/latest/sqlx/postgres/type.PgPoolOptions.html#example-custom-test_before_acquire-logic",
          "timestamp": "2024-05-02T23:17:12Z",
          "tree_id": "9e0805e19d0add806bf531678d6485de3831abc3",
          "url": "https://github.com/hasura/ndc-postgres/commit/cc0ca543b28220c562357c2b7811ba37158a7570"
        },
        "date": 1714692255090,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.200382,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.8208474,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.993332545218207,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.89154354122559,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28032710301727864,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.38394149999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.38397984999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.58421748595091,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.334240456985661,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4475354767955959,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.644655,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.20491539999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.64595277234357,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.331867759660597,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45463050744372013,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.940415,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.87358675,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.06446105174083,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.179700105823091,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4416106618549815,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.4410525,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.13906515,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.817784535487057,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.218732604725098,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40009125983591803,
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
          "id": "e313ba6c385ac963ea170c15ab02b3f2e4864f10",
          "message": "Fix otel exporter environment variable for just dev (#451)\n\n### What\n\nThe OTEL exporter env var used by `just dev` has changed. Instead of\nreplacing it with the new one, I've switched to using the cli flag.",
          "timestamp": "2024-05-03T07:58:08Z",
          "tree_id": "5666b68f4bbf8a6bba952775f1b3f2eff54957ee",
          "url": "https://github.com/hasura/ndc-postgres/commit/e313ba6c385ac963ea170c15ab02b3f2e4864f10"
        },
        "date": 1714723653570,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.618606,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 53.56787119999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.928987047042625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.565751553856003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2840661145434745,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.692102,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.229109,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.424264774419804,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.2601777569575106,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.44557647962654495,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.966076,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.63824780000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.492569457757835,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.948553806789722,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.46995788883330225,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.3061655,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.55425559999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.3373946791112,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.108240225323591,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37477516478599393,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.552587,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.25115075,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.85059056429816,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.829087232718692,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38988928224574243,
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
          "id": "db0db0d3c4e72fda4416d0b6b5e975e346ee04a7",
          "message": "chore(deps): Bump serde from 1.0.199 to 1.0.200 (#453)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.199 to\n1.0.200.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.200</h2>\n<ul>\n<li>Fix formatting of &quot;invalid type&quot; and &quot;invalid\nvalue&quot; deserialization error messages containing NaN or infinite\nfloats (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2733\">#2733</a>,\nthanks <a\nhref=\"https://github.com/jamessan\"><code>@​jamessan</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/cc865ac5236c094275b10bff4fa41e561b3e359f\"><code>cc865ac</code></a>\nRelease 1.0.200</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/2d973c1805dd9b613e89cc2375130a23f18ffa73\"><code>2d973c1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2733\">#2733</a>\nfrom jamessan/nan-decimal</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/6ca499b2dd3d520903095b202770eba2720ba9b5\"><code>6ca499b</code></a>\nOnly format Unexpected::Float with decimal point if it is finite</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.199...v1.0.200\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.199&new-version=1.0.200)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-06T15:07:52Z",
          "tree_id": "b5c36bd8a5f24ae7ce25380f8eede7c63a10e424",
          "url": "https://github.com/hasura/ndc-postgres/commit/db0db0d3c4e72fda4416d0b6b5e975e346ee04a7"
        },
        "date": 1715008533801,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.049876,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.8392984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.659645017964325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.004210994610654,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2822930293175403,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.752409,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.11934739999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.009179907476046,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.393908275350931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43089915333480777,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.0078855,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.33743769999992,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.442830767188042,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.559205632344884,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.49149987981951065,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.946591,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.6117264,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.18651866022923,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.931922957327469,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37410820580340404,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.3565765,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.92599039999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.864962507282456,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.010676447213875,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36910819726275906,
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
          "id": "6237449251fe624ffda3decf8991caf5c15ae6d3",
          "message": "chore(deps): Bump prometheus from 0.13.3 to 0.13.4 (#455)\n\nBumps [prometheus](https://github.com/tikv/rust-prometheus) from 0.13.3\nto 0.13.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tikv/rust-prometheus/blob/master/CHANGELOG.md\">prometheus's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.13.4</h2>\n<ul>\n<li>\n<p>Improvement: Add PullingGauge (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/405\">#405</a>)</p>\n</li>\n<li>\n<p>Improvement: Let cargo know which example requires which features (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/511\">#511</a>)</p>\n</li>\n<li>\n<p>Bug fix: Prevent <code>clippy::ignored_unit_patterns</code> in macro\nexpansions (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/497\">#497</a>)</p>\n</li>\n<li>\n<p>Internal change: Add CI job for minimum toolchain (MSRV) (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/467\">#467</a>)</p>\n</li>\n<li>\n<p>Internal change: Update CI to <code>actions/checkout@v4</code> (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/499\">#499</a>)</p>\n</li>\n<li>\n<p>Internal change: Update dependencies</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/04fce2f3bf81920c2607e6572dd9eba309969d22\"><code>04fce2f</code></a>\nprometheus: release 0.13.4 (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/520\">#520</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/6e435db331f7e269ae1a7498d5ef5b4787e71636\"><code>6e435db</code></a>\nbuild(deps): update reqwest requirement from ^0.11 to ^0.12 (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/516\">#516</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/439e3b8c14938a66352df4228ec32a9b707d1888\"><code>439e3b8</code></a>\nPrevent <code>clippy::ignored_unit_patterns</code> in macro expansions\n(<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/497\">#497</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/bf696d642c7ede1c694f93f9b088371e30dd96ab\"><code>bf696d6</code></a>\nci: bump MSRV to fix test jobs (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/519\">#519</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/b7e874524f2b0580a28853e2042656a55b6484f0\"><code>b7e8745</code></a>\nLet the cargo.toml know which example requires which features (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/511\">#511</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/f49c724df0e123520554664436da68e555593af0\"><code>f49c724</code></a>\ncargo: update all dependencies (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/504\">#504</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/76a634587a95340db56959f5808ac0a6494f6282\"><code>76a6345</code></a>\nci: Update to <code>actions/checkout@v4</code>. (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/499\">#499</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/a72d8d7db880f57ade09dd9139c8b2c5501fbf2f\"><code>a72d8d7</code></a>\nBump MSRV to 1.65 to fix CI. (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/505\">#505</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/7a9adcacd098128ee3017ad973afb841d1fc123e\"><code>7a9adca</code></a>\nci: Update badge info to not refer to Travis CI (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/500\">#500</a>)</li>\n<li><a\nhref=\"https://github.com/tikv/rust-prometheus/commit/6e81890773ef82e3bcc6c080d406543da1fb8073\"><code>6e81890</code></a>\nbump MSRV to 1.60.0 (<a\nhref=\"https://redirect.github.com/tikv/rust-prometheus/issues/491\">#491</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tikv/rust-prometheus/compare/v0.13.3...v0.13.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=prometheus&package-manager=cargo&previous-version=0.13.3&new-version=0.13.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-06T19:30:33Z",
          "tree_id": "09598c654bb26e121d66d59fca53a22a29a526d4",
          "url": "https://github.com/hasura/ndc-postgres/commit/6237449251fe624ffda3decf8991caf5c15ae6d3"
        },
        "date": 1715024491223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 35.7158275,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 54.097261149999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.34028821902109,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.188660891101119,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2693645708563374,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.910486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.20789859999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.56327109478874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9243616791463083,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.406414855238761,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.780824,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.07581879999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.71261886489774,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.907907733934774,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4248985624836137,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.1016505,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.73730019999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.753372871706663,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.161800252857514,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3548677954280584,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.129457,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.49093789999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.265791997996846,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.564061865509533,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3875905587087562,
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
          "id": "e32c55771776a92c7b49c29728df7d548afd13f7",
          "message": "Add support for upgrading version 3 configurations to version 4 (#452)\n\n### What\n\nThis PR adds the ability to upgrade a configuration directory in version\n3 to an equivalent one in version 4.\n\nThe cli now supports the command `cli upgrade --from-dir <existing\nconfiguration dir> --to-dir <new configuration dir>`, with the intended\nsemantics that it upgrades the configuration in `<existing configuration\ndir>` to the newest supported version.\n\n### How\n\nMany places in the code (though mostly tests) is tightly coupled with\ninternal details of version 3 and will attempt to construct and\nmanipulate configurations directly.\n\nThis PR attempts to define a version-agnostic interface that can be used\ninstead.",
          "timestamp": "2024-05-07T23:19:44Z",
          "tree_id": "c9572688178110239ba1442c1fd01d5a44e13c0b",
          "url": "https://github.com/hasura/ndc-postgres/commit/e32c55771776a92c7b49c29728df7d548afd13f7"
        },
        "date": 1715124391224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 38.011478,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 57.10071254999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.959304970708295,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.085711333281168,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3034105698916248,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 79.092308,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 114.746652,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.320819131054684,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.274217264650737,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.43195548578030246,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.7227605,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.87355234999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.826405556205874,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.073469960335043,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4932527113759908,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.848145,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.52565720000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.262713976107673,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.6546761715913725,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.45224307687973175,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.603213,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.57270270000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.596212502831563,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.994117953168839,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3931824051310223,
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
          "id": "b028131780ee9064779998138b40ed76840d86af",
          "message": "Migrate tests to access configuration through public interface (#457)\n\n### What\n\nThis PR ensures that all test code that relies on NDC configurations\ndoes so via the public interface rather than by directly depending on a\nspecific configuration version format module.\n\nThe tests that have the version format as their subject matter have been\nmoved into the configuration crate, cohabiting with the code they test.\n\nThe tests that don't have the version format as their subject matter now\nrely only on the public interface of the configuration crate. The\nbiggest consequence of this by diff volume is that what used to be\n`tables.json` holding a `Metadata` value now becomes full\n`configuration.json` files, with their original content in the\n`metadata` section and a `version: \"3\"` tag as well.",
          "timestamp": "2024-05-08T15:47:03Z",
          "tree_id": "f439a59ceb12a47c12cf7012aa0af71037d9944b",
          "url": "https://github.com/hasura/ndc-postgres/commit/b028131780ee9064779998138b40ed76840d86af"
        },
        "date": 1715183655773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.852338,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.761548999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.1414291879018,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.079660711398446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2817997955103612,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.5176865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 114.605885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.325899131366036,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9061805154691527,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.35852056671403854,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.939026999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.042981,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.97520735897006,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.930209831784879,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5492067216103905,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.602427,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.37025959999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.95431921182048,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.58230307988951,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3977875652495354,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.625486499999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.57345,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.873703151391137,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.9823622446329985,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4248562237894551,
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
          "id": "444d70d44cfb2b2e64b3e62bd9880bdf969e5559",
          "message": "chore(deps): Bump serde from 1.0.200 to 1.0.201 (#461)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.200 to\n1.0.201.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.201</h2>\n<ul>\n<li>Resolve unexpected_cfgs warning (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2737\">#2737</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b4f1bc16ffe9650750695db59bcb786033a929be\"><code>b4f1bc1</code></a>\nRelease 1.0.201</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/029ab46f7185b2dcf9ec986a87142bb7e7fc97a4\"><code>029ab46</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2737\">#2737</a>\nfrom dtolnay/checkcfg</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/220ca0ca9dddba8cc19d19968af7988ca3fc7d7c\"><code>220ca0c</code></a>\nResolve unexpected_cfgs warning</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/20306f493a4c943459e7492caf4dbcfca717790d\"><code>20306f4</code></a>\nFix cfg on test_systemtime_overflow</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.200...v1.0.201\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.200&new-version=1.0.201)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-13T20:07:47Z",
          "tree_id": "e131b5ee44edba2136c7a23312396207889f71b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/444d70d44cfb2b2e64b3e62bd9880bdf969e5559"
        },
        "date": 1715631378824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.028947,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.157587999999976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.576920009422336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.216928078568879,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28852086455937687,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.648452,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.4900293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.02634655097722,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3281629661971834,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42217269172120103,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.495079,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.02347400000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.928899047193397,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.03236678705035,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45718838129921624,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.781218,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.6785477,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.100848359148273,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.223946796230379,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4254406368475463,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.235192,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.2969119,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.783943520311958,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.50118195521312,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4086454204509546,
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
          "id": "208e8b346ab2e937d654d816773583169297bab7",
          "message": "chore(deps): Bump anyhow from 1.0.82 to 1.0.83 (#459)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.82 to 1.0.83.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.83</h2>\n<ul>\n<li>Integrate compile-time checking of cfgs (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/363\">#363</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/96f039226221ce615fabda347efaecd66bd441aa\"><code>96f0392</code></a>\nRelease 1.0.83</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/17bbd1e2adb003fa0cba5be66e1f1c3874d15a5e\"><code>17bbd1e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/363\">#363</a>\nfrom dtolnay/checkcfg</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/3ab3c3bca258c4e86ddedf1c33bd8f06f6e2db27\"><code>3ab3c3b</code></a>\nResolve unexpected_cfgs warning</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/8e62244b25b99cca2c00ece065a719438ca55e87\"><code>8e62244</code></a>\nDiscard CI coverage of backtrace feature on toolchains older than\n1.63</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/e77374f1edff6f133e912400bbafa09dc7c64db4\"><code>e77374f</code></a>\nMirror PR 343 changes from readme to rustdoc</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/cb47d7c31a3f28eaa08fe936d0bd58b7a7ab738a\"><code>cb47d7c</code></a>\nReword no-std documentation change from PR 343</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/6b5bdb17b6df2816ddf7d525dd583f6c968e7f7f\"><code>6b5bdb1</code></a>\nWrap PR 343 to 80 columns</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/f01080beafaccb1f293db41f7ae8e5688723afe8\"><code>f01080b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/343\">#343</a>\nfrom Arthur-Milchior/readme1</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.82...1.0.83\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.82&new-version=1.0.83)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-05-14T07:51:01Z",
          "tree_id": "0ebf465f3475c5bf3eec0d077828d92ccb51ef99",
          "url": "https://github.com/hasura/ndc-postgres/commit/208e8b346ab2e937d654d816773583169297bab7"
        },
        "date": 1715673498059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 36.226212,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 52.5878945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.196209584650763,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.186952933915343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27814711025144573,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 76.6880415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.12851724999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.36908933944444,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.1031628192859557,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.3827240273805341,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.744644,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.44382609999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.400338790706684,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.01844747607123,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4880868215915598,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.0237715,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.542705,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.379774220908338,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.110626108963764,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.44860069099684985,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 46.6428545,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.6361605,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 29.24744963018823,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.766354548062779,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39581777669312973,
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
          "id": "2585f3bc8525cbd508abcc63c07bfec5b6e79379",
          "message": "chore(deps): Bump schemars from 0.8.17 to 0.8.19 (#456)\n\nBumps [schemars](https://github.com/GREsau/schemars) from 0.8.17 to\n0.8.19.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/releases\">schemars's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.8.19</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Regression that caused a compile error when deriving\n<code>JsonSchema</code> on an enum with no variants (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/287\">GREsau/schemars#287</a>)</li>\n</ul>\n<h2>v0.8.18</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Reduce size of MIR output (and improve release-mode compile time)\nwhen deriving <code>JsonSchema</code> on enums (<a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/266\">GREsau/schemars#266</a>\n/ <a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/286\">GREsau/schemars#286</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/GREsau/schemars/blob/master/CHANGELOG.md\">schemars's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.8.19] - 2024-05-06</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Regression that caused a compile error when deriving\n<code>JsonSchema</code> on an enum with no variants (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/287\">GREsau/schemars#287</a>)</li>\n</ul>\n<h2>[0.8.18] - 2024-05-06</h2>\n<h3>Fixed:</h3>\n<ul>\n<li>Reduce size of MIR output (and improve release-mode compile time)\nwhen deriving <code>JsonSchema</code> on enums (<a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/266\">GREsau/schemars#266</a>\n/ <a\nhref=\"https://redirect.github.com/GREsau/schemars/pull/286\">GREsau/schemars#286</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/7f6a7b7e32224df2da6c0fd6491a3ab29296977d\"><code>7f6a7b7</code></a>\nTypo in changelog</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/8da70a4d458e434444a0fca2d0f058a8e6870890\"><code>8da70a4</code></a>\nv0.8.19</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/1a40d1b06c1acb82aa00ae6776cf8c67f0b3874b\"><code>1a40d1b</code></a>\nFix deriving JsonSchema on enum without variants</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/4b90b6f8c88bad2c2fc534f0b3f7e851dfe6b7bf\"><code>4b90b6f</code></a>\nv0.8.18</li>\n<li><a\nhref=\"https://github.com/GREsau/schemars/commit/d04c17bda49ac6e289134315b9c8544d37a83f87\"><code>d04c17b</code></a>\nSimplify generated enum code (<a\nhref=\"https://redirect.github.com/GREsau/schemars/issues/286\">#286</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/GREsau/schemars/compare/v0.8.17...v0.8.19\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=schemars&package-manager=cargo&previous-version=0.8.17&new-version=0.8.19)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-05-14T08:16:27Z",
          "tree_id": "fad413df1032f383997f638b0393ef7d3615222f",
          "url": "https://github.com/hasura/ndc-postgres/commit/2585f3bc8525cbd508abcc63c07bfec5b6e79379"
        },
        "date": 1715675021713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 34.81029,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 53.2168845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.02198873664725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.878355621516848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28124273711901304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.214162,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.97808499999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.56252223571372,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.0949597273144605,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.37067357551540464,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.3262775,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.61967385000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.540527111733585,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.05754674609405,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4913477800346191,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.203094,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.50439945,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.024701699633365,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.730488307599838,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41642534906924,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.394474,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.1367054,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.161213890749565,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.006670373933012,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3904958736736469,
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
      }
    ]
  }
}