import {
  After,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pageAction/loginAction";
import randomstring from "randomstring";
import { Utils } from "../utility/utility";

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

  const loginPage = new LoginPage();
  const utils = new Utils();

  await loginPage.navigateUrl();
});

After(async ({ error, result,pickle }) => {
  if (error || result.status==="FAILED") {
    console.log(error);
    await page.screenshot({
      path: `screenshots/${pickle.name}_${randomstring.generate()}.png`,
    });
  }
});
