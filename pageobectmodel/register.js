import { expect, Page } from "@playwright/test";
import { asyncWrapProviders } from "async_hooks";

export class MyNewClass
{
/**
 * @param {import('playwright').Page} page
 */
constructor(page)
{


this.page=page
 this.Fname=page.getByPlaceholder('Enter your name')
 this.mail=page.getByPlaceholder('Enter Your Email')
 this.pwd =page.getByPlaceholder('Enter your password')
 this.action=page.getByRole('button', {name:'register'})
}


  async regaction (username,email,pwd)
{
    await  expect(this.Fname).toBeEditable()
    await this.Fname.fill(username)
    await this.mail.fill(email)
    await this.pwd.fill(pwd)
    await this.action.click()
}
}