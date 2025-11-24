window.BENCHMARK_DATA = {
  "lastUpdate": 1764000801296,
  "repoUrl": "https://github.com/hasura/ndc-postgres",
  "entries": {
    "Component benchmarks": [
      {
        "commit": {
          "author": {
            "email": "accounts@hasura.io",
            "name": "hasura-bot",
            "username": "hasura-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d5d5d11da1a4ad03efe5276983956f4ad1251030",
          "message": "Release version 2.2.0 (#790)\n\nThis bumps the version in `Cargo.toml` to 2.2.0 and updates\n`changelog.md`.\n\nMerging this branch will trigger the tag-release workflow, which will\nship a new release.",
          "timestamp": "2025-07-02T02:08:35Z",
          "tree_id": "9edcc78679fed4aba71bd0a332a60c2955d62203",
          "url": "https://github.com/hasura/ndc-postgres/commit/d5d5d11da1a4ad03efe5276983956f4ad1251030"
        },
        "date": 1751422505817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.8483315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.21302625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.219990092070905,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.5297905033955495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03232606511268917,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.9664975,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.36282795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.784424976668326,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.144848357667982,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.0510571478804653,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.701215,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.44213345,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.13945355074632,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.884496384482961,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04123444148634677,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.010648,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.30573639999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.328520789689076,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6608476349869044,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.033639073928134394,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.820894,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.445122199999986,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.139382960771293,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6206174753349956,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03500038842974105,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8a0cf1cb2285fc7adccf1c2cd2049b0907f082f7",
          "message": "Update ship.yaml (#791)\n\nThe new automated CI workflows should tag automatically when merging,\nbut failed to do so because workflow dispatch is not available for the\nship workflow. This is now fixed",
          "timestamp": "2025-07-02T02:28:19Z",
          "tree_id": "344f3eb06d659194554a9f212e552fcce02b09a9",
          "url": "https://github.com/hasura/ndc-postgres/commit/8a0cf1cb2285fc7adccf1c2cd2049b0907f082f7"
        },
        "date": 1751423698799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.034036,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.52900960000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.537476188860392,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.369707039391084,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03341477533372285,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.0094835,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.00857784999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.88700835154277,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2203122287299024,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04952595245109523,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.410172,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.71941639999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.396811035948254,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.545265893792973,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039221535301606034,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.097784000000004,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.364468649999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.189209856136202,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.721683657766306,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03367787186715091,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.840919,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.075530499999985,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.0600539898611,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8314118820558356,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03509674895830034,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3aa17f3477d62cb1b6093a075cf48d11344dd0ae",
          "message": "Fix workflow script path (#792)\n\nPath to workflow script was incorrect, this fixes that issue",
          "timestamp": "2025-07-02T10:00:19Z",
          "tree_id": "1a6e318cbff8dc6d05111722b4802356244afa35",
          "url": "https://github.com/hasura/ndc-postgres/commit/3aa17f3477d62cb1b6093a075cf48d11344dd0ae"
        },
        "date": 1751450798212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.798595,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 42.10811259999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.779784282961943,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.811841240347542,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03268064170744667,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.120329,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.939134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.86028143777611,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1327878234976865,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05138789863497792,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.298326,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.24052879999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.694527845838035,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.112475464064833,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03612430074448906,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.2689455,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.863386799999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.290898938241895,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.733504589019173,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035484355846408605,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.391414,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.1882388,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.729532051903426,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4080284707859008,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035319795816448785,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "0e6d1e5e1bdc82b1c8e333f058b068397a5ca7fb",
          "message": "Revert release 2.2.0, add changelog note about requiring introspection after update (#793)\n\nRevert the release of v2.2.0, as we've decided we want to do a major\nversion bump instead.",
          "timestamp": "2025-07-02T10:13:17Z",
          "tree_id": "32734da5dcc3c25d7dc5d82dd7dfe517addb3a87",
          "url": "https://github.com/hasura/ndc-postgres/commit/0e6d1e5e1bdc82b1c8e333f058b068397a5ca7fb"
        },
        "date": 1751451607005,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.852327,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.20915109999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.45120728120575,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.02530204670391,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03737973024200302,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.411791,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.7918244,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.42974209265052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2543862492886717,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05574078374635783,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.834253,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.71375379999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.240682164807954,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.464045522328366,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04080465487686292,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.989534000000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.260626849999966,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.77419862875072,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7189120279543317,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038575699541511944,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.767045499999995,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.9213622,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.431336871003257,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.315164123680315,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03609275039874307,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "accounts@hasura.io",
            "name": "hasura-bot",
            "username": "hasura-bot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "72b08042beade83cf3d520357ff28e311b7ccb87",
          "message": "Release version 3.0.0 (#794)\n\nThis bumps the version in `Cargo.toml` to 3.0.0 and updates\n`changelog.md`.\n\nMerging this branch will trigger the tag-release workflow, which will\nship a new release.\n\nNote there is currently an issue: the required workflows won't trigger\nfor this PR as it was created by another workflow.\nTo work around this, check out this branch, then create and push an\nempty commit:\n\n```bash\ngit checkout release-3.0.0\ngit commit --allow-empty -m \"Trigger workflows\"\ngit push origin release-3.0.0\n```\n\n---------\n\nCo-authored-by: Benoit <benoit@hasura.io>",
          "timestamp": "2025-07-02T10:37:30Z",
          "tree_id": "78bb5d0a8fce67d8f96363e29d07d6d464a3e3bd",
          "url": "https://github.com/hasura/ndc-postgres/commit/72b08042beade83cf3d520357ff28e311b7ccb87"
        },
        "date": 1751453043382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.399008000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.55113,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.99006945647781,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.190665071055799,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.036499092664038564,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.35207,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.918795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.74690856908697,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4193653331734524,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05298797991912028,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.7713135,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.60831039999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.680925133912496,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.871965288816519,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.046069218919581975,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.765116500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.85538825,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.521494709055336,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.91343851469275,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03929958380582049,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.271657000000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.80891134999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.364775452992113,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.5574173995092586,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038808691287708225,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82e257cda9215bc8771fb192a89d8d429494fae2",
          "message": "Upload ci artifact so it can be used in next step (#795)\n\nWe had a bug where the reate-ndc-hub-pr: job would failt to find the\nconnector-definition.tgz artifact, because we never uploaded it.\n\nThis PR adds that step.\n\nThis PR also prevents envsubst from substituting env vars we don't want\nto replace.\nThis was an issue with some of the scripts that are in the metadata file",
          "timestamp": "2025-07-02T13:01:20Z",
          "tree_id": "1f77855d9eeffd0ebe1ee5d939cc9a9f15498382",
          "url": "https://github.com/hasura/ndc-postgres/commit/82e257cda9215bc8771fb192a89d8d429494fae2"
        },
        "date": 1751461687757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.486441,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.79714160000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.07629785774476,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.903890110449142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.04018997086551063,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 68.14905,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 98.2201596,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.65823561949048,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.298164741713208,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.060546453616177866,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.951221,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.50465519999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.58133673371326,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.066442754775249,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0412605176204331,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.228416,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.5599625,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.88698054983213,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7392868087794007,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03947783790514335,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.424908,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.16523,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.196176026006867,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9574241256075418,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038924512469738354,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb702d0aea308e41030c0e769b20fbc7c3fa597c",
          "message": "for some reason envsubst uses longform options with a single dash. Why? (#796)\n\nI introduced a bug when adding the `--no-unset` and `--no-empty`\nenvsubst options. Turns out, they are called `-no-unset` and `-no-empty`",
          "timestamp": "2025-07-02T13:19:28Z",
          "tree_id": "ad0d99f8dac3a0609dc22d77e7642e159224047a",
          "url": "https://github.com/hasura/ndc-postgres/commit/bb702d0aea308e41030c0e769b20fbc7c3fa597c"
        },
        "date": 1751462760004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.847773500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.804136899999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.65714440626487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.738114652670639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0357855411311411,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.162371,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.6133515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.06456228054627,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0743802136370704,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.051283087149246856,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.7004115,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.25574774999998,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.605527617501018,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.3723160107224,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03966194802859016,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.751478500000005,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.26914619999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.37182651619439,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9971201033579966,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038376420774646744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.8256225,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.923890899999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.065972728990797,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.743355567039007,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03588786052166933,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e40fc70c039f6ae79d85d87439a6cb81147d48ed",
          "message": "seems envsubst options differ depending on platform? (#797)\n\nI give up. Removing `-no-unset` and `-no-empty`",
          "timestamp": "2025-07-02T14:38:49Z",
          "tree_id": "8781e8cac47d0af4ac68332bc0635e71c36011c4",
          "url": "https://github.com/hasura/ndc-postgres/commit/e40fc70c039f6ae79d85d87439a6cb81147d48ed"
        },
        "date": 1751467531429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.167797,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.046097899999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.070546216434447,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.921879606081625,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.032376926183811515,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.2682435,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.67657874999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.60509180419595,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.114113473843375,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05292436820860409,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.689799,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.22699379999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.994281619931716,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.845512069799366,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03840601908323857,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 35.853846,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.18136899999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.108386438671758,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7697754788349727,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03428289282321682,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.759057999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 53.77611125,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.87757404770999,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.0067136281703206,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.033313160589621776,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e4091024cc91edd25f50df4bbb0ca97adc8079a",
          "message": "fix extension of cli plugin url: we use gnu! Not musl! (#798)\n\nFix two bugs in ci:\n- was missing reference to connector tests in connector packaging\n- url for linux distributions was wrong! We use gnu not musl\n- that bug also affected ability to get sha sum",
          "timestamp": "2025-07-02T17:19:23Z",
          "tree_id": "c08ef8372166a5d236074887d52e8eaedcbf8f92",
          "url": "https://github.com/hasura/ndc-postgres/commit/0e4091024cc91edd25f50df4bbb0ca97adc8079a"
        },
        "date": 1751477162372,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.8205315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.72797979999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.85879825764814,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.5583299745457495,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03888101316926864,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.08639,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.862234,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.86858543036586,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.206389455286235,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05577670992072656,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.884004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.332477,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.32890098042588,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.718606177981734,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04165110358296665,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.4476635,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.039895,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.25653584215562,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.874351998208951,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03671909348856443,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.6397595,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.77775164999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.891926887035748,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.661552212609731,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03616038292354248,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8212a0928990f62cb8cac451fe26e0d0afe51a3",
          "message": "Revert CI product to match previous behavior (#799)\n\nwe've overhauled CI to automate the release process.\n\nAlong the way, I decided to inline the manifest to the connector\ndefinition, because using cli-plugins-index for that purpose is now\ndeprecated.\n\nThis PR changes the overhauled CI to produce the exact same output as we\ndid before, specifically:\n- the cli plugin information is no longer in the connector metadata\n- the connector definition archive name reverts to `package.tar.gz`\n- we add another script to generate a PR on the cli plugins index repo",
          "timestamp": "2025-07-02T22:46:03Z",
          "tree_id": "d5a4ba915bc1d8faf6d93ec7183e4c3884505ad2",
          "url": "https://github.com/hasura/ndc-postgres/commit/e8212a0928990f62cb8cac451fe26e0d0afe51a3"
        },
        "date": 1751496750689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 27.132591,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 50.04923,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 16.243061810388635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 7.020336332784691,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03964504203935071,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.76609,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.07308049999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.90369111566517,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2874080659019427,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.06007940631376018,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 44.364064,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.032569,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 30.02143187975907,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.212582292968605,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04440393912088284,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 40.390091,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 66.36783535,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 29.24514144026135,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7631931032748582,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03702239711197138,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.680603500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.56625189999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.86425164789339,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.7884191087921337,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03993304629226057,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b99d41f9b7548c8fbf79bbc153fc880ce17bab11",
          "message": "fix artifact file name (#800)\n\nfix the name of the artifact to upload",
          "timestamp": "2025-07-02T23:31:21Z",
          "tree_id": "ea05527c9d60f27f8cb8f8987083f5b4ebe9840c",
          "url": "https://github.com/hasura/ndc-postgres/commit/b99d41f9b7548c8fbf79bbc153fc880ce17bab11"
        },
        "date": 1751499472084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.6896215,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.69429654999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.664765109175283,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.747667322700162,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03328432849994058,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.347984,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.99619100000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.842045213978544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4434460729644556,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05763729233478398,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.365669999999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.04079695,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.295665931826257,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.259299185797808,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04145581751917903,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.000755,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.111255999999976,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.748838612109687,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.973644889946712,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03650919907597031,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.220999500000005,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 60.22559639999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.62136406761866,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.797667201119065,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.037429714781749515,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f2c2a5295770e6039fd0a4e6efc91ea5883fd3e6",
          "message": "add exec permissions to new script (#801)\n\nadd exec permissions to new script",
          "timestamp": "2025-07-02T23:57:44Z",
          "tree_id": "52a84651ff8a9ea3875becee75924e5ee50f515b",
          "url": "https://github.com/hasura/ndc-postgres/commit/f2c2a5295770e6039fd0a4e6efc91ea5883fd3e6"
        },
        "date": 1751501055775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.287723,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.979209549999986,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.289038053831762,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.803314505483817,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03402526587779001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.144293,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.06924569999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.94996828609679,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.049691005154159,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05108224753974162,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.0930435,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.43913404999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.301817506218846,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.878975341002011,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03964331251638775,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.668545,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.8812884,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.892786900398693,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.39575527999056,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03491331529443193,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.9924585,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.350280149999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.52058547585969,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4905298768573587,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03559468624758522,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "e654dd3dc823afb8fff4bd4a2add8e8bf9a3b45e",
          "message": "we cannot use cli-plugins-index with v2 (#802)\n\nWe tried reverting to using cli-plugins index, which was the previous\nbehavior, in case that fixed our CI issues.\n\nTurns out that is not allowed. This PR reverts that change.",
          "timestamp": "2025-07-03T01:33:06Z",
          "tree_id": "1558e647408faefa9e113d8ef9b5e77c58030a46",
          "url": "https://github.com/hasura/ndc-postgres/commit/e654dd3dc823afb8fff4bd4a2add8e8bf9a3b45e"
        },
        "date": 1751506758350,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.3199355,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.92783599999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.117456510571621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.789956726287198,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03757435906903387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.238036,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.34420409999993,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.15057276386614,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.324801457855017,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.059970404849595635,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.097155,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 65.9297201,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.4474761783643,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.323871685958462,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04338850564574414,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.373459499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.41628575,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.582273524486403,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.6253688449594605,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038510690954032485,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.241723,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.7998884,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.88919995683334,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.003706632355886,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03773218182862948,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f1d364c7e9d5ce0223094a5e5b3a6b5893049f29",
          "message": "update aliased connectors in hub PR (#803)\n\nWhen creating the hub pr, we update the metadata.json file for postgres.\n\nTurns out, postgres is aliased to a bunch of other names, and these all\nhave their own metadata file.\n\nThis PR updates the script that creates the hub PR, to also update these\nadditional metadata files",
          "timestamp": "2025-07-03T09:28:33Z",
          "tree_id": "14c943c54f7d0a49a56b83c5850e063b325b2751",
          "url": "https://github.com/hasura/ndc-postgres/commit/f1d364c7e9d5ce0223094a5e5b3a6b5893049f29"
        },
        "date": 1751535281575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.257375500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.21792904999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.738679810529053,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.31262851954645,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03290914858175732,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.007052,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.57458989999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.43050627578125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.028455397108921,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05343184139740547,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.53031,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.77317244999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.057444268181435,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.190487143626818,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04134509970472934,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.664898,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.82590654999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.49868386969642,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.765693911892221,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03473310874120161,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.650212,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.585730199999986,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.994122600426124,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8109570110216637,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03566926709279988,
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
          "id": "476b5ea5d70b907eb400e0ec4156ea2b170250f0",
          "message": "Fix auto update multitenant script (#804)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\nCo-authored-by: Benoit Ranque <benoit@hasura.io>",
          "timestamp": "2025-07-04T15:32:57Z",
          "tree_id": "c9f7dcc3aace5fa42faeb9769d050b782c056bf2",
          "url": "https://github.com/hasura/ndc-postgres/commit/476b5ea5d70b907eb400e0ec4156ea2b170250f0"
        },
        "date": 1751643583685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.221893,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.4040165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.659008500691098,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.492639865756324,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03391068267297838,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.473587,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.7751996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.149999012509134,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2895200138081648,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.052465075535183536,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.469410499999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.77256015,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.103921998853195,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.612911458009982,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03853695377570572,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.837914,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.85067139999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.536984394156633,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.299844885834194,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03434538428705714,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.290492,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.38181964999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.950407464447547,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.171214940080194,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038632986509614116,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benoit@hasura.io",
            "name": "Benoit Ranque",
            "username": "BenoitRanque"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "17f063a35829b49ae8b13fe90f67dece3bcec27e",
          "message": "Fix jsonschema (#805)\n\nUsing `#[serde(rename=\"camelCase\")] on an enum renames the enum tag, not\nthe enum fields.\nFor that, we have `rename_all_fields`.\n\nTurns out, that is not supported by schemars 0.8, which is the version\nused by ndc models.\n\nSo, this PR users `#[serde(rename)]` on the individual fields.",
          "timestamp": "2025-07-07T13:03:54Z",
          "tree_id": "b4beaeba6a544a463c93f7e1958de421360c7f26",
          "url": "https://github.com/hasura/ndc-postgres/commit/17f063a35829b49ae8b13fe90f67dece3bcec27e"
        },
        "date": 1751893821000,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.765376500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.946479499999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.112101489561876,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.578661428924793,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03493854424759877,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.3979885,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.80559524999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.00753878956569,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.224731974115592,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.053964307045971494,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.624879,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.1136437,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.76714289875447,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.1758199614768685,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03934691570261121,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.230714,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.64267659999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.768345724918312,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9175659129376186,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03533286606035423,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.111684999999994,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.39063499999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.82456999900121,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.285170437466256,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03734338365216179,
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
          "id": "acd0838c41b56e46b4d426c61523cb857487f261",
          "message": "chore(deps): Bump indexmap from 2.9.0 to 2.10.0 (#781)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.9.0 to\n2.10.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.10.0 (2025-06-26)</h2>\n<ul>\n<li>Added <code>extract_if</code> methods to <code>IndexMap</code> and\n<code>IndexSet</code>, similar to the\nmethods for <code>HashMap</code> and <code>HashSet</code> with ranges\nlike <code>Vec::extract_if</code>.</li>\n<li>Added more <code>#[track_caller]</code> annotations to functions\nthat may panic.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/91dbcc55d2b6be52b7f99929aebb7204a6576189\"><code>91dbcc5</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/399\">#399</a>\nfrom cuviper/release-2.10.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/67a5a712fcb667aa7b11e9b19a33fad764ae712c\"><code>67a5a71</code></a>\nRelease 2.10.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/37e519a3be8666e251d96156baeb230a80f9ad1f\"><code>37e519a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/308\">#308</a>\nfrom cuviper/extract_if</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4d7618fbc919be41dd0307075ae7fc2df58ea746\"><code>4d7618f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/398\">#398</a>\nfrom cuviper/bench-deps</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/68201eb0a389f6f96cafd7b3f887e013557be041\"><code>68201eb</code></a>\nDrop lazy_static for LazyLock</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/eaaaa56e717e19d6904645927a771abbeb9ae257\"><code>eaaaa56</code></a>\nSwitch to fastrand for bench shuffling</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b19d84edafdb50a7207e2ce237f39f11092409fb\"><code>b19d84e</code></a>\nFix <code>clippy::needless_lifetimes</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4f62778c866ac27c7e460fec78163188c8fb8e5f\"><code>4f62778</code></a>\n<code>impl FusedIterator for ExtractIf</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e09eaaf8e547ec56e564980b20f62b7c4d459fdd\"><code>e09eaaf</code></a>\nDocument and track <code>extract_if</code> panics</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/a8d7dc50a250971fe2203bdf23c2b5a307db7c86\"><code>a8d7dc5</code></a>\nAdd range support to <code>extract_if</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.9.0...2.10.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.9.0&new-version=2.10.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-08T07:40:04Z",
          "tree_id": "415c03d744d88055eebcc297f18ef6bd707cf1ec",
          "url": "https://github.com/hasura/ndc-postgres/commit/acd0838c41b56e46b4d426c61523cb857487f261"
        },
        "date": 1751960914751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.674676,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.88405400000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.865744714015953,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.383215442215299,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.034361482476899914,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.84637950000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.093345,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.54733011621909,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2257769368732028,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.050848192365084074,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.928568999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.6420279,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.94736458695659,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.810657265950788,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03982152956014713,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.694898,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.053881199999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.925038167662926,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.787585738561372,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035978099792981284,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.9024735,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.48865419999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.779763854505482,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.92356643092225,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03488117462396762,
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
          "id": "c1cd0c1043b21dd3ae0b329467e2907a897dd129",
          "message": "Update SDK (#813)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate to `ndc-sdk-rs` `0.8.0` so we output connector name and version\nin traces.",
          "timestamp": "2025-07-17T14:14:43Z",
          "tree_id": "297c47ceac2d21fbfec45df70ce851d70d244648",
          "url": "https://github.com/hasura/ndc-postgres/commit/c1cd0c1043b21dd3ae0b329467e2907a897dd129"
        },
        "date": 1752762170853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.5743105,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.99582874999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.520637295399487,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.685350998336636,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03513481994680077,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.306699,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.59231719999995,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.86885448269695,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1138494073355503,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05401357484285764,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.196467999999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.21654645,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.857752476847235,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.557232126914808,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039535609091120916,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.96928,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.542699799999966,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.970251620693627,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6076462336449175,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03623923798540257,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.957973,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.570745,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.894715764235155,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.826329111376385,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03780039493921968,
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
          "id": "0c6fab3b117bd10af11e81af0344f2a8ad8ac801",
          "message": "Upgrade Rustc to 1.88.0 (#818)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nNew version comes with a bunch of useful lints for detecting enums with\nlarge size discrepencies, upgrade and fix the suggestions.",
          "timestamp": "2025-08-01T12:00:16Z",
          "tree_id": "058a5aaa57768427c2befdb46d3c96bfd679278d",
          "url": "https://github.com/hasura/ndc-postgres/commit/0c6fab3b117bd10af11e81af0344f2a8ad8ac801"
        },
        "date": 1754050298240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.468087,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.885472249999985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.43060165897531,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.773457818821832,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03476215991722311,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.6887585,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.86341904999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.233984044612484,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3694631161958597,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05111291902122617,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.073654,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.03298740000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.022365564033805,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.540471249550222,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04160183975066076,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.7266525,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.23288319999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.708518538533312,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6854671370196534,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03414776790798836,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.939274,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.600456799999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.341957040818617,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.2582947963596283,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03391204508550504,
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
          "id": "f105844af281f647f11545e8b88c3220493a93f5",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.2.0 to 2.3.0 (#808)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.2.0 to 2.3.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.3.0</h2>\n<h2>Release Summary</h2>\n<p><strong>Features</strong> – configurable service log level and\nstreamlined dependency-upgrade helpers.\n<strong>CI</strong> – new <em>Release new action version</em> workflow\nplus Docker Compose added to the update matrix.\n<strong>Dependencies</strong> – major refresh: Docker Compose 1.2.0,\n<code>@​octokit/action</code> 8.0.2, <code>@​actions/github</code>\n6.0.1, multiple Hoverkraft CI templates, and\nactions/create-github-app-token 2.x for improved GitHub API support.\n<strong>Docs</strong> – action and workflow guides updated to reflect\nthe new processes.</p>\n<p>No breaking changes were detected.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>ci: add Release new action version workflow by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/124\">hoverkraft-tech/compose-action#124</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.16.1 to\n0.17.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/126\">hoverkraft-tech/compose-action#126</a></li>\n<li>chore(deps): bump docker-compose from 1.1.0 to 1.1.1 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/127\">hoverkraft-tech/compose-action#127</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.0 to 7.0.1\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/128\">hoverkraft-tech/compose-action#128</a></li>\n<li>ci: add docker-compose to dependencies update by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/129\">hoverkraft-tech/compose-action#129</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.8.0 to\n0.8.1 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/130\">hoverkraft-tech/compose-action#130</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/132\">hoverkraft-tech/compose-action#132</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/133\">hoverkraft-tech/compose-action#133</a></li>\n<li>chore(deps): bump docker-compose from 1.1.1 to 1.2.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/131\">hoverkraft-tech/compose-action#131</a></li>\n<li>feat: upgrade dependencies by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/135\">hoverkraft-tech/compose-action#135</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/137\">hoverkraft-tech/compose-action#137</a></li>\n<li>chore(deps): bump actions/create-github-app-token from 1.12.0 to\n2.0.2 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/140\">hoverkraft-tech/compose-action#140</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.1 to 7.0.2\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/142\">hoverkraft-tech/compose-action#142</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.22.0 to\n0.22.2 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/143\">hoverkraft-tech/compose-action#143</a></li>\n<li>chore(deps): bump the github-actions-dependencies group across 1\ndirectory with 3 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/145\">hoverkraft-tech/compose-action#145</a></li>\n<li>chore(deps): bump actions/create-github-app-token from 2.0.3 to\n2.0.6 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/148\">hoverkraft-tech/compose-action#148</a></li>\n<li>chore(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin the actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/147\">hoverkraft-tech/compose-action#147</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 7.0.2 to 8.0.1\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/152\">hoverkraft-tech/compose-action#152</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.11.0 to\n0.12.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/155\">hoverkraft-tech/compose-action#155</a></li>\n<li>chore(deps): bump <code>@​octokit/action</code> from 8.0.1 to 8.0.2\nby <a href=\"https://github.com/dependabot\"><code>@​dependabot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/154\">hoverkraft-tech/compose-action#154</a></li>\n<li>feat: upgrade dependencies by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/157\">hoverkraft-tech/compose-action#157</a></li>\n<li>feat: make service log level configurable by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/159\">hoverkraft-tech/compose-action#159</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/161\">hoverkraft-tech/compose-action#161</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/162\">hoverkraft-tech/compose-action#162</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-common from 0.22.3 to\n0.23.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/163\">hoverkraft-tech/compose-action#163</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.3.0\">https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.3.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/40041ff1b97dbf152cd2361138c2b03fa29139df\"><code>40041ff</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-common</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/59a51a1b9c95890b0e28dbfed9a4c62842b0cd77\"><code>59a51a1</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/2daef55cd7e9fa27142cbed182ef685004c591a8\"><code>2daef55</code></a>\nchore: branding cleaning</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/4e1d048b27aa3ce52ac091c9005932c184221477\"><code>4e1d048</code></a>\ndocs: add example for multiple compose files in README</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/d885714cc10edb1a2f77b9f9d437903a5c5cbfae\"><code>d885714</code></a>\ndocs: add example for multiple compose files</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/329c851e918cb13ac750af7c414ff1d9acb0f4e1\"><code>329c851</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/213193f269844e56af378ee2cf0924283a5d47d2\"><code>213193f</code></a>\nfix: add missing input in action manifest</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/7098fdc4f5207838e697c6710308c28c3086fb86\"><code>7098fdc</code></a>\nfeat: make service log level configurable</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/a035f13e41dfd4947207a6d0c4c4a84605df69c1\"><code>a035f13</code></a>\nfeat: upgrade dependencies</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ad8e0e414a8244c238d7071359bbf04d1e50cd79\"><code>ad8e0e4</code></a>\nchore(deps): bump <code>@​octokit/action</code> from 8.0.1 to 8.0.2</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.2.0...v2.3.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.2.0&new-version=2.3.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T12:18:14Z",
          "tree_id": "917115113f9c299cf2d0ce0a6d6e2003c3139166",
          "url": "https://github.com/hasura/ndc-postgres/commit/f105844af281f647f11545e8b88c3220493a93f5"
        },
        "date": 1754051370284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.490551500000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.205522599999966,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.561626961111621,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.81105853386142,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03496983802034193,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.202264,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.80541049999994,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.173015749714196,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0921405330826275,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.053624016188911806,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.455481,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.9847908,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.234095821250296,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.08754216855387,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0407978851145156,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.512615,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.635200499999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.83446621916201,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.506367162368285,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036041098066630486,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.342557,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.444389199999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.02985209957005,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.254169067314617,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03557077809801831,
            "unit": "ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "brandon@codedmart.com",
            "name": "Brandon Martin",
            "username": "codedmart"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6992078f7f4987320955a724497b20cf54d29969",
          "message": "Fix stack overflow in OR expression processing and add OR-to-IN optimization (#817)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\nThis PR addresses a critical stack overflow issue that occurs when\nprocessing large OR expressions in query predicates. The current\nimplementation creates deeply nested left-heavy expression trees that\ncan exhaust the thread stack, causing runtime crashes with errors like:\n```\nthread 'tokio-runtime-worker' has overflowed its stack\nfatal runtime error: stack overflow\n```\nAdditionally, this PR introduces an optimization that converts multiple\nOR expressions with equality comparisons on the same column into more\nefficient IN operations.\n\n<!-- What is this PR trying to accomplish (and why, if it's not\nobvious)? -->\n\n<!-- Consider: do we need to add a changelog entry? -->\n\n### How\n\n#### Stack Overflow Fix:\n\n* Replaced the try_fold approach in OR/AND expression processing with\nbalanced binary tree construction\n* Added fold_or_balanced() and fold_and_balanced() helper functions that\ncreate balanced trees instead of left-heavy chains\n* This prevents deep recursion during SQL generation and evaluation\n\n#### OR-to-IN Optimization:\n\n* Added try_optimize_or_to_in() function that detects patterns like:\n```\n-- Before: \ncolumn = 'value1' OR column = 'value2' OR column = 'value3'\n\n-- After:\ncolumn IN ('value1', 'value2', 'value3')\n```\n* The optimization runs before standard OR processing and only applies\nwhen:\n  * All expressions are binary equality comparisons (_eq)\n  * All comparisons target the same column\n  * All values are scalar (not column references)\n  * There are at least 2 values to optimize\n\n#### Implementation Details:\n\n* Modified translate_expression_with_joins() in filtering.rs to use\nbalanced tree construction\n* Added optimization check at the beginning of OR expression processing\n* Leveraged existing IN operator infrastructure for the optimized\nexpressions\n* Maintained backward compatibility - non-optimizable OR expressions\nfall back to the improved balanced tree approach\n\nThis change significantly improves performance for queries with large OR\npredicates while preventing stack overflow crashes entirely.\n\n<!-- How is it trying to accomplish it (what are the implementation\nsteps)? -->\n\n---------\n\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-08-01T13:12:08Z",
          "tree_id": "9b35148d0a06240a4779812a246c89b980d862c3",
          "url": "https://github.com/hasura/ndc-postgres/commit/6992078f7f4987320955a724497b20cf54d29969"
        },
        "date": 1754054588673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.298129,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.703197,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.32474993518586,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.737657802609274,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0359422989605022,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.6234015,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.7452842,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.498504606924705,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3280281760285462,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05753215329490128,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.450424,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.35785224999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.713719850593886,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.920033814546269,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03798342119351138,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.0074735,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.31463479999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.36532421898099,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.053256783510083,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.0369593369493744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.627241,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.1915852,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.11548150652799,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.23546928207201,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.0360367119971219,
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
          "id": "dedc6c241a302e82d883439a2762e3190bec98d8",
          "message": "chore(deps): Bump serde_json from 1.0.140 to 1.0.141 (#816)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.140 to\n1.0.141.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.141</h2>\n<ul>\n<li>Optimize string escaping during serialization (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1273\">#1273</a>,\nthanks <a\nhref=\"https://github.com/conradludgate\"><code>@​conradludgate</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6843c3660ec3394b15da016902e001f8381dfe92\"><code>6843c36</code></a>\nRelease 1.0.141</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/6e2c21063a477122dd5dd4a55a6d8494e6bc7921\"><code>6e2c210</code></a>\nTouch up PR 1273</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/623d9b47cfc1f3e1a596f31ef9e56c6aa249b1b6\"><code>623d9b4</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1273\">#1273</a>\nfrom conradludgate/optimise-string-escaping</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/de70b7db1fe8783a6e18fe997470a550c376abb0\"><code>de70b7d</code></a>\nuse unreachable_unchecked for escape table. use a second match to\nroundtrip E...</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/f2d940dd54d82235eb6f5b276f03eaeba058f06c\"><code>f2d940d</code></a>\nreplace start index with bytes slice reference</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/cd55b5a0ff5f88f1aeb7a77c1befc9ddb3205201\"><code>cd55b5a</code></a>\nIgnore mismatched_lifetime_syntaxes lint</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/c1826ebcccb1a520389c6b78ad3da15db279220d\"><code>c1826eb</code></a>\nPin nightly toolchain used for miri job</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8a56cfa6d0a93c39ee4ef07d431de0748eed9028\"><code>8a56cfa</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1248\">#1248</a>\nfrom jimmycathy/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/af3d80de56bc9bb06def76badbd0ef1abd43ca7c\"><code>af3d80d</code></a>\nchore: fix typo</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.140...v1.0.141\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.140&new-version=1.0.141)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T13:15:48Z",
          "tree_id": "d2debf20dc52c713583b9ffc95830709d985b655",
          "url": "https://github.com/hasura/ndc-postgres/commit/dedc6c241a302e82d883439a2762e3190bec98d8"
        },
        "date": 1754055206554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 23.134956,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.486038400000005,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.90520521131951,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.6810788893546675,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03763202898028173,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.082297,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.320271,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.23858538026784,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.321639725475059,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05944922340638806,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.1539885,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.25354300000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.178345168497245,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.7139392638657895,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04323470108002929,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.914512,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.08652399999993,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.15182786644967,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.414673892054477,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.04277753976798581,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.895403,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.2780804,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.564337194347537,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.9782201093606844,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.04131016560456003,
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
          "id": "d0cd20db82d0a8990d1a9cd26e5736de13ebfcf3",
          "message": "chore(deps): Bump tokio from 1.45.1 to 1.46.1 (#807)\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.45.1 to 1.46.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/tokio/releases\">tokio's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Tokio v1.46.1</h2>\n<h1>1.46.1 (July 4th, 2025)</h1>\n<p>This release fixes incorrect spawn locations in runtime task hooks\nfor tasks spawned using <code>tokio::spawn</code> rather than\n<code>Runtime::spawn</code>. This issue only effected the spawn location\nin <code>TaskMeta::spawned_at</code>, and did not effect task locations\nin Tracing events.</p>\n<h2>Unstable</h2>\n<ul>\n<li>runtime: add <code>TaskMeta::spawn_location</code> tracking where a\ntask was spawned (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7440\">tokio-rs/tokio#7440</a></p>\n<h2>Tokio v1.46.0</h2>\n<h1>1.46.0 (July 2nd, 2025)</h1>\n<h3>Fixed</h3>\n<ul>\n<li>net: fixed <code>TcpStream::shutdown</code> incorrectly returning an\nerror on macOS (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7290\">#7290</a>)</li>\n</ul>\n<h2>Added</h2>\n<ul>\n<li>sync: <code>mpsc::OwnedPermit::{same_channel,\nsame_channel_as_sender}</code> methods (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7389\">#7389</a>)</li>\n<li>macros: <code>biased</code> option for <code>join!</code> and\n<code>try_join!</code>, similar to <code>select!</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7307\">#7307</a>)</li>\n<li>net: support for cygwin (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7393\">#7393</a>)</li>\n<li>net: support <code>pope::OpenOptions::read_write</code> on Android\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7426\">#7426</a>)</li>\n<li>net: add <code>Clone</code> implementation for\n<code>net::unix::SocketAddr</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7422\">#7422</a>)</li>\n</ul>\n<h2>Changed</h2>\n<ul>\n<li>runtime: eliminate unnecessary lfence while operating on\n<code>queue::Local&lt;T&gt;</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7340\">#7340</a>)</li>\n<li>task: disallow blocking in <code>LocalSet::{poll,drop}</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7372\">#7372</a>)</li>\n</ul>\n<h2>Unstable</h2>\n<ul>\n<li>runtime: add <code>TaskMeta::spawn_location</code> tracking where a\ntask was spawned (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7417\">#7417</a>)</li>\n<li>runtime: removed borrow from <code>LocalOptions</code> parameter to\n<code>runtime::Builder::build_local</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7346\">#7346</a>)</li>\n</ul>\n<h2>Documented</h2>\n<ul>\n<li>io: clarify behavior of seeking when <code>start_seek</code> is not\nused (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7366\">#7366</a>)</li>\n<li>io: document cancellation safety of\n<code>AsyncWriteExt::flush</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7364\">#7364</a>)</li>\n<li>net: fix docs for <code>recv_buffer_size</code> method (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7336\">#7336</a>)</li>\n<li>net: fix broken link of <code>RawFd</code> in <code>TcpSocket</code>\ndocs (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7416\">#7416</a>)</li>\n<li>net: update <code>AsRawFd</code> doc link to current Rust stdlib\nlocation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7429\">#7429</a>)</li>\n<li>readme: fix double period in reactor description (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7363\">#7363</a>)</li>\n<li>runtime: add doc note that <code>on_*_task_poll</code> is unstable\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7311\">#7311</a>)</li>\n<li>sync: update broadcast docs on allocation failure (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7352\">#7352</a>)</li>\n<li>time: add a missing panic scenario of <code>time::advance</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7394\">#7394</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7290\">#7290</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7290\">tokio-rs/tokio#7290</a>\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7307\">#7307</a>:\n<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/pull/7307\">tokio-rs/tokio#7307</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/ab3ff69cf2258a8c696b2dca89a2cef4ff114c1c\"><code>ab3ff69</code></a>\nchore: prepare to release v1.46.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7444\">#7444</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a0d5b8ab308bbeaa8090d411550d6c887d699096\"><code>a0d5b8a</code></a>\nruntime(unstable): fix task hook spawn locations for\n<code>tokio::spawn</code> (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7440\">#7440</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/a1ee3ef218894f2441b5719812ab218ae0539c8d\"><code>a1ee3ef</code></a>\nchore: fix some minor typos in the comments (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7442\">#7442</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/171cd148a37da40dcbb8b06bf2c67634b2ba1f87\"><code>171cd14</code></a>\nchangelog: fix typo in <code>pipe::OpenOptions</code> for 1.46.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7439\">#7439</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3f1f268583a16c11560f8e310d5a35e9aa55b547\"><code>3f1f268</code></a>\nchore: prepare Tokio v1.46.0 (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7437\">#7437</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/3e890cc0171ddb210acdcfec831b7c7bcbb0d2d9\"><code>3e890cc</code></a>\nrt(unstable): add spawn <code>Location</code> to <code>TaskMeta</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7417\">#7417</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/69290a64327a017fd9a0cedefaac60c4993c3b54\"><code>69290a6</code></a>\nnet: derive <code>Clone</code> for <code>net::unix::SocketAddr</code>\n(<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7422\">#7422</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/e2b175848b2cb25e99cd3a0486e506f889379db5\"><code>e2b1758</code></a>\nfuzz: cfg fuzz tests under cfg(test) (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7428\">#7428</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/b7a75b5be349aab2cee9b224c0610d7cf4fea73e\"><code>b7a75b5</code></a>\nnet: update <code>AsRawFd</code> doc link to current Rust stdlib\nlocation (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7429\">#7429</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/tokio/commit/6b705b3053d2c777e05cb60c758202ff9d4b2e7d\"><code>6b705b3</code></a>\nnet: allow <code>pipe::OpenOptions::read_write</code> on Android (<a\nhref=\"https://redirect.github.com/tokio-rs/tokio/issues/7426\">#7426</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/tokio-rs/tokio/compare/tokio-1.45.1...tokio-1.46.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tokio&package-manager=cargo&previous-version=1.45.1&new-version=1.46.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T13:16:07Z",
          "tree_id": "2e7dbbd8e74166e36e0bc1201a4dc71f2cdf0da4",
          "url": "https://github.com/hasura/ndc-postgres/commit/d0cd20db82d0a8990d1a9cd26e5736de13ebfcf3"
        },
        "date": 1754055326667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.536143,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.112096,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.596319865666791,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.498779481956499,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03346773942433043,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.998911,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.502888,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.22409434801735,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3097319383962613,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05905549961568072,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.937205,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.0532492,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.154579184752816,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.890956897563381,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04234660165430449,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.7836725,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.421990749999985,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.730477786970074,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.8319992485549115,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036471521676250805,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.587864,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.7526786,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.825951201554485,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.448376931667713,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038780482733436324,
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
          "id": "5ea4370a7ed4bb68a0136bf73447b0c92c0db5cc",
          "message": "Changelog for v3.1.0 (#819)\n\n<!-- The PR description should answer 2 (maybe 3) important questions:\n-->\n\n### What\n\nUpdate version and changelog",
          "timestamp": "2025-08-01T13:43:03Z",
          "tree_id": "e4aab10a5dfa9e3fb06fac2e5875973a80d594de",
          "url": "https://github.com/hasura/ndc-postgres/commit/5ea4370a7ed4bb68a0136bf73447b0c92c0db5cc"
        },
        "date": 1754056865534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.858121,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.14420679999996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.397756299485213,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.26890134971978,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03312196099752373,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.379751,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.35097259999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.335038336499366,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2082496811027141,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04942049923623182,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.374712,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.0883379,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.60118828885508,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.26011675313686,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03848920901079543,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.4076515,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.198013,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.938200413202228,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.086130564013001,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03388254775990548,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.086981,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 52.93776379999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.94951142662097,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 2.949417174766406,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03509315731211115,
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
          "id": "3233c41d5e3aab7602f966f9a4c5dea320065527",
          "message": "chore(deps): Bump actions/checkout from 4 to 5 (#823)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to\n5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/releases\">actions/checkout's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2238\">actions/checkout#2238</a></li>\n</ul>\n<h2>⚠️ Minimum Compatible Runner Version</h2>\n<p><strong>v2.327.1</strong><br />\n<a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Release\nNotes</a></p>\n<p>Make sure your runner is updated to this version or newer to use this\nrelease.</p>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5.0.0\">https://github.com/actions/checkout/compare/v4...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n<li>Prepare release v4.3.0 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2237\">actions/checkout#2237</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/motss\"><code>@​motss</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li><a href=\"https://github.com/mouismail\"><code>@​mouismail</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li><a href=\"https://github.com/benwells\"><code>@​benwells</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4...v4.3.0\">https://github.com/actions/checkout/compare/v4...v4.3.0</a></p>\n<h2>v4.2.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.1...v4.2.2\">https://github.com/actions/checkout/compare/v4.2.1...v4.2.2</a></p>\n<h2>v4.2.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Jcambass\"><code>@​Jcambass</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1919\">actions/checkout#1919</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/checkout/compare/v4.2.0...v4.2.1\">https://github.com/actions/checkout/compare/v4.2.0...v4.2.1</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/checkout/blob/main/CHANGELOG.md\">actions/checkout's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<h2>V5.0.0</h2>\n<ul>\n<li>Update actions checkout to use node 24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2226\">actions/checkout#2226</a></li>\n</ul>\n<h2>V4.3.0</h2>\n<ul>\n<li>docs: update README.md by <a\nhref=\"https://github.com/motss\"><code>@​motss</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1971\">actions/checkout#1971</a></li>\n<li>Add internal repos for checking out multiple repositories by <a\nhref=\"https://github.com/mouismail\"><code>@​mouismail</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1977\">actions/checkout#1977</a></li>\n<li>Documentation update - add recommended permissions to Readme by <a\nhref=\"https://github.com/benwells\"><code>@​benwells</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2043\">actions/checkout#2043</a></li>\n<li>Adjust positioning of user email note and permissions heading by <a\nhref=\"https://github.com/joshmgross\"><code>@​joshmgross</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2044\">actions/checkout#2044</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2194\">actions/checkout#2194</a></li>\n<li>Update CODEOWNERS for actions by <a\nhref=\"https://github.com/TingluoHuang\"><code>@​TingluoHuang</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2224\">actions/checkout#2224</a></li>\n<li>Update package dependencies by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/2236\">actions/checkout#2236</a></li>\n</ul>\n<h2>v4.2.2</h2>\n<ul>\n<li><code>url-helper.ts</code> now leverages well-known environment\nvariables by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1941\">actions/checkout#1941</a></li>\n<li>Expand unit test coverage for <code>isGhes</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1946\">actions/checkout#1946</a></li>\n</ul>\n<h2>v4.2.1</h2>\n<ul>\n<li>Check out other refs/* by commit if provided, fall back to ref by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1924\">actions/checkout#1924</a></li>\n</ul>\n<h2>v4.2.0</h2>\n<ul>\n<li>Add Ref and Commit outputs by <a\nhref=\"https://github.com/lucacome\"><code>@​lucacome</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1180\">actions/checkout#1180</a></li>\n<li>Dependency updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>- <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1777\">actions/checkout#1777</a>,\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1872\">actions/checkout#1872</a></li>\n</ul>\n<h2>v4.1.7</h2>\n<ul>\n<li>Bump the minor-npm-dependencies group across 1 directory with 4\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1739\">actions/checkout#1739</a></li>\n<li>Bump actions/checkout from 3 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1697\">actions/checkout#1697</a></li>\n<li>Check out other refs/* by commit by <a\nhref=\"https://github.com/orhantoy\"><code>@​orhantoy</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1774\">actions/checkout#1774</a></li>\n<li>Pin actions/checkout's own workflows to a known, good, stable\nversion. by <a href=\"https://github.com/jww3\"><code>@​jww3</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1776\">actions/checkout#1776</a></li>\n</ul>\n<h2>v4.1.6</h2>\n<ul>\n<li>Check platform to set archive extension appropriately by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1732\">actions/checkout#1732</a></li>\n</ul>\n<h2>v4.1.5</h2>\n<ul>\n<li>Update NPM dependencies by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1703\">actions/checkout#1703</a></li>\n<li>Bump github/codeql-action from 2 to 3 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1694\">actions/checkout#1694</a></li>\n<li>Bump actions/setup-node from 1 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1696\">actions/checkout#1696</a></li>\n<li>Bump actions/upload-artifact from 2 to 4 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1695\">actions/checkout#1695</a></li>\n<li>README: Suggest <code>user.email</code> to be\n<code>41898282+github-actions[bot]@users.noreply.github.com</code> by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1707\">actions/checkout#1707</a></li>\n</ul>\n<h2>v4.1.4</h2>\n<ul>\n<li>Disable <code>extensions.worktreeConfig</code> when disabling\n<code>sparse-checkout</code> by <a\nhref=\"https://github.com/jww3\"><code>@​jww3</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1692\">actions/checkout#1692</a></li>\n<li>Add dependabot config by <a\nhref=\"https://github.com/cory-miller\"><code>@​cory-miller</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/checkout/pull/1688\">actions/checkout#1688</a></li>\n<li>Bump the minor-actions-dependencies group with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1693\">actions/checkout#1693</a></li>\n<li>Bump word-wrap from 1.2.3 to 1.2.5 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/checkout/pull/1643\">actions/checkout#1643</a></li>\n</ul>\n<h2>v4.1.3</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/08c6903cd8c0fde910a37f88322edcfb5dd907a8\"><code>08c6903</code></a>\nPrepare v5.0.0 release (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2238\">#2238</a>)</li>\n<li><a\nhref=\"https://github.com/actions/checkout/commit/9f265659d3bb64ab1440b03b12f4d47a24320917\"><code>9f26565</code></a>\nUpdate actions checkout to use node 24 (<a\nhref=\"https://redirect.github.com/actions/checkout/issues/2226\">#2226</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/checkout/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/checkout&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-12T08:31:43Z",
          "tree_id": "22ead74f0791ea666fbf6eac75fc806546552cab",
          "url": "https://github.com/hasura/ndc-postgres/commit/3233c41d5e3aab7602f966f9a4c5dea320065527"
        },
        "date": 1754988187690,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.936211999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.36907759999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.505718457954218,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.290971222314317,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03404820852868717,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.088507,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.9519445,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.50609790823696,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.091687451604649,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.049402147270691366,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.619689,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.52781240000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.283870291343963,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.553462716053229,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.041628793961212524,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.687028,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.090846199999994,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.902563521437106,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.314081425057445,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03617715139869243,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.586663,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.5246314,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.43822612464679,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.3514299724717205,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03432094369618939,
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
          "id": "241d89f9e922408f917e69edc0f17bd1d1f9d315",
          "message": "chore(deps): Bump clap from 4.5.41 to 4.5.43 (#825)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.41 to 4.5.43.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.43</h2>\n<h2>[4.5.43] - 2025-08-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> In long help, list Possible Values before defaults,\nrather than after, for a more consistent look</li>\n</ul>\n<h2>v4.5.42</h2>\n<h2>[4.5.42] - 2025-07-30</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Include subcommand visible long aliases in <code>--help</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.43] - 2025-08-06</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> In long help, list Possible Values before defaults,\nrather than after, for a more consistent look</li>\n</ul>\n<h2>[4.5.42] - 2025-07-30</h2>\n<h3>Fixes</h3>\n<ul>\n<li>Include subcommand visible long aliases in <code>--help</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c4105bd90c314ac21dd9e008de8b88ab0175fdf7\"><code>c4105bd</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/a029b20be631aab1d3a963872df2158b97f61427\"><code>a029b20</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cf15d48b59cf39cafc3e3797dec293edaf9cf533\"><code>cf15d48</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5893\">#5893</a>\nfrom 8LWXpg/patch-2</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7e54542de972c4af98d3035377dcde83c5a5734e\"><code>7e54542</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5892\">#5892</a>\nfrom 8LWXpg/patch-1</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6ffc88f8c97be82e71d5d6101c98e1042708ab69\"><code>6ffc88f</code></a>\nfix(complete): Check if help string is empty</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7d8470ed9cf1d5503482938cea62f8f363579f12\"><code>7d8470e</code></a>\nfix(complete): Fix single quote escaping in PowerShell</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/eadcc8f66c128272ea309fed3d53d45b9c700b6f\"><code>eadcc8f</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/7ce0f7bea34011ca888a762bdd95d2371006c97a\"><code>7ce0f7b</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fea7c5487bb602a9b7151c40069afc6f34bda442\"><code>fea7c54</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5888\">#5888</a>\nfrom epage/tut</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c297ddd56e2601d9d1b0a0ba13a9086e8f3ac43c\"><code>c297ddd</code></a>\ndocs(tutorial): Experiment with a flat layout</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.41...clap_complete-v4.5.43\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.41&new-version=4.5.43)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-12T08:31:53Z",
          "tree_id": "686382e56c0e69cdb96768dd7eae6d7645d533cd",
          "url": "https://github.com/hasura/ndc-postgres/commit/241d89f9e922408f917e69edc0f17bd1d1f9d315"
        },
        "date": 1754988607863,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.9875705,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.98459035,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.429085404442453,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.028781983039014,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03778138157709684,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.15016349999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.81187915,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.19156731141875,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3203872664357448,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.056315414256004157,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.650682,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.398917,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.375253443412866,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.15011602006242,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04878385806801912,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.676274,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.6337104,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.783811574462117,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9350863705642496,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03918501282959318,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 37.315405999999996,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.81470775,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.69833973304189,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.27605025321035,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.04103551398411723,
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
          "id": "563fc25cb47c4c66bcbf0d767f2a63a4e12997f2",
          "message": "chore(deps): Bump actions/download-artifact from 4 to 5 (#826)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/407\">actions/download-artifact#407</a></li>\n<li>BREAKING fix: inconsistent path behavior for single artifact\ndownloads by ID by <a\nhref=\"https://github.com/GrantBirki\"><code>@​GrantBirki</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/416\">actions/download-artifact#416</a></li>\n</ul>\n<h2>v5.0.0</h2>\n<h3>🚨 Breaking Change</h3>\n<p>This release fixes an inconsistency in path behavior for single\nartifact downloads by ID. <strong>If you're downloading single artifacts\nby ID, the output path may change.</strong></p>\n<h4>What Changed</h4>\n<p>Previously, <strong>single artifact downloads</strong> behaved\ndifferently depending on how you specified the artifact:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (direct)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/my-artifact/</code> (nested)</li>\n</ul>\n<p>Now both methods are consistent:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (unchanged)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/</code> (fixed - now direct)</li>\n</ul>\n<h4>Migration Guide</h4>\n<h5>✅ No Action Needed If:</h5>\n<ul>\n<li>You download artifacts by <strong>name</strong></li>\n<li>You download <strong>multiple</strong> artifacts by ID</li>\n<li>You already use <code>merge-multiple: true</code> as a\nworkaround</li>\n</ul>\n<h5>⚠️ Action Required If:</h5>\n<p>You download <strong>single artifacts by ID</strong> and your\nworkflows expect the nested directory structure.</p>\n<p><strong>Before v5 (nested structure):</strong></p>\n<pre lang=\"yaml\"><code>- uses: actions/download-artifact@v4\n  with:\n    artifact-ids: 12345\n    path: dist\n# Files were in: dist/my-artifact/\n</code></pre>\n<blockquote>\n<p>Where <code>my-artifact</code> is the name of the artifact you\npreviously uploaded</p>\n</blockquote>\n<p><strong>To maintain old behavior (if needed):</strong></p>\n<pre lang=\"yaml\"><code>&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/634f93cb2916e3fdff6788551b99b062d0335ce0\"><code>634f93c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/416\">#416</a>\nfrom actions/single-artifact-id-download-path</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b19ff4302770b82aa4694b63703b547756dacce6\"><code>b19ff43</code></a>\nrefactor: resolve download path correctly in artifact download tests\n(mainly ...</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/e262cbee4ab8c473c61c59a81ad8e9dc760e90db\"><code>e262cbe</code></a>\nbundle dist</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bff23f9308ceb2f06d673043ea6311519be6a87b\"><code>bff23f9</code></a>\nupdate docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fff8c148a8fdd56aa81fcb019f0b5f6c65700c4d\"><code>fff8c14</code></a>\nfix download path logic when downloading a single artifact by id</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/448e3f862ab3ef47aa50ff917776823c9946035b\"><code>448e3f8</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/407\">#407</a>\nfrom actions/nebuk89-patch-1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/47225c44b359a5155efdbbbc352041b3e249fb1b\"><code>47225c4</code></a>\nUpdate README.md</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/download-artifact/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-18T19:41:11Z",
          "tree_id": "b31e3831bacea1486f46f3f513f3f61f47a696de",
          "url": "https://github.com/hasura/ndc-postgres/commit/563fc25cb47c4c66bcbf0d767f2a63a4e12997f2"
        },
        "date": 1755546801105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.37145,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.23601829999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.810377576446514,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.106016122549997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03912011681017122,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.815478,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.38691,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.51299630616037,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.204509675778091,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05285409855103839,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.351546,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.00229889999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.551352495516475,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.132550691594297,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04194738049408101,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.582959,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.16879139999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.67871627647453,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.4164692450912675,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03608382034331674,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.6228555,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.147199949999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.619050460310188,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.052916162164191,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.036468405902521754,
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
          "id": "f7255b55d5fe544888f914d427559ce2ab323d0e",
          "message": "chore(deps): Bump async-trait from 0.1.88 to 0.1.89 (#833)\n\nBumps [async-trait](https://github.com/dtolnay/async-trait) from 0.1.88\nto 0.1.89.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/async-trait/releases\">async-trait's\nreleases</a>.</em></p>\n<blockquote>\n<h2>0.1.89</h2>\n<ul>\n<li>Improve IDE functionality (<a\nhref=\"https://redirect.github.com/dtolnay/async-trait/issues/293\">#293</a>,\nthanks <a\nhref=\"https://github.com/Veykril\"><code>@​Veykril</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/a7e91e98a5d2de2ceae52d9459eed309939a98bf\"><code>a7e91e9</code></a>\nRelease 0.1.89</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/fbcfcaca022197e20a3f70b448a2615ae49d3701\"><code>fbcfcac</code></a>\nMerge pull request 293 from Veykril/lw/quote_spanned</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/fd93990620ba8d1af6089ac286120b71adc26c06\"><code>fd93990</code></a>\nImprove use of spans in <code>quote_spanned</code></li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/a5093fe762a8a38cb41aba7fd40d1051386a8fb5\"><code>a5093fe</code></a>\nAdd type-mismatch ui test</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/6d12b441162c8c688cbb39bfc87829083ccbc1a9\"><code>6d12b44</code></a>\nRevert &quot;Pin nightly toolchain used for miri job&quot;</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/dd9e4bad1b9465706366689551df978a39bf4390\"><code>dd9e4ba</code></a>\nHide unused_variables warning in consider-restricting.rs ui test</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/b454fc869a32a2410adc405ffb030be78246de8b\"><code>b454fc8</code></a>\nUpdate ui test suite to nightly-2025-08-03</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/9c880e85d885eb20426222d5462286f1dab09d5a\"><code>9c880e8</code></a>\nUpdate ui test suite to nightly-2025-07-30</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/7ca751d0b3c62dfbd39699f8d32a09f7b7a70800\"><code>7ca751d</code></a>\nIgnore unused_parens warning in test</li>\n<li><a\nhref=\"https://github.com/dtolnay/async-trait/commit/2bccfeb461b0c92964fdee816896e9f8f6f291b8\"><code>2bccfeb</code></a>\nUpdate ui test suite to nightly-2025-05-28</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/async-trait/compare/0.1.88...0.1.89\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=async-trait&package-manager=cargo&previous-version=0.1.88&new-version=0.1.89)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T08:00:24Z",
          "tree_id": "6638434fa9021fdef7c9c229c2b7ff4dbfd54732",
          "url": "https://github.com/hasura/ndc-postgres/commit/f7255b55d5fe544888f914d427559ce2ab323d0e"
        },
        "date": 1755591482185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.465208500000003,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.85691275,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.840607609559948,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.5394622205347925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03210532606233646,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.443877,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.1258025,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.71125348430561,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.107999596794265,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05201849218638287,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.5221235,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.29294175,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.014340558647472,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.928517440442338,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03735514746423927,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.938203,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.9745768,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.098105497366355,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6026531064804033,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.0349945093835772,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.600233,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.02269079999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.126482870638352,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.4384461714679233,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03751475457308192,
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
          "id": "a981c3051079f91e9a589bc5bb77289a8094247b",
          "message": "chore(deps): Bump thiserror from 2.0.12 to 2.0.15 (#830)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 2.0.12 to\n2.0.15.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.0.15</h2>\n<ul>\n<li>Prevent <code>Error::provide</code> API becoming unavailable from a\nfuture new compiler lint (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/427\">#427</a>)</li>\n</ul>\n<h2>2.0.14</h2>\n<ul>\n<li>Allow build-script cleanup failure with NFSv3 output directory to be\nnon-fatal (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/426\">#426</a>)</li>\n</ul>\n<h2>2.0.13</h2>\n<ul>\n<li>Documentation improvements</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f6145ebe84b51697e4d3253b373866f1c8ac09ad\"><code>f6145eb</code></a>\nRelease 2.0.15</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/2717177976a162d75103acfb62aa229df02bc54f\"><code>2717177</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/427\">#427</a>\nfrom dtolnay/caplints</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/2cd13e67673cee27cf25fe55c5ceb277b687272b\"><code>2cd13e6</code></a>\nMake error_generic_member_access compatible with -Dwarnings</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/eea6799e2d00bb542a98dada84f5cafe2839f38d\"><code>eea6799</code></a>\nRelease 2.0.14</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/a2aa6d7a5759c3c3669110d5dd2319b28e1ce995\"><code>a2aa6d7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/426\">#426</a>\nfrom dtolnay/enotempty</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/f00ebc57bea45ffaa138c15448c3abc3181fbcfe\"><code>f00ebc5</code></a>\nAllow build-script cleanup failure with NFSv3 output directory to be\nnon-fatal</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/61f28da3dfea22cd417c86e038dac839cfb7eeea\"><code>61f28da</code></a>\nRelease 2.0.13</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/89872e3fcb35ce437e059c52f7acfe30650e28c2\"><code>89872e3</code></a>\nUnindent crate-level markdown links</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/aee87e5a15935d4bbe07151f5f33298498ba0e25\"><code>aee87e5</code></a>\nWrap PR 425 to 80 columns</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/0f94e9924289c8a7984b575eb173639f7ccec7bc\"><code>0f94e99</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/425\">#425</a>\nfrom Kriskras99/feat/doc_links</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/2.0.12...2.0.15\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=2.0.12&new-version=2.0.15)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T08:00:37Z",
          "tree_id": "15527b3310aa63df6ecde09fce586dbd7ad378ee",
          "url": "https://github.com/hasura/ndc-postgres/commit/a981c3051079f91e9a589bc5bb77289a8094247b"
        },
        "date": 1755591518873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.210182,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.609460000000006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.452444191792985,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.416452747945819,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03530312696973116,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.81738899999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.95391719999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.22336447370175,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0897044242831129,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04911283511371687,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.558957,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.13283625,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.91317536070608,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.961760903814504,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039976318934801934,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.381946,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.11581004999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.486826447191273,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.7599911944830957,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.038694331708333335,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.066922500000004,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 53.900180649999996,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.809190697108022,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.213109071004599,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.0340630474969455,
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
          "id": "21dfe898937c0477ad02c5ee72fcff4a3945532d",
          "message": "chore(deps): Bump serde_json from 1.0.142 to 1.0.143 (#836)\n\nBumps [serde_json](https://github.com/serde-rs/json) from 1.0.142 to\n1.0.143.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/serde-rs/json/releases\">serde_json's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v1.0.143</h2>\n<ul>\n<li>Implement Clone and Debug for serde_json::Map iterators (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1264\">#1264</a>,\nthanks <a\nhref=\"https://github.com/xlambein\"><code>@​xlambein</code></a>)</li>\n<li>Implement Default for CompactFormatter (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1268\">#1268</a>,\nthanks <a href=\"https://github.com/SOF3\"><code>@​SOF3</code></a>)</li>\n<li>Implement FromStr for serde_json::Map (<a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1271\">#1271</a>,\nthanks <a\nhref=\"https://github.com/mickvangelderen\"><code>@​mickvangelderen</code></a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/10102c49bfd95e5b8d42a6c0b9530b1732a6fea8\"><code>10102c4</code></a>\nRelease 1.0.143</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/2a5b85312c2eb0eec19f922993e1a6931535b5e3\"><code>2a5b853</code></a>\nReplace super::super with absolute path within crate</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/447170bd38099bc9636de4ff73c00e9d816a75f4\"><code>447170b</code></a>\nMerge pull request 1271 from\nmickvangelderen/mick/impl-from-str-for-map</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ec190d6dfd4ecc5b31db76a7f1c26c54e99eee9f\"><code>ec190d6</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1264\">#1264</a>\nfrom xlambein/master</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/8be664752fe8b8fc92b239155979fad39719c2fd\"><code>8be6647</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/serde-rs/json/issues/1268\">#1268</a>\nfrom SOF3/compact-default</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/ba5b3cccea799018d236c1af24a34ae53b6c84cc\"><code>ba5b3cc</code></a>\nRevert &quot;Pin nightly toolchain used for miri job&quot;</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/fd35a02901648230ac04657a12b85f5c90fb9106\"><code>fd35a02</code></a>\nImplement FromStr for Map&lt;String, Value&gt;</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/bea0fe6b3e1d06dcd46a38be42f775f22f6c2b8e\"><code>bea0fe6</code></a>\nImplement Default for CompactFormatter</li>\n<li><a\nhref=\"https://github.com/serde-rs/json/commit/0c0e9f6bfad856db30f389496d64ac2577d8c13b\"><code>0c0e9f6</code></a>\nAdd Clone and Debug impls to map iterators</li>\n<li>See full diff in <a\nhref=\"https://github.com/serde-rs/json/compare/v1.0.142...v1.0.143\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=serde_json&package-manager=cargo&previous-version=1.0.142&new-version=1.0.143)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-26T07:22:39Z",
          "tree_id": "92ae9d4b56ded8288d5176f618dec0bf5dc1bdf7",
          "url": "https://github.com/hasura/ndc-postgres/commit/21dfe898937c0477ad02c5ee72fcff4a3945532d"
        },
        "date": 1756193643193,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.2208465,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.3534875,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.075825765895692,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.928343454643114,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03542758646859903,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.66276350000001,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.22691069999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.97309986384281,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.378380028512531,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.053469992148696285,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.991399,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.22555139999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.816763620422734,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.139674684627515,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.041453481468303445,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.808788,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.0824744,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.139551543015326,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.206202943723998,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036974926938239276,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.868718,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.97917254999997,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.89319168438144,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.649753339850257,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035835897297455274,
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
          "id": "229ed620aab2a57db95063bd8d72868f52f02417",
          "message": "chore(deps): Bump indexmap from 2.10.0 to 2.11.0 (#839)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.10.0 to\n2.11.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.11.0 (2025-08-22)</h2>\n<ul>\n<li>Added <code>insert_sorted_by</code> and\n<code>insert_sorted_by_key</code> methods to <code>IndexMap</code>,\n<code>IndexSet</code>, and <code>VacantEntry</code>, like customizable\nversions of <code>insert_sorted</code>.</li>\n<li>Added <code>is_sorted</code>, <code>is_sorted_by</code>, and\n<code>is_sorted_by_key</code> methods to\n<code>IndexMap</code> and <code>IndexSet</code>, as well as their\n<code>Slice</code> counterparts.</li>\n<li>Added <code>sort_by_key</code> and <code>sort_unstable_by_key</code>\nmethods to <code>IndexMap</code> and\n<code>IndexSet</code>, as well as parallel counterparts.</li>\n<li>Added <code>replace_index</code> methods to <code>IndexMap</code>,\n<code>IndexSet</code>, and <code>VacantEntry</code>\nto replace the key (or set value) at a given index.</li>\n<li>Added optional <code>sval</code> serialization support.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/91d53adb3239cd4e12b671db7656c99b10fedc53\"><code>91d53ad</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/409\">#409</a>\nfrom cuviper/release-2.11.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/cf566a7060526aada9d7680a7cc3b9cf004a055a\"><code>cf566a7</code></a>\nRelease 2.11.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/2e173dcf755b55982ca8fb568cb823b72629ce73\"><code>2e173dc</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/408\">#408</a>\nfrom cuviper/is_sorted</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/e4bb7d03b92ad7768fb26b5f062fefda6af0dc72\"><code>e4bb7d0</code></a>\nAdd <code>is_sorted</code>{,<code>_by</code>,<code>_by_key</code>}</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0f40489b1a6f6a4781ec45f6b30f6e8327b1b04c\"><code>0f40489</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/407\">#407</a>\nfrom cuviper/sort_by_key</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/ab9e461b895184bd4926a8d4555f05d1a6c50666\"><code>ab9e461</code></a>\nAdd <code>sort_by_key</code> and <code>sort_unstable_by_key</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/a468ca41bbbc04afd293e00ad57d7a8ed60cb89e\"><code>a468ca4</code></a>\nNormalize to ASCII apostrophes</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/7939ae9c21b12aa5386cb9d3ecb4f7bb598341a6\"><code>7939ae9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/406\">#406</a>\nfrom cuviper/more-insert_sorted_by</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/354345b5a250be9d565e3b60f311a435141e6412\"><code>354345b</code></a>\nTake <em>two</em> entries in <code>insert_sorted_by</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/314ec7dbda48cfd7135e3aef894e7db627d6be21\"><code>314ec7d</code></a>\nAdd quick checks for <code>insert_sorted_by</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.10.0...2.11.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.10.0&new-version=2.11.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-26T07:23:12Z",
          "tree_id": "fdc07bf1dc8194df7bd6662208f50d77fc0b65f6",
          "url": "https://github.com/hasura/ndc-postgres/commit/229ed620aab2a57db95063bd8d72868f52f02417"
        },
        "date": 1756194066617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.6546315,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.39693910000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.54465517604752,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.859202655311002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.034077914616397344,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.961148,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.41673219999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.95226186552557,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0992615320095496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05416776644963711,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.179843500000004,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 73.56154350000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.331729548473763,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.345302010144604,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039450418974845185,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.351917,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.1916125,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.106194889372716,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.774973810104381,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.037428459138407505,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.807711,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.390286499999995,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.196352967513718,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.565312206291502,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03664839238420648,
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
          "id": "15e4ba281c5be07d680fa060aef8e3eeeee336e8",
          "message": "Auto update rust toolchain (#840)\n\nAs a treat:\nhttps://github.blog/changelog/2025-08-19-dependabot-now-supports-rust-toolchain-updates/",
          "timestamp": "2025-08-26T09:43:21Z",
          "tree_id": "3f0851681add9eabf2b92ffb037a13d96b0fe8f0",
          "url": "https://github.com/hasura/ndc-postgres/commit/15e4ba281c5be07d680fa060aef8e3eeeee336e8"
        },
        "date": 1756202086125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.0840635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.1810594,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.181664983009462,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.640770459808955,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03409139413169837,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.095174,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.8211889,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.06343078535187,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.0820018646016507,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05068504279613099,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.06728,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.48867809999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.482711494565986,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.581316801948457,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03616566797983113,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.066534,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 57.833078799999996,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.603659308431123,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.298834375138963,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03317572199482108,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.771406,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.1983585,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.988783837085563,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.108426172340966,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03649103996142841,
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
          "id": "40be62682ab7a93b8db5889f0f7122a3e3e4359f",
          "message": "chore(deps): Bump mimalloc from 0.1.47 to 0.1.48 (#842)\n\nBumps [mimalloc](https://github.com/purpleprotocol/mimalloc_rust) from\n0.1.47 to 0.1.48.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/releases\">mimalloc's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Version 0.1.48</h2>\n<h3>Changes</h3>\n<ul>\n<li>Mimalloc <code>v3</code> feature flag. (credits <a\nhref=\"https://github.com/gschulze\"><code>@​gschulze</code></a>).</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/a5a76fd2c5a3a7c7b24d4765d53c71e41b32df74\"><code>a5a76fd</code></a>\nv0.1.48</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/31607bf2c50d7b845bbd4dc18281fffbbc4ee6d8\"><code>31607bf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/purpleprotocol/mimalloc_rust/issues/144\">#144</a>\nfrom gschulze/feature/3.x</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/aaa0114619926ce59471edaa80bf94b0d881b41e\"><code>aaa0114</code></a>\nAllow unused macros in generated test code</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/54d6262e0ec1fa10c65ee502904ce62557c74461\"><code>54d6262</code></a>\nAllow unused imports in generated test code</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/1f527f13bb560d8e08d526f0e5ddbc6bece83b80\"><code>1f527f1</code></a>\nProper feature flag propagation in binding tests</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/edee487dfadb23b31b4f6b82a89a61f4383c08d0\"><code>edee487</code></a>\nFix clippy lints</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/29c44c222412fa9d7ba66f9d6bbe03dc6cb9dcae\"><code>29c44c2</code></a>\nAdd workflows for v3</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/af52306816930ba3b5dae99538c026931e07043c\"><code>af52306</code></a>\nAdd support for testing v3 in CI</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/d84e46ef770dd97acb468d8ea9833377c39d207c\"><code>d84e46e</code></a>\nFix excludes in Cargo manifest</li>\n<li><a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/commit/747b5b151432ffb671e99856874e2a7e34414fb3\"><code>747b5b1</code></a>\nIntroduce feature flag to switch between mimalloc major versions</li>\n<li>See full diff in <a\nhref=\"https://github.com/purpleprotocol/mimalloc_rust/compare/v0.1.47...v0.1.48\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=mimalloc&package-manager=cargo&previous-version=0.1.47&new-version=0.1.48)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-27T14:38:21Z",
          "tree_id": "09a745b5309ebe1d4dfc466b5db4ee415425dcb1",
          "url": "https://github.com/hasura/ndc-postgres/commit/40be62682ab7a93b8db5889f0f7122a3e3e4359f"
        },
        "date": 1756306185008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.292563,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.5416028,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.517499788542118,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.604819212956357,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03355522737812961,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.5771335,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.0916201,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.583873534268974,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1843599039392387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.049793056664411764,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.593016,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 68.8976094,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.33935005752083,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.619051374294354,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.037296632211698044,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.4269265,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 55.77546509999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.521128940682644,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.4129405315565116,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03459584858095207,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.648983,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.67871379999994,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.52017845975886,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.914015180756266,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035014204604347086,
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
          "id": "2b03dd8d08bfa46f99bf08c8394c16a29ba767ed",
          "message": "chore(deps): Bump tempfile from 3.20.0 to 3.21.0 (#835)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.20.0 to\n3.21.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.21.0</h2>\n<ul>\n<li>Updated <code>windows-sys</code> requirement to allow version\n0.60.x</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/Stebalien/tempfile/commits\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.20.0&new-version=3.21.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-27T14:58:10Z",
          "tree_id": "cd82dcba4ed4fd0983afc99a9a589c867912be27",
          "url": "https://github.com/hasura/ndc-postgres/commit/2b03dd8d08bfa46f99bf08c8394c16a29ba767ed"
        },
        "date": 1756307376436,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.1019105,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.842169649999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.981481797695833,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.794506526121813,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.036483539025092895,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.0205455,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.53241789999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.92626712512229,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2205993210744452,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05292288981148988,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.665398499999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.39020425000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.57736810588595,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.4475295782379725,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04397298254311489,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.266653,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.296862399999995,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.132015459357763,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.831543074989167,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03383902510194402,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.814732,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.1995921,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.131155941918,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.7949841576353087,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.036831828655153324,
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
          "id": "cc289f340add3900a425f0ee8fe88899d0015a3f",
          "message": "chore(deps): Bump percent-encoding from 2.3.1 to 2.3.2 (#837)\n\nBumps [percent-encoding](https://github.com/servo/rust-url) from 2.3.1\nto 2.3.2.\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/servo/rust-url/commits\">compare view</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=percent-encoding&package-manager=cargo&previous-version=2.3.1&new-version=2.3.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-27T14:58:41Z",
          "tree_id": "c62c9217316a64d48a331036b92530f709b305d1",
          "url": "https://github.com/hasura/ndc-postgres/commit/cc289f340add3900a425f0ee8fe88899d0015a3f"
        },
        "date": 1756307780685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.1722805,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.192288449999964,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.460630874767704,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.592936716589156,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.0314127158921724,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.871002,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.9720508,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.56577616330765,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1777748227894378,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04792003824890441,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.295036,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.08253499999994,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 25.719764146383273,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.974496470899862,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.040905252746275794,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.126213500000006,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.7191306,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.026427139388616,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9218620045966617,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03696525669815589,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.83816,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.0630892,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.889362223718106,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8210395770251253,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.037007166755023135,
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
          "id": "7a2288cfdb3c9dd8e927610929d9005d865372d5",
          "message": "chore(deps): Bump rust-toolchain from 1.88.0 to 1.89.0 (#841)\n\nBumps [rust-toolchain](https://github.com/rust-lang/rust) from 1.88.0 to\n1.89.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/rust/releases\">rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Rust 1.89.0</h2>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Language</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141610\">Stabilize\nexplicitly inferred const arguments\n(<code>feature(generic_arg_infer)</code>)</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/138677\">Add\na warn-by-default <code>mismatched_lifetime_syntaxes</code> lint.</a>\nThis lint detects when the same lifetime is referred to by different\nsyntax categories between function arguments and return values, which\ncan be confusing to read, especially in unsafe code. This lint\nsupersedes the warn-by-default <code>elided_named_lifetimes</code>\nlint.</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/134536\">Expand\n<code>unpredictable_function_pointer_comparisons</code> to also lint on\nfunction pointer comparisons in external macros</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141661\">Make the\n<code>dangerous_implicit_autorefs</code> lint deny-by-default</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138940\">Stabilize\nthe avx512 target features</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140766\">Stabilize\n<code>kl</code> and <code>widekl</code> target features for x86</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140767\">Stabilize\n<code>sha512</code>, <code>sm3</code> and <code>sm4</code> target\nfeatures for x86</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/135015\">Stabilize\nLoongArch target features <code>f</code>, <code>d</code>,\n<code>frecipe</code>, <code>lasx</code>, <code>lbt</code>,\n<code>lsx</code>, and <code>lvz</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/137306\">Remove\n<code>i128</code> and <code>u128</code> from\n<code>improper_ctypes_definitions</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138285\">Stabilize\n<code>repr128</code> (<code>#[repr(u128)]</code>,\n<code>#[repr(i128)]</code>)</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140560\">Allow\n<code>#![doc(test(attr(..)))]</code> everywhere</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140593\">Extend\ntemporary lifetime extension to also go through tuple struct and tuple\nvariant constructors</a></li>\n<li><a\nhref=\"https://blog.rust-lang.org/2025/04/04/c-abi-changes-for-wasm32-unknown-unknown/\"><code>extern\n&quot;C&quot;</code> functions on the\n<code>wasm32-unknown-unknown</code> target now have a standards\ncompliant ABI</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Compiler</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140832\">Default to\nnon-leaf frame pointers on aarch64-linux</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140862\">Enable\nnon-leaf frame pointers for Arm64EC Windows</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/141797\">Set\nApple frame pointers by architecture</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Platform Support</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/142053\">Add\nnew Tier-3 targets <code>loongarch32-unknown-none</code> and\n<code>loongarch32-unknown-none-softfloat</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rfcs/pull/3841\"><code>x86_64-apple-darwin</code>\nis in the process of being demoted to Tier 2 with host tools</a></li>\n</ul>\n<p>Refer to Rust's <a\nhref=\"https://doc.rust-lang.org/rustc/platform-support.html\">platform\nsupport page</a> for more information on Rust's tiered platform\nsupport.</p>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Libraries</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/134442\">Specify\nthe base path for <code>file!</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140748\">Allow\nstoring <code>format_args!()</code> in a variable</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/140957\">Add\n<code>#[must_use]</code> to <code>[T; N]::map</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/129334\">Implement\n<code>DerefMut</code> for <code>Lazy{Cell,Lock}</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141574\">Implement\n<code>Default</code> for <code>array::IntoIter</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138016\">Implement\n<code>Clone</code> for <code>slice::ChunkBy</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138023\">Implement\n<code>io::Seek</code> for <code>io::Take</code></a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/rust/blob/master/RELEASES.md\">rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Version 1.89.0 (2025-08-07)</h1>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Language</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141610\">Stabilize\nexplicitly inferred const arguments\n(<code>feature(generic_arg_infer)</code>)</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/138677\">Add\na warn-by-default <code>mismatched_lifetime_syntaxes</code> lint.</a>\nThis lint detects when the same lifetime is referred to by different\nsyntax categories between function arguments and return values, which\ncan be confusing to read, especially in unsafe code.\nThis lint supersedes the warn-by-default\n<code>elided_named_lifetimes</code> lint.</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/134536\">Expand\n<code>unpredictable_function_pointer_comparisons</code> to also lint on\nfunction pointer comparisons in external macros</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141661\">Make the\n<code>dangerous_implicit_autorefs</code> lint deny-by-default</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138940\">Stabilize\nthe avx512 target features</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140766\">Stabilize\n<code>kl</code> and <code>widekl</code> target features for x86</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140767\">Stabilize\n<code>sha512</code>, <code>sm3</code> and <code>sm4</code> target\nfeatures for x86</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/135015\">Stabilize\nLoongArch target features <code>f</code>, <code>d</code>,\n<code>frecipe</code>, <code>lasx</code>, <code>lbt</code>,\n<code>lsx</code>, and <code>lvz</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/137306\">Remove\n<code>i128</code> and <code>u128</code> from\n<code>improper_ctypes_definitions</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138285\">Stabilize\n<code>repr128</code> (<code>#[repr(u128)]</code>,\n<code>#[repr(i128)]</code>)</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140560\">Allow\n<code>#![doc(test(attr(..)))]</code> everywhere</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140593\">Extend\ntemporary lifetime extension to also go through tuple struct and tuple\nvariant constructors</a></li>\n<li><a\nhref=\"https://blog.rust-lang.org/2025/04/04/c-abi-changes-for-wasm32-unknown-unknown/\"><code>extern\n&quot;C&quot;</code> functions on the\n<code>wasm32-unknown-unknown</code> target now have a standards\ncompliant ABI</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Compiler</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140832\">Default to\nnon-leaf frame pointers on aarch64-linux</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140862\">Enable\nnon-leaf frame pointers for Arm64EC Windows</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/141797\">Set\nApple frame pointers by architecture</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Platform Support</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/142053\">Add\nnew Tier-3 targets <code>loongarch32-unknown-none</code> and\n<code>loongarch32-unknown-none-softfloat</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rfcs/pull/3841\"><code>x86_64-apple-darwin</code>\nis in the process of being demoted to Tier 2 with host tools</a></li>\n</ul>\n<p>Refer to Rust's <a\nhref=\"https://doc.rust-lang.org/rustc/platform-support.html\">platform\nsupport page</a>\nfor more information on Rust's tiered platform support.</p>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Libraries</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/134442\">Specify\nthe base path for <code>file!</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140748\">Allow\nstoring <code>format_args!()</code> in a variable</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/29483883eed69d5fb4db01964cdf2af4d86e9cb2\"><code>2948388</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/144895\">#144895</a>\n- BoxyUwU:stable, r=BoxyUwU</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/3d58b04b2dfc6833cc90988ca4d925fcfa69964f\"><code>3d58b04</code></a>\nbump channel</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/623eeaa0560e013b2d9beaef7220c8f412472049\"><code>623eeaa</code></a>\nrelease notes</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/4a18378b4d4f4554cb9ca940b9b145d73aea4b85\"><code>4a18378</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/144800\">#144800</a>\n- Mark-Simulacrum:beta-next, r=Mark-Simulacrum</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/3158607eb9f3ad168e2c4ee1073b7aaa0b79f7dd\"><code>3158607</code></a>\nRevert &quot;<code>return_and_then</code>: only lint returning\nexpressions (<a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/14783\">#14783</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/c1d016f6cd47968d6a86e576e0c4a67412a4aaf9\"><code>c1d016f</code></a>\nRevert &quot;Extend <code>manual_is_variant_and lint</code> to check for\nboolean map comparis...</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/4c75f2749748453f06bdf65d547363c36fe5fd9e\"><code>4c75f27</code></a>\nConsider deref'ed argument as non-temporary (<a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/15172\">#15172</a>)</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/db83b3bf6b57ebc029a6e76a7ace3a9f2ae0551f\"><code>db83b3b</code></a>\nMove <code>uninlined_format_args</code> to <code>pedantic</code> (<a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/15287\">#15287</a>)</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/7843c042c9db51f36b7447ba9e573e62aa01a0df\"><code>7843c04</code></a>\nrustdoc: don't treat methods under const impls or traits as const</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/7ab3ec175f4adcdc2a4a4316a6d8603cf2e0b670\"><code>7ab3ec1</code></a>\nthread name in stack overflow message</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-lang/rust/compare/1.88.0...1.89.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rust-toolchain&package-manager=rust_toolchain&previous-version=1.88.0&new-version=1.89.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-08-27T15:14:28Z",
          "tree_id": "8de1d320226ff82b531121ed4796cdbfc029cb03",
          "url": "https://github.com/hasura/ndc-postgres/commit/7a2288cfdb3c9dd8e927610929d9005d865372d5"
        },
        "date": 1756308767024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.457544,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 41.16426925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.112948494518234,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.129950927597042,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03721339016772944,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.979124,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.42240979999997,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.43204398084565,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3799026006289523,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.06405296008413142,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.5280875,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.72121225,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.668602591295233,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.432860782837189,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.044268677338422546,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.088106,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.72352599999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.454229669449823,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.132310506683233,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03742080524222213,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.060587,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 59.989362849999964,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.521500234289604,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.728082233559071,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03822492792870856,
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
          "id": "e4175da03fc229d27cbb68942f0a87828c7eb663",
          "message": "Add default representation for `citext` (#843)",
          "timestamp": "2025-08-28T14:22:22Z",
          "tree_id": "0bfa0f0231c6f8ff64b77527237254f71bbb28e9",
          "url": "https://github.com/hasura/ndc-postgres/commit/e4175da03fc229d27cbb68942f0a87828c7eb663"
        },
        "date": 1756391349457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.217064999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.34693194999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.30228722007221,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.743323373513581,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03556295215927447,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.704246,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.68373809999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.6479292217357,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2203591441385342,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.058578019329624524,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.180062,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 77.39309319999997,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.45532983652033,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.918842010597739,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.044881699903385704,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.88656,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.0921602,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.22274112027241,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.408085848390698,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03745866745891972,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.422799,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 59.528876000000004,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.768351027203444,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.716816793679129,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03698086436923677,
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
          "id": "32aeed672df390d08920fbb722bb03e938b53b6e",
          "message": "chore(deps): Bump thiserror from 2.0.15 to 2.0.16 (#838)\n\nBumps [thiserror](https://github.com/dtolnay/thiserror) from 2.0.15 to\n2.0.16.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/dtolnay/thiserror/releases\">thiserror's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.0.16</h2>\n<ul>\n<li>Add to &quot;no-std&quot; crates.io category (<a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/429\">#429</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/40b58536cc4570d7e94575d1c90ebb07edf9aba0\"><code>40b5853</code></a>\nRelease 2.0.16</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/83dfb5f99ba0ac9dc0ad800cc7adc64c28a2a918\"><code>83dfb5f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/dtolnay/thiserror/issues/429\">#429</a>\nfrom dtolnay/nostd</li>\n<li><a\nhref=\"https://github.com/dtolnay/thiserror/commit/9b4a99fb90bdb8feb2d3d4212a6aa3427418ea2b\"><code>9b4a99f</code></a>\nAdd to &quot;no-std&quot; crates.io category</li>\n<li>See full diff in <a\nhref=\"https://github.com/dtolnay/thiserror/compare/2.0.15...2.0.16\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=thiserror&package-manager=cargo&previous-version=2.0.15&new-version=2.0.16)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-29T11:48:45Z",
          "tree_id": "829e617e53521c7fd3f8ce7fa6aeec454047bd04",
          "url": "https://github.com/hasura/ndc-postgres/commit/32aeed672df390d08920fbb722bb03e938b53b6e"
        },
        "date": 1756468898481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.117074000000002,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.067345249999995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.479134399388666,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.548384946440947,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03302608641694716,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.325532,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.40718279999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.926195120375,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2155126252608142,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.04925469919818023,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.4340525,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 70.951222,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.18848145885271,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.488785954476835,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.041575953637299566,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.074193,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.974161,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.502123154841485,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.498679433801328,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03400172069280462,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.767804,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.3629513,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.874367425459017,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.000874716570191,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.032456495734785255,
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
          "id": "9763497fb696958bbb49dd3dd4f9881f198e0103",
          "message": "chore(deps): Bump google-github-actions/auth from 2 to 3 (#844)\n\nBumps\n[google-github-actions/auth](https://github.com/google-github-actions/auth)\nfrom 2 to 3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/google-github-actions/auth/releases\">google-github-actions/auth's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v3.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Bump to Node 24 and remove old parameters by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/508\">google-github-actions/auth#508</a></li>\n<li>Remove hacky script by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/509\">google-github-actions/auth#509</a></li>\n<li>Release: v3.0.0 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/510\">google-github-actions/auth#510</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2...v3.0.0\">https://github.com/google-github-actions/auth/compare/v2...v3.0.0</a></p>\n<h2>v2.1.13</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update deps by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/506\">google-github-actions/auth#506</a></li>\n<li>Release: v2.1.13 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/507\">google-github-actions/auth#507</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2.1.12...v2.1.13\">https://github.com/google-github-actions/auth/compare/v2.1.12...v2.1.13</a></p>\n<h2>v2.1.12</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add retries for getIDToken by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/502\">google-github-actions/auth#502</a></li>\n<li>Release: v2.1.12 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/503\">google-github-actions/auth#503</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2.1.11...v2.1.12\">https://github.com/google-github-actions/auth/compare/v2.1.11...v2.1.12</a></p>\n<h2>v2.1.11</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update troubleshooting docs for Python by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/488\">google-github-actions/auth#488</a></li>\n<li>Add linters by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/499\">google-github-actions/auth#499</a></li>\n<li>Update deps by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/500\">google-github-actions/auth#500</a></li>\n<li>Release: v2.1.11 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/501\">google-github-actions/auth#501</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2.1.10...v2.1.11\">https://github.com/google-github-actions/auth/compare/v2.1.10...v2.1.11</a></p>\n<h2>v2.1.10</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Declare workflow permissions by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/482\">google-github-actions/auth#482</a></li>\n<li>Document that the OIDC token expires in 5min by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/483\">google-github-actions/auth#483</a></li>\n<li>Release: v2.1.10 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/484\">google-github-actions/auth#484</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2.1.9...v2.1.10\">https://github.com/google-github-actions/auth/compare/v2.1.9...v2.1.10</a></p>\n<h2>v2.1.9</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Use our custom boolean parsing by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/478\">google-github-actions/auth#478</a></li>\n<li>Update deps by <a\nhref=\"https://github.com/sethvargo\"><code>@​sethvargo</code></a> in <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/479\">google-github-actions/auth#479</a></li>\n<li>Release: v2.1.9 by <a\nhref=\"https://github.com/google-github-actions-bot\"><code>@​google-github-actions-bot</code></a>\nin <a\nhref=\"https://redirect.github.com/google-github-actions/auth/pull/480\">google-github-actions/auth#480</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/google-github-actions/auth/commit/7c6bc770dae815cd3e89ee6cdf493a5fab2cc093\"><code>7c6bc77</code></a>\nRelease: v3.0.0 (<a\nhref=\"https://redirect.github.com/google-github-actions/auth/issues/510\">#510</a>)</li>\n<li><a\nhref=\"https://github.com/google-github-actions/auth/commit/42e4997ee345eebb9d114030d0f9e9b47829ee80\"><code>42e4997</code></a>\nRemove hacky script (<a\nhref=\"https://redirect.github.com/google-github-actions/auth/issues/509\">#509</a>)</li>\n<li><a\nhref=\"https://github.com/google-github-actions/auth/commit/5ea4dc11472eebb0a541812f1063c7d318adf57e\"><code>5ea4dc1</code></a>\nBump to Node 24 and remove old parameters (<a\nhref=\"https://redirect.github.com/google-github-actions/auth/issues/508\">#508</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/google-github-actions/auth/compare/v2...v3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=google-github-actions/auth&package-manager=github_actions&previous-version=2&new-version=3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-02T07:31:39Z",
          "tree_id": "182ab1f6da485219cc233d83dcaf78ccfaa7047b",
          "url": "https://github.com/hasura/ndc-postgres/commit/9763497fb696958bbb49dd3dd4f9881f198e0103"
        },
        "date": 1756798699156,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.408876,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.60065,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.564666788926761,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.455307318162635,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03325940762187979,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.139972,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 92.75493554999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.938876095819225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1865323307419544,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05350526326678773,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.901886,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.86008120000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.86823796042043,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.076875982491693,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.041252090672350875,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.554082,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.1675792,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.896765047369747,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.685980947748803,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.0342527239818284,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.325557,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 55.7837287,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.669866103479148,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.6304562777010254,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03643189906214133,
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
          "id": "4c4570f84130080fe4c6725c1d6c3d114b87d50b",
          "message": "chore(deps): Bump clap from 4.5.45 to 4.5.46 (#845)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.45 to 4.5.46.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.46</h2>\n<h2>[4.5.46] - 2025-08-26</h2>\n<h3>Features</h3>\n<ul>\n<li>Expose <code>StyledStr::push_str</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.46] - 2025-08-26</h2>\n<h3>Features</h3>\n<ul>\n<li>Expose <code>StyledStr::push_str</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/acf9abbc1b564cac24ed45b1b5906c90d688f4f0\"><code>acf9abb</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/9186a1872c64cc912e553adbcc5f693206e4f013\"><code>9186a18</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/233c316d1145be12c95eb05306575d42a44e154c\"><code>233c316</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5926\">#5926</a>\nfrom sorairolake/feature/value-parser-factory-for-sa...</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/13931a25e704fadcaa33cda45e12f6544a023588\"><code>13931a2</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5923\">#5923</a>\nfrom Reverier-Xu/master</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/536e29fb85919f23e8551135ae448fd92326159f\"><code>536e29f</code></a>\nfeat(builder): Add <code>ValueParserFactory</code> for\n<code>Saturating\\&lt;T&gt;</code></li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/45ed71c0f235feb65d23568775e16b1f34c9f8d4\"><code>45ed71c</code></a>\nchore: Avoid using gen for rust 2024 preserved keyword</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5029bb3d11809403cb9c1b37f970a8625aee56cd\"><code>5029bb3</code></a>\nchore: Avoid using <code>gen</code> for rust 2024 preserved keyword</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/8a1d59bbb068b82fe9ae55ff613a3a6927d3b964\"><code>8a1d59b</code></a>\nchore(deps): Update Rust Stable to v1.85 (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5921\">#5921</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/9caee534e05a16b223d4d4d7f94e5c1717c0b6dc\"><code>9caee53</code></a>\ndocs(changelog): Clarify 5.0.0</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/cb2352f84a7663f32a89e70f01ad24446d5fa1e2\"><code>cb2352f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5918\">#5918</a>\nfrom epage/test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.45...clap_complete-v4.5.46\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.45&new-version=4.5.46)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-02T07:31:52Z",
          "tree_id": "e48d5e19f2f2464edea2538147663a42c4307201",
          "url": "https://github.com/hasura/ndc-postgres/commit/4c4570f84130080fe4c6725c1d6c3d114b87d50b"
        },
        "date": 1756798719907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.0821995,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.93876174999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.948092481788978,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.73575431767342,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03597239586880854,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.305682,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.86648124999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.68734420832191,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2620913311408444,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05729959734152243,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.398886,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 74.974635,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.243535687299172,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.490610920320364,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04199224166344871,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.002767,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 61.5324445,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.33442602634224,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.278226187143577,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03593877314074744,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.202156,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.88061154999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.020449614019697,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.062745057986991,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03617626992923578,
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
          "id": "279a4fc5a7f6a3befe392c2c9908b59892575739",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.3.0 to 2.4.0 (#857)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.3.0 to 2.4.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.4.0</h2>\n<h2>Release Summary</h2>\n<p><code>docker-compose</code> was bumped to 1.3.0.\nDocumentation was refined, including an improved\n<code>compose-flags</code> example (docs).</p>\n<p>Internal: CI was updated to use <code>ci-dokumentor</code>,\ndependencies were refreshed (GitHub Actions, dev tooling),\n<code>super-linter</code> moved to slim-v8</p>\n<h2>Breaking change(s)</h2>\n<p>No breaking changes in this release.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>chore(deps): bump super-linter/super-linter from slim-v7 to slim-v8\nin the docker-dependencies group across 1 directory by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/165\">hoverkraft-tech/compose-action#165</a></li>\n<li>chore(deps): bump the github-actions-dependencies group across 1\ndirectory with 4 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/166\">hoverkraft-tech/compose-action#166</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/167\">hoverkraft-tech/compose-action#167</a></li>\n<li>chore(deps-dev): bump <code>@​ts-dev-tools/core</code> from 1.6.2 to\n1.9.5 in the npm-dev-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/168\">hoverkraft-tech/compose-action#168</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.14.0 to\n0.14.1 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/169\">hoverkraft-tech/compose-action#169</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/170\">hoverkraft-tech/compose-action#170</a></li>\n<li>ci: use ci-dokumentor by <a\nhref=\"https://github.com/neilime\"><code>@​neilime</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/177\">hoverkraft-tech/compose-action#177</a></li>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/178\">hoverkraft-tech/compose-action#178</a></li>\n<li>chore(deps): bump the github-actions-dependencies group across 1\ndirectory with 3 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/180\">hoverkraft-tech/compose-action#180</a></li>\n<li>chore(deps-dev): bump the npm-dev-dependencies group across 1\ndirectory with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/174\">hoverkraft-tech/compose-action#174</a></li>\n<li>chore(deps): bump docker-compose from 1.2.0 to 1.3.0 by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/172\">hoverkraft-tech/compose-action#172</a></li>\n<li>docs: improve <code>compose-flags</code> example by <a\nhref=\"https://github.com/Copilot\"><code>@​Copilot</code></a> in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/176\">hoverkraft-tech/compose-action#176</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-dokumentor from 0.1.1 to 0.1.2\nin the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/181\">hoverkraft-tech/compose-action#181</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Copilot\"><code>@​Copilot</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/176\">hoverkraft-tech/compose-action#176</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.4.0\">https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.4.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/b716db5b717cb9b81e391fe638e5aceaa2299e43\"><code>b716db5</code></a>\nchore(deps): bump hoverkraft-tech/ci-dokumentor</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/88b85ef80ef7cb8ebae316c888defafaa9346828\"><code>88b85ef</code></a>\ndocs: improve compose-flags example</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ab0fa7d95dbf79d44ff58e52fe44772395b9ecb0\"><code>ab0fa7d</code></a>\nchore(deps): bump docker-compose from 1.2.0 to 1.3.0</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/82f56cc549597f0a52e9401347287f7a6b039ee9\"><code>82f56cc</code></a>\nchore(deps): bump docker-compose from 1.2.0 to 1.3.0</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/650d8e8740958fede5bf8fa4a2e17600b15d296f\"><code>650d8e8</code></a>\nchore(deps-dev): bump the npm-dev-dependencies group across 1 directory\nwith ...</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/b49a5ca3bbfbd743fb353a81d2b931b2005202c6\"><code>b49a5ca</code></a>\nchore(deps): bump the github-actions-dependencies group across 1\ndirectory wi...</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/57a2375c118628c10609e2c4fcaf7c9c65c0c7ef\"><code>57a2375</code></a>\ndocs: update actions and workflows documentation</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/492e297766203f2beeb776112c5f4d8297858dbd\"><code>492e297</code></a>\nci: use ci-dokumentor</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/bc82ca5e293830214cf8edae5472ed53f659d584\"><code>bc82ca5</code></a>\nchore(deps): bump the github-actions-dependencies group with 2\nupdates</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8d5a9fea6bfd045fa99a691910bea5e8107d1645\"><code>8d5a9fe</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-nodejs</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.3.0...v2.4.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.3.0&new-version=2.4.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-06T14:00:07Z",
          "tree_id": "30fb4267b06309a07e02ea817b0cbf3e9695fdf7",
          "url": "https://github.com/hasura/ndc-postgres/commit/279a4fc5a7f6a3befe392c2c9908b59892575739"
        },
        "date": 1759759883241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.12731,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.605875700000006,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.239036910066796,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.856183257224773,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.033707800666102974,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.327972,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.06629759999998,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.03235319131256,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1327313572927409,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05058290029043572,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.710663499999995,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.24272975,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.410609341299626,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 5.729433051223133,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.040488511623804645,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.004025999999996,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.7493289,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.564186325612194,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.17293199694819,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03223870341982941,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.501224,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.03690974999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.571424762274265,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.0806533505888645,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035809750456723126,
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
          "id": "4fa57bcb9e1a89d4f4316531f456eb712b869ec6",
          "message": "Bump tracing-subscriber (#862)\n\nFor cargo audit",
          "timestamp": "2025-10-21T09:53:11+01:00",
          "tree_id": "9a2de960836c2341de1675d8213e7b499246982d",
          "url": "https://github.com/hasura/ndc-postgres/commit/4fa57bcb9e1a89d4f4316531f456eb712b869ec6"
        },
        "date": 1761037348034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.096049,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 44.08105669999997,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 14.42287499659703,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 6.093801151212126,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03965166069589258,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.768352,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 97.2223496,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.51876216033191,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2375900880818236,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.0622248725852277,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 43.780806,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.349745,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 28.045801551968832,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.376499304577816,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04378762200262372,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 39.387606,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.90427434999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 27.046677164091275,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.791658178291062,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03600935808525476,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 38.234541,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 59.76727559999984,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 26.477320403559716,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.0953103167454685,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.038861019776503206,
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
          "id": "17223600cfeac87549b5054c41eecfa330e14330",
          "message": "chore(deps): Bump hoverkraft-tech/compose-action from 2.4.0 to 2.4.1 (#860)\n\nBumps\n[hoverkraft-tech/compose-action](https://github.com/hoverkraft-tech/compose-action)\nfrom 2.4.0 to 2.4.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/releases\">hoverkraft-tech/compose-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v2.4.1</h2>\n<h2>Release Summary</h2>\n<p>Internal maintenance includes dependency updates to GitHub Actions\nand npm dev packages. Actions and workflows documentation has been\nrefreshed for clarity.</p>\n<h2>Breaking change(s)</h2>\n<p>No breaking changes.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>docs: update actions and workflows documentation by <a\nhref=\"https://github.com/hoverkraft-bot\"><code>@​hoverkraft-bot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/182\">hoverkraft-tech/compose-action#182</a></li>\n<li>chore(deps-dev): bump the npm-dev-dependencies group across 1\ndirectory with 2 updates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/185\">hoverkraft-tech/compose-action#185</a></li>\n<li>chore(deps): bump the github-actions-dependencies group with 2\nupdates by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/183\">hoverkraft-tech/compose-action#183</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-dokumentor from 0.2.0 to 0.2.2\nin the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/186\">hoverkraft-tech/compose-action#186</a></li>\n<li>chore(deps): bump hoverkraft-tech/ci-github-nodejs from 0.14.1 to\n0.15.0 in the github-actions-dependencies group by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>[bot]\nin <a\nhref=\"https://redirect.github.com/hoverkraft-tech/compose-action/pull/188\">hoverkraft-tech/compose-action#188</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.4.1\">https://github.com/hoverkraft-tech/compose-action/compare/v2...v2.4.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/3846bcd61da338e9eaaf83e7ed0234a12b099b72\"><code>3846bcd</code></a>\nchore: remove useless ghadocs config</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/97c255ba62a1cc26b3d6566c41f406450ef1ff22\"><code>97c255b</code></a>\nchore(deps): bump hoverkraft-tech/ci-github-nodejs</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/8ed9acf0e1d493c5115da1c9e73d429e743a2d67\"><code>8ed9acf</code></a>\nchore(deps): bump hoverkraft-tech/ci-dokumentor</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/ef7568e9dc02de3eb5bf9e4c82907745003dbbb3\"><code>ef7568e</code></a>\nchore(deps): bump the github-actions-dependencies group with 2\nupdates</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/fff732cbb38ad934a6c150133a1fb85f07437b45\"><code>fff732c</code></a>\nchore(deps-dev): bump the npm-dev-dependencies group across 1 directory\nwith ...</li>\n<li><a\nhref=\"https://github.com/hoverkraft-tech/compose-action/commit/b9f10db4fdfefef9e4a76506013b4021b4fd3c5d\"><code>b9f10db</code></a>\ndocs: update actions and workflows documentation</li>\n<li>See full diff in <a\nhref=\"https://github.com/hoverkraft-tech/compose-action/compare/v2.4.0...v2.4.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hoverkraft-tech/compose-action&package-manager=github_actions&previous-version=2.4.0&new-version=2.4.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-21T08:52:02Z",
          "tree_id": "ac54786e2bcbd6be269729bd218bccb3d428e4d4",
          "url": "https://github.com/hasura/ndc-postgres/commit/17223600cfeac87549b5054c41eecfa330e14330"
        },
        "date": 1761037594422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.180267,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 39.950939100000035,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.073470190895188,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.747683500644099,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03567496995839049,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 67.044135,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.79407819999996,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 51.40667841927102,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.4909142557765591,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05714623807839526,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.899433,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.375699,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.168951676594993,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.697757969591962,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.042365305106627935,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.51206,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.834732999999986,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.05221671719163,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.1625229437408,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035170539115654174,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.1040765,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.36698439999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.08138232753204,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.052830188609434,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03856150263909233,
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
          "id": "7c22ecf08f23ff27c2b8170646d1059bc52f710f",
          "message": "chore(deps): Bump indexmap from 2.11.0 to 2.12.0 (#858)\n\nBumps [indexmap](https://github.com/indexmap-rs/indexmap) from 2.11.0 to\n2.12.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/indexmap-rs/indexmap/blob/main/RELEASES.md\">indexmap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>2.12.0 (2025-10-17)</h2>\n<ul>\n<li><strong>MSRV</strong>: Rust 1.82.0 or later is now required.</li>\n<li>Updated the <code>hashbrown</code> dependency to 0.16 alone.</li>\n<li>Error types now implement <code>core::error::Error</code>.</li>\n<li>Added <code>pop_if</code> methods to <code>IndexMap</code> and\n<code>IndexSet</code>, similar to the\nmethod for <code>Vec</code> added in Rust 1.86.</li>\n</ul>\n<h2>2.11.4 (2025-09-18)</h2>\n<ul>\n<li>Updated the <code>hashbrown</code> dependency to a range allowing\n0.15 or 0.16.</li>\n</ul>\n<h2>2.11.3 (2025-09-15)</h2>\n<ul>\n<li>Make the minimum <code>serde</code> version only apply when\n&quot;serde&quot; is enabled.</li>\n</ul>\n<h2>2.11.2 (2025-09-15)</h2>\n<ul>\n<li>Switched the &quot;serde&quot; feature to depend on\n<code>serde_core</code>, improving build\nparallelism in cases where other dependents have enabled\n&quot;serde/derive&quot;.</li>\n</ul>\n<h2>2.11.1 (2025-09-08)</h2>\n<ul>\n<li>Added a <code>get_key_value_mut</code> method to\n<code>IndexMap</code>.</li>\n<li>Removed the unnecessary <code>Ord</code> bound on\n<code>insert_sorted_by</code> methods.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/0e68f8a3605f56c79d2ed84bff5908ee1dcd8a95\"><code>0e68f8a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/indexmap-rs/indexmap/issues/422\">#422</a>\nfrom cuviper/msrv-1.82</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/61c9c94672c2862b29dd65202ccf892969b0fe4c\"><code>61c9c94</code></a>\nci: only run full miri in the merge queue</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/db43f1945a7f0c39f28754e3557d7f34f1cb1ab3\"><code>db43f19</code></a>\nRelease 2.12.0</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b46a32a5859fb5aa26f9a7e38c9c93c30fb773f9\"><code>b46a32a</code></a>\nMove more to the lints table</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/4849b1679f6594112805ef8d542e230dfb4c37cf\"><code>4849b16</code></a>\nMake use of RFC2145 type privacy for sealed traits</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/cfff4b7d03e53688b82b7afc350d472cca2d2e32\"><code>cfff4b7</code></a>\nUse bounds in associated type position</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/c7178d73c45fe0cc52aec684282a0aef5b3675b2\"><code>c7178d7</code></a>\nUse <code>core::error::Error</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/76b459b82cd7de7035d96f7b6f0a178e02c4425c\"><code>76b459b</code></a>\nUse more precise capturing for some <code>impl Trait</code></li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/b3d9cc355e227a847a2d2ebcae38a230c005174d\"><code>b3d9cc3</code></a>\nUse the primitive slice's <code>is_sorted</code> methods</li>\n<li><a\nhref=\"https://github.com/indexmap-rs/indexmap/commit/09db3cce19a24b74cfa13a1510fd72b8ab58ae83\"><code>09db3cc</code></a>\nUse inherent <code>usize::div_ceil</code></li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/indexmap-rs/indexmap/compare/2.11.0...2.12.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=indexmap&package-manager=cargo&previous-version=2.11.0&new-version=2.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-21T09:03:58Z",
          "tree_id": "d7168719de8dbcef0a462ef4664599ce644dabaf",
          "url": "https://github.com/hasura/ndc-postgres/commit/7c22ecf08f23ff27c2b8170646d1059bc52f710f"
        },
        "date": 1761038094689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 20.919313,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.07746800000001,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.16606465083999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.576998818238186,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03466073350490198,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 63.781385,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.3997208,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.08018076874188,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.124460348625469,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.048817807865057176,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.1019685,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 67.05975850000002,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.233124989292588,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.246009269004528,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.037966946165052896,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.011409,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 58.91916199999997,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 24.78119986089397,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.3421109634619555,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.035130916951756436,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.717802,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.5725812,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 23.85840911112342,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.044134460800564,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03539424718703929,
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
          "id": "059aa600b0d8541b178785cfe9163a9a79ac4b82",
          "message": "chore(deps): Bump tempfile from 3.21.0 to 3.23.0 (#855)\n\nBumps [tempfile](https://github.com/Stebalien/tempfile) from 3.21.0 to\n3.23.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/Stebalien/tempfile/blob/master/CHANGELOG.md\">tempfile's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.23.0</h2>\n<ul>\n<li>Remove need for the &quot;nightly&quot; feature to compile with\n&quot;wasip2&quot;.</li>\n</ul>\n<h2>3.22.0</h2>\n<ul>\n<li>Updated <code>windows-sys</code> requirement to allow version\n0.61.x</li>\n<li>Remove <code>unstable-windows-keep-open-tempfile</code>\nfeature.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/fe9f4a305b785abd1f4f912c8304bcc90024f695\"><code>fe9f4a3</code></a>\nchore: release v3.23.0 (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/006c3fd55aa788e640f83a0aac54660e23e355e6\"><code>006c3fd</code></a>\nfix: use std::os::fd instead of std::os::wasi (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/b0e6309a589799181bc1434fdcb3b3b07b9b070e\"><code>b0e6309</code></a>\ndoc: Update COPYRIGHT link (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/2d6fc3fb5794c0e7fe6c944f72fd0e462480b101\"><code>2d6fc3f</code></a>\nFix formatting in Builder::disable_cleanup documentation (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/375\">#375</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/f720dbe098f847f3899d83305f565a5c46bb818d\"><code>f720dbe</code></a>\nchore: release 3.22.0</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/55d742cb5d37d51c5ee107ae6c3898deeb0cc592\"><code>55d742c</code></a>\nchore: remove deprecated unstable feature flag</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/bc41a0b586ec52da28971763378162e96d96be8a\"><code>bc41a0b</code></a>\nbuild(deps): update windows-sys requirement from &gt;=0.52, &lt;0.61 to\n&gt;=0.52, &lt;0....</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/3c55387edee0d79041092f5abfbe899de4fbc8db\"><code>3c55387</code></a>\ntest: make sure we don't drop tempdirs early (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/373\">#373</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/17bf644406959b75bf83d44fcfbd1dfa63d86730\"><code>17bf644</code></a>\ndoc(builder): clarify permissions (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/372\">#372</a>)</li>\n<li><a\nhref=\"https://github.com/Stebalien/tempfile/commit/c7423f1761f569c60c504ffed0ef6e124430b162\"><code>c7423f1</code></a>\ndoc(env): document the alternative to setting the tempdir (<a\nhref=\"https://redirect.github.com/Stebalien/tempfile/issues/371\">#371</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/Stebalien/tempfile/compare/v3.21.0...v3.23.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=tempfile&package-manager=cargo&previous-version=3.21.0&new-version=3.23.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-21T09:04:25Z",
          "tree_id": "2dd371db17b439691142eb5aed052e8752f0ce8a",
          "url": "https://github.com/hasura/ndc-postgres/commit/059aa600b0d8541b178785cfe9163a9a79ac4b82"
        },
        "date": 1761038223116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.132016999999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.62560309999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.102275407273588,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.785588055339211,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03510050815377809,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.0772235,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.57278225,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.469486490519,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3081295057563977,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05354434640379656,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.531438,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.38726575,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.044191906754552,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.063013630708806,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.03836783221921688,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.070528,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 56.04001105,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.239933914311926,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.6628608731859558,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03194696849704979,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 34.901664,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 54.3884781,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.150414819809555,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8054683762270827,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03856296838143608,
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
          "id": "cde7bd7b7ef64fa1a906f4877ceb129574cedf41",
          "message": "chore(deps): Bump clap from 4.5.46 to 4.5.49 (#861)\n\nBumps [clap](https://github.com/clap-rs/clap) from 4.5.46 to 4.5.49.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/releases\">clap's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v4.5.48</h2>\n<h2>[4.5.48] - 2025-09-19</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Add a new CLI Concepts document as another way of framing clap</li>\n<li>Expand the <code>typed_derive</code> cookbook entry</li>\n</ul>\n<h2>v4.5.47</h2>\n<h2>[4.5.47] - 2025-09-02</h2>\n<h3>Features</h3>\n<ul>\n<li>Added <code>impl FromArgMatches for ()</code></li>\n<li>Added <code>impl Args for ()</code></li>\n<li>Added <code>impl Subcommand for ()</code></li>\n<li>Added <code>impl FromArgMatches for Infallible</code></li>\n<li>Added <code>impl Subcommand for Infallible</code></li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li><em>(derive)</em> Update runtime error text to match\n<code>clap</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/clap-rs/clap/blob/master/CHANGELOG.md\">clap's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[4.5.49] - 2025-10-13</h2>\n<h3>Fixes</h3>\n<ul>\n<li><em>(help)</em> Correctly wrap when ANSI escape codes are\npresent</li>\n</ul>\n<h2>[4.5.48] - 2025-09-19</h2>\n<h3>Documentation</h3>\n<ul>\n<li>Add a new CLI Concepts document as another way of framing clap</li>\n<li>Expand the <code>typed_derive</code> cookbook entry</li>\n</ul>\n<h2>[4.5.47] - 2025-09-02</h2>\n<h3>Features</h3>\n<ul>\n<li>Added <code>impl FromArgMatches for ()</code></li>\n<li>Added <code>impl Args for ()</code></li>\n<li>Added <code>impl Subcommand for ()</code></li>\n<li>Added <code>impl FromArgMatches for Infallible</code></li>\n<li>Added <code>impl Subcommand for Infallible</code></li>\n</ul>\n<h3>Fixes</h3>\n<ul>\n<li><em>(derive)</em> Update runtime error text to match\n<code>clap</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/6abe2f8c61e31d8d43fee42c18414926c60893be\"><code>6abe2f8</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/d5c74542ce628b57424caec88efee1a231c436a0\"><code>d5c7454</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/5b2e960267b94d4811c9c3b99c62899a87505413\"><code>5b2e960</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5985\">#5985</a>\nfrom mernen/bash-cur</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/e426f4ee7a467321a57c9a557b4378f375a9148e\"><code>e426f4e</code></a>\nfix(complete): Improve handling of current word in Bash</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/d5229218e8e6c2878f3acd6143140f6912e4ce41\"><code>d522921</code></a>\ntest(complete): Demonstrate current behavior</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/74072bab6f817f87dd5c28ce2b7bcb074b2dd145\"><code>74072ba</code></a>\nchore(deps): Update compatible (dev) (<a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5983\">#5983</a>)</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/c3a1ddc1182fa7cf2cfe6d6dba4f76db83d48178\"><code>c3a1ddc</code></a>\nchore: Release</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/4460ff44b375c8d596fb70b848ff401fe12942c0\"><code>4460ff4</code></a>\ndocs: Update changelog</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/54947a1b4bc70745cd5787fb92a830081c6ed291\"><code>54947a1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/clap-rs/clap/issues/5981\">#5981</a>\nfrom mernen/fix-bash-clap-complete-space</li>\n<li><a\nhref=\"https://github.com/clap-rs/clap/commit/fd3f6d271defef2aa2f111555a005689f71f6acb\"><code>fd3f6d2</code></a>\nfix(complete): Restore nospace in bash</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/clap-rs/clap/compare/clap_complete-v4.5.46...clap_complete-v4.5.49\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=clap&package-manager=cargo&previous-version=4.5.46&new-version=4.5.49)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-21T09:05:51Z",
          "tree_id": "c2b8959c80a1f87570f1ad5b551d59f4251c0a31",
          "url": "https://github.com/hasura/ndc-postgres/commit/cde7bd7b7ef64fa1a906f4877ceb129574cedf41"
        },
        "date": 1761038298712,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.925975,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 38.9912055,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.838465983995524,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.766845292820948,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.035502503044608315,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.075918,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 94.9626718,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.30249093012048,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1999312093635055,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.056422389604185885,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.692227,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.631164,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.33796120185946,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.6902067088651656,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04097950433671233,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.559179,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.8422155,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.858897429026616,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.34715704933301,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.037043681465211226,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.468511,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 59.69030534999999,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.141326341764323,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.391856725269253,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03802621894637792,
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
          "id": "7bc2b2c7c6a119be97709016e086edaece714cdb",
          "message": "chore(deps): Bump rust-toolchain from 1.89.0 to 1.90.0 (#854)\n\nBumps [rust-toolchain](https://github.com/rust-lang/rust) from 1.89.0 to\n1.90.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/rust/releases\">rust-toolchain's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Rust 1.90.0</h2>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Language</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140717\">Split up\nthe <code>unknown_or_malformed_diagnostic_attributes</code> lint</a>.\nThis lint has been split up into four finer-grained lints, with\n<code>unknown_or_malformed_diagnostic_attributes</code> now being the\nlint group that contains these lints:\n<ol>\n<li><code>unknown_diagnostic_attributes</code>: unknown to the current\ncompiler</li>\n<li><code>misplaced_diagnostic_attributes</code>: placed on the wrong\nitem</li>\n<li><code>malformed_diagnostic_attributes</code>: malformed attribute\nsyntax or options</li>\n<li><code>malformed_diagnostic_format_literals</code>: malformed format\nstring literal</li>\n</ol>\n</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140942\">Allow\nconstants whose final value has references to mutable/external memory,\nbut reject such constants as patterns</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141260\">Allow\nvolatile access to non-Rust memory, including address 0</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Compiler</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/140525\">Use\n<code>lld</code> by default on\n<code>x86_64-unknown-linux-gnu</code></a>.</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/144410\">Tier 3\n<code>musl</code> targets now link dynamically by default</a>. Affected\ntargets:\n<ul>\n<li><code>mips64-unknown-linux-muslabi64</code></li>\n<li><code>powerpc64-unknown-linux-musl</code></li>\n<li><code>powerpc-unknown-linux-musl</code></li>\n<li><code>powerpc-unknown-linux-muslspe</code></li>\n<li><code>riscv32gc-unknown-linux-musl</code></li>\n<li><code>s390x-unknown-linux-musl</code></li>\n<li><code>thumbv7neon-unknown-linux-musleabihf</code></li>\n</ul>\n</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Platform Support</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/145252\">Demote\n<code>x86_64-apple-darwin</code> to Tier 2 with host tools</a></li>\n</ul>\n<p>Refer to Rust's <a\nhref=\"https://doc.rust-lang.org/rustc/platform-support.html\">platform\nsupport page</a> for more information on Rust's tiered platform\nsupport.</p>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Libraries</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/126043\">Stabilize\n<code>u*::{checked,overflowing,saturating,wrapping}_sub_signed</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/137268\">Allow\ncomparisons between <code>CStr</code>, <code>CString</code>, and\n<code>Cow&lt;CStr&gt;</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138340\">Remove\nsome unsized tuple impls since unsized tuples can't be\nconstructed</a></li>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/140005\">Set\n<code>MSG_NOSIGNAL</code> for <code>UnixStream</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141996\"><code>proc_macro::Ident::new</code>\nnow supports <code>$crate</code>.</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/143859\">Guarantee\nthe pointer returned from <code>Thread::into_raw</code> has at least 8\nbytes of alignment</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Stabilized APIs</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/rust/blob/master/RELEASES.md\">rust-toolchain's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Version 1.90.0 (2025-09-18)</h1>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Language</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140717\">Split up\nthe <code>unknown_or_malformed_diagnostic_attributes</code> lint</a>.\nThis lint has been split up into four finer-grained lints, with\n<code>unknown_or_malformed_diagnostic_attributes</code> now being the\nlint group that contains these lints:\n<ol>\n<li><code>unknown_diagnostic_attributes</code>: unknown to the current\ncompiler</li>\n<li><code>misplaced_diagnostic_attributes</code>: placed on the wrong\nitem</li>\n<li><code>malformed_diagnostic_attributes</code>: malformed attribute\nsyntax or options</li>\n<li><code>malformed_diagnostic_format_literals</code>: malformed format\nstring literal</li>\n</ol>\n</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/140942\">Allow\nconstants whose final value has references to mutable/external memory,\nbut reject such constants as patterns</a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/141260\">Allow\nvolatile access to non-Rust memory, including address 0</a></li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Compiler</h2>\n<ul>\n<li><a href=\"https://redirect.github.com/rust-lang/rust/pull/140525\">Use\n<code>lld</code> by default on\n<code>x86_64-unknown-linux-gnu</code></a>.</li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/144410\">Tier 3\n<code>musl</code> targets now link dynamically by default</a>. Affected\ntargets:\n<ul>\n<li><code>mips64-unknown-linux-muslabi64</code></li>\n<li><code>powerpc64-unknown-linux-musl</code></li>\n<li><code>powerpc-unknown-linux-musl</code></li>\n<li><code>powerpc-unknown-linux-muslspe</code></li>\n<li><code>riscv32gc-unknown-linux-musl</code></li>\n<li><code>s390x-unknown-linux-musl</code></li>\n<li><code>thumbv7neon-unknown-linux-musleabihf</code></li>\n</ul>\n</li>\n</ul>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Platform Support</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/145252\">Demote\n<code>x86_64-apple-darwin</code> to Tier 2 with host tools</a></li>\n</ul>\n<p>Refer to Rust's <a\nhref=\"https://doc.rust-lang.org/rustc/platform-support.html\">platform\nsupport page</a>\nfor more information on Rust's tiered platform support.</p>\n<p><!-- raw HTML omitted --><!-- raw HTML omitted --></p>\n<h2>Libraries</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/126043\">Stabilize\n<code>u*::{checked,overflowing,saturating,wrapping}_sub_signed</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/137268\">Allow\ncomparisons between <code>CStr</code>, <code>CString</code>, and\n<code>Cow&lt;CStr&gt;</code></a></li>\n<li><a\nhref=\"https://redirect.github.com/rust-lang/rust/pull/138340\">Remove\nsome unsized tuple impls since unsized tuples can't be\nconstructed</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/1159e78c4747b02ef996e55082b704c09b970588\"><code>1159e78</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/146543\">#146543</a>\n- Mark-Simulacrum:stable-next, r=Mark-Simulacrum</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/9b9cd6c2c84938fe8066eafc30ec9ef523c73551\"><code>9b9cd6c</code></a>\n1.90.0 stable release</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/67cb8e039bd8df7ca6c38828756cc22ce335724e\"><code>67cb8e0</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/146443\">#146443</a>\n- fmease:beta-less-greedy-maybe-const-bounds, r=fmease</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/f946d4d344d85eb2ddbd675cd46cb38a705faccc\"><code>f946d4d</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/146438\">#146438</a>\n- flip1995:clippy-beta-backport, r=Mark-Simulacrum</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/4b3008c23bf099b92ca678df4a0d173830bef8c4\"><code>4b3008c</code></a>\nDo not attempt to compute size of a type with escaping lifetimes (<a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/15434\">#15434</a>)</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/58afb55adc1e4b66c39870da5a1b0a11aa129225\"><code>58afb55</code></a>\nLess greedily parse <code>[const]</code> bounds</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/1c785abde778e1173dce1aba1ae471814c8fa1ab\"><code>1c785ab</code></a>\nAuto merge of <a\nhref=\"https://redirect.github.com/rust-lang/rust/issues/146350\">#146350</a>\n- cuviper:beta-next, r=cuviper</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/b630713bdf6fa2a00b66c7174bb147c40067c9d4\"><code>b630713</code></a>\nbootstrap: vendor <code>clippy_test_deps</code> too</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/fca6c02accb2a6c9a2979a3a01a2728c236bf9ab\"><code>fca6c02</code></a>\nAdd warning to the <code>Builder::llvm_config</code> function</li>\n<li><a\nhref=\"https://github.com/rust-lang/rust/commit/e52d88dcea305a297136e5fd7b0bb5ee2973d0ef\"><code>e52d88d</code></a>\nShip LLVM tools for the correct target when cross-compiling</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-lang/rust/compare/1.89.0...1.90.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rust-toolchain&package-manager=rust_toolchain&previous-version=1.89.0&new-version=1.90.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Daniel Harvey <danieljamesharvey@gmail.com>",
          "timestamp": "2025-10-21T09:05:06Z",
          "tree_id": "08f8c3b1a8b175ea89edcc73bb661958ff0be32f",
          "url": "https://github.com/hasura/ndc-postgres/commit/7bc2b2c7c6a119be97709016e086edaece714cdb"
        },
        "date": 1761038303229,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.208822,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.22508359999998,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.128904551077197,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.774194339643996,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03343807151029351,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.885919,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.94830625,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.54366316936706,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1227636437590363,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05594266270740766,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.630364,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 69.53666569999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.47322947194887,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.370298260295826,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04274692191565791,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.202224,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 60.939637199999986,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.248286037308173,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.47663827657545,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.036097341075667866,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.8875485,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.77212669999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.891280978611288,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.166286051218474,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03646383018861164,
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
          "id": "a8e2b977e366860473476366ec44ffe7ac33e9af",
          "message": "chore(deps): Bump multimap from 0.9.1 to 0.10.1 (#868)\n\nBumps [multimap](https://github.com/havarnov/multimap) from 0.9.1 to\n0.10.1.\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/havarnov/multimap/commits\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=multimap&package-manager=cargo&previous-version=0.9.1&new-version=0.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-28T08:40:20Z",
          "tree_id": "b2f13b55a3eac83949c7f6257619cb8615fd23d5",
          "url": "https://github.com/hasura/ndc-postgres/commit/a8e2b977e366860473476366ec44ffe7ac33e9af"
        },
        "date": 1761641186544,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 22.5508365,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 40.76977375,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 13.530449238895972,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.725358201009257,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03783593797625136,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 66.004295,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 96.98330659999999,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 50.08770115674334,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.3456997634154462,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05659555827495181,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 42.4269835,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 75.08090775000001,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.307898328307957,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.438544006856738,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.04480848447024067,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 38.393849,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 62.45438864999999,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 26.841643951448226,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.334695329801903,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03679910135760062,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.562893,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 57.59832525,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.578143151317473,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.13410953085403,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.036888750874196394,
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
          "id": "c94ef68726ed19be4f3ef717b3483fbc09692317",
          "message": "chore(deps): Bump actions/download-artifact from 5 to 6 (#863)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README for download-artifact v5 changes by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/417\">actions/download-artifact#417</a></li>\n<li>Update README with artifact extraction details by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/424\">actions/download-artifact#424</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v6.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/438\">actions/download-artifact#438</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v5...v6.0.0\">https://github.com/actions/download-artifact/compare/v5...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/018cc2cf5baa6db3ef3c5f8a56943fffe632ef53\"><code>018cc2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/438\">#438</a>\nfrom actions/danwkennedy/prepare-6.0.0</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/815651c680ffe1c95719d0ed08aba1a2f9d5c177\"><code>815651c</code></a>\nRevert &quot;Remove <code>github.dep.yml</code>&quot;</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bb3a066a8babc8ed7b3e4218896c548fe34e7115\"><code>bb3a066</code></a>\nRemove <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fa1ce46bbd11b8387539af12741055a76dfdf804\"><code>fa1ce46</code></a>\nPrepare <code>v6.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/4a24838f3d5601fd639834081e118c2995d51e1c\"><code>4a24838</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/431\">#431</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/5e3251c4ff5a32e4cf8dd4adaee0e692365237ae\"><code>5e3251c</code></a>\nReadme: spell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/abefc31eafcfbdf6c5336127c1346fdae79ff41c\"><code>abefc31</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/424\">#424</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac43a6070aa7db8a41e756e7a2846221edca7027\"><code>ac43a60</code></a>\nUpdate README with artifact extraction details</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/de96f4613b77ec03b5cf633e7c350c32bd3c5660\"><code>de96f46</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/417\">#417</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/7993cb44e9052f2f08f9b828ae5ef3ecca7d2ac7\"><code>7993cb4</code></a>\nRemove migration guide for artifact download changes</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-28T08:41:03Z",
          "tree_id": "4fdc78859ebeeae2c97fb3f3aefe7fb9b1d0fa5b",
          "url": "https://github.com/hasura/ndc-postgres/commit/c94ef68726ed19be4f3ef717b3483fbc09692317"
        },
        "date": 1761641228123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 21.0800165,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 37.69647709999999,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 12.16712599916639,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.606510625075343,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03395436096040387,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 64.3203745,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 93.12018805,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 48.891501310430336,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.2537141108058663,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05366065203094383,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 40.864726,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 72.75384249999999,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 26.39021371330771,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 7.098019361590666,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.0414383009084393,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 36.812556,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.0481243,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.655697023694934,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 3.9397912159923223,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03242764140794213,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 36.370345,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 58.56194589999998,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 25.00366286781453,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 4.278263105509108,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.03784651229592325,
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
          "id": "eba5190ce8ea8eefb08a4a0c70b6f9cbfece0731",
          "message": "chore(deps): Bump nonempty from 0.10.0 to 0.12.0 (#870)\n\nBumps [nonempty](https://github.com/cloudhead/nonempty) from 0.10.0 to\n0.12.0.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/cloudhead/nonempty/blob/master/CHANGELOG.md\">nonempty's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.12.0</h2>\n<h3>Added</h3>\n<ul>\n<li><code>bincode</code> feature flag to enable the use of\n<code>bincode-2.0.0</code>.</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li><code>NonEmpty::capacity</code> returns\n<code>NonZeroUsize</code></li>\n<li>Fixed the <code>nonempty!</code> macro to use the <code>vec!</code>\nmacro internally, ensuring that\nit compiles with <code>std</code> and <code>no_std</code>.</li>\n</ul>\n<h2>0.11.0</h2>\n<h3>Added</h3>\n<ul>\n<li><code>std</code> feature flag; building with\n<code>--no-default-features</code> now enables <code>no_std</code>\nuse.</li>\n<li><code>NonEmpty::sort</code> was added.</li>\n<li><code>NonEmpty::as_ref</code> added for converting a\n<code>&amp;NonEmpty</code> to <code>NonEmpty&lt;&amp;T&gt;</code>.</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>MSRV is now 1.56 (this is a semver-breaking change).</li>\n<li><code>NonEmpty::split</code> now returns\n<code>Option&lt;&amp;T&gt;</code> for last element.</li>\n<li><code>cargo clippy</code> and <code>cargo doc</code> failures are\nfixed.</li>\n</ul>\n<h2>[Unreleased]</h2>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li>See full diff in <a\nhref=\"https://github.com/cloudhead/nonempty/commits/v0.12.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=nonempty&package-manager=cargo&previous-version=0.10.0&new-version=0.12.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-24T16:00:40Z",
          "tree_id": "b2fbdd5af89792f3c7e75f39c482b2bc6797ae9c",
          "url": "https://github.com/hasura/ndc-postgres/commit/eba5190ce8ea8eefb08a4a0c70b6f9cbfece0731"
        },
        "date": 1764000800295,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "select-by-pk - median",
            "value": 24.427661,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - p(95)",
            "value": 43.05226925,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - connection acquisition time",
            "value": 15.015255027424411,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - request time - (query + acquisition)",
            "value": 5.75572477690976,
            "unit": "ms"
          },
          {
            "name": "select-by-pk - processing time",
            "value": 0.03583278298058491,
            "unit": "ms"
          },
          {
            "name": "select-order-by - median",
            "value": 65.181403,
            "unit": "ms"
          },
          {
            "name": "select-order-by - p(95)",
            "value": 95.330795,
            "unit": "ms"
          },
          {
            "name": "select-order-by - connection acquisition time",
            "value": 49.54318804860125,
            "unit": "ms"
          },
          {
            "name": "select-order-by - request time - (query + acquisition)",
            "value": 1.1717912016202803,
            "unit": "ms"
          },
          {
            "name": "select-order-by - processing time",
            "value": 0.05210606378055,
            "unit": "ms"
          },
          {
            "name": "select-variables - median",
            "value": 41.423682,
            "unit": "ms"
          },
          {
            "name": "select-variables - p(95)",
            "value": 71.38639479999996,
            "unit": "ms"
          },
          {
            "name": "select-variables - connection acquisition time",
            "value": 27.209298680599154,
            "unit": "ms"
          },
          {
            "name": "select-variables - request time - (query + acquisition)",
            "value": 6.462644222772106,
            "unit": "ms"
          },
          {
            "name": "select-variables - processing time",
            "value": 0.039454219413939826,
            "unit": "ms"
          },
          {
            "name": "select-where - median",
            "value": 37.147097,
            "unit": "ms"
          },
          {
            "name": "select-where - p(95)",
            "value": 59.328733,
            "unit": "ms"
          },
          {
            "name": "select-where - connection acquisition time",
            "value": 25.6745812389717,
            "unit": "ms"
          },
          {
            "name": "select-where - request time - (query + acquisition)",
            "value": 4.3190321916590335,
            "unit": "ms"
          },
          {
            "name": "select-where - processing time",
            "value": 0.03917980920942972,
            "unit": "ms"
          },
          {
            "name": "select - median",
            "value": 35.563793,
            "unit": "ms"
          },
          {
            "name": "select - p(95)",
            "value": 56.4696466,
            "unit": "ms"
          },
          {
            "name": "select - connection acquisition time",
            "value": 24.827465470206647,
            "unit": "ms"
          },
          {
            "name": "select - request time - (query + acquisition)",
            "value": 3.8495501884445673,
            "unit": "ms"
          },
          {
            "name": "select - processing time",
            "value": 0.035441932537181246,
            "unit": "ms"
          }
        ]
      }
    ]
  }
}