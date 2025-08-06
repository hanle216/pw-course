import { test } from "@playwright/test";
test("Test 04: Add notes", async ({ page }) => {
  await test.step("Click on Personal Notes paage", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });
  const notes = [
    { title: "title 1", content: "content 1" },
    { title: "title 2", content: "content 2" },
    { title: "title 3", content: "content 3" },
    { title: "title 4", content: "content 4" },
    { title: "title 5", content: "content 5" },
    { title: "title 6", content: "content 6" },
    { title: "title 7", content: "content 7" },
    { title: "title 8", content: "content 8" },
    { title: "title 9", content: "content 9" },
    { title: "title 10", content: "content 10" },
  ];

  await test.step("Fill notes", async () => {
    for (const note of notes) {
      await page.locator("//input[@id='note-title']").fill(note.title);
      await page.locator("//textarea[@id='note-content']").fill(note.content);
      await page.locator("//button[@id='add-note']").click();
    }
  });
  await test.step("Search random title", async () => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)];
    await page.locator("//input[@id='search']").fill(randomNote.title);
  });
});

test("Test 04 Advance: Add notes ", async ({ page }) => {
  let titles: string[] = [];
  let contents: string[] = [];

  await test.step("Navigate to VnExpress page to get data", async () => {
    await page.goto("https://vnexpress.net/khoa-hoc-cong-nghe",{ timeout: 120000 });
    titles = await page.locator("//h3[@class='title-news']").allTextContents();
    console.log(titles);
    contents = await page
      .locator("//p[@class='description']/a")
      .allTextContents();
  });

  await test.step("Navigate to Playwright page -> Lesson 3", async () => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();
  });

  await test.step("Add 10 notes with title and content", async () => {
    for (let i = 0; i < 10; i++) {
      await page
        .locator("//input[@type='text' and @id='note-title']")
        .fill(titles[i]);
      await page.locator('//textarea[@id="note-content"]').fill(contents[i]);
      await page.locator("//button[@id='add-note']").click();
    }
  });

  await test.step("Search random title", async () => {
    await page.locator('//input[@type= "text" and @id= "search"]').fill("Khoa");
  });
});
