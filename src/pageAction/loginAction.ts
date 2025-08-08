import { page } from "../support/hooks";

export class LoginPage {
  async navigateUrl() {
    await page.goto("https://sandbox.skillsmax.ai");
  }
}
