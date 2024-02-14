window.BENCHMARK_DATA = {
  "lastUpdate": 1707910618589,
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
          "id": "dc43b8160a8f08cabab82e2771ef0deb37bdb566",
          "message": "add missing isProcedure tag to native query mutations (#234)\n\n### What\n\nThe native query mutations we defined in the deployment files were\naccidentally not marked as procedures, so they were exposed as\ncollections in the schema instead of procedures.\n\n### How\n\n1. Add `isProcedure: true` field to native query mutations definitions\n2. Rerun the tests\n3. cargo insta review and accept",
          "timestamp": "2024-01-02T09:36:34Z",
          "tree_id": "081edd334733582714509ec740b5fc47bba9b786",
          "url": "https://github.com/hasura/ndc-postgres/commit/dc43b8160a8f08cabab82e2771ef0deb37bdb566"
        },
        "date": 1704188621991,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.880231,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 85.3376399,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.556239240577582,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.347689223253823,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2772853801494251,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.365003,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.17620405,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.6538788986319,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.267218960011782,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.623802416747196,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 63.958686,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.7420106,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.73042224079919,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.277664382533196,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37449563551389625,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.073578,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 95.27853889999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.680703325963755,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.358237641478198,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5108219363968198,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.177659,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.51154104999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.23979746347297,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.4453562663104265,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4028156865405051,
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
          "id": "8cba8caffec95ca4d2e626b741f48820ffc2f10f",
          "message": "test that failed mutations are rolled back (#237)\n\n### What\n\nWe want to test that mutation requests are run as a transaction, and\nthat if one mutation fails, the other mutations are rolled back.\n\n### How\n\nWe add a test with a mutation request that tries to insert an album with\nan already existing id, which fails. We check that it fails, and we also\nverify that the artist we inserted before was not inserted to the db.",
          "timestamp": "2024-01-02T15:26:24Z",
          "tree_id": "6becc74fe699831dd52fbfec6eba87a63bc70e23",
          "url": "https://github.com/hasura/ndc-postgres/commit/8cba8caffec95ca4d2e626b741f48820ffc2f10f"
        },
        "date": 1704209510757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.283243,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.08235359999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.02858874326242,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.29411232987221,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29789092947546836,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 104.506069,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 145.1386178,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 62.51914996854511,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 6.064289097907277,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.787681700591401,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.2852015,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.005819,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 38.26377602216427,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 12.367857870925313,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37843680921343903,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 80.921017,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 102.09571029999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 49.59713502954569,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.674344322933102,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.52830037333445,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 75.359298,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 93.19150475,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 45.80336812944711,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 8.167028526875093,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4177880804713538,
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
          "id": "fef854c0a804013a0e8bdf36d07e129382ffdd90",
          "message": "fix broken docs links (#238)\n\n### What\n\nA couple of links were broken. This fixes them.",
          "timestamp": "2024-01-03T09:50:21Z",
          "tree_id": "fda68c257fd1e13a8ab2bb508bd715ba3130bd3b",
          "url": "https://github.com/hasura/ndc-postgres/commit/fef854c0a804013a0e8bdf36d07e129382ffdd90"
        },
        "date": 1704275731841,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.8516185,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.734294,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.81616481226672,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.023126596791997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28343971002737617,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.6617615,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.05404359999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.94022074278809,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.515245795837032,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6613306450143659,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 64.384285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.47063229999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.72978163994323,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.520965000258485,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3680056339850732,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.21437399999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.267313,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.58542321921545,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.556893913803293,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5225011644881044,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.030493,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.58588710000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.30805172374068,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.465770619595993,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39915656464558,
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
          "id": "8294e4304560082fa17743236fff4e94a9e069ee",
          "message": "Better error codes (#239)\n\n### What\n\nCurrently we return 500 internal error whenever there's an error.\nSome errors should return different errors such as 400 or 422.\n\n### How\n\nSee the changes to the code in `crates/connectors/src/*.rs` to see which\nerror is mapped to which ndc-hub error.\n\nWe also catch specific errors from postgres now, if the code in of the\n`22` class we return a 422 error, if it is from the `23` class we return\na 403 error (for mutations).",
          "timestamp": "2024-01-05T10:51:51Z",
          "tree_id": "e813f57b041b0630c4c925bc079a4e2412d4708e",
          "url": "https://github.com/hasura/ndc-postgres/commit/8294e4304560082fa17743236fff4e94a9e069ee"
        },
        "date": 1704452227934,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.0965655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 99.13556315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.007887867781683,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.99113248321607,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3243537798706772,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.277821,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.845548,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.08390636145542,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.002077899606718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7013486876322487,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.872188,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.08361359999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.530483582783326,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 12.254908190300874,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3805127956645522,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.757074,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.31654569999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.244198590555555,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.825416019092884,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5198822549695136,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.411272,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.37207725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.366782042090215,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.862950438348001,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41965650946340394,
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
          "id": "dd4172889830ecb5c6362e0be90b9c1106574363",
          "message": "Return the generated SQL of an explain request with empty variables (#241)\n\n### What\n\nTo support use cases such as explaining remote-relationships, we want to\nbe able to view the generated SQL of a query that uses variables but\ndoes not provide variables (since those would need to be run first in\norder to be provided).\nIn this PR we allow explain requests on queries that provide empty\nvariables (`variables: []`) to receive just the generated SQL, without\nthe postgres explain part.\n\n### How\n\nWe check that we receive an empty variables field and if that's the case\nwe will skip querying postgres and just return the generated SQL.\n\nPlease read this PR with the `hide whitespace` setting.",
          "timestamp": "2024-01-05T19:44:44Z",
          "tree_id": "e6b886b3b1fca34382204e125174c97f0bb6fcbf",
          "url": "https://github.com/hasura/ndc-postgres/commit/dd4172889830ecb5c6362e0be90b9c1106574363"
        },
        "date": 1704484308410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.7494625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.86761055,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.360653619371476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.340453518340837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28823451865003813,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.5181345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 138.24260074999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.896102014389626,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.705083910605005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7017759318944214,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.030028,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.310183,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.05865667159898,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.515947458770533,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3685329243857115,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.11977350000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.5147885,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.61827492677187,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.516418498330346,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5206043328272424,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.709308,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.61837074999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.67008993570918,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.519215183529475,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40887673038077504,
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
          "id": "5776945ba4d9b8ed71185bc40e5837d0e3501aeb",
          "message": "restructure the openapi-generator (#246)\n\n### What\n\nWe've had difficulties running the openapi-generator tests consistently\nfor some reason.\nThis PR restructures the openapi-generator code a bit so it is a binary\nand library, and we move the openapi test to where all postgres tests\nare.",
          "timestamp": "2024-01-09T14:01:02Z",
          "tree_id": "35e33b86b98ebdb387b2c7c5927585de4369560f",
          "url": "https://github.com/hasura/ndc-postgres/commit/5776945ba4d9b8ed71185bc40e5837d0e3501aeb"
        },
        "date": 1704809190426,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 54.263651499999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 90.4207046,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.509195617448565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.564555040105535,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2923020781301125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 101.600599,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 153.22391420000005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 61.56248501271338,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.29318723021521,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7116208754102914,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.93153050000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.68858189999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.606661879289106,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 11.18423230861245,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37051933444956936,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 80.908158,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 103.0571574,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 49.73479341379892,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.4754321005124424,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5311270454999967,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 74.112178,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.83643719999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 45.06368012079483,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.580967845788159,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4122622547598886,
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
          "id": "c98eff97fb0afc9f77dbdaf366ce8ff1c1b899e5",
          "message": "Support composite types: models and translation (#240)\n\n### What\n\nThis PR adds limited support for composite types.\n\nThe ndc spec does not provide any means to interact with a\ncomposite/object type other than allowing them to appear in results and\nas input arguments. It does not e.g. let you perform field selection or\ncomparison operators. This PR supports that.\n\nWhat is not yet supported is the introspection of composite types from\nthe database. This will appear in a follow-up PR.\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-01-09T14:44:15Z",
          "tree_id": "91423ad9c77c8de883aad92fb83c7b60d7dea3fe",
          "url": "https://github.com/hasura/ndc-postgres/commit/c98eff97fb0afc9f77dbdaf366ce8ff1c1b899e5"
        },
        "date": 1704811789085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.356222,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 97.75383199999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.746593231233383,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 14.159211100620603,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29895415986565305,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.883297,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.82926049999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.96802951064048,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.239027024609072,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7210985538072818,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.017,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.03877499999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.449129814506826,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.367860324221127,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37415611568585794,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.6736465,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.80108765,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.122986879984325,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.8918429900311935,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5017104349292778,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.190762,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.88278369999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.86142192868894,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.934084035727061,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4105509468380371,
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
          "id": "e1145a64e0c9c4a2b3b9222489f22600a33cb801",
          "message": "chore(deps): Bump async-trait from 0.1.76 to 0.1.77 (#244)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.76\nto 0.1.77.\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/commits\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.76&new-version=0.1.77)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-10T12:25:45Z",
          "tree_id": "b85c91192806006544581ff8f4c2dbe5752a313c",
          "url": "https://github.com/hasura/ndc-postgres/commit/e1145a64e0c9c4a2b3b9222489f22600a33cb801"
        },
        "date": 1704890206524,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.874123,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.97698425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.292258535743734,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.12916035164087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2873665840513154,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.913704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.49184909999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.02369822616555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.8810315597934135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7359252765236375,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 64.550604,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.6873902,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.47664497511872,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.027578462937697,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36976982037295525,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.413401,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.47463269999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.552316579601204,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.64282580273359,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5083305623071186,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.0754175,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.72949124999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.96349285939879,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.603090029149506,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4077432879504564,
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
          "id": "ef113700d93f578f2e7d5e0ad22dc3466cc9e0a0",
          "message": "chore(deps): Bump serde from 1.0.193 to 1.0.195 (#245)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.193 to\n1.0.195.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.195</h2>\n<ul>\n<li>Prevent remote definitions of tuple struct or tuple variant from\ntriggering dead_code warning (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2671\">#2671</a>)</li>\n</ul>\n<h2>v1.0.194</h2>\n<ul>\n<li>Update proc-macro2 to fix caching issue when using a rustc-wrapper\nsuch as sccache</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/03eec42c3313b36da416be1486e9ecac345784d5\"><code>03eec42</code></a>\nRelease 1.0.195</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/196f311ae2fd8ad94fe38a57830419859a4d3dbb\"><code>196f311</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2671\">#2671</a>\nfrom dtolnay/deadremote</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/38d9e0b2091e9b6150486c2c37367819b86bcc39\"><code>38d9e0b</code></a>\nRevert &quot;Add FIXME to fix dead_code warning when using\nserde(remote)&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/6502b3131697eff6420786ad71f87f29cfff3a13\"><code>6502b31</code></a>\nFix new dead_code warning in tuple struct and tuple variant remote\ndefs</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/6f1a8c3115c8d2502178c25d610fbaee2e82c46b\"><code>6f1a8c3</code></a>\nAdd FIXME to fix dead_code warning when using serde(remote)</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d883c94cc9fe72d0512dc7f4def7191a401595c9\"><code>d883c94</code></a>\nWork around dead_code warning in tests</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/961fa59a7469c5b5e323b9723323df412048d60d\"><code>961fa59</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2670\">#2670</a>\nfrom serde-rs/exhaustive</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8bc71def551df190e6817d3311e5c76f751f53e6\"><code>8bc71de</code></a>\nFill in omitted patterns for GenericArguments match</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/7c65a9dc0eab2d4d829b258a7b3549351bbe8dcd\"><code>7c65a9d</code></a>\nPick up changes to non_exhaustive_omitted_patterns lint</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d2d977a6c6dcff237ae956336d18b0c900c61aad\"><code>d2d977a</code></a>\nRelease 1.0.194</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.193...v1.0.195\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.193&new-version=1.0.195)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-10T12:30:24Z",
          "tree_id": "397d13b2771f11502d9e90cd04465b4dba6187db",
          "url": "https://github.com/hasura/ndc-postgres/commit/ef113700d93f578f2e7d5e0ad22dc3466cc9e0a0"
        },
        "date": 1704890501847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.206792,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.07361700000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.469613983750662,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.595951823081663,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29028305984925185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.102728,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.91174025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.39595022849131,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.19638098579464,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6988832024809825,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.3341595,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.6650411,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.287497419445614,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 11.663466573486957,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3661275155065939,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.3432055,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.15792969999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.984153988880145,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.701099368363359,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5022646535624746,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.646397,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.571598,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.222485154072814,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.001461679919487,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42366981781567764,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51714308+ashwiniag@users.noreply.github.com",
            "name": "ashwiniag",
            "username": "ashwiniag"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "601ee5414c8a823b616827692802ea73e06aa7a1",
          "message": "enables gate for prod deployment and removes rollback flag (#242)\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-01-10T14:00:13Z",
          "tree_id": "0ead627fba1326b22c4e9a38a63c7e18c7f328b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/601ee5414c8a823b616827692802ea73e06aa7a1"
        },
        "date": 1704895544626,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.423122,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 85.54174985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.58649374629384,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.87230251222772,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28927574634758685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.054371,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.125095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.87429396489487,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.893267875258736,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7227857138350015,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.683073,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.29580250000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.32177651032645,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.394652232840436,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37647108370250426,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.809485,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.6624552,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.44472444922747,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.801688826472379,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5194576059753901,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.041678,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.7647686,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.79042357696422,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.113412315349684,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4126384778421216,
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
          "id": "3dc5d3aa3c2ff22e0b57d1e88922396c375d148e",
          "message": "chore(deps): Bump thiserror from 1.0.51 to 1.0.56 (#243)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.51 to\n1.0.56.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.56</h2>\n<ul>\n<li>Update proc-macro2 to fix caching issue when using a rustc-wrapper\nsuch as sccache</li>\n</ul>\n<h2>1.0.55</h2>\n<ul>\n<li>Work around improperly cached build script result by sccache –\nsecond attempt (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/280\">#280</a>)</li>\n</ul>\n<h2>1.0.54</h2>\n<ul>\n<li>Work around improperly cached build script result by sccache – first\nattempt (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/279\">#279</a>)</li>\n</ul>\n<h2>1.0.53</h2>\n<ul>\n<li>Reduce spurious rebuilds under RustRover IDE when using a nightly\ntoolchain (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/270\">#270</a>)</li>\n</ul>\n<h2>1.0.52</h2>\n<ul>\n<li>Fix interaction with RUSTC_BOOTSTRAP (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/269\">#269</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/77d0af46ddafa9b70d99267548bdea85308e90f3\"><code>77d0af4</code></a>\nRelease 1.0.56</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d4caabdb38a830e18eecaec678275b949b098b68\"><code>d4caabd</code></a>\nPull in proc-macro2 sccache fix</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/6089273df58c7a7d2f41b91dc18c8fe8397de104\"><code>6089273</code></a>\nRelease 1.0.55</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/322a2ae5c9034774ae1a7fc1c1644bf0bb2e9e47\"><code>322a2ae</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/280\">#280</a>\nfrom dtolnay/depinfo</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/fd7d7a568c94f0f1f53bbaddac7e32d8c1b5bc22\"><code>fd7d7a5</code></a>\nEmit dep-info for probe.rs in case sccache needs it</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/447c328719cdc719354d3ec55c81b4ca57cf7a8e\"><code>447c328</code></a>\nRelease 1.0.54</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/4619db86447ebc236d0c89ece9e2ea718bccd060\"><code>4619db8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/279\">#279</a>\nfrom dtolnay/depinfo</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/7b53bff3e6f1640bbd58fc96bde95507a0de2756\"><code>7b53bff</code></a>\nMake env-dep:RUSTC_BOOTSTRAP get listed in probe's dep-info</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/e0500add5e1c24c12c0236ae55a30f06d7a185a5\"><code>e0500ad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/277\">#277</a>\nfrom dtolnay/nightlyci</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/48cea4716419bdc84a00d6ee0f47a9eaf77e052d\"><code>48cea47</code></a>\nMake CI verify that error_generic_member_access works in latest\nnightly</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.51...1.0.56\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.51&new-version=1.0.56)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-01-10T14:16:45Z",
          "tree_id": "661d5dc7cb89547b9b03fce3fe51f28f7b6cb261",
          "url": "https://github.com/hasura/ndc-postgres/commit/3dc5d3aa3c2ff22e0b57d1e88922396c375d148e"
        },
        "date": 1704896872860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.679948,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 93.7707384,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.820979458154657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 13.095130206025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28396942697266275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.5385145,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.72292579999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.39060890059035,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.552584066645622,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7372704107652421,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.1968495,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.65861389999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.93629838982033,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 10.393086300053781,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3694998785996918,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 78.042539,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.01763525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 48.31139571079611,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.032291562469794,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5293054792566314,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 71.3942615,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.50543294999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.41335665992158,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.2384510586738955,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41150102690717,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51714308+ashwiniag@users.noreply.github.com",
            "name": "ashwiniag",
            "username": "ashwiniag"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "88918b35f86af4c360848862f6f64539699edbd4",
          "message": "cd: adds deployment docs (#247)\n\nAdds documentation for deployment of service.",
          "timestamp": "2024-01-11T14:27:09Z",
          "tree_id": "8fab3c840d1e9e8d48a6abd2ed04ee0b9f972dd0",
          "url": "https://github.com/hasura/ndc-postgres/commit/88918b35f86af4c360848862f6f64539699edbd4"
        },
        "date": 1704983765878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.053163,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.79621599999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.930833587694966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.583285478830287,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29143201048972933,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.329295,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.11786454999992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.44306974033606,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.741480194494869,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7485164096335205,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.742276,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 100.7843957,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.567019403663274,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 11.939302058118763,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37418312849570273,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 77.90816050000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.30262674999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.98444312233374,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.142333727873243,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5244100535655715,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.867831,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.0492923,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.36751275149835,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.03563991268873,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41880897638492814,
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
          "id": "0616adbfad8020914664637da2db5ab62bf4dde7",
          "message": "chore(deps): Bump serde_json from 1.0.109 to 1.0.111 (#250)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.109 to\n1.0.111.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.111</h2>\n<ul>\n<li>Improve floating point parsing performance on loongarch64 (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1100\">#1100</a>,\nthanks <a\nhref=\"https://github.com/heiher\"><code>@​heiher</code></a>)</li>\n</ul>\n<h2>v1.0.110</h2>\n<ul>\n<li>Update proc-macro2 to fix caching issue when using a rustc-wrapper\nsuch as sccache</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0131ac68212e8094bd14ee618587d731b4f9a68b\"><code>0131ac6</code></a>\nRelease 1.0.111</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/96ecfadd3f7dd6366a2d07a098e228d15df93cb4\"><code>96ecfad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1100\">#1100</a>\nfrom heiher/limb-64-la64</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c80dbaf8ff5902ca670e0a48bbe495065b9314f5\"><code>c80dbaf</code></a>\nSet limb width to 64 for loongarch64</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/df5cf215b70fb6341b255e7c0a210c06f64c0669\"><code>df5cf21</code></a>\nRelease 1.0.110</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c35856a93c37b48b3d6efc4fec8e05554dd3f9d5\"><code>c35856a</code></a>\nPull in proc-macro2 sccache fix</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.109...v1.0.111\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.109&new-version=1.0.111)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-15T14:35:29Z",
          "tree_id": "7406b27aff331e9a013608b8e753da6cbfc165a4",
          "url": "https://github.com/hasura/ndc-postgres/commit/0616adbfad8020914664637da2db5ab62bf4dde7"
        },
        "date": 1705329768124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.948639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.3728142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.382281686292657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.946676539738846,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2857676507812862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.764374,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 144.56649259999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.08880684194655,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.5488341065729685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6759504392375675,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.324799,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.2260534,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.3027863286699,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.614011264959053,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37705384059133396,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.87075300000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.98445994999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.13171845645853,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.617588037935057,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5080701015204423,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.4749845,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.21466099999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.96368169587119,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.752999667319656,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41778517879630506,
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
          "id": "82454f03171382161a34186b6571204b63b93743",
          "message": "chore(deps): Bump cachix/install-nix-action from 24 to 25 (#253)\n\nBumps\n[cachix/install-nix-action](https://github.com/cachix/install-nix-action)\nfrom 24 to 25.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cachix/install-nix-action/releases\">cachix/install-nix-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>install-nix-action-v25</h2>\n<p>Nix 2.19.2</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/cachix/install-nix-action/commit/6004951b182f8860210c8d6f0d808ec5b1a33d28\"><code>6004951</code></a>\nNix: 2.19.1 -&gt; 2.19.2</li>\n<li>See full diff in <a\nhref=\"https://github.com/cachix/install-nix-action/compare/v24...v25\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=cachix/install-nix-action&package-manager=github_actions&previous-version=24&new-version=25)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-15T14:35:33Z",
          "tree_id": "e95b2dc4c9a0dde45c4da598da34a5b699acd465",
          "url": "https://github.com/hasura/ndc-postgres/commit/82454f03171382161a34186b6571204b63b93743"
        },
        "date": 1705329825900,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.03874,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 88.47478339999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.230975212359013,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.793365981450982,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28609981297368325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.5568515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.84653634999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.03973119369616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.033419061182812,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7046682650277127,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 64.82164,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.31675309999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.322380748872156,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.441916018629335,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36971682574087195,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.564166,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.23862775,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.875039600798466,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.638111476892568,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5128268615073208,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.60533749999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.07776915,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.18473254319774,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.752166296914439,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4258805695653717,
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
          "id": "a014373912274554bb725e4d2e2a93f4c826d45f",
          "message": "introspect columns to include default, generated and identity columns (#256)\n\n### What\n\nIn order to generate insert mutations we'd like to know which columns\nshould be inserted into, which we shouldn't insert to, and which can go\neither way.\nTo do that we add settings for default, generated, and identity\ninformation to column information, as well as introspection code.\n\n### How\n\n1. We create an enum for each setting, and include that information in\n`ColumnInfo` metadata\n2. We add SQL introspection and query this information from\n`pg_attribute`, but see the comment about generated columns",
          "timestamp": "2024-01-16T10:14:08Z",
          "tree_id": "9dbeb0240bf1bc5e5581ca2497668ffef3fb2300",
          "url": "https://github.com/hasura/ndc-postgres/commit/a014373912274554bb725e4d2e2a93f4c826d45f"
        },
        "date": 1705400444034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.3422945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.04309525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.88545389674549,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.777316079243178,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2869720749495548,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.264803,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.5391226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.09577060367118,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.931434846122883,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7002210833585315,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.228599,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.2859984,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.47315351676551,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 11.256253455838475,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3738988017427571,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 77.707245,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.603756,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.896262545613766,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.031921719385522,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5276861136169548,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.789126,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.52746389999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.36454589482027,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.178390424470088,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4102802766556175,
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
          "id": "eb9ab098a38d4290c1e4ac572c9cbbe282203993",
          "message": "Derive `Copy` for `IsolationLevel` so we don't have to clone it. (#258)\n\n### What\n\nJust making the code more Rust-y.\n\nIt's a little thing but it got in my way earlier.\n\n### How\n\nBy adding `Copy` to `IsolationLevel`, we can freely pass it around by\nvalue, not by reference.",
          "timestamp": "2024-01-16T13:30:39Z",
          "tree_id": "af3c4458b90f7f56877c6482fe610f1049298389",
          "url": "https://github.com/hasura/ndc-postgres/commit/eb9ab098a38d4290c1e4ac572c9cbbe282203993"
        },
        "date": 1705412213688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.5746895,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.26132375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.509908207635814,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.164248981710802,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28711095195259145,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.30153100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.08296174999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.201655483359616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.91722031035799,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7028198524024282,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.4166855,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.27437675,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.453304892946385,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.699976115080766,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3729008976841407,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.467135,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.9248692,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.55834866263641,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.666181238936893,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5164575473923894,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.987737,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.001278,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.04646425341359,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.650764843708657,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41313563952121,
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
          "id": "7b7448a13d96f58eb10102ff2e235c563d2f611c",
          "message": "Support variables of composite type (#249)\n\n### What\n\nThis PR changes how the `variables` field of a request is translated,\nsuch that variables of composite types are now supported.\n\nArray types require a some treatment of their own, which will be dealt\nwith in a follow-up PR.\n\n### How\n\nPrior to this PR, incoming variables (bound to `$1` in this example)\nwere translated in the style of:\n\n```\n  ... FROM json_to_recordset($1) as \"%variables_table\"(\"%variable_order\" int, \"variable1\" varchar, \"variable2\" varchar, \"variable3\" varchar, ...)\n```\n\nAll the variables used in the request (`variable1`, `variable2`, etc)\nall become columns of `%variables_table`, and all of type `varchar`.\n\nUsage sites would rely on casts to interpret the variables as the\nrelevant scalar type:\n\n```\n cast(\"%variables_table\".\"variable1\" as int4)\n```\n\nOn this approach we can observe a few things:\n\n* We can only support plain scalar types, since we cannot canonically\nrepresent an array or object as a string through `json_to_recordset`.\n* \"%variable_order\" is a reserved name that can conflict with user\nvariable names.\n* We don't need to do any bookkeeping of what type a variable has. Usage\ncontext takes care of this to the extent that queries without type\nerrors execute correctly.\n\nIn order to support composite (and array) types, we change the\ntranslation scheme:\n\n```\n  ... FROM json_to_recordset($1) as \"%variables_table\"(\"%variable_order\" int, \"%variables\" jsonb)\n```\n\nAll the variables used in the request (`variable1`, `variable2`, etc)\nall become fields of the \"%variables\" column, which remains yet a json\nvalue.\n\nUsage sites still rely on casts to interpret the variables as the\nrelevant scalar type, but now have to rely on the `->>` operator to\nproject a variable from the `%variables` object as a plain `text`\nscalar:\n\n```\n cast(\"%variables_table\".\"%variables\" ->> \"variable1\" as int4)\n```\n\nIn the case of composite types we use the function\n`jsonb_populate_record` to construct the composite value from the\njson-valued variable-field, and the operator `->` to extract the field\nvalue as `jsonb` (c.f. `->>` for `text`)\n\n```\njsonb_populate_record(null::person, \"%variables_table\".\"%variables\" -> \"variable2\")\n```\n\nOn this updated approach we can observe a few things:\n\n* We can support both scalars, arrays, and composite types.\n* \"%variable_order\" is no longer a reserved name.\n* We still don't need to do any bookkeeping of what type a variable has.\n* `jsonb_populate_record` does all the heavy lifting, which means that\nwe don't need to generate more than a single call to this function to\nhandle any level of nested types.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-01-16T14:27:46Z",
          "tree_id": "9f906f942b8847b5b7670958d40e0a459013451d",
          "url": "https://github.com/hasura/ndc-postgres/commit/7b7448a13d96f58eb10102ff2e235c563d2f611c"
        },
        "date": 1705415986335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.819416000000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.88824300000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.534604771318296,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.658845061423879,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28338701826529905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.866269,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 144.48347719999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.22422419007622,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.603023702480698,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6848875642532456,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.614679,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.18154755,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.05980766430348,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.740283667538435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4450804497520168,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.083202,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.1378295,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.19988268444821,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.310857651461987,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.522032384662531,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.635307,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.96291504999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.10315207928953,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.693361302824698,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4198648916934484,
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
          "id": "992e81671e8841ae1cf7d986a6460f7d7594b4fc",
          "message": "Add more tests of composite types  (#257)\n\n### What\n\n* Cockroach does support non-nested user defined types, so we test those\nas well\n* Yugabyte is now also covered by tests of composite types\n* Aurora is (tentatively) covered. The test database will be updated in\na follow-up PR\n\n### How\n\nWe now distinguish between \"simple\" and \"complex\" use of composite\ntypes, the difference being that the \"complex\" uses nest user defined\nrecord types.\n\nThe existing tests were of the \"complex\" type, and these are now named\nas such. This PR adds \"simple\" test cases that only deal with user\ndefined record types that reference only scalar types.",
          "timestamp": "2024-01-17T08:16:12Z",
          "tree_id": "996b4967f68a9531ddb6580e8b04f9e407316aa1",
          "url": "https://github.com/hasura/ndc-postgres/commit/992e81671e8841ae1cf7d986a6460f7d7594b4fc"
        },
        "date": 1705479747749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.445049,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 88.22170919999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.526877230948205,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.366456882913038,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28237716219831616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.75283250000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.6071902,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.862707000684196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.39772412482904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6710974792766725,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.469918,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.66686329999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.926031767268064,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.935799989985931,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44108452362968653,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.657765,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.150971,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.108561108257376,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.3519232062406985,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5010049497048226,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.924628,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.487471,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.370357646105056,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.795707768065007,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4103801689816567,
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
          "id": "3765c1a77e2bcb9ddc4800dc75fdc6a2dd4a0c9e",
          "message": "Add tests of composite types to Aurora (#259)\n\n### What\n\nThis PR extends the tests of composite types to cover Aurora.\n\nThis is a follow-up to #257, and will be rebased once that is merged.\n\n### How\n\nIn order to standardise the (rare) management we need to be able to do\non our Aurora test instance this PR adds a script that inserts all the\ntest data currently in use. Currently, this means: The chinook dataset,\nand definitions of composite types.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-01-17T15:04:48Z",
          "tree_id": "d050430600eedb01f78f15c4fa232901931032a0",
          "url": "https://github.com/hasura/ndc-postgres/commit/3765c1a77e2bcb9ddc4800dc75fdc6a2dd4a0c9e"
        },
        "date": 1705504263681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.391089,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.7466168,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.164997844967434,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.479829438914226,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2916452539880691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.409598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 138.5842246,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.76555719560241,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.948030728135642,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7024947579213093,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.63942800000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.24199264999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.29749359147657,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.308140581193996,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4471287649270281,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.86143899999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.44634109999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.6752906794612,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.7209157844129095,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5245076796949214,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 71.535056,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.4554065,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.875900907056604,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.152593583612479,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4155161435337826,
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
          "id": "9e0a2b44e4bdaee2d99906b5e5518ad3a574c9b2",
          "message": "Move variables_table to Env (#262)\n\n### What\n\nSince the table reference that binds the variables table cannot change\nin the course of query translation we move this to `Env` instead of\n`State`.",
          "timestamp": "2024-01-17T16:47:23Z",
          "tree_id": "6c5a554adce779624e6905f96f83aa13692d49c3",
          "url": "https://github.com/hasura/ndc-postgres/commit/9e0a2b44e4bdaee2d99906b5e5518ad3a574c9b2"
        },
        "date": 1705510431162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.1593315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.3831504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.317631985573083,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.209726565384745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2889760044826669,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.755938,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 145.16345939999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.36099287449626,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.741559424254866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6792404139807715,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.1772275,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.50284945,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.52698031325557,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.9991416126162065,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44275069167718284,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.17921849999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.2569125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.25805423950478,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.582206747885813,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5299638860526756,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.1641245,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 95.93943775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.6486974071357,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.507203523979385,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43539780228146346,
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
          "id": "c702546ab31ae70accdbd5de610ec643e694bdd4",
          "message": "Remove unnecessary `DISTINCT ON` expressions from introspection SQL. (#260)\n\n### What\n\nThere are two:\n\n1. selecting only one relation per name\n2. selecting only one aggregate function per input type\n\nThese are both unnecessary.\n\nThis work was inspired by CockroachDB failing to respect ordering within\nCTEs.\n\n### How\n\nThe first, selecting only one relation per name, was there to avoid\nhaving to deal with multiple relations of the same name in distinct\nschemas, but we now support schemas (and prefix all relations with their\nschema name), so this is unnecessary and possibly dangerous.\n\nThe second, selecting only one aggregate function per input type, is not\nnecessary because we only support aggregate functions which take a\nsingle argument, and therefore there can only be one per input type\n_anyway_, i.e. you cannot have two aggregate functions of the same name\nwith the same input type(s) and different return types (return type\npolymorphism) in PostgreSQL.\n\nWe therefore simplify these queries to avoid having to use `DISTINCT ON`\nat all.\n\nCo-authored-by: Philip Lykke Carlsen <plcplc@gmail.com>",
          "timestamp": "2024-01-18T09:14:17Z",
          "tree_id": "dd4210103c41d48a09da880574e08feee81a2ced",
          "url": "https://github.com/hasura/ndc-postgres/commit/c702546ab31ae70accdbd5de610ec643e694bdd4"
        },
        "date": 1705569742981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.511256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 86.800939,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.004607425205492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.511541868369996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2778031785436934,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.55123,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.06141619999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.16035605941077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.963994540276005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7080414499362044,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.047907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.27846159999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.2793867558629,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0179129951569905,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4548950757527222,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.8836805,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.96569764999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.44114742874741,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.556009308658332,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5221868119706393,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.9969065,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.48738955,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.52701820221471,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.67382987031111,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4149404820067128,
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
          "id": "256717587499c05f4ae8c10c2f70648c7d2feb67",
          "message": "Auto-generated insert procedures v1 (#261)\n\n### What\n\nWe'd like to auto-generate insert procedures for tables.\n\n### How\n\nSoon, tl;dr:\n\n1. We add the relevant INSERT INTO sql structure to the relevant parts\n2. We generate insert procedures from the metadata information about\ntables and columns\n3. We expose in the scheme by creating a procedure for each generated\ninsert procedure, and create an object type for the table's insertable\nobject\n4. We add some custom-tables.sql to postgres so we can test other stuff\nnot exposed by chinook\n\n\ntodo: add engine metadata for `v1_insert_custom_dog`.",
          "timestamp": "2024-01-19T15:44:14Z",
          "tree_id": "8ee56dcbbfc84259b48a405221e3918e33bcd9b1",
          "url": "https://github.com/hasura/ndc-postgres/commit/256717587499c05f4ae8c10c2f70648c7d2feb67"
        },
        "date": 1705679555894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.278361,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.93794740000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.94671329045135,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.690649850865341,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2858652598802432,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.9229195,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.11243290000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.720870286439784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.286647015232553,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6514118636996914,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.411833,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.26878845,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.342622827123066,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.991209910929506,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4442017158191785,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.1780325,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.38424964999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.428845244358456,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.532898341190304,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5224519118243431,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.365753,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.340066,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.357223928636834,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.8035926710388495,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4204535289469678,
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
          "id": "04e342bb36067349a6a52ad7c6d8fb5d167382d5",
          "message": "Support variables of array type (#263)\n\n### What\n\nThis PR extends the support for query variables to include arrays.\n\n### How\n\nWe need to go a bit out of our way to be able to translate JSON arrays\nto Postgres arrays, since there is no single builtin function that does\nthis.\n\nAs an example taken from the tests, a variable of type\narray-of-`organization` gets translated to the below SQL:\n\n```\n(\n  SELECT\n    array_agg(\n      jsonb_populate_record(cast(null as organization), \"%0_arr\".\"elem\")\n    ) AS \"elem\"\n  FROM\n    jsonb_array_elements((\"%0_%variables_table\".\"%variables\" -> $2)) AS \"%0_arr\"(\"elem\")\n)\n\n```\n\nWhich, being a single-element set-returning expression, can feature both\nin a `FROM` clause and in a select-list or other expression.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-01-22T14:05:31Z",
          "tree_id": "03e3b6f7748f6eb2507128001b783c857fb92813",
          "url": "https://github.com/hasura/ndc-postgres/commit/04e342bb36067349a6a52ad7c6d8fb5d167382d5"
        },
        "date": 1705932732872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.740922999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.86722629999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.634639811419166,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.939938853437429,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28535278980411904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.4399055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 149.17541315,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.84980936896685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.253373469603865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7575704586161122,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.282227,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.9962856,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.18595616451028,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.713804246484052,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5409933443703849,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.4595545,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.6380298,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.4883557785258,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.848664794783019,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.519239760876823,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.245287,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.9915458,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.3029468104774,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.928054526968552,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40248875519956284,
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
          "id": "e6aed468f66e76c4f3dd06e2e0dfbfe8310332bb",
          "message": "Replace use of \"deployment\" with \"ndc metadata\" (#254)\n\nI (specifically Tom) keep getting confused about whether deployments are\nfor engine or the NDC bit, and the first time I drafted this PR @plcplc\nactually had to point out that I got the difference wrong _again_, so\nthis PR replaces mentions of \"deployment\" with \"ndc metadata\" to make it\nmore obvious to me (specifically Tom).",
          "timestamp": "2024-01-22T15:56:36Z",
          "tree_id": "4d8a0bba7d48fd8f9824b6c63a5dfd7d13bf1a1a",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6aed468f66e76c4f3dd06e2e0dfbfe8310332bb"
        },
        "date": 1705939449164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.368499,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 92.63249619999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.277510543667557,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.897848119685502,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2988031913507818,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.95477,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.34695625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.927512522308874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.063145638255577,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6718128903564826,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.9443755,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.85934110000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.63713373071313,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.171601013695508,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5341597245542821,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.17773500000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.14264084999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.04860085452518,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.719192062794129,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5063002851550893,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.605998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.987154,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.103673914690965,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.884948094477274,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4117583367949753,
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
          "id": "3221a30101d7e1f64d93985e19194f8266fced43",
          "message": "chore(deps): Bump env_logger from 0.10.1 to 0.10.2 (#265)\n\nBumps [env_logger](https://github.com/rust-cli/env_logger) from 0.10.1\nto 0.10.2.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-cli/env_logger/blob/main/CHANGELOG.md\">env_logger's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.10.2] - 2024-01-18</h2>\n<h3>Performance</h3>\n<ul>\n<li>Avoid extra UTF-8 validation performed in some cases</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Ensure custom pipes/stdout get flushed</li>\n<li>Don't panic on broken pipes when <code>color</code> is disabled</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/7929b7fc3df3223320c3cdd346138965f2c7e52f\"><code>7929b7f</code></a>\nchore: Release env_logger version 0.10.2</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/3df552c315f00f4bce6e8dfd7b0ab56210e8a74b\"><code>3df552c</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/6ec4104864ed6bf6694988d30611ee736d2dcb5e\"><code>6ec4104</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-cli/env_logger/issues/296\">#296</a>\nfrom epage/refactor</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/939687dd75b606186989aa72fe43e716eaca5659\"><code>939687d</code></a>\nstyle: Make clippy happy</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/c088820ae84318077e5a37a3bed6d20b3f7aa3f3\"><code>c088820</code></a>\nfix(fmt): Ensure stream gets flushed</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/2b3f26fc29952296fdf79fa43d5beb35ddacbf40\"><code>2b3f26f</code></a>\nperf(fmt): Avoid UTF-8 validation</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/7428386da32c2a78b80f7e67a04b5fd5449601d5\"><code>7428386</code></a>\nrefactor(fmt): Pull out stream lookup from write</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/e8674a237b62460b6dbc4ed8d8b48b6db0a97de4\"><code>e8674a2</code></a>\nrefactor(fmt): Consolidate target printing</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/f5f3392886cb3f2a1a3180122666fa40a2150efe\"><code>f5f3392</code></a>\nrefactor(fmt): Pull is_test into the target</li>\n<li><a\nhref=\"https://github.com/rust-cli/env_logger/commit/87008fdf78b861202ca9da4869475649e72b8e82\"><code>87008fd</code></a>\nfix(fmt): Don't panic on broken pipes without termcolor</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-cli/env_logger/compare/v0.10.1...v0.10.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=env_logger&package-manager=cargo&previous-version=0.10.1&new-version=0.10.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-22T17:05:12Z",
          "tree_id": "db8a5858a81d30ffd45edb254076d8fe021f7c52",
          "url": "https://github.com/hasura/ndc-postgres/commit/3221a30101d7e1f64d93985e19194f8266fced43"
        },
        "date": 1705943598593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.778819,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.35462329999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.239486906589253,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.979476066808996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2811599926614295,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.8715525,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.80380979999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.31618552747996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.904453610992029,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6929350053598284,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 77.44403,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.4682244,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.834242417587745,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.868426249980772,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5486938122764126,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.972157,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.2865344,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.16202324120215,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.590104898719645,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5124266240124742,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.8288735,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.27100974999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.02452917224237,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.705054460666602,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4101817759658035,
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
          "id": "3d19e81803e31dd6b0300845a3d36b613b61fd17",
          "message": "chore(deps): Bump uuid from 1.6.1 to 1.7.0 (#266)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.6.1 to 1.7.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.7.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add missing test for invalid parse_str by <a\nhref=\"https://github.com/CXWorks\"><code>@​CXWorks</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/723\">uuid-rs/uuid#723</a></li>\n<li>Upgrade borsh unstable dependency to v1.0 and make it stable by <a\nhref=\"https://github.com/bgeron\"><code>@​bgeron</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/724\">uuid-rs/uuid#724</a></li>\n<li>Reduce the package size of uuid by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/726\">uuid-rs/uuid#726</a></li>\n<li>Make use of newer Cargo features for specifying dependencies by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/727\">uuid-rs/uuid#727</a></li>\n<li>Prepare for 1.7.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/728\">uuid-rs/uuid#728</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/CXWorks\"><code>@​CXWorks</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/723\">uuid-rs/uuid#723</a></li>\n<li><a href=\"https://github.com/bgeron\"><code>@​bgeron</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/724\">uuid-rs/uuid#724</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.6.1...1.7.0\">https://github.com/uuid-rs/uuid/compare/1.6.1...1.7.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/cefc353334784f91f3cab97fa16bf7a1a141b800\"><code>cefc353</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/728\">#728</a> from\nuuid-rs/cargo/1.7.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/3255b5414b7830ae4726b9e48f31e54d98b3fb3e\"><code>3255b54</code></a>\nprepare for 1.7.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/403bb17c1ab60b11dda1cb14e9f23946956f7dcd\"><code>403bb17</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/727\">#727</a> from\nuuid-rs/chore/cargo-cleanup</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/b7c6e26feabcb32e482410ffe58640deb61bd89a\"><code>b7c6e26</code></a>\nmake use of newer Cargo features for specifying dependencies</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/ed13c73c7c71691a5012d5e24170590df972e497\"><code>ed13c73</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/726\">#726</a> from\nuuid-rs/chore/pkg-size</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/2e92a3d45f4d12fb24bd40bc063ee19ff9066c57\"><code>2e92a3d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/724\">#724</a> from\nbgeron/borsh-1</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/38f01ffccfdae0be0af6cb432ba800c8fcc8b26f\"><code>38f01ff</code></a>\nrename workflow</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/eab4b859193f409c83456efb1be29d80b204a22a\"><code>eab4b85</code></a>\nreduce the package size of uuid</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/421d752847ccbf942dc5f89190c34c9770c234a7\"><code>421d752</code></a>\nMake the borsh feature work by itself, without having to specify private\nfeat...</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/2534949aa39a26513f43d1cb69c4246b65251cc7\"><code>2534949</code></a>\nContinue making feature borsh stable, as suggested by <a\nhref=\"https://github.com/KordAus\"><code>@​KordAus</code></a></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.6.1...1.7.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.6.1&new-version=1.7.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-22T17:07:13Z",
          "tree_id": "c3b59a2f33a177e791fa538e7942a6238c177e6f",
          "url": "https://github.com/hasura/ndc-postgres/commit/3d19e81803e31dd6b0300845a3d36b613b61fd17"
        },
        "date": 1705943970089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.505489999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.0644595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.09725369590816,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.71873020417446,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28507044869789677,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.2209695,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.16646475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.31447458864398,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.769743093858814,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6940826290074064,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.52995200000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.39738764999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 46.855183679952944,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5515907779091975,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5415407264935652,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.37773100000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.7937805,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.99946787177314,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.42106712509581,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5232988024291813,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.027476,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.2643926,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.81607179726062,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.628255107765895,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4104005720642182,
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
          "id": "9eec086bf70c705f216b1b81493433e2278dd778",
          "message": "Unify code path for json value translation with variables (#267)\n\n### What\n\nRather than having two different ways to translate values (depending on\nwhether they are literals or variables) we instead use the same method\nin both cases.\n\n### How\n\nAs a consequence we need to have the `State` available in literal value\ntranslation as well as in variable translation, which requires some\nfollow-up changes in the various other translation functions.\n\nWe also duplicate the test of nested array types from the variables-case\nto the literal values-case.",
          "timestamp": "2024-01-23T14:05:26Z",
          "tree_id": "24077dd7ae53ffd2adc45205ef4d93143d39f2f7",
          "url": "https://github.com/hasura/ndc-postgres/commit/9eec086bf70c705f216b1b81493433e2278dd778"
        },
        "date": 1706019225734,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.472789,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.96565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.84259791973962,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.39412573332984,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27898084787124056,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.9939155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.14158149999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.536345622407076,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.224754482093701,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6184371468684149,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.65394,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.4402657,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 46.97657807377432,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5920687100880855,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5308873960560999,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.02445399999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.40903069999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.58294322078821,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.847730654327421,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5122432306799151,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.10756749999999,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.2132443,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.51229021433513,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.647778940143617,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4112373816006753,
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
          "id": "7cddea3fb435fe6e315674bc0be093c32df5907e",
          "message": "chore(deps): Bump serde from 1.0.195 to 1.0.196 (#270)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.195 to\n1.0.196.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.196</h2>\n<ul>\n<li>Improve formatting of &quot;invalid type&quot; error messages\ninvolving floats (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2682\">#2682</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/ede9762a583c3cc3b87c10a53551828fad339525\"><code>ede9762</code></a>\nRelease 1.0.196</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/d438c2d67bf30e3edab31c2272c4829c12cf4cb5\"><code>d438c2d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2682\">#2682</a>\nfrom dtolnay/decimalpoint</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/bef110b92a171ac568a47339f5bd97938a8c9da2\"><code>bef110b</code></a>\nFormat Unexpected::Float with decimal point</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b971ef11d1b53da7673e0c8199e87509c003c1a8\"><code>b971ef1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2681\">#2681</a>\nfrom dtolnay/workspacedeps</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/29d9f693996d199748136d5561a971ed68626724\"><code>29d9f69</code></a>\nFix workspace.dependencies default-features future compat warning</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/aecb4083bde754155752f5d7d442b64eb7dc636f\"><code>aecb408</code></a>\nSort workspace dependencies</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1c675ab3a38e46df4e62465800970f8b20a2055d\"><code>1c675ab</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2678\">#2678</a>\nfrom rodoufu/workspaceDependencies</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/dd619630a337139424725697ccd9a9f7596a2d3a\"><code>dd61963</code></a>\nAdding workspace dependencies</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/111803ab0768d010c606f2fc0d0add12750d5eef\"><code>111803a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2673\">#2673</a>\nfrom Sky9x/msrv-badge</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/0024f74f34fbbdc44a7b22457faebe36c5cbe7f8\"><code>0024f74</code></a>\nUse shields.io's MSRV badges</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.195...v1.0.196\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.195&new-version=1.0.196)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-29T14:34:02Z",
          "tree_id": "a3c28b38c3bc8986656fe1856a387fb45d2c3d07",
          "url": "https://github.com/hasura/ndc-postgres/commit/7cddea3fb435fe6e315674bc0be093c32df5907e"
        },
        "date": 1706539345182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.919217,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.154237,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.99294418238447,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.49675286441689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2913872405071253,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.134871,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.64585795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.80330566322241,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.79569647421701,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6884765489565711,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 80.2581975,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.45570215000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.22041627939966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.404951036903697,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.545162387731499,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 78.778526,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.2724814,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 48.36725761024986,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.992243490481179,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.517767078721099,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 72.994848,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 98.78324819999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 45.34889510439774,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.028520023383869,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4344579423701328,
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
          "id": "ceae9bdac712083730b174f811c963d47ae20999",
          "message": "chore(deps): Bump serde_json from 1.0.111 to 1.0.112 (#268)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.111 to\n1.0.112.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.112</h2>\n<ul>\n<li>Improve formatting of &quot;invalid type&quot; error messages\ninvolving floats (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1107\">#1107</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/7fece969e3b480ec620419d65c2aeb08776bebcb\"><code>7fece96</code></a>\nRelease 1.0.112</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6a6d2bbd9e8b8bd72573b863f12a4ec991f33232\"><code>6a6d2bb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1107\">#1107</a>\nfrom serde-rs/unexpectedfloat</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/83d7bad54ba5db3a44198d6df0ff2e81621683fa\"><code>83d7bad</code></a>\nFormat f64 in error messages using ryu</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/107c2d1c42817f0d71f07a4d5b0ea2f29dbce8b8\"><code>107c2d1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1106\">#1106</a>\nfrom serde-rs/invalidvalue</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/62ca3e4c01c2e62cd5c2a32e9104f386e5ce7808\"><code>62ca3e4</code></a>\nHandle Unexpected::Unit in Error::invalid_value</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/296fafb8f32e8442ef8e4d5725c15ffca726b288\"><code>296fafb</code></a>\nFactor out JSON-specific Display impl for serde::de::Unexpected</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/e56cc696bd7c112e5dd4ccfa23d094c3a1c1c1ff\"><code>e56cc69</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1105\">#1105</a>\nfrom keienWang/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2909b0bac6bce0316ae5d7a62edc819c8b9d1173\"><code>2909b0b</code></a>\nfix: Correct spelling error</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6d44b9fac9269b4decf76acac5d68e8ec9d10c58\"><code>6d44b9f</code></a>\nIgnore unconditional_recursion clippy lint due to false positive</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.111...v1.0.112\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.111&new-version=1.0.112)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-29T15:44:54Z",
          "tree_id": "f31f63db661cbe3fe48ba5b39a344be054151fce",
          "url": "https://github.com/hasura/ndc-postgres/commit/ceae9bdac712083730b174f811c963d47ae20999"
        },
        "date": 1706543582274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.7439105,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 90.05376849999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.803137862222886,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.631958674936921,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28922619654911785,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.189137,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.0661252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.58658205171892,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.543107218096367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.70936991716802,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.06628749999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 105.152448,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.905307423389736,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.981076043672395,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5356544089134703,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.28356500000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.1423624,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.423223758509714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.842891141412267,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5148909880003215,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.3787865,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.85266175,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.44573096536116,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.988441594019513,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.404352921249795,
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
          "id": "96eef584a73472993b10b697cad6769531760d5d",
          "message": "CI: Merge the nix-build and deploy jobs. (#272)\n\n### What\n\nWe use `workflow_run` to trigger the \"deploy\" workflow after \"nix build\"\nhas completed. However, this only seems to work on branches; pushing\ntags does _not_ trigger a job using `workflow_run`.\n\n### How\n\nWe can work around this by merging the two jobs into a single workflow,\nand specifying the dependency chain there.",
          "timestamp": "2024-01-31T08:54:55Z",
          "tree_id": "cc6697f99d258a70ec7f90422bea8f523d48a9f8",
          "url": "https://github.com/hasura/ndc-postgres/commit/96eef584a73472993b10b697cad6769531760d5d"
        },
        "date": 1706691686099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.697525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.2672388,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.35454380665679,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.163098293399234,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2817226783937279,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.18511000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.94080104999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.26406426201347,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.516562515786326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6863501985703484,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.152006,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.2864214,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 46.61767592731143,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.326879282599897,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5326670174858464,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.33415249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.41393754999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.39867850251218,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.750137963180862,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5082733586905841,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.535063,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.886203,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.73102054424392,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.961664855588381,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4107513174114322,
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
          "id": "33d85d93af139b795d70be6c6c2a42263d5f4918",
          "message": "chore(deps): Bump indexmap from 2.1.0 to 2.2.1 (#269)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.1.0 to\n2.2.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<ul>\n<li>\n<p>2.2.1</p>\n<ul>\n<li>Corrected the signature of <code>RawOccupiedEntryMut::into_key(self)\n-&gt; &amp;'a mut K</code>,\nThis a breaking change from 2.2.0, but that version was published for\nless\nthan a day and has now been yanked.</li>\n</ul>\n</li>\n<li>\n<p>2.2.0</p>\n<ul>\n<li>\n<p>The new <code>IndexMap::get_index_entry</code> method finds an entry\nby its index for\nin-place manipulation.</p>\n</li>\n<li>\n<p>The <code>Keys</code> iterator now implements\n<code>Index&lt;usize&gt;</code> for quick access to the\nentry's key, compared to indexing the map to get the value.</p>\n</li>\n<li>\n<p>The new <code>IndexMap::splice</code> and\n<code>IndexSet::splice</code> methods will drain the\ngiven range as an iterator, and then replace that range with entries\nfrom\nan input iterator.</p>\n</li>\n<li>\n<p>The new trait <code>RawEntryApiV1</code> offers opt-in access to a\nraw entry API for\n<code>IndexMap</code>, corresponding to the unstable API on\n<code>HashSet</code> as of Rust 1.75.</p>\n</li>\n<li>\n<p>Many <code>IndexMap</code> and <code>IndexSet</code> methods have\nrelaxed their type constraints,\ne.g. removing <code>K: Hash</code> on methods that don't actually need\nto hash.</p>\n</li>\n<li>\n<p>Removal methods <code>remove</code>, <code>remove_entry</code>, and\n<code>take</code> are now deprecated\nin favor of their <code>shift_</code> or <code>swap_</code> prefixed\nvariants, which are more\nexplicit about their effect on the index and order of remaining items.\nThe deprecated methods will remain to guide drop-in replacements from\n<code>HashMap</code> and <code>HashSet</code> toward the prefixed\nmethods.</p>\n</li>\n</ul>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7264ce439e8727b78dd7f742ab61263760742a09\"><code>7264ce4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/304\">#304</a>\nfrom cuviper/raw-into_key</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/244bd814c20cc5c69549d3cf139ae7d5364e4e87\"><code>244bd81</code></a>\nFix <code>RawOccupiedEntryMut::into_key</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7107c4947de63392a49518c9c265b98c8b2f0725\"><code>7107c49</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/303\">#303</a>\nfrom cuviper/test-updates</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/34a7af7106642bfc376e74e8ba3b596b3d20a4fa\"><code>34a7af7</code></a>\nAllow <code>clippy::style</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/382a45c8856422c6889c2d32f3c9ce9ba22d2450\"><code>382a45c</code></a>\nUpgrade dev-dep itertools to 0.12</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/904689f084d520b143db05450c6797e837f3f89d\"><code>904689f</code></a>\nci: upgrade to actions/checkout@v4</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/405fa10bfe0b2c355f25c1e215cd4db7121aac43\"><code>405fa10</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/302\">#302</a>\nfrom cuviper/release-2.2.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/d84bf5e998130c6d833f526d46b2e18366b7fade\"><code>d84bf5e</code></a>\nRelease 2.2.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/9edb1a4f428ecf24099854ab5bfc30e9950e2973\"><code>9edb1a4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/300\">#300</a>\nfrom cuviper/raw_entry_v1</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/a1495fd5c5e3960d4355be33e6feee8f9e3764b4\"><code>a1495fd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/301\">#301</a>\nfrom cuviper/unstringify</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.1.0...2.2.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.1.0&new-version=2.2.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-31T10:07:04Z",
          "tree_id": "696effc48fe800f6777c72202501d92dd3815a47",
          "url": "https://github.com/hasura/ndc-postgres/commit/33d85d93af139b795d70be6c6c2a42263d5f4918"
        },
        "date": 1706696098786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.624632500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.56646015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.11590237236838,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.778832326261018,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28845501683146385,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 99.6708225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.20304950000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.1209739972206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.930428127548225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.700197338068705,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 81.3998245,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 108.05538285000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 50.04850619098952,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.2026162524237165,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5545739190072074,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 79.3679175,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.04828429999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 48.94986441776252,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.404766640769417,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5105104444715416,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 73.316225,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 89.422192,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 44.64271872613979,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.373858177151291,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.414396849116051,
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
          "id": "01296fb2a9f324ec48bf5ca49bffff2f320dd3ca",
          "message": "Prepare the changelog for v0.3.0. (#273)",
          "timestamp": "2024-01-31T10:44:22Z",
          "tree_id": "1f452c26dbab2be9c03cc0f2f332978ed818da06",
          "url": "https://github.com/hasura/ndc-postgres/commit/01296fb2a9f324ec48bf5ca49bffff2f320dd3ca"
        },
        "date": 1706698352471,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.646806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 86.69204679999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.384621586334465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.515220614786504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2883335891377302,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.4065635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.41407155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.21228301400688,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.802341026336471,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6848393800552437,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 77.5847,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.65042044999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.836525136146406,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.718199161429112,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5237617596904395,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.87869,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.1435994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.39549732992557,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.387636333384727,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5086433422244885,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.6121695,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.312664,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.03905871623332,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.751582195679326,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4071065102072148,
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
          "id": "c11ef5c6c8a5783ae5ebec631966f37511150cd6",
          "message": "Only get types and procedures from unqualified schemas (#271)\n\n### What\n\nIn order to be able to unambiguously refer to types and procedures (i.e\nto avoid an issue like\nhttps://github.com/hasura/graphql-engine/issues/10100) we want to be\nsure that we track the schema types and procedures are defined in,\nsimilar to how we do tables.\n\nThis PR implements a minimal first step on the way to this, by simply\nonly tracking types and procedures defined in schemas appearing in a new\n`unqualifiedSchemasForTypesAndProcedures` configuration option.\n\nIt is then up to a follow-up PR to implement schema name prefixing.\n\n(Small aside: As an auxiliary improvement, thi PR introduces the use of\nthe `regclass` etc. types to refer to catalog table entries instead of\nhardcoding oids. Incidentally this fixes fetching of table and column\ncomments on Cockroach.)\n\n### How\n\nWe add a new configuration option field\n`unqualifiedSchemasForTypesAndProcedures` that defaults to\n`[\"public\",\"pg_catalog\",\"tiger\"]`. During introspection we only look in\nthese schemas for types and procedures.\n\nFor consistency we also rename `unqualifiedSchemas` to\n`unqualifiedSchemasForTables`. In order to make this change conservative\nwe still recognize `unqualifiedSchemas` in the API schema and json\nparsers, but we will only ever output `unqualifiedSchemasForTables` from\nthe configuration server.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-01-31T15:43:50Z",
          "tree_id": "093d717ed33da881c6f6043b0cd04fc9d7241dd8",
          "url": "https://github.com/hasura/ndc-postgres/commit/c11ef5c6c8a5783ae5ebec631966f37511150cd6"
        },
        "date": 1706716332429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.739542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.09498299999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.617104897708877,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.783400812142737,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29049251675115084,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.053469,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.50562144999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.9391965129197,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.812555110316104,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6834643510237766,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 77.421435,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.31794335,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.741958516146944,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.530116741407504,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5302640800157155,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.4527875,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.54392214999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.7024929654556,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.484111048129385,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5065099517160767,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 72.119716,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 98.34759809999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 44.82159510532611,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.925572297826051,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.43354130290540827,
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
          "id": "9ed89f7d4fb74bd06019a83974994a96f878d0b3",
          "message": "Do not use `workflow_run` for end-to-end tests either. (#274)\n\n### What\n\nThese are no longer running because I changed the name of the workflow.\n\nThis upset me, as I would expect a warning, at least. Instead I have no\nfeedback. This has convinced me that `workflow_run` is a bad idea.\n\n### How\n\nI am merging the E2E test job into the \"ship\" workflow so that we can\nuse job chaining instead, which seems less brittle.",
          "timestamp": "2024-02-01T08:55:09Z",
          "tree_id": "fc7ec59bd07c53357568361f10ecafef71b49f73",
          "url": "https://github.com/hasura/ndc-postgres/commit/9ed89f7d4fb74bd06019a83974994a96f878d0b3"
        },
        "date": 1706778098545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.763805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 86.551228,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.10105813158853,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.179490197487063,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2822235179085272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.59803450000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.58047475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.30115600848121,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.806994465786417,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6848084828447282,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 75.363101,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 100.27964699999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 46.241420255936255,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4794010537553035,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5195500640416428,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 74.301877,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.0912116,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 45.70572072185705,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.436393632961952,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5037756415918054,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.519135,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.83341,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.50291944904858,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.323395632032337,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3993480721869505,
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
          "id": "33d6150457bd98f472ab2e1279288439553bf7d0",
          "message": "Revert the connector reference for postgres-config-server E2E tests. (#275)\n\n### What\n\nI was a bit over-eager and overwrote this with the Docker tag. The\nconfig server tests do not need the Docker tag, they need the SHA, to\nclone the repository correctly.\n\n### How\n\nReverted a line.",
          "timestamp": "2024-02-01T11:35:30Z",
          "tree_id": "3f6c72c8f31a2041664fd83be691aa7ee4181360",
          "url": "https://github.com/hasura/ndc-postgres/commit/33d6150457bd98f472ab2e1279288439553bf7d0"
        },
        "date": 1706787731225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.564820499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 88.241126,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.501757654005733,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.498126270932776,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28304780593663686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.415337,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.49251499999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.18334567275371,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.9470424901327945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7207136138446588,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.056596,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.90147879999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.05576502736628,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.003936794111063,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.553286733216404,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.255306,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.04250299999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.725774109093884,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.46515843019349,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5271138092401607,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 67.745078,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.4029144,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.48263275698986,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.4848704402489545,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40695998039367626,
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
          "id": "ccf71ed27251cefcb17578470cc2fb632e368bd6",
          "message": "chore(deps): Bump arduino/setup-protoc from 2 to 3 (#276)\n\nBumps [arduino/setup-protoc](https://github.com/arduino/setup-protoc)\nfrom 2 to 3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/arduino/setup-protoc/releases\">arduino/setup-protoc's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v3.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Correct <code>convetion</code> typo in README by <a\nhref=\"https://github.com/nixpanic\"><code>@​nixpanic</code></a> in <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/91\">arduino/setup-protoc#91</a></li>\n<li>Bump <code>@​babel/traverse</code> from 7.22.1 to 7.23.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/93\">arduino/setup-protoc#93</a></li>\n<li>Upgrade to node 20 by <a\nhref=\"https://github.com/alessio-perugini\"><code>@​alessio-perugini</code></a>\nin <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/95\">arduino/setup-protoc#95</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/nixpanic\"><code>@​nixpanic</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/91\">arduino/setup-protoc#91</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/arduino/setup-protoc/compare/v2.1.0...v3.0.0\">https://github.com/arduino/setup-protoc/compare/v2.1.0...v3.0.0</a></p>\n<h2>v2.1.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Expose <code>path</code> and <code>version</code> in\n<code>outputs</code> by <a\nhref=\"https://github.com/sebastienvermeille\"><code>@​sebastienvermeille</code></a>\nin <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/89\">arduino/setup-protoc#89</a></li>\n<li>Bump semver from 7.5.1 to 7.5.2 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/87\">arduino/setup-protoc#87</a></li>\n<li>bump semver to 7.5.3 by <a\nhref=\"https://github.com/alessio-perugini\"><code>@​alessio-perugini</code></a>\nin <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/90\">arduino/setup-protoc#90</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/sebastienvermeille\"><code>@​sebastienvermeille</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/pull/89\">arduino/setup-protoc#89</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/arduino/setup-protoc/compare/v2.0.0...v2.1.0\">https://github.com/arduino/setup-protoc/compare/v2.0.0...v2.1.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/arduino/setup-protoc/commit/c65c819552d16ad3c9b72d9dfd5ba5237b9c906b\"><code>c65c819</code></a>\nUpgrade to node 20 (<a\nhref=\"https://redirect.github.com/arduino/setup-protoc/issues/95\">#95</a>)</li>\n<li><a\nhref=\"https://github.com/arduino/setup-protoc/commit/52a53b4e2d968277c5c749dac537d0b14a6f5272\"><code>52a53b4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/arduino/setup-protoc/issues/93\">#93</a>\nfrom arduino/dependabot/npm_and_yarn/babel/traverse-7....</li>\n<li><a\nhref=\"https://github.com/arduino/setup-protoc/commit/cf7ab7fe8696fefcafb8135834d49955e824a56b\"><code>cf7ab7f</code></a>\nBump <code>@​babel/traverse</code> from 7.22.1 to 7.23.2</li>\n<li><a\nhref=\"https://github.com/arduino/setup-protoc/commit/e2995ba278e6b4bca9bac954e72667db122abed1\"><code>e2995ba</code></a>\nCorrect <code>convetion</code> typo in README (<a\nhref=\"https://redirect.github.com/arduino/setup-protoc/issues/91\">#91</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/arduino/setup-protoc/compare/v2...v3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=arduino/setup-protoc&package-manager=github_actions&previous-version=2&new-version=3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-05T19:02:04Z",
          "tree_id": "5871f9812e86fdfcb98606031baf6c4045c2b155",
          "url": "https://github.com/hasura/ndc-postgres/commit/ccf71ed27251cefcb17578470cc2fb632e368bd6"
        },
        "date": 1707160112368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.023036000000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 90.2986045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.829377057613605,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.589143683394177,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2845742790221005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.6289675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.63982835000004,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.50044160745704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.935297587265438,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7182864583169102,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.807914,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.559651,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.757546504416425,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.149943518920367,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5349952828780358,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.9887065,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.36683909999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.5418862420555,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.976773390671873,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5217275545454829,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.705514,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.20263515,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.08301476806198,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.65339885144234,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41544913049570853,
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
          "id": "fc892323b92963230ea3d3bd8437201ba5927732",
          "message": "chore(deps): Bump serde_json from 1.0.112 to 1.0.113 (#277)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.112 to\n1.0.113.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.113</h2>\n<ul>\n<li>Add <code>swap_remove</code> and <code>shift_remove</code> methods\non Map (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1109\">#1109</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/09d865b34b9701be52764dc9bf571b1a16e9d3dc\"><code>09d865b</code></a>\nRelease 1.0.113</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5aeab4eaf69d7959f013f8081865c264d6c00551\"><code>5aeab4e</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1109\">#1109</a>\nfrom serde-rs/remove</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ca3c2ca3696cab79b8b279be7569ee1647250f1e\"><code>ca3c2ca</code></a>\nAdd swap_remove and shift_remove methods on Map</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.112...v1.0.113\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.112&new-version=1.0.113)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-05T19:02:07Z",
          "tree_id": "29d447c48c2377d40838ef5bc0e846be737cb6c8",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc892323b92963230ea3d3bd8437201ba5927732"
        },
        "date": 1707160210527,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.4818665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.57486025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.696084508397053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.417803699617703,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2837406073027296,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.366593,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.1173528,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.24551734895876,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.077006526596392,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7151090555610806,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.411001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 105.6742745,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.36846430217949,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.102436062362557,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5378102105946045,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.76097,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.5033204,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.712328369296536,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.7083990848036095,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.514177947143086,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.908357,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.63011489999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.27203194950472,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.80165799080023,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.409572369478594,
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
          "id": "ac168779a60526330cad18a2eed7fbb4e8dd680f",
          "message": "chore(deps): Bump tokio from 1.35.1 to 1.36.0 (#281)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.35.1 to 1.36.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.36.0</h2>\n<h1>1.36.0 (February 2nd, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>io: add <code>tokio::io::Join</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6220\">#6220</a>)</li>\n<li>io: implement <code>AsyncWrite</code> for <code>Empty</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6235\">#6235</a>)</li>\n<li>net: add support for anonymous unix pipes (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6127\">#6127</a>)</li>\n<li>net: add <code>UnixSocket</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6290\">#6290</a>)</li>\n<li>net: expose keepalive option on <code>TcpSocket</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6311\">#6311</a>)</li>\n<li>sync: add <code>{Receiver,UnboundedReceiver}::poll_recv_many</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6236\">#6236</a>)</li>\n<li>sync: add <code>Sender::{try_,}reserve_many</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6205\">#6205</a>)</li>\n<li>sync: add <code>watch::Receiver::mark_unchanged</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6252\">#6252</a>)</li>\n<li>task: add <code>JoinSet::try_join_next</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6280\">#6280</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>io: make <code>copy</code> cooperative (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6265\">#6265</a>)</li>\n<li>io: make <code>repeat</code> and <code>sink</code> cooperative (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6254\">#6254</a>)</li>\n<li>io: simplify check for empty slice (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6293\">#6293</a>)</li>\n<li>process: use pidfd on Linux when available (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6152\">#6152</a>)</li>\n<li>sync: use AtomicBool in broadcast channel future (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6298\">#6298</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>io: clarify <code>clear_ready</code> docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6304\">#6304</a>)</li>\n<li>net: document that <code>*Fd</code> traits on <code>TcpSocket</code>\nare unix-only (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6294\">#6294</a>)</li>\n<li>sync: document FIFO behavior of <code>tokio::sync::Mutex</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6279\">#6279</a>)</li>\n<li>chore: typographic improvements (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6262\">#6262</a>)</li>\n<li>runtime: remove obsolete comment (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6303\">#6303</a>)</li>\n<li>task: fix typo (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6261\">#6261</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6220\">#6220</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6220\">tokio-rs/tokio#6220</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6235\">#6235</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6235\">tokio-rs/tokio#6235</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6127\">#6127</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6127\">tokio-rs/tokio#6127</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6290\">#6290</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6290\">tokio-rs/tokio#6290</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6311\">#6311</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6311\">tokio-rs/tokio#6311</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6236\">#6236</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6236\">tokio-rs/tokio#6236</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6205\">#6205</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6205\">tokio-rs/tokio#6205</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6252\">#6252</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6252\">tokio-rs/tokio#6252</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6280\">#6280</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6280\">tokio-rs/tokio#6280</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6265\">#6265</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6265\">tokio-rs/tokio#6265</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6254\">#6254</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6254\">tokio-rs/tokio#6254</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6293\">#6293</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6293\">tokio-rs/tokio#6293</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6238\">#6238</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6238\">tokio-rs/tokio#6238</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6152\">#6152</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6152\">tokio-rs/tokio#6152</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6298\">#6298</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6298\">tokio-rs/tokio#6298</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6262\">#6262</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6262\">tokio-rs/tokio#6262</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6303\">#6303</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6303\">tokio-rs/tokio#6303</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6261\">#6261</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6261\">tokio-rs/tokio#6261</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/eaf81ed324e7cca0fa9b497a6747746da37eea93\"><code>eaf81ed</code></a>\nchore: prepare Tokio v1.36.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6312\">#6312</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/53f9e5a357c7bc30b01c738d325b4f4a9acc32a6\"><code>53f9e5a</code></a>\nci: make sure dictionary words are sorted and unique (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6316\">#6316</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/9077762545da312c3527ba45b0bba37ba4b4fb7f\"><code>9077762</code></a>\nnet: expose keepalive option on <code>TcpSocket</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6311\">#6311</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/131e7b4e49c8849298ba54b4e0c99f4b81d869e3\"><code>131e7b4</code></a>\nci: add spellchecking (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6297\">#6297</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e53b92a9939565edb33575fff296804279e5e419\"><code>e53b92a</code></a>\nio: clarify <code>clear_ready</code> docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6304\">#6304</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/753613206566d3e818b8a6e2466121f0f18c70f4\"><code>7536132</code></a>\nsync: use AtomicBool in broadcast channel future (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6298\">#6298</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/b6d0c9091d4f3c6a90ad8764d3c65f8480a48676\"><code>b6d0c90</code></a>\nmacros: fix trait_method breaking change detection (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6308\">#6308</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4846959e8a534cf2aff63f8613e5f69a7d2ce5f8\"><code>4846959</code></a>\nruntime: remove obsolete comment (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6303\">#6303</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ec3038357f8dbbae0ab4daf55ff27937ad42abb2\"><code>ec30383</code></a>\nnet: add <code>UnixSocket</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6290\">#6290</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/f80bbec28ff790d15481a29583c9b778bf0cc40e\"><code>f80bbec</code></a>\nio: simplify check for empty slice (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6293\">#6293</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.35.1...tokio-1.36.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.35.1&new-version=1.36.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-05T19:02:11Z",
          "tree_id": "8e6f63daa27cec572ef33178826f9a2755579576",
          "url": "https://github.com/hasura/ndc-postgres/commit/ac168779a60526330cad18a2eed7fbb4e8dd680f"
        },
        "date": 1707160485074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.739824,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.23200539999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.76988301316707,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.617486094012772,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29087320699021946,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.466757,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.3265332,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.31353935226021,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.155088041981031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7131036738145917,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.291894,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.095801,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.00398203512336,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.322214609893365,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.547450026811048,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.298772,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.07644054999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.91375166778893,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.902090785468367,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5233170797839571,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.541507,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.4636989,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.03523031092805,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.00347691200286,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40965464449972344,
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
          "id": "029c1e793ac7624729a99809fb39465def86dce7",
          "message": "Improvements to the Nix shell. (#282)\n\n### What\n\n1. Remove the `inputsFrom` clause, because we want to be able to use the\nNix shell to develop even when the binary is not currently building.\n2. Split runtime inputs out into `buildInputs`.\n3. Split large performance-testing tools out into a separate shell,\ncalled \"perf\".\n4. Add OpenSSL as an explicit dependency.",
          "timestamp": "2024-02-06T16:26:36Z",
          "tree_id": "cc85d1997c19879d0b217b860ef1d66a04dd29bf",
          "url": "https://github.com/hasura/ndc-postgres/commit/029c1e793ac7624729a99809fb39465def86dce7"
        },
        "date": 1707237177016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.281852,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.33388395000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.093132142435113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.40532838749203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28754341526959815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.818923,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.2189388,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 59.2309647810818,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.16465560418127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7253620894144555,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 80.1311605,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.7616789,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.16882167305788,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.317023799000204,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5423561126681662,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.17456849999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.307764,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.58879703470825,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.480562577276487,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.509060916964965,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.724712,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.61619559999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.66739645037991,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.890945300774639,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4088384047734816,
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
          "id": "76e5490f4f99a3d40511f6379cd2a966b23b76dd",
          "message": "Use the auth hook image rather than building it, for testing. (#286)\n\n### What\n\nWe build an auth hook for testing in CI; we can just reuse it here.\n\n### How\n\nTrivially.",
          "timestamp": "2024-02-12T14:44:51Z",
          "tree_id": "5101885a8d8d4c9171361b3e99c18cea9c7284a0",
          "url": "https://github.com/hasura/ndc-postgres/commit/76e5490f4f99a3d40511f6379cd2a966b23b76dd"
        },
        "date": 1707749481308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.730023,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.92932,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.25021689803949,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.544588825461062,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2916250598798082,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.673832,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.9234314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.6912212600854,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.50100563356105,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6848075262163316,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 77.788055,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.785401,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.07028780569573,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.821710197104181,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5445726181904456,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.070757,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.884728,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.08243867382714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.700759171393855,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5135125321076695,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.74303,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.6591274,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.37121646748506,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.495388892669162,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4200129713081585,
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
          "id": "b164b7aa544b53b666496e46ad66730a6629312f",
          "message": "Nix: Fix the build inputs for the shell and app. (#285)\n\nThis makes a few changes to the Nix flake to get things building on my\nmachine.\n\n1. On macOS, add `CoreFoundation` to the list of dependencies.\n2. Adds `strictDeps = true` to the package, which means we need to add\n`openssl.dev` (and `pkg-config`) to `nativeBuildInputs` as they're\nrequired at build-time.\n3. Move `openssl` and `protobuf` to `buildInputs` as they're required at\nruntime.\n4. Reuse inputs from the default package in the shell.\n5. Hide the `perf` shell from macOS so `nix flake check` works.\n\nThe last point is partially undoing a change I made earlier, where the\nshell brought in inputs from all flake checks. This was way too broad;\nthis narrows it a lot.",
          "timestamp": "2024-02-12T15:26:48Z",
          "tree_id": "68cdfbe29ec4ede24419420269cc8f635354ea36",
          "url": "https://github.com/hasura/ndc-postgres/commit/b164b7aa544b53b666496e46ad66730a6629312f"
        },
        "date": 1707751990611,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.2929505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.71349814999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.50486483338788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.548478495191308,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2916442635519891,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.716429,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 148.12573475,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 60.19675641228427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.21670459336535,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7024115865861237,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.09291300000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.13641614999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.38083300299292,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.224893302652134,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5672797077796021,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.27926500000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.54964009999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.9086832229763,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.035327729059169,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5086319534391827,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.9015635,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.26556744999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.71084242890708,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.079390530702597,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41421662694118816,
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
          "id": "28393efa4020c9a95d428c85cde4bceb47f18d27",
          "message": "Pull out a configuration library. (#289)\n\n### What\n\nWe require a configuration library so that we can re-use configuration\ntypes and functions in both a CLI plugin _and_ a server-side connector\nbuild service.\n\nThis has been done with minimal effort.\n\nFurther work is required to minimize its surface area. Specifically, I\nbelieve we should:\n\n1. reduce the number of crates depending on this one,\n2. remove the dependency from \"ndc-postgres-configuration\" on\n\"query-engine-sql\" (it's only used to pull in `IsolationLevel`), and\n3. refactor to reduce the number of exposed types and functions as much\nas possible.\n\nI have not done any of these things in this changeset to make it easier\nto review, and because I didn't want reviews of this extraction to get\nbogged down in whether we should do the above or not.\n\n### How\n\nI moved `ndc-postgres/src/configuration.rs` and everything in\n`ndc-postgres/src/configuration` to their own crate, imaginatively named\n\"ndc-postgres-configuration\".\n\nI then re-exported what was necessary from `lib.rs`, and changed imports\nin several places.",
          "timestamp": "2024-02-12T17:46:10Z",
          "tree_id": "729711de5c225d4f92842eb2796a3a2e6e17b360",
          "url": "https://github.com/hasura/ndc-postgres/commit/28393efa4020c9a95d428c85cde4bceb47f18d27"
        },
        "date": 1707760403865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.2706565,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.31946780000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.454860657119216,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.272576525126777,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28415594938499433,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.240696,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.6060234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.17121911473133,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.336396499460136,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6757073901266955,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.801407,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.19585259999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.34953320472246,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.846884081936466,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5257124880753664,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 75.067133,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 97.08567399999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.01375612270468,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.618075287975529,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5037227827892816,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.802706,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.0129496,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.13002727198235,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.65335743746909,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4138189976174567,
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
          "id": "ca3875232b901bc1130e2d6292627799d864ed4f",
          "message": "chore(deps): Bump indexmap from 2.2.1 to 2.2.3 (#288)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.1 to\n2.2.3.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.2.3</h2>\n<ul>\n<li>Added <code>move_index</code> and <code>swap_indices</code> methods\nto <code>IndexedEntry</code>,\n<code>OccupiedEntry</code>, and <code>RawOccupiedEntryMut</code>,\nfunctioning like the existing\nmethods on <code>IndexMap</code>.</li>\n<li>Added <code>shift_insert</code> methods on <code>VacantEntry</code>\nand <code>RawVacantEntryMut</code>, as\nwell as <code>shift_insert_hashed_nocheck</code> on the latter, to\ninsert the new entry\nat a particular index.</li>\n<li>Added <code>shift_insert</code> methods on <code>IndexMap</code> and\n<code>IndexSet</code> to insert a new\nentry at a particular index, or else move an existing entry there.</li>\n</ul>\n<h2>2.2.2</h2>\n<ul>\n<li>Added indexing methods to raw entries:\n<code>RawEntryBuilder::from_hash_full</code>,\n<code>RawEntryBuilder::index_from_hash</code>, and\n<code>RawEntryMut::index</code>.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/406bbdb8ac6239d8e616a814a4db61502333d9c0\"><code>406bbdb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/312\">#312</a>\nfrom cuviper/release-2.2.3</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3b79b87ac1e72a796b6fd63b57f6eaf2fdd383f6\"><code>3b79b87</code></a>\nRelease 2.2.3</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8e6753c9b40b30b94e5b5a5bd79be650abe40b0a\"><code>8e6753c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/310\">#310</a>\nfrom cuviper/shift_insert</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e3ff25b94c27e1035956dacd29a2dd4775339ab5\"><code>e3ff25b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/311\">#311</a>\nfrom cuviper/test_debug</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/2a33977a155826904eaecef251f91ac5c566f359\"><code>2a33977</code></a>\nFully mask the <code>&quot;test_debug&quot;</code> code from normal\nbuilds</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/8c206ef7922d8d171fdbb1087c5935e55bb6fb1d\"><code>8c206ef</code></a>\nTest shift_insert that moves</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/5debe7378d0289997b2092c9f685c6f64e20b880\"><code>5debe73</code></a>\nIndexSet::swap_indices is O(1) too</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4572493c53ecb74b37d6d3aed53007f3322a9329\"><code>4572493</code></a>\nAdd <code>IndexSet::shift_insert</code> based on map's method</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3b217ca498d037087c86d72203753ac650fddc9f\"><code>3b217ca</code></a>\nAdd <code>IndexMap::shift_insert</code> based on <code>Entry</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/209e3e16cf8f007a8a0e7de871105f4cba50a07d\"><code>209e3e1</code></a>\nDocument equivalence of move_index/swap_indices</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.1...2.2.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.1&new-version=2.2.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T17:47:39Z",
          "tree_id": "2f553198713de59cfaf605b20b01c9cec1e6e26c",
          "url": "https://github.com/hasura/ndc-postgres/commit/ca3875232b901bc1130e2d6292627799d864ed4f"
        },
        "date": 1707760767561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.547235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.52067114999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.056582461925977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.840496071382539,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28623945862194977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.549413,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.586389,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.873976481715424,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.929770886584997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.7199780470892957,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.496689,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.51605399999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.269182153411215,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.667920303754791,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5315556299559144,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.346769,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.5407305,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.10610469531799,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.614802232452156,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5067248213471414,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 69.7017845,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.351502,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.48389674524672,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.026584053419448,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41429171935349535,
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
          "id": "4283969222a796fc10fbfc5c512ccd175a08124d",
          "message": "chore(deps): Bump thiserror from 1.0.56 to 1.0.57 (#287)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.56 to\n1.0.57.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.57</h2>\n<ul>\n<li>Generate more efficient <code>Display</code> impl for error message\nwhich do not contain any interpolated value (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/286\">#286</a>,\nthanks <a\nhref=\"https://github.com/nyurik\"><code>@​nyurik</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/1d106b169c1ba328bcd64d70d06687413906d751\"><code>1d106b1</code></a>\nRelease 1.0.57</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/8a5c4d1b76eaa667a71dfaeb1373bca36fda4e78\"><code>8a5c4d1</code></a>\nUse write_str when args only consists of trailing comma</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f790bee2a401d71ac6e5492c7d1f8bb3a18a0e1c\"><code>f790bee</code></a>\nPhrase flag in terms of whether core::fmt machinery is required</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d43b759e3aa02d54dcad59c5eadfc78a8e96536f\"><code>d43b759</code></a>\nIgnore needless_raw_string_hashes pedantic clippy lint in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d09c4182955b459a4699adaf9b045077308a1d1a\"><code>d09c418</code></a>\nTouch up PR 286</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/097251d2f538c123c850e1873cd1e0172bf4c151\"><code>097251d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/286\">#286</a>\nfrom nyurik/litstr</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/cd79876fe8f2eead51a1d9efa0b0f42467b9bef8\"><code>cd79876</code></a>\noptimize by avoiding second fmt.value() call</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/d7e738e1d8e339d35a1ea0c4c252b055c66c3526\"><code>d7e738e</code></a>\nOptimize simple literals for Display::fmt</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0717de3f507293f6faa7a32d987febb5c39a7048\"><code>0717de3</code></a>\nUpdate ui test suite to nightly-2024-02-08</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/c7c75470ec80c253a197b365f4571569ab53a8d9\"><code>c7c7547</code></a>\nUpdate ui test suite to nightly-2024-01-31</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.56...1.0.57\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.56&new-version=1.0.57)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-02-12T19:05:22Z",
          "tree_id": "2dd06042f7eeaa350bccf2ae35b68ffc4be114b6",
          "url": "https://github.com/hasura/ndc-postgres/commit/4283969222a796fc10fbfc5c512ccd175a08124d"
        },
        "date": 1707765106326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.131455,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.38893739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.85774364111598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 12.358832128927425,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2862974635447131,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.731534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.0309016,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 58.78071913563233,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 5.11938698170929,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6984006535731334,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 78.930177,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.7528725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 48.71160368379552,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.216538377673025,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5453569512151963,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.11606,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.62680519999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 47.02858265408709,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.512639359301502,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5061031338084435,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 70.399926,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.0544946,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.27767399209111,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.005521383735598,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4128073382224403,
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
          "id": "e1e0ca4f217524b28d9528ceca226e2bba118b68",
          "message": "Capture more/prettier information in translation snapshot tests. (#290)\n\n### What\n\nTwo things:\n\n1. Always capture the pre- and post-query statements.\n2. Pretty-print the query parameters, to make them more readable when\nthey're large.\n\nI think this makes the test snapshots a lot clearer.\n\n### How\n\n1. Remove a couple of `if` blocks.\n2. Convert a vector of pairs to a `BTreeMap` (so it's sorted), and add a\n`#`.",
          "timestamp": "2024-02-12T22:53:15Z",
          "tree_id": "edeaeeb6a6e14fd7091e68b7cef6416c065a7ff4",
          "url": "https://github.com/hasura/ndc-postgres/commit/e1e0ca4f217524b28d9528ceca226e2bba118b68"
        },
        "date": 1707778835109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.335228,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.27804,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.88180571760768,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.971932545119497,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28315351776984987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.2551335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.41694649999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.30615277373912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.473956872044553,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6667180073880171,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 76.653843,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.2202558,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 47.234659819138194,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.690318114511321,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5204670469751886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 76.29607250000001,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 101.90648614999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 46.895292517535424,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.168709301080426,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5162251770006184,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 68.7573195,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.6677435,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 42.31364553668175,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 6.564153121754671,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4144340525534445,
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
          "id": "bb473f300e56e92c8c10a33d1bc6d028e4a3652a",
          "message": "Break dependencies through copying and pasting. (#292)\n\n### What\n\n`ndc-postgres-configuration` had a dependency on `query-engine-sql`\nsimply to use the `IsolationLevel` enum. This dependency is otherwise\nunnecessary and quite large.\n\n### How\n\nI have copied this enum into the configuration so that we can avoid this\nlarge dependency.\n\nOf course, now we have two, so I've added a function inside the\nconnector crate to convert from one to the other.\n\nI have also improved the OpenAPI documentation on the `IsolationLevel`\nenum somewhat.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-02-13T09:50:55Z",
          "tree_id": "62024082e19ef614814d0637c34d28b199c4bc80",
          "url": "https://github.com/hasura/ndc-postgres/commit/bb473f300e56e92c8c10a33d1bc6d028e4a3652a"
        },
        "date": 1707818270367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.0460815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.00141604999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.424423197821472,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.800691646206925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28509378838942323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.358525,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.83336849999986,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.38159074597801,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 4.526273754171513,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6781451811731288,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 79.41198399999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 109.9651695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 49.3299722329675,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.830766548558721,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5385716867017254,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 78.246575,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 98.99767194999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 48.167283632623565,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 7.127159631823488,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5178852604451577,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 71.361069,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.4178314,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 43.381577831265986,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 7.276014805078091,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.412560017192753,
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
          "id": "35b1e854f09b383383c6aa7b15f6839f42c56b0c",
          "message": "Borrow more when constructing `RuntimeConfiguration`. (#293)\n\n### What\n\nThe documentation for `RuntimeConfiguration` states that it borrows\nwhenever possible, which was false. I have made some changes to borrow\n(or copy, if copying is cheap) all fields.\n\n### How\n\nI introduced the `'request` lifetime and annotated fields with it. The\nmetadata might be borrowed, or it might be converted from a v1 metadata,\nso this is wrapped in a `Cow` to abstract over this.\n\nWhen possible, we now pass around a `RuntimeConfiguration` by value\nrather than by reference.\n\nI also added `Copy` to `MutationsVersion` so that we can freely pass it\naround without having to worry about borrowing. `IsolationLevel` already\nimplements `Copy`.",
          "timestamp": "2024-02-13T10:49:44Z",
          "tree_id": "dfa3d4b4cbe024e8d80050370448802c47f1e07b",
          "url": "https://github.com/hasura/ndc-postgres/commit/35b1e854f09b383383c6aa7b15f6839f42c56b0c"
        },
        "date": 1707821718144,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 46.6839755,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.38470319999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.24931882310033,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 11.601156501566777,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2931062555815947,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.265426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.63275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.44417912493973,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.563041682236012,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6004361127549367,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 73.5361035,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 106.15675055,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 45.09511879583094,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.9767397973635212,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.5318001801807326,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 70.221442,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 100.06202899999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 43.07934097990819,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.066054499162746,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.498169150324113,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.5608995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.99846775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.583363964430276,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.050636568072193,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.44785814293170406,
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
          "id": "6ee371e7b9bc92cc4094260d56f6be61c2bc6390",
          "message": "CI: Cap the benchmark history in charts to 50 items. (#294)\n\n### What\n\nEach data point on the benchmark charts is so close to the next one it's\nhard to hover over.\n\nIn addition, a drastic change isn't even really visible until it's been\na few commits.\n\n### How\n\nWe cap the maximum items in each chart to 50.",
          "timestamp": "2024-02-14T08:17:40Z",
          "tree_id": "9dd016d0971de119e120b3febfbf83dca1e43a4b",
          "url": "https://github.com/hasura/ndc-postgres/commit/6ee371e7b9bc92cc4094260d56f6be61c2bc6390"
        },
        "date": 1707898974214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 45.818492,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.8904952,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.704663641810047,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.344134207969244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28920326769081384,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.675575,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.2552679,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.583362166841894,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2620380377665654,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6203285216561526,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.504132,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 104.18545125,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.84791022585978,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.5903018941611506,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4871185146346281,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.97876,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.85374469999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.96110599069936,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.517697631375732,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5033531587700087,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.1308145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.10267985,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.189324928329825,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.133029257713737,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4431779279389012,
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
          "id": "121ec330ea3530a63f2cb3f796414f15df35a534",
          "message": "Replace configuration with a new version, identical to v2. (#295)\n\n### What\n\nThis introduces configuration version 3, and removes versions 1 and 2.\n\nThis is most definitely a breaking change, and we're not done. Future\nchanges will tear this apart and rebuild it, but I wanted to make this\npart easier to review.\n\n### How\n\nI did this in a few steps to make sure I didn't break anything.\n\n1. I pulled out some of the lower-level configuration types to their own\nfiles.\n2. Next, I copied the remaining shared code from v1 to v2 so there were\nno cross-dependencies.\n3. Then I copied v2 to v3, and modified all the tests to use a v3 config\n(identical to v2 except the `\"version\"` field).\n4. Finally, I removed v1 and v2.",
          "timestamp": "2024-02-14T10:21:35Z",
          "tree_id": "f26f2c874002a1985b9b6fdfa6debac54d671ff5",
          "url": "https://github.com/hasura/ndc-postgres/commit/121ec330ea3530a63f2cb3f796414f15df35a534"
        },
        "date": 1707906404732,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 44.219173,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.8792189,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 22.102434325261225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.98101280899596,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28916045270330304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.517033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.25938100000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.71094254718273,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.741555552516445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6322884530113151,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.87046749999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 102.0064915,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.55667141929267,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 3.842233031064083,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.49575720303180737,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 69.324408,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.1585115,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.63560787787496,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.510036987527393,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.5134699255277125,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.796324,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.43017959999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.1295919534433,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.911188875525404,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4266464236661836,
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
          "id": "553ad47a9d1b2959c9a93ad6bdae1d1a207e5d23",
          "message": "update ndc-spec to 0.1.0-rc14 (#283)\n\n- depends on: https://github.com/hasura/ndc-hub/pull/93\n- todo: add changelog entry\n\n### What\n\nWe are updating connector to support the latest ndc-connector spec\n(0.1.0-rc14).\nWhile fixing some breaking changes, such as renaming `where` to\n`predicate`, we also support new capabilities:\n\n1. Explaining mutations via the `/mutation/explain` endpoint\n2. Supporting filtering using `in` by columns and variables\n\n### How\n\n1. Since a mutation request may contain multiple mutation operations,\nthe explain response will contain a field named `<operation_name> SQL\nMutation` and a field named `<operation_name> Execution Plan` for each\noperation.\n2. To filter in column or variable, we need to compare against a\nsubquery of the shape `(select value from unnest(<column-or-variable>)\nas table(value))`.",
          "timestamp": "2024-02-14T11:29:13Z",
          "tree_id": "c2129a0c523a8f0cb419939078631d35c0d1367d",
          "url": "https://github.com/hasura/ndc-postgres/commit/553ad47a9d1b2959c9a93ad6bdae1d1a207e5d23"
        },
        "date": 1707910617659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.725432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 87.14889199999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.23548273048279,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.65738650631749,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2788114231721407,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.2229945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.03568564999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.902219009064325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.131486996142904,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5994371604629701,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.611448,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.0619227,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.86369256330364,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.731259011304253,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.446301824431348,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.29465,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.9163296,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.559454242123614,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.937158116913096,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.43630529798293466,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.4409455,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.64732509999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.98858146883291,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.265238984217049,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.44233939807673744,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}