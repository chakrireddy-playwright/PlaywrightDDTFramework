import { BasePage } from './BasePage';

import logoutLocators from '../locators/logoutLocators.json';

export class LogoutPage extends BasePage {

    async logout() {

        await this.click(
            logoutLocators.logoutButton
        );
    }
}