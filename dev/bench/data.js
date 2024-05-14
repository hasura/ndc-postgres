window.BENCHMARK_DATA = {
  "lastUpdate": 1715676363840,
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
          "id": "936654e0d3266660bf7fc816825372360446d6ca",
          "message": "Fix the name of experimental generated inserts. (#406)\n\n### What\n\nThe name for generated inserts with the experimental flag should be\nprefixed with `experimental_` instead of `v1`.",
          "timestamp": "2024-04-05T09:19:07Z",
          "tree_id": "b5040bd88e8a11d76a4db63e5d889e460cf2d81a",
          "url": "https://github.com/hasura/ndc-postgres/commit/936654e0d3266660bf7fc816825372360446d6ca"
        },
        "date": 1712309159281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.05776,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.8805738,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.204548002500943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.457727368090751,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24061652901510744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.00915649999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.02512275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.75199065632657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.045750809541694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.52895577229868,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.589597,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.77870759999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.99998118858037,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4541799751112805,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40936784014736327,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.2013395,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.42777115,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.36940029452879,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.95316557996027,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38494853506882004,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.467945,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.202937,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.70773380226769,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.350489536950583,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38555346852680494,
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
          "id": "e709c186ea143fe6da7085d7dd7e7b0e027e62e4",
          "message": "Use different PAT for running e2e tests (#410)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUse a token that does not expire for running e2e tests.",
          "timestamp": "2024-04-08T09:35:06Z",
          "tree_id": "bb07c88d1692b67fd67ded9beaba4169e347bd7b",
          "url": "https://github.com/hasura/ndc-postgres/commit/e709c186ea143fe6da7085d7dd7e7b0e027e62e4"
        },
        "date": 1712569275567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.6494685,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.8802348,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.390348105572592,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.696857047161835,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.230824208668903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.224016,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.7719057,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.56549736281116,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.7607686277276784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5215596138257028,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.046439,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.3676145,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.07990548515874,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.445680834397855,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39668968921510067,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.187870000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.22337575,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.905621412271564,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.486566665731168,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37065245058725393,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.369087,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.771422,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.909464525716295,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.543027199209796,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3892593125452644,
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
          "id": "8df830b6124bcda4ff769aa0f182a6619ca71df8",
          "message": "ndc-spec 0.1.2 (#408)\n\n### What\n\nSupport ndc-spec v0.1.2.\nThis includes changing the type representations of some types.\n\n### How\n\nThe type representation has changed. We try to keep this change\nbackwards compatible by mapping deprecated variants (Number, Integer) to\nnew variants, and update types to more specific reps that didn't exist\nbefore.\n\nWe also have a problem with representing int8 now. ndc-spec v0.1.2\ndefines Int64 to be represented as a json string, which is not what we\ndo. So we either have to lie (say it's an Int32 when it isn't) or break\ncompatibility and cast int8 to string.\nIn this PR I did the former, and I'll introduce the latter change next.",
          "timestamp": "2024-04-08T13:12:58Z",
          "tree_id": "501be2e4c997360dc05c9b052f82373837b3834c",
          "url": "https://github.com/hasura/ndc-postgres/commit/8df830b6124bcda4ff769aa0f182a6619ca71df8"
        },
        "date": 1712582375921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.8136045,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.03278875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.206059493019545,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.715278020941433,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2377886444956472,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.029376,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.1465658,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.15101384656366,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4957102505844304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.466974825713209,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.881225,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.172464,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.619009142974214,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4068418441890245,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3989382237470886,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.985429499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.9731548,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.79479072917984,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.165066827037791,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.34580792685999684,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.535084,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.42180779999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.263225288803724,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.538230458230608,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3551523171037815,
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
          "id": "87c2ef3a2e651984847b0ed91fc5bb1f9b472c6d",
          "message": " Support nested fields of array type (#409)\n\n### What\n\nThis PR adds support for selecting nested fields that arise from\ncomposite arrays.\n\n### How\n\nThis builds on the earlier work for nested field selection support for\nobjects.\n\nThe main change is that the lateral joins that project the nested field\nhave to be nested rather than adjacent as well, since there are multiple\nrows in the case of arrays.\n\nThe generated SQL is now of the form:\n```\nLEFT OUTER JOIN LATERAL (\n  SELECT\n    <collect_expression> AS \"collected\"\n  FROM\n    (\n      < select of translate_fields(fields, nested_field_binding_alias, ... )\n        which includes joins from recursive calls>\n       FROM\n         (\n            SELECT\n             (<field_binding_expression>).*\n         ) AS <nested_field_binding> ON ('true')\n     ) AS <nested_fields>\n) AS <nested_fields_collect> ON ('true')\n```\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2024-04-08T13:31:58Z",
          "tree_id": "313386c07f949ce47110e80f38ef492345bbbf32",
          "url": "https://github.com/hasura/ndc-postgres/commit/87c2ef3a2e651984847b0ed91fc5bb1f9b472c6d"
        },
        "date": 1712583551234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.999967,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.74898549999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.21501181301148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.45261192157566,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22599125357074815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.369945,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 126.129033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.699961026571685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5762072288673252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.46140168725083786,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.8305,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.07285609999992,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.978718956161366,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.83564305301735,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38032767888225905,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.2394015,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.2126747,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.70256258736924,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.523199186145746,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37254135890919576,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.9801,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.20376879999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.68533516149339,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.985299484858153,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3752394362527042,
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
          "id": "d695f98246a0737fa8b25b24d749a9bd6cbfe9c5",
          "message": "bugfix: allow aliasing returning and affected_rows fields (#407)\n\n### What\n\nIt should be possible to alias the returning and affected_rows fields\nwhen running a mutation.\nThis is doubly important because this is what the cli/lsp/engine do by\ndefault for `affected_rows` :)\n\n### How\n\nInstead of having the alias satisfy the field name, we ask the Field to\ndo that.\nWe traverse the result fields, find the ones named \"returning\" and\n\"affected_rows\", and use that, instead of trying to fetch by the alias\nname in the fields map.",
          "timestamp": "2024-04-08T13:59:02Z",
          "tree_id": "c68d101598dc58a811fe77866614e0582b2c4ec8",
          "url": "https://github.com/hasura/ndc-postgres/commit/d695f98246a0737fa8b25b24d749a9bd6cbfe9c5"
        },
        "date": 1712585120962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.554441999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.71546465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.348221209725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.710958664270766,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23941757235734143,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.690564,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.83006749999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.60192103506096,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9510573004116694,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5151465921064373,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.7062895,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.9144045,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.33074968342117,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.465134309540481,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4157684849281743,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.22938,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.79391879999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.09107912849571,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.791459366100895,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3915770392295979,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.8177125,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.55710629999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.10739010428148,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.65740805992818,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37154824862206126,
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
          "id": "216840b16cb798b8c63238dbcbadfd8af5947ac0",
          "message": "Don't tell people to use the CLI's `initialize` command. (#414)\n\n### What\n\nThe CLI is typically intended to be used as a plugin to `ddn`, which\nonly exposes `update`, not `initialize`. Telling people to use this\ndoesn't really help them.\n\n### How\n\nI used my big `Delete` button.",
          "timestamp": "2024-04-08T15:34:46Z",
          "tree_id": "70e8c6747daf15ab98180eeed8e2171313c9f60b",
          "url": "https://github.com/hasura/ndc-postgres/commit/216840b16cb798b8c63238dbcbadfd8af5947ac0"
        },
        "date": 1712590947413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.081845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.50103840000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.240749776263183,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.97595251323148,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23612166574774357,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.3618125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.5309161,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.89629299444975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.555978014545488,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4830297255502871,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.0749715,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.9279111,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.481085855575756,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.335990631064803,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40748364751817395,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.115054,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.89180449999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.075543018707066,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.448413480997274,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3806086769279291,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.766765500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.64138595,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.56055387042789,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.514374764055894,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36841338994426776,
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
          "id": "4f845f8c950c1cacc8af62b6ef15701e844ed651",
          "message": "add full sha for ndc-sdk-rs (#415)\n\n### What\n\nSee comment\nhttps://github.com/hasura/ndc-postgres/pull/408#discussion_r1555849323",
          "timestamp": "2024-04-09T16:04:37Z",
          "tree_id": "18972e454513bc840da7fc82fbc79afd1e63bd19",
          "url": "https://github.com/hasura/ndc-postgres/commit/4f845f8c950c1cacc8af62b6ef15701e844ed651"
        },
        "date": 1712679081533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.4610375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 72.27461529999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.11669281842671,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.333917955839336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24439872659805367,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.14118300000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.65781704999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.84993240200994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.117589375917902,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5605574230763433,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.392311,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.45696449999991,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.58481484862753,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.93003819453881,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.428842702542167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.1246265,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.91058249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.36497169205596,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.796247639853227,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39397495654235315,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.197361,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 89.31618939999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.65878589293873,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.324940429550892,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37013573747469464,
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
          "id": "8faf87e99800520585e237142a709b39bc4fadfe",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 1.5.1 to 2.0.0 (#413)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 1.5.1 to 2.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.0</h2>\n<h2>BREAKING CHANGES</h2>\n<ul>\n<li>Migrate action to Node.js 20</li>\n<li><code>compose-file</code> validation: at least one compose file MUST\nexist (default one is <code>docker-compose.yml</code>), every given\ncompose files MUST exist</li>\n</ul>\n<h2>Changelog</h2>\n<h3>Features</h3>\n<ul>\n<li>Migrate to Node.js 20 and TypeScript. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/56\">#56</a>)</li>\n<li>Make docker-compose cwd aware. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/61\">#61</a>)</li>\n<li>Add logs debug on post. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/63\">#63</a>)</li>\n<li>Log docker-compose version. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/66\">#66</a>)</li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li>Ensure given docker-compose file(s) are valid and at least one is\nprovided. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/65\">#65</a>)</li>\n</ul>\n<h3>Documentation Updates</h3>\n<ul>\n<li>Multiple updates to actions and workflows documentation. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/51\">#51</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/52\">#52</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/53\">#53</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/59\">#59</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/62\">#62</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/64\">#64</a>)</li>\n</ul>\n<h3>Dependency Updates</h3>\n<ul>\n<li>Bumped the <code>github-actions-dependencies</code> group with 3\nupdates. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/46\">#46</a>,\n<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/57\">#57</a>)</li>\n<li>Bumped <code>docker-compose</code> from 0.24.1 to 0.24.7. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/48\">#48</a>)</li>\n<li>Bumped the <code>actions-dependencies</code> group with 1 update.\n(<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/58\">#58</a>)</li>\n<li>Bumped the <code>npm-dev-dependencies</code> group with 1 update.\n(<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/67\">#67</a>)</li>\n</ul>\n<h3>Continuous Integration</h3>\n<ul>\n<li>Upgrade GitHub Actions. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/60\">#60</a>)</li>\n<li>Added <code>--abort-on-container-exit</code> option in tests. (<a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/18\">#18</a>)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/46\">hoverkraft-tech/compose-action#46</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0\">https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/802a148945af6399a338c7906c267331b39a71af\"><code>802a148</code></a>\nchore(deps-dev): bump the npm-dev-dependencies group with 1 update</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/78f44f26f9eaf089ebb0671bb6c8216dc8235c11\"><code>78f44f2</code></a>\ntest: --abort-on-container-exit option</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/2bd57c29bd08e15357e29ad91b1d1b4dd2381be1\"><code>2bd57c2</code></a>\nfix: ensure given docker-compose file(s) are valid and at least one is\nprovided</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8d12e916efa9c7beacddd68048917ec225c170bf\"><code>8d12e91</code></a>\nfeat: log docker-compose version</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/99447ae4bd1c49fbfd4b67185aa1356b6d5235a9\"><code>99447ae</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/bc90ff6758fb86e4e67164e57bc87873f786cf44\"><code>bc90ff6</code></a>\nfeat: add logs debug on post</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/a48c80beab6523b082f33307a278dff9aa34b042\"><code>a48c80b</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/9e48869ba4fd2fff83a91163d2a6991dd6975dd4\"><code>9e48869</code></a>\nfeat: make docker-compose cwd aware</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/43a233a413bd302477c5f3eb8cc77c84eb5b38f8\"><code>43a233a</code></a>\nci: fix workflow permissions</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/43ee4ae89731d81feda2fb508ba6f6d282d385db\"><code>43ee4ae</code></a>\nci: upgrade github actions</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v1.5.1...v2.0.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=1.5.1&new-version=2.0.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-04-09T16:28:36Z",
          "tree_id": "78e860c19f6781b343807c014e712e280f025234",
          "url": "https://github.com/hasura/ndc-postgres/commit/8faf87e99800520585e237142a709b39bc4fadfe"
        },
        "date": 1712680618739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.4752145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.30362855,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.225727440516845,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.717342534648299,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24528083772303727,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 89.489911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.53284720000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.33930105606435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.63617327310633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4518302542322787,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.803823,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.9153745,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.789334273785514,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.522185349525188,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3992261823157626,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.632351,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.105543,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.15175486410626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.384513322651209,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37168087528117655,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.030955,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.5104807,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.67601512351828,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.314698127553541,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3717731321562484,
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
          "id": "faba39da07707c9a259392fa4c68071199baa8cb",
          "message": "Build Windows binaries statically. (#417)\n\n### What\n\nWe don't want users to have to install the Visual C++ Redistributable to\nuse the ndc-postgres CLI plugin.\n\n### How\n\nWe can instruct `rustc` to link statically with the C runtime with the\n`-C target-feature=+crt-static` flag. See [RFC\n1721](https://github.com/rust-lang/rfcs/blob/master/text/1721-crt-static.md)\nfor details.",
          "timestamp": "2024-04-10T09:46:50Z",
          "tree_id": "ec796fc369de076c1f7ebd7f9dc46fe2c02174d1",
          "url": "https://github.com/hasura/ndc-postgres/commit/faba39da07707c9a259392fa4c68071199baa8cb"
        },
        "date": 1712742763715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.82575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.033332,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.61548922381256,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.296583123818031,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22514187684694031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.893344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.26545229999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.541323257062615,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.3843146077640824,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.42052126145933205,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.946027,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.0050818,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.69410157836316,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.027234116644152,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41475495610284324,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.291999000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.86072139999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.52151514073467,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.757364444912973,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3675749851415819,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.948458,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.63941274999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.24182681286786,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.1596219320800785,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.35508106836771935,
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
          "id": "9225966d3d8fdb2e492f5760fad5ceb1176b3ce8",
          "message": "Upgrade to Rust v1.77.2. (#418)\n\n### What\n\nRust v1.77.2 fixes a security flaw ([CVE-2024-24576]) in binaries built\nfor Windows.\n\nThe ndc-postgres CLI is not vulnerable to this as it does not invoke\nother programs, but it seemed prudent to upgrade anyway.\n\n### How\n\nI edited `rust-toolchain.toml` and ran `nix flake update`.\n\n[CVE-2024-24576]: https://nvd.nist.gov/vuln/detail/CVE-2024-24576",
          "timestamp": "2024-04-10T12:39:04Z",
          "tree_id": "995eff3819d0318d7fdb383659d7564ee88328e8",
          "url": "https://github.com/hasura/ndc-postgres/commit/9225966d3d8fdb2e492f5760fad5ceb1176b3ce8"
        },
        "date": 1712753275308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.519342,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.0871916,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.358978949584902,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.117603581434203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22863032191186922,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.322537,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.838957,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.5549704071447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8195466556295514,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.48233988424625496,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.960777,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.02004989999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.464147247087745,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.483934149601346,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3941933646021119,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.798024,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.79768619999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 36.986489309380865,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.462518791321209,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37878022923642857,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.621145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.307342,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.72458321847768,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.062671815038904,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3467183877932249,
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
          "id": "eef1cf7870d5ab4f3a89a330afeddefa6907220e",
          "message": "Separate business and exchange types (#419)\n\n### What\n\nWe want to be able to confidently evolve the configuration format\nwithout risk of accidentally changing the behavior of previous versions.\n\nThis PR has no user-observable change in behavior.\n\nIntroducing a new major version of the configuration format is now a\nmuch more well-defined task, which should consist most of just\nduplicating the entire `version3` module hierarchy and then introducing\nthe new changes in the duplicated copy.\n\n### How\n\nIn order to achieve this we duplicate the complete metadata type\nhierarchy into configuration crate and introduce functions that convert\nbetween the now separate exchange types and business types, and ensure\nthat all logic that has to do with serialization only lives with the\nexchange types (the version types)",
          "timestamp": "2024-04-11T09:33:06Z",
          "tree_id": "df554a5f40a8c48c019e1c6fd53b6169c95db769",
          "url": "https://github.com/hasura/ndc-postgres/commit/eef1cf7870d5ab4f3a89a330afeddefa6907220e"
        },
        "date": 1712828628132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.9375905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.35596824999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.769928310324353,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.852691790489068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.22612165268276305,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.206359,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.5102121499999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.03955847948281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.7817208550829804,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5336749350274584,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.7514305,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.85186384999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.61074626996204,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.177306380771121,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3835945629411529,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.067278,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.05963799999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.70838353299649,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.007863200378921,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3768357473948437,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.487333,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 81.936769,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.792838901186926,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.00629967773456,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36705522197614215,
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
          "id": "843be781d9f3c5516f8074a1d7c2469c4cf3ded4",
          "message": "include additional schemas for types by default (#420)\n\n### What\n\nInclude a couple more unqualified schemas for types and procedures\ndefaults.\nSee follow-up ticket for next task:\nhttps://hasurahq.atlassian.net/browse/PG-82\n\n### How\n\nWe expose the new fields in the defaults. These are exposed in the\ninitialize phase so if a user already has a list, this won't change it.\n\n---------\n\nCo-authored-by: Philip Lykke Carlsen <plcplc@gmail.com>",
          "timestamp": "2024-04-11T19:13:08Z",
          "tree_id": "32112c1e43ce31dd54090a506adf1f8eda94fe89",
          "url": "https://github.com/hasura/ndc-postgres/commit/843be781d9f3c5516f8074a1d7c2469c4cf3ded4"
        },
        "date": 1712863142461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 48.805585,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.98671,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.89926647530083,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.103950479446883,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23255880235749463,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.0642005,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 140.56098784999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.25158743386138,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.6892065369346625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47649910774934146,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.681585,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.09929619999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.0761201821333,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.717039439662962,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4004348670202162,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 60.72954,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.98536814999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 36.728438625395995,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.501500174122484,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3504705633002408,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.63556,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.06503439999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.434747000988445,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.270247994563043,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36088102230445845,
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
          "id": "c12f5699cb598fb24ab8c696235e287005afa4f8",
          "message": "remove transactions in queries (#421)\n\n### What\n\nRunning queries in transactions require that we run 3 statements: begin,\nthe query, commit.\nWe use transactions to enforce a `READ ONLY` setting so that native\nqueries which run mutations will be rejected.\nHowever, each roundtrip takes time. If we can avoid it, it would improve\nthe performance of queries.\n\nIn the PR we use the fact the mutating sql statements can only occur in\na CTE at the top-level, and wrap native queries in another layer of CTE,\nthereby enforce the read only requirement without using transactions.\n\n### How\n\n1. We remove the `begin` and `commit` statements before/after a query.\n2. We wrap each query in another CTE of the form `WITH\n<native_query_name> as (WITH <alias> as (<native_query>) SELECT * FROM\nCTE as <alias>) SELECT ...`\n3. We extract the global table alias index from the state and use it in\nwrapping the CTEs.\n4. We wrap ctes in the caller side because this code is used for\nmutations as well, for which we don't want to apply this hack.",
          "timestamp": "2024-04-15T11:52:46Z",
          "tree_id": "4ad5364b93282453628d58907882c5e12c6dbf5b",
          "url": "https://github.com/hasura/ndc-postgres/commit/c12f5699cb598fb24ab8c696235e287005afa4f8"
        },
        "date": 1713182350769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.023722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 55.51080509999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.78054056279373,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.0315989110439,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2933666472440345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 77.436865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.29685119999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.205108359028024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.171249708369807,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.417330111227476,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.61397,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.03215229999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.48341473100051,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.208895667905942,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39347305418241557,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 47.660227,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.31358764999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.86940609937194,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.808249762965929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3865907940638118,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.0026825,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.10280865,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.92581065860827,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.108258300418953,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3689571578104805,
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
          "id": "923fc239a60e52bfed7048bd0015545c4c88fb9d",
          "message": "chore(deps): Bump anyhow from 1.0.81 to 1.0.82 (#423)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.81 to 1.0.82.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.82</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/074bdea1c7b419e4f1267ebb9eac4d6068870122\"><code>074bdea</code></a>\nRelease 1.0.82</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/47a4fbfa365050b293d9e3898aadb42a47a571e6\"><code>47a4fbf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/360\">#360</a>\nfrom dtolnay/docensure</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/c5af1db020696716ab0de65b663d2370ac4de4d4\"><code>c5af1db</code></a>\nMake ensure's doc comment apply to the cfg(not(doc)) macro too</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/bebc7a2fe4ced785da951332fc3b259a5a52d24f\"><code>bebc7a2</code></a>\nRevert &quot;Temporarily disable miri on doctests&quot;</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/f2c4db9b47e37fdeef8dc0e1560b3d15f1208fbe\"><code>f2c4db9</code></a>\nUpdate ui test suite to nightly-2024-03-31</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/028cbeedf5e94970c088eb14e325744086a7b768\"><code>028cbee</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/7a4cac5192686ca47c40ba9a8dd81f201686375e\"><code>7a4cac5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/358\">#358</a>\nfrom dtolnay/workspacewrapper</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/939db012c2294403db6a1be21b15c0f2750b8b15\"><code>939db01</code></a>\nApply RUSTC_WORKSPACE_WRAPPER</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/9f84a37551de7e7d67dc27a6e1c8518aa21f1d93\"><code>9f84a37</code></a>\nTemporarily disable miri on doctests</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/45e5a589e9548d1045ce7518e78f890a83c33580\"><code>45e5a58</code></a>\nIgnore dead code lint in test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.81...1.0.82\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.81&new-version=1.0.82)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T14:14:50Z",
          "tree_id": "4b376a9eca2a5e6481f6c0f2130e75f44f90db48",
          "url": "https://github.com/hasura/ndc-postgres/commit/923fc239a60e52bfed7048bd0015545c4c88fb9d"
        },
        "date": 1713190883344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.828038,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 59.535537,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.07166158228716,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.839357595282966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29738244370430106,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.94421,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 113.161827,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.42653938946749,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.002184245099272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4368861655323517,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.706997,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.12906509999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 35.94379878038107,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.410212231838933,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.467593109529435,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.260436,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.78831629999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 33.41745732837094,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.874136518978773,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37632092930252914,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 48.055255,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.7894388,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.27649580132891,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.795909008204312,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3851946201745105,
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
          "id": "f070d9e79f9d34c9c2ad5f6daeb0f7b4985bb393",
          "message": "chore(deps): Bump async-trait from 0.1.79 to 0.1.80 (#422)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.79\nto 0.1.80.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.80</h2>\n<ul>\n<li>Fix unreachable code warning for async functions that return\n<code>!</code> (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/265\">#265</a>,\nthanks <a\nhref=\"https://github.com/de-vri-es\"><code>@​de-vri-es</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/d528b5a816c891c3b5ab90dc4bcc5cc8d384e177\"><code>d528b5a</code></a>\nRelease 0.1.80</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/10b5c9951af4cc787905ca26f95509e059931067\"><code>10b5c99</code></a>\nDrop support for compilers older than 1.47</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/83a542268d907f503793e64b5764c30b301a06d1\"><code>83a5422</code></a>\nDrop support for compilers older than 1.45</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/22d017e9415fccf237372a3c5003c5cb44bcef6e\"><code>22d017e</code></a>\nBuild script no longer looks at $DOCS_RS</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b64d041c6543f5ce48ff356cc5aaf712224b70e4\"><code>b64d041</code></a>\nMove never_type test under issue266</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b683da826e34ce1d7d3ac55c6de1d247a21757c8\"><code>b683da8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/265\">#265</a>\nfrom de-vri-es/fix-unreachable-code-warning</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/c8d958dfde2c36a5c483c9255729d30361cbd0bf\"><code>c8d958d</code></a>\nFix unreachable code warning for functions that return\n<code>!</code></li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/4f0b72eb8455834b1b52bdadb411aaf40bdf1b81\"><code>4f0b72e</code></a>\nExplicitly install a Rust toolchain for cargo-outdated job</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.79...0.1.80\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.79&new-version=0.1.80)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-15T14:15:04Z",
          "tree_id": "8c7b8340c3a74b25b8aa70e07a69561c25aded37",
          "url": "https://github.com/hasura/ndc-postgres/commit/f070d9e79f9d34c9c2ad5f6daeb0f7b4985bb393"
        },
        "date": 1713191163376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 37.623380499999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 56.10311155,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 23.965855335543484,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.18328054644945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2837395114552711,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 78.706975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 111.58937459999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.151749448222866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.037230059405722,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.44646540845655497,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 53.7088635,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 87.75272204999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 36.80701372033716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.254338853791708,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4303068387611518,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 48.356188,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 78.01875519999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 34.11409735653099,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.1760228045810805,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41516288856816963,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 47.8570685,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.48938035,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 33.73038451978659,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.5854371578893875,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37840850654512537,
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
      }
    ]
  }
}