import { createSlice } from "@reduxjs/toolkit";

interface RegUser {
  regUser: {
    username: string;
    email: string;
    password: string;
    retypePassword: string;
  };
  isLoading: boolean;
  isMessage: string;
}

const initialState: RegUser = {
  regUser: {
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  },
  isLoading: false,
  isMessage: "",
};

const regSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    regInputs: (state, { payload }) => {
      const { name, value } = payload;
      state.regUser = {
        ...state.regUser,
        [name]: value,
      };
    },
  },
});

export default regSlice.reducer;

export const { regInputs } = regSlice.actions;
