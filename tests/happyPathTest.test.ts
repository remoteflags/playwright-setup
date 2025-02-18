import { test, expect } from '@playwright/test';

test('Happy path', async ({ page }) => {
    await page.goto('http://localhost:3001');

    await expect(page.getByTestId("page-title")).toBeVisible(); 
    const paragraphLocator = page.locator(
      'xpath=//p[contains(text(), "This is a paragraph of text.")]'
    );
    await expect(paragraphLocator).toBeVisible();
  });