import { expect } from "@playwright/test";
import { LoginPage } from "../pageAction/loginAction";
import { LoginObject } from "../pageObject/loginObject";
import { page } from "../support/hooks";

const loginPage = new LoginPage();
const loginObject = new LoginObject();
export class Utils {

  async checkBox(labelText: string) {
    await page
      .locator(
        `//p[normalize-space(text())='${labelText}']/preceding-sibling::span//input[@type='checkbox']`
      )
      .check();
  }

  async login() {
    await loginPage.navigateUrl();
    await loginObject.enterEmail(process.env.ADMIN_EMAIL!);
    await loginObject.enterPassword(process.env.ADMIN_PASSWORD!);
    await loginObject.clickLogin();
    await loginObject.afterLogin();
  }

  async userCheckbox(labelText: string) {
    await page.locator(`//input[@value='${labelText}']`).check();
  }

  async ptag(text: string) {
    await page.locator(`//p[text()='${text}']`).click();
  }

  async selectDropdown(name: string, index: number) {
    await page.locator(`//input[@placeholder='${name}']`).click();
    await page.locator(`//li[@data-option-index=${index}]`).click();
  }
}
