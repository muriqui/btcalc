import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/total-warfare");
  await page.getByLabel("Unit name").fill("Atlas");
  await page.getByLabel("Opponent name").fill("Dire Wolf");
  await page.getByRole("button", { name: "Start game" }).click();
  await page.goto("/total-warfare/weapons");
  await expect(page.getByText("BattleTech: Total Warfare")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Weapon Attacks", level: 1 }),
  ).toBeVisible();
});

test.describe("Select Targets", () => {
  test("clicking a unit takes you that unit's target options", async ({
    page,
  }) => {
    await expect(page.getByRole("link", { name: "Atlas" })).toBeVisible();
    // TODO: Test that clicking the link takes you to the unit options page.
  });

  // TODO: Error state for skipped selection on a unit.

  test("clicking the Next button after all units have selected targets takes you to the Physical Attacks page", async ({
    page,
  }) => {
    await expect(
      page.getByRole("link", { name: "Next: Physical attacks" }),
    ).toBeVisible();
    // TODO: Test that clicking the link takes you to the page.
  });
});
