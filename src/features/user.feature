Feature: User Creation

  @User
  Scenario: Canceling user creation
    Given I am in the User tab
    And I have opened the create user sidebar
    Then I click the cancel button

  @User
  Scenario: Creating bulk user
    Given I am in the User tab
    And I have opened the create user sidebar
    When I select the Create Bulk User tab
    Then I click the next button

  @User
  Scenario: Go Previous
    Then I click the Previous

  @User
  Scenario: Choosing file
    When I select the Create Bulk User tab
    Then I click the next button
    And I select the Organisation choose dropdown
    And I choose file
    Then I click the next button

  @User
  Scenario: Next Button
    Then I click the next button

  @User
  Scenario: Add Tags
    When I select Yes, I want to add tags
    And I select tags
    Then I click the next button

  @User
  Scenario: Confimation
    Then I select confirm and select
