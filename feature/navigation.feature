Feature: Navigation

  Scenario:To open/close URL and to navigate between pages use following steps :
  Then I navigate to "https://padev.xyz/"
  Then I navigate back
  Then I navigate forward
  Then I refresh page

  Scenario: To switch between frames use following steps :
  Then I switch to new window
  Then I switch to previous window
  Then I switch to window having title "(.*?)"
  Then I close new window
  Then I switch to main window

    Scenario:To scroll webpage use following steps :
    Then I scroll to end of page
    Then I scroll to top of page

    Scenario:To scroll webpage to specific element use following steps :
    Then I scroll to element having xpath "(//h3[@class='LC20lb MBeuO DKV0Md'])[7]"

   Scenario: To hover over a element use following steps :
   Then I hover over element having xpath "(//h3[@class='LC20lb MBeuO DKV0Md'])[7]"

    Scenario:To interact with browser use following steps ::
    Then I maximize browser window
    Then I minimize browser window



  
