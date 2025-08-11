import {
  After,
  BeforeAll,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "@playwright/test";
import * as dotenv from "dotenv";
import { LoginPage } from "../pageAction/loginAction";
import { LoginObject } from "../pageObject/loginObject";

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
  const loginObject = new LoginObject();

  await loginPage.navigateUrl();
  await loginObject.enterEmail(process.env.ADMIN_EMAIL!);
  await loginObject.enterPassword(process.env.ADMIN_PASSWORD!);
  await loginObject.clickLogin();
  await loginObject.afterLogin();

  console.log("Login.....");
});

After(async function ({ result }) {
  if (result?.status === Status.FAILED) {
    await page.screenshot({ path: "error.png" });
  }
});
