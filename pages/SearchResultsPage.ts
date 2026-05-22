import { Page } from '@playwright/test';

export class SearchResultsPage {
  constructor(private page: Page) {}

  flightCards = '.flight-card';
  selectBtn = '.select-flight-btn';

  async selectFirstFlight() {
    await this.page.locator(this.flightCards).first().locator(this.selectBtn).click();
  }
}
