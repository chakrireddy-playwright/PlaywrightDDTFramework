import { test as base } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { SuccessPage } from '../pages/SuccessPage';
import { LogoutPage } from '../pages/LogoutPage';

type MyFixtures = {

    loginPage: LoginPage;

    dashboardPage: DashboardPage;

    cartPage: CartPage;

    checkoutPage: CheckoutPage;

    successPage: SuccessPage;

    logoutPage: LogoutPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {

        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {

        await use(new DashboardPage(page));
    },

    cartPage: async ({ page }, use) => {

        await use(new CartPage(page));
    },

    checkoutPage: async ({ page }, use) => {

        await use(new CheckoutPage(page));
    },

    successPage: async ({ page }, use) => {

        await use(new SuccessPage(page));
    },

    logoutPage: async ({ page }, use) => {

        await use(new LogoutPage(page));
    }
});

export { expect } from '@playwright/test';