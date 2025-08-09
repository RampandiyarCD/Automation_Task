import { Given, Then, When } from "@cucumber/cucumber";
import { LoginPage } from "../pageAction/loginAction";
import { LoginObject } from "../pageObject/loginObject";
import { page } from "../support/hooks";

const loginPage = new LoginPage();
const loginObject = new LoginObject();

Given("I am on the Login page", async () => {
  await loginPage.navigateUrl();
});

When("I enter a valid email", async () => {
  await loginObject.enterEmail(process.env.ADMIN_EMAIL!);
});

When("I enter a valid password", async () => {
  await loginObject.enterPassword(process.env.ADMIN_PASSWORD!);
});

When("I click the login button", async () => {
  await loginObject.clickLogin();
});

Then("I should be logged in successfully", async () => {
  await loginObject.afterLogin();
  await page.getByText("Dashboard").waitFor(); 
});

When("I enter an incorrect password {string}", async (password: string) => {
  await loginObject.enterPassword(password);
});

Then("I should see an error message {string}", async (message: string) => {
  await loginObject.error(message);
});
