import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./management/features/shared/sharedSlice";
import regReducer from "./management/features/auth/registerSlice";
import loginReducer from "./management/features/auth/loginSlice";
import logoutReducer from "./management/features/auth/logoutSlice";

export const store = configureStore({
  reducer: {
    sharedStore: sharedReducer,
    regStore: regReducer,
    loginStore: loginReducer,
    logoutStore: logoutReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
