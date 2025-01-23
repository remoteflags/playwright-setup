import { test, expect } from '@playwright/test';

test('Happy path', async ({ page }) => {
    await page.goto('http://localhost:3001');

    await expect(page.getByRole('heading', { name: 'Test to fail' })).toBeVisible(); 
    await expect(page.getByText('This is a paragraph is not a text.')).toBeVisible();
  });