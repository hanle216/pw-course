import { test } from "@playwright/test";
const userName = "Han Le";
const email = "hanlethanhmai@gmail.com";
const bio = "Hello Playwright Typescript!";
const dob = "1999-06-21";
const country = "canada";
const interest = "technology";

test("Test 01: Register Page", async ({ page }) => {
  await test.step("Navigate to material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Click on User Registration", async () => {
    await page.locator("//a[@href='01-xpath-register-page.html']").click();
  });

  await test.step("Fill user resgistration", async () => {
    await page.locator("//input[@id='username']").fill(userName);
    await page.locator("//input[@id='email']").fill(email);
    await page.locator("//input[@id='female']").check();
    await page.locator("//input[@id='traveling']").check();
    await page.locator("//select[@id='interests']").selectOption(interest);
    await page.locator("//select[@id='country']").selectOption(country);
    await page.locator("//input[@id='dob']").fill(dob);
    await page
      .locator("//input[@id='profile']")
      .setInputFiles("tests/lesson-5/images/avatar-profile.png");
    await page.locator("//textarea[@id='bio']").pressSequentially(bio);
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
    await page.locator("//input[@id='rating']").fill("10");
    await page.locator("//input[@id='favcolor']").fill("#00fffb");
    await page.locator("//div[contains(text(), 'Hover over me')]").hover();
    await page.locator("//input[@id='newsletter']").check();
    //  await page.locator("//input[@id='toggleOption']").check();
    // Cách click vào slider (nếu input bị ẩn)
    await page.locator("//label[@class='switch']/span").click();
  });
  await test.step("Click Register button", async () => {
    await page.locator("//button[@type='submit']").click();
  });
});
