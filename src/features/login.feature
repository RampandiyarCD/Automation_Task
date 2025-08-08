Feature: User Login

  Background:
    Given I am on the Login page

  Scenario: Unsuccessful login with correct email and incorrect password
    When I enter a valid email
    And I enter an incorrect password "Rampand1"
    And I click the login button
    Then I should see an error message "Incorrect email or password"

  Scenario: Successful login with valid credentials
    When I enter a valid email
    And I enter a valid password
    And I click the login button
    Then I should be logged in successfully
