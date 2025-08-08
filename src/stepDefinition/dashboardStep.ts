import { Given, When } from "@cucumber/cucumber";
import { DashboardPage } from "../pageAction/dashboardAction";
import { DashboardObject } from "../pageObject/dashboardObject";

const dashObject = new DashboardObject();
const dashPage = new DashboardPage();

Given("I am in the organization tab", async () => {
  await dashObject.goToOrganization();
});

When("I have opened the create organization side bar", async () => {
  await dashObject.goToTab();
});
