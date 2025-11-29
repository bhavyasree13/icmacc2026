import { test, expect } from "@playwright/test";

test("Navbar navigation works for existing links", async ({ page }) => {
  await page.goto("/");

  const routes = [
    { label: "Home", path: "/" },
    { label: "Acknowledgement", path: "/acknowledgement" },
  ];

  for (const r of routes) {
    const link = page.locator(`nav >> text=${r.label}`);

    // Check if the link exists on the page
    const count = await link.count();

    if (count === 0) {
      console.log(`🔹 Skipping '${r.label}' — link not found on page.`);
      continue;
    }

    await link.first().click();
    await expect(page).toHaveURL(new RegExp(`${r.path}$`));

    if (r.path !== "/") {
      await page.goto("/");
    }
  }
});
