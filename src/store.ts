import { configureStore } from "@reduxjs/toolkit";
import sharedReducer from "./management/features/shared/sharedSlice";
import regReducer from "./management/features/auth/registerSlice";
import loginReducer from "./management/features/auth/loginSlice";
import logoutReducer from "./management/features/auth/logoutSlice";
import linkReducer from "./management/features/link/linkSlice";
import faqReducer from "./management/features/faq/faqSlice";
import shortenUrlReducer from "./management/features/link/shortenUrlSlice";
import QrCodeReducer from "./management/features/link/qrCodeSlice";
import linkDetailsReducer from "./management/features/link/linkDetailsSlice";

export const store = configureStore({
  reducer: {
    sharedStore: sharedReducer,
    regStore: regReducer,
    loginStore: loginReducer,
    logoutStore: logoutReducer,
    linkStore: linkReducer,
    faqStore: faqReducer,
    shortenUrlStore: shortenUrlReducer,
    QrCodeStore: QrCodeReducer,
    linkDetailsStore: linkDetailsReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
