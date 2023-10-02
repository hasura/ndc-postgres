window.BENCHMARK_DATA = {
  "lastUpdate": 1696258399762,
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
      }
    ]
  }
}