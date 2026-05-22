import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Verify error is shown when return date is earlier than departure date', async ({ page }) => {
  const home = new HomePage(page);

  await home.navigate();
  await home.enterFrom('Toronto');
  await home.enterTo('New York');

  // Invalid date scenario
  await home.selectDepartDate('2024-08-10');
  await home.selectReturnDate('2024-08-05'); // earlier than departure

  await home.clickSearch();

  // Expect an error message
  const errorMessage = page.locator('#dateErrorMessage');
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toHaveText('Return date cannot be earlier than departure date');
});
