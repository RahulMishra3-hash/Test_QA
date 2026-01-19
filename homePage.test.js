// homePage.test.js
// Test cases for Home Page

const { test, expect } = require('@playwright/test');

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('https://your-homepage-url.com');
    await expect(page).toHaveTitle(/Home/i);
  });

  test('should display the main header', async ({ page }) => {
    await page.goto('https://your-homepage-url.com');
    const header = await page.locator('h1');
    await expect(header).toHaveText(/Welcome/i);
  });

  test('should have a login button', async ({ page }) => {
    await page.goto('https://your-homepage-url.com');
    const loginButton = await page.locator('button', { hasText: 'Login' });
    await expect(loginButton).toBeVisible();
  });
});
