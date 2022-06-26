import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./features/menu/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuSlice
  }
});