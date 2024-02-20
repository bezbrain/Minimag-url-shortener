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
        serverMessage(payload, toast);
        state.isLoading = false;
      })

      // CustomUrls extrareducers
      .addCase(getCusLinks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCusLinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cusLinks = payload.cusLinks;
      })
      .addCase(getCusLinks.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isLoading = false;
      });
  },
});

export default linkDetailsSlice.reducer;