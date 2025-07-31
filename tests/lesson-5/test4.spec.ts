import { test } from "@playwright/test";
test("Test 03: Create task for To-do list", async ({ page }) => {
  await test.step("Click on Bài học 4: Personal Notes", async () => {
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
