import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Home", () => {
  test("should not show Continue button when no game is in progress", async ({
    page,
  }) => {
    await expect(
      page.getByRole("heading", { name: "BTcalc", level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Set up a new game" }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Continue your last game" }),
    ).not.toBeVisible();
  });

  test("should show Continue when a game is in progress", async ({ page }) => {
    // Set up a game.
    await page.getByRole("link", { name: "Set up a new game" }).click();
    await expect(
      page.getByRole("heading", { name: "Set up a game", level: 1 }),
    ).toBeVisible();
    await page.getByLabel("Unit name").fill("Atlas");
    await page.getByLabel("Opponent name").fill("Dire Wolf");
    await page.getByRole("button", { name: "Start game" }).click();

    // Starting the game should take us to the Movement phase.
    await expect(
      page.getByRole("heading", { name: "Movement", level: 1 }),
    ).toBeVisible();

    // Click back to the home page and confirm the Continue option is now present.
    await page.getByRole("link", { name: "Home" }).click();
    await expect(
      page.getByRole("heading", { name: "BTcalc", level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Continue your last game" }),
    ).toBeVisible();

    // Clicking Continue should take us back to Movement.
    await page.getByRole("link", { name: "Continue your last game" }).click();
    await expect(
      page.getByRole("heading", { name: "Movement", level: 1 }),
    ).toBeVisible();
  });
});
