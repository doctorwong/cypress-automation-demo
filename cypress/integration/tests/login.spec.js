import {Given, When, Then } from "cypress-cucumber-preprocessor/steps"

import LoginPage from '../pages/LoginPage';
import SecurePage from '../pages/SecurePage';
import securePage from '../pages/SecurePage';
const loginPage = new LoginPage();
const securePage = new SecurePage();

Given ('I open Login Page', () => {
    loginPage.visitLogin();
});

When('I fill the username inout with {string}', (username) =>
{
    loginPage.typeUsername(username)
});

When('I fill the password input with {string}', (password) => {
    loginPage.typePassword(password);
});

When('I click on Login button', () =>
{
    loginPage.clickLogin();
});

Then('I see {string} message', (expected) => {
    const message = securePage.getMessage;
    message.should((actual)=>
    {
        expect(actual).to.have.string(expected);
    })
})

/*
context('Login', () =>
{
    it('Login successfully', () =>
    {
        loginPage.visitLogin();
        loginPage.typeUsername("tomsmith");
        loginPage.typePassword('SuperSecretPassword!');
        loginPage.clickLogin();
        securePage.getMessage().should((actual) => {
            expect(actual).to.have.string("You logged into a secure area!");
        }
    }
    )
})
*/