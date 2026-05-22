import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SearchResultsPage } from '../../pages/SearchResultsPage';

test('Verify user can search for a one-way flight', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);

  await home.navigate();
  await home.enterFrom('Toronto');
  await home.enterTo('Vancouver');
  await home.selectDepartDate('2024-07-05');

  // For one-way, skip return date
  await home.clickSearch();

  // Validate results are displayed
  const flightCount = await page.locator(results.flightCards).count();
  expect(flightCount).toBeGreaterThan(0);
});
