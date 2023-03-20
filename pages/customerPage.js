import { Selector, t } from "testcafe";
// https://demo.nopcommerce.com/customer/info

class CustomerPage {
    constructor() {
        this.orderLink = Selector('a').withText('Orders')
        this.noOrdersLabel = Selector('div.no-data').withText('No orders');
    }
}

export default new CustomerPage();
