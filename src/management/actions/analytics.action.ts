import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAnalytics, getCusAnalytics } from "../services/analytics";

export const allAnalytics = createAsyncThunk(
  "action/allAnalytics",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAnalytics();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const allCusAnalytics = createAsyncThunk(
  "action/allCusAnalytics",
  async (_, thunkAPI) => {
    try {
      const { data } = await getCusAnalytics();
      //   console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
