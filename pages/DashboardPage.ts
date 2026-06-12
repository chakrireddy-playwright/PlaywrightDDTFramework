import { BasePage } from './BasePage';

import dashboardLocators from '../locators/dashboardLocators.json';

export class DashboardPage extends BasePage {

    async addProductToCart(productName: string) {

    const products = this.page.locator(dashboardLocators.productCards);

    const count = await products.count();

    for (let i = 0; i < count; i++) {

        const product = products.nth(i);

        const title = await product.locator(dashboardLocators.productName).textContent();

        if (title?.trim() === productName) {

            await product.locator(dashboardLocators.addToCartButton).click();

            await this.page.waitForLoadState('networkidle');

            break;
        }
    }
}

  async goToCart() {

    await Promise.all([
        this.page.waitForURL('**/cart'),
        this.click(dashboardLocators.cartButton)
    ]);

}
}