import { Selector, t } from "testcafe";
// https://demo.nopcommerce.com/

class HomePage {
    constructor() {
        this.subTitleHeader = Selector("h2").withText("Welcome to our store")
        this.registerLink = Selector('a').withText("Register")
        this.loginLink = Selector('a').withText("Log in")
        this.shoppingCartLink = Selector('a').withText("Shopping cart")
        this.currencyList = Selector('select#customerCurrency')
        this.myaccountLink = Selector('a').withText("My account")
        this.logoutLink = Selector('a').withText("Log out")
        this.computers = Selector('a').withText('Tests')
        this.electronics = Selector('a').withText('Electronics')
    }

    get productSearch() {
        return Selector("input[id='small-searchterms']");
    }

    async search(product) {
        await t
            .typeText(this.productSearch, product)
            .wait(3000)
            .pressKey('enter');
    }

    async changeCurrency(currency) {
        await t
            .click(this.currencyList)
            .click(Selector('option', { text: currency }));


    }

    async waitforelement(element, visible, boolean){
        if(visible =='visible'){
            while(await element.visible == boolean){
                await t
                    .wait(10000)
            }
        }
    }
}

export default new HomePage();