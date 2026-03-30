import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://maxwebsolutions.net/");
  await page
    .getByRole("banner")
    .getByRole("link", { name: "Contact us" })
    .click();
  await page.locator('input[name="your-name"]').click();
  await page.locator('input[name="your-name"]').fill("Test Korisnik");
  await page.locator('input[name="your-email"]').click();
  await page.locator('input[name="your-email"]').fill("testmail@test.com");
  await page.locator('textarea[name="your-message"]').click();
  await page.locator('textarea[name="your-message"]').fill("Test mejl form");
  await page.getByRole("button", { name: "Send" }).click();
  await page
    .getByLabel("Contact form")
    .getByText("Thank you for your message. It has been sent.")
    .click();
});
