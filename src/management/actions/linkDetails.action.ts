import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUrl } from "../services/linkDetails";

export const getLinks = createAsyncThunk(
  "action/getLinks",
  async (_, thunkAPI) => {
    try {
      const { data } = await getAllUrl();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
