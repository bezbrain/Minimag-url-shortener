import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./management/features/shared/sharedSlice";

export const store = configureStore({
  reducer: {
    sharedStore: sharedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
