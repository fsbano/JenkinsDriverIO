Feature: Automate Jenkins Setup

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>

    Examples:
      | username | password                         | message                        |
      | admin    | b5e2016a9f3c4c78838a40ed6fd3f665 | You logged into a secure area! |