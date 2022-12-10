Feature: Click Step

  Scenario: To click on web element use following steps :
  Then I navigate to "https://mousetester.com/"
  Then I click on element having xpath "//p[normalize-space()='CLICK ME!']"
  Then I double click on element having xpath "//p[normalize-space()='CLICK ME!']" 
  Then I click on link having xpath "//a[normalize-space()='Home']" 