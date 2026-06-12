import { BasePage } from './BasePage';
import loginLocators from '../locators/loginLocators.json';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {

    async login(email: string, password: string) {

        await this.fill(loginLocators.emailTextbox, email);
        await this.fill(loginLocators.passwordTextbox, password);

        await this.click(loginLocators.loginButton);
    }

    async getErrorMessage() {

        const errorLocator = this.page.locator(loginLocators.errorMessage);

        await expect(errorLocator).toBeVisible({ timeout: 8000 });

        const text = await errorLocator.textContent();

        return text?.trim() || '';
    }
}