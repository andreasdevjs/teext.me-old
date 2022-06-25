import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import subscriptionReducer from "./features/subscriptions/subscriptionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});