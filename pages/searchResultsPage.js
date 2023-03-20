import { Selector, t } from "testcafe";
//https://demo.nopcommerce.com/search?q=apple

class SearchResultsPage {
    constructor() {
        this.productTitle = Selector('a').withText('Apple MacBook Pro 13-inch')
    }
}

export default new SearchResultsPage();