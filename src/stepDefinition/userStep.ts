import { Given, Then, When } from "@cucumber/cucumber";
import { DashboardObject } from "../pageObject/dashboardObject";
import { UserObject } from "../pageObject/userObject";
import { Utils } from "../utility/utility";

const userObject = new UserObject();
const dashObject = new DashboardObject();
const utils = new Utils();

Given("I am in the User tab", async () => {
  await userObject.goToUser();
});

When("I have opened the create user sidebar", async () => {
  await userObject.goToTab();
});

Then("I click the cancel button", async () => {
  await userObject.chooseCancle();
});

When("I select the Create Bulk User tab", async () => {
  await userObject.chooseBulkUser();
});

Then("I click the next button", async () => {
  await userObject.chooseNext();
});

Then("I click the Previous", async () => {
  await userObject.choosePrevious();
});

When("I select the Organisation choose dropdown", async () => {
  await userObject.chooseOrgDrop("3");
});

When("I choose file", async () => {
  await userObject.chooseFile();
});

When("I select Yes, I want to add tags", async () => {
  await userObject.selectTag();
});

When("I select tags",async()=>{
  await userObject.tagDrop();
});

Then("I select confirm and select",async()=>{
  await userObject.confirm();
});