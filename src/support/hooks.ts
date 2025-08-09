import {
  After,
  AfterAll,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

setDefaultTimeout(120 * 1000 * 6);
export let browser: Browser;
export let page: Page;
export let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  context = await browser.newContext({ viewport: null });
  page = await context.newPage();

  console.log("Starting......");
});
After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    await page.screenshot({ path: "error.png" });
  }
});
AfterAll(async () => {
  await context.close();
  await browser.close();

  console.log("Closing.......");
});
