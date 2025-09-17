import { expect,test } from "@playwright/test";
test.skip('frame1', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.waitForTimeout(2000)
    const frame = page.frameLocator('frame[src*="frame_1.html"]')
    await page.setDefaultTimeout(3000)
    await frame.locator('[name="mytext1"]').fill("dssd")
    await page.waitForTimeout(3000)

})

test.only('frame2',async({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame2=page.frameLocator('frame[src*="frame_1.html"]')
    const inFrame=frame2.frameLocator('frame[src*="https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true"]')
    await inFrame.locator('.AB7Lab Id5V1').check()


})