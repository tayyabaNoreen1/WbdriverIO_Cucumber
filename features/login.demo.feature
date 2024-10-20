Feature: Test login functionality

  Scenario Outline: Checklogin with valid credentials
  #Scenario: Checklogin with valid credentials#
    Given user is on login page
    When user enters <username> and <password>
    And clicks on login button
   #Then user is navigated to the home page#
    Then this <message> is displayed

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | user123  | pass123              | Your username is invalid!      |
