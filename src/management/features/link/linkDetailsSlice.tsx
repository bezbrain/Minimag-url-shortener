import { createSlice } from "@reduxjs/toolkit";
import { getCusLinks, getLinks } from "../../actions/linkDetails.action";
import { toast } from "react-toastify";
import { serverMessage } from "../../../utils/serverMessage";

interface Links {
  shortLinks: Object[];
  cusLinks: Object[];
  isLoading: boolean;
}

const initialState: Links = {
  shortLinks: [],
  cusLinks: [],
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
      // ShortUrls extrareducers
      .addCase(getLinks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.shortLinks = payload.links;
      })
      .addCase(getLinks.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        serverMessage(payload, toast);
      })

      // CustomUrls extrareducers
      .addCase(getCusLinks.pending, (state) => {
        //
      })
      .addCase(getCusLinks.fulfilled, (state) => {
        //
      })
      .addCase(getCusLinks.rejected, (state) => {
        //
      });
  },
});

export default linkDetailsSlice.reducer;
