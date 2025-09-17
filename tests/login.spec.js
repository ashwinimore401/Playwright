import{expect,test} from "@playwright/test";

test ("login", async({page})=>{
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.waitForTimeout(2000)
    await page.setViewportSize({width:640,height:640})
    //await page.locator("#submit").click()
    await page.locator("input#username").fill("student")
    await page.locator("#password").fill("Password123")
    await page.waitForTimeout(3000)
    await page.locator("#submit").click()
    await page.waitForTimeout(2000)

    


}
)