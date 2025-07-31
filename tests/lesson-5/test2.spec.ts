import { test } from "@playwright/test";
test("Test 02: Add products to cart", async ({ page }) => {
  await test.step("Click on Bài học 2: Product Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='02-xpath-product-page.html']").click();
  });
  await test.step("Add products to cart", async () => {
    // for (let i = 0; i < 2; i++) {
    //   await page.locator("//button[@data-product-id='1']").click();
    // }
    // for (let i = 0; i < 3; i++) {
    //   await page.locator("//button[@data-product-id='2']").click();
    // }
    // await page.locator("//button[@data-product-id='3']").click();

    const products = [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
      { id: 3, quantity: 1 },
    ];
    for (const product of products) {
      for (let i = 0; i < product.quantity; i++) {
        await page
          .locator(`//button[@data-product-id='${product.id}']`)
          .click();
      }
    }
  });
});
