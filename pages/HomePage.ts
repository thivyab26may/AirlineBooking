import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  fromInput = '#from';
  toInput = '#to';
  departDate = '#departDate';
  returnDate = '#returnDate';
  searchBtn = '#searchFlightsBtn';

  async navigate() {
    await this.page.goto('https://your-airline-app.com');
  }

  async enterFrom(city: string) {
    await this.page.fill(this.fromInput, city);
  }

  async enterTo(city: string) {
    await this.page.fill(this.toInput, city);
  }

  async selectDepartDate(date: string) {
    await this.page.fill(this.departDate, date);
  }

  async selectReturnDate(date: string) {
    await this.page.fill(this.returnDate, date);
  }

  async clickSearch() {
    await this.page.click(this.searchBtn);
  }
}
