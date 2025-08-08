Feature: Organization Creation

  Background:
    Given I am in the organization tab
    And I have opened the create organization side bar

  Scenario: Creating organization without filling any required field
    When I do not fill any required field
    And I click the create button
    Then I should see the message "field is required"
    