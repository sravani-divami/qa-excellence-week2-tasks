// tc-002.spec.ts
// Covers: Inventory page - product listing, sorting, add to cart, cart icon, navigation
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users, loginAs } from '../utils';

test.describe('Inventory Page', () => {
  test.beforeEach(async ({ page }) => {
    await loginAs(page, 'standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('Product list is visible and has items', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6); // Sauce Demo always has 6 products
  });

  test('Can sort products by all options', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortBy('az');
    await inventory.sortBy('za');
    await inventory.sortBy('lohi');
    await inventory.sortBy('hilo');
  });

  test('Add to cart updates cart icon', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addToCartByName('Sauce Labs Backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('Product name and image navigate to details', async ({ page }) => {
    await page.locator('.inventory_item_name', { hasText: 'Sauce Labs Backpack' }).click();
    await expect(page).toHaveURL(/inventory-item/);
  });
});
