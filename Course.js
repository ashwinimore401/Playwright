import {test, expect} from '@playwright/test'
import { log } from 'node:console';

test('Register to application', async({page}) => {

 test.setTimeout(60000);
    await page.setViewportSize({width:1920, height:1080}) 

    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    const size=  page.viewportSize() //returns the current viewport size
    console.log(size); 
    
    //set viweport size for maximizing & minimizing the window
    console.log( await page.title());
    console.log(await page.url());
    
    
    //await page.locator("//input[@placeholder='Enter your name']").fill('Abc')
    await page.getByPlaceholder('Enter your name').fill('abc')

    await page.waitForTimeout(1000)
    //await page.locator("//input[@id='email']").fill('abc@gmail.com')
    await page.getByPlaceholder('Enter Your Email').fill('abnbnbj@gmail.com')
    await page.waitForTimeout(1000) //pause

    //await page.locator("//input[@name='password']").fill('abc123')
    await page.getByPlaceholder('Enter your password').fill('5656555')

    await page.waitForTimeout(1000)

    //await page.locator("//button[@type='submit']").click()
    await page.getByRole('button',{name : 'Register'}).click()

    await page.waitForTimeout(3000)


    //xpath
    //tag[@Attributename='AV']
    //input[@placeholder='Enter your name'
    
});

test('Clicking on button', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/button?sublist=0')
    await page.waitForTimeout(2000)
    await page.getByRole('button',{name:'Yes'}).click()
    await page.waitForTimeout(1000)
    const text= await page.getByText('You selected "Yes"').innerText()
     //const text= await page.getByText('You selected "Yes"').textContent() 
    await page.waitForTimeout(1000)
    console.log(text);
    await expect(text).toContain('No') //validation or assertion
    await page.waitForTimeout(3000)
    
});

test('Link', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/link?sublist=0')
    await page.waitForTimeout(2000)
    await page.getByRole('link',{name: 'Kids'}).click()
    await page.waitForTimeout(2000)
    
});

test('checkbox', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/checkbox?sublist=0')
    //await page.getByRole('checkbox', {name : 'WhatsApp'}).check()
    await page.locator('#domain_b').check()
  
    await page.locator('#domain_b').uncheck()
   await expect( page.locator('#domain_b')).not.toBeChecked()
    
});

test('radio button', async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/radio?sublist=0')
    await page.locator('#attended').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('#attended')).toBeChecked() //assertion or validation
    await page.waitForTimeout(2000)

})

test('images', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/image/linkImage?sublist=1')
    //await page.getByAltText('broken image').nth(3).click()
    //await page.getByText('Electronics').click()
    //p[text()='Electronics'] //text function
    //a[@title="Watches"]//p[(.='Electronics')] //xpath
    await page.waitForTimeout(2000)

    
});

test('single select',  async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/dropdown?sublist=0')
    await page.locator('#country_code').selectOption('+91')
    await expect(page.locator('#country_code')).toHaveValue('+91')
    await page.locator('#select3').selectOption('India')
    await page.waitForTimeout(2000)
    await page.locator('#select5').selectOption('Rajasthan')
    await expect(page.locator('#select5')).toHaveValue('Rajasthan')


});

test('Multi select dropdown', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1')
    await page.locator('#select-multiple-native').selectOption(['Mens Casual Premium ...', 'Mens Cotton Jacket...', 'Mens Casual Slim Fit...'])
     await page.waitForTimeout(2000)
     await page.getByRole('button', {name:'Add'}).click()
     await page.waitForTimeout(2000)
    let ss = await page.locator('//tbody//tr//td[1]').allTextContents()
    console.log(ss);
    //await expect(ss).toEqual('Mens Cotton Jacket...') 
    await expect(ss).toHaveLength(3)
     
});

test('Search with select', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dropdown/search?sublist=2')
    await page.getByRole('combobox').nth(3).click()
    await page.getByRole('combobox').nth(3).fill('india')
    //await page.locator('#react-select-10-input').fill('india')
    await page.keyboard.press('Enter') 
    await page.waitForTimeout(2000)
    
});

test('Dynamic web table', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/table/dynamicTable')
    await page.waitForTimeout(2000)
    let itemname = await page.locator('//tbody//tr//th').allTextContents()
    console.log(itemname);
    let price = await page.locator('//tbody//tr//td[4]').allInnerTexts()
    console.log(price);

    for(let i=0; i<itemname.length; i++)
    {
        console.log(`Item name is ${itemname[i]} and the price is ${price[i]}`);
    }
    await expect(itemname).toContain('Samsung Galaxy')
    await expect (price).toHaveLength(4)    
    
});

test('drag & drop', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    await page.waitForTimeout(2000)
    await page.getByText('Mobile Charger').dragTo(page.getByText('Mobile Accessories'))
     await page.waitForTimeout(1000)
     await page.getByText('Laptop Cover').dragTo(page.getByText('Laptop Accessories'))
     await page.waitForTimeout(1000)
});

test('mousehover', async({page}) => {
    await page.goto('https://demoapps.qspiders.com/ui/mouseHover/tab?sublist=3')
    await page.locator('//div[@class="bg-slate-800 h-10"]//li[@class="HomeAndLiving relative"]').hover()
    await page.waitForTimeout(1000)
    await page.locator('//div[@class="bg-slate-800 h-10"]//li[@class="HomeAndLiving relative"]//li[10]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(1000)
});

test('dbclick', async({page}) => {
    await page.goto('https://qa-practice.netlify.app/double-click')
    await page.getByRole('button', {name :'Double click me'}).dblclick()
    await page.waitForTimeout(1000)
    
});
test('keyboard actions', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    await page.locator('//input[@name="handleInput"]').click()
    await page.keyboard.type('Playwright')
    await page.keyboard.press('Enter')
     await page.waitForTimeout(2000)
     await page.keyboard.press('Control+A')
        await page.waitForTimeout(2000)
});

test.only ('scroll', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
     await page.waitForTimeout(2000)
    await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    //await window.scrollBy(0,-100)
    //await page.getByText('1.Accessing the Site').scrollIntoViewIfNeeded()
    await page.evaluate(()=>{window.scrollTo(0,0)}) //scrolls to top
     await page.waitForTimeout(2000)
    
    
});

test.only('rightclick', async({page}) => {

    await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1')
    await page.getByRole('button', {name: 'Right Click'}).click({button:'right'})
    await page.waitForTimeout(2000)
    //await page.keyboard.press('Enter')
    await page.getByText('Yes').click()
     await page.waitForTimeout(2000)
    
});