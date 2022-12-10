require('chromedriver');
const {Given, When, Then, BeforeAll, After, AfterAll} = require("@cucumber/cucumber");
const {Builder, Key, By, until, Browser} = require('selenium-webdriver');
const assert = require('assert');

let driver;
let element ;
let winHandleBefore
let newWinHandle



BeforeAll(async function() {
    driver = await new Builder().forBrowser('chrome').build();
});


AfterAll(async () =>  await driver.quit());



Then("I navigate to {string}",{timeout: 15000},async  function (url) {
  await driver.get(url);
  await driver.sleep(1000)
  
});
Then("I navigate forward",{timeout: 15000},async function () {
  await driver.navigate().forward();
  await driver.sleep(1000)


});

Then("I navigate back",{timeout: 15000}, async function () {
  await driver.navigate().back();
  await driver.sleep(1000)

});

Then("I refresh page", async function () {
 await driver.navigate().refresh();
 await driver.sleep(1000)

});

Then("I switch to new window", async function () {
  winHandleBefore = driver.getWindowHandle();
 await driver.switchTo().newWindow('window');
 await driver.sleep(1000)
 newWinHandle = driver.getWindowHandle();
 
});

Then("I switch to previous window", async function () {
  driver.switchTo().window(winHandleBefore);
  await driver.sleep(1000)
});

Then("I switch to window having title {string}", async function (title) {
  await driver.switchTo().window(newWinHandle);
  await driver.sleep(1000)
});

Then("I close new window", async function () {
  await driver.close();
  await driver.sleep(1000)
});

Then("I switch to main window", async function () {
  await driver.switchTo().window(winHandleBefore);
  await driver.sleep(1000)
});

Then('I scroll to top of page',async function () {
  await driver.findElement(By.css(".gLFyf")).sendKeys("youtube",Key.ENTER);
  await driver.actions()
        .scroll(0, 0, 0,-300)
        .perform()
        await driver.sleep(1000)

});

Then('I scroll to end of page',async function () {
  await driver.actions()
        .scroll(0, 0, 0, 300)
        .perform()
        await driver.sleep(1000)
});

Then('I scroll to element having xpath {string}',async function (string) {
 let element = await driver.findElement(By.xpath(string))
  await driver.actions()
        .scroll(0, 0, 0, 300, element)
        .perform()
        await driver.sleep(1000)
});

Then('I hover over element having xpath {string}',async function (string) {
  const hoverable = driver.findElement(By.xpath(string));
  const actions = driver.actions({ async: true });
  await actions.move({ origin: hoverable }).perform();
  await driver.sleep(1000)
});

Then('I minimize browser window', async function () {
  await driver.manage().window().minimize();
  await driver.sleep(1000)
});


Then('I maximize browser window',async function () {
  await driver.manage().window().maximize();
  await driver.sleep(1000)
});


Then('I take Screenshot', async function () {
 await driver.takeScreenshot().then(
    function(image, err) {
        require('fs').writeFile('out.png', image, 'base64', function(err) {
            console.log(err);
        });
    });
 });

 Then('I accept alert',async function () {
  await driver.findElement(By.xpath("//a[normalize-space()='Alert with OK & Cancel']")).click();
  element =  await driver.findElement(By.css(".btn-primary"));
await element.click();
await driver.switchTo().alert().accept();
await driver.sleep(1000)
});

Then('I dismiss alert',async function () {
  await element.click();
  await driver.switchTo().alert().dismiss();
await driver.sleep(1000)
});

Then('I wait for {int} sec', async function (int) {
    await driver.sleep(int*1000)
  });

Then('I wait {int} seconds for element having id {string} to display',async  function (int, string) {
  element = await driver.findElement(By.xpath(string));
  await driver.wait(until.elementIsVisible(element), int*1000);
  element.sendKeys("abc@sample.com")
  });
Then('I wait {int} seconds for element having id {string} to enable', async function (int, string) {
  element = await driver.findElement(By.xpath(string));
  await driver.wait(until.elementIsEnabled(element), int*1000);
  });


   Then('I click on element having xpath {string}', async function (string) {
  element = await driver.findElement(By.xpath(string));
  element.click();
  await driver.sleep(4000)
    });

   Then('I double click on element having xpath {string}',async function (string) {
    const clickable = driver.findElement(By.xpath(string));
    const actions = driver.actions({ async: true });
    await actions.doubleClick(clickable).perform();
    await driver.sleep(4000)
    });

    Then('I click on link having xpath {string}', async function (string) {
      element = await driver.findElement(By.xpath(string));
      element.click();
      await driver.sleep(1000)
        });

    Then('I enter {string} into input field having xpath {string}',async function (string, string2) {
      element = await driver.findElement(By.xpath(string2));
      element.sendKeys(string)
      await driver.sleep(1000)

    });

    Then('I clear input field having xpath {string}', async function (string) {
         element.clear()
      await driver.sleep(1000)

    });



      Then('I select {string} option by text from dropdown having xpath {string}',async function (string, string2) {
        await driver.findElement(By.xpath(string2)).click();
        await driver.findElement(By.xpath("//option[.='"+string+"']")).click();  
      await driver.sleep(1000)

      });

      Then('I select {int} option by index from dropdown having xpath {string}',async function (int, string) {
        await driver.findElement(By.xpath(string)).click();
        await driver.findElement(By.css("option:nth-child("+int+")")).click();      
      await driver.sleep(1000)

      });

      Then('I select {string} option by value from dropdown having xpath {string}',async function (string, string2) {
        await driver.findElement(By.xpath(string2)).click();
        await driver.findElement(By.css("option[value='"+string+"']")).click(); 
      await driver.sleep(1000)

      });

      Then('I check the checkbox having xpath {string}',async function (string) {
        await driver.findElement(By.xpath(string)).click();
      await driver.sleep(1000)

      });

      Then('I uncheck the checkbox having xpath {string}',async function (string) {
        await driver.findElement(By.xpath(string)).click();
      await driver.sleep(1000)

      });

      Then('I select radio button having xpath {string}',async function (string) {
        await driver.findElement(By.xpath(string)).click();
      await driver.sleep(1000)

      });

      Then('I should see page title as {string}',async function (string) {
          const titleText = await driver.getTitle();
          assert.equal(titleText, string);   
      });


      Then('I should not see page title as {string}',async function (string) {
        const titleText = await driver.getTitle();
          assert.notEqual(titleText, string);
      });

        Then('element having xpath {string} should have text as {string}',async function (string, string2) {
         const result = await driver.findElement(By.xpath(string)).getText();
         assert.equal(result, string2);
        });

        Then('element having xpath {string} should not have text as {string}', async function (string, string2) {
          const result = await driver.findElement(By.xpath(string)).getText();
          assert.notEqual(result, string2);
        });

        Then('element having xpath {string} should have attribute as {string}',async function (string, string2) {
          const result = await driver.findElement(By.xpath(string)).getAttribute('type');
          assert.equal(result, string2);
        });

        Then('element having xpath {string} should not have attribute as {string}',async function (string, string2) {
          const result = await driver.findElement(By.xpath(string)).getAttribute('type');
         assert.notEqual(result, string2);
        });

        Then('element having xpath {string} should be enabled', async function (string) {
          const result = await driver.findElement(By.xpath(string)).isEnabled();
          assert.equal(result, true)
        });

        Then('element having xpath {string} should be disabled',async function (string) {
          const result = await driver.findElement(By.xpath(string)).isEnabled();
          assert.notEqual(result, false);
        });


