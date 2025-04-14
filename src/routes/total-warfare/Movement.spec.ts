import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/total-warfare");
  await page.getByLabel("Unit name").fill("Atlas");
  await page.getByLabel("Opponent name").fill("Dire Wolf");
  await page.getByRole("button", { name: "Start game" }).click();
  await expect(page.getByText("BattleTech: Total Warfare")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Movement", level: 1 }),
  ).toBeVisible();
});

test.describe("Movement", () => {
  test("clicking a unit should take you to that unit's movement options", async ({
    page,
  }) => {
    await expect(page.getByRole("link", { name: "Atlas" })).toBeVisible();
    // TODO: Test that clicking the link takes you to the unit options page.
  });

  test("clicking an opponent should take you to that opponents's movement options", async ({
    page,
  }) => {
    await expect(page.getByRole("link", { name: "Dire Wolf" })).toBeVisible();
    // TODO: Test that clicking the link takes you to the opponent options page.
  });

  // TODO: Error state for skipped movement on a unit or opponent.

  test("clicking the Next button after all units have moved takes you to the Weapon Attacks page", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Next: Weapon attacks" }).click();
    await expect(page.getByText("BattleTech: Total Warfare")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Weapon Attacks", level: 1 }),
    ).toBeVisible();
  });
});
