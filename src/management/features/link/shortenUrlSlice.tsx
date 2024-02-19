import { createSlice } from "@reduxjs/toolkit";

interface ShortenUrl {
  copyBtnContent: string;
}

const initialState: ShortenUrl = {
  copyBtnContent: "Copy",
};

const shortenUrlSlice = createSlice({
  name: "shortenUrl",
  initialState,
  reducers: {
    btnContent: (state, { payload }) => {
      //
    },
  },
});

export default shortenUrlSlice.reducer;

export const { btnContent } = shortenUrlSlice.actions;
