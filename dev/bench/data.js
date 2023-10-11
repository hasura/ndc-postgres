window.BENCHMARK_DATA = {
  "lastUpdate": 1697038901039,
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
      }
    ]
  }
}