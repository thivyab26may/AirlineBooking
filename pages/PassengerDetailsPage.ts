import { Page } from '@playwright/test';

export class PassengerDetailsPage {
  constructor(private page: Page) {}

  firstName = '#firstName';
  lastName = '#lastName';
  email = '#email';
  phone = '#phone';
  continueBtn = '#continueToPayment';

  async fillPassengerDetails(fName: string, lName: string, email: string, phone: string) {
    await this.page.fill(this.firstName, fName);
    await this.page.fill(this.lastName, lName);
    await this.page.fill(this.email, email);
    await this.page.fill(this.phone, phone);
  }

  async continueToPayment() {
    await this.page.click(this.continueBtn);
  }
}
