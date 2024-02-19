import { createSlice } from "@reduxjs/toolkit";
import { Link } from "../../types";
import { createCusLink, createLink } from "../../actions/link.action";
import { toast } from "react-toastify";
import { serverMessage } from "../../../utils/serverMessage";

const initialState: Link = {
  urls: {
    originalUrl: "",
    fullShortUrl: "",
    domainType: "",
    shortUrl: "",
  },
  isLoading: false,
  isDisable: false,
  // isCustomize: false,
};

const linkSlice = createSlice({
  name: "link",
  initialState,
  reducers: {
    originalUrlInput: (state, { payload }) => {
      state.urls.originalUrl = payload;
    },

    urlSelect: (state, { payload }) => {
      state.urls.domainType = payload;
      state.urls.fullShortUrl = "";
    },

    shortUrlInput: (state, { payload }) => {
      if (state.urls.domainType === "Custom Domain") {
        state.urls.fullShortUrl = payload;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // Extrareducer for shortening link
      .addCase(createLink.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(createLink.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
        state.urls.fullShortUrl = payload.url.fullUrl;
        state.urls.shortUrl = payload.url.shortUrl;
        state.urls.originalUrl = "";
        state.urls.domainType = "";
      })
      .addCase(createLink.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isDisable = false;
        serverMessage(payload, toast);
      })

      // Extrareducer for customizing link
      .addCase(createCusLink.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(createCusLink.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
        state.urls.fullShortUrl = payload.cusUrl.fullUrl;
        state.urls.shortUrl = payload.cusUrl.shortUrl;
        state.urls.originalUrl = "";
        state.urls.domainType = "";
      })
      .addCase(createCusLink.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        state.isDisable = false;
        serverMessage(payload, toast);
      });
  },
});

export default linkSlice.reducer;

export const { originalUrlInput, urlSelect, shortUrlInput } = linkSlice.actions;
