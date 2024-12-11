import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  await expect(page.locator("h1")).toHaveText("Landing"); // strict mode violation, test fails
  expect(await page.locator('h1').innerText()).toContain('Landing'); // not async, will fail if site is slow
  await expect(page.getByRole("heading", { name: "Landing" })).toBeVisible(); // this is good
});
