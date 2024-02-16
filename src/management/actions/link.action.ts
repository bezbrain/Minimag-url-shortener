import { createAsyncThunk } from "@reduxjs/toolkit";
import { mainLink } from "../services/link";

export const createLink = createAsyncThunk(
  "action/createLink",
  async (originalUrl: string, thunkAPI) => {
    try {
      const { data } = await mainLink({ originalUrl });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
