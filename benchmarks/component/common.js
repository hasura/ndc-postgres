// Sadly, k6 does not export its default text summarizer directly,
// instead making it available as a separate library.
// We need to import it from there, via their CDN.
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.3/index.js";

// This constructs a summary handler, injecting the test ID.
export function newSummaryHandler(testid) {
  return function handleSummary(data) {
    const summaries = {
      // We always want to print a text summary.
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
    const outputDirectory = __ENV.OUTPUT_DIRECTORY;
    if (outputDirectory) {
      const summaryFile = `${outputDirectory}/summaries/${testid}__${new Date().toISOString()}.json`;
      // If there is an output directory provided, we also serialize the summary to JSON and write it there.
      summaries[summaryFile] = JSON.stringify(data);
    }
    return summaries;
  };
}
