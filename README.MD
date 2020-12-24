### Selenium
* Selenium is an atutomation testing tool that provides various elements to interact with web page.
* By using these elements provided by selenium, we can perform various operations to get data from HTML DOM.

### Selenium web driver
* download chrome driver from https://chromedriver.chromium.org/
* install chromedriver from CLI
`npm install chromedriver`

### Selenium Navigation

`driver.get(url)`
`driver.navigate().back()`
`driver.navigate().forward()`

### Selenium Elements
`driver.findElement()`: By.id(), By.class(), By.name(), By.tagName(), By.xpath()

### Selenium methods
* click()
  - `driver.findElement(By.id('btn')).click()`
* sendKeys()
  - `driver.findElement(By.id('name')).sendKeys("my name")`
* getText()
  - `driver.findElement(By.id('text')).getText().then()`

### Installation

`npm install selenium-webdriver fs`