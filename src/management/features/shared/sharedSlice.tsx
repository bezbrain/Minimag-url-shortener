import { createSlice } from "@reduxjs/toolkit";

interface SharedLayout {
  isOpen: boolean;
}

const initialState: SharedLayout = {
  isOpen: false,
};

const sharedSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    isOpenNav: (state) => {
      state.isOpen = true;
    },
    isCloseNav: (state) => {
      state.isOpen = false;
    },
  },
});

export default sharedSlice.reducer;

export const { isOpenNav, isCloseNav } = sharedSlice.actions;
