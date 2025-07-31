import { test } from "@playwright/test";
test("Test 03: Create task for To-do list", async ({ page }) => {
  await test.step("Click on Bài học 3: Todo Page", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  });

  await test.step("Add 100 items todo", async () => {
    for (let i = 0; i < 100; i++) {
      await page.locator("//input[@id='new-task']").fill("Todo<i>");
      await page.locator("//button[@id='add-task']").click();
    }
  });
  await test.step("Remove items are odd", async () => {
    //Xử lý dialog confirm
    page.on("dialog", async (dialog) => dialog.accept());
    //  const items = await page.locator("ul > li");
    const count = await page.locator("ul > li").count();
    for (let i = count - 1; i >= 0; i--) {
      if (i % 2 !== 0) {
        let item = page.locator("ul > li").nth(i);
        //await item.locator("button#homework-delete").click();
        const deleteBtn = item.locator("button", { hasText: "Delete" });
        if (!(await deleteBtn.isVisible())) {
          console.log(`Không tìm thấy nút xoá ở item thứ ${i}`);
        }
        await deleteBtn.click();
      }
    }
    const remain = await page.locator("ul > li").count();
    console.log(`Tổng số task còn lại sau khi xoá: ${remain}`);
  });
});
