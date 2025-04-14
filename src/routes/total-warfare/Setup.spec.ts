import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/total-warfare");
  await expect(page.getByText("BattleTech: Total Warfare")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Set up a game", level: 1 }),
  ).toBeVisible();
});

test.describe("Setup", () => {
  test("should raise an error if neither side has a named unit", async ({
    page,
  }) => {
    await page.getByRole("button", { name: "Start game" }).click();
    await expect(
      page.getByRole("heading", { name: "Set up a game", level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("alert")).toContainText(
      "Each team must have at least one named unit.",
    );
  });

  test("should raise an error if player has no named units", async ({
    page,
  }) => {
    await page.getByLabel("Opponent name").fill("Dire Wolf");
    await page.getByRole("button", { name: "Start game" }).click();
    await expect(
      page.getByRole("heading", { name: "Set up a game", level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("alert")).toContainText(
      "Each team must have at least one named unit.",
    );
  });

  test("should raise an error if opponent has no named units", async ({
    page,
  }) => {
    await page.getByLabel("Unit name").fill("Atlas");
    await page.getByRole("button", { name: "Start game" }).click();
    await expect(
      page.getByRole("heading", { name: "Set up a game", level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("alert")).toContainText(
      "Each team must have at least one named unit.",
    );
  });

  test("should allow the game to start if both sides have at least one named unit", async ({
    page,
  }) => {
    await page.getByLabel("Unit name").fill("Atlas");
    await page.getByLabel("Opponent name").fill("Dire Wolf");
    await page.getByRole("button", { name: "Start game" }).click();
    await expect(
      page.getByRole("heading", { name: "Movement", level: 1 }),
    ).toBeVisible();
    await expect(page.getByRole("alert")).not.toBeVisible();
  });
});
