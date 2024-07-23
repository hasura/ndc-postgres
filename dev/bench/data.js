window.BENCHMARK_DATA = {
  "lastUpdate": 1721728392052,
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
          "id": "80a9b5180a83a9277d9b613a3f6f83927649b593",
          "message": "Refactor: Use functions for identifier names instead of unwrapping (#488)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nSmall refactor: in sql::convert, instead of using unwrapping newtypes\nand using sql.append_identifier for table names, column names, and\nschema names, just implement a dedicated function (`impl` of `to_sql`)\nfor each and use that.",
          "timestamp": "2024-06-03T14:44:27Z",
          "tree_id": "200d0b0f59894048e5143c869236bbf2a0876dd2",
          "url": "https://github.com/hasura/ndc-postgres/commit/80a9b5180a83a9277d9b613a3f6f83927649b593"
        },
        "date": 1717426323617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.133265,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.135599799999994,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.235163007977803,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.4127661320391525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30437452460355574,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.648691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.3642101,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.97239531782049,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5004773922063137,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2706924696176769,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.167683,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.5487164,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.031889421475615,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.6125522050606484,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3721635942345777,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.740311500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.21672874999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.261973650813914,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.525882420737048,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3319381007806341,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.396316999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.36174030000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.696810167706545,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.856249331329639,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26164149972483897,
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
          "id": "fc7b5b11b83e141e128e5efd21753ab9af8a094c",
          "message": "introduce unique_constraints module (#490)\n\n### What\n\nFor Delete by key we have a function that returns the unique constraints\nof a table.\nThis can be useful for Update by key, which we will introduce soon, as\nwell.\n\nIn this PR we move this function to its own module.\n\nWe also change a word in the schema description of delete.",
          "timestamp": "2024-06-04T08:47:11Z",
          "tree_id": "c19e7dc3eed59a593084fbe2e3e27d16f20c0d70",
          "url": "https://github.com/hasura/ndc-postgres/commit/fc7b5b11b83e141e128e5efd21753ab9af8a094c"
        },
        "date": 1717491229108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.9450495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.6360761,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.179004526739046,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.084531804199681,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30677665629032175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0514955,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.95620484999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.570583069427336,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5512387999543549,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26834825454129463,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.9497,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.30156325,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.66986071337863,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.095466438286774,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4276645464518748,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.069015,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.768043,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.339875858088448,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.678650503476945,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3333074920624239,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.296691,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.9530091,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.438102955211974,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.126576012896535,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3131375993298105,
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
          "id": "fecd55c0a6dd0660d15dd177e39e007c6fcb6083",
          "message": "add UPDATE ast (#491)\n\n### What\n\nWe will soon add an auto generated Update by key procedure. This\nprocedure will be translate to a SQL UPDATE statement.\n\nIn this PR we introduce this AST representation of Update statements.\nOf course, this might change once we actually implement the feature.\n\n### How\n\nAdd AST definition, conversion to string, and constant folding handling.\n\nhttps://www.postgresql.org/docs/current/sql-update.html",
          "timestamp": "2024-06-04T08:47:18Z",
          "tree_id": "76b2dcfdbd7f3f824cf2d269f0d82dceed6c098e",
          "url": "https://github.com/hasura/ndc-postgres/commit/fecd55c0a6dd0660d15dd177e39e007c6fcb6083"
        },
        "date": 1717491289528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.498108,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.45295239999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.015758928528157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.403989587289068,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2730546918258999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.127825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.5556938,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.326492622190486,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5755865476423452,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2746173292963324,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.192748,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.488552,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.508645592064028,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.623186815307335,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37797944545963247,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.925936,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.55133850000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.219648260381984,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.485868027684976,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.353919429543257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.854802,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.73589425,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.163723119674458,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.679400305037362,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2716811373197202,
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
          "id": "7ee9fbb3e9440d0424d29fb8f04476a291b70710",
          "message": "Unify query part handling for rows and aggregates (#492)\n\n### What\n\nfixes https://hasurahq.atlassian.net/browse/PG-112\n\nPreviously, order by and limit clauses were not applied for the\naggregates part of the query as the spec said it was not needed,\nhowever, that is a mistake which we now fix.\n\n### How\n\nTo fix this, we unify the way we handle rows and aggregates.\nCallers will no longer need to call `translate_rows_query` and\n`translate_aggregates_query` separately and then try to stitch them\ntogether, but rather call one part, `translate_query`, which will call\nboth.\n\nEach translate part will call the same function, `translate_query_part`\nwhich translates the common elements (where, order by, limit, etc.), but\nwill different in the way it handles fields or aggregates.\n\nThis way, we make sure that an ndc-spec query is translated consistently\nbetween the two parts - rows and aggregates.",
          "timestamp": "2024-06-06T15:26:31Z",
          "tree_id": "99b682890d215b29972cf578ece4abb3f12e4cfb",
          "url": "https://github.com/hasura/ndc-postgres/commit/7ee9fbb3e9440d0424d29fb8f04476a291b70710"
        },
        "date": 1717688014873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.009326,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.68034599999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.736195949796542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.713224830851875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29033159373123296,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.295523,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.380539,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.51536014769875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4846395270592794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26703671528902373,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.6117355,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.8996485,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.859995816167103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0542505551659325,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3841028840350234,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.911101,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.31189975,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.284287628890326,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.74456862017248,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3333762287682274,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.719758999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.2147635,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.1259683596009,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.041669781311111,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.22305614030590787,
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
          "id": "7cf477ae3dab1e7cf944594d9aa1ad16824833b4",
          "message": "experimental update mutations (#493)\n\n### What\n\nWe want to support update point mutation. This PR introduces a new\n(experimental) auto-generated procedure with 4 arguments:\n\n- the unique key\n- `_set` - which columns to set, to which values\n- pre check - Which rows am I allowed to edit\n- post check - What output am I allowed to produce\n\nExample schema:\n\n```json\n{\n  \"name\": \"experimental_update_Artist_by_ArtistId\",\n  \"description\": \"Update any row on the 'Artist' collection using the 'ArtistId' key\",\n  \"arguments\": {\n    \"ArtistId\": {\n      \"description\": \"The identifier of an artist\",\n      \"type\": {\n        \"type\": \"named\",\n        \"name\": \"int4\"\n      }\n    },\n    \"_set\": {\n      \"type\": {\n        \"type\": \"named\",\n        \"name\": \"experimental_update_Artist_by_ArtistId_object\"\n      }\n    },\n    \"post_check\": {\n      \"description\": \"Update permission post-condition predicate over the 'Artist' collection\",\n      \"type\": {\n        \"type\": \"predicate\",\n        \"object_type_name\": \"Artist\"\n      }\n    },\n    \"pre_check\": {\n      \"description\": \"Update permission pre-condition predicate over the 'Artist' collection\",\n      \"type\": {\n        \"type\": \"predicate\",\n        \"object_type_name\": \"Artist\"\n      }\n    }\n  },\n  \"result_type\": {\n    \"type\": \"named\",\n    \"name\": \"experimental_update_Artist_by_ArtistId_response\"\n  }\n}\n```\n\n### How\n\nWe use the tricks we already learned from delete and insert:\n\n- We generate update by unique key mutations like we do in delete\n- We generate the same pre condition as in delete\n- We parse and check the _set object similarly to how we do it for\ninsert, though simplified because we only need to read one object.\n- We generate the same post condition as in insert, and return it as an\nadditional column.",
          "timestamp": "2024-06-07T11:42:56Z",
          "tree_id": "4434d51ce21735c4a80da77896da97500a8cbc25",
          "url": "https://github.com/hasura/ndc-postgres/commit/7cf477ae3dab1e7cf944594d9aa1ad16824833b4"
        },
        "date": 1717760967617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.260431,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.1023065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.331503207417319,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.224773475639205,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2902792381337281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.5097715,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.18130969999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.293804704351054,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3531909536388085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24807814516110277,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.1592285,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.06974419999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.52951182166103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.680561138436634,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39275097557034905,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.908202,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.96724139999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.796872861778848,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.5956360721092615,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29200013836039335,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.2155505,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.19495319999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.168839434651677,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.483817530368025,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.26313943296188463,
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
          "id": "c5780279243b8eb52884236c24e4384406b9a85a",
          "message": "chore(deps): Bump url from 2.5.0 to 2.5.1 (#497)\n\nBumps [url](https://github.com/servo/rust-url) from 2.5.0 to 2.5.1.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/3d6dbbb1dfc64c597745d5d6b97f2a8dd543c42b\"><code>3d6dbbb</code></a>\nReimplement idna on top of ICU4X (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/923\">#923</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/de947abf896f44efc5f0fe382064fd95363dff37\"><code>de947ab</code></a>\nDocument possible replacements of the base URL (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/926\">#926</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/8b8431bbe10d0f06c53885d5ba2602d69f61888f\"><code>8b8431b</code></a>\ndocs: document SyntaxViolation variants, remove bare URLs (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/924\">#924</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/fd042e003fe583426454001554542ef95538d794\"><code>fd042e0</code></a>\nNon-special URLs can have their paths erased (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/921\">#921</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/49eea1c2eb3bb7259e3f8e15ace5f86990adb0bd\"><code>49eea1c</code></a>\nFix multiple issues on wasm32: (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/886\">#886</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/a4dd58be5989afedddec023174b2cdcd81912239\"><code>a4dd58b</code></a>\nFix lint (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/920\">#920</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/73803fa780c8890e0b40cd01fbbd5362fbe4c9e0\"><code>73803fa</code></a>\nUpdate URLs (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/916\">#916</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/8e4331d26018d3c46a42f81b5613fcc7ab16b850\"><code>8e4331d</code></a>\nAdd bench for to_ascii on an already-Punycode name (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/915\">#915</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/9c51937adba5f5f54117999a6a7983b00a049995\"><code>9c51937</code></a>\nRename <code>master</code> branch to <code>main</code> (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/914\">#914</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/e654efb9c19732f680f14db43a673a726b834f42\"><code>e654efb</code></a>\nFix non-base64 data URLs with % character not followed by hex digits (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/797\">#797</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.0...v2.5.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=url&package-manager=cargo&previous-version=2.5.0&new-version=2.5.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:33:38Z",
          "tree_id": "b4815af612acfe8a11cd458c0590a320dbe03f2d",
          "url": "https://github.com/hasura/ndc-postgres/commit/c5780279243b8eb52884236c24e4384406b9a85a"
        },
        "date": 1718041350595,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.288722,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.514311,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.34984429150566,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.0441793034582165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2899882315624181,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.553668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.341426,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.70587022947768,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6675347830027931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23908339328448108,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.618303999999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.97212235000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.807495225814876,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.048243011499281,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.332368109220395,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.728424,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.51998084999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.70337800096048,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.121179308086116,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2955429799672384,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.179145,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.38939,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.56612860707718,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.512644486578797,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3193292763814262,
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
          "id": "7573a4eb961f1f9b422e1ab94de46747428e2fe2",
          "message": "chore(deps): Bump hyper from 0.14.28 to 0.14.29 (#495)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.28 to\n0.14.29.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.29</h2>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\">b5c2592f</a>)</li>\n</ul>\n<h2>Features</h2>\n<ul>\n<li><strong>http2:</strong> add config for\n<code>max_local_error_reset_streams</code> in server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\">dedcb674</a>)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/jeromegn\"><code>@​jeromegn</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/hyperium/hyper/pull/3305\">hyperium/hyper#3305</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29\">https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.29/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.29 (2024-06-03)</h3>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\">b5c2592f</a>)</li>\n</ul>\n<h4>Features</h4>\n<ul>\n<li><strong>http2:</strong> add config for\n<code>max_local_error_reset_streams</code> in server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)\n(<a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\">dedcb674</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/4e61351c1c07f59f8d7b79dcb37c1384acb9f3cb\"><code>4e61351</code></a>\nv0.14.29</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/b5c2592fde5e20d29c69428c85aef3d682ee36bc\"><code>b5c2592</code></a>\nfix(http1): start header read timeout immediately (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3305\">#3305</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/093665e3c318b1360df5a7338facc2b47ac5b54a\"><code>093665e</code></a>\nrefactor(lib): allow warnings in 0.14.x (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3677\">#3677</a>)</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/dedcb674f35eaec765a42b550caabe6f694d86d1\"><code>dedcb67</code></a>\nfeat(http2): add config for <code>max_local_error_reset_streams</code>\nin server (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3528\">#3528</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.28...v0.14.29\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.28&new-version=0.14.29)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:33:46Z",
          "tree_id": "5dd7f6eeb4c44447c3bf02d7ebc56bb2be9f6071",
          "url": "https://github.com/hasura/ndc-postgres/commit/7573a4eb961f1f9b422e1ab94de46747428e2fe2"
        },
        "date": 1718041574989,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.428379,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.41843575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.516178361705343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.516369346424177,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2937208322127323,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.246051,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.0922875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.03739933869618,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6467385932569485,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26414241898239244,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 52.229617000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 95.87894449999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.445862237532666,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.194141022265512,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4065075702034096,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.526833,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.262227,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.174938864424753,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.00147995758357,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3344222585461374,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.996506,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.452131,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.07507494593969,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.808028761572494,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27445535913886543,
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
          "id": "d7e054a7a7f916b05ae456ceaef8073a84d10f88",
          "message": "chore(deps): Bump clap from 4.5.4 to 4.5.6 (#496)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.4 to 4.5.6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.6</h2>\n<h2>[4.5.6] - 2024-06-06</h2>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.6] - 2024-06-06</h2>\n<h2>[4.5.5] - 2024-06-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Allow <code>exclusive</code> to override\n<code>required_unless_present</code>,\n<code>required_unless_present_any</code>,\n<code>required_unless_present_all</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/51de731521efb05c5503e05c33036d8fa439bc5a\"><code>51de731</code></a>\nchore(ci): Lint clippy::items_after_statements seems too strict</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/181a2cf5e673d0f6f42133a5b30ccafd86b0106d\"><code>181a2cf</code></a>\nchore(ci): Allow prelude wildcard imports</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/82cf9a62b027c10c6fafdcaaee24c4e92d7da61d\"><code>82cf9a6</code></a>\nchore(ci): Reduce noisy lints</li>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.4...v4.5.6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.4&new-version=4.5.6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-10T17:34:43Z",
          "tree_id": "4c9fa1a6ce543b28aa25394008bf5808130fe714",
          "url": "https://github.com/hasura/ndc-postgres/commit/d7e054a7a7f916b05ae456ceaef8073a84d10f88"
        },
        "date": 1718041607263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.069289,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.62048079999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.959822350818614,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.615695881788282,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.287355292040611,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.146767,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.85219,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.48622815670093,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5251648121554098,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2603869566106055,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.051703,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.65859405,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.200336633736267,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.165350617636921,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3364448369232231,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.8515795,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.24795529999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.99027008020569,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.240084876228984,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3197812036972017,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.569329,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.6574964,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.283766991809657,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1283372294671175,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28368976757502207,
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
          "id": "188322e93ac39561c4832f715fb37497217f1725",
          "message": "Mark Postgres aggregate return types as nullable (#498)\n\n### What\n\nAs discussed internally, a particular quirk of SQL (or Postgres, at the\nvery least) is that, with the exception of `COUNT`, an aggregate of an\nempty row set returns `NULL`[^1] (rather than, for example, returning\n`0` for `SUM`). This means that all aggregate functions over scalar\ntypes exposed by the Postgres connector should be labelled as nullable.\n\nThis PR addresses\n[APG-131](https://hasurahq.atlassian.net/browse/APG-131).\n\nNB: this will be a breaking change for anyone generating (for example)\ntypes from our /schema output.\n\n### How\n\nThis PR updates the `/schema` endpoint to mark these types as nullable.\n\n[^1]: The entire work effort of this PR was trying to verify this\nstatement.\n\n\n[APG-131]:\nhttps://hasurahq.atlassian.net/browse/APG-131?atlOrigin=eyJpIjoiNWRkNTljNzYxNjVmNDY3MDlhMDU5Y2ZhYzA5YTRkZjUiLCJwIjoiZ2l0aHViLWNvbS1KU1cifQ",
          "timestamp": "2024-06-11T14:18:04Z",
          "tree_id": "fde54cb5783c7003275d0de2d659b70accc52fcf",
          "url": "https://github.com/hasura/ndc-postgres/commit/188322e93ac39561c4832f715fb37497217f1725"
        },
        "date": 1718115922077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.279725,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.7644914,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.59128752048402,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.345790335592923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3104407995716202,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.0087875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.5425223,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.46368809217899,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.8584442394474578,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.29127518373697237,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.8342465,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 90.9708578,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.847024271040414,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 9.485576628221867,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3722545844832189,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.623734,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.24381509999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.514706107169005,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.236872064135646,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3102462408009406,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.794547,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.0546484,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.81500083655002,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.552872792756816,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3116968320707806,
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
          "id": "81cfa517fedbbba818d805c17868b9e62f83d2c9",
          "message": "Invert the update columns syntax for update procedures (#494)\n\n### What\n\nSlack thread for more context:\nhttps://hasurahq.slack.com/archives/C04NS5JCD8A/p1717760957475579\n\nWe want to introduce a different syntax for column update. Instead of\nbucketing by operations, we bucket by column names.\n\n#### Old API\n\n```json\n{ \n  \"_set\": { \"name\": \"Al\", \"address\": \"street\"},\n  \"_inc\": { \"age\": 1}, \n  \"_concat\": { \"...\" }\n}\n```\n\n#### New API\n\n```json\n{ \n  \"update_columns\": { \n    \"name\": { \"_set\": \"Al\" },\n    \"address\": { \"_set\": \"street\" },\n    \"age\": { \"_inc\": 1 }\n  }\n}\n```\n\nThis syntax is more consistent with other operations in other places,\nand makes it easy to augment the existing update procedure with new\noperations without adding arguments.\n\n### How\n\nWarning: this code was written at night, extra care is advised.\n\n1. We change the name of the `_set` argument in the schema to\n`update_columns`\n2. We introduce a new object type for each column update with the\nstructure `{ _set: value }`\n3. The type for `update_columns` is all the columns in the table mapped\nto their object type.\n4. We parse the `update_columns` object by parsing each column and its\noperation, and generate a `MutationValueExpression`.\n\n## Versioning and changelog\n\nNo need to worry about versioning. This is all in the\n`veryExperimentalWIP` mutationVersion.",
          "timestamp": "2024-06-12T22:52:55Z",
          "tree_id": "b15c02f9fd8b58695673dd20b80cb4e309fa0b5f",
          "url": "https://github.com/hasura/ndc-postgres/commit/81cfa517fedbbba818d805c17868b9e62f83d2c9"
        },
        "date": 1718233200891,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.6755375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.991509549999975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.581354603510595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.813561694972458,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27578872857909303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.469347,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.76901369999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.64940923094206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.446278799281835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2473172763522518,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.73729,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.47551330000003,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.054972495834726,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.96921791009622,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4084254187669775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.147411500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.52864925,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.070830578648454,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5625219258749325,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2819238631958183,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.0872155,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.73833725,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.40750398893732,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.401105601292798,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31063390180279704,
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
          "id": "21d63c830ca4ac9d28725db94c45f617bf304c07",
          "message": "Bump ndc-spec to v0.1.4. (#499)",
          "timestamp": "2024-06-17T07:43:16Z",
          "tree_id": "49fb68e9f4e4aeb9b1056d839b28e76805abbed2",
          "url": "https://github.com/hasura/ndc-postgres/commit/21d63c830ca4ac9d28725db94c45f617bf304c07"
        },
        "date": 1718610798904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.430551,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.71258025,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.244728969016386,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.623966327865972,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3034427493653616,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.10374999999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.4475841,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.6438219250267,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6091576354729327,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28110695098794913,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.6708685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.71332764999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.822789746166016,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.428374915598859,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41945879957978466,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.612495499999994,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.33708075000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.545078933402674,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.47582153202146,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.38003769369047063,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.546588,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.687332,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.602023942906325,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.911963934975031,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.34387754153336114,
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
          "id": "315fc4fab9af3f0859e151090f5170cea9af5e5c",
          "message": "generate mutations for multi-column unique constraints (#500)\n\n### What\n\nA unique constraint on a table could be defined using multiple column.\nFor example in `PlaylistTrack` the pair `(PlaylistId, TrackId)` is a\nunique constraint, and we will generate a procedure with the following\nstructure:\n\n```js\nexperimental_delete_PlaylistTrack_by_PlaylistId_and_TrackId(\n    PlaylistId: int,\n    TrackId: int,\n    filter: boolexpr\n)\n```\n\nand a similar one for updates.\n\n### How\n\n- We change the mutation type to include multiple keys instead of a\nsingle one.\n- Instead of using `get_non_compound_uniqueness_constraints()`, we just\ntraverse the constraints list a generate add an argument per unique\nconstraint key.\n- We generate cute names and descriptions by chaining the key names.\n- We change the schema by iterating over the keys.\n- We do the same for update and delete.\n- We emit a warning and skip generating a procedure if something\nunexpected happens.",
          "timestamp": "2024-06-19T09:28:46Z",
          "tree_id": "3228bdd8c37e4332ada4a3211d0ccd94e8cca6cf",
          "url": "https://github.com/hasura/ndc-postgres/commit/315fc4fab9af3f0859e151090f5170cea9af5e5c"
        },
        "date": 1718789901168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.74727,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.8199844,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.560170799117724,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.887827569400191,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28613022285192496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.0809305,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.98502279999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.84468289306033,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5316725467393226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24683466235386328,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 49.258686,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.42476299999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.84809238106683,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.967423910886769,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4355350886861925,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.923748,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.97267979999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.673066477572632,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.342318889336937,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3593071171479432,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.217511,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.3693094,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.25975651499971,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.426657060356764,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31252089430888363,
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
          "id": "afb1c2a52c27963b3da022c7f85adc1e79abdc70",
          "message": "Refactor: use NonEmpty and unify fetching of key columns (#502)\n\n### What\n\nQuick refactor as a followup to\nhttps://github.com/hasura/ndc-postgres/pull/500#discussion_r1645749480:\n\n1. We use NonEmpty key columns instead of a simple Vec and trace a\nwarning when there are no keys.\n2. We move the common code of key_columns fetching into the `common`\nmodule and use it for both delete and update.",
          "timestamp": "2024-06-19T14:24:20Z",
          "tree_id": "b28057e14926365f0d4c01d80bcbe80f920c73c2",
          "url": "https://github.com/hasura/ndc-postgres/commit/afb1c2a52c27963b3da022c7f85adc1e79abdc70"
        },
        "date": 1718807619853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.847755,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.802940199999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.544462128191974,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.92991040905752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27326754980983414,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.421876,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.2728778,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.90435953367204,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5104831315318492,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2490742181175125,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.724484000000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.10721050000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.5954657534817,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.256719300282551,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4321380313052036,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.764836,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.24509555,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.636900391339122,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.975335827953547,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31665232185413345,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.334077,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.2564805,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.616383111524183,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.238985746459068,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31674617241559927,
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
          "id": "53565d6b4d342f98eed5cb2a91bebac745aa1d13",
          "message": "Set the default CONNECTION_URI in package manifest, release v0.7.1 (#503)\n\n### What\n\nIt's nice to have a default value for the `CONNECTION_URI` environment\nvariable when initializing a new connector, since that reduces the\nnumber of steps to try it out.",
          "timestamp": "2024-06-20T11:56:47Z",
          "tree_id": "621d24bf791ac15656a80821861ccffe90320fc7",
          "url": "https://github.com/hasura/ndc-postgres/commit/53565d6b4d342f98eed5cb2a91bebac745aa1d13"
        },
        "date": 1718884962201,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.1342935,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.10329825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.285027382378665,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.548014466765693,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28861990727281683,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.738304,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.91294059999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.021298164328556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.428077061312493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27035297202179487,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.756152,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.99987,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.38916838423907,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.66384411936788,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35233256308957167,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.179336,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.28434475,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.245361521984652,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.602326334304994,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.26281774997689067,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.749298499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.42293175,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.872517764832036,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.206789857650552,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3162908021961419,
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
          "id": "7fa6c56d4c4669feada379c5dd771f5f14afc645",
          "message": "Add configuration version metrics (#504)\n\n### What\n\nThis PR adds a metric representing the configuration version that a\nrunning ndc-postgres instance uses.\n\nThis will help us track adoption of new versions and inform deprecation\ntimelines and documentation.\n\n### How\n\nRather than extending the existing metrics in the query_engine crate we\nmake a new Metrics struct in the ndc_postgres_configuration crate. This\nis to prevent the query_engine metrics from accumulating unrelated cruft\nand reduce the complexity of the module graph.",
          "timestamp": "2024-06-21T12:50:45Z",
          "tree_id": "84347590fdd62cbc5072959d85798b834454b90e",
          "url": "https://github.com/hasura/ndc-postgres/commit/7fa6c56d4c4669feada379c5dd771f5f14afc645"
        },
        "date": 1718974680357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.485926499999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.170809500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.20451924054201,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.961985032873951,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28957847211487303,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.020524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.93870825,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.65386352448185,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4665179168671827,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27287164246005935,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6973,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.5685561,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.60349679039243,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.827396947573224,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3892701634374745,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.763588,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.62148525,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.865358364549337,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.072314892448826,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33621265293443087,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.556151,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.17953614999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.369850035399764,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.549046415260744,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31706352150574835,
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
          "id": "097a4e91723b009042a09e340106152dc954fdb5",
          "message": "Revise the mutations API (#501)\n\n### What\n\nWe want to make the api for mutations pretty. We make the following\nchanges:\n1. Rename arguments\n2. prefix the argument names of unique constraint columns with `key_`\n\n### How\n\n#### General design\n\n* We generate delete, insert and update procedures for each table.\n* A single insert procedure is generated per _table_ of the form:\n  ```graphql\n  <mutation-version>_insert_<table>(\n      objects: [<object>],\n      post_check: <boolexpr>\n  )\n  ```\nIt lets us insert multiple objects and include a post check for\npermissions.\n* A delete procedure is generated per _table X unique constraint_ of the\nform:\n  ```graphql\n  <mutation-version>_delete_<table>_by_<column_and_column_and...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      pre_check: <boolexpr>\n  )\n  ```\nIt lets us delete a single row using the uniqueness constraint, and\ncontains a pre check for permissions.\n* An update procedure is generated per _table X unique constraint_ of\nthe form:\n  ```graphql\n  <mutation-version>_update_<table>_by_<column_and_column_and...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      update_columns: { <column>: { _set: <value> }, ... },\n      pre_check: <boolexpr>,\n      post_check: <boolexpr>\n  )\n  ```\nIt lets us update a single row using the uniqueness constraint by\nupdating the relevant columns, and contains a pre check and post check\nfor permissions.\nNote that the `update_columns` structure is different than the v2\nversion where we had `_set`, `_inc`, and other fields.\n* Mutations using uniqueness constraints use the naming schema\n`by_column_and_column_and_column` instead of the db constraint name,\nbecause the former is far more helpful.\n* If generating a mutation encounters an internal error, we skip that\nparticular mutation instead of throwing an error so the connector can\nstart at any situation.\n* Naming collisions between the unique constraints and the\nupdate_columns / pre_check / post_check is avoided by prefixing argument\nnames of the columns of a unique constraint with `key_`.\n\n---------\n\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-06-24T06:04:33Z",
          "tree_id": "460704a2635cb3db52d09043edc0debf558412c8",
          "url": "https://github.com/hasura/ndc-postgres/commit/097a4e91723b009042a09e340106152dc954fdb5"
        },
        "date": 1719209483250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.244208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.1652127,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.624119899668365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.274745638012789,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.292785840561885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.19979,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.694341,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.362097065766314,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5090258776764998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2585698925639352,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.430351,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.34310339999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.277279520671932,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.527616835768939,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37177352524832286,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.414623,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.70003990000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.027546199052296,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.765536546390614,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31454951356152877,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.025966,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 71.18231679999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.993127145949586,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.1843170857424,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31851474160127674,
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
          "id": "09cf76c1421078d80920b61ddb9e2022dafe3d6c",
          "message": "Remove redundant clones. (#506)\n\n### What\n\nI noticed a few extra calls to `.clone()` while working on an unrelated\nrefactor. I want to remove them for brevity and simplicity; I don't\nexpect a performance improvement.\n\nThis turns on the Clippy warning `redundant_clone`, which detects\nunnecessary calls to `.clone()` (and `.to_string()`).\n\nIt is an unstable warning and so might reports some false positives. If\nwe find any, we can suppress the warning there.\n\n### How\n\nI turned the warning on and applied fixes everywhere.\n\nI also saw a few that the lint didn't catch, which I fixed myself.",
          "timestamp": "2024-06-24T08:12:49Z",
          "tree_id": "e95ea1269e445fbaf4f1b3675a314a10bc648cf6",
          "url": "https://github.com/hasura/ndc-postgres/commit/09cf76c1421078d80920b61ddb9e2022dafe3d6c"
        },
        "date": 1719217209623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.333859,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.905846549999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.462320742784557,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.576734122708087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2878939060019976,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.365146,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.10059199999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.88107161255312,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4437161859894445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27244612590141665,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.023831,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.22674595,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.34271948331933,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.226447425823807,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3321836315680619,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.240832999999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.96336949999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.41686416613171,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.684840225696853,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30140212091870233,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.051568,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.4760156,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.837180917007935,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.554121861679775,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30254706283543087,
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
          "id": "6bcdef5a81367182eae4a68618c48c7a4bad6803",
          "message": "Run all unit tests on CI. (#505)\n\n### What\n\nWe were only running a subset of unit tests on CI. Let's run all of\nthem.\n\n### How\n\nInstead of trying to list the (growing) package names, let's just filter\nout the database tests.\n\nThis also updates the snapshots to include the new connection URI\ndefault value, as these tests were failing.\n\nI had to move some tests into the databases-tests package as they\nweren't really unit tests.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-06-24T12:13:14Z",
          "tree_id": "7e8f6ff937e5f1bab4ba3ecad539bdd448e83fd4",
          "url": "https://github.com/hasura/ndc-postgres/commit/6bcdef5a81367182eae4a68618c48c7a4bad6803"
        },
        "date": 1719231580194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.509789,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.926977,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.538044723402933,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.544722001004601,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2744166978495445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.27823649999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.611514,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.37036395955555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5665265083914335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2537113011034775,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.573349,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.26075969999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.73959807568674,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.097690633837988,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38480610829280615,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.406563,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.044533,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.477103862609468,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.656702417783293,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3217781500173557,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.19106,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.20473519999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.47846011460109,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.207156261576998,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3312561478500299,
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
          "id": "a4bf455f53e0a9b6fcad2d9eb0f7d9b3dd7f1b76",
          "message": "chore(deps): Bump url from 2.5.1 to 2.5.2 (#509)\n\nBumps [url](https://github.com/servo/rust-url) from 2.5.1 to 2.5.2.\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/54346fa288e16b25b71c45149d7067c752b450e0\"><code>54346fa</code></a>\nRevert &quot;Reimplement idna on top of ICU4X&quot; (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/946\">#946</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/dcfbed3e90b4bbbb70f121f802f1d9b25adb8f89\"><code>dcfbed3</code></a>\nUpdate idna to 1.0.1 (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/945\">#945</a>)</li>\n<li><a\nhref=\"https://github.com/servo/rust-url/commit/467ef63969f477ee44b7456bb450fba95af25780\"><code>467ef63</code></a>\nfix panic on <code>xn--55555577</code> (<a\nhref=\"https://redirect.github.com/servo/rust-url/issues/940\">#940</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/servo/rust-url/compare/v2.5.1...v2.5.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=url&package-manager=cargo&previous-version=2.5.1&new-version=2.5.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-24T16:05:24Z",
          "tree_id": "5c35a9b6c875c5e06fabeffd5769474850f61149",
          "url": "https://github.com/hasura/ndc-postgres/commit/a4bf455f53e0a9b6fcad2d9eb0f7d9b3dd7f1b76"
        },
        "date": 1719245588404,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.030135,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.43424225,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.526271197975948,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.868963921087552,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2744909205250344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.605837,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.13913559999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.12893140079459,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4020403709986127,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27931956543664604,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.059253,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.16381984999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.370205994828915,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.318826854586959,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36049668471406554,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.455998,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.15971644999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.4856279014017,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.18452731510466,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3444174782588853,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.4253545,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.71235509999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.750982684272127,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.701464051410671,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3354906948634717,
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
          "id": "6b1494b3ccdf02f73cbaf61f3d7a91f5ffc1d26f",
          "message": "chore(deps): Bump uuid from 1.8.0 to 1.9.0 (#508)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.8.0 to 1.9.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.9.0</h2>\n<h2><code>Uuid::now_v7()</code> is guaranteed to be monotonic</h2>\n<p>Before this release, <code>Uuid::now_v7()</code> would only use the\nmillisecond-precision timestamp for ordering. It now also uses a global\n42-bit counter that's re-initialized each millisecond so that the\nfollowing will always pass:</p>\n<pre lang=\"rust\"><code>let a = Uuid::now_v7();\nlet b = Uuid::now_v7();\n<p>assert!(a &lt; b);\n</code></pre></p>\n<h2>What's Changed</h2>\n<ul>\n<li>Add a get_node_id method for v1 and v6 UUIDs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/748\">uuid-rs/uuid#748</a></li>\n<li>Update atomic and zerocopy to latest by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/750\">uuid-rs/uuid#750</a></li>\n<li>Add repository field to uuid-macro-internal crate by <a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>\nin <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/752\">uuid-rs/uuid#752</a></li>\n<li>update docs to updated RFC (from 4122 to 9562) by <a\nhref=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/753\">uuid-rs/uuid#753</a></li>\n<li>Support counters in v7 UUIDs by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/755\">uuid-rs/uuid#755</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/paolobarbolini\"><code>@​paolobarbolini</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/752\">uuid-rs/uuid#752</a></li>\n<li><a href=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/753\">uuid-rs/uuid#753</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0\">https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4a129e728174a340ac2772f3cc6310ba77d1969f\"><code>4a129e7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/760\">#760</a> from\nuuid-rs/cargo/1.9.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6bfee6ba82ad8e7a0155f3161157dc3ea3a5d552\"><code>6bfee6b</code></a>\nprepare for 1.9.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/62b7145d95913642298d5a954314ea28a199fa78\"><code>62b7145</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/759\">#759</a> from\nuuid-rs/chore/v7-counter-cleanup</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/62e968c92b464c81a73b6002ab66a32c4bdad9ad\"><code>62e968c</code></a>\nclean up new Timestamp APIs</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/49319a7ff766dc7c7638c0226294beebd45f6762\"><code>49319a7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/758\">#758</a> from\nuuid-rs/chore/test-overflow</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/47b9130ada093391db900b03e53f716310ae1ca0\"><code>47b9130</code></a>\nensure v7 methods don't overflow on max values</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/0c561e3443191065b724e8f8eb7b116f08d4e181\"><code>0c561e3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/757\">#757</a> from\nuuid-rs/ci/more-miri</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/252770be2f824e2cb4a2f68cb5980e0b7bd4b6cc\"><code>252770b</code></a>\nexpand miri tests to cover all features</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/e62647f7623f8663f806ec69d8264fbfb836a6e3\"><code>e62647f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/755\">#755</a> from\nuuid-rs/feat/v7-counter</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/c270b3d66ae809517663ffeb38d56e004c517f7f\"><code>c270b3d</code></a>\nimprove testing for contexts</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.8.0...1.9.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.8.0&new-version=1.9.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-06-24T16:15:33Z",
          "tree_id": "ca355161c11c55a68273cf87c03fe4637bd65dd1",
          "url": "https://github.com/hasura/ndc-postgres/commit/6b1494b3ccdf02f73cbaf61f3d7a91f5ffc1d26f"
        },
        "date": 1719246415069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.652556,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.875157,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.660639739183837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.757331271271182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28555384360876634,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.432685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.84008199999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.39830484557325,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4991789052003597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24227370556290587,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.222776,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 80.98433600000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.84523551877784,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.727150145010654,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.39303796918900413,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.9533735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.85798449999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.557884217815378,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.178456070994859,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33988333477478144,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.00862,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.60449369999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.34064020113681,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.327072845399449,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31331935327537364,
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
          "id": "703bc9311fb8683e9ca75faa00f8075cbd1e6ff8",
          "message": "Mutations: improve the error on wrong structure for checks (#510)\n\n### What\n\nWe improve the error message on receiving an unexpected structure for\nchecks in experimental mutations.\n\n### How\n\nInstead of \"Argument not found\" we say \"Unexpected Structure\".",
          "timestamp": "2024-06-25T12:32:15Z",
          "tree_id": "548c1acc64fe9cc1bb4563ba21871f2f1818f68d",
          "url": "https://github.com/hasura/ndc-postgres/commit/703bc9311fb8683e9ca75faa00f8075cbd1e6ff8"
        },
        "date": 1719319132663,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.285550999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.94931269999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.281090585062477,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.637845760663206,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2921351198802931,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.583264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.52872115,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 44.13267474574279,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.295362054389166,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21873825756036774,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.883946,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 79.44812479999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.707795646988085,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.0740511468873954,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3517707448792771,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.961864500000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.50516474999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.093381573720627,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.40626888810495,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33142439386837713,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.988808500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.5062135,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.522291292988868,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.418089318225981,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27499120230126634,
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
          "id": "c9bf0d43a58ce4746b628273560a8bc633697cec",
          "message": "refactor: split ndc-spec schema generation (#512)\n\n### What\n\nI'm about to add version 2 of the auto-generated mutations, and I'd like\nto split the schema module so that each mutation version is in their own\nmodule. This refactor makes it easier to do so.\n\nNo code was harmed in the process.\n\n### How\n\nWe take `schema.rs`, take the helpers functions and put them in\n`schema/helpers.rs`, take each mutation version and put it in its own\n`schema/mutation/<version>.rs` module, take the mutation to procedure\ncode and put it in `schema/mutation/mod.rs` and the rest put in\n`schema/mod.rs`.",
          "timestamp": "2024-06-27T13:04:59Z",
          "tree_id": "cdfa940816b2b0d25b3ee1b3d3efb48e155c9993",
          "url": "https://github.com/hasura/ndc-postgres/commit/c9bf0d43a58ce4746b628273560a8bc633697cec"
        },
        "date": 1719494045853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.505653000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.32031234999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.713832564591534,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.353648341272944,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3027314922818789,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 74.3078455,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.2554803,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.276022975730456,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6492979734891406,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28211043538424796,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.469074500000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.92103335,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.375302150874344,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.763320824887348,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38578222243714266,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.037716,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.4235287,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.391558710182817,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.611317012328836,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31348625961725807,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.880816499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.11812194999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.07348707942027,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.949380183152659,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29700606103552835,
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
          "id": "4bfdad02239a418949ae3b16d0313880c3e48f46",
          "message": "Introduce v2 of auto-generated mutations (#513)\n\n### What\n\nv2 of auto-generated mutations introduces point delete, insert and\nupdate point mutations that include permission arguments.\n\n### Interface and Design\n\n* We generate delete, insert and update procedures for each table.\n\n* A single insert procedure is generated per table of the form:\n  ```graphql\n  v2_insert_<table>(\n      objects: [<object>],\n      post_check: <boolexpr>\n  )\n  ```\nIt allows us to insert multiple objects and include a post check for\npermissions.\n\n* A delete procedure is generated per table X unique constraint of the\nform:\n  ```graphql\n  v2_delete_<table>_by_<column_and_...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      pre_check: <boolexpr>\n  )\n  ```\nIt allows us to delete a single row using the uniqueness constraint, and\ncontains a boolexpr for permissions.\n\n* An update procedure is generated per table X unique constraint of the\nform:\n  ```graphql\n  v2_update_<table>_by_<column_and_...>(\n      key_<column1>: <value>,\n      key_<column2>: <value>,\n      ...,\n      update_columns: { <column>: { _set: <value> }, ... },\n      pre_check: <boolexpr>,\n      post_check: <boolexpr>\n  )\n  ```\nIt allows us to update a single row using the uniqueness constraint by\nupdating the relevant columns,\n  and contains a pre check and post check for permissions.\n\n* Mutations using uniqueness constraints use the naming schema\n`by_column_and_column_and_column` instead of the db constraint name,\n  because the former is far more helpful.\n* If generating a mutation encounters an internal error, we skip that\nparticular mutation and trace a warning instead of throwing\n  an error so the connector can start at any situation.\n* Naming collisions between the unique constraints and the\nupdate_columns / pre_check / post_check is avoided by prefixing argument\n  names of the columns of a unique constraint with `key_`.\n\n\n### How\n\n- We replace the current `experimental` version of mutations almost word\nfor word (the only different is the names of the procedures, prefixing\n`v2` instead of `experimental`) to a new directory `v2`.\n- We add a new mutations version: `v2`.\n- We replace the `experimental` version of ndc-spec schema generation as\nwell.\n- We fix the tests to use v2 instead.\n- experimental version is also removed from configuration version3\ncompletely.",
          "timestamp": "2024-06-28T11:35:45Z",
          "tree_id": "889b5492040593c27e624a54116bb78435d4a2fa",
          "url": "https://github.com/hasura/ndc-postgres/commit/4bfdad02239a418949ae3b16d0313880c3e48f46"
        },
        "date": 1719575144395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.0745415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.27416669999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.28684109997587,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6184672902254,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29180801283611396,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.7491485,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.07770304999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.35149728946969,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4903331584682888,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23813381075187776,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6485825,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.35116494999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.19953318211069,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.44688062199468,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3686338415837987,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.364162500000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.9908252,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.633213172432885,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.943368952913783,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.356771895143543,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.1589075,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.19998195000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.484721103166734,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.530724603665547,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3288730214590146,
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
          "id": "931efdd7f18d773d34788efb77a7210ffca16e97",
          "message": "chore(deps): Bump clap from 4.5.7 to 4.5.8 (#515)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.7 to 4.5.8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.8</h2>\n<h2>[4.5.8] - 2024-06-28</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Reduce extra flushes</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.8] - 2024-06-28</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Reduce extra flushes</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.7...v4.5.8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.7&new-version=4.5.8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-01T13:38:19Z",
          "tree_id": "86ef91269bba027c0937be041d4f1aeaf9600bcb",
          "url": "https://github.com/hasura/ndc-postgres/commit/931efdd7f18d773d34788efb77a7210ffca16e97"
        },
        "date": 1719841736307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.0344525,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.08223439999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.486868157744146,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.465871394029877,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28691076170092794,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.140268,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.27387219999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.85227604422905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7480232188182043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2956290026286476,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.307791,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.85089979999985,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.310974464844445,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.333465987999435,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35384893897126823,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.427756,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.82988740000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.058756216957637,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.129832027095976,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3230468519884272,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.9543195,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.37817100000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.74967121797554,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.062700058810513,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31584229860609514,
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
          "id": "93fec4b25770defd925d56a86e2ce1e2e13c57de",
          "message": "chore(deps): Bump serde_json from 1.0.117 to 1.0.119 (#517)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.117 to\n1.0.119.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.119</h2>\n<ul>\n<li>Add <code>serde_json::Map::shift_insert</code> (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1149\">#1149</a>,\nthanks <a\nhref=\"https://github.com/joshka\"><code>@​joshka</code></a>)</li>\n</ul>\n<h2>v1.0.118</h2>\n<ul>\n<li>Implement Hash for serde_json::Value (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1127\">#1127</a>,\nthanks <a\nhref=\"https://github.com/edwardycl\"><code>@​edwardycl</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/b48b9a3a0c09952579e98c8940fe0d1ee4aae588\"><code>b48b9a3</code></a>\nRelease 1.0.119</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8878cd7c042a5f94ae4ee9889cbcbd12cc5ce334\"><code>8878cd7</code></a>\nMake shift_insert available for inlining like other Map methods</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/352b7abf007cf3b9b063b01e0b1e8f6af62a4e39\"><code>352b7ab</code></a>\nDocument the cfg required for Map::shift_insert to exist</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c17e63f6eff6cb40594beb1bddd4562c4cc81442\"><code>c17e63f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1149\">#1149</a>\nfrom joshka/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/309ef6b8870e47622a283061cbda3f5514bfaf0d\"><code>309ef6b</code></a>\nAdd Map::shift_insert()</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a9e089a2ce245bc223b56fbb6c525e2fe7b1f0ef\"><code>a9e089a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1146\">#1146</a>\nfrom haouvw/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/a83fe96ae2a202925f1caa7abc51991f321d7c22\"><code>a83fe96</code></a>\nchore: remove repeat words</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c4f24f3be29a3d096d3ac7b1d5594777a613ec0d\"><code>c4f24f3</code></a>\nRelease 1.0.118</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/51d94ebdc07127de22fb655bdcf6a01d119492d5\"><code>51d94eb</code></a>\nCombine Map's Hash into one impl</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/5e7bedc0a0e19ecda1c15a412ab7c69569f4aa84\"><code>5e7bedc</code></a>\nTouch up PR 1127</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.117...v1.0.119\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.117&new-version=1.0.119)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-01T13:38:23Z",
          "tree_id": "110ce3462a952e96e7e34b181f3ba5dfc8a7cebe",
          "url": "https://github.com/hasura/ndc-postgres/commit/93fec4b25770defd925d56a86e2ce1e2e13c57de"
        },
        "date": 1719841804317,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.340837,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.738071500000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.30719648309397,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.722186289418506,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2703666938476879,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.108223,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.360142,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.50518755083148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3034679424338407,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24898696869576645,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.855302,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.35487959999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.482427506344568,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.495205372288428,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3607721448015483,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.847152,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.42427829999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.778600518121007,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.9842140420907555,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30937436951388764,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.934689500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.88535135,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.863068360552813,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.109993539328883,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29104782790775346,
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
          "id": "797bc3ca039d9360b9d82204ac2a7ea92d9a216e",
          "message": "Fix schema generation for insert and update input objects (#514)\n\n### What\n\nFor the input objects of mutations (`objects`, `update_columns`),\ncolumns that have defaults should be marked as nullable, and columns\nthat are generated should not be listed (this one worked for insert but\nnot update).\n\n### How\n\n1. Moved the schema gen helpers that are only relevant for mutations\ninto the mutation directory\n2. Moved the part that handles adding or not adding generated columns\nout side of insert handling, and use it in both insert and update\n3. Pattern match on the column info and specify the type according to\nthe rules in `What`.",
          "timestamp": "2024-07-02T07:45:33Z",
          "tree_id": "73dcd80227476b1f8f89b884c5f03e4b17fa5a66",
          "url": "https://github.com/hasura/ndc-postgres/commit/797bc3ca039d9360b9d82204ac2a7ea92d9a216e"
        },
        "date": 1719906975029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.612591,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.58060209999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.985484807623028,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.805505869938514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30934432406778334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 75.337437,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 110.25717099999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.22448154072937,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9539879966284275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2975690753422109,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 50.129138,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.91250079999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.250920905958193,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.334701805099339,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.30139944669902846,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.504067,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.4892702,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.005567812167584,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.003629434356029,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3258816145288642,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 45.574466,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 72.59798839999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.047106149789375,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.211441263776695,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2898119501184043,
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
          "id": "295b68cdc6f1dccc7363e6dfd2ed9ed42e89b1fd",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.0.0 to 2.0.1 (#507)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.0.0 to 2.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.0.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/70\">hoverkraft-tech/compose-action#70</a></li>\n<li>chore(deps): bump docker-compose from 0.24.7 to 0.24.8 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/69\">hoverkraft-tech/compose-action#69</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.15.0 to 2.15.1 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/71\">hoverkraft-tech/compose-action#71</a></li>\n<li>chore(deps-dev): bump eslint-plugin-jsonc from 2.15.1 to 2.16.0 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/72\">hoverkraft-tech/compose-action#72</a></li>\n<li>chore(deps-dev): bump eslint-plugin-github from 4.10.2 to 5.0.1 in\nthe npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/73\">hoverkraft-tech/compose-action#73</a></li>\n<li>fix: remove console log by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/76\">hoverkraft-tech/compose-action#76</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1\">https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/e5813a5909aca4ae36058edae58f6e52b9c971f8\"><code>e5813a5</code></a>\nfix: remove console.log</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ca9b62241b0f045dab8b4af196315a52b5c72f8e\"><code>ca9b622</code></a>\nchore(deps-dev): bump eslint-plugin-github</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/bb5c53776ebfed5ccbf5def9a9498693d7c99b98\"><code>bb5c537</code></a>\nchore(deps-dev): bump eslint-plugin-jsonc</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/e040f967047ff1bd58154fbcc1c5bb3d8386d811\"><code>e040f96</code></a>\nchore(deps-dev): bump eslint-plugin-jsonc</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/5f3dfc411782207692ea983b5212264d7e188462\"><code>5f3dfc4</code></a>\nchore(deps): bump docker-compose from 0.24.7 to 0.24.8</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/c64d9d66265941a229eb01d8b8fea3e5f4740cd0\"><code>c64d9d6</code></a>\nchore(deps): bump the github-actions-dependencies group with 2\nupdates</li>\n<li>See full diff in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.0.0...v2.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.0.0&new-version=2.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-04T06:14:00Z",
          "tree_id": "a21a08ac874e812e55085f760832c34532c2701f",
          "url": "https://github.com/hasura/ndc-postgres/commit/295b68cdc6f1dccc7363e6dfd2ed9ed42e89b1fd"
        },
        "date": 1720074021015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.675114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.179024399999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.82215963531448,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.6650800485738575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2955405341045736,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.8766555,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.75630894999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.68021793791731,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4709512406912069,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.21940270597809375,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.6444185,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.507265,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.085754986151834,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.200846989740327,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3866857698372956,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.206436499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.30120685,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.72097503318555,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.472224194538075,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29597669246706,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.706868,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.643973,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.23733321264251,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.045333209556468,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32093236443267914,
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
          "id": "aa0100d66ec2f72e887a5c0378aa3e60f840ea61",
          "message": "Implement native query builder in the CLI plugin (#511)\n\n### What\n\nTo improve the DX of native queries, we want a CLI interface with which\nwe can point the CLI at a SQL(ish - a native query) file and generate\nthe stanzas for V3 metadata. This PR sort of does it.\n\n### Design\n\nIntroduce the following subcommands:\n\n```\nCommands on Native Operations\n\nUsage: ndc-postgres-cli native-operation <COMMAND>\n\nCommands:\n  list    List the existing Native Operations\n  create  Create a new Native Operation from a SQL file\n  delete  Delete an existing Native Operation from the configuration\n  help    Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help  Print help\n```\n\n#### Create\n\n```\nCreate a new Native Operation from a SQL file\n\nUsage: ndc-postgres-cli native-operation create [OPTIONS] --operation-path <OPERATION_PATH> --kind <KIND>\n\nOptions:\n      --operation-path <OPERATION_PATH>\n          Relative path to the SQL file inside the connector configuration directory\n      --kind <KIND>\n          Operation kind [possible values: query, mutation]\n      --override\n          Override the Native Operation definition if it exists\n  -h, --help\n          Print help\n```\n\n#### Delete\n\n```\nDelete an existing Native Operation from the configuration\n\nUsage: ndc-postgres-cli native-operation delete --name <NAME> --kind <KIND>\n\nOptions:\n      --name <NAME>  The name of the Native Operation\n      --kind <KIND>  Operation kind [possible values: query, mutation]\n  -h, --help         Print help\n```\n\n#### List\n\n```\nList the existing Native Operations\n\nUsage: ndc-postgres-cli native-operation list\n\nOptions:\n  -h, --help  Print help\n```\n\n### How\n\nThe user supplies a file containing SQL(ish - a native operation) code,\nand specifies the operation kind, and we use the sqlx `describe` method\nto fetch information about the operation. Specifically, whether it\ncompiles or not, and what is the error if not, and what are the oids of\nthe types of the arguments and returning columns.\n\nFrom this information, we construct a NativeQueryInfo and add it to the\nconfiguration, then update it to fetch information about types we might\nnot have tracked in the configuration yet.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>\nCo-authored-by: Philip Lykke Carlsen <plcplc@gmail.com>",
          "timestamp": "2024-07-04T09:10:08Z",
          "tree_id": "3a57cb519ac2eff7fb38e15757b97068e7f14052",
          "url": "https://github.com/hasura/ndc-postgres/commit/aa0100d66ec2f72e887a5c0378aa3e60f840ea61"
        },
        "date": 1720084604235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.075505,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.41764739999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.956056336288553,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.731800982834356,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2911712447193134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.164,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.212992,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.26305514085494,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3516826153198949,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25219362501852555,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 51.048905,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 89.9369548,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 31.337382437658437,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.03322930635034,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37856984688031475,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.650742,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.9177929,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.65683192643714,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.96294141321626,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2773275332495409,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.903547,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.07115789999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.488736646786958,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.763645582387191,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3292174406810326,
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
          "id": "d051424734667ca37fd7578e8a5b74c8e2631104",
          "message": "native operation cli delete command should write to file (#519)\n\n### What\n\nThe delete command did not write the change to file, this fixes it.\n\n### How\n\nWrite the configuration file after deleting.",
          "timestamp": "2024-07-04T10:57:29Z",
          "tree_id": "16046b7099b8298e1c62c10015ceff7710174164",
          "url": "https://github.com/hasura/ndc-postgres/commit/d051424734667ca37fd7578e8a5b74c8e2631104"
        },
        "date": 1720091019533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.511252,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.79451219999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.465972678884945,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7556385152525635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2955149041399462,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.713668,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.512098,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.20629121258718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6172079175602718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24351045075397945,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.1733995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.54029604999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.386516841037547,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.458327589416498,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3220972928259831,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.341508,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.12950509999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.876523053496847,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9633293586884335,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30438787215554935,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.256401,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.81985839999993,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.58012445422541,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.639697914850096,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3592678055670894,
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
          "id": "45131122d3f153cfee3df1e1b8077dd21a37e386",
          "message": "release `v0.8.0` (#518)\n\nUpdate changelog and cargo package version.\n\n---------\n\nCo-authored-by: Gil Mizrahi <gil@hasura.io>",
          "timestamp": "2024-07-04T11:09:37Z",
          "tree_id": "579a72af1b6a66c5a20cc6b53f13b66f8deeba64",
          "url": "https://github.com/hasura/ndc-postgres/commit/45131122d3f153cfee3df1e1b8077dd21a37e386"
        },
        "date": 1720091835586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.860696,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.035456,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.569053816282208,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.899100708013689,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2882251431426209,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.140199,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 103.8525515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.80582991197664,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3422407076797995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.260776332317389,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.608417,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.42257979999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.856129023575143,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.670832656065549,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3907681421576455,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.738346,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 75.74348969999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.88517514924338,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.849635829456886,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.29834315771490966,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.322970999999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.59738179999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.23930404446353,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.977369471639367,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3082882823864465,
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
          "id": "eb5563fe5c7a34fe98615324098cc36fe79199b9",
          "message": "Delete v3 and v4 configuration tests in favor of ndc-snapshot-metadata tests (#527)\n\n### What\n\nThe v3 and v4 configuration tests are a bit redundant because we have\nthe ndc-snapshot-metadata tests. This PR removes them, introduces a\nsnapshot for the current v4-config, and deletes the schema.json in each\ndir because they are also not used in favor of `static/schema.json`.",
          "timestamp": "2024-07-09T10:54:53Z",
          "tree_id": "68614b2299cdad4a52cb78660fecaf3a029aef2f",
          "url": "https://github.com/hasura/ndc-postgres/commit/eb5563fe5c7a34fe98615324098cc36fe79199b9"
        },
        "date": 1720523116639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.000170500000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.76135324999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.143640639990618,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.489060086222995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2707937854642184,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.058936,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.36302015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.28193770877637,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4642104792568063,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.23715719065403626,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.869497,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.71881374999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.63546457332716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.35040004348716,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4186345509217232,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.016065,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 77.61015,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.735434199596114,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.037411313629605,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.2794322436329772,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.912565,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.13006,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.371613258298908,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.61285625194132,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.24823132623413377,
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
          "id": "3941422714f274b6364446b229241b0724003627",
          "message": "config v5 with native operations rename (#522)\n\n### What\n\nWe introduce ndc-postgres configuration version \"v5\".\n\nThis version changes two things:\n\n1. Renames the field `nativeQueries` to `nativeOperations`, and instead\nof containing native queries and native mutations together with a flag\non each marking if it is mutation or not (`isProcedure`), we nest the in\ndifferent objects, so we have:\n\n   ```\n   nativeOperations:\n     queries:\n     mutations:\n   ```\n\n2. We nest `scalarTypes` and `compositeTypes` under one field, `types`:\n\n   ```\n   types:\n     scalar:\n     composite:\n   ```\n\n\n### How\n\nMight be useful to read as commits.\n\nWe first copy paste v4 to v5, then create types for `Types` and\n`NativeOperations` which nest the other information, then we fix all the\nrelevant things: ndc-spec schema, cli handling, upgrading from older\nconfigs, conversion to runtime config, etc.\n\nThen we fix the tests, including introducing new configs and changing\nthe paths the the configs.\n\nThen we get rid of the older configurations in the `static/<db>`\ndirectories, as they are not longer used for anything.",
          "timestamp": "2024-07-10T08:30:52Z",
          "tree_id": "366f01e2bdfa31c212b133ee29a3cb414f080989",
          "url": "https://github.com/hasura/ndc-postgres/commit/3941422714f274b6364446b229241b0724003627"
        },
        "date": 1720600886531,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.179267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.06499999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.015952678352672,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.963504999513955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.27903286835349866,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.659002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.9789591,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.972237002557456,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.9241261274999388,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.28158471748541314,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.862283,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.08874719999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.1576773487591,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.445712737761646,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.370626659583315,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.601896499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.38843384999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.983082429898662,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.048783650393322,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.350670536686084,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.8765635,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.62912075,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.01640121662157,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9904455212430925,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2936444959472766,
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
          "id": "df317cf38256b086b6471ff293c3ef7f40874b10",
          "message": "Release `0.8.1` (#528)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate changelogs and versions for `0.8.1`.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-07-10T09:58:33Z",
          "tree_id": "d14075d90f42b02ba1cfddeceaae6591bccdd52c",
          "url": "https://github.com/hasura/ndc-postgres/commit/df317cf38256b086b6471ff293c3ef7f40874b10"
        },
        "date": 1720605895429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 26.5132075,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.14568009999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.11758701991895,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.359025888898312,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28860848185350835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.78486000000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 100.0642886,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.116940953761436,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.456279561385351,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24802693332390927,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.259228,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.3934987,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.031717804990112,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.905505274163868,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35388145717329866,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 41.6605345,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 67.47733354999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.26333498933717,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.9459338708458525,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28344971561186555,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.3816205,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.38915214999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.170580351338184,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.407199547542316,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2923976476996414,
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
          "id": "70420943bfc35f712fb894c07604d4883503da27",
          "message": "Revert \"Release `0.8.1`\" (#530)\n\nReverts hasura/ndc-postgres#528\n\nGoing to wait for `0.9.0` for these changes.",
          "timestamp": "2024-07-10T10:32:02Z",
          "tree_id": "366f01e2bdfa31c212b133ee29a3cb414f080989",
          "url": "https://github.com/hasura/ndc-postgres/commit/70420943bfc35f712fb894c07604d4883503da27"
        },
        "date": 1720607898958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.927439,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.726653649999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.211609890398226,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.444029881537464,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2707484054029719,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.0260085,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.78310805,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.445908845468225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3857191589148243,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24168611381854085,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.005195,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.56646379999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.81341724176103,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.594680832072221,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3955253434218758,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.3681825,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.40438499999992,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.32736824156591,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.73968815079936,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.32251629665384046,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.605684,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.17850514999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.833626679517558,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.177619859216183,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.27353041777037373,
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
          "id": "cf475ec2d449fd8acc4fa8eda420a8b4338dde7e",
          "message": "chore(deps): Bump serde_json from 1.0.119 to 1.0.120 (#524)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.119 to\n1.0.120.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.120</h2>\n<ul>\n<li>Correctly specify required version of <code>indexmap</code>\ndependency (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1152\">#1152</a>,\nthanks <a\nhref=\"https://github.com/cforycki\"><code>@​cforycki</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/bcedc3d96bcc33184f16d63eab397295e2193350\"><code>bcedc3d</code></a>\nRelease 1.0.120</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/962c0fbbecc7dc8559cfeb019c2611737512f937\"><code>962c0fb</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1152\">#1152</a>\nfrom cforycki/fix/index-map-minimal-version</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/3480feda7b572d33992544061a8e0fbf8610a803\"><code>3480fed</code></a>\nfix: indexmap minimal version with Map::shift_insert()</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.119...v1.0.120\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.119&new-version=1.0.120)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-10T13:57:10Z",
          "tree_id": "38eb09614376284ffe0cce23b1c815753433c41d",
          "url": "https://github.com/hasura/ndc-postgres/commit/cf475ec2d449fd8acc4fa8eda420a8b4338dde7e"
        },
        "date": 1720620279773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.366627,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.1928744,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.154872255388657,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.785622328679342,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29535922931644026,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.416625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 101.33881275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.20351341144769,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4651452198668125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2108541109304328,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.657386,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 88.1088365,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.682473883889134,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.803003239923992,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32534991126812884,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.604635,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 69.2413854,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.69766009923265,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.370564213671528,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.33600944268837946,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.745821,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.83129389999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.54013495238554,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.268992860729391,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30670141549096436,
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
          "id": "2e9b0ee27d449121cb7144e36ceaf4ff189457ef",
          "message": "chore(deps): Bump serde from 1.0.203 to 1.0.204 (#526)\n\nBumps [serde](https://github.com/serde-rs/serde) from 1.0.203 to\n1.0.204.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/serde/releases\">serde's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.204</h2>\n<ul>\n<li>Apply #[diagnostic::on_unimplemented] attribute on Rust 1.78+ to\nsuggest adding serde derive or enabling a &quot;serde&quot; feature flag\nin dependencies (<a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2767\">#2767</a>,\nthanks <a\nhref=\"https://github.com/weiznich\"><code>@​weiznich</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/18dcae0a77632fb4767a420c550cb41991f750b8\"><code>18dcae0</code></a>\nRelease 1.0.204</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/58c307f9cc28a19d73a0e2869f6addf9a8a329f9\"><code>58c307f</code></a>\nAlphabetize list of rustc-check-cfg</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8cc4809414a83de0d41eac38ecfa1040e088b61e\"><code>8cc4809</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2769\">#2769</a>\nfrom dtolnay/onunimpl</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/1179158defc5351467cbd2c340b7e1498391bce4\"><code>1179158</code></a>\nUpdate ui test with diagnostic::on_unimplemented from PR 2767</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/91aa40e749620f31bf7db01c772e672f023136b5\"><code>91aa40e</code></a>\nAdd ui test of unsatisfied serde trait bound</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/595019e979ebed5452b550bf901abcab2cf4e945\"><code>595019e</code></a>\nCut test_suite from workspace members in old toolchain CI jobs</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/b0d7917f88978eda264f8fbac13b46ece35f5348\"><code>b0d7917</code></a>\nPull in trybuild 'following types implement trait' fix</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/8e6637a1e44c30dffd37322a7107d434cd751722\"><code>8e6637a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/serde/issues/2767\">#2767</a>\nfrom weiznich/feature/diagnostic_on_unimplemented</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/694fe0595358aa0857120a99041d99975b1a8a70\"><code>694fe05</code></a>\nUse the <code>#[diagnostic::on_unimplemented]</code> attribute when\npossible</li>\n<li><a\nhref=\"https://github.com/serde-rs/serde/commit/f3dfd2a2375d9caf15a18ec657dde51a32caf6ed\"><code>f3dfd2a</code></a>\nSuppress dead code warning in test of unit struct remote derive</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/serde-rs/serde/compare/v1.0.203...v1.0.204\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde&package-manager=cargo&previous-version=1.0.203&new-version=1.0.204)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-10T13:57:26Z",
          "tree_id": "0fb92be38e7aed67aec8a0da69031f89cd31c755",
          "url": "https://github.com/hasura/ndc-postgres/commit/2e9b0ee27d449121cb7144e36ceaf4ff189457ef"
        },
        "date": 1720620563108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.2078215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.47758524999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.230275120562723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.777192370172703,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2746512885708226,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.8538905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.388928,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.87080439532478,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5234439687546057,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2449087008087172,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.134853,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.09942854999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.508288740070356,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.642911120513169,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35031875867233786,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 45.148894999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.81531895000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.778477559715018,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.838187481330319,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3129905212684939,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.76093,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.65537850000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.544969385923565,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.908812219627251,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.37191659104814195,
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
          "id": "b6ede41ea68202063d4594a319a1befeec561d9b",
          "message": "Use short SHA in multitenant PR names (#529)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nSmall quality of life change.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->",
          "timestamp": "2024-07-10T16:46:20Z",
          "tree_id": "1b0aa8ca82542c15e10bcfc52aa5353b6acdd31f",
          "url": "https://github.com/hasura/ndc-postgres/commit/b6ede41ea68202063d4594a319a1befeec561d9b"
        },
        "date": 1720630384351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.9662375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.4141534,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.823495811667437,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.860810833756512,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2619919939587273,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.71287849999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.93065309999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 45.852006758899286,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.439326476144025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2320864015854816,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.7734215,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 85.56675714999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.730402164996317,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.082766244171385,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.40218599862874405,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.904913,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.9423185,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.254914800147215,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.138577425480978,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3145351524902863,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.756462,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.0628763,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.442430741240134,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6657808125365285,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29239549136420473,
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
          "id": "58ec61fd49299d32f73d90b468772ee94ced389e",
          "message": "cli readme update (#521)\n\n### What\n\nUpdate the ndc-postgres-cli readme with the new commands.",
          "timestamp": "2024-07-15T07:44:27Z",
          "tree_id": "76cf39cd8657a4f0adebd9ea1df74f0182b54bf9",
          "url": "https://github.com/hasura/ndc-postgres/commit/58ec61fd49299d32f73d90b468772ee94ced389e"
        },
        "date": 1721029967102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.060235,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 49.734131000000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.687076292406005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.885509907320042,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.316952977414657,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.707936,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 107.29356819999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.216572760349,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4719333435609272,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27837064641531106,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.807398,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.99342234999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.64499589475623,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.800817235028656,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37398221913971164,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.993415999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 76.92502545,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.076366849203865,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.631313260474883,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.30603724357870155,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.759686,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.8787555,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.555021871754192,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.990379796979461,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.31246097645816046,
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
          "id": "fe0adbe144bd46084e69c78637bcf023cc320041",
          "message": "update to ndc-sdk-rs-0.2.1 (#520)\n\n### What\n\nWe want to update ndc-sdk-rs to 0.2.1, and it introduces several\nchanges:\n\n1. Error messages https://github.com/hasura/ndc-sdk-rs/pull/15\n2. Update ndc-spec to 0.1.5, which introduces breaking changes by adding\nnewtype wrappers around string types\n\n### How\n\n1. For errors, follow\nhttps://github.com/hasura/ndc-sdk-rs/pull/15#issuecomment-2206231760\n2. For newtypes, go into type hell and fix the bugs by trying to put the\nndc-models newtypes in the data structures, as they are more\ndescriptive.",
          "timestamp": "2024-07-15T10:42:43Z",
          "tree_id": "51c261daaed3717d842426f89c64761157b33580",
          "url": "https://github.com/hasura/ndc-postgres/commit/fe0adbe144bd46084e69c78637bcf023cc320041"
        },
        "date": 1721040673172,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.037688,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.189015,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.97628084233065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.5940908495881825,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3005373160526903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.2172285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 102.9564707,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.572443347845635,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6767924662957512,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.26515858895063427,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.957277000000005,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.4141405,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.04169019709504,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.952243512715764,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.41339542603133983,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 46.033808,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 79.41515249999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 28.261667593358244,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.63483608857484,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.339109124510511,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 41.761967,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.41284839999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.350328998736725,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.279541302666249,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.30954239620058654,
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
          "id": "46959d7d2c59e83bc439b5e231ba35042f2bd83c",
          "message": "chore(deps): Bump hyper from 0.14.29 to 0.14.30 (#531)\n\nBumps [hyper](https://github.com/hyperium/hyper) from 0.14.29 to\n0.14.30.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/releases\">hyper's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.14.30</h2>\n<h2>Bug Fixes</h2>\n<ul>\n<li><strong>http1:</strong> reject final chunked if missing 0 (<a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\">4a51b2af</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hyperium/hyper/blob/v0.14.30/CHANGELOG.md\">hyper's\nchangelog</a>.</em></p>\n<blockquote>\n<h3>v0.14.30 (2024-07-09)</h3>\n<h4>Bug Fixes</h4>\n<ul>\n<li><strong>http1:</strong> reject final chunked if missing 0 (<a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\">4a51b2af</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/618a18580ae14776c05ab6789a82b5c43281fe8b\"><code>618a185</code></a>\nv0.14.30</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/4a51b2afefcc1373c2a5b834fa0ae8d935dbff46\"><code>4a51b2a</code></a>\nfix(http1): reject final chunked if missing 0</li>\n<li><a\nhref=\"https://github.com/hyperium/hyper/commit/c38437d377426e01100e07dc1e735f9c382fc6f5\"><code>c38437d</code></a>\nchore(dependencies): bump minimum tokio (<a\nhref=\"https://redirect.github.com/hyperium/hyper/issues/3664\">#3664</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/hyperium/hyper/compare/v0.14.29...v0.14.30\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hyper&package-manager=cargo&previous-version=0.14.29&new-version=0.14.30)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:18Z",
          "tree_id": "3baf6cebce77951a0647aa868ab3775bb606d9e9",
          "url": "https://github.com/hasura/ndc-postgres/commit/46959d7d2c59e83bc439b5e231ba35042f2bd83c"
        },
        "date": 1721059763853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.213353,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.50055529999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.053790783701903,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.7919993974049575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2895641089861544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.8072885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.24868155,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.02031731344993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5951794915650908,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2595595084346505,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.973884,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.10414739999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.69928031525711,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.056910043904363,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35070531030369173,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.531378,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.55439139999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.8739000391156,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.380664267092261,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.358840651674763,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.075877,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.43710150000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.667101557063862,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.702937614708656,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.324745855050762,
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
          "id": "9530cb15615957960b5353d29dec72bd71b08c48",
          "message": "chore(deps): Bump bytes from 1.6.0 to 1.6.1 (#533)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.6.0 to 1.6.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes 1.6.1</h2>\n<p>This release fixes a bug where <code>Bytes::is_unique</code> returns\nincorrect values when the <code>Bytes</code> originates from a shared\n<code>BytesMut</code>. (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.6.1 (July 13, 2024)</h1>\n<p>This release fixes a bug where <code>Bytes::is_unique</code> returns\nincorrect values when\nthe <code>Bytes</code> originates from a shared <code>BytesMut</code>.\n(<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/fd13c7dcdb840653bf81294d141da77d3f1f9e1f\"><code>fd13c7d</code></a>\nchore: prepare bytes v1.6.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/720\">#720</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/6b4b0eda2980f09df18380c80f8ae6109ae70d83\"><code>6b4b0ed</code></a>\nFix <code>Bytes::is_unique</code> when created from shared\n<code>BytesMut</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/718\">#718</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.6.0...v1.6.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.6.0&new-version=1.6.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:23Z",
          "tree_id": "f3822959ae190c6d588287d76304d2aab879168a",
          "url": "https://github.com/hasura/ndc-postgres/commit/9530cb15615957960b5353d29dec72bd71b08c48"
        },
        "date": 1721059947174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.117079,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.95330779999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.71155172804533,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.2713781339312415,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2988516162329511,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.707656,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.7246515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.56686392897082,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5046544734763359,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2608023110500261,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.620958,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.1118884,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.57724984999726,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.283751853743134,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38506761541741996,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.606171,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.24787419999998,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.94216440130455,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.94022778448327,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.31676894529402333,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.865981000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.48131995000003,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.297631613820474,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.805977642844418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3060292687651533,
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
          "id": "f59640cf1541fe0e19ec145301bdd04bc204e199",
          "message": "chore(deps): Bump uuid from 1.9.1 to 1.10.0 (#535)\n\nBumps [uuid](https://github.com/uuid-rs/uuid) from 1.9.1 to 1.10.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/uuid-rs/uuid/releases\">uuid's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.10.0</h2>\n<h2>Deprecations</h2>\n<p>This release deprecates and renames the following functions:</p>\n<ul>\n<li><code>Builder::from_rfc4122_timestamp</code> -&gt;\n<code>Builder::from_gregorian_timestamp</code></li>\n<li><code>Builder::from_sorted_rfc4122_timestamp</code> -&gt;\n<code>Builder::from_sorted_gregorian_timestamp</code></li>\n<li><code>Timestamp::from_rfc4122</code> -&gt;\n<code>Timestamp::from_gregorian</code></li>\n<li><code>Timestamp::to_rfc4122</code> -&gt;\n<code>Timestamp::to_gregorian</code></li>\n</ul>\n<h2>What's Changed</h2>\n<ul>\n<li>Use const identifier in uuid macro by <a\nhref=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/764\">uuid-rs/uuid#764</a></li>\n<li>Rename most methods referring to RFC4122 by <a\nhref=\"https://github.com/Mikopet\"><code>@​Mikopet</code></a> / <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/765\">uuid-rs/uuid#765</a></li>\n<li>prepare for 1.10.0 release by <a\nhref=\"https://github.com/KodrAus\"><code>@​KodrAus</code></a> in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/766\">uuid-rs/uuid#766</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Vrajs16\"><code>@​Vrajs16</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/pull/764\">uuid-rs/uuid#764</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0\">https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4b4c590ae323b683a7ba80f05c83d3002ddc2fc5\"><code>4b4c590</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/766\">#766</a> from\nuuid-rs/cargo/1.10.0</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/68eff326408ea269253aa0ba8f6cb3ac4099f894\"><code>68eff32</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/765\">#765</a> from\nuuid-rs/chore/time-fn-deprecations</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/3d5384da4bfb2f35ad4426440d285e4a13c8c011\"><code>3d5384d</code></a>\nupdate docs and deprecation messages for timestamp fns</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/de50f2091f05a973b4e8ca2f7eddd03459b1b680\"><code>de50f20</code></a>\nrenaming rfc4122 functions</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/4a8841792a8bb7007d23a54fa866adc5cec79425\"><code>4a88417</code></a>\nprepare for 1.10.0 release</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/66b4fcef14862bc5d8d45acb9f6683a37fa5ecb4\"><code>66b4fce</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/uuid-rs/uuid/issues/764\">#764</a> from\nVrajs16/main</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/8896e26c421a8b9a7a935acf83d291df40256de9\"><code>8896e26</code></a>\nUse expr instead of ident</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/09973d6aff62b61ec35f577a757148007deb5f05\"><code>09973d6</code></a>\nAdded changes</li>\n<li><a\nhref=\"https://github.com/uuid-rs/uuid/commit/6edf3e8cd59351589622daf1f2634870d90896e3\"><code>6edf3e8</code></a>\nUse const identifer in uuid macro</li>\n<li>See full diff in <a\nhref=\"https://github.com/uuid-rs/uuid/compare/1.9.1...1.10.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=uuid&package-manager=cargo&previous-version=1.9.1&new-version=1.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-15T16:00:26Z",
          "tree_id": "7c294ca63cc43a1da3f7a97c51d618d155699eec",
          "url": "https://github.com/hasura/ndc-postgres/commit/f59640cf1541fe0e19ec145301bdd04bc204e199"
        },
        "date": 1721060608260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 31.337473000000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.18675259999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 17.666190384532925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.92823895493806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31392484449284697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.809951,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 109.0819796,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.64853655188121,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4383660656725255,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24924106312288496,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.969763,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.22158799999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.534295762925822,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.559770375389419,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35865337280147347,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.313250499999995,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 74.58239830000001,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.998562746934457,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.664008907328441,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3061221142479441,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.605191000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.87900855000001,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.406357592931162,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.909507517012319,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3866644110744411,
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
          "id": "0ec6f62de4b74d263a4b6d2e4d9f2b28ba283247",
          "message": "Update readme (#536)\n\n### What\n\nThere's a new template in town. Let's update the readme.",
          "timestamp": "2024-07-16T06:57:25Z",
          "tree_id": "5f8f050db201d308b7a3ff11538381dff0f8e6cf",
          "url": "https://github.com/hasura/ndc-postgres/commit/0ec6f62de4b74d263a4b6d2e4d9f2b28ba283247"
        },
        "date": 1721113510455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.6899615,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.77301875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.480783941545113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.203265689556424,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.3025842014892987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.265135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.18845859999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 46.597756301507545,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5771361451285912,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.25435488704718595,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.139206,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.59976110000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.048048143724007,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.027669017277521,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.3625223797499872,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.985313,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.87907885,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.282605049332968,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9780418204369496,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.28085732272072444,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.2274625,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 67.82758549999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.89640979018794,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.6401177303889085,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.3054829051574113,
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
          "id": "effd73c41b9be821d5e6681392873e9fe9231bb3",
          "message": "Warn when the configuration is deprecated (#537)\n\n### What\n\nWe'd like to mark configuration version 3 and 4 as deprecated.\nWe'll mention this in the docs, and also trace a warning when starting\nthe connector with an older configuration version.\n\n```\n{\"timestamp\":\"2024-07-16T13:02:04.857565Z\",\"level\":\"WARN\",\"fields\":{\"message\":\"Warning: ndc-postgres configuration version '3' is deprecated.\\nConsider upgrading to the latest version:\\nhttps://hasura.io/docs/3.0/connectors/postgresql/configuration-reference/#upgrading-the-configuration-format-version\"},\"target\":\"ndc_postgres::connector\"}\n```\n\n### How\n\ntrace a warning pointing at how to upgrade the configuration.",
          "timestamp": "2024-07-17T08:31:56Z",
          "tree_id": "7af6bdf9d635f6eea242a3cb1382673f611305be",
          "url": "https://github.com/hasura/ndc-postgres/commit/effd73c41b9be821d5e6681392873e9fe9231bb3"
        },
        "date": 1721205545208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.629592,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 47.000472800000004,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.230473974873053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.95634512011085,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30940622844772153,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.712335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 108.2299704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.39259164463493,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5605557426668781,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2698388208623367,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.787822500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 86.68264445,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.73377360210357,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.859310974128977,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.35536080131760256,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.646004000000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 72.08823059999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.514549868465462,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.5661501706484025,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3414261185591184,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.0626685,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.38486754999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.063692273431815,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.16284136702107,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.2728523844455337,
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
          "id": "36e913672c5913a95ee54af52150d952bdcb256d",
          "message": "chore(deps): Bump thiserror from 1.0.61 to 1.0.62 (#534)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.61 to\n1.0.62.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.62</h2>\n<ul>\n<li>Support referring to nested tuple struct fields inside\n<code>#[error(&quot;…&quot;, …)]</code> attribute (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/309\">#309</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0bf6e3dd781409b62cbcf0816ffa1bb970d24833\"><code>0bf6e3d</code></a>\nRelease 1.0.62</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/497793283934d9e514d903a14278af6babbfbb65\"><code>4977932</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/310\">#310</a>\nfrom dtolnay/nestedtuple</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/40a7779b1793f2dce5f85abe8c03486cdb5eb640\"><code>40a7779</code></a>\nSupport .0.0 nested tuple index</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f1ca210cc4772f198af91886e3849dac68114f97\"><code>f1ca210</code></a>\nAdd regression test for issue 309</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/479744ec288f9183b8849f013dcee226ac6588ee\"><code>479744e</code></a>\nNo need for dead code if struct fields are public</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/4db08b10a39cfd189a36a88dee0fad578ac11cbe\"><code>4db08b1</code></a>\nIgnore warning on unused struct in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f2824ae379ac2edee1fd687b9e56f18c048086cd\"><code>f2824ae</code></a>\nFill in ignore reasons in all #[ignore] attributes</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.61...1.0.62\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.61&new-version=1.0.62)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-07-17T08:32:04Z",
          "tree_id": "8261d26918db9dccec1b373fa4799ba46b4110f4",
          "url": "https://github.com/hasura/ndc-postgres/commit/36e913672c5913a95ee54af52150d952bdcb256d"
        },
        "date": 1721205639586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.588128,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.521395,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.047682480052533,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.441148486157022,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.2612573111627685,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.444968,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.2646322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 47.484181062666686,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4594587475557645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2333935188144185,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.987032,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 81.00503814999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.904957835085966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.811037078362105,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.38792573286147625,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.854181,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 70.17975,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.781865175444977,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.119552057166491,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3090187538082006,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.785082,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 65.72718209999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.307796636355505,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.520372546232487,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32415140228782324,
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
          "id": "4af168d5638545f0e5c9e864ad4b4b28b7e860eb",
          "message": "Release ndc-postgres v1.0.0 (#538)\n\n### What\n\nbump the version.",
          "timestamp": "2024-07-17T12:40:46Z",
          "tree_id": "b4354a45aed29922c9f4e1a54376d26e64d41132",
          "url": "https://github.com/hasura/ndc-postgres/commit/4af168d5638545f0e5c9e864ad4b4b28b7e860eb"
        },
        "date": 1721220466231,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.300324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.693215749999965,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.79495271018394,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.9684055526111806,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.31721128822283506,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 72.133322,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 106.1573418,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.61398821086206,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7885486999626181,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27667773376387617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 47.511628,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.865799,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.292432816787258,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.336671646349604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.37137836391128726,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 42.7904165,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.76878665000002,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.669020657632363,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.814290729740666,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3393437202634603,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.682998,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 68.6157972,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.06824340822103,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.078975018592573,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.28769051080004554,
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
          "id": "95eebcb38f28f21f67706d17f01787758351955a",
          "message": "Remove the aurora tests (#545)\n\n### What\n\nWe've come to the conclusion that this works absolutely fine and it's\nbasically postgres, just far away, so we don't need to invest resources\nin testing it anymore.\n\n### How\n\nRemove it all.",
          "timestamp": "2024-07-23T09:03:28Z",
          "tree_id": "57d0063087c9305cea560785bc5199bbe829c2c5",
          "url": "https://github.com/hasura/ndc-postgres/commit/95eebcb38f28f21f67706d17f01787758351955a"
        },
        "date": 1721726072782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.02094,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 46.24160214999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.61292906660032,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.121056717925729,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.281335904878789,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.363596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.80225564999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.29516367304248,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5496660683318737,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27631976035129313,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.729894,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 84.60431910000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.466381023868966,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.944772058346533,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36489199479797163,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.8047675,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.7051652,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.60290172811467,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.797634796849497,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3216277030548592,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 43.65415,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 69.71295219999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.757510804507014,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 5.415428258853218,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.342884885783635,
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
          "id": "095ecbf5563bf617fb40a865a56cee340afa8cfe",
          "message": "bugfix: add neq to comparison operators map (#540)\n\n### What\n\nSome databases do not include `!=` in their catalog's operators list. We\ninclude `<>` as well so that `_neq` can be generated for these cases.\n\n### How\n\n1. Add it to the list",
          "timestamp": "2024-07-23T09:32:08Z",
          "tree_id": "00599f18644336f66eedc90bd3f4ae446c58921c",
          "url": "https://github.com/hasura/ndc-postgres/commit/095ecbf5563bf617fb40a865a56cee340afa8cfe"
        },
        "date": 1721727717032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 30.364788,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.97843954999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.731615770877838,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.975151598939,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.30586389032280387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 73.424252,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 105.98056999999987,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.007498606320496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.6599987038026853,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.27382842076671515,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.239307,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.64143719999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.498091473530227,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.13346714136377,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.36194257481035796,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.86392,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 73.2151954,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.407184610506505,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 6.521109231613622,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3416741762542068,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.429532,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.5632116,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 27.1106455459023,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.075489710378271,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.32166885702297193,
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
          "id": "2908c1cf65d89b3a5385b7f1cf07edfeebf97e91",
          "message": "chore(deps): Bump thiserror from 1.0.62 to 1.0.63 (#542)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 1.0.62 to\n1.0.63.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>1.0.63</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/915c75e8a3b679588e6eac03dccbba5d38c764a8\"><code>915c75e</code></a>\nRelease 1.0.63</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/3d5ec25464d2d71f09f480666e240d3446a44a19\"><code>3d5ec25</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/312\">#312</a>\nfrom dtolnay/backtracedoc</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/de8a1e54d420514250d9d4081d41723192cf0dfa\"><code>de8a1e5</code></a>\nUpdate documentation of #[from] and #[backtrace] attributes</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/1.0.62...1.0.63\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=1.0.62&new-version=1.0.63)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-07-23T09:41:43Z",
          "tree_id": "b21769ff8558363b63de0df4b911948ccb907072",
          "url": "https://github.com/hasura/ndc-postgres/commit/2908c1cf65d89b3a5385b7f1cf07edfeebf97e91"
        },
        "date": 1721728221208,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 29.784643,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 48.83151619999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.176784814715372,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.249453949979113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.29562278575783585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 71.29176899999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.96624714999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 53.802319503845716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.5073294645605415,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.24872526903920525,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 46.458861999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 83.56485769999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.728029283269283,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 8.253344343731055,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.32296626134310613,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 44.2387585,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 71.28348225,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.50751719622025,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 5.419731545881838,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.3381599955814122,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 44.99092,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 70.389929,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 28.848493171236303,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.204730789661806,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.29895322655078915,
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
          "id": "60c5d20aa87759fc1694945d0f68591c9a8bff74",
          "message": "chore(deps): Bump tokio from 1.38.0 to 1.38.1 (#544)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.38.0 to 1.38.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.38.1</h2>\n<h1>1.38.1 (July 16th, 2024)</h1>\n<p>This release fixes the bug identified as (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6682\">#6682</a>),\nwhich caused timers not\nto fire when they should.</p>\n<h3>Fixed</h3>\n<ul>\n<li>time: update <code>wake_up</code> while holding all the locks of\nsharded time wheels (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6682\">#6682</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6682\">tokio-rs/tokio#6682</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/6683\">tokio-rs/tokio#6683</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/14b9f7115728b77c82db8d21b6d768d16dc472a6\"><code>14b9f71</code></a>\nchore: release Tokio v1.38.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6688\">#6688</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/24344dfe4b69931bfe9fe686d2424c9f626dc75b\"><code>24344df</code></a>\ntime: fix race condition leading to lost timers (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/6683\">#6683</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.38.0...tokio-1.38.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.38.0&new-version=1.38.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Samir Talwar <samir.talwar@hasura.io>",
          "timestamp": "2024-07-23T09:41:51Z",
          "tree_id": "bed4a2b2c11c88f1aa501f756a25b774a1870d36",
          "url": "https://github.com/hasura/ndc-postgres/commit/60c5d20aa87759fc1694945d0f68591c9a8bff74"
        },
        "date": 1721728391139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 28.993597,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 45.162509899999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.967944879786863,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.56444734865504,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.28565724005675774,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 70.74068199999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 104.42598645,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 52.235086580170396,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.7337434175878954,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.2872976523457038,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 48.465481499999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 82.84913014999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 29.000014108068818,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.449132014986347,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.4102654309790635,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 43.2756835,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 68.81103194999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.31067828090607,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.99981784203008,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.39959251316037964,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 42.709732,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 66.454762,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.1262912027064,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.483707599520287,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.33289408186977737,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}