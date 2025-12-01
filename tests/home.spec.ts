import { test, expect } from '@playwright/test';
import { HomePage } from '../lib/pages/home_page';

test.describe('Test Home Page for non Logged User',() =>{
    let homePage: HomePage;

    test.beforeEach(async({ page }) =>{
        homePage = new HomePage(page);
        await homePage.navigateTo('/');
    });

    test('Home page has title Automation Exercise', async ({ page }) => {
        await expect(page).toHaveTitle('Automation Exercise');
    });
    test('Verify home page slider is visible', async () => {
        await expect(homePage.slider).toBeVisible();
    });
    test('Verify home page menu items are visible', async () => {
        await expect(homePage.menuHome).toBeVisible();
        await expect(homePage.menuProducts).toBeVisible();
        await expect(homePage.menuCart).toBeVisible();
    });
    
});

test.describe('Test Home Page for Logged User',() =>{
});