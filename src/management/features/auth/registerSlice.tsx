import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../actions/auth";
import { RegUser } from "../../types";
import { toast } from "react-toastify";
import { clearRegisterFields } from "../../../utils/clearAuthField";

const initialState: RegUser = {
  regUser: {
    username: "",
    email: "",
    password: "",
    retypePassword: "",
  },
  isLoading: false,
  isDisable: false,
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
        state.isDisable = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
        clearRegisterFields(state.regUser);
      })
      .addCase(register.rejected, (state, { payload }: any) => {
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

export default regSlice.reducer;

export const { regInputs } = regSlice.actions;
