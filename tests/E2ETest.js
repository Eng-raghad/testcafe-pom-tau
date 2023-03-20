import { ClientFunction, t } from "testcafe";
import homePage from "../pages/homePage";
import registerPage from "../pages/registerPage";
import loginPage from "../pages/loginPage";
import productDetailsPage from "../pages/productDetailsPage";
import cartPage from "../pages/cartPage";
import checkoutPage from "../pages/checkoutPage";
import searchResultsPage from "../pages/searchResultsPage";
import customerPage from "../pages/customerPage";

const dataSet = require('../data/data.json');


const URL = 'https://demo.nopcommerce.com/';
const getURL = ClientFunction(() => window.location.href);
const randomNumber = Math.floor(Math.random() * 10000);
//const userEmail = 'test' + randomNumber + '@test.com';

fixture('E2E Test')
    .page(URL);
dataSet.forEach(data => {
    test('Assert Home page Test', async t => {
        await t
            .expect(getURL()).eql(URL)
            .expect(homePage.subTitleHeader.exists).ok()

    });

    test('E2E Test', async t => {
        await t
            .maximizeWindow()
            .click(homePage.registerLink)
            .expect(getURL()).contains('register')
            .click(registerPage.genderSelection)
            .typeText(registerPage.firstName, data.firstname)
            .typeText(registerPage.lastName, data.lastname)
            .typeText(registerPage.emailAddress, data.email + randomNumber + '@test.com')
            .typeText(registerPage.password, data.password)
            .typeText(registerPage.confirmPassword, data.password)
            .click(registerPage.registerBtn)
            .expect(registerPage.registrationMessage.exists).ok();
        await homePage.search('apple');
        await t
            .click(searchResultsPage.productTitle)
            .expect(getURL()).contains('apple-macbook-pro-13-inch')
            .expect(productDetailsPage.productPrice.exists).ok()
            .typeText(productDetailsPage.productQuantity, '3', { replace: true, paste: true })
            .click(productDetailsPage.addToCartBtn)
            .expect(productDetailsPage.successMessage.exists).ok()
            .wait(3000)
            //checkout
            .click(homePage.shoppingCartLink)
            .click(cartPage.termsOfService)
            .click(cartPage.checkoutBtn)
            .expect(getURL()).contains('checkout')
        //fill checkout form
        await checkoutPage.countryList('United States')
        await checkoutPage.stateList('Idaho')
        await t
            .typeText(checkoutPage.city, 'testcity')
            .typeText(checkoutPage.addressTxt, 'testaddress')
            .typeText(checkoutPage.zipCode, '12345')
            .typeText(checkoutPage.phoneNumber, '1234567890')
            .click(checkoutPage.continueBtn)

            .click(checkoutPage.nextDayOption)
            .click(checkoutPage.nextShippingBtn)

            .click(checkoutPage.nextPaymentMethodBtn)
            .click(checkoutPage.nextConfirmBtn)
            .click(checkoutPage.confirmBtn)
            .expect(checkoutPage.confirmationMessage.exists).ok()

            .click(homePage.myaccountLink)
            .click(customerPage.orderLink)
            .expect(customerPage.noOrdersLabel.exists).notOk

    }
    );

    test('change currency', async t => {
        await homePage.changeCurrency('Euro');
    }


    );
});