import { test, expect } from "@playwright/test";

test("Provera navigacije i servisa", async ({ page }) => {
  await page.goto("https://stopandgosrbija.com/");
  await page.getByRole("link", { name: "Detaljnije" }).first().click();
  await page
    .locator("#menu-item-402")
    .getByRole("link", { name: "Kontakt" })
    .click();
  await page.getByRole("textbox", { name: "Vaša poruka *" }).click();
});
