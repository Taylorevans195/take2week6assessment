const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking draw displays choices", async () =>{
    await driver.get('http://localhost:8000')
    await driver.findElement(By.id('draw')).click()
    let choices = await driver.findElement(By.id('choices'))
    expect(choices).toBe.not(undefined)
  })
  test('chek that selected bots are added to duo', async () => {
    await driver.get('http://localhost:8000')
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.xpath('//button@class="bot-btn"]')).click()
    await driver.findElement(By.xpath('//button@class="bot-btn"]')).click()
    let botCard = await driver.findElement(By.xpath('//div@id="player-duo"]/div'))

    expect (botCard).not.toBe(undefined)
    
  })
});