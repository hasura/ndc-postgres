import { check } from "k6";
import http from "k6/http";
import { newSummaryHandler } from "../common.js";

const testid = "select_variables";
const agentSocket = __ENV.AGENT_SOCKET || "localhost:8100";
const url = `http://${agentSocket}/query`;
const data = {
  collection: "Album",
  query: {
    fields: {
      Title: {
        type: "column",
        column: "Title",
        arguments: {},
      },
    },
    where: {
      type: "binary_comparison_operator",
      column: {
        type: "column",
        name: "Title",
        path: [],
      },
      operator: {
        type: "other",
        name: "_like",
      },
      value: {
        type: "variable",
        name: "search",
      },
    },
  },
  arguments: {},
  collection_relationships: {},
  variables: [
    {
      search: "%Garage%",
    },
    {
      search: "%Good%",
    },
    {
      search: "%Rock%",
    },
    {
      search: "%Dog%",
    },
    {
      search: "%Log%",
    },
  ],
};

export default function () {
  const response = http.post(url, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });

  check(response, {
    "status is 200": (r) => r.status == 200,
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
