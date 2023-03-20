import { Selector, t } from "testcafe";

// https://demo.nopcommerce.com/register
class RegisterPage {
    constructor() {
        this.registerHeader = Selector('h1').withText('Register')
        this.genderSelection = Selector('#gender-female')
        this.firstName = Selector('#FirstName')
        this.lastName = Selector('#LastName')
        this.dateOfBirthDayList = Selector("select[name='DateOfBirthDay']")
        this.dateOfBirthMonthList = Selector("select[name='DateOfBirthMonth'")
        this.dateOfBirthYearList = Selector("select[name='DateOfBirthYear'")
        this.emailAddress = Selector('#Email')
        this.password = Selector('#Password')
        this.confirmPassword = Selector('#ConfirmPassword')
        this.registerBtn = Selector('#register-button.button-1.register-next-step-button')
        this.registrationMessage = Selector('div.result').withText('Your registration completed');
    }

    async selectDay(day) {
        const dayOption = Selector(this.dateOfBirthDayList).find('option');

        await t
            .click(this.dateOfBirthDayList)
            .click(dayOption.withText(day));

    }
    async selectMonth(month) {
        const monthOption = Selector(this.dateOfBirthMonthList).find('option');

        await t
            .click(this.dateOfBirthMonthList)
            .click(monthOption.withText(month));

    }

    async selectYear(year) {
        const yearOption = Selector(this.dateOfBirthYearList).find('option');

        await t
            .click(this.dateOfBirthYearList)
            .click(yearOption.withText(year));

    }

}


export default new RegisterPage();