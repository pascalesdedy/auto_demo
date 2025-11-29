import { Locator, Page } from '@playwright/test';
import { BasePage } from './base_page';

export class HomePage extends BasePage {
    public slider: Locator;
    public menuHome: Locator;
    public menuProducts: Locator;   
    public menuCart: Locator;
    public menuSignupLogin: Locator;
    public userLoggedIn: Locator;
    constructor(homePage: Page) {
        super(homePage);
        this.slider = homePage.locator('div#slider-carousel');
        this.menuHome = homePage.locator('a:has-text("Home")');
        this.menuProducts = homePage.locator('a:has-text("Products")');
        this.menuCart = homePage.locator('//*[@id="header"]/div/div/div/div[2]/div/ul/li[3]/a');
        this.menuSignupLogin = homePage.locator('a:has-text("Signup / Login")');
        this.userLoggedIn = homePage.locator('a:has-text("Logged in as")');
    }
}