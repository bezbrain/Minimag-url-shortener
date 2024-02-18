import { createSlice } from "@reduxjs/toolkit";
import { Faq } from "../../types";

const initialState: Faq = {
  openIndex: null,
};

const faqSlice = createSlice({
  name: "faq",
  initialState,
  reducers: {
    openFaq: (state, { payload }) => {
      state.openIndex = payload;
    },
  },
});

export default faqSlice.reducer;

export const { openFaq } = faqSlice.actions;
