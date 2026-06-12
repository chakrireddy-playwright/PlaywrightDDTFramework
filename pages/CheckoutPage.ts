import { BasePage } from './BasePage';

import checkoutLocators from '../locators/checkoutLocators.json';

export class CheckoutPage extends BasePage {

    async selectCountry(countryName: string) {

        const countryBox = this.page.locator(checkoutLocators.countryTextbox);

        await countryBox.click();

        await countryBox.pressSequentially(countryName);

        const options = this.page.locator(checkoutLocators.countryOption);

        await options.first().waitFor({state: 'visible'});

        const count = await options.count();

        for (let i = 0; i < count; i++) {

            const text = await options.nth(i).innerText();

        if (text.trim().toLowerCase() === countryName.toLowerCase()) {

                await options.nth(i).click();

                return;
            }
        }

        throw new Error(`Country '${countryName}' not found in dropdown`);
    }

    async placeOrder() {

        await this.click(checkoutLocators.placeOrderButton);
    }
}