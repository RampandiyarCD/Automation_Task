import { AfterAll, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as dotenv from "dotenv";

dotenv.config();

setDefaultTimeout(120 * 1000 * 6);
export let browser: Browser;
export let page: Page;
export let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();

  console.log("Starting......");
});

// AfterAll(async () => {
//   await context.close();
//   await browser.close();

//   console.log("Closing.......");
// });
