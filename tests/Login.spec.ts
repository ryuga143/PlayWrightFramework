import {expect} from '@playwright/test'
import { Pagestore } from '../pages/LoginPage'
import{Coustomtest} from '../pages/Logindata'

Coustomtest('Login data',async({page,Logindata,Addressdata})=>{
let newpage= new Pagestore(page)
await newpage.Goto()
await newpage.Login(Logindata.username,Logindata.password)
await newpage.SelecctProduct()
page.on('dialog',dialog=> dialog.accept());
await newpage.Cartpage()
await newpage.AddressForm(
    Addressdata.name,
    Addressdata.country,
    Addressdata.city,
    Addressdata.creditCard,
    Addressdata.month,
    Addressdata.year
)
await newpage.OrderSuccess()
})




