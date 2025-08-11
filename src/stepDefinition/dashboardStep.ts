import { Given, Then, When } from "@cucumber/cucumber";
import { DashboardObject } from "../pageObject/dashboardObject";
import { page } from "../support/hooks";
import { Utils } from "../utility/utility";

const dashObject = new DashboardObject();
const utils = new Utils();

Given("I am in the organization tab", async () => {
  await dashObject.goToOrganization();
});

When("I have opened the create organization sidebar", async () => {
  await dashObject.goToTab();
});

When("I do not fill any required field", async () => {});

When("I click the create button", async () => {
  await dashObject.createBtn();
});

Then("I should see all required field errors", async () => {
  const errors = [
    "Organisation Name is required",
    "Address is required",
    "Country is required",
    "State is required",
    "Pin Code is required",
    "City is required",
    "Please select at least one assessment level",
  ];

  for (const error of errors) {
    await page.waitForSelector(`text=${error}`);
  }
});

When("I fill all the mandatory fields with valid data", async () => {
  await dashObject.enterOrganisationName("Rams");
  await dashObject.enterAddress("27-Kaveri Street");
  await dashObject.selectCountry(3);
  await dashObject.selectState(2);
  await dashObject.enterPincode("625014");
  await dashObject.selectCity(3);
  await dashObject.checkGraded();
});
