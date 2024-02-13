import { createSlice } from "@reduxjs/toolkit";
import { register } from "../../actions/auth";
import { RegUser } from "../../types";
import { toast } from "react-toastify";
import clearAuthFields from "../../../utils/clearAuthField";

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
        clearAuthFields(state.regUser);
      })
      .addCase(register.rejected, (state, { payload }: any) => {
        toast.error(payload.response.data.message);
        state.isLoading = false;
        state.isDisable = false;
      });
  },
});

export default regSlice.reducer;

export const { regInputs } = regSlice.actions;
