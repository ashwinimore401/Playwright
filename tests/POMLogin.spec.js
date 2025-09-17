import{test} from '@playwright/test'
import { Login } from '../pageobectmodel/Login.js'


test('login',async ({page}) =>
    {
await page.goto('https://demoapps.qspiders.com/ui/login')

const rlogin = new Login(page)
await rlogin.loginact()
await page.waitForTimeout(2000)

})
