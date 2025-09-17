import {test, expect } from '@playwright/test'

test.skip('single file ', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()
    
    await page.locator('#singleFileInput').setInputFiles(path.join(__dirname,'../npm error.txt'))
  //  C:/Users/User/OneDrive/Desktop/Pwbatch_2/npm error.txt
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name: 'Upload Single File'}).click()
    await page.waitForTimeout(3000)
   const filestatus =  await page.locator('#singleFileStatus').textContent()
   await expect(filestatus).toContain('npm error.txt')
    
});

test.skip('Multiple files ', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    console.log(__dirname);
    await page.locator('#multipleFilesInput').scrollIntoViewIfNeeded()
    
    await page.locator('#multipleFilesInput').setInputFiles([path.join(__dirname,'../npm error.txt') , path.join(__dirname, '../JenkinsFile.txt')])
  //  C:/Users/User/OneDrive/Desktop/Pwbatch_2/npm error.txt
    await page.waitForTimeout(3000)
    await page.getByRole('button',{name: 'Upload Multiple Files'}).click()
    await page.waitForTimeout(3000)
    
});

test.only('singleTry',async({page})=>{

  await page.goto("https://demoapps.qspiders.com/ui/fileUpload?sublist=0")
  await page.waitForTimeout(2000)
//  await page.locator(".border rounded p-2 border-gray-500 outline-none").scrollIntoViewIfNeeded()
  await page.locator(".border rounded p-2 border-gray-500 outline-none").setInputFiles("C:/Users/ashwini.more/Desktop/New folder/WhatsApp Image 2024-02-17 at 16.22.17.jpeg")





})