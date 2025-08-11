Feature: Organization Creation

  Background:
    Given I am in the organization tab
    And I have opened the create organization sidebar

  @dashboard
  Scenario: Creating organization without filling any required field
    When I do not fill any required field
    And I click the create button
    Then I should see all required field errors
  # @dashboard
  # Scenario: Successful creation of organization
  #   When I fill all the mandatory fields with valid data
  #   When I click the create button
