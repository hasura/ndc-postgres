window.BENCHMARK_DATA = {
  "lastUpdate": 1696346810801,
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
      }
    ]
  }
}