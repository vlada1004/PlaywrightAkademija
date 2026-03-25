import { test, expect } from '@playwright/test';

test('Provera naslova stranice - MaxWeb Solutions', async ({ page }) => {
  // Odlazak na sajt MaxWeb Solutions
  await page.goto('https://maxwebsolutions.net');
  
  // Proveravamo da li naslov stranice sadrži očekivani tekst
  await expect(page).toHaveTitle(/MaxWeb Solutions|Web Development|Digital Marketing/);
  
  // Čekamo da se glavni sadržaj učita
  await page.waitForLoadState('networkidle');
  
  // Proveravamo da li je neki od ključnih elemenata vidljiv
  await expect(page.locator('body')).toBeVisible();
});