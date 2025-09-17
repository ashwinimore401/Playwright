import { test, expect} from '@playwright/test'

test('handling frame', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/frames?sublist=0')
    const frame = await page.frameLocator('//iframe[@class="w-full h-96"]')
    await page.waitForTimeout(2000)
    await frame.getByLabel('Username:').fill('abc123')
    await frame.locator('#password').fill('1234568')
    await frame.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(2000)    
});


test('Nested frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/nested?sublist=1')
   const pframe =  await page.frameLocator('[class="w-full h-96"]')
   console.log( await page.frames().length)
    const childframe = pframe.frameLocator('iframe')
    await childframe.getByLabel('Email:', ).fill('abc123@gmail.com')
    await childframe.getByLabel('Password:',{exact:true}).fill('12458sd')
    await childframe.getByLabel('Confirm Password:',{exact:true}).fill('12458sd')
    await childframe.getByRole('button',{name:'Sign Up'}).click()
     await page.waitForTimeout(2000) 
    
});

test('multiple frame', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/frames/multiple?sublist=2')
   const frame1 =  await page.locator('[class="w-full h-96"]').nth(0).contentFrame()
     const frame2 = await page.locator('[class="w-full h-96"]').nth(1).contentFrame()
     await frame1
});

