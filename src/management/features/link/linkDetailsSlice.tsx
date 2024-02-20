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
        state.isLoading = true;
      })
      .addCase(getLinks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const newShortUrlArr = payload.links.map((each) => {
          const { createdAt, fullUrl, originalUrl, shortUrl } = each;
          return {
            shortCreatedAt: createdAt,
            shortFullUrl: fullUrl,
            shortOriginalUrl: originalUrl,
            shortShortUrl: shortUrl,
          };
        });
        const newCustomUrlArr = payload.cusLinks.map((each) => {
          const { createdAt, fullUrl, originalUrl, shortUrl } = each;
          return {
            customCreatedAt: createdAt,
            customFullUrl: fullUrl,
            customOriginalUrl: originalUrl,
            customShortUrl: shortUrl,
          };
        });

        state.links = [...newShortUrlArr, ...newCustomUrlArr];
        // console.log(state.links);
      })
      .addCase(getLinks.rejected, (state, { payload }: any) => {
        state.isLoading = false;
        serverMessage(payload, toast);
      });
  },
});

export default linkDetailsSlice.reducer;
