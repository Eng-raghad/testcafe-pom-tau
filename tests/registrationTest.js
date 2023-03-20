import { ClientFunction, t } from "testcafe";
import homePage from "../pages/homePage";
import registerPage from "../pages/registerPage";
import loginPage from "../pages/loginPage";
import customerPage from "../pages/customerPage";

const dataSet = require('../data/data.json');

const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
const randomNumber = Math.floor(Math.random() * 10000);
const userEmail = 'test' + randomNumber + '@test.com';

fixture("Registration Fixture")
    .page(URL);

test('Assert Home page Test', async t => {
    await t
        .expect(getURL()).eql(URL)
        .expect(homePage.subTitleHeader.exists).ok()
        //if(await homePage.computers.visible == true){  // computer if no meaning not appear. wait for selector
        if(await homePage.computers.visible == true){ // computer meaning invisible if yes wait for selector
            await t.click(homePage.computers)
            console.log("inside condition")
        }
        console.log("outside condition")
        await t.click(homePage.electronics)

});

test('User registration and login test', async t => {
    await t
        .click(homePage.registerLink)
        .expect(registerPage.registerHeader.exists).ok()
        .click(registerPage.genderSelection)
        .typeText(registerPage.firstName, 'TAU')
        .typeText(registerPage.lastName, '1');
    await registerPage.selectDay('3');
    await registerPage.selectMonth('May');
    await registerPage.selectYear('1913');
    await t
        .typeText(registerPage.emailAddress, userEmail)
        .typeText(registerPage.password, 'password')
        .typeText(registerPage.confirmPassword, 'password')
        .click(registerPage.registerBtn)
        .expect(registerPage.registrationMessage.exists).ok()
}

);



