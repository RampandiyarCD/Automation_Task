import { spawn } from "child_process";
import reporter from "multiple-cucumber-html-reporter";

reporter.generate({
  jsonDir: "./reports/json",
  reportPath: "./reports/html",
  metadata: {
    browser: {
      name: "chomium",
      version: "latest",
    },
    device: "Local test machine",
    platform: {
      name: "linux",
      version: "Fedora",
    },
  },
});

spawn("google-chrome", ["./reports/html/index.html"]);
