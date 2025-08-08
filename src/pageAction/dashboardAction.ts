import { page } from "../support/hooks";

export class DashboardPage {
  async navigateUrl() {
    await page.goto("https://admin.sandbox.skillsmax.ai/admindashboard");
  }
}
