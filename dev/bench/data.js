window.BENCHMARK_DATA = {
  "lastUpdate": 1712680619808,
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
          "id": "ebb7b535ef8869c01efe3587a80b966260417b59",
          "message": "Rename schema fields and add a jsonschema generation and ref on init (#361)\n\n### What\n\nThis PR does the following:\n\n1. It renames a few fields in the configuration:\n   - `configureOptions` -> `introspectionOptions`\n   - `mutationsVersion` moved from `configureOptions` to the top-level\n- connection uri, pool settings and isolation level are now nested under\n\"connectionSettings\"\n- Native queries use a new `ReadonlyColumnInfo` type instead of\n`ColumnInfo` type for arguments and column. ReadonlyColumnInfo does not\ncontain default, identity and generated information which we don't want\nto appear in autocomplete for native queries.\n2. It generates a `schema.jsonschema` file on cli `initialize` command\nnext to the `configuration.json` file\n3. It adds the `$schema` field to the configuration, referencing the\ngenerated `schema.jsonschema` file.\n\nThe purpose of (2) and (3) is to provide auto-complete features when\nediting the configuration in vscode (demo soon).\n\n![Screenshot from 2024-03-12\n16-56-07](https://github.com/hasura/ndc-postgres/assets/8547573/f4149d91-041a-4571-b387-0f873cc9ad21)",
          "timestamp": "2024-03-13T12:39:47Z",
          "tree_id": "a2521556590540f02ccc3dbab37ea9d95bb311c6",
          "url": "https://github.com/hasura/ndc-postgres/commit/ebb7b535ef8869c01efe3587a80b966260417b59"
        },
        "date": 1710334005805,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.967186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.31702820000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.126936473933092,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.993495512077367,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26253000090613676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.030799,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.68932435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.890003233504565,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9448700714013185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5864052486221392,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.25024099999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.45246515000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.47919336810283,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.516728249131134,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4430814175820118,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.324796,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.72382879999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.74329624123956,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.527717421204912,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.405578353758075,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.758013500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.3461068,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.14531427666328,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.727975282757917,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4038738570972702,
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
          "id": "7369212f37f0b751feae5b3c6765e99dc6bb2e54",
          "message": "Upgrade ndc-sdk. (#363)\n\n### What\n\nThis adds the `--host` switch and removes the v2 compatibility layer.\n\n### How\n\nCargo.",
          "timestamp": "2024-03-14T10:13:54Z",
          "tree_id": "e2ad466cc76a8e79fef754e1dee0df8174164131",
          "url": "https://github.com/hasura/ndc-postgres/commit/7369212f37f0b751feae5b3c6765e99dc6bb2e54"
        },
        "date": 1710411738775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.1136195,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.82855324999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.984230330479196,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.251089598794554,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2676933376229811,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.232439,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.00879719999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.918362566149625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.086826119887455,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6186944557592046,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.597645,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.3189982,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.21739903634345,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5378222838926945,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4371057948295344,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.466503,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 84.15212305,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.38102066609492,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.441398765916851,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.400729211208543,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.182347,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.09970519999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.86011534717305,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.437202182105004,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4028291774985645,
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
          "id": "591ef966b7d5cad8a3e174f4b665d80048f77d66",
          "message": "Add a Docker Compose watch item to the connector metadata. (#360)\n\n### What\n\nThis teaches the DDN CLI that the configuration should be synced, and\nthe connector container restarted, whenever the configuration changes.\n\n### How\n\nWhen emitting connector metadata, we include a `dockerComposeWatch`\nitem.",
          "timestamp": "2024-03-14T10:26:34Z",
          "tree_id": "79a3d378838f6e8b7420c9129637903f29f4251b",
          "url": "https://github.com/hasura/ndc-postgres/commit/591ef966b7d5cad8a3e174f4b665d80048f77d66"
        },
        "date": 1710412539029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.516379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.31055799999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 25.92784671725668,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.634260886705267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24625299807630427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.6915075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.65760899999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.11420172806529,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1045292410009964,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.587958072459655,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.548595,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.5203042,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.82880526489427,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.55387476506624,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43070037144435913,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.4361185,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.53924525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.56400910531748,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.586227172883099,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.41503450696939853,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.966378,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.22277259999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.524410886426274,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.591895790839779,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4017222358196762,
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
          "id": "182708861f842fe94dc8b363753abcc821bb60bd",
          "message": "update command should not override the config file in some cases (#362)\n\n### What\n\nWe want the update command in ndc-postgres-cli to not override changed\nmade after we started introspecting but before we wrote the changes to\nfile, and not to write to the filesystem when the file does not need\nchanging.\n\n### How\n\n1. We loop the update operation 3 times\n2. We read the input file after the introspection took place as well\n3. If the input from before the introspection and the input from after\nthe introspection are the same we continue, otherwise we try again\n4. Before writing to file, we check that if the output is going to be\nthe same as the input, if it is the same, we skip writing, if not, we\nwrite.\n5. We add the `Eq` trait everywhere so we can compare the config.",
          "timestamp": "2024-03-14T11:19:00Z",
          "tree_id": "c025fb8a225d584e1219818967a09d37d6ed209a",
          "url": "https://github.com/hasura/ndc-postgres/commit/182708861f842fe94dc8b363753abcc821bb60bd"
        },
        "date": 1710415643917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.48943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.2094788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.16498027694941,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.018749737232977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2715221900882623,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.1012275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.31890739999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.56830789382401,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.7456186378189216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6156189995236914,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.151598,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.392855,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.06455896379936,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.02969453292674,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4463486286515157,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.420974,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.8701215,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.37040360077242,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.953683539848015,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40461627839543235,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.680428,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.101542,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.04799802740417,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.755474835704696,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4047500711992723,
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
          "id": "3fa214a5735b936725ac52373213fb6fd24a4bb0",
          "message": "prepare to release v0.5.0 (#364)\n\n### What\n\nUpdate the release version and changelog to prepare for a new release.",
          "timestamp": "2024-03-14T13:21:03Z",
          "tree_id": "5375a46109a0ada3d9878679284ef5bca7d4af83",
          "url": "https://github.com/hasura/ndc-postgres/commit/3fa214a5735b936725ac52373213fb6fd24a4bb0"
        },
        "date": 1710422980373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.6349805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.61071175000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.220194338597548,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.656902925757183,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26589349734074136,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 96.159538,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 139.8059426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.702500893270035,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.165758410021162,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6352650950686728,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.5762605,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.97896250000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.6872316884661,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.378158679789799,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45767090696935697,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.390286,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.6343194,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.30049238802481,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.873044869266494,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4282048553915303,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.841998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.920729,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.01146306706215,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.962012775748377,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4149029919339444,
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
          "id": "d2377b0bfb6e80c368850b6a6df8d6101a29d71b",
          "message": "removing the prints from the config cli (#365)\n\n### What\n\nThe info prints that the config cli is doing something special are\nprinted as part of the cli. We don't like this so we remove them.\n\nhttps://hasurahq.slack.com/archives/C01RZPEPF0W/p1710504668667279",
          "timestamp": "2024-03-15T14:35:07Z",
          "tree_id": "36931de24bacb302a67de6ff76df52816cdd85f5",
          "url": "https://github.com/hasura/ndc-postgres/commit/d2377b0bfb6e80c368850b6a6df8d6101a29d71b"
        },
        "date": 1710513807629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.504445,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.5879251,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.6679328749934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.26448184000655,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25524982543262326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.425565,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.61796939999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.79412639505095,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2349877013471726,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5797108814367727,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.502907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.40793379999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.35959881237175,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.545484864050998,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45076071643716226,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.515723,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.1828149,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.5119869051798,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.87853175778848,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39499388924721474,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.162337,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.1674756,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.22552696664316,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6523793636600175,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4150263454767335,
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
          "id": "67dae07e729e8313a2134d71131a2c67e64871a8",
          "message": "fix names of fields in schema generation (#366)\n\n### What\n\nThe `/schema` endpoint was exposing the wrong column names in object\ntypes. This PR fixes this.\n\n### How\n\ncolumns, referenced by tables, native queries, etc. Have a type that\nlooks somewhat like this: `BTreeMap<String, ColumnInfo>`.\n\n`ColumnInfo` looks somewhat like this: `ColumnInfo { name: String, ...\n}`.\n\nThe `String` in the map refers to the external name that ndc-spec\nqueries should reference, while the `ColumnInfo` name refers to the\ndatabase column name.\n\nBy mistake, were reporting the `ColumnInfo` name in the schema, instead\nof the String from the map.\n\nWe fix this by referring to the right name, and use `iter()` on the\nBTreeMap instead of `values()`.",
          "timestamp": "2024-03-15T15:33:14Z",
          "tree_id": "7b990abb7d88b4071c7f7b691f7946e422f21a90",
          "url": "https://github.com/hasura/ndc-postgres/commit/67dae07e729e8313a2134d71131a2c67e64871a8"
        },
        "date": 1710517303714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.580339,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.80146959999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.536594634380336,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.390225863705375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26018906565652633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.169846,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.0371585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.86555823048599,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.939824907031671,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6079549882022747,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.071273,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.49311279999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.053867891853926,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.651782710554258,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44531987939139195,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.8659255,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.44313605,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.05973223752612,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.697833725961736,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40646176721639166,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.418413,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.67793844999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.631750189351024,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.84478523042732,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41080915290990216,
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
          "id": "277b9049c97f00454f66d967a79f1e24042750d3",
          "message": "chore(deps): Bump sqlx from 0.7.3 to 0.7.4 (#367)\n\nBumps [sqlx](https://github.com/launchbadge/sqlx) from 0.7.3 to 0.7.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/launchbadge/sqlx/blob/main/CHANGELOG.md\">sqlx's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.7.4 - 2024-03-11</h2>\n<p>38 pull requests were merged this release cycle.</p>\n<p>This is officially the <strong>last</strong> release of the 0.7.x\nrelease cycle.</p>\n<p>As of this release, development of 0.8.0 has begun on\n<code>main</code> and only high-priority bugfixes may be backported.</p>\n<h3>Added</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2891\">#2891</a>]:\nfeat: expose getters for connect options fields [[<a\nhref=\"https://github.com/saiintbrisson\"><code>@​saiintbrisson</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2902\">#2902</a>]:\nfeat: add <code>to_url_lossy</code> to connect options [[<a\nhref=\"https://github.com/lily-mosquitoes\"><code>@​lily-mosquitoes</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2927\">#2927</a>]:\nSupport <code>query!</code> for cargo-free systems [[<a\nhref=\"https://github.com/kshramt\"><code>@​kshramt</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2997\">#2997</a>]:\ndoc(FAQ): add entry explaining prepared statements [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3001\">#3001</a>]:\nUpdate README to clarify MariaDB support [[<a\nhref=\"https://github.com/iangilfillan\"><code>@​iangilfillan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3004\">#3004</a>]:\nfeat(logging): Add numeric elapsed time field elapsed_secs [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3007\">#3007</a>]:\nfeat: add <code>raw_sql</code> API [[<a\nhref=\"https://github.com/abonander\"><code>@​abonander</code></a>]]\n<ul>\n<li>This hopefully makes it easier to find how to execute statements\nwhich are not supported by the default\nprepared statement interfaces <code>query*()</code> and\n<code>query!()</code>.</li>\n<li>Improved documentation across the board for the\n<code>query*()</code> functions.</li>\n<li>Deprecated: <code>execute_many()</code> and\n<code>fetch_many()</code> on interfaces that use prepared statements.\n<ul>\n<li>Multiple SQL statements in one query string were only supported by\nSQLite because its prepared statement\ninterface is the <em>only</em> way to execute SQL. All other database\nflavors forbid multiple statements in\none prepared statement string as an extra defense against SQL\ninjection.</li>\n<li>The new <code>raw_sql</code> API retains this functionality because\nit explicitly does <em>not</em> use prepared statements.\nRaw or text-mode query interfaces generally allow multiple statements in\none query string, and this is\nsupported by all current databases. Due to their nature, however, one\ncannot use bind parameters with them.</li>\n<li>If this change affects you, an issue is open for discussion: <a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3108\">launchbadge/sqlx#3108</a></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3011\">#3011</a>]:\nAdded support to IpAddr with MySQL/MariaDB. [[<a\nhref=\"https://github.com/Icerath\"><code>@​Icerath</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3013\">#3013</a>]:\nAdd default implementation for PgInterval [[<a\nhref=\"https://github.com/pawurb\"><code>@​pawurb</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3018\">#3018</a>]:\nAdd default implementation for PgMoney [[<a\nhref=\"https://github.com/pawurb\"><code>@​pawurb</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3026\">#3026</a>]:\nUpdate docs to reflect support for MariaDB data types [[<a\nhref=\"https://github.com/iangilfillan\"><code>@​iangilfillan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3037\">#3037</a>]:\nfeat(mysql): allow to connect with mysql driver without default behavor\n[[<a\nhref=\"https://github.com/darkecho731\"><code>@​darkecho731</code></a>]]</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2900\">#2900</a>]:\nShow latest url to docs for macro.migrate [[<a\nhref=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2914\">#2914</a>]:\nUse <code>create_new</code> instead of <code>atomic-file-write</code>\n[[<a\nhref=\"https://github.com/mattfbacon\"><code>@​mattfbacon</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2926\">#2926</a>]:\ndocs: update example for <code>PgConnectOptions</code> [[<a\nhref=\"https://github.com/Fyko\"><code>@​Fyko</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2989\">#2989</a>]:\nsqlx-core: Remove dotenvy dependency [[<a\nhref=\"https://github.com/joshtriplett\"><code>@​joshtriplett</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2996\">#2996</a>]:\nchore: Update ahash to 0.8.7 [[<a\nhref=\"https://github.com/takenoko-gohan\"><code>@​takenoko-gohan</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3006\">#3006</a>]:\nchore(deps): Replace unmaintained tempdir crate with tempfile [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3008\">#3008</a>]:\nchore: Ignore .sqlx folder created by running ci steps locally [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3009\">#3009</a>]:\nchore(dev-deps): Upgrade env_logger from 0.9 to 0.11 [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3010\">#3010</a>]:\nchore(deps): Upgrade criterion to 0.5.1 [[<a\nhref=\"https://github.com/iamjpotts\"><code>@​iamjpotts</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3050\">#3050</a>]:\nOptimize SASL auth in sqlx-postgres [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3055\">#3055</a>]:\nSet TCP_NODELAY option on TCP sockets [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3065\">#3065</a>]:\nImprove max_lifetime handling [[<a\nhref=\"https://github.com/mirek26\"><code>@​mirek26</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3072\">#3072</a>]:\nChange the name of &quot;inner&quot; function generated by\n<code>#[sqlx::test]</code> [[<a\nhref=\"https://github.com/ciffelia\"><code>@​ciffelia</code></a>]]</li>\n<li>[<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/3083\">#3083</a>]:\nRemove sha1 because it's not being used in postgres [[<a\nhref=\"https://github.com/rafaelGuerreiro\"><code>@​rafaelGuerreiro</code></a>]]</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/635dba5b2682033101a1271e9fb4bf2516c0b840\"><code>635dba5</code></a>\nfix: deprecation in <code>postgres::types::chrono</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/a2b89d70a7d0b6401f8d830c9e7ab1dff63e103f\"><code>a2b89d7</code></a>\nfix: deprecation warnings in <code>sqlite::types::chrono</code>,\ndocument <code>DATETIME</code> beh...</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/248d6170a72a8a1c38cc5578888a669f79fdb673\"><code>248d617</code></a>\nchore: prepare 0.7.4 release</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/d005111494a5202d64d5c0442a542f94a2c1983c\"><code>d005111</code></a>\nfix: better I/O errors when <code>migrate!()</code> cannot read a\nfile</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/24be26216509fa0c9fa9febbbbc04597fbe669f8\"><code>24be262</code></a>\nfix: restore <code>Migrator</code> to the public API</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/bbfd0d711aa3bfa4123b08b03d60ff08cadbc7dc\"><code>bbfd0d7</code></a>\nfix: AnyRow not support PgType::Varchar (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2976\">#2976</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/b29eab0439b9914fdae20aa6e2ca6af0e5dc4969\"><code>b29eab0</code></a>\nfeat: add <code>to_url_lossy</code> to connect options (<a\nhref=\"https://redirect.github.com/launchbadge/sqlx/issues/2902\">#2902</a>)</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/34860b7f99d72f22cfa4c4e68364ff39108a7f2a\"><code>34860b7</code></a>\nfix(ci): just cfg-out the whole\n<code>tests/sqlite/sqlcipher.rs</code></li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/791a7f5417ca46859ababd97ee0d52c0356f4024\"><code>791a7f5</code></a>\ndoc(pg): document behavior of <code>bigdecimal</code> and\n<code>rust_decimal</code> with out-of-ran...</li>\n<li><a\nhref=\"https://github.com/launchbadge/sqlx/commit/e5c18b354e50249a426cb83071fd713be90c83ed\"><code>e5c18b3</code></a>\nfix: gate <code>sqlcipher</code> testing behind <code>cfg</code> to make\ndevelopment less annoying</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/launchbadge/sqlx/compare/v0.7.3...v0.7.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=sqlx&package-manager=cargo&previous-version=0.7.3&new-version=0.7.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:02Z",
          "tree_id": "d69f378f15e1c36f18a060dc1bd65731aad4d330",
          "url": "https://github.com/hasura/ndc-postgres/commit/277b9049c97f00454f66d967a79f1e24042750d3"
        },
        "date": 1710776087730,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.0692625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 84.37937530000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.74349280269598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.333203503231221,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2719686495099989,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.98970299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 136.85763365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.48254537014797,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.4090308433495196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6195622602951784,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.337427,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.2786502,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.736268029780376,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.104101334042298,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4572491857993692,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.60286,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.215893,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.472074300738754,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.088803819068929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4195482350749048,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 64.48721,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.7853525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.78521911655916,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.074168409154623,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39748079668683384,
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
          "id": "cc870ecb5dc4117ab4b3b4277f33c96f87fbe32e",
          "message": "chore(deps): Bump anyhow from 1.0.80 to 1.0.81 (#368)\n\nBumps [anyhow](https://github.com/dtolnay/anyhow) from 1.0.80 to 1.0.81.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/anyhow/releases\">anyhow's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.81</h2>\n<ul>\n<li>Make backtrace support available when using -Dwarnings (<a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/354\">#354</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/4aad4edebd9f09247d6c6b6784419a74bb116829\"><code>4aad4ed</code></a>\nRelease 1.0.81</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/8be90917c603199c5d1fdd73984237f023768e22\"><code>8be9091</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/anyhow/issues/354\">#354</a>\nfrom dtolnay/deadcode</li>\n<li><a\nhref=\"https://github.com/dtolnay/anyhow/commit/a2eb7dd5e13add83f254b6dac0f68e043effc521\"><code>a2eb7dd</code></a>\nMake compatible with -Dwarnings</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/anyhow/compare/1.0.80...1.0.81\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=anyhow&package-manager=cargo&previous-version=1.0.80&new-version=1.0.81)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:16Z",
          "tree_id": "ef4febd31aba6ff373cafe7eff3862f9ffd86581",
          "url": "https://github.com/hasura/ndc-postgres/commit/cc870ecb5dc4117ab4b3b4277f33c96f87fbe32e"
        },
        "date": 1710776343410,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.7018665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.30779634999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.827853370492647,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.850945925419396,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2644720139936373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.612314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 131.49424559999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.69503384587506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.181176399618053,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5827027377202003,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.486508,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.30237684999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.15811482771987,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.420999313768029,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4544023461810457,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.012707,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.65883299999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.552313444713626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.244168439803637,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4204541072993715,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.267414,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.9311232,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.88823138667356,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.457710065088726,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39622120742245304,
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
          "id": "120abb421edb1e7bdafd24e3b55a154f1e697de6",
          "message": "chore(deps): Bump serde_yaml from 0.9.32 to 0.9.33 (#370)\n\nBumps [serde_yaml](https://github.com/dtolnay/serde-yaml) from 0.9.32 to\n0.9.33.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/serde-yaml/releases\">serde_yaml's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.9.33</h2>\n<ul>\n<li>Fix quadratic parse time for YAML containing deeply nested flow\ncollections (<a\nhref=\"https://redirect.github.com/dtolnay/unsafe-libyaml/issues/26\">dtolnay/unsafe-libyaml#26</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/f4c9ed92385c827a677dae60c2b5a894e24709f0\"><code>f4c9ed9</code></a>\nRelease 0.9.33</li>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/b4edaee907373ee69c6389687a35fced63d8addf\"><code>b4edaee</code></a>\nPull in yaml_parser_fetch_more_tokens fix from libyaml</li>\n<li><a\nhref=\"https://github.com/dtolnay/serde-yaml/commit/8a5542ced61ae21d0772e504fac01bd1dbfaaa6b\"><code>8a5542c</code></a>\nResolve non_local_definitions warning in test</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/serde-yaml/compare/0.9.32...0.9.33\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_yaml&package-manager=cargo&previous-version=0.9.32&new-version=0.9.33)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T15:23:54Z",
          "tree_id": "d607f852ae8cf6e5d601ba4196f6b17a6727783a",
          "url": "https://github.com/hasura/ndc-postgres/commit/120abb421edb1e7bdafd24e3b55a154f1e697de6"
        },
        "date": 1710776413125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.698156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.99102199999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.6738261966864,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.959751183191862,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25691605007020635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.460423,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.744342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.692284505923666,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.044314600986013,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6095262277508956,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.580285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.37444575,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.67104103298094,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.575718916156113,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42087587593891596,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.813719,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.14118134999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.91773740569453,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7488043509405955,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38808453388294256,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.999409,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.46736745,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.85203541206567,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6641871955777745,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3957251586859924,
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
          "id": "e6487cb61c0fc624ad4af15670057786b44cac68",
          "message": "chore(deps): Bump thiserror from 1.0.57 to 1.0.58 (#371)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.57 to\n1.0.58.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.58</h2>\n<ul>\n<li>Make backtrace support available when using -Dwarnings (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/292\">#292</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/df8bffad18e408e9b88d3360797506fc1282babe\"><code>df8bffa</code></a>\nRelease 1.0.58</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/14be209a74e075861fc754d41c376d2d5c6da06b\"><code>14be209</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/292\">#292</a>\nfrom dtolnay/deadcode</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/15a1d647cf5e98835e800e5b6d17ec260dcb89cc\"><code>15a1d64</code></a>\nMake compatible with -Dwarnings</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f55a5d28da7114b44e967451f697d8d0fedb20be\"><code>f55a5d2</code></a>\nIgnore mixed_attributes_style clippy lint</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f770921a4fc7fc972b9fe00a841831b886e83f10\"><code>f770921</code></a>\nResolve assigning_clones clippy lint</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.57...1.0.58\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.57&new-version=1.0.58)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-18T16:12:23Z",
          "tree_id": "2fdbe9142da9f6ec8933b18285fc8f579a623d00",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6487cb61c0fc624ad4af15670057786b44cac68"
        },
        "date": 1710778810977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.770503,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.9310663,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.04436865609749,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.010270603731179,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2574146947427175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.081852,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.10408869999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.05285450072483,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0583058784187855,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5627436000775925,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.082887,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.793428,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.964126997673254,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.836336300260633,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4332471583805726,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.878996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.23702125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.581522256427014,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.030183373156497,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4223971986168733,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.4341725,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.8067111,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.789099592272926,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.469081925820909,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39583969439747585,
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
          "id": "690dfe9bbd30299284a83086523ab51576c0f48a",
          "message": "Build the CLI on Ubuntu 20.04. (#373)\n\n### What\n\nDowngrading Ubuntu from \"latest\" (22.04) to 20.04 means that it will\nalso be supported on that version and all subsequent versions. Currently\nit fails to start on Ubuntu 20.04 because the version of glibc linked\nagainst is too new.\n\n### How\n\nI have downgraded the Ubuntu runner we use for building the CLI from\n22.04 to 20.04.\n\nI have also fixed the Rust build cache to take the runner into account.",
          "timestamp": "2024-03-21T10:39:35Z",
          "tree_id": "0156a90ac426733a0f5e443fdffc64b41a0f8d31",
          "url": "https://github.com/hasura/ndc-postgres/commit/690dfe9bbd30299284a83086523ab51576c0f48a"
        },
        "date": 1711018063739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.573603,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.133852,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.38754708952792,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.567439243553117,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2673179390713034,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.621043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.19600675,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.43423990857008,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.258741360565388,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5930911014511738,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.4386495,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.26699089999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.71515423982217,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.755597475559085,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43399095756869266,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.045641,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.38716439999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.219469591601126,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.070330109499878,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4401268353881449,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.484764,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.2239755,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.61272690544531,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.833699056321024,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4153305171863157,
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
          "id": "b94fd3aaa6eef625a1a444c194a56c2201b44b94",
          "message": "Read Native Query SQL from files (#372)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nCurrently we can specify native queries by inlining their SQL as a\nstring in the `sql` field.\nWe'd like to be able to reference a `.sql` file instead, so we can avoid\nescaping characters and can use newlines.\n\nThe new config format will accept the following structures:\n\n```json\n\"sql\": \"<inline sql>\" (as before, but also:)\n\n\"sql\": { \"inline\": \"<inline sql>\" }\n\n\"sql\": { \"file\": \"<relative file path>\" }\n```\n\n### How\n\n- We parse the `NativeQuerySql` which represents the SQL field using an\nintermediate new type `NativeQuerySqlExternal`.\n- as part of the parse_configuration step and after serde\ndeserialization, we traverse the metadata and convert\n`NativeQuerySqlExternal` to `NativeQuerySql` by reading from file\n(performing IO) if needed, and parsing to `NativeQueryParts`. We use the\nconfiguration directory that the user supplied to locate the relative\npath.\n\nWe replace the existing `sql` field in nativequeryinfo with an Either\nexternal or internal representation. This is not ideal because it breaks\nthe parse don't validate principle.\nWe would like to mitigate this in the future by separating the\n`RawConfiguration` types and the (execution time) `Configuration` types\ncompletely.\nWe will do that as part of a larger ticket of redesigning the\nconfiguration format so it can be split across multiple files.",
          "timestamp": "2024-03-21T13:22:28Z",
          "tree_id": "22ca6c1de56a3f1bd6214d874da57f10d15d861f",
          "url": "https://github.com/hasura/ndc-postgres/commit/b94fd3aaa6eef625a1a444c194a56c2201b44b94"
        },
        "date": 1711027958803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.661201,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.4284708,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.440338984683248,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.201138597731887,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2701008019561778,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.3682225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.57072875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.79748985399351,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.339868249406244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5789860359829082,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.985116,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.95983159999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.054338719689895,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.0603094089427145,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4493360707298036,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.870964,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.92572544999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.05999272309128,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.120630117194786,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42655811472134647,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.7194755,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.180395,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.665558591734616,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.60666677303238,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.42705699723616475,
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
          "id": "3d095a3c2e33cae6e5d229d8505198e7d54d50db",
          "message": "When writing configuration files, always end them in a newline. (#374)\n\n### What\n\nThis is a personal pet peeve, mostly brought on by Git highlighting this\nin diffs.\n\n### How\n\nI have scattered `+ \"\\n\"` throughout the code, and added some test\nassertions to match.",
          "timestamp": "2024-03-21T14:33:35Z",
          "tree_id": "f83bdb1b7f607102448c51ca534376bc082b6211",
          "url": "https://github.com/hasura/ndc-postgres/commit/3d095a3c2e33cae6e5d229d8505198e7d54d50db"
        },
        "date": 1711032094412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 55.774277999999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 89.04893745,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.472536394549564,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.856745014801689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26446817871444633,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.08479299999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.02157549999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 57.924680013518866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.570146275585955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.624065710794947,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 72.81959950000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.44240274999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 44.95019619164794,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.233904568773575,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4636718416099398,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 67.6426115,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 94.83971374999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 42.450614643268736,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.999811575393423,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4406906989180537,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 66.05205,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.76367849999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 41.19886425384899,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.827478573315041,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4260828507693466,
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
          "id": "0ffa82f8457a777ae83f727d8a53549ea4447652",
          "message": "Prepare for releasing v0.5.1. (#375)",
          "timestamp": "2024-03-21T15:26:50Z",
          "tree_id": "3c314bccc42b373df55a37832267cd942f61c39b",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ffa82f8457a777ae83f727d8a53549ea4447652"
        },
        "date": 1711035285002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.682114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.14386859999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.607948370640976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.391457550886244,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2528581963394851,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.73186749999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.38177315,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.65545567990809,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.804632461898642,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5527117145724503,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.578011,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.63638929999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.1113879877855,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.248387818105108,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4276221118166538,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.4779235,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.9191876,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.026461927453845,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.076534548342082,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4088086831091706,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.577814000000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.23095055,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.66063682538137,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.764757625549741,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41459375665903797,
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
          "id": "bdb270288188d0e32e564ea369e27da6d73833c5",
          "message": "CI: Update the Docker Compose action owner. (#376)\n\nThe Docker Compose action we rely on has changed ownership and GitHub\nActions doesn't seem to want to automatically resolve the redirect.\n\nWe need to update this ourselves to fix our builds.",
          "timestamp": "2024-03-21T15:46:54Z",
          "tree_id": "b9989f2b19472fd85e777f470986ff2fcb42100b",
          "url": "https://github.com/hasura/ndc-postgres/commit/bdb270288188d0e32e564ea369e27da6d73833c5"
        },
        "date": 1711036506326,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.0703915,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.17888589999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.001314405840464,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.714928650466664,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2696932686377561,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.141031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.94934139999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.741990223023784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3217415325992974,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5841493826513334,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.719348,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.96552659999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.540507832801616,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.758626997519322,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45804231752768443,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.66295,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.94249879999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.18365528199027,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.947598832640857,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42593283099043094,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.243006,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.51604649999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.3059923825393,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.602484865622117,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4217000354329965,
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
          "id": "2e4b625a5aead1c9ebe299b2823b7539a0bf9548",
          "message": "CI: Cache Rust dependencies when running the E2E tests. (#377)\n\n### What\n\nThe E2E tests are currently our CI bottleneck. This speeds up the\nrunning time from ~5.5 minutes to ~2 minutes.\n\n### How\n\nWe introduce the `Swatinem/rust-cache` action to cache all dependencies\nacross the 3 repositories after building.",
          "timestamp": "2024-03-21T16:28:49Z",
          "tree_id": "c7c12a94e38ac743561dfa7703228731aa2b0743",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e4b625a5aead1c9ebe299b2823b7539a0bf9548"
        },
        "date": 1711038897265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.755147,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.976283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.04778727465636,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.44915323106694,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26375006522771965,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.9977185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.19936875000002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.278878040283814,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.358298536831164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6496515201424707,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.613108,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.4933725,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.693416277447504,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.711144846379604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45617627658840076,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.6025535,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.41434955,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.68692901422796,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.092671695471026,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40682512668093596,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.786612,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.923205,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.04017221290375,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.717891504109296,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41252020792105093,
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
          "id": "f79f1c1c0293890973d33bb7acc957e552b9b341",
          "message": "Use Rust 1.77.0 (#378)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpgrade to use Rust 1.77.0\n\nhttps://github.com/rust-lang/rust/releases/tag/1.77.0",
          "timestamp": "2024-03-25T09:18:37Z",
          "tree_id": "7686c732b554b55038ff2dde6a5da7af1fc3e26b",
          "url": "https://github.com/hasura/ndc-postgres/commit/f79f1c1c0293890973d33bb7acc957e552b9b341"
        },
        "date": 1711358947161,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.901214,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.245274,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.25886904391319,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.93984353796078,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2633332554362383,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.00971150000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.91721249999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.81858118895874,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.4540803530639437,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6143793649213433,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.780544,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.4332072,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.60001699796689,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.8355113008765755,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.43792668923985983,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.706622,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.258976,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.805598470970686,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.745468312008562,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4261527305120519,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.2253455,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.7744603,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.30288744240911,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.533760281527023,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4087733375111936,
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
          "id": "01ee8731cab11e65c149599f1b29d19093b876e4",
          "message": "NativeQuery refac leftovers (#379)\n\n### What\n\nTidy up a few leftovers from the recent change to have native queries\nable to live in files.\n\n### How\n\n`just generate-configuration`",
          "timestamp": "2024-03-25T09:46:46Z",
          "tree_id": "b672421249104ba811b07987c604b5db0a2201e2",
          "url": "https://github.com/hasura/ndc-postgres/commit/01ee8731cab11e65c149599f1b29d19093b876e4"
        },
        "date": 1711360412028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.764684,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 82.0144562,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.070906686201006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 10.18888509811169,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25815032406007454,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.609013,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.82652775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.60178641575676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.106085138648062,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.562898036050913,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.335282,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.41941479999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.66464380016684,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.546988969882435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4408947946719413,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.7430795,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.401477,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.46543740282637,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.544597416634247,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42650794165671596,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.139097,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.82746304999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.43153141651672,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.53110631979424,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3974232433163284,
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
          "id": "6b60788d2a2cdb925d57330c33ad03634f874b48",
          "message": "Add support for introspecting domain types (#380)\n\n### What\n\nThis PR adds support for introspecting domain types.\n\n### How\n\nPrior to this PR domain types were already recognised as scalar types.\nHowever, the ability to view a domain type transparently as its base\ntype was not, so you couldn't _do_ anything with values of domain type.\n\nThis PR adds cases to the set of implicit casts for domain types in the\nintrospection query, which enables support for comparison operators.",
          "timestamp": "2024-03-25T10:16:44Z",
          "tree_id": "3a9a0f7c809f4bd1a11cc9ef64c7dc63adc9798c",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b60788d2a2cdb925d57330c33ad03634f874b48"
        },
        "date": 1711362147086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.543670500000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.11179025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.637666906152713,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.781041171145436,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25378197649900186,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.56738,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.3879885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.620921492382415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2782652652583977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5766284905129545,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.772532,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.0036149,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.49024143502696,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.204994371940003,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44406264876936846,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.0846385,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.88830805,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.3064178613797,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.667728964797163,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3947190029658994,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.308596,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.44946284999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.61662104825221,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.666580307560935,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40812616039781535,
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
          "id": "73ab9219ada28235a92ffcf4cf6dbcfe60fc964f",
          "message": "Cast-extend aggregation functions (#381)\n\n### What\n\nThis PR makes the introspection of aggregation functions take implicit\ncasts into account.\n\nThis enables aggregation functions on domain types, which would\ntypically only be defined on the base type.\n\nIt also enables certain other aggregations for scalar types that weren't\ndefined before, most notably aggregation functions for `float4` on\nCockroachDB, which becomes accessible through implicit casts to\n`float8`.\n\n### How\n\nThe cast-extension for aggregation functions introspection code is based\non the same for comparison operators.\n\nWe also change our notion of \"occurring scalar types\" to include the\nreturn types aggregation functions. Previously, aggregation functions\ncould be filtered out if their return type didn't feature in the set of\noccurring scalar types, which was unnecessarily strict.",
          "timestamp": "2024-03-25T11:10:55Z",
          "tree_id": "e7db13ced5197288f47a10a9dd9a1a906d15b05a",
          "url": "https://github.com/hasura/ndc-postgres/commit/73ab9219ada28235a92ffcf4cf6dbcfe60fc964f"
        },
        "date": 1711365395393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.209702,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.085368,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.18986506757101,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.090602574581258,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2612099813234226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.493668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.73284464999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.18244709353861,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1842484010145995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.595234185950742,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.9213685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.33648414999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.392034193199045,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.4436211152577485,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4480256855430011,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.522973,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 83.9925356,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.980233151906766,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.596277460049421,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39780504469359523,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.970141,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 82.4148675,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.37174255741412,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.631865950447633,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4029200217376728,
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
          "id": "eae20afaca7d426fe78403646888927b60a9430f",
          "message": "Support enum types (#387)\n\n### What\n\nThis PR improves introspection support for enum types.\n\nComparison operators and aggregation functions on enum types are\nimplicitly defined in PostgreSQL and thus were not detected prior to\nthis PR.\n\n### How\n\nWe simply collect which enum types are defined and make up the\nconventional comparison operators and the min/max aggregation functions\nfor all enum types.\n\nWe test that we can select and aggregate enum types, and that we can\ninsert enum values which PostgreSQL validates.\n\nWe also collect the enum value labels, which we will be using once\nndc-spec v0.1.1 is released.",
          "timestamp": "2024-03-26T08:37:02Z",
          "tree_id": "ae2403a8cb91d9fc7280ea15daaa8b9356ae934d",
          "url": "https://github.com/hasura/ndc-postgres/commit/eae20afaca7d426fe78403646888927b60a9430f"
        },
        "date": 1711442543377,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.950968,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 79.7960212,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.734089127046904,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.75362949919403,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25473315308992045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.944184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 142.9132333,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.22068499680031,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2750415154155306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6198437614898002,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.176957,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.2975429,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.68236223931838,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.8008736011829285,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4390272831702428,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.606517,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 86.86124149999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.8171826208082,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.719896368573814,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42342533063583454,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.1352335,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.32335259999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.205490969081914,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.614440909486497,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.40121364172298235,
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
          "id": "1fccbb75adacde1f8a24219810358979093e8324",
          "message": "chore(deps): Bump uuid from 1.7.0 to 1.8.0 (#383)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.7.0 to 1.8.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.8.0</h2>\n<h2>⚠️ Potential Breakage ⚠️</h2>\n<p>A new <code>impl AsRef&lt;Uuid&gt; for Uuid</code> bound has been\nadded, which can break inference on code like:</p>\n<pre lang=\"rust\"><code>let b = uuid.as_ref();\n</code></pre>\n<p>You can fix these by explicitly typing the result of the\nconversion:</p>\n<pre lang=\"rust\"><code>let b: &amp;[u8] = uuid.as_ref();\n</code></pre>\n<p>or by calling <code>as_bytes</code> instead:</p>\n<pre lang=\"rust\"><code>let b = uuid.as_bytes();\n</code></pre>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: fix small spelling mistake by <a\nhref=\"https://github.com/bengsparks\"><code>@​bengsparks</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/737\">uuid-rs/uuid#737</a></li>\n<li>serde serialize_with support by <a\nhref=\"https://github.com/dakaizou\"><code>@​dakaizou</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/735\">uuid-rs/uuid#735</a></li>\n<li>Fix up CI builds by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/744\">uuid-rs/uuid#744</a></li>\n<li>Only add <code>wasm-bindgen</code> as a dependency on\n<code>wasm32-unknown-unknown</code> by <a\nhref=\"https://github.com/emilk\"><code>@​emilk</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/738\">uuid-rs/uuid#738</a></li>\n<li>impl AsRef<!-- raw HTML omitted --> for Uuid by <a\nhref=\"https://github.com/koshell\"><code>@​koshell</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/743\">uuid-rs/uuid#743</a></li>\n<li>Add v6 to v8 draft link to README by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/746\">uuid-rs/uuid#746</a></li>\n<li>Add a workflow for running cargo outdated by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/745\">uuid-rs/uuid#745</a></li>\n<li>Prepare for 1.8.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/747\">uuid-rs/uuid#747</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/bengsparks\"><code>@​bengsparks</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/737\">uuid-rs/uuid#737</a></li>\n<li><a href=\"https://github.com/dakaizou\"><code>@​dakaizou</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/735\">uuid-rs/uuid#735</a></li>\n<li><a href=\"https://github.com/emilk\"><code>@​emilk</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/738\">uuid-rs/uuid#738</a></li>\n<li><a href=\"https://github.com/koshell\"><code>@​koshell</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/743\">uuid-rs/uuid#743</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0\">https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/0f2aaaeab9d20ce1f724e6b31b5b47639c2afa95\"><code>0f2aaae</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/747\">#747</a> from\nuuid-rs/cargo/1.8.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/01d16c32baa7a3cf2543561e324f9dd00e93c82d\"><code>01d16c3</code></a>\nprepare for 1.8.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e4746bcbd5404004ccdee11cd8580365172b34df\"><code>e4746bc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/745\">#745</a> from\nuuid-rs/ci/outdated</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/d0396ad254a8a6ed6721bfeabe17892b85e1a9a7\"><code>d0396ad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/746\">#746</a> from\nuuid-rs/chore/draft-link</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/9415ed40171e9d404d563b0dbb4834fe8f890da5\"><code>9415ed4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/743\">#743</a> from\nkoshell/main</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/951e8e325e6bd886f42126d86ee48029404a4cd4\"><code>951e8e3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/738\">#738</a> from\nrerun-io/emilk/wasm-bindgen-only-on-web</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/101aa84c43b1ae51488f0c81be35cdaf0270f52f\"><code>101aa84</code></a>\nadd v6 to v8 draft link to README</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/84dcbba1bd928b482216bac847a772c37803461b\"><code>84dcbba</code></a>\nrun outdated on a schedule</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/ca952b14a8dcdab9b19dab519f84c123b0a6f4e6\"><code>ca952b1</code></a>\nadd a workflow for running cargo outdated</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/abe995a25888199de42b6163acd5f46a61d4c224\"><code>abe995a</code></a>\nMake the toml longer, more complicated, and functional</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.7.0...1.8.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.7.0&new-version=1.8.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:03:45Z",
          "tree_id": "2b8b57b1ead1561669653c0bc554b94208a29aa5",
          "url": "https://github.com/hasura/ndc-postgres/commit/1fccbb75adacde1f8a24219810358979093e8324"
        },
        "date": 1711444229808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.386754,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.286107,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.697301995243404,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.251349075947584,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.26095342481902434,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.357326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.1170192,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.34878805121076,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.231176120800562,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5773915746148521,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.452708,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 94.2494805,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.40314553650708,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.18719374577114,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4380812888443651,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.215271,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.99125615,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.040563639348626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.783315219595259,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4239866924085855,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.092084,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.73001799999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.36726238726854,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6430285324459675,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4085510518353271,
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
          "id": "d8b6689bb33058afe794f85f6c94c907fe53e402",
          "message": "chore(deps): Bump clap from 4.5.2 to 4.5.3 (#386)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.2 to 4.5.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.3</h2>\n<h2>[4.5.3] - 2024-03-15</h2>\n<h3>Internal</h3>\n<ul>\n<li><em>(derive)</em> Update <code>heck</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.3] - 2024-03-15</h2>\n<h3>Internal</h3>\n<ul>\n<li><em>(derive)</em> Update <code>heck</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/4e07b438584bb8a19e37599d4c5b11797bec5579\"><code>4e07b43</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8247c7ddf05d8023729ac180d8e8df260f1da5ff\"><code>8247c7d</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/677c52ce0870115845a4c42e204f6c049b81a1e7\"><code>677c52c</code></a>\nchore: Update <code>heck</code> requirement (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5396\">#5396</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/v4.5.2...v4.5.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.2&new-version=4.5.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:04:26Z",
          "tree_id": "ebbc41b4a4cbb114512740f08283d7bab0fb2f1a",
          "url": "https://github.com/hasura/ndc-postgres/commit/d8b6689bb33058afe794f85f6c94c907fe53e402"
        },
        "date": 1711444961210,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.717352,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.12876759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.91082784860322,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.920106786872715,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27560807990262,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.567125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 137.63460859999992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.4371743851744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.6862070277861534,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6359414788410702,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.6405175,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.06171794999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.43916261932235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.044483046005546,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4397577749381072,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.4440055,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.57599594999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.206739477237754,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.490030612975929,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3936437660109118,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.5521765,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.09563074999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.42883783014187,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.7140847456885595,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39941643881581285,
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
          "id": "81ec8a888f0bca5bba6ba6d1aef0cffb8f2f7d48",
          "message": "chore(deps): Bump indexmap from 2.2.5 to 2.2.6 (#385)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.2.5 to\n2.2.6.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/master/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.2.6</h2>\n<ul>\n<li>Added trait <code>MutableValues</code> for opt-in mutable access to\nset values.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/3f0fffb85b99a2a37bbee363703f8509dd03e2d7\"><code>3f0fffb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/323\">#323</a>\nfrom cuviper/mutable</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/33c1a7c771b255dc9376a36b7f2bfd39c5fefbcb\"><code>33c1a7c</code></a>\nFix <code>unused_imports</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b76ff73d54745fbf4126008b043ea22b1755736b\"><code>b76ff73</code></a>\nFix <code>clippy::multiple_bound_locations</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0060546c3040e11b4f34e2e0214d640059731d21\"><code>0060546</code></a>\nRelease 2.2.6</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/210b027a67e42cd196f07cf8b2f0ee498a4b1a80\"><code>210b027</code></a>\nOpt-in mutable access on IndexSet</li>\n<li>See full diff in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.2.5...2.2.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.2.5&new-version=2.2.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T09:33:14Z",
          "tree_id": "5553aa8e2c940dc068b9e16fec788553999fbb23",
          "url": "https://github.com/hasura/ndc-postgres/commit/81ec8a888f0bca5bba6ba6d1aef0cffb8f2f7d48"
        },
        "date": 1711449956931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.648298,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.86114495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.455568957522736,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.231667949470427,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27486200583679204,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.996253,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.20039469999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.502034563989994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5477363127206587,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6467611241496162,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.104272,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.49867119999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.7533204191775,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.647986602572338,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.45279763928046823,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.0437095,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 99.39769434999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.60943733147147,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.819069789132499,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39599388001681834,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.840221,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.931165,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.50496095210605,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.98437692786802,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.41208228353879456,
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
          "id": "d9f9a4275ffd1cdf4a82214bc8677b82a6643ed5",
          "message": "chore(deps): Bump bytes from 1.5.0 to 1.6.0 (#384)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.5.0 to 1.6.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes 1.6.0 (March 22, 2024)</h2>\n<h3>Added</h3>\n<ul>\n<li>Add <code>Bytes::is_unique</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/643\">#643</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Fix changelog typo (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/628\">#628</a>)</li>\n<li>Fix some spelling mistakes (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/633\">#633</a>)</li>\n<li>Typo fix (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/637\">#637</a>)</li>\n<li>Fix broken links (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/639\">#639</a>)</li>\n<li>Add security policy (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/649\">#649</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Move comment to correct constant (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/629\">#629</a>)</li>\n<li>Various cleanup (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/635\">#635</a>)</li>\n<li>Simplify <code>UninitSlice::as_uninit_slice_mut()</code> logic (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/644\">#644</a>)</li>\n<li>Use <code>self.</code> instead of <code>Self::</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/642\">#642</a>)</li>\n<li><code>BytesMut</code>: Assert alignment of <code>Shared</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/652\">#652</a>)</li>\n<li>Remove unnecessary namespace qualifier (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/660\">#660</a>)</li>\n<li>Remove an unnecessary else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/662\">#662</a>)</li>\n<li>Remove unreachable else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/661\">#661</a>)</li>\n<li>make parameter mut in <code>From&lt;Vec&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/667\">#667</a>)</li>\n<li>Restore commented tests (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/665\">#665</a>)</li>\n<li>Use <code>sub</code> instead of <code>offset</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/668\">#668</a>)</li>\n<li>Calculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li><code>set_vec_pos</code> does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><code>get_vec_pos</code>: use <code>&amp;self</code> instead of\n<code>&amp;mut self</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li>Refactor <code>split_at</code>/<code>split_to</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li>Use <code>Iterator</code> from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><code>copy_to_bytes</code>: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li>Remove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.6.0 (March 22, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>Add <code>Bytes::is_unique</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/643\">#643</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>Fix changelog typo (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/628\">#628</a>)</li>\n<li>Fix some spelling mistakes (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/633\">#633</a>)</li>\n<li>Typo fix (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/637\">#637</a>)</li>\n<li>Fix broken links (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/639\">#639</a>)</li>\n<li>Add security policy (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/649\">#649</a>)</li>\n</ul>\n<h3>Internal changes</h3>\n<ul>\n<li>Move comment to correct constant (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/629\">#629</a>)</li>\n<li>Various cleanup (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/635\">#635</a>)</li>\n<li>Simplify <code>UninitSlice::as_uninit_slice_mut()</code> logic (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/644\">#644</a>)</li>\n<li>Use <code>self.</code> instead of <code>Self::</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/642\">#642</a>)</li>\n<li><code>BytesMut</code>: Assert alignment of <code>Shared</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/652\">#652</a>)</li>\n<li>Remove unnecessary namespace qualifier (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/660\">#660</a>)</li>\n<li>Remove an unnecessary else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/662\">#662</a>)</li>\n<li>Remove unreachable else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/661\">#661</a>)</li>\n<li>make parameter mut in <code>From&lt;Vec&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/667\">#667</a>)</li>\n<li>Restore commented tests (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/665\">#665</a>)</li>\n<li>Use <code>sub</code> instead of <code>offset</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/668\">#668</a>)</li>\n<li>Calculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li><code>set_vec_pos</code> does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><code>get_vec_pos</code>: use <code>&amp;self</code> instead of\n<code>&amp;mut self</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li>Refactor <code>split_at</code>/<code>split_to</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li>Use <code>Iterator</code> from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><code>copy_to_bytes</code>: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li>Remove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li>Use <code>ManuallyDrop</code> instead of <code>mem::forget</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/ce8d8a0a029c0d296ade752ecc8c3e1ce9eee47f\"><code>ce8d8a0</code></a>\nchore: prepare bytes v1.6.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/681\">#681</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/536db06f168bdef967afbeac0561bf774e9a1315\"><code>536db06</code></a>\nUse ManuallyDrop instead of mem::forget (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/675\">#675</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/ca004117f86afccd36148dee7c8413cfaf9de6a4\"><code>ca00411</code></a>\nRemove commented tests for Bytes::unsplit (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/677\">#677</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/7968f6f83d17175683e04ce56aa48e44ed7d0d98\"><code>7968f6f</code></a>\nRemove redundant reserve call (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/674\">#674</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/c5fae00c76dbd1af7ea7b6cde7a9281d82ee7cd2\"><code>c5fae00</code></a>\ncopy_to_bytes: Add panic section to docs (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/676\">#676</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/99584cc10d66cb6880a20c5ac9b9a960f9c17823\"><code>99584cc</code></a>\nUse Iterator from the prelude (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/673\">#673</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/46289278f52a26c12298779f4aaebad1dcb26d35\"><code>4628927</code></a>\nRefactor split_at/split_to (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/663\">#663</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/1bcd2129d195a0722d8b5b1a16c7d33698701f2e\"><code>1bcd212</code></a>\nget_vec_pos: use &amp;self instead of &amp;mut self (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/670\">#670</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/f586ffc52589f01be1b4a44d6544b3d0226773d6\"><code>f586ffc</code></a>\nset_vec_pos does not need a second parameter (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/672\">#672</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/c6972d61328be113ec8e80c207815a4b84fe616c\"><code>c6972d6</code></a>\nCalculate original capacity only if necessary (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/666\">#666</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.5.0...v1.6.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.5.0&new-version=1.6.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-26T10:54:06Z",
          "tree_id": "4bf0da33e6bbaa288c1930053af67d65d762abe7",
          "url": "https://github.com/hasura/ndc-postgres/commit/d9f9a4275ffd1cdf4a82214bc8677b82a6643ed5"
        },
        "date": 1711450910231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.268857,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 77.6313514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.286573707188637,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.272731665797934,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25731583355090965,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.296869,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.2177365,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.06504538314838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.3091543711922995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.570233889078366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.504281,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.72105939999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.61527480499553,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.5011615066631165,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44783005553577476,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.637831500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.10590915,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.38332211387443,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.009958468926321,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39566953682898726,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.302075,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.235226,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.658979292331885,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.72292786513102,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39949446254308296,
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
          "id": "8f4ab4c74ee87a2808832812c02b2aff3b9c931e",
          "message": "Nix: Switch to nixpkgs-unstable, rather than nixos-unstable. (#389)\n\n### What\n\nIf we're going to be unstable, let's go all the way.\n\nThis change was motivated by needing to upgrade cargo-machete to make it\nwork with Rust v1.77, and not having the upgrade in nixos-unstable.\n\n### How\n\nI switched `nixpkgs` to the default branch.",
          "timestamp": "2024-03-26T15:13:28Z",
          "tree_id": "b3a37e0993c243a2068a27b02f3155d04c23357a",
          "url": "https://github.com/hasura/ndc-postgres/commit/8f4ab4c74ee87a2808832812c02b2aff3b9c931e"
        },
        "date": 1711466358001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 53.553754,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 81.30600675000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.518671664018377,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.51844663827805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2721975374402645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 94.770299,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.9783585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.22598558842312,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.538211984996842,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6335994888200174,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.8078445,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.43035175,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.68884979628817,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.072369324265608,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4460123613105019,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.6895735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.42558774999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.34095227070501,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.994252815263785,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.42297726655046497,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.325182,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.6342552,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.1421790641774,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.635137757267358,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3996999040620021,
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
          "id": "7fbfa1718ad5729e7070e3ccba03598fba3e8b90",
          "message": "Upgrade ndc-spec to v0.1.1. (#390)\n\n### What\n\nThis includes:\n\n- type representations in the models\n- upgrading the OpenTelemetry SDK\n- adding a feature switch to support `rustls` instead of `native-tls`\n- a lot of enhancements to ndc-test\n\nndc-sdk was upgraded in https://github.com/hasura/ndc-sdk-rs/pull/1.\n\nWe do not actually specify type representations in this changeset. We\nwill add these in a follow-up change.\n\n### How\n\nI discovered we can specify workspace dependencies, which means the\nversions only need to go in one place. I am experimenting with this\nCargo feature in this changeset. If we like it, we may want to use it\nfor all dependencies.",
          "timestamp": "2024-03-27T11:12:17Z",
          "tree_id": "e1d06867fa357b854f4a503cd8b38803e189338a",
          "url": "https://github.com/hasura/ndc-postgres/commit/7fbfa1718ad5729e7070e3ccba03598fba3e8b90"
        },
        "date": 1711538460858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.122977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 76.86818149999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.215269604420815,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.550462884867866,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25377588654359645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.069839,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.8145038,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.25453105354432,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.797214638409862,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5539322683796559,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 69.171794,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 98.2658433,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.901432195400545,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.124450960186778,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.44558390197609776,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.3941875,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.500514,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.86000126901347,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.7291227224485155,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3878367127938132,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.4026675,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 87.1266169,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.600401158258165,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.275631453547774,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38361759645150967,
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
          "id": "cfd0d295ecff3b9f67c6bae8ffc7c8bf3a649794",
          "message": "Support introspecting composite types (#391)\n\n### What\n\nThis PR adds the ability of the introspection query to detect composite\ntypes, meaning user-defined record types that do not arise from a table\nbut exist as standalone definitions.\n\nThis even discovered a typo in the previous, manually crafted composite\ntype metadata.\n\nSupport for cockroachdb is limited here until\nhttps://github.com/cockroachdb/cockroach/issues/109675 is released.\n\n### How\n\n**Introspection Query** now captures composite types, filtering out the\ntables. Making metadata json out of these is quite similar to how we\nalready did tables, so no huge surprises here.\n\n**Occurring types logic** now becomes somewhat more complex because we\ncan no longer simply look at which type names are used in the\ncollections we track. A composite type occurring in say, a table column,\nmay refer to scalar types that don't occur anywhere else, and even other\ncomposite types. Occurring type discovery thus becomes an iterative\nprocedure rather than a single pass.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-28T13:01:26Z",
          "tree_id": "c686a674228ec8611166637cdba79a1aa1f4c97c",
          "url": "https://github.com/hasura/ndc-postgres/commit/cfd0d295ecff3b9f67c6bae8ffc7c8bf3a649794"
        },
        "date": 1711631256571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.150489,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.11206495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.91740664618708,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.818604719333404,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.261726100622139,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 98.82815,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 144.42176294999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.553598572732895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.142937906167319,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5805992061269294,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.336603,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.9903346,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.20975258307339,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.5111463690110725,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4358497858628646,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 67.605176,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 96.23833400000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 41.31602430243152,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.785932920537938,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.4184631518465419,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.867638,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 94.51360779999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.90250649347793,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.110196390015936,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4117607122858909,
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
          "id": "1f6193186ecd7a909b07d68c784cf8686d38f9a7",
          "message": "Use AURORA_CONNECTION_URI instead of inconsistent  variables (#394)\n\n### What\n\nInternally we use two variable names for the same purpose:\n`AURORA_CONNECTION_URI` and `AURORA_CONNECTION_STRING`. This PR renames\nall uses of `AURORA_CONNECTION_STRING` to `AURORA_CONNECTION_URI`.\n\n### How\n\nRename everything, and create a new action env variable in the repo.",
          "timestamp": "2024-03-28T14:12:49Z",
          "tree_id": "4adb4cd427d0629e94c808763b7d3294aa9c20a3",
          "url": "https://github.com/hasura/ndc-postgres/commit/1f6193186ecd7a909b07d68c784cf8686d38f9a7"
        },
        "date": 1711635522800,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.322305,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.9372504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.697970737685214,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.079917640515067,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2554456748516744,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.745784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.5804576,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.73140303816224,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.9048771453352913,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5461786935772396,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 65.534227,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 91.34278599999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 39.562614775293014,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.60110373870053,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4056118487497052,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.273703999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.301262,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.74262533881452,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.3885158796684465,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3938610811343722,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.6338175,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 83.42140045,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.985071377192924,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9865390916112773,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.39105180825290026,
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
          "id": "fe986fb4dad97a98fa2dc5ffb2d73067268d8ce9",
          "message": "Iteratively apply implicit casts (#392)\n\n### What\n\nThis PR improves the handling of implicit casts during introspection by\ncomputing the transitive closure of implicit casts.\n\nThis is necessary to e.g. support any domain types defined over\n`varchar`.\nFrom `domain-types.sql`:\n\n```\n-- This type tests that we consider implicit casts iteratively. If we didn't\n-- \"Phone\" wouldn't have any comparison operators defined. with iterative\n-- implicit casting, Phone gets to inherit the oprators of \"text\" via the\n-- successive casts \"Phone -> varchar -> text\".\nCREATE DOMAIN \"Phone\" varchar(20);\n```\n\nThis type is used in the AdventureWorks sample database. Without this\nchange we don't generate any comparison operators for `Phone`, which\nmeans e.g. it cannot participate in relationships.\n\n### How\n\nIn order to compute the transitive closure we use a recursive CTE\nstatement, where we combinatorically collect cast-arrows, taking care to\nstop whenever we encounter a cycle, which may occur (e.g., `varchar` and\n`text` values are completely interchangeable).\n\nIn addition we record the path of types each transitive cast takes,\nwhich we can now use for debugging as well as preferring \"less casted\"\nvariants over \"more casted\" variants (of comparison functions for\nexample) rather than simply \"casted or not\" variants.\n\nIn making this I discovered that both cast paths `varchar -> text` and\n`varchar -> bpchar` exist, and many of the same functions are defined\nfor both `text` and `bpchar`. Because we use lexicographic sorting as a\ntie-breaker we would sometimes wind up functions taking `bpchar`\narguments. Since `text` seems like a much more conventional choice most\ntimes I simply elected to censor the `varchar -> bpchar` and `text ->\nbpchar` casts.\n\nAnother side-effect of this is that, because a few functions on\ngeography/geometry types such as `st_covers` etc. are also defined for\n`text` _directly_ they now become available on all types that are\niteratively implicitly castable to text. This is an issue to address\nlater however.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-03-29T08:45:08Z",
          "tree_id": "eb872a0ea900d1693d0a57d51054f10dbf8be35e",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe986fb4dad97a98fa2dc5ffb2d73067268d8ce9"
        },
        "date": 1711702315700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 45.740107,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 68.26641090000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 24.560301952665412,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.113010769302598,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.23641772714967138,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 84.808824,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 121.16581299999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.16315007766059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.4968693348731676,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.47542907783506233,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 61.816849500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.143674,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 37.6534380832268,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.171946621423274,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3783525495660386,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 57.5795565,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 82.02267235,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 35.576302065669836,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9910183181221015,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3557308433609312,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 56.392954,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 79.7584439,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 34.61516361598398,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8142678429717947,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34754596859433406,
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
          "id": "805bc53209b9c8f7ca184b5a76bf86da5f47a1a3",
          "message": "prepare v0.5.2 (#396)\n\n### What\n\nPrepare for v0.5.2 release.\n\n### How\n\nUpdate the changelog and bump the version.",
          "timestamp": "2024-03-29T13:35:37Z",
          "tree_id": "e9c0b0daaa98a65c97b640d04af9c78eec380360",
          "url": "https://github.com/hasura/ndc-postgres/commit/805bc53209b9c8f7ca184b5a76bf86da5f47a1a3"
        },
        "date": 1711719672955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.028807,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 75.7908962,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.396681730916026,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.32891098507903,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24961090655394408,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.734045,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 135.06250125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.3399536455529,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2900916389148733,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5922179556227765,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.243386,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.606424,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.91802752264868,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.770362993145028,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42363803879551976,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.960581000000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.566728,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.89262371581422,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.640839695524349,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.40596143097554344,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.576914,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.455421,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.15624736781095,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.771770771479311,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3905246517416216,
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
          "id": "9b606a1ee8386c9f19e7838908ed22bfcfb1368d",
          "message": "bring back archived configs (#395)\n\n### What\n\nWe no longer break compatibility, so it's time to bring back the test\nthat checks that we can still read older configurations.\n\n### How\n\nThe script now has to keep a directory rather than a file.",
          "timestamp": "2024-04-01T06:36:28Z",
          "tree_id": "dc223e948505631ab6c92cad1005c6cc105943fc",
          "url": "https://github.com/hasura/ndc-postgres/commit/9b606a1ee8386c9f19e7838908ed22bfcfb1368d"
        },
        "date": 1711953810382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.959799,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 74.67073869999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.626965012782723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.663248926357088,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24805612679157998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.550532,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.9477878,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 54.21137524181729,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.0717593000575576,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5958536079134193,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.08887,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.3814335,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.02266497841793,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.490492969378103,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41873838939096775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.378248,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.03644279999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.42330213855072,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.918164301257093,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3953059903904272,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.493289,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.9896838,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.68844622253475,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.143046330350558,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.38648340550878124,
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
          "id": "5ec39c09b81754bc55f3d5480082c2065902efa7",
          "message": "Add enum type representations (#397)\n\n### What\n\nndc-spec 0.1.1 introduce an [optional type representation\nhint](https://hasura.github.io/ndc-spec/specification/schema/scalar-types.html#type-representations).\nIn this PR we provide type representation for enum values.\n\n### How\n\n1. We add a new `TypeRepresentations` field to our metadata, similar to\naggregate functions and comparison operators\n2. We already query for the enum types and variants, now we also return\nthose from sql to rust and into the metadata.\n3. For each scalar type, we try to look for their name in type reps, and\nreturn it if we find it.",
          "timestamp": "2024-04-01T10:01:04Z",
          "tree_id": "31ecb1ecb9eef9525f5d4ccced4b88da49fa2043",
          "url": "https://github.com/hasura/ndc-postgres/commit/5ec39c09b81754bc55f3d5480082c2065902efa7"
        },
        "date": 1711966019874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 51.422862,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 78.13563219999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 28.04490759097836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.778425093893041,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2573341590613401,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.693216,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 132.678538,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.90244183798379,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.2070172392886747,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6093492151704625,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.070257,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 99.37076695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.762899612960666,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.82423676682339,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4237451054203116,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.203752,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 87.3483009,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.73106970782951,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.339902714747872,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.408211135579466,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.313469,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.60537549999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.53500188196903,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.333684382856056,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3801765335778548,
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
          "id": "8ee6d48cb89bd265137bcaba814dc50ed2594692",
          "message": "experimental mutations version with boolean expressions (#393)\n\n### What\n\nWe introduce a new experimental mutations version. This version is\nintended to be used as a WIP version not for public consumption.\nIt also introduces an update delete mutation that contains a `filter`\npredicate field.\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n1. Introduce a new mutations version: `VeryExperimentalWip`.\n2. Take the existing `insert`, `delete`, `translate` and `generate`\nmodules, duplicate them, and place them in `v1/` and `experimental/`\ndirectories.\n3. Add and modify existing code to dispatch on operations from the right\nmodule according to the mutations version in the config.\n4. Add a new `filter` field for the delete operation which will be\ninterpreted as a boolean expression and added as a `WHERE` clause in the\ndelete sql.\n5. Expose this new field as part of the schema as a boolean expression\nover the collection.",
          "timestamp": "2024-04-01T11:15:23Z",
          "tree_id": "2ed04c690af2d2f5d4873ae4bfa4f1899f3bb505",
          "url": "https://github.com/hasura/ndc-postgres/commit/8ee6d48cb89bd265137bcaba814dc50ed2594692"
        },
        "date": 1711970556816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.599962,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 71.4641697,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.995279912081834,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.991432910978354,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25052409273283716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.06995850000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 133.74605595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.49905862820502,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1971814121423776,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.6046555877643532,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.454666,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 93.90929219999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.40527922411886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.534391376226623,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42841659225972356,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.203136,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.0887162,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.777766419062964,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.647525184168224,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37441975922465914,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.6382605,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.868973,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.200961966037575,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.314626287493731,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.4053774147405919,
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
          "id": "e6e547b673de7cc939a0a625c07ab062b355ed54",
          "message": "Support type representations in general (#398)\n\n### What\n\nThis PR adds support for type representations for base types and domain\ntypes, building on top of the existing support for type representation\nhinting of enum types.\n\nNote that the wide numeric types default to numeric representation, see\nthe comment in the code. This will be relayed in the user docs in a\nfollow-up PR.\n\n### How\n\nThe introspection query is seeded with a list of type representations\nfor base types, which it will use to build the final list of\nrepresenations for base types, domain types, and enum types.",
          "timestamp": "2024-04-01T13:49:41Z",
          "tree_id": "2f7cb48217c96ed198c7da96154c2f9348ba8e0b",
          "url": "https://github.com/hasura/ndc-postgres/commit/e6e547b673de7cc939a0a625c07ab062b355ed54"
        },
        "date": 1711979809956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.021865000000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 80.7647408,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.468922147861203,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.76404029259108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.25603244904995753,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 95.708857,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 141.20776775,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 56.29945287631306,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.5306275028737133,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5616010102084836,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 70.606907,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 96.05102004999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 43.70903133544671,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.609647939658572,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4475100180734186,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 64.290445,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 91.68979039999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.64932017557108,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.783553419660485,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3992526148657045,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 63.339738,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.2022954,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 39.241803380673545,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.252465017711458,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.384611089600575,
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
          "id": "146261ee0c61db3b0f3be791395db3a1d064d7f5",
          "message": "chore(deps): Bump tokio from 1.36.0 to 1.37.0 (#400)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.36.0 to 1.37.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.37.0</h2>\n<h1>1.37.0 (March 28th, 2024)</h1>\n<h3>Added</h3>\n<ul>\n<li>fs: add <code>set_max_buf_size</code> to\n<code>tokio::fs::File</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6411\">#6411</a>)</li>\n<li>io: add <code>try_new</code> and <code>try_with_interest</code> to\n<code>AsyncFd</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6345\">#6345</a>)</li>\n<li>sync: add <code>forget_permits</code> method to semaphore (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6331\">#6331</a>)</li>\n<li>sync: add <code>is_closed</code>, <code>is_empty</code>, and\n<code>len</code> to mpsc receivers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6348\">#6348</a>)</li>\n<li>sync: add a <code>rwlock()</code> method to owned\n<code>RwLock</code> guards (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6418\">#6418</a>)</li>\n<li>sync: expose strong and weak counts of mpsc sender handles (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6405\">#6405</a>)</li>\n<li>sync: implement <code>Clone</code> for <code>watch::Sender</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6388\">#6388</a>)</li>\n<li>task: add <code>TaskLocalFuture::take_value</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6340\">#6340</a>)</li>\n<li>task: implement <code>FromIterator</code> for <code>JoinSet</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6300\">#6300</a>)</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>io: make <code>io::split</code> use a mutex instead of a spinlock\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6403\">#6403</a>)</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>docs: fix docsrs build without net feature (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6360\">#6360</a>)</li>\n<li>macros: allow select with only else branch (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6339\">#6339</a>)</li>\n<li>runtime: fix leaking registration entries when os registration fails\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6329\">#6329</a>)</li>\n</ul>\n<h3>Documented</h3>\n<ul>\n<li>io: document cancel safety of <code>AsyncBufReadExt::fill_buf</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6431\">#6431</a>)</li>\n<li>io: document cancel safety of <code>AsyncReadExt</code>'s primitive\nread functions (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6337\">#6337</a>)</li>\n<li>runtime: add doc link from <code>Runtime</code> to\n<code>#[tokio::main]</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6366\">#6366</a>)</li>\n<li>runtime: make the <code>enter</code> example deterministic (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6351\">#6351</a>)</li>\n<li>sync: add Semaphore example for limiting the number of outgoing\nrequests (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6419\">#6419</a>)</li>\n<li>sync: fix missing period in broadcast docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6377\">#6377</a>)</li>\n<li>sync: mark <code>mpsc::Sender::downgrade</code> with\n<code>#[must_use]</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6326\">#6326</a>)</li>\n<li>sync: reorder <code>const_new</code> before <code>new_with</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6392\">#6392</a>)</li>\n<li>sync: update watch channel docs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6395\">#6395</a>)</li>\n<li>task: fix documentation links (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6336\">#6336</a>)</li>\n</ul>\n<h3>Changed (unstable)</h3>\n<ul>\n<li>runtime: include task <code>Id</code> in taskdumps (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6328\">#6328</a>)</li>\n<li>runtime: panic if <code>unhandled_panic</code> is enabled when not\nsupported (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6410\">#6410</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6300\">#6300</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6300\">tokio-rs/tokio#6300</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6326\">#6326</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6326\">tokio-rs/tokio#6326</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6328\">#6328</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6328\">tokio-rs/tokio#6328</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6329\">#6329</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6329\">tokio-rs/tokio#6329</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6331\">#6331</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6331\">tokio-rs/tokio#6331</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6336\">#6336</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6336\">tokio-rs/tokio#6336</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6337\">#6337</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6337\">tokio-rs/tokio#6337</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/9c337ca1a306be38e3474082be14bdef4bcb45b5\"><code>9c337ca</code></a>\nchore: prepare Tokio v1.37.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6435\">#6435</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e5425014392de0a44c27fac054472b4c3926ef26\"><code>e542501</code></a>\nio: document cancel safety of <code>AsyncBufReadExt::fill_buf</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6431\">#6431</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4601c84718aafa9e46fed1c16f31dd500052b368\"><code>4601c84</code></a>\nstream: add <code>next_many</code> and <code>poll_next_many</code> to\n<code>StreamMap</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6409\">#6409</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/deff2524c354d3d3038e1c3813032701946a5c68\"><code>deff252</code></a>\nutil: document cancel safety of <code>SinkExt::send</code> and\n<code>StreamExt::next</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6417\">#6417</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4565b81097e8938761431592c0ad36df3bd20cd2\"><code>4565b81</code></a>\nsync: add a <code>rwlock()</code> method to owned <code>RwLock</code>\nguards (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6418\">#6418</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3ce4720a4532e40c78f7d851b1cfb8ea26542177\"><code>3ce4720</code></a>\nsync: add <code>is_closed</code>, <code>is_empty</code>, and\n<code>len</code> to mpsc receivers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6348\">#6348</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/8342e4b524984d5e80168da89760799aa1a2bfba\"><code>8342e4b</code></a>\nutil: assert compatibility between <code>LengthDelimitedCodec</code>\noptions (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6414\">#6414</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/4c453e9790d1cc5a2fd5c13fc2f63a145a3fd8da\"><code>4c453e9</code></a>\nreadme: add description about benchmarks (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6425\">#6425</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/1846483f1953f6ac4dd89f434e78ff99eb0c92f9\"><code>1846483</code></a>\nsync: expose strong and weak counts of mpsc sender handles (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6405\">#6405</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/baad270b98acbc735f9e8baddc93ae8a18a652ce\"><code>baad270</code></a>\nsync: add Semaphore example for limiting the number of outgoing requests\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6419\">#6419</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.36.0...tokio-1.37.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.36.0&new-version=1.37.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-04-02T09:57:08Z",
          "tree_id": "175b92670dbf6920300d62097533854024da949d",
          "url": "https://github.com/hasura/ndc-postgres/commit/146261ee0c61db3b0f3be791395db3a1d064d7f5"
        },
        "date": 1712052236989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.660432,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.949161,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.966656859663246,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.479650002730196,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24667085238359032,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 90.487441,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 130.52614075,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.37707845382924,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.975057100593304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5658263233821528,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.142812,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 92.66991029999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.486035325846494,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.0104430684114405,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4171083483757098,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.2118215,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 88.09910454999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.503839594151884,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.314804487897021,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37463971747984076,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 59.738028,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.673677,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 36.89068210545932,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.092110038569189,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.365911475374368,
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
          "id": "5df027b22c83d81450a1191356133e5e4e8a397e",
          "message": "chore(deps): Bump insta from 1.37.0 to 1.38.0 (#399)\n\nBumps [insta](https://github.com/mitsuhiko/insta) from 1.37.0 to 1.38.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/releases\">insta's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.38.0</h2>\n<h2>Release Notes</h2>\n<ul>\n<li>\n<p><code>Filters</code> is now constructible from\n<code>IntoIterator</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/400\">#400</a></p>\n</li>\n<li>\n<p>Change <code>std</code> macro calls to be fully qualified. This fixes\nissues where\nthe prelude was not used or the macros were overridden. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a></p>\n</li>\n</ul>\n<h2>Install cargo-insta 1.38.0</h2>\n<h3>Install prebuilt binaries via shell script</h3>\n<pre lang=\"sh\"><code>curl --proto '=https' --tlsv1.2 -LsSf\nhttps://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-installer.sh\n| sh\n</code></pre>\n<h3>Install prebuilt binaries via powershell script</h3>\n<pre lang=\"sh\"><code>powershell -c &quot;irm\nhttps://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-installer.ps1\n| iex&quot;\n</code></pre>\n<h2>Download cargo-insta 1.38.0</h2>\n<table>\n<thead>\n<tr>\n<th>File</th>\n<th>Platform</th>\n<th>Checksum</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-aarch64-apple-darwin.tar.xz\">cargo-insta-aarch64-apple-darwin.tar.xz</a></td>\n<td>Apple Silicon macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-aarch64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-apple-darwin.tar.xz\">cargo-insta-x86_64-apple-darwin.tar.xz</a></td>\n<td>Intel macOS</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-apple-darwin.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-pc-windows-msvc.zip\">cargo-insta-x86_64-pc-windows-msvc.zip</a></td>\n<td>x64 Windows</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-pc-windows-msvc.zip.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz\">cargo-insta-x86_64-unknown-linux-gnu.tar.xz</a></td>\n<td>x64 Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-gnu.tar.xz.sha256\">checksum</a></td>\n</tr>\n<tr>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz\">cargo-insta-x86_64-unknown-linux-musl.tar.xz</a></td>\n<td>x64 MUSL Linux</td>\n<td><a\nhref=\"https://github.com/mitsuhiko/insta/releases/download/1.38.0/cargo-insta-x86_64-unknown-linux-musl.tar.xz.sha256\">checksum</a></td>\n</tr>\n</tbody>\n</table>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/mitsuhiko/insta/blob/master/CHANGELOG.md\">insta's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>1.38.0</h2>\n<ul>\n<li>\n<p><code>Filters</code> is now constructible from\n<code>IntoIterator</code>. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/400\">#400</a></p>\n</li>\n<li>\n<p>Change <code>std</code> macro calls to be fully qualified. This fixes\nissues where\nthe prelude was not used or the macros were overridden. <a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a></p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ff83624376ee54e558481eec9f1e64af003c64d4\"><code>ff83624</code></a>\n1.38.0</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/2e79e3d70ee006f4f9b1995bd7ba516f78712419\"><code>2e79e3d</code></a>\nAdd changelog entry</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/9afc3c8538316c9660d5362dde51fe818447c6c8\"><code>9afc3c8</code></a>\nMerge branch 'master' of github.com:mitsuhiko/insta</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/1d702385e13cdfc2bf81616c7b4b349501856c12\"><code>1d70238</code></a>\nMake Filters constructible from IntoIterator</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/e90e71de2af1e00ebeda45fd134b22ac92a289dd\"><code>e90e71d</code></a>\nChange std macro calls to be fully qualified (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/4dcccca2c7e25d205351f7215a9a9f9e7a79e98d\"><code>4dcccca</code></a>\nMove insta to folder (<a\nhref=\"https://redirect.github.com/mitsuhiko/insta/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/mitsuhiko/insta/commit/ca2faf9a1296f6bb4af743c2aff239be6b16669d\"><code>ca2faf9</code></a>\nConfigure cargo-dist</li>\n<li>See full diff in <a\nhref=\"https://github.com/mitsuhiko/insta/compare/1.37.0...1.38.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=insta&package-manager=cargo&previous-version=1.37.0&new-version=1.38.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-04-02T10:01:29Z",
          "tree_id": "03c0764bc143f9f1166215de9a3c71fe6efe0d72",
          "url": "https://github.com/hasura/ndc-postgres/commit/5df027b22c83d81450a1191356133e5e4e8a397e"
        },
        "date": 1712052773874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.097206,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.07852375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.845707999055836,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.8445066110004085,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2554647083373199,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.908604,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.109597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.06233987496495,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.929904352969068,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5317468120250352,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.241585,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 101.0045561,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.172856930850365,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.399688804657551,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4170922677683806,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.345518,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 85.9496516,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.0428395563244,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.182533142031652,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38346250853575553,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.965523,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 88.34893539999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.676969610215956,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.550617366951521,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3766674837234947,
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
          "id": "c87f6352742a9e15683b045aabbcfa9378946b18",
          "message": "Enable pedantic Clippy warnings, and disable anything that fails. (#402)\n\n### What\n\nTwo reasons:\n\n1. so we don't add more unknowingly, and\n2. so we can eradicate them over time, if we feel like it.\n\n### How\n\nI added the lints to `Cargo.toml`.",
          "timestamp": "2024-04-03T13:55:43Z",
          "tree_id": "b2e714fd32d9bae4a4542d5fa847d2ddcfb16d6c",
          "url": "https://github.com/hasura/ndc-postgres/commit/c87f6352742a9e15683b045aabbcfa9378946b18"
        },
        "date": 1712152882408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 49.27486,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 71.0126355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 26.936268827975233,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 8.04366123182897,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2448936382785493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 91.546756,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.2111796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.36495892272761,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1465688870712185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5743786874110688,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 66.37042,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.86372779999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.89325851465429,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.129042936234626,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42409538430946186,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 61.959939500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 89.6267882,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 37.8349075228476,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.569534556602633,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39375165134909257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 60.932859,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 84.94695275,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.16019376761642,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.531378245871643,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37865273534572985,
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
          "id": "db09d203e9d2351b6a5e3056c5465f4b87396a5d",
          "message": "Use references more often to avoid cloning. (#403)\n\n### What\n\nOften, we accept parameters by value when a reference would do. This\nmeans the caller might have to unnecessarily clone the value.\n\nClippy helped me figure out where this was unnecessary.\n\nThis changeset was brought to you by waiting for a meeting to start.\n\n### How\n\nI enabled some pedantic Clippy warnings and followed the trail.",
          "timestamp": "2024-04-03T17:11:14Z",
          "tree_id": "e17e751cf9749e926d2aade3606585d6315a5939",
          "url": "https://github.com/hasura/ndc-postgres/commit/db09d203e9d2351b6a5e3056c5465f4b87396a5d"
        },
        "date": 1712164793482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.289491,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 73.29574095,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.455183411739913,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.490398335007779,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24344425224717348,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 92.59751800000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 129.47929735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.653116183846954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.5994959420278363,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.4885996564217004,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 68.35037650000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 97.81085889999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 41.49388903623109,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.69387178800315,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41508503077076714,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 63.310306,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 92.7582337,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 39.09569670827008,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.501909714758355,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3718899606038602,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 62.771263000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 85.91006499999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 38.77269286152636,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.347739777272359,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.36689114959041735,
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
          "id": "87eb8b65e3151b807f3e27357568a0ca96e79135",
          "message": "bugfix: The schema for native query procedures should return _response object (#405)\n\n### What\n\nThe schema for native queries procedure should specify the result type\nto be a _response object (which contains affected_rows / returning\nfields) instead of just the returning fields.\n\n### How\n\nUse the dedicated method for creating procedure info like we do for\nother procedure schema.",
          "timestamp": "2024-04-04T13:02:38Z",
          "tree_id": "70f2268589803610d7ccf1492a1448f80e7f812a",
          "url": "https://github.com/hasura/ndc-postgres/commit/87eb8b65e3151b807f3e27357568a0ca96e79135"
        },
        "date": 1712236140178,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 52.974722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 83.79171294999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 29.06094465683156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 9.466422928289767,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2447319772280545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 97.807271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 143.052107,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 55.08625436861598,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 3.1280018575001094,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5362106474062327,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 71.16536,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 103.341381,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 42.92532237029912,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.622024042800909,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.42482408968175206,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 65.75921199999999,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 94.48883665,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 40.88433243130626,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.034229447227851,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.37826958550685563,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 65.113897,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 90.44843900000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 40.3958306290594,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.479826043548734,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37431907406678144,
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
          "id": "9c811bbbb6235687b7a42b620269d080c9d9e279",
          "message": "Support nested fields of object type (#404)\n\n### What\n\nThis PR adds support for selecting nested fields that arise from\ncomposite objects.\n\nThe case for nested fields which are arrays will be treated in a\nfollowup PR.\n\n### How\n\n* Handling of field selection is now recursive and lives in its own\nfunction.\n* A dedicated case handling nested fields has been added. Each field at\neach layer of nesting adds another lateral join\n\nThe SQL generated is of the form\n```\n///   SELECT\n///     coalesce(json_agg(row_to_json(\"%6_rows\")), '[]') AS \"rows\"\n///   FROM\n///     (\n///       SELECT\n///         \"%3_nested_fields_collect\".\"collected\" AS \"result\"\n///       FROM\n///         <current table> AS \"%0_<current table>\"\n///         LEFT OUTER JOIN LATERAL (\n///           SELECT\n///             (\"%0_<current table>\".\"<composite column>\").*\n///         ) AS \"%2_nested_field_bound\" ON ('true')\n///         LEFT OUTER JOIN LATERAL (\n///           SELECT\n///             row_to_json(\"%4_nested_fields\") AS \"collected\"\n///           FROM\n///             (\n///               SELECT\n///                 \"%2_nested_field_bound\".\"<nested column>\" AS \"<nested field alias>\"\n///             ) AS \"%4_nested_fields\"\n///         ) AS \"%3_nested_fields_collect\" ON ('true')\n///     ) AS \"%6_rows\"\n```",
          "timestamp": "2024-04-04T18:28:08Z",
          "tree_id": "7ad1ce93c70f247bec5167f9f1cfc7be8d0b49a3",
          "url": "https://github.com/hasura/ndc-postgres/commit/9c811bbbb6235687b7a42b620269d080c9d9e279"
        },
        "date": 1712255618544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 50.1430235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 70.08914779999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 27.631739698845347,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.701237361628689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.24462533817853527,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 93.377912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 134.21463579999985,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.533713665233705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 2.8015578143691684,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.5295245983568797,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 67.6022035,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.98750399999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 40.89271996664311,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.08196629950843,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4070475613063083,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 62.8007165,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 90.52671925,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 38.30742020528945,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.629624376669163,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3816384728986842,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 61.294828,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 86.617943,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 37.163856201115564,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.301347386322014,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3628345272231096,
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
      }
    ]
  }
}