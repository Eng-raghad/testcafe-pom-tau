import { Selector, t } from "testcafe";
//https://demo.nopcommerce.com/onepagecheckout#opc-billing

class CheckoutPage {
    constructor() {
        this.countryList = Selector('select#BillingNewAddress_CountryId')
        this.stateList = Selector('selectBillingNewAddress_StateProvinceId')
        this.city = Selector('input#BillingNewAddress_City')
        this.addressTxt = Selector('input#BillingNewAddress_Address1')
        this.zipCode = Selector('input#BillingNewAddress_ZipPostalCode')
        this.phoneNumber = Selector('input#BillingNewAddress_PhoneNumber')
        this.continueBtn = Selector('button.button-1.new-address-next-step-button')
        //https://demo.nopcommerce.com/onepagecheckout#opc-shipping_method
        this.nextDayOption = Selector('input#shippingoption_1')
        this.nextShippingBtn = Selector('button.button-1.shipping-method-next-step-button')
        //https://demo.nopcommerce.com/onepagecheckout#opc-payment_method
        this.nextPaymentMethodBtn = Selector('button.button-1.payment-method-next-step-button')
        //https://demo.nopcommerce.com/onepagecheckout#opc-payment_info
        this.nextConfirmBtn = Selector('button.button-1.payment-info-next-step-button')
        //https://demo.nopcommerce.com/onepagecheckout#opc-confirm_order
        this.confirmBtn = Selector('button.button-1.confirm-order-next-step-button')
        this.confirmationMessage = Selector('strong').withText('Your order has been successfully processed!')
    }

    async selectCountry(country) {
        const countryOption = this.countryList.find('option');
        await t
            .click(this.countryList)
            .click(countryOption.innerText(country));

    }


    async selectState(state) {
        const stateOption = this.stateList.find('option');
        await t
            .click(this.stateList)
            .click(stateOption.innerText(state));

    }
}

export default new CheckoutPage();