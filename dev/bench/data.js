window.BENCHMARK_DATA = {
  "lastUpdate": 1699289102394,
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
          "id": "7f9612d29adc565945aec39cf43898d19b68b7e7",
          "message": "Add traces for /explain requests. (#100)\n\n### What\n\nWe were missing detailed trace information for requests to `/explain`.\nThis synchronizes it with requests to `/query`.\n\n### How\n\nI mostly copied the existing traces from the \"execute\" path. This means\nthere's nothing in particular keeping them in sync; we will need to do\nthis manually until we find a better way to do so.",
          "timestamp": "2023-10-23T15:47:37Z",
          "tree_id": "69c9b57097ab797c1b194865f6760ca09fbaf3c2",
          "url": "https://github.com/hasura/ndc-postgres/commit/7f9612d29adc565945aec39cf43898d19b68b7e7"
        },
        "date": 1698078139758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 133.440845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 279.008235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 76.20764917589142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 56.6916220975682,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9235380173056691,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 230.450909,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 661.910254,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 138.01938694196292,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 84.11466277069684,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9670777445235533,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 180.714902,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 269.10521120000004,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 134.20028436908214,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.801818118067985,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.199723838453797,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 166.2280665,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 245.79855400000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 111.8160725344237,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 32.614563114284934,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8877278506022255,
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
          "id": "7be1ec67972edba075e9e1c51712e7d8ccbc769f",
          "message": "chore(deps): Bump uuid from 1.4.1 to 1.5.0 (#103)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.4.1 to 1.5.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.5.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add impl From<!-- raw HTML omitted --> for String under the std\nfeature flag by <a\nhref=\"https://github.com/brahms116\"><code>@​brahms116</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/700\">uuid-rs/uuid#700</a></li>\n<li>Remove dead link to templates by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/704\">uuid-rs/uuid#704</a></li>\n<li>make ClockSequence wrap correctly by <a\nhref=\"https://github.com/fef1312\"><code>@​fef1312</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/705\">uuid-rs/uuid#705</a></li>\n<li>Track MSRV in Cargo.toml by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/706\">uuid-rs/uuid#706</a></li>\n<li>Support converting between Uuid and vec by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/703\">uuid-rs/uuid#703</a></li>\n<li>Replace MIPS with Miri and add clippy to CI by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/712\">uuid-rs/uuid#712</a></li>\n<li>Added <code>bytemuck</code> support by <a\nhref=\"https://github.com/John-Toohey\"><code>@​John-Toohey</code></a> in\n<a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/711\">uuid-rs/uuid#711</a></li>\n<li>Prepare for 1.5.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/713\">uuid-rs/uuid#713</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/brahms116\"><code>@​brahms116</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/700\">uuid-rs/uuid#700</a></li>\n<li><a href=\"https://github.com/fef1312\"><code>@​fef1312</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/705\">uuid-rs/uuid#705</a></li>\n<li><a\nhref=\"https://github.com/John-Toohey\"><code>@​John-Toohey</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/711\">uuid-rs/uuid#711</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.4.1...1.5.0\">https://github.com/uuid-rs/uuid/compare/1.4.1...1.5.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e68b0108fa295ce0b742a4990d08421857286ebc\"><code>e68b010</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/713\">#713</a> from\nuuid-rs/cargo/1.5.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/b1cc27a118e97c27bdb950fa753ecc5943c5df5c\"><code>b1cc27a</code></a>\nprepare for 1.5.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/b8ebdee9b0e8a31fa2e0fcfd2bdd848418fc189f\"><code>b8ebdee</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/711\">#711</a> from\nJohn-Toohey/bytemuck</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/2dad70d3c7dd21d8bda1fc1cf5e04e7cc3dffb85\"><code>2dad70d</code></a>\nAdded the <code>bytemuck</code> optional dependency to\n<code>lib.rs</code> documentation</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/bcf2b58997a0a87bc11eb276d7f1f6e93979c108\"><code>bcf2b58</code></a>\nAdded Bytemuck to .github/workflows/ci.yml::env::DEP_FEATURES</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/a8d2e1d4bf0a0867701a2369308eb7a7b845ff94\"><code>a8d2e1d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/712\">#712</a> from\nuuid-rs/ci/miri-clippy</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/0c5b2dfebdbfc950ddd5d69900d814dabce5f754\"><code>0c5b2df</code></a>\nfix up a clippy warning</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/1d4bd6e5b26fa63e6f674f1e13b02f086f500f63\"><code>1d4bd6e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/703\">#703</a> from\nuuid-rs/feat/convert-to-vec</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/52b3fbc04ab867778931f2a6e5061b8e1b15b681\"><code>52b3fbc</code></a>\nreplace MIPS with Miri and add clippy to CI</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/3833d095c15c8b524649cc417a38db14ef677815\"><code>3833d09</code></a>\nMake the bytemuck dependency look more like the other dependencies</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.4.1...1.5.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.4.1&new-version=1.5.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-23T18:38:35Z",
          "tree_id": "61b5cd451aba09b8092610c914991910aa5f9e1c",
          "url": "https://github.com/hasura/ndc-postgres/commit/7be1ec67972edba075e9e1c51712e7d8ccbc769f"
        },
        "date": 1698088465691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 92.874172,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 195.30313274999966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 47.83006294927854,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 45.10852763804628,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6503940316880047,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 173.016456,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 464.4066415,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 101.3497170778076,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.958008236706476,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7419302656538288,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 142.425914,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 205.37912384999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 107.25010498040122,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.811745921603617,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8238746359962342,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 131.642655,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 186.14244739999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 92.65330364941828,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 17.1259632490074,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8796580298421588,
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
          "id": "79d5b88331912f6402ed885c3f22cd31c990cfe8",
          "message": "Add `mold` to the Nix flake, and document how to use it. (#106)\n\n### What\n\n[`mold`](https://github.com/rui314/mold) is a drop-in replacement for\nthe GNU and LLVN linkers which is generally a lot faster. I have tried\nit and seen a slight speed boost in recompilation.\n\nThis adds it to the Nix flake, and documents how to use it (opt-in).\n\n### How\n\nI added `mold-wrapped` to the Nix flake, which is `mold`, wrapped to\nknow about all the other Nix stuff. I had to update nixpkgs as this is\npretty recent. People who don't use Nix will need to install it using\ntheir system package manager.\n\nOnce you have `mold` installed, you can configure `rustc` to use it. The\nleast invasive way to do this is to configure it using the `RUSTFLAGS`\nenvironment variable, which should stay local to your machine.\n\nI've added instructions on how to do this in a new _.envrc.example_\nfile. I kept this file separate from _.envrc_ because I don't want new\nexamples to trigger direnv to complain about the file changing, and also\nso I can make a clear distinction between a code snippet and commentary\nwithout actually running code.",
          "timestamp": "2023-10-25T07:23:53Z",
          "tree_id": "6b7c6e26050eb4a44e952229cb5b4d57a81b9b35",
          "url": "https://github.com/hasura/ndc-postgres/commit/79d5b88331912f6402ed885c3f22cd31c990cfe8"
        },
        "date": 1698220646513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 86.747412,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 183.39118050000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 52.19714733647583,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 36.53240635442783,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6330807693309247,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 156.241365,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 459.3339785999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 93.59086474205806,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.38391978257481,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6958841917447213,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.4855345,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 178.37074374999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 93.31695250834223,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.638075307335242,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7558894511382892,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 112.940486,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 160.363262,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 81.03914249120508,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 14.55243932723387,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7108484684221815,
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
          "id": "5bb88ef3a0ea4717a7200e33074bbfc6926b7004",
          "message": "remove ndc-citus (#105)\n\n### What\n\nSince ndc-citus is essentially exactly like ndc-postgres, and we don't\nsee that changing in the near future, we'd like to remove the ndc-citus\nbinary but keep testing against citus.\n\n### How\n\n- Copy yugabyte setup in `other-db-tests` for citus \n- import the other tests from `ndc-citus`\n- get rid of ndc-citus\n- fix references",
          "timestamp": "2023-10-25T07:36:17Z",
          "tree_id": "99616aac7106dfbc709f225700ac6b5f3b1affab",
          "url": "https://github.com/hasura/ndc-postgres/commit/5bb88ef3a0ea4717a7200e33074bbfc6926b7004"
        },
        "date": 1698240809603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 83.15510499999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 173.30263559999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 47.909693202107725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 36.3782079431687,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5943349964243263,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 154.164936,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 434.0124333999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 87.32858889793258,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.27304475675177,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6956961842054945,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.218945,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 181.133607,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 93.02716815259393,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.340599750567151,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7489859958653101,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 114.48506,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 159.01400779999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 80.99173471505023,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 15.799344566448823,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7079274985131232,
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
          "id": "89051f3e40c96fddd8d892b646e48896bcb91361",
          "message": "remove ndc-cockroach (#107)\n\n### What\n\nSince ndc-cockroach is essentially exactly like ndc-postgres, and we\ndon't see that changing in the near future, we'd like to remove the\nndc-cockroach binary but keep testing against cockroach.\n\n### How\n\n- Copy citus setup in `other-db-tests` for cockroach \n- get rid of ndc-cockroach\n- fix references",
          "timestamp": "2023-10-25T13:00:46Z",
          "tree_id": "a3ff1fbf1c8bae0bf72a356fe602ca4ca36937d3",
          "url": "https://github.com/hasura/ndc-postgres/commit/89051f3e40c96fddd8d892b646e48896bcb91361"
        },
        "date": 1698241873405,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 126.5925145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 261.34506144999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 74.76582545361983,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 51.235528119343655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8755949413180982,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 232.030371,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 638.1136445,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 133.85134096415507,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 88.13319509213244,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9751445387854271,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 173.130177,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 253.2142739999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 131.96093255006429,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 13.435373008451222,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1953217045747933,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 161.021212,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 236.96638345000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 111.43252496291863,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 25.552682632383224,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8601143850675235,
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
          "id": "038a2aead9558205091a52f49c8c4fb3685a20e6",
          "message": "Delete the config server Dockerfile. (#109)\n\n### What\n\nIt's not used any more. We now use the normal Docker image.\n\n### How\n\n\n![Del](https://upload.wikimedia.org/wikipedia/commons/2/2c/Key_delete.jpg)",
          "timestamp": "2023-10-25T13:54:51Z",
          "tree_id": "f1a9417039c064caa7c7de1505810c0f8a0186ec",
          "url": "https://github.com/hasura/ndc-postgres/commit/038a2aead9558205091a52f49c8c4fb3685a20e6"
        },
        "date": 1698243915783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 89.400944,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 184.49403129999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 52.790444388944294,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.78571348924271,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6326897704185109,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 167.41338,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 454.899476,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 97.12194066585211,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 64.83022508572598,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7522818411731542,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 137.766551,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 190.301721,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 100.83219092201446,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.203981134963783,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7993750919418935,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 118.247588,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 168.337829,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 87.34571895959584,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 12.786405682378913,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8372492553933284,
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
          "id": "24033b10007339aa9487a4d0f78313d601c42a05",
          "message": "move postgres tests to other-db-tests (#108)\n\n### What\n\nWe'd like to have all of the tests in the same place. This also helps\nwith compilation time.\n\n### How\n\n- Copy citus\n- Fill in missing tests and make sure all snapshots are renames\n- Remove ndc-postgres/tests\n- Fix references",
          "timestamp": "2023-10-26T07:34:48Z",
          "tree_id": "f8980de4147f92b6f064fbcd456dfbdc2af36020",
          "url": "https://github.com/hasura/ndc-postgres/commit/24033b10007339aa9487a4d0f78313d601c42a05"
        },
        "date": 1698307528747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 102.0478075,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 215.13095800000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 56.20185975634859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 45.59617774948507,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7501120380921128,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 192.210566,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 530.92125525,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 114.97690568854763,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 65.70983350488784,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8313959248136034,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 155.788791,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 221.519671,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 118.0736359808224,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.187860578102104,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9230016816919849,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 134.298256,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 192.01988,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 96.59058016493366,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 18.946090126620234,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9172115974933399,
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
          "id": "07b41496777151d23a60eb8b8e5959514207ba70",
          "message": "Update ndc-spec to get the build working. (#111)\n\n### What\n\nndc-spec v0.1.0-rc.8 uses workspace inheritance to set the version and\nedition, which unfortunately does not work with Crane for Nix (when\nusing Git targets).\n\nI have inlined the version and edition to solve this, but we also need\nto release a new version of ndc-spec and update ndc-sdk.\n\nUntil that happens, let's just override it (transitively) using `patch`\nin _Cargo.toml_.\n\n### How\n\n[`[patch.\"...\"]`, in\n_Cargo.toml_](https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section),\nallows us to hijack a dependency and point it somewhere else. Unlike\njust setting the version, this works transitively, so it will also\nupdate ndc-sdk. This is important because it's the dependency build step\nwhich fails in Crane, so we need to ensure we have no reference to the\nprevious version.\n\nUnfortunately, there's an open bug in Cargo which means that [patch\noverrides can't use the same Git\nrepository](https://github.com/rust-lang/cargo/issues/10756), even if\nthe commit reference is different. We work around this by adding an\nextra \"/\" to trick Cargo into thinking it's a different repository.",
          "timestamp": "2023-10-26T08:56:09Z",
          "tree_id": "47ae2b8cb44973fdf35be1e7d1a7ba8971e03ba4",
          "url": "https://github.com/hasura/ndc-postgres/commit/07b41496777151d23a60eb8b8e5959514207ba70"
        },
        "date": 1698312419945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 82.79479649999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 172.77991265,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 48.67320434861548,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 34.25184921089059,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5851597863021613,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 172.78665999999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 470.51696404999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 100.86706745381775,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 63.81264758641163,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7350180082104721,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 132.684368,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 186.7370905,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 97.01078070932813,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 9.622527665741629,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8415722734593976,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 118.372976,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 179.16951179999992,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 78.87684255816508,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 23.64060759694179,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6351198689909333,
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
          "id": "1ecd84079df30642e1a635e7040a0a927d0059f0",
          "message": "rename other-db-tests to databases-tests (#110)\n\n### What\n\nWe now test postgres as part of the \"other-db-tests\", so we rename the\ntests to \"databases-tests\".\n\n### How\n\n`rename` and `sed`.",
          "timestamp": "2023-10-26T14:23:37Z",
          "tree_id": "e7422152679fcb4a7751a8a3b2b8a0f9a24528d4",
          "url": "https://github.com/hasura/ndc-postgres/commit/1ecd84079df30642e1a635e7040a0a927d0059f0"
        },
        "date": 1698332088812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 136.98409900000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 284.38433599999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 77.7319905040946,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 56.298809611768235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.9354530177439794,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 257.098026,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 655.6058102999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 148.79868450301365,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 91.27014336407461,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0635772817968956,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 178.818193,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 246.90460634999974,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 134.92669799565573,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 16.130526999810655,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.2429979512657217,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 175.009014,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 283.83869884999984,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 116.14582942924898,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 38.68120632859211,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.923488989605826,
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
          "id": "0de2232491cababe2fbbdb3f890d7a594cf25197",
          "message": "Upgrade all dependencies. (#112)\n\n### What\n\nThis was supposed to just upgrade ndc-spec but that has some upgrades of\nits own dependencies, so I thought I'd just upgrade them all.\n\n### How\n\n```\n$ cargo update\n$ cargo upgrade --incompatible --verbose\n```",
          "timestamp": "2023-10-27T11:19:51Z",
          "tree_id": "7782648e62852410d2d858320717731fac78c34e",
          "url": "https://github.com/hasura/ndc-postgres/commit/0de2232491cababe2fbbdb3f890d7a594cf25197"
        },
        "date": 1698407195200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 91.99442,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 190.8469015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 52.81020274808979,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 38.93246983997523,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.639432753562165,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 181.39135950000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 469.48998874999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 98.73462587155566,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 70.47823294234843,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7439113304370538,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 123.749207,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 179.98105799999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 90.20508616868095,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.733008042105297,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7917272474332593,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 118.961462,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 211.88773019999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.74969915170034,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 31.234866111969012,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6219439721010213,
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
          "id": "ee5c36cfd8bfc570e1a27631eb8fadd717338de7",
          "message": "update ndc-hub with status code metrics feature (#113)\n\n### What\n\nWe update ndc-hub to the latest commit so we can use the new status code\nmetrics feature.\n\n### How\n\nWe update the hash and implement the new trait method\n`connector_name()`.",
          "timestamp": "2023-10-30T12:05:36Z",
          "tree_id": "a59a20b52be3860903150ef06cae77d1bae0c7d9",
          "url": "https://github.com/hasura/ndc-postgres/commit/ee5c36cfd8bfc570e1a27631eb8fadd717338de7"
        },
        "date": 1698669559410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 128.12173,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 272.0826225999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 73.18733681961365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 54.26788177580492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8998521195416637,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 233.783343,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 676.7226847499996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 143.44193471171135,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 80.08802711176864,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9647115101357939,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 182.2381985,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 279.83184849999964,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 144.16027630090926,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 10.883905200474459,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.2249001534202135,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 164.8788325,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 247.11282925,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 115.71585792455772,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 25.5585360530701,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9264644271597,
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
          "id": "7255399d421e6ae23a608e09743effd2c0d5ecde",
          "message": "Fix Slack reporting so it always happens, but only for `main`. (#114)\n\n### What\n\nTurns out getting this right is more trouble than you would think.\n\nThis should fix the notifications so that they happen on a build failure\non `main`, but no other time.\n\n### How\n\nWe need to call `always()` to signify to GitHub Actions that we want to\nrun even on failure, but we also need to check the branch because\notherwise it'll run on all pushes for all branches.",
          "timestamp": "2023-10-30T12:37:16Z",
          "tree_id": "f5ccee2f8b76c551ce58f08475b21a6403c613e1",
          "url": "https://github.com/hasura/ndc-postgres/commit/7255399d421e6ae23a608e09743effd2c0d5ecde"
        },
        "date": 1698670498002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 83.586082,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 172.9743843999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.64563692583045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 35.59475232538835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.582923723934983,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 144.876393,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 439.7151066,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 83.48359780884758,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 58.907183351356,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6507610540689969,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 125.696659,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 182.1209645499999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 90.41128246105278,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.584667865263171,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7328022561837434,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 111.833671,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 155.52177439999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.5319487018706,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 14.243348227953902,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7198445839434786,
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
          "id": "a0c50c2851eb0418dead29068e2c46d9b0202894",
          "message": "Fix `OTLP_ENDPOINT` refs in justfile (#119)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n`OTLP_ENDPOINT` is the right env var to use here, otherwise we get\nhalf-working OpenTelemetry and lots of confusion.\n\n### How\n\nUpdate `justfile`.",
          "timestamp": "2023-10-31T12:32:39Z",
          "tree_id": "86a272e8067882167f9d32bdb7ff1e04026adeeb",
          "url": "https://github.com/hasura/ndc-postgres/commit/a0c50c2851eb0418dead29068e2c46d9b0202894"
        },
        "date": 1698756275933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 126.604196,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 263.20717454999993,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 73.7846821926448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 52.0090473595471,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8829694209335346,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 220.942274,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 630.0296408,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 132.53519666266286,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 76.50073351267721,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.9092154061919429,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 168.420087,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 267.2058482999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 128.87791774002557,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 11.075392950712967,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.9598174746344287,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 151.434211,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 222.684212,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 108.74027780384662,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 21.96748120144153,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9731550456727163,
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
          "id": "647095a3316b26cdc2772346a331ee808bd03700",
          "message": "chore: always build and push Docker image (#117)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe'd like to trigger the e2e tests after each commit. In order to do so,\nthere must already be a Docker image built for this commit.\n\n### How\n\nMake Docker build action run on all pushes.",
          "timestamp": "2023-10-31T13:55:51Z",
          "tree_id": "2ca0a5da550ac205df6913bc701585d540fc9c76",
          "url": "https://github.com/hasura/ndc-postgres/commit/647095a3316b26cdc2772346a331ee808bd03700"
        },
        "date": 1698761266998,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 75.102742,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 155.1187924,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 43.37322192059069,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 31.86328284236297,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.548890559577843,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 140.104494,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 401.9488044,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 79.83610046345582,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 52.79526070052616,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6577392713241428,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 119.823448,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 168.29366999999988,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 86.19701726773894,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.393798645467427,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6038922359400462,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 103.796668,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 150.72309999999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 76.69551259091888,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 10.297289811488056,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7527299668485776,
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
          "id": "eae6acb8fe6de517daed553b9c27cf8986d8e4ce",
          "message": "chore: auth hook for local dev setup (#121)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nAdds auth config and a dev auth webhook for local development.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2023-10-31T15:29:50Z",
          "tree_id": "240525b59b315c3e7a7352af7788c0e33e008b53",
          "url": "https://github.com/hasura/ndc-postgres/commit/eae6acb8fe6de517daed553b9c27cf8986d8e4ce"
        },
        "date": 1698768425646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 84.504674,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 180.794712,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.23117360157985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 39.79081051806181,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6105904282820769,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 152.853339,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 418.037728,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 84.30681671433769,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.629431749635785,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6369705312953439,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 129.515764,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 182.92368599999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 92.40487706328602,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 8.29918154856864,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.73272381763422,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 117.301132,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 166.9971769,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.64412637789096,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 20.783200891270454,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6640017424627244,
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
          "id": "f315646f80705d473eecf0f16f3ae24cceb55867",
          "message": "Use Rust 0.73.0 (#118)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nBump nix flake, bump Rust toolchain, fix suggestions.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2023-10-31T16:42:39Z",
          "tree_id": "5e57225f4caaf549f07308de9479a4a8a54f09f9",
          "url": "https://github.com/hasura/ndc-postgres/commit/f315646f80705d473eecf0f16f3ae24cceb55867"
        },
        "date": 1698772689226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 81.923642,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 170.78867655000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 48.687158366164766,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 32.61904568028258,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5677918524878686,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 154.728976,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 424.60598104999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 85.76716532633176,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 63.72730307951986,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6606767691298444,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 128.83075,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 188.4920112999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 97.63737168415274,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.361426917836511,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6856054183140551,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 116.172696,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 161.6104618,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 80.89620123364905,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 18.180994148806008,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.659808404296173,
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
          "id": "bbc12044e586d592a680cdd22cb9c4f36c45d056",
          "message": "chore: publish another docker tag (#122)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nPush an additional image which is tagged simply `<short-commit-hash>`\n\n### How\n\nBash.",
          "timestamp": "2023-10-31T17:55:18Z",
          "tree_id": "9035226c7e3ec7af3003cd5c9dde6c0b4d5c061f",
          "url": "https://github.com/hasura/ndc-postgres/commit/bbc12044e586d592a680cdd22cb9c4f36c45d056"
        },
        "date": 1698776069481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 88.362803,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 189.47274900000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 49.76835562126872,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 40.21076905433598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6507373346150086,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 171.082728,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 478.2451833999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 103.275536931842,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.96391886431107,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7664622151365251,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 139.99349899999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 204.62800525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 106.48305897024181,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.9761513476719585,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8509091987323483,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 123.40830700000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 184.35752949999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 90.77717423065862,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 14.57038855815452,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8301181719813054,
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
          "id": "b10deea93d54fa581805360833501549169a7317",
          "message": "Run E2E tests on every push/PR in this repo (#116)\n\nWe run the E2E suite using the PR's version of the connector, and make\nsure all the tests pass. If they do, this PR is compatible with current\nhead. How exciting!\n\n---------\n\nCo-authored-by: Tom Harding <tom.harding@hasura.io>",
          "timestamp": "2023-11-01T08:14:18Z",
          "tree_id": "293a9679e5861368383441ae8598d170241f45d7",
          "url": "https://github.com/hasura/ndc-postgres/commit/b10deea93d54fa581805360833501549169a7317"
        },
        "date": 1698827041236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 72.576791,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 155.37383000000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 39.94059394216456,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 32.14408195383077,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5435158603480007,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 137.406575,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 399.71304699999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 77.96843883759958,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 56.12560394592295,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6600814544842176,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 116.6150935,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 163.527761,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 88.51885017127,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6834519852037175,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5815212337854674,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 100.874386,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 145.9710924,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 74.17564192707292,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.549267102329253,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6476367516075687,
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
          "id": "ed677198fc714fe21b206d5221816012b2e718a5",
          "message": "add error metrics (#120)\n\n### What\n\nWe'd like to monitor the kinds of errors we run into to measure the\nconnector's health, so we add counters for errors according to a few\ncategorizations.\n\n### How\n\nWe add counters for the following metrics:\n\n```rs\n/// A collection of metrics indicating errors.\n#[derive(Debug, Clone)]\npub struct ErrorMetrics {\n    /// the connector received an invalid request.\n    invalid_request_total: IntCounter,\n    /// the connector received a request using capabilities it does not support.\n    unsupported_capability_total: IntCounter,\n    /// the connector could not fulfill a request because it does not support\n    /// certain features (which are not described as capabilities).\n    unsupported_feature_total: IntCounter,\n    /// the connector had an internal error.\n    connector_error_total: IntCounter,\n    /// the database emmited an error.\n    database_error_total: IntCounter,\n}\n```\n\nAnd use ndc-postgres errors to find and count said errors.",
          "timestamp": "2023-11-01T08:54:32Z",
          "tree_id": "6d999e3de623d602634fea2df55e33a7b2171cb2",
          "url": "https://github.com/hasura/ndc-postgres/commit/ed677198fc714fe21b206d5221816012b2e718a5"
        },
        "date": 1698831215974,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 96.7153465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 194.99148339999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 54.73902601627389,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 40.29059660931494,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6840007097430921,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 167.253611,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 492.17882199999985,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 100.83019820050299,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 63.986363291220954,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7833034014252043,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 146.710847,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 203.62373449999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 108.98649061393851,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.503780724438855,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7871987588261653,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 131.003217,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 183.1878644,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 93.03111529963248,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 16.466056159614183,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8192356683905797,
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
          "id": "a0a32489caa04ebae49f200862d1eddbea5eb96f",
          "message": "Generate short hash for e2e trigger directly with git (#123)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nThe generated hashes from `short-sha` did not always match the Docker\nimage. This is because Github Actions creates a new merge commit for\npull requests: https://github.com/orgs/community/discussions/26325\n\n### How\n\nFind the actual source commit and create a hash from that.",
          "timestamp": "2023-11-01T11:21:29Z",
          "tree_id": "c0c51ed389cec53ee9ac3b4421634fbe51e85ed4",
          "url": "https://github.com/hasura/ndc-postgres/commit/a0a32489caa04ebae49f200862d1eddbea5eb96f"
        },
        "date": 1698838371202,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 70.811579,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 139.19626599999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 41.32488108699391,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 28.18538098692362,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5211939703232323,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 134.460464,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 376.5817415999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 77.4252753478473,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 51.55174118349967,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6385342236046292,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 117.29268450000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 161.417969,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 84.46830647973802,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.29662671875748,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6230314002668649,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 99.249415,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 142.82560825000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 74.61180049539536,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.790179943490841,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6284881781085266,
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
          "id": "55ba5f97a7a9125c2a28847e2313dd8f386ab4d9",
          "message": "Change `postgres_ndc` to `ndc_postgres` in all metric names (#124)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nOur metrics had a mixture of names, this makes them consistent again.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2023-11-01T15:06:05Z",
          "tree_id": "a1db4efcbef8c697a811710e31f9e2943e7409d9",
          "url": "https://github.com/hasura/ndc-postgres/commit/55ba5f97a7a9125c2a28847e2313dd8f386ab4d9"
        },
        "date": 1698853552753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 120.030186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 270.10617364999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 67.12679985582254,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 55.13234287458614,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.8402688191226435,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 245.1944855,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 650.12812375,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 141.30720201440917,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 88.59025649106695,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0602511002886945,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 182.93842,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 275.96324739999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 139.10458110385278,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.377817925093467,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1821318560536436,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 163.159803,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 251.64109399999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 113.24644305832989,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 29.96682637290546,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9674731142665481,
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
          "id": "02257285e00f3286ca63f99b4872a415d9a51d86",
          "message": "Add metric to count connection acquisition failures (#125)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe'd like to know how often we fail to acquire a database connection.\nThis is useful for helping users tweak maximum pool sizes.\n\n### How\n\nAdd new counter, increment it when we fail to get a connection from the\npool.",
          "timestamp": "2023-11-01T15:37:16Z",
          "tree_id": "428229d6478b22a1806c4b4a94daf3d7507611ff",
          "url": "https://github.com/hasura/ndc-postgres/commit/02257285e00f3286ca63f99b4872a415d9a51d86"
        },
        "date": 1698854529747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 124.237379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 264.7485334,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 73.88748109856203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 49.57580350425809,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.864544620968872,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 240.621061,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 656.4434875,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 144.62140158872083,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 82.83301308202877,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 1.0431457564803475,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 171.895856,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 358.01052400000003,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 139.34577668238117,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 12.827493382832188,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 1.1141097876645099,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 160.36362,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 242.62282100000002,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 112.80905584759482,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 26.62380369130797,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.9765944659918414,
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
          "id": "b5cf0adf24ba8616190dafce4ae2417a36495026",
          "message": "Stop statically linking binaries when building with Nix. (#126)\n\n### What\n\nIt turns out that statically linking with musl increases our response\ntime under load from (in a very specific benchmark, on my computer)\n~10ms to ~30ms per response. Disabling static linking fixes this issue,\nbringing ndc-postgres in line with HGE v2.\n\nThis feels like a good enough reason not to statically link the code.\n\nWe ship the Docker image built with Nix, so this directly impacts\nproduction. It also simplifies development (in theory) because `nix\nbuild` and `cargo build` now have behavior that is more similar.\n\n### How\n\nI deleted the Nix code that turns on static linking.",
          "timestamp": "2023-11-01T19:10:21Z",
          "tree_id": "f4c5b9c90baecf1e7623d130c9ae3eafc9094e3f",
          "url": "https://github.com/hasura/ndc-postgres/commit/b5cf0adf24ba8616190dafce4ae2417a36495026"
        },
        "date": 1698868370228,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 107.075796,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 231.4284960999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 59.49499113991983,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 47.9425068078844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7098467115219771,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 201.653368,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 565.9977672499999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 117.71469188581318,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 74.28990424814589,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8203631529904523,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 155.116682,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 238.62010560000007,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 120.23915056708456,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.81459843141144,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8243226237258446,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 138.5072715,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 227.93725709999958,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 103.76038951197562,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 12.377685543113614,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8324939131740958,
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
          "id": "7941878f84651aca920f0d650be9fc10cd1334cf",
          "message": "chore: keep snapshots of old configuration versions (#127)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nAs we change our deployment configuration types, we want to ensure we\ncan still parse old ones. This adds tests to ensure that.\n\n### How\n\nWhen we run `just generate-chinook-configuration`, we copy the current\ndeployment into `static/deployment-snapshots`, named by a hash of its\ncontents.\n\nWe add a new test that goes through all files in this folder and tries\nto parse them into our `RawConfiguration` type.",
          "timestamp": "2023-11-02T09:05:50Z",
          "tree_id": "bdc3482b7c6c724702a93529fd396ceca0bc1a78",
          "url": "https://github.com/hasura/ndc-postgres/commit/7941878f84651aca920f0d650be9fc10cd1334cf"
        },
        "date": 1698918541493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 114.9337455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 238.942165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 66.38257133134854,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 48.26549882888904,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7816104330835362,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 220.50417,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 619.7914582,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 124.19020551970641,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 89.50853449850496,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8657628401740962,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 160.96390150000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 229.1059908,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 116.12127780613946,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.71773474240868,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7111684030696296,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 142.498307,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 212.46190659999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 105.50072036935443,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.907868337903935,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8272584632581637,
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
          "id": "d157ab05a53da9baf818703004b2606864479d83",
          "message": "Avoid converting paths to strings and back. (#129)\n\n### What\n\nPaths are not strings. They can often be `OsString` values, which is not\nthe same thing; specifically, they don't have to be UTF-8.\n\n[ndc-sdk now accepts anything that converts to a\n`Path`](https://github.com/hasura/ndc-hub/pull/71), not just `String`,\nso we can avoid converting them here.\n\n### How\n\nMostly changing `&str` to `impl AsRef<Path>`.",
          "timestamp": "2023-11-02T12:08:13Z",
          "tree_id": "983fdab542ce748cb97dbeba7f7581085831a469",
          "url": "https://github.com/hasura/ndc-postgres/commit/d157ab05a53da9baf818703004b2606864479d83"
        },
        "date": 1698929199053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 74.514247,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 153.78160320000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 43.31288538408507,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.529860364980216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.49585042727798656,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 144.105133,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 406.4763117,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 85.92305018363413,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 52.78903040388957,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5920496914318031,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 117.855674,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 170.7234566,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 84.88757620872458,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.247967858254668,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4678003853192536,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 98.61904200000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 145.42165994999985,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 71.09795108657983,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.3333850708102375,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4399487896308019,
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
          "id": "290346c3f2f1c340d62b1f8e59420c82aa1d3afd",
          "message": "Fix the mutation tests by setting the connection URI correctly. (#130)\n\n### What\n\nWe were setting a JSON property that is not read. We can avoid this kind\nof mistake by using the types.\n\n### How\n\nDeserialize to `RawConfiguration`, set the value, and then serialize.",
          "timestamp": "2023-11-02T13:14:00Z",
          "tree_id": "ad012c2c8e7db66e0c1dcaac6f7a5e204be3109c",
          "url": "https://github.com/hasura/ndc-postgres/commit/290346c3f2f1c340d62b1f8e59420c82aa1d3afd"
        },
        "date": 1698933606812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 106.399164,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 233.39224429999993,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 58.2105193592677,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 48.48680015114983,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7328048368058292,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 202.0890655,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 589.8783979,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 118.77021882705455,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 72.03886896257407,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7797044498534197,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 142.841249,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 213.40871519999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 111.37932048477485,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.4327564526494285,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7234098912906014,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 126.216436,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 189.78510059999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 92.0963867544956,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.63998095444245,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7141708324234048,
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
          "id": "f9581ba55f10c84528604c8f675ea345a4bc9a0d",
          "message": "update ndc-hub to get json-formatted extract errors (#132)\n\n### What\n\nThis PR updates to the latest ndc-hub that contains a fix for returning\njson-formatted extract errors.\n\n### How\n\nsed",
          "timestamp": "2023-11-02T14:13:04Z",
          "tree_id": "16f3fd3a701a33e74e1252bec8f2ec9c4ab3e5ed",
          "url": "https://github.com/hasura/ndc-postgres/commit/f9581ba55f10c84528604c8f675ea345a4bc9a0d"
        },
        "date": 1698938681292,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 108.739012,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 233.1381334,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 61.709719765878745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 47.67535759960349,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.740751504890099,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 199.0912935,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 520.3967956500001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 116.37531335443886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 61.773777159580376,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8091911995337057,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 155.614304,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 223.82389599999988,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 115.87270321753314,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.811890096463884,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.8064927140292569,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 134.282231,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 190.536184,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 98.94537785999717,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.331599608133203,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8006175847755452,
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
          "id": "17c68fd7f74e572037c2ee2d5f9ef7510ca27a57",
          "message": "Demote E2E failures to Slack messages (#131)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWe want to get the end-to-end tests up and running to ensure consistency\nacross the repositories, and we want to do it in a minimally intrusive\nway (at least for now). Having spoken to @danieljharvey, we decided the\nminimally intrusive option was probably just to keep piping build\nfailures to Slack after the fact, rather than slowing the merge process.\n\nThis also removes the as-of-yet-unsolved problem of how you actually\nmake a breaking change. If E2E failures block commits, how do you\nactually change a request/response pair? You can't update the E2E tests\nbecause you haven't made the change yet, and you can't make the change\nbecause the E2E tests fail. Now, you can happily break `main` in one and\nthen fix the other.\n\n---------\n\nCo-authored-by: Tom Harding <tom.harding@hasura.io>",
          "timestamp": "2023-11-02T15:25:28Z",
          "tree_id": "d0ede974d32b3ef11dc895e7f093fe8082f4093f",
          "url": "https://github.com/hasura/ndc-postgres/commit/17c68fd7f74e572037c2ee2d5f9ef7510ca27a57"
        },
        "date": 1698939893552,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 79.5629745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 168.63771814999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 41.69122372528749,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 36.229424822457965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5246473108753608,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 153.864349,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 434.5647183999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 93.29460044210337,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 51.86720716073104,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6569711840387955,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 129.44898,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 185.1635005,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 98.02540613400066,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.07892072788394,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5565342957070498,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 109.862628,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 155.1833419,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.25351403771599,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.755567503840666,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5033647304827124,
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
          "id": "f470da01db7c35c84a90b410fcc10a4b7de82239",
          "message": "Automatically open `ndc-multitenant` PR on merge (#128)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nWhen we merge to `main`, automatically open a new PR on\n`ndc-multitenant`\n\n### How\n\nGithub Actions, copied from\nhttps://github.com/hasura/v3-engine/blob/main/.github/workflows/update_multitenant_dep.yml\n\nLook! https://github.com/hasura/ndc-multitenant/pull/67",
          "timestamp": "2023-11-02T15:27:28Z",
          "tree_id": "f7e1694e8456641179baf2a208d33dc44905c87e",
          "url": "https://github.com/hasura/ndc-postgres/commit/f470da01db7c35c84a90b410fcc10a4b7de82239"
        },
        "date": 1698940683634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 76.177867,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 154.37765529999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 44.13306638604443,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.393811338713732,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.49440055006313155,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 149.24781,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 419.677454,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 87.5913338411099,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 53.91165132498617,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5971861297062223,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 121.499177,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 169.889125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 87.85575660270136,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.3917637028151404,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.46069348049548037,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 100.223547,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 147.99002179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 77.23914687615438,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.155195453570542,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5524353380025426,
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
          "id": "a11c72d1d338c4f45eec1045390ea9c8e6491cb9",
          "message": "CI: Switch to Cachix for Nix caching. (#133)\n\n### What\n\nWe are mostly not using our cache, because GitHub's own cache\nrate-limits us to the point where it's unusable.\n\nCachix should do better.\n\n### How\n\nReplace the Magic Nix Cache action with the Cachix action, using our\nnewly-minted auth token.",
          "timestamp": "2023-11-02T16:43:57Z",
          "tree_id": "ea0bcabb54247837e8cf72f1b1982df7b899b516",
          "url": "https://github.com/hasura/ndc-postgres/commit/a11c72d1d338c4f45eec1045390ea9c8e6491cb9"
        },
        "date": 1698944037565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 72.14159649999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 151.741469,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 39.443484986279245,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 31.932434810088893,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.47722490726359323,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 137.136672,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 389.974464,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 83.18405282922325,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 48.77622144623376,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5535348956550931,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 117.100145,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 163.45237844999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 84.79805674975626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6962153381643787,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.49901570737981,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 97.65695500000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 142.69051625,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 74.68619668290934,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.0327538195733155,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4764589673082619,
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
          "id": "32ac9f8ea040d449863494dcd4039f453479d699",
          "message": "Log errors that occur during `/explain` (#134)\n\n### What\n\nMake an OpenTelemetry log event when the queries to `/explain` encounter\nan error.\n\n### How\n\nOpenTelemetry log events are simply events with the field\n`meta.signal_type = \"log\"`, and otherwise adhering to the semantic\nconventions of logs, see\nhttps://opentelemetry.io/docs/specs/otel/logs/data-model/.\n\nSimilarly, we set `error = true`, which both Honeycomb and Jaeger\nrecognizes in the UI.\n\nThe `tracing::event!(..)` macro captures the place in the code where it\nwas called. Therefore I have opted to not try and abstract over making\nerror-log events, as that information becomes just noise otherwise.\n\nThe `body` attribute of the event/log is just the Display'd Error\nmessage. Depending on the future uses we want for these log messages we\nwill probably amend them with more attributes/ more information.\n\nIn Jaeger:\n\n![image](https://github.com/hasura/ndc-postgres/assets/358550/648c9e8a-89bb-4fd1-9bd2-300d7ab095ef)\n\nIn Honeycomb:\n\n![image](https://github.com/hasura/ndc-postgres/assets/358550/f3a8b2a3-89d1-497e-b4bb-2a21aa2fc0a3)",
          "timestamp": "2023-11-03T10:28:52Z",
          "tree_id": "e7cbce05d609f789cfede74144af3ec87f4e0ee3",
          "url": "https://github.com/hasura/ndc-postgres/commit/32ac9f8ea040d449863494dcd4039f453479d699"
        },
        "date": 1699008270790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 102.723069,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 219.52969599999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 60.84166335267157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.35335740164411,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6990169546685109,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 204.126945,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 535.2374026,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 112.97385637643966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 72.7385854762477,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7576535690974928,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 152.916106,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 218.16469320000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 116.48867136598076,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.293454891518621,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6834102218251727,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 135.802084,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 201.19609979999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 98.73993164486218,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.024675227020296,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.8207650999007737,
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
          "id": "ccd4446917a67fbbe19578dacd3260a549a83573",
          "message": "qualify table names in configuration query (#136)\n\n### What\n\nWe want to emit table and views collection names as qualified (with the\nschema name) in the configuration generation, so that when there the are\nmultiple tables with the same name but different schemas, the collection\nnames won't clash.\n\n### How\n\nIn `configuration_query.sql`:\n\n```patch\n- rel.relation_name,\n+ s.schema_name || '_' || rel.relation_name,\n```\n\nThe rest of the changes are regenerating the configuration and updating\nthe tests to use the qualified names.",
          "timestamp": "2023-11-03T11:04:49Z",
          "tree_id": "35157302ee5bf983c8599782236f80235b8bd0b0",
          "url": "https://github.com/hasura/ndc-postgres/commit/ccd4446917a67fbbe19578dacd3260a549a83573"
        },
        "date": 1699010389938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 85.156019,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 189.55443605,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 42.795627645077204,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.68361241853293,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5880638512547934,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 151.311234,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 448.3529254999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 89.85182120659293,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 55.969786454392235,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6049800616222195,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 130.335704,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 180.5084992,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 92.18012851629037,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.8069056020009526,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4699608508859673,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 105.483748,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 159.52124219999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 79.44369105900873,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.1604177226031425,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6109707415982579,
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
          "id": "c05e23039af3a6fbbbe009f3401b89946e4344b2",
          "message": "Remove abstractions over binaries in the build processes. (#135)\n\n### What\n\nBoth CI and the Nix flake abstracted over binaries so we could build\nmore than one of them.\n\nThis is now pointless as we only have one. I have removed the\nabstractions to make working in these areas easier.\n\n### How\n\nI inlined references to \"ndc-postgres\" in both the Nix flake and the\nGitHub Actions workflows.",
          "timestamp": "2023-11-03T11:51:54Z",
          "tree_id": "a99730f27692a85e34218ace0bf172ca5b8b9079",
          "url": "https://github.com/hasura/ndc-postgres/commit/c05e23039af3a6fbbbe009f3401b89946e4344b2"
        },
        "date": 1699012909914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 77.065233,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 161.48837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 42.308682078734954,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.820159117070595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5159423032487029,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 140.14761,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 386.88995865,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 84.99553671940359,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 49.478715781453445,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.575904944462878,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 122.737674,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 172.363498,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 87.55589623144118,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9968794037249467,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.47935907157379526,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 104.315567,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 149.13437169999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 75.68454127053573,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.4197505554702445,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.46728880255227234,
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
          "id": "b010a8ce50cd337204809189248467dcd817a814",
          "message": "Fix main. (#138)\n\nI missed a couple of things. This is bad. I am fixing them now.",
          "timestamp": "2023-11-03T12:26:33Z",
          "tree_id": "e9324b368b8a3ba0d520fce717b9981cc3df9b76",
          "url": "https://github.com/hasura/ndc-postgres/commit/b010a8ce50cd337204809189248467dcd817a814"
        },
        "date": 1699014998845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 88.50645,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 188.5086304,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 48.70062829254938,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 39.4461584414605,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6097173406940823,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 174.16112900000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 490.64237475000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 101.93554449851676,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 66.76617284194954,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7088055663139343,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 143.84129,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 215.05298559999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 104.89487351094334,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.910810615546694,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5738406560003019,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 126.627871,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 197.9818517,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 91.40927278241531,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.155741280059829,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6177486099370135,
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
          "id": "595a990e1963fc41542a09127f74babbf99b10e8",
          "message": "CI: Build with Nix. (#137)\n\n### What\n\nNow that our Nix build is generally quite fast, thanks to proper\ncaching, we can run it on every pull request.\n\nOnce this is merged, we can use [GitHub Actions' `workflow_run`\nevent](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run)\nto trigger other builds, which means we will not have to spin-wait to\nrun other jobs (such as the benchmarks or end-to-end tests).\n\n### How\n\nIt's a new CI workflow. Mostly I copied and pasted stuff.",
          "timestamp": "2023-11-03T12:26:41Z",
          "tree_id": "10d37d5c8c8c67357df67e7a76ee68fada16c027",
          "url": "https://github.com/hasura/ndc-postgres/commit/595a990e1963fc41542a09127f74babbf99b10e8"
        },
        "date": 1699015120022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 71.336146,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 149.57943774999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 40.8509593777973,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 29.69199344892889,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.46099722242661445,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 131.3683915,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 387.44755384999974,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 79.82334966957521,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 47.98369805861029,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5523848134673971,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 114.471469,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 230.7425065999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 95.73962517245003,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.8411232783624882,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5027835480176348,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 100.8243965,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 149.32712175,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 71.2186239386632,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.454337094331933,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.518263981704981,
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
          "id": "9239dcbeb1a137381b42250e499301bc4d92a196",
          "message": "s/Horse/Beef (#140)\n\nWe can't use Broken Build Horse for E2E because all the failures get\npiped into #team-ndc-eu-updates rather than #v3-integration-notify, so\nI've immortalised my cat in the build process.\n\n---------\n\nCo-authored-by: Tom Harding <tom.harding@hasura.io>",
          "timestamp": "2023-11-03T13:04:34Z",
          "tree_id": "2c86e68995e25fa961773d9dc652fc7d3ae3bbc9",
          "url": "https://github.com/hasura/ndc-postgres/commit/9239dcbeb1a137381b42250e499301bc4d92a196"
        },
        "date": 1699017333659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 68.935633,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 140.90277899999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 37.824982182013784,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.50104291829355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.4585135810145734,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 137.443966,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 366.763403,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 79.81027360217709,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 49.98029312106195,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5629434530760004,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 110.306626,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 153.222198,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 80.5988534758115,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 2.893568714697423,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.44838220782783395,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 93.58893599999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 134.93897934999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 67.44167073173338,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.597871472575889,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3931104316358766,
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
          "id": "287dd6ea95e609ee17e8967754cd43646a1d975b",
          "message": "Omit the public schema in configuration generation response (#142)\n\n### What\n\nWe were asked to omit the schema in the configuration generation\nresponse if that schema is `public`.\n\n### How\n\n```patch\n-        s.schema_name || '_' || rel.relation_name,\n+        CASE\n+          WHEN s.schema_name = 'public'\n+          THEN rel.relation_name\n+          ELSE s.schema_name || '_' || rel.relation_name\n+        END,\n```\n\nAnd then regenerate the deployment file and re-run the tests.",
          "timestamp": "2023-11-03T13:47:58Z",
          "tree_id": "48252cc52f7d6c1204123d7daeb8b115507c524b",
          "url": "https://github.com/hasura/ndc-postgres/commit/287dd6ea95e609ee17e8967754cd43646a1d975b"
        },
        "date": 1699020130660,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 80.03067,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 159.799435,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.35626749300052,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 30.724807646987095,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5090635409095974,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 141.05706600000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 400.51868805000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 82.70166816308469,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 49.604330341074785,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.593124714211851,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 122.358832,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 167.99694289999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 87.38600770310359,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.266901911294312,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.44940921057899863,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 101.147664,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 154.9027141,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 77.07070349553098,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.027765600194968,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5156713874238666,
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
          "id": "4be0b1dbc6bce66c484eb4283308467aa1d3ffe6",
          "message": "add utility commands for metrics in justfile (#143)\n\n### What\n\nI want to open our various dashboards in the browser, but I don't want\nto remember ports and open up my browser and type addresses. this makes\nit a bit easier.\n\n### How\n\nAdding new justfile commands: `open-jaeger`, `open-prometheus`,\n`open-grafana`.",
          "timestamp": "2023-11-03T14:12:47Z",
          "tree_id": "d9b6c503041f0a64da4edd1db834de095a10e0ae",
          "url": "https://github.com/hasura/ndc-postgres/commit/4be0b1dbc6bce66c484eb4283308467aa1d3ffe6"
        },
        "date": 1699021435407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 69.3138355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 143.34247059999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 38.644730565377465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 29.10155533647947,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.4611114158994867,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 132.7848415,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 368.11771979999986,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 77.8617080083873,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 47.68738683032261,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5439651977416452,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 114.387258,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 159.87531459999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 82.75772458187201,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.552912198807647,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.47939348181283964,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 95.1694495,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 138.860027,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 71.48686376510526,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.209556851277668,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4850432171536314,
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
          "id": "93904e03b86743ee00fb1b6507b73f79c217cd06",
          "message": "Share the Rust cache across jobs. (#145)\n\n### What\n\nApparently we are generating a new Rust cache per job. This grows really\nfast.\n\nLet's not do this.\n\n### How\n\nBy setting a \"shared key\", we can ensure that all jobs share the same\ncache.\n\nI have chosen the name arbitrarily.",
          "timestamp": "2023-11-03T14:42:54Z",
          "tree_id": "e15a5a44556dda8096de3021f9b26d5f8c695a96",
          "url": "https://github.com/hasura/ndc-postgres/commit/93904e03b86743ee00fb1b6507b73f79c217cd06"
        },
        "date": 1699023058238,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 97.7762995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 208.25784770000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 54.0311608585848,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 42.64942631169998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6525159845888279,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 185.669853,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 484.7702023499998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 108.19132839532861,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.02887461414653,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7422173479501256,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 155.249299,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 232.130516,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 112.45550657182515,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.532624592417406,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7062427176013728,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 130.44047849999998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 189.122222,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 94.12050032997547,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.5069827681737,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.7040930902532399,
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
          "id": "86025788f3356eac112c31511ea73cdeca8fb58d",
          "message": "More logs (#141)\n\n### What\n\nMore logs of errors at connector endpoints.",
          "timestamp": "2023-11-03T15:34:10Z",
          "tree_id": "ee01a79cd5cba872ae109f2055e86f5508da1449",
          "url": "https://github.com/hasura/ndc-postgres/commit/86025788f3356eac112c31511ea73cdeca8fb58d"
        },
        "date": 1699026261297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 95.6330515,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 209.8331543,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 52.436703876043715,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 43.075648019267824,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.6447496663454582,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 166.6151335,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 491.69543775,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 101.06102902818637,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 59.70271819607842,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.7283111268381577,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 137.74287650000002,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 193.89011699999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 100.85436047859808,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.631376555587607,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5904577914390549,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 116.096721,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 168.46643939999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 86.05155989500797,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.953195705262132,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5578318497490912,
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
          "id": "d2b901d62f478959ac16e35d79306644d6294bc2",
          "message": "Speed up the schema definition tests in CI. (#146)\n\n### What\n\nThe OpenAPI schema definition tests can take several minutes to run, for\ntwo reasons:\n\n1. The tests call `cargo run`, which can trigger recompilation of all\ndependencies if they haven't been built for this specific target before.\n2. On CI, the tests were running in \"debug\" mode, which means they\ncouldn't make use of the shared build cache, and were taking a few\nminutes as opposed to, well, less time than that.\n\n### How\n\nI have made sure the tests run in release mode on CI (and added `cargo\nnextest` so things are consistent with the other test jobs).\n\nI rewrote the schema definition generator to expose a helper function\nwhich can be called directly by tests, rather than using `cargo` to\nrebuild and rerun the program.\n\nI also removed the Rust cache used by the formatting job because it\ndoesn't actually compile code, which can mean that it ends up writing an\nempty cache, forcing all other jobs to recompile.",
          "timestamp": "2023-11-06T08:23:58Z",
          "tree_id": "d8bc9289c00a9a91ce248f5b751bc30408374446",
          "url": "https://github.com/hasura/ndc-postgres/commit/d2b901d62f478959ac16e35d79306644d6294bc2"
        },
        "date": 1699259501384,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 71.524367,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 153.38737759999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 37.49296794962032,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.35725447492982,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.4801079551379192,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 136.580914,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 385.0297967999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 78.31856506646682,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 52.98948125687082,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5620467929369565,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 108.75250750000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 155.09266399999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 84.24961180733824,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.706051925351275,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4560056006441477,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 95.357519,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 137.4101475,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 69.08528526604321,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.43923177972286,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3926355262161417,
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
          "id": "830c59311be97e40ecda1fdc828efcce9a6dc885",
          "message": "add an 'unqualified schemas' list to the configure options (#147)\n\n### What\n\nCurrently the configuration server will return table and view names\nqualified with their schema, unless the schema is 'public'. In this PR\nwe make this option configurable - we provide the user with the option\nto mention which schemas will not be qualified, with the default being\n'public'.\n\nThis is an additive change, but the jsonschema changes obviously.\n\n### How\n\nAdd a field to `ConfigureOptions` named `unqualified_schemas`, set its\ndefault to be `[\"public\"]`, and pass it as a parameter to the\nconfiguration sql query.\n\nThen fix the configuration tests.",
          "timestamp": "2023-11-06T10:32:32Z",
          "tree_id": "a334163a662239fa6354e2f7a4e3995eb868ef64",
          "url": "https://github.com/hasura/ndc-postgres/commit/830c59311be97e40ecda1fdc828efcce9a6dc885"
        },
        "date": 1699267179682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 79.850717,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 169.09943699999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 45.79175245387902,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 34.058478449986346,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5427135064722177,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 157.17499850000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 455.6596035999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 92.88896879683328,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 55.299078871995405,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6479133151465758,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 127.5950835,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 187.06561225,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 99.78390819813112,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.900703740655331,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5984280880282408,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 109.587872,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 166.649378,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 81.08635356737332,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.93610669655898,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5838342738969691,
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
          "id": "627b896cbf9654675f8e0b7145be74f3fa48a0a8",
          "message": "update-multitenant-dep: just tag everyone (#148)\n\n### What\n\nThe `update-multitenant-dep` flow seems to fail:\n```\nGraphQL: Could not resolve to a User with the login of 'github-merge-queue[bot]'. (u000)\n```\n\nI think this is because we use merge queues, so when we assign the PR to\n`$GITHUB_ACTOR` we actually assign it to `github-merge-queue[bot]`\ninstead of the developer.\n\n### How\n\nWe'll assign it to the team.",
          "timestamp": "2023-11-06T12:29:07Z",
          "tree_id": "43d84c8e9b6f73317971c64a39ac53bb9999a4d1",
          "url": "https://github.com/hasura/ndc-postgres/commit/627b896cbf9654675f8e0b7145be74f3fa48a0a8"
        },
        "date": 1699274182584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 86.459088,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 191.0730594999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.66261009070375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 40.21130849101844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5897607998432836,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 166.791425,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 462.665146,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 94.57509898347104,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 63.11676794114064,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.6348951269907155,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 141.946124,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 203.09140579999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 104.51118675137892,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.977136559695765,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.6702785571620763,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 123.39027300000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 188.40747825,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 89.47189095970852,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.2060423647000675,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6092921107354692,
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
          "id": "d780eaff6f4005f5111d72c9de78a5593f281219",
          "message": "Simplify the Nix derivation as much as possible. (#144)\n\n### What\n\nThe Nix derivation code we have is quite sophisticated, and does things\nwe don't need.\n\nI want to clean it up so we can reuse it as much as possible in other\nrepositories to take advantage of the caching (now we have caching\nworking well) and the small Docker image size.\n\n### How\n\nI have tried to simplify it in a couple of ways:\n\n1. Extracting out the clever Rust cross-compilation stuff into its own\nfile which doesn't need to be touched very often.\n2. Merging what's left of _cargo-build.nix_ and _ndc-agent.nix_.",
          "timestamp": "2023-11-06T14:26:27Z",
          "tree_id": "e5700c24131242a52e8240a55c8fd15e7d57b698",
          "url": "https://github.com/hasura/ndc-postgres/commit/d780eaff6f4005f5111d72c9de78a5593f281219"
        },
        "date": 1699281324651,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 106.281553,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 223.53256624999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 62.3468424416567,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 44.42342207815087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.7088177105642666,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 209.960815,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 566.1819924999992,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 123.9397458413688,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 69.95522021508883,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.8458324199353385,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 152.898848,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 215.8651395,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 112.65564826974627,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.236625944596682,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.7206001507027783,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 127.05934450000001,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 191.22670445,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 95.54855276619013,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.00696198111146,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.6791042976251483,
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
          "id": "bdc37d51401adf12800c95bffb3edf025a364e7e",
          "message": "chore(deps): Bump serde_json from 1.0.107 to 1.0.108 (#150)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.107 to\n1.0.108.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.108</h2>\n<ul>\n<li>Documentation improvements (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1075\">#1075</a>,\n<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1081\">#1081</a>,\n<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1082\">#1082</a>,\nthanks <a href=\"https://github.com/dimo414\"><code>@​dimo414</code></a>\nand <a\nhref=\"https://github.com/fritzrehde\"><code>@​fritzrehde</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4bc1eaa03a6160593575bc9bc60c94dba4cab1e3\"><code>4bc1eaa</code></a>\nRelease 1.0.108</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/1454eac069394f96838b86e71063339edf02148e\"><code>1454eac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1082\">#1082</a>\nfrom dtolnay/fromdoc</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0f072fad735f03476c884b5257e894a54facc01b\"><code>0f072fa</code></a>\nImprove Value From and FromIterator docs</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a8e6f75a9b81f6c7877600cd458a3e0e732487a0\"><code>a8e6f75</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1081\">#1081</a>\nfrom fritzrehde/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ebaf61709aba7a3f2429a5d95a694514f180f565\"><code>ebaf617</code></a>\nfixed typos</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f56053d6f8cb45f61a71570a22d3272bfeb89909\"><code>f56053d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1080\">#1080</a>\nfrom serde-rs/negativenan</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/4e091d5d6d9fd94881b64214ac5696b22028721d\"><code>4e091d5</code></a>\nAdd test of negative NaN and negative infinity</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/421a70d1a6c7e30232a526fdb071b2dc52ec9f07\"><code>421a70d</code></a>\nFix unused imports</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/39f5ad15343a6a1b00660ef74157ad568a2a6c79\"><code>39f5ad1</code></a>\nRemove 'remember to update' reminder from Cargo.toml</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5bb696029d2701d458029b372300cb23417e56ad\"><code>5bb6960</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1075\">#1075</a>\nfrom dimo414/master</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.107...v1.0.108\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.107&new-version=1.0.108)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-06T14:27:17Z",
          "tree_id": "f5f61601dc1d722c5fddd48f786656eaaae32983",
          "url": "https://github.com/hasura/ndc-postgres/commit/bdc37d51401adf12800c95bffb3edf025a364e7e"
        },
        "date": 1699281406216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 80.050167,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 171.532507,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 46.94902482947152,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 33.778961215785465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.5491529848839519,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 160.499149,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 449.836509,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 92.19644494756486,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 60.8449375528281,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.637649378043963,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 130.820117,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 194.92849014999982,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 97.18805940166656,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.097367318055177,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5190611318056431,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 110.051076,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 165.85714424999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 85.36375607332856,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.384149938323503,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.5304336653716172,
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
          "id": "cb0752c8b9b2e845ca6e50d78cb21cb042f85306",
          "message": "chore(deps): Bump cachix/install-nix-action from 22 to 23 (#149)\n\nBumps\n[cachix/install-nix-action](https://github.com/cachix/install-nix-action)\nfrom 22 to 23.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/install-nix-action/releases\">cachix/install-nix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>install-nix-action-v23</h2>\n<ul>\n<li>always show Nix trace</li>\n<li>Nix 2.17</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/6a9a9e84a173d90b3ffb42c5ddaf9ea033fad011\"><code>6a9a9e8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/cachix/install-nix-action/issues/192\">#192</a>\nfrom grahamc/patch-1</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/4509d84f1064e4e57994dc95187754825754ac0d\"><code>4509d84</code></a>\nUpdate to Nix 2.17.0</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/5cfd5166ea7680b784fd8cf556c6d07a9ecce260\"><code>5cfd516</code></a>\nbump</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/e02ea8c42eaf036e471293ad85ac22be35fa89ad\"><code>e02ea8c</code></a>\nFix links to nix.dev</li>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/fffc90f426bf959ff10036360041367f8433aab2\"><code>fffc90f</code></a>\nalways show trace</li>\n<li>See full diff in <a\nhref=\"https://github.com/cachix/install-nix-action/compare/v22...v23\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=cachix/install-nix-action&package-manager=github_actions&previous-version=22&new-version=23)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-11-06T14:27:21Z",
          "tree_id": "a5fc1f6ca8fb2c2d8c0d3b342c9ab86ae8c0560d",
          "url": "https://github.com/hasura/ndc-postgres/commit/cb0752c8b9b2e845ca6e50d78cb21cb042f85306"
        },
        "date": 1699281458953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 63.729658,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 134.90157629999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 35.98660820385724,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 27.259453501785792,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.4411473339283036,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 122.631038,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 354.06813739999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 68.31485886842496,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 49.33111779261522,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5146068709870701,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 110.1423025,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 156.87978694999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 78.70023542361766,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 2.6037514489622424,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.43398968824838713,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 90.320137,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 132.7046503,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 65.87891518218869,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.149499814779418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36004022955965326,
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
          "id": "927c903f564b64dbb4ef35e5c22a915234a4cdc3",
          "message": "Fix Nix cross-compilation by using `callPackage` properly. (#151)\n\n### What\n\nI removed the call to `callPackage` in favor of using `pkgs` directly.\nIt seems this was a bad idea. I have undone this part of my refactor\nand, I hope, made the Nix derivation clearer as a result.\n\nI also added CI jobs for cross-compilation so this doesn't happen again.\n\n### How\n\nYet more Nix. The key is using `pkgs.callPackage` with the `pkgs` from\n_rust.nix_, rather than `import`, to specify the derivation.",
          "timestamp": "2023-11-06T16:36:07Z",
          "tree_id": "df07972beed3ef81276e0eca47ab521eb84d0d78",
          "url": "https://github.com/hasura/ndc-postgres/commit/927c903f564b64dbb4ef35e5c22a915234a4cdc3"
        },
        "date": 1699289100620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 65.476286,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 137.390882,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 38.05883788002348,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 26.938447159798166,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.44176058407155044,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 126.963604,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 370.47971,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 78.19109885757446,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 46.726297079796396,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5351086715942537,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 108.868672,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 156.64378714999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 85.23119535715908,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 2.6262290039521616,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.46690382868469316,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 95.6599645,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 143.44952769999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 68.85757854516191,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1058877437133106,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43273900995776005,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}