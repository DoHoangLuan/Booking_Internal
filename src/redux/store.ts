import { configureStore } from "@reduxjs/toolkit";
import authStaffReducer from "./authSlice";

export const store = configureStore({
  reducer: {
    authStaff: authStaffReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
