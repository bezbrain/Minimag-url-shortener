import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../actions/auth";
import { RegUser } from "../../types";
import { toast } from "react-toastify";
import { clearRegisterFields } from "../../../utils/clearAuthField";
import { serverMessage } from "../../../utils/serverMessage";

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
        serverMessage(payload, toast);
      });
  },
});

export default regSlice.reducer;

export const { regInputs } = regSlice.actions;
