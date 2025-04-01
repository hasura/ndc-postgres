import { check } from "k6";
import http from "k6/http";
import { newSummaryHandler } from "../common.js";

const testid = "select-order-by";
const agentSocket = __ENV.AGENT_SOCKET || "localhost:8080";
const url = `http://${agentSocket}/query`;
const data = {
  collection: "Track",
  query: {
    fields: {
      Name: {
        type: "column",
        column: "Name",
        arguments: {},
      },
    },
    limit: 5,
    order_by: {
      elements: [
        {
          order_direction: "asc",
          target: {
            type: "column",
            name: "ArtistId",
            path: [
              {
                relationship: "TrackAlbum",
                arguments: {},
                predicate: {
                  type: "and",
                  expressions: [],
                },
              },
            ],
          },
        },
        {
          order_direction: "asc",
          target: {
            type: "column",
            name: "Title",
            path: [
              {
                relationship: "TrackAlbum",
                arguments: {},
                predicate: {
                  type: "and",
                  expressions: [],
                },
              },
            ],
          },
        },
        {
          order_direction: "asc",
          target: {
            type: "column",
            name: "AlbumId",
            path: [
              {
                relationship: "TrackAlbum",
                arguments: {},
                predicate: {
                  type: "and",
                  expressions: [],
                },
              },
            ],
          },
        },
        {
          order_direction: "asc",
          target: {
            type: "column",
            name: "Name",
            path: [],
          },
        },
      ],
    },
  },
  arguments: {},
  collection_relationships: {
    TrackAlbum: {
      column_mapping: {
        AlbumId: ["AlbumId"],
      },
      relationship_type: "object",
      source_collection_or_type: "Track",
      target_collection: "Album",
      arguments: {},
    },
  },
};

export default function () {
  const response = http.post(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  check(response, {
    "status is 200": (r) => r.status == 200,
    // "status is 200": (r) => { console.log(r.json()); return  r.status == 200 },
  });
}

export const handleSummary = newSummaryHandler(testid);

export const options = {
  tags: {
    testid,
  },
  scenarios: {
    short_sustained: {
      executor: "constant-vus",
      vus: 100,
      duration: "10s",
    },
  },
  thresholds: {
    checks: [
      {
        threshold: "rate == 1",
        abortOnFail: true,
      },
    ],
  },
};
