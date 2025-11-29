import { Page,Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class LoginPage extends BasePage {
    public inputSignupName: Locator;
    public inputSignupEmail: Locator;
    public signUpButton: Locator;
    public inputLoginEmail: Locator;
    public inputLoginPassword: Locator;
    public loginButton: Locator;
    public logoutButton: Locator;
    public errorLoginMessage: Locator;
    constructor(loginPage: Page) {
        super(loginPage);
        this.inputSignupName = loginPage.locator('input[data-qa="signup-name"]');
        this.inputSignupEmail = loginPage.locator('input[data-qa="signup-email"]');
        this.signUpButton = loginPage.locator('button[data-qa="signup-button"]');
        this.inputLoginEmail = loginPage.locator('input[data-qa="login-email"]');
        this.inputLoginPassword = loginPage.locator('input[data-qa="login-password"]');
        this.loginButton = loginPage.locator('button[data-qa="login-button"]');
        this.logoutButton = loginPage.locator('a:has-text("Logout")');
        this.errorLoginMessage = loginPage.locator('p:has-text("Your email or password is incorrect!")');

    }
}
