import { createSlice } from "@reduxjs/toolkit";

interface ShortenUrl {
  isCopy: boolean;
}

const initialState: ShortenUrl = {
  isCopy: false,
};

const shortenUrlSlice = createSlice({
  name: "shorten",
  initialState,
  reducers: {
    setCopy: (state) => {
      state.isCopy = true;
    },
    unSetCopy: (state) => {
      state.isCopy = false;
    },
  },
});

export default shortenUrlSlice.reducer;

export const { setCopy, unSetCopy } = shortenUrlSlice.actions;
