import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./management/features/shared/sharedSlice";
import regReducer from "./management/features/auth/registerSlice";

export const store = configureStore({
  reducer: {
    sharedStore: sharedReducer,
    regStore: regReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
