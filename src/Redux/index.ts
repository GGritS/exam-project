import { configureStore } from "@reduxjs/toolkit";
import Test from "./TestSlice/TestSlice";

const store = configureStore({
  reducer: { Test: Test },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
