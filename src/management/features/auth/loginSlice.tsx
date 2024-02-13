import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../types";
import { login } from "../../actions/auth";
import { toast } from "react-toastify";

const initialState: LoginUser = {
  loginUser: {
    email: "",
    password: "",
  },
  isLoading: false,
  isDisable: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginInputs: (state, { payload }) => {
      const { name, value } = payload;
      state.loginUser = {
        ...state.loginUser,
        [name]: value,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
      })
      .addCase(login.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isDisable = false;
        if (payload.message === "Network Error") {
          toast.error(
            `${payload.message}! Please check your network and try again!`
          );
        } else {
          toast.error(payload.response.data.message);
        }
      });
  },
});

export default loginSlice.reducer;

export const { loginInputs } = loginSlice.actions;
