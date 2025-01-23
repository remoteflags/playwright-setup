import { test, expect } from '@playwright/test';

test('Happy path', async ({ page }) => {
    await page.goto('http://localhost:3001');

    await expect(page.getByRole('heading', { name: 'Welcome to the test' })).toBeVisible(); 
    await expect(page.getByText('This is a paragraph of text.')).toBeVisible();
  });