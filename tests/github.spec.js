import { test, expect } from "@playwright/test";

test("Practice Test 1", async ({ page }) => {
    console.log("Starting Practice Test 1");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labs");
    console.log("Ending Practice Test 1");
})

test("Practice Test 2", async ({ page }) => {
    console.log("123Starting Practice Test 2");
    await page.goto("https://www.saucedemo.com/");
    console.log(await page.title());
    expect(page).toHaveTitle("Swag Labsa");
    console.log("Ending Practice Test 2");
})