import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCustom,
  deleteShort,
  getCusLinks,
  getLinks,
} from "../../actions/linkDetails.action";
import { toast } from "react-toastify";
import { serverMessage } from "../../../utils/serverMessage";

interface Links {
  shortLinks: {
    _id: string;
    createdAt: string;
    originalUrl: string;
    fullUrl: string;
    shortUrl: string;
  }[];
  cusLinks: {
    _id: string;
    createdAt: string;
    originalUrl: string;
    fullUrl: string;
    shortUrl: string;
  }[];
  isLoading: boolean;
  isDeleteLoading: boolean;
  dropdownIndex: null;
}

const initialState: Links = {
  shortLinks: [],
  cusLinks: [],
  isLoading: false,
  isDeleteLoading: false,
  dropdownIndex: null,
};

const linkDetailsSlice = createSlice({
  name: "linkDetails",
  initialState,
  reducers: {
    dropdownList: (state, { payload }) => {
      state.dropdownIndex = payload;
    },
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
      })

      // Delete short url extrareducers
      .addCase(deleteShort.pending, (state) => {
        state.isDeleteLoading = true;
      })
      .addCase(deleteShort.fulfilled, (state, { payload }) => {
        state.isDeleteLoading = false;
        toast.success(payload.message);
      })
      .addCase(deleteShort.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isDeleteLoading = false;
      })

      // Delete custom url extrareducers
      .addCase(deleteCustom.pending, (state) => {
        state.isDeleteLoading = true;
      })
      .addCase(deleteCustom.fulfilled, (state, { payload }) => {
        state.isDeleteLoading = false;
        toast.success(payload.message);
      })
      .addCase(deleteCustom.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isDeleteLoading = false;
      });
  },
});

export default linkDetailsSlice.reducer;

export const { dropdownList } = linkDetailsSlice.actions;
