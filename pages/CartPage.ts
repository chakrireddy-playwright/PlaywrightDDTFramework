import { BasePage } from './BasePage';
import cartLocators from '../locators/cartLocators.json';
import { expect } from '@playwright/test';

export class CartPage extends BasePage {

 async validateProductInCart(productName: string) {

    const product = this.page.locator('h3').filter({
        hasText: productName
    });

    await expect(product).toBeVisible({
        timeout: 10000
    });

    return true;
}
    async clickCheckout() {

        const checkoutBtn = this.page.locator(
            cartLocators.checkoutButton
        );

        await expect(checkoutBtn).toBeVisible({
            timeout: 10000
        });

        await checkoutBtn.click();
    }
}