import { createSlice } from "@reduxjs/toolkit";
import { getLinks } from "../../actions/linkDetails.action";
import { toast } from "react-toastify";
import { serverMessage } from "../../../utils/serverMessage";

interface Links {
  links: Object[];
  isLoading: boolean;
}

const initialState: Links = {
  links: [],
  isLoading: false,
};

const linkDetailsSlice = createSlice({
  name: "linkDetails",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(getLinks.pending, (state) => {
        //
      })
      .addCase(getLinks.fulfilled, (state) => {
        //
      })
      .addCase(getLinks.rejected, (state, { payload }) => {
        state.isLoading = false;
        serverMessage(payload, toast);
      });
  },
});

export default linkDetailsSlice.reducer;
