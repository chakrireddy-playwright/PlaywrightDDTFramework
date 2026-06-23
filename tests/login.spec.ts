import { test, expect } from '../fixtures/baseFixture';

import loginData from '../testdata/loginData.json';

import { env } from '../config/env';

for (const data of loginData) {

        test(data.testName,async ({page,loginPage,dashboardPage,cartPage,
                                  checkoutPage,successPage,logoutPage}) => {

            await page.goto(env.baseUrl);

            await loginPage.login(data.email,data.password);

            if (data.expectedResult === 'success') {

                await expect(page).toHaveURL(/dashboard/);

                await dashboardPage.addProductToCart(data.productName);

                await dashboardPage.goToCart();

                const isProductPresent =await cartPage.validateProductInCart(data.productName);

                expect(isProductPresent).toBeTruthy();
                
                await cartPage.clickCheckout();

                await checkoutPage.selectCountry(data.country);

                await checkoutPage.placeOrder();

                const successMessage =await successPage.getSuccessMessage();

                console.log('Success Message:',successMessage);

                
                const orderId =await successPage.getOrderId();

                console.log('Order ID:',orderId);

                await logoutPage.logout();

                await expect(page).toHaveURL(/auth\/login/);

                console.log('Logout Successful');
            }

            else {

                const errorMsg =await loginPage.getErrorMessage();

                expect(errorMsg).toContain('Incorrect');
            }
        }
    );
}