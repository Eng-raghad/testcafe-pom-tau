import { Selector, t } from "testcafe";
//https://demo.nopcommerce.com/apple-macbook-pro-13-inch

class ProductDetailsPage {
    constructor() {
        this.appleMacHeader = Selector('h1').withText('Apple MacBook Pro 13-inch')
        this.productPrice = Selector('#price-value-4')
        this.productQuantity = Selector('input#product_enteredQuantity_4')
        this.addToCartBtn = Selector('#add-to-cart-button-4')
        this.successMessage = Selector('div.bar-notification.success');
    }

}

export default new ProductDetailsPage();