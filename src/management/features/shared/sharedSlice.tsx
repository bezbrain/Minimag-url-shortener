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
      console.log(state);
    },
  },
});

export default sharedSlice.reducer;

export const { isOpenNav } = sharedSlice.actions;
