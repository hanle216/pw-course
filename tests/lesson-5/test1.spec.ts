import { test } from "@playwright/test";
test("Test 01: Fill the information", async ({ page }) => {
  await test.step("Click to Bài học 1: Register Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });
  await test.step("Fill user resgistration", async () => {
    await page.locator("//input[@id='username']").fill("Mai Han");
    await page.locator("//input[@id='email']").fill("hanlethanhmai@gmail.com");
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption("technology");
    await page.locator("//select[@id='country']").selectOption("canada");
    await page.locator("//input[@id='dob']").fill("1999-06-21");
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/lesson-5/images/avatar-profile.png");
    await page
      .locator("//textarea[@id='bio']")
      .pressSequentially("Hello Playwright Typescript!");
    // await page.evaluate(() => {
    //   const slider = document.getElementById("rating") as HTMLInputElement;
    //   slider.value = "10";
    //   slider.dispatchEvent(new Event("input"));
    //   slider.dispatchEvent(new Event("change"));
    // });
    // await page.locator("//input[@id='favcolor']").click();
    // await page.evaluate(() => {
    //   const colorInput = document.getElementById(
    //     "favcolor"
    //   ) as HTMLInputElement;
    //   colorInput.value = "#7e83c9";
    //   colorInput.dispatchEvent(new Event("input"));
    //   colorInput.dispatchEvent(new Event("change"));
    // });
    await page.locator("//div[contains(text(), 'Hover over me')]").hover();
    await page.locator("//input[@id='newsletter']").check();
    //  await page.locator("//input[@id='toggleOption']").check();
    // Cách click vào slider (nếu input bị ẩn)
    await page.locator("//label[@class='switch']/span").click();
    await page.locator("//button[@type='submit']").click();
  });
});
