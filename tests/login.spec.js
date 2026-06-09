import { test, expect } from "@playwright/test";

test("Positive LogIn test.", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await expect(page).toHaveTitle("Test Login | Practice Test Automation");
  await page.locator("#username").fill("student");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();
  await expect(page).toHaveURL(
    "https://practicetestautomation.com/logged-in-successfully/",
  );
  await expect(page.locator(".post-title")).toHaveText(
    "Logged In Successfully",
  );
  await expect(
    page.getByText("Congratulations student. You successfully logged in!"),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  //  await page.getByRole("link", { name: "Log out" }).click();
});

test("Negative username test", async ({ page }) => {
  await page.goto("https://practicetestautomation.com/practice-test-login/");
  await expect(page).toHaveTitle("Test Login | Practice Test Automation");
  await page.locator("#username").fill("incorrectUser");
  await page.locator("#password").fill("Password123");
  await page.locator("#submit").click();
  await expect(page.locator("#error")).toBeVisible();
  await expect(page.locator("#error")).toHaveText("Your username is invalid!");
});
