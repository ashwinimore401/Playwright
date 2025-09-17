// import { type Page, type Locator } from "@playwright/test";
// import { asyncWrapProviders } from "async_hooks";

// export class registerpage
// {
//     readonly page:Page
//     readonly Fname:Locator
//     readonly Lname:Locator
//     readonly pwd:Locator
//     readonly regi:Locator

// constructor (page)
// {


// this.page=page
//  this.Fname=page.getByPlaceholder('Enter your name')
//  this.Lname=page.getByPlaceholder('Enter Your Email')
//  this.pwd=page.getByPlaceholder('Enter your password')
//  this.regi=page.getByRole('button',{name:Register})
// }


//   async testdata (UN,EM,PWD)
// {
//     await this.Fname.fill()
//     await this.Lanme.fill()
//     await this.pwd.fill()
//     await this.regi.click()
// }
// }