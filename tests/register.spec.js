import {expect, test} from "@playwright/test";
import { register } from "module";
test.skip('register to app', async({page}) => {

    //await page.waitForTimeout(3000)
    test.setTimeout(50000)
    await page.goto('')
    
    await page.setViewportSize({width:640,height:640})
        //const size = await page.viewportSize();
    //console.log(size)
    await page.title();
    //await page.url();
    await page.getByPlaceholder('Enter your name').fill('ash')
    await page.getByPlaceholder('Enter Your Email').fill('ashiwni@getMaxListeners.com')
    await page.getByPlaceholder('Enter your password').fill('achjf')
    await page.waitForTimeout (3000)
    await page.getByRole('button', {name:'register'}).click();


});

// test.only ('link to button', async({page}) => {
//     await page.goto('')
//     await page.waitForTimeout(2000)
//     await page.getByRole('button',{name:'Yes'}).click()
//    await page.waitForTimeout(3000)
//      const text = await page.getByText('You selected Yes').textContent()
//      //console.log(text)
// })






// //});


test.skip ('lradio button', async({page}) => {
    
    await page.waitForTimeout(2000)
    await page.locator('#attended').click();
   await page.waitForTimeout(3000)
   await expect(page.locator('#attended')).toBeChecked();
     
   

});

test.skip ('image click', async({page}) =>{

    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.waitForTimeout(2000)
    await page.getByAltText('order placed').click();
    //await page.locator{//p[text()='Women's Clothing'])}
});

test.skip('Single dropdown',async({page})=>{
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    await page.waitForTimeout(3000)
    await page.locator('#select3').selectOption('China')
    await page.locator('#select5').selectOption('Hong Kong')
    await expect(page.locator('#select5')).toHaveValue('Hong Kong')


});

test.skip ('serchwith select',async({page}) =>{
    await page.goto('')
    await page.locator('#react-select-4-placeholder').fill('india')





});

test('handling popup',async({page})=>{
await page.goto("https://demoapps.qspiders.com/ui/alert?sublist=0")
page.on('dailog',async(dailog)=>{

    await dailog.accept()



})





})