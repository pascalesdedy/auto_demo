import { test, expect } from '@playwright/test'
import { LoginPage } from '../lib/pages/login_page'

test.describe('Test Login Page',() =>{
    let loginPage: LoginPage;

    test.beforeEach(async({ page }) =>{
        loginPage = new LoginPage(page);
        await loginPage.navigateTo('/login')
    });

    test('Login page has title ', async ({ page }) => {
        await expect(page).toHaveTitle('Automation Exercise - Signup / Login')
    });
    test('verify login with valid credentials', async () => {
        await loginPage.inputLoginEmail.fill(process.env.EMAIL_LOGIN!);
        await loginPage.inputLoginPassword.fill(process.env.PASSWORD_LOGIN!);
        await loginPage.loginButton.click();
        await expect(loginPage.logoutButton).toBeVisible();
    });
    test('verify login with invalid format email', async () => {
        await loginPage.inputLoginEmail.fill('invalidemailformat');
        await loginPage.inputLoginPassword.fill('somepassword');
        await loginPage.loginButton.click();
        const validation = await loginPage.inputLoginEmail.evaluate(
            el => (el as HTMLInputElement).validationMessage
        );
        // console.log('Validation message:', validation); // for debugging purpose only
        await expect(validation).toContain('@');
    });
    test('verify login with invalid credentials', async () => {
        await loginPage.inputLoginEmail.fill('longshot@invalid.com');
        await loginPage.inputLoginPassword.fill('invalidpass');
        await loginPage.loginButton.click();
        await expect(loginPage.errorLoginMessage).toBeVisible();
    });
});
