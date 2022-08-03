module.exports = Object.freeze({
  // Config and others
  MINIMUM_SATOSHIS: 1000,
  TRANSACTION_WEBHOOK_CALLBACK_URL: "https://aa98-2a02-2e02-3a30-5800-a86c-f20c-44dc-e574.eu.ngrok.io/api/transactions/transactions-webhook",
  WITHDRAWAL_WEBHOOK_CALLBACK_URL: "https://aa98-2a02-2e02-3a30-5800-a86c-f20c-44dc-e574.eu.ngrok.io/api/transactions/withdrawal-webhook",
  DEFAULT_JWT_EXPIRATION: '30 days',

  // Success and error messages
  TRANSACTION_NOT_FOUND: "Transaction not found",
  SERVER_ERROR: "Server error",
  USER_NOT_FOUND: "User not found",
  NO_USERNAME_FOUND: "Sorry, there is no user with this username",
  INVALID_CREDENTIALS: "Invalid credentials",
  FORBIDDEN: 'Forbidden',

  // Status
  PAID_STATUS: "paid",
  CONFIRMED_STATUS: "confirmed",
  COMPLETE_STATUS: "complete"
});