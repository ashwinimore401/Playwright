import{expect,test} from'@playwright/test'
import { Console } from 'console'
import excel from 'exceljs'

test('testdata from excel', async({page})=>{

    const book=new excel.Workbook()
   await book.xlsx.readFile('./testdata/texcel.xlsx')
    const sheet = book.getWorksheet('Sheet1')
    const val = sheet.getRow(1).getCell(1).value
    const val1 = sheet.getRow(2).getCell(2).value
    console.log(val)
    console.log(val1)




})

test ('write to excel',async({page})=>{


const book=new excel.Workbook()
   await book.xlsx.readFile('./testdata/texcel.xlsx')
    const sheet = book.getWorksheet('Sheet1')
    const val = sheet.getRow(1).getCell(6).value
    //const val1 = sheet.getRow(1).getCell(1).value

})
