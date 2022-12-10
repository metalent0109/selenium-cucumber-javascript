Feature: Progressive Step

  Scenario: To implicitly wait for specific time use following step :
  Then I navigate to "https://demo.applitools.com/"
  Then I wait for 5 sec 
  Then I wait 5 seconds for element having id "//input[@id='username']" to display
  Then I wait 5 seconds for element having id "//input[@id='password']" to enable   