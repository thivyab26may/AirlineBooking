import { Page, expect } from '@playwright/test';

export class PaymentPage {
  constructor(private page: Page) {}

  cardNumber = '#cardNumber';
  expiry = '#expiry';
  cvv = '#cvv';
  confirmBtn = '#confirmBooking';
  successMsg = '#bookingSuccess';

  async enterPaymentDetails(card: string, exp: string, cvv: string) {
    await this.page.fill(this.cardNumber, card);
    await this.page.fill(this.expiry, exp);
    await this.page.fill(this.cvv, cvv);
  }

  async confirmBooking() {
    await this.page.click(this.confirmBtn);
  }

  async verifySuccessMessage(expected: string) {
    await expect(this.page.locator(this.successMsg)).toHaveText(expected);
  }
}
