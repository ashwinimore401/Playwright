import { expect,page } from "@playwright/test";

export class Login{
    

/**
 * @param {import('playwright').Page} page
 */
constructor(page)
{
    this.page=page
    this.mail=page.getByPlaceholder('Enter your email')
    this.pwd=page.locator('#password')
    this.action=page.getByRole('button',{name:'Login'})
    
}

async  loginact (Un,pwd)
{
    await this.mail.fill('abc123@gmail.com')
    await this.pwd.fill('abc23')
    await this.action.click()
}







}