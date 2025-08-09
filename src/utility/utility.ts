import { LoginPage } from "../pageAction/loginAction";
import { LoginObject } from "../pageObject/loginObject";
import { page } from "../support/hooks";

const loginPage = new LoginPage();
const loginObject = new LoginObject();
export class Utils {
  async selectDropdown(inputId: string, listIndex: number) {
    await page.locator(`//input[@id='${inputId}']`).click();
    await page.locator(`//li[@id='${inputId}-option-${listIndex}']`).click();
  }

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
}
