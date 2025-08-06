import { test } from "@playwright/test";
test("Test 03: Create task for To-do list", async ({ page }) => {
  await test.step("Navigate to material Playwright page", async () => {
    await page.goto("https://material.playwrightvn.com/");
  });
  
  await test.step("Click on Todo task page", async () => {
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  await test.step("Thêm mới 100 todo item có nội dung 'Todo<i>'", async () => {
    for (let i = 0; i <= 100; i++) {
      await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
      await page.locator("//button[@id='add-task']").click();
    }
  });

  await test.step("Xoá các todo có số lẻ", async () => {
    //Xử lý dialog confirm
    page.on("dialog", async (dialog) => dialog.accept());

    for (let i = 0; i <= 100; i++) {
      if (i % 2 == 0) {
        await page.locator(`//button[@id='todo-${i}-delete']`).click();
      }
    }
  });
});
