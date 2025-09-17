import {expect,test} from '@playwright/test'
import { register } from '../pageobectmodel/register.js'
import { MyNewClass } from '../pageobectmodel/register.js'
import tdata from "../testdata/tsdata.json"


tdata.forEach(({username,email,pwd},index) =>{

test (`register #${index}`, async({page}) =>{

    
   await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
   const rpage = new MyNewClass(page);
   await page.waitForTimeout(2000)
   await rpage.regaction(username,email,pwd)
   await page.waitForTimeout(2000)
    });
})



