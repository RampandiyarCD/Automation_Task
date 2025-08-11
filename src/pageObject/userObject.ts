import { expect } from "@playwright/test";
import { page } from "../support/hooks";
import { Utils } from "../utility/utility";

const utils = new Utils();
export class UserObject {
  async goToUser() {
    await utils.ptag("User");
  }

  async goToTab() {
    await page.locator("//button[contains(text(),'Create User')]").click();
  }

  async chooseBulkUser() {
    await utils.userCheckbox("bulk-user");
  }

  async chooseNext() {
    await utils.ptag("Next");
  }

  async chooseCancle() {
    await utils.ptag("Cancel");
  }

  async chooseOrgDrop(index: string) {
    await page.locator("//input[@id='organization-select']").click();
    await page.locator(`//li[@data-option-index='${index}']`).click();
  }

  async chooseFile() {
    await page
      .locator("//button[contains(., 'Choose File')]//input[@type='file']")
      .setInputFiles("/home/Ram/Downloads/bulk-sample-user.csv");
  }

  async choosePrevious() {
    await utils.ptag("Previous");
  }

  async selectTag() {
    await page.locator("//input[@value='Yes']").click();
  }

  async tagDrop() {
    await utils.selectDropdown("Select tags", 1);
  }

  async confirm() {
    await utils.ptag("Confirm & Create");
  }
}
