import {expect,Page,Locator} from '@playwright/test'


export class Pagestore{
     private page: Page
     private Accountlogin: Locator
     private Username: Locator
     private Password: Locator
     private loginbutton: Locator;
     private selecctproduct: Locator;
     private selectSonyMobile: Locator;
     private productexpect: Locator;
     private addproductTocart: Locator;
     private cartpage: Locator;
     private placeorderbutton: Locator;
     private Address_form_name: Locator;
     private Address_form_country: Locator;
     private Address_form_city: Locator;
     private Address_form_creditcard: Locator;
     private Address_form_month: Locator;
     private Address_form_year: Locator;
    private purchase: Locator;
    private Thankyou: Locator;
    private Okaybutton: Locator;
    constructor(page:Page){
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

async Login(username: string,password:string): Promise<void> {
    await this.Accountlogin.click()
    await this.Username.fill(username)
    await this.Password.fill(password)
    await this.loginbutton.click()
}
async Goto(): Promise<void>{
await this.page.goto('https://www.demoblaze.com/')
}
async SelecctProduct(): Promise<void>{
    await this.selecctproduct.click()
    await this.selectSonyMobile.click()
    await expect(this.productexpect).toContainText('Sony xperia z5')
    await this.page.waitForLoadState('load')
}
async Cartpage(): Promise<void>{
    await this.addproductTocart.click()
    await this.cartpage.click()
    await this.page.waitForLoadState('load')
    await this.placeorderbutton.click()
}
async AddressForm(name: string,country: string,city: string, creditCard:string, month: string,year: string): Promise<void>{
    await this.Address_form_name.waitFor({ state: 'visible' })
    await this.Address_form_name.fill(name)
    await this.Address_form_country.fill(country)
    await this.Address_form_city.fill(city)
    await this.Address_form_creditcard.fill(creditCard)
    await this.Address_form_month.fill(month)
    await this.Address_form_year.fill(year)
    await this.purchase.click()
}

async OrderSuccess(): Promise<void>{
await expect(this.Thankyou).toHaveText('Thank you for your purchase!')
await this.Okaybutton.click() 
}

}