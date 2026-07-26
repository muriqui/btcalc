import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("Home", () => {
  test("should show Set Up button", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "BTcalc", level: 1 }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Set up a new game" }),
    ).toBeVisible();
  });

  test("should not show Continue button when no game is in progress", async ({
    page,
  }) => {
    await expect(
      page.getByRole("link", { name: "Continue your last game" }),
    ).not.toBeVisible();
  });

  test("should show Continue when a game is in progress", async ({ page }) => {
    await test.step("Start to set up a game.", async () => {
      await page.getByRole("button", { name: "Set up a new game" }).click();
      await page.getByRole("link", { name: "Alpha Strike" }).click();
      await expect(page.getByText("BattleTech: Alpha Strike")).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Set up a game", level: 1 }),
      ).toBeVisible();
    });

    await test.step("Click back to the home page and confirm the Set Up and Continue options are present.", async () => {
      await page.getByRole("link", { name: "Home" }).click();
      await expect(
        page.getByRole("heading", { name: "BTcalc", level: 1 }),
      ).toBeVisible();
      await expect(
        page.getByRole("button", { name: "Set up a new game" }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: "Continue your last game" }),
      ).toBeVisible();
    });

    await test.step("should continue where you left off when clicking Continue", async () => {
      await test.step("Clicking Continue should take us back to Setup.", async () => {
        await page
          .getByRole("link", { name: "Continue your last game" })
          .click();
        await expect(page.getByText("BattleTech: Alpha Strike")).toBeVisible();
        await expect(
          page.getByRole("heading", { name: "Set up a game", level: 1 }),
        ).toBeVisible();
      });

      await test.step("Add a player unit.", async () => {
        await page.getByRole("button", { name: "Add a unit" }).click();
        await page.getByLabel("Unit name").fill("Atlas");
        await page.getByRole("button", { name: "Save" }).click();
      });

      await test.step("Add an opponent unit.", async () => {
        await page.getByRole("button", { name: "Add an opponent" }).click();
        await page.getByLabel("Unit name").fill("Dire Wolf");
        await page.getByLabel("Target movement modifier").fill("1");
        await page.getByRole("button", { name: "Save" }).click();
      });

      await test.step("Start the game, which should take us to the Movement phase.", async () => {
        await page.getByRole("button", { name: "Start the game" }).click();
        await expect(page.getByText("BattleTech: Alpha Strike")).toBeVisible();
        await expect(
          page.getByRole("heading", { name: "Movement", level: 1 }),
        ).toBeVisible();
      });

      await test.step("Click back to the home page.", async () => {
        await page.getByRole("link", { name: "Home" }).click();
        await expect(
          page.getByRole("heading", { name: "BTcalc", level: 1 }),
        ).toBeVisible();
      });

      await test.step("Now clicking Continue should take us back to Movement.", async () => {
        await page
          .getByRole("link", { name: "Continue your last game" })
          .click();
        await expect(page.getByText("BattleTech: Alpha Strike")).toBeVisible();
        await expect(
          page.getByRole("heading", { name: "Movement", level: 1 }),
        ).toBeVisible();
      });
    });
  });
});
