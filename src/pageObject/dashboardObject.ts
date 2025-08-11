import { expect } from "@playwright/test";
import { page } from "../support/hooks";
import { Utils } from "../utility/utility";

const utils = new Utils();
export class DashboardObject {
  async goToOrganization() {
    await utils.ptag("Organization");
  }

  async goToTab() {
    await page
      .locator("//button[contains(text(),'Create Organization')]")
      .click();
  }

  async enterOrganisationName(name: string) {
    await page.locator("//input[@placeholder='Organisation Name']").fill(name);
  }

  async enterAddress(address: string) {
    await page.locator("//textarea[@name='address']").fill(address);
  }

  async selectCountry(listIndex: number) {
    await utils.selectDropdown("Select Country", listIndex);
  }

  async selectState(listIndex: number) {
    await utils.selectDropdown("Select State", listIndex);
  }

  async enterPincode(pincode: string) {
    await page.locator("//input[@name='pincode']").fill(pincode);
  }

  async selectCity(listIndex: number) {
    await utils.selectDropdown("Select State", listIndex);
  }

  async checkPractice() {
    await utils.checkBox("Practice");
  }

  async checkGraded() {
    await utils.checkBox("Graded");
  }

  async checkIterview() {
    await utils.checkBox("Interview");
  }

  async createBtn() {
    await page.locator("//p[text()='Create']").click();
  }

  async error(expectedMessage: string) {
    await expect(
      page.getByText(expectedMessage, { exact: true })
    ).toBeVisible();
  }
}
