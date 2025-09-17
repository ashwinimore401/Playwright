import {test, expect} from 'playwright/test'


test('Handling new windows', async({browser}) => {

     const context= await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    const pagepromise = context.waitForEvent('page')
    await page.getByRole('button' , {name:'view more'}).first().click()
    const newpage = await pagepromise
    await newpage.getByRole('button', {name: 'Add to Cart'}).click()
    await newpage.waitForTimeout(2000)

    const allpages= context.pages()
    console.log(allpages.length);
   const main=  await allpages[0]
   const ntab = await allpages[1]
   console.log(await main.title());
   console.log(await ntab.title());
   await main.bringToFront()
    await allpages[1].close()
    const alpage= context.pages()
    console.log(alpage.length);
    
    


    




    
});