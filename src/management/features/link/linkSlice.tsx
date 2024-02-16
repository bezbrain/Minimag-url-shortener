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
        state.isLoading = true;
        state.isDisable = true;
      })
      .addCase(createLink.fulfilled, (state, { payload }) => {
        toast.success(payload.message);
        state.isLoading = false;
        state.isDisable = false;
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

export const { urlInput, urlSelect } = linkSlice.actions;
