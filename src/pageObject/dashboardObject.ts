import { page } from "../support/hooks";
import { Utils } from "../utility/utility";

const utils = new Utils();
export class DashboardObject {
  async goToOrganization() {
    await page.locator("//p[text()='Organization']").click();
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
    await utils.selectDropdown(
      '//input[@id="«r19»"]',
      `//li[@id="«r19»-option-${listIndex}"]`
    );
  }

  async selectState(listIndex: number) {
    await utils.selectDropdown(
      '//input[@id="«r1c»"]',
      `//li[@id="«r1c»-option-${listIndex}"]`
    );
  }

  async enterPincode(pincode: string) {
    await page.locator("//input[@name='pincode']").fill(pincode);
  }

  async selectCity(listIndex: number) {
    await utils.selectDropdown(
      '//input[@id="«r1g»"]',
      `//li[@id="«r1g»-option-${listIndex}"]`
    );
  }
}
