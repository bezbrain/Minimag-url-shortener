import { createSlice } from "@reduxjs/toolkit";
import { logout } from "../../actions/auth";
import { toast } from "react-toastify";
import { Logout } from "../../types";

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
      })
      .addCase(logout.rejected, (state, { payload }: any) => {
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

export default logoutSlice.reducer;
