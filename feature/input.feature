Feature: input Step

  Scenario: To enter text into input field use following steps :
  Then I navigate to "https://demo.applitools.com/"
  Then I enter "demo@sample.com" into input field having xpath "//input[@id='username']"
  Then I clear input field having xpath "//input[@id='username']"

  Scenario: To select option by text from dropdown use following steps :
  Then I navigate to "https://www.globalsqa.com/demo-site/select-dropdown-menu/"
  Then I select "Algeria" option by text from dropdown having xpath "//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select"
  Then I select 3 option by index from dropdown having xpath "//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select"
  Then I select "ALA" option by value from dropdown having xpath "//div[@class='single_tab_div resp-tab-content resp-tab-content-active']//p//select"

  Scenario: To check the checkbox use following steps :
  Then I navigate to "https://artoftesting.com/samplesiteforselenium"
  Then I check the checkbox having xpath "//input[@value='Automation']"
  Then I uncheck the checkbox having xpath "//input[@value='Automation']"
   

  Scenario: To select radiobox use following steps :
  Then I select radio button having xpath "//input[@id='male']"