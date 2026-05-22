import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';
import { SearchResultsPage } from '../../pages/SearchResultsPage';
import { FlightDetailsPage } from '../../pages/FlightDetailsPage';
import { PassengerDetailsPage } from '../../pages/PassengerDetailsPage';
import { PaymentPage } from '../../pages/PaymentPage';

test('Verify user can book a round-trip flight', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);
  const flightDetails = new FlightDetailsPage(page);
  const passenger = new PassengerDetailsPage(page);
  const payment = new PaymentPage(page);

  await home.navigate();
  await home.enterFrom('Toronto');
  await home.enterTo('New York');
  await home.selectDepartDate('2024-06-10');
  await home.selectReturnDate('2024-06-20');
  await home.clickSearch();

  await results.selectFirstFlight();
  await flightDetails.continueToPassenger();

  await passenger.fillPassengerDetails('John', 'Doe', 'john@test.com', '1234567890');
  await passenger.continueToPayment();

  await payment.enterPaymentDetails('4111111111111111', '12/28', '123');
  await payment.confirmBooking();
  await payment.verifySuccessMessage('Your booking is confirmed');
});
