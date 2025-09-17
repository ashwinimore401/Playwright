import { test,expect } from "@playwright/test";
test ('screenshot',async ({page}) => {

    await page.goto("https://demoqa.com/")
    await page.screenshot({path:'./screenshot/screenshot.png',fullPage:true})
    await page.locator('.card-body').screenshot({path:'./screensshot/element.png'})


})