import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../actions/auth";
import { RegUser } from "../../types";

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

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default regSlice.reducer;

export const { regInputs } = regSlice.actions;
