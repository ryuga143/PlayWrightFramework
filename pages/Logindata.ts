import{test as base}from '@playwright/test'

interface LoginData{
    username: string,
    password: string
}

interface AddressData{  
    name: string,
    country: string,       // we are passing all as string because below we all pushed  data as string.
    city: string,
    creditCard: string,
    month: string,
    year: string
}


export const Coustomtest= base.extend<{
    Logindata: LoginData,
    Addressdata: AddressData
}>

({
    Logindata: {
       username: 'mohan@1',
        password: 'Thub@123'
    },

    Addressdata:{
    name: 'Mohan',       //string "  "
    country: 'India',     
    city: 'Hyderabad',
    creditCard: '12121212',
    month: 'June',
    year: '2026'
    }
})