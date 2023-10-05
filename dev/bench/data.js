window.BENCHMARK_DATA = {
  "lastUpdate": 1696509237452,
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
      }
    ]
  }
}