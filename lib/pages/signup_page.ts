import { Page,Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class SignupPage extends BasePage {
    public accountTitle: Locator;
    public radioMr: Locator;
    public radioMrs: Locator;
    public nameInput: Locator;
    public emailInput: Locator;
    public passInput: Locator;
    public dayInput: Locator;
    public monthInput: Locator;
    public yearInput: Locator;
    public checkboxNewsLetter: Locator;
    public checkboxOffer: Locator;
    public addressTitle: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public companyInput: Locator;
    public addressInput: Locator;
    public dropDownCountry: Locator;
    public stateInput: Locator;
    public cityInput: Locator;
    public zipInput: Locator;
    public mobileInput: Locator;
    public createAccButton: Locator;
    public accountCreatedTitle: Locator;
    public buttonContinue: Locator;
    public successUrl: string;
    public errmessageExistingEmail: Locator;

    constructor(signupPage: Page) {
        super(signupPage)
        this.accountTitle = signupPage.locator('h2:has-text("Enter Account Information")');
        this.radioMr = signupPage.locator('input#id_gender1');
        this.radioMrs = signupPage.locator('input#id_gender2');
        this.nameInput = signupPage.locator('input#name');
        this.emailInput = signupPage.locator('input#email');
        this.passInput = signupPage.locator('input#password');
        this.dayInput = signupPage.locator('select#days');
        this.monthInput = signupPage.locator('select#months');
        this.yearInput = signupPage.locator('select#years');
        this.checkboxNewsLetter = signupPage.locator('input#newsletter');
        this.checkboxOffer = signupPage.locator('input#optin');
        this.addressTitle = signupPage.locator('h2:has-text("Address Information")');
        this.firstNameInput = signupPage.locator('input#first_name');
        this.lastNameInput = signupPage.locator('input#last_name');
        this.companyInput = signupPage.locator('input#company');
        this.addressInput = signupPage.locator('input#address1');
        this.dropDownCountry = signupPage.locator('select#country');
        this.stateInput = signupPage.locator('input#state');
        this.cityInput = signupPage.locator('input#city');
        this.zipInput = signupPage.locator('input#zipcode');
        this.mobileInput = signupPage.locator('input#mobile_number');
        this.createAccButton = signupPage.locator('button[data-qa="create-account"]');
        this.accountCreatedTitle = signupPage.locator('h2[data-qa="account-created"]');
        this.buttonContinue = signupPage.locator('a[data-qa="continue-button"]');
        this.successUrl = 'https://automationexercise.com/account_created';
        this.errmessageExistingEmail = signupPage.locator('p:has-text("Email Address already exist!")');
    }


}