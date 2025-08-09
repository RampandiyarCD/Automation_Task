Feature: Organization Creation

  Background:
    Given I am on the Login page
    When I enter a valid email
    And I enter a valid password
    And I click the login button
    Then I should be logged in successfully
    And I am in the organization tab
    And I have opened the create organization sidebar

  @dashboard
  Scenario: Creating organization without filling any required field
    When I do not fill any required field
    And I click the create button
    Then I should see all required field errors

  @dashboard
  Scenario: Successful creation of organization
    When I fill all the mandatory fields with valid data
    When I click the create button
