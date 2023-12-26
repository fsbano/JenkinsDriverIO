Feature: Automate Jenkins Setup

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>

    Examples:
      | username | password                         | message                        |
      | admin    | 91c3b958b0b34a0f880921cb26436e6d | You logged into a secure area! |