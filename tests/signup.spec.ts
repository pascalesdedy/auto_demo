import { test, expect } from '@playwright/test';
import { SignupPage } from '../lib/pages/signup_page';
import { LoginPage } from '../lib/pages/login_page';
import { da, faker } from '@faker-js/faker';

const fakeFirstName = faker.person.firstName();
const fakeLastName = faker.person.lastName();
const fakeEmail = faker.internet.email();
const fakePassword = faker.internet.password();
const fakeAddress = faker.location.streetAddress();

test.describe('Signup Page Tests', () => {
    let signupPage: SignupPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        signupPage = new SignupPage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigateTo('/login'); 
        await loginPage.inputSignupName.fill(fakeFirstName + ' ' + fakeLastName);
        await loginPage.inputSignupEmail.fill(fakeEmail);
        await loginPage.signUpButton.click();
    });
    
    test('Verify Account Information Title is Visible', async () => {
        await expect(signupPage.accountTitle).toBeVisible();
    });
    test('Verify all signup page Input elements are visible', async () => {
        await expect(signupPage.radioMr).toBeVisible();
        await expect(signupPage.radioMrs).toBeVisible();
        await expect(signupPage.nameInput).toBeVisible();
        await expect(signupPage.emailInput).toBeVisible();
        await expect(signupPage.passInput).toBeVisible();
        await expect(signupPage.dayInput).toBeVisible();
        await expect(signupPage.monthInput).toBeVisible();
        await expect(signupPage.yearInput).toBeVisible();
        await expect(signupPage.checkboxNewsLetter).toBeVisible();
        await expect(signupPage.checkboxOffer).toBeVisible();
        await expect(signupPage.addressTitle).toBeVisible();
        await expect(signupPage.firstNameInput).toBeVisible();
        await expect(signupPage.lastNameInput).toBeVisible();
        await expect(signupPage.companyInput).toBeVisible();
        await expect(signupPage.addressInput).toBeVisible();
        await expect(signupPage.dropDownCountry).toBeVisible();
        await expect(signupPage.stateInput).toBeVisible();
        await expect(signupPage.cityInput).toBeVisible();
    });
    test('Verify autofill name and email', async () => {
        await expect(signupPage.nameInput).toHaveValue(fakeFirstName + ' ' + fakeLastName);
        await expect(signupPage.emailInput).toHaveValue(fakeEmail);
    });
    test('Verify user can signup successfully then verify login works', async () => {
        await signupPage.radioMr.check();
        await signupPage.passInput.fill(fakePassword);
        await signupPage.dayInput.selectOption('10');
        await signupPage.monthInput.selectOption('January');
        await signupPage.yearInput.selectOption('1990');
        await signupPage.checkboxNewsLetter.check();
        await signupPage.checkboxOffer.check();
        await signupPage.firstNameInput.fill(fakeFirstName);
        await signupPage.lastNameInput.fill(fakeLastName);
        await signupPage.companyInput.fill('Fake Company Inc.');
        await signupPage.addressInput.fill(fakeAddress);
        await signupPage.dropDownCountry.selectOption('Australia');
        await signupPage.stateInput.fill('Eastern Australia');
        await signupPage.cityInput.fill('Sydney');
        await signupPage.zipInput.fill('90001');
        await signupPage.mobileInput.fill('08134567890');
        await signupPage.createAccButton.click();
        await expect(signupPage.accountCreatedTitle).toBeVisible();
        await signupPage.successUrl.includes('account_created'); 
        // continue to logged in home page
        await loginPage.navigateTo('/login'); 
        await expect(loginPage.logoutButton).toBeVisible();
        // logout first
        await loginPage.logoutButton.click();
        // then login
        await loginPage.inputLoginEmail.fill(fakeEmail);
        await loginPage.inputLoginPassword.fill(fakePassword);
        await loginPage.loginButton.click();
        await expect(loginPage.logoutButton).toBeVisible();
        // logout after verification
        await loginPage.logoutButton.click();
    });
    test('Verify signup with existing email shows error', async () => {
        await loginPage.navigateTo('/login'); 
        await loginPage.inputSignupName.fill(process.env.FIRST_NAME!);
        await loginPage.inputSignupEmail.fill(process.env.EMAIL_LOGIN!); 
        await loginPage.signUpButton.click();
        await expect(signupPage.errmessageExistingEmail).toBeVisible();
    });
});