# AirlineBookingSystem

🧱 **Framework Architecture**

Page Object Model (POM)
Each page of the airline booking application is represented as a separate class:

HomePage — Search inputs, Date pickers, Navigation

SearchResultsPage — Flight list, Selection

FlightDetailsPage — Fare details, Continue

PassengerDetailsPage — Passenger form

PaymentPage — Payment + Confirmation

This ensures clean separation of concerns and maximum reusability.

🚀 **Installation & Setup**

1. Install dependencies

2. Install Playwright browsers

3. Run all tests
   
<img width="722" height="54" alt="Screenshot 2026-05-24 at 3 25 43 PM" src="https://github.com/user-attachments/assets/dbc804f8-1976-4fc4-91f2-e58cecea481c" />

4. View HTML report

<img width="724" height="54" alt="Screenshot 2026-05-24 at 3 24 44 PM" src="https://github.com/user-attachments/assets/c7a75fb0-d1f3-499a-ad74-aa8d3074b33f" />


🧩 **Key Features**

Reusable POM classes

Async/await Playwright flow

Locator‑first design

Cross‑browser support

Configurable test runner

🛠️ **Tech Stack**

Playwright (UI automation)

TypeScript

Playwright Test Runner

Page Object Model (POM)

🧪 **Test Cases**

**1. Round‑Trip Booking Flow**

📁File: tests/booking/booking-flow.spec.ts

Covers:

Entering origin & destination

Selecting depart & return date

Selecting a flight

Entering passenger details

Entering payment details

Verifying booking confirmation

**2. One‑Way Flight Search**

📁File: tests/booking/one-way-search.spec.ts

Validates:

One‑way search (no return date)

Search results load successfully

At least one flight is available

This test ensures search functionality works independently of booking.

**3. Negative Test — Invalid Dates (Return < Departure)**

📁 File: tests/booking/invalid-dates.spec.ts

Validates:

Ensures the app validates date logic

Confirms UI displays a clear error message

Prevents invalid flight searches

