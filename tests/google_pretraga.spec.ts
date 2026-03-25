import { test, expect } from '@playwright/test';

test('Google pretraga - Stop and Go Beograd', async ({ page }) => {
  // Odlazak na Google početnu stranicu
  await page.goto('https://www.google.com/');
  
  // Klik na polje za pretragu da bi se aktiviralo
  await page.getByRole('combobox', { name: 'Тражи' }).click();
  
  // Unos teksta za pretragu
  await page.getByRole('combobox', { name: 'Тражи' }).fill('stop and go beograd');
  
  // Klik na predloženi rezultat pretrage (autocomplete)
  await page.getByText('stop and go beograd').click();
  
  // Čekamo da se rezultati pretrage učitaju
  await page.waitForLoadState('networkidle');
  
  // Proveravamo da li se pojavila reCAPTCHA (opciono)
  const recaptchaIframe = page.locator('iframe[title*="reCAPTCHA"]').first();
  const isRecaptchaVisible = await recaptchaIframe.isVisible().catch(() => false);
  
  if (isRecaptchaVisible) {
    console.log('reCAPTCHA detektovana - preskačem test jer se ne može automatizovati');
    test.skip(true, 'reCAPTCHA se ne može automatizovati u headless modu');
  }
  
  // Ako nema reCAPTCHA-e, proveravamo da li smo dobili rezultate pretrage
  await expect(page.locator('#search')).toBeVisible();
});