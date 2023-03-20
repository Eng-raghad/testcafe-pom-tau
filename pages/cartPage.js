import { Selector, t } from "testcafe";
//https://demo.nopcommerce.com/cart

class CartPage {
    constructor() {
        this.termsOfService = Selector('input#termsofservice')
        this.cartTotal = Selector('td.cart-total-right')
        this.checkoutBtn = Selector('button#checkout')
    }
}

export default new CartPage();