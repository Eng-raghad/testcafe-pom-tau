import { Selector, t } from "testcafe";
//https://demo.nopcommerce.com/login
class LoginPage {
    constructor() {
        this.loginHeader = Selector('h1').withText('Welcome, Please Sign In!')
        this.emailInput = Selector('#Email')
        this.passwordInput = Selector('#Password')
        this.loginBtn = Selector('button').withText('LOG IN')
        this.loginAccountHeader = Selector('strong').withText('Returning Customer');
    }

}

export default new LoginPage();