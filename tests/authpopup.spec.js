import { test, expect} from '@playwright/test'

test('authentication', async({browser}) => {


 const context = await browser.newContext(
  {
    httpCredentials:{
        username:'admin',
        password: 'admin'
    }
  }
 )
 const page = await context.newPage()
 await page.goto('https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/')
 await page.waitForTimeout(2000)

 
});

test.only('notificationpopup', async({browser}) => {

    const context = await browser.newContext({

        permissions:['notifications' , 'geolocation']
    })

   const  page =  await context.newPage()
   await page.goto('https://demoapps.qspiders.com/ui/browserNot?sublist=0')
   await page.getByRole('button',{name: 'Notification'}).click()
   await page.waitForTimeout(5000)




    
});