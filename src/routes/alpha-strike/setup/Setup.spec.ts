import { test, expect } from "@playwright/test";

test.describe("Alpha Strike Setup", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Set up a new game" }).click();
    await page.getByRole("link", { name: "Alpha Strike" }).click();

    await expect(page.getByText("BattleTech: Alpha Strike")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Set up a game", level: 1 }),
    ).toBeVisible();
  });

  test.describe("should not allow the game to start until both sides have at least one unit", () => {
    test("Start button begins disabled", async ({ page }) => {
      await expect(
        page.getByRole("button", { name: "Start the game" }),
      ).toBeDisabled();
    });

    test("Start button remains disabled with only a player unit", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Add a unit" }).click();
      await page.getByLabel("Unit name").fill("Atlas");
      await page.getByRole("button", { name: "Save" }).click();
      await expect(
        page.getByRole("button", { name: "Start the game" }),
      ).toBeDisabled();
    });

    test("Start button remains disabled with only an opponent unit", async ({
      page,
    }) => {
      await page.getByRole("button", { name: "Add an opponent" }).click();
      await page.getByLabel("Unit name").fill("Dire Wolf");
      await page.getByLabel("Target movement modifier").fill("1");
      await page.getByRole("button", { name: "Save" }).click();
      await expect(
        page.getByRole("button", { name: "Start the game" }),
      ).toBeDisabled();
    });

    test("Start button activates when there is a player and an opponent", async ({
      page,
    }) => {
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
      await test.step("Check button status", async () => {
        await expect(
          page.getByRole("button", { name: "Start the game" }),
        ).toBeEnabled();
      });
    });
  });

  test("should enforce required fields on player unit", async ({ page }) => {
    await test.step("form remains open after attempting to save without filling in fields", async () => {
      await page.getByRole("button", { name: "Add a unit" }).click();
      await page.getByRole("button", { name: "Save" }).click();
      await expect(page.getByLabel("Unit name")).toBeVisible();
    });
    await test.step("form closes after saving with unit name filled in", async () => {
      await page.getByLabel("Unit name").fill("Atlas");
      await page.getByRole("button", { name: "Save" }).click();
      await expect(page.getByLabel("Unit name")).not.toBeVisible();
    });
  });

  test("should enforce required fields on opponent unit", async ({ page }) => {
    await test.step("form remains open after attempting to save without filling in fields", async () => {
      await page.getByRole("button", { name: "Add an opponent" }).click();
      await page.getByRole("button", { name: "Save" }).click();
      await expect(page.getByLabel("Unit name")).toBeVisible();
    });
    await test.step("form remains open after attempting to save with only name filled in", async () => {
      await page.getByLabel("Unit name").fill("Dire Wolf");
      await page.getByRole("button", { name: "Save" }).click();
      await expect(page.getByLabel("Unit name")).toBeVisible();
    });
    await test.step("form closes after saving with name and TMM filled in", async () => {
      await page.getByLabel("Target movement modifier").fill("1");
      await page.getByRole("button", { name: "Save" }).click();
      await expect(page.getByLabel("Unit name")).not.toBeVisible();
    });
  });
});
