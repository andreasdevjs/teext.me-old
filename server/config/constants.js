module.exports = Object.freeze({
  // Config and others
  MINIMUM_SATOSHIS: 1000,
  WEBHOOK_CALLBACK_URL: "https://22cc-2a02-2e02-3a30-5800-5144-28ed-d6ae-9bc2.eu.ngrok.io/api/transactions/webhooks",
  DEFAULT_JWT_EXPIRATION: '30 days',

  // Success and error messages
  TRANSACTION_NOT_FOUND: "Transaction not found",
  SERVER_ERROR: "Server error",
  USER_NOT_FOUND: "User not found",
  NO_USERNAME_FOUND: "Sorry, there is no user with this username",
  INVALID_CREDENTIALS: "Invalid credentials"
});