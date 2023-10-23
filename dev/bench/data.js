window.BENCHMARK_DATA = {
  "lastUpdate": 1698077770000,
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
            "email": "gil@hasura.io",
            "name": "Gil Mizrahi",
            "username": "soupi"
          },
          "distinct": true,
          "id": "cb882614fc3e84f6dec3dcdb7930c61c28f7e93d",
          "message": "Pre-alpha release\n\nCo-authored-by: Daniel J. Harvey <dan.harvey@hasura.io>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>\nCo-authored-by: Philip Carlsen <philip@hasura.io>\nCo-authored-by: Tom J. Harding <tom.harding@hasura.io>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2023-09-28T16:02:06+03:00",
          "tree_id": "c450de45df886632a0d4d5c6dc93ff37cfa0a6bb",
          "url": "https://github.com/hasura/ndc-postgres/commit/cb882614fc3e84f6dec3dcdb7930c61c28f7e93d"
        },
        "date": 1695906969288,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 142.07535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 283.38345679999946,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 230.930196,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 484.00106109999996,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 244.956197,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 511.8777841999999,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 197.440982,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 604.4955223999999,
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
          "id": "3dd268fb05335cf6f986b75795f4e7921ccd317f",
          "message": "return native queries information from the schema endpoint (#6)\n\n### What\r\n\r\nThe [schema\r\nendpoint](https://hasura.github.io/ndc-spec/specification/schema/index.html)\r\nexpects information about all collections in the `scalar_types`,\r\n`object_types`, and `collections` fields. Previously, we only returned\r\nthe information about tables. In this PR we include the information\r\nabout the native queries as well.\r\n\r\nWe also properly return the nullability of a column or argument in this\r\nPR.\r\n\r\n### How\r\n\r\nThe schema endpoints expects three things that are relevant for us atm:\r\n\r\n- scalar_types - we need to fetch the scalar types that are visible in\r\nnative queries (from columns or arguments) and include them.\r\n- object_types - define the \"return type\" of the collection (name and\r\nfields), so we need to return the native queries and their columns.\r\n- collections - defines the \"return type\" of the collection (the\r\nmatching object type), as well as the arguments to the native query.",
          "timestamp": "2023-09-29T13:54:47+03:00",
          "tree_id": "3fb77de69421a0c7c6b3d35faada333017f36ab2",
          "url": "https://github.com/hasura/ndc-postgres/commit/3dd268fb05335cf6f986b75795f4e7921ccd317f"
        },
        "date": 1695985574341,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 159.41858,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 329.8444488,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 263.3151445,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 581.2350808499995,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 274.834492,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 581.565661,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 230.456574,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 647.8078631999999,
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
          "id": "9f3cd2a1ed713881a72dc1d1457c1ad2f738a991",
          "message": "chore: export configuration types (#7)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\n`v3-metadata-build-service` needs to use our `ConnectionUri` and other\r\ntypes, but they are not exported.\r\n\r\n### How\r\n\r\nExport them.",
          "timestamp": "2023-10-02T12:39:39+02:00",
          "tree_id": "9e531e1915a10f603be3a775a21754e6d93ea696",
          "url": "https://github.com/hasura/ndc-postgres/commit/9f3cd2a1ed713881a72dc1d1457c1ad2f738a991"
        },
        "date": 1696243454565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 164.1142505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 331.80290329999997,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 252.51773500000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 548.4804458499996,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 263.201999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 528.9862185,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 218.4732085,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 679.7631547499999,
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
          "id": "fdcca5dc34a14c22b1694993f29e138197889293",
          "message": "chore: connect to `defaultdb` for CockroachDB (#8)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\nOur Docker file imports chinook into `defaultdb` then we connect to\r\n`postgres`.\r\n\r\n### How\r\n\r\nChange our connection strings to always connect to `defaultdb` so\r\nrunning `just repl-cockroach` and then `\\d` shows us all the test data\r\nwe'd expect.",
          "timestamp": "2023-10-02T11:43:11Z",
          "tree_id": "c8d746328d5afa9d6ecfcb1490f947de749c6daf",
          "url": "https://github.com/hasura/ndc-postgres/commit/fdcca5dc34a14c22b1694993f29e138197889293"
        },
        "date": 1696247259949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 160.736581,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 335.33644059999983,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 266.633292,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 524.3895672999998,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 245.9865825,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 508.2111603999999,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 219.693416,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 651.02576265,
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
          "id": "5a893876f2a1850220a6f286321dcd79b3ba71b3",
          "message": "Use pg_catalog tables for introspection, all variants (#5)\n\n### What\r\n\r\n* Make introspection more precise and portable across postgres variants.\r\n* Correctly introspect aggregation function parameter and return types\r\n* Use the built-in postgres names for types rather than the SQL ones\r\n(i.e., we now prefer `varchar` to `character varying` etc.)\r\n* Permit _any_ non-pseudo type in columns and aggregations.\r\n\r\n**This means that this PR will change the metadata that the\r\nconfiguration server produces**, which will require follow-up changes to\r\nthe console and lsp server to map default types correctly.\r\n\r\n### How\r\n\r\nWe change the `configuration.sql` introspection query to use the\r\n`pg_catalog` tables rather than the `information_schema` views, and\r\nsteering clear of aggregations over sub-selects and lateral joins, which\r\nhave been brittle in the past on CockroachDB.\r\n\r\nThis provides more introspection data than `information_schema` did, and\r\nin a way that is more portable across postgres and cockroachdb.",
          "timestamp": "2023-10-02T14:48:46Z",
          "tree_id": "5f893990aa05dd3beb23a57ad8674ebbd7accc81",
          "url": "https://github.com/hasura/ndc-postgres/commit/5a893876f2a1850220a6f286321dcd79b3ba71b3"
        },
        "date": 1696258398436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 175.3998295,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 356.91538249999996,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 271.073461,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 579.1881623999999,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 270.870091,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 527.7560494999999,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 228.200399,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 660.828782,
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
          "id": "38ed44f26708c0634f74a2a6d003b375df862621",
          "message": "chore: Add OpenTelemetry env vars when running engine (#10)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\nQuality of life change - when running engine for testing, ensure we tell\r\nit where Jaeger etc live so that we can test tracing too.\r\n\r\n### How\r\n\r\nPass `OTEL_EXPORTER_OTLP_TRACES_ENDPOINT=http://localhost:4317` when\r\nrunning `just run-engine`.",
          "timestamp": "2023-10-03T10:11:43+01:00",
          "tree_id": "c82f9bcec9d0b944b58285e1614aa6645248eba6",
          "url": "https://github.com/hasura/ndc-postgres/commit/38ed44f26708c0634f74a2a6d003b375df862621"
        },
        "date": 1696324447028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 194.9691975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 396.7892283999995,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 271.25286,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 564.258378,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 281.503918,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 562.7614695999999,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 238.476914,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 676.3322480999999,
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
          "id": "57ae94281f67131d7321001546f47433559566ab",
          "message": "Add iterator for `SingleOrList` (#12)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\nThis PR adds the `IntoIterator` trait for `SingleOrList`\r\n\r\n### Why\r\n\r\nThis is required for validating tunnel urls in data connector connection\r\nconfiguration in the metadata build service.\r\n\r\n### How\r\n\r\nBy defining the trait :)",
          "timestamp": "2023-10-03T16:37:31+05:30",
          "tree_id": "eb57254eeba22e04ac13e65766e33fc8e4bff6ba",
          "url": "https://github.com/hasura/ndc-postgres/commit/57ae94281f67131d7321001546f47433559566ab"
        },
        "date": 1696332280646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 240.16447449999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 491.31374769999974,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 402.55682,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 879.1052965499999,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 406.50601800000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 908.8663102,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 335.742443,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 955.2516796499995,
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
          "id": "1c8633698d8793730b45d3b0d9f5434a24a11b92",
          "message": "Shorten the \"slow\" timeout for cargo-nextest. (#14)\n\n### What\r\n\r\nThis reduces the \"slow\" timeout from 1 minute to 15 seconds, and the\r\n\"termination\" timeout from 10 minutes to 1 minute.\r\n\r\nIt does nothing for `cargo test`, which does not support timing out test\r\ncases.\r\n\r\n### How\r\n\r\nI added some configuration to _.config/nextest.toml_.",
          "timestamp": "2023-10-03T14:54:36Z",
          "tree_id": "9e15aa8d47dd92ec222e51fb28a30daa7f5ad9d6",
          "url": "https://github.com/hasura/ndc-postgres/commit/1c8633698d8793730b45d3b0d9f5434a24a11b92"
        },
        "date": 1696345144468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 186.190919,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 369.63777179999994,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 275.791198,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 558.217015,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 293.440907,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 606.2743226,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 244.039454,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 744.2015166,
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
          "id": "d8655810e3a4eea6a905963b8d3965be30090c6f",
          "message": "Start services in parallel, not serially. (#13)\n\n### What\r\n\r\nIn testing, we start each database and Jaeger one by one, waiting for\r\nthe health checks for each one. This is slooooow.\r\n\r\nIf we just combine the commands, it's way faster.\r\n\r\n### How\r\n\r\nWe use Docker Compose as intended, specifying all the required services\r\non one line.\r\n\r\nI have also copied the Jaeger service definition out of the v3-engine\r\nfile so we can just use it directly.",
          "timestamp": "2023-10-03T15:11:52Z",
          "tree_id": "cefad2851bad4f5ffe33ed29b4c4bec9d7527cc1",
          "url": "https://github.com/hasura/ndc-postgres/commit/d8655810e3a4eea6a905963b8d3965be30090c6f"
        },
        "date": 1696346809361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 216.8113685,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 417.26425275,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 306.0516245,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 626.479476,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 354.12750300000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 709.311327,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 254.759254,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 748.9289681999999,
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
          "id": "523e9f233695d0c1a43f6f2253663ad6ba2cc456",
          "message": "just: Make it easy to add arguments to `just test`. (#15)\n\n### What\r\n\r\nSo you can run, for example, `just test -p ndc-cockroach`.\r\n\r\n### How\r\n\r\nThis uses `just`'s varargs syntax.",
          "timestamp": "2023-10-03T15:31:55Z",
          "tree_id": "f54fcb352370815d32caf3af4b69d40aef910551",
          "url": "https://github.com/hasura/ndc-postgres/commit/523e9f233695d0c1a43f6f2253663ad6ba2cc456"
        },
        "date": 1696347960609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 205.257566,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 424.537143,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 276.5662885,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 543.8427097499999,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 276.33625,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 566.795134,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 232.20209649999998,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 727.70141875,
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
          "id": "612d0966b3c69c316dafaf056af427cb32187530",
          "message": "Only allow one DB connection per test when connecting to AWS Aurora. (#16)\n\n### What\r\n\r\nWe seem to be hitting connection limits regularly against AWS Aurora. In\r\nan attempt to mitigate this, let's reduce the connection pool size to 1.\r\n\r\n### How\r\n\r\nAdding a number to a JSON file, and preserving it in the\r\n`generate-chinook-configuration.sh` script.\r\n\r\nWe had to change the tests to ignore this.\r\n\r\nCo-Authored-By: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2023-10-03T15:47:44Z",
          "tree_id": "629fb0b6f4c3a653b9fb8ce0c638e37aa620d71e",
          "url": "https://github.com/hasura/ndc-postgres/commit/612d0966b3c69c316dafaf056af427cb32187530"
        },
        "date": 1696348917119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 191.47554100000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 388.72000164999974,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 263.1472595,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 518.4636699999998,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 278.6862835,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 585.3317963999996,
            "unit": "ms"
          },
          {
            "name": "select_variables - median",
            "value": 219.072386,
            "unit": "ms"
          },
          {
            "name": "select_variables - p(95)",
            "value": 692.2897720999998,
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
          "id": "cb73e0ff555c0e5ba58187c4edc9f100c3e0a410",
          "message": "chore: pull metrics in CI benchmarks (#319) (#18)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\nAdd new values to our benchmarks. The top two already existed.\r\n\r\n`connection acquisition time` - time waiting for a connection from the\r\nconnection pool.\r\n\r\n`request time - (query + acquisition)` is the full request time minus\r\nconnection acquisition and query execution time.\r\n\r\n`processing time` is the same thing, but the \"full request\" is only time\r\nwithin `postgres-ndc`.\r\n\r\n```json\r\n[\r\n  {\r\n    \"name\": \"select-by-pk - median\",\r\n    \"unit\": \"ms\",\r\n    \"value\": 161.8641895\r\n  },\r\n  {\r\n    \"name\": \"select-by-pk - p(95)\",\r\n    \"unit\": \"ms\",\r\n    \"value\": 330.5366615\r\n  },\r\n  {\r\n    \"name\": \"select-by-pk - connection acquisition time\",\r\n    \"unit\": \"ms\",\r\n    \"value\": 85.30638819888003\r\n  },\r\n  {\r\n    \"name\": \"select-by-pk - request time - (query + acquisition)\",\r\n    \"unit\": \"ms\",\r\n    \"value\": 77.98981615823729\r\n  },\r\n  {\r\n    \"name\": \"select-by-pk - processing time\",\r\n    \"unit\": \"ms\",\r\n    \"value\": 1.1815740711703955\r\n  }\r\n]\r\n```\r\n\r\n### How\r\n\r\nQuery prometheus metrics after each run and combine these with K6 stats.",
          "timestamp": "2023-10-03T16:57:26Z",
          "tree_id": "c529c74112441da44e8608e23210057fda4c00fe",
          "url": "https://github.com/hasura/ndc-postgres/commit/cb73e0ff555c0e5ba58187c4edc9f100c3e0a410"
        },
        "date": 1696353055823,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 186.717493,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 405.7470849999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 103.29454813056189,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 85.19526823125115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.242196026321709,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 224.087759,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 642.6337314,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 130.69296270898604,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 89.1349652236874,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.233960881561091,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 271.127956,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 529.2677609499998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 163.89957891696412,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 103.60806707589268,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.4591415860120773,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 273.880802,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 592.4544399999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 157.43527327913492,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 121.41603168469791,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5239384884075269,
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
          "id": "f3dab9274411dee236957d47b4e7bc7a1e312816",
          "message": "Create binaries to output both the JSONSchema and OpenAPI schema (#20)\n\n### What\r\n\r\nWe can now output a JSONSchema and OpenAPI schema (based on the\r\nJSONSchema derivation macros).\r\n\r\n### How\r\n\r\nThere are two new (very simple) crates. They both do almost the exact\r\nsame thing, and I'm not sure I could make them any simpler. We just call\r\nsome schemars functions, and then use serde to dump them to JSON.\r\n\r\n---------\r\n\r\nCo-authored-by: Tom Harding <tomjharding@live.co.uk>",
          "timestamp": "2023-10-04T13:17:01+02:00",
          "tree_id": "6af737b32cd71686f7b88cd12b69f1246e41e832",
          "url": "https://github.com/hasura/ndc-postgres/commit/f3dab9274411dee236957d47b4e7bc7a1e312816"
        },
        "date": 1696418908060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 184.682375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 381.8918615,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 94.5174125203037,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 91.4178776445858,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.1806057424121985,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 233.66303,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 646.5987587,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 134.91940212086664,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 90.16406907335343,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.2573558783002863,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 275.895157,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 577.424388,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 153.59243711416235,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 128.36419105152834,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5288473643935483,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 270.85864200000003,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 554.2837737999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 160.18574411403017,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 109.3358238400001,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.4437582486567522,
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
          "id": "02f724278f5580ed698cc8518baca8b0653b74c6",
          "message": "chore: fix trace propagation with new `ndc-hub` (#17)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\n`ndc-multitenant` had trace propagation, but single tenant connectors\r\ndidn't. Added it to `ndc-hub` so we could use it here. This is helpful\r\nfor performance work.\r\n\r\n<img width=\"1758\" alt=\"Screenshot 2023-10-03 at 16 28 35\"\r\nsrc=\"https://github.com/hasura/ndc-postgres/assets/4729125/3549f612-61a3-4253-a390-68ba2ab0c6a9\">\r\n\r\n### How\r\n\r\nUse new `ndc-hub` commit.",
          "timestamp": "2023-10-05T08:58:20Z",
          "tree_id": "836964232606599d1a80e4400b4b578956a5922b",
          "url": "https://github.com/hasura/ndc-postgres/commit/02f724278f5580ed698cc8518baca8b0653b74c6"
        },
        "date": 1696497144224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 183.323295,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 363.91312059999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 107.92416756400894,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 73.56186364962446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.1851227883952749,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 241.9641155,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 713.662479,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 141.14272338781674,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 102.67861482177338,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.3150704149580066,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 297.73590149999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 604.5457522500001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 181.97324365961657,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 111.15860546397829,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5857983384006773,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 316.307524,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 672.15154525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 178.70401884650042,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 135.46212455058944,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.693640879071036,
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
          "id": "b8fd704ca319f5cbc826bbb5308969bad0a3849c",
          "message": "chore: test on Postgres 11-16 (#19)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\r\n-->\r\n\r\n### What\r\n\r\nUpgrade local dev environment to Postgres 16, run tests on Postgres\r\n12-16. 11 is EOL in a month so left it out.\r\n\r\n### How\r\n\r\nMostly adding more bits to the `test-environment.json` file. We need to\r\nskip `test_configure` on everything except the newest Postgres version\r\nas all the config ends up slightly different.",
          "timestamp": "2023-10-05T10:38:54Z",
          "tree_id": "757cbfd27f916f461084aceda92acc19d9b31587",
          "url": "https://github.com/hasura/ndc-postgres/commit/b8fd704ca319f5cbc826bbb5308969bad0a3849c"
        },
        "date": 1696503009648,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 187.985399,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 405.85268459999975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 105.9573478178029,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 81.11413427079346,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.256227878048203,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 237.664978,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 694.3870345999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 135.6873680721209,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 96.66451761744509,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.3208454273087171,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 280.071451,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 548.4173030999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 157.4714595757483,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 116.07886406743242,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5117644315089387,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 279.3265785,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 585.8857322,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 154.28225477091135,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 128.55023826061162,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.50544874282142,
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
          "id": "fc3868ea506d3fe26266d8331c0f8fd29c22cad0",
          "message": "Run tests against a Yugabyte container. (#23)\n\n### What\n\nYugabyte fully supports PostgreSQL, so no changes are needed to the\nconnector itself, but we do need to ensure that everything works as\nexpected.\n\nThis adds test cases for Yugabyte and the associated snapshots (which\nare identical to the PostgreSQL snapshots).\n\n### How\n\nI copied the test definitions from the AWS Aurora definitions, and the\nsnapshots from the PostgreSQL connector.\n\nThe tests are packaged inside the `other-db-tests` crate, similarly to\nthe AWS Aurora tests. I've added a feature, `yugabyte`, so you need to\nopt in. `just test` will do this automatically if you're running on an\nx86_64 processor, as it doesn't seem to work on macOS + aarch64 through\nemulation.\n\nThere's a lot of copying and pasting here. This is probably a good\nexample of where we might want to combine snapshots, and potentially\ntest case definitions.",
          "timestamp": "2023-10-05T11:51:11Z",
          "tree_id": "03f309314bd85b22d5885af6a4a53f7ea91eb870",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc3868ea506d3fe26266d8331c0f8fd29c22cad0"
        },
        "date": 1696509235649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 201.773469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 415.075543,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 106.62433055835831,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 101.50175362806661,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.358153354047152,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 234.225492,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 672.4123387999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 133.7991495631229,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 93.32810199259129,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.2589423149047934,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 314.063132,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 644.2149459999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 177.15046444414088,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 130.71652428390814,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.592103964127086,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 291.35125700000003,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 624.7216831000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 166.96811470871842,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 131.5651244118228,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5643027711362187,
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
          "id": "15598179518c52c9a1cd51b215fa187b9fed719e",
          "message": "Do not start Yugabyte on macOS. (#27)\n\n### What\n\nThe Yugabyte container doesn't start on macOS. We already avoid running\ntests there but we forgot to avoid starting the container.\n\n### How\n\nYet more bash.",
          "timestamp": "2023-10-05T15:41:34Z",
          "tree_id": "8fe8a022a7deecb5237a2e17bd3e34219cfb7311",
          "url": "https://github.com/hasura/ndc-postgres/commit/15598179518c52c9a1cd51b215fa187b9fed719e"
        },
        "date": 1696521107409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 234.47837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 521.107162,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 130.24234161818669,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 109.31404835681946,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.5323522057963468,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 294.493273,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 875.3183611999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 175.08800688619704,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 123.20928827826793,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.609776518354912,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 371.175791,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 831.1633733999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 218.33933048440707,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 154.23715405239028,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.98251777837879,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 373.95138,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 817.9741759500002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 216.67732997771262,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 163.75727892346478,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.943119370058335,
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
          "id": "b695ad52711e70c33a44239ce91b30d48f3bd783",
          "message": "chore: add tracing for config server (#30)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nIt's hard to work out what is going on with slow introspection / config\nserver performance.\n\n<img width=\"1512\" alt=\"Screenshot 2023-10-06 at 11 45 11\"\nsrc=\"https://github.com/hasura/ndc-postgres/assets/4729125/b6eb2865-a7ee-4f33-97d4-1bbbeae5f892\">\n\n### How\n\nThis enables config server tracing via\nhttps://github.com/hasura/ndc-hub/pull/54 and adds some key spans around\nintrospection.",
          "timestamp": "2023-10-06T11:45:51Z",
          "tree_id": "8f94dc154ae1df79e178b2980fcdcf163908cbaa",
          "url": "https://github.com/hasura/ndc-postgres/commit/b695ad52711e70c33a44239ce91b30d48f3bd783"
        },
        "date": 1696594401560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 196.184665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 389.271262,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 112.00665616131843,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 84.87887672844394,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.2039281722332198,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 253.178398,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 721.2891048999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 141.45952580395888,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 111.54687688752699,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.4449164436061797,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 287.957603,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 610.26431435,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 173.27421919298877,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 122.18392544921278,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5605531005888695,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 302.010882,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 615.2269031999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 176.53713959729134,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 123.44532342451168,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5811051480014104,
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
          "id": "865270b12fe5b487c6e5aa8d2c786041fff92e51",
          "message": "Make ignored schemas configurable (#26)\n\n### What\n\nMake ignored schemas configurable.\n\nThe purpose of this is to avoid exposing internal database schemas while\nstill allowing it.\n\nWithout censoring by default, the lsp/console \"track all collections\"\nfeature would be much less useful. However, schema censoring is not\nmeant to be the primary way a user would regulate which collections are\nexposed in their resulting API. Rather, it enables users with many\ndiverse schemas to keep their hasura configuration concise.\n\nBy making the list of schemas to censor explicit and configurable we\nalso remove a source of accidental breaking changes, since we can change\nthe default freely without affecting any existing deployments during\nreconfiguration.\n\n### How\n\nAdd a new field to RawConfiguration which is passed to\n`configuration.sql`.",
          "timestamp": "2023-10-06T12:32:50Z",
          "tree_id": "f0163414db89210d457b64f900d75c45dd7206d1",
          "url": "https://github.com/hasura/ndc-postgres/commit/865270b12fe5b487c6e5aa8d2c786041fff92e51"
        },
        "date": 1696597267158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 199.59515,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 395.20834124999993,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 114.39438414471927,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 80.29809961929648,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.190580257931821,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 277.716352,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 849.7768324,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 164.76597470791924,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 115.4657694672604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.4521933856694447,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 308.972543,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 653.1040988,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 189.70653520779226,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 128.05155071849757,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.6494670179014006,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 314.0619355,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 662.6789218499999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 185.4596732412096,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 134.361280946203,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.6670202380452883,
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
          "id": "e2202bb88af996d4e108c13ea3ee0a21bc13bc2e",
          "message": "Various improvements to tracing and metrics in benchmarks. (#29)\n\n### What\n\nLet's make it easier to capture trace information in benchmarks.\n\n### How\n\n- Print the metrics after running, by hitting `/metrics`.\n- Set the `OLTP_*` environment variables so that traces are pushed to\nJaeger.\n- Bump PostgreSQL to the latest version (copied from the root Docker\nCompose file).",
          "timestamp": "2023-10-06T13:27:41Z",
          "tree_id": "ce28402c5ec53eaa1ee822833aa0a26c512fbea0",
          "url": "https://github.com/hasura/ndc-postgres/commit/e2202bb88af996d4e108c13ea3ee0a21bc13bc2e"
        },
        "date": 1696599455967,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 192.527511,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 389.30176489999974,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 99.90780242712073,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 91.14747653649248,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.2687224254283223,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 224.105774,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 715.18355715,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 137.6336482879047,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 89.8228975647352,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.27485562549684,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 279.803283,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 563.4617182,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 160.53869500091722,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 110.90615850963681,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.4831317904561914,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 283.28749500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 559.0190915,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 159.9794756045059,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 121.28966399749694,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5156088031913422,
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
          "id": "0a456ac95b26b871e9308ba41d017847942c854a",
          "message": "fix example metadata.json and add comparison operators for int4 (#31)\n\n### What\n\nv3-engine recently made a few breaking changes to the metadata and our\nexample metadata configuration file is not accepted anymore. This fixes\nthe issue by simple find/replace.\n\nI've also added additional comparison operators to int4 so that they can\nbe used from GraphiQL.",
          "timestamp": "2023-10-09T08:47:47Z",
          "tree_id": "af40203a7233cd552eeaa43e3bfa5ee53a02a12a",
          "url": "https://github.com/hasura/ndc-postgres/commit/0a456ac95b26b871e9308ba41d017847942c854a"
        },
        "date": 1696843082598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 232.53514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 469.6926878,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 123.38563388608884,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 107.19129940704607,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.5027323623044586,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 290.37072,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 843.4297165,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 163.7796587035298,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 123.40476418695945,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.54192013040442,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 353.861999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 740.3238292,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 210.6130596492689,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 145.01387673665414,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.9494776623169474,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 380.93550949999997,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 831.2017823499998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 217.75356981249988,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 159.07178832298635,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.9874862076344169,
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
          "id": "c5a4b4b7b2750aa7d8b79b978c8b97a90e05540b",
          "message": "remove multi-regions from ndc-postgres (#35)\n\nhttps://hasurahq.atlassian.net/browse/NDAT-963\n\n### What\n\nWe want to remove the handling of multi regions from the connector. This\nwill be handled in a a different layer.\n\n### How\n\nUpdate to latest ndc-sdk which removes multi-regions support and delete\ndead code.",
          "timestamp": "2023-10-09T13:58:06Z",
          "tree_id": "fc0744421c64286f590a4eeccb1acf5dd3726c18",
          "url": "https://github.com/hasura/ndc-postgres/commit/c5a4b4b7b2750aa7d8b79b978c8b97a90e05540b"
        },
        "date": 1696861731998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 196.74966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 415.6831617499999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 109.5347493025212,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 90.8770783306059,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.2506803067222425,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 240.731406,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 703.4677832999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 139.65585040826656,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 98.33561681772284,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.299876060659539,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 294.5091595,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 629.8388143,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 163.83398321942488,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 133.03818470307354,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5692254761274558,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 288.187752,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 623.2514521999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 167.2431128489396,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 129.26817060326303,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5183361915178237,
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
          "id": "886f94004725ea34688dec58e37046fd03a4f9df",
          "message": "CI: Build the tests once. (#28)\n\n### What\n\n`cargo nextest` has the ability to build a test archive, containing all\nthe compiled binaries, and then use it on a subsequent run. We can use\nthis to avoid having to recompile tests for each job, which speeds up\nthe test runs considerably and avoids re-work.\n\n### How\n\nWe introduce a new job which builds and archives the tests. Subsequent\njobs download the archive and run the tests, using filters to select the\npackages.\n\nWe need to switch to filters because the `-p` flag is not supported with\narchives.\n\nThe archive, built in release mode, weighs in at around 160 MB, which is\nsizeable, but still reasonable. (In debug mode, it's over 1 GB, which is\n_not_ reasonable.)",
          "timestamp": "2023-10-09T14:32:42Z",
          "tree_id": "d287293412cc8f4d9ce9780f80361e8ff36a389e",
          "url": "https://github.com/hasura/ndc-postgres/commit/886f94004725ea34688dec58e37046fd03a4f9df"
        },
        "date": 1696864136422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 248.339572,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 516.886013,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 128.4507343541318,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 122.65269719633991,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.6250010635054575,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 290.92616250000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 837.6949906499999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 167.6072097283074,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 114.6048691273113,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.5415940568991218,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 334.91042849999997,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 711.09262265,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 194.51812373266975,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 139.50129967072334,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.7345011272118918,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 339.420176,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 738.7443524000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 200.8556790180182,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 152.4744541605954,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.9487002479433648,
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
          "id": "8564f4a9a2b261ada7d82e903e422678fdf7870c",
          "message": "Nix: Add `perf` to the shell dependencies. (#40)\n\n### What\n\n`cargo-flamegraph` depends on access to the `perf` utility on Linux.\n\nThis adds it to the dependencies.\n\n### How\n\nTrivially.",
          "timestamp": "2023-10-10T06:44:56Z",
          "tree_id": "c6907df20606d5129de96f353a4859673b2c627d",
          "url": "https://github.com/hasura/ndc-postgres/commit/8564f4a9a2b261ada7d82e903e422678fdf7870c"
        },
        "date": 1696921832458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 196.808441,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 399.7804016999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 102.83454879714238,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 91.75751400000017,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.2874162468059818,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 233.5986905,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 668.72223825,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 135.561500808305,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 91.60254206257119,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.2681251402160467,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 302.174517,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 642.1614017999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 171.4710913617739,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 129.78968765401416,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.568014200872966,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 299.74599450000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 601.63835775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 177.5269324628776,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 119.68671563830537,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.474761567346058,
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
          "id": "96a3f8ce748854159a027481718c8c4ec3f7be54",
          "message": "Avoid cloning metadata for `Env`. (#41)\n\n### What\n\nThe `Env` struct captures the metadata, but it doesn't need to own it as\nit's pretty transient.\n\nBy capturing a reference instead, we can avoid cloning the metadata,\nwhich is a fairly expensive operation.\n\nOn my machine, this has a noticeable impact on benchmark results.\n\n### How\n\nJudicious use of the `&` operator.\n\nYes, there are lifetimes.",
          "timestamp": "2023-10-10T06:49:20Z",
          "tree_id": "d9db4a3d3f5f5c82a84bd5e7edcfd82a1ad69bb5",
          "url": "https://github.com/hasura/ndc-postgres/commit/96a3f8ce748854159a027481718c8c4ec3f7be54"
        },
        "date": 1696922298524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 196.30125,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 393.22362789999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 113.41882284871363,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 83.58287062934977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9909376178953319,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 234.114306,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 703.5757793999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 140.03320042769857,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 92.82293616293245,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0594039950540237,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 282.6494685,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 579.57487425,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 162.5217882251246,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 116.78321881996268,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.361581922263868,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 281.611457,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 626.0251233999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 152.6351664502336,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 127.55311392480621,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.3858832330735882,
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
          "id": "15e77905497e1ab356eeb30cf117eeb85252ae07",
          "message": "Wrap configuration and state in `Arc`. (#42)\n\n### What\n\nThis wraps configuration and state in `Arc`, because they are cloned by\naxum per request. [axum encourages this in its\ndocumentation.](https://docs.rs/axum/latest/axum/index.html#sharing-state-with-handlers)\n\nThis seems to have a pretty decent impact on benchmark results.\n\n### How\n\nWe wrap the raw configuration, configuration, and state in `Arc<...>`,\nand fix the code to match. As we treat this data as read-only, that's\nreally all there is to it.",
          "timestamp": "2023-10-10T06:49:38Z",
          "tree_id": "83b119fdcfe3cd68044ef88bfb1ad8a99c4a7e1e",
          "url": "https://github.com/hasura/ndc-postgres/commit/15e77905497e1ab356eeb30cf117eeb85252ae07"
        },
        "date": 1696922538430,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 118.0027145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 234.89142879999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 69.21348149544761,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 46.51079785015618,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.0805368886571385,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 199.3625205,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 566.7718081999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 115.4546033792092,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 76.00089687506116,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.2082129084924402,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 254.035542,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 491.7145585999991,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 150.84673904012936,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 88.06947981416556,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5547048898465985,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 240.447781,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 494.3391797999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 142.36773916201827,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 95.30648993041257,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.4526287317403375,
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
          "id": "2006d6f9042e2b3fb6653a48eca762760a55c660",
          "message": "chore(deps): bump DeterminateSystems/nix-installer-action from 4 to 5 (#34)\n\nBumps\n[DeterminateSystems/nix-installer-action](https://github.com/determinatesystems/nix-installer-action)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/determinatesystems/nix-installer-action/releases\">DeterminateSystems/nix-installer-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Support for Act, and beta support for private Flakes on\nFlakeHub</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md to say v4 by <a\nhref=\"https://github.com/grahamc\"><code>@​grahamc</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/27\">DeterminateSystems/nix-installer-action#27</a></li>\n<li>Add act support by <a\nhref=\"https://github.com/Hoverbear\"><code>@​Hoverbear</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/30\">DeterminateSystems/nix-installer-action#30</a></li>\n<li>--nix-build-user-base and --nix-build-user-prefix logic no longer\nconfused by <a\nhref=\"https://github.com/Hoverbear\"><code>@​Hoverbear</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/32\">DeterminateSystems/nix-installer-action#32</a></li>\n<li>Fix specifying a custom planner by <a\nhref=\"https://github.com/Hoverbear\"><code>@​Hoverbear</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/35\">DeterminateSystems/nix-installer-action#35</a></li>\n<li>Typescript rewrite by <a\nhref=\"https://github.com/Hoverbear\"><code>@​Hoverbear</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/34\">DeterminateSystems/nix-installer-action#34</a></li>\n<li>Post run diagnostics by <a\nhref=\"https://github.com/grahamc\"><code>@​grahamc</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/39\">DeterminateSystems/nix-installer-action#39</a></li>\n<li>Support private flakes on FlakeHub by <a\nhref=\"https://github.com/grahamc\"><code>@​grahamc</code></a> in <a\nhref=\"https://redirect.github.com/DeterminateSystems/nix-installer-action/pull/38\">DeterminateSystems/nix-installer-action#38</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/compare/v4...v5\">https://github.com/DeterminateSystems/nix-installer-action/compare/v4...v5</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/07ebb8d2749aa2fac2baae7d1cfa011e4acfd8d1\"><code>07ebb8d</code></a>\nSupport private flakes on FlakeHub (<a\nhref=\"https://redirect.github.com/determinatesystems/nix-installer-action/issues/38\">#38</a>)</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/d654f7b93ac17b763dd9f42f3733a846e126f956\"><code>d654f7b</code></a>\nPost run diagnostics (<a\nhref=\"https://redirect.github.com/determinatesystems/nix-installer-action/issues/39\">#39</a>)</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/3ebd1aebb47f95493b62de6eec0cac3cd74e50a9\"><code>3ebd1ae</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/determinatesystems/nix-installer-action/issues/34\">#34</a>\nfrom DeterminateSystems/hoverbear/ds-893-make-installe...</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/15d47b15b5843a488756e3557a374e77fe9ea670\"><code>15d47b1</code></a>\nUse released installer, not main</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/c683402ad5e204f4fa437ecdacbaf9e23c8b552b\"><code>c683402</code></a>\nTweak messaging when nix-installer makes GITHUB_PATH not action\nwritable</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/5103a0df227b3c4b2f6ff294a5b4906493bd6fcd\"><code>5103a0d</code></a>\ntest against main</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/d29c939172ad0738f49c50dcd4943945b7856d57\"><code>d29c939</code></a>\nBetter messaging when we set GITHUB_PATH</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/bdec4311cf037483b932d8e2325c3d08fd0b9ea1\"><code>bdec431</code></a>\nFixup wording, test again against fixed pr</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/a5bdb5e70cbebe3a64669f3311a55d9224ebcec1\"><code>a5bdb5e</code></a>\nTweak the warning</li>\n<li><a\nhref=\"https://github.com/DeterminateSystems/nix-installer-action/commit/15d6a6a814e73ebd24cafa2471448892d108b418\"><code>15d6a6a</code></a>\nMore handling around old nix-installer versions</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/determinatesystems/nix-installer-action/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=DeterminateSystems/nix-installer-action&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-10T08:07:15Z",
          "tree_id": "0da165229f9b464e741280ffaca292e7b13918d7",
          "url": "https://github.com/hasura/ndc-postgres/commit/2006d6f9042e2b3fb6653a48eca762760a55c660"
        },
        "date": 1696927190271,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 119.04386,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 241.14432399999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 69.09102598817901,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 47.44937287554791,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.113703129631947,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 211.9752765,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 688.5690732999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 134.188746733207,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 78.342455925515,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.322119349945837,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 252.6816885,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 528.4809770499999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 148.36560914986242,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 95.37356538347052,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5709803049581101,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 245.096162,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 493.03539745,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 140.53290873587937,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 98.43186068934935,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.4909545699302125,
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
          "id": "a4dd824cf77676045c11d6de8cdcaacb0b29b73b",
          "message": "chore(deps): bump reqwest from 0.11.20 to 0.11.22 (#37)\n\nBumps [reqwest](https://github.com/seanmonstar/reqwest) from 0.11.20 to\n0.11.22.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/seanmonstar/reqwest/releases\">reqwest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.11.21</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add automatically detecting macOS proxy settings.</li>\n<li>Add <code>ClientBuilder::tls_info(bool)</code>, which will put\n<code>tls::TlsInfo</code> into the response extensions.</li>\n<li>Fix trust-dns resolver from possible hangs.</li>\n<li>Fix connect timeout to be split among multiple IP addresses.</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/SpeedReach\"><code>@​SpeedReach</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/pull/1960\">seanmonstar/reqwest#1960</a></li>\n<li><a href=\"https://github.com/jefflloyd\"><code>@​jefflloyd</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/pull/1955\">seanmonstar/reqwest#1955</a></li>\n<li><a href=\"https://github.com/droe\"><code>@​droe</code></a> made their\nfirst contribution in <a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/pull/1938\">seanmonstar/reqwest#1938</a></li>\n<li><a\nhref=\"https://github.com/conradludgate\"><code>@​conradludgate</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/pull/1940\">seanmonstar/reqwest#1940</a></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/seanmonstar/reqwest/blob/master/CHANGELOG.md\">reqwest's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>v0.11.22</h2>\n<ul>\n<li>Fix compilation on Windows when <code>trust-dns</code> is\nenabled.</li>\n</ul>\n<h2>v0.11.21</h2>\n<ul>\n<li>Add automatically detecting macOS proxy settings.</li>\n<li>Add <code>ClientBuilder::tls_info(bool)</code>, which will put\n<code>tls::TlsInfo</code> into the response extensions.</li>\n<li>Fix trust-dns resolver from possible hangs.</li>\n<li>Fix connect timeout to be split among multiple IP addresses.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/5df3861a734ec91d6428026bf484d77794edb57a\"><code>5df3861</code></a>\nv0.11.22</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/afc3a9364aae281012a81d2573ed29243c8eda03\"><code>afc3a93</code></a>\nfix trust-dns error kind on windows (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1992\">#1992</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/d050e604e100433eb5629a7e575de8811ee1d2c8\"><code>d050e60</code></a>\nv0.11.21</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/2a881fb50489b21aa6c879eea0cb339755240fb5\"><code>2a881fb</code></a>\nfix: split connect timeout for multiple IPs (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1940\">#1940</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/17c893ffc0d3832d61cb1c0cf278340b7e95557e\"><code>17c893f</code></a>\nBump actions/checkout from 3 to 4 (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1968\">#1968</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/10d9d23f8879257c64d5d061cdb5ebd86654ac80\"><code>10d9d23</code></a>\nAdd <code>tls_info</code> / <code>TlsInfo</code> for access to peer's\nleaf certificate (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1938\">#1938</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/d3d95a5b560c5cf8d87e346455011b47ab24bd8a\"><code>d3d95a5</code></a>\nOptimize <code>TrustDnsResolver</code> (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1967\">#1967</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/0292486abab25914c046b71ab6d6da24206614d3\"><code>0292486</code></a>\ndep: Upgrade trust-dns-resolver from v0.22 to v0.23 (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1965\">#1965</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/70d100c1b81dc8856e7cfb7b31b682c2028ca877\"><code>70d100c</code></a>\nFeature: auto detect MacOS proxy settings (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1955\">#1955</a>)</li>\n<li><a\nhref=\"https://github.com/seanmonstar/reqwest/commit/34f6c70134fe6f8a32737f686aa12855a2a2a8f6\"><code>34f6c70</code></a>\nAdded wasm in the docs. (<a\nhref=\"https://redirect.github.com/seanmonstar/reqwest/issues/1960\">#1960</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/seanmonstar/reqwest/compare/v0.11.20...v0.11.22\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=reqwest&package-manager=cargo&previous-version=0.11.20&new-version=0.11.22)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-10T08:07:51Z",
          "tree_id": "0e7d14002b8b3ce5af2a9d0d164104a5f7ae6c49",
          "url": "https://github.com/hasura/ndc-postgres/commit/a4dd824cf77676045c11d6de8cdcaacb0b29b73b"
        },
        "date": 1696927375494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 116.152696,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 249.39920439999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 64.94889263093788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 52.997837868069425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.104218213180524,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 212.831935,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 562.5527295999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 119.05474187934962,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 84.5462759362463,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.27142703429032,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 242.864878,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 500.6037434,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 132.14981679575806,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 98.58898749149054,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.5098426336737785,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 237.427849,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 505.808454,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 130.40002766162868,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 104.36628261018242,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.4889534269422833,
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
          "id": "d28111f8ce2fae4527c89ac3da1cf6914c43bda6",
          "message": "Reduce pool_timeout to match sqlx defaults (#38)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWhen we introduced `pool_settings` we chose a high default\n`pool_timeout`, the max time to acquire a connection.\n\n<img width=\"1887\" alt=\"Screenshot 2023-10-09 at 17 21 25\"\nsrc=\"https://github.com/hasura/ndc-postgres/assets/4729125/40d98bd1-1602-4533-bb1d-1dbb3fc8e556\">\n\nReducing it seems to make memory use more sensible, let's try it!\n\n<img width=\"1882\" alt=\"Screenshot 2023-10-09 at 17 16 37\"\nsrc=\"https://github.com/hasura/ndc-postgres/assets/4729125/6b46d4fd-f505-4aa7-93aa-bcc8691d86a4\">\n\n### How\n\nReduce default to match `sqlx` default settings.",
          "timestamp": "2023-10-10T09:14:51Z",
          "tree_id": "0cb98f9effcd2289270cb0123475a397d5f5cc64",
          "url": "https://github.com/hasura/ndc-postgres/commit/d28111f8ce2fae4527c89ac3da1cf6914c43bda6"
        },
        "date": 1696931334449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 105.943542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 210.3200381999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 61.42068392100096,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.17121137090197,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9392105190547654,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 179.1165115,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 499.39099275,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 100.55727314818023,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 73.24903822768681,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0594599488729874,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 216.5141975,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 458.7492674999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 134.11022036908216,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 83.28129397608575,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.3500634074871642,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 212.7670065,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 451.9200445,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 121.75387594008468,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 86.66704223825208,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.3222839840220302,
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
          "id": "9c1fdef7d9bb955a876a84390b0544008f00a11b",
          "message": "Upgrade ndc-sdk, which lets us avoid cloning in several places.  (#43)\n\n### What\n\nWith recent changes to ndc-sdk, we can avoid cloning in several places.\n\n1. `RawConfiguration` is now passed by value, so we don't need to clone\nit.\n2. `RawConfiguration` no longer needs to be an `Arc` either.\n3. `Metadata` therefore doesn't need cloning.\n4. `SingleOrList` can be rewritten to avoid cloning the entire list.\n\n### How\n\nFirst, I upgraded ndc-sdk and fixed the code accordingly. Then I removed\n`#[derive(Clone)]` in a few places and fixed whatever broke.",
          "timestamp": "2023-10-10T09:22:28Z",
          "tree_id": "52e0697008c0f2779d89d98fdb364c71874c2798",
          "url": "https://github.com/hasura/ndc-postgres/commit/9c1fdef7d9bb955a876a84390b0544008f00a11b"
        },
        "date": 1696931890552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 90.5842785,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 180.44948399999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 49.58786590266917,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 39.1709742730285,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8881460283963456,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 146.947665,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 454.46268899999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 81.19457752485796,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 62.04855382425275,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9821584536789396,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 213.686193,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 437.60367759999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 125.54609173334926,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 82.67289469548915,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.3176903056787403,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 199.745208,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 433.01696579999964,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 111.09866690066103,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 91.91717581886535,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.2521791802226339,
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
          "id": "0cb1694d43113f72fbc64348ab042b26e62dd940",
          "message": "allow filtering on array relationships (#33)\n\n### What\n\nWe want to support array relationships in filters as specified in\nndc-spec with similar semantics to related exists.\n\n### How\n\nWe previously had an assert to block queries with array relationships in\nfilters. Turns out it works fine. Removed the block and added a couple\nof tests.",
          "timestamp": "2023-10-10T09:41:23Z",
          "tree_id": "7b5075e790cd52b2b404e272a9c33c13ec020703",
          "url": "https://github.com/hasura/ndc-postgres/commit/0cb1694d43113f72fbc64348ab042b26e62dd940"
        },
        "date": 1696932737730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 143.066926,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 286.255513,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 86.03800801520714,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 55.43570749079555,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 1.263861378902502,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 257.7339525,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 666.0744818499998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 147.29113376483176,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 89.48934733058107,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.4731475847090032,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 297.807827,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 559.4779653999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 165.79917881168626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 117.21105501016206,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.8468558605900254,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 298.8519245,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 586.9776646999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 173.555272428617,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 111.38710526109361,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.9170734176853892,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chkarthikeyan95@gmail.com",
            "name": "Karthikeyan Chinnakonda",
            "username": "codingkarthik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fecc4e6e0ee0cb404740c15bd44dfff1ca4349c0",
          "message": "Update `ndc-hub` SHA (#44)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\nUpdates the SHA of the `ndc-hub` dependency to its latest\n[commit](https://github.com/hasura/ndc-hub/pull/57).\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2023-10-10T11:17:13Z",
          "tree_id": "134811f2c8c94a7688724a574fdbcaa848f84c75",
          "url": "https://github.com/hasura/ndc-postgres/commit/fecc4e6e0ee0cb404740c15bd44dfff1ca4349c0"
        },
        "date": 1696938537692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 98.63530750000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 206.82045785000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 54.15843043662115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.99017374132257,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9166681454309775,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 172.464248,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 488.6858984,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 103.79078435228475,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 64.88533061086567,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0332372659500886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 201.9663985,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 425.39037874999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 115.436804962008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 86.85070472908198,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.3203734330626775,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 200.007318,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 439.19615,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 114.24395373444942,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 86.00245978556883,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.2801018434741482,
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
          "id": "c8acb68040168e6729d103188d4823b95f93a95c",
          "message": "Move aggregate functions into metadata (#47)\n\n### What\n\nWe move the field `aggregate_functions` into the `metadata` object in\n`RawConfiguration`, in order to co-locate all introspected metadata.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2023-10-10T12:36:59Z",
          "tree_id": "df6821ccd7767118ed0c75cc47ebed144a7c2142",
          "url": "https://github.com/hasura/ndc-postgres/commit/c8acb68040168e6729d103188d4823b95f93a95c"
        },
        "date": 1696943678514,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 126.396547,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 258.248676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 73.94309737346529,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.78616919712631,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9498977996649902,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 227.78706649999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 581.42370265,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 133.1636230836914,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 80.43034230579403,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0402606094413975,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 263.106119,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 498.827466299999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 155.40116402377595,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 89.41054982349627,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.500465978462126,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 266.4615915,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 515.4209085,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 155.66314435396447,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 96.47787653479799,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.5233190273813149,
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
          "id": "6b2407a0fdbfbd16773020a7f25c7ce983028a43",
          "message": "Feed in native queries to deployment re-generation (#49)\n\n### What\n\nWhen we generate the deployment configurations we use for tests we only\nprovide the connection uri to `/configure` and only splice native query\ndefinitions in afterwards manually.\n\nThis means that configuration cannot take scalar types that only appear\nin native queries into account, which it should.\n\n### How",
          "timestamp": "2023-10-10T13:42:25Z",
          "tree_id": "5eae93b04392b2efd5eb99f7c11acd0a107dcf7a",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b2407a0fdbfbd16773020a7f25c7ce983028a43"
        },
        "date": 1696946869461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 91.607199,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 187.08484399999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 53.24616016518374,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 38.65389970788581,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7171696067298895,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 158.587673,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 453.4896492,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 93.47472420359966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 61.84236393400428,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7782816129278963,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 204.9504575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 412.91780984999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 120.46258091799302,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 74.88944486693165,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1087328695845557,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 202.1753115,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 414.074235,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 114.05762216168074,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 82.43095632798006,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.0711149762426067,
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
          "id": "f4d0ee22b2c572c90cd9f88ba3a52cbe82710ab2",
          "message": "Update metadata (#51)\n\n### What\n\nThis PR updates the testing metadata to match the latest engine.\n\nhttps://github.com/hasura/v3-e2e-testing/pull/84\n\n---------\n\nCo-authored-by: Tom Harding <tom.harding@hasura.io>",
          "timestamp": "2023-10-11T07:06:26Z",
          "tree_id": "d1a69272a9b5366886b6f38fc385a8304be9dbc4",
          "url": "https://github.com/hasura/ndc-postgres/commit/f4d0ee22b2c572c90cd9f88ba3a52cbe82710ab2"
        },
        "date": 1697009074721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 90.613429,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 181.91921869999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 50.93798503457911,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 37.829765346886155,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7072747415045152,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 163.52451100000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 461.9140094000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 95.30443906970298,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 64.5200126328718,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8011512007924257,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 193.1799825,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 398.6284166500001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 110.32974162484219,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 74.91097393578919,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.0379585096840505,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 185.98245400000002,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 391.29999330000004,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 105.97988701175257,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 77.83503985257738,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9894239278348474,
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
          "id": "ebf2566c4e09328236a5994000c13db90786b12c",
          "message": "Bump ndc-client to v0.1.0-rc.7. (#53)\n\n### What\n\nTime to bump.\n\nThis involves bumping ndc-sdk too.\n\nWe also need to be able to parse secrets (i.e. connection URIs) which\nhave the form `{\"value\": \"postgresql://...\"}` as well as simply\n`\"postgresql://...\"`.\n\n### How\n\n```\n$ sd '^(ndc-sdk = .+, rev = )\"[^\"]+\"(.+)$' '$1\"50d29e0\"$2' crates/**/Cargo.toml\n$ sd '^(ndc-(?:client|test) = .+, tag = )\"[^\"]+\"(.+)$' '$1\"v0.1.0-rc.7\"$2' crates/**/Cargo.toml\n```\n\nI have introduced a wrapper type for a resolved secret, and an\nintermediate which handles deserializing from either style.\n\nThere was one compilation failure; a function was renamed.",
          "timestamp": "2023-10-11T07:45:03Z",
          "tree_id": "1b03291339aa7b5d7f9a0769fcf408a1c998200b",
          "url": "https://github.com/hasura/ndc-postgres/commit/ebf2566c4e09328236a5994000c13db90786b12c"
        },
        "date": 1697012319135,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 80.7263325,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 169.12912089999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 45.27357228468231,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.06614614360526,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6577438065386759,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 154.969492,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 439.7474875,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 87.00457641580626,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 64.20807347080886,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8185569900510419,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 204.20876800000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 436.976946,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 122.07896854559952,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 80.92157025695455,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.0906388572733814,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 193.544037,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 401.88342249999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 112.21401357229945,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 81.66748672277964,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.0196693802272343,
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
          "id": "e4ee3a4683f25a2cf7823e2e4f549c828c82d6d3",
          "message": "Revert \"CI: Build the tests once.\" (#54)\n\nReverts hasura/ndc-postgres#28\n\nThe pre-building takes 15 minutes, whilst each individual job takes\naround 5 minutes to build, let's remove this for now.",
          "timestamp": "2023-10-11T11:25:20Z",
          "tree_id": "fc47953db1a4a770133424defed75e4b36eb3f11",
          "url": "https://github.com/hasura/ndc-postgres/commit/e4ee3a4683f25a2cf7823e2e4f549c828c82d6d3"
        },
        "date": 1697025208489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 100.968562,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 207.04589159999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 60.767764349487166,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 39.83937268612651,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7738183931027386,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 169.918687,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 493.762998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 94.01167493544342,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 68.23611530035667,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.87444915950489,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 202.479337,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 408.05321740000005,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 121.56543607754617,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 73.78122839824792,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.0749336368022693,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 197.31879600000002,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 426.24672005000014,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 109.07404310512196,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 90.12891606325233,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.1027963035642785,
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
          "id": "47d96ffc8e34e0a3cf0190bd046fabfe1abc1e84",
          "message": "Update snapshot paths. (#56)\n\n### What\n\n`cargo-insta` doesn't seem to complain if the paths are wrong. This\nmakes diffs confusing when snapshots actually change.\n\nIt does, however, provide a `--force-update-snapshots` option to solve\nthis.\n\n### How\n\n```\n$ cargo insta test --force-update-snapshots\n```",
          "timestamp": "2023-10-11T12:00:00Z",
          "tree_id": "9a6ac633e81686f98998f1c1eee7a2cc744a4a23",
          "url": "https://github.com/hasura/ndc-postgres/commit/47d96ffc8e34e0a3cf0190bd046fabfe1abc1e84"
        },
        "date": 1697026573796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 89.677709,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 179.8219065999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 53.53638063155772,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.05900636465891,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.686196356496018,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 158.43493899999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 440.52918675,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 91.16351830996983,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.07807925420117,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.760059828494681,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 196.2334555,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 398.7512022000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 108.90998897468351,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 77.4256247803802,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.0524357945148206,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 187.519124,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 433.4645915,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 109.04794081343749,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 82.37293150119604,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 1.0652828906286562,
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
          "id": "4846a675a67ac2c00d9eb4c2f5add4768df2e2fc",
          "message": "Skip deserializing and re-serializing JSON query responses. (#55)\n\n### What\n\nWe have introduced a new feature in ndc-sdk which wraps responses in a\n`JsonResponse`. This allows us to either hand a serializable value to\n`axum` to serialize into JSON and respond to the client, as before, or\noptionally pass through bytes which we assume are a JSON response of the\nsame structure.\n\nThis lets us skip deserializing the JSON output from PostgreSQL and then\nre-serializing it later, which both speeds up responses drastically and\nfrees up database connections faster, as part of this processing was\ndone while holding onto the connection.\n\nThis seems to have fixed a bug in which numbers were deserialized to\nfloating-point values and then re-serialized, leading to lossiness in\nthe processing.\n\n### How\n\nAs we build an array of responses when handling multiple variable sets,\nwe construct the JSON array by appending bytestrings to a buffer,\nprefixed with `'['`, suffixed with `']'`, and separated by `','`. This\ncan be error-prone but hopefully won't have to change very often.\n\nIf the response is JSONB to add an 0x01 byte to the start of the output,\nwhich we have to check for and discard. This will never be valid JSON,\nso we can discard it safely. This was flagged when running the tests\nagainst CockroachDB, as it always returns JSON as JSONB.",
          "timestamp": "2023-10-11T12:22:38Z",
          "tree_id": "77b61e60771ee08ca1cd863e52d422a85b54e49e",
          "url": "https://github.com/hasura/ndc-postgres/commit/4846a675a67ac2c00d9eb4c2f5add4768df2e2fc"
        },
        "date": 1697029414526,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 76.63578799999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 162.199243,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 43.223892557883175,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 32.58405427496598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5870373826947324,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 135.984491,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 396.5719828,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 82.01888830962297,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 49.82884059481411,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6893738263247549,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 115.920608,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 169.17076500000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 88.15421147119271,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.207943533391301,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6348303270972284,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 99.703321,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 138.045594,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 73.02078759191741,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.7725984075615315,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6731630237478388,
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
          "id": "054820f13bf5ba7f823f6b82a44b7e72e1128f51",
          "message": "Comparison operators in configuration (#52)\n\n### What\n\nRather than hardcoding a static set of operators in the ndc we want\nusers to be able to control what operators are available, and what they\nare called, and ultimately, to have these provided by default via\nintrospection.\n\n### How\n\n* We introduce a new field, `comparison_operators` in the `metadata`\nobject of `RawConfiguration`.\n* All internal notions of what a comparison operator can be goes from\nbeing enums to just a string.\n* This requires refreshing the deployment files\n* As well as test metadata files (`tables.json`)\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2023-10-11T15:10:22Z",
          "tree_id": "ba7fe75e773782641b9d5a3837900901d0347ec9",
          "url": "https://github.com/hasura/ndc-postgres/commit/054820f13bf5ba7f823f6b82a44b7e72e1128f51"
        },
        "date": 1697038899355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 120.123067,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 251.139237,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 70.03570456942393,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.55085817622424,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8690279591149548,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 236.596358,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 621.8437325999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 136.23099057586683,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 81.43607669847438,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0339138865466908,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 164.757808,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 250.94486635000007,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 125.10714779492977,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.414984524300962,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.0029482078676712,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 148.36526400000002,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 205.45199069999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 102.76777270141449,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.26968232026448,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9543145290588945,
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
          "id": "933424968da37ce3fa5c4b387b1b32ee873e9627",
          "message": "Remove `SingleOrList` in favor of just a single connection uri (#59)\n\n### What\n\nWe want to get rid of any untagged enums in our configuration format,\nbecause those are awkward to consume from typescript.\n\nOur only instance of an untagged enum was `SingleOrList`, which was used\nto encode that you could have one or more connection uris, and in the\ncase of a single connection uri you didn't need to wrap it in a list.\n\nSince we currently only support a single database connection anyway I\nopted to just accept a single value rather than a list, in order to keep\nspeculation minimal. If/when we support more than a single connection\nstring we'll decide what's appropriate, and perhaps bump the\nconfiguration version number accordingly.",
          "timestamp": "2023-10-11T20:43:27Z",
          "tree_id": "c0f4f7afee219efe7a9a1acecc54f16dde00104c",
          "url": "https://github.com/hasura/ndc-postgres/commit/933424968da37ce3fa5c4b387b1b32ee873e9627"
        },
        "date": 1697058200477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 87.82905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 173.08389834999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 50.41157879338595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.66013395150453,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.623842570863895,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 157.852402,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 439.58275100000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 89.51988796057898,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.771764337839954,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7204262464289012,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 130.729231,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 180.9550524999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 91.79692977673268,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.202080444788038,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6792773932027069,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 114.543264,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 182.038808,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 82.97348942161257,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 15.559520861113825,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7940735195210927,
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
          "id": "5fbb7038f161cd38c501a7a9a78de0d6ae3e439e",
          "message": "camelCase all the things (#60)\n\n### What\n\nThe rest of hasura-v3 uses camel casing, so for consistency ndc-postgres\nfalls in line.\n\n### How\n\n* Add `#[serde(rename_all = \"camelCase\")]` to all data types that get\nserialized\n* Change `configuration.sql` to output camelCased json\n* Use `sed` to bulk update test metadata\n* Manually adapt native queries and pool settings in deployments and\nregenerate them",
          "timestamp": "2023-10-12T05:31:24Z",
          "tree_id": "ae15bd03d981b8f2b6ff2b855c6d0046d241b727",
          "url": "https://github.com/hasura/ndc-postgres/commit/5fbb7038f161cd38c501a7a9a78de0d6ae3e439e"
        },
        "date": 1697089474301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 73.783695,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 144.296941,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 42.224176579896465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 29.238928571081857,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5450457669414159,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 147.806283,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 430.609194,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 86.80274739429176,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 57.31153365079042,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7277006384293565,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 126.777686,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 176.77028,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 88.28671923182334,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.475563880303483,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6467697472913589,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 103.835182,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 145.4759776,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 74.82874252715115,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.779352908237499,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.652290317283636,
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
          "id": "1a7250cbbb240907155a1fabc71292f177fe92e4",
          "message": "Make it easier to run the deployment script without actually deploying. (#58)\n\n### What\n\nI want to make the deployment script easier to extend.\n\nI have:\n\n1. added a `--dry-run` flag which stops it from pushing, which makes it\neasier to test, kind of; and\n2. changed the parameters so you need to explicitly name the image\nrather than computing it.\n\nIn order to test the script, I also needed to make it run from this\nbranch, temporarily. I have therefore added a line to make sure test\nfailures are only reported to Slack from the `main` branch or a tag.\n\n### How\n\nThe usual. Bashing the keyboard to create more bash.",
          "timestamp": "2023-10-12T08:34:19Z",
          "tree_id": "82d9a08f4c370299560a9095c0db5e2b5330c40d",
          "url": "https://github.com/hasura/ndc-postgres/commit/1a7250cbbb240907155a1fabc71292f177fe92e4"
        },
        "date": 1697100289182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 83.187258,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 169.24856900000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 47.242339280682565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.71053307053588,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6027587922255817,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 156.99604649999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 449.88446185000015,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 90.93566102218045,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 57.502318023308845,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7286879077067895,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 122.68759399999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 171.65053419999992,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 87.32570548215179,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.379000660506094,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6238398791138823,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 103.220024,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 143.80234319999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 74.71683332096889,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 11.349037077722684,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6837378926890545,
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
          "id": "ab108428a5251073695ea54e489c90b5dbee34b6",
          "message": "Use the health check when possible in scripts. (#62)\n\n### What\n\n`ndc-postgres check-health` should be more robust than using `nc -z`, as\nit makes a call to `/health` and ensures it receives a successful\nresponse, instead of just verifying that the port is open.\n\n### How\n\nI switched out `nc -z localhost $PORT` for `ndc-postgres check-health\n--port=$PORT` where possible. There's only one place where it's still\nnecessary.\n\nIn the benchmarks' Docker Compose file, I added health checks so we\ncould remove the call to `wait-until` in CI. I expect it will fix the\nsporadic failures we're seeing.",
          "timestamp": "2023-10-12T09:21:51Z",
          "tree_id": "4f8c9545438129a0e439b7b0ca64b9da94565ab4",
          "url": "https://github.com/hasura/ndc-postgres/commit/ab108428a5251073695ea54e489c90b5dbee34b6"
        },
        "date": 1697103141093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 82.500248,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 173.28210169999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.29404830135619,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 34.074764651861564,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5880891494493474,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 148.209878,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 422.9279007499999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 83.45008287677479,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.334832427557046,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6876445662540408,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.30974,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 192.3649172,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 92.13803268027311,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.370924707841908,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6908666647487112,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 109.983201,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 156.4394653,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.33625171436798,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 12.625847979720788,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7377517652954915,
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
          "id": "a7e20d24dd77395e79ba8a824a7b408dd141ab6d",
          "message": "Add testing infrastructure for schema generation (#21)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nFollowing up from #20, this PR adds some CI infrastructure, a bit of\nextra documentation, and a slight tidying up.\n\n---------\n\nCo-authored-by: Tom Harding <tomjharding@live.co.uk>\nCo-authored-by: Tom Harding <tom.harding@hasura.io>",
          "timestamp": "2023-10-12T10:06:54Z",
          "tree_id": "1471d93e697835e18016bba1d216233b944cd925",
          "url": "https://github.com/hasura/ndc-postgres/commit/a7e20d24dd77395e79ba8a824a7b408dd141ab6d"
        },
        "date": 1697106981672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 118.3250385,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 246.67667479999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 68.00615669173736,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.78822716022235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8265093563292982,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 217.942655,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 592.2379921999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 122.85972015470196,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 86.90750949827842,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9506006450335629,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 166.113577,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 255.37175279999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 128.00232201961487,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.091973165377112,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.022616220982971,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 151.087785,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 241.108371,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 109.08105273557302,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 22.91584741408124,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9997104515355731,
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
          "id": "fd6e497baf3161667dd4e2d0e8d5cd006cedcad0",
          "message": "chore: update openapi snapshot (#63)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nMerged https://github.com/hasura/ndc-postgres/pull/21 without making the\nnew test required, so it merged whilst failing.\n\n### How\n\nUpdate snapshot, make new test required.",
          "timestamp": "2023-10-12T11:56:35Z",
          "tree_id": "86ded5c6d21b865e00770e53e2b0f38945007adf",
          "url": "https://github.com/hasura/ndc-postgres/commit/fd6e497baf3161667dd4e2d0e8d5cd006cedcad0"
        },
        "date": 1697114308050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 121.345323,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 262.14266859999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 68.86695390316358,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 53.50271295372238,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8491800241742258,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 216.444721,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 570.2229802499999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 124.77857827390851,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 80.79963529131983,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9269204981806679,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 159.2312705,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 254.2059827,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 120.55410905695814,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 9.867842515005918,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8840942633013097,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 145.298417,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 221.73950014999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 102.18097445000019,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 24.4057072645259,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9093228321101926,
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
          "id": "4e7270ed522a74e89a40a9f207ef4d69297090d1",
          "message": "CI: Ensure that Cargo.lock does not change when building. (#65)\n\n### What\n\nSadly, `cargo build --locked` isn't enough to check that the lockfile is\nup to date, as it will happily run even if there are extra entries in\nthere.\n\nIt does, however, make sure that the file is not updated, which is quite\nunhelpful.\n\n### How\n\nInstead of using `--locked`, we build without it, and then use `git` to\nfigure out if it changed.",
          "timestamp": "2023-10-12T12:36:41Z",
          "tree_id": "62f00f7f2c9df0a86b79b63fab15b54070d2031e",
          "url": "https://github.com/hasura/ndc-postgres/commit/4e7270ed522a74e89a40a9f207ef4d69297090d1"
        },
        "date": 1697116040550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 86.3774365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 175.7953775,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 48.92511476644997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 36.03690659210043,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6107635180753433,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 155.165266,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 445.44728974999987,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 92.20966460580202,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 58.067291735494635,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7305601285552901,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 129.167659,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 185.42482719999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 95.44130681634314,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.020442585854937,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.747912457173593,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 111.785909,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 167.21400239999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 81.91830214280644,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 12.113863056296807,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7469079139619498,
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
          "id": "6788d4846bdca769328862297b90a3c7de86ba36",
          "message": "Push Docker images to Google Container Registry too. (#66)\n\n### What\n\nWe would like images to be hosted on Google Container Registry for our\nown convenience.\n\nWe will keep pushing them to GitHub too, for now.\n\n### How\n\nAugmenting the GitHub workflow to log into Google Cloud and push the\nimages there too.\n\nFor authentication, we first need to authenticate to Google Cloud with\nworkload identity federation, then log into Google Container Registry.",
          "timestamp": "2023-10-16T12:55:24Z",
          "tree_id": "b40214b11bbc3129769ac3d85882f9d3c05500ea",
          "url": "https://github.com/hasura/ndc-postgres/commit/6788d4846bdca769328862297b90a3c7de86ba36"
        },
        "date": 1697461532242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 124.282508,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 264.62802899999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 72.99252671797343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 50.38460776877223,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8529000019431964,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 220.045696,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 594.0463959999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 123.64468583020853,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 80.11191745497739,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.962215802218413,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 175.961996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 279.2081816499999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 131.93050858603175,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 10.961933189570942,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1186882492472703,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 155.623721,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 235.65906859999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 110.94880779582456,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 24.293191830510835,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9831334576689496,
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
          "id": "26e0e3ed46374a06d45c0eb7b34dd9ccc98db026",
          "message": "Update the readme and docs format (#64)\n\n### What\n\nWe want a more uniform readme and docs format for Hasura connectors.\n\nhttps://hasurahq.slack.com/archives/C04NS5JCD8A/p1697031343438639\n\nSee rendered:\n\nhttps://github.com/hasura/ndc-postgres/blob/gil/update-readme/readme.md",
          "timestamp": "2023-10-16T13:01:27Z",
          "tree_id": "290eae1a87503c0e12c653287fca3cee3d1ca01e",
          "url": "https://github.com/hasura/ndc-postgres/commit/26e0e3ed46374a06d45c0eb7b34dd9ccc98db026"
        },
        "date": 1697462477592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 72.483897,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 148.23758999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 40.503004550141554,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 31.302490620639432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.554112325941112,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 139.180404,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 380.33656725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 76.4486813721471,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 53.46359831161119,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6753193762814853,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 118.266565,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 174.51812949999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 86.02039610303356,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.068550713312774,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6645943809293746,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 100.739728,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 152.2678,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.73322734151819,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.095690764812673,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6778103155755931,
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
          "id": "66fd702e63e7cf7982dec0020924d94d2efdebb7",
          "message": "chore(deps): Bump actions/checkout from 3 to 4 (#74)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 3 to\n4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update default runtime to node20 by <a\nhref=\"https://github.com/takost\"><code>@​takost</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1436\">actions/checkout#1436</a></li>\n<li>Support fetching without the --progress option by <a\nhref=\"https://github.com/simonbaird\"><code>@​simonbaird</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1067\">actions/checkout#1067</a></li>\n<li>Release 4.0.0 by <a\nhref=\"https://github.com/takost\"><code>@​takost</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1447\">actions/checkout#1447</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/takost\"><code>@​takost</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1436\">actions/checkout#1436</a></li>\n<li><a\nhref=\"https://github.com/simonbaird\"><code>@​simonbaird</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1067\">actions/checkout#1067</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v3...v4.0.0\">https://github.com/actions/checkout/compare/v3...v4.0.0</a></p>\n<h2>v3.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Mark test scripts with Bash'isms to be run via Bash by <a\nhref=\"https://github.com/dscho\"><code>@​dscho</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1377\">actions/checkout#1377</a></li>\n<li>Add option to fetch tags even if fetch-depth &gt; 0 by <a\nhref=\"https://github.com/RobertWieczoreck\"><code>@​RobertWieczoreck</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/579\">actions/checkout#579</a></li>\n<li>Release 3.6.0 by <a\nhref=\"https://github.com/luketomlinson\"><code>@​luketomlinson</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1437\">actions/checkout#1437</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/RobertWieczoreck\"><code>@​RobertWieczoreck</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/579\">actions/checkout#579</a></li>\n<li><a\nhref=\"https://github.com/luketomlinson\"><code>@​luketomlinson</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1437\">actions/checkout#1437</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v3.5.3...v3.6.0\">https://github.com/actions/checkout/compare/v3.5.3...v3.6.0</a></p>\n<h2>v3.5.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Fix: Checkout Issue in self hosted runner due to faulty submodule\ncheck-ins by <a\nhref=\"https://github.com/megamanics\"><code>@​megamanics</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1196\">actions/checkout#1196</a></li>\n<li>Fix typos found by codespell by <a\nhref=\"https://github.com/DimitriPapadopoulos\"><code>@​DimitriPapadopoulos</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1287\">actions/checkout#1287</a></li>\n<li>Add support for sparse checkouts by <a\nhref=\"https://github.com/dscho\"><code>@​dscho</code></a> and <a\nhref=\"https://github.com/dfdez\"><code>@​dfdez</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1369\">actions/checkout#1369</a></li>\n<li>Release v3.5.3 by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1376\">actions/checkout#1376</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/megamanics\"><code>@​megamanics</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1196\">actions/checkout#1196</a></li>\n<li><a\nhref=\"https://github.com/DimitriPapadopoulos\"><code>@​DimitriPapadopoulos</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1287\">actions/checkout#1287</a></li>\n<li><a href=\"https://github.com/dfdez\"><code>@​dfdez</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1369\">actions/checkout#1369</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v3...v3.5.3\">https://github.com/actions/checkout/compare/v3...v3.5.3</a></p>\n<h2>v3.5.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Fix: Use correct API url / endpoint in GHES by <a\nhref=\"https://github.com/fhammerl\"><code>@​fhammerl</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1289\">actions/checkout#1289</a>\nbased on <a\nhref=\"https://redirect.github.com/actions/checkout/issues/1286\">#1286</a>\nby <a href=\"https://github.com/1newsr\"><code>@​1newsr</code></a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v3.5.1...v3.5.2\">https://github.com/actions/checkout/compare/v3.5.1...v3.5.2</a></p>\n<h2>v3.5.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Improve checkout performance on Windows runners by upgrading\n<code>@​actions/github</code> dependency by <a\nhref=\"https://github.com/BrettDong\"><code>@​BrettDong</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1246\">actions/checkout#1246</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/BrettDong\"><code>@​BrettDong</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1246\">actions/checkout#1246</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>v4.1.0</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1396\">Add\nsupport for partial checkout filters</a></li>\n</ul>\n<h2>v4.0.0</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1067\">Support\nfetching without the --progress option</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1436\">Update to\nnode20</a></li>\n</ul>\n<h2>v3.6.0</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1377\">Fix: Mark\ntest scripts with Bash'isms to be run via Bash</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/579\">Add\noption to fetch tags even if fetch-depth &gt; 0</a></li>\n</ul>\n<h2>v3.5.3</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1196\">Fix:\nCheckout fail in self-hosted runners when faulty submodule are\nchecked-in</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1287\">Fix\ntypos found by codespell</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1369\">Add\nsupport for sparse checkouts</a></li>\n</ul>\n<h2>v3.5.2</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1289\">Fix\napi endpoint for GHES</a></li>\n</ul>\n<h2>v3.5.1</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1246\">Fix\nslow checkout on Windows</a></li>\n</ul>\n<h2>v3.5.0</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1237\">Add\nnew public key for known_hosts</a></li>\n</ul>\n<h2>v3.4.0</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1209\">Upgrade\ncodeql actions to v2</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1210\">Upgrade\ndependencies</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1225\">Upgrade\n<code>@​actions/io</code></a></li>\n</ul>\n<h2>v3.3.0</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1045\">Implement\nbranch list using callbacks from exec function</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/1050\">Add\nin explicit reference to private checkout options</a></li>\n<li>[Fix comment typos (that got added in <a\nhref=\"https://redirect.github.com/actions/checkout/issues/770\">#770</a>)](<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1057\">actions/checkout#1057</a>)</li>\n</ul>\n<h2>v3.2.0</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/942\">Add\nGitHub Action to perform release</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/967\">Fix\nstatus badge</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1002\">Replace\ndatadog/squid with ubuntu/squid Docker image</a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/964\">Wrap\npipeline commands for submoduleForeach in quotes</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1029\">Update\n<code>@​actions/io</code> to 1.1.2</a></li>\n<li><a\nhref=\"https://redirect.github.com/actions/checkout/pull/1039\">Upgrading\nversion to 3.2.0</a></li>\n</ul>\n<h2>v3.1.0</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/939\">Use\n<code>@​actions/core</code> <code>saveState</code> and\n<code>getState</code></a></li>\n<li><a href=\"https://redirect.github.com/actions/checkout/pull/922\">Add\n<code>github-server-url</code> input</a></li>\n</ul>\n<h2>v3.0.2</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/8ade135a41bc03ea155e62e844d188df1ea18608\"><code>8ade135</code></a>\nPrepare 4.1.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1496\">#1496</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/c533a0a4cfc4962971818edcfac47a2899e69799\"><code>c533a0a</code></a>\nAdd support for partial checkout filters (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1396\">#1396</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/72f2cec99f417b1a1c5e2e88945068983b7965f9\"><code>72f2cec</code></a>\nUpdate README.md for V4 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1452\">#1452</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/3df4ab11eba7bda6032a0b82a6bb43b11571feac\"><code>3df4ab1</code></a>\nRelease 4.0.0 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1447\">#1447</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/8b5e8b768746b50394015010d25e690bfab9dfbc\"><code>8b5e8b7</code></a>\nSupport fetching without the --progress option (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1067\">#1067</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/97a652b80035363df47baee5031ec8670b8878ac\"><code>97a652b</code></a>\nUpdate default runtime to node20 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/1436\">#1436</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v3...v4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=3&new-version=4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-16T14:31:51Z",
          "tree_id": "a007550a694d17734db4a7a7a6fce963f3a8396d",
          "url": "https://github.com/hasura/ndc-postgres/commit/66fd702e63e7cf7982dec0020924d94d2efdebb7"
        },
        "date": 1697468773865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 117.84886,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 260.26046884999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 69.65937415648447,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.0584970302791,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8335188368161441,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 220.366126,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 574.002922,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 127.57345674744842,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 82.48161954462164,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9523775427893901,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 171.914763,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 325.824252,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 140.8808919942194,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 16.28669499162885,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1128166410217362,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 154.27273300000002,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 228.06695065,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 109.08727913869204,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.225159695071184,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.986026896745973,
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
          "id": "ae90f7a9c9539d3db524aa53b9bbe0a8b3f2e017",
          "message": "chore(deps): Bump serde from 1.0.188 to 1.0.189 (#72)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.188 to\n1.0.189.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.189</h2>\n<ul>\n<li>Fix &quot;cannot infer type&quot; error when internally tagged enum\ncontains untagged variant (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2613\">#2613</a>,\nthanks <a href=\"https://github.com/ahl\"><code>@​ahl</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/e94fc65f01e60d91c6dd9bafc0601c4ae4a77739\"><code>e94fc65</code></a>\nRelease 1.0.189</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b908487476633a397685a5a5f5265d4e0a4cd3a4\"><code>b908487</code></a>\nRemove double nesting of first_attempt</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/2a7c7faeb4093d69f28b4d75e56620f4944b664b\"><code>2a7c7fa</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2613\">#2613</a>\nfrom ahl/fix-untagged-plus-simple</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/e302e15eea9862056a35d5ef86b5bbf2f542c85a\"><code>e302e15</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2625\">#2625</a>\nfrom marcospb19/add-csv-to-the-list</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1cbea892cf5b786d606b1ef5f6733cc2e39bbbc2\"><code>1cbea89</code></a>\nAdd CSV to the formats list</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/37a32857a2667756936888a1da81ada9242d26a9\"><code>37a3285</code></a>\nUpdate ui test suite to nightly-2023-10-06</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8c4aad3a59515f7b779f764d5e16d6bae297ab7f\"><code>8c4aad3</code></a>\nClean up unneeded raw strings in test</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1774794b191c7e14b178aee8a18dcfd34dd002a8\"><code>1774794</code></a>\nResolve needless_raw_string_hashes clippy lint in test</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1af23f1f2d51ce2bb80f9d54c7ccb68ee0c672a0\"><code>1af23f1</code></a>\nTest docs.rs documentation build in CI</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/94fbc3d38838398a8971cb4e4d617b8d42685b0c\"><code>94fbc3d</code></a>\nfix clippy</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.188...v1.0.189\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.188&new-version=1.0.189)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-16T14:49:13Z",
          "tree_id": "f32118afc4e9c172c9526ae3a6fd492aa5cf387f",
          "url": "https://github.com/hasura/ndc-postgres/commit/ae90f7a9c9539d3db524aa53b9bbe0a8b3f2e017"
        },
        "date": 1697469619882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 101.2273705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 214.41692735000007,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 57.228332149874284,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 44.12511253232834,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7342997621662782,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 178.255088,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 504.90774899999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 107.47941149026511,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 67.63370816801617,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8053219542769198,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 152.690913,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 229.93684999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 112.10858126629341,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 9.485106889030973,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8916410864682529,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 135.506331,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 198.7684525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 97.41600061311212,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 16.204782151340524,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8953407627308233,
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
          "id": "d5dcc21897156b3d4dbfa91d7d789a9df2c76fe7",
          "message": "In tests, ensure that query responses are valid. (#67)\n\n### What\n\nBy deserializing the query response to a `QueryResponse` and not just a\n`Value`, we can be relatively sure that it conforms to the\nspecification.\n\nThis is especially important now that we pass the JSON directly from the\ndatabase to the HTTP response.\n\nThis doesn't seem to add any time to the test run, probably because\ndeserializing to a `Value` is time-consuming too.\n\nThe order of some JSON keys in snapshots have changed to conform to the\n`QueryResponse` key order.\n\n### How\n\nI changed the return type of a single function. Yay for shared test\ncode!\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2023-10-17T06:19:07Z",
          "tree_id": "b9ddcb2b382cc0d0f60fd699982fb4afe6080b80",
          "url": "https://github.com/hasura/ndc-postgres/commit/d5dcc21897156b3d4dbfa91d7d789a9df2c76fe7"
        },
        "date": 1697524978241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 98.180098,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 211.19228389999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 53.43670254871837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 45.142205222823705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7084441215204551,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 172.320286,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 501.1117887999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 104.0898851726077,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 66.03281065586492,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8053604849861352,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 144.7416365,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 206.85199795,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 107.79049198960533,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.010501766279589,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7883168642622899,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 130.026283,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 185.1960323999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 92.66569249510236,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 18.10133468639407,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8121506610879319,
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
          "id": "7adcd7d12f5e789ef2bb13ff527d60c7ba777a0c",
          "message": "Add simple constant expressions folding (#75)\n\n### What\n\nWhen we generate SQL we sometimes generate \"messy\" code. Specifically,\nin `WHERE` expressions we sometimes generate `true AND <expr>` instead\nof `<expr>` when combining multiple predicates (where, join, and soon\nrelationship predicate). I'd like to normalize the expressions in the\nAST so that things like `true AND <expr> AND true` are reduced to\n`<expr>`, so that test snapshots are easier to read and will not change\nwith no good reason.\n\nNote that this kind of rewrite does not intend to modify the logic of\nthe query, nor does it intend to improve performance, since postgres\nprobably already has a constant folding rewrite of its own. The goal is\nto make the generated code nicer, easier to understand, and easier to\ntest.\n\nNext, I will add handling for the predicate in `PathElement`, and by\nmaking this change I'd expect it to only affect tests that actually\ninclude a meaningful `PathElement`.\n\n### How\n\nA recursive algorithm. Pattern match on three kinds of boolean\nexpressions - `And`, `Or` and `Not`, apply the rewrite to their\nchildren, then check whether one of the children can be pruned.\n\nThis rewrite is applied to the `json_select` generated from the\n`translate` function.",
          "timestamp": "2023-10-17T06:41:10Z",
          "tree_id": "8a80df89958ecb63ba7e978b06114d90adf939c7",
          "url": "https://github.com/hasura/ndc-postgres/commit/7adcd7d12f5e789ef2bb13ff527d60c7ba777a0c"
        },
        "date": 1697526599921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 88.119636,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 179.7286744,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 48.99254433184942,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 37.09089085028558,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6186849209328269,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 158.8846685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 444.2697475,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 94.87899782036372,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.31216750619426,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7236720257450833,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 130.05252000000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 185.924614,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 98.30920946584716,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.657309262021911,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.758299021994653,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 115.40211,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 168.78709965,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 81.8326977832201,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 17.43468857032036,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7046879395010306,
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
          "id": "f948a525af0d7ceb4fad4fa5bf50dffdafa0503c",
          "message": "Upgrade to Rust 1.73.0 (#77)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpgrade to Rust 1.73.0\n\n### How\n\nUpdate `rust-toolchain.toml`. Nix automatically uses the new thing. You\nmay need to re-run `rustup` otherwise?",
          "timestamp": "2023-10-17T09:27:26Z",
          "tree_id": "c9e87c2b2ce9c2fe1a938c0e31a0f8954fd7498e",
          "url": "https://github.com/hasura/ndc-postgres/commit/f948a525af0d7ceb4fad4fa5bf50dffdafa0503c"
        },
        "date": 1697536755524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 67.523025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 140.94258799999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 37.29411665129212,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 29.977304350613885,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5275487697647542,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 134.77960000000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 376.7641795,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 81.41653637361951,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 47.28949846734831,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6605924202404548,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 118.70849999999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 178.2115260499999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 85.95337777636175,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.312735870172247,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.560316699876151,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 101.47784250000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 151.61843725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 73.8788267684517,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.241353301194252,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6419070890571672,
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
          "id": "2e15479f6ad252151d8a1cd5af68b2447319c768",
          "message": "Revert \"Upgrade to Rust 1.73.0\" (#80)\n\nReverts hasura/ndc-postgres#77\n\nThis is causing some build errors, revert for now:\nhttps://github.com/hasura/ndc-postgres/actions/runs/6545434800/job/17776631844#step:8:1787",
          "timestamp": "2023-10-17T11:38:12Z",
          "tree_id": "8a80df89958ecb63ba7e978b06114d90adf939c7",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e15479f6ad252151d8a1cd5af68b2447319c768"
        },
        "date": 1697543285070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 105.208216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 222.300549,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 59.045958156937076,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 45.304299292601826,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7325564203497023,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 201.791496,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 531.1225357000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 116.4691827024792,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 73.47715493388566,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8683382122025838,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 153.99319500000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 236.1696335,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 119.31017130420399,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 9.888421614531623,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9387565809334492,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 143.121716,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 212.1911197,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 99.79762770809849,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.305624322752507,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8465743095515544,
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
          "id": "34cbe3bb1df08fa5557f3e976ba50136a50473af",
          "message": "Update the metadata we use for testing. (#82)\n\n### What\n\nThe v3 metadata format has changed considerably. We need to get with the\nprogram.\n\n### How\n\nPainfully.",
          "timestamp": "2023-10-17T20:06:42Z",
          "tree_id": "2a284df19f77f393fecba09ad6aa030cf31f3d03",
          "url": "https://github.com/hasura/ndc-postgres/commit/34cbe3bb1df08fa5557f3e976ba50136a50473af"
        },
        "date": 1697574097509,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 94.058719,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 206.5979727,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 52.05202584580915,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.20330703614864,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7059851131375133,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 181.476141,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 485.9085939999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 103.10789751580963,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 69.77971708539438,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8031507046680018,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 145.0178105,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 213.51917699999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 108.56268424900635,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.3128613080096585,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8033322224093458,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 123.20996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 177.375662,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 90.37098879531028,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 11.488016468324773,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.805618070216142,
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
          "id": "9759399ffa1598bd26d67a09e815c7dc78f0ee14",
          "message": "Add profiling commands and documentation (#78)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nRecently used `heaptrack` and `valgrind` to work out what was going with\nmemory in `ndc-postgres`. Adding `justfile` commands and Nix shell deps\nto make it easier to do this kind of work in future.\n\n### How\n\nDocs, Nix flake and readme changes.",
          "timestamp": "2023-10-18T08:09:58Z",
          "tree_id": "1f2591ef1a4e64e22a17f7d520d68e9c99f4e51f",
          "url": "https://github.com/hasura/ndc-postgres/commit/9759399ffa1598bd26d67a09e815c7dc78f0ee14"
        },
        "date": 1697617888136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 133.193081,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 278.33108399999975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 79.16110373919541,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 54.09554432369539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9351501007450999,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 241.94921,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 669.70436825,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 142.34889424103002,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 82.6688702193288,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0704696498842101,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 179.25730750000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 271.0315977,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 133.1845082426275,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.895084015511486,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1281326599001071,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 168.62790999999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 241.64531264999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 117.03199046888216,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 29.253734027601013,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9825401970816755,
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
          "id": "7512231de581dcb7c1a2051a6770b1c8b3d39e27",
          "message": "set license in Cargo.toml (#76)\n\n### What\n\nWe set the project's license in the `Cargo.toml` files so that it can be\npicked up by tools such as\n[cargo-license](https://github.com/onur/cargo-license).",
          "timestamp": "2023-10-18T08:27:44Z",
          "tree_id": "5bac2f4197093236bd1a4be0710dcc5ef734e64d",
          "url": "https://github.com/hasura/ndc-postgres/commit/7512231de581dcb7c1a2051a6770b1c8b3d39e27"
        },
        "date": 1697619347317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 86.363697,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 175.3833366,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 49.65657019992321,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 36.02624194331813,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6058028307232568,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 162.119711,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 440.2206059,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 91.95273405294343,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 63.60064665191605,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7404407315293362,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 141.654853,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 198.27492664999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 104.7323107332939,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 10.57734131711939,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8795204170608619,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 122.270906,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 172.9529868,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 86.40873528498986,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 16.440666789934426,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7522521650608393,
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
          "id": "c735e999df20515a91312b12d9741bd8560b14f7",
          "message": "chore: add internal.visibility = 'user' for execute query span (#83)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe'd like to expose query execution time spans to our users.\n\n### How\n\nWe add the `internal.visibility` = `user` annotation.",
          "timestamp": "2023-10-18T08:51:48Z",
          "tree_id": "fa08ae26bd96fc9edebed458dbad037e2d33f1eb",
          "url": "https://github.com/hasura/ndc-postgres/commit/c735e999df20515a91312b12d9741bd8560b14f7"
        },
        "date": 1697620927923,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 118.904819,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 261.683277,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 65.24281589745995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 54.80900711718874,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8367533288540653,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 214.97788,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 624.14228,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 129.63958220794441,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 79.4750594926683,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9274830175948546,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 157.9508225,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 234.6323366999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 122.79557762558852,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.711874667955641,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1071012789174144,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 149.629447,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 228.04401479999987,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 104.46388480986707,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.700176070477227,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8491167191852373,
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
          "id": "3f4cdf818256f43b6b851e1629a8353797694e9f",
          "message": "chore: only trigger alerts for jobs that only run on main (#79)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nOur Slack alerts only work with `if: always()`\n\n### How\n\nKeep them on jobs that only run on `main` (where they are useful).\nRemove otherwise.",
          "timestamp": "2023-10-18T14:19:00Z",
          "tree_id": "2c079cff985f02b3d110773763c359b4b5bd76c2",
          "url": "https://github.com/hasura/ndc-postgres/commit/3f4cdf818256f43b6b851e1629a8353797694e9f"
        },
        "date": 1697639363182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 122.918111,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 267.475115,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 69.21637339492312,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 53.76777515175438,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.859118508669785,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 214.121631,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 611.6147378499994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 131.75417904330664,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 74.56496521889807,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9217973301841024,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 165.876457,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 234.068135,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 122.47859092596536,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 10.1941866797616,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9334708163082835,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 151.857934,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 218.36533419999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 108.21033418615657,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 21.756697368837123,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9289146905821586,
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
          "id": "dfd2d8434af9c2ff1cf1fb82fe6a54e0a8faf407",
          "message": "Always wrap connection URIs in `{\"value\": ...}` on serialization. (#85)\n\n### What\n\nConnection URIs should be wrapped in `{\"value\": ...}`. This is the\nformat specified by the JSON schema. We do accept raw strings too, for\nnow.\n\nWe will follow up with test cases to ensure they do not diverge in the\nfuture.\n\n### How\n\nWe serialize via `ResolvedSecretIntermediate`, choosing the `Wrapped`\nconstructor.",
          "timestamp": "2023-10-18T17:28:56Z",
          "tree_id": "d8f167fc5ee99a051652714e41b47e71b0609beb",
          "url": "https://github.com/hasura/ndc-postgres/commit/dfd2d8434af9c2ff1cf1fb82fe6a54e0a8faf407"
        },
        "date": 1697651245979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 74.944563,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 150.79094999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 43.80964278382653,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.082777108460576,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5596971550033136,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 133.8369275,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 395.1723166499998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 77.31158218826648,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 52.39302350795465,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6687345921443851,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 124.346928,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 176.2761815,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 87.6725118901549,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.866771365638513,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6227295807193766,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 104.999236,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 151.1095415,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.60641828824849,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.720606699923522,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6840788042935406,
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
          "id": "4bfd5d607915962867e049dcc4b3f5fd77cea968",
          "message": "Factor out a script to generate a new configuration. (#87)\n\n### What\n\nThis removes some duplication, but more importantly, it allows us to get\na little more sophisticated.\n\nNow, when a request fails, we print the response status _and_ the body.\nPreviously, we only printed the status.\n\nWe sometimes see a 500 Internal Server Error and don't know why.\nHopefully this will help us get to the bottom of it.\n\n### How\n\nInstead of using `curl -f`, which prints a simple error, we capture the\nstatus code using `--write-out '%{http_code}\\n'`, and the body using\n`--output $OUTPUT_FILE`.\n\nWe can then use this to construct a more useful error message.\n\nAll other logic stays the same.",
          "timestamp": "2023-10-19T07:31:03Z",
          "tree_id": "217d35146629da0c2f3c8a1fe2374ac9d508ddfc",
          "url": "https://github.com/hasura/ndc-postgres/commit/4bfd5d607915962867e049dcc4b3f5fd77cea968"
        },
        "date": 1697701202672,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 81.445313,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 168.62635825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 45.166853118996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 34.92463445241978,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5838543987001671,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 142.750407,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 406.335556,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 82.90421173268578,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 53.35548108088801,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6463181728864676,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 123.11992900000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 169.622137,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 90.61601701526835,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.212229738260007,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7054782394149346,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 109.084271,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 158.64406499999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 78.72928640366783,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 13.789052760114302,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7359392621198165,
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
          "distinct": false,
          "id": "4cd5ee89046d6391f741d8be6de86ed128aff2c2",
          "message": "Introspect comparison operators (#84)\n\n### What\n\nRather than dreaming up the comparison operators that can apply to each\ntype we ask the database.\n\n### How\n\nWe introduce a new configuration field, `comparisonOperatorAliases`,\nwhich defines what names to expose database infix comparison operators\nunder. This cannot be derived only from introspection. The default uses\nthe names of graphql-engine v2.\n\nWe filter how much of the introspection data ends up in the deployment\nand schema to include only types, comparison operators, and aggregation\nfunctions that are actually used in native queries or tables, in order\nto keep the size small and the contents concise and relevant.\n\nThe operators are sourced from the catalog table `pg_operator`, because\nthis is supported by both Postgres and CockroachDB. We could relatively\neasily extend our comparison operators to cover normal prefix\npredicates, but that is future work.\n\nAnswering the question \"which operators are defined for a given type\" is\na somewhat nuanced affair, since we have to take into account operator\noverloading and implicit casts.\n\nThere is even the insular case of an operator (`SIMILAR TO` in Postgres)\nbeing defined as syntactic sugar over `LIKE`. Since `SIMILAR TO` is\nsomewhat obscure (IMO) and not really very distinguished from LIKE and\n`REGEX`, I've opted not to try and have it appear automatically during\nconfiguration/introspection. (And any user who categorically needs to\nuse it are free to define it themselves in the deployment)\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2023-10-19T09:06:44Z",
          "tree_id": "4720cba40b2e6f1568b94d6dc2fc12602271fc1d",
          "url": "https://github.com/hasura/ndc-postgres/commit/4cd5ee89046d6391f741d8be6de86ed128aff2c2"
        },
        "date": 1697708304456,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 105.6935135,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 222.86830644999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 62.08450002787015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 43.26468545078251,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7412778930263045,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 193.566106,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 511.0905490000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 112.4473249630059,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 71.26329389710945,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7988471884391075,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 148.0656625,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 215.11137799999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 112.43984322992821,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 9.988588871914885,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9182083603564823,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 133.19815499999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 205.31147049999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 90.43777725545442,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 24.434640363159062,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8275184654791908,
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
          "id": "8faaebb30b5a7082facd976f0d175fc4751369a0",
          "message": "use the predicate in PathElement (#81)\n\n### What\n\nWe haven't been using the `predicate` in the\n[PathElement](https://hasura.github.io/ndc-spec/reference/types.html#pathelement).\nThis is no good. We need to use it so we don't produce incorrect results\nto users.\n\n### How\n\nWe generate a boolean Expression for the predicates using the relevant\ntables and we `AND` the resulting Expression with the join predicate in\nthe `WHERE` clause.",
          "timestamp": "2023-10-19T12:03:08Z",
          "tree_id": "611b7f8f3971a653d423a73de9c3f7641c56c2cb",
          "url": "https://github.com/hasura/ndc-postgres/commit/8faaebb30b5a7082facd976f0d175fc4751369a0"
        },
        "date": 1697718232316,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 72.09033600000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 146.975767,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 41.6209842031844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 28.722021537309978,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5381857382761581,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 135.76835799999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 381.30926600000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 80.74417030296568,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 51.22187918500761,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6460637484343822,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 117.91352,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 174.88283499999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 89.25102380926899,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.992232167868238,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6439577420480119,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 101.956157,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 146.48961,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.73656375071988,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.286586573365511,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6493040767267282,
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
          "id": "93ef55c58f7ffdb8ca10f895e8a0c6540ee96d90",
          "message": "Simplify the Docker image tag and disable releases to DDN for now. (#88)\n\n### What\n\nThis removes the timestamp from the Docker image tag.\n\nDocker images are inherently timestamped so we do not need this.\n\nWe also disable releases to DDN until we have moved over to the new\nimage location.\n\n### How\n\nDeleting code, mostly.",
          "timestamp": "2023-10-19T13:28:26Z",
          "tree_id": "81856adb01218aa70c679d5437a5b163b4f8811f",
          "url": "https://github.com/hasura/ndc-postgres/commit/93ef55c58f7ffdb8ca10f895e8a0c6540ee96d90"
        },
        "date": 1697723866317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 123.292314,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 251.308576,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 73.0283277918432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 48.48399055809513,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8689675288080786,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 232.769634,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 624.9253891999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 135.34211093515182,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 87.78882728833904,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.998938413581695,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 171.98087199999998,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 247.60736595,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 124.32957356574734,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 11.972216994445503,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.104938720171573,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 155.001784,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 234.624779,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 107.66377781210369,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 27.6359843103952,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8684378308115667,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "divi09112@gmail.com",
            "name": "Divi",
            "username": "imperfect-fourth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a2a1ef5224ed0a00e67fcff8c839bbfe4da62146",
          "message": "[DO NOT MERGE] ci: change update branch for config-server staging deployment (#68)\n\nhttps://hasurahq.atlassian.net/browse/V3INFRA-37",
          "timestamp": "2023-10-19T16:00:27Z",
          "tree_id": "ac03a796e65db6e4b8e9417b4941dbcc4cea70aa",
          "url": "https://github.com/hasura/ndc-postgres/commit/a2a1ef5224ed0a00e67fcff8c839bbfe4da62146"
        },
        "date": 1697731872333,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 88.716084,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 178.67060994999989,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 50.9116308872064,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.34825736157997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6246391112407174,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 144.925551,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 419.6141388999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 86.71303642080173,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 52.64344501324456,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6532083651775737,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 126.525524,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 176.564865,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 90.24127846800174,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.261841437638694,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.684519994242272,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 110.797965,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 155.7701159,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.898734582633,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 14.234507672578843,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6838825109983969,
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
          "id": "10af0e351ee11fb40aa3128e6f6bff3c74d5cb0b",
          "message": "Ensure that the deployment configuration conforms to the schema. (#91)\n\n### What\n\nWe test that the checked-in `chinook-deployment.json` files conform to\nthe schema generated by `schemars`. There is a separate test to ensure\nthese are up-to-date.\n\n### How\n\nThe test loads the schema using `jsonschema`, and then validates the\nschema. On failure, it iterates through the errors and formats them in a\nhuman-readable way.\n\nI verified this by manually modifying the `chinook-deployment.json`\nfiles to ensure they failed.\n\nNote that this test case is not `async`. This is on purpose.\n`jsonschema` will mess with `tokio` runtimes if they exist; it can only\nbe used in non-async code or with extra effort. As this test does not\nneed to be async, it was simpler to avoid `tokio`.",
          "timestamp": "2023-10-19T18:39:02Z",
          "tree_id": "e4d1505e51f718d93eafc6753721b9b09d48f4d8",
          "url": "https://github.com/hasura/ndc-postgres/commit/10af0e351ee11fb40aa3128e6f6bff3c74d5cb0b"
        },
        "date": 1697742472445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 118.667645,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 249.07887089999986,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 68.84271258959278,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.34691015530383,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8185804559042468,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 217.063252,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 600.56218,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 128.21733131638882,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 76.93382228779453,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8946498655015807,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 164.72319299999998,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 232.34281294999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 121.1506394090281,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.290253542199807,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9946562767207021,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 146.71567199999998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 217.502006,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 103.99425102344986,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.32328535297748,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9191552553224159,
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
          "id": "eb5714ff1e5700b38a78d274ea53ee787b3fe134",
          "message": "follow-up refactor to sorting with predicate (#89)\n\n### What\n\nWe have some slightly tricky repeating code in a couple of places.\nI tried to extract it into helpers.\n\nFollow-up to\nhttps://github.com/hasura/ndc-postgres/pull/81#discussion_r1365158702\n\n### How\n\nExtract common code and pass the varying bits as arguments.\n\nWe didn't save lines of code, but we have less duplicated logic.",
          "timestamp": "2023-10-20T08:46:09Z",
          "tree_id": "48b5441eea6725655b5b312ecd56594f5dc04b13",
          "url": "https://github.com/hasura/ndc-postgres/commit/eb5714ff1e5700b38a78d274ea53ee787b3fe134"
        },
        "date": 1697792982190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 82.152249,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 170.48802939999973,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 47.26429864487537,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.95886154768232,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5956404132761334,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 152.362358,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 459.16390209999986,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 94.29634721902794,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 56.56365857745392,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6956127102324153,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 124.6724,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 181.2311484,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 91.65514996363378,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.853821601408171,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7180508636595124,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 108.577821,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 154.5401605,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 78.2321881300645,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 13.189687355237481,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.676634286346737,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "divi09112@gmail.com",
            "name": "Divi",
            "username": "imperfect-fourth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8cf9b726c8def395d3ce1047c44d922f353f8ae6",
          "message": "ci: update release pipeline to use argocd (#90)\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>\nCo-authored-by: nizar-m <19857260+nizar-m@users.noreply.github.com>",
          "timestamp": "2023-10-20T09:28:19Z",
          "tree_id": "34712799239ce7790af5a8514f550aa9727e71a0",
          "url": "https://github.com/hasura/ndc-postgres/commit/8cf9b726c8def395d3ce1047c44d922f353f8ae6"
        },
        "date": 1697795429687,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 77.114446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 154.5670538,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 44.59674307659149,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.976634710372473,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5812146732604159,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 137.864141,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 404.26063419999974,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 80.02219035091306,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 55.19030780064858,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6807825152753884,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 118.149228,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 164.66082715000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 88.6365170885031,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.463635313638349,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6203130732403926,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 102.466928,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 144.96091424999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.68683179905169,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.829051171410114,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6284264976283473,
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
          "distinct": false,
          "id": "14bbf1c46569841a8cd132d43cb6b8f61c9a2e7e",
          "message": "Use new `SecretValue` from `ndc-sdk` (#92)\n\n### What\n\nFor consistency with the rest of the services we use the `SecretValue`\ntype from ndc-sdk for values that can be derived from secrets.",
          "timestamp": "2023-10-20T11:55:22Z",
          "tree_id": "3a36e745a5b4beb7838ed25308a9fcbeef903692",
          "url": "https://github.com/hasura/ndc-postgres/commit/14bbf1c46569841a8cd132d43cb6b8f61c9a2e7e"
        },
        "date": 1697804774081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 87.466341,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 193.879725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.269859628722344,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.69118426551128,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6410588294988756,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 160.640412,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 467.4610788,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 97.66546901486612,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.04262309395466,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7576416832503706,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 139.01601499999998,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 201.94350444999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 103.70931044263253,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.66336272568492,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.84073677358795,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 123.508112,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 181.8577384,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 86.86068622108291,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 19.958129630793493,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.739153493703901,
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
          "id": "d89f19627d5129f2856ca95e552231a3e819d1dc",
          "message": "Trim the snapshot files (#94)\n\nA lot of our test snapshots have been duplicated. Some of them are not\nrelevant anymore and should be removed.",
          "timestamp": "2023-10-20T11:58:10Z",
          "tree_id": "88b24d8a56de95bf6984def57d6bf802d42cfca2",
          "url": "https://github.com/hasura/ndc-postgres/commit/d89f19627d5129f2856ca95e552231a3e819d1dc"
        },
        "date": 1697804924238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 100.917928,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 206.9545120000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 55.80836443621882,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 44.33550831728109,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7174787020947665,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 176.658726,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 507.8395303,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 102.41555332657512,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 69.87835909832143,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.831696301067833,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 149.030774,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 212.4684584,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 115.19141646630874,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.85754316443122,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9712824866658514,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 131.0051125,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 190.2156853,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 95.98021915656282,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 16.505011541991465,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8815712791988737,
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
          "distinct": false,
          "id": "7eb46fb93dd0b1413b5122af8c7f769e73aeaff2",
          "message": "Restore proper configure options defaults, and add a test (#93)\n\n### What\n\nBy mistake, the confgure options had gotten empty defaults. The proper\ndefaults have now been restored.\n\n### How\n\n* A manual Default trait instance\n* A test that checks that a 'vanilla' deployment (i.e., the one\ngenerated from only a connectionUri) doesn't change.",
          "timestamp": "2023-10-20T12:51:25Z",
          "tree_id": "71b79e70fd82c01f446fa82eccb7d340b352a0ca",
          "url": "https://github.com/hasura/ndc-postgres/commit/7eb46fb93dd0b1413b5122af8c7f769e73aeaff2"
        },
        "date": 1697808238200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 94.0409065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 203.07205499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 53.16331764619455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 40.818934042282955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.691282816385001,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 181.302868,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 498.46579099999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 106.69981627368178,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 66.74491743907207,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7979250988841938,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 144.3449085,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 202.37731374999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 108.401078286709,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.7248590735696325,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8222706722675931,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 124.9518085,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 179.65850964999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 91.32170555416465,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 13.548343240907087,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8447242248289931,
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
          "id": "13a56a23bd2393f5586ecd2b7a41893bd2f5ca85",
          "message": "Move state into its own module. (#97)\n\n### What\n\n`State` is now in its own module, `state.rs`. It doesn't need to be\ncoupled with configuration.\n\nThis makes it easier to add things to state without having to be\nconcerned with configuration too.\n\n### How\n\nCut and paste.",
          "timestamp": "2023-10-23T07:02:50Z",
          "tree_id": "b2e94b29554866961331429e3bcfcaa7bf35dd31",
          "url": "https://github.com/hasura/ndc-postgres/commit/13a56a23bd2393f5586ecd2b7a41893bd2f5ca85"
        },
        "date": 1698046167515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 81.1913615,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 168.22253594999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 45.841848308178406,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 34.10915893906857,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5765170529878407,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 151.81577299999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 433.7447442999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 93.41243216784765,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 54.94700974188804,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6744702370379038,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.873531,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 185.989811,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 94.0426581723584,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.910645761484261,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.728741251506897,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 111.1405405,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 153.44123799999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.05866098866802,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 16.159068001272146,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7098951957680388,
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
          "id": "91f493d9a111fd88418c6faf08dc80f6bb6d8e40",
          "message": "Add database information to the execution trace. (#98)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThis adds database information to the execution trace in accordance with\n[Semantic Conventions for Database Client Calls][].\n\nWe extract the database information from the URL, and query for the\nserver version number. The version number will be in the libpq format,\ne.g. \"162000\" for v16.2.\n\n### How\n\nI factored out configuration access from creating the pool in order to\nre-use the `Url` instead of parsing it twice.\n\nThen I pulled out the database information in the same way as `sqlx`'s\n[`PgConnectOptions::parse_from_url`][]. Unfortunately, most of the stuff\nhere is `pub(crate)` (probably for API stability reasons), so I couldn't\njust access the data.\n\nI have not added traces to `/explain`, but I will follow up with those.\n\n[Semantic Conventions for Database Client Calls]:\nhttps://opentelemetry.io/docs/specs/semconv/database/database-spans/\n[`PgConnectOptions::parse_from_url`]:\nhttps://github.com/launchbadge/sqlx/blob/49ccc7ca3215fd6e96f38abb528446a894e3a561/sqlx-postgres/src/options/parse.rs#L9-L110",
          "timestamp": "2023-10-23T08:55:57Z",
          "tree_id": "78e6a25304086eaa22d87da815242eb5fdbbad3c",
          "url": "https://github.com/hasura/ndc-postgres/commit/91f493d9a111fd88418c6faf08dc80f6bb6d8e40"
        },
        "date": 1698053083068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 101.329563,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 213.71510569999992,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 57.741329333145494,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.8896877931656,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7299738719971817,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 194.4494065,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 560.76376,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 112.35004959209907,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 75.92310497715359,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8572194697762066,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 156.34743,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 216.08626389999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 111.35825140552771,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.353196002262877,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8437958254403476,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 137.533655,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 206.21238595,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 96.94116424906248,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 21.621347823190646,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8305625491785434,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "divi09112@gmail.com",
            "name": "Divi",
            "username": "imperfect-fourth"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "187d25abcb9936caed1a4eb93f781ee039cef4cb",
          "message": "ci: add rollback steps in release pipeline (#96)",
          "timestamp": "2023-10-23T10:42:14Z",
          "tree_id": "e87e457a8e1f5ef7207b640d2c84c07e3eb4bf15",
          "url": "https://github.com/hasura/ndc-postgres/commit/187d25abcb9936caed1a4eb93f781ee039cef4cb"
        },
        "date": 1698059180239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 121.788329,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 253.91101759999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 68.61065419675262,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 52.716136689179876,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8497670567610384,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 219.40104300000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 569.5436173999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 128.49600098825098,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 78.26774061984341,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9056242937331488,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 164.919104,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 250.3390752,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 129.4559356509649,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 14.222178745733913,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.093343984977016,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 148.246457,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 223.01993899999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 101.91241054745889,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 25.88443571448235,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8380752963867683,
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
          "id": "b692ed04d883c34b8be2004bffef49d33e7004cc",
          "message": "support nulls in variables (#99)\n\n### What\n\nWe want to support supplying a null as a value in variables (foreach).\n\n### How\n\nPreviously, we didn't support supplying null as a variable (foreach)\nbecause we didn't know the value of types at the time. We have since\nshifted to using casts on user values when the type is not a simple\nnumber. We can use the same approach for variables as well and wrap them\nin casts. This way we can supply null as a type of Option<String> which\nwill then be cast to the right type.",
          "timestamp": "2023-10-23T10:46:35Z",
          "tree_id": "0c83c0fff5d10b1d05389f84c91e4a1bf21d11b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/b692ed04d883c34b8be2004bffef49d33e7004cc"
        },
        "date": 1698059741485,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 85.2164575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 169.50495550000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 49.929785297621265,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.44495563045126,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5923376430054871,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 165.9623515,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 444.6752305,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 97.13363564322812,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 61.843010017579516,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7435825287651479,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.444789,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 186.88922659999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 97.3667513412878,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.774980364609917,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8198683821016881,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 114.825073,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 168.1344555,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 80.3205164285715,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 17.90062647000343,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6819310209553983,
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
          "id": "69825eb558174acf40d60839b45cc7c50721e853",
          "message": "chore(deps): Bump tracing from 0.1.39 to 0.1.40 (#102)\n\nBumps [tracing](https://github.com/tokio-rs/tracing) from 0.1.39 to\n0.1.40.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tracing/releases\">tracing's\nreleases</a>.</em></p>\n<blockquote>\n<h2>tracing 0.1.40</h2>\n<p>This release fixes a potential stack use-after-free in the\n<code>Instrument::into_inner</code> method. Only uses of this method are\naffected by this\nbug.</p>\n<h3>Fixed</h3>\n<ul>\n<li>Use <code>mem::ManuallyDrop</code> instead of\n<code>mem::forget</code> in <code>Instrument::into_inner</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2765\">#2765</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2765\">#2765</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/pull/2765\">tokio-rs/tracing#2765</a></p>\n<p>Thanks to <a\nhref=\"https://github.com/cramertj\"><code>@​cramertj</code></a> and <a\nhref=\"https://github.com/manishearth\"><code>@​manishearth</code></a> for\nfinding and fixing this issue!</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/15600a3a67c418f53cb80ff21da57d89a5de0486\"><code>15600a3</code></a>\ntracing: prepare to release v0.1.40</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tracing/commit/20a1762b3fd5f1fafead198fd18e469c68683721\"><code>20a1762</code></a>\ntracing: use ManuallyDrop instead of mem::forget (<a\nhref=\"https://redirect.github.com/tokio-rs/tracing/issues/2765\">#2765</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/tracing/compare/tracing-0.1.39...tracing-0.1.40\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tracing&package-manager=cargo&previous-version=0.1.39&new-version=0.1.40)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-23T15:45:25Z",
          "tree_id": "845443758cff76626d70caf63156a8f3448abe38",
          "url": "https://github.com/hasura/ndc-postgres/commit/69825eb558174acf40d60839b45cc7c50721e853"
        },
        "date": 1698077768609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 98.062802,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 197.46428874999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 57.53784399547235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 37.76970329894349,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6813542382492863,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 202.031078,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 531.006249,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 116.35910924450717,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 74.50964645334285,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8774507888024734,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 148.562372,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 227.920292,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 115.01506006463869,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.8082225489575166,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9863259625863747,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 139.8681125,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 202.9194971,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 98.13636580111016,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 21.516896947282945,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8417094148653826,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}