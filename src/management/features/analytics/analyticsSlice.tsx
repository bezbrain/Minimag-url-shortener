import { createSlice } from "@reduxjs/toolkit";
import { allAnalytics, allCusAnalytics } from "../../actions/analytics.action";
import { serverMessage } from "../../../utils/serverMessage";
import { toast } from "react-toastify";

interface Analytics {
  analyze: {
    totalUsers: string;
    screenPageViews: string;
    userEngagement: string;
    shortUrlVisited: string;
    customUrlVisited: string;
  };
  isLoading: boolean;
}

const initialState: Analytics = {
  analyze: {
    totalUsers: "",
    screenPageViews: "",
    userEngagement: "",
    shortUrlVisited: "",
    customUrlVisited: "",
  },
  isLoading: false,
};

const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    //
  },

  extraReducers: (builder) => {
    builder
      .addCase(allAnalytics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allAnalytics.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        // console.log(payload.urlAnalyticsData);
        state.analyze = payload.urlAnalyticsData;
      })
      .addCase(allAnalytics.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isLoading = false;
      })
      // Custom get analytics extrareducer
      .addCase(allCusAnalytics.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allCusAnalytics.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // console.log(payload.urlAnalyticsData);
        state.analyze = {
          ...state.analyze,
          ...payload.urlAnalyticsData,
        };
      })
      .addCase(allCusAnalytics.rejected, (state, { payload }: any) => {
        serverMessage(payload, toast);
        state.isLoading = false;
      });
  },
});

export default analyticsSlice.reducer;

// export const {} = analyticsSlice.actions;
