import { createSlice } from "@reduxjs/toolkit";
import { Link } from "../../types";
import { createLink } from "../../actions/link.action";

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
    urlInput: (state, { payload }) => {
      const { name, value } = payload;

      state.urls = {
        ...state.urls,
        [name]: value,
      };
    },

    urlSelect: (state, { payload }) => {
      state.urls.domainType = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(createLink.pending, (state) => {
        //
      })
      .addCase(createLink.fulfilled, (state, { payload }) => {
        //
      })
      .addCase(createLink.rejected, (state, { payload }) => {
        //
      });
  },
});

export default linkSlice.reducer;

export const { urlInput, urlSelect } = linkSlice.actions;
