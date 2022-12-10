Feature: Assertion Handling

  Scenario: To assert that page title can be found use following step :
  Then I navigate to "https://artoftesting.com/samplesiteforselenium"
  Then I should see page title as "Sample Website for Selenium Automation Practice | ArtOfTesting"
  Then I should not see page title as "Welcome"


  Scenario: To assert element text use any of the following steps :
  Then element having xpath "//button[@id='idOfButton']" should have text as "Submit"
  Then element having xpath "//button[@id='idOfButton']" should not have text as "Cancel"


  Scenario: To assert element attribute use any of the following steps :
  Then element having xpath "//button[@id='idOfButton']" should have attribute as "button"
  Then element having xpath "//button[@id='idOfButton']" should not have attribute as "dropdown"

  Scenario: To assert that element is enabled and diabled use any of the following steps
  Then element having xpath "//button[@id='idOfButton']" should be enabled
  Then element having xpath "//button[@id='idOfButton']" should be disabled






