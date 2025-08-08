import { page } from "../support/hooks";

export class Utils {
  async selectDropdown  (select: string, option: string) {
    await page.locator(select).click();
    await page.locator(option).waitFor({ state: "visible" });
    await page.locator(option).click();
  };

}
