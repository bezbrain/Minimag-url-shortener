import { createSlice } from "@reduxjs/toolkit";
import { Link } from "../../types";
import { createLink } from "../../actions/link.action";
import { toast } from "react-toastify";

const initialState: Link = {
  urls: {
    originalUrl: "",
    fullShortUrl: "",
    domainType: "",
  },
  isLoading: false,
  isDisable: false,
  isCustomize: false,
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
    },

    shortUrlInput: (state, { payload }) => {
      if (state.urls.domainType === "Custom Domain") {
        state.urls.fullShortUrl = payload;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createLink.pending, (state) => {
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(createLink.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
        state.urls.fullShortUrl = payload.url.fullUrl;
        state.urls.originalUrl = "";
        state.urls.domainType = "";
      })
      .addCase(createLink.rejected, (state, { payload }: any) => {
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

export default linkSlice.reducer;

export const { originalUrlInput, urlSelect, shortUrlInput } = linkSlice.actions;
