import { Page } from '@playwright/test';

export class FlightDetailsPage {
  constructor(private page: Page) {}

  continueBtn = '#continueToPassenger';

  async continueToPassenger() {
    await this.page.click(this.continueBtn);
  }
}
