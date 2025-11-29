import { Page, Locator } from '@playwright/test';
import { BasePage } from './base_page';

export class ProductPage extends BasePage {
    public allProductsTitle: Locator;
    public categoryTitle: Locator;
    public brandsTitle: Locator;
    public menuProducts: Locator;     
    public searchInput: Locator;
    public searchButton: Locator;
    public searchedProductsTitle: Locator;
    public catWomen: Locator;
    public dressSubCat: Locator;
    public topsSubCat: Locator;
    public sareesSubCat: Locator;
    public catMen: Locator;
    public tshirtSubCat: Locator;
    public jeansSubCat: Locator;
    public catKids: Locator;
    public dresskidsSubCat: Locator;
    public topshirtsKidsSubCat: Locator;
    public brandPolo: Locator;
    public brandMadame: Locator;
    public brandBabyhug: Locator;

    constructor(productPage: Page) {
        super(productPage);
        this.menuProducts = productPage.locator('a:has-text("Products")');
        //  Titles locators
        this.allProductsTitle = productPage.locator('h2:has-text("All Products")');
        this.categoryTitle = productPage.locator('h2:has-text("Category")');
        this.brandsTitle = productPage.locator('h2:has-text("Brands")');
        //Search Product locators
        this.searchInput = productPage.locator('input#search_product');
        this.searchButton = productPage.locator('button#submit_search');
        this.searchedProductsTitle = productPage.locator('h2:has-text("Searched Products")');
        // Category Products locators
        this.catWomen = productPage.locator('//*[@id="accordian"]/div[1]/div[1]/h4/a');
        this.catMen = productPage.locator('//*[@id="accordian"]/div[2]/div[1]/h4/a');
        this.catKids = productPage.locator('//*[@id="accordian"]/div[3]/div[1]/h4/a');
        // Sub-category women locators
        this.dressSubCat = productPage.locator('a:has-text("Dress")').first();
        this.topsSubCat = productPage.locator('a:has-text("Tops")').first();
        this.sareesSubCat = productPage.locator('a:has-text("Saree")');
        // Sub-category men locators
        this.tshirtSubCat = productPage.locator('a:has-text("Tshirts")');
        this.jeansSubCat = productPage.locator('a:has-text("Jeans")');
        // Sub-category kids locators
        this.dresskidsSubCat = productPage.locator('//*[@id="Kids"]/div/ul/li[1]/a');
        this.topshirtsKidsSubCat = productPage.locator('//*[@id="Kids"]/div/ul/li[2]/a');
        // Brands Products locators
        this.brandPolo = productPage.locator('a:has-text("Polo")');
        this.brandMadame = productPage.locator('a:has-text("Madame")');
        this.brandBabyhug = productPage.locator('a:has-text("Babyhug")');
    };
}