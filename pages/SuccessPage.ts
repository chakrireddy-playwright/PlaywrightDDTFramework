import { BasePage } from './BasePage';

import successLocators from '../locators/successLocators.json';

export class SuccessPage extends BasePage {

    async getSuccessMessage() {

    await this.page.waitForLoadState('networkidle');

    await this.page.locator(
        successLocators.successMessage
    ).waitFor({
        state: 'visible',
        timeout: 15000
    });

    return await this.getText(
        successLocators.successMessage
    );
}

    async getOrderId() {

        const orderId =await this.getText(successLocators.orderId);

        console.log("Order ID:",orderId);

        return orderId;
    }
}