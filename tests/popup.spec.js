import {test, expect} from '@playwright/test'


test('Handling popup', async({page}) => {

    await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
    page.on('dialog', async(dialog)=>{
        console.log(dialog.type());
        console.log( dialog.message());
        expect(dialog.message()).toContain('delete')
        expect(dialog.type).toBe('confirm')
        await dialog.accept() // to click on ok button in popup
        //await dialog.dismiss()
    })
    await page.locator('//tbody//tr[1]//td[1]/input').check()
    await page.getByRole('button', {name:'Delete', exact:true}).click()
    await page.waitForTimeout(2000)
    
});


test.only('Prompt popup', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/alert/prompt?sublist=1')

    page.on('dialog', async(dialog)=>{
        await page.waitForTimeout(1000)
        await dialog.accept('Sometext')  
         await page.waitForTimeout(1000)  
    })

    await page.locator('//tbody//tr[1]/td/input').check()
    await page.getByRole('button', {name: 'Delete'}).click()
     await page.waitForTimeout(2000)

    // let itemname =  await page.locator('//tbody//tr//td[2]').allTextContents()
    // expect(itemname).not.toContain('')
   



    
});
