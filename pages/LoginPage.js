import {expect} from '@playwright/test'

export class Pagestore{
     
    constructor(page){
        this.page=page
        this.Accountlogin=page.getByRole('link', { name: 'Log in' })
        this.Username=page.locator('#loginusername')
        this.Password=page.locator('#loginpassword')
        this.loginbutton=page.getByRole('button', { name: 'Log in' })
        this.selecctproduct=page.getByRole('link', { name: 'Phones' })
        this.selectSonyMobile=page.getByRole('link', { name: 'Sony xperia z5' }).first()
        this.productexpect=page.locator('h2')
        this.addproductTocart=page.getByRole('link', { name: 'Add to cart' })
        this.cartpage=page.getByRole('link', { name: 'Cart', exact: true })
        this.placeorderbutton=page.getByRole('button', { name: 'Place Order' })
        this.Address_form_name=page.locator("//input[@id='name']")
        this.Address_form_country=page.getByRole('textbox', { name: 'Country:' })
        this.Address_form_city= page.getByRole('textbox', { name: 'City:' })
        this.Address_form_creditcard=page.getByRole('textbox', { name: 'Credit card:' })
        this.Address_form_month=page.getByRole('textbox', { name: 'Month:' })
        this.Address_form_year=page.getByRole('textbox', { name: 'Year:' })
        this.purchase= page.getByRole('button', { name: 'Purchase' })
        this.Thankyou=page.getByRole('heading', { name: 'Thank you for your purchase!' })
        this.Okaybutton=page.getByRole('button', { name: 'OK' })
        
   
    }

async Login(username,password) {
    await this.Accountlogin.click()
    await this.Username.fill(username)
    await this.Password.fill(password)
    await this.loginbutton.click()
}
async Goto(){
await this.page.goto('https://www.demoblaze.com/')
}
async SelecctProduct(){
    await this.selecctproduct.click()
    await this.selectSonyMobile.click()
    await expect(this.productexpect).toContainText('Sony xperia z5')
    await this.page.waitForLoadState('load')
}
async Cartpage(){
    await this.addproductTocart.click()
    await this.cartpage.click()
    await this.page.waitForLoadState('load')
    await this.placeorderbutton.click()
}
async AddressForm(name,country,city,creditCard,month,year){
    await this.Address_form_name.waitFor({ state: 'visible' })
    await this.Address_form_name.fill(name)
    await this.Address_form_country.fill(country)
    await this.Address_form_city.fill(city)
    await this.Address_form_creditcard.fill(creditCard)
    await this.Address_form_month.fill(month)
    await this.Address_form_year.fill(year)
    await this.purchase.click()
}

async OrderSuccess(){
await expect(this.Thankyou).toHaveText('Thank you for your purchase!')
await this.Okaybutton.click() 
}

}


