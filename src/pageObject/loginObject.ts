import { page } from "../support/hooks";

export class LoginObject {
  async enterEmail(email: string) {
    await page.getByPlaceholder("Email").fill(email);
  }

  async enterPassword(password: string) {
    await page.getByPlaceholder("Password").fill(password);
  }

  async clickLogin() {
    await page.getByRole("button", { name: "Login" }).click();
  }

  async afterLogin() {
    await page.waitForURL("**/admindashboard");
  }

  async error(expectedMessage: string) {
    page.getByText(expectedMessage, { exact: true });
  }
}
