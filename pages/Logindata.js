
import{test}from '@playwright/test'

export const Coustomtest= test.extend({
    Logindata:{
        username: 'mohan@1',
        password: 'Thub@123'
    },

    Addressdata:{
    name: 'Mohan',
    country: 'India',
    city: 'Hyderabad',
    creditCard: '12121212',
    month: 'June',
    year: '2026'
    }
})