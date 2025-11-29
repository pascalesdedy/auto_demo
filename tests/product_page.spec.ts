import { test, expect } from '@playwright/test';
import { ProductPage } from '../lib/pages/product_page';

test.describe('Test Product Page',() =>{
    let productPage: ProductPage;

    test.beforeEach(async({ page }) =>{
        productPage = new ProductPage(page);
        await productPage.navigateTo('/products');
    });

    test('Verify Products page element is visible', async () => {
        // page title elements
        await expect(productPage.categoryTitle).toBeVisible();
        await expect(productPage.brandsTitle).toBeVisible();
        await expect(productPage.allProductsTitle).toBeVisible();
        // search product elements
        await expect(productPage.searchInput).toBeVisible();
        await expect(productPage.searchButton).toBeVisible();
        // category products elements
        await expect(productPage.catWomen).toBeVisible();
        await expect(productPage.catMen).toBeVisible();
        await expect(productPage.catKids).toBeVisible();
        // brands products elements
        await expect(productPage.brandPolo).toBeVisible();
        await expect(productPage.brandMadame).toBeVisible();
        await expect(productPage.brandBabyhug).toBeVisible();
    });
    test('Verify category products filter works', async () => {
        await productPage.catWomen.click();
        await productPage.waitForTimeout(1000); // wait for products to load
        await expect(productPage.dressSubCat).toBeVisible();
        await expect(productPage.topsSubCat).toBeVisible();
        await expect(productPage.sareesSubCat).toBeVisible();
        await productPage.catMen.click();
        await expect(productPage.tshirtSubCat).toBeVisible();
        await expect(productPage.jeansSubCat).toBeVisible();
        await productPage.catKids.click();
        await expect(productPage.dresskidsSubCat).toBeVisible();
        await expect(productPage.topshirtsKidsSubCat).toBeVisible();
    });
        
    
    
});