import { test,expect} from "@playwright/test";
test.skip ('frames',async({page})=>
    {

    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    await page.waitForTimeout(2000)
    const frame =  page.frameLocator('//iframe [@class="w-full h-96"]')
       await page.waitForTimeout(2000)
       await frame.getByLabel("username").fill("iser123")
       await frame.locator("#password").fill("5775ffj")
       await frame.getByRole('button',{name:'Login'}).click()
       await page.waitForTimeout(2000)



});

test.skip('nested',async ({page}) =>
    {
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1")
   const Pframe = page.frameLocator('//iframe[@class="w-full h-96"]')
   const Cframe=Pframe.frameLocator('iframe')
   await page.waitForTimeout(2000)
   await Cframe.getByLabel('Email:', ).fill("abc123@gmail.com")
   await Cframe.locator("#password").fill("12458sd")
   await Cframe.locator("#confirm-password").fill("12458sd")
   await Cframe.locator("#submitButton").click()

   await page.waitForTimeout(2000)


});

test.only('multiframe',async({page})=>
    {

    await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2")
    await page.waitForTimeout(2000)
    const frame1= page.locator('[class="w-full h-96"]').nth(0).contentFrame()
    const frame2=page.locator('[class="w-full h-96"]').nth(1).contentFrame()
    await frame1.getByLabel("Email:",{exact:true}).fill("Admin@gmail.com")
    await frame1.getByLabel("Password:", {exact:true}).fill("Admin@1234")
    await frame1.getByLabel("Confirm Password:",{exact:true}).fill("Admin@1234")
    await page.waitForTimeout(2000)
    await frame1.locator("#submitButton").click()
    await frame2.getByLabel("Username:",{exact:true}).fill("")
    await frame2.getByLabel("Password:", {exact:true}).fill("")
    await frame2.getByRole('button',{name:'Login'}).click()


});

