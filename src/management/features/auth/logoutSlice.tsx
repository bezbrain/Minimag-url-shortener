import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../actions/auth";
import { toast } from "react-toastify";
import { Logout } from "../../types";
import { serverMessage } from "../../../utils/serverMessage";

const initialState: Logout = {
  isLoading: false,
  isDisable: false,
};

const logoutSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .addCase(logout.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isDisable = false;
        serverMessage(payload, toast);
      });
  },
});

export default logoutSlice.reducer;
