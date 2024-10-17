
const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^user is on login page$/, async () => {
    await browser.url('https://the-internet.herokuapp.com/login')
});

When(/^user enters username and password$/, async () => {
    await $('#username').setValue('tomsmith')
    await $('#password').setValue('SuperSecretPassword!')
});

When(/^clicks on login button$/, async () => {
    await $('button[type="submit"]').click()
});

Then(/^user is navigated to the home page$/, async () => {
    await expect($('#flash')).toHaveTextContaining('You logged into a secure area!')
});
