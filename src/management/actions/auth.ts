import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "../services/auth";
import { RegUser } from "../types";

export const register = createAsyncThunk(
  "action/register",
  async (details: any, thunkAPI) => {
    const { regUser } = details;
    try {
      const { data } = await registerUser(regUser);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
