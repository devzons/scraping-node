var webdriver = require('selenium-webdriver'), By = webdriver.By
var driver = new webdriver.Builder().forBrowser('chrome').build() 

driver.get('file://' + __dirname + '/example.html') 

Pause(2, ScrapeExample)

function ScrapeExample() {
  console.log('Scraping the page...')
  Pause(3, QuitDriver)
}

function Pause(Time, FuncName) {
  setTimeout(FuncName, Time*1000)
}

function QuitDriver() {
  driver.close()
  driver.quit()
}